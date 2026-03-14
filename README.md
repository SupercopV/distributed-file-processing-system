# Distributed File Processing System

## Overview

This project is a **full-stack distributed file processing system** that allows users to upload files and process them asynchronously.
The system uses a **queue-based architecture** where uploaded files are added to a Redis queue and processed by worker processes.

The application demonstrates concepts of **asynchronous processing, distributed systems, queue management, and full-stack development**.

---

# Tech Stack

### Frontend

* React
* Framer Motion
* Axios

### Backend

* Node.js
* Express.js

### Queue System

* Redis
* BullMQ

### Database

* PostgreSQL

---

# System Architecture

```id="h7nxkm"
Frontend (React)
      ↓
Backend API (Express)
      ↓
Redis Queue (BullMQ)
      ↓
Worker Process
      ↓
PostgreSQL Database
```

### Workflow

1. User uploads a file from the frontend.
2. Backend API receives the file.
3. A job is created and stored in PostgreSQL.
4. The job is pushed into a Redis queue.
5. A worker process retrieves the job.
6. The worker processes the file and extracts information.
7. Results are stored in the database.
8. Frontend fetches job status and results via API.

---

# Features

* File Upload System
* Asynchronous Job Processing
* Redis-based Queue System
* Worker-based File Processing
* Job Status Tracking
* Result Retrieval
* Animated Frontend UI
* Full Stack Integration

---

# Project Structure

```id="5bnh6d"
file-processing-system

backend/
    controllers/
    routes/
    services/
    workers/
    config/
    uploads/
    server.js

frontend/
    src/
        components/
        data/
        services/

database_schema.sql
api_documentation.md
README.md
```

---

# Database Schema

### Jobs Table

```sql id="8tk56c"
CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    file_path TEXT,
    status VARCHAR(20),
    result JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

| Column     | Description                                 |
| ---------- | ------------------------------------------- |
| id         | Unique job identifier                       |
| file_path  | Path of uploaded file                       |
| status     | Job status (pending, processing, completed) |
| result     | Processed file result                       |
| created_at | Job creation timestamp                      |

---

# API Endpoints

## Upload File

```id="v1v11g"
POST /api/upload
```

Uploads a file and creates a processing job.

Example response:

```json id="cy0c6d"
{
  "jobId": 1,
  "status": "pending"
}
```

---

## Get Job Status

```id="o0etj6"
GET /api/job/:id
```

Returns the current job status.

Example:

```id="c8sq3y"
GET /api/job/1
```

Response:

```json id="x9d81b"
{
  "id": 1,
  "status": "completed"
}
```

---

## Get Job Result

```id="zpm93n"
GET /api/result/:id
```

Returns the processed file results.

Example response:

```json id="yqt9t2"
{
  "words": 120,
  "paragraphs": 5
}
```

---

# Setup Instructions

## Prerequisites

Install the following:

* Node.js
* PostgreSQL
* Redis

---

## Backend Setup

```id="tq7t50"
cd backend
npm install
```

Start backend server:

```id="b9v3au"
node server.js
```

---

## Start Worker Process

```id="vxcbo5"
node workers/worker.js
```

The worker listens to the Redis queue and processes jobs.

---

## Frontend Setup

```id="a4r1by"
cd frontend
npm install
npm run dev
```

Frontend will run at:

```id="1ve23i"
http://localhost:5173
```

---

# Queue System

The project uses **Redis with BullMQ** to implement asynchronous job processing.

### Queue Workflow

```id="0u9dpd"
File Upload
     ↓
Create Job
     ↓
Add Job to Redis Queue
     ↓
Worker Retrieves Job
     ↓
Process File
     ↓
Store Result in Database
```

Benefits of this architecture:

* Non-blocking backend API
* Scalable processing
* Worker-based distributed execution

---

# Frontend Features

* Animated landing page
* Strategy flow visualization
* File upload dashboard
* Job status monitoring
* Result display
* Modern UI animations

---

# Demo Video

The demo video includes:

1. Project overview
2. System architecture explanation
3. Backend API demonstration
4. Queue and worker processing
5. Frontend functionality demonstration

---

# Conclusion

This project demonstrates a **distributed file processing system** using a modern full-stack architecture.
It highlights the use of **asynchronous queues, worker processing, and scalable backend design** while integrating a responsive and animated frontend interface.

---
