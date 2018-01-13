import smoothscroll from 'smoothscroll';

module.exports = (selector) => setTimeout(function() {
    smoothscroll(document.querySelector(selector));
}, 100);