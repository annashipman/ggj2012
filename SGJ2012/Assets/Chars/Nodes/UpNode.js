public var intenst: float = 10.5;

function Update () {
}

function OnTriggerStay (other : Collider) {
if (other.attachedRigidbody){
if(other.name == "Snake"){
other.rigidbody.velocity.y = intenst;
}
}
}
