#init a base image
From node:12.18.1
ENV NODE_ENV=production
RUN apk add --update nodejs npm curl
#definition of working directory
COPY [“package.json”, “./”]

WORKDIR /src
#run npm to install dependencies
RUN npm install
COPY . .
#run on localhost:8080
EXPOSE 8080
#entry point to run the programme
ENTRYPOINT [ “node” , “./app.js”]
