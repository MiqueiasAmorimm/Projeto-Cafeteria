# Loop Coffee - O melhor café para programadores

## Descrição

O **Loop Coffee** é uma plataforma de café que oferece aos programadores e profissionais de tecnologia um ambiente acolhedor para trabalhar, estudar ou simplesmente relaxar enquanto desfrutam do melhor café artesanal do Brasil. Este projeto foi desenvolvido como um site institucional para promover a cafeteria, destacando suas ofertas e a experiência única que oferece aos seus clientes.

## Funcionalidades

- **Vídeo de fundo**: O site apresenta um vídeo de fundo, exibindo a preparação de café, com reprodução em loop a 1.5x da velocidade normal.
- **Navegação de seção**: O site conta com uma navegação fluida entre as seções "Home", "Sobre" e "Nosso Ambiente", permitindo uma experiência intuitiva para o usuário.
- **Responsividade**: O layout foi projetado para funcionar bem em dispositivos móveis e desktops, adaptando-se à largura da tela.

## Estrutura do Projeto

Este projeto é composto por três partes principais:

1. **HTML** - Estrutura do conteúdo
2. **CSS** - Estilização do layout e do design
3. **JavaScript** - Manipulação de interatividade e controle do vídeo de fundo

### Arquivos

- `index.html`: Contém a estrutura do conteúdo da página.
- `styles.css`: Define as regras de estilo do site.
- `index.js`: Controla a reprodução do vídeo e a navegação entre as seções.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do conteúdo e links de navegação.
- **CSS3**: Estilos e responsividade do layout.
- **JavaScript**: Manipulação do DOM para navegação entre as seções e controle do vídeo.
- **Fontes**: Utiliza a fonte "Roboto" da Google Fonts.

## Funcionalidades de Navegação

O site permite ao usuário navegar entre as seções de forma simples:

- **Home**: Ao clicar no link "Home", o usuário retorna à página inicial.
- **Sobre**: Ao clicar no link "Sobre", o usuário é direcionado para a seção que explica mais sobre o café e a história da empresa.
- **Nosso Ambiente**: Ao clicar em "Nosso Ambiente", o usuário é redirecionado para a seção que mostra o espaço acolhedor da cafeteria.

### Manipulação de DOM

O código JavaScript manipula o DOM para permitir uma navegação fluida entre as seções da página. O comportamento é implementado da seguinte forma:

```javascript
// Seleciona os links de navegação
const homeLink = document.querySelector('a[href="#home"]');
const sobreLink = document.querySelector('a[href="#sobre"]');
const ambienteLink = document.querySelector('a[href="#ambiente"]');

// Adiciona eventos de clique para navegação
homeLink.addEventListener("click", () => {
  window.location.href = "#home";
});

sobreLink.addEventListener("click", () => {
  window.location.href = "#sobre";
});

ambienteLink.addEventListener("click", () => {
  window.location.href = "#ambiente";
});
```
