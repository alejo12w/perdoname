const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function() {
    alert('siempre te voy a amar pendeja :)')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomx = parseInt(Math.random()*100);
    const randomY =parseInt (Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomx+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})