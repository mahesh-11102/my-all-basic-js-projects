var index = 0;
show_slides(index);

function show_slides(i){
index +=i;

var slides = document.getElementsByClassName("my_slides");

for(i=0;i<slides.length;i++)
    slides[i].style.display="none";

if(index >slides.length - 1)
    index=0;

if(index<0)
    index = slides.length-1;

slides[index].style.display = "block";
}
