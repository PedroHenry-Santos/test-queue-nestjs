<p align="center">
  <img src=".github/infra.png" width="120" alt="Test Logo" />
</p>

<p align="center">API de teste de filas utilizando <a href="https://docs.nestjs.com/" target="_blank">Nest.js</a> e <a href="https://www.npmjs.com/package/bull" target="_blank">Bull</a>.</p>
<p align="center">


## Descrição

API para testes e estudo de infraestrutura na AWS com VPC, EC2 e ElasticCache.

## Instalação

```bash
$ git clone git@github.com:PedroHenry-Santos/test-queue-nestjs.git
```

## Executando app

```bash
$ chmod +x ./setup.sh

$ make up
```
O modelo de variáveis ambientes estão no arquivo ``docker/api/docker.env``. 

Em produção, basta dentro da sua instância ec2 utilizar os seguinte comando:
```bash
$ sudo sudo vi /etc/environment
```
Apos insira os valores das variáveis ambiente (Basta copiar todos os valores e colar ou apartar ``i`` e digitar), depois de editar basta apertar ``ESC`` de digitar ``:wq``. Apos reinicie a instância pelo painel da AWS e entre novamente. Basta atualizar o sistema, clonar o projeto e executar ele conforme mencionado no inicio.

> Obs.: A instância utilizada foi a ``Amazon Linux 2 AMI`` portanto os script de atalho podem não funcionar em demais imagens.

## Contato

- Author - [Pedro Santos](https://www.linkedin.com/in/pedro-henry-santos/)