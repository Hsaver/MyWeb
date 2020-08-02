var faces = document.querySelectorAll(".cubeFace");
for (var i = 0; i < faces.length; i++) {
	for(var r = 0; r<3; r++){
		for(var c = 0; c<3; c++){
			var divs = document.createElement("div");
			divs.style.cssText = "width:100px;height:100px;border:2px solid #fff;box-sizing:border-box;position:absolute;background-image:url(images/"+i+".jpg);background-size:300px 300px;";
			faces[i].appendChild(divs);
			divs.style.left = c*100+"px";
			divs.style.top = r*100+"px";
			divs.style.backgroundPositionX = -c*100+"px";
			divs.style.backgroundPositionY = -r*100+"px";
		}
	}
}