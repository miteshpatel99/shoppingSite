function itemDetailsHeader () {
  var itemDetailsHeaderVar = [
      {
        homeTitle: 'Home'
      }, {
        imgSrc: './images/favicon.ico'
      }
    ];

    
var itemDetailsHeaderString = ''

  itemDetailsHeaderVar.forEach(e => {
    itemDetailsHeaderString =

        ` 
        <div class='container-fluid'>
        <div class='row no-gutters'>
          <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <nav class='navbar navbar-toggleable-sm navbar-toggleable-md navbar-toggleable-lg navbar-toggleable-xl navbar-light' role='navigation'>
              <div class='navbar-brand' href='#'>
                <div class='d-flex align-items-center'>
                  <a href='#' title="${e.homeTitle}" data-toggle="tooltip" onclick='openHomePage();'><img class='rounded-circle' alt src='${e.imgSrc}'></a> 
                  <a class='text-white text-decoration-none ml-3 d-none d-sm-none d-md-block d-lg-block d-xl-block' href='#' title="${e.homeTitle}" data-toggle="tooltip" onclick='openHomePage();'>Flipkart</a>
                </div>
              </div>
      
              <button class='navbar-toggler border-0' type='button'>
                <a class='mr-3' href='#' onclick='searchFunc();' title='Search' data-toggle="tooltip">
                  <i class='fas fa-search text-white' aria-hidden='true'></i>
                </a>
                <input class="searchTwo form-control d-none" id='searchId' type="text" name="search" placeholder="Search..." />
                <a class='mr-2 ml-1 mr-sm-1 ml-sm-2 mr-md-4 ml-md-3 mr-lg-4 ml-lg-3 mr-xl-4 ml-xl-3' href='#' title="Wish List" data-toggle="tooltip">
                  <i class='fas fa-heart text-white' aria-hidden='true'></i>
                </a>
                <a class='ml-2' href='#' title="View Your Cart" data-toggle="tooltip">
                  <i class='fas fa-cart-plus text-white pl-0 px-0 mx-0' aria-hidden='true'>
                    
                    <span class='badge badge-pill badge-cart-notify' id='cartQty'>0</span>
                  </i>
                </a>
                <a class='ml-3 ml-1' href='#' title="My Account" data-toggle="tooltip">
                  <i class='fas fa-user text-white' aria-hidden='true'>
                    
                    <i class='badge badge-pill badge-check-notify fa fa-check text-white' aria-hidden='true'> </i>
                  </i>
                </a>
                <span class='navbar-toggler-icon' id='navbar-toggle-icon-id' data-toggle='collapse' data-target='#collapsibleNavbar'></span>
              </button>
      
              <div class='collapse navbar-collapse' id='collapsibleNavbar'>
                <ul class='nav navbar-nav'>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Electronics</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>TVs & Appliances</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Men</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Women</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Baby & Kids</a>
                  </li>    
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Home & Furniture</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Sports, Books & More</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Offer Zone</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
        `
  })
      
    document.querySelector('#itemDetailsHeader').innerHTML = itemDetailsHeaderString
}

function itemDetailBody () {
  var curItem = JSON.parse(window.localStorage.getItem('curItem'))
 
  let itemDetailsString =   `
    <section class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100' id='mainImgSection'>
      <div class="container-fluid">
      <div class='row no-gutters mt-5 pt-3'>
        <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
          <div class='mainImgSectionP'>
            <p class>On offer</p>
          </div>
        </div>
        <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
          <div class='mainImgSectionImage'>
            <img class alt src='${curItem.indexImgUrl}' />
          </div>
        </div>
      <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4' onclick='heartFunc();' type='button'>
          <div class='rounded-circle shadow-lg mainImgSectionHeart'>
            <i class='fa fa-heart p-3 heartClassFontSize heartClassGray' id='heartId' aria-hidden='true'></i>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100'>
        <div class="container-fluid">
          <div class='row mt-3 pt-3'>
            <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <div class='row no-gutters mx-auto'>
                <div class='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 p-0 m-0'>
                  <ul class='img-grid-ul'>
                    <li class='ml-0 mr-1 mr-sm-1 mr-md-1 mr-lg-2 mr-xl-2'>
                      <a class='p-2 p-sm-2 p-md-3 p-lg-3 p-xl-3' href='#'>
                        <img alt src='images/mob- (1).jpeg' />
                      </a>
                    </li>
                    <li class='mx-1 mx-sm-1 mx-md-1 mx-lg-2 mx-xl-2'>
                      <a class='p-2 p-sm-2 p-md-3 p-lg-3 p-xl-3' href='#'>
                        <img alt src='images/mob- (1).jpeg' />
                      </a>
                    </li>
                    <li class='mx-1 mx-sm-1 mx-md-1 mx-lg-2 mx-xl-2'>
                      <a class='p-2 p-sm-2 p-md-3 p-lg-3 p-xl-3' href='#'>
                        <img alt src='images/mob- (1).jpeg'/>
                      </a>
                    </li>
                    <li class='ml-1 ml-sm-1 ml-md-1 ml-lg-2 ml-xl-2 mr-0'>
                      <a class='p-2 p-sm-2 p-md-3 p-lg-3 p-xl-3' href='#'>
                        <img alt src='images/mob- (1).jpeg' />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 p-0 m-0'>
                  <div class='row mr-3 mr-sm-3 mr-md-3 mr-lg-5 mr-xl-5 float-right align-items-center mt-1 mt-sm-1 mt-md-3 mt-lg-2 mt-xl-2'>
                    <div class='text-center' id='productDetails'>
                      <a class='' href='#'>
                        <i class='fa fa-exclamation-circle mb-2 mb-sm-2 mb-md-1 mb-lg-1 mb-xl-1' aria-hidden='true'></i>
                        <p class='mb-0'> ${curItem.name} </p>
                        <p class='mb-0'>Details</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  `
  document.querySelector('#itemDetailsId').innerHTML = itemDetailsString
}

