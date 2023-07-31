let allRegisteredUsers = [
  {
    userPassword: '123123123',
    id: '123123123',
    firstName: 'example',
    lastName: 'name',
    email: '123@gmail.com',
  },
];

let allTasks = [];
let selectedUser = [];
let index;
let isburgerMenuOpen = false;
let task;


function openBurgerMenu() {
  let burgerMenu = document.getElementById('dropDownMenu');
  if (isburgerMenuOpen) {
    burgerMenu.style.display = 'none';
    isburgerMenuOpen = false;
  } else {
    burgerMenu.style.display = 'flex';
    isburgerMenuOpen = true;
  }
}

/**
 * checks which department the task is intended for
 *
 * @param {String} category is one of 4 different departments
 * @returns {String} retrun the right classname
 */
let getRightCategoryColor = (category) => {
  if (category == 'Management') {
    return 'management-color';
  }
  if (category == 'Marketing') {
    return 'marketing-color';
  }
  if (category == 'Product') {
    return 'product-color';
  }
  if (category == 'Sales') {
    return 'sales-color';
  }
};








