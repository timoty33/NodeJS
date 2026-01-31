import {
	createEvent,
	getEventByEvent,
	getEventByKey,
	getEvents,
} from "./eventBus.js";

const click = "timoty:click";

console.log(createEvent(click));

// ===---===---===

const events = getEvents();

console.log(events);

// ===---===---===

const timotyClick = getEventByEvent();

console.log(timotyClick);

// ===---===---===

const timotyClickByKey = getEventByKey;

console.log(timotyClickByKey);
