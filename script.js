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
  
  for (var e=1; e< 7; e++){
    checker = `ul${e}`;
    
    if(id !== checker){
      document.querySelector(`.ul${e} div`).classList.remove('dropdown-container-show');
      document.querySelector(`.ul${e} button`).classList.remove('header-arrow-anime');
      document.querySelector(`.ul${e}`).classList.remove('header-bg-line');
    }
    
  }

  document.querySelector(`.${id} div`).classList.toggle('dropdown-container-show');
  document.querySelector(`.${id} button`).classList.toggle('header-arrow-anime');
  document.querySelector(`.${id}`).classList.toggle('header-bg-line');
}
window.onclick = function(event) {
  if (!event.target.matches('.first-ul button')) {
    var dropdowns = document.getElementsByClassName("dropdown-container");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown-container-show')) {
        openDropdown.classList.remove('dropdown-container-show');
        for (var e=1; e< 7; e ++){
          document.querySelector(`.ul${e} button`).classList.remove('header-arrow-anime');
          document.querySelector(`.ul${e}`).classList.remove('header-bg-line');
        }
      }
    }
  }
}




//footer dropdown
var acc = document.querySelectorAll('.footer-nav h3')
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.classList.toggle("showing");
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
    document.getElementById("azure-products-item").innerHTML += `<div class="card azure-products-item-card">
    <img src="${list[i].img}">
    <p>${list[i].des}</p>
    <a>${list[i].name}</a>
</div>`;
  }
}

function addContent(evt, name) {
  var list, count;
  allElement = document.querySelectorAll('.azure-products-prdt button');
  azureProductLoop = document.querySelectorAll(".azure-products-id-class");
  for (var i = 0; i < allElement.length; i++) {
    allElement[i].classList.remove('active-product');
    if (allElement[i] == evt.currentTarget) {
      count = i
    }
  }
  console.log(count)
  for (let k = 0; k < azureProductLoop.length; k++) {
    azureProductLoop[k].classList.remove("active-idqaz");
    if (k === count) {
      azureProductLoop[k].className = 'azure-products-id-class active-idqaz azure-products-item';
      console.log(azureProductLoop[k])
    }
  }

  evt.currentTarget.className += 'active-product';


  for (var i=0; i< azureProducts.length; i++){
    if(name == azureProducts[i].item) {
      list = azureProducts[i].list
      document.getElementById("azure-products-item").innerHTML = ` `;
      innerHtmlCall(list);
    }
  
  }
}
innerHtmlCall(azureProducts[0].list)
//for mobile
var z,j
azureProductsIdClass = document.getElementsByClassName("azure-products-id-class");
   for (z = 0; z < azureProductsIdClass.length; z++) {
     for (j = 0; j < azureProducts.length; j++) {
      if (z == j) {
        list = azureProducts[j].list ;
        for (i= 0;i<list.length;i++) {
          azureProductsIdClass[i].innerHTML += `<div class="card azure-products-item-card">
          <img src="${list[i].img}">
          <p>${list[i].des}</p>
          <a>${list[i].name}</a>
      </div>`;
        }
      }      
     }
     
   }



//Find out how these customers are innovating with Azure

function customerEvt(evt, count) {
  
  customerSelect = document.querySelectorAll('.customer-select img')
  customerContentDiv = document.querySelectorAll('.cutomer-content-div')
  owlDot = document.querySelectorAll('.owl-dot button');

  for (var i=0; i<6; i++) {
    customerSelect[i].classList.remove('active')
    customerContentDiv[i].classList.remove('active')
    owlDot[i].classList.remove('active')
    if(i == count) {
      customerSelect[i].classList.add('active')
    customerContentDiv[i].classList.add('active')
    owlDot[i].classList.add('active')
    }
  }
}