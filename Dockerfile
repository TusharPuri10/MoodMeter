# ---- Base Node ----
FROM node:20.10 AS base
WORKDIR /frontend

# ---- Frontend ----
COPY frontend/package*.json ./
RUN npm install
COPY ./frontend .
RUN npm start
EXPOSE 3000

# ---- Backend Python ----
FROM python:3.10-slim-buster AS backend
WORKDIR /backend

# Install necessary packages for creating a virtual environment
RUN apt-get update && apt-get install -y python3-venv

# Copy only the requirements.txt file to leverage Docker cache
COPY ./backend/requirements.txt .
RUN python3 -m venv venv
# Activate the virtual environment and install dependencies
RUN source venv/bin/activate && pip install -r requirements.txt

# Copy the rest of the application code
COPY ./backend .

# Expose the ports for both frontend and backend
EXPOSE 5000

# Run Gunicorn with your Flask app and start the frontend
CMD ["python","main.py"]
