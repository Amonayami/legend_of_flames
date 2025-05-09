import {enemys} from './database'

const enemyZone = document.getElementById('enemy-zone')
const enemyTemplate = document.getElementById('enemy-template')

export function spawnRandomEnemy() {
    enemyZone.innerHTML = ''
    const randomEnemy = enemys[Math.floor(Math.random() * enemys.length)]
    const element = enemyTemplate.content.cloneNode(true)
    element.querySelector('.enemy-name').textContent = randomEnemy.name
    element.querySelector('.enemy-image').src = randomEnemy.image
    element.querySelector('.enemy-image').alt = randomEnemy.name
    const hpFill = element.querySelector('.hp-fill')
    const hpText = element.querySelector('.hp-text')
    let currentHP = randomEnemy.hp
    const maxHP = randomEnemy.hp
    hpText.textContent = `${currentHP}`
    const enemyElement = element.querySelector('.enemy')
    enemyElement.addEventListener('click', () => {
        if (currentHP <= 0) return
        currentHP -= 20
        const percent = (currentHP / maxHP) * 100
        hpFill.style.width = `${percent}%`
        hpText.textContent = `${currentHP}`
        if (currentHP <= 0) {
            enemyElement.style.opacity = '0.1'
            enemyElement.style.pointerEvents = 'none'
            spawnRandomEnemy()
        }
    })
    enemyZone.appendChild(element)
}