<div align="center">

# ⚡ Generate HTML — Power Automate E-Mail Generator

**Gere templates de e-mail corporativo em HTML prontos para o Power Automate em segundos.**

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://templix-dev.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repositório-181717?style=for-the-badge&logo=github)](https://github.com/gabrielermogenes/generate-gmail)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()

![Preview do projeto](./assets/img/preview.png)

</div>

---

## 📋 Sobre o Projeto

O **Generate HTML** é uma ferramenta web que automatiza a criação de templates de e-mail corporativo para uso no **Power Automate**.

Antes dessa ferramenta, era necessário montar o HTML manualmente toda vez, correndo o risco de erros e inconsistências. Agora, basta preencher um formulário e o código HTML é gerado automaticamente — com as **expressões de data dinâmicas do Power Automate** já inseridas no lugar certo.

> *"Apenas faça. Depois você melhora. Mesmo que não seja perfeito."*

---

## ✨ Funcionalidades

- ⚡ Geração automática de HTML para o campo **Body** do Power Automate
- 📅 Expressões de data dinâmicas `@{formatDateTime(...)}` inseridas automaticamente
- 👤 Campos personalizáveis: nome, cargo, área, telefone, e-mail
- 🏭 Suporte a múltiplas plantas e empresas
- 🖼️ Suporte a logo via URL
- 📋 Botão de copiar com feedback visual
- 👁️ Preview do e-mail renderizado em tempo real
- 🌙 Dark theme profissional

---

## 🚀 Como Usar

**1.** Acesse [templix-dev.vercel.app](https://templix-dev.vercel.app)

**2.** Preencha os campos:
- Tipo de relatório e nome da planta
- Seus dados pessoais (nome, cargo, área, telefone, e-mail)
- Dados da empresa (nome, endereço, CEP, site, logo)

**3.** Clique em **"⚡ Gerar Código para Power Automate"**

**4.** Copie o código gerado

**5.** No Power Automate:
- Abra a ação **Send an email (V2)**
- Clique no campo **Body**
- Clique no ícone **`</>`** (Code view)
- Apague tudo e cole o código copiado
- Clique em **`</>`** novamente para voltar ao modo visual

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica com BEM |
| CSS3 | Dark theme, animações, responsividade |
| JavaScript | Geração dinâmica do HTML |
| Vercel | Deploy e hospedagem |
| Remix Icons | Biblioteca de ícones |
| Google Fonts | Fontes Sora e IBM Plex Mono |

---

## 📁 Estrutura do Projeto

```
generate-gmail/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css      # Estilos globais
│   │   └── main.css       # Estilos do formulário e output
│   ├── js/
│   │   └── script.js      # Lógica de geração do HTML
│   └── img/
│       └── preview.png    # Preview do projeto
└── README.md
```

---

## 💻 Rodando Localmente

```bash
# Clone o repositório
git clone https://github.com/gabrielermogenes/generate-gmail.git

# Entre na pasta
cd generate-gmail

# Abra com Live Server no VS Code
# ou abra o index.html diretamente no navegador
```

---

## 🔮 Próximas Versões

- [ ] Assunto dinâmico com `concat(...)` do Power Automate
- [ ] Seleção de período flexível (dia único ou intervalo de datas)
- [ ] Múltiplos tipos de relatório (OEE, Rank, Qualidade, Produção)
- [ ] Login e autenticação com Supabase
- [ ] Salvar templates personalizados por usuário
- [ ] Histórico de e-mails gerados

---

## 👨‍💻 Autor

<div align="center">

**Gabriel Ermogenes de Paula**

Aprendiz em Excelência Operacional | Desenvolvedor Front-End

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devgabrielermogenes/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gabrielermogenes)

</div>

---

<div align="center">

⭐ Se esse projeto te ajudou, deixa uma estrela no repositório!

</div>
