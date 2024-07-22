#!/bin/bash

# Pull the latest image
docker pull dturcotte/ci-cd-demo:latest

# Stop and remove any running container with the name "my-running-container"
docker stop my-running-container || true
docker rm my-running-container || true

# Run a new container with the name "my-running-container"
docker run --platform linux/amd64 -d --name my-running-container -p 8081:8081 dturcotte/ci-cd-demo:latest
