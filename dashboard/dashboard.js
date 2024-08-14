
// Function for css 
function styleinject(cssText) {
    let head = document.head
    let style = document.createElement("style")
    style.appendChild(document.createTextNode(cssText))
    head.appendChild(style)
}
// create element
let destination = document.getElementById("destination")
let order =document.getElementById("order")
let users =document.getElementById("users")
let earn =document.getElementById("earn")

// array data
let bedo = [
    {
    "id": 'sharm',
    "Total Destination": '92',
    "Total Order": '332',
    "Active User": '2332',
    "Earning": 7890
    },
 
  ]

  // inner html

  destination.innerHTML=`${bedo[0]["Total Destination"]}`
  order.innerHTML=`${bedo[0]["Total Order"]}`
  users.innerHTML=`${bedo[0]["Active User"]}`
  earn.innerHTML=`${bedo[0].Earning}`


  // if earning more than 10K the dashboard will change
if (earn.innerHTML > 10000) {
    styleinject(`

    @keyframes bedo2 {

        from{
            transform: translateY(-200px);
    
        }
    
        to{
            transform: translateY(0);
        }
    @keyframes bedo {

        from{
            transform: translateY(-200px);
    
        }
    
        to{
            transform: translateY(0);
        }
    `)

    styleinject(`

        
    
  
            
    
 
    .bigcontinar>:first-child>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;

    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(5)>:first-child{
        width: 24px;
        height: 55px;
        background-color: #071597;
        position: relative;
        top: 175px;
    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(6)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(10)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(9)>:first-child{
        width: 24px;
        height: 150px;
        background-color: #071597;
        position: relative;
        top: 80px;
    animation-name: bedo2;
    animation-duration: 4s;
    }
    .bigcontinar>:nth-child(8)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(2)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(7)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(4)>:first-child{
        width: 24px;
        height: 55px;
        background-color: #071597;
        position: relative;
        top: 175px;

    animation-name: bedo;
    animation-duration: 4s;
    }
    .bigcontinar>:nth-child(3)>:first-child{
        width: 24px;
        height: 230px;
        background-color: #071597;
        position: relative;
        top: 0;

    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(12)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo;
    animation-duration: 2s;
    }
    .bigcontinar>:nth-child(11)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;


    animation-name: bedo2;
    animation-duration: 3s;
    }
    
    

    `)}
// get element 
let btn1 =document.getElementById("btns1")
let btn2 =document.getElementById("btns2")
let btn3 =document.getElementById("btns3")



// this buttnon for dashboard {2023} but its 100% fake

btn1.addEventListener("click", ()=>{

    styleinject(`

    @keyframes bedo2 {

        from{
            transform: translateY(-200px);
    
        }
    
        to{
            transform: translateY(0);
        }
    @keyframes bedo {

        from{
            transform: translateY(-200px);
    
        }
    
        to{
            transform: translateY(0);
        }
    `)

    //css

    styleinject(`
    .bigcontinar>:first-child>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;

    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(5)>:first-child{
        width: 24px;
        height: 55px;
        background-color: #071597;
        position: relative;
        top: 175px;
    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(6)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(10)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(9)>:first-child{
        width: 24px;
        height: 150px;
        background-color: #071597;
        position: relative;
        top: 80px;
    animation-name: bedo2;
    animation-duration: 4s;
    }
    .bigcontinar>:nth-child(8)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(2)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(7)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(4)>:first-child{
        width: 24px;
        height: 55px;
        background-color: #071597;
        position: relative;
        top: 175px;

    animation-name: bedo;
    animation-duration: 4s;
    }
    .bigcontinar>:nth-child(3)>:first-child{
        width: 24px;
        height: 230px;
        background-color: #071597;
        position: relative;
        top: 0;

    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(12)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo;
    animation-duration: 2s;
    }
    .bigcontinar>:nth-child(11)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;


    animation-name: bedo2;
    animation-duration: 3s;
    }
    
    

    `)
})
// this buttnon for dashboard {2022} but its 100% fake

btn2.addEventListener("click", ()=>{

    //css
    styleinject(`

    @keyframes bedo2 {

        from{
            transform: translateY(-200px);
    
        }
    
        to{
            transform: translateY(0);
        }
    @keyframes bedo {

        from{
            transform: translateY(-200px);
    
        }
    
        to{
            transform: translateY(0);
        }
    `)

 //css
    styleinject(`

    .bigcontinar>:first-child>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;

    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(10)>:first-child{
        width: 24px;
        height: 55px;
        background-color: #071597;
        position: relative;
        top: 175px;
    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(9)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(7)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(6)>:first-child{
        width: 24px;
        height: 150px;
        background-color: #071597;
        position: relative;
        top: 80px;
    animation-name: bedo2;
    animation-duration: 4s;
    }
    .bigcontinar>:nth-child(5)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(4)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(3)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(2)>:first-child{
        width: 24px;
        height: 55px;
        background-color: #071597;
        position: relative;
        top: 175px;

    animation-name: bedo2;
    animation-duration: 4s;
    }
    .bigcontinar>:nth-child(12)>:first-child{
        width: 24px;
        height: 230px;
        background-color: #071597;
        position: relative;
        top: 0;

    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(11)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo;
    animation-duration: 2s;
    }
    .bigcontinar>:nth-child(8)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;


    animation-name: bedo2;
    animation-duration: 3s;
    }
    
    

    `)
})

// this buttnon for dashboard {2019} but its 100% fake

btn3.addEventListener("click",()=>{

    styleinject(`

    @keyframes bedo2 {

        from{
            transform: translateY(-200px);
    
        }
    
        to{
            transform: translateY(0);
        }
    @keyframes bedo {

        from{
            transform: translateY(-200px);
    
        }
    
        to{
            transform: translateY(0);
        }
    `)

 
    styleinject(`

    .bigcontinar>:first-child>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;

    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(3)>:first-child{
        width: 24px;
        height: 55px;
        background-color: #071597;
        position: relative;
        top: 175px;
    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(2)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(5)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(4)>:first-child{
        width: 24px;
        height: 150px;
        background-color: #071597;
        position: relative;
        top: 80px;
    animation-name: bedo;
    animation-duration: 4s;
    }
    .bigcontinar>:nth-child(7)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(6)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(9)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;
    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(8)>:first-child{
        width: 24px;
        height: 55px;
        background-color: #071597;
        position: relative;
        top: 175px;

    animation-name: bedo;
    animation-duration: 4s;
    }
    .bigcontinar>:nth-child(11)>:first-child{
        width: 24px;
        height: 230px;
        background-color: #071597;
        position: relative;
        top: 0;

    animation-name: bedo2;
    animation-duration: 3s;
    }
    .bigcontinar>:nth-child(10)>:first-child{
        width: 24px;
        height: 181px;
        background-color: #071597;
        position: relative;
        top: 49px;
    animation-name: bedo;
    animation-duration: 2s;
    }
    .bigcontinar>:nth-child(12)>:first-child{
        width: 24px;
        height: 96px;
        background-color: #071597;
        position: relative;
        top: 134px;


    animation-name: bedo;
    animation-duration: 3s;
    }
    
    

    `)
})

// function  for css
function styleinject(cssText) {
    let head = document.head
    let style = document.createElement("style")
    style.appendChild(document.createTextNode(cssText))
    head.appendChild(style)
    
}

let b2 = document.getElementById("b2")
let sec2 = document.getElementById("sec2")

