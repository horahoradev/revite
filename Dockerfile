FROM node:16-buster AS builder

WORKDIR /usr/src/app
COPY . .
COPY .env.build .env

RUN yarn && \
    yarn build:deps

CMD [ "yarn", "dev", "--host", "0.0.0.0" ]
