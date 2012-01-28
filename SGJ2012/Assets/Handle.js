#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerStay (other : Collider) {
	if (other.name == "Snake") {
		var SB : SnakeBeahv = other.GetComponent("SnakeBeahv");
		SB.JumpAndEat(other.transform.position);
		FuckOff();
	}
	
}

function FuckOff(){
	Debug.Log("Hello!");
	Destroy(gameObject);
}