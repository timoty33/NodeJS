import fs from 'node:fs';
import path from 'node:path';

const dataPath = path.resolve('./data.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');

const data = JSON.parse(rawData);

// converte objeto -> Map
export const events = new Map(Object.entries(data));

export class Event {
  constructor(key, event, time) {
    this.key = String(key); // JSON só aceita string como chave
    this.event = {
      event,
      time
    };
  }

  static getEvents() {
    return [...events.entries()].map(([key, value]) => ({
      key,
      value
    }));
  }

  static getEventsByEvent(name) {
    return [...events.entries()]
      .filter(([, value]) => value.event === name)
      .map(([key, value]) => ({ key, value }));
  }

  static getEventByKey(key) {
    return events.get(String(key));
  }

  static saveEvents() {
    // Map → Object
    const obj = Object.fromEntries(events);

    fs.writeFileSync(dataPath, JSON.stringify(obj, null, 2), 'utf-8');
  }

  exists() {
    return events.has(this.key);
  }

  set() {
    events.set(this.key, this.event);
  }
}
