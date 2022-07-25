const spain = document.querySelector('#card1')
const japan = document.querySelector('#card2')
const usa = document.querySelector('#card3')
const dstBtn1 = document.querySelector('#dest-btn1')
const dstBtn2 = document.querySelector('#dest-btn2')
const dstBtn3 = document.querySelector('#dest-btn3')
const dstBtn = document.querySelector('#destinations__btn')

dstBtn2.style.backgroundColor = '#F2785C'

function japanCard() {
	spain.style.transform = 'translate(-215%)';
	japan.style.transform = 'translate(0%)';
	usa.style.transform = 'translate(0%)';
	dstBtn1.style.backgroundColor = 'rgba(242, 120, 92, 0.5)'
	dstBtn2.style.backgroundColor = '#F2785C'
	dstBtn3.style.backgroundColor = 'rgba(242, 120, 92, 0.5)'
}

function usaCard() {
	spain.style.transform = 'translate(-215%)';
	japan.style.transform = 'translate(110%)';
	usa.style.transform = 'translate(-331%)';
	dstBtn1.style.backgroundColor = 'rgba(242, 120, 92, 0.5)'
	dstBtn2.style.backgroundColor = 'rgba(242, 120, 92, 0.5)'
	dstBtn3.style.backgroundColor = '#F2785C'
}

function spainCard () {
	spain.style.transform = 'translate(123%)';
	japan.style.transform = 'translate(-110%)';
	usa.style.transform = 'translate(0%)'
	dstBtn1.style.backgroundColor = '#F2785C'
	dstBtn2.style.backgroundColor = 'rgba(242, 120, 92, 0.5)'
	dstBtn3.style.backgroundColor = 'rgba(242, 120, 92, 0.5)'
}


dstBtn1.addEventListener('click', () => {
	spainCard()
});

dstBtn2.addEventListener('click', () => {
	japanCard()
});

dstBtn3.addEventListener('click', () => {
	usaCard()
});



