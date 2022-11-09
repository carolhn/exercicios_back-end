#Vai no docker hub https://hub.docker.com/r/chuanwen/cowsay/tags
# essa tag vai ser importante (docker pull chuanwen/cowsay:latest)


#1) Crie um Dockerfile utilizando a imagem chuanwen/cowsay.
FROM chuanwen/cowsay:latest

#2) Defina um ENTRYPOINT para a execução do comando.
ENTRYPOINT [ "/usr/games/cowsay" ]

#3) Utilize o CMD para definir uma mensagem padrão.
CMD ["testando a aplicação da vaquinha" ]

#4) Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.
#vai no terminal: comando: docker image build ./ -t cowsay

#5)Agora execute um novo contêiner passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQM TRYBE", para exibir um dragão junto com a vaquinha.
#No terminal: comando: docker container run cowsay                      -> mostra a vaquinah com a mensagem do dockerfile
#No terminal: comando: docker container run cowsay Go Trybe!            -> vaquinha com mensagem Go Trybe
#No terminal: comando: docker container run cowsay -f dragon "trybe"    -> o dragão com mensagem Trybe
#No terminal: comando: docker container run cowsay -f moofasa "#VQV TRYBE"  -> o leão com a mensagem VQV TRYBE
#No terminal: comando: docker container run cowsay -l                       -> lista de todos os animais
