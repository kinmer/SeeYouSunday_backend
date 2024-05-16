const express = require('express')
const {Club, Member} = require('../models')




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
  

  const addMember = async (req, res) => {
    const { id } = req.params;
    const { memberId } = req.body;

    try {
      const club = await Club.findById(id);
      if (!club) {
          return res.status(404).json({ message: 'Club not found' });
      }

      const member = await Member.findById(memberId);
      if (!member) {
          return res.status(404).json({ message: 'Member not found' });
      }
console.log(club)
      if (!club.members.includes(memberId)) {
          club.members.push(memberId);
          await club.save();
      }

      res.status(201).json(member);
  } catch (error) {
    console.log(error);  
    res.status(500).json({ message: 'Server error', error });
  }
}

  module.exports = {
      index,
      create,
      show,
      delete: destroy,
      update, 
      addMember
  }
  

