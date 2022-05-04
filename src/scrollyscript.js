import svgs from './*.svg';
import scrollama from 'scrollama';


// using d3 for convenience
var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  var els =document.querySelectorAll('#privskool')
  // response = { element, direction, index }
  
  //reset all colors
  var priv =document.querySelectorAll('#privskool')
    for(var i=0;i<priv.length;i++){
      priv[i].setAttribute('style','stroke:#ADADAD');
      priv[i].style.zIndex="1";
    }
    document.querySelector('#squash_priv').setAttribute('style','stroke:#ADADAD');
    document.querySelector('#softball_private').setAttribute('style','stroke:#ADADAD');
  var pub =document.querySelectorAll('#pubskool')
    for(var i=0;i<pub.length;i++){
      pub[i].setAttribute('style','stroke:#DBDBDB');
      pub[i].style.zIndex="1";
    }
    document.querySelector('#squash_public').setAttribute('style','stroke:#DBDBDB');
    document.querySelector('#softball_public').setAttribute('style','stroke:#DBDBDB');

  // remove is-active from all steps
  // then add is-active to this step
 

  // update graphic based on step
  console.log(response.index);
  if(response.index==1){
    var els =document.querySelectorAll('#privskool')
    for(var i=0;i<els.length;i++){
      els[i].setAttribute('style','stroke:#D9D3FF');
    }
    document.querySelector('#squash_priv').setAttribute('style','stroke:#D9D3FF');
    document.querySelector('#softball_private').setAttribute('style','stroke:#D9D3FF');
  }
  if(response.index==2){
    var els2 =document.querySelectorAll('#pubskool')
    for(var i=0;i<els2.length;i++){
      els2[i].setAttribute('style','stroke:#F9FFD3');
      els2[i].style.zIndex="10";
    }
    document.querySelector('#squash_public').setAttribute('style','stroke:#F9FFD3');
    document.querySelector('#softball_public').setAttribute('style','stroke:#F9FFD3');
  }
  if(response.index==3){
    console.log("fire")
    document.querySelector('#squash_priv').setAttribute('style','stroke:#a4c7f5');
    document.querySelector('#squash_public').setAttribute('style','stroke:#a4c7f5');
  }
  if(response.index==4){
    document.querySelector('#squash_priv').setAttribute('style','stroke:#ADADAD');
    document.querySelector('#squash_public').setAttribute('style','stroke:#DBDBDB');
  }
}

function init() {
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.4,
      debug: false
    })
    .onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener("resize", scroller.resize);
}

// kick things off
init();