
/*Search click*/

const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
   let currentId = triggerOpen[i].dataset.target,
      targetEl = document.querySelector(`#${currentId}`)

   const openData = function () {
      targetEl.classList.remove('active');
      overlay.classList.remove('active');
   };
   triggerOpen[i].addEventListener('click', function () {
      targetEl.classList.add('active');
      overlay.classList.add('active');
   });

   targetEl.querySelector('[close-button]').addEventListener('click', openData);
   overlay.addEventListener('click', openData);
}




document.addEventListener('DOMContentLoaded', function () {
   const arrow = document.getElementById('categoryArrow');
   const dropdownList = document.getElementById('categoryDropdown').querySelector('.dropdown-list');

   arrow.addEventListener('click', function () {
      dropdownList.style.display = dropdownList.style.display === 'none' ? 'block' : 'none';
   });
});






/*Mobile-menu submenu*/

const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function (e) {
   e.preventDefault();
   submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
   if (this.closest('.has-child').classList != 'active') {
      this.closest('.has-child').classList.toggle('active');
   }
}))



/*SORTER*/

const sorter = document.querySelector('.sort-list');
if (sorter) {
   const sortLi = sorter.querySelectorAll('li');
   sorter.querySelector('.opt-trigger').addEventListener('click', function () {
      sorter.querySelector('ul').classList.toggle('show');
   });

   sortLi.forEach((item) => item.addEventListener('click', function () {
      sortLi.forEach((li) => li != this ? li.classList.remove('active') : null);

      this.classList.add('active');
      sorter.querySelector('.opt-trigger span.value').textContent = this.textContent;
      sorter.querySelector('ul').classList.toggle('show')
   }))
}



/*Tabbed*/


const trigger = document.querySelectorAll('.tabbed-trigger'),
   content = document.querySelectorAll('.tabbed > div');

trigger.forEach((btn) => {
   btn.addEventListener('click', function () {
      let dataTarget = this.dataset.id,
         body = document.querySelector(`#${dataTarget}`);

      // Сховати всі елементи контенту
      content.forEach((c) => c.classList.remove('active'));

      // Зняти клас 'active' з усіх тригерів
      trigger.forEach((b) => b.parentNode.classList.remove('active'));
      trigger.forEach((s) => s.classList.remove('active'));

      // Додати клас 'active' вибраному елементу контенту та його тригеру
      this.parentNode.classList.add('active');
      body.classList.add('active');
   });
});







/*SLIDER*/



const swiper = new Swiper('.sliderbox', {

   loop: true,
   effect: 'fade',
   autoHeight: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },


});


/*Carousel*/



const carousel = new Swiper('.carouselbox', {

   spaceBetween: 30,
   slidesPerView: 'auto',
   centeredSlides: true,

   // If we need pagination
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      481: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         centeredSlides: false,
      },
      640: {
         slidesPerView: 3,
         slidesPerGroup: 3,
         centeredSlides: false,
      },
      992: {
         slidesPerView: 4,
         slidesPerGroup: 4,
         centeredSlides: false,
      }
   }

});



// Product image > page-single


const thumbImage = new Swiper('.thumbnail-image', {

   //loop: true,
   direction: 'vertical',
   spaceBetween: 15,
   slidesPerView: 1,
   freeMode: true,
   watchSlidesProgress: true,

});


const mainImage = new Swiper('.main-image', {

   loop: true,
   autoHeight: true,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   thumbs: {
      swiper: thumbImage,
   },

});





/*Блок управління сторінками*/
   

$('#aboutHeader').click(function () {
   $('.about').css('display', 'flex');
   $('.guide').css('display', 'none');
   $('.carousel').css('display', 'none');
   $('.banner').css('display', 'none');
   $('.fromblog').css('display', 'none');
   $('.delivery').css('display', 'none');
   $('.returns').css('display', 'none');
   $('.contact').css('display', 'none');
   $('.bycats').css('display', 'none');
   $('.page-category').css('display', 'none');
   $('.slider').css('display', 'none');
});
$('#contactHeader').click(function () {
   $('.about').css('display', 'none');
   $('.guide').css('display', 'none');
   $('.carousel').css('display', 'none');
   $('.banner').css('display', 'none');
   $('.fromblog').css('display', 'none');
   $('.delivery').css('display', 'none');
   $('.returns').css('display', 'none');
   $('.contact').css('display', 'flex');
   $('.bycats').css('display', 'none');
   $('.page-category').css('display', 'none');
   $('.slider').css('display', 'none');
});
$('#deliveryHeader').click(function () {
   $('.about').css('display', 'none');
   $('.guide').css('display', 'none');
   $('.carousel').css('display', 'none');
   $('.banner').css('display', 'none');
   $('.fromblog').css('display', 'none');
   $('.delivery').css('display', 'flex');
   $('.returns').css('display', 'none');
   $('.contact').css('display', 'none');
   $('.bycats').css('display', 'none');
   $('.page-category').css('display', 'none');
   $('.slider').css('display', 'none');
});
$('#returnsHeader').click(function () {
   $('.about').css('display', 'none');
   $('.guide').css('display', 'none');
   $('.carousel').css('display', 'none');
   $('.banner').css('display', 'none');
   $('.fromblog').css('display', 'none');
   $('.delivery').css('display', 'none');
   $('.returns').css('display', 'flex');
   $('.contact').css('display', 'none');
   $('.bycats').css('display', 'none');
   $('.page-category').css('display', 'none');
   $('.slider').css('display', 'none');
});

