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
        element.textContent = `Read More`
    })
    element.addEventListener('mouseout',()=>{
        element.innerHTML = rememberText
    })
});

//Projects News
let tapFirstProj = document.getElementById('Tap');
let aside = document.getElementById('aside');
//let projectsBoxes = document.getElementById('projectsBoxes');
tapFirstProj.addEventListener('click',()=>{
    projectsBoxes.style.left = '130%';
    aside.style.height = 'fit-content';
    setTimeout(() => {
        if(localStorage.language == 'En'){  
            projectsBoxes.style.height = 'fit-content';
            projectsBoxes.style.position = 'relative';
            projectsBoxes.style.top = '5%';
        projectsBoxes.innerHTML = `
        <div id="tapText" style="width: 100%; height: 100%; color: white;">
            <h2 style="text-align: center;">Tap</h2>
            <div style="" class="motherDivGenerator"> 
                <img src="./assets/Games/Tap1.jpg" alt="" style="min-width: 510px; min-height: 510px">  
                <p style="width: 310px; align-self: center;  margin: 0; text-align: center;">Tap is an addicting marksmanship game! Play it now, relax your brain and have a lot of fun passing the company!
                You need to hit the maximum number of balls in order to achieve the highest result and go to the next level.<a class="redUrl" style=" padding: 50px;" href="ProjData/Tap.apk" download>Download</a></p>
            </div>
            <div style="padding: 50px;" class="motherDivGenerator">             
            <p class="someTextwidthClas">Features:
                1. Free game: many skins and bonuses
                2. Simple ball control: tap the screen and fly the ball with one hand
                3. Catchy graphics: neon blocks painted in different colors
                4. Offline mode: there are absolutely no ads in offline mode
            </p>
            <p class="someTextwidthClas">
            How to play:
                1. Choose between casual, endless and level play
                2. Match red balls that will give you an extra life
                3. Find the best moment to hit
                4. Try to get better results and get more achievements
                <a href="projects.html" style ="padding:50px;" class="redUrl">Watch silent tutorial</a>
            </p>
            </div>

            
            <div class="motherDivGenerator">
                <img src="./assets/Games/tapCompany.png" class="heightPoster" alt="">
                <img src="./assets/Games/tapSimple.png" class="heightPoster" alt="">
                <img src="./assets/Games/tapEndless.png" class="heightPoster" alt="">
            </div>

            <div style=" width: 100%; padding: 50px;" class="motherDivGenerator">
            <p>In this fun addicting game you can unlock different balls and themes of different levels (legendary ones have their own abilities)! So if you have a lot of free time and you are bored, start the game.
                Just download the game and compete with your friends! Find out which one of you is better!
                And if you encounter any problems, please write to us at <i><a href="mailto:gameweighteight@gmail.com" style="display: unset; width: fit-content;"> gameweighteight@gmail.com </a></i> and we will help you.</p>
            </div>

            <div style = " padding:50px;" class="motherDivGenerator">
                <img src="./assets/Games/tapAchive.png" class="heightPoster" alt="">
                <img src="./assets/Games/skins.png" class="heightPoster" alt="">
                <img src="./assets/Games/inGameTap.png" class="heightPoster" alt="">
            </div>


            <div class="motherDivGenerator" >
                <img src="./assets/Games/tapBar.png" style="min-width: 450px;">
                <p style ="padding:50px;" class="someTextwidthClas"> This is the in game panel. There are two states of the fast loading button here(Red - Off / Green - On), if it's on,
                you will be loading directly selected game mode bypassing the main page, just off it by clicking on green button</p>
            </div>

            <div class="motherDivGenerator" style ="padding:50px; justify-content: center;" >
                <p class="someTextwidthClas">And Pause, where you can go to home game directory, on/off music and sound of hit or restart the game immediately.<a class="redUrl" style=" padding: 50px;" href="ProjData/Tap.apk" download>Download</a></p>
                <img src="./assets/Games/tapPause.png" alt="" class="heightPoster">
            </div>
            
            
            <a href="projects.html" style ="padding:50px;" >Back</a>
            </div>
            <div>
            </div>
            `;
        }
        projectsBoxes.style.background = '#efefef21';
        projectsBoxes.style.left = '0';
    }, 1000);
})






