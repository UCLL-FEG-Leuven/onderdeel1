let visitors = 0;

document.getElementById("addOne").addEventListener("click",()=>{
    visitors++;
    document.querySelector('input').value = visitors;
})

const resetCount = function(){
    visitors = 0;
    document.querySelector('input').value = visitors;
}
document.getElementById('reset').addEventListener('click', resetCount);