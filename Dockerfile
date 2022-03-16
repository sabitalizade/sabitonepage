FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]


FROM node:14-alpine AS builder
ENV NODE_ENV production 
WORKDIR /prod 
COPY package.json .
COPY yarn.lock .
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
RUN addgroup -S appgroup && adduser -S appuser -G appgroup \
    && mkdir -p /var/run/nginx /var/tmp/nginx \
    && chown -R appuser:appgroup /usr/share/nginx /var/run/nginx /var/tmp/nginx /etc/nginx

USER appuser
