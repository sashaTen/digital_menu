const gallery_greet_background =  document.querySelector('.gallery_greeting')
const chefs_container  = document.querySelector('.chef_title')
const contanct_headline = document.querySelector('.contact_headline')

const list =  `
Pina Colada,
Negroni,
Long Island Iced Tea,
Old Fashioned,
Dry Martini,
Margarita,
Daiquiri,
Aperol Spritz,
Espresso Martini,
Manhattan,
Caipirinha,
Mint Julep,
Mai Tai
`


const   list_of_famous   =   list.split(',');
async  function  find_name(name){
const  dats   =   await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
const resp   =  await dats.json();


container.innerHTML += `
<div   class  =   'single_drink_container'>
<h2>${resp.drinks[0].strDrink}</h2>
<img src="${resp.drinks[0].strDrinkThumb}" alt=""> 
<h2>${generate_random_price()}$</h2>


</div>
`


}
const  numbers   = []
function generate_random_price(){
    //console.log(Math.floor(Math.random()*19));
    let  number  =  Math.floor(Math.random()*19)
    if(number< 8){
         number = number+8
    }
   return number
        //console.log(numbers);
} 

for(let i = 0 ;  i <list_of_famous.length;   i ++){
    generate_random_price()
}

console.log(numbers);


const container   =  document.querySelector('.container')


const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
 
 
  const breakfast_btn =  document.querySelector('.breakfast')
  const lunch_btn  =  document.querySelector('.lunch')
  const shakes_btn = document.querySelector('.shakes')
  const drinks_btn   =document.querySelector('.drinks')
  const btns   =  document.getElementsByClassName('btn')
  
function  make_all_white(){
  for(let i   = 0 ;  i <  btns.length ;  i++){
    btns[i].style.background =  'white'
  }
}



  breakfast_btn.addEventListener('click',()=>{
    make_all_white()
    breakfast_btn.style.background = 'black'
    display_category('breakfast')
   
  })

  lunch_btn.addEventListener('click' , ()=>{
    make_all_white()
    lunch_btn.style.background = 'black'
    display_category('lunch')
  })

  shakes_btn.addEventListener('click',   ()=>{
    make_all_white()
    shakes_btn.style.background = 'black'
    display_category('shakes')
  })

drinks_btn.addEventListener('click' ,  ()=>{
  container.innerHTML =  ''
  make_all_white()
  drinks_btn.style.background=  'black'
  list_of_famous.forEach(find_name)
})

drinks_btn.style.background='black'
list_of_famous.forEach(find_name)




  function  display_category(category){
    container.innerHTML =''
    for(let i    = 0 ; i  <menu.length ; i  ++){

      if(menu[i].category==category){
        container.innerHTML +=  `
        <div class = 'single_drink_container'>
        <h1>${menu[i].title}</h1>
         <img src='${menu[i].img}'>
         <h1>${menu[i].price}</h1>
         <p>${menu[0].desc}</p>
        </div>
        ` 
      }
  
       
          
       }
  }
const slogan  =   document.querySelector('.slogan_in_hero')
const black_background =  document.querySelector('.block_in_hero')
const hero   =document.querySelector('.hero')

hero.style.backgroundImage  = `url('${menu[3].img}')`
setTimeout(() => {
  hero.style.opacity= '1'
},1000);


setTimeout(() => {
  black_background.style.height =  '70vh'
}, 2100);

setTimeout(() => {
  slogan.style.opacity='1'
}, 2300);
const menu_board  = document.querySelector('.big_menu')
const header  =   document.querySelector('.header')
const about_img  = document.querySelector('.about>img')
const about_list_item   =  document.querySelector('.about_list_item')
const menu_list_item   =  document.querySelector('.menu')
const home_list_item   =  document.querySelector('.home')
const gallery_list_item   =  document.querySelector('.gallery_in_nav')
const chefs   =  document.querySelector('.chefs')
const contacts   = document.querySelector('.contacts')
const wine  = document.querySelector('.wine')

about_list_item.addEventListener('click' ,  ()=>{
  hero.scrollIntoView()
})

menu_list_item.addEventListener('click' , ()=>{
  menu_board.scrollIntoView()
})

gallery_list_item.addEventListener('click' , ()=>{
gallery_greet_background.scrollIntoView()
})

chefs.addEventListener('click' , ()=>{
  chefs_container.scrollIntoView()
})

contacts.addEventListener('click' , ()=>{
  contanct_headline.scrollIntoView()
})

setInterval(() => {
  wine.style.height = '100px'
  
 
}, 2000);

function  full_cup(){
  wine.style.height = '0px'
}



setInterval(() => {
  full_cup()
}, 3000);

const  colors =  ['green' ,   'pink' ,   'brown' ,    'catedblue' ]
let number_of_color =  0
const  gallery_greet  =   document.querySelector('.gallery_greeting>h1')
setInterval(() => {
  number_of_color++;
  if(number_of_color>=colors.length){
    number_of_color =  0;
  }
  gallery_greet.style.color= colors[number_of_color]
}, 1500);

const degrees =  ['skew(-5deg)'  ,  'skew(5deg)'   ,   'skew(-10deg)'   ,  'skew(10deg)']

setInterval(() => {
  gallery_greet_background.style.background =  colors[number_of_color+1]
  gallery_greet_background.style.transform=degrees[number_of_color]
}, 1500);

//gallery_greet_background.style.transform=skew(-10deg)'

const images_of_gallery =  document.querySelectorAll('.gallery_of_photos>img')

for(let i   = 0   ;  i < images_of_gallery.length ;  i  ++){
  images_of_gallery[i].addEventListener('click'   ,  ()=>{
    show_description_of_image(i)
  })
}




const description_elt   =   document.querySelector('.description')

function show_description_of_image(number){
 description_elt.style.position  = 'fixed'
 description_elt.style.top = '8%'
 description_elt.style.left =  '30%'
description_elt.innerHTML =    `
<h1 class='cancel_btn'>X</h1>
<h1> TITLE :   ${menu[number].title}</h1>
<p> ${menu[number].price}$</p>
<img src="${menu[number].img}" alt="">
<p>${menu[number].desc}</p>
<div  class ="desc_background">

</div>
`     
}


description_elt.addEventListener('click' , ()=>{
  description_elt.style.position='absolute'
  description_elt.style.left = '-900px'
})

const chef_title   =  document.querySelector('.chef_title>h1')
let   chef_headline =  'our chefs'
let Upper_case_letter =  0 ;
setInterval(() => {
  Upper_case_letter+=1;
  if(Upper_case_letter>chef_headline.length){
    Upper_case_letter =0;
  }
  chef_title.innerHTML =   chef_headline.replace(chef_headline.charAt(Upper_case_letter) , 
  `<span class='pink_letter'>${ chef_headline.charAt(Upper_case_letter).toUpperCase()}</span>`)


}, 500);


