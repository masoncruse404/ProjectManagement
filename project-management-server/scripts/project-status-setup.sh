#!/bin/bash

# Database credentials
DB_HOST="postgres-project-management.c9660g6cebmn.us-east-1.rds.amazonaws.com"
DB_PORT="5432"
DB_NAME="postgres"
DB_USER="postgres"
DB_PASSWORD="postgres"

# Export PGPASSWORD so psql can use it
export PGPASSWORD=$DB_PASSWORD

# Array of data to be inserted (each entry is a tuple of values)
ROWS=(
  "'Quoted', 'Description 1'"
  "'In Progress', 'Description 2'"
  "'ERP Connection', 'Description 3'"
  "'Completed', 'Description 1'"
  "'Billed', 'Description 2'"
  "'Closed', 'Description 3'"
  "'Archived', 'Description 3'"
  # Add more rows as needed
)

# Loop through each row and execute the SQL command
for row in "${ROWS[@]}"; do
  SQL="INSERT INTO project_status_entity (\"Project_Status\", \"Project_Status_Desc\") VALUES ($row);"
  psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -c "$SQL"
done

# Unset PGPASSWORD
unset PGPASSWORD
