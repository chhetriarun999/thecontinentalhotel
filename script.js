function handleClick(element){ /*so this means button and button is passed through this paramrer so it stored in elements and elements is now given with element.inner html*/
    alert(`You clicked via js`);
    element.innerHTML="Clicked";
    element.style.backgroundColor="blue";
}

const image=document.getElementById("image");
image.addEventListener("mouseover",function(){
this.style="box shadow 2px 2px 2px grey";
this.width="200";
})

image.addEventListener("mouseout",function(){
    this.style="box shadow 2px 2px 2px grey";
    this.width="500";
})