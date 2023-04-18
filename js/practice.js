<!--DOM MANIPULATION-->
//getElementById()
//const title = document.getElementByIs('test')

//getElementByClassName()
//const listItems = document.getElementByClassName('list-items')

//getElementByTagName()
//const list = document.getElementByTagName('li')

//querySelector()
//const container = document.querySelector('#id, divtag, attribute') only first item is selected


//querySelectorAll()
//const allContainers = document.document.querySelectorAll('id, divtag, attribute') all is selected

//Examples
//****Changes color of title in document.
// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title);

//***for multiple items you will need to create a for loop in order to process the style command to multiple elements in the code.

<!--const listItems = document.querySelectorAll('list-items')-->

<!--for (i=0; i < listItems.length; i++) {-->
<!--  listItems(i).style.fontSize = '5rem';-->
<!--}-->

<!--console.log(listItems);-->


<!--Creating an Element-->
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
//
// <!--Adding Elements-->
// ul.append(li)
//
// <!--Modifying the Text-->
//
// li.innerText = 'X-men';
//
// <!--Just Examples-->
// const.firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent;
// console.log(firstListItem.innerHTML);
//
// <!--Ensure to set attributes to new item. Modifying Attributes and CLasses-->
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id')
//
// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));
//
// <!--Class List-->
// li.classList.add('list-items')
// li.classList.remove('list-items')
//
// console.log(li.classList.contains('list-items'));
// --------------
//
//
//     <!--Removing Elements-->
//     li.remove();
//

//Traverse the DOM

// let ul = document.querySelector('ul');
// console.log(ul);
// console.log(ul.parentNode);
// console.log(ul.parentElement);
// // Double down to get grandparents
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);
//
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
//
// ul.childNodes[1].style.backgroundColor = 'blue';
//
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

//Event Listeners

//element.addListener("click", function);

// const buttonTwo = document.querySelector('.btn-2');
// function alertBtn() {
//     alert('I also love JS');
// }
//
// buttonTwo.addEventListener("click", alertBtn);
//
// //element.addListener("mouseover", function);
//
// const buttonThree = document.querySelector('.btn-3');
// function changeBgColor() {
//     buttonThree.style.backgroundColor = 'Blue';
// }
//
// buttonThree.addEventListener("mouseover", changeBgColor);
//
const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener("click", revealContent);

// https://www.youtube.com/watch?v=P7NgFfIaWgU @ 55 minutes
// Event Probagation
// 1. Event Capturing
// 2. EventTargetEvent
// 3. Bubbling