fetch('/json/store/main.json')
	.then(res => { return res.json() })
    .then(json => generateNewsList(json));


function generateNewsList(data){
    let projectsBoxeses = document.getElementById('projectsBoxes');
    for(var i = 0; i < data.items.length; i++){
        if(localStorage.language == 'Ru'){
            Name = data.items[i].NewsPageNameRu;
            month = data.items[i].NewsPageDateMonRu;
            shortCurt = data.items[i].NewsPageShortCurtRu;
        }
        if(localStorage.language == 'En'){
            Name = data.items[i].NewsPageName;
            month = data.items[i].NewsPageDateMon;
            shortCurt = data.items[i].NewsPageShortCurt;
        }
        if(localStorage.language == 'Ua'){
            Name = data.items[i].NewsPageNameUa;
            month = data.items[i].NewsPageDateMonUa;
            shortCurt = data.items[i].NewsPageShortCurtUa;
        }
        if(localStorage.language == 'Es'){
            Name = data.items[i].NewsPageNameEs;
            month = data.items[i].NewsPageDateMonEs;
            shortCurt = data.items[i].NewsPageShortCurtEs;
        }
        let themeRow = `                
                <div onclick="countMerchNews(this.title)" title="${data.items[i].content}" class="bigBlock" id="merch${data.items[i].id}" style="background: url('assets/merch/${data.items[i].id}/back.png') no-repeat #ffffffd4 center ;">
                  <div class="blockDate">
                    <p>${data.items[i].NewsPageDateNubmer}</p>
                    <p class="blockDateMonth">${month}</p>
                  </div>
                  <div class="blockText">
                    <h4>${Name}</h4>
                    <p class="blockTextText">${shortCurt}</p>
                  </div>
                </div>`
        projectsBoxeses.innerHTML += themeRow; 

        
    }
};

function countMerchNews(clicked_title){
    projectsBoxes.style.left = '130%';
    aside.style.height = 'fit-content';
    aside.style.position = 'absolute';
    aside.style.top = '30%';
    if(document.styleSheets[1].disabled != false){
        document.querySelectorAll('section-bar li a').forEach(e => e.style.display = "none");
    }
    setTimeout(() => {
    if(localStorage.language == 'Ru'){
        fetch(clicked_title+'ru.json')
    	    .then(ress => { return ress.json() })
            .then(json => generateNews(json));
    }
    if(localStorage.language == 'En'){
        fetch(clicked_title+'en.json')
    	    .then(ress => { return ress.json() })
            .then(json => generateNews(json));
    }
    if(localStorage.language == 'Ua'){
        fetch(clicked_title+'ua.json')
    	    .then(ress => { return ress.json() })
            .then(json => generateNews(json));
    }
    if(localStorage.language == 'Es'){
        fetch(clicked_title+'es.json')
    	    .then(ress => { return ress.json() })
            .then(json => generateNews(json));
    }

    function generateNews(data){
        projectsBoxes.innerHTML = `
        <div id="tapText" style="width: 100%; height: 100%; color: white;">
            <h2 style="text-align: center;">${data.name}</h2>
            <div style="" class="motherDivGenerator"> 
                <iframe src="${data.video}" style="min-width: 650px; min-height: 500px;" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p style="align-self: center;  margin: 0; text-align: center;">${data.form}</p>
            </div>
            <div style="padding: 50px;" class="motherDivGenerator">             
            <div class="someTextwidthClas">${data.text2}</div>
            <div class="someTextwidthClas">${data.text3}</div>
            </div>

            
            <div class="motherDivGenerator">
                <img src="${data.img2}" style="min-width: 410px; min-height: 410px" class="heightPoster" alt="">
                <img src="${data.img3}" style="min-width: 410px; min-height: 410px" class="heightPoster" alt="">
                <img src="${data.img4}" style="min-width: 410px; min-height: 410px" class="heightPoster" alt="">
            </div>

            <div style=" width: 90%; padding: 50px;" class="motherDivGenerator">
            <p>${data.text4}</p>
            </div>

            <div style = " padding:50px;" class="motherDivGenerator">
                <img src="${data.img5}" style="min-width: 410px; min-height: 410px"  class="heightPoster" alt="">
                <img src="${data.img6}" style="min-width: 410px; min-height: 410px"  class="heightPoster" alt="">
                <img src="${data.img7}" style="min-width: 410px; min-height: 410px"  class="heightPoster" alt="">
            </div>


            <div class="motherDivGenerator" > 
                <img src="${data.img1}" alt=""style="min-width: 410px; min-height: 410px">  
                <p style ="padding:50px;" class="someTextwidthClas">${data.text5}</p>
            </div>
           
            <div class="motherDivGenerator" style ="padding:50px; justify-content: center;" >
                ${data.form}
            </div>
            
            
            <a href="projects.html" style ="padding:50px;" ><b>${data.back}</b></a>
            </div>
            <div style="padding:50px;">
            </div>
            `;
    }
    document.querySelectorAll('section-bar li a').forEach(e => e.style.display = "flex");
    projectsBoxes.style.background = '#efefef21';
    projectsBoxes.style.left = '0';
    projectsBoxes.style.fontSize = `30px`
    document.styleSheets[2].disabled=false;
    aside.style.width = '99%';
    }, 1000);

}