FROM node:alpine
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN yarn install \ 
    && yarn build
CMD ["yarn", "start:pr"]
