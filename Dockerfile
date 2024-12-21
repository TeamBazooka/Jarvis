FROM node:18.14

RUN mkdir /app

COPY ./ /app/

WORKDIR /app

RUN yarn

CMD [ "/app/bin/jarvis" ]
