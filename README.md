# React + Vite

Overview
This is a minimal Calendar Management System built with React that allows users to create, edit, delete, and view events.
It includes conflict detection, weekly view, multi-day events, and scrollable event lists.

The focus of this project is on correctness, clarity, and simple UI rather than full production features.
Features

Event Management
Create events with title, start, and end date/time
Edit and update existing events

Delete events
Persist events in localStorage

Conflict Detection
Prevent overlapping events during creation or update
Shows an error message if a new or edited event conflicts with existing events

Calendar Views
Weekly view displaying events that fall within the selected week
Multi-day events correctly displayed across weeks

Scrollable list of events in both Week View and All Events
Highlight overlapping events visually with a red background and ⚠ warning

Navigation
Navigate previous and next weeks in the Week View

Project Strucutre
calendar-app/
│
├─ src/
│  ├─ components/
│  │  ├─ EventForm.jsx
│  │  ├─ EventList.jsx
│  │  └─ WeekView.jsx
│  ├─ utils/
│  │  ├─ conflict.js
│  │  └─ time.js
│  ├─ App.jsx
│  └─ index.css
│
├─ package.json
└─ README.md

EventForm.jsx – Add/Edit event form with validation

EventList.jsx – Scrollable event list with edit/delete buttons

WeekView.jsx – Weekly view of events with overlap highlighting

conflict.js – Utility to check for event conflicts

time.js – Week start and end calculation

App.jsx – Main application container

index.css – Basic styling


Key Design Decisions

React Functional Components with useState and useEffect for state management

LocalStorage for persistence (simple and sufficient for a minimal prototype)

Date handling with native Date objects and date-fns for week calculations

Conflict detection considers multi-day events and ignores the event being edited

Scrollable containers for better UX with large number of events
