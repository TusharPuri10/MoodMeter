# ---- Backend Python ----
FROM python:3.10-slim-buster AS backend
WORKDIR /backend

# Install necessary packages for creating virtual environment
RUN apt-get update && apt-get install -y python3-venv

# Copy only the requirements.txt file to leverage Docker cache
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

# Create and activate a virtual environment
RUN python3 -m venv venv
RUN /bin/bash -c "source venv/bin/activate"

# Expose the port that Gunicorn will run on
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=main.py
ENV FLASK_ENV=development

# Run Flask with CMD instead of directly in RUN
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