/*Footer menu*/

$('#aboutFooter').click(function () {
   $('.about').css('display', 'flex');
   $('.guide').css('display', 'none');
   $('.carousel').css('display', 'none');
   $('.banner').css('display', 'none');
   $('.fromblog').css('display', 'none');
   $('.delivery').css('display', 'none');
   $('.returns').css('display', 'none');
   $('.contact').css('display', 'none');
   $('.bycats').css('display', 'none');
   $('.page-category').css('display', 'none');
   $('.slider').css('display', 'none');
});
$('#contactFooter').click(function () {
   $('.about').css('display', 'none');
   $('.guide').css('display', 'none');
   $('.carousel').css('display', 'none');
   $('.banner').css('display', 'none');
   $('.fromblog').css('display', 'none');
   $('.delivery').css('display', 'none');
   $('.returns').css('display', 'none');
   $('.contact').css('display', 'flex');
   $('.bycats').css('display', 'none');
   $('.page-category').css('display', 'none');
   $('.slider').css('display', 'none');
});
$('#deliveryFooter').click(function () {
   $('.about').css('display', 'none');
   $('.guide').css('display', 'none');
   $('.carousel').css('display', 'none');
   $('.banner').css('display', 'none');
   $('.fromblog').css('display', 'none');
   $('.delivery').css('display', 'flex');
   $('.returns').css('display', 'none');
   $('.contact').css('display', 'none');
   $('.bycats').css('display', 'none');
   $('.page-category').css('display', 'none');
   $('.slider').css('display', 'none');
});
$('#returnsFooter').click(function () {
   $('.about').css('display', 'none');
   $('.guide').css('display', 'none');
   $('.carousel').css('display', 'none');
   $('.banner').css('display', 'none');
   $('.fromblog').css('display', 'none');
   $('.delivery').css('display', 'none');
   $('.returns').css('display', 'flex');
   $('.contact').css('display', 'none');
   $('.bycats').css('display', 'none');
   $('.page-category').css('display', 'none');
   $('.slider').css('display', 'none');
});


/*Кінець блоку управління сторінками*/





let shopCartList = JSON.parse(localStorage.getItem('shopCartList')) || [];
$('.item-floating').text(shopCartList.length);



// Data Base



