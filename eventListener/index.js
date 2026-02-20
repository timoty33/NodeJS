import { createEvent, getEventByEvent, getEventByKey, getEvents, saveEvents } from './eventBus.js';

try {
  const click = 'timoty:click';

  console.log(createEvent(click));

  // ===---===---===

  const events = getEvents();

  console.log(events);

  // ===---===---===

  const timotyClick = getEventByEvent('timoty:click');

  console.log(timotyClick);

  // ===---===---===

  const timotyClickByKey = getEventByKey('0');

  console.log(timotyClickByKey);
} finally {
  saveEvents();
}
