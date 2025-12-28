import { useEffect, useState } from "react";
import { hasConflict } from "../utils/conflict";

export default function EventForm({ events, onSave, editingEvent, onCancel }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingEvent) {
      setTitle(editingEvent.title);
      setStart(editingEvent.start.slice(0,16));
      setEnd(editingEvent.end.slice(0,16));
    }
  }, [editingEvent]);

  function handleSubmit(e) {
    e.preventDefault();

    if (new Date(start) >= new Date(end)) {
      setError("End date & time must be later than start date & time");
      return;
    }

    const eventData = {
      id: editingEvent ? editingEvent.id : Date.now().toString(),
      title,
      start,
      end,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    if (hasConflict(events, eventData, editingEvent?.id)) {
      setError("Time slot conflicts with another event");
      return;
    }

    onSave(eventData);
    setTitle("");
    setStart("");
    setEnd("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h3>{editingEvent ? "Edit Event" : "Create Event"}</h3>

      {error && <p style={{color: "red"}}>{error}</p>}

      <input
        placeholder="Event title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <div>

        <input type="datetime-local" value={start} onChange={e => setStart(e.target.value)} required />
        <input type="datetime-local" value={end} onChange={e => setEnd(e.target.value)} required />
      </div>

      <div style={{display:"flex", gap:"8px"}}>
        <button type="submit">{editingEvent ? "Update" : "Add"}</button>
        {editingEvent && <button type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}
