"use strict";

$(document).ready(function() {
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vert-nav a');

    updateNavigation();
    $(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {

        contentSections.each(function() {
            var self = $(this);

            // Select the section
            var currentSection = $('#cd-vert-nav a[href="#'+self.attr('id')+'"]').data('number') - 1;

            // Check whether this is the section should be "highlighted"
            if ((self.offset().top - $(window).height()/2 < $(window).scrollTop()) &&
            (self.offset().top + self.height() - $(window).height()/2 > $(window).scrollTop())) {
				navigationItems.eq(currentSection).addClass('is-selected');
			}
            else {
				navigationItems.eq(currentSection).removeClass('is-selected');
			}
        });
    }

    // Scroll smoothly to the target using jQuery
    function smoothScroll(target) {
        $('body,html').animate(
            {'scrollTop': target.offset().top},
            700
        );
    }
});
