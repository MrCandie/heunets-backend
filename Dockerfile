# ------------------------------
# BUILD STAGE
# ------------------------------
FROM node:20 AS build

WORKDIR /app

# Ensure dev dependencies (like Jest) are installed
ENV NODE_ENV=development

# Copy package files and install dependencies (including dev)
COPY package*.json ./
RUN npm install --include=dev

# Copy all source files
COPY . .

# Run linting and tests
RUN npm run lint && npm test

# ------------------------------
# PRODUCTION STAGE
# ------------------------------
FROM node:20 AS production

WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy only package files first and install only prod deps
COPY package*.json ./
RUN npm install --omit=dev

# Copy built files from build stage
COPY --from=build /app /app

EXPOSE 4000

CMD ["npm", "start"]
