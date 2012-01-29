//-1
//--1
//----1
//------1
//--------1
//---------1
//-----------1
//----------how todo it!!


//-1
//-11
//-11-1
//-11-1-1
//-11-1-1-1
//-11-1-1-11
//-11-1-1-11-1
private var numberOFsnds: int = 11;
private var fade: float = 0.05;
private var AudClipsVol: float[] = new float[2];
private var AudClips:AudioSource[] = new AudioSource[2];
private var numAudClips: int = 0;
public var Aud: AudioClip[] = new AudioClip[11];
private var pos: int = 0;
private var posGrade: float[] = new float[11];
private var SoundObject: AudioSource;
private var oldlev: int = 0;
private var kindatimer: int = 0;
function Start(){  
//---------------
var SoundObject = gameObject.GetComponents(AudioSource);
AudClips[0] = SoundObject[0];
AudClips[1] = SoundObject[1];
AudClips[0].loop = true;
AudClips[1].loop = true;
//-------------
AudClipsVol[0] =1.0;
AudClipsVol[1] = 0.0;
//---------------
var i : int =0;
while(i<numberOFsnds){
posGrade[i] = 0.0;
i++;
}
AudClips[0].clip = Aud[0];
AudClips[0].Play();
}
//---
function nextClip(){
pos++;
Debug.Log("pos"+pos);
if(pos>10) pos = 0;
numAudClips++;
if(numAudClips == 2) numAudClips = 0;
AudClips[numAudClips].clip = Aud[pos];
AudClips[numAudClips].Play();
var mins: int = numAudClips-1;
if(mins <0) mins=1;
AudClips[numAudClips].Play();
AudClips[numAudClips].time = AudClips[mins].time;
}

function Levelcnt(lev:int){
var temp:float = (lev/35.0)*11.0;
var tempy: int = temp;


if(oldlev == tempy){
//do fuck all
}else{
nextClip();
oldlev = tempy;
}
}

//---
function Update(){
kindatimer++;
if(kindatimer > 200){
//nextClip();
kindatimer = 0;
}
if(pos>0){
var mins: int = numAudClips-1;
if(mins <0)mins=1;
AudClipsVol[mins] -= fade;
if(AudClipsVol[mins] < 0.0) AudClipsVol[mins] = 0.0;
AudClips[mins].volume = AudClipsVol[mins];
//----------------
AudClipsVol[numAudClips] += fade;
if(AudClipsVol[numAudClips] > 1.0) AudClipsVol[numAudClips] = 1.0;
AudClips[numAudClips].volume = AudClipsVol[numAudClips];
}




}