const input = document.querySelector('input')
const addBtn = document.querySelector('.btn-add')
const ul = document.querySelector('ul')
const empty = document.querySelector('.empty')

addBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const text = input.value
    if (text !==''){
            const li = document.createElement('li')
            const p = document.createElement('p')
            p.textContent = text+' a '
            li.appendChild(p)
            li.appendChild(addDeleteBtn())//agregamos el boton de borrar 
            ul.appendChild(li)
        
            input.value=''//esto es para que cada vez que se agregue una tarea se borre el input
            empty.style.display ='none'
            }   

})

function addDeleteBtn (){
    const deleteBtn = document.createElement('button')

    deleteBtn.textContent = 'x'
    deleteBtn.className = 'btn-delete'

    deleteBtn.addEventListener('click', (e)=>{
        const item = e.target.parentElement
        ul.removeChild(item)
    const items = document.querySelectorAll('li')
    if(items.length==0){
        empty.style.display = 'block'
    }
    })
    return deleteBtn//retornamos esta constante para agregar el boton de borrar la tarea
}
