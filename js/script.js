const global={
    currentPage: window.location.pathname,
};

function changeColorOfActivePage(){
    const links=document.querySelectorAll(".nav-link");
    links.forEach((link) => {
        if(link.getAttribute('href') === global.currentPage){
            link.classList.add('active');
        }
    });
    }


function init() {


    switch(global.currentPage){
        case '/':
            console.log("Home");
            break;
            case '/movie-details.html':
                console.log("Movie Detail");
                break;  
                case '/shows.html':
                console.log("TV shows");
                break; 
                case '/tv-details.html':
                    console.log("TV detail");
                    break;    
                
      
                    
    }

    changeColorOfActivePage();
    
}

document.addEventListener("DOMContentLoaded",init);
