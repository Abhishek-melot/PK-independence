
// Modal code.

const modal =document.getElementById('modal');

function showDialog(){
    // document.body.style.overflow="hidden"
    modal.showModal();
}
    
function closeDialog(){
    modal.close();
    // document.body.style.overflow="auto"
}

// User and talent tabs switching code.

const tabs=document.querySelectorAll(".tab");
const content=document.querySelectorAll(".tab-content")
console.log(tabs)
tabs.forEach((tab,i)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach((t) => {
            t.classList.remove('active');
        })

        content.forEach((c,ci)=>{
            if(i===ci){
                c.classList.add('active');
            }else{
                c.classList.remove('active');
            }
        })

        tab.classList.add('active');
    })  
})

// Dancing and Singing battle buttons

const tabs1=document.querySelectorAll(".tab1");
const scontent=document.querySelectorAll(".tab-schedule-content")
console.log(scontent)
tabs1.forEach((tab,i)=>{
    tab.addEventListener('click',()=>{
        tabs1.forEach((t) => {
            t.classList.remove('active');
        })

        scontent.forEach((c,ci)=>{
            if(i===ci){
                c.classList.add('active');
            }else{
                c.classList.remove('active');
            }
        })

        tab.classList.add('active');
    })  
})

// Carousel code

let leftArrow=document.querySelector('.left');
let rightArrow=document.querySelector('.right');

let prizes=document.querySelectorAll('.prizes');


rightArrow.addEventListener('click',()=>{

    let currentPrize=document.querySelector('.prizes.active');
    

    if(currentPrize.nextElementSibling && currentPrize.nextElementSibling.classList.contains('prizes')){
        console.log(currentPrize.nextElementSibling);
        currentPrize.nextElementSibling.classList.add('active');
    }else{

        prizes[0].classList.add('active')
    }
    currentPrize.classList.remove('active');  
})

leftArrow.addEventListener('click',()=>{

    let currentPrize=document.querySelector('.prizes.active');
    

    if(currentPrize.previousElementSibling && currentPrize.previousElementSibling.classList.contains('prizes')){
        console.log(currentPrize.previousElementSibling);
        currentPrize.previousElementSibling.classList.add('active');
    }else{

        prizes[prizes.length-1].classList.add('active')
    }
    currentPrize.classList.remove('active');  
})