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

