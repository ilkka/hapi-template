FROM node:8.9.4-onbuild

RUN npm run build
EXPOSE 3000
