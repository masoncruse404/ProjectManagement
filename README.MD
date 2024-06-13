# README #

## Project Management Web App - Repo

### What is this repository for? ###

Welcome to our Project Management App. This application is built using Next.js, a powerful React framework for building modern web applications. Our app aims to streamline project management tasks by providing a platform where users can create projects, add notes to projects, and upload files associated with each project.

### version: 1.0.1

### How do I get set up? ###

1. Clone from repo 
2. Set up docker

### Set up the repository

## Install core

    sudo dnf -y install dnf-plugins-core

## Add Repo

    sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo

## Install docker engine

     sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

## Start docker

    sudo systemctl start docker

## Run the app

### Change to scripts directory
    cd ./scripts

### Run script
    ./start-setup.sh

