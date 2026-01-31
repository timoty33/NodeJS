const events = new Map();

export class Event {
	constructor(key, event, time) {
		this.event = {
			event,
			time,
		};
		this.key = key;
	}

	static getEvents() {
		const allEvents = [];

		events.forEach((value, key) => {
			allEvents.push({
				value,
				key,
			});
		});

		return allEvents;
	}

	static getEventByEvent(name) {
		const eventsByEvent = [];

		events.forEach((value, key) => {
			if (name === value.event) {
				eventsByEvent.push({
					value,
					key,
				});
			}
		});

		return eventsByEvent;
	}

	static getEventByKey(key) {
		return events.get(key);
	}

	exists() {
		return events.has(this.key);
	}

	set() {
		events.set(this.key, this.event);
	}
}
