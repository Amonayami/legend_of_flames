import { enemys } from './database'

const enemyZone = document.getElementById('enemy-zone')
const enemyTemplate = document.getElementById('enemy-template')

export function spawnRandomEnemy() {
    enemyZone.innerHTML = ''
    const randomEnemy = enemys[Math.floor(Math.random() * enemys.length)]
    const element = enemyTemplate.content.cloneNode(true)
    const enemyName = element.querySelector('.enemy-name');
    const enemyImage = element.querySelector('.enemy-image-container .enemy-image')
    const hpFill = element.querySelector('.hp-container .hp-fill')
    const hpText = element.querySelector('.hp-container .hp-text')
    enemyName.textContent = randomEnemy.name
    enemyImage.src = randomEnemy.image
    enemyImage.alt = randomEnemy.name
    let currentHP = randomEnemy.hp
    const maxHP = randomEnemy.hp
    hpText.textContent = `${currentHP}`
    const enemyElement = element.querySelector('.enemy-image-container')
    enemyElement.addEventListener('click', () => {
        if (currentHP <= 0) return
        currentHP -= 20
        const percent = (currentHP / maxHP) * 100
        hpFill.style.width = `${percent}%`
        hpText.textContent = `${currentHP}`
        if (currentHP <= 0) {
            enemyElement.style.opacity = '0.1'
            enemyElement.style.pointerEvents = 'none'
            setTimeout(spawnRandomEnemy, 300)
        }
    })
    enemyZone.appendChild(element)
}