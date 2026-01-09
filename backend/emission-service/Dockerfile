# Use official Node.js image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package.json & package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your backend code
COPY . .

# Expose the port your backend listens on
EXPOSE 5003

# Start the backend
CMD ["node", "./src/index.js"]