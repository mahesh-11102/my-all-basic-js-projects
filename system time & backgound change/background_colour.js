   
const button = document.querySelector("button")
const colors = ['#F2AA4CFF', 'lightgreen', 'cyan', 'orangered', 'pink', 'seablue']

button.addEventListener('click', changed)

function changed(){
  console.log("changing....");
const colorIndex= parseInt(Math.random()*colors.length+1)
document.getElementById('button').style.backgroundColor = colors[colorIndex];
document.getElementById('lol').style.backgroundColor = colors[colorIndex + 1];
document.getElementById('wow').style.backgroundColor = colors[colorIndex-1];
}