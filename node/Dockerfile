# Base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application files
COPY . .

# Expose port and start the app
EXPOSE 3000
CMD ["npm", "start"]
