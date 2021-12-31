//full page
new fullpage('#fullpage', {
 //navigation
 anchors: ['MahbubTonoy', 'about', 'skills', 'services', 'background', 'projects', 'contact'],
 navigation: true,
 navigationTooltips: ['MahbubTonoy', 'About', 'Skills', 'Services', 'Background', 'Projects', 'Contact', 'Footer'],

 //scroll
 scrollingSpeed: 500,

 //design
 verticalCentered: false,

});


//particleground
particleground(document.getElementById('homePage'), {
 dotColor: '#fff',
 lineColor: '#fff',
});


//morphext
$(".js-rotating").Morphext({
 animation: "flipInY", // Overrides default "bounceIn"
 separator: ",", // Overrides default ","
 speed: 3000, // Overrides default 2000
 complete: function () {
     // Overrides default empty function
 }
});