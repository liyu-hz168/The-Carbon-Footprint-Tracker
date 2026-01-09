# ./backend/db-service/Dockerfile
FROM postgres:16

# Copy migrations directly into the image
COPY ./migrations /docker-entrypoint-initdb.d

