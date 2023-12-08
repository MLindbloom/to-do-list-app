function newItem() {
    
    let li = $('<li></li');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
      let list = $('list');
      $('#list').append(li);
      $('input').val("");
    }

    function crossOut() {
    li.toggleClass('strike');
    }

    li.on('dblclick', crossOut);

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem() {
        li.addClass('delete');
    }

    $('#list').sortable();
}

function newItemOnEnter(e) {
    var x = e.code;
    if(x == "Enter") {
        e.preventDefault();
        newItem();
    }    
}