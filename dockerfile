# Use the official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /homegpt/

# Copy package.json and package-lock.json (if available) to the container
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
