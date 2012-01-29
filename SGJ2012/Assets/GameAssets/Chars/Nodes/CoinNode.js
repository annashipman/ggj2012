#pragma strict

function Update () {
}
function OnTriggerStay (other : Collider) {
if (other.attachedRigidbody){
if(other.name == "Snake"){
var mlh: GameObject = GameObject.Find("MainLoopHolder");
var ml : MainLoop = mlh.GetComponent(MainLoop);
//ml.gotaCoin();

Destroy(gameObject);

}
}
}
