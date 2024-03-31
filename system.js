// declare add details value
let user1=document.getElementById("user")
let ad=document.getElementById("ad")
let count=0
ad.addEventListener("click",()=>{
    user1.style.display="block"


})
let close =document.querySelector(".close");
close.addEventListener("click",()=>{
    user1.style.display="none"
})

let saved=document.querySelector(".save")


saved.addEventListener("click",()=>{

    // Inputs
    var inp1=document.getElementById("inp1").value;
    var inp2=document.getElementById("inp2").value;
    var inp3=document.getElementById("inp3").value;

    let table=document.getElementById("table")

    // Table Body

    // create table row
    let tableRow=document.createElement("tr")

    // create table data

    let tableData1=document.createElement("td")
    let tableData2=document.createElement("td")
    let tableData3=document.createElement("td")
    let tableData4=document.createElement("td")
  
   
        // First Column
    let tr1=table.appendChild(tableRow)

    tr1.setAttribute("class","text-uppercase ")
    
    let trr1=tr1.appendChild(tableData1)
    trr1.textContent=inp1
    

    // Second Column
    let trr2=tr1.appendChild(tableData2)
    trr2.textContent=inp2

    // Third Column
    let trr3=tr1.appendChild(tableData3)
    trr3.textContent=inp3


    //Update button
    let tr4=tr1.appendChild(tableData4);
    let upbtn=document.createElement("button")
    upbtn.innerHTML="Update"
    upbtn.setAttribute("class","btn btn-success pad")
    tr4.appendChild(upbtn)


    // Create delete button
  
    let dlt=document.createElement("button")
    dlt.textContent="Delete"
    dlt.setAttribute("class","btn btn-danger pad")
    dlt.setAttribute("id", "tableDlt")
    tr4.append(dlt)
    
    //update button click after update the values
    upbtn.addEventListener("click",function(){
        let upStu =prompt("Update Student Id");
        let upFir =prompt("Update First Name");
        let upLas =prompt("Update Last Name");
        tableData1.textContent=upStu
        tableData2.textContent=upFir
        tableData3.textContent=upLas
    })
    
    // When Delete Button Click After Delete from the table Row
    dlt.addEventListener("click",()=>{
        table.removeChild(tableRow)
        
    
})  
    user1.style.display="none"
    inp1='';
    inp2='';
    inp3='';
  
})

 