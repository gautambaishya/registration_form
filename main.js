

// //single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));


// //Multiple element 
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item)=> console.log(item));

// const ul = document.querySelector('.items')
// //ul.remove();

// //ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Bard';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
// ul.firstElementChild.style.color = 'green';
// ul.children[1].style.color = 'yellow';

const btn = document.querySelector('.btn');
 //btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    
    document.querySelector('#my-form').style.backgroung = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.style.color = 'red'
    
});
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.backgroung = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.style.color = 'red'
    
});
btn.addEventListener('mouseout', (e) => {
    //e.preventDefault();
    document.querySelector('#my-form').style.backgroung = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.style.color = 'red'
    
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === ''){
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(()=> msg.remove(),3000);
    } else {
        //console.log('Success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear the fields
        nameInput.value ='';
        emailInput.value = '';
    }
}



