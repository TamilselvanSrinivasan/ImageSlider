const main= document.querySelector('.main')
const btn=document.querySelectorAll('.btn')
const image=["css","html","js","java"]

let index=0;
btn.forEach((button)=>
{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn1')){
            index--;
        if(index<0) {
            index=image.length-1
        }
      
        main.style.background=`url(images/${image[index]}.jpg)`
        }


   else{
      index++;
        if(index===image.length) index=0
        main.style.background=`url(images/${image[index]}.jpg)`
}
       
      })
})
 

