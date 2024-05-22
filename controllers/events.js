const express = require('express')

const { Club } = require('../models');



const create = async(req, res) => {
    console.log("creating")
  try {
    const { id } = req.params;
    const { topic, date, description } = req.body;

    const club = await Club.findById(id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    const newEvent = {
      topic,
      date,
      description,
    };

    club.events.push(newEvent);
    await club.save();

    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
}

const index = async (req, res) => {
    try {
      const { id } = req.params;
  
      const club = await Club.findById(id);
      if (!club) return res.status(404).json({ message: "Club not found" });
  
      res.status(200).json(club.events);
    } catch (error) {
      res.status(500).json({ message: "Error fetching events", error });
    }
  }

const deleteEvent = async (req, res) => {
  try {
    const { id, eventId } = req.params;

    const club = await Club.findById(id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    const eventIndex = club.events.findIndex(event => event.id === eventId);
    if (eventIndex === -1) return res.status(404).json({ message: "Event not found" });

    club.events.splice(eventIndex, 1);
    await club.save();

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
}

module.exports = {
    create,
    index,
    delete: deleteEvent
  };