// this button for Add Destination
b2.addEventListener("click", ()=>{
// css for buttons
    styleinject(`
    #b1{
        color: #676262;

    }
    #b2{
        color:#071597;
    }
    #b3{
        color: #676262;

    }
    `)
// inner html
    sec2.innerHTML=`        <h1>Add Destination</h1>
    <form>
 <div class="f3">
        <input type="text" name="" id="" placeholder="Destionation Name" required>
        <input type="text" name="" id="" placeholder="Location" required>
        <input type="text" name="" id="" placeholder="Tour Duration" required>
        <input type="text" name="" id="" placeholder="Price" required>
        <input type="text" id="big" placeholder="Short description of the destination" required>
    </div>

    <div class="info">
        <h1>Information</h1>
        <input type="text" placeholder="Add information or stories about the destination" required>
    </div>

    <div class="gallary">
        <h1>Gallery</h1>
        <input type="file" placeholder="Upload Destination Photo" required>
        
    </div>

    <div class="trip">
        <h1>Trip Plan</h1>
        <button>Trip Plan</button>
        <input type="text" placeholder="Example: Day 1 , Plan 1 ,">
    </div>

    <div class="include">
        <h1>Include</h1>
        <div class="big">
            <label for="">Facility Name:
                <button>Add Facility</button>
                <input type="text" placeholder="Example: Transport" required>
            </label>
        </div>
        <div class="big2">
<label>Facility Detail:
            <button>Add Facility Details</button>
            <input type="text" placeholder="Example: AC Bus" required>
            <input id="ac" type="text" placeholder="Example: Non AC Bus" required>
        </label>

        </div>
     
    </div>


    <button id="submit" type="submit">Submit</button>
    </form>

    

`
// css
styleinject(`

#b1{
    color: red;

}
#b2{
    color:red;
}
#b3{
    color: red;

}


#section1 {
    width: 100%;
    height: 770px;
    background-color: #FDF0F0;
}
#sec2{
    width: 1091px;
    height: 1522px;
    background-color: white;
    border-radius: 18px;
}
#sec2>:first-child{
    font-size: 18px;
    position: relative;
    top: 15px;
    left: 28px;
    width: 129px;
    height: 30px;}

.f3{
    display: flex;
    gap: 22px;
    position: relative;
    left: 28px;
    top: 20px;
    flex-wrap: wrap;
    width:1035px;
    input{
        width: 223px;
        height: 46px;
        border-radius: 7px;
        border-color: #D5BEBE;
        border-style: solid;

        color: #231E1E;
        font-size: 15px;
        text-align: center;

    }
}
#big{
    width: 1030px;
    height: 150px;
}

.info{

    h1{
        position: relative;
        top: 14px;
        left: 28px;
        width: 129px;
        height: 30px;  
    font-size: 18px;
    }

    input{
    width: 1030px;
    height: 150px;
    border-radius: 7px;
    border-color: #D5BEBE;
    border-style: solid;
    position: relative;
    left: 27px;
    top: 10px;
    color: #231E1E;
    font-size: 15px;
    text-align: center;
    }
   
}

.gallary{
    h1{
        position: relative;
        top: 14px;
        left: 28px;
        width: 129px;
        height: 30px;  
    font-size: 18px;
    }

        input{
            width: 1030px;
            height: 240px;
            border-radius: 7px;
            border-color: #D5BEBE;
            border-style: solid;
            position: relative;
            left: 27px;
            top: 10px;
            color: #231E1E;
            font-size: 15px;
            text-align: center;

          
            }
    }

    .trip{
        display: flex;
        flex-wrap: wrap;
        h1{
            position: relative;
            top: 14px;
            left: 28px;
            width: 129px;
            height: 30px;  
        font-size: 18px;

        }

        button{
            width: 122px;
            height: 37px;
            background-color: #071597;
            border-radius: 12px;
            border-style: solid;
            text-align: center;
            border-color: #071597;
            color: white;
            position: relative;
            top: 19px;
            left: 809px;
        }
        input{
            width: 1030px;
            height: 240px;
            border-radius: 7px;
            border-color: #D5BEBE;
            border-style: solid;
            position: relative;
            left: 27px;
            top: 10px;
            color: #231E1E;
            font-size: 15px;
            text-align: center;
        }
    }

    .include{
        display: flex;
        h1{
            position: relative;
            top: 14px;
            left: 28px;
            width: 129px;
            height: 30px;  
        font-size: 18px;
        }
    }
.big{

    width: 376px;
    position: relative;
    left: 20px;
    display: flex;
    position: relative;
    top: 77px;
    left: -107px;

    label{
        font-size: 18px;
        position: relative;
        left: 1px;
        top: 5px;
    }

    button{
        width: 130px;
        height: 30px;
        background-color: #071597;
        color: white;
        text-align: center;
        border-radius: 8px;
        border-style: none;
        position: relative;
    left: 243px;
    }
    input{
        width: 489px;
        height: 62px;
        text-align: center;
        border-radius: 12px;
        border-color: #D5BEBE;
        border-style: solid;
        position: relative;
        top: 14px;
    }
}

.big2{
    position: relative;
    top: 82px;
    left: 52px;
    width: 376px;
    position: relative;
    left: 20px;
    display: flex;
    
    

    label{
        font-size: 18px;
        position: relative;
        left: 5px;
    }

    button{
        width: 130px;
        height: 30px;
        background-color: #071597;
        color: white;
        text-align: center;
        border-radius: 8px;
        border-style: none;
        position: relative;
    left: 243px;
    }
    input{
        width: 489px;
        height: 62px;
        text-align: center;
        border-radius: 12px;
        border-color: #D5BEBE;
        border-style: solid;
        position: relative;
        top: 14px;
    }
}

#ac{
    position: relative;
    top: 32px;
}

#submit{
    width: 1020px;
    height: 62px;
    background-color: #071597;
    border-radius: 12px;
    border-style: none;
    text-align: center;
    color: white;
    position: relative;
    top: 146px;
    left: 31px;
}

footer{
    top:874px;
    width: 102%;

}

body{
    background:#FDF0F0;
}


`)

// button for all Destination
b1.addEventListener("click",()=>{
    styleinject(`
    .f3{
        position: relative;
    left: 0;
    top: 0;
    }

    .l3{
        position: relative;
    left: -53px;
    top: 0;
    }
    `)
})
// css
styleinject(`#bb1:hover{
    color: #071597;
}
#bb2:hover{
    color: #071597;
}
#bb3:hover{
    color: #071597;
}
#b1:hover{
    color: #071597;
}
#b2:hover{
    color: #071597;
}
#b3:hover{
    color: #071597;
}`)
// buttons style
b2.style.cssText= `color:#071597;`
b1.style.cssText= `color:#676262;`

})

let b1 = document.getElementById("b1")

