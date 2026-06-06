console.log("Karan")
let bj = document.getElementsByClassName("box")
console.log(bj);
bj[2].style.backgroundColor = "orange"
bj[3].style.color="blue"

bj[4].style.backgroundColor = "green"
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="blue"
})