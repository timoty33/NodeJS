import { Event } from './events.js';

export function createEvent(event) {
  const time = Date.now();

  const data = new Event(time, event, time);

  if (data.exists()) {
    throw new Error('Event already exists');
  }

  data.set();

  return data;
}

export function getEventByEvent(name) {
  return Event.getEventsByEvent(name);
}

export function getEventByKey(key) {
  return Event.getEventByKey(key);
}

export function getEvents() {
  return Event.getEvents();
}

export function saveEvents() {
  Event.saveEvents();
}
