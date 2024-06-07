const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  time: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  }
});

const daySchema = new mongoose.Schema({
  day: {
    type: String,
    required: true
  },
  activities: [activitySchema]
});

const weekSchema = new mongoose.Schema({
  week: [daySchema]
});

const Week = mongoose.model('Week', weekSchema);

module.exports = Week;
