import { useEffect, useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import WeekView from "./components/WeekView";
import './index.css';

export default function App() {
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem("events")) || [];
  });

  const [editingEvent, setEditingEvent] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  function handleSave(eventData) {
    if (editingEvent) {
      setEvents(events.map(ev => (ev.id === eventData.id ? eventData : ev)));
      setEditingEvent(null);
    } else {
      setEvents([...events, eventData]);
    }
  }

  return (
    <div className="app-container">
      <h1>📅 Calendar Management System</h1>

      <EventForm
        events={events}
        editingEvent={editingEvent}
        onSave={handleSave}
        onCancel={() => setEditingEvent(null)}
      />

      <div className="week-nav">
        <button onClick={() => setDate(new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000))}>Prev Week</button>
        <button onClick={() => setDate(new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000))}>Next Week</button>
      </div>

      <WeekView events={events} date={date} />

      <EventList
        events={events}
        onEdit={setEditingEvent}
        onDelete={id => setEvents(events.filter(e => e.id !== id))}
      />
    </div>
  );
}
