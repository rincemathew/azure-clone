const first_ul = document.getElementById('first-ul');
const search_button_two = document.getElementById('search-button-two');
const search_box = document.getElementById('search-box');


// console.log(azureProducts)


//search box
function searchBarFocus() {
    first_ul.style.display = 'none';
    search_button_two.style.display = 'flex';
    search_box.style.display = 'flex';
    search_box.style.justifyContent = "flex-end";
}

function searchBarBlur() {
    first_ul.style.display = 'flex';
    search_button_two.style.display = 'none';
}

//dropdown while scrolling - menu bar
window.onscroll = function(){
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("slide-down").className = "slide-down-scroll";
      } else {
        document.getElementById("slide-down").className = "slide-down";
      }
}

//dropdown menu onclick
function dropdownMenu(id){
  document.querySelector(`.${id} div`).classList.toggle('dropdown-container-show');
  document.querySelector(`.${id} button`).classList.toggle('header-arrow-anime');
  document.querySelector(`.${id}`).classList.toggle('header-bg-line');
  //   var a = document.querySelector(`.${id} button`);
  //   var b = window.getComputedStyle(a, ':after')
  // console.log(b)
}

//footer dropdown
var acc = document.querySelectorAll('.footer-nav h3')
// console.log(acc)
var i;

for (i = 0; i < acc.length; i++) {
  // console.log(i)
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    // console.log(panel)
    panel.classList.toggle("showing");
    // if (panel.style.display === "block") {
    //   panel.style.display = "none";
    // } else {
    //   panel.style.display = "block";
    // }
  });
}


//image show in ---Start putting your ideas into action with Azure products and services
const azureProductShowImage = document.getElementById('azure-product-show-image');
const azureProductHideImage = document.getElementById('azure-product-hide-image');

azureProductShowImage.addEventListener('click', ()=>{
  azureProductHideImage.style.display = 'block';
})
azureProductHideImage.addEventListener('click', ()=>{
  azureProductHideImage.style.display = 'none';
})

//add content to card --tart putting your ideas into action with Azure products and services
function innerHtmlCall (list){
  for (var i=0; i < list.length; i++) {
    // console.log(i)
    document.getElementById("azure-products-item").innerHTML += `<div class="card azure-products-item-card">
    <img src="${list[i].img}">
    <p>${list[i].des}</p>
    <a>${list[i].name}</a>
</div>`;
  }
}

function addContent(evt, name) {
  var list;
  // elementStyle = document.getElementById('azure-product-button-id');
  allElement = document.querySelectorAll('.azure-products-prdt button');
  for (var i = 0; i < allElement.length; i++) {
    allElement[i].classList.remove('active-product');
  }
  evt.currentTarget.className += 'active-product';
  // console.log(elementStyle)
  // azureProductItemCard = document.querySelectorAll('.azure-products-item-card');
  // for (var i = 0; i < azureProductItemCard.length; i++) {
  //   allElement[i].classList.remove('active-product');
  // }

  for (var i=0; i< azureProducts.length; i++){
    // console.log(azureProducts[i])
    if(name == azureProducts[i].item) {
      list = azureProducts[i].list
      console.log(list)
      document.getElementById("azure-products-item").innerHTML = ` `;
      innerHtmlCall(list);
      
      // console.log('sdfds')
    }
  
  }
}
innerHtmlCall(azureProducts[0].list)
