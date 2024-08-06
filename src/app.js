// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classlist.add('show');
//         } else {
//             entry.target.classlist.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hide');
// hiddenElements.forEach((el) => observer.observer(el));

// core version + navigation, pagination modules:



// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
//   ...
// });