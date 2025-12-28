export default function EventList({ events, onDelete, onEdit }) {
  return (
    <div>
      <h3>All Events</h3>
      {events.length === 0 && <p>No events</p>}

      <div className="event-list-container">
        {events.map(ev => (
          <div key={ev.id} className="event-item">
            <div>
              <strong>{ev.title}</strong>
              <p>{new Date(ev.start).toLocaleString()} → {new Date(ev.end).toLocaleString()}</p>
            </div>
            <div>
              <button onClick={() => onEdit(ev)}>Edit</button>
              <button onClick={() => onDelete(ev.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
