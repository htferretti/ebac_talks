document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,
        once: true
    });
});

const dataDoEvento = new Date("Dec 21, 2025 20:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaTempo = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const tempoAteEvento = timeStampDoEvento - timeStampAtual

    const dias = Math.floor(tempoAteEvento / (1000 * 60 * 60 * 24))
    const horas = Math.floor((tempoAteEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutos = Math.floor((tempoAteEvento % (1000 * 60 * 60)) / (1000 * 60))
    const segundos = Math.floor((tempoAteEvento % (1000 * 60)) / (1000))

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`

    if(tempoAteEvento < 0) {
        clearInterval(contaTempo)
        document.getElementById('contador').innerHTML = ''
        document.getElementById('hero__text').innerHTML = 'O maior evento de tecnologia do Brasil já se encerrou 😔'
    }
}, 1000)