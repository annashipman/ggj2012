#pragma strict
private var colCount    : int =  8;
private var rowCount    : int =  8;
private var rowNumber   : int =  1; //Zero Indexed
private var colNumber   : int =  0; //Zero Indexed
private var totalCells  : int =  4;
private var loopstrt: int = 0;
private var loopend: int = 8;
private var fps  : int = 5;
private var offset  : Vector2;
function Start () {

}

function Update () {
SetSpriteAnimation(colCount,rowCount,rowNumber,colNumber,totalCells,fps);
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