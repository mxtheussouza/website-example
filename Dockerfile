FROM node:16.16.0-slim

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN yarn install

EXPOSE 5000

CMD [ "yarn", "start" ]
