FROM node:18-alpine

ARG API_URL
ARG PUBLIC_API_URL
ARG CFN_ENV
ARG CFN_CDA_TOKEN

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN API_URL=${API_URL} PUBLIC_API_URL=${PUBLIC_API_URL} CFN_ENV=${CFN_ENV} CFN_CDA_TOKEN=${CFN_CDA_TOKEN} npm run build

RUN npm prune --production

ENV PORT=8080

EXPOSE 8080

CMD [ "node", "build"]
