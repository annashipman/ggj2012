public var levenum = 0;
public var cam;
public var snake: GameObject;
public var blocks : GameObject[] = new GameObject[20];
private var levels: Transform[] = new Transform[100];
private var privateBlocks : GameObject[] = new GameObject[20];

function Start(){
cam = Camera.main;


for (var i : int = 0;i < 10; i++) {
//how to generate a new game object when it reaches 
privateBlocks[i] = Instantiate (blocks[0], Vector3(i * 2.0, 0, 0), Quaternion.identity);
}

	
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



