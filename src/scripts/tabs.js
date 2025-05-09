export function tabs() {
    const tabs = document.querySelectorAll('.tab')
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const dataTab = tab.getAttribute('data-tab')
            document.querySelector('.tab.active').classList.remove('active')
            document.querySelector('.tab-content.active').classList.remove('active')
            tab.classList.add('active')
            document.getElementById(dataTab).classList.add('active')
        })
    })
}