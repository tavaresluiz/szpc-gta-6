# Contribuindo para SZPC GTA 6

Obrigado por querer contribuir! Abaixo estão as diretrizes e um fluxo de trabalho recomendado para facilitar contribuições úteis e rápidas.

## Como contribuir

1. Fork: Clique em "Fork" no GitHub para criar uma cópia do repositório na sua conta.
2. Branch: Crie uma branch para sua feature ou correção:

```bash
git checkout -b feat/minha-feature
```

3. Commits pequenos: Faça commits pequenos e descreva claramente as mudanças:

```bash
git commit -m "feat(ui): adicionar botão de início rápido"
```

4. Atualize a branch remota e abra um Pull Request (PR):

```bash
git push origin feat/minha-feature
# Abra o PR no GitHub comparando sua branch com a branch main do projeto
```

## Padrões e boas práticas

- Código legível e comentado quando necessário.
- Separe CSS por componente quando possível e use nomes de classe semânticos.
- Evite estilos inline; prefira classes e arquivos CSS/SCSS.
- Mantenha o JavaScript modular (ES modules) e use nomes de funções descritivos.
- Se adicionar imagens ou assets, otimize o tamanho antes do commit.

## Testes e verificação

- Teste suas alterações localmente antes de abrir o PR.
- Inclua instruções de verificação no PR (ex.: páginas a abrir, passos para reproduzir).

## Issues

- Abra uma Issue antes de implementar mudanças grandes para discutir o design.
- Use títulos claros e descreva steps to reproduce para bugs.

## Código de Conduta

Ao contribuir, você concorda em seguir o Code of Conduct do projeto (veja CODE_OF_CONDUCT.md).

## Contato

Se tiver dúvidas, abra uma Issue ou marque @tavaresluiz no GitHub.
