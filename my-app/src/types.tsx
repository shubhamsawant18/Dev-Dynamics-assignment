// src/types.ts
export interface Activity {
    time: string;
    activity: string;
  }
  
  export interface DataItem {
    _id: string;
    day: string;
    activities: Activity[];
    week: any[];
  }
  