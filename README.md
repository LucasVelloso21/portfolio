# Portfólio — Lucas Velloso

Currículo online de desenvolvedor Full Stack Júnior: sobre, experiência, skills, projetos e contato.

Feito com HTML, CSS e JavaScript puros, sem framework nem build — responsivo, com animações leves
e respeito a `prefers-reduced-motion`.

## Idiomas

O site abre em **inglês** e tem o seletor `EN | PT | ES` no cabeçalho. A escolha fica salva no navegador
e também no link, então dá para compartilhar direto em um idioma: `index.html?lang=pt` ou `?lang=es`.

- O texto em inglês fica no próprio `index.html`, nos elementos com `data-i18n="chave"`
  (ou `data-i18n-attr="alt:chave"` para atributos).
- As traduções em português e espanhol ficam no `i18n.js`, com as mesmas chaves.
- Ao mudar um texto, altere nos dois lugares.

## Currículo em PDF

O botão "Download resume" baixa o PDF do idioma ativo (`curriculo-en.pdf`, `curriculo-pt.pdf`,
`curriculo-es.pdf`). Eles são gerados a partir dos HTMLs em `curriculo/`. Depois de editar um deles, rode:

```powershell
powershell -ExecutionPolicy Bypass -File curriculo\gerar-pdfs.ps1
```

(usa o Microsoft Edge instalado no Windows para imprimir em PDF)

## Rodar localmente

Abra o `index.html` no navegador.

## Estrutura

| arquivo | o que é |
|---|---|
| `index.html` | o conteúdo de todas as seções (em inglês) |
| `i18n.js` | traduções em português e espanhol |
| `style.css` | tema (cores em `:root`), layout e responsividade |
| `script.js` | menu, troca de idioma, seção ativa, animações e o editor digitando no topo |
| `img/` | ilustrações dos projetos |
| `curriculo/` | currículos em HTML (en, pt, es) e o script que gera os PDFs |
| `curriculo-*.pdf` | os currículos para download |
