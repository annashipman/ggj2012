//@script ExecuteInEditMode();
public var levenum = 0;
public var cam;
public var snake: GameObject;
public var blocks : GameObject[] = new GameObject[36];
private var levels: Transform[] = new Transform[100];
private var privateBlocks : GameObject[] = new GameObject[200];
private var endBlock : int;
private var newBlockTrigger : int;
private var blockCounter : int;

function Start(){
cam = Camera.main;
Debug.Log(blocks[0]);
for (var i : int = 0;i < 3; i++) {
var groundBlock = Instantiate (this.blocks[i], Vector3((i * 10.0), -6.0, 0), Quaternion.identity);
privateBlocks[i] = groundBlock;
this.endBlock = i;
this.blockCounter = i;
}

this.newBlockTrigger = 10;

	
}
	
function Update () {
///camera posistion!!!!!!!
var nepos: Vector3 = snake.transform.position;
nepos.z -= 15.0;
nepos.y += 1.0;
if(nepos.x < cam.transform.position.x)nepos.x = cam.transform.position.x;
cam.transform.position = Vector3.Lerp(cam.transform.position, nepos, (Time.time - 0.6) / 1.0);
var snakeOff: float = (snake.transform.position.x-cam.transform.position.x);
if(snakeOff<-11){
//do some kill the snake code here??????
}
//Debug.Log(snake.transform.position.x-cam.transform.position.x);//<-11.0
//figure out if we are reaching the edge of the screen
//if the snake x has got past halfway through the 3rd block
if (snake.transform.position.x > this.newBlockTrigger ){
		//reset new block trigger
		this.newBlockTrigger = this.newBlockTrigger + 10;
		
		//get the x of the current block
		//update the block to instantiate
		if (this.endBlock < 35) {
		this.endBlock = this.endBlock + 1;
		} else {
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
		var blockToRemove = this.blockCounter - 5;
		Destroy(privateBlocks[(blockToRemove)]);
		var music : GameObject;
// This will return the game object named Hand in the scene.
		music = GameObject.Find("MusicContainr");
		var musc: SoundCnt = music.GetComponent(SoundCnt);
		musc.Levelcnt(blockCounter);
		
}
}



