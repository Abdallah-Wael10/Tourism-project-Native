let overview =document.getElementsByClassName("overview")
let h1 = document.getElementById("h1")
let p = document.getElementById("p")
let btns0 = document.getElementById("btns0")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")

function styleinject(cssText) {
    let head = document.head
    let style = document.createElement("style")
    style.appendChild(document.createTextNode(cssText))
    head.appendChild(style)
}


//image card part//
let image = [
    `/Destination/des giza/image giza/giza1.jpeg`,
    `/Destination/des giza/image giza/giza4.jpeg`,
    `/Destination/des giza/image giza/giza2.jpeg`,
    `/Destination/des giza/image giza/giza3.jpeg`,

]

btns0.addEventListener('click', ()=>{

    btn4.addEventListener(`click`,()=>{
       styleinject(`
       .informtion > :first-child {
        h1 {
            position: relative;
            top: -1px;
        }
    }
    #btns0:hover{
        background-color: #071597;
        color: white;
        }
      
    
    `)
      })


btn2.addEventListener("click", ()=>{

    btns0.addEventListener(`click`, ()=>{
        styleinject(`
        #btns0{
            position: relative;
            top: -16px;
        }
        `)

      
    })
    styleinject(`
    .informtion > :first-child {
        h1 {
            position: relative;
            top: -22px;
        }
    }
    #btns0 {
        width: 242px;
        left: -2px;
        height: 63px;
        position: relative;
        top: 3px;
        text-align: center;
        border-radius: 18px;
        color: #071597;
        border-color: gray;
        background-color: #FDF0F0;
        border-style: solid;
        font-size: 20px;
    }
    `)
})

btn4.addEventListener(`click`,()=>{

    btns0.style.cssText=`
    width: 211px;
    left: -2px;
    height: 59px;
    position: relative;
    top: -16px;
    text-align: center;
    border-radius: 18px;
    color: #071597;
    border-color: gray;
    background-color: #FDF0F0;
    border-style: solid;
    font-size: 20px;
    `
})

    btns0.style.cssText=`
    background-color: rgb(7, 21, 151);
    width: 211px;
    height: 62px;
    color: white;
    border-radius: 18px;
    border-style: none;
    text-align: center;
    font-size: 15px;
    `


    btn2.style.cssText=`
    width: 211px;
    left: -2px;
    height: 59px;
    position: relative;
    top: -16px;
    text-align: center;
    border-radius: 18px;
    color: #071597;
    border-color: gray;
    background-color: #FDF0F0;
    border-style: none;
    font-size: 20px;
    
    `

    h1.innerHTML=`Overview`
    p.innerHTML=`Giza was built between 222 BC and 587 AD, during the Ptolemaic period, by Ptolemy VI Philometer.
    Ptolemy XII Neos Dionysos continued the work and built the exterior and interior Hypostyle halls.
     The temple was built with local limestone by men who rode on elephants, considered to be a Ptolemaic 
     innovation. Little remains of the original structure. Unfortunately, a good portion of the temple
      has been destroyed over the millennia by earthquakes, erosion by the Nile River and builders who 
      stole stone for unrelated projects. In 1893, a French arc giza  gizagizagizagizagizagizagizagizagizagizagizagiza<button>Read More</button>`

        styleinject(`
        

        .informtion > :first-child {
    h1 {
        position: relative;
        top: -26px;
    }
}

     
        #btn3{
            width: 211px;
            left: -2px;
            height: 59px;
            position: relative;
            top: -16px;
            text-align: center;
            border-radius: 18px;
            color: #071597;
            border-color: gray;
            background-color: #FDF0F0;
            border-style: none;
            font-size: 20px;
        }
        #btn4{
            width: 211px;
            left: -2px;
            height: 59px;
            position: relative;
            top: -16px;
            text-align: center;
            border-radius: 18px;
            color: #071597;
            border-color: gray;
            background-color: #FDF0F0;
            border-style: none;
            font-size: 20px;
        }
        
        .card>h1 {
            position: relative;
            top: -6px;
        }

      
          #btn2:hover{
            background-color: #071597;
            color: white;
            }
            .informtion > :first-child {
                h1 {
                    position: relative;
                    top: -4px;
                }
            }

        
        #btn3:hover{
            background-color:#071597;
            color: white;
            }
        #btn4:hover{
            background-color:#071597;
            color: white;
            }
       
        `)

       

})



btn2.addEventListener("click", ()=>{


    h1.innerHTML='Galerry'
    p.innerHTML=''
    for (let i = 0; i < image.length; i++) {
        let img = document.createElement("img")
        img.setAttribute("id","imgo")
        img.src = image[i]
        p.appendChild(img)
        p.style.cssText=`display:flex; flex-wrap: wrap;  gap:25px;       `

        
    }

    //css
btns0.style.cssText=`

`
    btn2.style.cssText=`   background-color: #071597;
    width: 211px;
    height: 62px;
    color: white;
    border-radius: 18px;
    border-style: none;
    text-align: center;
    font-size: 15px;`
 
styleinject(`

.Destinationgiza {
    width: 100%;
    height: 2420px;
}

.informtion > :first-child {
    h1 {
        position: relative;
        top: -3px;
    }
}

#btns0{
    width: 242px;
    left: -2px;
    height: 63px;
    position: relative;
    top: -17px;
    text-align: center;
    border-radius: 18px;
    color: #071597;
    border-color: gray;
    background-color: #FDF0F0;
    border-style: solid;
    font-size: 20px;
}

#btns0:hover{
    background-color:#071597;
    color: white;
    }
#btn3:hover{
    background-color:#071597;
    color: white;
    }
#btn4:hover{
    background-color:#071597;
    color: white;
    }

    

    #btn4{
        width: 211px;
    left: -2px;
    height: 59px;
    position: relative;
    top: -16px;
    text-align: center;
    border-radius: 18px;
    color: #071597;
    border-color: gray;
    background-color: #FDF0F0;
    border-style: none;
    font-size: 20px
    }

    #btn3{
        width: 211px;
    left: -2px;
    height: 59px;
    position: relative;
    top: -16px;
    text-align: center;
    border-radius: 18px;
    color: #071597;
    border-color: gray;
    background-color: #FDF0F0;
    border-style: none;
    font-size: 20px
    }

`)
   
}



)


