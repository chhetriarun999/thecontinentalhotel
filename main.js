let element1 = document.getElementById("view1");
console.log(element1);

let elements2= document.querySelector("#view2");
console.log(element2);
// is dont want to display then none
element2.style.display = "felx";

const views=document.getElementsByClassName("view");
console.log(views);
// query selector will select first element if geneeral is given 
// else if you use query selector ALL (div) then it will select all the div

const sameview=document.querySelectorAll(".view");
console.log(sameview);

const divs=document.querySelectorAll("div");
console.log(divs);

const evendivs = document.querySelectorAll("div:nth-child(2n)");

for (let i=0; i<evendivs.length;i++){
    evendivs[i].style.backgroundcolor="blue";

}

const newText=document.querySelector("nav h1");
newText.textContent="learning Query Selector";

const navText=Document.querySelector("nav");
navText.innerHtml=`<h1>Hello</h1> <p> Learning javaScript</p>`