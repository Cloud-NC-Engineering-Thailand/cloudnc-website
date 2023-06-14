# syntax=docker/dockerfile:1.5

FROM node:20-bullseye AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm install

COPY . .

RUN npm run build

# Use separate stage for deployable image
FROM nginxinc/nginx-unprivileged:1.23-alpine-perl

COPY --link default.conf /etc/nginx/conf.d/default.conf

COPY --link --from=build usr/src/app/dist/ /usr/share/nginx/html

EXPOSE 8080


