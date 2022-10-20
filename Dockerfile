# Latest node lts image
FROM node:lts-alpine3.14 As development
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
# Build step for development
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
# Copy entrypoint for Esmodules
COPY entrypoint.sh /entrypoint.sh
# Give permissions
RUN chmod +x /entrypoint.sh
# Build Esmodules
ENTRYPOINT ["/entrypoint.sh"]
# Install development dependencies
RUN yarn --only=development
# Copy the source code to app dir
COPY . .
# Compile TS code to JS
RUN yarn run build
# Expose port 3000 on the container
EXPOSE 3000
# Run the app
CMD ["yarn", "run", "dev"]

# Latest node lts image
FROM node:lts-alpine3.14 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
# Build step for production
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
# Install production dependencies
RUN yarn --only=production
# Copy the source code to app dir
COPY . .
COPY --from=development /usr/src/app/dist ./dist
# Compile TS code to JS
RUN yarn run build
# Run app
CMD ["node", "dist/main"]
