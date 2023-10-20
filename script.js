
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




