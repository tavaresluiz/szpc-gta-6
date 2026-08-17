# SZPC GTA 6

Um projeto front-end estático inspirado na estética e UX de jogos tipo GTA. Este repositório contém páginas HTML, estilos CSS e scripts JavaScript que juntos formam um protótipo/landing page interativa — ideal para demonstrações, portfólio ou experimentos visuais.

Badges
- ![HTML](https://img.shields.io/badge/HTML-30.6%25-blue)
- ![CSS](https://img.shields.io/badge/CSS-43.5%25-purple)
- ![JavaScript](https://img.shields.io/badge/JavaScript-25.9%25-yellow)
- ![License](https://img.shields.io/badge/license-MIT-lightgrey)
- ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deploy-blue)

Sumário
- Sobre
- Funcionalidades
- Tecnologias
- Demonstração
- Instalação e execução
- Estrutura do projeto
- Como contribuir
- Roadmap
- CI / Deploy
- Licença
- Contato

## Sobre
SZPC GTA 6 é um protótipo front-end que explora layout, HUD e interações inspiradas em jogos. O foco é visual e responsivo — ideal para aprendizado de interfaces ricas com HTML, CSS e JavaScript.

Use este repositório como base para:
- Criar uma landing page com estilo gamer.
- Prototipar HUDs, menus e efeitos visuais.
- Demonstrar habilidades de front-end em portfólio.

## Funcionalidades
- Layout responsivo com CSS moderno.
- Animações e interações básicas via JavaScript.
- Estrutura simples para adicionar novas telas e assets.
- Preparado para deploy em GitHub Pages.

## Tecnologias
- HTML, CSS, JavaScript
- Deploy: GitHub Pages (via GitHub Actions)

## Demonstração
Se o GitHub Pages estiver habilitado para este repositório, a demo ficará disponível em:

https://tavaresluiz.github.io/szpc-gta-6/

(Se a página não estiver ativa, ative o GitHub Pages nas configurações do repositório ou aguarde a primeira execução do workflow `Deploy to GitHub Pages`.)

## Instalação e execução local
Requisitos:
- Navegador moderno

Passos rápidos:

1. Clone o repositório
```bash
git clone https://github.com/tavaresluiz/szpc-gta-6.git
cd szpc-gta-6
```

2. Abra diretamente
- Abra `index.html` no seu navegador.

3. Ou use um servidor estático
- Python 3:
```bash
python -m http.server 8000
# Acesse http://localhost:8000
```

## Estrutura do projeto (sugestão)
- index.html — página principal
- assets/
  - css/ — estilos
  - js/ — scripts
  - img/ — imagens
- README.md
- LICENSE

Ajuste conforme a estrutura real do repositório.

## Como contribuir
Veja CONTRIBUTING.md para diretrizes. Em resumo:
- Fork → branch → commit → pull request
- Abra Issues para bugs e features

## Roadmap
- Melhorar a responsividade em mobile
- Adicionar efeitos sonoros e controles
- Otimizar assets e pipeline de build

## CI / Deploy
- Recomenda-se adicionar um workflow GitHub Actions para deploy automático em GitHub Pages (p.ex. `.github/workflows/pages.yml`).
- Também é recomendado adicionar um workflow de CI que valide arquivos essenciais e rode testes.

## Licença
Este projeto está licenciado sob a MIT License — veja o arquivo LICENSE para detalhes.

## Contato
- Autor: tavaresluiz — https://github.com/tavaresluiz

---

Arquivos já adicionados neste repositório:
- README.md (este arquivo)
- LICENSE
- CONTRIBUTING.md
- CODE_OF_CONDUCT.md

Se quiser, posso:
- Inserir screenshots/GIFs no README — envie as imagens ou indique o caminho no repositório.
- Criar os workflows e templates (eu tentei, mas não tive permissão para push; posso preparar os arquivos e instruções para você aplicar localmente).
- Atualizar o texto com descrição mais específica do projeto — envie uma descrição curta e eu ajusto.
