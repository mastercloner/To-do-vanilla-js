let btn = document.getElementById('btn'),
    myInput = document.getElementById('myInput'),
    myList = document.getElementById('myList');


function add(){
    var li = document.createElement('li');
    li.innerText = myInput.value;
    var close = document.createElement('span');
    close.innerHTML = "\u00d7";
    li.appendChild(close);

    if(myInput.value === ""){
        alert('you must fill out the field')
    }
    else{
        myList.appendChild(li);
    }
    myInput.value="";
}



btn.addEventListener('click', (e)=>{
   add();
})

window.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        add();
    }
})

myList.addEventListener('click', function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    } 
})