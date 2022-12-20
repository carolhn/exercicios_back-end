FROM node:14-alpine

WORKDIR /usr/node_app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD npm run dev

#1° passo: docker build -t node_app .
#2° passo: docker run node_app -p 3001:3001 node_app