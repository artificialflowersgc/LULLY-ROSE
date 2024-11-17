/*CART SIDE PANEL */

jQuery(document).ready(function($) {
    // Function to fetch and display cart contents
    function updateCartPanel() {
        $.ajax({
            url: customScriptData.ajax_url,
            type: 'POST',
            data: {
                action: 'get_cart_contents'
            },
            success: function(response) {
                $('#side-cart-panel .side-cart-content').html(response.data.fragments['div.widget_shopping_cart_content']);
                $('#side-cart-panel').addClass('open');
            }
        });
    }

   jQuery(document).ready(function($) {
    // Open side panel on adding to cart
    $(document.body).on('added_to_cart', function() {
        updateCartPanel();
    });

    // Close side panel
    $('#side-cart-panel').on('click', '.close-cart-panel', function() {
        $('#side-cart-panel').removeClass('open');
    });

    // Open side panel on clicking cart icon
    $('.cart-contents').on('click', function(e) {
        e.preventDefault();
        updateCartPanel();
    });
});
	

jQuery(function ($) {
        var $counter = $('<div class="character-counter">'),
            limit = 160;
 
        // Get the textarea field
        $('.ywapo_input_textarea')
 
        // Add the counter after it
        .after($counter)
 
        // Bind the counter function on keyup and blur events
        .bind('keyup blur', function () {
            var length = $(this).val().length;
 
            if (length > limit) {
                // The value exceeds the limit, contain it
                $(this).val($(this).val().substring(0, limit));
            } else {
                // Set the counter text
                $counter.text(length + '/' + limit + ' characters');
            }
        })
 
        // Trigger the counter on first load
        .blur();
     
        // Disable input on checkout page
        $('#billing_city').attr('readonly', true);
        $('#shipping_city').attr('readonly', true);
        //$('#billing_address_1').attr('readonly', true);
        //$('#billing_address_2').attr('readonly', true);
        //$('#shipping_address_1').attr('readonly', true);
        //$('#shipping_address_2').attr('readonly', true);

        // Add line break after title workshop
        $('.product_cat-workshops .product-title').html(function(){
            return $(this).html().replace('Workshop','Workshop<br/>');
        });
        
        //var yith_cont = $('#yith_wapo_groups_container');
          //$(yith_cont).hide();
          
          //if($(yith_cont).length){
            //$( "<div id='toggle-sliding'><i class='arrow down'></i><h2>Add a Little Extra?</h2><i class='arrow down'></i></div>" ).insertBefore( $(yith_cont) ); 
            //}
          
          //$('#toggle-sliding').click(function(e) {
              //$(yith_cont).slideToggle('slow');
              //$("#toggle-sliding .arrow").toggleClass('up');
              //e.preventDefault();
          //});
        
         $('.mfp-close2').magnificPopup('close');
                             
    });
   
    jQuery(document).on( 'nfFormReady', function( e, layoutView ) {
        //alert('trigger5');
       
        jQuery( ".wedding_date_01" ).datepicker();
        jQuery( ".event_date_01" ).datepicker();
        jQuery( ".appointment_date_01" ).datepicker({
            //beforeShowDay: jQuery.datepicker.noWeekends
            beforeShowDay: function(date) {
                // Disable holidays
                var holidays = ["2021-08-26","2021-08-27","2021-12-24","2021-12-25","2021-12-26","2021-12-27","2021-12-28","2021-12-29","2021-12-30","2021-12-31","2022-01-01","2022-01-02","2022-01-03","2022-01-04","2022-01-05","2022-01-06","2022-01-07","2022-01-08","2022-01-09","2022-01-10","2022-01-11","2022-01-12","2022-01-13","2022-01-14","2022-01-15","2022-01-16","2022-01-17","2022-01-18","2022-01-19","2022-01-20","2022-01-21"];
                var datestring = jQuery.datepicker.formatDate( "yy-mm-dd", date );
                
                if( holidays.indexOf( datestring ) != -1 ) {
                return [ false, false ];
                }
                // Disable weekends
                var day = date.getDay();
                if( day == 0 || day == 1 || day == 4 || day == 5 || day == 6 ) {
                return [ false, false ];
                }
                return [ true ];
            }
            //beforeShowDay: disabledays
        });
    });

jQuery(document).ready(function($) {
    // Wait until the checkout form is loaded
    $(document.body).on('updated_checkout', function() {
        // Assuming the IDs or classes for the elements are as follows
        var disclaimerButton = $('#disclaimer-button'); // Adjust the selector as needed
        var disclaimerCheckbox = $('#delivery_disclaimer_checkbox'); // Adjust the selector as needed
        // Move the checkbox below the button
        if (disclaimerButton.length && disclaimerCheckbox.length) {
            disclaimerCheckbox.insertAfter(disclaimerButton);
        }
    });

    // Trigger the move on page load as well
    var disclaimerButton = $('#disclaimer-button'); // Adjust the selector as needed
    var disclaimerCheckbox = $('#delivery_disclaimer_checkbox'); // Adjust the selector as needed

    // Move the checkbox below the button
    if (disclaimerButton.length && disclaimerCheckbox.length) {
        disclaimerCheckbox.insertAfter(disclaimerButton);
    }
});



