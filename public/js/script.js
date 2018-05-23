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
if (window.innerWidth < 513) {

  scaleHeight('features-gallery__item', 1.4)
}
// scaleHeight('post', 1.2)
scaleHeightM('features-gallery__logo')
scaleHeightM('post__fig', .6)
window.addEventListener('resize', e => {
  scaleHeight('features-gallery__item', 2)
  if (window.innerWidth < 513) {

    scaleHeight('features-gallery__item', 1.4)
  }
  // scaleHeight('post', 1.2)
  scaleHeightM('features-gallery__logo')
  scaleHeightM('post__fig', .6)

  scaleBtnWidth('navTrigger', 1)
  if (window.innerWidth < 513) {

    scaleBtnWidth('chatTrigger', 1)
  }
})

function scaleBtnWidth(itemId, factor) {
  const item = document.getElementById(itemId),
    height = window.getComputedStyle(item).getPropertyValue("height"),
    width = (parseFloat(height, 10) * factor) + 'px';
  // item.style.width = width;
  console.log(height, width, item)
  item.style.setProperty("--btn-width", width)

}
scaleBtnWidth('navTrigger', 1)
if (window.innerWidth < 513) {

  scaleBtnWidth('chatTrigger', 1)
}

function navBarMobileDisplay() {
  const trigger = document.getElementById('navTrigger'),
    nav = document.getElementById('mainNav'),
    icon = document.getElementById('')

  trigger.addEventListener('click', e => {
    const icon = document.querySelector('.menu-icon')
    console.log(e.target, icon)
    icon.classList.toggle('menu-icon--active')
    nav.classList.toggle('navbar--active')
  })

} navBarMobileDisplay()