CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    file_path TEXT,
    status VARCHAR(20),
    result JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
