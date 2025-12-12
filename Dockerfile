
# Use official Node.js LTS image
FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --production
COPY . .
# Expose port
EXPOSE 3000
CMD ["node", "src/app.js"]
