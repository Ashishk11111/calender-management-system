export function hasConflict(events, newEvent, ignoreId = null) {
  return events.some(ev => {
    if (ev.id === ignoreId) return false;

    const evStart = new Date(ev.start);
    const evEnd = new Date(ev.end);
    const newStart = new Date(newEvent.start);
    const newEnd = new Date(newEvent.end);

    return newStart < evEnd && newEnd > evStart;
  });
}
