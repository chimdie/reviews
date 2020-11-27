const reviews = [
    {
        id: 1,
        name: 'Daniel James',
        job: 'maize runer',
        img: "./images.jpeg",
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias hic. Maiores, recusandae. Vitae molestias velit repudiandae aliquid sit? Aliquid sapiente pariatur nostrum voluptatibus quae excepturi corrupti explicabo?'
    },
    {
        id: 2,
        name: 'pacy tau',
        job: 'bread hawker',
        img: "./images.jpeg",
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Maiores, recusandae. Vitae molestias velit repudiandae aliquid sit? Aliquid sapiente pariatur nostrum voluptatibus quae excepturi corrupti explicabo?'
    },
    {
        id: 3,
        name: 'Nicky Roberts',
        job: 'food vendor',
        img: "./images.jpeg",
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias hic. Vitae molestias velit repudiandae aliquid sit? Aliquid sapiente pariatur nostrum voluptatibus quae excepturi corrupti explicabo?'
    },
    {
        id: 4,
        name: 'Pascal Gross',
        job: 'hair stylist',
        img: "./images.jpeg",
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias hic. Maiores, recusandae. uid sapiente pariatur nostrum voluptatibus quae excepturi corrupti explicabo?'
    }
];

const img = document.getElementById('img1');
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.randomBtn')

let firstItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    displayReviews()
})

function displayReviews(){
    const item = reviews[firstItem]

    img.src = item.img;
    author.textContent = item.name.toLocaleUpperCase();
    job.textContent = item.job.toLocaleUpperCase();
    info.textContent = item.info
}

prevBtn.addEventListener('click', ()=>{
    firstItem--;
    if(firstItem < 0){
        firstItem = reviews.length - 1
    }
    displayReviews()
})

nextBtn.addEventListener('click', ()=>{
    firstItem++;
    if(firstItem > reviews.length -1){
        firstItem = 0
    }
    displayReviews()
})

randomBtn.addEventListener('click', ()=>{
    firstItem = Math.floor(Math.random() * reviews.length)
    displayReviews()
})