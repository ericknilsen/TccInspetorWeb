# TccInspetorWeb

- It's a Web application in Angular that makes it possible to upload a document and view messages that describe inconsistencies related to a particular pattern. Corresponds to the **TccInspetorWeb** component of the following architecture:

![](https://github.com/ericknilsen/TccInspetorCore/blob/master/docs/Arquitetura_TccInspetor.png)

- It was developed in Angular 5, HTML5 and Bootstrap.
- It is deployed to Heroku.

## Setup

### Deployment Environment

The deployment in Heroku is done as follows:

- Create an application on Heroku
- On the _Deploy_ tab configure the connection to this repository
- Enable automatic or manual deploy

This application accesses two distinct APIs that provide REST services: one deployed in Heroku and the other in the AWS API Gateway. To access them, it is necessary to enter the corresponding values in the file _src/app/file-upload/file-upload.service.ts_

### Development Environment

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




