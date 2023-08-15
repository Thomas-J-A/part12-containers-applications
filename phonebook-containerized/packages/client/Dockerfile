FROM node:16 AS build

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

ENV VITE_BACKEND_ORIGIN=http://localhost:3000

RUN npm run build

######

FROM nginx:1.20.1-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx.conf
