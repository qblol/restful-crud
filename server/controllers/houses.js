const express = require('express');
const House = require('../models/house');

module.exports = {
  getHouses: function(req,res){
    House.find().sort('-date')
    .then(function(data){
      res.json(data)
    })
  },
  getHouse: function(req,res){
    House.findOne({_id:req.params.id})
    .then(function(data){
      res.json(data)
    })
  },
  createHouse: function(req,res){
    let newHouse = new House({
      title: req.body.title,
      price: req.body.price,
      address: req.body.address,
      description: req.body.description,
      photo: req.body.photo,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      sold: false
    })
    newHouse.save()
    .then(function(data){
      res.json(data)
    })
  },
  editHouse: function(req,res){
    House.findOneAndUpdate({_id:req.params.id},{
      title: req.body.title,
      price: req.body.price,
      address: req.body.address,
      description: req.body.description,
      photo: req.body.photo,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      sold: false
    },{new: true})
    .then(function(data){
      res.json(data)
    })
  },
  soldHouse: function(req,res){
    House.findOneAndUpdate({_id:req.params.id},{
      sold: true
    },{new: true})
    .then(function(data){
      res.json(data)
    })
  },
  deleteHouse: function(req,res){
    House.findOneAndRemove({_id: req.params.id})
    .then(function(data){
      res.send('House Deleted')
    })
  }
}
