function analisarSentimento(descricao) {
    const palavrasPositivas = ["bom", "ótimo", "incrível"]; // Adicione mais palavras positivas conforme necessário
    const palavrasNegativas = ["ruim", "terrível", "horrível"]; // Adicione mais palavras negativas conforme necessário

    let pontuacao = 0;
    const palavras = tokenizacao(descricao);
    
    palavras.forEach(word => {
        if (palavrasPositivas.includes(word)) {
            pontuacao++;
        } else if (palavrasNegativas.includes(word)) {
            pontuacao--;
        }
    });

    if (pontuacao > 0) {
        return "positivo";
    } else if (pontuacao < 0) {
        return "negativo";
    } else {
        return "neutro";
    }
}
