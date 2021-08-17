const BotaoDone = () => {
    let botaoDone = document.createElement("button");
    botaoDone.classList.add("check-button");
    botaoDone.innerText = "Concluir";

    botaoDone.addEventListener("click", tarefaConcluida);
    return botaoDone;
}

const tarefaConcluida = (evento) => {
    const botaoTerminarTarefa = evento.target;
    const tarefaFeita = botaoTerminarTarefa.parentElement;
    tarefaFeita.classList.toggle("done");
}

export default BotaoDone;