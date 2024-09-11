# Use the official Node.js image from the Docker Hub
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . /app/

# Build the Next.js application
RUN yarn build

# Expose port 3000 for the app
EXPOSE 3000

# Command to run the application
CMD ["yarn", "start"]
