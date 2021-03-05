
<script>
    
    function newfunc() {
        
        a = new Date();
        day ="AM"
        hours = a.getHours();
        if (hours > 12){
            hours = hours -12;
            day = 'PM'
        }
        else{
            
        }
        document.getElementById("hours").innerHTML =("0"+ hours).slice(-2)+':';
        document.getElementById("minutes").innerHTML = ("0"+ a.getMinutes()).slice(-2)+':';
        document.getElementById("seconds").innerHTML = ("0"+ a.getSeconds()).slice(-2)+"&nbsp;"+day;


    }
    setInterval(newfunc,1000);
</script
