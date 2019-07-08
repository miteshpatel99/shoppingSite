

// function backPageFunction() {
//   var backPost = [
//     {
//       homeAndBack: {
//         homeTitle: 'Back',
//         backTitle: 'Home'
//       },
//       imgArray = ['./images/mob- (1).jpeg','./images/mob- (1).jpeg','./images/mob- (1).jpeg'],
//     }
//   ],
//   backString=''



//   backPost.forEach(element => {

//     var images = element.imgArray[index].split(','),
//     imageOutput='',
//     imgStrng='';

//   for(var j = 0; j < images.length; j++) {
//       imageOutput += '<img src="images[j] ">';


//     // gridster.add_widget("<li class='heartLiClass' data-id='0'>" +  + "</li>";
//   imgStrng +=
//     `
//     <li class='heartLiClass' data-id='0'>
//       <section class='sortFilterSection m-0 p-0 cust-ouline-0 w-100 mw-100 backHtmlImgList'>
//             <div class="container-fluid">
//               <div class='row no-gutters' id='backHtmlOnOffer'>
//                 <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
//                   <div class='mainImgSectionP'>
//                     <p class='px-1'>On offer</p>
//                   </div>
//                 </div>
//               </div>
//               <div class='row no-gutters my-4 my-sm-4 my-md-4 my-lg-4 my-xl-4' id='backHtmlImg'>
//                 <div class='col-2 col-sm-2 col-md-3 col-lg-2 col-xl-2'>
//                   <div class=''>
//                     <div class='backHtmlImgClass'>
//                       ${imageOutput}
//                     </div>
//                   </div>
//                 </div>
//                 <div class='col-8 col-sm-8 col-md-8 col-lg-9 col-xl-9 px-1'>
//                   <div class='d-flex flex-column' id='productDesc2'>
//                     <div>
//                       <h1 class>
//                         Redmi Note 7 Pro (Nebula Red, 64 GB)  (4 GB RAM)
//                         <span><a href='#'>#JustHere</a></span>
//                       </h1>
//                       <p class='text-black font-weight-bold mb-0'>
//                         ₹13,999
//                         <span class='mx-4 text-mute' style='text-decoration: line-through;'>₹15,999</span>
//                         <del class='text-success'>12% off</del>
//                       </p>
//                       <div class='d-inline-flex align-items-bottom'>
//                           <p class='mt-2 pt-0 font-weight-bold'> Exchange available</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class='col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 px-1 heartClassSection bg-white'  type='button'>
//                     <div class='row no-gutters justify-content-center align-items-center'>
//                       <div class='mainImgSectionHeart w-50 text-center'>
//                         <i data-id='0' class='heartClassFontSize heartClassGray heartClass fa fa-heart p-2 p-sm-2 p-md-2 py-lg-3 px-lg-2 py-xl-4 px-xl-1' aria-hidden='true'></i>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </li>

//     `
//     document.querySelector('#heartUlId').innerHTML = imgStrng
//   }
//     backString +=
//     `



//     <header class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100'>
//       <div class='container-fluid'>
//         <div class='row no-gutters'>
//           <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
//             <nav class='navbar navbar-toggleable-sm navbar-toggleable-md navbar-toggleable-lg navbar-toggleable-xl navbar-light' role='navigation'>
//               <div class='navbar-brand' href='#'>
//                 <div class='d-flex align-items-center'>
//                   <a href='#' title="${element.homeAndBack.homeTitle}" data-toggle="tooltip" onclick='openBackPageFunc();'><i class='fas fa-arrow-left ml-2 mr-3' aria-hidden='true'><!-- &#xf060; --></i></a>
//                   <a href='#' title="${element.homeAndBack.backTitle}" data-toggle="tooltip" onclick='openHomePageFunc();'><img class='rounded-circle' alt src='./images/favicon.ico'></a>
//                 </div>
//               </div>

//               <button class='navbar-toggler border-0' type='button'>
//                 <a class='mr-3' href='#' onclick='searchFunc();' title='Search' data-toggle="tooltip">
//                   <i class='fas fa-search text-white' aria-hidden='true'><!-- &#xf002; --></i>
//                 </a>
//                 <input class="searchTwo form-control d-none" id='searchId' type="text" name="search" placeholder="Search..." />
//                 <a class='mr-2 ml-1 mr-sm-1 ml-sm-2 mr-md-4 ml-md-3 mr-lg-4 ml-lg-3 mr-xl-4 ml-xl-3' href='#' title="Wish List" data-toggle="tooltip">
//                   <i class='fas fa-heart text-white' aria-hidden='true'><!-- &#xf004; --></i>
//                 </a>
//                 <a class='ml-2' href='#' title="View Your Cart" data-toggle="tooltip">
//                   <i class='fas fa-cart-plus text-white pl-0 px-0 mx-0' aria-hidden='true'>
//                     <!-- &#xf217;	-->
//                     <span class='badge badge-pill badge-cart-notify' id='cartQty'>0</span>
//                   </i>
//                 </a>
//                 <a class='ml-3 ml-1' href='#' title="My Account" data-toggle="tooltip">
//                   <i class='fas fa-user text-white' aria-hidden='true'>
//                     <!-- &#&#xf007;	-->
//                     <i class='badge badge-pill badge-check-notify fa fa-check text-white' aria-hidden='true'> <!-- &#xf00c; --> </i>
//                   </i>
//                 </a>
//                 <span class='navbar-toggler-icon' id='navbar-toggle-icon-id' data-toggle='collapse' data-target='#collapsibleNavbar'></span>
//               </button>

