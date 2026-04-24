async function escreverInfosPais(paisDesejado) {
    const info = await fetch('https://restcountries.com/v3.1/name/' + paisDesejado);
    console.log(await info.json());
}

escreverInfosPais("korea");