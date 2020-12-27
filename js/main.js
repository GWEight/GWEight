const screenWidth = window.screen.width
const screenHeight = window.screen.height
let firstBigBlock = [].slice.call(document.getElementsByClassName('firstBigBlock'));
let mostWhidthBlocksContainer = [].slice.call(document.getElementsByClassName('mostWhidthBlocksContainer'));




firstBigBlock[0].style.setProperty('--mainWidth', screenHeight/100*49 +'px');
firstBigBlock[0].style.setProperty('--mainHeight', screenHeight/100*49 +'px');
mostWhidthBlocksContainer[0].style.setProperty('--mainWidth', screenHeight/100*49 +'px');
mostWhidthBlocksContainer[0].style.setProperty('--mainHeight', screenHeight/100*49 +'px');



