const button = document.querySelector('#button');
const container = document.querySelector('.card-container');
const formBtn = document.querySelector('#formBtn');
const form = document.querySelector('form');
const showFormBtn = document.querySelector('#show-form');
const deleteLibrary = document.querySelector('.remove');
const cancelBtn = document.querySelector('#cancel-btn');


form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#Author').value;
    const description = document.querySelector('#Description').value;
    const pages = document.querySelector('#Pages').value;
    const Select = document.querySelector('#Select').value;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="text">
                    <h1 id="card-title">${title}</h1>
                    <p>By: ${author}</p>
                    <div class="des">
                        <p>${description}</p>
                    </div>
                    <p id= "pages">Pages : ${pages}</p>
                    <button id = "rem-text">Romove</button>
                    <button id = "sel-text">${Select}</button>
      </div>
                    `;
     
    container.appendChild(card);
    document.querySelector('#title').value = '';
    document.querySelector('#Author').value = '';
    document.querySelector('#Description').value = '';
    document.querySelector('#Pages').value = '';
    
    form.style.display = 'none';
    const deleteCard = card.querySelector('#rem-text');
    deleteCard.addEventListener('click' , ()=>{
        card.style.display = 'none'
    })
})

showFormBtn.addEventListener('click', ()=>{
    if (form.style.display == 'none'){
        form.style.display = 'block'
    }
    else{
        form.style.display = 'none'
    }
})

deleteLibrary.addEventListener('click' , ()=>{
    container.textContent = ""
})

cancelBtn.addEventListener('click' , ()=>{
    form.style.display = "none"
})

