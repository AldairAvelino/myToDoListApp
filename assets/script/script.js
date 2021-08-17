import BotaoDone from "./componentes/concluirTarefa.js";
import BotaoDeleta from "./componentes/deletarTarefa.js";

let addItemTabela = (evento) => {
    evento.preventDefault();
    let input = document.querySelector("[data-form-input]");
    let item = input.value;
    console.log(item);

    let lista = document.querySelector("[data-list]");

    let addTarefa = document.createElement("li");
    addTarefa.classList.add("task");

    let conteudo = `<p class="content">${item}</p>`;
    addTarefa.innerHTML = conteudo;

    addTarefa.appendChild(BotaoDone());
    addTarefa.appendChild(BotaoDeleta());
    lista.appendChild(addTarefa);

    if (lista != "") {
        let remove = document.querySelector("[data-task]");
        remove.style.display = 'none';
    }
    input.value = "";
}

const addNovoItem = document.querySelector("[data-form-button]");
addNovoItem.addEventListener("click", addItemTabela);