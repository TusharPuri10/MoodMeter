# ---- Base Node ----
FROM node:20.10 AS base
WORKDIR /app

# ---- Frontend ----
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]