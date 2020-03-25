function homeScreen() {
    $('.navbar').on('click', '.home', function() {
        event.preventDefault();
        console.log('home button clicked');
        $('.content').hide();
        $('.homePage').fadeIn();
    })

}

function bioScreen() {
    $('.navbar').on('click', '.bio', function() {
        event.preventDefault();
        console.log('bio button clicked');
        $('.content').hide();
        $('.bioPage').fadeIn();
    })

}

function skillsScreen() {
    $('.navbar').on('click', '.skills', function() {
        event.preventDefault();
        console.log('skills button clicked');
        $('.content').hide();
        $('.skillsPage').fadeIn();
    })

}

function galleryScreen() {
    $('.navbar').on('click', '.gallery', function() {
        event.preventDefault();
        console.log('gallery button clicked');
        $('.content').hide();
        $('.galleryPage').fadeIn();
    })

}

function contactInfoScreen() {
    $('.navbar').on('click', '.contactInfo', function() {
        event.preventDefault();
        console.log('contactInfo button clicked');
        $('.content').hide();
        $('.contactInfoPage').fadeIn();
    })

}

function portfolio() {
    homeScreen();
    bioScreen();
    skillsScreen();
    galleryScreen();
    contactInfoScreen();
}

portfolio();

