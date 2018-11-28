
#build docker build -t spotify .
#run   sudo docker run --name=spotify -p 5000:80 spotify
FROM node:8.12 as builder

WORKDIR /ng-app
COPY . .
# RUN npm i
# RUN npm run build

FROM nginx:1.13.12

COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /ng-app /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
