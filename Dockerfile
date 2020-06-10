FROM node:latest AS node

WORKDIR /app

COPY . .

RUN npm install 
RUN npm run build --prod

FROM nginx:alpine

## Copy our default nginx config
COPY default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=node app/dist/angular-app  /usr/share/nginx/html/


