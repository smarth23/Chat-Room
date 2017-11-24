(function(){
var chat_window = document.getElementById("chat-container");

var input = document.createElement("input");
input.type = "text"; 
input.id="textinbox"
input.placeholder=window.name;
input.className="text_input"
chat_window.appendChild(input);


var submitbutton = document.createElement("button");
submitbutton.type = "submit"; 
submitbutton.id="sendtext"
submitbutton.innerHTML = "Send";
submitbutton.className="Send_button"
chat_window.appendChild(submitbutton);

})();

