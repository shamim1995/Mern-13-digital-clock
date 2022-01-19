let doFrom = document.querySelector("#do-form");

doFrom.addEventListener("submit", function(e){
e.preventDefault();

if(doName.value == ""){
    alert("please write the item");
}else{
let doName = document.querySelector("#doName").value;
let do_menu = document.querySelector("#do_menu");


let li = document.createElement("li");
li.className = "list-group-item";

let closeBtn = document.createElement("button");
closeBtn.innerHTML = "&times;";
closeBtn.className = "close";

let doNameText = document.createTextNode(doName);

li.appendChild(closeBtn);
li.insertBefore(doNameText, closeBtn);
do_menu.appendChild(li);

document.querySelector("#doName").value = "";

closeBtn.addEventListener('click',function () {
    this.parentElement.remove()
    
})
}


})


/**
 * this is for counter 
 */

const counter_form = document.getElementById("counter_form");
 

counter_form.addEventListener("submit", function(e){

   e.preventDefault();
    let date = this.querySelector("input[type='date']").value;
    let time = this.querySelector("input[type='time']").value;
    let counter = document.getElementById("counter")
 

    setInterval(function () {
       
       

        let start_time = new Date();
        let end_time = new Date(date + ' ' + time)
        let time_diff = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()));

        let sec = Math.floor(time_diff / 1000);
        let min = Math.floor(sec / 60);
        let hours = Math.floor(min / 60);
        let days = Math.floor(hours / 24);

        let total_hour = hours - (days * 24)
        let total_min = min - (days * 24 * 60) - total_hour * 60;
        let total_sec = sec - (days * 24 * 60 * 60) - total_hour * 60 * 60 - total_min * 60;

        counter.innerHTML = `${zero(days)} : ${zero(total_hour)} : ${zero(total_min)} : ${zero(total_sec)}`
       
    })

    
    


});