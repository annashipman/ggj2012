public var levenum = 0;
public var cam;
public var snake: GameObject;
public var blocks : GameObject[] = new GameObject[10];
private var levels: Transform[] = new Transform[100];
private var privateBlocks : GameObject[] = new GameObject[10];
private var mostRightBlock : int;

function Start(){
cam = Camera.main;

for (var i : int = 0;i < 3; i++) {
var groundBlock = Instantiate (this.blocks[0], Vector3((i * 10.0), -6.0, 0), Quaternion.identity);
privateBlocks[i] = groundBlock;
//mostRightBlock = i;
}

	
}
	
function Update () {
///camera posistion!!!!!!!
var nepos: Vector3 = snake.transform.position;
nepos.z -= 10.0;
cam.transform.position = Vector3.Lerp(cam.transform.position, nepos, (Time.time - 0.6) / 1.0);

///camera posistion!!!!!!!

//figure out if we are reaching the edge of the screen
if (snake.transform.position.x > 18 ){
//Debug.Log("Hello" + this.mostRightBlock);
}
}



