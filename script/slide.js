$("header li").click(function() {
	console.log($("div").eq(1).offset());
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
}
$("main").scroll(scrollMain);
for(let i=0;i<$(".slider").length;i++) {
	if($(".slider").get(i).scrollWidth<=$(window).width()) {
		$(".avant").eq(i).remove();
		$(".apres").eq(i).remove();
	}
}
let posSlider=[0,0], wSlide;
wSlide=$(".slider").get(0).scrollWidth;
$("#s3 > button, #s4 > button").click(function() {
	let iAft=$(".apres").index($(this)), iBef=$(".avant").index($(this));
	if($(this).hasClass("apres")) {
		if(posSlider[iAft]<=-wSlide+$(window).width()) {
			posSlider[iAft]=-wSlide+$(window).width();
		}
		else {
			posSlider[iAft]-=$(window).width()/3;
		}
	}
	else {
		if(posSlider[iBef]>=0) {
			posSlider[iBef]=0;
		}
		else {
			posSlider[iBef]+=$(window).width()/3;
		}
	}
	$(".slider").eq(iBef).css("transform",`translateX(${posSlider[iBef]}px)`);
	$(".slider").eq(iAft).css("transform",`translateX(${posSlider[iAft]}px)`);
})