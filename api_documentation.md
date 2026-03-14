# API Documentation

## Overview

This system provides APIs for uploading files, tracking processing jobs, and retrieving the results.
The backend processes files asynchronously using a Redis-based queue and worker architecture.

### Base URL

```
http://localhost:5000/api
```

---

# 1. Upload File

### Endpoint

```
POST /upload
```

### Description

Uploads a file to the server and creates a processing job.
The job is added to a Redis queue and processed asynchronously by a worker.

### Request Type

```
multipart/form-data
```

### Request Parameters

| Parameter | Type | Description                        |
| --------- | ---- | ---------------------------------- |
| file      | File | File to be uploaded for processing |

### Example Request

Using Postman or curl:

```
POST http://localhost:5000/api/upload
```

Form Data:

```
file: test.txt
```

### Example Response

```json
{
  "jobId": 1,
  "status": "pending"
}
```

### Response Fields

| Field  | Description                   |
| ------ | ----------------------------- |
| jobId  | Unique identifier for the job |
| status | Initial job status            |

---

# 2. Get Job Status

### Endpoint

```
GET /job/:id
```

### Description

Returns the current status of a job.

### Example Request

```
GET http://localhost:5000/api/job/1
```

### Example Response

```json
{
  "id": 1,
  "status": "processing"
}
```

### Possible Status Values

| Status     | Meaning                              |
| ---------- | ------------------------------------ |
| pending    | Job has been created but not started |
| processing | Worker is processing the file        |
| completed  | Job completed successfully           |
| failed     | Job processing failed                |

---

# 3. Get Job Result

### Endpoint

```
GET /result/:id
```

### Description

Retrieves the processed result of the uploaded file.

### Example Request

```
GET http://localhost:5000/api/result/1
```

### Example Response

```json
{
  "words": 120,
  "paragraphs": 5
}
```

### Response Fields

| Field      | Description                            |
| ---------- | -------------------------------------- |
| words      | Total number of words in the file      |
| paragraphs | Total number of paragraphs in the file |

---

# System Workflow

1. User uploads a file using the `/upload` API.
2. The backend stores the job information in PostgreSQL.
3. The job is added to a Redis queue using BullMQ.
4. A worker process retrieves the job from the queue.
5. The worker processes the file and extracts information.
6. Results are stored in the database.
7. The frontend retrieves the job status and results using APIs.

---

# Error Handling

### Example Error Response

```json
{
  "error": "File upload failed"
}
```

Common errors include:

* Invalid file format
* Missing file parameter
* Job not found
* Worker processing failure

---

# Notes

* All file processing operations are handled asynchronously.
* Redis is used as a queue manager.
* PostgreSQL stores job and result information.
* Workers run independently from the main API server.

---
