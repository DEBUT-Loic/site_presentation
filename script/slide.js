$("header li").click(function() {
	$("header li").css({background:"white",color:"black"});
	$(this).css({background:"black",color:"white"});
})

function scrollMain() {
	for(let i=0;i<$("main > section").length;i++) {
		if($("main > section").eq(i).offset().top==0) {
			$("header li").css({background:"white",color:"black"});
			$("header li").eq(i).css({background:"black",color:"white"});
		}
	}

	if(($("#s2").offset().top==0 || $("#s3").offset().top==0 || $("#s4").offset().top==0)&& $("link").eq($("link").length-1).attr("href")!="style/cathodique.css") {
		setTimeout(function() {
			$("head").append('<link rel="stylesheet" href="style/cathodique.css">');
		},220);
	}
}


$("main").scroll(scrollMain);
for(let i=0;i<$(".slider").length;i++) {
	if($(".slider").get(i).scrollWidth<=$(window).width()) {
		$(".avant").eq(i).remove();
		$(".apres").eq(i).remove();
	}
}

// Slider
let posSlider=[0,0], wSlide, finSlide=[0,0], totalSlides;
finSlide[0]=-$(window).width();
finSlide[1]=-$(window).width();
$("#s3 button, #s4 button").click(function() {
	let iAft=$(".apres").index($(this)), iBef=$(".avant").index($(this));

	if($(this).parents("section").attr("id")=="s3") {
		wSlide=$(".slider > div:first-child").get(0).scrollWidth*-1;
		totalSlides=wSlide*$(".slider > .cardBox").length;
	}
	else {
		wSlide=$(".slider > div:first-child").get(1).scrollWidth*-1;
		totalSlides=wSlide*$(".slider > .card").length;
		console.log("test")
	}

	if($(this).hasClass("apres")) {
		if(finSlide[iAft]>totalSlides) {
			posSlider[iAft]+=wSlide;
			finSlide[iAft]+=wSlide;
		}
	}
	else {
		if(posSlider[iBef]>=0) {
			posSlider[iBef]=0;
		}
		else {
			posSlider[iBef]-=wSlide;
			finSlide[iBef]-=wSlide;
		}
	}
	
	$(".slider").eq(iBef).css("transform",`translateX(${posSlider[iBef]}px)`);
	$(".slider").eq(iAft).css("transform",`translateX(${posSlider[iAft]}px)`);
})