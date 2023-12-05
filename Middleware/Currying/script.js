const li = Array.from(document.querySelectorAll('li'));

const getElementAttr = (key) => (el) => el.getAttribute(key);;

const getAttrDataSlide = getElementAttr('data-slide');
const getAttrDataId = getElementAttr('id');

const dataSlideList = li.map(getAttrDataSlide);
const idList = li.map(getAttrDataId);

console.log(dataSlideList);
console.log(idList);
