fetch('/json/News/main.json')
	.then(res => { return res.json() })
	.then(json => generateNewsList(json));
/*
function generateNewsList(data){
    let themesBarJs = document.getElementById('projectsBoxes');
    for(var i = 0; i < data.length; i++){
       let themeRow = `
       <div class="firstBigBlock">
       <div class="blockDate">
         <p>${data[i].NewsPageDateNubmer}</p>
         <p>${data[i].NewsPageDateMon}</p>
       </div>
       <div class="blockText">
         <h4>${data[i].NewsPageName}</h4>
         <p>${data[i].NewsPageShortCurt}</p>
       </div>
       </div>`
 
       themesBarJs.innerHTML += themeRow; 
     
    }
}

*/


function generateNewsList(data){
    const storeWrapper = document.querySelector('#projectsBoxes');
    data.items.forEach((item, i) => {
        storeWrapper.appendChild(createNewsList(item, i))
    });
}

function createNewsList(newsList){
    const element = document.createElement('div');
    element.className = `mostWhidthBlocksContainer`;

            element.innerHTML = `
           <div class="${newsList.themeWeigt}" style="url(../assets/news/${newsList.img}) white center"> 
            <div class="blockDate">
              <p>${newsList.NewsPageDateNubmer}</p>
              <p>${newsList.NewsPageDateMon}</p>
            </div>
            <div class="blockText">
              <h4>${newsList.NewsPageName}</h4>
              <p>${newsList.NewsPageShortCurt}</p>
            </div>
           </div>`;

 /*  if(newsList.themeWeigt == "firstBigBlock"){}else{
        let nextElem = document.createElement('div');
        nextElem.className = `mostWhidthBlocksContainer`;
        if(newsList.themeWeigt == "fourthMidleBlock"){
            nextElem.innerHTML = `
            <div class="fourthMidleBlock">
                <div class="blockDate">
                    <p>${newsList.NewsPageDateNubmer}</p>
                    <p>${newsList.NewsPageDateMon}</p>
                </div>
                <div class="blockText">
                    <h4>${newsList.NewsPageName}</h4>
                    <p>${newsList.NewsPageShortCurt}</p>
                </div>
            </div>`;
        }  
    }*/
    //addHandler(element);
    return element;
}