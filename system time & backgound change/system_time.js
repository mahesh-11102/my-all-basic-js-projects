
        window.setInterval(()=>{
            a=new Date();
            let date= a.toLocaleDateString();//this will give you in date format
            let time= a.getHours()+" : "+a.getMinutes()+" : "+ a.getSeconds();
            document.getElementById('time').innerHTML= time ;
            document.getElementById('date2').innerHTML =  date ;
        },1000);
    