
const $inputSender = document.querySelector('.search-form');
const $input = $inputSender.querySelector('.form-control');
const $resultList = document.querySelector('.results-list');
const SITE_URL = "https://openlibrary.org";


$inputSender.addEventListener('submit', function(e) {
    e.preventDefault();
    
        console.log($input.value.replaceAll(' ', '_'));
        
        const BASE_API_URL = "https://openlibrary.org/search.json?q=";

        fetch(`${BASE_API_URL}/${$input.value.replaceAll(' ', '_')}`)
        .then (function(response) {
            const json = response.json();
            return json;
        })
        .then ((json) => {

            const titles = json.docs.map((docs) => `<li>${docs.title}<button class="btn-view" id="${docs.key}">View</button></li> `).join('');
               const $list = document.querySelector('.results-ul');
               $list.innerHTML = `${titles}`; 
        })
        .catch((error) => {
            console.log(error);
        })

        if (e.target.classList === 'btn-view') {
            console.log('hai premuto view')
        }
        console.log(e.target);
        $input.value = '';
    });

const modalCointainerEl = document.querySelector('.modal-container');
const btnClose = document.querySelector('.close');
const pageContent = document.querySelector('.content');

$resultList.addEventListener('click', (e) => {
    
    if (e.target.className === 'btn-view') {
modalCointainerEl.classList.add('show');
pageContent.innerHTML = `<object class="modal-content" type="text/html" data="${SITE_URL}${e.target.id}" >
</object>`
    
}
});

modalCointainerEl.addEventListener('click', (e) => {
    if (e.target.className === 'close') {
        modalCointainerEl.classList.remove('show');
    }

    if (e.target.className === 'modal-container show') {
        modalCointainerEl.classList.remove('show');  
}

console.log(e.target)
})
// btnClose.addEventListener('click', () => {
//     modalCointainerEl.classList.remove('show');
// })
