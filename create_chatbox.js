//creating iframes per click --- id of each iframe is stored in an array
var colorlist=["purple","green","blue","orange","pink","black","gray","yellow","red"];

function create_chatbox(id){
	    var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "chatbox.html");
        ifrm.setAttribute("name", "Frame_"+id);
        ifrm.setAttribute("height","300px");
        ifrm.setAttribute("scrolling","no");
        ifrm.style.borderTop=("20px solid " + getcolor());
         ifrm.setAttribute("framebordor","0");
        document.body.appendChild(ifrm);
        return "frame"+id;
}

function getcolor(){
	var random = Math.floor(Math.random() * colorlist.length);
	return colorlist[random];
}