let db = [

   /*Худі*/

   {

      pic: ['./img/products/hoodie/dark-blue/1hoodie-00008B.webp',
         './img/products/hoodie/dark-blue/2hoodie-00008B.webp',
         './img/products/hoodie/dark-blue/3hoodie-00008B.webp',
         './img/products/hoodie/dark-blue/4hoodie-00008B.webp'],
      name: 'Худі темно-синій',
      article: '202301141',
      color: '#00008B',
      sizes: ['XS', 'S', 'M'],
      price: 1070,
      category: 'hoodie',
      colorName: 'dark-blue',
      discount: 15,
      popular: 'true'
   },
   {
      pic: ['./img/products/hoodie/milky/1hoodie-fdfff5.webp',
         './img/products/hoodie/milky/2hoodie-fdfff5.webp',
         './img/products/hoodie/milky/3hoodie-fdfff5.webp',
         './img/products/hoodie/milky/4hoodie-fdfff5.webp'],
      name: 'Худі молочний',
      article: '202301142',
      color: '#fdfff5',
      sizes: ['XS', 'S', 'M'],
      price: 1070,
      category: 'hoodie',
      colorName: 'milky',
      discount: 0,
      popular: 'true'
   },

   /*Худі на флісі*/

   {
      pic: ['./img/products/hoodie-flis/gray-melange/1hoodie-flis-CCCAC9.webp',
         './img/products/hoodie-flis/gray-melange/2hoodie-flis-CCCAC9.webp',
         './img/products/hoodie-flis/gray-melange/3hoodie-flis-CCCAC9.webp',
         './img/products/hoodie-flis/gray-melange/4hoodie-flis-CCCAC9.webp'],
      name: 'Худі на флісі сірий меландж',
      article: '202301151',
      color: '#CCCAC9',
      sizes: ['XS', 'S', 'M'],
      price: 1070,
      category: 'hoodie-flis',
      colorName: 'gray-melange',
      discount: 20,
      popular: 'true'
   },
   {
      pic: ['./img/products/hoodie-flis/beige/1hoodie-flis-F5F5DC.webp',
         './img/products/hoodie-flis/beige/2hoodie-flis-F5F5DC.webp',
         './img/products/hoodie-flis/beige/3hoodie-flis-F5F5DC.webp',
         './img/products/hoodie-flis/beige/4hoodie-flis-F5F5DC.webp'],
      name: 'Худі на флісі бежевий',
      article: '202301152',
      color: '#F5F5DC',
      sizes: ['XS', 'S', 'M'],
      price: 1070,
      category: 'hoodie-flis',
      colorName: 'beige',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/hoodie-flis/dark-blue/1hoodie-flis-00008B.webp',
         './img/products/hoodie-flis/dark-blue/2hoodie-flis-00008B.webp',
         './img/products/hoodie-flis/dark-blue/3hoodie-flis-00008B.webp',
         './img/products/hoodie-flis/dark-blue/4hoodie-flis-00008B.webp'],
      name: 'Худі на флісі темно-синій',
      article: '202301153',
      color: '#00008B',
      sizes: ['XS', 'S', 'M'],
      price: 1070,
      category: 'hoodie-flis',
      colorName: 'dark-blue',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/hoodie-flis/milky/1hoodie-flis-fdfff5.webp',
         './img/products/hoodie-flis/milky/2hoodie-flis-fdfff5.webp',
         './img/products/hoodie-flis/milky/3hoodie-flis-fdfff5.webp',
         './img/products/hoodie-flis/milky/4hoodie-flis-fdfff5.webp'],
      name: 'Худі на флісі молочний',
      article: '202301154',
      color: '#fdfff5',
      sizes: ['XS', 'S', 'M'],
      price: 1070,
      category: 'hoodie-flis',
      colorName: 'milky',
      discount: 0,
      popular: 'false'
   },

   /*Футболка базова*/

   {
      pic: ['./img/products/t-shirt/milky/1t-shirt-fdfff5.webp',
         './img/products/t-shirt/milky/2t-shirt-fdfff5.webp',
         './img/products/t-shirt/milky/3t-shirt-fdfff5.webp',
         './img/products/t-shirt/milky/4t-shirt-fdfff5.webp'],
      name: 'Футболка базова молочна',
      article: '202301260',
      color: '#fdfff5',
      sizes: ['XS', 'S', 'M'],
      price: 499,
      category: 't-shirt',
      colorName: 'milky',
      discount: 0,
      popular: 'false'
   },

   /*Футболка патріотична*/

   {
      pic: ['./img/products/t-shirt-patriot/milky/1t-shirt-patriot-fdfff5.webp',
         './img/products/t-shirt-patriot/milky/2t-shirt-patriot-fdfff5.webp',
         './img/products/t-shirt-patriot/milky/3t-shirt-patriot-fdfff5.webp',
         './img/products/t-shirt-patriot/milky/4t-shirt-patriot-fdfff5.webp'],
      name: 'Футболка патріотична молочна',
      article: '202301270',
      color: '#fdfff5',
      sizes: ['XS/S', 'M/S'],
      price: 630,
      category: 't-shirt-patriot',
      colorName: 'milky',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/t-shirt-patriot/gray-melange/1t-shirt-patriot-CCCAC9.webp',
         './img/products/t-shirt-patriot/gray-melange/2t-shirt-patriot-CCCAC9.webp'],
      name: 'Футболка патріотична сірий меланж',
      article: '202301271',
      color: '#CCCAC9',
      sizes: ['XS/S', 'M/S'],
      price: 630,
      category: 't-shirt-patriot',
      colorName: 'gray-melange',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/t-shirt-patriot/gray-blue/1t-shirt-patriot-7393B3.webp',
         './img/products/t-shirt-patriot/gray-blue/2t-shirt-patriot-7393B3.webp',
         './img/products/t-shirt-patriot/gray-blue/3t-shirt-patriot-7393B3.webp'],
      name: 'Футболка патріотична сіро-блакитна',
      article: '202301272',
      color: '#7393B3',
      sizes: ['XS/S', 'M/S'],
      price: 630,
      category: 't-shirt-patriot',
      colorName: 'gray-blue',
      discount: 0,
      popular: 'false'
   },

   /*Світшот*/

   {
      pic: ['./img/products/sweatshirt/milky/1sweatshirt-fdfff5.webp',
         './img/products/sweatshirt/milky/2sweatshirt-fdfff5.webp',
         './img/products/sweatshirt/milky/3sweatshirt-fdfff5.webp',
         './img/products/sweatshirt/milky/4sweatshirt-fdfff5.webp'],
      name: 'Світшот молочний',
      article: '202301280',
      color: '#fdfff5',
      sizes: ['XS', 'S', 'M'],
      price: 999,
      category: 'sweatshirt',
      colorName: 'milky',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/sweatshirt/dark-blue/1sweatshirt-00008B.webp',
         './img/products/sweatshirt/dark-blue/2sweatshirt-00008B.webp',
         './img/products/sweatshirt/dark-blue/3sweatshirt-00008B.webp',
         './img/products/sweatshirt/dark-blue/4sweatshirt-00008B.webp'],
      name: 'Світшот темно-синій',
      article: '202301281',
      color: '#00008B',
      sizes: ['XS', 'S', 'M'],
      price: 999,
      category: 'sweatshirt',
      colorName: 'dark-blue',
      discount: 0,
      popular: 'false'
   },

   /*Світшот на флісі*/

   {
      pic: ['./img/products/sweatshirt-flis/dark-blue/1sweatshirt-flis-00008B.webp',
         './img/products/sweatshirt-flis/dark-blue/2sweatshirt-flis-00008B.webp',
         './img/products/sweatshirt-flis/dark-blue/3sweatshirt-flis-00008B.webp',
         './img/products/sweatshirt-flis/dark-blue/4sweatshirt-flis-00008B.webp'],
      name: 'Світшот на флісі темно-синій',
      article: '202301290',
      color: '#00008B',
      sizes: ['XS', 'S', 'M'],
      price: 999,
      category: 'sweatshirt-flis',
      colorName: 'dark-blue',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/sweatshirt-flis/gray-melange/1sweatshirt-flis-CCCAC9.webp',
         './img/products/sweatshirt-flis/gray-melange/2sweatshirt-flis-CCCAC9.webp',
         './img/products/sweatshirt-flis/gray-melange/3sweatshirt-flis-CCCAC9.webp',
         './img/products/sweatshirt-flis/gray-melange/4sweatshirt-flis-CCCAC9.webp'],
      name: 'Світшот на флісі сірий меланж',
      article: '202301291',
      color: '#CCCAC9',
      sizes: ['XS', 'S', 'M'],
      price: 999,
      category: 'sweatshirt-flis',
      colorName: 'gray-melange',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/sweatshirt-flis/beige/1sweatshirt-flis-F5F5DC.webp',
         './img/products/sweatshirt-flis/beige/2sweatshirt-flis-F5F5DC.webp',
         './img/products/sweatshirt-flis/beige/3sweatshirt-flis-F5F5DC.webp',
         './img/products/sweatshirt-flis/beige/4sweatshirt-flis-F5F5DC.webp'],
      name: 'Світшот на флісі бежевий',
      article: '202301292',
      color: '#F5F5DC',
      sizes: ['XS', 'S', 'M'],
      price: 999,
      category: 'sweatshirt-flis',
      colorName: 'beige',
      discount: 0,
      popular: 'false'
   },

   /*Джогери*/

   {
      pic: ['./img/products/joggers/dark-blue/1joggers-00008B.webp',
         './img/products/joggers/dark-blue/2joggers-00008B.webp',
         './img/products/joggers/dark-blue/3joggers-00008B.webp',
         './img/products/joggers/dark-blue/4joggers-00008B.webp'],
      name: 'Джогери темно-сині',
      article: '202301201',
      color: '#00008B',
      sizes: ['XS', 'S', 'M'],
      price: 999,
      category: 'joggers',
      colorName: 'dark-blue',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/joggers/milky/1joggers-fdfff5.webp',
         './img/products/joggers/milky/2joggers-fdfff5.webp',
         './img/products/joggers/milky/3joggers-fdfff5.webp',
         './img/products/joggers/milky/4joggers-fdfff5.webp'],
      name: 'Джогери молочні',
      article: '202301202',
      color: '#fdfff5',
      sizes: ['XS', 'S', 'M'],
      price: 999,
      category: 'joggers',
      colorName: 'milky',
      discount: 0,
      popular: 'false'
   },

   /*Джогери на флісі*/

   {
      pic: ['./img/products/joggers-flis/dark-blue/1joggers-flis-00008B.webp',
         './img/products/joggers-flis/dark-blue/2joggers-flis-00008B.webp',
         './img/products/joggers-flis/dark-blue/3joggers-flis-00008B.webp',
         './img/products/joggers-flis/dark-blue/4joggers-flis-00008B.webp'],
      name: 'Джогери на флісі темно-сині',
      article: '202301210',
      color: '#00008B',
      sizes: ['XS', 'S', 'M'],
      price: 999,
      category: 'joggers-flis',
      colorName: 'dark-blue',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/joggers-flis/milky/1joggers-flis-fdfff5.webp',
         './img/products/joggers-flis/milky/2joggers-flis-fdfff5.webp',
         './img/products/joggers-flis/milky/3joggers-flis-#fdfff5.webp',
         './img/products/joggers-flis/milky/4joggers-flis-#fdfff5.webp'],
      name: 'Джогери на флісі молочні',
      article: '202301211',
      color: '#fdfff5',
      sizes: ['XS', 'S', 'M'],
      price: 999,
      category: 'joggers-flis',
      colorName: 'milky',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/joggers-flis/gray-melange/1joggers-flis-CCCAC9.webp',
         './img/products/joggers-flis/gray-melange/2joggers-flis-CCCAC9.webp',
         './img/products/joggers-flis/gray-melange/3joggers-flis-CCCAC9.webp',
         './img/products/joggers-flis/gray-melange/4joggers-flis-CCCAC9.webp'],
      name: 'Джогери на флісі сірий меланж',
      article: '202301212',
      color: '#CCCAC9',
      sizes: ['XS', 'S', 'M'],
      price: 999,
      category: 'joggers-flis',
      colorName: 'gray-melange',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/joggers-flis/beige/1joggers-flis-F5F5DC.webp',
         './img/products/joggers-flis/beige/2joggers-flis-F5F5DC.webp',
         './img/products/joggers-flis/beige/3joggers-flis-F5F5DC.webp',
         './img/products/joggers-flis/beige/4joggers-flis-F5F5DC.webp'],
      name: 'Джогери на флісі бежеві',
      article: '202301213',
      color: '#F5F5DC',
      sizes: ['XS', 'S', 'M'],
      price: 999,
      category: 'joggers-flis',
      colorName: 'beige',
      discount: 0,
      popular: 'false'
   },

   /*Костюм флісовий*/

   {
      pic: ['./img/products/suit-flis/black/1suit-flis-000000.webp',
         './img/products/suit-flis/black/2suit-flis-000000.webp',
         './img/products/suit-flis/black/3suit-flis-000000.webp',
         './img/products/suit-flis/black/4suit-flis-000000.webp'],
      name: 'Костюм на флісі чорний',
      article: '202301220',
      color: '#000000',
      sizes: ['XS', 'S', 'M'],
      price: 1750,
      category: 'suit-flis',
      colorName: 'black',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/suit-flis/gray/1suit-flis-CCCAC9.webp',
         './img/products/suit-flis/gray/2suit-flis-CCCAC9.webp',
         './img/products/suit-flis/gray/3suit-flis-CCCAC9.webp',
         './img/products/suit-flis/gray/4suit-flis-CCCAC9.webp'],
      name: 'Костюм на флісі сірий',
      article: '202301221',
      color: '#CCCAC9',
      sizes: ['XS', 'S', 'M'],
      price: 1750,
      category: 'suit-flis',
      colorName: 'gray',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/suit-flis/brown/1suit-flis-964b00.webp',
         './img/products/suit-flis/brown/2suit-flis-964b00.webp',
         './img/products/suit-flis/brown/3suit-flis-964b00.webp',
         './img/products/suit-flis/brown/4suit-flis-964b00.webp'],
      name: 'Костюм на флісі коричневий',
      article: '202301222',
      color: '#964b00',
      sizes: ['XS', 'S', 'M'],
      price: 1750,
      category: 'suit-flis',
      colorName: 'brown',
      discount: 0,
      popular: 'false'
   },
   {
      pic: ['./img/products/suit-flis/electrician/1suit-flis-0000ff.webp',
         './img/products/suit-flis/electrician/2suit-flis-0000ff.webp',
         './img/products/suit-flis/electrician/3suit-flis-0000ff.webp',
         './img/products/suit-flis/electrician/4suit-flis-0000ff.webp'],
      name: 'Костюм на флісі електрик',
      article: '202301223',
      color: '#0000ff',
      sizes: ['XS', 'S', 'M'],
      price: 1750,
      category: 'suit-flis',
      colorName: 'electrician',
      discount: 0,
      popular: 'false'
   },

   /*Костюм з худі НОВИНКА*/

   {
      pic: ['./img/products/suit-hoodie/black/1suit-hoodie-000000.webp',
         './img/products/suit-hoodie/black/2suit-hoodie-000000.webp',
         './img/products/suit-hoodie/black/3suit-hoodie-000000.webp',
         './img/products/suit-hoodie/black/4suit-hoodie-000000.webp'],
      name: 'Костюм з худі чорний НОВИНКА',
      article: '202301230',
      color: '#000000',
      sizes: ['XS', 'S', 'M'],
      price: 1750,
      category: 'suit-hoodie',
      colorName: 'black',
      discount: 0,
      popular: 'false'
   },



];


