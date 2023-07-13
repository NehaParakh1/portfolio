var typed= new Typed(".text",{
    strings:["Frontend Developer", "React Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
const menuIcon = document.querySelector('.menu-icon');
const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-items');

menuIcon.addEventListener('click', () => {
  navItems.classList.toggle('open');
});

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navItems.classList.remove('open');
  });
});

document.addEventListener('click', (event) => {
  const target = event.target;
  
  if (!target.classList.contains('menu-icon') && !navItems.contains(target)) {
    navItems.classList.remove('open');
  }
});
