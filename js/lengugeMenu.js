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
  lang.style.color="red";
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
    
    bodyLengUl[0].style.height = '20%';
    lengLi.forEach(element => {
      element.style.width = '30%';
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
    
  }, 700);
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

if(window.location.href.indexOf("news") != -1){ 
  document.getElementById("article").style.width = '22.5%';
  if(document.styleSheets[1].disabled==true){
    document.getElementById("aside").style.width = '77.5%';
  }
  projectsBoxes.style.setProperty('--Width', screenWidthLeng/100*80 +'px');
  projectsBoxes.style.setProperty('--Height', screenHeightLeng/100*65 +'px');
  if(screenWidthLeng<screenHeightLeng){
  projectsBoxes.style.flexDirection = 'row';
  projectsBoxes.style.width = '80%';
  projectsBoxes.style.height = '80%';
}
  
}
