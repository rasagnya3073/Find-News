
   
let input1 = document.getElementById("input_news");       
let searchbtn = document.getElementById("searchbtn");


let news_div = document.getElementById("news_result");


window.addEventListener('load',function(){
    getNews('india');
})




const getNews = async(input) => {

    let html=""

    if(input===""){
        input='india';
    }

    let news = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=4908dd0b4026498b9588e2fc13fa1ece`);
    let result = await news.json();
    // console.log(input);
    // console.log(result.articles);

    document.getElementById('news_result').innerHTML="";

    

    result.articles.forEach(
        function(article){
            if (article.title!='[Removed]'){
                console.log(article);
                html+=
                `
                    <a class="news_card" href="${article.url}" target="_blank">
                        <h1>${article.title}</h1>
                        <img src="${article.urlToImage}" alt="">
                        <p>${article.description}</p>
                    </a>
                `;
            }
            
        }
    );

    


    document.getElementById('news_result').innerHTML=html;


    // `
    //     <div class="news_card">
    //         <h1>${result.articles[0].title}</h1>
    //         <img src="${result.articles[0].urlToImage}" alt="">
    //         <p>${result.articles[0].description}</p>
    //     </div>
    // `;
    
}

searchbtn.addEventListener("click", function(){
    let inputVal = input1.value;
    // console.log(inputVal);
    getNews(inputVal);
})


function navClick(item){
    getNews(item);
    if(item==='technology'){
        document.getElementById('technology').style.color="rgb(181, 211, 238)";
        document.getElementById('technology').style.fontWeight="bold";
        document.getElementById('movie').style.color="white";
        document.getElementById('movie').style.fontWeight="10px";
        document.getElementById('sports').style.color="white";
        document.getElementById('sports').style.fontWeight="10px";
        document.getElementById('politics').style.color="white";
        document.getElementById('politics').style.fontWeight="10px";
    }
    if(item==='sports'){
        document.getElementById('sports').style.color="rgb(181, 211, 238)";
        document.getElementById('sports').style.fontWeight="bold";
        document.getElementById('movie').style.color="white";
        document.getElementById('movie').style.fontWeight="10px";
        document.getElementById('technology').style.color="white";
        document.getElementById('technology').style.fontWeight="10px";
        document.getElementById('politics').style.color="white";
        document.getElementById('politics').style.fontWeight="10px";
    }
    if(item==='movie'){
        document.getElementById('movie').style.color="rgb(181, 211, 238)";
        document.getElementById('movie').style.fontWeight="bold";
        document.getElementById('technology').style.color="white";
        document.getElementById('technology').style.fontWeight="10px";
        document.getElementById('sports').style.color="white";
        document.getElementById('sports').style.fontWeight="10px";
        document.getElementById('politics').style.color="white";
        document.getElementById('politics').style.fontWeight="10px";
    }
    if(item==='politics'){
        document.getElementById('politics').style.color="rgb(181, 211, 238)";
        document.getElementById('politics').style.fontWeight="bold";
        document.getElementById('movie').style.color="white";
        document.getElementById('movie').style.fontWeight="10px";
        document.getElementById('sports').style.color="white";
        document.getElementById('sports').style.fontWeight="10px";
        document.getElementById('technology').style.color="white";
        document.getElementById('technology').style.fontWeight="10px";
    }
}

