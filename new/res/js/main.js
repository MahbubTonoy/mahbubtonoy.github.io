//full page
new fullpage('#fullpage', {
    //navigation
    // anchors: ['MahbubTonoy', 'about', 'skills', 'services', 'background', 'projects', 'contact'],
    navigation: true,

    //scroll
    scrollingSpeed: 500,
    scrollOverflow: true,
    scrollBar:true,

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


//progressbar
$(document).ready(() => {

    $('.html').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#d84924',
        height: '7px',
    });
    $('.css').rProgressbar({
        percentage: 85,
        fillBackgroundColor: '#2449d8',
        height: '7px',
    });
    $('.js').rProgressbar({
        percentage: 70,
        fillBackgroundColor: '#cbb132',
        height: '7px',
    });
    $('.bootstrap').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#6a419d',
        height: '7px',
    });
    $('.jquery').rProgressbar({
        percentage: 75,
        fillBackgroundColor: '#0f63a4',
        height: '7px',
    });
    $('.php').rProgressbar({
        percentage: 70,
        fillBackgroundColor: '#7175aa',
        height: '7px',
    });
    $('.wp').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#006e92',
        height: '7px',
    });
});


// console.log(fullpage_api.getActiveSection());


