//Import modules//
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

//new instance of class/modules//
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
<<<<<<< HEAD
var stickyHeader = new StickyHeader();  
=======
var stickyHeader = new StickyHeader(); 
>>>>>>> sticky-header
