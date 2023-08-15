FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

USER node

CMD ["npm", "start"]
