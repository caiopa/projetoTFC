# FROM node:16.14-alpine
# WORKDIR /app-backend
#  ...
FROM  node:16.14-alpine

WORKDIR /app-backend

COPY package.json ./

RUN npm install

# ADD node_modules.tar.gz .
COPY . .

ENTRYPOINT [ "npm" ]

EXPOSE 3001

CMD ["start"]