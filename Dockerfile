FROM nginx:alpine

COPY ./docs/.vitepress/dist /usr/share/nginx/html/
