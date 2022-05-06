import svgs from './*.svg';
import scrollama from 'scrollama';


// using d3 for convenience
var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");
var els3num= [];
var els4num= [];
var rest= [];

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  var els =document.querySelectorAll('#privskool')
  // response = { element, direction, index }
  
  //reset all colors
  var priv =document.querySelectorAll('#privskool')
    for(var i=0;i<priv.length;i++){
      priv[i].style.stroke='#ADADAD';
      priv[i].style.zIndex="1";
    }
    document.querySelector('#squash_priv').style.stroke='#ADADAD';
    document.querySelector('#softball_private').style.stroke='#ADADAD';
  var pub =document.querySelectorAll('#pubskool')
    for(var i=0;i<pub.length;i++){
      pub[i].style.stroke='#DBDBDB';
      pub[i].style.zIndex="1";
    }
    document.querySelector('#squash_public').style.stroke='#DBDBDB';
    document.querySelector('#softball_public').style.stroke='#DBDBDB';

  // remove is-active from all steps
  // then add is-active to this step
 

  // update graphic based on step
  console.log(response.index);
  if(response.index==1){
    var els =document.querySelectorAll('#privskool')
    for(var i=0;i<els.length;i++){
      els[i].style.stroke='#D9D3FF';
    }
    document.querySelector('#squash_priv').style.stroke='#D9D3FF';
    document.querySelector('#softball_private').style.stroke='#D9D3FF';
  }
  if(response.index==2){
    var els2 =document.querySelectorAll('#pubskool')
    for(var i=0;i<els2.length;i++){
      els2[i].style.stroke='#F9FFD3';
      els2[i].style.zIndex="10";
    }
    document.querySelector('#squash_public').style.stroke='#F9FFD3';
    document.querySelector('#softball_public').style.stroke='#F9FFD3';
  }
  if(response.index==3){  
    document.querySelector('#squash_priv').style.stroke='#a4c7f5';
    document.querySelector('#squash_public').style.stroke='#a4c7f5';
  }
  if(response.index==4){
    document.querySelector('#squash_priv').style.stroke='#ADADAD';
    document.querySelector('#squash_public').style.stroke='#DBDBDB';
  }
}
  
function pullInitial(response){
    console.log("pulling");
    var els3 =document.querySelectorAll('#pubskool')
    var els4 =document.querySelectorAll('#privskool')
    rest.push(parseFloat(getComputedStyle(document.querySelector('#squash_priv'))["stroke-width"]).toFixed(4));
    console.log(parseFloat(getComputedStyle(document.querySelector('#squash_priv'))["stroke-width"]).toFixed(4))
    rest.push(parseFloat(getComputedStyle(document.querySelector('#squash_public'))["stroke-width"]).toFixed(4));
    rest.push(parseFloat(getComputedStyle(document.querySelector('#softball_private'))["stroke-width"]).toFixed(4));
    rest.push(parseFloat(getComputedStyle(document.querySelector('#softball_public'))["stroke-width"]).toFixed(4));
    for(var i=0;i<els3.length;i++){
      els3num.push(parseFloat(getComputedStyle(els3[i])["stroke-width"]).toFixed(4));
      }
    for(var i=0;i<els3.length;i++){
        els4num.push(parseFloat(getComputedStyle(els4[i])["stroke-width"]).toFixed(4));
      }
      console.log(rest);
}

function resizeSVG(response){
  if(window.innerWidth<1000){
  
    var els3 =document.querySelectorAll('#pubskool')
    var els4 =document.querySelectorAll('#privskool')
    //console.log(els3);
    //console.log("yeah1");
    document.querySelector('#squash_priv').setAttribute('style','stroke-width:'+rest[0]*(window.innerWidth/1500)+'px');
    document.querySelector('#squash_public').setAttribute('style','stroke-width:'+rest[1]*(window.innerWidth/1500)+'px');
    document.querySelector('#softball_private').setAttribute('style','stroke-width:'+rest[2]*(window.innerWidth/1500)+'px');
    document.querySelector('#softball_public').setAttribute('style','stroke-width:'+rest[3]*(window.innerWidth/1500)+'px');
    for(var i=0;i<els3.length;i++){
      //console.log(els3[i].style["stroke-width"]);
      //var changenum = parseFloat(getComputedStyle(els3[i])["stroke-width"]).toFixed(4)*0.3;
      //console.log("yeah2");
      //console.log(changenum);
      //console.log("yeah4");
      els3[i].setAttribute('style','stroke-width:'+els3num[i]*(window.innerWidth/1500)+'px');
      //console.log("yeah5");
      }
      for(var i=0;i<els3.length;i++){
        //var changenum2 = parseFloat(getComputedStyle(els4[i])["stroke-width"]).toFixed(4)*0.3;
        els4[i].setAttribute('style','stroke-width:'+els4num[i]*(window.innerWidth/1500)+'px');
      }
  }
  else{
    var els3 =document.querySelectorAll('#pubskool')
    var els4 =document.querySelectorAll('#privskool')
    //console.log(els3);
    //console.log("yeah1");
    document.querySelector('#squash_priv').setAttribute('style','stroke-width:'+rest[0]+'px');
    document.querySelector('#squash_public').setAttribute('style','stroke-width:'+rest[1]+'px');
    document.querySelector('#softball_private').setAttribute('style','stroke-width:'+rest[2]+'px');
    document.querySelector('#softball_public').setAttribute('style','stroke-width:'+rest[3]+'px');
    for(var i=0;i<els3.length;i++){
      //console.log(els3[i].style["stroke-width"]);
      //var changenum = parseFloat(getComputedStyle(els3[i])["stroke-width"]).toFixed(4)*0.3;
      //console.log("yeah2");
      //console.log(changenum);
      //console.log("yeah4");
      els3[i].setAttribute('style','stroke-width:'+els3num[i]+'px');
      //console.log("yeah5");
      }
      for(var i=0;i<els3.length;i++){
        //var changenum2 = parseFloat(getComputedStyle(els4[i])["stroke-width"]).toFixed(4)*0.3;
        els4[i].setAttribute('style','stroke-width:'+els4num[i]+'px');
      }
  }
}

function init() {
  pullInitial();
  resizeSVG();
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.4,
      debug: false
    })
    .onStepEnter(handleStepEnter);

  window.addEventListener("resize", scroller.resize);
  window.addEventListener("resize", resizeSVG);
}

// kick things off
init();