btn4.addEventListener('click', ()=>{

    btns0.addEventListener("click",()=>{
        p.style.cssText=`
        background:#FDF0F0;
        `
    })


    styleinject(`
    .overview>:nth-child(2) {
        width: 430px;
        height: 878px;
        gap: 26px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
        left: 32px;
        top: 130px;
    }
    .overview {
        width: 787px;
        width: 787px;
        position: relative;
        top: 260px;
        left: 82px;
        display: flex;

        input {
            width: 349px;
            height: 79px;
            background-color: #FDF0F0;
            border-radius: 7px;
            border-color: #FDF0F0;
            color: #676262;
            position: relative;
            top: -60px;
        }
    }
    #linp {
        width: 346px;
        height: 167px;
        position: relative;
        top: -44px;
    }

    #book {
        width: 371px;
        height: 65px;
        border-radius: 12px;
        background-color: #071597;
        border-color: #071597;
        border-style: solid;
        color: white;
        position: relative;
        left: 5px;
        top: -30px;
    }
  
.overview>:nth-child(2) {
    width: 430px;
    height: 635px;
    gap: 26px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    left: 67px;
    top: 130px;
}
 
    `)
    
   h1.innerHTML=`Include`
   p.innerHTML=`
   <div id="caard">
   <div>
   <h1>Transport</h1>
   <div class="flex">
   <p>AC Bus</p>
   <p class="two">Non AC Bus</p>
   </div>
   </div>
   <div><h1>Hotel</h1>
   <div class="flex">
   <p>Double Bed</p>
   <p class="two">Deluxe Room</p>
   </div>
   </div>
   <div><h1>Food & Drink</h1>
   <div class="flex">
   <p>Breakfest</p>
   <p class='there'>Lunch</p>
   <p>Dinner</p>
   </div>
   </div>
   <div><h1>Snack</h1>
   <div class="flex">
   <p>Breakfest</p>
   <p class='there'>Lunch</p>
   <p>Dinner</p>
   </div>
   </div>
   </div>
   `

    p.style.cssText=`
    width:826px;
    height:506px;
    background:white;
    display: flex;
    flex-direction: column;
    `
    styleinject(`
    #caard>:first-child{
        h1{
            font-size:26px;
        color:black;  
        position: relative;
    left: 36px;
        }
        p{
            font-size:20px;
        }

    }
    #caard>:nth-child(2){
        h1{
            font-size:26px;
        color:black;  
        position: relative;
    left: 36px;
        }
        p{
            font-size:20px;
        }
        }
    #caard>:nth-child(3){
        h1{
            font-size:26px;
        color:black;  
        position: relative;
    left: 36px;
        }
        p{
            font-size:20px;
        }
        }
    #caard>:nth-child(4){
        h1{
            font-size:26px;
        color:black;  
        position: relative;
    left: 36px;
        }
        p{
            font-size:20px;
        }
        }

        #btn4{
            width: 211px;
    left: -2px;
    height: 59px;
    position: relative;
    top: -16px;
    text-align: center;
    border-radius: 18px;
    color: white;
    border-color: gray;
    background-color: #071597;
    border-style: none;
    font-size: 20px;
        }

        #btns0{
            width: 211px;
            left: -2px;
            height: 59px;
            position: relative;
            top: -16px;
            text-align: center;
            border-radius: 18px;
            color: #071597;
            border-color: gray;
            background-color: #FDF0F0;
            border-style: solid;
            font-size: 20px;
        }
        #btn2{
            width: 211px;
            left: -2px;
            height: 59px;
            position: relative;
            top: -16px;
            text-align: center;
            border-radius: 18px;
            color: #071597;
            border-color: gray;
            background-color: #FDF0F0;
            border-style: none;
            font-size: 20px;
        }
   
        #btn3{
            width: 211px;
            left: -2px;
            height: 59px;
            position: relative;
            top: -16px;
            text-align: center;
            border-radius: 18px;
            color: #071597;
            border-color: gray;
            background-color: #FDF0F0;
            border-style: none;
            font-size: 20px;
        }
        #btn2:hover{
            background-color:#071597;
            color: white;
            }

        #btns0:hover{
            background-color:#071597;
            color: white;
            }
       
        #btn3:hover{
            background-color:#071597;
            color: white;
            }

           
    `
)
btn2.style.cssText=`
width: 211px;
left: -2px;
height: 59px;
position: relative;
top: -16px;
text-align: center;
border-radius: 18px;
color: #071597;
border-color: gray;
background-color: #FDF0F0;
border-style: none;
font-size: 20px
`
// btns0.style.cssText=`
// width: 211px;
// left: -2px;
// height: 59px;
// position: relative;
// top: -16px;
// text-align: center;
// border-radius: 18px;
// color: #071597;
// border-color: gray;
// background-color: #FDF0F0;
// border-style: solid;
// font-size: 20px
// `
})
