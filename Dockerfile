FROM node:16.13.1-alpine as builde
RUN mkdir /api
WORKDIR /api
ADD ./package.json ./
ADD ./yarn.lock ./
RUN yarn install
COPY . /api
CMD ["yarn", "start"]
