public var levenum = 0;
public var cam;
public var snake: GameObject;
private var levels: Transform[] = new Transform[100];

function Start(){
	cam = Camera.main;
	}
	
function Update () {
///camera posistion!!!!!!!
var nepos: Vector3 = snake.transform.position;
nepos.z -= 6.0;
if(nepos.y>0.0){
cam.transform.position = Vector3.Lerp(cam.transform.position, nepos, (Time.time - 0.6) / 1.0);
}
///camera posistion!!!!!!!

}

