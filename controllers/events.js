const express = require('express')

const { Club } = require('../models');



const create = async(req, res) => {
  try {
    const { clubId } = req.params;
    const { topic, date, description } = req.body;

    const club = await Club.findById(clubId);
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

async function deleteEvent(req, res) {
  try {
    const { clubId, eventId } = req.params;

    const club = await Club.findById(clubId);
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
    delete: deleteEvent
  };