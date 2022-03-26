#!/bin/bash

echo "$NODE_ENV"

if [ "$NODE_ENV" == "production" ];
then
  DIR="/usr/bin/docker-compose"
  if [[ ! -e $DIR ]]; then
    echo "Installing Docker..."
    sudo amazon-linux-extras install docker -y
    sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    sudo service docker start
    sudo usermod -a -G docker ec2-user
    sudo chmod 666 /var/run/docker.sock
    sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
    sudo service docker start
  fi

  sudo yum update -y
fi

chmod +x ./run.sh

./run.sh
