var sec=0
var min=0
var interval

function start(){
   var interval= setInterval(counter,1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('counter').innerHTML=min+'00:00'
}


function counter(){
    sec++
    if(sec==60){
        min++
        sec=0
    }
    document.getElementById('counter').innerHTML=min+':'+sec
}
