let exp = document.querySelector("#expense")
let amt = document.querySelector("#amount")
let total =[];
let row = document.querySelector(".row");



let tot = 0;

function add(){
    //console.log(amt.value)
    // let expname =exp.value
    // let amtname = Number(amt.value)

    if(localStorage.getItem("array")){
        total = JSON.parse(localStorage.getItem("array"))

    }


  
   console.log(total)
   row.innerHTML="";
    total.map((x)=>{
   return (row.innerHTML += `<div class="col-3 lolo" ><div class="card one h-100"><div class="card-body"><h5 class="card-title">${x.expname}</h5></div><div class="card-footer">
       <div class="amount"><p class="card-text">R${x.amtname}</p></div><div class="btns"><button class="btn btn-sm buttons " onclick="del(this)">Delete</button><button class="btn btn-sm buttons edit" onclick="edit(this)">Edit</button></div>
     </div>
   </div>
 </div>`)})
   
   //localStorage.setItem("array",JSON.stringify(total))
//    console.log(total)

//    document.querySelector("#expense").value=""
//     document.querySelector("#amount").value=""

    
}
function loadData(){
    if(localStorage.getItem("array")){
        total = JSON.parse(localStorage.getItem("array"))
        console.log(total)
        add();
    }
    // else {
    //     add();
    // }
}
loadData();

let getData = ()=>{
    if(!(exp.value && amt.value)){
        return alert("INSERT BOTH AN ITEM AND AMOUNT") 
      }

    total.push({
        expname: exp.value,
        amtname:Number(amt.value)});

    localStorage.setItem("array",JSON.stringify(total))
        add();
}
//getData()


function del(e,i){
    e.parentElement.parentElement.parentElement.parentElement.remove();
    total.splice(i,1);
    console.log(total)
    localStorage.setItem("array",JSON.stringify(total))


    
}

function edit(e){
    let exp = prompt("Update Expense name:");
    let amnt = Number(prompt("Update Amount:"));

    if(!(exp && amnt)){
        return alert("Fields cant be empty");

    }

    let thisExp = e.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].innerHTML;
    let thisAmnt = e.parentElement.previousSibling.childNodes[0].innerHTML;

    let results = total.find((x)=>x.expname === thisExp)
    console.log(results)
    if(results){
        e.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].innerHTML= exp;
        e.parentElement.previousSibling.childNodes[0].innerHTML= amnt;

        results.expname= exp;
        results.amtname = amnt
        localStorage.setItem("array",JSON.stringify(total));
    }
    console.log(thisExp, thisAmnt);



//  let i = document.querySelector(".w")

// let update = prompt("Update", );
// let a = i.parentElementSibling;
// e.parentElement[1].innerHTML = update
// console.log(e.parentElement.childNodes[0].innerHTML = update)
 
    
    //  e.parentElement.childNodes[0].contentEditable="true";
    //  e.parentElement.childNodes[1].contentEditable="true";
    

    //console.log(e.parentElement.childNodes[1])
// let c = item.value
// let d = item1.value

// c.contentEditable= "true"
// d.contentEditable= "true"
}

//amount = Number(amtname.value)
let calc = ()=>{
    let budget =Number( document.querySelector('#totalamt').value)
    let finalOuput = document.querySelector('.output');
    let result = total.reduce((a, b) => {
  return a + b.amtname;
    }, 0);
    let sum = budget - result
    console.log(sum)
    finalOuput.value = sum;

console.log(result);
}


 



