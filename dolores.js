window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () =>{
    document.body.removeChild("loader");
  })
});

window.addEventListener('mousemove', function(){
  var body=document.querySelector('body');
  var create=document.createElement('span');
  body.appendChild(create);
  var x=Math.floor(Math.random()*1200);
  var y=Math.floor(Math.random()*1200);
  create.style.top=y+'px';
  create.style.left=x+'px';
  body.appendChild(create);
  setTimeout(function(){
    create.remove();
  },3000)
});

var sliders = document.querySelectorAll('.slider');
var dots = document.querySelectorAll('.dot');
currentimg = 0;

function showfirstimg(n){

  sliders.forEach(function(slid) {
    slid.style.display = 'none';
  });
  dots.forEach(function(dot){
    dot.classList.remove('active');
  })

  // show first img
  sliders[n].style.display = 'block';
  // show active dot
  dots[n].classList.add('active');
}
showfirstimg(currentimg);

// next button
function next(){
  if(currentimg < sliders.length - 1){
    currentimg++;
  }else{
    currentimg = 0;
  }
  showfirstimg(currentimg);
}
document.querySelector('.next').addEventListener('click', next);

// prev button
function prev(){
  if(currentimg <=0){
    currentimg = sliders.length - 1;
  }else{
    currentimg --;
  }
  showfirstimg(currentimg);
}
document.querySelector('.prev').addEventListener('click', prev);

// automatic slide
setInterval(function(){
  next();
},3000)

// indicator button
dots.forEach(function(ind ,n){
  ind.addEventListener('click', function(){
    currentimg = n;
    showfirstimg(n);
  })
})