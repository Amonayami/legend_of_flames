import {heroes} from './database'

const heroZone = document.getElementById('hero')
const heroTemplate = document.getElementById('hero-template')


export function createHero () {
    const element = heroTemplate.content.cloneNode(true)
    const nickname = element.querySelector('.nickname')
    const heroImage = element.querySelector('.hero-image')
    heroImage.src = heroes[0].image
    heroImage.alt = heroes[0].name

    heroZone.appendChild(element);
}

