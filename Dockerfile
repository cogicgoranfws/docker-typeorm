FROM node:14
COPY . /usr/test
WORKDIR /usr/test
RUN npm install
RUN npm install typescript@4.7.4 -g
CMD ["npm", "run start"]