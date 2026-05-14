document.addEventListener('DOMContentLoaded', function() {

    // Pegando o botão e a área de output
    const btnGerar = document.getElementById('btn-gerar')
    const output = document.getElementById('output')
    const outputCode = document.getElementById('output__code')

    // Pegando os inputs
    const inputRelatorio = document.getElementById('relatorio')
    const inputPlanta = document.getElementById('planta')
    const inputNome = document.getElementById('name')
    const inputCargo = document.getElementById('cargo')
    const inputArea = document.getElementById('area')
    const inputTelefone = document.getElementById('telefone')
    const inputEmail = document.getElementById('email')
    const inputEmpresa = document.getElementById('name-enterprise')
    const inputEndereco = document.getElementById('address')
    const inputCep = document.getElementById('cep')
    const inputSite = document.getElementById('site')
    const inputLogo = document.getElementById('logo')

    btnGerar.addEventListener('click', function() {
        const relatorio = inputRelatorio.value.trim()
        const planta = inputPlanta.value.trim()
        const nome = inputNome.value.trim()
        const cargo = inputCargo.value.trim()
        const area = inputArea.value.trim()
        const telefone = inputTelefone.value.trim()
        const email = inputEmail.value.trim()
        const empresa = inputEmpresa.value.trim()
        const endereco = inputEndereco.value.trim()
        const cep = inputCep.value.trim()
        const site = inputSite.value.trim()
        const logo = inputLogo.value.trim()

        // Montando o HTML do e-mail
        const htmlGerado = `<p class="editor-paragraph"><b><strong class="editor-text-bold" style="font-size: 20px;">Bom dia a todos!</strong></b></p><br>
<p class="editor-paragraph">Segue <b><strong class="editor-text-bold">Reporte de ${relatorio}</strong></b> da planta de ${planta}, dados dos dias @{formatDateTime(startOfMonth(utcNow()), '01/MM')} ao dia @{formatDateTime(utcNow(), 'dd/MM')}</p>
<p class="editor-paragraph"><b><strong class="editor-text-bold">Atenciosamente!</strong></b> 😊</p><br><br>
<p class="editor-paragraph">${nome}<br><span style="font-size: 13px;">${cargo}<br>${area}<br>Tel. ${telefone}</span><br><span style="font-size: 13px;">Email: </span><a href="mailto:${email}" class="editor-link"><span style="font-size: 13px;">${email}</span></a></p>
<p class="editor-paragraph"><br>${empresa}<br><span style="font-size: 13px;">${endereco}<br>${cep}</span></p>
<p class="editor-paragraph"><span style="font-size: 13px;">Site: </span><a href="https://${site}" class="editor-link"><span style="font-size: 13px;">${site}</span></a><br></p>
<img src="${logo}" width="200" style="background-color: white;"><br><br><br>
<span style="font-size:11px; color: rgba(121, 119, 119, 0.719);">O Grupo União Química, por meio do seu Programa União pela Integridade, conduz suas atividades em quaisquer localidades onde atua, de forma legal, com ética, transparência, independência e integridade, visando assegurar a sua reputação, credibilidade e imagem, sempre pautada em seu código de ética e demais políticas pertinentes ao negócio. Qualquer situação irregular deve ser informada através do Canal de Ética da companhia. Clique aqui e acesse o código de ética, bem como informações do Canal de Ética da companhia. https://www.uniaoquimica.com.br/codigo-de-conduta-etica-br/</span><br>
<br>
<span style="font-size:11px; color: rgba(121, 119, 119, 0.719);">Esta mensagem pode conter informação confidencial e/ou privilegiada. Se você não for o destinatário ou a pessoa autorizada a receber esta mensagem, não pode usar, copiar ou divulgar as informações nela contidas ou tomar qualquer ação baseada nessas informações. Se você recebeu esta mensagem por engano, por favor, avise imediatamente o remetente, respondendo o e-mail, e em seguida apague-o. Agradecemos sua cooperação.</span><br>
<br>
<span style="font-size:11px; color: rgba(121, 119, 119, 0.719);">The União Química Group, through your Union for Integrity Program, conducts your activities in any places where act, with ethical, transparency, Independence and integrity, aiming to guarantee your reputation, credibility and image, always always guided by your ethical code and other relevant business policies. Any irregular situation must be reported through the company's Ethics Channel. Click here to access the ethical code, as well as information on the company's Ethics Channel. https://www.uniaoquimica.com.br/codigo-de-conduta-etica-br/</span><br>
<br>
<span style="font-size:11px; color: rgba(121, 119, 119, 0.719);">This message may contain confidential and/or privileged information. If you are not the address or authorized to receive this for the address, you must not use, copy, disclose or take any action base on this message or any information herein. If you have received this message in error, please advise the sender immediately by reply e-mail and delete this message. Thank you for your cooperation.</span>`

        // Mostrando o output
        output.style.display = 'block'
        outputCode.innerHTML = htmlGerado

        // Scroll suave até o output
        output.scrollIntoView({ behavior: 'smooth', block: 'start' })

        // Botão copiar
        document.getElementById('btn-copiar').addEventListener('click', function() {
            navigator.clipboard.writeText(htmlGerado)
            this.textContent = '✅ Copiado!'
            setTimeout(() => this.innerHTML = '<i class="ri-file-copy-line"></i> Copiar', 2000)
        })
    })

})