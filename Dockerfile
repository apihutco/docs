FROM node AS builder

WORKDIR /site

COPY . .

RUN yarn config set registry https://registry.npm.taobao.org/

RUN yarn && yarn run docs:build

FROM nginx:alpine

COPY --from=builder /site/docs/.vitepress/dist /usr/share/nginx/html/
