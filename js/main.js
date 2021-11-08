//Menu mobile Dropdown
function initMenuDropdown() {
  const btnMenu = document.querySelector('.open')

  btnMenu.addEventListener('click', function () {
    const dropdown = document.querySelector('.header-menu ul')
    dropdown.classList.toggle('menu-dropdown')
  })
  const removeLink = document.querySelectorAll('header-menu a') 

  removeLink.forEach((link) => {
    link.addEventListener('click', function() {
    const dropdown = document.querySelector('.header-menu ul')
    dropdown.classList.remove('menu-dropdown')})
    })
}
initMenuDropdown()


//Scroll to section
function initScrollToSection() {
  const insideLinks = document.querySelectorAll('.header-menu a[href^="#"]')

  function scrollToSection(e) {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  insideLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
initScrollToSection()


//Shadow in scroll
function shadowInScroll() {
  const header = document.querySelector('.header-bg')
  const navHeight = header.offsetHeight

  window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
      header.classList.add('shadow-scroll')
    }
    else {
      header.classList.remove('shadow-scroll')
    }
  })
}
shadowInScroll()


//Back to top
const backToTop = document.querySelector('.back-to-top')

window.addEventListener('scroll', function() {
  if(this.scrollY >= 800) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
})