function showGoods() {
   for (let el of db) {

      if (el.discount > 0) {
         $('.catalogContainer').append(`<div class='goodsItem'>
   <div class="tabbed">
      <div id="sweater" class="sort-data active">
         <div class="dotgrid">
            <div class="wrapper">
   
            <div class="item swiper-slide">
            <div class="dot-image">
              <a href="" class="product-permalink"></a>
              <div class="thumbnail">
                <img src="${el.pic[0]}">
              </div>
              <div class="thumbnail hover">
                <img src="${el.pic[1]}">
              </div>
              <div class="actions">
                <ul>
                  <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                  <li><a href=""><i class="fa-solid fa-arrow-right-arrow-left"></i></a></li>
                  <li><a href=""><i class="fa-regular fa-eye"></i></a></li>
                </ul>
              </div>
              <div class="label"><span>-${el.discount}%</span></div>
            </div>
            <div class="dot-info">
              <h2 class="dot-title"><a href="">${el.name}</a></h2>
              <div class="product-price">
                <span class="before">$62.00</span>
                <span class="current">₴${el.price}.00</span>
              </div>
              <button id='${el.article}' class='buyBtn'>Переглянути</button>

            </div>
          </div>
         
            </div>
         </div>
      </div>
   </div>
      
   </div > `);
      } else {
         $('.catalogContainer').append(`<div class='goodsItem'>
   <div class="tabbed">
      <div id="sweater" class="sort-data active">
         <div class="dotgrid">
            <div class="wrapper">
   
            <div class="item swiper-slide">
            <div class="dot-image">
              <a href="" class="product-permalink"></a>
              <div class="thumbnail">
                <img src="${el.pic[0]}">
              </div>
              <div class="thumbnail hover">
                <img src="${el.pic[1]}">
              </div>
              <div class="actions">
                <ul>
                  <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                  <li><a href=""><i class="fa-solid fa-arrow-right-arrow-left"></i></a></li>
                  <li><a href=""><i class="fa-regular fa-eye"></i></a></li>
                </ul>
              </div>
            
            </div>
            <div class="dot-info">
              <h2 class="dot-title"><a href="">${el.name}</a></h2>
              <div class="product-price">
                <span class="before">$62.00</span>
                <span class="current">₴${el.price}.00</span>
              </div>
              <button id='${el.article}' class='buyBtn'>Переглянути</button>

            </div>
          </div>
         
            </div>
         </div>
      </div>
   </div>
      
   </div > `);
      }
   }

}

