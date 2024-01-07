const darkBtn = document.getElementById('dark-btn')
const htmlTag = document.getElementById('html');
const blackAndWhite = document.getElementById('black-white')


const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
        htmlTag.classList.add('dark');
        blackAndWhite.style.fill = 'white'
    } 

    darkBtn.addEventListener('click', function () {
        if (htmlTag.classList.contains('dark')) {
            htmlTag.classList.remove('dark');
            localStorage.removeItem('theme');
            blackAndWhite.style.fill = 'black'
        } else {
            htmlTag.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            blackAndWhite.style.fill = 'white'

        }
    });