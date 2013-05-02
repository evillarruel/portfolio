$(document).ready(function () {
    /*Background image*/
	$('.background img').height($(window).height())
	
    /*Smooth Scroll Function*/
    $(function () {
        $('#nav li a[href^=#]').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var $target = $(this.hash);

                var linkto = $target.selector;
                $("#nav").find('a').removeClass('current');
                $("#nav").find('a[href="' + linkto + '"]').addClass('current');




                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                        scrollTop: targetOffset - 100
                    }, 1000);
                    return false;
                }
            }
        });
    });

	$(function() {
	
		var elementToRotate = $('.row-1 img');
		var degreeOfRotation = 10;

		var deg = degreeOfRotation;
		var deg2radians = Math.PI * 2 / 360;
		var rad = deg * deg2radians ;
		var costheta = Math.cos(rad);
		var sintheta = Math.sin(rad);

		var m11 = costheta;
		var m12 = -sintheta;
		var m21 = sintheta;
		var m22 = costheta;
		var matrixValues = 'M11=' + m11 + ', M12='+ m12 +', M21='+ m21 +', M22='+ m22;
		rotate(3);
		function rotate(degree) {
			elementToRotate.css('-webkit-transform','rotate('+degree+'deg)')
			.css('-moz-transform','rotate('+degree+'deg)')
			.css('-ms-transform','rotate('+degree+'deg)')
			.css('transform','rotate('+degree+'deg)')
			.css('filter', 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\','+matrixValues+')')
			.css('-ms-filter', 'progid:DXImageTransform.Microsoft.Matrix(SizingMethod=\'auto expand\','+matrixValues+')');
			
			// Animate rotation with a recursive call
			if(degree<=360){
				setTimeout(function() { rotate(++degree+2); },1);
			}
		}
	
	});

    $(function ()
    {
        $('.p-arrow a[href^=#]').click(function ()
        {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname)
            {

                var $target = $(this.hash);

                var linkto = $target.selector;
                $("#nav").find('a').removeClass('current');
                $("#nav").find('a[href="' + linkto + '"]').addClass('current');




                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

                if ($target.length)
                {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                        scrollTop: targetOffset - 100
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /*Smooth Scroll Function*/



    /*Work Process UL*/
    $(".div-workballs ul .li-item1").hover(

    function () {
        $(this).addClass("hovereffect");

        $(".div-workballs ul .li-item2").removeClass("hovereffect");
        $(".div-workballs ul .li-item3").removeClass("hovereffect");
        $(".div-workballs ul .li-item4").removeClass("hovereffect");
        $(".div-workballs ul .li-item5").removeClass("hovereffect");


        $(".div-workdesc.work-item1").show();

        $(".div-workdesc.work-item2").hide();
        $(".div-workdesc.work-item3").hide();
        $(".div-workdesc.work-item4").hide();
        $(".div-workdesc.work-item5").hide();
    });

    $(".div-workballs ul .li-item2").hover(

    function () {

        $(this).addClass("hovereffect");

        $(".div-workballs ul .li-item1").removeClass("hovereffect");
        $(".div-workballs ul .li-item3").removeClass("hovereffect");
        $(".div-workballs ul .li-item4").removeClass("hovereffect");
        $(".div-workballs ul .li-item5").removeClass("hovereffect");


        $(".div-workdesc.work-item2").show();

        $(".div-workdesc.work-item1").hide();
        $(".div-workdesc.work-item3").hide();
        $(".div-workdesc.work-item4").hide();
        $(".div-workdesc.work-item5").hide();

    });

    $(".div-workballs ul .li-item3").hover(

    function () {
        $(this).addClass("hovereffect");

        $(".div-workballs ul .li-item1").removeClass("hovereffect");
        $(".div-workballs ul .li-item2").removeClass("hovereffect");
        $(".div-workballs ul .li-item4").removeClass("hovereffect");
        $(".div-workballs ul .li-item5").removeClass("hovereffect");


        $(".div-workdesc.work-item3").show();

        $(".div-workdesc.work-item1").hide();
        $(".div-workdesc.work-item2").hide();
        $(".div-workdesc.work-item4").hide();
        $(".div-workdesc.work-item5").hide();

    });

    $(".div-workballs ul .li-item4").hover(

    function () {

        $(this).addClass("hovereffect");

        $(".div-workballs ul .li-item1").removeClass("hovereffect");
        $(".div-workballs ul .li-item2").removeClass("hovereffect");
        $(".div-workballs ul .li-item3").removeClass("hovereffect");
        $(".div-workballs ul .li-item5").removeClass("hovereffect");


        $(".div-workdesc.work-item4").show();

        $(".div-workdesc.work-item1").hide();
        $(".div-workdesc.work-item2").hide();
        $(".div-workdesc.work-item3").hide();
        $(".div-workdesc.work-item5").hide();

    });


    $(".div-workballs ul .li-item5").hover(

    function () {

        $(this).addClass("hovereffect");

        $(".div-workballs ul .li-item1").removeClass("hovereffect");
        $(".div-workballs ul .li-item2").removeClass("hovereffect");
        $(".div-workballs ul .li-item3").removeClass("hovereffect");
        $(".div-workballs ul .li-item4").removeClass("hovereffect");


        $(".div-workdesc.work-item5").show();

        $(".div-workdesc.work-item1").hide();
        $(".div-workdesc.work-item2").hide();
        $(".div-workdesc.work-item3").hide();
        $(".div-workdesc.work-item4").hide();

    });

    /*Work Process UL*/



    /*Portfoio filter*/

    $(document).ready(function () {

        // Blur images on mouse over
        $(".portfolio a").hover(function () {
            $(this).children("img").animate({
                opacity: 0.75
            }, "fast");
        }, function () {
            $(this).children("img").animate({
                opacity: 1.0
            }, "slow");
        });
		/* Descoment
        $('.item a').click(function () {
			var $workLoad = ('ajax/'+$(this).attr('href')+'.html').replace("#", "");
			alert($workLoad);
			var $scrollPosition = $(window).scrollTop();
			$('.overlay .content').load($workLoad , function() {
				$(document).bind('mousewheel DOMMouseScroll',function(){ 
					//$(window).scrollTop($scrollPosition);
				});
				$('.overlay').fadeIn();
			});
			
			$('.close').click(function () {
				$('.header').css('z-index','9999')
				//$(window).scrollTop($scrollPosition);
				$('.overlay').fadeOut();
				$('.lb-overlay-wrapper').remove();
			});
		});
		$('.thumbnails img').live({
			mouseover: function() {
				var $srcImage = $(this).attr('src');
				$('.big-image').attr('src',$srcImage);
			}
		});
		*/
        // Clone portfolio items to get a second collection for Quicksand plugin
        var $portfolioClone = $(".portfolio").clone();

        // Attempt to call Quicksand on every click event handler
        $(".filter a").click(function (e) {

            $(".filter li").removeClass("current");

            // Get the class attribute value of the clicked link
            var $filterClass = $(this).parent().attr("class");

            if ($filterClass == "all") {
                var $filteredPortfolio = $portfolioClone.find("li");
            } else {
                var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
            }

            // Call quicksand
            $(".portfolio").quicksand($filteredPortfolio, {
                duration: 800,
                easing: 'easeInOutQuad'
            }, function () {

                // Blur newly cloned portfolio items on mouse over and apply prettyPhoto
                $(".portfolio a").hover(function () {
                    $(this).children("img").animate({
                        opacity: 0.75
                    }, "fast");
                }, function () {
                    $(this).children("img").animate({
                        opacity: 1.0
                    }, "slow");
                });
				
            });


            $(this).parent().addClass("current");

            // Prevent the browser jump to the link anchor
            e.preventDefault();
        })
    });

    /*Portfoio filter*/


});