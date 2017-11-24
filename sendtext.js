//dec
var b_text;
// var todotext;
function callback(){
	todotext = $("#textinbox").val();
	$("#textinbox").val("");
	// $('ul').append("<li>"+todotext+"</li>");
	// window.top.Parentdata = todotext;
	var sender = window.name;
	window.parent.postMessage("["+sender+"]"+": "+todotext,'*');
	window.top.trigger =1;


}
//click to send
$("#sendtext").click(function(){
	if($("input[type='text']").val() != ""){
	callback();	
}
});

//keypress to send 
$("input[type='text']").keypress(function(event){
	if($("input[type='text']").val() != ""){
		if(event.which===13){
			callback();
	}
}
});

//broadcasting to each frame
(function(){
$(window).on('message', broadcastmsg);

function broadcastmsg(e) {
	b_text=e.originalEvent.data;
	console.log("parents:" + b_text);
	$('ul').append("<li>"+ b_text +"</li>" );
	$('ul').animate({scrollTop: $('ul').prop("scrollHeight")}, 500);

}
})();