
let toDoItems = ['Go to Laundry', 'Go to Supermarket',
    'Go to Doctor', 'Wash dishes', 'Debug code', 'Make inventory'];
loadItems(toDoItems);
let btnShuffle = document.getElementById('shuffle-button');
btnShuffle.addEventListener('click', shuffleClicked);

function shuffleClicked() {
    $('#listItems').slideUp('duration:100', () => {
        let a = shuffle(toDoItems);
        loadItems(a);
    });
    $('#listItems').slideDown('Duration:400');
}

function shuffle(items) {
    let newArray = [];
    let indexUsed = [];
    let size = items.length;
    for (i = 0; i < items.length; i++) {
        let t = 0;
        do {
            t = Math.floor(Math.random() * size);
        }
        while (indexUsed.includes(t));
        indexUsed.push(t);
        newArray.push(items[t]);
    }
    return newArray;
}

function loadItems(items) {
    let listItems = document.getElementById('listItems');
    listItems.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement('li');
        li.innerText = items[i];
        listItems.appendChild(li);
    }
}