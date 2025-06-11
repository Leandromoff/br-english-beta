# BR-English

Clone da página inicial do site test-english.com adaptado para br-english.com.br com design dark mode minimalista.

## Características

- **Design Dark Mode**: Interface escura com tons de cinza para uma experiência visual confortável
- **Layout Minimalista**: Design limpo e focado no conteúdo
- **Responsivo**: Funciona perfeitamente em desktop e dispositivos móveis
- **Níveis de Inglês**: Botões funcionais para os níveis A1, A2, B1, B1+, B2
- **Tecnologia Moderna**: Construído com React, Tailwind CSS e shadcn/ui

## Estrutura do Projeto

```
br-english/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/         # Componentes React
│   ├── assets/            # Imagens e recursos
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos principais
│   └── main.jsx           # Ponto de entrada
├── dist/                  # Build de produção
└── package.json           # Dependências do projeto
```

## Como Executar Localmente

1. **Instalar dependências (requer [pnpm](https://pnpm.io))**:
   ```bash
   pnpm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   pnpm run dev
   ```

3. **Criar build de produção:**
   ```bash
   pnpm run build
   ```

## Publicação no GitHub Pages

1. **Criar repositório no GitHub** com o nome `br-english.com.br`

2. **Configurar GitHub Pages:**
   - Vá em Settings > Pages
   - Selecione "Deploy from a branch"
   - Escolha a branch `main` e pasta `/dist`

3. **Fazer upload dos arquivos:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - BR-English website"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/br-english.com.br.git
   git push -u origin main
   ```

## Próximos Passos

- [ ] Implementar páginas individuais para cada nível (A1, A2, B1, B1+, B2)
- [ ] Adicionar conteúdo de Grammar, Vocabulary, Listening e Reading
- [ ] Implementar sistema de navegação entre seções
- [ ] Adicionar funcionalidade de teste de nível
- [ ] Integrar sistema de progresso do usuário

## Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Tailwind CSS** - Framework de CSS utilitário
- **shadcn/ui** - Componentes de interface
- **Vite** - Build tool e servidor de desenvolvimento

## Licença

Este projeto é uma adaptação educacional do site test-english.com para fins de aprendizado.

---

**BR-English** - Aprenda inglês onde e quando quiser! 🇧🇷📚

