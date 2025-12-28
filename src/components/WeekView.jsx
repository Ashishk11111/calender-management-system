import { getWeekRange } from "../utils/time";

export default function WeekView({ events, date }) {
  const { start, end } = getWeekRange(date);

  const weekEvents = events.filter(ev => {
    const evStart = new Date(ev.start);
    const evEnd = new Date(ev.end);
    return evStart <= end && evEnd >= start;
  });

  const overlaps = weekEvents.map((ev, idx) => {
    const evStart = new Date(ev.start);
    const evEnd = new Date(ev.end);
    return weekEvents.some((other, oIdx) => {
      if (idx === oIdx) return false;
      const otherStart = new Date(other.start);
      const otherEnd = new Date(other.end);
      return evStart < otherEnd && evEnd > otherStart;
    });
  });

  return (
      <div>
        <h3>Week View</h3>
        <div className="week-view-container">
      {weekEvents.length === 0 && <p>No events</p>}

      {weekEvents.map((ev, idx) => (
        <div key={ev.id} className={`week-event ${overlaps[idx] ? 'overlap' : ''}`}>
          <strong>{ev.title}</strong>
          <p>{new Date(ev.start).toLocaleString()} → {new Date(ev.end).toLocaleString()}</p>
          {overlaps[idx] && <span className="overlap-warning">⚠ Overlaps</span>}
        </div>
      ))}
      </div>
    </div>
  );
}
