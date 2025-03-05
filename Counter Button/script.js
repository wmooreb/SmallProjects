const decreaseBtn = document.getElementById('decreaseBtn')
const resetBtn = document.getElementById('resetBtn')
const increaseBtn = document.getElementById('increaseBtn')
const countLabel = document.getElementById('countLabel')
let count = 0

increaseBtn.onclick = () =>{
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = () => {
    if (count === 0){
        pass
    }
    else {
        count--
        countLabel.textContent = count
    }
}
resetBtn.onclick = () => {
    count = 0;
    countLabel.textContent = count
}