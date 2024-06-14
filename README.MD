# README #

## Project Management Web App - Repo

### What is this repository for? ###

This application is built using Next.js, a powerful React framework for building modern web applications. Our app aims to streamline project management tasks by providing a platform where users can create projects, add notes to projects, and upload files associated with each project.

### version: 1.0.1

### How do I get set up? ###

1. Clone from repo 
2. Set up docker

### Set up the repository

# Installing Docker

    sudo yum update -y
    sudo yum install -y docker

## Start docker

    sudo systemctl start docker

## Add ec2-user to Docker group

    sudo usermod -a -G docker ec2-user

# Installing Docker-Compose

    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

## Set permissions

    sudo chmod +x /usr/local/bin/docker-compose


## Run the app

### Change to scripts directory
    cd ./scripts

### Run script
    ./start-setup.sh

