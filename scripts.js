
let toDoItems = ['Go to Laundry', 'Go to Supermarket',
    'Go to Doctor', 'Wash dishes', 'Debug code','Make inventory'];
loadItems();
    let btnShuffle = document.getElementById('shuffle-button');
btnShuffle.addEventListener('click', shuffleClicked);

function shuffleClicked() {

}

function loadItems(){
    let listItems=document.getElementById('listItems');
    listItems.innerHTML='';
    for(let i=0;i<toDoItems.length;i++){
        let li=document.createElement('li');
        li.innerText=toDoItems[i];
        listItems.appendChild(li);
    }
}