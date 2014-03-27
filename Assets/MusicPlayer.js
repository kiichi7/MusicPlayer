#pragma strict
private var gui_playWord : String = "Play";
var musicName : String;
var music : AudioClip;

function Start () {

	audio.clip = music;
	audio.loop = true;

}

function OnGUI () {

	GUI.Label(Rect(Screen.width/2 - 30, Screen.height/2-40,60,20),musicName);
	if (GUI.Button(Rect(Screen.width/2 - 30, Screen.height/2-10,60,20),gui_playWord)){
	
		if (audio.isPlaying) { audio.Pause(); gui_playWord = "Play";}
		else { audio.Play(); gui_playWord = "Pause";}
	
	}

}