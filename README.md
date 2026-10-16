# Portfólio | Anthonny Almeida

**Ideias em mente. Código na prática.**

Portfólio pessoal de Anthonny Almeida, desenvolvedor de software júnior e estudante de Sistemas de Informação na Universidade Tiradente (UNIT). Reúne projetos, habilidades, formação e canais de contato em uma interface desenvolvida com React.

O conteúdo foi elaborado a partir do currículo, com fotografia pessoal e identidade visual em tons escuros e verde.

## Funcionalidades

- Layout responsivo para celulares, tablets e computadores.
- Apresentação pessoal e seção sobre a trajetória do desenvolvedor.
- Projetos com filtros por categoria: Todos, Web e Python.
- Janela de detalhes dos projetos, com descrição, aprendizado e links para código e demonstração quando disponível.
- Seções de habilidades técnicas, formação acadêmica e idiomas.
- Download do currículo em PDF.
- Contato por WhatsApp, telefone, LinkedIn e GitHub.
- Menu móvel, destaque da seção em navegação e botão para voltar ao início.
- Recursos de acessibilidade: link para pular ao conteúdo, indicadores de foco, rótulos acessíveis e respeito à preferência por redução de movimento.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React 19 | Componentes e estado das interações |
| Vite 6 | Ambiente de desenvolvimento e build de produção |
| JavaScript (JSX) | Conteúdo e lógica da interface |
| CSS | Layout, responsividade, animações e capas ilustrativas |
| SVG | Ícones e favicon |
| Google Fonts | Tipografias DM Sans e Manrope |

A aplicação é um front-end estático, sem necessidade de back-end, banco de dados ou variáveis de ambiente.

## Projetos apresentados

| Projeto | Descrição | Código |
| --- | --- | --- |
| Sergipanidade | Site de turismo que aproxima visitantes das belezas de Sergipe e ajuda a divulgar negócios locais. | [Repositório](https://github.com/Anthonnydev-ops/Sergipa-nidade) |
| Gerenciador de finanças | Software em React para gerenciar entradas e saídas de valores. | [Repositório](https://github.com/Anthonnydev-ops/Painel-de-Controle-de-Finan-as) |
| Gerenciador de tarefas | Aplicação de terminal desenvolvida com os fundamentos de Python. | [Repositório](https://github.com/Anthonnydev-ops/Gerenciador-de-Tarefas) |

O Sergipanidade também possui um [link de demonstração](https://sergipa-nidade.vercel.app/). Os endereços dos projetos foram extraídos do currículo.

As capas exibidas no portfólio são representações ilustrativas feitas com CSS e estão identificadas como tal; não são capturas dos aplicativos.

## Como executar

### Pré-requisitos

- Node.js 20 ou superior.
- npm instalado junto ao Node.js.

No terminal, dentro da pasta do projeto, instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Abra o endereço informado no terminal, normalmente `http://127.0.0.1:5173`. Se a porta estiver ocupada, utilize a porta indicada pelo Vite. Para encerrar o servidor, pressione `Ctrl+C`.

### Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com atualização automática. |
| `npm run build` | Compila e otimiza a aplicação na pasta `dist/`. |
| `npm run preview` | Serve localmente a versão compilada para conferência. |

Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

Abra o endereço mostrado pelo comando de preview. O preview depende de um build anterior e serve apenas para conferência local.

## Estrutura do projeto

```text
.
├── public/
│   ├── anthonny.jpeg                    # Foto exibida no site
│   ├── curriculo-anthonny-almeida.pdf    # Currículo para download
│   └── favicon.svg                     # Ícone da aba do navegador
├── src/
│   ├── App.jsx                         # Componentes, conteúdo e interações
│   ├── main.jsx                        # Inicialização do React
│   └── styles.css                      # Estilos e regras responsivas
├── Curriculo Anthonny Almeida.pdf       # Currículo original
├── img.jpeg                            # Fotografia original
├── index.html                          # HTML de entrada e metadados
├── package.json                        # Dependências e comandos
├── package-lock.json                   # Versões resolvidas das dependências
├── .gitignore
└── README.md
```

As pastas `node_modules/` e `dist/` são geradas durante a instalação e o build e estão incluídas no `.gitignore`.

## Personalização

| O que alterar | Onde editar |
| --- | --- |
| Apresentação, formação, idiomas e habilidades | `src/App.jsx` |
| Descrições, categorias e links dos projetos | Lista `projects` em `src/App.jsx` |
| GitHub, LinkedIn e WhatsApp | Constantes `github`, `linkedin` e `whatsapp` em `src/App.jsx` |
| Telefone exibido e link de ligação | Seção de contato em `src/App.jsx` |
| Cores, fontes e espaçamentos | `src/styles.css`, incluindo as variáveis em `:root` |
| Foto de apresentação | `public/anthonny.jpeg` |
| PDF disponível para download | `public/curriculo-anthonny-almeida.pdf` |
| Título, descrição e idioma da página | `index.html` |
| Favicon | `public/favicon.svg` |

Ao substituir a foto ou o PDF, mantenha os nomes dos arquivos ou atualize as referências em `src/App.jsx`. Os arquivos originais na raiz são preservados; alterá-los não atualiza automaticamente as cópias usadas pelo site em `public/`.

Para adicionar projetos, atualize a lista `projects` e a representação correspondente no componente `ProjectVisual`. Ajuste também o contador exibido no filtro “Todos”. Novas categorias devem ser incluídas nas opções de filtro.

As fontes são carregadas pelo Google Fonts e têm alternativas locais caso o serviço esteja indisponível. A fotografia, os ícones e o currículo são servidos pelo próprio projeto.

## Hospedagem

Execute `npm run build` e publique o conteúdo de `dist/` em uma hospedagem de arquivos estáticos. Em serviços que compilam a partir do código-fonte, configure:

| Configuração | Valor |
| --- | --- |
| Comando de instalação | `npm ci` |
| Comando de build | `npm run build` |
| Diretório de saída | `dist` |

A configuração atual considera que o site será servido na raiz do domínio. Para publicação em um subdiretório, ajuste a opção `base` do Vite e o caminho do favicon em `index.html` antes de gerar o build.

## Autor

**Anthonny Almeida** — Desenvolvedor de software júnior e estudante de Sistemas de Informação na UNIT.

- [GitHub](https://github.com/Anthonnyjda-dev)
- [LinkedIn](https://www.linkedin.com/in/anthonnyalmeida)
- [WhatsApp](https://wa.me/5579998543619)
