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

//TAP
let tapLengEn = [
    {
      "name":"Tap",
      "firstText":`Tap is an addicting marksmanship game! Play it now, relax your brain and have a lot of fun passing the company!
      You need to hit the maximum number of balls in order to achieve the highest result and go to the next level.<a class="redUrl" style=" padding: 50px;" href="ProjData/Tap.apk" download><b>Download</b></a>`,
      "secondText": `Features:
      1. Free game: many skins and bonuses
      2. Simple ball control: tap the screen and fly the ball with one hand
      3. Catchy graphics: neon blocks painted in different colors
      4. Offline mode: there are absolutely no ads in offline mode
  `,
      "thirdText": `
      How to play:
          1. Choose between casual, endless and level play
          2. Match red balls that will give you an extra life
          3. Find the best moment to hit
          4. Try to get better results and get more achievements
          <a href="projects.html" style ="padding:50px;" class="redUrl"><b>Watch silent tutorial</b></a>
      `,
      "fourthText": `In this fun addicting game you can unlock different balls and themes of different levels (legendary ones have their own abilities)! So if you have a lot of free time and you are bored, start the game.
      Just download the game and compete with your friends! Find out which one of you is better!
      And if you encounter any problems, please write to us at <i><a href="mailto:gameweighteight@gmail.com" style="display: unset; width: fit-content;"> gameweighteight@gmail.com </a></i> and we will help you.`,
      "fivethText": `This is the in game panel. There are two states of the fast loading button here(Red - Off / Green - On), if it's on,
      you will be loading directly selected game mode bypassing the main page, just off it by clicking on green button`,
      "sixthText": `And Pause, where you can go to home game directory, on/off music and sound of hit or restart the game immediately.<a class="redUrl" style=" padding: 50px;" href="ProjData/Tap.apk" download><b>Download</b></a>`,
      "back":"back"
    }
]
let tapLengRu = [
    {
      "name":"Tap",
      "firstText":`Tap – это увлекательная игра на меткость! Сыграй прямо сейчас, расслабь свой мозг и хорошенько повеселись, проходя компанию!
      Тебе нужно попасть в максимальное количество шаров, чтобы отличиться наивысшим результатом и пройти на следующий уровень.<a class="redUrl" 
      style=" padding: 50px;" href="ProjData/Tap.apk" download><b>Скачать</b></a>`,
      "secondText": `Особенности:
      1. Бесплатная игра: много скинов и бонусов
      2. Простоe управление мячом: нажми на экран и запусти шар в полет одним пальцем
      3. Броская графика: неоновые блоки, раскрашенные в разные цвета
      4. Офлайн-режим: в режиме офлайн совершенно нету рекламы
  `,
      "thirdText": `Как играть:
      1. Выбери между обычной, бесконечной и уровневой игрой 
      2. Подбирай красные шары, которые дадут тебе дополнительную жизнь
      3. Найди лучший момент для попадания
      4. Старайся добиться лучших результатов и получить больше достижений
      <a href="projects.html" style ="padding:50px;" class="redUrl"><b>Смотреть визуальный туториал</b></a>
      `,
      "fourthText": `В этой забавной увлекательной игре ты можешь разблокировать различные шары и темы разных уровней(легендарные имеют собственные способности)! Так что если у тебя куча свободного времени и ты заскучал – запускай игру.
      Просто загрузи игру и посоревнуйся с друзьями! Узнай, кто из вас лушче!
      А если ты столкнулся с какими-либо проблемами, пожалуйста, напиши нам на <i><a href="mailto:gameweighteight@gmail.com" style="display: unset; width: fit-content;"> gameweighteight@gmail.com </a></i> и мы тебе поможем.`,
      
      "fivethText": `Это панель в игре. Здесь есть два состояния кнопки быстрой загрузки (красный - выключен / зеленый - включен), если она включена,
      вы будете загружать непосредственно выбранный игровой режим, минуя главную страницу, что бы выключить его нажмит на зеленую кнопку`,
      
      "sixthText": `И пауза, где вы можете перейти в домашний каталог игры, включить или выключить музыку / звук попадания либо сразу же перезапустить игру.<a class="redUrl" style=" padding: 50px;" href="ProjData/Tap.apk" download><b>Скачать</b></a>`,
      "back":"Назад"
    }
]
let tapLengUa = [
    {
      "name":"Tap",
      "firstText":`Tap – це захоплююча гра на влучність! Зіграй прямо зараз, розслаб свій мозок і гарненько розважся, проходячи компанію!
     Тобі потрібно потрапити в максимальну кількість куль, щоб відзначитися найвищим результатом і пройти на наступний рівень.<a class="redUrl" 
      style=" padding: 50px;" href="ProjData/Tap.apk" download><b>Завантажити</b></a>`,
      "secondText": `Особливості:
      1. Безкоштовна гра: багато скінів і бонусів
      2. Просте управління м'ячем: натисни на екран і запусти кулю в політ однією рукою
      3. Помітна графіка: неонові блоки, розфарбовані в різні кольори
      4. Офлайн-режим: в режимі офлайн абсолютно немає реклами
  `,
      "thirdText": `Як грати:
      1. Вибери між звичайною, нескінченної і рівневої грою
      2. Підбирай червоні кулі, які дадуть тобі додаткове життя
      3. Знайди кращий момент для потрапляння
      4. Намагайся домогтися кращих результатів і отримати більше досягнень
      <a href="projects.html" style ="padding:50px;" class="redUrl"><b>Дивитися візуальний туторіал</b></a>
      `,
      "fourthText": `У цій забавній, захоплюючій грі ти можеш розблокувати різні кулі і теми різних рівнів (легендарні мають власні здібності)! Так якщо у тебе купа вільного часу і ти занудьгував - запускай гру.
      Просто завантаж гру і позмагаються з друзями! Дізнайся, хто з вас краще!
      А якщо ти зіткнувся з будь-якими проблемами, будь ласка, напиши нам на <i><a href="mailto:gameweighteight@gmail.com" style="display: unset; width: fit-content;"> gameweighteight@gmail.com </a></i> і ми тобі допоможемо.`,
      
      "fivethText": `Це панель у самій грі. Тут є два стани кнопки швидкого завантаження (червоний - вимкнений / зелений - включений), якщо вона включена,
            ви будете завантажувати безпосередньо обраний ігровий режим, минаючи головну сторінку, що б вимкнути його натисн на зелену кнопку`,
      
      "sixthText": `І пауза, де ви можете перейти в домашній каталог гри, включити або вимкнути музику / звук попадання або відразу ж перезапустити гру.<a class="redUrl" style=" padding: 50px;" href="ProjData/Tap.apk" download><b>Завантажити</b></a>`,
      "back":"Назад"
    }
]
let tapLengEs = [
    {
      "name":"Tap",
      "firstText":`Tap – es un divertido juego de.¡Juega ahora, relaja tu cerebro y diviértete mucho pasando la compañía!
      Debes golpear el número máximo de bolas para lograr el resultado más alto y pasar al siguiente nivel.<a class="redUrl" 
      style=" padding: 50px;" href="ProjData/Tap.apk" download><b>Descargar</b></a>`,
      "secondText": `caracteristicas:
      1. Juego gratuito: muchas máscaras y bonificaciones
      2. Control simple del balón: toca la pantalla y lanza el balón al vuelo con una mano
      3. Gráficos llamativos: bloques de neón pintados en diferentes colores.
      4. Modo sin conexión: no hay absolutamente ningún anuncio en el modo sin conexión.`,
      "thirdText": `Cómo jugar:
      1. Elige entre juego casual, interminable y nivelado
      2. Combina bolas rojas que te darán una vida extra
      3. Encuentra el mejor momento para golpear
      4. Intente obtener mejores resultados y más logros
      <a href="projects.html" style ="padding:50px;" class="redUrl"><b>Mira el tutorial visual</b></a>`,
      "fourthText": `En este divertido y adictivo juego puedes desbloquear diferentes bolas y temas de diferentes niveles (¡los legendarios tienen sus propias habilidades)! Entonces, si tienes mucho tiempo libre y estás aburrido, comienza el juego.
      Solo descarga el juego y compite con tus amigos! ¡Descubre cuál de ustedes es mejor!
      Y si tiene algún problema, escríbanos a <i><a href="mailto:gameweighteight@gmail.com" style="display: unset; width: fit-content;"> gameweighteight@gmail.com </a></i> y le ayudaremos.`,
      
      "fivethText": `Este es el panel del juego en sí. Hay dos estados del botón de carga rápida (rojo - apagado / verde - encendido), si está habilitado,
      Descargarás el modo de juego seleccionado directamente, omitiendo la página de inicio para apagarla presionando el botón verde`,
      
      "sixthText": `Y pausa, donde puedes ir al directorio de inicio del juego, encender / apagar la música / sonido o reiniciar el juego inmediatamente.<a class="redUrl" style=" padding: 50px;" href="ProjData/Tap.apk" download><b>Descargar</b></a>`,
      "back":`Atrás`
    }
]
if(window.location.href.indexOf("projects") != -1){ 
    tapFirstProj.addEventListener('click',()=>{
    projectsBoxes.style.left = '130%';
    aside.style.height = 'fit-content';
    aside.style.position = 'absolute';
    aside.style.top = '30%';
    document.querySelectorAll('section-bar li a').forEach(e => e.style.display = "none");
    setTimeout(() => {
            projectsBoxes.style.height = 'fit-content';
            
        if(localStorage.language == 'En'){  
            themesShow(tapLengEn);
        }
        if(localStorage.language == 'Ru'){  
            themesShow(tapLengRu);
        }
        if(localStorage.language == 'Ua'){  
            themesShow(tapLengUa);
        }
        
        if(localStorage.language == 'Es'){  
            themesShow(tapLengEs);
        }
            function themesShow(data){ 
                for(var i = 0; i < data.length; i++){
        projectsBoxes.innerHTML = `
        <div id="tapText" style="width: 100%; height: 100%; color: white;">
            <h2 style="text-align: center;">${data[i].name}</h2>
            <div style="" class="motherDivGenerator"> 
                <img src="./assets/Games/Tap1.jpg" alt="" style="min-width: 510px; min-height: 510px">  
                <p style="width: 310px; align-self: center;  margin: 0; text-align: center;">${data[i].firstText}</p>
            </div>
            <div style="padding: 50px;" class="motherDivGenerator">             
            <p class="someTextwidthClas">${data[i].secondText}</p>
            <p class="someTextwidthClas">${data[i].thirdText}</p>
            </div>

            
            <div class="motherDivGenerator">
                <img src="./assets/Games/tapCompany.png" class="heightPoster" alt="">
                <img src="./assets/Games/tapSimple.png" class="heightPoster" alt="">
                <img src="./assets/Games/tapEndless.png" class="heightPoster" alt="">
            </div>

            <div style=" width: 90%; padding: 50px;" class="motherDivGenerator">
            <p>${data[i].fourthText}</p>
            </div>

            <div style = " padding:50px;" class="motherDivGenerator">
                <img src="./assets/Games/tapAchive.png" class="heightPoster" alt="">
                <img src="./assets/Games/skins.png" class="heightPoster" alt="">
                <img src="./assets/Games/inGameTap.png" class="heightPoster" alt="">
            </div>


            <div class="motherDivGenerator" >
                <img src="./assets/Games/tapBar.png" style="min-width: 450px;">
                <p style ="padding:50px;" class="someTextwidthClas">${data[i].fivethText}</p>
            </div>

            <div class="motherDivGenerator" style ="padding:50px; justify-content: center;" >
                <p class="someTextwidthClas">${data[i].sixthText}</p>
                <img src="./assets/Games/tapPause.png" alt="" class="heightPoster">
            </div>
            
            
            <a href="projects.html" style ="padding:50px;" ><b>${data[i].back}</b></a>
            </div>
            <div style="padding:50px;">
            </div>
            `;
            }
        }
        document.querySelectorAll('section-bar li a').forEach(e => e.style.display = "flex");
        projectsBoxes.style.background = '#efefef21';
        projectsBoxes.style.left = '0';
        projectsBoxes.style.fontSize = `30px`
        document.styleSheets[1].disabled=false;
        document.getElementById("aside").style.width = 'unset';
        }, 1000);
    })
}




