const categoryList = document.querySelectorAll('#categories .item');
console.log('Number of categories: ', categoryList.length);
categoryList.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoriesCount = category.querySelectorAll('ul li').length;
  console.log('Category:', categoryTitle);
  console.log('Elements:', categoriesCount);
});