showGoods();


$('#showSale').click(function () {
   $('.catalogContainer').empty();
   for (let el of db) {
      if (el.discount > 0) {
         $('.catalogContainer').append(`<div class='goodsItem'>
   <div class="tabbed">
      <div id="sweater" class="sort-data active">
         <div class="dotgrid">
            <div class="wrapper">
   
            <div class="item swiper-slide">
            <div class="dot-image">
              <a href="" class="product-permalink"></a>
              <div class="thumbnail">
                <img src="${el.pic[0]}">
              </div>
              <div class="thumbnail hover">
                <img src="${el.pic[1]}">
              </div>
              <div class="actions">
                <ul>
                  <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                  <li><a href=""><i class="fa-solid fa-arrow-right-arrow-left"></i></a></li>
                  <li><a href=""><i class="fa-regular fa-eye"></i></a></li>
                </ul>
              </div>
              <div class="label"><span>-${el.discount}%</span></div>
            </div>
            <div class="dot-info">
              <h2 class="dot-title"><a href="">${el.name}</a></h2>
              <div class="product-price">
                <span class="before">$62.00</span>
                <span class="current">₴${el.price}.00</span>
              </div>
              <button id='${el.article}' class='buyBtn'>Переглянути</button>

            </div>
          </div>
         
            </div>
         </div>
      </div>
   </div>
      
   </div > `);
      }
   }
})

