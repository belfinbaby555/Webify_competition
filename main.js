function gallary(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    document.getElementById(imgs.id).style.transform='scale(1.1) translateY(10px)'
    expandImg.parentElement.style.display = "block";
    function func(){
      document.getElementById(imgs.id).style.transform='scale(1) translateY(0px)'

    }
    setTimeout(func,2000);
  }
