FROM node:latest

WORKDIR /usr/src/app

COPY config/package*.json ./

RUN npm install

COPY src/ .

EXPOSE 8080

CMD [ "node", "test.js" ]