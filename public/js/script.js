function scaleHeight(itemClass, factor) {
  const element = document.querySelector('.' + itemClass);

  let width = window.getComputedStyle(element).getPropertyValue("width"),
    height = (parseFloat(width, 10) * factor) + 'px';
  element.parentElement.style.setProperty("--item-height", height)
}
function scaleHeightM(itemClass, factor = 1) {
  const element = document.querySelector('.' + itemClass),
    elements = [...document.getElementsByClassName(itemClass)];

  let width = window.getComputedStyle(element).getPropertyValue("width"),
    height = (parseFloat(width, 10) * factor) + 'px';

  elements.forEach(item => {
    item.style.setProperty("--item-height", height)
  })
}
scaleHeight('features-gallery__item', 2)
// scaleHeight('post', 1.2)
scaleHeightM('features-gallery__logo')
scaleHeightM('post__fig', .5)
window.addEventListener('resize', e => {
  scaleHeight('features-gallery__item', 2)
  // scaleHeight('post', 1.2)
  scaleHeightM('features-gallery__logo')
  // scaleHeightM('post__fig', .5)


})
