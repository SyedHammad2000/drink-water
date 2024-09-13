const smallcups = document.querySelectorAll(".cup-small");
const litres = document.getElementById("liters");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");


smallcups.forEach((cup,idx)=>{
    console.log(idx)
    cup.addEventListener('click',()=>{

        
        highlightCups(idx);
    
    })

   

    
})

function highlightCups(idx){
    if(smallcups[idx].classList.contains("full") && !smallcups[idx].nextElementSibling.classList.contains("full")){
        idx--;
        console.log(idx--);
    }

    smallcups.forEach((cup,idx2)=>{
        if(idx2<=idx){
            cup.classList.add("full")
            console.log(idx2,idx);
        }
        else{
            cup.classList.remove("full")
        }
    })
    updatebigcup();
}
function updatebigcup(){
    const fullcups = document.querySelectorAll(".cup-small.full").length
    console.log(fullcups);
    const totalCups = smallcups.length
    console.log(totalCups);

    if(fullcups===0){
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullcups/totalCups * 330}px`;
        percentage.innerText = `${fullcups/totalCups * 100}%`
    }
    if(fullcups===totalCups){
        remained.style.visibility='hidden';
        remained.style.height=0;
    }else
    {
        remained.style.visibility='visible';
        litres.innerText=`${2-(250*fullcups/1000)}`
    }
}
