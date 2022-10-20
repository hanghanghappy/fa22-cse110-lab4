function timeUpdate(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
setInterval(timeUpdate, 1000);