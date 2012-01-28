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
// Use this for initialization
function Start () {
//	revsize = transform.localScale.x;
}

// Update is called once per frame
function Update () {
	//transform.position.x += 0.1;
	rigidbody.velocity.x = 10.0;
	/*if (Input.GetButton ("Fire1") && Time.time > nextJump && ontheground) {
		nextJump = Time.time + jumpRate;
	jumpdelay +=1;
	}

	if(jumpdelay > 0){
		rowNumber = 2;
		colNumber = 0;
		totalCells = 1;

		jumpdelay+=1;
	
		if(jumpdelay > 10){
			rowNumber = 2;
			colNumber = 1;
			totalCells = 1;
			rigidbody.velocity.y = 10.0;
			rigidbody.velocity.x = 3.0;
			transform.position.y += 0.2;
			ontheground = false;
			jumpdelay = 0;
		}
	}*/

	//--------------------------------------------
	SetSpriteAnimation(colCount,rowCount,rowNumber,colNumber,totalCells,fps);
}


function OnCollisionEnter(collision : Collision)
{
ontheground = true;
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

function JumpAndEat(pos : Vector3) {
	transform.position = pos;
	rigidbody.velocity = Vector3(0,0,0);
}