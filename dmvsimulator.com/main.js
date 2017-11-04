var stages = [
	{
		"phrase" : "Welcome to the DMV Simulator!",
		"options" : ["Start Simulator"]
	},
	{
		"phrase" : "Currently on Lunch break",
		"options" : []
	},
	{
		"phrase" : "What are you here for today?",
		"options" : ["Renew license", "Take driving test", "Say hi to us" ]
	},
	{
		"phrase" : "We are Currently busy, please wait",
		"options" : []
	},
	{
		"phrase" : "We are closed due to National Puppy Day, please come by tomorrow",
		"options" : []
	},
	{
		"phrase" : "We are closed due to National Twilight Zone Day, please come by tomorrow",
		"options" : []
	},
	{
		"phrase" : "We are closed due to National Eat Your Vegetables Day, please come by tomorrow",
		"options" : []
	},
	{
		"phrase" : "We are closed due to National Dog Appreciation Day, please come by tomorrow",
		"options" : []
	},
	{
		"phrase" : "Please tell us how our current service has been",
		"options" : ["Good", "Spectacular", "The best", "10/10 would be force to go to again"]
	},
	{
		"phrase" : "Are you experiencing any issues",
		"options" : ["No", "More no"]
	},
	{
		"phrase" : "You are in the wrong line, please stand in the other line",
		"options" : []
	},
	{
		"phrase" : "I decided to taka a break, please wait",
		"options" : []
	},
	{
		"phrase" : "We are closing in an hour and not going to fit your question in",
		"options" : []
	},
	{
		"phrase" : "Please verify your citizenship by giving color of flag",
		"options" : ["Green/Yello/Red", "Blue/Blu/Blew", "White/Pink/Red"]
	}
]

var warningPhrase = [
	"Please wait patiently!",
	"Stop poking around!",
	"We said wait!",
	"Budging in line gets you no where",
	"Please stop!",
	"Keep this action up and we will kick you out"
]

var stage = 0;
function loadToggle(on) {
	if (on) {
		loader.style.display = "block";
	} else {
		loader.style.display = "none";
	}

}

function nextStage() {	
	stage = Math.floor(Math.random() * stages.length);
	options.innerHTML = ""; // clear
	
	phrase.innerText = stages[stage].phrase;
	if (stages[stage].options.length > 0) {
		loadToggle(false);
		for (var i = 0; i < stages[stage].options.length; i++) {
			options.innerHTML += "<button style='margin-right: 15px' onclick='nextStage()'>" + stages[stage].options[i] + "</button>";
		}
	} else {
		loadToggle(true);
		setTimeout(function(){ nextStage(); }, 6000);
	}

}

function annoy() {
	warnings.innerHTML = warningPhrase[Math.floor(Math.random() * warningPhrase.length)];
	setTimeout(function(){ warnings.innerHTML = ""; }, 2000);
}

var phrase;
var warnings;
var options;
var loader;

function init() {
	phrase = document.getElementById("phrase");
	warnings = document.getElementById("warnings");
	options = document.getElementById("options");
	loader = document.getElementById("loader");
	loadToggle(false);

	phrase.innerText = stages[0].phrase;
	options.innerHTML = "<button onclick='nextStage()'>" + stages[0].options + "</button>";
}
