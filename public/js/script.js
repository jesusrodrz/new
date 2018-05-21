function scaleHeight() {
  const element = document.querySelector('.features-gallery__item');

  let width = window.getComputedStyle(element).getPropertyValue("width"),
    height = (parseFloat(width, 10) * 2) + 'px';
  element.parentElement.style.setProperty("--item-height", height)
}
function scaleHeightM() {
  const element = document.querySelector('.features-gallery__logo'),
    elements = [...document.getElementsByClassName('features-gallery__logo')];

  let width = window.getComputedStyle(element).getPropertyValue("width"),
    height = parseFloat(width, 10) + 'px';

  elements.forEach(item => {
    item.style.setProperty("--item-height", height)
  })
}
scaleHeight()
scaleHeightM()
window.addEventListener('resize', e => {
  scaleHeight()
  scaleHeightM()

})