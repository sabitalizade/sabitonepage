FROM node:16-alpine AS builder
ENV NODE_ENV production 
WORKDIR /prod 
COPY package.json .
COPY yarn.lock .
RUN yarn config set registry https://registry.npmjs.org
RUN yarn install --production 
COPY . . 
RUN yarn build  
FROM nginx:alpine AS production 
ENV NODE_ENV production 
COPY --from=builder /prod/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html 
RUN rm -rf ./* 
RUN rm -rf /usr/bin/nc
COPY --from=builder /prod/build . 

ENTRYPOINT ["nginx", "-g", "daemon off;"]

# user
RUN chown -R nginx:nginx /usr/share/nginx/html  && chmod -R 755 /usr/share/nginx/html  && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid

USER nginx
