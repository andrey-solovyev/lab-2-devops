FROM node:14.16.1
ENV MY_NAME="Frontend node JS"
ENV FRONTEND_START_COMMAND "npm run build"

WORKDIR /usr/src/app/backend
COPY /backend/package*.json ./
RUN npm install
COPY backend/. .

WORKDIR /usr/src/app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY backend/. .

CMD $FRONTEND_START_COMMAND
