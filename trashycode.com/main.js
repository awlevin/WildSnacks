
function init() {
	for(i = 0; i < 5; ++i){
		img_create("Blue_planet_pose.png", i);
		img_create("harold.jpg", i);
		img_create("harold2.png", i);
		img_create("Mojojojo.png", i);
		img_create("ouch.png", i);
		img_create("plunger.jpg", i);
		img_create("sweet.jpg", i);
	}
	var player = document.createElement('dino');
	document.body.append(player);
	player.src = "assets/dino.png";
	

}

function img_create(src, c) {
    var img = document.createElement('img');
    document.body.append(img);
    img.src = "assets/" + src;
    img.style.position = "absolute";
    img.style.left =  Math.floor(Math.random() * window.innerWidth) + "px";
    img.style.top =  Math.floor(Math.random() * window.innerHeight) + "px";
    img.style.width = "10%";
    img.style.height = "auto";
    switch(c){
    	case(0):
    		img.classList.add("img2");
    		break;
    	case(1):
    		img.classList.add("img3");
    		break;
    	case(2):
    		img.classList.add("img4");
    		break;
    	case(3):
    		img.classList.add("img5")
    		break;
    	case(4):
    		img.classList.add("img2")
    		break;
   		default:
   			img.classList.add("img2")
   			break;

    }
    return img;
}