FROM node:18-alpine

ARG API_URL
ARG PUBLIC_API_URL

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN API_URL=${API_URL} PUBLIC_API_URL=${PUBLIC_API_URL} npm run build

RUN npm prune --production

ENV PORT=8080

EXPOSE 8080

CMD [ "node", "build"]
