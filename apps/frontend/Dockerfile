FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production

ENV PORT=8080

EXPOSE 8080

CMD ["node", "build"]
