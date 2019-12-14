#!/bin/bash
if [ -z $DATABASE_URL ]
then
    yarn run generate:photon
else
    yarn run outgen:photon
fi