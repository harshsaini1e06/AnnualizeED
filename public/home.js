 // Mobile menu functionality
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const mobileMenu = document.getElementById('mobile-menu');
 
 mobileMenuButton.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
 });

 // Close mobile menu when clicking outside
 document.addEventListener('click', (event) => {
     if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
         mobileMenu.classList.add('hidden');
     }
 });

 // Smooth scroll for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });



gsap.from("#img1",{
    y:30,
    duration:2,
    delay:1,
    opacity:0
})
gsap.from("h1",{
    y:30,
    duration:2,
    delay:1,
    opacity:0,
    
})
gsap.from("h5",{
    y:30,
    duration:2,
    delay:1,
    opacity:0,
    
})
