FROM node:12

ENV MONGODB_URL=mongodb+srv://username:password@host/db_name?retryWrites=true&w=majority

ENV TYPEORM_CACHE=true
ENV TYPEORM_CACHE_ALWAYS_ENABLED=true
ENV TYPEORM_CACHE_DURATION=10000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ormconfig.js ./

COPY dist/ dist/

EXPOSE 3000
CMD [ "node", "dist/main.js" ]
