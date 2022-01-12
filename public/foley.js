import { Howl } from './howler.min'
const a = document.querySelectorAll('a')
const divs = document.querySelectorAll('div')

a.addEventListener('mouseover', () => {
    const hover = new Howl({
        src: ['/audio/hover.mp3']
    })
    hover.play();
})

divs.addEventListener('mouseover', () => {
    const hoverAlt = new Howl({
        src: ['/audio/hover-alt.mp3']
    })
    hoverAlt.play();
})

a.addEventListener('click', () => {
    const click = new Howl({
        src: ['/audio/click.mp3']
    })
    click.play();
})

a.addEventListener('click', () => {
    const click = new Howl({
        src: ['/audio/click.mp3']
    })
    click.play();
})