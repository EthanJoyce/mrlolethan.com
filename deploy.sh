#!/bin/bash

# Enable extglob
shopt -s extglob

# Only allow the super-user to run the script
if [ "$(id -u)" != "0" ]; then
    echo "You must be root to do this."
    exit 1
fi

# Backup the old data
if [ -d /var/www/public ]; then
    tar -czf /var/www/backups/public.old-`date +%s`.tar.gz /var/www/public
    rm -rf /var/www/public
fi

# Deploy the new stuff!
mkdir -p /var/www/
cp -r public/ /var/www/
cp .htaccess /var/www/public
