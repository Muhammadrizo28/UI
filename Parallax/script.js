const gateLeft = document.querySelector('.gate_left');
const gateRight = document.querySelector('.gate_right');
const grass = document.querySelector('.grass');
const treeLeft = document.querySelector('.tree_left');
const treeRight = document.querySelector('.tree_right');
const h1 = document.querySelector('h1');

window.onload = () => {
    window.onscroll = () => {
        let scrollY = window.scrollY;
        let scrollPercent = (scrollY / window.innerHeight) * 100;

        gateLeft.style.transform = `translate(${scrollPercent * 0.25}%, ${scrollPercent * 0.35}%)`;
        gateRight.style.transform = `translate(-${scrollPercent * 0.25}%, ${scrollPercent * 0.35}%)`;

        h1.style.transform = `translateY(${scrollPercent * 2.6}%)`;

        treeLeft.style.transform = `translate(-${scrollPercent * 0.3}%, ${scrollPercent * 0.7}%)`;
        treeRight.style.transform = `translate(${scrollPercent * 0.3}%, ${scrollPercent * 0.7}%)`;
    };
};

const button = document.getElementById('button')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')

button.onclick = () => {

    window.location.href = '/'
}

button2.onclick = () => {

    window.location.href = './forest-html/index.html'
}


const userLocation = window.location.href.includes('forest-html')

userLocation ? button2.classList.add('active') : button.classList.add('active')

