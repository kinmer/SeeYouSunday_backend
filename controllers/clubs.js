const express = require('express')
const {Club} = require('../models')



const index = async (req,res,next) => {
	try {
    res.json(await Club.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
};

const create =  async (req,res,next) => {
  try {
    res.json(await Club.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};
const show = async (req,res,next) => {
    try {
        res.json(await Club.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);
      }
};

const destroy = async (req,res,next) => {
    try {
      res.json(await Club.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
const update = async (req,res,next) => {
    try {
      res.json(
        await Club.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  module.exports = {
      index,
      create,
      show,
      delete: destroy,
      update
  }
  
