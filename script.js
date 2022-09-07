const firstUl = document.getElementById('first-ul');
const searchButtonTwo = document.getElementById('search-button-two');

function searchBarFocus() {
    firstUl.style.display = 'none';
    searchButtonTwo.style.display = 'block';
}

function searchBarBlur() {
    firstUl.style.display = 'flex';
    searchButtonTwo.style.display = 'none';
}


window.onscroll = function(){
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("slide-down").className = "slide-down-scroll";
      } else {
        document.getElementById("slide-down").className = "slide-down";
      }
}

