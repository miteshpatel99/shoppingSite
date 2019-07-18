let cartData = [
    {
        cartImgUrl:'./images/mob- (1).jpeg',
        quantity: 1,
        name:'Oppo v15',
        sellerName:'Omni van retail',
        price:'250',
        retailPrice:'1000',
        discount: 75,
        offersApplied: 2,
        deliveryDate: '9 July 2019'
}, {
    cartImgUrl:'./images/mob- (2).jpeg',
    quantity: 1,
    name:'Oppo v15',
    sellerName:'Omni van retail',
    price:'250',
    retailPrice:'1000',
    discount: 75,
    offersApplied: 2,
    deliveryDate: '27 July 2019'
}]
let cartDetail =''

 createCartDetails = () => {
   // cartData = parseJSON(window.localStorage.getItem('cartDetail'))
    if (cartData.length > 0) {
        cartData.forEach(item => {
            cartDetail += `<div class='d-flex justify-content-between py-4 px-3 align-items-top'>
            <div class='mw-100' style="width: 13%;">
              <div class='d-flex flex-column'>
                <div class='align-middle text-center p-1 p-sm-1 p-md-1 p-lg-2 p-xl-2'>
                  <a class='text-center' href='#'>
                    <img class='text-center' width='36%' height='36%' src='${item.cartImgUrl}' alt=${item.name} />
                  </a>                          
                </div>
                <div class='d-inline-flex justify-content-center align-items-center qtyBtn'>
                  <button class='rounded-circle shadow-none' type='button'>-</button>
                  <div class='qtyBtnMiddle'>
                    <input type="text" value=${item.quantity} />
                  </div>
                  <button class='rounded-circle shadow-none' type='button'>+</button>
                </div>         
              </div>                        
            </div>
            
            <div class='mw-100 cartItemDetails ml-5' style='width: 56%;'>
            <div class='d-flex flex-column justify-content-start pt-1 pt-sm-1 pt-md-1 pt-lg-2 pt-xl-2'>
              <div class='itemNameClass'><a class href='#'>${item.name}</a></div>
              <p class='sellerName mt-3'>Seller: ${item.sellerName}</p>
              <div class='d-flex mt-2 justify-content-start align-items-center'>
                <span class='itemPrice'>&#x20B9;${item.price}</span>
                <del><span class='itemRealPrice ml-2'>&#x20B9;${item.retailPrice}</span></del>
                <span class='discountPer ml-2'>${item.discount}% Off</span>
                <div class='offerQty ml-2' id='offerQtyId'>
                  <a>
                    ${item.offersApplied} offer applied
                    <i class='' aria-hidden='true'></i>
                  </a> 
                </div>                                            
              </div> 
              <div class='d-block justify-content-start mt-4'>
                <button class='px-0 btn btn-link' type='button'>SAVE FOR LATER</button>
                <button class='btn btn-link px-0 ml-3' type='button'>REMOVE</button>
              </div>
            </div>
            </div>
            <div class='mw-100 pt-1 pt-sm-1 pt-md-1 pt-lg-2 pt-xl-2' style="width: 31%;">
                        <p>
                          Delivery by, ${item.deliveryDate}
                        </p>                      
                      </div> 
                      </div>`            
        });
    } else {
        cartDetail = `<div>Your cart is empty !!!!!</div>`
    }
    document.querySelector('#myCart').innerHTML = cartDetail
    document.querySelector('#totalItemInCart').textContent = `My cart (${cartData.length})`
}


document.querySelector('.dropdown').addEventListener('mouseover', mouseoverFunc);
document.querySelector('.dropdown').addEventListener('mouseout', mouseoverFunc);
document.querySelector('.dropdown').addEventListener('click', dropdownClick);

function mouseoverFunc() {
  setTimeout(function(){
    document.querySelector('#caretId').classList.toggle('fa-angle-up');
   }, 125); 
}

function dropdownClick() {
  document.querySelector('.dropdown').removeEventListener('mouseover');
document.querySelector('.dropdown').removeEventListener('mouseout');
document.querySelector('#caretId').classList.remove('fa-angle-down');
    document.querySelector('#caretId').classList.add('fa-angle-up');
    document.querySelector('.dropdown-menu').style.display = 'block';  
  
}