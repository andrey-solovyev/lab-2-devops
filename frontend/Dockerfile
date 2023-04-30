FROM node:14.16.1
ENV MY_NAME="Frontend node JS"
ENV FRONTEND_START_COMMAND "npm run build"

RUN addgroup js-develop
RUN adduser --ingroup js-develop --disabled-password --no-create-home js-develop

WORKDIR /usr/src/app/backend
COPY ./backend/package*.json ./
RUN npm install
COPY backend/ .

WORKDIR /usr/src/app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY frontend/. .

RUN chown -R js-develop:js-develop /usr/src/app/frontend
USER js-develop

CMD $FRONTEND_START_COMMAND
