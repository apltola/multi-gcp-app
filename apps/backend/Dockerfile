FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV PORT=5555

EXPOSE 5555

CMD ["node", "build/index.js"]
