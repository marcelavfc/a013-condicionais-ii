let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch(nacionalidade){
    case "brasileira" || "brasileiro":
    console.log("a pessoa é do Brasil!");
    break

    case "argentina" || "argentino":
    console.log("a pessoa é da Argentina!");  
    break

    console.log("a pessoa é do Uruguai!");
    case "uruguaia" || "uruguaio":
    break

    console.log("a pessoa é do Chile!");
    case "chilena" || "chileno":
    break

    console.log("a pessoa é da Colômbia!");
    case "colombiana" || "colombiano":
    break

    default:
    console.log("nacionalidade não encontrada")
}