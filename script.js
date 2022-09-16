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
  //   var a = document.querySelector(`.${id} button`);
  //   var b = window.getComputedStyle(a, ':after')
  // console.log(b)
}
window.onclick = function(event) {
  // var qazoc = event.target.matches('.first-ul')
  // console.log(event.target)
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
        // document.querySelectorAll('header .nav-button').classList.remove('header-arrow-anime');
        // document.querySelectorAll('.first-ul a').classList.remove('header-bg-line');
        // var a = document.querySelectorAll('.first-ul a');
        // console.log(a)
        // document.querySelector('.ul4').classList.remove('header-bg-line');
      }
    }
  }
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
  var list, count;
  // elementStyle = document.getElementById('azure-product-button-id');
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

  // console.log(evt.currentTarget)
  evt.currentTarget.className += 'active-product';



  // azureProductLoop = document.getElementsByClassName('azure-products-id-class');
  // for (var i = 0; i < azureProductLoop.length; i++) {
  //   azureProductLoop[i].classList.remove('active-id');
  // }


  for (var i=0; i< azureProducts.length; i++){
    // console.log(azureProducts[i])
    if(name == azureProducts[i].item) {
      list = azureProducts[i].list
      // console.log(list)
      document.getElementById("azure-products-item").innerHTML = ` `;
      innerHtmlCall(list);
      
      // console.log('sdfds')
    }
  
  }
}
innerHtmlCall(azureProducts[0].list)
//for mobile
var z,j
azureProductsIdClass = document.getElementsByClassName("azure-products-id-class");
   for (z = 0; z < azureProductsIdClass.length; z++) {
    //  console.log(azureProductsIdClass[z]);
     for (j = 0; j < azureProducts.length; j++) {
      if (z == j) {
        list = azureProducts[j].list ;
        // console.log(list)
        for (i= 0;i<list.length;i++) {
          azureProductsIdClass[i].innerHTML += `<div class="card azure-products-item-card">
          <img src="${list[i].img}">
          <p>${list[i].des}</p>
          <a>${list[i].name}</a>
      </div>`;
        }
        
      }
      // console.log(azureProducts[j].list)
      
     }
     
     // allElement[i].classList.remove('active-product');
   }

//  for (var j = 0; j < azureProducts.length; j++) {
//    list = azureProducts[j].list;
//    console.log(list);
//  }



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
  // evt.currentTarget.className += 'active';
}


// allElement = document.querySelectorAll('.azure-products-prdt button');
//   azureProductLoop = document.querySelectorAll(".azure-products-id-class");
//   for (var i = 0; i < allElement.length; i++) {
//     allElement[i].classList.remove('active-product');
//     if (allElement[i] == evt.currentTarget) {
//       count = i
//     }
//   }
//customer-select img.active
//cutomer-content-div.active loop
//owl-dot button.active