b1.addEventListener('click', ()=>{

    styleinject(`
    #b1{
        color: blue;

    }
    #b2{
        color: #676262;
    }
    #b3{
        color: #676262;

    }
    `)
// inner html
    sec2.innerHTML=`
    <section id="sec2">
    <h1>All Destination</h1>

    <div class="mininav">

        <div class="f3">
         <h1>ID</h1>
        <h1>Destination</h1>
        <h1>User</h1>
        <h1>Email</h1>
        </div>
      <div class="l3">
         <h1>Country</h1>
        <h1>Price</h1>
        <h1>Action</h1>
      </div>
       
    </div>

    <div class="recent">
        <div>
            <h1>21175</h1>
            <h1>Temple Of Kom Ombo</h1>
            <h1>Afif hanifudin</h1>
            <h1>uxninjaafif@gmail.com</h1>

            <div class="cont">
            <h1>Indonesia</h1>
            <h1>$250</h1>

            <div class="imgs">
                <img src="/dashboard/all dashbored/images/eye-line.png" alt="">

                <button id="edit1">
                <img src="/dashboard/all dashbored/images/Group 2.png" alt="">

                </button>
               <img src="/dashboard/all dashbored/images/Group.png" alt="">
               </div>

            </div>
          

        </div>
        <div>
            <h1>255575</h1>
            <h1>Sharm El Seikh</h1>
            <h1>Abdallah wael</h1>
            <h1>abdallah32@gmail.com</h1>
            <div class="cont1">
                <h1>Dubai</h1>
            <h1>$350</h1>

            <div class="imgs1">
             <img src="/dashboard/all dashbored/images/eye-line.png" alt="">

             <button id="edit2">
                <img src="/dashboard/all dashbored/images/Group 2.png" alt="">

             </button>
            <img src="/dashboard/all dashbored/images/Group.png" alt="">
            </div>

           
            </div>
            

        </div>
        <div>
            <h1>233275</h1>
            <h1>Al-Azhar Mosque</h1>
            <h1>Adam wael</h1>
            <h1>adam223@gmail.com</h1>

            <div class="cont2">
                <h1>chin</h1>
                <h1>$450</h1>

                <div class="imgs2">
                    <img src="/dashboard/all dashbored/images/eye-line.png" alt="">
                    <button id="edit3">
                        <img src="/dashboard/all dashbored/images/Group 2.png" alt="">

                    </button>
                   <img src="/dashboard/all dashbored/images/Group.png" alt="">
                   </div>
            </div>
            

        </div>
        <div>
            <h1>264575</h1>
            <h1>Salah El-Din Castle</h1>
            <h1>Yusef wael</h1>
            <h1>yusef232@gmail.com</h1>
            <div class="cont3">
            <h1>Egypt</h1>
            <h1>$550</h1>

            <div class="imgs3">
                <img src="/dashboard/all dashbored/images/eye-line.png" alt="">
                <button id="edit4">
                    <img src="/dashboard/all dashbored/images/Group 2.png" alt="">

                </button>
               <img src="/dashboard/all dashbored/images/Group.png" alt="">
               </div>
            </div>
           

        </div>
       
    </div>

    <button id="vbtn">View all</button>
</section>
    `

styleinject(`
.btns{
    position: relative;
    top: 147px;
    left: 28px;
    width: 214px;
    height: 170px;
    display: flex;
    flex-direction: column;
    gap: 20px;


    button{
        width: 212px;
        height: 54px;
        background-color: #071597;
        color: white;
        border-radius: 15px;
    border-style: none;

    h1{
            font-size: 20px;
            position: relative;
            top: -32px;
            left: 10px;
        }

    }

    #btn1{
        width: 212px;
        height: 54px;
        color: black;
        border-radius: 15px;
    border-style: none;
        background-color: #F0F2FE;

        img{
            background: black;
            mix-blend-mode: difference;
        }
    }


        img{
            width: 24px;
            height: 24px;
            position: relative;
            left: -75px;
            top: 13px;
        }
    }

#edit1{
    background: white;
    border-style: none;
    position: relative;
    left: -7px;
    width: 26px;
    height: 26px;
}
#edit2{
    background: white;
    border-style: none;
    position: relative;
    left: -7px;
    width: 26px;
    height: 26px;
}
#edit3{
    background: white;
    border-style: none;
    position: relative;
    left: -7px;
    width: 26px;
    height: 26px;
}
#edit4{
    background: white;
    border-style: none;
    position: relative;
    left: -7px;
    width: 26px;
    height: 26px;
}
    

#b1{
    background-color: #F0F2FE;
    color: #071597;
    font-size: 18px;
    border-radius: 0px;
    position: relative;
    top: -5px;
    width: 208px;
}
#b2{
    background-color: #F0F2FE;
            color: #676262;
            font-size: 18px;
            border-radius: 0px;
            position: relative;
            top: -5px;
            width: 208px;
}
#b3{
    background-color: #F0F2FE;
    color: #676262;
    font-size: 18px;
    border-radius: 0px;
    position: relative;
    top: -5px;
    width: 208px;
}

    #btn2{
        width: 209px;
        height: 50px;
        text-align: center;
        border-radius: 12px;
        font-size: 21px;

       
    }

    #btn2{
        color: #071597;
        background-color: #F0F2FE;
    }
    #btn3{
        color: black;
        background-color: #F0F2FE;
    }

    #btn2:hover{
        background-color: #071597;
        color: white;
    }
    #btn3:hover{
        background-color: #071597;
        color: white;
    }

#sec2{
    width: 1040px;
    height: 596px;
    background-color: white;
    position: relative;
    top: -1064px;
    left: 290px;
    border-radius: 16px;

}

#sec2>:first-child{
    width: 150px;height: 18px;
    font-size: 18px;
    position: relative;
    left: 25px;
    top: 11px;
}
.mininav{
    width: 1030px;
    height: 40px;
    background-color: #FDF0F0;
    border-radius: 12px;
    position: relative;
    left: -18px;
    top: 9px;
    display: flex;
    gap: 122px;

    h1{
        text-align: center;
        position: relative;
        left: 26px;
        top: -5px;
        font-size: 13px;
    }
}

.f3{
    display: flex;
    gap: 115px;
}
.l3{
    display: flex;
    gap: 83px;
    position: relative;
    left: 92px;
}

.recent{
    h1{
        width:100px;
    }
}


.recent>:first-child{
    display: flex;
    gap: 99px;
    position: relative;
    left: 12px;
    font-size: 14px;
    color: #676262;
}

.recent>:nth-child(2){
    display: flex;
    // gap: 57px;
    position: relative;
    left: 8px;
    font-size: 14px;
    color: #676262;
}
.recent>:nth-child(3){
    display: flex;
    // gap: 57px;
    position: relative;
    left: 8px;
    font-size: 14px;
    color: #676262;
}
.recent>:nth-child(4){
    display: flex;
    // gap: 57px;
    position: relative;
    left: 8px;
    font-size: 14px;
    color: #676262;
}

.cont{
    display: flex;
    position: relative;
    left: 58px;
    gap: 16px;

    img{
        width: 24px;
        height: 24px;
    }

}
.imgs{
    position: relative;
    left: -20px;
    top: 14px;
    display: flex;
    gap: 10px;
}

.cont1{
    display: flex;
    gap: 20px;
    position: relative;
    left: 66px;

    img{
        width: 24px;
        height: 24px;
    }
}

.imgs1{
    position: relative;
    left: -34px;
    top: 11px;
    display: flex;
    gap: 10px;
}
.cont2{
    display: flex;
    gap: 27px;
    position: relative;
    left: 54px;
    img{
        width: 24px;
        height: 24px;
    }
}
.imgs2{
    position: relative;
    left: -45px;
    top: 11px;
    display: flex;
    gap: 10px;
}
.cont3{
    display: flex;
    gap: 22px;
    position: relative;
    left: 77px;
    img{
        width: 24px;
        height: 24px;
    }
}
.imgs3{
    position: relative;
    left: -34px;
    top: 11px;
    display: flex;
    gap: 10px;
}



#vbtn{
    width: 176px;
    height: 51px;
    border-radius: 16px;
    position: relative;
    top: 29px;
    left: 410px;
    background-color: white;
    color: #071597;
    font-size: 21px;
    font-weight: 500;
}











`)

styleinject(`#bb1:hover{
    color: #071597;
}
#bb2:hover{
    color: #071597;
}
#bb3:hover{
    color: #071597;
}
#b1:hover{
    color: #071597;
}
#b2:hover{
    color: #071597;
}
#b3:hover{
    color: #071597;
}`)
// buttons style
b1.style.cssText= `color:#071597;`
b2.style.cssText= `color:#676262;`



let edit1 =document.getElementById("edit1")

// this buttons for edit Destination

edit1.addEventListener("click", ()=>{

    // buttons style

    b3.style.cssText= `color:#071597;`
    b2.style.cssText= `color:#676262;`
    b1.style.cssText= `color:#676262;`
    // inner html

    sec2.innerHTML=`      <h1>Edit Destination</h1>
    <form>
 <div class="f3">
        <input type="text" name="" id="in1" placeholder="Temple Of Kom Ombo" required >
        <input type="text" name="" id="" placeholder="Aswan, Kom Ombo" required>
        <input type="text" name="" id="" placeholder="3 Days" required>
        <input type="text" name="" id="" placeholder="$150" required>
        <input type="text" id="big" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam magna eu fermentum netus natoque eros ornare nec nibh. Odio in varius
curabitur nulla vehicula felis ornare. Convallis neque purus iaculis etiam purus." required>
    </div>

    <div class="info">
        <h1>Information</h1>
        <input type="text" placeholder="The Kom Ombo Temple was built between 332 BC and 395 AD, during the Ptolemaic period, by Ptolemy VI Philometer. Ptolemy XII Neos Dionysos continued the work and built the exterior and interior Hypostyle halls. The temple was built with local limestone by men who rode on elephants, considered to be a Ptolemaic innovation. Little remains of the original structure. Unfortunately, a good portion of the temple has been destroyed over the millennia by earthquakes, 
        erosion by the Nile River and builders who stole stone for unrelated projects." required>
    </div>

    <div class="gallary">
        <h1>Gallery</h1>
        <input type="file" placeholder="Upload Destination Photo" required>
        
    </div>

    <div class="trip">
        <h1>Trip Plan</h1>
        <button>Trip Plan</button>
        <input type="text" placeholder="Example: Day 1 , Plan 1 ,">
    </div>

    <div class="include">
        <h1>Include</h1>
        <div class="big">
            <label for="">Facility Name:
                <button>Add Facility</button>
                <input type="text" placeholder="Transport" required>
                <input id="tran" type="text" placeholder="Hotel" required>
            </label>
        </div>
        <div class="big2">
<label>Facility Detail:
            <button>Add Facility Details</button>
            <input type="text" placeholder="AC Bus" required>
            <input id="ac" type="text" placeholder=" Non AC Bus" required>
        </label>
        

        </div>
        
     
    </div>
<hr>
<div class="linp">
<input id="" type="text" placeholder="Double Bed" required>
<input id="" type="text" placeholder="Deluxe Room" required>
</div>



    <button id="submit" type="submit">Submit</button>
    </form>
`
// css
styleinject(`
#sec2{
    width: 1091px;
    height: 1692px;
    background-color: white;
    border-radius: 18px;
}
#sec2>:first-child{
    font-size: 18px;
    position: relative;
    top: 15px;
    left: 28px;
    width: 129px;
    height: 30px;}

.f3{
    display: flex;
    gap: 22px;
    position: relative;
    left: 28px;
    top: 20px;
    flex-wrap: wrap;
    input{
        width: 223px;
        height: 46px;
        border-radius: 7px;
        border-color: #D5BEBE;
        border-style: solid;

        color: black;
        font-size: 15px;
        text-align: center;

    }
}
#big{
    width: 1030px;
    height: 150px;
}

.info{

    h1{
        position: relative;
        top: 14px;
        left: 28px;
        width: 129px;
        height: 30px;  
    font-size: 18px;
    }

    input{
    width: 1030px;
    height: 150px;
    border-radius: 7px;
    border-color: #D5BEBE;
    border-style: solid;
    position: relative;
    left: 27px;
    top: 10px;
    color: black;
    font-size: 15px;
    text-align: center;
    }
   
}

.gallary{
    h1{
        position: relative;
        top: 14px;
        left: 28px;
        width: 129px;
        height: 30px;  
    font-size: 18px;
    }

        input{
            width: 1030px;
            height: 240px;
            border-radius: 7px;
            border-color: #D5BEBE;
            border-style: solid;
            position: relative;
            left: 27px;
            top: 10px;
            color: black;
            font-size: 15px;
            text-align: center;

          
            }
    }

    .trip{
        display: flex;
        flex-wrap: wrap;
        h1{
            position: relative;
            top: 14px;
            left: 28px;
            width: 129px;
            height: 30px;  
        font-size: 18px;

        }

        button{
            width: 122px;
            height: 37px;
            background-color: #071597;
            border-radius: 12px;
            border-style: solid;
            text-align: center;
            border-color: #071597;
            color: white;
            position: relative;
            top: 19px;
            left: 809px;
        }
        input{
            width: 1030px;
            height: 240px;
            border-radius: 7px;
            border-color: #D5BEBE;
            border-style: solid;
            position: relative;
            left: 27px;
            top: 10px;
            color: black;
            font-size: 15px;
            text-align: center;
        }
    }

    .include{
        display: flex;
        h1{
            position: relative;
            top: 14px;
            left: 28px;
            width: 129px;
            height: 30px;  
        font-size: 18px;
        }
    }
.big{

    width: 376px;
    position: relative;
    left: 20px;
    display: flex;
    position: relative;
    top: 77px;
    left: -107px;

    label{
        font-size: 18px;
        position: relative;
        left: 1px;
        top: 5px;
    }

    button{
        width: 130px;
        height: 30px;
        background-color: #071597;
        color: white;
        text-align: center;
        border-radius: 8px;
        border-style: none;
        position: relative;
    left: 243px;
    }
    input{
        width: 489px;
        height: 62px;
        text-align: center;
        border-radius: 12px;
        border-color: #D5BEBE;
        border-style: solid;
        position: relative;
        color: black;
        top: 14px;
    }
}

.big2{
    position: relative;
    top: 82px;
    left: 52px;
    width: 376px;
    position: relative;
    left: 20px;
    display: flex;
    
    

    label{
        font-size: 18px;
        position: relative;
        left: 5px;
    }

    button{
        width: 130px;
        height: 30px;
        background-color: #071597;
        color: white;
        text-align: center;
        border-radius: 8px;
        border-style: none;
        position: relative;
    left: 243px;
    }
    input{
        width: 489px;
        height: 62px;
        text-align: center;
        border-radius: 12px;
        border-color: #D5BEBE;
        border-style: solid;
        position: relative;
        top: 14px;
        color: black;
    }
}

#ac{
    position: relative;
    top: 32px;
}

#tran{
    position: relative;
    top: 133px;

}

form{
    hr{
        position: relative;
        top: 124px;
    }
}

.linp{
    display: flex;
    flex-direction: column;
    gap: 13px;
    position: relative;
    top: 116px;
    left: 530px;

    input{
    width: 489px;
    height: 62px;
    text-align: center;
    border-radius: 12px;
    border-color: #D5BEBE;
    border-style: solid;
    position: relative;
    top: 14px;
    color: black;
    }

}

#submit{
    width: 1020px;
    height: 62px;
    background-color: #071597;
    border-radius: 12px;
    border-style: none;
    text-align: center;
    color: white;
    position: relative;
    top: 151px;
    left: 31px;
}

footer{
    top:1056px;
    width: 102%;

}

body{
    background:#FDF0F0;
}

#b1{
    color: #676262;

}
#b2{
    color: #676262;
}
#b3{
    color:#071597;
`)
// add Destination button
b2.addEventListener("click", ()=>{
    b3.style.cssText= `color:#676262;`
    b2.style.cssText= `color:#071597;`
    b1.style.cssText= `color:#676262;`
})
})
// edit buttons
let edit2 =document.getElementById("edit2")
let edit3 =document.getElementById("edit3")
let edit4 =document.getElementById("edit4")

// edit2 button

edit2.addEventListener("click", ()=>{

    b3.style.cssText= `color:#071597;`
    b2.style.cssText= `color:#676262;`
    b1.style.cssText= `color:#676262;`
    sec2.innerHTML=`      <h1>Edit Destination</h1>
    <form>
 <div class="f3">
        <input type="text" name="" id="in1" placeholder="Sharm El shekh" required >
        <input type="text" name="" id="" placeholder="Egypt, Red sea" required>
        <input type="text" name="" id="" placeholder="3 Days" required>
        <input type="text" name="" id="" placeholder="$350" required>
        <input type="text" id="big" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam magna eu fermentum netus natoque eros ornare nec nibh. Odio in varius
curabitur nulla vehicula felis ornare. Convallis neque purus iaculis etiam purus." required>
    </div>

    <div class="info">
        <h1>Information</h1>
        <input type="text" placeholder="The Kom Ombo Temple was built between 332 BC and 395 AD, during the Ptolemaic period, by Ptolemy VI Philometer. Ptolemy XII Neos Dionysos continued the work and built the exterior and interior Hypostyle halls. The temple was built with local limestone by men who rode on elephants, considered to be a Ptolemaic innovation. Little remains of the original structure. Unfortunately, a good portion of the temple has been destroyed over the millennia by earthquakes, 
        erosion by the Nile River and builders who stole stone for unrelated projects." required>
    </div>

    <div class="gallary">
        <h1>Gallery</h1>
        <input type="file" placeholder="Upload Destination Photo" required>
        
    </div>

    <div class="trip">
        <h1>Trip Plan</h1>
        <button>Trip Plan</button>
        <input type="text" placeholder="Example: Day 1 , Plan 1 ,">
    </div>

    <div class="include">
        <h1>Include</h1>
        <div class="big">
            <label for="">Facility Name:
                <button>Add Facility</button>
                <input type="text" placeholder="Transport" required>
                <input id="tran" type="text" placeholder="Hotel" required>
            </label>
        </div>
        <div class="big2">
<label>Facility Detail:
            <button>Add Facility Details</button>
            <input type="text" placeholder="AC Bus" required>
            <input id="ac" type="text" placeholder=" Non AC Bus" required>
        </label>
        

        </div>
        
     
    </div>
<hr>
<div class="linp">
<input id="" type="text" placeholder="Double Bed" required>
<input id="" type="text" placeholder="Deluxe Room" required>
</div>



    <button id="submit" type="submit">Submit</button>
    </form>
`
styleinject(`
#sec2{
    width: 1091px;
    height: 1692px;
    background-color: white;
    border-radius: 18px;
}
#sec2>:first-child{
    font-size: 18px;
    position: relative;
    top: 15px;
    left: 28px;
    width: 129px;
    height: 30px;}

.f3{
    display: flex;
    gap: 22px;
    position: relative;
    left: 28px;
    top: 20px;
    flex-wrap: wrap;
    input{
        width: 223px;
        height: 46px;
        border-radius: 7px;
        border-color: #D5BEBE;
        border-style: solid;

        color: black;
        font-size: 15px;
        text-align: center;

    }
}
#big{
    width: 1030px;
    height: 150px;
}

.info{

    h1{
        position: relative;
        top: 14px;
        left: 28px;
        width: 129px;
        height: 30px;  
    font-size: 18px;
    }

    input{
    width: 1030px;
    height: 150px;
    border-radius: 7px;
    border-color: #D5BEBE;
    border-style: solid;
    position: relative;
    left: 27px;
    top: 10px;
    color: black;
    font-size: 15px;
    text-align: center;
    }
   
}

.gallary{
    h1{
        position: relative;
        top: 14px;
        left: 28px;
        width: 129px;
        height: 30px;  
    font-size: 18px;
    }

        input{
            width: 1030px;
            height: 240px;
            border-radius: 7px;
            border-color: #D5BEBE;
            border-style: solid;
            position: relative;
            left: 27px;
            top: 10px;
            color: black;
            font-size: 15px;
            text-align: center;

          
            }
    }

    .trip{
        display: flex;
        flex-wrap: wrap;
        h1{
            position: relative;
            top: 14px;
            left: 28px;
            width: 129px;
            height: 30px;  
        font-size: 18px;

        }

        button{
            width: 122px;
            height: 37px;
            background-color: #071597;
            border-radius: 12px;
            border-style: solid;
            text-align: center;
            border-color: #071597;
            color: white;
            position: relative;
            top: 19px;
            left: 809px;
        }
        input{
            width: 1030px;
            height: 240px;
            border-radius: 7px;
            border-color: #D5BEBE;
            border-style: solid;
            position: relative;
            left: 27px;
            top: 10px;
            color: black;
            font-size: 15px;
            text-align: center;
        }
    }

    .include{
        display: flex;
        h1{
            position: relative;
            top: 14px;
            left: 28px;
            width: 129px;
            height: 30px;  
        font-size: 18px;
        }
    }
.big{

    width: 376px;
    position: relative;
    left: 20px;
    display: flex;
    position: relative;
    top: 77px;
    left: -107px;

    label{
        font-size: 18px;
        position: relative;
        left: 1px;
        top: 5px;
    }

    button{
        width: 130px;
        height: 30px;
        background-color: #071597;
        color: white;
        text-align: center;
        border-radius: 8px;
        border-style: none;
        position: relative;
    left: 243px;
    }
    input{
        width: 489px;
        height: 62px;
        text-align: center;
        border-radius: 12px;
        border-color: #D5BEBE;
        border-style: solid;
        position: relative;
        color: black;
        top: 14px;
    }
}

.big2{
    position: relative;
    top: 82px;
    left: 52px;
    width: 376px;
    position: relative;
    left: 20px;
    display: flex;
    
    

    label{
        font-size: 18px;
        position: relative;
        left: 5px;
    }

    button{
        width: 130px;
        height: 30px;
        background-color: #071597;
        color: white;
        text-align: center;
        border-radius: 8px;
        border-style: none;
        position: relative;
    left: 243px;
    }
    input{
        width: 489px;
        height: 62px;
        text-align: center;
        border-radius: 12px;
        border-color: #D5BEBE;
        border-style: solid;
        position: relative;
        top: 14px;
        color: black;
    }
}

#ac{
    position: relative;
    top: 32px;
}

#tran{
    position: relative;
    top: 133px;

}

form{
    hr{
        position: relative;
        top: 124px;
    }
}

.linp{
    display: flex;
    flex-direction: column;
    gap: 13px;
    position: relative;
    top: 116px;
    left: 530px;

    input{
    width: 489px;
    height: 62px;
    text-align: center;
    border-radius: 12px;
    border-color: #D5BEBE;
    border-style: solid;
    position: relative;
    top: 14px;
    color: black;
    }

}

#submit{
    width: 1020px;
    height: 62px;
    background-color: #071597;
    border-radius: 12px;
    border-style: none;
    text-align: center;
    color: white;
    position: relative;
    top: 151px;
    left: 31px;
}

footer{
    top:1056px;
    width: 102%;

}

body{
    background:#FDF0F0;
}



`)
// you click all des before edit 2 and will click on all des agian
b1.addEventListener("click", ()=>{
    b3.style.cssText= `color:#676262;`
    b2.style.cssText= `color:#676262;`
    b1.style.cssText= `color:#071597;`
  
    bb1.style.cssText=`color:#676262;`
    bb2.style.cssText=`color:#676262;`
    bb3.style.cssText=`color:#676262;`

  
})
})
// you on all des and click on all users
bb1.addEventListener("click", ()=>{
    styleinject(`

    #sec2 {
        width: 1050px;
        height: 457px;
        background-color: white;
        position: relative;
        top: -1036px;
        left: 290px;
        border-radius: 16px;
    }
    .cont{
        display: flex;
        gap: 67px;
        position: relative;
        left: 118px;
    }

    .recent>:first-child {
        display: flex;
        position: relative;
        left: 12px;
        font-size: 14px;
        color: #676262;
        gap: 60px;
    }
    .recent>:nth-child(2) {
        display: flex;
        position: relative;
        left: 8px;
        font-size: 14px;
        color: #676262;
        gap: 60px;
    }
    .cont1 {
        display: flex;
        gap: 73px;
        position: relative;
        left: 124px;
    }
    .recent>:nth-child(3) {
        display: flex;
        position: relative;
        left: 8px;
        font-size: 14px;
        color: #676262;
        gap: 60px;
    }
    .cont2 {
        display: flex;
        gap: 79px;
        position: relative;
        left: 124px;
    }
    .recent>:nth-child(4) {
        display: flex;
        position: relative;
        left: 8px;
        font-size: 14px;
        color: #676262;
        gap: 60px;
    }
    .cont3 {
        display: flex;
        gap: 73px;
        position: relative;
        left: 124px;
    }

    #det>button{
        color:#676262;
    }
    `)

    b1.style.cssText=`color:#676262;`

})


})

