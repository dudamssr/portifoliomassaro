
const filtros = document.querySelectorAll(".filtro");
const cardsProjeto = document.querySelectorAll(".card-projeto");
const botoesModal = document.querySelectorAll(".modal-btn");
const botoesFecharModal = document.querySelectorAll(".fechar-modal");
const modais = document.querySelectorAll(".modal-overlay");
const linksMenu = document.querySelectorAll(".menu-item");


filtros.forEach(function (botao) {
    botao.addEventListener("click", function () {
       
        filtros.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        const categoria = botao.getAttribute("data-categoria");

        cardsProjeto.forEach(function (card) {
            const categoriaCard = card.getAttribute("data-categoria");

            if (categoria === "todos" || categoriaCard === categoria) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});


botoesModal.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const idModal = botao.getAttribute("data-modal");
        const modalAlvo = document.getElementById(idModal);

        if (modalAlvo) {
            modalAlvo.classList.add("ativo");
        }
    });
});

botoesFecharModal.forEach(function (botao) {
    botao.addEventListener("click", function () {
        fecharTodosModais();
    });
});


modais.forEach(function (modal) {
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            fecharTodosModais();
        }
    });
});


document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        fecharTodosModais();
    }
});

function fecharTodosModais() {
    modais.forEach(function (modal) {
        modal.classList.remove("ativo");
    });
}


linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        linksMenu.forEach(l => l.classList.remove("ativo"));
        link.classList.add("ativo");
    });
});