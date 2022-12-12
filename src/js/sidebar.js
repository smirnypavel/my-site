const sidebar = document.querySelector('.sidebar');
const naviItems = document.querySelectorAll('nav .nav_item');
const toggle = document.querySelector('.sidebar .toggle');
const container= document.querySelector('.container');
const ourTeam = document.querySelector('.our_team');
const hero = document.querySelector('.hero')

toggle.addEventListener('click', () =>{
    if(sidebar.className === 'sidebar')
        // container.classList.add('move');
        sidebar.classList.add('open');
        
    else
    sidebar.classList.remove('open');
    container.classList.remove('move');
});
naviItems.forEach(navItem => {
    navItem.addEventListener('click',() =>{
        naviItems.forEach(navItem =>{
            navItem.classList.remove('active')
        });
        navItem.classList.add('active')
    });
});

toggle.addEventListener('click', () =>{
    if(sidebar.className === 'sidebar')
         container.classList.remove('move');
        // sidebar.classList.add('open');
        
    else
    // sidebar.classList.remove('open');
    container.classList.add('move');
});

naviItems.forEach(navItem => {
    navItem.addEventListener('click',() =>{
        naviItems.forEach(navItem =>{
            ourTeam.classList.remove('visible')
        });
        ourTeam.classList.add('visible')
    });
});
naviItems.forEach(navItem => {
    navItem.addEventListener('click',() =>{
        naviItems.forEach(navItem =>{
            hero.classList.remove('on')
        });
        hero.classList.add('on')
    });
});