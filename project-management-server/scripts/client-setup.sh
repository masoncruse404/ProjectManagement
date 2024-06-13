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
  "'ClientA', 'clienta@email.com'"
  "'ClientB', 'clientb@email.com'"
  "'ClientC', 'clientc@email.com'"
  "'ClientD', 'clientd@email.com'"
  "'ClientE', 'cliente@email.com'"
  "'ClientF', 'clientf@email.com'"
  "'ClientG', 'clientg@email.com'"
  # Add more rows as needed
)

# Loop through each row and execute the SQL command
for row in "${ROWS[@]}"; do
  SQL="INSERT INTO client_entity (\"Client_Name\", \"Client_Contact_Email\") VALUES ($row);"
  psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -c "$SQL"
done

# Unset PGPASSWORD
unset PGPASSWORD
