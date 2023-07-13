    
var adddItemClass = 0;
function addtoCart(item) {
    adddItemClass += 1 ;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartimg');
    selectedItem.setAttribute('id',adddItemClass);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var cartItems =document.getElementById('title');
    selectedItem.append(img);
    cartItems.append(selectedItem);
}
console.log(addtoCart);