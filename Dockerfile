FROM node:22-alpine as base
WORKDIR /nextapp
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=base /nextapp/.next .
COPY --from=base /nextapp/package.json .
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]