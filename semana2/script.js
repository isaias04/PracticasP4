const hidebtn  =  document.querySelector('#hideElements')
const listDiv = document.querySelector('#list')



//Constante para agragar elementos
const addItemInput = document.querySelector('#addItem')//inpu:txt
const addItembutton = document.querySelector('#addItemButton')

// constante para remover 
const removeItems = document.querySelector('#removeItem')


// agregar los eventos al boton ocultal/mostrar

hidebtn.addEventListener('click', () =>{
if (listDiv.style.display == 'none'){
    listDiv.style.display = 'block'
    hidebtn.textContent = 'Oculatar'
}else{
    listDiv.style.display = 'none'
    hidebtn.textContent = 'Mostrar'
}

})

// agregar elementos
addItembutton.addEventListener('click', ( )=> {

let list = document.querySelector('ul')
let li = document.createElement('li')
if(addItemInput.value == 0){
    alert('Campo vacio') 
    
}else{
    li.textContent = addItemInput.value
    list.appendChild(li) 
    addItemInput.value = "" 
}
addItemInput.focus ()
}
)
//funcion para obtener el indice del elemento en lista
 var list = document.getElementById('listItems')
 items = list.getElementsByTagName('li')
const findIdex =  (Element) => {
    var len = items.length 
    for(var i=0; i<len; i++){
        if(items[i]===Element){
            return i
        }
    }
}
list.onclick = (e) => {

    let event  = e || window.event
    src=event.target
    let myIdex = findIdex(src)
    index = myIdex
   // alert(myIdex)
   list.querySelectorAll('li').forEach(el=>el.classList.remove('alert', 'alert-danger'))
   items[myIdex].classList.add('alaert', 'alert-danger')
}
// Eliminar el Elemeto de la lista
removeItems.addEventListener('click', () => { 
    var remover = confirm("Estas seguro que desea remover la fruta")
    if (remover == true){
        items[index].parentNode.removeChild(items[index])  
    }else{
        return false
    }       
    addItemInput.focus ()        
})


