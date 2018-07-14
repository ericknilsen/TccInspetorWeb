# TccInspetorWeb

- É uma aplicação Web em Angular que possibilita a realização de upload de um arquivo texto e visualização de mensagens que descrevem inconsistências no conteúdo do arquivo em relação a determinado padrão. Corresponde ao componente TccInspetorWeb da arquitetura abaixo:

![](https://github.com/ericknilsen/TccInspetor/blob/master/docs/Arquitetura_ABNT.png)

- Utiliza as tecnologias Angular 5, HTML e Bootstrap.
- Está implantada no Heroku.


## Configuração

### Implantação

A implantação no Heroku é feita da seguinte forma:

- Crie uma aplicação no Heroku 
- Na aba _Deploy_ configure a conexão com este repositório
- Habilite o deploy automático ou manual

Esta aplicação acessa duas APIs distintas que disponibilizam serviços REST: uma implantada no Heroku e outra na AWS API Gateway. Para acessá-las, é necessário informar os valores correspondentes no arquivo _src/app/file-upload/file-upload.service.ts_


### Desenvolvimento

- Instalação

```shell
$ git clone https://github.com/ericknilsen/TccInspectorWeb
$ cd TccInspectorWeb
$ npm install
```
- Execução

```shell
$ ng serve
```
Acesse o endereço [http://localhost:4200](http://localhost:4200)