//  user section
let bb1 = document.getElementById("bb1")
// all user
bb1.addEventListener("click" , ()=>{
    // inner htmll
    sec2.innerHTML=`
    <h1>All User</h1>

    <div class="mininav">

        <div class="f3">
         <h1>ID</h1>
        <h1>User</h1>
        <h1>Email</h1>
        </div>
      <div class="l3">
         <h1>Country</h1>
        <h1>Price</h1>
        <h1>Action</h1>
      </div>
       
    </div>

    <div class="recent">
        <div>
            <h1>21175</h1>
            <h1>Afif hanifudin</h1>
            <h1>uxninjaafif@gmail.com</h1>

            <div class="cont">
            <h1>Indonesia</h1>
            <h1>$250</h1>

            <div class="imgs">
                <img src="/dashboard/all dashbored/images/eye-line.png" alt="">

                <button id="edit1">
                <img src="/dashboard/all dashbored/images/Group 2.png" alt="">

                </button>
               <img src="/dashboard/all dashbored/images/Group.png" alt="">
               </div>

            </div>
          

        </div>
        <div>
            <h1>255575</h1>
            <h1>Abdallah wael</h1>
            <h1>abdallah32@gmail.com</h1>
            <div class="cont1">
                <h1>Dubai</h1>
            <h1>$350</h1>

            <div class="imgs1">
             <img src="/dashboard/all dashbored/images/eye-line.png" alt="">

             <button id="edit2">
                <img src="/dashboard/all dashbored/images/Group 2.png" alt="">

             </button>
            <img src="/dashboard/all dashbored/images/Group.png" alt="">
            </div>

           
            </div>
            

        </div>
        <div>
            <h1>233275</h1>
            <h1>Adam wael</h1>
            <h1>adam223@gmail.com</h1>

            <div class="cont2">
                <h1>chin</h1>
                <h1>$450</h1>

                <div class="imgs2">
                    <img src="/dashboard/all dashbored/images/eye-line.png" alt="">
                    <button id="edit3">
                        <img src="/dashboard/all dashbored/images/Group 2.png" alt="">

                    </button>
                   <img src="/dashboard/all dashbored/images/Group.png" alt="">
                   </div>
            </div>
        </div>
        <div>
            <h1>264575</h1>
            <h1>Yusef wael</h1>
            <h1>yusef232@gmail.com</h1>
            <div class="cont3">
            <h1>Egypt</h1>
            <h1>$550</h1>

            <div class="imgs3">
                <img src="/dashboard/all dashbored/images/eye-line.png" alt="">
                <button id="edit4">
                    <img src="/dashboard/all dashbored/images/Group 2.png" alt="">
                </button>
               <img src="/dashboard/all dashbored/images/Group.png" alt="">
               </div>
            </div>
        </div>
       
    </div>

    <button id="vbtn">View all</button>
</section>
    `
    // css code
    styleinject(`


    #sec2{
        width: 1054px;
        height: 476px;
        background-color: white;
        position: relative;
        top: -1036px;
        left: 290px;
        border-radius: 16px;
    
    }
    
    #sec2>:first-child{
        width: 150px;height: 18px;
        font-size: 18px;
        position: relative;
        left: 25px;
        top: 11px;
    }
    .mininav{
        width: 1030px;
        height: 40px;
        background-color: #FDF0F0;
        border-radius: 12px;
        position: relative;
        left: 5px;
        top: 9px;
        display: flex;
        gap: 122px;
    
        h1{
            text-align: center;
            position: relative;
            left: 26px;
            top: -5px;
            font-size: 13px;
        }
    }
    
    .f3{
        display: flex;
        gap: 145px;
    }
    .l3{
        display: flex;
        gap: 129px;
        position: relative;
        left: 104px;
    }
    
    
    
    .recent>:first-child{
        display: flex;
        // gap: 42px;
        position: relative;
        left: 12px;
        font-size: 14px;
        color: #676262;
    }
    
    .recent>:nth-child(2){
        display: flex;
        // gap: 57px;
        position: relative;
        left: 8px;
        font-size: 14px;
        color: #676262;
    }
    .recent>:nth-child(3){
        display: flex;
        // gap: 57px;
        position: relative;
        left: 8px;
        font-size: 14px;
        color: #676262;
    }
    .recent>:nth-child(4){
        display: flex;
        // gap: 57px;
        position: relative;
        left: 8px;
        font-size: 14px;
        color: #676262;
    }
    
    .cont{
        display: flex;
        gap: 121px;
        position: relative;
        left: 31px;
    
        img{
            width: 24px;
            height: 24px;
        }
    
    }
    .imgs{
        position: relative;
        left: -20px;
        top: 14px;
        display: flex;
        gap: 10px;
    }
    
    .cont1{
        display: flex;
        gap: 135px;
        position: relative;
        left: 1px;
    
        img{
            width: 24px;
            height: 24px;
        }
    }
    
    .imgs1{
        position: relative;
        left: -34px;
        top: 11px;
        display: flex;
        gap: 10px;
    }
    .cont2{
        display: flex;
        gap: 146px;
        position: relative;
        left: 21px;
        img{
            width: 24px;
            height: 24px;
        }
    }
    .imgs2{
        position: relative;
        left: -45px;
        top: 11px;
        display: flex;
        gap: 10px;
    }
    .cont3{
        display: flex;
        gap: 138px;
        position: relative;
        left: 31px;
        img{
            width: 24px;
            height: 24px;
        }
    }
    .imgs3{
        position: relative;
        left: -34px;
        top: 11px;
        display: flex;
        gap: 10px;
    }

    #edit1{
        background-color: white;
        border-style: none;
        width: 26px;
        height: 26px;
    }
    #edit2{
        background-color: white;
        border-style: none;
        width: 26px;
        height: 26px;
    }
    #edit3{
        background-color: white;
        border-style: none;
        width: 26px;
        height: 26px;
    }
    #edit4{
        background-color: white;
        border-style: none;
        width: 26px;
        height: 26px;
    }
    
    
    
    #vbtn{
        width: 176px;
        height: 51px;
        border-radius: 16px;
        position: relative;
        top: 124px;
        left: 410px;
        background-color: white;
        color: #071597;
        font-size: 21px;
        font-weight: 500;
    }
    
    #bb1:hover{
        color: #071597;
    }
    #bb2:hover{
        color: #071597;
    }
    #bb3:hover{
        color: #071597;
    }
    #b1:hover{
        color: #071597;
    }
    #b2:hover{
        color: #071597;
    }
    #b3:hover{
        color: #071597;
    }
    
    
    
    `)

    // all buttons style
    b1.style.cssText=`color:#676262;`
    b2.style.cssText=`color:#676262;`

    bb1.style.cssText=`color:#071597;`
    bb2.style.cssText=`color:#676262;`
    bb3.style.cssText=`color:#676262;`

    let edit1 =document.getElementById("edit1")
// data of users
    let arr = [
        {
          "username": "Afif hanifudin",
          "id": 0,
          "phonenumber": "01224486815",
          "email": "uxninjaafif”gmail.com",
          "country": "Indonesia",
          "password": 123121231
        },
        {
          "username": "Abdallah wael",
          "id": 1,
          "phonenumber": "01110672987",
          "email": "abdallah32@gmail.com   ",
          "country": "Dubai",
          "password": 123121231
        },
        {
          "username": "Adam",
          "id": 3,
          "phonenumber": "01118584466",
          "email": "adam223@gmail.com  ",
          "country": "Chin",
          "password": 123121231
        }
      ]
// you on all user and will go on editt1
edit1.addEventListener("click", ()=>{
    sec2.innerHTML=`
    <h1 id='hh2'>Add User</h1>
        <form>

            <div class="inp1">
                <h1>Username</h1>
    <input type="text" name="" id="user" placeholder="Username" required>
            </div>

<!--  -->
<div class="inp2">
    <h1>Email</h1>
    <input type="email" name="" id="email" placeholder="Email" required>

</div>
<!--  -->

<div class="inp3">
    <h1>Phone Number</h1>
        <input type="text" name="" id="phone" placeholder="Your Phone Number">

</div>
<!--  -->
<div class="inp4">
    <h1>Country</h1>
    <input type="text" name="" id="con" placeholder="Country" required>
</div>
<!--  -->
<div class="inp5">
    <h1>Create Password</h1>
    <input type="password" name="" id="pass" placeholder="Create Password" required >

</div>
<!--  -->

<div class="inp6">
    <h1>Confirm Password</h1>
    <input type="password" name="" id="" placeholder="Confirm Password" required>

</div>




        <button id="submit" type="submit">Submit</button>
        </form>
   
    
    `

    styleinject(`
    #section1 {
        width: 100%;
        height: 756px;
        background-color: #FDF0F0;
    }
    #sec2{
        width: 1077px;
        height: 578px;
        background-color: white;
        border-radius: 18px;
        position: relative;
        top: -1060px;
    
     
    }
    
    form{
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        position: relative;
        top: 83px;
        left: 20px;
        width: 1064px;

  
        input{
           
            width: 500px;
            height: 62px;
            background-color: white;
            border-radius: 12px;
            border-style: solid;
            border-color: #D5BEBE;
        }
    }

    #hh2{
        position: relative;
        top: 14px;
        left: 20px;
        font-size: 21px;
        width: 90px;
        height: 0;
            }
    
    .inp1{
        position: relative;
        top: -45px;
    }
    .inp2{
        position: relative;
        top: -45px;
    }
    .inp3{
        position: relative;
        top: -45px;
    }
    .inp4{
        position: relative;
        top: -45px;
    }
    .inp5{
        position: relative;
        top: -45px;
    }
    .inp6{
        position: relative;
        top: -45px;
    }
    
    #submit {
        width: 1020px;
        height: 62px;
        background-color: #071597;
        border-radius: 12px;
        border-style: none;
        text-align: center;
        color: white;
        position: relative;
        top: -36px;
    
    }
    `)
    // buttons style
    b1.style.cssText=`color:#676262;`
    b2.style.cssText=`color:#676262;`
    bb1.style.cssText=`color:#676262;`
    bb2.style.cssText=`color:#676262;`
    bb3.style.cssText=`color:#071597;`


// get element
    let user = document.getElementById("user")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let con = document.getElementById("con")
    let pass = document.getElementById("pass")
// get data from array
user.value= arr[0].username
email.value= arr[0].email
phone.value= arr[0].phonenumber
con.value= arr[0].country
pass.value= arr[0].password

})

let edit2 = document.getElementById("edit2")
// you on all user and will go edit2
edit2.addEventListener("click",()=>{
    sec2.innerHTML=`
    <h1 id='hh2'>Add User</h1>
        <form>

            <div class="inp1">
                <h1>Username</h1>
    <input type="text" name="" id="user" placeholder="Username" required>
            </div>

<!--  -->
<div class="inp2">
    <h1>Email</h1>
    <input type="email" name="" id="email" placeholder="Email" required>

</div>
<!--  -->

<div class="inp3">
    <h1>Phone Number</h1>
        <input type="text" name="" id="phone" placeholder="Your Phone Number">

</div>
<!--  -->
<div class="inp4">
    <h1>Country</h1>
    <input type="text" name="" id="con" placeholder="Country" required>
</div>
<!--  -->
<div class="inp5">
    <h1>Create Password</h1>
    <input type="password" name="" id="pass" placeholder="Create Password" required >

</div>
<!--  -->

<div class="inp6">
    <h1>Confirm Password</h1>
    <input type="password" name="" id="" placeholder="Confirm Password" required>

</div>




        <button id="submit" type="submit">Submit</button>
        </form>
   
    
    `

    styleinject(`
    #section1 {
        width: 100%;
        height: 756px;
        background-color: #FDF0F0;
    }
    #sec2{
        width: 1077px;
        height: 578px;
        background-color: white;
        border-radius: 18px;
        position: relative;
        top: -1060px;
    
     
    }
    
    form{
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        position: relative;
        top: 83px;
        left: 20px;
        width: 1064px;

  
        input{
           
            width: 500px;
            height: 62px;
            background-color: white;
            border-radius: 12px;
            border-style: solid;
            border-color: #D5BEBE;
        }
    }

    #hh2{
        position: relative;
        top: 14px;
        left: 20px;
        font-size: 21px;
        width: 90px;
        height: 0;
            }
    
    .inp1{
        position: relative;
        top: -45px;
    }
    .inp2{
        position: relative;
        top: -45px;
    }
    .inp3{
        position: relative;
        top: -45px;
    }
    .inp4{
        position: relative;
        top: -45px;
    }
    .inp5{
        position: relative;
        top: -45px;
    }
    .inp6{
        position: relative;
        top: -45px;
    }
    
    #submit {
        width: 1020px;
        height: 62px;
        background-color: #071597;
        border-radius: 12px;
        border-style: none;
        text-align: center;
        color: white;
        position: relative;
        top: -36px;
    
    }
    `)

    //buttons sty;e
    b1.style.cssText=`color:#676262;`
    b2.style.cssText=`color:#676262;`
    bb1.style.cssText=`color:#676262;`
    bb2.style.cssText=`color:#676262;`
    bb3.style.cssText=`color:#071597;`
// get data from array
    user.value= arr[1].username
email.value= arr[1].email
phone.value= arr[1].phonenumber
con.value= arr[1].country
pass.value= arr[1].password
})


let edit3 = document.getElementById("edit3")
// you on all user and will go to edit3
edit3.addEventListener("click",()=>{
    sec2.innerHTML=`
    <h1 id='hh2'>Add User</h1>
        <form>

            <div class="inp1">
                <h1>Username</h1>
    <input type="text" name="" id="user" placeholder="Username" required>
            </div>

<!--  -->
<div class="inp2">
    <h1>Email</h1>
    <input type="email" name="" id="email" placeholder="Email" required>

</div>
<!--  -->

<div class="inp3">
    <h1>Phone Number</h1>
        <input type="text" name="" id="phone" placeholder="Your Phone Number">

</div>
<!--  -->
<div class="inp4">
    <h1>Country</h1>
    <input type="text" name="" id="con" placeholder="Country" required>
</div>
<!--  -->
<div class="inp5">
    <h1>Create Password</h1>
    <input type="password" name="" id="pass" placeholder="Create Password" required >

</div>
<!--  -->

<div class="inp6">
    <h1>Confirm Password</h1>
    <input type="password" name="" id="" placeholder="Confirm Password" required>

</div>




        <button id="submit" type="submit">Submit</button>
        </form>
   
    
    `

    styleinject(`
    #section1 {
        width: 100%;
        height: 756px;
        background-color: #FDF0F0;
    }
    #sec2{
        width: 1077px;
        height: 578px;
        background-color: white;
        border-radius: 18px;
        position: relative;
        top: -1060px;
    
     
    }
    
    form{
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        position: relative;
        top: 83px;
        left: 20px;
        width: 1064px;

  
        input{
           
            width: 500px;
            height: 62px;
            background-color: white;
            border-radius: 12px;
            border-style: solid;
            border-color: #D5BEBE;
        }
    }

    #hh2{
        position: relative;
        top: 14px;
        left: 20px;
        font-size: 21px;
        width: 90px;
        height: 0;
            }
    
    .inp1{
        position: relative;
        top: -45px;
    }
    .inp2{
        position: relative;
        top: -45px;
    }
    .inp3{
        position: relative;
        top: -45px;
    }
    .inp4{
        position: relative;
        top: -45px;
    }
    .inp5{
        position: relative;
        top: -45px;
    }
    .inp6{
        position: relative;
        top: -45px;
    }
    
    #submit {
        width: 1020px;
        height: 62px;
        background-color: #071597;
        border-radius: 12px;
        border-style: none;
        text-align: center;
        color: white;
        position: relative;
        top: -36px;
    
    }
    `)
    // button style
    b1.style.cssText=`color:#676262;`
    b2.style.cssText=`color:#676262;`
    bb1.style.cssText=`color:#676262;`
    bb2.style.cssText=`color:#676262;`
    bb3.style.cssText=`color:#071597;`
// get data from array
    user.value= arr[2].username
email.value= arr[2].email
phone.value= arr[2].phonenumber
con.value= arr[2].country
pass.value= arr[2].password
})

})


