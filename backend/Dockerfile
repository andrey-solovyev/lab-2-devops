FROM node:14.16.1
ENV MY_NAME="Backend node JS"
ENV START_COMMAND "npm run start"

WORKDIR /usr/src/app


RUN addgroup js-develop
RUN adduser --ingroup js-develop --disabled-password --no-create-home js-develop

COPY package*.json ./
RUN npm install
COPY . .

RUN chown -R js-develop:js-develop /usr/src/app
USER js-develop

CMD $START_COMMAND
