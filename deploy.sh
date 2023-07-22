#!/bin/bash

rsync -avz --exclude '.DS_Store' dist/ ec2-user@lightsail:/var/www/vhosts/mcarter.consulting/public/
