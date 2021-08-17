const BotaoDeleta = () => {
    let botaoDeleta = document.createElement("button");
    botaoDeleta.innerText = "Excluir";

    botaoDeleta.addEventListener("click", deletarTarefa);
    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    const botaoDeletarTarefa = evento.target;
    const tarefaTerminada = botaoDeletarTarefa.parentElement;
    tarefaTerminada.remove();
    return botaoDeletarTarefa;
}

export default BotaoDeleta;