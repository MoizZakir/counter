let count=0;
let heading=document.querySelector("h3");


function increase(){
    count++
    heading.innerText=count
}


function decraese(){
    if(count<=0){
        count=0
    }
    else{

    count--
    heading.innerText=count}
}

function reset(){
    count=0
    heading.innerText=count
}

