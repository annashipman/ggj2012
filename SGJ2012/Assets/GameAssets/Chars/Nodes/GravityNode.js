private var xdis: float = 0.0;
private var ydis: float = 0.0;
public var decay: float = 1.001;
public var scale: float =  0.95;
public var inside: GameObject;
private var startpos: Vector3;
private var holding: int = 10;
function Start(){
startpos = transform.position;
}

function Update () {
if(holding<0){
inside.transform.position = Vector3.Lerp(inside.transform.position, startpos,Time.deltaTime * 5);
}else{
holding--;
}

}

function OnTriggerStay (other : Collider) {
if (other.attachedRigidbody){
if(other.name == "Snake"){
holding = 10;
//------
//-------------------------------------
var inertia: float = 1.02;
var	k: float = 0.9;
//-------------------------------------
//------
var diffx: float = -other.transform.position.x+startpos.x;
var diffy: float = -other.transform.position.y+startpos.y;
xdis = xdis* inertia + diffx*k;//(xdis-diffx)*0.1;
ydis = ydis* inertia + diffy*k;
if(ydis> 10) ydis = 10;
if(xdis> 10) xdis = 10;
other.rigidbody.velocity.y = ydis;
other.rigidbody.velocity.x = xdis+10;
inside.transform.position = other.transform.position;

}


}
}

