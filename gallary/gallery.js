//image card part//
let image = ["images/gallary section/Mask Group (1).png",
"images/gallary section/Mask Group (2).png",
"images/gallary section/Mask Group (3).png",
"images/gallary section/Mask Group (4).png",
"images/gallary section/Mask Group (5).png",
"images/gallary section/Mask Group (6).png",
"images/gallary section/Mask Group (7).png",
"images/gallary section/Mask Group (8).png",
"images/gallary section/Mask Group (9).png",
]

for (let i = 0; i < image.length; i++) {
    //create element
    let part = document.getElementById("part")

 let card = document.createElement(`div`)
 card.setAttribute("class","card")
 let img =document.createElement("img")

    
 //append
 card.appendChild(img)
 part.appendChild(card)
 img.src =image[i]


 //css
 card.style.cssText=`   
  width: 390px;
 height: 332px;
 position: relative;
 left: 37px;`
 img.style.cssText=`
 width: 390px;
 height: 332px;
 `
}

let btn = document.getElementById("view")
part.appendChild(btn)

btn.addEventListener('click', ()=>{
    //image card part//
let image = ["images/gallary section/Mask Group (1).png",
"images/gallary section/Mask Group (2).png",
"images/gallary section/Mask Group (3).png",
"images/gallary section/Mask Group (4).png",
"images/gallary section/Mask Group (5).png",
"images/gallary section/Mask Group (6).png",
"images/gallary section/Mask Group (7).png",
"images/gallary section/Mask Group (8).png",
"images/gallary section/Mask Group (9).png",
"images/gallary section/Mask Group (2).png",
"images/gallary section/Mask Group (3).png",
"images/gallary section/Mask Group (4).png",
"images/gallary section/Mask Group (5).png",
"images/gallary section/Mask Group (6).png",

]

for (let i = 0; i < image.length; i++) {
    //create element
    let part = document.getElementById("part")

 let card = document.createElement(`div`)
 card.setAttribute("class","card")
 let img =document.createElement("img")

    
 //append
 card.appendChild(img)
 part.appendChild(card)
 img.src =image[i]


 //css

 
 card.style.cssText=`   
  width: 390px;
 height: 332px;
 position: relative;
 left: 37px;`
 img.style.cssText=`
 width: 390px;
 height: 332px;
 `
}



let footer =document.querySelector("footer")
footer.style.cssText=` 
height: 381px;
display: flex;
position: relative;
top: 1922px;
font-size: 20px;
color: white;
gap: 143px; `

btn.style.cssText=`
width: 200px;
height: 62px;
position: relative;
left: 560px;
top: 2146px;
border-radius: 12px;
border-width: 2px;
background-color: #D5BEBE;`
btn.innerHTML=`View less`




})

