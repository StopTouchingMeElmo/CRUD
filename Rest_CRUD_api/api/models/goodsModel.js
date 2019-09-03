'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var TaskSchema = new Schema({
  name: {
    type: String
    /*  required: 'This field is required'*/
  },
  price: {
    type: Number
    /*  required: 'This field is required' */
  },
  brand: {
    type: String
    /* required: 'This field is required' */
  },
  /* img: { 
      data: Buffer, 
      contentType: String 
  }, */
  created_date: {
    type: Date,
    default: Date.now
  },
  desc: {
    type: String
  }
  /*  type: {
     type: [{
       type: String,
       enum: ['Коты', 'Собаки', 'Птицы']
     }],
     default: ['clothing']
   } */
});

module.exports = mongoose.model('Animals', TaskSchema);