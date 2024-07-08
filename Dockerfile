FROM node:18
RUN mkdir /api
WORKDIR /api
ADD ./package.json ./
ADD ./yarn.lock ./
RUN yarn install
COPY . /api
CMD ["yarn", "serve"]
