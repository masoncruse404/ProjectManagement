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
  "'Supplier Connection', 'Description 1'"
  "'Hourly Work', 'Description 2'"
  "'ERP Connection', 'Description 3'"
  "'Accounting Connection', 'Description 1'"
  "'Quoted Work', 'Description 2'"
  "'New Platform Setup', 'Description 3'"
  "'Support Work', 'Description 3'"
  # Add more rows as needed
)

# Loop through each row and execute the SQL command
for row in "${ROWS[@]}"; do
  SQL="INSERT INTO project_type_entity (\"Project_Type\", \"Project_Type_Desc\") VALUES ($row);"
  psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -c "$SQL"
done

# Unset PGPASSWORD
unset PGPASSWORD
