FROM node:16-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache bash

COPY ./dist ./dist

RUN yarn global add npm
RUN yarn global add pm2
RUN pm2 install pm2-logrotate

CMD ["./docker/api/start.sh"]


