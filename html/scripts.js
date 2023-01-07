function closeMain() {
	$("body").css("display", "none");
}
function openMain() {
	$("body").css("display", "block");
}

$(".closetypemenu").click(function(){
    $.post('http://SY_Carry/closetypeselect', JSON.stringify({}));
});

window.addEventListener('message', function (event) {
	var carry = event.data;
	if (carry.message == "showui") {
		$('#carrytype').show();
		openMain();
	}			
	
	if (item.message == "hideui") {
		closeMain();
		$('#carrytype').hide();
	}
});

$(".carry1select").click(function () {
	closeMain();
	$('#carrytype').hide();
	$.post('http://SY_Carry/selecttype', JSON.stringify({
		carrytype: "type1"
	}));
});

$(".carry2select").click(function () {
	closeMain();
	$('#carrytype').hide();
	$.post('http://SY_Carry/selecttype', JSON.stringify({
		carrytype: "type2"
	}));
});

$(".carry3select").click(function () {
	closeMain();
	$('#carrytype').hide();
	$.post('http://SY_Carry/selecttype', JSON.stringify({
		carrytype: "type3"
	}));
});