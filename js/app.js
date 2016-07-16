(function() {
    //Tooltips
    $(function() {
            $('#scentsy').tooltip({
                show: {
                    effect: "blind",
                    duration: 500
                },
                content: '<div class="scentsy entry">' +
                    '<div class="container">' + 
                    '<div class="row">' + 
                    '<h3 class="other-color">Scentsy, Inc.</h3>' +
                    '<div class="col-md-6">' +
                    '<h4 class="text-muted">Content Production Specialist</h4>' +
                    '<h5>March 2014 - Present</h5>' +
                    '<ul>' +
                    '<li>Manage content throughout the company\'s digital portfolio</li>' +
                    '<li>Design basic front-end functionality</li>' +
                    '<li>Perform monthly site maintenance</li>' +
                    '</ul>' +
                    '</div>' +
                    '<div class="col-md-6">' +
                    '<h4 class="text-muted">Communications Associate</h4>' +
                    '<h5>April 2012 - March 2014 </h5>' +
                    '<ul>' +
                    '<li>Maintained a digital repository of resources for the company\'s independent salesforce</li>' +
                    '<li>Supported the copywriting team with proofing, editing, and file organization/control/routing</li>' +
                    '<li>Assisted with various tasks, including acting as a courier</li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
                hide: { effect: "blind", duration: 500 },
                position: { within: $('.body-content'), my: "left bottom", at: "left top"}
            });
             
        });


        $(function() {
            $('#bestbuy').tooltip({
                show: {
                    effect: "blind",
                    duration: 500
                },
                content: '<div class="bestbuy entry">' +
                    '<div class="container">' + 
                    '<div class="row">' + 
                    '<h3 class="other-color">Best Buy</h3>' +
                    '<h4 class="text-muted">Inventory Control Specialist</h4>' +
                    '<h5>November 2010 - November 2012</h5>' +
                    '<ul>' +
                    '<li>Maintained accurate inventory while managing store’s incoming and outgoing freight.</li>' +
                    '<li>Applied loss prevention principals to protect company assets.</li>' +
                    '<li>Identified customer needs to provide the best customer service solution.</li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
                hide: { effect: "blind", duration: 500 },
                position: { within: $('.body-content'), my: "left bottom", at: "left top"}
            });
        });

        $(function() {
            $('#observepoint').tooltip({
                show: {
                    effect: "blind",
                    duration: 500
                },
                content: '<div class="observepoint entry">' +
                    '<div class="container">' + 
                    '<div class="row">' + 
                    '<h3 class="other-color">ObservePoint</h3>' +
                    '<h4 class="text-muted">Marketing Intern</h4>' +
                    '<h5>February 2011 - June 2011</h5>' +
                    '<ul>' +
                    '<li>Reviewed, edited, and contributed to the inception of marketing copy and other materials.</li>' +
                    '<li>Assisted in the management of social media tools and participated in discussions relevant to the company’s products.</li>' +
                    '<li>Performed market research on web analytics issues, analyzing trends that supported ObservePoint’s mission.</li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
                hide: { effect: "blind", duration: 500 },
                position: { within: $('.body-content'), my: "left bottom", at: "left top"}
            });
        });

        $(function() {
            $('#byui').tooltip({
                show: {
                    effect: "blind",
                    duration: 500
                },
                content: '<div class="byui entry">' +
                    '<div class="container">' + 
                    '<div class="row">' + 
                    '<h3 class="other-color">Brigham Young University-Idaho</h3>' +
                    '<h4 class="text-muted">Bachelor of Science, <i>Communications</i></h4>' +
                    '<h4 class="text-muted">Minor in Psychology</h4>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
                hide: { effect: "blind", duration: 500 },
                position: { within: $('.body-content'), my: "left bottom", at: "left top"}
            });
        });

        $(function() {
            $('#bcw').tooltip({
                show: {
                    effect: "blind",
                    duration: 500
                },
                content: '<div class="bcw entry">' +
                    '<div class="container">' + 
                    '<div class="row">' + 
                    '<h3 class="other-color">BoiseCodeWorks</h3>' +
                    '<h4 class="text-muted">Certificate, <i>Front-End Web Development</i></h4>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
                hide: { effect: "blind", duration: 500 },
                position: { within: $('.body-content'), my: "left bottom", at: "left top"}
            });
        });
})();

