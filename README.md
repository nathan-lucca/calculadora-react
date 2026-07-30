# Calculadora React + TypeScript

Calculadora funcional com design inspirado na calculadora do iOS, desenvolvida com React, TypeScript e Vite.

## Tecnologias

- React 18
- TypeScript
- Vite
- CSS puro (sem dependências de UI)

## Funcionalidades

- Operações básicas: adição, subtração, multiplicação e divisão
- Porcentagem e inversão de sinal (+/-)
- Display responsivo ao tamanho do número
- Lógica encapsulada no hook `useCalculator`

## Como rodar localmente

```bash
npm install
npm run dev
```

## Estrutura do projeto

```
src/
├── components/
│   ├── Display.tsx     # Exibe o valor atual
│   ├── Button.tsx      # Botão reutilizável com variantes
│   └── Keypad.tsx      # Grid de botões
├── hooks/
│   └── useCalculator.ts  # Toda a lógica de estado
├── types/
│   └── calculator.ts     # Tipos TypeScript
└── App.tsx
```

## Deploy

[Ver projeto ao vivo](#) ← adicionar link após deploy na Vercel
