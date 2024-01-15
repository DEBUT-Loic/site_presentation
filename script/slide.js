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

	console.log($("link").attr("href"))
	if($("#s2").offset().top==0 && $("link").eq($("link").length-1).attr("href")!="style/cathodique.css") {
		console.log("le chien")
		$("head").append('<link rel="stylesheet" href="style/cathodique.css">');
	}
}


$("main").scroll(scrollMain);
for(let i=0;i<$(".slider").length;i++) {
	if($(".slider").get(i).scrollWidth<=$(window).width()) {
		$(".avant").eq(i).remove();
		$(".apres").eq(i).remove();
	}
}
let posSlider=[0,0], wSlide, finSlide=[0,0], totalSlides;
finSlide[0]=-$(window).width();
finSlide[1]=-$(window).width();

$("#s3 > button, #s4 > button").click(function() {
	let iAft=$(".apres").index($(this)), iBef=$(".avant").index($(this));

	if($(this).parent().attr("id")=="s3") {
		wSlide=$(".slider > div:first-child").get(0).scrollWidth*-1;
		totalSlides=wSlide*$(".slider > .cardBox").length;
	}
	else {
		wSlide=$(".slider > div:first-child").get(1).scrollWidth*-1;
		totalSlides=wSlide*$(".slider > .card").length;
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