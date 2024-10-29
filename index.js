const input = document.getElementsByTagName('input');
const uList = document.getElementById('to-do-list'); 
const clear = document.getElementById('clr')
input[0].addEventListener('keypress', (event) => {
    if (event.key === 'Enter') { 
        const list = document.createElement('li');
        const p = document.createElement('p') 
        p.textContent = input[0].value; 
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.id = 'myRadio';
        radio.classList.add('radio')
        list.appendChild(radio)
        list.appendChild(p)
        uList.appendChild(list); 
        input[0].value = ''; 
        list.classList.add('list-deco')
        const remove = document.createElement('button')
        remove.textContent= 'remove'
        remove.classList.add('removed')
        list.appendChild(remove)
        remove.addEventListener('click', ()=>{
            list.remove()
       })
       radio.addEventListener('change',()=>{
            const span = document.createElement('span')
            span.textContent= '/completed'
            span.style.color ='green'
            p.appendChild(span)
            list.classList.add('isCompleted')
       })
       

    }
});
clear.addEventListener('click', ()=>{
    const lists =document.querySelectorAll('li')
    lists.forEach(items=>{
       if(items.classList.contains('isCompleted')){
        items.remove()
       }
    })
    
   
   })