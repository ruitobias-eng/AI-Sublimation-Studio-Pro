# AI Sublimation Studio Pro ☕🎨

**AI Sublimation Studio Pro** é uma plataforma profissional web para criação de estampas de sublimação e visualização em tempo real de mockups 3D interativos. Inspirado na facilidade do Canva e no controle avançado do Photoshop, o aplicativo combina um editor 2D de alta precisão com renderização 3D via Three.js e geração de estampas por Inteligência Artificial (Google Gemini API).

---

## ✨ Principais Recursos

### 🎨 Editor Canvas 2D Avançado
- **Controle Total de Camadas (Layers)**: Adicione textos, imagens, formas geométricas e artes prontas com controle de opacidade, rotação, ordem Z e bloqueio de elementos.
- **Ferramentas de Texto**: Suporte a curvatura/arco de texto, ajuste de fontes, tamanhos, alinhamentos e cores de preenchimento.
- **Modo Espelhamento Sublimático**: Inversão horizontal de estampa necessária para transferência em papel sublimático.
- **Réguas e Guias em Milímetros**: Visualização da área imprimível com medidas exatas para cada produto (ex: Caneca 11oz, Squeeze, Squeeze de Alumínio, Camisetas, etc.).

### ☕ Simulador 3D em Tempo Real (Three.js)
- **Preview 3D em Alta Definição**: Mapeamento dinâmico da estampa 2D diretamente sobre o modelo 3D do produto selecionado.
- **Controles de Câmera**: Rotação orbital de 360°, zoom interativo e visões pré-definidas (Frente, Lado, Trás, Topo, ISO).
- **Modo PIP (Picture-in-Picture)**: Miniatura 3D flutuante no canto da tela enquanto você trabalha no canvas 2D.

### 🤖 Inteligência Artificial Integrada (Google Gemini API)
- **Geração de Estampas por Prompt**: Crie artes sublimáticas exclusivas utilizando prompts em texto e estilos pré-configurados.
- **Assistente de Design IA**: Ferramentas auxiliares para remoção de fundo, sugestão de temas e melhorias de estampa.

### 🌓 Suporte a Tema Claro e Escuro (Dark & Light Mode)
- **Alternância Instantânea**: Escolha entre o visual escuro de estúdio profissional ou o tema claro de alta visibilidade com um clique na barra superior.

### 🖨️ Exportação para Impressão (300 DPI)
- Exportação direta do arquivo pronto em alta qualidade para envio às impressoras sublimáticas.

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS v4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/), [Motion](https://motion.dev/)
- **Renderização 3D**: [Three.js](https://threejs.org/)
- **Backend / Dev Server**: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [Vite](https://vitejs.dev/), [esbuild](https://esbuild.github.io/)
- **IA**: [`@google/genai`](https://www.npmjs.com/package/@google/genai) (Google Gemini API)

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js**: v18.x ou superior
- **npm**: v9.x ou superior

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/ai-sublimation-studio-pro.git
cd ai-sublimation-studio-pro
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto (com base no `.env.example`):
```env
GEMINI_API_KEY=sua_chave_api_do_gemini_aqui
```

### 4. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
Abra o navegador em `http://localhost:3000`.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento com reload automático via `tsx` no `server.ts`. |
| `npm run build` | Compila o frontend React com Vite e gera a versão de produção do servidor via `esbuild`. |
| `npm run start` | Executa a versão compilada de produção (`dist/server.cjs`). |
| `npm run lint` | Executa a verificação de tipos do TypeScript sem emitir arquivos (`tsc --noEmit`). |

---

## 📁 Estrutura de Arquivos

```
├── src/
│   ├── components/
│   │   ├── TopBar.tsx                 # Barra superior com controles, alternador de temas e exportação
│   │   ├── LeftToolbar.tsx            # Barra lateral esquerda com gavetas de modelos, imagens e textos
│   │   ├── CanvasArea.tsx             # Área de edição 2D com réguas, zoom, pan e réplicas
│   │   ├── ThreeDViewport.tsx         # Renderizador 3D Three.js para os produtos sublimáveis
│   │   ├── RightPropertiesPanel.tsx   # Painel de propriedades do elemento selecionado
│   │   ├── LayerPanel.tsx             # Painel de gerenciamento de camadas (z-index, visibilidade)
│   │   ├── AIPanel.tsx                # Painel do gerador e estúdio IA
│   │   └── HistoryPanel.tsx           # Histórico de desfazer/refazer
│   ├── types.ts                       # Tipos globais e interfaces TypeScript
│   ├── App.tsx                        # Componente principal do aplicativo
│   ├── main.tsx                       # Ponto de entrada do React
│   └── index.css                      # Estilos globais e importação do Tailwind CSS
├── server.ts                          # Servidor Express com integração Vite e API
├── metadata.json                      # Metadados e configurações da aplicação
├── package.json                       # Dependências e scripts do projeto
└── README.md                          # Documentação do projeto
```

---

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE). Sinta-se à vontade para utilizar, modificar e distribuir.
