# 🧪 Testes Automatizados - Webdojo com Cypress

Este repositório contém os testes automatizados da aplicação **Webdojo**, utilizando o framework **Cypress**.

## 📁 Estrutura do Projeto

A pasta `cypress/` está organizada da seguinte forma:

```
cypress/
├── e2e/                    # Casos de teste automatizados
├── fixtures/               # Dados mockados e arquivos de suporte
│   ├── cep.json
│   ├── consultancy.json
│   └── documento.pdf
├── support/
│   ├── actions/            # Ações reutilizáveis agrupadas
│   │   └── consultancy.actions.js
│   ├── commands.js         # Comandos customizados Cypress
│   ├── e2e.js              # Configurações globais de testes
│   └── utils.js            # Funções utilitárias
```

## ▶️ Executando a Aplicação Webdojo

A aplicação Webdojo está no mesmo repositório. Para executá-la localmente:

```bash
npm install
npm run dev
```

## 🧪 Executando os Testes

Antes de rodar os testes, certifique-se de que a aplicação Webdojo esteja rodando (`npm run dev`).

### Rodar todos os testes no modo headless:
```bash
npm test
```

### Abrir o Cypress no modo interativo (UI):
```bash
npm run test:ui
```

### Rodar somente os testes de login (modo headless):
```bash
npm run test:login
```

### Rodar os testes de login em resolução mobile:
```bash
npm run test:login:mobile
```

## 🛠️ Dependências

- [Cypress](https://www.cypress.io/)
- [Serve](https://www.npmjs.com/package/serve) – Para rodar a aplicação no modo `dist` localmente

## 📌 Observações

- Os dados dos testes estão localizados em `cypress/fixtures`.
- Ações específicas da feature de consultoria estão separadas em `support/actions/consultancy.actions.js`.

## 📄 Licença

Este projeto é privado e de uso interno.