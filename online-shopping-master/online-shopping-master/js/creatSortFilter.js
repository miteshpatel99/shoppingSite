function creatSortFilter() {
  let sortFilterData = [
    {
      name: 'Sort',
      faClass: 'fas fa-sort-amount-down'
    }, {
      name: 'Filter',
      faClass: 'fas fa-list'
    }
  ];
  let sortFilterString = '';
  // indexData = parseJSON(window.localStorage.getItem('indexDetails'))
  sortFilterData.forEach(ele => {
    sortFilterString +=
      `
        <div class='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 border' type='button'>
          <div class='py-3'>
            <div class='d-flex justify-content-center align-items-center'>
              <i class='${ele.faClass} mr-2' aria-hidden='true'></i>
              <p class='mb-0'>${ele.name}</p>
            </div>
          </div>
        </div>
              
      `;
  });
  document.querySelector('#sortFilterId').innerHTML = sortFilterString;
}
