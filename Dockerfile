# Use the official Node.js image as the base image
FROM node:16-alpine3.14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files into the image
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the app's files into the image
COPY . .

# Build the app
RUN yarn run build

# Expose port 3000
EXPOSE 5000

# Set the startup command
CMD ["yarn", "run" , "start"]
