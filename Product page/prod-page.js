// Start Cart
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart")
    const cartItemCount = document.querySelector(".cart-icon span")
    const cartItemsList = document.querySelector(".cart-items")
    const cartTotal = document.querySelector(".cart-total")
    const cartIcon = document.querySelector(".cart-icon")
    const sidebar = document.getElementById("sidebar")
    
    let cartItems = [];
    let totalAmount = 0;
    
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const item = {
                name: document.querySelectorAll('.prod-page-details')[index].textContent,
                price: parseFloat(document.querySelectorAll('.price')[index].textContent.slice(1),
            ),
            quantity: 1,
            };
            
            const existingItem = cartItems.find(
                (cartItem) => cartItem.name === item.name,
            );
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cartItems.push(item);
            }
            // += دي للإضافة
            totalAmount += item.price;
            
            updateCartUI();
        });
    
        function updateCartUI() {
            updateCartItemCount(cartItems.length);
            updateCartItemList()
            updateCartTotal()
        }

        function updateCartItemCount(count) {
            cartItemCount.textContent = count;
            var bubble = document.getElementById('bubble')
            bubble.classList.add('bubble')
        }

        function updateCartItemList() {
            cartItemsList.innerHTML = '';
            cartItems.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'individual-cart-item');
                cartItem.innerHTML = `
                <span>(${item.quantity}x)${item.name}</span>
                <span class"cart-item-price">${(item.price * item.quantity).toFixed(2)}
                <button class="remove-item" data-index="${index}"> <i class="fa-solid fa-times"></i> </button>
                </span>
                `;
                
                cartItemsList.append(cartItem);
            });
            const removeButtons = document.querySelectorAll('.remove-item')
            removeButtons.forEach((button) => {
                button.addEventListener('click', (event) => {
                    const index = event.target.dataset.index;
                    removeItemFromCart(index);
                })
            })
        }
        
        function removeItemFromCart(index) {
            const removedItem = cartItems.splice(index, 1)[0];
            totalAmount -= removedItem.price * removedItem.quantity;
            updateCartUI();
        }

        function updateCartTotal() {
            cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
        }

        cartIcon.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
        
        const closeButton = document.querySelector('.sidebar-close');
        closeButton.addEventListener('click', () => {
            sidebar.classList.remove('open')
        })
    })
    
})
// End Cart

// Start Display Cart
var cartIcon = document.querySelector('.cart-icon')
cartIcon.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

const closeButton = document.querySelector('.sidebar-close');
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open')
})
// End Display Cart

// Start Only One Color Selected 
$(document).ready(function(){
    $('input:checkbox').click(function(){
        $('input:checkbox').not(this).prop('checked', false)  
    })
})
// End Only One Color Selected 

//Start Product Menu Info 
$(document).on('click','.prod-info-menu li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});
//End Product Menu Info 

// Start Product Info Filter
$(document).ready(function(){
    $('.prod-info-list').click(function(){
        const value = $(this).attr('data-filter');
        if( value == 'all'){
            $('.info-container').filter('.'+value).show('1000')
        }
        else {
            $('.info-container').not('.'+value).hide('1000')
            $('.info-container').filter('.'+value).show('1000')
        }
    })

})