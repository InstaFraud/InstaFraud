FROM node:18.12.1
ENV NODE_ENV=development
COPY . /app
WORKDIR /app
COPY package.json .
RUN npm install
EXPOSE 4000
CMD [ "node", "server.js"]