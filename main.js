let exp = document.querySelector("#expense")
let amt = document.querySelector("#amount")
let total ;



// if(localStorage.getItem("array")){
//     total = JSON.parse(total)
// } else{
//     total = []
// }
let z = JSON.parse(localStorage.getItem("array"))
let tot = 0;
// z.map((x,y) => {
//     tot = x.b + x.b;
    
//     return console.log(x.a, x.b) 

// })
// let initialValue = 0
// tot = z.reduce((x,y)=>{
//     console.log(typeof(x.b), typeof(y.b))
//     return x.b + y.b;
// })
// console.log(tot)





function add(){
    console.log(exp.value,amt.value)
    let expname =exp.value
    let amtname =amt.value
    if(!expname && !amtname){
     return alert("INSERT AN ITEM") 
   } else {
   document.querySelector(".row").innerHTML
   += `<div class="col-3" >
   <div class="card one h-100">
     <div class="card-body">
       <h5 class="card-title">${expname}</h5>
       
       <!--  -->
     </div>
      <div class="card-footer">
       <div class="amount">
       <p class="card-text">R${amtname}</p>
       
       </div>
       <div class="btns">
       <button class="btn btn-sm"onclick=""()>delete</button>
       <button class="btn btn-sm"onclick="edit"()>edit</button>
       </div>
     </div>
   </div>
 </div>`
   total.push({a,b})
   localStorage.setItem("array",JSON.stringify(total))
   console.log(total)}
   document.querySelector("#expense").value=""
    document.querySelector("#totalamt").value=""

    
}

function del(e){
    e.parentElement.remove()

    
}

function edit(e){
 let i = document.querySelector(".w")

let update = prompt("Update", );
let a = i.parentElementSibling;
e.parentElement[1].innerHTML = update
console.log(e.parentElement.childNodes[0].innerHTML = update)
 
    
    //  e.parentElement.childNodes[0].contentEditable="true";
    //  e.parentElement.childNodes[1].contentEditable="true";
    

    //console.log(e.parentElement.childNodes[1])
// let c = item.value
// let d = item1.value

// c.contentEditable= "true"
// d.contentEditable= "true"
}