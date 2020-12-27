const screenWidth = window.screen.width
const screenHeight = window.screen.height
let firstBigBlock = [].slice.call(document.getElementsByClassName('firstBigBlock'));
let mostWhidthBlocksContainer = [].slice.call(document.getElementsByClassName('mostWhidthBlocksContainer'));
let blockText = [].slice.call(document.getElementsByClassName('blockText'));

if(screenHeight>screenWidth){
    firstBigBlock.forEach(element => {
        element.style.setProperty('--mainWidth', screenHeight/100*80 +'px');
        element.style.setProperty('--mainHeight', screenHeight/100*80 +'px');
    });
    mostWhidthBlocksContainer.forEach(element => {
        element.style.setProperty('--mainWidth', screenHeight/100*80 +'px');
        element.style.setProperty('--mainHeight', screenHeight/100*80 +'px');
    });

}else{
    firstBigBlock.forEach(element => {
        element.style.setProperty('--mainWidth', screenHeight/100*49 +'px');
        element.style.setProperty('--mainHeight', screenHeight/100*49 +'px');
    });
    mostWhidthBlocksContainer.forEach(element => {
        element.style.setProperty('--mainWidth', screenHeight/100*49 +'px');
        element.style.setProperty('--mainHeight', screenHeight/100*49 +'px');
    });
}




blockText.forEach(element => {
    let rememberText = element.innerHTML;
    element.addEventListener('mouseover',()=>{
        element.textContent = navigator.userAgent;
    })
    element.addEventListener('mouseout',()=>{
        element.innerHTML = rememberText
    })
});