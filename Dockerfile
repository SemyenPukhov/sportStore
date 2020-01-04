FROM node:12.14.0



RUN mkdir -p /usr/src/sportsstore

COPY dist /usr/src/sportsstore/app
COPY authMiddleware.js /usr/src/sportsstore/
COPY data.js /usr/src/sportsstore/
COPY deploy-server.js /usr/src/sportsstore/server.js
COPY deploy-package.json /usr/src/sportsstore/package.json

EXPOSE 3500
EXPOSE 4200

WORKDIR /usr/src/sportsstore

RUN npm install

CMD ["npm", "start"]
