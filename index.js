
function show(sectionButton, sectionSelector) {
    $('.navbar').on('click', sectionButton, function() {
        event.preventDefault();
        console.log(sectionButton + ' button clicked');
        $('.content').hide();
        $(sectionSelector).fadeIn();
        window.scrollTo(0, 0);
    })
}



show('.home', '.homePage')
show('.bio', '.bioPage')
show('.skills', '.skillsPage')
show('.gallery', '.galleryPage')
//show('.contactInfo', '.contactInfoPage')

//<canvas data-processing-sources="waves.pde"></canvas>