FROM node:16.15.1

WORKDIR /opt/nodeapp

COPY . .

RUN npm install --quiet

EXPOSE 3000

CMD ["node","/opt/nodeapp/src/index.js"]