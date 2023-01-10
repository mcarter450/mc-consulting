#!/bin/bash

rsync -avz --delete dist/ ec2-user@lightsail:/var/www/vhosts/mcarter.consulting/public/
