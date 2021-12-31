FROM node:alpine

WORKDIR /app
# seperate out this step to cache node modules build
COPY package.json . 
RUN npm install
# RUN npm install --prod

COPY . .

CMD ["npm", "start"]