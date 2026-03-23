FROM node:20-alpine AS builder
WORKDIR /build
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /build .
EXPOSE 3000
CMD ["node", "server.js"]