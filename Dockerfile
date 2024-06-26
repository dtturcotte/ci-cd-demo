FROM node:16
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 8080
CMD ["node", "app.js"]