//               <div class='collapse navbar-collapse' id='collapsibleNavbar'>
//                 <ul class='nav navbar-nav'>
//                   <li class='nav-item'>
//                     <a class='nav-link' href='#'>Electronics</a>
//                   </li>
//                   <li class='nav-item'>
//                     <a class='nav-link' href='#'>TVs & Appliances</a>
//                   </li>
//                   <li class='nav-item'>
//                     <a class='nav-link' href='#'>Men</a>
//                   </li>
//                   <li class='nav-item'>
//                     <a class='nav-link' href='#'>Women</a>
//                   </li>
//                   <li class='nav-item'>
//                     <a class='nav-link' href='#'>Baby & Kids</a>
//                   </li>    
//                   <li class='nav-item'>
//                     <a class='nav-link' href='#'>Home & Furniture</a>
//                   </li>
//                   <li class='nav-item'>
//                     <a class='nav-link' href='#'>Sports, Books & More</a>
//                   </li>
//                   <li class='nav-item'>
//                     <a class='nav-link' href='#'>Offer Zone</a>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>



//     <main>
//       <article>


//           <div class="container-fluid">
//             <div class='row no-gutters sortFilterSection'>
//               <div class='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 border' type='button'>
//                 <div class='py-3'>
//                   <div class='d-flex justify-content-center align-items-center'>
//                     <i class='fas fa-sort-amount-down mr-2' aria-hidden='true'></i>
//                     <p class='mb-0'>Sort</p>
//                   </div>
//                 </div>
//               </div>
//               <div class='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 border' type='button'>
//                   <div class='py-3'>
//                       <div class='d-flex justify-content-center align-items-center'>
//                         <i class='fas fa-list mr-2' aria-hidden='true'></i>
//                         <p class='mb-0'>Filter</p>
//                       </div>
//                     </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <ul class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100 list-unstyled' id='heartUlId'>

//         </ul>

//       </article>
//     </main>


//     `

//   });

//   document.querySelector('#backPagePostId').innerHTML = backString
// }


// function dispImgFunc() {

//   }
let availableProducts = [{
  category: 'On offer',
  productsImg: [{ img: './images/redmi-neptune-blue.jpeg'}, {img: './images/redmi-neptune-blue.jpeg' }],
  name: ' Redmi Note 7 Pro (Nebula Red, 64 GB)  (4 GB RAM)',
  description: 'lorem ipsum dorem',
  sellerName: 'Omni van retail',
  price: '250',
  retailPrice: '1000',
  discount: 75,
  exchange:'Exchange available'
},{
  category: 'On offer',
  productsImg: [{ img: './images/redmi-neptune-blue.jpeg'}, {img: './images/redmi-neptune-blue.jpeg' }],
  name: ' Redmi Note 7 Pro (Nebula Red, 64 GB)  (4 GB RAM)',
  description: 'lorem ipsum dorem',
  sellerName: 'Omni van retail',
  price: '250',
  retailPrice: '1000',
  discount: 75,
  exchange:'Exchange available'
},{
  category: 'On offer',
  productsImg: [{ img: './images/redmi-neptune-blue.jpeg'}, {img: './images/redmi-neptune-blue.jpeg' }],
  name: ' Redmi Note 7 Pro (Nebula Red, 64 GB)  (4 GB RAM)',
  description: 'lorem ipsum dorem',
  sellerName: 'Omni van retail',
  price: '250',
  retailPrice: '1000',
  discount: 75,
  exchange:'Exchange available'
}]

let productLists = ''

createProductList = () => {
  debugger;
  if (availableProducts.length > 0) {
availableProducts.forEach(item => {

  productLists += `<li class='heartLiClass' data-id='0'>
               <section class='sortFilterSection m-0 p-0 cust-ouline-0 w-100 mw-100 backHtmlImgList'>
                 <div class="container-fluid">
                   <div class='row no-gutters' id='backHtmlOnOffer'>
                     <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                       <div class='mainImgSectionP'>
                         <p class='px-1'>${item.category}</p>
                       </div>
                     </div>
                   </div>
                   <div class='row no-gutters my-4 my-sm-4 my-md-4 my-lg-4 my-xl-4' id='backHtmlImg'>
                     <div class='col-2 col-sm-2 col-md-3 col-lg-2 col-xl-2'>
                       <div class=''>
                         <div class='backHtmlImgClass'>
                           <img alt src='${item.productsImg[0].img}' />
                         </div>
                       </div>
                     </div>
                     <div class='col-8 col-sm-8 col-md-8 col-lg-9 col-xl-9 px-1'>
                       <div class='d-flex flex-column' id='productDesc2'>
                         <div>
                           <h1 class>
                            ${item.name}
                             <span><a href='#'>#JustHere</a></span>
                           </h1>
                           <p class='text-black font-weight-bold mb-0'>
                             ₹13,999
                             <span class='mx-4 text-mute' style='text-decoration: line-through;'>${item.price}</span>
                             <del class='text-success'>${item.discount}% off</del>
                           </p>
                           <div class='d-inline-flex align-items-bottom'>
                               <p class='mt-2 pt-0 font-weight-bold'> ${item.exchange}</p>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div class='col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 px-1 heartClassSection bg-white'  type='button'>
                         <div class='row no-gutters justify-content-center align-items-center'>
                           <div class='mainImgSectionHeart w-50 text-center'>
                             <i data-id='0' class='heartClassFontSize heartClassGray heartClass fa fa-heart p-2 p-sm-2 p-md-2 py-lg-3 px-lg-2 py-xl-4 px-xl-1' aria-hidden='true'></i>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </section>
               </li>`
})
  } else {
    productLists = `<div>No products found please select product category</div>`
  }
  document.querySelector('#heartUlId').innerHTML = productLists
}
