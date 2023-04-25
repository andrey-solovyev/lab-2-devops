FROM node:14.16.1
ENV MY_NAME="Backend node JS"
ENV START_COMMAND "npm run start"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

CMD $START_COMMAND
