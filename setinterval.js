setInterval(Dat,1000)

function Dat(){
    let d = new Date();
    document.getElementById("demo").innerHTML=
        d.getHours()+":"+ d.getMinutes()+":"+ d.getSeconds()
     
    }
    