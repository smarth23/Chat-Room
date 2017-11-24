//store frames in an array
var frame_index=[];
var click_count=0;
var iFrameValue;
var trigger;
var Parentdata;
var broadcast;
var fromframe;
//add button to main window
var Adbutton = document.createElement("button");
Adbutton.innerHTML = "+";
Adbutton.className="ADD_button"

var main_window = document.getElementsByTagName("body")[0];
main_window.appendChild(Adbutton);

//butten event lister
Adbutton.addEventListener("click",function(){
	click_count=click_count+1;
	frame_index.push(create_chatbox(click_count));
	setTimeout(intromsg, 100);

})

//event listner for msg from frames
$(window).on('message', receiveMessage);

function receiveMessage(e) {
	 fromframe=e.originalEvent.data;		
	 console.log("Message:" + fromframe);

	  for(var i=0;i<frame_index.length;i++){
	  		window.frames[i].postMessage(fromframe,'*');
	 }
}



//intro message from system to frist frame
function intromsg(){
	if(click_count===1){
		window.frames[0].postMessage('[System]: Welcome to Dynamic Chat Room','*');
	}
	else{
		for(var i=0;i<click_count-1;i++)
		window.frames[i].postMessage("[System]:Frame_"+click_count+" Joined the conversation","*");
	}
}



