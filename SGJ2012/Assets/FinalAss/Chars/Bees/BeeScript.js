#pragma strict
private var xgo: float = 0.0;
private var ygo: float = 0.0;
private var speedx: float = 0.1;
private var speedy: float = 0.1;
private var tau: float = 6.283185;

function Update () {
	transform.position.x += Mathf.Cos(xgo)*0.24;
	transform.position.y += Mathf.Sin(ygo)*0.24;
	xgo+= speedx;
	ygo+= speedy;
	if(xgo >= tau){
		xgo -= tau;
		speedx = Random.Range(0.1, 0.3);
		}
		if(ygo >= tau){
		ygo -= tau;
		speedy = Random.Range(0.1, 0.3);
		}
}