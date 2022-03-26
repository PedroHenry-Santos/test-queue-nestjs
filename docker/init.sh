#!/usr/bin/env bash
if [ "$NODE_ENV" == "production" ];
then
  echo "Unzipping application..."
  tar -xzvf dist.tar.gz
fi

echo "Starting up Docker containers..."
if [ "$NODE_ENV" == "development" ];
then
  echo "Start up Docker in Development Mode..."
  docker-compose up --build -V --remove-orphans
else
  echo "Start up Docker in Production Mode..."
  docker-compose -f docker-compose.prod.yml up --build -V --remove-orphans -d
fi
  