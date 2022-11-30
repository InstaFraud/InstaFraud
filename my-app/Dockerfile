FROM node:18.12.1
WORKDIR /app
COPY . /app
# RUN apk add g++ make py3-pip
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
