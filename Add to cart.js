window.addEventListener('DOMContentLoaded', ()=>{
    const shopBtn = document.querySelector('.shopBtn')
    const cartBtn = document.querySelector('.cartBtn')
    const itemContainer = document.querySelector('.item-container')
    const tbody = document.querySelector('.tbody')
    const checkoutBtn = document.querySelector('.checkout-btn')
    const shopSec = document.querySelector('.shop')
    const cartSec = document.querySelector('.cart')
    
    shopBtn.addEventListener('click', ()=>{
        cartSec.style.display="none"
        shopSec.style.display="block"
    })
    
    cartBtn.addEventListener('click', ()=>{
        shopSec.style.display="none"
        cartSec.style.display="block"
    })
