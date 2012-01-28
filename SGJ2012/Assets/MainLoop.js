//@script ExecuteInEditMode();
public var levenum = 0;
public var cam;
public var snake: GameObject;
public var blocks : GameObject[] = new GameObject[20];
private var levels: Transform[] = new Transform[100];
private var privateBlocks : GameObject[] = new GameObject[200];
private var endBlock : int;
private var newBlockTrigger : int;
private var blockCounter : int;

function Start(){
cam = Camera.main;
Debug.Log(blocks[0]);
for (var i : int = 1;i < 3; i++) {
var groundBlock = Instantiate (this.blocks[i], Vector3((i * 10.0), -6.0, 0), Quaternion.identity);
privateBlocks[i] = groundBlock;
this.endBlock = i;
this.blockCounter = i;
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
		//reset new block trigger
		this.newBlockTrigger = this.newBlockTrigger + 10;
		
		//get the x of the current block
		Debug.Log(this.endBlock);
		//update the block to instantiate
		if (this.endBlock < 9) {
		Debug.Log("updating");
		this.endBlock = this.endBlock + 1;
		} else {
		Debug.Log("9");
		this.endBlock = 0;
		}
		//update block counter
		this.blockCounter = this.blockCounter + 1;
		Debug.Log(this.blockCounter);
		//Instantiate the end block
		
		//Clones the object original, places it at position and sets the rotation to rotation,
		//Original object is the first block in the array (?) position is 10 to the right of the 
		//previous one, rotation is Quaternion.idenitity, i.e. no rotation - the object 
		//then returns the cloned object. 
		var groundBlock = Instantiate (this.blocks[this.endBlock], Vector3((this.blockCounter * 10.0), -6.0, 0), Quaternion.identity);
		//then add the new block to the private blocks array	
		privateBlocks[this.endBlock] = groundBlock;
	
		//then destroy the first block - really? we might need it again!
		//uninstantiate?
		//or can destroy as it's a prefab?
		//Destroy(privateBlocks[leftBlock]);
}
}



