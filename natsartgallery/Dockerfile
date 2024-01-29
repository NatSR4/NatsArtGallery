FROM node:20.10.0

COPY package.json /app/

WORKDIR /app

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]