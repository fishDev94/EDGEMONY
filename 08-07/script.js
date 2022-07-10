
const $inputSender = document.querySelector('.search-form');
const $input = $inputSender.querySelector('.form-control');

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

            const titles = json.docs.map((docs) => `<li data-key="${docs.key}">${docs.title}</li>`).join('');
               const $list = document.querySelector('.results-ul');
               $list.innerHTML = `${titles}`; 
        })
        .catch((error) => {
            console.log(error);
        })

        $input.value = '';
    });







        
