#!/bin/sh
cd ..
cd project-management-server
echo "Starting server..."
sudo docker compose up -d
cd ..
cd project-management-client
echo "Starting client..."
sudo docker compose up -d
