
function mousemoveanimation(){
    window.addEventListener('mousemove',function(e){
    
        var circle = document.querySelector('.circle')
        if(circle){
          circle.style.transform = `translate(${e.clientX}px,${e.clientY}px )`
 circle.style.display = "Unset"
          
        }
     
      
  })
}

mousemoveanimation()


const scrollTotopbtn = function(){
  console.log('exucted');
  
  var btntotop = document.querySelector('#backToTopBtn');
  window.onscroll = function(e){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      btntotop.classList.add = 'show'
    }
    else{
      btntotop.classList.add = 'show'
    }
    btntotop.addEventListener('click',function(){
      console.log('done');
      
      window.scrollTo({
      
        
        top : 0,
        behavior:"smooth"
      })
    })}

}
scrollTotopbtn()
  const headersticty = function(){
    var header =  document.querySelector('header')
    window.onscroll = function(e){
      if(document.body.scrollTop >600 || document.documentElement.scrollTop > 600){
      header.style.position = 'sticky'
      header.style.top = '0';
      header.style.transition = 'top 0.3s ease';
      }
      else{
          header.style.position = 'relative';
      }
    
     
    }

  }
  headersticty()
function preloaders(){
               
                 
  window.addEventListener('load',function(e){
   let loader = document.querySelector('#preloader')
if(loader){

   loader.style.display = 'none';


}
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true
// });
 

})

}
preloaders()

var b1 = document.querySelector('.b-1')
var b2 = document.querySelector('.b-2')
var b3 = document.querySelector('.b-3')
var b4 = document.querySelector('.b-4')
var m1 = document.querySelector('.m-1')
var m2 = document.querySelector('.m-2')
var m3 = document.querySelector('.m-3')
var m4 = document.querySelector('.m-4')

m1.style.display = 'block'
m2.style.display = 'none'
m3.style.display = 'none'
m4.style.display = 'none'

b1.addEventListener('click',()=>{{
  m1.style.display = 'Unset'
  m2.style.display = 'none'
  m3.style.display = 'none'
  m4.style.display = 'none'
 window.location.href = ''
  
}})
b2.addEventListener('click',()=>{{
  m2.style.display = 'Unset'
   m1.style.display = 'none'
  m3.style.display = 'none'
  m4.style.display = 'none'

  
}})
b3.addEventListener('click',()=>{{
  m2.style.display = 'none'
     m1.style.display = 'none'
  m3.style.display = 'Unset'
  m4.style.display = 'none'
  console.log('clicked');
  
}})
b4.addEventListener('click',()=>{{
  m2.style.display = 'none'
     m1.style.display = 'none'
  m3.style.display = 'Unset'
  m4.style.display = 'none'
  console.log('clicked');
  
}})
function email(){
  window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new')
}

