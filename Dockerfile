FROM node:slim
COPY . /app
WORKDIR /app
RUN npm install
RUN apt-get -y update
RUN apt-get -y install netcat
EXPOSE 3000
CMD ["sh", "wait.sh"]