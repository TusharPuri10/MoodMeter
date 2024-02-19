# ---- Backend Python ----
FROM python:3.10-slim-buster AS backend
WORKDIR /server

# Install necessary packages for creating virtual environment
RUN apt-get update && apt-get install -y python3-venv

# Copy only the requirements.txt file to leverage Docker cache
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY glove.6B.50d.txt .
COPY app.py .
COPY model.py .


# Create and activate a virtual environment
RUN python3 -m venv env
RUN /bin/bash -c "source env/bin/activate"

# Expose the port that Gunicorn will run on
EXPOSE 5000

# Set environment variables
ENV FLASK_ENV=development

# Run Flask with CMD instead of directly in RUN
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
