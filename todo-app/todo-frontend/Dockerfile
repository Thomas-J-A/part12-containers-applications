FROM node:16 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# create-react-app hangs while awaiting changes without CI env set
RUN CI=true npm run test

ENV REACT_APP_BACKEND_URL=http://localhost:3000

RUN npm run build

###########

FROM nginx:1.20-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html
