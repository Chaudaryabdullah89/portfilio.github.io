function mousemoveanimation(){    window.addEventListener('mousemove',function(e){            var circle = document.querySelector('.circle')        if(circle){          circle.style.transform = `translate(${e.clientX}px,${e.clientY}px )` circle.style.display = "Unset"                  }             })}mousemoveanimation()const scrollTotopbtn = function(){  console.log('exucted');    var btntotop = document.querySelector('  window.onscroll = function(e){    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){      btntotop.classList.add = 'show'    }    else{      btntotop.classList.add = 'show'    }    btntotop.addEventListener('click',function(){      console.log('done');            window.scrollTo({                      top : 0,        behavior:"smooth"      })    })}}scrollTotopbtn()  const headersticty = function(){    var header =  document.querySelector('header')    window.onscroll = function(e){      if(document.body.scrollTop >600 || document.documentElement.scrollTop > 600){      header.style.position = 'sticky'      header.style.top = '0';      header.style.transition = 'top 0.3s ease';      }      else{          header.style.position = 'relative';      }             }  }  headersticty()function preloaders(){                                  window.addEventListener('load',function(e){   let loader = document.querySelector('if(loader){   loader.style.display = 'none';}
