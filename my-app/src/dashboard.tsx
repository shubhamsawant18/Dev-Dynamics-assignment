import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { DataItem, Activity } from './types';
import './dashboard.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const DataAnalysis: React.FC = () => {
  const [dayData, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    axios.get('https://dev-dynamic.onrender.com/api/data')
      .then(response => {
        console.log(response.data.data); // Log the response to check the data structure
        let data: DataItem[] = response.data.data;
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const processData = (): { [key: string]: number } => {
    const activitiesCount: { [key: string]: number } = {};

    dayData.forEach(item => {
      item.activities.forEach((activity: Activity) => {
        activitiesCount[activity.activity] = (activitiesCount[activity.activity] || 0) + 1;
      });
    });

    return activitiesCount;
  };

  const chartData = processData();
  const chartLabels = Object.keys(chartData);
  const chartValues = Object.values(chartData);

  const chartJSData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Activity Count',
        data: chartValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const pieChartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Activity Count',
        data: chartValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  const doughnutChartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Activity Count',
        data: chartValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  return (
  <div className='container'>
    <div className="chart-container">
    <div className="chart">
  <h2 className="chart-title" style={{ marginBottom: '10px' }}>Pie Chart</h2>
  <Pie data={pieChartData} />
</div>
<div className="chart">
  <h2 className="chart-title" style={{ marginBottom: '10px' }}>Ring Chart</h2>
  <Doughnut data={doughnutChartData} />
</div>
<div className="chart bar-chart">
  <h2 className="chart-title" style={{ marginBottom: '10px' }}>Bar Chart</h2>
  <Bar data={chartJSData} />
</div>


    </div>
  </div>
);

  
};

export default DataAnalysis;
