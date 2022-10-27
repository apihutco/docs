FROM node AS builder

WORKDIR /site

COPY . .

RUN yarn && yarn run docs:build

FROM nginx:alpine

COPY --from=builder /site/docs/.vitepress/dist /usr/share/nginx/html/
