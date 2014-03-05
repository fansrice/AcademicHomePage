
$(document).ready(function(){
	
	
    var paper = new Raphael(document.getElementById('canvas_container'), 390, 160);
	//params
	t = 700;
	td1 = 600;
	td = 500;

	//draw lines
	var outline = paper.path("M0 45L0 160L390 160L390 45L0 45M130 55L130 150M260 150L260 55").attr({"stroke":"#ccc","stroke-width":"1"});
	var liney = paper.path("M20 140L65 65L65 140M65 65L110 140").attr({"stroke":"#666","stroke-width":"1"});
	var linea = paper.path("M150 140L168 65L195 140L222 65L240 140M222 65L168 65").attr({"stroke":"#666","stroke-width":"1"});
	var lineo = paper.path("M280 65L280 110L325 140L370 110L370 65L325 100L280 65").attr({"stroke":"#666","stroke-width":"1"});
	//draw circles
    var circley1 = paper.circle(65,140, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circley2 = paper.circle(65,65, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circley3 = paper.circle(20,140, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circley4 = paper.circle(110,140, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	
	var circlea1 = paper.circle(150,140, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circlea2 = paper.circle(168,65, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circlea3 = paper.circle(195,140, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circlea4 = paper.circle(222,65, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circlea5 = paper.circle(240,140, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	
	var circleo1 = paper.circle(280,65, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circleo2 = paper.circle(280,110, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circleo3 = paper.circle(325,140, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circleo4 = paper.circle(370,110, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circleo5 = paper.circle(370,65, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});
	var circleo6 = paper.circle(325,100, 12).attr({"stroke":"#666","stroke-width":"1","fill":"white","fill-opacity":"1"});

	
	var base = paper.rect(0,0,390,160).attr({"fill":"black","stroke":"none","fill-opacity":"0"});
	/*function allup(){
		var animLineyStrech = Raphael.animation({path:"M20 20L65 65L65 140M65 65L110 20"},t,'elastic');
		var animLineaStrech = Raphael.animation({path:"M150 140L171 84L195 20L219 84L240 140M219 84L171 84"},t,'elastic');
		liney.animate(animLineyStrech);
		linea.animate(animLineaStrech);
		circley3.animate({cy:20},t,'elastic');
		circley4.animate({cy:20},t,'elastic');
		circlea2.animate({cx:171,cy:84,r:11},t,'elastic');
		circlea3.animate({cx:195,cy:20,r:10},t,'elastic');
		circlea4.animate({cx:219,cy:84,r:11},t,'elastic');
	
	}
	function alldown(){
		var animLineyShrink = Raphael.animation({path:"M20 140L65 65L65 140M65 65L110 140"},t,'elastic');
		var animLineaShrink = Raphael.animation({path:"M150 140L168 65L195 140L222 65L240 140M222 65L168 65"},t,'elastic');
		liney.animate(animLineyShrink);
		linea.animate(animLineaShrink);
		circley3.animate({cy:140},t,'elastic');
		circley4.animate({cy:140},t,'elastic');
		circlea2.animate({cx:168,cy:65,r:12},t,'elastic');
		circlea3.animate({cx:195,cy:140,r:12},t,'elastic');
		circlea4.animate({cx:222,cy:65,r:12},t,'elastic');
		
	}*/
	
	    var mouseover = function(){
		var animLineyStrech = Raphael.animation({path:"M20 20L65 65L65 140M65 65L110 20"},t,'elastic');
		var animLineaStrech = Raphael.animation({path:"M150 140L171 84L195 20L219 84L240 140M219 84L171 84"},t,'elastic');
		var animLineoStrech = Raphael.animation({path:"M280 65L280 110L325 140L370 110L370 50L325 20L280 50L280 65"},t,'elastic');
		var animOutlineStrech = Raphael.animation({path:"M0 0L0 160L390 160L390 0L0 0M130 10L130 150M260 150L260 10"},t,'elastic');
		var animrto0 = Raphael.animation({r:0},t,'easeIn');
		liney.animate(animLineyStrech);
		linea.animate(animLineaStrech);
		lineo.animate(animLineoStrech);
		outline.animate(animOutlineStrech);
		circley3.animate({cy:20},t,'elastic');
		circley3.animate(animrto0);
		circley4.animate({cy:20},t,'elastic');
		circley4.animate(animrto0);
		circley1.animate(animrto0);
		circley2.animate(animrto0);
		
		circlea2.animate({cx:171,cy:84},t,'elastic');
		circlea2.animate(animrto0);
		circlea3.animate({cx:195,cy:20},t,'elastic');
		circlea3.animate(animrto0);
		circlea4.animate({cx:219,cy:84},t,'elastic');
		circlea4.animate(animrto0);
		circlea1.animate(animrto0);
		circlea5.animate(animrto0);
		
		circleo1.animate({cy:50},t,'elastic');
		circleo1.animate(animrto0);
		circleo2.animate({cy:110},t,'elastic');
		circleo2.animate(animrto0);
		circleo3.animate(animrto0);
		circleo4.animate({cy:110},t,'elastic');
		circleo4.animate(animrto0);
		circleo5.animate({cy:50},t,'elastic');
		circleo5.animate(animrto0);
		circleo6.animate({cy:20},t,'elastic');
		circleo6.animate(animrto0);
		
	
	}
	    var mouseout=function(){
		var animLineyShrink = Raphael.animation({path:"M20 140L65 65L65 140M65 65L110 140"},t,'elastic');
		var animLineaShrink = Raphael.animation({path:"M150 140L168 65L195 140L222 65L240 140M222 65L168 65"},t,'elastic');
		var animLineoShrink = Raphael.animation({path:"M280 65L280 110L325 140L370 110L370 65L325 100L280 65"},t,'elastic');
		var animOutlineShrink = Raphael.animation({path:"M0 45L0 160L390 160L390 45L0 45M130 55L130 150M260 150L260 55"},t,'elastic');
		liney.animate(animLineyShrink);
		linea.animate(animLineaShrink);
		lineo.animate(animLineoShrink);
		outline.animate(animOutlineShrink);
		
		circley1.animate({r:12},t,'elastic');
		circley2.animate({r:12},t,'elastic');
		circley3.animate({cy:140,r:12},t,'elastic');
		circley4.animate({cy:140,r:12},t,'elastic');
		
		circlea1.animate({cx:150,cy:140,r:12},t,'elastic');
		circlea2.animate({cx:168,cy:65,r:12},t,'elastic');
		circlea3.animate({cx:195,cy:140,r:12},t,'elastic');
		circlea4.animate({cx:222,cy:65,r:12},t,'elastic');
		circlea5.animate({cx:240,cy:140,r:12},t,'elastic');
		
		circleo1.animate({cy:65,r:12},t,'elastic');
		circleo2.animate({cy:110,r:12},t,'elastic');
		circleo3.animate({r:12},t,'elastic');
		circleo4.animate({cy:110,r:12},t,'elastic');
		circleo5.animate({cy:65,r:12},t,'elastic');
		circleo6.animate({cy:100,r:12},t,'elastic');
		
	}
	base.hover(mouseover,mouseout);
	
	
	//..
	$('#menu1,#menu2,#menu3').click(function(){
	  $('#stuff').slideUp(800);
	var animLineyStrech = Raphael.animation({path:"M20 20L65 65L65 140M65 65L110 20"},t,'elastic');
	var animLineaStrech = Raphael.animation({path:"M150 140L171 84L195 20L219 84L240 140M219 84L171 84"},t,'elastic');
	var animLineoStrech = Raphael.animation({path:"M280 65L280 110L325 140L370 110L370 50L325 20L280 50L280 65"},t,'elastic');
	var animOutlineStrech = Raphael.animation({path:"M0 0L0 160L390 160L390 0L0 0M130 10L130 150M260 150L260 10"},t,'elastic');
	var animrto0 = Raphael.animation({r:4,'fill':'#999'},t,'easeIn');
	liney.animate(animLineyStrech);
	linea.animate(animLineaStrech);
	lineo.animate(animLineoStrech);
	outline.animate(animOutlineStrech);
	circley3.animate({cy:20},t,'elastic',function(){
		circley3.animate(animrto0);
	});
	circley4.animate({cy:20},t,'elastic',function(){
		circley4.animate(animrto0);
	});
	circley1.animate(animrto0.delay(t));
	circley2.animate(animrto0.delay(t));
	
	circlea2.animate({cx:171,cy:84},t,'elastic');
	circlea2.animate(animrto0.delay(td1));
	circlea3.animate({cx:195,cy:20},t,'elastic');
	circlea3.animate(animrto0.delay(td1));
	circlea4.animate({cx:219,cy:84},t,'elastic');
	circlea4.animate(animrto0.delay(td1));
	circlea1.animate(animrto0.delay(td1));
	circlea5.animate(animrto0.delay(td1));
	
	circleo1.animate({cy:50},t,'elastic');
	circleo1.animate(animrto0.delay(td));
	circleo2.animate({cy:110},t,'elastic');
	circleo2.animate(animrto0.delay(td));
	circleo3.animate(animrto0.delay(td));
	circleo4.animate({cy:110},t,'elastic');
	circleo4.animate(animrto0.delay(td));
	circleo5.animate({cy:50},t,'elastic');
	circleo5.animate(animrto0.delay(td));
	circleo6.animate({cy:20},t,'elastic');
	circleo6.animate(animrto0.delay(td));
	base.unmouseover(mouseover);
	base.unmouseout(mouseout);
	});
	
	$('#menu1').click(function(){
		$('#canvas_container').slideDown(500);
		$('div#moto').slideUp(500);
		$('#container2').hide();
		$('#container3').hide();
		$('#container1').fadeIn(800);
		$('#nav').css('border-bottom','none');
	});
	
	$('#menu2').click(function(){
		$('#canvas_container').slideDown(500);
		$('div#moto').slideUp(500);
		$('#container1').hide();
		$('#container3').hide();
		$('#container2').fadeIn(800);
		$('#nav').css('border-bottom','none');
	});
	
	$('#menu3').click(function(){
		$('#container1').hide();
		$('#container2').hide();
		$('div#moto').slideUp(500);
		$('#canvas_container').slideUp(500);
		$('div#stuff').css("height","65px").slideDown(500);
		$('#container3').fadeIn(800);
		$("#works").children().slideDown(500);
		$('#nav').css('border-bottom','none');
	});
	
	$('#category').change(function() {
	    var cat = this.value;
		if(cat=='all'){
			$("#works").children().slideDown(500);
		}
	    $("."+cat).slideDown(500);
		$("."+cat).siblings().not("."+cat).slideUp(500);
	});
	
	function fixNav() {
	  var $cache = $('#nav'); 
	  if ($(window).scrollTop() > 65) 
	    $cache.css({'position': 'fixed', 'top': '0px','z-index':5}); 
	
	  else
	    $cache.css({'position': 'relative', 'top': 'auto'});
	}
	$(window).scroll(fixNav);
	fixNav();
	
	
	
})




