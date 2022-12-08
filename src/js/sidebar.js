const sidebar = document.querySelector('.sidebar');
const naviItems = document.querySelectorAll('nav .nav_item');
const toggle = document.querySelector('.sidebar .toggle');


toggle.addEventListener('click', () =>{
    if(sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
    sidebar.classList.remove('open');
});
naviItems.forEach(navItem => {
    navItem.addEventListener('click',() =>{
        naviItems.forEach(navItem =>{
            navItem.classList.remove('active')
        });
        navItem.classList.add('active')
    });
});