
function cartHeaderPost(){
  
  var cartHeader = [
    {
      homeAndBack: {
        homeTitle: 'Home',
        backTitle: 'Back'
      },
        imgSrc: './images/favicon.ico'
    }
  ],
  cartHeaderString=''
  
  cartHeader.forEach(e => {
    cartHeaderString =
    
      ` 
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 w-100 mw-100'>
            <nav class='navbar navbar-expand-sm navbar-light w-100 mw-100 justify-content-between' role='navigation'>
              <div class='col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 p-0 w-100 mw-100'>
                <div class='navbar-brand' href='#'>
                  <div class='d-flex align-items-center'>
                    <a href='#' title="${e.homeAndBack.backTitle}" data-toggle="tooltip" onclick='openIndexPage();'><i class='fas fa-arrow-left ml-2 mr-3' aria-hidden='true'></i></a>
                    <a href='#' title="${e.homeAndBack.homeTitle}" data-toggle="tooltip" onclick='openIndexPage();'><img class='rounded-circle' alt src='${e.imgSrc}'></a>
                  </div>
                </div>              
              </div>
              <div class='col-lg-8 col-xl-8 d-lg-block d-xl-block p-0 w-100 mw-100 d-none d-sm-none d-md-none'>
                <div class="topnav border w-100 mw-100">
                  <div class="search-container w-100 mw-100 bg-white cart-page-navbar">
                    <form class='w-100 mw-100' action='#' method='POST'>
                      <input type="text" placeholder="Search..." name="search">
                      <button class='bg-white mr-0 pr-0' type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class='col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 p-0 w-100 mw-100'>
              <ul class="nav navbar-nav align-items-center justify-content-end float-right">
                  <div class="dropdown my-0" id='cartPageDropdownId'>
                      <a class="text-white" href="#" id="navbardrop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        User
                        <i class='fas fa-angle-down text-white fx ml-2 ml-sm-2 ml-md-2 ml-lg-2 ml-xl-2' id='caretId' aria-hidden='true'></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right py-0" id='dropdownMenu'>
                        <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                          <i class='fas fa-user-circle mr-3' aria-hidden='true'></i>
                          My Profile
                        </a>
                        <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                          <i class='fas fa-arrows-alt mr-3' aria-hidden='true'></i>
                          Flipkart Plus Zone
                        </a>
                        <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                          <i class='fas fa-gamepad mr-3' aria-hidden='true'></i>
                          Game Zone
                        </a>
                        <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                          <i class='fas fa-folder-plus mr-3' aria-hidden='true'></i>
                          Orders
                        </a>
                        <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                          <i class='fas fa-heart mr-3' aria-hidden='true'></i>
                          Wishlist
                        </a>
                        <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                          <i class='fas fa-file-alt mr-3' aria-hidden='true'></i>
                          My Chats
                        </a>
                        <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                          <i class='fas fa-folder-open mr-3' aria-hidden='true'></i>
                          Rewards
                        </a>
                        <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                          <i class='fas fa-gift mr-3' aria-hidden='true'></i>
                          Gift Card
                        </a>
                        <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                          <i class='fas fa-bell mr-3' aria-hidden='true'></i>
                          Notification
                        </a>
                        <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                          <i class='fas fa-power-off mr-3' aria-hidden='true'></i>
                          Logout
                        </a>
                      </div>
                  </div>
                </ul>
              </div>
            </nav>            
          </div>
          <div class='col-12 col-sm-12 col-md-12 d-block d-sm-block d-md-block d-lg-none d-xl-none p-0'>
            <div class="topnav border w-100 mw-100">
              <div class="search-container w-100 mw-100 bg-white cart-page-navbar">
                <form class='w-100 mw-100' action='#' method='POST'>
                  <input type="text" placeholder="Search..." name="search">
                  <button class='bg-white mr-0 pr-0' type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
    });
    
  document.querySelector('#cartHeaderId').innerHTML = cartHeaderString
}


function createCartDetails() {

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
    cartImgUrl:'./images/umbrella-1.jpeg',
    quantity: 1,
    name:'Oppo v15',
    sellerName:'Omni van retail',
    price:'250',
    retailPrice:'1000',
    discount: 75,
    offersApplied: 2,
    deliveryDate: '27 July 2019'
  }],
  cartDetail =''

//createCartDetails = () => {
 //cartData = parseJSON(window.localStorage.getItem('cartDetail'))
  if (cartData.length > 0) {
    cartData.forEach(item => {
      cartDetail +=
      
      `
        <div class='d-flex justify-content-between py-4 pl-4 pl-sm-4 pl-md-4 pl-lg-3 pl-xl-3 align-items-top'>
          <div class='mw-100' style="width: 13%;">
            <div class='d-flex flex-column'>
              <div class='align-middle cartItemImg text-center p-1 p-sm-1 p-md-1 p-lg-2 p-xl-2'>
                <a class='text-center' href='#'>
                  <img src='${item.cartImgUrl}' alt${item.name} />
                </a>                          
              </div>
              <div class='d-inline-flex justify-content-center align-items-center qtyBtn'>
                <button class='rounded-circle shadow-none' type='button'>-</button>
                <div class='qtyBtnMiddle'>
                  <input type='text' value='${item.quantity}' />
                </div>
                <button class='rounded-circle shadow-none' type='button'>+</button>
              </div>         
            </div>                        
          </div>
          <div class='mw-100 cartItemDetails ml-5' style='width: 56%;'>
            <div class='d-flex flex-column justify-content-start pt-1 pt-sm-1 pt-md-1 pt-lg-2 pt-xl-2'>
              <div class='itemNameClass'><a class href='#'>${item.name}</a></div>
              <p class='sellerName mt-1 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-3'>Seller: ${item.sellerName}</p>
              <div class='d-flex mt-1 mt-sm-1 mt-md-1 mt-lg-2 mt-xl-2 justify-content-start align-items-center'>
                <span class='itemPrice'>&#x20B9;${item.price}</span>
                <del><span class='itemRealPrice ml-2'>&#x20B9;${item.retailPrice}</span></del>
                <span class='discountPer ml-2'>${item.discount}</span>
                <div class='offerQty ml-2 d-none d-sm-none d-md-block d-lg-block d-xl-block' id='offerQtyId'>
                  <a>
                    ${item.offersApplied}
                    <i class='' aria-hidden='true'></i>
                  </a> 
                </div>                                            
              </div> 
              <div class='d-block justify-content-start mt-1 mt-sm-1 mt-md-2 mt-lg-4 mt-xl-4'>
                <button class='px-0 btn btn-link' type='button'>SAVE FOR LATER</button>
                <button class='btn btn-link px-0 ml-3' type='button'>REMOVE</button>
              </div>
            </div>
          </div>
          <div class='mw-100 pt-1 pt-sm-1 pt-md-1 pt-lg-2 pt-xl-2 deliveryDetails' style="width: 31%;">
            <p>
              Delivery by, ${item.deliveryDate}
            </p>                      
          </div>                       
        </div>

      `            
      });
  } else {
      cartDetail = `<div>Your cart is empty !!!!!</div>`
  }
  document.querySelector('#myCart').innerHTML = cartDetail
  document.querySelector('#totalItemInCart').textContent = `My Cart (${cartData.length})`
  
}

//function cartQtyFunc() {
//  var cartQty = parseInt(document.querySelector('#cartQty').textContent);
//  cartQty++;
//  document.querySelector('#cartQty').textContent = cartQty;
//}


document.querySelector('.dropdown').addEventListener('mouseover', mouseoverFunc);
document.querySelector('.dropdown').addEventListener('mouseout', mouseoverFunc);
document.querySelector('.dropdown').addEventListener('click', clickDropdown);


function mouseoverFunc() {
  setTimeout(function(){
    document.querySelector('#caretId').classList.toggle('fa-angle-up');
    }, 125);
}


function clickDropdown() {
  document.querySelector('.dropdown').removeEventListener('mouseover');
  document.querySelector('.dropdown').removeEventListener('mouseout');
  if (document.querySelector('#caretId').classList == 'fa-angle-down') {
    document.querySelector('#caretId').classList.remove('fa-angle-down');
    document.querySelector('#caretId').classList.add('fa-angle-up');
  } else {
    document.querySelector('#caretId').classList.remove('fa-angle-up');
    document.querySelector('#caretId').classList.add('fa-angle-down');
  }
}

