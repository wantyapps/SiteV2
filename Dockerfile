FROM node:latest

EXPOSE 80
WORKDIR /

COPY ./package.json ./package-lock.json ./docker_commands.sh ./

COPY ./ ./

EXPOSE 80

RUN ["chmod", "+x", "./docker_commands.sh"]
ENTRYPOINT ["./docker_commands.sh"]
