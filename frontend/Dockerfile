# 빌드
FROM --platform=linux/arm64 node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# 실행
FROM --platform=linux/arm64 nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
