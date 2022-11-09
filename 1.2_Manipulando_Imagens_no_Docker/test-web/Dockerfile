# qual imagem vai ser utilizada?
FROM nginx 

# pra onde vou copiar meu arquivo index?
COPY ./index.html /usr/share/nginx/html

# Qual porta pode ser mapeada?
EXPOSE 3000

# chave e valor
ENV API_URL=htto://localhost:8000/api/

# pasta de trabalho da nossa imagem/ PASTA QUE VAI DIRECIONAR QUANDO ACESSAMOS O NOSSO CONTAINER
WORKDIR /usr/share/nginx/html

# permite rodar qualquer comando bash na hora da criação da nossa imagem,
RUN localhost

#EXECUTAVEIS
ENTRYPOINT [ "/usr/sbin/nginx" ]

# configurar os parametro que sera enviado para ENTRYPOINT
CMD [ "-g", "daemon off" ]

# apos configurar nosso dockerfile vamos para terminal...
# comando: docker build .
#comando:  docker images 
#comando: docker container run -d -p 3000:80 ID -> PARA SUBIR NOSSA APLICAÇÃO PARA CONTAINER