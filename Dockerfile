FROM node AS builder

WORKDIR /site

COPY . .

RUN npm install yarn && yarn && yarn run docs:build

FROM nginx

COPY --from=builder /site/docs/.vitepress/dist /usr/share/nginx/html