function showBySize(size) {
   $('.catalogContainer').empty();
   for (let el of db) {
      if (el.sizes.includes(size)) {
         showGoods();

      }
   }
}

$('#priceVal').on('input', function () {
   showByPrice($('#priceVal').val());
   $('#currentPrice').text(`До: ₴${$('#priceVal').val()}`);

})



$('.colorItem').click(function (e) {
   $('.catalogContainer').empty();
   let colorID = (e.target.id);
   console.log(colorID);
   for (let el of db) {
      if (colorID == el.colorName) {
         $('.catalogContainer').append(`<div class='goodsItem'>
   <div class="tabbed">
      <div id="sweater" class="sort-data active">
         <div class="dotgrid">
            <div class="wrapper">
   
            <div class="item swiper-slide">
            <div class="dot-image">
              <a href="" class="product-permalink"></a>
              <div class="thumbnail">
                <img src="${el.pic[0]}">
              </div>
              <div class="thumbnail hover">
                <img src="${el.pic[1]}">
              </div>
              <div class="actions">
                <ul>
                  <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                  <li><a href=""><i class="fa-solid fa-arrow-right-arrow-left"></i></a></li>
                  <li><a href=""><i class="fa-regular fa-eye"></i></a></li>
                </ul>
              </div>
              <div class="label"><span>-25%</span></div>
            </div>
            <div class="dot-info">
              <h2 class="dot-title"><a href="">${el.name}</a></h2>
              <div class="product-price">
                <span class="before">$62.00</span>
                <span class="current">₴${el.price}.00</span>
              </div>
              <button id='${el.article}' class='buyBtn'>Переглянути</button>

            </div>
          </div>
         
            </div>
         </div>
      </div>
   </div>
      
   </div > `);
      }
   }
})

