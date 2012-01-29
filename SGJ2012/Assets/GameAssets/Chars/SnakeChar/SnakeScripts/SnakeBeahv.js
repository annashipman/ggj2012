///animation
private var colCount    : int =  8;
private var rowCount    : int =  8;
private var rowNumber   : int =  1; //Zero Indexed
private var colNumber   : int =  2; //Zero Indexed
private var totalCells  : int =  5;
private var loopstrt: int = 0;
private var loopend: int = 8;
private var fps  : int = 2;
private var offset  : Vector2;  //Maybe this should be a private var
private var revsize: float;// = 0.1519832;
private var snakeSpeed: float = 0.01;
///animation
//Input.GetButton("Jump");
//------------
private var jumpRate : float = 0.2;
private var nextJump : float = 0.0;
private var ontheground: boolean = true;
private var jumpdelay: int =0;
//------------
public var Tail: GameObject;
public var Tails: GameObject[] = new GameObject[9];
private var tailrepo: boolean = false;
//----------
private var rotscal: float = 0.0;
private var rotscalpos: float = 0.0;
private var rotadoonce: boolean = false;
//----------
public var FakeSnk: GameObject;
// Use this for initialization
function Start () {
	revsize = transform.localScale.x;
	nextJump = 0.0;
	ontheground = true;
}

// Update is called once per frame
function Update () {


if (Input.GetKey ("up") && ontheground) {
//nextJump = Time.time + jumpRate;
//jumpdelay +=1;
//put some rotation stuff here;
//transform.rotation.ToEulerAngles = Vector3(90,180,0);
transform.eulerAngles = Vector3(0,90, -90);
rigidbody.velocity.y = 24.0;
transform.position.y +=0.2;
ontheground = false;
var i: int = 0;
while(i<9){
Tails[i].transform.position = transform.position;
i++;
}

} 
rigidbody.velocity.y -= 0.50;
if(!ontheground){
if(Input.GetKey("right")) {
//transform.position.x += 0.1;
rigidbody.velocity.x = 6.00;
}
if(Input.GetKey("left")) {
//transform.position.x -= 0.1;
rigidbody.velocity.x = -6.00;
}}

//ontheground = true;
if(ontheground){
//on the ground
rowNumber = 1;
colNumber = 0;
totalCells = 4;
//switch off all the tail shit.

 /*i = 0;
while(i<9){
//Tails[i].transform.position = transform.position;
//Tails[i].transform.position = Vector3.Lerp(Tails[i].transform.position, transform.position,Time.deltaTime * 2);
i++;
}
Tails[8].transform.position = Vector3.Lerp(Tails[8].transform.position, transform.position,Time.deltaTime * 4);

if(Vector3.Distance(transform.position,Tails[8].transform.position) < 0.01){
tailOnOff(false);
}*/

if(!rotadoonce){
rotscal = 0.1;
rotadoonce = true;
}

tailOnOff(false);
snakeSpeed *=1.04;
snakeSpeed =6.0;
if(snakeSpeed > 6.0) snakeSpeed = 6.0;
rigidbody.velocity.x = snakeSpeed;


}else{
rotadoonce = false;
//switch the tail shit on
rowNumber = 2;
colNumber = 0;
totalCells = 1;
tailOnOff(true);
}

rotscalpos += 0.5;
/*rotscal -=0.01;
if(rotscal<0.0)rotscal = 0.0;*/
rotscal *= 0.9;
var scl: float = Mathf.Sin(rotscalpos)*rotscal;
transform.localScale = Vector3(0.1773914+scl,0.1773914+scl,0.1773914+scl);



var cam:Camera = Camera.main;
var snakeOff: float = (transform.position.x-cam.transform.position.x);
if(snakeOff<-10){
//do some kill the snake code here??????
//rigidbody.velocity.y = 24.0;
rigidbody.velocity.x = 12.00;
}
///--------------------
SetSpriteAnimation(colCount,rowCount,rowNumber,colNumber,totalCells,fps);
}
//--------------------------------------------

function tailOnOff(on: boolean){
//Tail.SetActiveRecursively(on);
//Tail.active = on;
//Tail.SetActiveRecursively(false);
/*if(on){
if(tailrepo){
Tail.transform.localPosition = transform.localPosition;
tailrepo = false;
}
var CJ: CharacterJoint = GetComponent(CharacterJoint);
CJ.connectedBody = Tail.rigidbody;
}else{
tailrepo = true;

}*/
//Tail.renderer.enabled;

/*var i: int = 0;
while(i<9){
Tails[i].transform.position = transform.position;
i++;
}
*/
var i: int = 0;
if(on){
i = 0;
while(i<9){
Tails[i].renderer.enabled = true;
i++;
}
}else{

i = 0;
while(i<9){
Tails[i].renderer.enabled = false;
i++;
}

}
}

function OnCollisionEnter(collision : Collision)
{
var layerMask = 8;
if(collision.gameObject.layer == layerMask){
ontheground = true;
}
}

function SetSpriteAnimation(colCount : int,rowCount : int,rowNumber : int,colNumber : int,totalCells : int,fps : int){
var index : int = Time.time * fps;
    index = index % totalCells;
    var size = Vector2 (1.0 / colCount, 1.0 / rowCount);
    var uIndex = index % colCount;
    var vIndex = index / colCount;
    offset = Vector2 ((uIndex+colNumber) * (size.x), (1.0 - size.y) - (vIndex+rowNumber) * size.y);
    renderer.material.SetTextureOffset ("_MainTex", offset);
    renderer.material.SetTextureScale  ("_MainTex", size);
}
function SwitchOver(){
	var EndEgg : GameObject;
	EndEgg = GameObject.Find("EndEgg");
	var FakeSn: GameObject = Instantiate (FakeSnk, transform.position, Quaternion.identity);
	FakeSn.transform.rotation = transform.rotation;
transform.rotation = EndEgg.transform.rotation;
transform.position = EndEgg.transform.position;
Destroy(EndEgg);
	
}
//var groundBlock = Instantiate (this.blocks[this.endBlock], Vector3((this.blockCounter * 10.0), -6.0, 0), Quaternion.identity);
		
