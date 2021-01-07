window.addEventListener('scroll', moveScrollIndicator);

const scrollIndicatorElt = document.getElementById('indicator');

const maxHeight = window.document.body.scrollHeight - window.innerHeight;

function moveScrollIndicator(e) {

const percentage = ((window.scrollY) / maxHeight) * 100;

scrollIndicatorElt.style.width = percentage + '%';
}