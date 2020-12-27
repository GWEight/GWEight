var newsImg = document.getElementsByClassName('img');
var newsText = document.getElementsByClassName('content-view');
var newsButtons = document.getElementById('aside-box');
let sec = document.getElementsByClassName('radio-style');
let a=0;


fetch('/json/News/main.json')
	.then(res => { return res.json() })
	.then(json => generateStoreContent(json));

function generateStoreContent(data){
	const storeWrapper = document.querySelector('.radio-bar');
	data.items.forEach((item, i) => {
	storeWrapper.appendChild(createNewsStore(item, i))
		});
}

let timer = setInterval((tick), 7000);

	newsButtons.addEventListener( "mouseover", (event)=> {
		if(!event.target.classList.contains('aside-box')){ 
			clearInterval(timer);
			timer = a;
		};
});

	newsButtons.addEventListener( "mouseout", (event)=> {
		if(!event.target.classList.contains('aside-box')){ 
			if(timer == a){timer = setInterval((tick), 7000);};
		};
});
setTimeout(() => {
	let firstNews = document.getElementById('FirstNews');
	firstNews.style.top = '0%'
}, 700);

function tick (){
	a++;
	if(a>6){a=0;};
	sec[a].click();
	sec[a].id= a;
	setTimeout(() => {
		let firstNews = document.getElementById('FirstNews');
		firstNews.style.top = '0%'
	}, 700);
}


function createNewsStore(storeItem, i){
	if (storeItem.value == 1){
		openNews(storeItem.value);
		storeItem.check = 'checked'
		}
	let element = document.createElement('div');
		element.dataset.storeSection = `${storeItem.value}`
	   element.innerHTML = `<input ${storeItem.check} type="radio" name="labeled" id="labeled_${i + 1}" /><label current="${i + 1}" class="radio-style" for="labeled_${i + 1}" ></label>`;
	addHandler(element); 
	return element;
}

function addHandler(el){
	el.addEventListener('click', (e)=> {
	openNews(e.target.parentElement.dataset.storeSection);	
	setTimeout(() => {
		let firstNews = document.getElementById('FirstNews');
		firstNews.style.top = '0%'
	}, 100);
	});
}



function openNews(selectedSection){
	generateNewsContent(selectedSection)
}

function generateNewsContent(selectedSection){
	fetch(`/json/News/${selectedSection}.json`)
	.then(res => { return res.json() })
	.then(data => { 
	sessionStorage.setItem(selectedSection, JSON.stringify(data.items))
	generateStoreContentNews(selectedSection, data) 
	});
}

function generateStoreContentNews(selectedSection, data){
const NewsWrapper = document.querySelector('.content-view');

NewsWrapper.innerHTML = '';
data.items.forEach((item, i) => {
NewsWrapper.appendChild(createStoreItemNews(selectedSection ,item, i))
});
}
function createStoreItemNews(selectedSection, storeItem, i){
const element = document.createElement('div');
element.id = `${storeItem.id}`;
element.className = 'content-view';


if(storeItem.name == 'FirstNews'){
	element.innerHTML = `<div class="img">
<img class="${storeItem.name}" src="${storeItem.img}" alt="">
</div>
<p id="${storeItem.name}text">${storeItem.p}</p>`;
}else{

element.innerHTML = `<div class="img">
<img src="${storeItem.img}" alt="">
</div>
<p style="padding: 0 10px;" id="${storeItem.name}text">${storeItem.p}</p>`;	
	}
return element;
};



alert(navigator.userAgent);
/*
setTimeout(() => {
	setTimeout(() => {
		firstNews.style.top = '-100%'
	}, 5700);
	setInterval(fusrodeiFunc, 7000);

	function fusrodeiFunc(){
			let firstNews = document.getElementById('FirstNews');
			firstNews.style.top = '0%'
			setTimeout(() => {
					firstNews.style.top = '-100%'
			}, 5700);
		}
}, 1000);
*/

/*Store Big Maker

if(storeItem.name == 'FirstNews'){
	element.innerHTML = `<div class="img">
                            <img src="${storeItem.img}" alt="">
                        </div>
                        <p id="${storeItem.name}text">${storeItem.p}</p>`;
}else{

element.innerHTML = ` <div id="${storeItem.name}text" style="background: url('${storeItem.img}') no-repeat; background-position: center; background-size: cover; width: 100%; height: 100%;">
							<p style="text-align:center; display: flex;align-items: center; background: rgb(0 0 0 / 75%); width: 100%; height: 100%;">${storeItem.p}</p>
						</div>`;	
	}
	*/