$('.size__item').click(function (e) {
   let sizeID = (e.target.id).substring(4);
   showBySize(sizeID);
})

/*
<div>
            <div>${el.name}</div>
            <div>${el.category}</div>
            <div>${el.color}</div>
            <button id='cart${el.article}' class='addToCart'>В корзину<button>
         </div>
*/

$('.buyBtn').click(function (e) {

   $('.goodsPopup').css('display', 'flex');
   $('.goodsPopupContainer').empty();
   for (let el of db) {
      if (el.article === e.target.id) {
         $('.goodsPopupContainer').append(`
         

      <main>
         
         
            <div class="container">
               <div class="wrap">
                  <div class="product dotgrid">
                     <div class="wrapper">
                        <div class="image">
                           <div class="outer-main">
                              <div class="main-image swiper">
                                 <div class="wrap swiper-wrapper">
                                    <div class="item swiper-slide"><img src="img/assets/product_01.jpg" alt=""></div>
                                    <div class="item swiper-slide"><img src="img/assets/product_01b.jpg" alt=""></div>
                                    <div class="item swiper-slide"><img src="img/assets/product_06.jpg" alt=""></div>
                                    <div class="item swiper-slide"><img src="img/assets/product_06b.jpg" alt=""></div>
                                    <div class="item swiper-slide"><img src="img/assets/product_02.jpg" alt=""></div>
                                    <div class="item swiper-slide"><img src="img/assets/product_02b.jpg" alt=""></div>
                                 </div>
                              </div>
                              <div class="custom-pagination">
                                 <div class="swiper-pagination"></div>
                              </div>
                           </div>
                           <div class="outer-thumb ob-cover">
                              <div class="thumbnail-image swiper">
                                 <div class="wrap swiper-wrapper">
                                    <div class="item swiper-slide">
                                       <div class="thumb-wrap"><img src="img/assets/product_01.jpg" alt=""></div>
                                    </div>
                                    <div class="item swiper-slide">
                                       <div class="thumb-wrap"><img src="img/assets/product_01b.jpg" alt=""></div>
                                    </div>
                                    <div class="item swiper-slide">
                                       <div class="thumb-wrap"><img src="img/assets/product_06.jpg" alt=""></div>
                                    </div>
                                    <div class="item swiper-slide">
                                       <div class="thumb-wrap"><img src="img/assets/product_06b.jpg" alt=""></div>
                                    </div>
                                    <div class="item swiper-slide">
                                       <div class="thumb-wrap"><img src="img/assets/product_02.jpg" alt=""></div>
                                    </div>
                                    <div class="item swiper-slide">
                                       <div class="thumb-wrap"><img src="img/assets/product_02b.jpg" alt=""></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="summary">
                           <div class="entry">
                              <h1 class="title">The Sweater in Tosca</h1>
                              <div class="product-group">
                                 <div class="product-price">
                                    <span class="current">$45.00</span>
                                    <div class="wrap">
                                       <span class="before">$62.00</span>
                                       <span class="discount">-25%</span>
                                    </div>
                                 </div>

                              </div>
                              <div class="product-color">
                                 <span>Colors:</span>
                                 <div class="wrap">
                                    <button class="tosca selected"></button>
                                    <button class="brown"></button>
                                    <button class="ocean"></button>
                                 </div>
                              </div>
                              <div class="product-size">
                                 <span>Size:</span>
                                 <div class="wrap">
                                    <button disabled>S</button>
                                    <button>M</button>
                                    <button class="selected">L</button>
                                    <button>XL</button>
                                 </div>
                              </div>

                              <div class="product-action">
                                 <div class="qty">
                                    <button class="decrease">-</button>
                                    <input type="text" value="1">
                                    <button class="decrease">+</button>
                                 </div>
                                 <div class="buynow button">
                                    <button type="submit" class="primary-btn">Додати в кошик</button>
                                 </div>
                                 <div class="buynow button">
                                    <button type="submit" class="secondary-btn" id="cart${el.article}" class="addToCart">Купити зараз</button>
                                 </div>
                              </div>

                              
                           </div>
                        </div>
                     </div>
                  </div>
                  
               </div>
            </div>

      </main>
         
         `);
      }
   }


   $('.addToCart').click(function (e) {
      let target = (e.target.id).substring(4);
      for (let el of db) {
         if (el.article == target) {
            shopCartList.push(el);
            $('.item-floating').text(shopCartList.length);
            localStorage.setItem('shopCartList', JSON.stringify(shopCartList));

         }
      }
   })



})

