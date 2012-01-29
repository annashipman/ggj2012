private var rotscalpos:float = 0.0;
private var rotscal:float = 0.2;
private var startpos: Vector3;
// Use this for initialization
function Start () {
startpos = transform.position;
}

// Update is called once per frame
function Update () {
rotscalpos += 0.7;
/*rotscal -=0.01;
if(rotscal<0.0)rotscal = 0.0;*/
//rotscal *= 0.9;
var scl: float = Mathf.Sin(rotscalpos)*rotscal;
transform.position = Vector3(startpos.x+scl,startpos.y,startpos.z);
}

