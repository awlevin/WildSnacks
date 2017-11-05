var myGamePiece;
var myObstacles = [];
var eagleSwitch;
var eagleSpeedCounter;
var eaglePiece;

function startGame() {
    myGamePiece = new component(32, 32, "red", (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 2, 120);
    eaglePiece = new eagle(32, 32);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - 100;
        this.canvas.height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 200;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false; 
        })
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.image = new Image();
    this.image.src = "assets/target.gif";
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;   
    }
    
}

function eagle(width, height ) {
    
   
    this.width = width;
    this.height = height;
    this.speedX = 2;
    this.speedY = 0;    
    this.x = 0;
    this.y = 200;
  
    eagleSpeedCounter = 0;
    eagleSwitch = 0;
    this.gravitySpeed = 0;
    this.image = new Image();
    this.image.src = "assets/eagle.gif";
    
    this.update = function() {
       
        ctx = myGameArea.context;

        if(eagleSwitch / 50 > 1) eagleSwitch = 0;
        if(eagleSwitch / 25 > 1){
            this.image.src = "assets/eagle.gif";
            
        }else{
            this.image.src = "assets/eagle2.gif";

        }
        if(eagleSpeedCounter / 40 > 1){
            eagleSpeedCounter = 0;
        }
        if(eagleSpeedCounter / 20 > 1){
            this.speedY = 2;
        }else{
            this.speedY = -2;
        }
      //  alert("Here");
        ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height);
        ++eagleSpeedCounter;
        ++eagleSwitch;
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;   
    }
    
    
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0; 
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -5; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 5; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -5; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 5; }
    if(myGameArea.keys && myGameArea.keys[32] && Math.abs(myGamePiece.x - eaglePiece.x) < 10 && Math.abs(myGamePiece.y - eaglePiece.y) ){
        document.getElementById("meme").style.display = "block";
        document.getElementById("instructions").style.display = "none";

         myGameArea.canvas.style.display = "none";
         var audio = new Audio('assets/no.mp3');
         audio.play();
                
        
    }
    eaglePiece.newPos();
    eaglePiece.update();
    myGamePiece.newPos(); 
    myGamePiece.update();
    
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0 && (eaglePiece.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function accelerate(n) {
    myGamePiece.gravity = n;
}