$('#closePopup').click(function () {
   $('.goodsPopup').css('display', 'none');
})


$('#cart').click(function (e) {
   e.preventDefault();
   $('.cart').css('right', 0);

   let tp = 0;
   for (let el of shopCartList) {
      tp += el.price;
      $('.cartContainer').append(`<div class='cartGoodsItem'>

      <div id="data-cart" class="cart-menu active">
    <div class="wrap">
      <a href="#0" class="close-trigger" close-button><i class="fa-solid fa-xmark"></i></a>
      <div class="scrollto cart-outer">
        <div class="wrapper">
          <div class="cart-list">
            <div class="wrapper">
              <div class="cart-header">
                <h2>Shopping cart</h2>
              </div>
              <div class="cart-body">
                <div class="product-list scrollto">
                  <div class="wrapper">
                    <ul>
                      <li>
                        <div class="grouping">
                          <div class="quantity">
                            <div class="control">
                              <button>-</button>
                              <input type="text" value="1">
                              <button>+</button>
                            </div>
                          </div>
                          <div class="thumbnail">
                            <a href="">
                              <img src="img/assets/product_01.jpg" alt="">
                            </a>
                          </div>
                        </div>
                        <div class="variats">
                          <h4 class="dot-title"><a href="">The Sweater in Tosca</a></h4>
                          <div class="color grey-color">
                            <span>Color:</span>
                            <span>Tosca:</span>
                          </div>
                          <div class="size grey-color">
                            <span>Size:</span>
                            <span>L</span>
                          </div>
                          <div class="price">$45.00</div>
                          <a href="" class="item-remove">
                            <i class="fa-solid fa-xmark"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="grouping">
                          <div class="quantity">
                            <div class="control">
                              <button>-</button>
                              <input type="text" value="1">
                              <button>+</button>
                            </div>
                          </div>
                          <div class="thumbnail">
                            <a href="">
                              <img src="img/assets/product_01.jpg" alt="">
                            </a>
                          </div>
                        </div>
                        <div class="variats">
                          <h4 class="dot-title"><a href="">The Sweater in Tosca</a></h4>
                          <div class="color grey-color">
                            <span>Color:</span>
                            <span>Tosca:</span>
                          </div>
                          <div class="size grey-color">
                            <span>Size:</span>
                            <span>L</span>
                          </div>
                          <div class="price">$45.00</div>
                          <a href="" class="item-remove">
                            <i class="fa-solid fa-xmark"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="grouping">
                          <div class="quantity">
                            <div class="control">
                              <button>-</button>
                              <input type="text" value="1">
                              <button>+</button>
                            </div>
                          </div>
                          <div class="thumbnail">
                            <a href="">
                              <img src="img/assets/product_01.jpg" alt="">
                            </a>
                          </div>
                        </div>
                        <div class="variats">
                          <h4 class="dot-title"><a href="">The Sweater in Tosca</a></h4>
                          <div class="color grey-color">
                            <span>Color:</span>
                            <span>Tosca:</span>
                          </div>
                          <div class="size grey-color">
                            <span>Size:</span>
                            <span>L</span>
                          </div>
                          <div class="price">$45.00</div>
                          <a href="" class="item-remove">
                            <i class="fa-solid fa-xmark"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cart-footer">
                
                <div class="math-pricing">
                  <ul> 
                    <li class="total">
                      <span>Total</span>
                      <span class="value">$147.00</span>
                    </li>
                  </ul>
                </div>
                <div class="button">
                  <a href="" class="secondary-btn">Checkout</a>
                  <a href="" class="grey-link">Viev Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


      
     <h5> ${el.name}</h5>
     <div>${el.price}</div>
    
      </div>`);
   }

   $('.totalPrice').text(tp);


})




$('.nav ul li a').click(function (event) {
   event.preventDefault();

   var target = $(this.hash);
   var offset = 0;

   $('html, body').animate({
      scrollTop: target.offset().top - offset
   }, 500);

   

});