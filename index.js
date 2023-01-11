function addItem()
{
    var listElement = document.getElementById('list');
    var textItem = document.getElementById('newItem').value;
    var liElement = document.createElement('li');

    liElement.innerText = textItem;
    liElement.classList.add('new');
    listElement.appendChild(liElement);

    
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
      }
    }, false);

}
