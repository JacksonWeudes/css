const container = document.querySelector(".container")
const btnCadastro = document.querySelector(".btn-cadastro")
const btnLogin = document.querySelector(".btn-login")

btnCadastro.addEventListener('click', () => {
    container.classList.add('active')
})

btnLogin.addEventListener('click', () => {
    container.classList.remove('active')
})