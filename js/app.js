(function() {

    //Set descriptions to hidden on page load
    $(document).ready(function() {
        $(".entry").hide();
        $(".emp-logo").on('click').animationClick();
    });
    
    //Toggle content
    $('#scentsy-btn').click(function() {
        $('.entry').not('#scentsy-desc').slideUp();
        $('#scentsy-desc').stop(true, true).delay(400).toggle('blind');
    });

    $('#bestbuy-btn').click(function() {
        $('.entry').not('#bestbuy-desc').slideUp();
        $('#bestbuy-desc').stop(true, true).delay(400).toggle('blind');
    });

    $('#observepoint-btn').click(function() {
        $('.entry').not('#observepoint-desc').slideUp();
        $('#observepoint-desc').stop(true, true).delay(400).toggle('blind');
        
    });

    $('#byui-btn').click(function() {
        $('.entry').not('#byui-desc').slideUp();
        $('#byui-desc').stop(true, true).delay(400).toggle('blind');
        
    });

    $('#bcw-btn').click(function() {
        $('.entry').not('#bcw-desc').slideUp();
        $('#bcw-desc').stop(true, true).delay(400).toggle('blind'); 
    });

    //Mobile toggle
    $('#scentsy-btn-m').click(function() {
        $('.entry').not('#scentsy-desc').slideUp();
        $('#scentsy-desc').stop(true, true).delay(400).toggle('blind');
        $('i').not('#scentsy-btn-m i').removeClass('rotate');
        $('#scentsy-btn-m i').toggleClass('rotate'); 
    });

    $('#bestbuy-btn-m').click(function() {
        $('.entry').not('#bestbuy-desc').slideUp();
        $('#bestbuy-desc').stop(true, true).delay(400).toggle('blind');
        $('i').not('#bestbuy-btn-m i').removeClass('rotate');
        $('#bestbuy-btn-m i').toggleClass('rotate'); 
    });

    $('#observepoint-btn-m').click(function() {
        $('.entry').not('#observepoint-desc').slideUp();
        $('#observepoint-desc').stop(true, true).delay(400).toggle('blind');
        $('i').not('#observepoint-btn-m i').removeClass('rotate');
        $('#observepoint-btn-m i').toggleClass('rotate'); 
    });

    $('#byui-btn-m').click(function() {
        $('.entry').not('#byui-desc').slideUp();
        $('#byui-desc').stop(true, true).delay(400).toggle('blind');
        $('i').not('#byui-btn-m i').removeClass('rotate');
        $('#byui-btn-m i').toggleClass('rotate'); 
    });

    $('#bcw-btn-m').click(function() {
        $('.entry').not('#bcw-desc').slideUp();
        $('#bcw-desc').stop(true, true).delay(400).toggle('blind');
        $('i').not('#bcw-btn-m i').removeClass('rotate');
        $('#bcw-btn-m i').toggleClass('rotate');
    });
})();