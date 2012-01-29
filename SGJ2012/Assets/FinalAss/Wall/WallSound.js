#pragma strict
private var maxspeed: float = 20.0;
function Start () {

}
//------------
function Update () {

}
//------------
function OnTriggerEnter (other : Collider) {
if(other.name =="Snake"){
var speedtu: float = 0.0;
var velox: float = Mathf.Abs(other.rigidbody.velocity.x);
var veloy: float = Mathf.Abs(other.rigidbody.velocity.y);
if(velox > veloy){
speedtu = velox;
}
if(velox < veloy){
speedtu = veloy;
}
if(speedtu > maxspeed)speedtu = maxspeed;
Debug.Log("speedtu"+speedtu);
audio.Play();
audio.volume = speedtu/maxspeed;

}

}
//------------