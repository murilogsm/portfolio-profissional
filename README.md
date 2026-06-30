# Portfólio Profissional

Olá, eu sou Murilo Gabriel Santos Marcovicz, estou cursando o 1º semestre da faculdade Unifasipe no curso de Análise e Desenvolvimento de Sistemas, e esta é uma página de portfólio pessoal desenvolvida como atividade da disciplina de Front End Design Engineering.

## 📁 Estrutura do projeto

```
projeto/
├── index.html   # Estrutura/conteúdo da página
├── style.css    # Estilização visual
├── script.js    # Lógica e integrações com a BrasilAPI
└── README.md    # Este arquivo
```

## 🚀 Como executar

Não há dependências nem build — é só HTML, CSS e JS puros.

1. Baixe os 3 arquivos (`index.html`, `style.css`, `script.js`) e mantenha-os na **mesma pasta**.
2. Abra o arquivo `index.html` no navegador (duplo clique ou clique direito → "Abrir com" → navegador).

Opcional, para rodar com um servidor local (evita eventuais bloqueios de CORS em alguns navegadores):

```bash
# Python
python3 -m http.server 8000

# Node (com o pacote serve)
npx serve .
```

Depois acesse `http://localhost:8000`.

## 🧩 Seções da página

- **Hero** — Apresentação rápida.
- **Sobre Mim** — Informações pessoais e acadêmicas.
- **Habilidades** — Skills técnicas com barra de progresso.
- **BrasilAPI** — 3 integrações funcionais com a API pública [BrasilAPI](https://brasilapi.com.br).
- **Contato** — Links para redes sociais.

## 🔌 Integrações com a BrasilAPI

Todas as chamadas são feitas via `fetch` direto no navegador, sem necessidade de backend ou chave de API.

### 1. Buscar CEP
- **Endpoint:** `GET https://brasilapi.com.br/api/cep/v1/{cep}`
- **Função:** `buscarCEP()`
- Valida se o CEP digitado tem 8 dígitos numéricos, consulta a API e exibe rua, bairro, cidade e UF.

### 2. Buscar CNPJ
- **Endpoint:** `GET https://brasilapi.com.br/api/cnpj/v1/{cnpj}`
- **Função:** `buscarCNPJ()`
- Valida se o CNPJ tem 14 dígitos numéricos, consulta a API e exibe razão social, nome fantasia, situação cadastral e UF.

### 3. Buscar Banco por código
- **Endpoint:** `GET https://brasilapi.com.br/api/banks/v1/{code}`
- **Função:** `buscarBanco()`
- Consulta um banco pelo código (ex: `001` para Banco do Brasil) e exibe código, nome, nome completo e ISPB.

Em todos os casos:
- O campo aceita o atalho **Enter** para disparar a busca.
- Mensagens de erro tratam CEP/CNPJ inválidos, registros não encontrados (404) e falhas genéricas da API.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3 (Flexbox e Grid)
- JavaScript (ES6+, `fetch`, `async/await`)
- [BrasilAPI](https://brasilapi.com.br) — API pública e gratuita de dados brasileiros

## ✍️ Autor

**Murilo Gabriel Santos Marcovicz**
- GitHub: [@murilogsm](https://github.com/murilogsm)
- Instagram: [@murilogsm](https://www.instagram.com/murilogsm)

---
Agradeço a visita, se precisar estarei à disposição. Abraço!
