/* Thhis is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  'That New New'
];

function createMenu(menuItems){

  //Define New Element div
  const menu = document.createElement('div');
  const ul = document.createElement('ul');

  //Set Class Name Menu
  menu.classList.add('menu');

  //Set Structure of Elements
  menu.appendChild(ul)

  menuItems.forEach(menuItem => {

    //Define New Element
    const li = document.createElement('li');

    //Set Content
    li.textContent = menuItem;

    //Append li to ui
    ul.appendChild(li);

  });

  const menuButton = document.querySelector('.menu-button');
        menuButton.addEventListener('click', () => {
        menu.classList.toggle('menu--open');

});

return menu;

}

  //Add Menu Component to DOM
  const button = document.querySelector('.menu-button');
  const menu = createMenu(menuItems, button);
  const header = document.querySelector('.header');
  header.appendChild(menu);

  //Creating new 
  menu.appendChild(createMenu('new new'));


/* 

  Step 1: Wrrite a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
