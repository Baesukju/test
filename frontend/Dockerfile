# 빌드 단계
FROM --platform=linux/arm64 node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# 실행 단계
FROM --platform=linux/arm64 nginx:alpine
COPY --from=build /build/static /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
