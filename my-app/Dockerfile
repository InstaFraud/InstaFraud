FROM node:18
WORKDIR /app
COPY . /app
RUN apk add g++ make py3-pip
RUN npm install && npm run build
EXPOSE 3000
CMD ["node", "server.js"]
