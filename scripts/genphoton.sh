#!/bin/bash
if [ -z $DATABASE_URL ]
then
    yarn run generate:photon
else
    yarn prisma2 lift save --name "@heroku"
    yarn prisma2 lift up
    yarn run outgen:photon
fi