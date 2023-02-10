$(document).ready(function() {
    
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');

    $('.category_item').click(function(){

        var catProduct = $(this).attr('category');

        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');


        $('.product_item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.product_item').hide();
        } setTimeout(hideProduct, 400);


        function showProduct(){
            $('.product_item[category="'+catProduct+'"]').show();
            $('.product_item[category="'+catProduct+'"]').css('transform', 'scale(1)');
        } setTimeout(showProduct, 400);
        
    });

    $('.category_item[category="all"]').click(function(){
        function showAll(){
            $('.product_item').show();
            $('.product_item').css('transform', 'scale(1)');
        } setTimeout(showAll, 400);
    });
});




$(document).ready(function(){
    $('#abrir_menu').click(function(){
        $('#header_mob').removeClass('disabled');
        $('#header_des').addClass('disabled');
    });
    $('#close').click(function(){
        $('#header_mob').addClass('disabled');
        $('#header_des').removeClass('disabled');
    });
    $('.link_mob').click(function(){
        $('#header_mob').addClass('disabled');
        $('#header_des').removeClass('disabled');
    })
})

