// Scene

const perspective = document.querySelector('#scene');
perspective.addEventListener('input', e => {
    document.documentElement.style.setProperty('--perspective', perspective.value)
})
    