let bb2 =document.getElementById("bb2")
// add users button
bb2.addEventListener("click", ()=>{

    // inner html
    sec2.innerHTML=`
    <h1 id='hh2'>Add User</h1>
        <form>

            <div class="inp1">
                <h1>Username</h1>
    <input type="text" name="" id="name"  placeholder="Username" required>
            </div>

<!--  -->
<div class="inp2">
    <h1>Email</h1>
    <input type="email" name="" id="email" placeholder="Email" required>

</div>
<!--  -->

<div class="inp3">
    <h1>Phone Number</h1>
        <input type="text" name="" id="phone" placeholder="Your Phone Number">

</div>
<!--  -->
<div class="inp4">
    <h1>Country</h1>
    <input type="text" name="" id="con" placeholder="Country" required>
</div>
<!--  -->
<div class="inp5">
    <h1>Create Password</h1>
    <input type="password" name="" id="pas" placeholder="Create Password" required >

</div>
<!--  -->

<div class="inp6">
    <h1>Confirm Password</h1>
    <input type="password" name="" id="" placeholder="Confirm Password" required>

</div>




        <button id="submit" type="submit">Submit</button>
        </form>
   
    
    `
// create element
   let sumbmit = document.getElementById("submit")
   let name =document.getElementById("name")
   let email = document.getElementById("email")
   let con = document.getElementById("con")
   let phone = document.getElementById("phone")
   let pas = document.getElementById("pas")
   let cpas =document.getElementById("cpas")
   
   // sumbmit button
sumbmit.addEventListener("click",()=>{

// if password value is not empty show your user created
  if (pas.value !== ``) {        
// inner html
    sec2.innerHTML=`
    <h1 id='hh2'>Add User</h1>
        <form>

            <div class="inp1">
                <h1>Username</h1>
    <input type="text" name="" id="name"  placeholder="Username" required>
            </div>

<!--  -->
<div class="inp2">
    <h1>Email</h1>
    <input type="email" name="" id="email" placeholder="Email" required>

</div>
<!--  -->

<div class="inp3">
    <h1>Phone Number</h1>
        <input type="text" name="" id="phone" placeholder="Your Phone Number">

</div>
<!--  -->
<div class="inp4">
    <h1>Country</h1>
    <input type="text" name="" id="con" placeholder="Country" required>
</div>
<!--  -->
<div class="inp5">
    <h1>Create Password</h1>
    <input type="password" name="" id="pas" placeholder="Create Password" required >

</div>
<!--  -->

<div class="inp6">
    <h1>Confirm Password</h1>
    <input type="password" name="" id="cpas" placeholder="Confirm Password" required>

</div>

<div id='created'>
<h1>Your User is Created</h1>
</div>

        <button id="submit" type="submit">Submit</button>
        </form>
    `

    let created = document.getElementById("created")
// css
    created.style.cssText=`
    background: rgb(7, 21, 151);
    color: white;
    font-size: 29px;
    width: 42%;
    height: 91px;
    position: relative;
    top: -290px;
    left: 224px;
    text-align: center;
    border-radius: 42px;
    box-shadow: 0px 0px 53px rgb(7, 21, 151);
    `

    styleinject(`
    #submit {
        width: 1020px;
        height: 62px;
        background-color: #071597;
        border-radius: 12px;
        border-style: none;
        text-align: center;
        color: white;
        position: relative;
        top: -140px;
    }
    `)

// All user button in sumbmit button
    bb1.addEventListener("click",()=>{
        //create element
        let cont =document.createElement("div")
        let passs =document.createElement("h1")
        let userr =document.createElement("h1")
        let emaill =document.createElement("h1")
        let phonee =document.createElement("h1")
        let conn =document.createElement("h1")
        let imgs =document.createElement("span")
        let img1 = document.createElement("img") 
        let img22= document.createElement("button")
        let img2 = document.createElement("img") 
        let img3 = document.createElement("img") 
        //img src
        img1.src=`/dashboard/all dashbored/images/eye-line.png`
        img2.src=`/dashboard/all dashbored/images/Group 2.png`
        img3.src=`/dashboard/all dashbored/images/Group.png`
        // append
      sec2.append(cont)
      imgs.append(img22)
      img22.appendChild(img2)
      imgs.append(img1,img22,img3)
      cont.append(passs,userr,emaill,conn,imgs)
      //css
img22.style.cssText=` 
background-color: white;
border-style: none;
width: 26px;
height: 26px;`
      imgs.style.cssText=`
      position: relative;
      left: 131px;
      top: 18px;
      display: flex;
      gap: 10px;
      width: 107px;
      `
      img1.style.cssText=`width:24px; height:24px;`
      img2.style.cssText=`width:24px; height:24px;`
      img3.style.cssText=`width:24px; height:24px;`
      
      cont.style.cssText=`
      display: flex;
      position: relative;
      left: 8px;
      top: -50px;
      font-size: 14px;
      color: rgb(103, 98, 98);
      gap: 109px;
      width: 909px;
      `
 // empty array to get data
      let info = []
      
// let input values go to array
      info.push(name.value )
      info.push(email.value)
      info.push(phone.value)
      info.push(con.value)
      passs.innerHTML=` 232424`      
      userr.innerHTML=` ${info[0]}`
      emaill.innerHTML=` ${info[1]}`
      conn.innerHTML=` ${info[3]}`
//  edit 2 user button
      img22.addEventListener("click", ()=>{
        sec2.innerHTML=`
        <h1 id='hh2'>Edit User</h1>
            <form>
    
                <div class="inp1">
                    <h1>Username</h1>
        <input type="text" name="" id="user" placeholder="Username" required>
                </div>
    <div class="inp2">
        <h1>Email</h1>
        <input type="email" name="" id="email1" placeholder="Email" required>
    </div>    
    <div class="inp3">
        <h1>Phone Number</h1>
            <input type="text" name="" id="phone1" placeholder="Your Phone Number">
    </div>
    <!--  -->
    <div class="inp4">
        <h1>Country</h1>
        <input type="text" name="" id="con1" placeholder="Country" required>
    </div>
    <!--  -->
    <div class="inp5">
        <h1>Create Password</h1>
        <input type="password" name="" id="pass1" placeholder="Create Password" readonly >
    </div>
    <!--  -->
    <div class="inp6">
        <h1>Confirm Password</h1>
        <input type="password" name="" id="" placeholder="Confirm Password" required >
    </div>
            <button id="submit" type="submit">Submit</button>
            </form>
        `
        styleinject(`
        #section1 {
            width: 100%;
            height: 756px;
            background-color: #FDF0F0;
        }
        #sec2{
            width: 1077px;
            height: 578px;
            background-color: white;
            border-radius: 18px;
            position: relative;
            top: -1060px;
        }   
        form{
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            position: relative;
            top: 83px;
            left: 20px;
            width: 1064px;
            input{         
                width: 500px;
                height: 62px;
                background-color: white;
                border-radius: 12px;
                border-style: solid;
                border-color: #D5BEBE;
            }
        }
        #hh2{
            position: relative;
            top: 14px;
            left: 20px;
            font-size: 21px;
            width: 90px;
            height: 0;
                }
        
        .inp1{
            position: relative;
            top: -45px;
        }
        .inp2{
            position: relative;
            top: -45px;
        }
        .inp3{
            position: relative;
            top: -45px;
        }
        .inp4{
            position: relative;
            top: -45px;
        }
        .inp5{
            position: relative;
            top: -45px;
        }
        .inp6{
            position: relative;
            top: -45px;
        }
        
        #submit {
            width: 1020px;
            height: 62px;
            background-color: #071597;
            border-radius: 12px;
            border-style: none;
            text-align: center;
            color: white;
            position: relative;
            top: -36px;
        
        }
        `)
        // buttons style
        b1.style.cssText=`color:#676262;`
        b2.style.cssText=`color:#676262;`
        bb1.style.cssText=`color:#676262;`
        bb2.style.cssText=`color:#676262;`
        bb3.style.cssText=`color:#071597;`
// create elment
        let user = document.getElementById("user")
        let email1 =document.getElementById("email1")
        let phone1 =document.getElementById("phone1")
        let con1 =document.getElementById("con1")
        let pass1 =document.getElementById("pass1")
    //get data
        user.value =  name.value
        email1.value=  email.value
        phone1.value=  phone.value
        con1.value= con.value
        pass1.value =pas.value
      })
    })
  }
})
// csss
    styleinject(`
    #section1 {
        width: 100%;
        height: 756px;
        background-color: #FDF0F0;
    }
    #sec2{
        width: 1077px;
        height: 578px;
        background-color: white;
        border-radius: 18px;
        position: relative;
        top: -1060px;
    
     
    }
    
    form{
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        position: relative;
        top: 83px;
        left: 20px;
        width: 1064px;

  
        input{
           
            width: 500px;
            height: 62px;
            background-color: white;
            border-radius: 12px;
            border-style: solid;
            border-color: #D5BEBE;
        }
    }

    #hh2{
        position: relative;
        top: 14px;
        left: 20px;
        font-size: 21px;
        width: 90px;
        height: 0;
            }
    
    .inp1{
        position: relative;
        top: -45px;
    }
    .inp2{
        position: relative;
        top: -45px;
    }
    .inp3{
        position: relative;
        top: -45px;
    }
    .inp4{
        position: relative;
        top: -45px;
    }
    .inp5{
        position: relative;
        top: -45px;
    }
    .inp6{
        position: relative;
        top: -45px;
    }
    
    #submit {
        width: 1020px;
        height: 62px;
        background-color: #071597;
        border-radius: 12px;
        border-style: none;
        text-align: center;
        color: white;
        position: relative;
        top: -36px;
    
    }
    `)
    // buttons
    b1.style.cssText=`color:#676262;`
    b2.style.cssText=`color:#676262;`
    bb1.style.cssText=`color:#676262;`
    bb2.style.cssText=`color:#071597;`
    bb3.style.cssText=`color:#676262;`
})




