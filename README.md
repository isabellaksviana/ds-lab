# ds-lab

Tokens e componentes em React que eu uso nos meus projetos. Escrito do zero, com CSS puro.

## O que tem aqui

- `src/tokens.css`: cores (temas claro e escuro), fontes e arredondamento.
- `src/Button/`, `src/Tag/`, `src/Badge/`, `src/IconBox/`: cada componente na sua pasta, com o `.tsx`, o `.css` e as stories.
- `COMBINADOS.md`: as regras do DS, cada uma com o porquê.
- `CHANGELOG.md`: o que mudou em cada versão.

## Como usar

```js
import 'ds-lab/styles.css';
import { Button } from 'ds-lab';
```

```jsx
<Button label="Ver projetos" variant="primary" href="#projetos" />
```

## Storybook

```
npm install
npm run storybook
```
