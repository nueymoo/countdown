 $(document).ready(function(){
    const second = 1000
    const minute = second*60
    const hours = minute*60
    const day = hours*24
    
    function setElement (id, text) {
        $(id).text(text)
    }

    function run() {
        const now = new Date().getTime()
        const anni = new Date("2020-06-23").getTime()
        const timeleft = anni - now
        setElement(".day", Math.floor(timeleft/day))
        setElement(".hours", Math.floor(timeleft%day/hours))
        setElement(".minute", Math.floor(timeleft%hours/minute))
        setElement(".second", Math.floor(timeleft%minute/second))  
    }
    
    run()
    setInterval(run, second)
 });