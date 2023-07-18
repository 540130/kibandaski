const foodOrder = document.getElementById('order')
foodOrder.addEventListener('click', () =>{
    const orderPlaced = document.getElementById('placedorder')
    const orderList = document.createElement('form')
    orderList.innerHTML =`
    <form>
        <input type="text" id="food" placeholder="What food do you want"
    </form>`
    orderPlaced.innerHTML =orderList.innerHTML
    
})