const screenWidthLeng = window.screen.width
const screenHeightLeng = window.screen.height
var btn = document.querySelector('.btn'); 
let mainBlock = document.getElementById('main');
var LgMenu = document.getElementsByClassName('leng-ul'); 
var rStyle = document.getElementsByClassName('radio-style'); 
var lang = document.querySelector('.language'); 
let bodyLengUlMain = document.getElementById('bodyLengUlMain');
let bodyLengUl = [].slice.call(document.getElementsByClassName('bodyLengUl'));
let lengLi = [].slice.call(document.getElementsByClassName('lengLi'));
let projectsBoxes = document.getElementById('projectsBoxes');
let sectionBar = document.getElementById('section-bar-id');

document.styleSheets[1].disabled=true;
document.styleSheets[2].disabled=true;
if(screenHeightLeng>screenWidthLeng || 950>screenWidthLeng){
document.styleSheets[1].disabled=false;
}


var gear = document.getElementById('gear');
lang.addEventListener('click', openPopup);
gear.addEventListener('click', openPopup);
lang.addEventListener('mouseover', colorSet);
gear.addEventListener('mouseover', colorSet);
lang.addEventListener('mouseout', colorReSet);
gear.addEventListener('mouseout', colorReSet);


function colorSet(event) {
  gear.classList.add('active'); 
  lang.style.color="tomato";
}
function colorReSet(event) {
  gear.classList.remove('active'); 
  lang.style.color="white";
}
function openPopup() {
  lang.removeEventListener('mouseout', colorReSet);
  gear.removeEventListener('mouseout', colorReSet);
  lang.removeEventListener('click', openPopup);
  gear.removeEventListener('click', openPopup);

  lang.addEventListener('click', closePopup);
  gear.addEventListener('click', closePopup);
  
  

  bodyLengUl[0].style.height = '1%';
  setTimeout(() => {
    bodyLengUl[0].style.width = '100%';
  }, 1);
  setTimeout(() => {
    
    bodyLengUl[0].style.height = '30%';
    lengLi.forEach(element => {
      element.style.width = '40%';
      element.style.height = '50%';
     });
    setTimeout(() => {
      bodyLengUlMain.style.display =  'flex';
    }, 100);
  }, 700);
}

function closePopup(){
  lang.removeEventListener('click', closePopup);
  gear.removeEventListener('click', closePopup);

  lang.addEventListener('mouseout', colorReSet);
  gear.addEventListener('mouseout', colorReSet);
  lang.addEventListener('click', openPopup);
  gear.addEventListener('click', openPopup);
  bodyLengUl[0].style.height = '1%';
  bodyLengUlMain.style.display =  'none';

  setTimeout(() => {
    bodyLengUl[0].style.width = '0%';
    btn.classList.toggle("active");
    
  }, 700);
}

let gpostBlank = [].slice.call(document.getElementsByClassName('gweight-post-blank'));
let hrefsBar = [].slice.call(document.getElementsByClassName('hrefsBar'));

lengLi[0].addEventListener('click',()=>{
  localStorage.language = 'En';
  document.location.reload();
})
lengLi[1].addEventListener('click',()=>{
  localStorage.language = 'Es';
  document.location.reload();
})
lengLi[2].addEventListener('click',()=>{
  localStorage.language = 'Ru';
  document.location.reload();
})
lengLi[3].addEventListener('click',()=>{
  localStorage.language = 'Ua';
  document.location.reload();
})
if(localStorage.language == 'En'){
  document.body.classList.toggle('azonixFont');
}

if(localStorage.language == 'Ru'){
  document.body.classList.toggle('monospaceFont');
  if(window.location.href.indexOf("index") != -1){ 
    gpostBlank[0].style.fontSize= '30px';
    gpostBlank[0].textContent = `Новости это хорошо, честные новсти ещё лучше, а новости об играх - бесценны!`;
  }
  lang.textContent = `Языки`;
  lang.style.fontSize= '35px';
  document.querySelector(".right-bar").style.width = "20%";
  hrefsBar.forEach(e => e.style.fontSize= '36px');
  hrefsBar[0].textContent = `Гланая`;
  hrefsBar[1].textContent = `Новости`;
  hrefsBar[2].textContent = `Магазин`;
  hrefsBar[3].textContent = `Проекты`;
  hrefsBar[4].textContent = `О'нас`;
  if(window.location.href.indexOf("projects") != -1){ 
    document.getElementsByClassName('blockDateMonth')[0].textContent = 'Ноя';
    document.getElementsByClassName('blockTextText')[0].textContent = 'Это увлекательная игра на меткость! Сыграй прямо сейчас, расслабь свой мозг и хорошенько повеселись';
  }
}

if(localStorage.language == 'Es'){
  document.body.classList.toggle('azonixFont');
  //gpostBlank[0].style.fontSize= '30px';
  //gpostBlank[0].textContent = `Новости это хорошо, честные новсти ещё лучше, а новости об играх - бесценны!`;
  lang.textContent = `Lengua`;
  hrefsBar[0].textContent = `Casa`;
  hrefsBar[1].textContent = `Noticias`;
  hrefsBar[2].textContent = `Compras`;
  hrefsBar[3].textContent = `Proyectos`;
  hrefsBar[4].textContent = `Sobre`;
  if(window.location.href.indexOf("projects") != -1){ 
    document.getElementsByClassName('blockTextText')[0].textContent = 'Es un divertido juego de.¡Juega ahora, relaja tu cerebro y diviértete mucho';
  }
}

if(localStorage.language == 'Ua'){
  document.body.classList.toggle('monospaceFont');
  lang.style.fontSize= '35px';
  document.querySelector(".right-bar").style.width = "20%";
  hrefsBar.forEach(e => e.style.fontSize= '36px');
  //gpostBlank[0].style.fontSize= '30px';
  //gpostBlank[0].textContent = `Новости это хорошо, честные новсти ещё лучше, а новости об играх - бесценны!`;
  lang.textContent = `Мова`;
  lang.style.fontSize= '42px';
  hrefsBar.forEach(e => e.style.fontSize= '40px');
  hrefsBar[0].textContent = `Головна`;
  hrefsBar[1].textContent = `Новини`;
  hrefsBar[2].textContent = `Магазин`;
  hrefsBar[3].textContent = `Проекти`;
  hrefsBar[4].textContent = `Про'нас`;
  if(window.location.href.indexOf("projects") != -1){ 
    document.getElementsByClassName('blockDateMonth')[0].textContent = 'Лист';
    document.getElementsByClassName('blockTextText')[0].textContent = 'Це захоплююча гра на влучність! Зіграй прямо зараз, розслаб свій мозок і гарненько розважся';
  }
}


 /*phoneMenu*/

btn.addEventListener('click', openMenu); 
 
function openMenu(button) { 
  btn.classList.toggle("active"); 
  btn.classList.toggle("not-active"); 
  if (btn.classList.contains("active")) { 
    LgMenu[0].style.display = "flex"; 
    LgMenu[0].style.animation = "ease .7s LgMenu forwards"; 
  } else { 
    LgMenu[0].style.display = "none"; 
  } 
}

if(window.location.href.indexOf("index") == -1){ 
  if(document.styleSheets[1].disabled==true){
    document.getElementById("aside").style.width = '77.5%';
  }
  if(screenWidthLeng<screenHeightLeng){
  projectsBoxes.style.flexDirection = 'row';
  projectsBoxes.style.width = '100%';
  projectsBoxes.style.height = '80%';
}
  
}

let language = localStorage.getItem("language");
if(language == null){ language = 'En';};
localStorage.setItem("language", language);