# FROM node:16.14-alpine
# WORKDIR /app-frontend
#  ...
FROM  node:16.14-alpine

WORKDIR /app-frontend
COPY package.json ./

RUN npm install

# ADD node_modules.tar.gz .
COPY . .

ENTRYPOINT [ "npm" ]

EXPOSE 3000

CMD ["start"]