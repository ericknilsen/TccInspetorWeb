# TccInspetorWeb

- It's a Web application in Angular that makes it possible to upload a document and view messages that describe inconsistencies related to a particular pattern. Corresponds to the TccInspetorWeb component of the following architecture:

[//]: # (- É uma aplicação Web em Angular que possibilita a realização de upload de um arquivo texto e visualização de mensagens que descrevem inconsistências no conteúdo do arquivo em relação a determinado padrão. Corresponde ao componente TccInspetorWeb da arquitetura abaixo:)

![](https://github.com/ericknilsen/TccInspetorCore/blob/master/docs/Arquitetura_TccInspetor.png)

- It uses Angular 5, HTML and Bootstrap.

[//]: # (- Utiliza as tecnologias Angular 5, HTML e Bootstrap.)

- It is deployed to Heroku.

[//]: # (- Está implantada no Heroku.)


## Setup

### Deployment Environment

The deployment in Heroku is done as follows:

[//]: # (A implantação no Heroku é feita da seguinte forma:)

- Create an application on Heroku

[//]: # (- Crie uma aplicação no Heroku )

- On the _Deploy_ tab configure the connection to this repository

[//]: # (- Na aba _Deploy_ configure a conexão com este repositório)

- Enable automatic or manual deploy

[//]: # (- Habilite o deploy automático ou manual)

This application accesses two distinct APIs that provide REST services: one deployed in Heroku and the other in the AWS API Gateway. To access them, it is necessary to enter the corresponding values in the file _src/app/file-upload/file-upload.service.ts_

[//]: # (Esta aplicação acessa duas APIs distintas que disponibilizam serviços REST: uma implantada no Heroku e outra na AWS API Gateway. Para acessá-las, é necessário informar os valores correspondentes no arquivo _src/app/file-upload/file-upload.service.ts_)


### Development Evironment

- Installation

```shell
$ git clone https://github.com/ericknilsen/TccInspectorWeb
$ cd TccInspectorWeb
$ npm install
```
- Execution

```shell
$ ng serve
```
Access the link [http://localhost:4200](http://localhost:4200)




