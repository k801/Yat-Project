$(window).scroll(function(){


    $topscroll=$(window).scrollTop();
    
    $serivcesTop=$('#theSlid').offset().top;
    
    console.log($topscroll);
    
    console.log($serivcesTop);
    if($topscroll>$serivcesTop)
    {
    
        $('.navbar').fadeOut(500);
    }else{
    
        $('.navbar').fadeIn(500);
    
    
    }
    
    
    
    })
    
    