import { Event } from "./events.js";

let id = 0;

export function createEvent(event) {
	const time = Date.now();
	id += 1;

	const data = new Event(id, event, time);

	if (data.exists()) {
		throw new Error("Event already exists");
	}

	data.set();

	return data;
}

export function getEventByEvent(name) {
	return Event.getEventByEvent(name);
}

export function getEventByKey(key) {
	return Event.getEventByKey(key);
}

export function getEvents() {
	return Event.getEvents();
}
