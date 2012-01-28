//@script ExecuteInEditMode();
public var levenum = 0;
public var cam;
public var snake: GameObject;
public var blocks : GameObject[] = new GameObject[10];
private var levels: Transform[] = new Transform[100];
private var privateBlocks : GameObject[] = new GameObject[10];
private var rightBlock : int;
private var leftBlock : int;
private var newBlockTrigger : int;

function Start(){
cam = Camera.main;

for (var i : int = 0;i < 3; i++) {
var groundBlock = Instantiate (this.blocks[0], Vector3((i * 10.0), -6.0, 0), Quaternion.identity);
privateBlocks[i] = groundBlock;
this.rightBlock = i;
}

this.newBlockTrigger = 18;

	
}
	
function Update () {
///camera posistion!!!!!!!
var nepos: Vector3 = snake.transform.position;
nepos.z -= 10.0;
nepos.y += 1.0;
cam.transform.position = Vector3.Lerp(cam.transform.position, nepos, (Time.time - 0.6) / 1.0);

//figure out if we are reaching the edge of the screen
//if the snake x has got past halfway through the 3rd block
if (snake.transform.position.x > this.newBlockTrigger ){
		//give var i the index of the third block, i.e. 2
		var i = this.rightBlock;
		//increment the right block, so 3
		this.rightBlock = this.rightBlock+1; //unless it's less than 10
		//create a game object called ground block
		//Clones the object original, places it at position and sets the rotation to rotation,
		//Original object is   position is   rotation is Quaternion.identity, i.e. This quaternion corresponds to "no rotation": the object 
		//then returns the cloned object. This is essentially the same as using duplicate command 
		//(cmd-d) in Unity and then moving the object to the given location
		
		var groundBlock = Instantiate (this.blocks[leftBlock], Vector3((this.rightBlock * 10.0), -6.0, 0), Quaternion.identity);
		privateBlocks[i] = groundBlock;
		this.newBlockTrigger = this.newBlockTrigger + 10;
		this.leftBlock = this.rightBlock - 3;
		Destroy(privateBlocks[leftBlock]);
}
}



