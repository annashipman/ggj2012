private var xdis: float = 0.0;
private var ydis: float = 0.0;
public var decay: float = 1.001;
public var scale: float =  0.95;

function Update () {

}

function OnTriggerStay (other : Collider) {
if (other.attachedRigidbody){
if(other.name == "Snake"){
//------
//-------------------------------------
var inertia: float = 1.001;
var	k: float = 0.95;
//-------------------------------------
//------
var diffx: float = -other.transform.position.x+transform.position.x;
var diffy: float = -other.transform.position.y+transform.position.y;
xdis = xdis* inertia + diffx*k;//(xdis-diffx)*0.1;
ydis = ydis* inertia + diffy*k;
if(ydis> 10) ydis = 10;
if(xdis> 10) xdis = 10;
other.rigidbody.velocity.y = ydis;
other.rigidbody.velocity.x = xdis;
}
}
}

