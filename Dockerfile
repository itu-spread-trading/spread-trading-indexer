FROM node:18-alpine as development

# Optional NPM automation (auth) token build argument
# ARG NPM_TOKEN

# Optionally authenticate NPM registry
# RUN npm set //registry.npmjs.org/:_authToken ${NPM_TOKEN}

WORKDIR /app

# Copy configuration files
COPY tsconfig*.json ./
COPY package*.json ./

RUN npm install

# Copy application sources (.ts, .tsx, js)
COPY src/ src/

# Build application (produces dist/ folder)
RUN npm run build

# Runtime (production) layer
FROM node:18-alpine as production

# Optional NPM automation (auth) token build argument
# ARG NPM_TOKEN

# Optionally authenticate NPM registry
# RUN npm set //registry.npmjs.org/:_authToken ${NPM_TOKEN}

WORKDIR /app

# Copy dependencies files
COPY package*.json ./

# Install runtime dependecies (without dev/test dependecies)
RUN npm install

# Copy production build
COPY --from=development /app/dist/ ./dist/

# Expose application port
EXPOSE 8000

# Start application
CMD [ "node", "dist/main.js" ]