// Query Selectors
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');

const switchMood = (event) => {
    x = event.target.classList;
    // console.log(x[1]);
    body = document.body;
    if (x[1] == 'fa-moon') {
        body.classList.add('darkMood');
        body.classList.remove('lightMood');
    } 
    else if (x[1] == 'fa-sun') {
        body.classList.add('lightMood');
        body.classList.remove('darkMood');
    }
};

sun.addEventListener('click', switchMood);
moon.addEventListener('click', switchMood);