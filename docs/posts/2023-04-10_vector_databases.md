---
title: banco de dados vetorizados
date: 2023-04-10T23:58:23.717Z
image: https://res.cloudinary.com/boloko/image/upload/v1681022316/xgtgogbp6pbozifyrpwy.png
category:
  - programação 
tag:
  - banco de dados
  - AI
star: false
sticky: false
---

Banco de dados que agrupam por semelhança. Como endereçar uma imagem ou frase? Bem diferente do tradicional 

![[20230408_144823.jpg]]

## como funciona

Simplicando ao máximo: imagina que vamos guardar coordenadas 2D num DB. Usamos vetores com duas dimensões. Quando quero uma coordenada próxima dessa localização, consigo tirar a distância e trazer todos os pontos próximos.

Agora como transformar uma imagem e endereçar ela? Encoders. Passamos a imagem ou frase em uma rede neural que no final ela trazer um vetor como resultado.

Essas redes neurais devem ser escolhidas dependendo da função. No simples caso de coordenadas, 2 dimensões bastam. Pra um câmera localizada no espaço tridimensional e uma direção apontada, 4 dimensões usando quaternions. Já o ResNet50, consegue classificar imagens em mais de 1000 objetos diferentes. Creio que os vetores tenham essas mesmas dimensões. 

Em um banco de dados vetorizado uma imagem de um gato branco estaria próximo de uma imagem de um gato preto. Isso porque a rede neural iria identificar essas características e dar mais valor pra dimensão 'gato'. 

Uma imagem de um cachorro estaria próximo delas mas uma imagem de uma casa estaria distante dimensionalmente.