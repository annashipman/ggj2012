///animation
private var colCount    : int =  8;
private var rowCount    : int =  8;
private var rowNumber   : int =  1; //Zero Indexed
private var colNumber   : int =  2; //Zero Indexed
private var totalCells  : int =  5;
private var loopstrt: int = 0;
private var loopend: int = 8;
private var fps  : int = 5;
private var offset  : Vector2;  //Maybe this should be a private var
private var revsize: float;// = 0.1519832;
///animation
//Input.GetButton("Jump");
//------------
private var jumpRate : float = 0.2;
private var nextJump : float = 0.0;
private var ontheground: boolean = true;
private var jumpdelay: int =0;
//------------
public var Tail: GameObject;
public var Tails: GameObject[] = new GameObject[5];
private var tailrepo: boolean = false;

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
rigidbody.velocity.y = 30.0;
transform.position.y +=0.2;
ontheground = false;
} 
rigidbody.velocity.y -= 0.50;
if(Input.GetKey("right")) {
//transform.position.x += 0.1;
rigidbody.velocity.x = 6.00;
}
if(Input.GetKey("left")) {
//transform.position.x -= 0.1;
rigidbody.velocity.x = -6.00;
}

//ontheground = true;
if(ontheground){
//on the ground
rowNumber = 1;
colNumber = 0;
totalCells = 2;
//switch off all the tail shit.
tailOnOff(false);
}else{
//switch the tail shit on
tailOnOff(true);
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
var i: int = 0;
if(on){
i = 0;
while(i<5){
Tails[i].renderer.enabled = true;
i++;
}
}else{
i = 0;
while(i<5){
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
