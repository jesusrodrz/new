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

{

  function currentPosition(pages) {

    let url = location.href,
      index = url.indexOf('#'),
      page = url.slice(index + 1)

    if (index === -1) {

      return 0

    } else {

      return pages.indexOf(page)
    }

  }

  function getIndex(position, operador, array) {

    if (operador === 'prev') {

      position > 0 ? position-- : position = array.length - 1;

    }
    else if (operador === 'next') {

      position < array.length - 1 ? position++ : position = 0;

    }

    return position

  }

  function slider(parent, left, right, options) {

    const pages = ['home', 'aboutMe', 'skills', 'portfolio', 'blog']

    // let currentPage = currentPosition(pages)
    let currentPage = 0
    console.log(parent, left, right, options)
    const container = [...document.getElementsByClassName(`${parent}`)],
      prev = document.getElementById(left),
      next = document.getElementById(right),
      // page = document.getElementById(pages[currentPage]),
      page = container[0],
      // page = document.getElementById(pages[currentPage]),
      cardNav = document.getElementById('cardMenu')

    page.classList.add(options.class)

    toggleClass(pages[currentPage] === 'home', container[currentPage].parentElement, 'home--background')
    toggleClass(pages[currentPage] === 'home', next.parentElement, 'header--main')

    prev.parentElement.addEventListener('click', (e) => {

      e.preventDefault()

      let operator, indexTarget, isOK = false

      if (e.target.parentElement === prev) {

        operator = 'prev'
        isOK = true

      } else if (e.target.parentElement === next) {

        operator = 'next'
        isOK = true

      } else if (e.target.href !== undefined && e.target.href.slice(e.target.href.indexOf('#')) !== '#contacto') {

        const index = e.target.href.indexOf('#'),
          id = e.target.href.slice(index + 1)

        indexTarget = pages.indexOf(id)

        if (currentPage < indexTarget) {

          operator = 'next'
          isOK = true

        } else if (currentPage > indexTarget) {

          operator = 'prev'
          isOK = true

        }

      }

      isOK ? currentPage = animate(container, currentPage, operator, options, indexTarget) : {}

      // window.location.href = `${currentPage !== 0 ? '#' + pages[currentPage] : ''}`
      updateURL(currentPage, pages)
      // window.history.pushState(null, '', `${currentPage !== 0 ? '#' + pages[currentPage] : ''}`)

      toggleClass(pages[currentPage] === 'home', container[currentPage].parentElement, 'home--background')
      toggleClass(pages[currentPage] === 'home', next.parentElement, 'header--main')

    })
  }

  function updateURL(currentPage, pages) {

    if (currentPage === 0) {
      let currentURL = window.location.href,
        index = currentURL.indexOf('#')

      index !== -1 ? window.history.pushState(null, '', currentURL.slice(0, index)) : {}

    } else {

      window.history.pushState(null, '', `${currentPage !== 0 ? '#' + pages[currentPage] : ''}`)

    }

  }

  function toggleClass(condition, element, aClass) {

    if (condition) {

      element.classList.add(aClass)

    } else if (condition === false && element.classList.contains(aClass)) {

      element.classList.remove(aClass)

    }

  }

  function animate(container, position, operator, options, target) {

    let k

    const newPosition = getIndex(position, operator, container),
      first = container[position]

    target != undefined ? k = target : k = newPosition

    let second = container[k]

    if (operator === 'prev') {

      animation(first, options.exitRight, options, 'exit');
      animation(second, options.entranceLeft, options, 'entrance');
      return k

    } else if (operator === 'next') {

      animation(first, options.exitLeft, options, 'exit');
      animation(second, options.entranceRight, options, 'entrance');
      return k

    }
  }

  function animation(element, animationClass, options, type) {

    type === 'entrance' ? element.classList.add(options.class) : {}

    element.classList.add(animationClass)

    element.addEventListener('animationend', function h() {

      element.classList.remove(animationClass);

      toggleClass(type === 'entrance', element, options.class)

      element.removeEventListener('animationend', h)

    })

  }

  slider(
    'slider__item',
    'sliderLeft',
    'sliderRight',
    {
      entranceLeft: 'a-entrance-left',
      entranceRight: 'a-entrance-right',
      exitLeft: 'a-exit-left',
      class: 'section--visible',
      exitRight: 'a-exit-right'
    })

}