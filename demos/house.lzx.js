var combobox_floater=null;var slider_floater=null;canvas=new LzCanvas(null,{__LZproxied:"false",appbuilddate:"2010-08-11T17:29:24Z",bgcolor:16777215,embedfonts:true,font:"Verdana,Vera,sans-serif",fontsize:11,fontstyle:"plain",height:800,lpsbuild:"17237 /Users/maxcarlson/openlaszlo/trunk-clean",lpsbuilddate:"2010-08-10T06:51:23Z",lpsrelease:"Latest",lpsversion:"5.0.x",runtime:"dhtml",width:"100%"});Mixin.make("DrawviewShared",["$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
},"lineTo",function($0,$1){},"moveTo",function($0,$1){},"quadraticCurveTo",function($0,$1,$2,$3){},"__radtodegfactor",180/Math.PI,"arc",function($0,$1,$2,$3,$4,$5){
switch(arguments.length){
case 5:
$5=false;

};if($3==null||$4==null)return;$3=-$3;$4=-$4;var $6;if($5==false&&$4-$3>=2*Math.PI||$5==true&&$3-$4>=2*Math.PI){
$6=360
}else if($3==$4||$2==0){
$6=0
}else{
var $7=$3*this.__radtodegfactor;var $8=$4*this.__radtodegfactor;if($5){
if($8<$7){
$6=-($7-$8-360)
}else{
$6=$8-$7+360
}}else{
if($8<$7){
$6=-($7-$8+360)
}else{
$6=$8-$7-360
}};while($6<-360){
$6+=360
};while($6>360){
$6-=360
}};var $9=$0+$2*Math.cos($3);var $a=$1+$2*Math.sin(2*Math.PI-$3);this.moveTo($9,$a);this._drawArc($0,$1,$2,$6,$3*this.__radtodegfactor)
},"rect",function($0,$1,$2,$3,$4,$5,$6,$7){
switch(arguments.length){
case 4:
$4=0;
case 5:
$5=null;
case 6:
$6=null;
case 7:
$7=null;

};LzKernelUtils.rect(this,$0,$1,$2,$3,$4,$5,$6,$7)
},"oval",function($0,$1,$2,$3){
switch(arguments.length){
case 3:
$3=NaN;

};if(isNaN($3)){
$3=$2
};var $4=$2<20&&$3<20?5:8;var $5=Math.PI/($4/2);var $6=$2/Math.cos($5/2);var $7=$3/Math.cos($5/2);this.moveTo($0+$2,$1);var $8=0,$9,$a,$b,$c,$d;for(var $e=0;$e<$4;$e++){
$8+=$5;$9=$8-$5/2;$c=$0+Math.cos($9)*$6;$d=$1+Math.sin($9)*$7;$a=$0+Math.cos($8)*$2;$b=$1+Math.sin($8)*$3;this.quadraticCurveTo($c,$d,$a,$b)
};return {x:$a,y:$b}},"_drawArc",function($0,$1,$2,$3,$4,$5){
switch(arguments.length){
case 5:
$5=NaN;

};if(isNaN($5)){
$5=$2
};if(Math.abs($3)>360){
$3=360
};var $6=Math.ceil(Math.abs($3)/45);var $7,$8;if($6>0){
var $9=$3/$6;var $a=-($9/180)*Math.PI;var $b=-($4/180)*Math.PI;var $c,$d,$e;for(var $f=0;$f<$6;$f++){
$b+=$a;$c=$b-$a/2;$7=$0+Math.cos($b)*$2;$8=$1+Math.sin($b)*$5;$d=$0+Math.cos($c)*($2/Math.cos($a/2));$e=$1+Math.sin($c)*($5/Math.cos($a/2));this.quadraticCurveTo($d,$e,$7,$8)
}};return {x:$7,y:$8}},"distance",function($0,$1){
var $2=$1.x-$0.x;var $3=$1.y-$0.y;return Math.sqrt($2*$2+$3*$3)
},"intersection",function($0,$1,$2,$3){
var $4=($3.x-$2.x)*($0.y-$2.y)-($3.y-$2.y)*($0.x-$2.x);var $5=($3.y-$2.y)*($1.x-$0.x)-($3.x-$2.x)*($1.y-$0.y);if($5==0){
if($4==0){
return -1
}else{
return null
}};$4/=$5;return {x:$0.x+($1.x-$0.x)*$4,y:$0.y+($1.y-$0.y)*$4}},"midpoint",function($0,$1){
return {x:($0.x+$1.x)/2,y:($0.y+$1.y)/2}},"globalAlpha",1,"lineWidth",1,"lineCap","butt","lineJoin","miter","miterLimit",10,"strokeStyle","#000000","fillStyle","#000000"]);Class.make("$lzc$class_drawview",["__globalAlpha",null,"__lineWidth",null,"__lineCap",null,"__lineJoin",null,"__miterLimit",null,"__strokeStyle",null,"__fillStyle",null,"__contextstates",null,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.createContext()
},"construct",function($0,$1){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["construct"]||this.nextMethod(arguments.callee,"construct")).call(this,$0,$1);this.__contextstates=[]
},"$lzc$set_context",function($0){
with(this){
this.beginPath();if(this.context){
this.__lineWidth=null;this.__lineCap=null;this.__lineJoin=null;this.__miterLimit=null;this.__fillStyle=null;this.__strokeStyle=null;this.__globalAlpha=null
};if($0["fillText"]&&lz.embed.browser.browser!=="iPad"){
this.capabilities["2dcanvastext"]=true
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzc$set_context"]||this.nextMethod(arguments.callee,"$lzc$set_context")).call(this,$0)
}},"__drawImageCnt",0,"getImage",function($0){
with(this){
var $1=lz.drawview.images;if(!$1[$0]){
var $2=$0;if($0.indexOf("http:")!=0&&$0.indexOf("https:")!=0){
$2=this.sprite.getResourceUrls($0)[0]
};var $3=new Image();$3.src=$2;$1[$0]=$3;if($2!=$0){
$1[$2]=$3
}};return $1[$0]
}},"drawImage",function($0,$1,$2,$3,$4,$5){
with(this){
var image=$0;var x=$1;var y=$2;var w=$3;var h=$4;var r=$5;switch(arguments.length){
case 1:
x=0;
case 2:
y=0;
case 3:
w=null;
case 4:
h=null;
case 5:
r=0;

};if(image==null){
image=this.sprite.__LZcanvas
}else if(typeof image=="string"){
image=this.getImage(image)
};if(!image)return;this.__dirty=true;if(w==null)w=image.width;if(h==null)h=image.height;var $6=image.nodeName;var $7=image&&image.nodeType==1&&$6=="IMG"||$6=="CANVAS";var $8=image&&image.complete||$6=="CANVAS";if(!$7){

}else if(!$8){
var fname="__drawImage"+this.__drawImageCnt++;this[fname]=function(){
lz.embed.removeEventHandler(image,"load",this,fname);delete this[fname];this.drawImage(image,x,y,w,h,r)
};lz.embed.attachEventHandler(image,"load",this,fname)
}else{
this.__updateFillStyle();var $9=x||y||r;if($9){
this.context.save();if(x||y){
this.context.translate(x,y)
};if(r){
this.context.rotate(r)
}};if(w==null)w=image.width;if(h==null)h=image.height;this.context.drawImage(image,0,0,w,h);if($9){
this.context.restore()
}}}},"fillText",function($0,$1,$2,$3){
switch(arguments.length){
case 3:
$3=null;

};if(!this.capabilities["2dcanvastext"]){
return
};this.__styleText();this.__dirty=true;this.__updateFillStyle();if($3){
this.context.fillText($0,$1,$2,$3)
}else{
this.context.fillText($0,$1,$2)
}},"strokeText",function($0,$1,$2,$3){
switch(arguments.length){
case 3:
$3=null;

};if(!this.capabilities["2dcanvastext"]){
return
};this.__styleText();this.__dirty=true;this.__updateLineStyle();if($3){
this.context.strokeText($0,$1,$2,$3)
}else{
this.context.strokeText($0,$1,$2)
}},"measureText",function($0){
if(!this.capabilities["2dcanvastext"]){
return
};this.__styleText();return this.context.measureText($0)
},"__styleText",function(){
with(this){
var $0=this.font||canvas.font;var $1=(this.fontsize||canvas.fontsize)+"px";var $2=this.fontstyle||"plain";if($2=="plain"){
var $3="normal";var $4="normal"
}else if($2=="bold"){
var $3="bold";var $4="normal"
}else if($2=="italic"){
var $3="normal";var $4="italic"
}else if($2=="bold italic"||$2=="bolditalic"){
var $3="bold";var $4="italic"
};var $5=$4+" "+$3+" "+$1+" "+$0;this.context.font=$5
}},"__checkContext",function(){},"beginPath",function(){
this.__path=[[1,0,0]];this.__pathisopen=true;this.__pathdrawn=false
},"closePath",function(){
if(this.__pathisopen){
this.__path.push([0]);this.__pathdrawn=false
};this.__pathisopen=false
},"moveTo",function($0,$1){
if(this.__pathisopen){
this.__path.push([1,$0,$1]);this.__pathdrawn=false
}},"lineTo",function($0,$1){
if(this.__pathisopen){
this.__path.push([2,$0,$1]);this.__pathdrawn=false
}},"quadraticCurveTo",function($0,$1,$2,$3){
if(this.__pathisopen){
this.__path.push([3,$0,$1,$2,$3]);this.__pathdrawn=false
}},"bezierCurveTo",function($0,$1,$2,$3,$4,$5){
if(this.__pathisopen){
this.__path.push([4,$0,$1,$2,$3,$4,$5]);this.__pathdrawn=false
}},"arc",function($0,$1,$2,$3,$4,$5){
with(this){
if(this.__pathisopen){
var $6=$0+$2*Math.cos(-$3);var $7=$1+$2*Math.sin(2*Math.PI+$3);this.__path.push([1,$6,$7]);this.__path.push([5,$0,$1,$2,$3,$4,$5]);this.__pathdrawn=false
}}},"fill",function(){
if(!this.__pathdrawn){
this.__playPath()
}else{
this.__updateFillStyle()
};this.context.fill()
},"__updateFillStyle",function(){
with(this){
if(this.__globalAlpha!=this.globalAlpha){
this.__globalAlpha=this.context.globalAlpha=this.globalAlpha
};if(this.__fillStyle!=this.fillStyle){
if(this.fillStyle instanceof LzCanvasGradient){
this.fillStyle.__applyFillTo(this.context)
}else{
this.context.fillStyle=LzColorUtils.torgb(this.fillStyle)
};this.__fillStyle=this.fillStyle
}}},"__updateLineStyle",function(){
with(this){
if(this.__lineWidth!=this.lineWidth){
this.__lineWidth=this.context.lineWidth=this.lineWidth
};if(this.__lineCap!=this.lineCap){
this.__lineCap=this.context.lineCap=this.lineCap
};if(this.__lineJoin!=this.lineJoin){
this.__lineJoin=this.context.lineJoin=this.lineJoin
};if(this.__miterLimit!=this.miterLimit){
this.__miterLimit=this.context.miterLimit=this.miterLimit
};if(this.__strokeStyle!=this.strokeStyle){
if(this.strokeStyle instanceof LzCanvasGradient){
this.strokeStyle.__applyStrokeTo(this.context)
}else{
this.context.strokeStyle=LzColorUtils.torgb(this.strokeStyle)
};this.__strokeStyle=this.strokeStyle
}}},"__playPath",function(){
var $0=this.__path;var $1=$0.length;if($1==0)return;this.__updateLineStyle();this.__updateFillStyle();if(this.__pathdrawn)return;this.__dirty=true;this.context.beginPath();var $2=this.aliaslines&&this.lineWidth%2?0.5:0;for(var $3=0;$3<$1;$3+=1){
var $4=$0[$3];switch($4[0]){
case 0:
this.context.closePath();break;
case 1:
this.context.moveTo($4[1]+$2,$4[2]+$2);break;
case 2:
this.context.lineTo($4[1]+$2,$4[2]+$2);break;
case 3:
this.context.quadraticCurveTo($4[1],$4[2],$4[3]+$2,$4[4]+$2);break;
case 4:
this.context.bezierCurveTo($4[1],$4[2],$4[3],$4[4],$4[5]+$2,$4[6]+$2);break;
case 5:
this.context.arc($4[1]+$2,$4[2]+$2,$4[3],$4[4],$4[5],$4[6]);break;

}};this.__pathdrawn=true
},"clipPath",function(){
this.__playPath();this.context.clip()
},"clipButton",function(){},"stroke",function(){
if(!this.__pathdrawn){
this.__playPath()
}else{
this.__updateLineStyle()
};this.context.stroke()
},"clear",function(){
if(this["__dirty"]==false)return;this.__pathdrawn=false;this.__dirty=false;this.context.clearRect(0,0,this.width,this.height)
},"clearMask",function(){},"createLinearGradient",function($0,$1,$2,$3){
with(this){
return new LzCanvasGradient(this,[$0,$1,$2,$3],false)
}},"createRadialGradient",function($0,$1,$2,$3,$4,$5){
with(this){
return new LzCanvasGradient(this,[$0,$1,$2,$3,$4,$5],true)
}},"rotate",function($0){
this.context.rotate($0)
},"translate",function($0,$1){
this.context.translate($0,$1)
},"scale",function($0,$1){
this.context.scale($0,$1)
},"save",function(){
this.__contextstates.push({fillStyle:this.fillStyle,strokeStyle:this.strokeStyle,globalAlpha:this.globalAlpha,lineWidth:this.lineWidth,lineCap:this.lineCap,lineJoin:this.lineJoin,miterLimit:this.miterLimit});this.context.save()
},"restore",function(){
var $0=this.__contextstates.pop();if($0){
for(var $1 in $0){
this[$1]=this["__"+$1]=$0[$1]
}};this.context.restore()
},"fillRect",function($0,$1,$2,$3){
this.__dirty=true;this.__updateFillStyle();this.context.fillRect($0,$1,$2,$3)
},"clearRect",function($0,$1,$2,$3){
this.context.clearRect($0,$1,$2,$3)
},"strokeRect",function($0,$1,$2,$3){
this.__dirty=true;this.__updateLineStyle();this.context.strokeRect($0,$1,$2,$3)
}],[DrawviewShared,LzView],["tagname","drawview","attributes",new LzInheritedHash(LzView.attributes),"images",{}]);lz[$lzc$class_drawview.tagname]=$lzc$class_drawview;Class.make("LzCanvasGradient",["__context",null,"__g",null,"$lzsc$initialize",function($0,$1,$2){
this.__context=$0;var $3=$0.context;if($2){
this.__g=$3.createRadialGradient.apply($3,$1)
}else{
this.__g=$3.createLinearGradient.apply($3,$1)
}},"addColorStop",function($0,$1){
var $2=LzColorUtils.torgb($1);var $3=this.__context.globalAlpha;if($3!=null&&$3!=1){
$2=this.torgba($2,$3)
};try{
this.__g.addColorStop($0,$2)
}
catch($4){}},"torgba",function($0,$1){
if($0.indexOf("rgba")==-1){
var $2=$0.substring(4,$0.length-1).split(",");$2.push($1);return "rgba("+$2.join(",")+")"
}else{
return $0
}},"__applyFillTo",function($0){
$0.fillStyle=this.__g
},"__applyStrokeTo",function($0){
$0.strokeStyle=this.__g
}]);{
Class.make("LzLayout",["vip",void 0,"locked",void 0,"$lzc$set_locked",function($0){
if(this.locked==$0)return;if($0){
this.lock()
}else{
this.unlock()
}},"subviews",void 0,"updateDelegate",void 0,"construct",function($0,$1){
with(this){
this.locked=2;(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["construct"]||this.nextMethod(arguments.callee,"construct")).call(this,$0,$1);this.subviews=[];this.vip=this.immediateparent;if(this.vip.layouts==null){
this.vip.layouts=[this]
}else{
this.vip.layouts.push(this)
};this.updateDelegate=new LzDelegate(this,"update");if(this.immediateparent.isinited){
this.__parentInit()
}else{
new LzDelegate(this,"__parentInit",this.immediateparent,"oninit")
}}},"$1d",function($0){
with(this){
new LzDelegate(this,"gotNewSubview",this.vip,"onaddsubview");new LzDelegate(this,"removeSubview",this.vip,"onremovesubview");var $1=this.vip.subviews.length;for(var $2=0;$2<$1;$2++){
this.gotNewSubview(this.vip.subviews[$2])
}}},"destroy",function(){
if(this.__LZdeleted)return;this.releaseLayout(true);(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"reset",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(this.locked){
return
};this.update($0)
},"addSubview",function($0){
var $1=$0.options["layoutAfter"];if($1){
this.__LZinsertAfter($0,$1)
}else{
this.subviews.push($0)
}},"gotNewSubview",function($0){
if(!$0.options["ignorelayout"]){
this.addSubview($0)
}},"removeSubview",function($0){
var $1=this.subviews;for(var $2=$1.length-1;$2>=0;$2--){
if($1[$2]==$0){
$1.splice($2,1);break
}};this.reset()
},"ignore",function($0){
var $1=this.subviews;for(var $2=$1.length-1;$2>=0;$2--){
if($1[$2]==$0){
$1.splice($2,1);break
}};this.reset()
},"lock",function(){
this.locked=true
},"unlock",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.locked=false;this.reset()
},"__parentInit",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(this.locked==2){
if(this.isinited){
this.unlock()
}else{
new LzDelegate(this,"unlock",this,"oninit")
}}}},"releaseLayout",function($0){
switch(arguments.length){
case 0:
$0=null;

};if($0==null&&this.__delegates!=null)this.removeDelegates();if(this.immediateparent&&this.vip.layouts){
for(var $1=this.vip.layouts.length-1;$1>=0;$1--){
if(this.vip.layouts[$1]==this){
this.vip.layouts.splice($1,1)
}}}},"setLayoutOrder",function($0,$1){
var $2=this.subviews;for(var $3=$2.length-1;$3>=0;$3--){
if($2[$3]===$1){
$2.splice($3,1);break
}};if($3==-1){
return
};if($0=="first"){
$2.unshift($1)
}else if($0=="last"){
$2.push($1)
}else{
for(var $4=$2.length-1;$4>=0;$4--){
if($2[$4]===$0){
$2.splice($4+1,0,$1);break
}};if($4==-1){
$2.splice($3,0,$1)
}};this.reset();return
},"swapSubviewOrder",function($0,$1){
var $2=-1;var $3=-1;var $4=this.subviews;for(var $5=$4.length-1;$5>=0&&($2<0||$3<0);$5--){
if($4[$5]===$0){
$2=$5
};if($4[$5]===$1){
$3=$5
}};if($2>=0&&$3>=0){
$4[$3]=$0;$4[$2]=$1
};this.reset();return
},"__LZinsertAfter",function($0,$1){
var $2=this.subviews;for(var $3=$2.length-1;$3>=0;$3--){
if($2[$3]==$1){
$2.splice($3,0,$0)
}}},"update",function($0){
switch(arguments.length){
case 0:
$0=null;

}},"toString",function(){
return "lz.layout for view "+this.immediateparent
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzNode,["tagname","layout","attributes",new LzInheritedHash(LzNode.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onconstruct","$1d",null],locked:2},LzLayout.attributes)
}}})(LzLayout)
};{
Class.make("$lzc$class_simplelayout",["axis",void 0,"$lzc$set_axis",function($0){
this.setAxis($0)
},"inset",void 0,"$lzc$set_inset",function($0){
this.inset=$0;if(this.subviews&&this.subviews.length)this.update();if(this["oninset"])this.oninset.sendEvent(this.inset)
},"spacing",void 0,"$lzc$set_spacing",function($0){
this.spacing=$0;if(this.subviews&&this.subviews.length)this.update();if(this["onspacing"])this.onspacing.sendEvent(this.spacing)
},"setAxis",function($0){
if(this["axis"]==null||this.axis!=$0){
this.axis=$0;this.sizeAxis=$0=="x"?"width":"height";if(this.subviews.length)this.update();if(this["onaxis"])this.onaxis.sendEvent(this.axis)
}},"addSubview",function($0){
this.updateDelegate.register($0,"on"+this.sizeAxis);this.updateDelegate.register($0,"onvisible");if(!this.locked){
var $1=null;var $2=this.subviews;for(var $3=$2.length-1;$3>=0;--$3){
if($2[$3].visible){
$1=$2[$3];break
}};if($1){
var $4=$1[this.axis]+$1[this.sizeAxis]+this.spacing
}else{
var $4=this.inset
};$0.setAttribute(this.axis,$4)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["addSubview"]||this.nextMethod(arguments.callee,"addSubview")).call(this,$0)
},"update",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(this.locked)return;var $1=this.subviews.length;var $2=this.inset;for(var $3=0;$3<$1;$3++){
var $4=this.subviews[$3];if(!$4.visible)continue;if($4[this.axis]!=$2){
$4.setAttribute(this.axis,$2)
};if($4.usegetbounds){
$4=$4.getBounds()
};$2+=this.spacing+$4[this.sizeAxis]
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzLayout,["tagname","simplelayout","attributes",new LzInheritedHash(LzLayout.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({axis:"y",inset:0,spacing:0},$lzc$class_simplelayout.attributes)
}}})($lzc$class_simplelayout)
};{
Class.make("$lzc$class_replicator",["pool",void 0,"replicatedsize",void 0,"axis",void 0,"spacing",void 0,"container",void 0,"mask",void 0,"clones",void 0,"nodes",void 0,"$lzc$set_nodes",function($0){
this.setNodes($0)
},"dataset",void 0,"xpath",void 0,"_sizes",void 0,"_cloneprops",void 0,"_clonepool",void 0,"construct",function($0,$1){
this.clones=[];this._cloneprops=[];this._clonepool=[];(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["construct"]||this.nextMethod(arguments.callee,"construct")).call(this,$0,$1);this.container=this.immediateparent;this.mask=this.container.immediateparent
},"init",function(){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);if(this["dataset"]&&this["xpath"]){
this._pointer=this.dataset.getPointer();this._ondatadel=new LzDelegate(this,"_updateChildren",this.dataset,"onDocumentChange");this._updateChildren()
}}},"destroy",function(){
this._pointer=null;this.dataset=null;(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"_updateChildren",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};var $1=this._pointer.xpathQuery(this.xpath);if($1&&!(Array["$lzsc$isa"]?Array.$lzsc$isa($1):$1 instanceof Array))$1=[$1];this.setNodes($1)
}},"createChildren",function($0){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["createChildren"]||this.nextMethod(arguments.callee,"createChildren")).call(this,[]);this.replicated=$0[0];if($0.length>1){
this.container.createChildren($0)
}else{
this.__LZinstantiationDone()
}},"onnodes",void 0,"set_nodes",function($0){
this.setNodes($0)
},"setNodes",function($0){
this.nodes=$0;this.__adjustVisibleClones();this.setAttribute("replicatedsize",this.clones.length==0?0:this.clones[this.clones.length-1][this._sizes[this.axis]]);if(this.onnodes.ready){
this.onnodes.sendEvent()
}},"insertNode",function($0,$1){
this.nodes.splice($0,0,$1);this._cloneprops.splice($0,0,null);this.__adjustVisibleClones()
},"bind",function($0,$1){
with(this){
$0.setAttribute("clonenumber",$1);this.setData($0,$1);this.update($0,$1);if(LzDatapath["$lzsc$isa"]?LzDatapath.$lzsc$isa($0.datapath):$0.datapath instanceof LzDatapath){
var $2=$0.datapath;var $3=this.nodes[$1];if(LzDataNodeMixin["$lzsc$isa"]?LzDataNodeMixin.$lzsc$isa($3):$3 instanceof LzDataNodeMixin){
var $4=$3;var $5=$4.sel;var $6=$2.sel;if($5!=$6){
$0.setSelected($2.sel=$5)
}}};if(this._cloneprops[$1]!=null){
var $7=this._cloneprops[$1];for(var $8 in $7){
$0.setAttribute($8,$7[$8])
}}}},"setCloneProperty",function($0,$1,$2){
this.setClonePropertyByCN($0.clonenumber,$1,$2)
},"setClonePropertyByCN",function($0,$1,$2){
if(this._cloneprops[$0]==null){
this._cloneprops[$0]={}};this._cloneprops[$0][$1]=$2;var $3=this.getCloneIfVisible($0);if($3)$3.setAttribute($1,$2)
},"update",function($0,$1){
if($0["update"])$0.update($0.data,$1)
},"unbind",function($0){
var $1=$0.clonenumber;$0.setAttribute("clonenumber",null);$0.setAttribute("data",null);if($1!=null&&this._cloneprops[$1]!=null){
var $2=this._cloneprops[$1];for(var $3 in $2){
$0.setAttribute($3,null)
}}},"getClone",function(){
var $0;if(this._clonepool.length){
$0=this._clonepool.pop();if($0.visible!=true)$0.setAttribute("visible",true)
}else{
$0=this._makeClone()
};return $0
},"_makeClone",function(){
var $0=this.container.makeChild(this.replicated);$0.setAttribute("clonenumber",null);$0.setAttribute("cloneManager",this);return $0
},"poolClone",function($0){
if($0.clonenumber)this.unbind($0);if($0.visible!=false)$0.setAttribute("visible",false);this._clonepool.push($0)
},"getCloneIfVisible",function($0){
return this.clones[$0]
},"setData",function($0,$1){
switch(arguments.length){
case 1:
$1=null;

};if($0){
$0.setAttribute("data",this.nodes[$1]);$0.applyData(this.nodes[$1])
}},"__adjustVisibleClones",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=this.container.layouts;if($1){
for(var $2=0,$3=$1.length;$2<$3;$2++){
$1[$2].lock()
}};while(this.clones.length)this.poolClone(this.clones.pop());if(this["nodes"]!=null){
var $3=this.nodes.length;for(var $2=0;$2<$3;$2++){
var $4=this.getClone();this.bind($4,$2);this.clones[$2]=$4
}};if($1){
for(var $2=0,$3=$1.length;$2<$3;$2++){
$1[$2].unlock()
}}},"getCloneForOffset",function($0){
this.ensureInView($0);return this.clones[$0]
},"getCloneForNode",function($0,$1){
with(this){
switch(arguments.length){
case 1:
$1=false;

};if(LzDataNodeMixin["$lzsc$isa"]?LzDataNodeMixin.$lzsc$isa($0):$0 instanceof LzDataNodeMixin){
var $2=this.clones;for(var $3=0,$4=$2.length;$3<$4;$3++){
var $5=$2[$3].datapath;if((LzDatapath["$lzsc$isa"]?LzDatapath.$lzsc$isa($5):$5 instanceof LzDatapath)&&$5.p==$0){
return $2[$3]
}}}}},"ensureInView",function($0){
with(this){
var $1=this.container.y;var $2=$0*this.replicatedsize;var $3=$1;if(typeof mask!="undefined"&&this.replicatedsize+$2>=this.mask.height-$1){
$3=this.mask.height-$2-this.replicatedsize
}else if($2<-$1)$3=-$2;if($1!=$3)this.container.setAttribute("y",$3)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzNode,["tagname","replicator","attributes",new LzInheritedHash(LzNode.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_clonepool:null,_cloneprops:null,_sizes:{x:"width",y:"height"},axis:"y",clones:null,nodes:null,onnodes:LzDeclaredEvent,pool:true,replicatedsize:null,spacing:0},$lzc$class_replicator.attributes)
}}})($lzc$class_replicator)
};{
Class.make("$lzc$class_selectionmanager",["sel",void 0,"selectedHash",void 0,"selected",void 0,"toggle",void 0,"lastRangeStart",void 0,"construct",function($0,$1){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["construct"]||this.nextMethod(arguments.callee,"construct")).call(this,$0,$1);this.__LZsetSelection([])
},"destroy",function(){
if(this.__LZdeleted)return;this.__LZsetSelection([]);(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"__LZaddToSelection",function($0,$1){
if($0!=null&&!this.__LZisSelected($0)){
this.selected.push($0);this.__LZsetSelected($0,$1,true)
}},"__LZremoveFromSelection",function($0,$1){
var $2=this.__LZindexOf($0);if($2!=-1){
this.selected.splice($2,1);this.__LZsetSelected($0,$1,false)
}},"__LZindexOf",function($0){
var $1=this.selected;for(var $2=$1.length-1;$2>=0;--$2){
if($1[$2]===$0)return $2
};return -1
},"__LZupdateSelection",function($0,$1){
this.__LZsetSelection($0);for(var $2=$1.length-1;$2>=0;--$2){
var $3=$1[$2];this.__LZsetSelected($3,this.__LZgetView($3),false)
}},"__LZselectRange",function($0,$1){
var $2=this.createRange($0,$1);if($2!=null){
var $3=this.__LZsplitRange($2);this.__LZupdateSelection($3.unchanged,$3.removed);this.lastRangeStart=$0;var $4=$3.added;for(var $5=$4.length-1;$5>=0;--$5){
var $6=$4[$5];this.__LZaddToSelection($6,this.__LZgetView($6))
}}else{
this.clearSelection();this.lastRangeStart=$0
}},"__LZgetSubList",function($0,$1,$2){
var $3=-1;var $4=-1;for(var $5=$0.length-1;$5>=0&&($3==-1||$4==-1);--$5){
if($0[$5]===$1)$3=$5;if($0[$5]===$2)$4=$5
};var $6=null;if($3!=-1&&$4!=-1){
if($4<$3){
$6=$0.slice($4,$3+1);$6.reverse()
}else{
$6=$0.slice($3,$4+1)
}};return $6
},"__LZgetObject",function($0){
return $0
},"__LZgetView",function($0){
return $0
},"__LZsetSelection",function($0){
var $1={};for(var $2=$0.length-1;$2>=0;--$2){
$1[$0[$2].__LZUID]=true
};this.selectedHash=$1;this.selected=$0;this.lastRangeStart=null
},"__LZisSelected",function($0){
return this.selectedHash[$0.__LZUID]==true
},"__LZsetSelected",function($0,$1,$2){
if($2){
this.selectedHash[$1.__LZUID]=true
}else{
delete this.selectedHash[$1.__LZUID]
};if($1[this.sel]){
$1[this.sel]($2)
}},"__LZsplitRange",function($0){
var $1=this.selected;var $2=this.selectedHash;var $3={};var $4=[],$5=[],$6=[];for(var $7=$0.length-1;$7>=0;--$7){
var $8=$0[$7];if($2[$8.__LZUID]){
$4.push($8);$3[$8.__LZUID]=true
}else{
$5.push($8)
}};for(var $7=$1.length-1;$7>=0;--$7){
var $8=$1[$7];if(!$3[$8.__LZUID]){
$6.push($8)
}};return {unchanged:$4,added:$5,removed:$6}},"createRange",function($0,$1){
return this.__LZgetSubList($0.immediateparent.subviews,$0,$1)
},"isSelected",function($0){
return this.__LZisSelected(this.__LZgetObject($0))
},"select",function($0){
var $1=this.__LZgetObject($0);var $2=this.__LZisSelected($1);if($2&&(this.toggle||this.isMultiSelect($0))){
this.unselect($0)
}else{
if(this.selected.length>0&&this.isRangeSelect($0)){
var $3=this.lastRangeStart||this.selected[0];this.__LZselectRange($3,$0)
}else{
if(!this.isMultiSelect($0)){
var $4=$2?this.__LZindexOf($1):-1;var $5=this.selected;this.__LZupdateSelection($4!=-1?$5.splice($4,1):[],$5)
};this.__LZaddToSelection($1,$0)
}}},"unselect",function($0){
this.__LZremoveFromSelection(this.__LZgetObject($0),$0)
},"clearSelection",function(){
this.__LZupdateSelection([],this.selected)
},"getSelection",function(){
return this.selected.concat()
},"isMultiSelect",function($0){
with(this){
return lz.Keys.isKeyDown("control")
}},"isRangeSelect",function($0){
with(this){
return lz.Keys.isKeyDown("shift")
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzNode,["tagname","selectionmanager","attributes",new LzInheritedHash(LzNode.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({sel:"setSelected"},$lzc$class_selectionmanager.attributes)
}}})($lzc$class_selectionmanager)
};{
Class.make("$lzc$class_dragstate",["drag_axis",void 0,"drag_min_x",void 0,"drag_max_x",void 0,"drag_min_y",void 0,"drag_max_y",void 0,"$1e",void 0,"__dragstate_ydoffset",void 0,"$1f",void 0,"$1g",void 0,"y",void 0,"$1h",void 0,"__dragstate_xdoffset",void 0,"$1i",void 0,"$1j",void 0,"x",void 0,"__dragstate_getnewpos",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzState,["tagname","dragstate","attributes",new LzInheritedHash(LzState.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$1e:function($0){
this.setAttribute("__dragstate_ydoffset",this.yoffset-this.getMouse("y"))
},$1f:function($0){
var $1=this.drag_axis=="both"||this.drag_axis=="y"?this.__dragstate_getnewpos("y",this.immediateparent.getMouse("y")+this.__dragstate_ydoffset):this.y;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}},$1g:function(){
with(this){
try{
return [this,"drag_axis",this,"__dragstate_ydoffset",this,"y"].concat($lzc$getFunctionDependencies("__dragstate_getnewpos",this,this,["y",this.immediateparent.getMouse("y")+this.__dragstate_ydoffset],null)).concat($lzc$getFunctionDependencies("getMouse",this,this.immediateparent,["y"],null))
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},$1h:function($0){
this.setAttribute("__dragstate_xdoffset",this.xoffset-this.getMouse("x"))
},$1i:function($0){
var $1=this.drag_axis=="both"||this.drag_axis=="x"?this.__dragstate_getnewpos("x",this.immediateparent.getMouse("x")+this.__dragstate_xdoffset):this.x;if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}},$1j:function(){
with(this){
try{
return [this,"drag_axis",this,"__dragstate_xdoffset",this,"x"].concat($lzc$getFunctionDependencies("__dragstate_getnewpos",this,this,["x",this.immediateparent.getMouse("x")+this.__dragstate_xdoffset],null)).concat($lzc$getFunctionDependencies("getMouse",this,this.immediateparent,["x"],null))
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},__dragstate_getnewpos:function($0,$1){
var $2=this["drag_min_"+$0];var $3=this["drag_max_"+$0];if($2!=null&&$1<$2)$1=$2;if($3!=null&&$1>$3)$1=$3;return $1
},__dragstate_xdoffset:new LzOnceExpr("__dragstate_xdoffset","expression","$1h",null),__dragstate_ydoffset:new LzOnceExpr("__dragstate_ydoffset","expression","$1e",null),drag_axis:"both",drag_max_x:null,drag_max_y:null,drag_min_x:null,drag_min_y:null,x:new LzAlwaysExpr("x","expression","$1i","$1j",null),y:new LzAlwaysExpr("y","expression","$1f","$1g",null)},$lzc$class_dragstate.attributes)
}}})($lzc$class_dragstate)
};Mixin.make("$lzc$class_drawarrow",["drawarrow",function($0,$1,$2,$3,$4,$5){
var $6=($3+$1)*0.5;if($5){
$0.moveTo($1,$4);$0.lineTo($6,$2);$0.lineTo($3,$4);$0.lineTo($1,$4)
}else{
$0.moveTo($1,$2);$0.lineTo($6,$4);$0.lineTo($3,$2);$0.lineTo($1,$2)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","drawarrow","attributes",new LzInheritedHash(LzView.attributes)]);{
Mixin.make("$lzc$class_applybasecolor",["$1k",void 0,"basecolor",void 0,"onbasecolor",void 0,"$lzc$set_basecolor",function($0){
this.basecolor=$0;this._basehsv=LzColorUtils.tohsv($0);if(this.onbasecolor.ready)this.onbasecolor.sendEvent($0)
},"lockredraw",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.lockredraw=false;this.setAttribute("basecolor",this.basecolor)
},"$1l",function($0){
if(!this.isinited)return;if(!$0)return;var $1=this._basehsv;if(!this.bordercolor){
this.setAttribute("bordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.1))
};if(!this.interiorfillcolor){
this.setAttribute("interiorfillcolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this.interiorbordercolor){
this.setAttribute("interiorbordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.2196))
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","applybasecolor","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$1k:function($0){
this.setAttribute("basecolor",LzColorUtils.convertColor("null"))
},$delegates:["onbasecolor","$1l",null],basecolor:new LzStyleConstraintExpr("basecolor","color","base-color",new LzOnceExpr("basecolor","color","$1k",null),false),lockredraw:true,onbasecolor:LzDeclaredEvent},$lzc$class_applybasecolor.attributes)
}}})($lzc$class_applybasecolor)
};{
Class.make("$lzc$class_drawpanel",["lockredraw",void 0,"_lastupdate",void 0,"_drawcounter",void 0,"$1m",function(){
with(this){
return canvas
}},"redraw",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!canvas.isinited||this.lockredraw)return;this.draw(this)
}},"draw",function($0){
$0.clear()
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_drawview,["tagname","drawpanel","children",LzNode.mergeChildren([],$lzc$class_drawview["children"]),"attributes",new LzInheritedHash($lzc$class_drawview.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","redraw",null,"onheight","redraw",null,"oninit","redraw",null,"oninit","redraw","$1m"],_drawcounter:0,_lastupdate:0,aliaslines:true,lineCap:"round",lockredraw:false,measuresize:false},$lzc$class_drawpanel.attributes)
}}})($lzc$class_drawpanel)
};{
Mixin.make("$lzc$class_borderradius",["borderradius",void 0,"onborderradius",void 0,"$lzc$set_borderradius",function($0){
if(this.borderradius===$0)return;var $1=String($0).split(" ");var $2=$1.length;if($2<=1)$1[1]=$1[0];if($2<=3)$1[3]=$1[1];if($2<=2)$1[2]=$1[0];this._borderradius=$1;this.borderradius=$0;this.bordertopleftradius=parseFloat($1[0]);this.bordertoprightradius=parseFloat($1[1]);this.borderbottomrightradius=parseFloat($1[2]);this.borderbottomleftradius=parseFloat($1[3]);this.setAttribute("cornerradius",$1.join(" "));if(this.onborderradius.ready)this.onborderradius.sendEvent($0)
},"bordertopleftradius",void 0,"onbordertopleftradius",void 0,"$lzc$set_bordertopleftradius",function($0){
if($0<0)return;if(this.bordertopleftradius===$0)return;this.bordertopleftradius=$0;if(this.onbordertopleftradius.ready)this.onbordertopleftradius.sendEvent($0)
},"bordertoprightradius",void 0,"onbordertoprightradius",void 0,"$lzc$set_bordertoprightradius",function($0){
if($0<0)return;if(this.bordertoprightradius===$0)return;this.bordertoprightradius=$0;if(this.onbordertoprightradius.ready)this.onbordertoprightradius.sendEvent($0)
},"borderbottomrightradius",void 0,"onborderbottomrightradius",void 0,"$lzc$set_borderbottomrightradius",function($0){
if($0<0)return;if(this.borderbottomrightradius===$0)return;this.borderbottomrightradius=$0;if(this.onborderbottomrightradius.ready)this.onborderbottomrightradius.sendEvent($0)
},"borderbottomleftradius",void 0,"onborderbottomleftradius",void 0,"$lzc$set_borderbottomleftradius",function($0){
if($0<0)return;if(this.borderbottomleftradius===$0)return;this.borderbottomleftradius=$0;if(this.onborderbottomleftradius.ready)this.onborderbottomleftradius.sendEvent($0)
},"_updateradii",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=[];$1[0]=this.bordertopleftradius;$1[1]=this.bordertoprightradius;$1[2]=this.borderbottomrightradius;$1[3]=this.borderbottomleftradius;this.$lzc$set_borderradius($1.join(" "))
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","borderradius","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({borderbottomleftradius:new LzStyleConstraintExpr("borderbottomleftradius","number","border-bottom-left-radius",-1,false),borderbottomrightradius:new LzStyleConstraintExpr("borderbottomrightradius","number","border-bottom-right-radius",-1,false),borderradius:new LzStyleConstraintExpr("borderradius","string","border-radius","",false),bordertopleftradius:new LzStyleConstraintExpr("bordertopleftradius","number","border-top-left-radius",-1,false),bordertoprightradius:new LzStyleConstraintExpr("bordertoprightradius","number","border-top-right-radius",-1,false),onborderbottomleftradius:LzDeclaredEvent,onborderbottomrightradius:LzDeclaredEvent,onborderradius:LzDeclaredEvent,onbordertopleftradius:LzDeclaredEvent,onbordertoprightradius:LzDeclaredEvent},$lzc$class_borderradius.attributes)
}}})($lzc$class_borderradius)
};{
Class.make("$lzc$class_$1",["borderradius",void 0,"onborderradius",void 0,"$lzc$set_borderradius",function($0){
with(this){
if(this.borderradius===$0)return;var $1=String($0).split(" ");var $2=$1.length;if($2<=1)$1[1]=$1[0];if($2<=3)$1[3]=$1[1];if($2<=2)$1[2]=$1[0];this._borderradius=$1;this.borderradius=$0;this.bordertopleftradius=parseFloat($1[0]);this.bordertoprightradius=parseFloat($1[1]);this.borderbottomrightradius=parseFloat($1[2]);this.borderbottomleftradius=parseFloat($1[3]);this.setAttribute("cornerradius",$1.join(" "));if(this.onborderradius.ready)this.onborderradius.sendEvent($0)
}},"bordertopleftradius",void 0,"onbordertopleftradius",void 0,"$lzc$set_bordertopleftradius",function($0){
if($0<0)return;if(this.bordertopleftradius===$0)return;this.bordertopleftradius=$0;if(this.onbordertopleftradius.ready)this.onbordertopleftradius.sendEvent($0)
},"bordertoprightradius",void 0,"onbordertoprightradius",void 0,"$lzc$set_bordertoprightradius",function($0){
if($0<0)return;if(this.bordertoprightradius===$0)return;this.bordertoprightradius=$0;if(this.onbordertoprightradius.ready)this.onbordertoprightradius.sendEvent($0)
},"borderbottomrightradius",void 0,"onborderbottomrightradius",void 0,"$lzc$set_borderbottomrightradius",function($0){
if($0<0)return;if(this.borderbottomrightradius===$0)return;this.borderbottomrightradius=$0;if(this.onborderbottomrightradius.ready)this.onborderbottomrightradius.sendEvent($0)
},"borderbottomleftradius",void 0,"onborderbottomleftradius",void 0,"$lzc$set_borderbottomleftradius",function($0){
if($0<0)return;if(this.borderbottomleftradius===$0)return;this.borderbottomleftradius=$0;if(this.onborderbottomleftradius.ready)this.onborderbottomleftradius.sendEvent($0)
},"_updateradii",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=[];$1[0]=this.bordertopleftradius;$1[1]=this.bordertoprightradius;$1[2]=this.borderbottomrightradius;$1[3]=this.borderbottomleftradius;this.$lzc$set_borderradius($1.join(" "))
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_drawpanel,["displayName","<drawpanel with='borderradius'>","children",LzNode.mergeChildren([],$lzc$class_drawpanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawpanel.attributes)],[$lzc$class_borderradius]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({borderbottomleftradius:new LzStyleConstraintExpr("borderbottomleftradius","number","border-bottom-left-radius",-1,false),borderbottomrightradius:new LzStyleConstraintExpr("borderbottomrightradius","number","border-bottom-right-radius",-1,false),borderradius:new LzStyleConstraintExpr("borderradius","string","border-radius","",false),bordertopleftradius:new LzStyleConstraintExpr("bordertopleftradius","number","border-top-left-radius",-1,false),bordertoprightradius:new LzStyleConstraintExpr("bordertoprightradius","number","border-top-right-radius",-1,false),onborderbottomleftradius:LzDeclaredEvent,onborderbottomrightradius:LzDeclaredEvent,onborderradius:LzDeclaredEvent,onbordertopleftradius:LzDeclaredEvent,onbordertoprightradius:LzDeclaredEvent},$lzc$class_$1.attributes)
}}})($lzc$class_$1)
};{
Class.make("$lzc$class_$2",["$1n",void 0,"basecolor",void 0,"onbasecolor",void 0,"$lzc$set_basecolor",function($0){
with(this){
this.basecolor=$0;this._basehsv=LzColorUtils.tohsv($0);if(this.onbasecolor.ready)this.onbasecolor.sendEvent($0)
}},"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.lockredraw=false;this.setAttribute("basecolor",this.basecolor)
},"$1o",function($0){
with(this){
if(!this.isinited)return;if(!$0)return;var $1=this._basehsv;if(!this.bordercolor){
this.setAttribute("bordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.1))
};if(!this.interiorfillcolor){
this.setAttribute("interiorfillcolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this.interiorbordercolor){
this.setAttribute("interiorbordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.2196))
}}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$1,["displayName","<drawpanel with='applybasecolor, borderradius'>","children",LzNode.mergeChildren([],$lzc$class_$1["children"]),"attributes",new LzInheritedHash($lzc$class_$1.attributes)],[$lzc$class_applybasecolor]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$1n:function($0){
with(this){
this.setAttribute("basecolor",LzColorUtils.convertColor("null"))
}},$delegates:["onbasecolor","$1o",null],basecolor:new LzStyleConstraintExpr("basecolor","color","base-color",new LzOnceExpr("basecolor","color","$1n",null),false),lockredraw:true,onbasecolor:LzDeclaredEvent},$lzc$class_$2.attributes)
}}})($lzc$class_$2)
};{
Class.make("$lzc$class_basepanel",["scopes",void 0,"drawchildren",void 0,"padding",void 0,"borderwidth",void 0,"$1p",void 0,"bordercolor",void 0,"highlightcolor",void 0,"iconcolor",void 0,"selectioncolor",void 0,"$1q",void 0,"interiorbordercolor",void 0,"$1r",void 0,"interiorfillcolor",void 0,"$1s",void 0,"$1t",void 0,"interiorborderwidth",void 0,"textcolor",void 0,"textshadowcolor",void 0,"redraw",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!canvas.isinited||this.lockredraw)return;if(this._lastupdate===LzIdleKernel.lastupdate&&this._drawcounter>9){
return
};var $1=false;if(this["draw"]){
this.draw(this);$1=true
};if(this.scopes&&this.scopes.length&&this.drawchildren){
$1=this.__drawchildren()
};if(this["drawlast"]){
this.drawlast(this);$1=true
};if($1)this._drawcounter++
}},"__drawchildren",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.scopes||!this.scopes.length||!this.drawchildren){
return
};var $1=this.measuresize;this.measuresize=false;var $2=false;for(var $3=0,$4=this.scopes.length;$3<$4;$3++){
var $5=this.scopes[$3];if($5){
var $6=$5.x;var $7=$5.y;this.translate($6,$7);this.beginPath();$5.draw(this);this.translate(-$6,-$7);$2=true
}};this.measuresize=$1;return $2
},"drawshape",function($0,$1,$2,$3,$4){
$0.rect($1,$2,$3,$4,this.bordertopleftradius,this.bordertoprightradius,this.borderbottomrightradius,this.borderbottomleftradius)
},"addScope",function($0){
with(this){
if(!this.scopes){
this.scopes=[$0]
}else{
this.scopes.push($0)
};new LzDelegate(this,"redraw",$0,"onx");new LzDelegate(this,"redraw",$0,"ony");new LzDelegate(this,"redraw",$0,"onwidth");new LzDelegate(this,"redraw",$0,"onheight")
}},"removeScope",function($0){
for(var $1=0;$1<this.scopes.length;$1++){
if(this.scopes[$1]===$0){
$0.onx.unregisterAll();$0.ony.unregisterAll();$0.onwidth.unregisterAll();$0.onheight.unregisterAll();this.scopes.splice($1,1);return
}}},"destroy",function(){
if(this.scopes){
for(var $0=0;$0<this.scopes.length;$0++){
var $1=this.scopes[$0];if($1){
$1.onx.unregisterAll();$1.ony.unregisterAll();$1.onwidth.unregisterAll();$1.onheight.unregisterAll()
}};this.scopes=null
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$2,["tagname","basepanel","children",LzNode.mergeChildren([],$lzc$class_$2["children"]),"attributes",new LzInheritedHash($lzc$class_$2.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$1p:function($0){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("null"))
}},$1q:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("null"))
}},$1r:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("null"))
}},$1s:function($0){
var $1=this.borderwidth;if($1!==this["interiorborderwidth"]||!this.inited){
this.setAttribute("interiorborderwidth",$1)
}},$1t:function(){
try{
return [this,"borderwidth"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},bordercolor:new LzStyleConstraintExpr("bordercolor","color","border-color",new LzOnceExpr("bordercolor","color","$1p",null),false),borderwidth:new LzStyleConstraintExpr("borderwidth","number","border-width",0,false),drawchildren:true,highlightcolor:new LzStyleConstraintExpr("highlightcolor","color","highlight-color",LzColorUtils.convertColor("0xff"),false),iconcolor:new LzStyleConstraintExpr("iconcolor","color","icon-color",LzColorUtils.convertColor("0xff"),false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","color","interior-border-color",new LzOnceExpr("interiorbordercolor","color","$1q",null),false),interiorborderwidth:new LzStyleConstraintExpr("interiorborderwidth","number","interior-border-width",new LzAlwaysExpr("interiorborderwidth","number","$1s","$1t",null),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","color","interior-fill-color",new LzOnceExpr("interiorfillcolor","color","$1r",null),false),padding:new LzStyleConstraintExpr("padding","number","padding",3,false),scopes:null,selectioncolor:new LzStyleConstraintExpr("selectioncolor","color","selection-color",LzColorUtils.convertColor("0xc2d9e7"),false),textcolor:new LzStyleConstraintExpr("textcolor","string","text-color","black",false),textshadowcolor:new LzStyleConstraintExpr("textshadowcolor","string","text-shadow-color","white",false)},$lzc$class_basepanel.attributes)
}}})($lzc$class_basepanel)
};{
Mixin.make("$lzc$class_virtualdrawview",["drawtarget",void 0,"ondrawtarget",void 0,"createContext",function(){
return
},"init",function(){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0);this.context=$0
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
},"$lzc$set_drawtarget",function($0){
if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.drawtarget=$0;$0.addScope(this);if(this.ondrawtarget.ready)this.ondrawtarget.sendEvent($0)
}},"destroy",function(){
if(this.drawtarget){
this.drawtarget.removeScope(this)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"redraw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.drawtarget||!canvas.isinited)return;this.drawtarget.redraw(this)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","virtualdrawview","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview.attributes)
}}})($lzc$class_virtualdrawview)
};{
Mixin.make("$lzc$class_componentmodel",["value",void 0,"disabled",void 0,"$1u",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$1v",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$1w",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$1x",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","componentmodel","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$1w","$1x",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$1u","$1v",null),value:""},$lzc$class_componentmodel.attributes)
}}})($lzc$class_componentmodel)
};{
Mixin.make("$lzc$class_componentfocus",["focusanimationspeed",void 0,"focused",void 0,"$1y",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$1z",function($0){
if(!this.focusable)return;this.setAttribute("focused",false)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","componentfocus","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$1y",null,"onblur","$1z",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus.attributes)
}}})($lzc$class_componentfocus)
};{
Mixin.make("$lzc$class_drawshadowfocus",["$20",function($0){
if($0){
var $1=10;if(this.capabilities["minimize_opacity_changes"]){
$1=2
};this.setAttribute("shadowcolor",this.highlightcolor);this.setAttribute("shadowdistance",0);this.setAttribute("shadowblurradius",0);this.animate("shadowblurradius",$1,this.focusanimationspeed)
}else{
if(this.disabled)return;var $2=this.animate("shadowblurradius",0,this.focusanimationspeed);new LzDelegate(this,"__finishBlur",$2,"onstop")
}},"__finishBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.setAttribute("shadowcolor",null)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","drawshadowfocus","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocused","$20",null]},$lzc$class_drawshadowfocus.attributes)
}}})($lzc$class_drawshadowfocus)
};{
Mixin.make("$lzc$class_buttonevents",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$21",function(){
return lz.ModeManager
},"$22",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$23",function($0){
this.setAttribute("mouseisover",true)
},"$24",function($0){
this.setAttribute("mouseisover",false)
},"$25",function($0){
this.setAttribute("mouseisdown",true)
},"$26",function($0){
this.setAttribute("mouseisdown",false)
},"$27",function($0){
this.onmouseover.sendEvent()
},"$28",function($0){
this.onmouseout.sendEvent()
},"$29",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$2a",function($0){
if($0==32||$0==13){
this.onmouseup.sendEvent();if(this.onclick.ready)this.onclick.sendEvent()
}},"_updateFrame",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=1;if(this.disabled){
$1=4
}else if(this.mouseisdown&&this.mouseisover){
$1=3
}else if(this.mouseisover){
$1=2
};if($1!==this.frame){
this.setAttribute("frame",$1)
};var $2="up";switch($1){
case 2:
$2="over";break;
case 3:
$2="down";break;

};if(this.mousestate!=$2){
this.setAttribute("mousestate",$2)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","buttonevents","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$22","$21","onmouseover","$23",null,"onmouseout","$24",null,"onmousedown","$25",null,"onmouseup","$26",null,"onfocus","$27",null,"onblur","$28",null,"onkeydown","$29",null,"onkeyup","$2a",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents.attributes)
}}})($lzc$class_buttonevents)
};{
Mixin.make("$lzc$class_mousedownrepeater",["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__mousestillDownDelegate=new LzDelegate(this,"__ismousestilldown")
},"__ismousestilldown",function($0){
var $1=$0-this.__mousedowntime;this.__mousedowntime=$0;if(this.mouseisdown){
var $2;if($1>600){
$2=this.__mousedowninitialinterval
}else{
$2=this.__mousedownrepeatinterval;this.onmousestilldown.sendEvent(this)
};lz.Timer.resetTimer(this.__mousestillDownDelegate,$2)
}},"$2b",function($0){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
},"$2c",function($0){
lz.Timer.removeTimer(this.__mousestillDownDelegate)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","mousedownrepeater","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousedown","$2b",null,"onmouseup","$2c",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater.attributes)
}}})($lzc$class_mousedownrepeater)
};{
Mixin.make("$lzc$class_keyboardrepeater",["__keydowntime",void 0,"__keystillDownDelegate",void 0,"__keydownrepeatinterval",void 0,"__keydowninitialinterval",void 0,"onkeystilldown",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__keystillDownDelegate=new LzDelegate(this,"__iskeystilldown")
},"__iskeystilldown",function($0){
var $1=$0-this.__keydowntime;this.__keydowntime=$0;var $2=lz.Keys.downKeysArray;if($2.length>0){
var $3;if($1>this.__keydowninitialinterval){
$3=this.__keydowninitialinterval
}else{
$3=this.__keydownrepeatinterval;for(var $4=0;$4<$2.length;$4++){
this.onkeystilldown.sendEvent($2[$4])
}};lz.Timer.resetTimer(this.__keystillDownDelegate,$3)
}},"$2d",function($0){
this.__keydowntime=new Date().getTime();lz.Timer.addTimer(this.__keystillDownDelegate,this.__keydowninitialinterval)
},"$2e",function($0){
if(lz.Keys.downKeysArray.length==0){
lz.Timer.removeTimer(this.__keystillDownDelegate)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","keyboardrepeater","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onkeydown","$2d",null,"onkeyup","$2e",null],__keydowninitialinterval:300,__keydownrepeatinterval:50,__keydowntime:0,__keystillDownDelegate:null,onkeystilldown:LzDeclaredEvent},$lzc$class_keyboardrepeater.attributes)
}}})($lzc$class_keyboardrepeater)
};{
Mixin.make("$lzc$class_stylebutton",["vertical",void 0,"bevel",void 0,"$2f",void 0,"interiorbordercolor",void 0,"$2g",void 0,"$2h",void 0,"interiorbordercolorup",void 0,"$2i",void 0,"$2j",void 0,"interiorbordercolorover",void 0,"$2k",void 0,"$2l",void 0,"interiorbordercolordown",void 0,"$2m",void 0,"interiorfillcolor",void 0,"$2n",void 0,"$2o",void 0,"interiorfillcolorup",void 0,"$2p",void 0,"$2q",void 0,"interiorfillcolorover",void 0,"$2r",void 0,"$2s",void 0,"interiorfillcolordown",void 0,"gradientfill",void 0,"ongradientfill",void 0,"$lzc$set_gradientfill",function($0){
if($0&&$0!=this.gradientfill){
this._gradientfill=this.parseLinearGradient($0)
};this.gradientfill=$0;if(this.ongradientfill.ready)this.ongradientfill.sendEvent($0)
},"_parseLinearGradientCache",void 0,"parseLinearGradient",function($0){
var $1=this._parseLinearGradientCache[$0];if($1){
return {startpos:$1.startpos,colorstops:$1.colorstops.slice(),css:$1.css}}else{
var $2=$0.split(",");if($2.length<2){
return
};var $3=$2.shift();$1={};$1.startpos=$3;$1.colorstops=[];$1.css=$0;var $4=LzColorUtils.hextoint;for(var $5=0;$5<$2.length;$5++){
var $6=$2[$5].split(" ");$1.colorstops[$5]={color:$4($6[0]),percentage:parseInt($6[1])*0.01}};this._parseLinearGradientCache[$0]=$1
};return $1
},"__tintColor",void 0,"tintColor",function($0,$1){
var $2=$0+"."+$1;if(this.__tintColor[$2])return this.__tintColor[$2];if($1==null){
$1=this._basehsv
}else{
$1=LzColorUtils.tohsv($1)
};if(!$1){
return $0
}else{
var $3=LzColorUtils.tohsv($0);this.__tintColor[$2]=LzColorUtils.fromhsv($1.h,$1.s,$3.v);return this.__tintColor[$2]
}},"__resetgradientcache",function($0){
this.__dirty=false;this._gradientfills={}},"cssToLinearGradient",function($0,$1){
if(!$1||!$1.css)return;var $2=this["_gradientfills"];if(!$2){
$2=this._gradientfills={}}else if($2[$1.css]!=null){
return $2[$1.css]
};var $3=0,$4=0,$5=0,$6=0,$7=$1.startpos;if($7=="top"){
$6=this.height
}else if($7=="bottom"){
$4=this.height
}else if($7=="left"){
$5=this.width
}else if($7=="right"){
$3=this.width
};var $8=$0.createLinearGradient($3,$4,$5,$6);var $9=$1.colorstops;for(var $a=0,$b=$9.length;$a<$b;$a++){
var $c=$9[$a];$8.addColorStop($c.percentage,$c.color)
};return $8
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","stylebutton","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$2f:function($0){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
},$2g:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$2h:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$2i:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$2j:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$2k:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$2l:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$2m:function($0){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
},$2n:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$2o:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$2p:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$2q:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$2r:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$2s:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$delegates:["onwidth","__resetgradientcache",null,"onheight","__resetgradientcache",null,"onbasecolor","__resetgradientcache",null],__tintColor:{},_parseLinearGradientCache:{},bevel:new LzStyleConstraintExpr("bevel","number","bevel-width",0,false),gradientfill:new LzStyleConstraintExpr("gradientfill","string","gradient-fill","",false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","color","interior-border-color",new LzOnceExpr("interiorbordercolor","color","$2f",null),false),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","color","interior-border-color-down",new LzAlwaysExpr("interiorbordercolordown","color","$2k","$2l",null),false),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","color","interior-border-color-over",new LzAlwaysExpr("interiorbordercolorover","color","$2i","$2j",null),false),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","color","interior-border-color-up",new LzAlwaysExpr("interiorbordercolorup","color","$2g","$2h",null),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","color","interior-fill-color",new LzOnceExpr("interiorfillcolor","color","$2m",null),false),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","color","interior-fill-color-down",new LzAlwaysExpr("interiorfillcolordown","color","$2r","$2s",null),false),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","color","interior-fill-color-over",new LzAlwaysExpr("interiorfillcolorover","color","$2p","$2q",null),false),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","color","interior-fill-color-up",new LzAlwaysExpr("interiorfillcolorup","color","$2n","$2o",null),false),ongradientfill:LzDeclaredEvent,vertical:new LzStyleConstraintExpr("vertical","boolean","gradient-vertical",false,false)},$lzc$class_stylebutton.attributes)
}}})($lzc$class_stylebutton)
};{
Mixin.make("$lzc$class_drawbutton",["gradienttransition",void 0,"gradienttransitionspeed",void 0,"transitionto",void 0,"transitionfrom",void 0,"draw",function($0){
if(this["drawtarget"]&&$0===this){
return
};$0.globalAlpha=this.disabled?0.5:1;if(!this.__dirty){
if(this.interiorborderwidth){
$0.lineWidth=$0.interiorborderwidth;this.styleinteriorborder($0);this.drawinteriorborder($0)
};$0.lineWidth=$0.borderwidth;if(this.borderwidth){
this.styleborder($0);this.drawborder($0)
};this.__dirty=false
};this.stylegradient($0);this.drawgradient($0)
},"styleborder",function($0){
if(!this.bordercolor)return;$0.strokeStyle=this.bordercolor
},"drawborder",function($0){
if(this.borderwidth<=0)return;if(!this.bordercolor)return;$0.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);$0.closePath();$0.stroke()
},"styleinteriorborder",function($0){
if(!this["interiorfillcolor"]||!this["interiorbordercolor"])return;$0.fillStyle=this["interiorfillcolor"];$0.strokeStyle=this["interiorbordercolor"]
},"drawinteriorborder",function($0){
if(!this["interiorfillcolor"])return;$0.beginPath();this.drawshape($0,1,1,this.width-3,this.height-3);$0.closePath();$0.fill();$0.stroke()
},"updateTransitions",function($0){
if(!this.baseto)this.baseto=this.basecolor;this.basefrom=this.baseto;this.baseto=this.basecolor;if(!this.transitionto)this.transitionto=this._gradientfill;this.transitionfrom=this.transitionto;this.transitionto=this._gradientfill;if(typeof $0=="string"){
this.gradienttransition=0;if(this._oldanim)this._oldanim.setAttribute("started",false);this._oldanim=this.animate("gradienttransition",1,this.gradienttransitionspeed)
}},"stylegradient",function($0){
var $1=this["gradientfill"];if(this.vertical){
var $2=$1.indexOf("top");if($2>-1){
$1="left"+$1.substring($2+3)
}else{
$2=$1.indexOf("bottom");if($2>-1){
$1="right"+$1.substring($2+6)
}}};var $3=this.parseLinearGradient($1);if(this.transitionfrom!=null){
var $4=[];var $5=this.transitionto.colorstops;var $6=this.transitionfrom.colorstops;for(var $7=0,$8=$5.length;$7<$8;$7++){
var $9={};var $a=this.tweenrgb(this.basefrom,this.baseto,this.gradienttransition);$9.color=this.tintColor(this.tweenrgb($6[$7].color,$5[$7].color,this.gradienttransition),$a);var $b=$5[$7].percentage-$6[$7].percentage;$9.percentage=$6[$7].percentage+$b*this.gradienttransition;$4[$7]=$9
};$3.colorstops=$4
};$0.fillStyle=this.cssToLinearGradient($0,$3)
},"tweenrgb",function($0,$1,$2){
if($0===$1)return $0;var $3=$0>>16&255,$4=$0>>8&255,$5=$0&255;var $6=$1>>16&255,$7=$1>>8&255,$8=$1&255;var $9=$3+($6-$3)*$2;var $a=$4+($7-$4)*$2;var $b=$5+($8-$5)*$2;return($9<<16)+($a<<8)+($b|0)
},"drawgradient",function($0){
if(!this.__dirty){
var $1=1.5;if(this.bevel){
var $1=this.bevel+this.borderwidth
};$0.beginPath();this.drawshape($0,$1,$1,this.width-$1*2-1,this.height-$1*2-1);$0.closePath()
};$0.fill()
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","drawbutton","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousestate","redraw",null,"ongradienttransition","redraw",null,"onmousestate","updateTransitions",null,"oninit","updateTransitions",null],gradienttransition:0,gradienttransitionspeed:new LzStyleConstraintExpr("gradienttransitionspeed","number","gradient-transition-speed",300,false),transitionfrom:null,transitionto:null},$lzc$class_drawbutton.attributes)
}}})($lzc$class_drawbutton)
};{
Class.make("$lzc$class_$3",["gradienttransition",void 0,"gradienttransitionspeed",void 0,"transitionto",void 0,"transitionfrom",void 0,"draw",function($0){
if(this["drawtarget"]&&$0===this){
return
};$0.globalAlpha=this.disabled?0.5:1;if(!this.__dirty){
if(this.interiorborderwidth){
$0.lineWidth=$0.interiorborderwidth;this.styleinteriorborder($0);this.drawinteriorborder($0)
};$0.lineWidth=$0.borderwidth;if(this.borderwidth){
this.styleborder($0);this.drawborder($0)
};this.__dirty=false
};this.stylegradient($0);this.drawgradient($0)
},"styleborder",function($0){
if(!this.bordercolor)return;$0.strokeStyle=this.bordercolor
},"drawborder",function($0){
if(this.borderwidth<=0)return;if(!this.bordercolor)return;$0.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);$0.closePath();$0.stroke()
},"styleinteriorborder",function($0){
if(!this["interiorfillcolor"]||!this["interiorbordercolor"])return;$0.fillStyle=this["interiorfillcolor"];$0.strokeStyle=this["interiorbordercolor"]
},"drawinteriorborder",function($0){
if(!this["interiorfillcolor"])return;$0.beginPath();this.drawshape($0,1,1,this.width-3,this.height-3);$0.closePath();$0.fill();$0.stroke()
},"updateTransitions",function($0){
if(!this.baseto)this.baseto=this.basecolor;this.basefrom=this.baseto;this.baseto=this.basecolor;if(!this.transitionto)this.transitionto=this._gradientfill;this.transitionfrom=this.transitionto;this.transitionto=this._gradientfill;if(typeof $0=="string"){
this.gradienttransition=0;if(this._oldanim)this._oldanim.setAttribute("started",false);this._oldanim=this.animate("gradienttransition",1,this.gradienttransitionspeed)
}},"stylegradient",function($0){
var $1=this["gradientfill"];if(this.vertical){
var $2=$1.indexOf("top");if($2>-1){
$1="left"+$1.substring($2+3)
}else{
$2=$1.indexOf("bottom");if($2>-1){
$1="right"+$1.substring($2+6)
}}};var $3=this.parseLinearGradient($1);if(this.transitionfrom!=null){
var $4=[];var $5=this.transitionto.colorstops;var $6=this.transitionfrom.colorstops;for(var $7=0,$8=$5.length;$7<$8;$7++){
var $9={};var $a=this.tweenrgb(this.basefrom,this.baseto,this.gradienttransition);$9.color=this.tintColor(this.tweenrgb($6[$7].color,$5[$7].color,this.gradienttransition),$a);var $b=$5[$7].percentage-$6[$7].percentage;$9.percentage=$6[$7].percentage+$b*this.gradienttransition;$4[$7]=$9
};$3.colorstops=$4
};$0.fillStyle=this.cssToLinearGradient($0,$3)
},"tweenrgb",function($0,$1,$2){
if($0===$1)return $0;var $3=$0>>16&255,$4=$0>>8&255,$5=$0&255;var $6=$1>>16&255,$7=$1>>8&255,$8=$1&255;var $9=$3+($6-$3)*$2;var $a=$4+($7-$4)*$2;var $b=$5+($8-$5)*$2;return($9<<16)+($a<<8)+($b|0)
},"drawgradient",function($0){
if(!this.__dirty){
var $1=1.5;if(this.bevel){
var $1=this.bevel+this.borderwidth
};$0.beginPath();this.drawshape($0,$1,$1,this.width-$1*2-1,this.height-$1*2-1);$0.closePath()
};$0.fill()
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_basepanel,["displayName","<basepanel with='drawbutton'>","children",LzNode.mergeChildren([],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)],[$lzc$class_drawbutton]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousestate","redraw",null,"ongradienttransition","redraw",null,"onmousestate","updateTransitions",null,"oninit","updateTransitions",null],gradienttransition:0,gradienttransitionspeed:new LzStyleConstraintExpr("gradienttransitionspeed","number","gradient-transition-speed",300,false),transitionfrom:null,transitionto:null},$lzc$class_$3.attributes)
}}})($lzc$class_$3)
};{
Class.make("$lzc$class_$4",["vertical",void 0,"bevel",void 0,"$2t",void 0,"$2u",void 0,"$2v",void 0,"interiorbordercolorup",void 0,"$2w",void 0,"$2x",void 0,"interiorbordercolorover",void 0,"$2y",void 0,"$2z",void 0,"interiorbordercolordown",void 0,"$30",void 0,"$31",void 0,"$32",void 0,"interiorfillcolorup",void 0,"$33",void 0,"$34",void 0,"interiorfillcolorover",void 0,"$35",void 0,"$36",void 0,"interiorfillcolordown",void 0,"gradientfill",void 0,"ongradientfill",void 0,"$lzc$set_gradientfill",function($0){
if($0&&$0!=this.gradientfill){
this._gradientfill=this.parseLinearGradient($0)
};this.gradientfill=$0;if(this.ongradientfill.ready)this.ongradientfill.sendEvent($0)
},"_parseLinearGradientCache",void 0,"parseLinearGradient",function($0){
with(this){
var $1=this._parseLinearGradientCache[$0];if($1){
return {startpos:$1.startpos,colorstops:$1.colorstops.slice(),css:$1.css}}else{
var $2=$0.split(",");if($2.length<2){
return
};var $3=$2.shift();$1={};$1.startpos=$3;$1.colorstops=[];$1.css=$0;var $4=LzColorUtils.hextoint;for(var $5=0;$5<$2.length;$5++){
var $6=$2[$5].split(" ");$1.colorstops[$5]={color:$4($6[0]),percentage:parseInt($6[1])*0.01}};this._parseLinearGradientCache[$0]=$1
};return $1
}},"__tintColor",void 0,"tintColor",function($0,$1){
with(this){
var $2=$0+"."+$1;if(this.__tintColor[$2])return this.__tintColor[$2];if($1==null){
$1=this._basehsv
}else{
$1=LzColorUtils.tohsv($1)
};if(!$1){
return $0
}else{
var $3=LzColorUtils.tohsv($0);this.__tintColor[$2]=LzColorUtils.fromhsv($1.h,$1.s,$3.v);return this.__tintColor[$2]
}}},"__resetgradientcache",function($0){
this.__dirty=false;this._gradientfills={}},"cssToLinearGradient",function($0,$1){
if(!$1||!$1.css)return;var $2=this["_gradientfills"];if(!$2){
$2=this._gradientfills={}}else if($2[$1.css]!=null){
return $2[$1.css]
};var $3=0,$4=0,$5=0,$6=0,$7=$1.startpos;if($7=="top"){
$6=this.height
}else if($7=="bottom"){
$4=this.height
}else if($7=="left"){
$5=this.width
}else if($7=="right"){
$3=this.width
};var $8=$0.createLinearGradient($3,$4,$5,$6);var $9=$1.colorstops;for(var $a=0,$b=$9.length;$a<$b;$a++){
var $c=$9[$a];$8.addColorStop($c.percentage,$c.color)
};return $8
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$3,["displayName","<basepanel with='stylebutton, drawbutton'>","children",LzNode.mergeChildren([],$lzc$class_$3["children"]),"attributes",new LzInheritedHash($lzc$class_$3.attributes)],[$lzc$class_stylebutton]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$2t:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
}},$2u:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$2v:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$2w:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$2x:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$2y:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$2z:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$30:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
}},$31:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$32:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$33:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$34:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$35:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$36:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$delegates:["onwidth","__resetgradientcache",null,"onheight","__resetgradientcache",null,"onbasecolor","__resetgradientcache",null],__tintColor:{},_parseLinearGradientCache:{},bevel:new LzStyleConstraintExpr("bevel","number","bevel-width",0,false),gradientfill:new LzStyleConstraintExpr("gradientfill","string","gradient-fill","",false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","color","interior-border-color",new LzOnceExpr("interiorbordercolor","color","$2t",null),false),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","color","interior-border-color-down",new LzAlwaysExpr("interiorbordercolordown","color","$2y","$2z",null),false),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","color","interior-border-color-over",new LzAlwaysExpr("interiorbordercolorover","color","$2w","$2x",null),false),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","color","interior-border-color-up",new LzAlwaysExpr("interiorbordercolorup","color","$2u","$2v",null),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","color","interior-fill-color",new LzOnceExpr("interiorfillcolor","color","$30",null),false),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","color","interior-fill-color-down",new LzAlwaysExpr("interiorfillcolordown","color","$35","$36",null),false),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","color","interior-fill-color-over",new LzAlwaysExpr("interiorfillcolorover","color","$33","$34",null),false),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","color","interior-fill-color-up",new LzAlwaysExpr("interiorfillcolorup","color","$31","$32",null),false),ongradientfill:LzDeclaredEvent,vertical:new LzStyleConstraintExpr("vertical","boolean","gradient-vertical",false,false)},$lzc$class_$4.attributes)
}}})($lzc$class_$4)
};Class.make("$lzc$class_39",["$37",function($0){
with(this){
var $1=parent.axis;if($1!==this["axis"]||!this.inited){
this.setAttribute("axis",$1)
}}},"$38",function(){
with(this){
try{
return [parent,"axis"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_simplelayout,["displayName","<anonymous extends='simplelayout'>","attributes",new LzInheritedHash($lzc$class_simplelayout.attributes)]);{
Class.make("$lzc$class_buttongroup",["axis",void 0,"dividergradient",void 0,"_updateborders",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(!this._borderradius)return;if(!this.handleArrowDel){
this.handleArrowDel=new LzDelegate(this,"handleArrow")
}else{
this.handleArrowDel.unregisterAll()
};var $1=this.subviews;var $2=this._borderradius;var $3=this.axis;for(var $4=0,$5=$1.length;$4<$5;$4++){
var $6=$1[$4];var $7=0;var $8=0;var $9=0;var $a=0;if($4==0){
if($3=="x"){
$7=$2[0];$a=$2[3]
}else{
$7=$2[0];$8=$2[1]
}}else if($4==$5-1){
if($3=="x"){
$8=$2[1];$9=$2[2]
}else{
$a=$2[3];$9=$2[2]
}};$6.setAttribute("borderradius",[$7,$8,$9,$a].join(" "));this.handleArrowDel.register($6,"onkeydown")
}}},"handleArrow",function($0){
with(this){
var $1;if($0==37||$0==38){
$1=-1
}else if($0==39||$0==40){
$1=1
}else{
return
};var $2;for(var $3=0,$4=this.subviews.length;$3<$4;$3++){
var $5=this.subviews[$3];if($5.focused){
$2=$5;break
}};if($2){
var $6;$3+=$1;while($3>=0&&$3<$4){
var $5=this.subviews[$3];if($5.disabled!=true){
$6=$5;break
};$3+=$1
};if($6){
lz.Focus.setFocus($6)
}}}},"draw",function($0){
with(this){
this._updateborders();this.styleinteriorborder($0);this.drawinteriorborder($0);for(var $1=0,$2=subviews.length;$1<$2;$1++){
var $3=subviews[$1];if($3.disabled){
continue
};$0.beginPath();$3.drawshape($0,$3.x,$3.y,$3.width,$3.height-1);$0.closePath();$3.stylegradient($0);$0.fill()
}}},"drawlast",function($0){
with(this){
if($0.dividergradient){};var $1=0;for(var $2=0,$3=this.subviews.length-1;$2<$3;$2++){
var $4=subviews[$2];if(this.axis=="x"){
$1+=$4.width;$0.fillRect($1,1,1,this.height-2)
}else{
$1+=$4.height;$0.fillRect(1,$1,this.width-2,1)
}};$0.lineWidth=1;this.styleinteriorborder($0);this.beginPath();this.drawshape($0,1,1,this.width-3,this.height-3);$0.stroke();if($0.bordercolor){
$0.strokeStyle=$0.bordercolor;this.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);$0.stroke()
}}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$4,["tagname","buttongroup","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,axis:new LzAlwaysExpr("axis","string","$37","$38",null),spacing:0},"class":$lzc$class_39}],$lzc$class_$4["children"]),"attributes",new LzInheritedHash($lzc$class_$4.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onaddsubview","_updateborders",null],axis:"x",dividergradient:new LzStyleConstraintExpr("dividergradient","string","divider-gradient","",false),drawchildren:false},$lzc$class_buttongroup.attributes)
}}})($lzc$class_buttongroup)
};{
Class.make("$lzc$class_$5",["focusanimationspeed",void 0,"focused",void 0,"$3a",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$3b",function($0){
if(!this.focusable)return;this.setAttribute("focused",false)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_basepanel,["displayName","<basepanel with='componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)],[$lzc$class_componentfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$3a",null,"onblur","$3b",null],focusanimationspeed:500,focused:false},$lzc$class_$5.attributes)
}}})($lzc$class_$5)
};{
Class.make("$lzc$class_$6",["gradienttransition",void 0,"gradienttransitionspeed",void 0,"transitionto",void 0,"transitionfrom",void 0,"draw",function($0){
if(this["drawtarget"]&&$0===this){
return
};$0.globalAlpha=this.disabled?0.5:1;if(!this.__dirty){
if(this.interiorborderwidth){
$0.lineWidth=$0.interiorborderwidth;this.styleinteriorborder($0);this.drawinteriorborder($0)
};$0.lineWidth=$0.borderwidth;if(this.borderwidth){
this.styleborder($0);this.drawborder($0)
};this.__dirty=false
};this.stylegradient($0);this.drawgradient($0)
},"styleborder",function($0){
if(!this.bordercolor)return;$0.strokeStyle=this.bordercolor
},"drawborder",function($0){
if(this.borderwidth<=0)return;if(!this.bordercolor)return;$0.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);$0.closePath();$0.stroke()
},"styleinteriorborder",function($0){
if(!this["interiorfillcolor"]||!this["interiorbordercolor"])return;$0.fillStyle=this["interiorfillcolor"];$0.strokeStyle=this["interiorbordercolor"]
},"drawinteriorborder",function($0){
if(!this["interiorfillcolor"])return;$0.beginPath();this.drawshape($0,1,1,this.width-3,this.height-3);$0.closePath();$0.fill();$0.stroke()
},"updateTransitions",function($0){
if(!this.baseto)this.baseto=this.basecolor;this.basefrom=this.baseto;this.baseto=this.basecolor;if(!this.transitionto)this.transitionto=this._gradientfill;this.transitionfrom=this.transitionto;this.transitionto=this._gradientfill;if(typeof $0=="string"){
this.gradienttransition=0;if(this._oldanim)this._oldanim.setAttribute("started",false);this._oldanim=this.animate("gradienttransition",1,this.gradienttransitionspeed)
}},"stylegradient",function($0){
var $1=this["gradientfill"];if(this.vertical){
var $2=$1.indexOf("top");if($2>-1){
$1="left"+$1.substring($2+3)
}else{
$2=$1.indexOf("bottom");if($2>-1){
$1="right"+$1.substring($2+6)
}}};var $3=this.parseLinearGradient($1);if(this.transitionfrom!=null){
var $4=[];var $5=this.transitionto.colorstops;var $6=this.transitionfrom.colorstops;for(var $7=0,$8=$5.length;$7<$8;$7++){
var $9={};var $a=this.tweenrgb(this.basefrom,this.baseto,this.gradienttransition);$9.color=this.tintColor(this.tweenrgb($6[$7].color,$5[$7].color,this.gradienttransition),$a);var $b=$5[$7].percentage-$6[$7].percentage;$9.percentage=$6[$7].percentage+$b*this.gradienttransition;$4[$7]=$9
};$3.colorstops=$4
};$0.fillStyle=this.cssToLinearGradient($0,$3)
},"tweenrgb",function($0,$1,$2){
if($0===$1)return $0;var $3=$0>>16&255,$4=$0>>8&255,$5=$0&255;var $6=$1>>16&255,$7=$1>>8&255,$8=$1&255;var $9=$3+($6-$3)*$2;var $a=$4+($7-$4)*$2;var $b=$5+($8-$5)*$2;return($9<<16)+($a<<8)+($b|0)
},"drawgradient",function($0){
if(!this.__dirty){
var $1=1.5;if(this.bevel){
var $1=this.bevel+this.borderwidth
};$0.beginPath();this.drawshape($0,$1,$1,this.width-$1*2-1,this.height-$1*2-1);$0.closePath()
};$0.fill()
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$5,["displayName","<basepanel with='drawbutton, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_$5["children"]),"attributes",new LzInheritedHash($lzc$class_$5.attributes)],[$lzc$class_drawbutton]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousestate","redraw",null,"ongradienttransition","redraw",null,"onmousestate","updateTransitions",null,"oninit","updateTransitions",null],gradienttransition:0,gradienttransitionspeed:new LzStyleConstraintExpr("gradienttransitionspeed","number","gradient-transition-speed",300,false),transitionfrom:null,transitionto:null},$lzc$class_$6.attributes)
}}})($lzc$class_$6)
};{
Class.make("$lzc$class_$7",["$3c",function($0){
with(this){
if($0){
var $1=10;if(this.capabilities["minimize_opacity_changes"]){
$1=2
};this.setAttribute("shadowcolor",this.highlightcolor);this.setAttribute("shadowdistance",0);this.setAttribute("shadowblurradius",0);this.animate("shadowblurradius",$1,this.focusanimationspeed)
}else{
if(this.disabled)return;var $2=this.animate("shadowblurradius",0,this.focusanimationspeed);new LzDelegate(this,"__finishBlur",$2,"onstop")
}}},"__finishBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.setAttribute("shadowcolor",null)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$6,["displayName","<basepanel with='drawshadowfocus, drawbutton, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_$6["children"]),"attributes",new LzInheritedHash($lzc$class_$6.attributes)],[$lzc$class_drawshadowfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocused","$3c",null]},$lzc$class_$7.attributes)
}}})($lzc$class_$7)
};{
Class.make("$lzc$class_$8",["vertical",void 0,"bevel",void 0,"$3d",void 0,"$3e",void 0,"$3f",void 0,"interiorbordercolorup",void 0,"$3g",void 0,"$3h",void 0,"interiorbordercolorover",void 0,"$3i",void 0,"$3j",void 0,"interiorbordercolordown",void 0,"$3k",void 0,"$3l",void 0,"$3m",void 0,"interiorfillcolorup",void 0,"$3n",void 0,"$3o",void 0,"interiorfillcolorover",void 0,"$3p",void 0,"$3q",void 0,"interiorfillcolordown",void 0,"gradientfill",void 0,"ongradientfill",void 0,"$lzc$set_gradientfill",function($0){
if($0&&$0!=this.gradientfill){
this._gradientfill=this.parseLinearGradient($0)
};this.gradientfill=$0;if(this.ongradientfill.ready)this.ongradientfill.sendEvent($0)
},"_parseLinearGradientCache",void 0,"parseLinearGradient",function($0){
with(this){
var $1=this._parseLinearGradientCache[$0];if($1){
return {startpos:$1.startpos,colorstops:$1.colorstops.slice(),css:$1.css}}else{
var $2=$0.split(",");if($2.length<2){
return
};var $3=$2.shift();$1={};$1.startpos=$3;$1.colorstops=[];$1.css=$0;var $4=LzColorUtils.hextoint;for(var $5=0;$5<$2.length;$5++){
var $6=$2[$5].split(" ");$1.colorstops[$5]={color:$4($6[0]),percentage:parseInt($6[1])*0.01}};this._parseLinearGradientCache[$0]=$1
};return $1
}},"__tintColor",void 0,"tintColor",function($0,$1){
with(this){
var $2=$0+"."+$1;if(this.__tintColor[$2])return this.__tintColor[$2];if($1==null){
$1=this._basehsv
}else{
$1=LzColorUtils.tohsv($1)
};if(!$1){
return $0
}else{
var $3=LzColorUtils.tohsv($0);this.__tintColor[$2]=LzColorUtils.fromhsv($1.h,$1.s,$3.v);return this.__tintColor[$2]
}}},"__resetgradientcache",function($0){
this.__dirty=false;this._gradientfills={}},"cssToLinearGradient",function($0,$1){
if(!$1||!$1.css)return;var $2=this["_gradientfills"];if(!$2){
$2=this._gradientfills={}}else if($2[$1.css]!=null){
return $2[$1.css]
};var $3=0,$4=0,$5=0,$6=0,$7=$1.startpos;if($7=="top"){
$6=this.height
}else if($7=="bottom"){
$4=this.height
}else if($7=="left"){
$5=this.width
}else if($7=="right"){
$3=this.width
};var $8=$0.createLinearGradient($3,$4,$5,$6);var $9=$1.colorstops;for(var $a=0,$b=$9.length;$a<$b;$a++){
var $c=$9[$a];$8.addColorStop($c.percentage,$c.color)
};return $8
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$7,["displayName","<basepanel with='stylebutton, drawshadowfocus, drawbutton, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_$7["children"]),"attributes",new LzInheritedHash($lzc$class_$7.attributes)],[$lzc$class_stylebutton]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$3d:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
}},$3e:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$3f:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$3g:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$3h:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$3i:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$3j:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$3k:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
}},$3l:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$3m:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$3n:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$3o:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$3p:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$3q:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$delegates:["onwidth","__resetgradientcache",null,"onheight","__resetgradientcache",null,"onbasecolor","__resetgradientcache",null],__tintColor:{},_parseLinearGradientCache:{},bevel:new LzStyleConstraintExpr("bevel","number","bevel-width",0,false),gradientfill:new LzStyleConstraintExpr("gradientfill","string","gradient-fill","",false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","color","interior-border-color",new LzOnceExpr("interiorbordercolor","color","$3d",null),false),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","color","interior-border-color-down",new LzAlwaysExpr("interiorbordercolordown","color","$3i","$3j",null),false),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","color","interior-border-color-over",new LzAlwaysExpr("interiorbordercolorover","color","$3g","$3h",null),false),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","color","interior-border-color-up",new LzAlwaysExpr("interiorbordercolorup","color","$3e","$3f",null),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","color","interior-fill-color",new LzOnceExpr("interiorfillcolor","color","$3k",null),false),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","color","interior-fill-color-down",new LzAlwaysExpr("interiorfillcolordown","color","$3p","$3q",null),false),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","color","interior-fill-color-over",new LzAlwaysExpr("interiorfillcolorover","color","$3n","$3o",null),false),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","color","interior-fill-color-up",new LzAlwaysExpr("interiorfillcolorup","color","$3l","$3m",null),false),ongradientfill:LzDeclaredEvent,vertical:new LzStyleConstraintExpr("vertical","boolean","gradient-vertical",false,false)},$lzc$class_$8.attributes)
}}})($lzc$class_$8)
};{
Class.make("$lzc$class_$9",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$3r",function(){
with(this){
return lz.ModeManager
}},"$3s",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$3t",function($0){
this.setAttribute("mouseisover",true)
},"$3u",function($0){
this.setAttribute("mouseisover",false)
},"$3v",function($0){
this.setAttribute("mouseisdown",true)
},"$3w",function($0){
this.setAttribute("mouseisdown",false)
},"$3x",function($0){
this.onmouseover.sendEvent()
},"$3y",function($0){
this.onmouseout.sendEvent()
},"$3z",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$40",function($0){
if($0==32||$0==13){
this.onmouseup.sendEvent();if(this.onclick.ready)this.onclick.sendEvent()
}},"_updateFrame",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=1;if(this.disabled){
$1=4
}else if(this.mouseisdown&&this.mouseisover){
$1=3
}else if(this.mouseisover){
$1=2
};if($1!==this.frame){
this.setAttribute("frame",$1)
};var $2="up";switch($1){
case 2:
$2="over";break;
case 3:
$2="down";break;

};if(this.mousestate!=$2){
this.setAttribute("mousestate",$2)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$8,["displayName","<basepanel with='buttonevents, stylebutton, drawshadowfocus, drawbutton, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_$8["children"]),"attributes",new LzInheritedHash($lzc$class_$8.attributes)],[$lzc$class_buttonevents]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$3s","$3r","onmouseover","$3t",null,"onmouseout","$3u",null,"onmousedown","$3v",null,"onmouseup","$3w",null,"onfocus","$3x",null,"onblur","$3y",null,"onkeydown","$3z",null,"onkeyup","$40",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_$9.attributes)
}}})($lzc$class_$9)
};{
Class.make("$lzc$class_$a",["value",void 0,"disabled",void 0,"$41",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$42",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$43",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$44",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$9,["displayName","<basepanel with='componentmodel, buttonevents, stylebutton, drawshadowfocus, drawbutton, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_$9["children"]),"attributes",new LzInheritedHash($lzc$class_$9.attributes)],[$lzc$class_componentmodel]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$43","$44",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$41","$42",null),value:""},$lzc$class_$a.attributes)
}}})($lzc$class_$a)
};Class.make("$lzc$class_bsbtn",["$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$a,["tagname","bsbtn","children",LzNode.mergeChildren([],$lzc$class_$a["children"]),"attributes",new LzInheritedHash($lzc$class_$a.attributes)]);Class.make("$lzc$class_4q",["$4a",function($0){
with(this){
var $1=parent.iconresource;if($1!==this["resource"]||!this.inited){
this.setAttribute("resource",$1)
}}},"$4b",function(){
with(this){
try{
return [parent,"iconresource"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzView,["displayName","<anonymous extends='view'>","attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_4r",["$4g",function($0){
with(this){
var $1=parent.textcolor;if($1!==this["fgcolor"]||!this.inited){
this.setAttribute("fgcolor",$1)
}}},"$4h",function(){
with(this){
try{
return [parent,"textcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$4i",function($0){
with(this){
var $1=classroot.text;if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}}},"$4j",function(){
with(this){
try{
return [classroot,"text"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$4k",function($0){
with(this){
var $1=(parent.width-this.width)*0.5;if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}}},"$4l",function(){
with(this){
try{
return [parent,"width",this,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$4m",function($0){
with(this){
var $1=(parent.height-this.height)*0.5;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$4n",function(){
with(this){
try{
return [parent,"height",this,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$4o",function($0){
with(this){
var $1=parent.textshadowcolor;if($1!==this["shadowcolor"]||!this.inited){
this.setAttribute("shadowcolor",$1)
}}},"$4p",function(){
with(this){
try{
return [parent,"textshadowcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzText,["displayName","<anonymous extends='text'>","attributes",new LzInheritedHash(LzText.attributes)]);{
Class.make("$lzc$class_btn",["$45",function($0){
var $1=this.txt.width+this.padding;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$46",function(){
try{
return [this.txt,"width",this,"padding"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$47",function($0){
var $1=this.txt.height+this.padding;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$48",function(){
try{
return [this.txt,"height",this,"padding"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"text",void 0,"iconresource",void 0,"iconpadding",void 0,"iconposition",void 0,"$49",function($0){
if(this.iconresource!=null&&this.iconresource!=""){
this._iconstate.setAttribute("applied",true);this._update()
}},"_iconstate",void 0,"txt",void 0,"icon",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_bsbtn,["tagname","btn","children",LzNode.mergeChildren([{attrs:{$4c:function(){
return this.icon
},$4d:function(){
return this.icon
},$4e:function(){
return this.txt
},$4f:function(){
return this.txt
},$classrootdepth:1,$delegates:["oniconpadding","_update",null,"oniconposition","_update",null,"onwidth","_update","$4c","onheight","_update","$4d","onwidth","_update","$4e","onheight","_update","$4f"],_update:function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(this.iconresource==""){
return
};if(this.text==""){
var $1=this.padding*2;this.setAttribute("width",this.icon.width+$1);this.setAttribute("height",this.icon.height+$1);this.icon.setAttribute("x",this.padding);this.icon.setAttribute("y",this.padding);return
};var $2=this.padding,$3=this.padding,$4=this.padding,$5=this.padding,$6=this.width,$7=this.height,$1=this.padding*2;if(iconposition.indexOf("left")>-1){
$4=this.icon.width+this.iconpadding+this.padding;$6=this.icon.width+this.txt.width+$1+this.iconpadding;$7=Math.max(this.icon.height,this.txt.height)+$1;$5=($7-this.txt.height)*0.5
}else if(iconposition.indexOf("right")>-1){
$2=this.txt.width+this.iconpadding+this.padding;$6=this.icon.width+this.txt.width+$1+this.iconpadding;$7=Math.max(this.icon.height,this.txt.height)+$1;$5=($7-this.txt.height)*0.5
}else if(iconposition.indexOf("top")>-1){
$5=this.icon.height+this.iconpadding+this.padding;$6=Math.max(this.icon.width,this.txt.width)+$1;$7=this.icon.height+this.txt.height+$1+this.iconpadding;$2=($6-this.icon.width)*0.5;$4=($6-this.txt.width)*0.5
}else if(iconposition.indexOf("bottom")>-1){
$3=this.txt.height+this.iconpadding+this.padding;$6=Math.max(this.icon.width,this.txt.width)+$1;$7=this.icon.height+this.txt.height+$1+this.iconpadding;$2=($6-this.icon.width)*0.5;$4=($6-this.txt.width)*0.5
};this.setAttribute("width",$6);this.setAttribute("height",$7);this.icon.setAttribute("x",$2);this.icon.setAttribute("y",$3);this.txt.setAttribute("x",$4);this.txt.setAttribute("y",$5)
}},icon:void 0,name:"_iconstate"},children:[{attrs:{$classrootdepth:1,name:"icon",resource:new LzAlwaysExpr("resource","string","$4a","$4b",null)},"class":$lzc$class_4q}],"class":LzState},{attrs:{$classrootdepth:1,fgcolor:new LzAlwaysExpr("fgcolor","color","$4g","$4h",null),name:"txt",shadowangle:45,shadowblurradius:0.1,shadowcolor:new LzAlwaysExpr("shadowcolor","color","$4o","$4p",null),shadowdistance:1,text:new LzAlwaysExpr("text","text","$4i","$4j",null),x:new LzAlwaysExpr("x","numberExpression","$4k","$4l",null),y:new LzAlwaysExpr("y","numberExpression","$4m","$4n",null)},"class":$lzc$class_4r}],$lzc$class_bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$49",null],height:new LzAlwaysExpr("height","size","$47","$48",null),iconpadding:10,iconposition:"left",iconresource:"",text:"",width:new LzAlwaysExpr("width","size","$45","$46",null)},$lzc$class_btn.attributes)
}}})($lzc$class_btn)
};{
Mixin.make("$lzc$class_drawborderfocus",["focuspercentage",void 0,"$4s",function($0){
if($0){
this.animate("focuspercentage",1,this.focusanimationspeed)
}else{
this.animate("focuspercentage",0,this.focusanimationspeed)
}},"drawfocus",function($0){
var $1=$0.globalAlpha;var $2=$0.aliaslines;$0.globalAlpha=0.1;$0.aliaslines=false;$0.strokeStyle=$0.highlightcolor;$0.lineWidth=this.focuspercentage*9+1;while($0.lineWidth>0){
$0.lineWidth-=2;$0.stroke()
};$0.globalAlpha=$1;$0.aliaslines=$2
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","drawborderfocus","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocuspercentage","redraw",null,"onfocused","$4s",null],focuspercentage:0},$lzc$class_drawborderfocus.attributes)
}}})($lzc$class_drawborderfocus)
};Mixin.make("$lzc$class_drawinputtext",["draw",function($0){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;if(!this.__dirty){
$0.drawshape($0,-$0.padding,-$0.padding,this.width+$0.padding,this.height+$0.padding)
};if(this.focused)this.drawfocus($0);if(!this.__dirty){
$0.fillStyle=$0.interiorfillcolor;$0.fill();$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.stroke()
}},"drawfocus",function($0){
return $0
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","drawinputtext","attributes",new LzInheritedHash(LzView.attributes)]);{
Class.make("$lzc$class_$b",["value",void 0,"disabled",void 0,"$4t",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$4u",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$4v",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$4w",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzInputText,["displayName","<inputtext with='componentmodel'>","attributes",new LzInheritedHash(LzInputText.attributes)],[$lzc$class_componentmodel]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$4v","$4w",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$4t","$4u",null),value:""},$lzc$class_$b.attributes)
}}})($lzc$class_$b)
};{
Class.make("$lzc$class_$c",["focusanimationspeed",void 0,"focused",void 0,"$4x",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$4y",function($0){
if(!this.focusable)return;this.setAttribute("focused",false)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$b,["displayName","<inputtext with='componentfocus, componentmodel'>","attributes",new LzInheritedHash($lzc$class_$b.attributes)],[$lzc$class_componentfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$4x",null,"onblur","$4y",null],focusanimationspeed:500,focused:false},$lzc$class_$c.attributes)
}}})($lzc$class_$c)
};Class.make("$lzc$class_$d",["draw",function($0){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;if(!this.__dirty){
$0.drawshape($0,-$0.padding,-$0.padding,this.width+$0.padding,this.height+$0.padding)
};if(this.focused)this.drawfocus($0);if(!this.__dirty){
$0.fillStyle=$0.interiorfillcolor;$0.fill();$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.stroke()
}},"drawfocus",function($0){
return $0
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$c,["displayName","<inputtext with='drawinputtext, componentfocus, componentmodel'>","attributes",new LzInheritedHash($lzc$class_$c.attributes)],[$lzc$class_drawinputtext]);{
Class.make("$lzc$class_$e",["focuspercentage",void 0,"$4z",function($0){
if($0){
this.animate("focuspercentage",1,this.focusanimationspeed)
}else{
this.animate("focuspercentage",0,this.focusanimationspeed)
}},"drawfocus",function($0){
var $1=$0.globalAlpha;var $2=$0.aliaslines;$0.globalAlpha=0.1;$0.aliaslines=false;$0.strokeStyle=$0.highlightcolor;$0.lineWidth=this.focuspercentage*9+1;while($0.lineWidth>0){
$0.lineWidth-=2;$0.stroke()
};$0.globalAlpha=$1;$0.aliaslines=$2
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$d,["displayName","<inputtext with='drawborderfocus, drawinputtext, componentfocus, componentmodel'>","attributes",new LzInheritedHash($lzc$class_$d.attributes)],[$lzc$class_drawborderfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocuspercentage","redraw",null,"onfocused","$4z",null],focuspercentage:0},$lzc$class_$e.attributes)
}}})($lzc$class_$e)
};{
Class.make("$lzc$class_$f",["drawtarget",void 0,"ondrawtarget",void 0,"createContext",function(){
return
},"init",function(){
with(this){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0);this.context=$0
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
}},"$lzc$set_drawtarget",function($0){
with(this){
if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.drawtarget=$0;$0.addScope(this);if(this.ondrawtarget.ready)this.ondrawtarget.sendEvent($0)
}}},"destroy",function(){
if(this.drawtarget){
this.drawtarget.removeScope(this)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"redraw",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(!this.drawtarget||!canvas.isinited)return;this.drawtarget.redraw(this)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$e,["displayName","<inputtext with='virtualdrawview, drawborderfocus, drawinputtext, componentfocus, componentmodel'>","attributes",new LzInheritedHash($lzc$class_$e.attributes)],[$lzc$class_virtualdrawview]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_$f.attributes)
}}})($lzc$class_$f)
};{
Class.make("$lzc$class_inpt",["$50",function($0){
var $1=!this.disabled;if($1!==this["enabled"]||!this.inited){
this.setAttribute("enabled",$1)
}},"$51",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$f,["tagname","inpt","attributes",new LzInheritedHash($lzc$class_$f.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({enabled:new LzAlwaysExpr("enabled","boolean","$50","$51",null)},$lzc$class_inpt.attributes)
}}})($lzc$class_inpt)
};{
Class.make("$lzc$class_$g",["vertical",void 0,"bevel",void 0,"$52",void 0,"interiorbordercolor",void 0,"$53",void 0,"$54",void 0,"interiorbordercolorup",void 0,"$55",void 0,"$56",void 0,"interiorbordercolorover",void 0,"$57",void 0,"$58",void 0,"interiorbordercolordown",void 0,"$59",void 0,"interiorfillcolor",void 0,"$5a",void 0,"$5b",void 0,"interiorfillcolorup",void 0,"$5c",void 0,"$5d",void 0,"interiorfillcolorover",void 0,"$5e",void 0,"$5f",void 0,"interiorfillcolordown",void 0,"gradientfill",void 0,"ongradientfill",void 0,"$lzc$set_gradientfill",function($0){
if($0&&$0!=this.gradientfill){
this._gradientfill=this.parseLinearGradient($0)
};this.gradientfill=$0;if(this.ongradientfill.ready)this.ongradientfill.sendEvent($0)
},"_parseLinearGradientCache",void 0,"parseLinearGradient",function($0){
with(this){
var $1=this._parseLinearGradientCache[$0];if($1){
return {startpos:$1.startpos,colorstops:$1.colorstops.slice(),css:$1.css}}else{
var $2=$0.split(",");if($2.length<2){
return
};var $3=$2.shift();$1={};$1.startpos=$3;$1.colorstops=[];$1.css=$0;var $4=LzColorUtils.hextoint;for(var $5=0;$5<$2.length;$5++){
var $6=$2[$5].split(" ");$1.colorstops[$5]={color:$4($6[0]),percentage:parseInt($6[1])*0.01}};this._parseLinearGradientCache[$0]=$1
};return $1
}},"__tintColor",void 0,"tintColor",function($0,$1){
with(this){
var $2=$0+"."+$1;if(this.__tintColor[$2])return this.__tintColor[$2];if($1==null){
$1=this._basehsv
}else{
$1=LzColorUtils.tohsv($1)
};if(!$1){
return $0
}else{
var $3=LzColorUtils.tohsv($0);this.__tintColor[$2]=LzColorUtils.fromhsv($1.h,$1.s,$3.v);return this.__tintColor[$2]
}}},"__resetgradientcache",function($0){
this.__dirty=false;this._gradientfills={}},"cssToLinearGradient",function($0,$1){
if(!$1||!$1.css)return;var $2=this["_gradientfills"];if(!$2){
$2=this._gradientfills={}}else if($2[$1.css]!=null){
return $2[$1.css]
};var $3=0,$4=0,$5=0,$6=0,$7=$1.startpos;if($7=="top"){
$6=this.height
}else if($7=="bottom"){
$4=this.height
}else if($7=="left"){
$5=this.width
}else if($7=="right"){
$3=this.width
};var $8=$0.createLinearGradient($3,$4,$5,$6);var $9=$1.colorstops;for(var $a=0,$b=$9.length;$a<$b;$a++){
var $c=$9[$a];$8.addColorStop($c.percentage,$c.color)
};return $8
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzView,["displayName","<view with='stylebutton'>","attributes",new LzInheritedHash(LzView.attributes)],[$lzc$class_stylebutton]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$52:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
}},$53:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$54:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$55:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$56:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$57:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$58:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$59:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
}},$5a:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$5b:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$5c:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$5d:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$5e:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$5f:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$delegates:["onwidth","__resetgradientcache",null,"onheight","__resetgradientcache",null,"onbasecolor","__resetgradientcache",null],__tintColor:{},_parseLinearGradientCache:{},bevel:new LzStyleConstraintExpr("bevel","number","bevel-width",0,false),gradientfill:new LzStyleConstraintExpr("gradientfill","string","gradient-fill","",false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","color","interior-border-color",new LzOnceExpr("interiorbordercolor","color","$52",null),false),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","color","interior-border-color-down",new LzAlwaysExpr("interiorbordercolordown","color","$57","$58",null),false),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","color","interior-border-color-over",new LzAlwaysExpr("interiorbordercolorover","color","$55","$56",null),false),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","color","interior-border-color-up",new LzAlwaysExpr("interiorbordercolorup","color","$53","$54",null),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","color","interior-fill-color",new LzOnceExpr("interiorfillcolor","color","$59",null),false),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","color","interior-fill-color-down",new LzAlwaysExpr("interiorfillcolordown","color","$5e","$5f",null),false),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","color","interior-fill-color-over",new LzAlwaysExpr("interiorfillcolorover","color","$5c","$5d",null),false),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","color","interior-fill-color-up",new LzAlwaysExpr("interiorfillcolorup","color","$5a","$5b",null),false),ongradientfill:LzDeclaredEvent,vertical:new LzStyleConstraintExpr("vertical","boolean","gradient-vertical",false,false)},$lzc$class_$g.attributes)
}}})($lzc$class_$g)
};{
Class.make("$lzc$class_$h",["gradienttransition",void 0,"gradienttransitionspeed",void 0,"transitionto",void 0,"transitionfrom",void 0,"draw",function($0){
if(this["drawtarget"]&&$0===this){
return
};$0.globalAlpha=this.disabled?0.5:1;if(!this.__dirty){
if(this.interiorborderwidth){
$0.lineWidth=$0.interiorborderwidth;this.styleinteriorborder($0);this.drawinteriorborder($0)
};$0.lineWidth=$0.borderwidth;if(this.borderwidth){
this.styleborder($0);this.drawborder($0)
};this.__dirty=false
};this.stylegradient($0);this.drawgradient($0)
},"styleborder",function($0){
if(!this.bordercolor)return;$0.strokeStyle=this.bordercolor
},"drawborder",function($0){
if(this.borderwidth<=0)return;if(!this.bordercolor)return;$0.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);$0.closePath();$0.stroke()
},"styleinteriorborder",function($0){
if(!this["interiorfillcolor"]||!this["interiorbordercolor"])return;$0.fillStyle=this["interiorfillcolor"];$0.strokeStyle=this["interiorbordercolor"]
},"drawinteriorborder",function($0){
if(!this["interiorfillcolor"])return;$0.beginPath();this.drawshape($0,1,1,this.width-3,this.height-3);$0.closePath();$0.fill();$0.stroke()
},"updateTransitions",function($0){
if(!this.baseto)this.baseto=this.basecolor;this.basefrom=this.baseto;this.baseto=this.basecolor;if(!this.transitionto)this.transitionto=this._gradientfill;this.transitionfrom=this.transitionto;this.transitionto=this._gradientfill;if(typeof $0=="string"){
this.gradienttransition=0;if(this._oldanim)this._oldanim.setAttribute("started",false);this._oldanim=this.animate("gradienttransition",1,this.gradienttransitionspeed)
}},"stylegradient",function($0){
var $1=this["gradientfill"];if(this.vertical){
var $2=$1.indexOf("top");if($2>-1){
$1="left"+$1.substring($2+3)
}else{
$2=$1.indexOf("bottom");if($2>-1){
$1="right"+$1.substring($2+6)
}}};var $3=this.parseLinearGradient($1);if(this.transitionfrom!=null){
var $4=[];var $5=this.transitionto.colorstops;var $6=this.transitionfrom.colorstops;for(var $7=0,$8=$5.length;$7<$8;$7++){
var $9={};var $a=this.tweenrgb(this.basefrom,this.baseto,this.gradienttransition);$9.color=this.tintColor(this.tweenrgb($6[$7].color,$5[$7].color,this.gradienttransition),$a);var $b=$5[$7].percentage-$6[$7].percentage;$9.percentage=$6[$7].percentage+$b*this.gradienttransition;$4[$7]=$9
};$3.colorstops=$4
};$0.fillStyle=this.cssToLinearGradient($0,$3)
},"tweenrgb",function($0,$1,$2){
if($0===$1)return $0;var $3=$0>>16&255,$4=$0>>8&255,$5=$0&255;var $6=$1>>16&255,$7=$1>>8&255,$8=$1&255;var $9=$3+($6-$3)*$2;var $a=$4+($7-$4)*$2;var $b=$5+($8-$5)*$2;return($9<<16)+($a<<8)+($b|0)
},"drawgradient",function($0){
if(!this.__dirty){
var $1=1.5;if(this.bevel){
var $1=this.bevel+this.borderwidth
};$0.beginPath();this.drawshape($0,$1,$1,this.width-$1*2-1,this.height-$1*2-1);$0.closePath()
};$0.fill()
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$g,["displayName","<view with='drawbutton, stylebutton'>","attributes",new LzInheritedHash($lzc$class_$g.attributes)],[$lzc$class_drawbutton]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousestate","redraw",null,"ongradienttransition","redraw",null,"onmousestate","updateTransitions",null,"oninit","updateTransitions",null],gradienttransition:0,gradienttransitionspeed:new LzStyleConstraintExpr("gradienttransitionspeed","number","gradient-transition-speed",300,false),transitionfrom:null,transitionto:null},$lzc$class_$h.attributes)
}}})($lzc$class_$h)
};{
Class.make("$lzc$class_$i",["drawtarget",void 0,"ondrawtarget",void 0,"createContext",function(){
return
},"init",function(){
with(this){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0);this.context=$0
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
}},"$lzc$set_drawtarget",function($0){
with(this){
if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.drawtarget=$0;$0.addScope(this);if(this.ondrawtarget.ready)this.ondrawtarget.sendEvent($0)
}}},"destroy",function(){
if(this.drawtarget){
this.drawtarget.removeScope(this)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"redraw",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(!this.drawtarget||!canvas.isinited)return;this.drawtarget.redraw(this)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$h,["displayName","<view with='virtualdrawview, drawbutton, stylebutton'>","attributes",new LzInheritedHash($lzc$class_$h.attributes)],[$lzc$class_virtualdrawview]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_$i.attributes)
}}})($lzc$class_$i)
};Class.make("$lzc$class_$j",["drawarrow",function($0,$1,$2,$3,$4,$5){
var $6=($3+$1)*0.5;if($5){
$0.moveTo($1,$4);$0.lineTo($6,$2);$0.lineTo($3,$4);$0.lineTo($1,$4)
}else{
$0.moveTo($1,$2);$0.lineTo($6,$4);$0.lineTo($3,$2);$0.lineTo($1,$2)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$i,["displayName","<view with='drawarrow, virtualdrawview, drawbutton, stylebutton'>","attributes",new LzInheritedHash($lzc$class_$i.attributes)],[$lzc$class_drawarrow]);{
Class.make("$lzc$class_$k",["focusanimationspeed",void 0,"focused",void 0,"$5g",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$5h",function($0){
if(!this.focusable)return;this.setAttribute("focused",false)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$j,["displayName","<view with='componentfocus, drawarrow, virtualdrawview, drawbutton, stylebutton'>","attributes",new LzInheritedHash($lzc$class_$j.attributes)],[$lzc$class_componentfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$5g",null,"onblur","$5h",null],focusanimationspeed:500,focused:false},$lzc$class_$k.attributes)
}}})($lzc$class_$k)
};{
Class.make("$lzc$class_$l",["focuspercentage",void 0,"$5i",function($0){
if($0){
this.animate("focuspercentage",1,this.focusanimationspeed)
}else{
this.animate("focuspercentage",0,this.focusanimationspeed)
}},"drawfocus",function($0){
var $1=$0.globalAlpha;var $2=$0.aliaslines;$0.globalAlpha=0.1;$0.aliaslines=false;$0.strokeStyle=$0.highlightcolor;$0.lineWidth=this.focuspercentage*9+1;while($0.lineWidth>0){
$0.lineWidth-=2;$0.stroke()
};$0.globalAlpha=$1;$0.aliaslines=$2
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$k,["displayName","<view with='drawborderfocus, componentfocus, drawarrow, virtualdrawview, drawbutton, stylebutton'>","attributes",new LzInheritedHash($lzc$class_$k.attributes)],[$lzc$class_drawborderfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocuspercentage","redraw",null,"onfocused","$5i",null],focuspercentage:0},$lzc$class_$l.attributes)
}}})($lzc$class_$l)
};{
Class.make("$lzc$class_$m",["__keydowntime",void 0,"__keystillDownDelegate",void 0,"__keydownrepeatinterval",void 0,"__keydowninitialinterval",void 0,"onkeystilldown",void 0,"init",function(){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__keystillDownDelegate=new LzDelegate(this,"__iskeystilldown")
}},"__iskeystilldown",function($0){
with(this){
var $1=$0-this.__keydowntime;this.__keydowntime=$0;var $2=lz.Keys.downKeysArray;if($2.length>0){
var $3;if($1>this.__keydowninitialinterval){
$3=this.__keydowninitialinterval
}else{
$3=this.__keydownrepeatinterval;for(var $4=0;$4<$2.length;$4++){
this.onkeystilldown.sendEvent($2[$4])
}};lz.Timer.resetTimer(this.__keystillDownDelegate,$3)
}}},"$5j",function($0){
with(this){
this.__keydowntime=new Date().getTime();lz.Timer.addTimer(this.__keystillDownDelegate,this.__keydowninitialinterval)
}},"$5k",function($0){
with(this){
if(lz.Keys.downKeysArray.length==0){
lz.Timer.removeTimer(this.__keystillDownDelegate)
}}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$l,["displayName","<view with='keyboardrepeater, drawborderfocus, componentfocus, drawarrow, virtualdrawview, drawbutton, stylebutton'>","attributes",new LzInheritedHash($lzc$class_$l.attributes)],[$lzc$class_keyboardrepeater]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onkeydown","$5j",null,"onkeyup","$5k",null],__keydowninitialinterval:300,__keydownrepeatinterval:50,__keydowntime:0,__keystillDownDelegate:null,onkeystilldown:LzDeclaredEvent},$lzc$class_$m.attributes)
}}})($lzc$class_$m)
};{
Class.make("$lzc$class_$n",["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__mousestillDownDelegate=new LzDelegate(this,"__ismousestilldown")
}},"__ismousestilldown",function($0){
with(this){
var $1=$0-this.__mousedowntime;this.__mousedowntime=$0;if(this.mouseisdown){
var $2;if($1>600){
$2=this.__mousedowninitialinterval
}else{
$2=this.__mousedownrepeatinterval;this.onmousestilldown.sendEvent(this)
};lz.Timer.resetTimer(this.__mousestillDownDelegate,$2)
}}},"$5l",function($0){
with(this){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
}},"$5m",function($0){
with(this){
lz.Timer.removeTimer(this.__mousestillDownDelegate)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$m,["displayName","<view with='mousedownrepeater, keyboardrepeater, drawborderfocus, componentfocus, drawarrow, virtualdrawview, drawbutton, stylebutton'>","attributes",new LzInheritedHash($lzc$class_$m.attributes)],[$lzc$class_mousedownrepeater]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousedown","$5l",null,"onmouseup","$5m",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_$n.attributes)
}}})($lzc$class_$n)
};{
Class.make("$lzc$class_$o",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$5n",function(){
with(this){
return lz.ModeManager
}},"$5o",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$5p",function($0){
this.setAttribute("mouseisover",true)
},"$5q",function($0){
this.setAttribute("mouseisover",false)
},"$5r",function($0){
this.setAttribute("mouseisdown",true)
},"$5s",function($0){
this.setAttribute("mouseisdown",false)
},"$5t",function($0){
this.onmouseover.sendEvent()
},"$5u",function($0){
this.onmouseout.sendEvent()
},"$5v",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$5w",function($0){
if($0==32||$0==13){
this.onmouseup.sendEvent();if(this.onclick.ready)this.onclick.sendEvent()
}},"_updateFrame",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=1;if(this.disabled){
$1=4
}else if(this.mouseisdown&&this.mouseisover){
$1=3
}else if(this.mouseisover){
$1=2
};if($1!==this.frame){
this.setAttribute("frame",$1)
};var $2="up";switch($1){
case 2:
$2="over";break;
case 3:
$2="down";break;

};if(this.mousestate!=$2){
this.setAttribute("mousestate",$2)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$n,["displayName","<view with='buttonevents, mousedownrepeater, keyboardrepeater, drawborderfocus, componentfocus, drawarrow, virtualdrawview, drawbutton, stylebutton'>","attributes",new LzInheritedHash($lzc$class_$n.attributes)],[$lzc$class_buttonevents]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$5o","$5n","onmouseover","$5p",null,"onmouseout","$5q",null,"onmousedown","$5r",null,"onmouseup","$5s",null,"onfocus","$5t",null,"onblur","$5u",null,"onkeydown","$5v",null,"onkeyup","$5w",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_$o.attributes)
}}})($lzc$class_$o)
};{
Class.make("$lzc$class_scrlstepbtn",["$5x",function($0){
var $1=this.width;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$5y",function(){
try{
return [this,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$5z",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.setAttribute("opacity",0.4)
},"$60",function($0){
this.classroot.setAttribute("activated",$0)
},"direction",void 0,"handleMouseDown",function($0){
if(this.constructor["$lzsc$isa"]?this.constructor.$lzsc$isa($0):$0 instanceof this.constructor)$0=this.direction;this.classroot.step($0);this.classroot.setAttribute("activated",true)
},"handleKeyDown",function($0){
if(!this.focused)return;if($0==37||$0==38){
this.handleMouseDown(-1)
}else if($0==39||$0==40){
this.handleMouseDown(1)
}else if($0==13||$0==32){
this.onmousedown.sendEvent()
}},"drawshape",function($0){
this.drawarrow($0,1,1,this.width-2,this.height-4,this.direction<0)
},"draw",function($0){
if(!$0["interiorbordercolor"])return;$0.beginPath();this.drawshape($0);if(this.focused)this.drawfocus($0);$0.fillStyle=$0.iconcolor;$0.fill()
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$o,["tagname","scrlstepbtn","attributes",new LzInheritedHash($lzc$class_$o.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$5z",null,"onmouseisover","$60",null,"onmousedown","handleMouseDown",null,"onmousestilldown","handleMouseDown",null,"onkeydown","handleKeyDown",null,"onkeystilldown","handleKeyDown",null,"onopacity","redraw",null],clickable:true,direction:1,focusable:true,height:new LzAlwaysExpr("height","size","$5x","$5y",null)},$lzc$class_scrlstepbtn.attributes)
}}})($lzc$class_scrlstepbtn)
};{
Class.make("$lzc$class_$p",["drawtarget",void 0,"ondrawtarget",void 0,"createContext",function(){
return
},"init",function(){
with(this){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0);this.context=$0
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
}},"$lzc$set_drawtarget",function($0){
with(this){
if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.drawtarget=$0;$0.addScope(this);if(this.ondrawtarget.ready)this.ondrawtarget.sendEvent($0)
}}},"destroy",function(){
if(this.drawtarget){
this.drawtarget.removeScope(this)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"redraw",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(!this.drawtarget||!canvas.isinited)return;this.drawtarget.redraw(this)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_bsbtn,["displayName","<bsbtn with='virtualdrawview'>","children",LzNode.mergeChildren([],$lzc$class_bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)],[$lzc$class_virtualdrawview]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_$p.attributes)
}}})($lzc$class_$p)
};{
Class.make("$lzc$class_scrlthmb",["$61",function($0){
this.classroot.setAttribute("activated",$0)
},"target",void 0,"axis",void 0,"trackscroll",void 0,"targetscroll",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);var $0=this.classroot;this.classroot.thumb=this
},"destroy",function(){
this.classroot.thumb=null;this.target=null;(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"startDrag",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=this.classroot;$1.targetPosDel.disable();var $2=$1.sizeAxis;this.target=$1.scrolltarget;this.axis=$1.axis;this.trackscroll=this.immediateparent[$2]-this[$2];this.targetscroll=$1.scrollmax-this.target.immediateparent[$2];this[this.axis+"thumbdrag"].setAttribute("applied",true)
},"stopDrag",function($0){
switch(arguments.length){
case 0:
$0=null;

};this[this.axis+"thumbdrag"].setAttribute("applied",false);this.classroot.targetPosDel.enable()
},"ythumbdrag",void 0,"xthumbdrag",void 0,"thumbControl",function($0){
with(this){
var $1=$0-this.doffset;if($1<=0){
$1=0
}else if($1>this.trackscroll){
$1=this.trackscroll
};var $2=Math.round(-$1/this.trackscroll*this.targetscroll);if($2!=this.target[this.classroot.scrollattr]){
this.target.setAttribute(this.classroot.scrollattr,$2)
};return $1
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$p,["tagname","scrlthmb","children",LzNode.mergeChildren([{attrs:{$62:function($0){
this.setAttribute("doffset",this.getMouse("y"))
},$63:function($0){
var $1=this.thumbControl(this.immediateparent.getMouse("y"));if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}},$64:function(){
with(this){
try{
return [].concat($lzc$getFunctionDependencies("thumbControl",this,this,[this.immediateparent.getMouse("y")],null)).concat($lzc$getFunctionDependencies("getMouse",this,this.immediateparent,["y"],null))
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},$classrootdepth:1,doffset:new LzOnceExpr("doffset","expression","$62",null),name:"ythumbdrag",y:new LzAlwaysExpr("y","expression","$63","$64",null)},"class":LzState},{attrs:{$65:function($0){
this.setAttribute("doffset",this.getMouse("x"))
},$66:function($0){
var $1=this.thumbControl(this.immediateparent.getMouse("x"));if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}},$67:function(){
with(this){
try{
return [].concat($lzc$getFunctionDependencies("thumbControl",this,this,[this.immediateparent.getMouse("x")],null)).concat($lzc$getFunctionDependencies("getMouse",this,this.immediateparent,["x"],null))
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},$classrootdepth:1,doffset:new LzOnceExpr("doffset","expression","$65",null),name:"xthumbdrag",x:new LzAlwaysExpr("x","expression","$66","$67",null)},"class":LzState}],$lzc$class_$p["children"]),"attributes",new LzInheritedHash($lzc$class_$p.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseisover","$61",null,"onmousedown","startDrag",null,"onmouseup","stopDrag",null],axis:"",clickable:true,focusable:false,target:null,targetscroll:0,trackscroll:0,vertical:true},$lzc$class_scrlthmb.attributes)
}}})($lzc$class_scrlthmb)
};{
Class.make("$lzc$class_$q",["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__mousestillDownDelegate=new LzDelegate(this,"__ismousestilldown")
}},"__ismousestilldown",function($0){
with(this){
var $1=$0-this.__mousedowntime;this.__mousedowntime=$0;if(this.mouseisdown){
var $2;if($1>600){
$2=this.__mousedowninitialinterval
}else{
$2=this.__mousedownrepeatinterval;this.onmousestilldown.sendEvent(this)
};lz.Timer.resetTimer(this.__mousestillDownDelegate,$2)
}}},"$68",function($0){
with(this){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
}},"$69",function($0){
with(this){
lz.Timer.removeTimer(this.__mousestillDownDelegate)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzView,["displayName","<view with='mousedownrepeater'>","attributes",new LzInheritedHash(LzView.attributes)],[$lzc$class_mousedownrepeater]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousedown","$68",null,"onmouseup","$69",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_$q.attributes)
}}})($lzc$class_$q)
};{
Class.make("$lzc$class_$r",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$6a",function(){
with(this){
return lz.ModeManager
}},"$6b",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$6c",function($0){
this.setAttribute("mouseisover",true)
},"$6d",function($0){
this.setAttribute("mouseisover",false)
},"$6e",function($0){
this.setAttribute("mouseisdown",true)
},"$6f",function($0){
this.setAttribute("mouseisdown",false)
},"$6g",function($0){
this.onmouseover.sendEvent()
},"$6h",function($0){
this.onmouseout.sendEvent()
},"$6i",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$6j",function($0){
if($0==32||$0==13){
this.onmouseup.sendEvent();if(this.onclick.ready)this.onclick.sendEvent()
}},"_updateFrame",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=1;if(this.disabled){
$1=4
}else if(this.mouseisdown&&this.mouseisover){
$1=3
}else if(this.mouseisover){
$1=2
};if($1!==this.frame){
this.setAttribute("frame",$1)
};var $2="up";switch($1){
case 2:
$2="over";break;
case 3:
$2="down";break;

};if(this.mousestate!=$2){
this.setAttribute("mousestate",$2)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$q,["displayName","<view with='buttonevents, mousedownrepeater'>","attributes",new LzInheritedHash($lzc$class_$q.attributes)],[$lzc$class_buttonevents]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$6b","$6a","onmouseover","$6c",null,"onmouseout","$6d",null,"onmousedown","$6e",null,"onmouseup","$6f",null,"onfocus","$6g",null,"onblur","$6h",null,"onkeydown","$6i",null,"onkeyup","$6j",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_$r.attributes)
}}})($lzc$class_$r)
};{
Class.make("$lzc$class_scrltrk",["direction",void 0,"$6k",function($0){
this.classroot.setAttribute("activated",$0)
},"$6l",function($0){
this.classroot.page(this.direction);this.classroot.setAttribute("activated",true)
},"$6m",function($0){
this.classroot.page(this.direction);this.classroot.setAttribute("activated",true)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$r,["tagname","scrltrk","attributes",new LzInheritedHash($lzc$class_$r.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseisover","$6k",null,"onmousedown","$6l",null,"onmousestilldown","$6m",null],clickable:true,direction:1},$lzc$class_scrltrk.attributes)
}}})($lzc$class_scrltrk)
};{
Mixin.make("$lzc$class_bsscrlbr",["scrolltarget",void 0,"axis",void 0,"$lzc$set_axis",function($0){
this.axis=$0;this.setAttribute("sizeAxis",$0=="x"?"width":"height");this.setAttribute("otherSizeAxis",$0=="y"?"width":"height")
},"sizeAxis",void 0,"otherSizeAxis",void 0,"$6n",function($0){
var $1=this.axis;if($1!==this["scrollattr"]||!this.inited){
this.setAttribute("scrollattr",$1)
}},"$6o",function(){
try{
return [this,"axis"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"scrollattr",void 0,"scrollmax",void 0,"onscrollmax",void 0,"pagesize",void 0,"stepsize",void 0,"scrollable",void 0,"focusview",void 0,"usemousewheel",void 0,"$lzc$set_usemousewheel",function($0){
if($0==this.usemousewheel)return;this.usemousewheel=$0;if(this._mwUpdateDel){
this._mwUpdateDel.unregisterAll()
};if($0){
this._mwUpdateDel=new LzDelegate(this,"mousewheelUpdate",lz.Keys,"onmousewheeldelta")
}},"mousewheelevent_on",void 0,"mousewheelevent_off",void 0,"mousewheelactive",void 0,"onscrollable",void 0,"$6p",function($0){
var $1=this["enabled"]&&this.scrollable&&(this._parentcomponent?this._parentcomponent._enabled:true);if($1!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$1)
}},"$6q",function(){
try{
return [this,"scrollable",this,"_parentcomponent",this._parentcomponent,"_enabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"_enabled",void 0,"usetargetsize",void 0,"othersb",void 0,"thumb",void 0,"_mwActivateDel",void 0,"_mwDeactivateDel",void 0,"_mwUpdateDel",void 0,"clipSizeDel",void 0,"targetHeightDel",void 0,"targetPosDel",void 0,"heightDel",void 0,"heightConstraint",void 0,"widthConstraint",void 0,"init",function(){
with(this){
var $0=false;if(!this.scrolltarget){
var $1=immediateparent.subviews.length;for(var $2=0;$2<$1;$2++){
var $3=immediateparent.subviews[$2];if($3 instanceof lz.view){
if(!(lz.bsscrlbr["$lzsc$isa"]?lz.bsscrlbr.$lzsc$isa($3):$3 instanceof lz.bsscrlbr)){
if(!this.scrolltarget)this.scrolltarget=$3
}else{
if($3!=this){
this.setAttribute("othersb",$3)
}}}};if(this.axis=="y"){
this.setAttribute("align","right")
}else{
this.setAttribute("valign","bottom")
};$0=true
};if(!this.focusview){
if(this.scrolltarget&&this.scrolltarget["focusable"]){
this.focusview=this.scrolltarget
}else if(this.immediateparent["focusable"]){
this.focusview=this.immediateparent
}};if(this.focusview){
this._mwActivateDel=new LzDelegate(this,"activateMouseWheel",this.focusview,this.mousewheelevent_on);this._mwDeactivateDel=new LzDelegate(this,"deactivateMouseWheel",this.focusview,this.mousewheelevent_off)
};if(this.sizeAxis=="width"){
if(!hassetwidth){
this.widthConstraint.setAttribute("applied",true)
}}else if(this.sizeAxis=="height"){
if(!hassetheight){
this.heightConstraint.setAttribute("applied",true)
}};if(!this.scrolltarget){
this.setAttribute("enabled",false)
}else{
this.clipSizeDel=new LzDelegate(this,"scrollbarSizeUpdate",this.scrolltarget.immediateparent,"on"+this.sizeAxis);if(this.scrollmax==null){
this.usetargetsize=true;this.targetHeightDel=new LzDelegate(this,"targetSizeUpdate",this.scrolltarget,"on"+this.sizeAxis);this.scrollmax=scrolltarget[this.sizeAxis];if($0&&this.othersb){
this.scrollmax+=this[this.otherSizeAxis]
}}else{
this.targetHeightDel=new LzDelegate(this,"scrollbarSizeUpdate",this,"onscrollmax")
};var $4;if(this.scrollattr=="yscroll"){
$4="onscrolly"
}else $4="on"+this.scrollattr;this.targetPosDel=new LzDelegate(this,"targetPosUpdate",this.scrolltarget,$4);this.heightDel=new LzDelegate(this,"scrollbarSizeUpdate",this.scrolltrack,"on"+this.sizeAxis);scrollbarSizeUpdate(null)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
}},"destroy",function(){
if(this._mwActivateDel){
this._mwActivateDel.unregisterAll();this._mwActivateDel=null
};if(this._mwDeactivateDel){
this._mwDeactivateDel.unregisterAll();this._mwDeactivateDel=null
};if(this._mwUpdateDel){
this._mwUpdateDel.unregisterAll();this._mwUpdateDel=null
};if(this.clipSizeDel){
this.clipSizeDel.unregisterAll();this.clipSizeDel=null
};if(this.targetHeightDel){
this.targetHeightDel.unregisterAll();this.targetHeightDel=null
};if(this.targetPosDel){
this.targetPosDel.unregisterAll();this.targetPosDel=null
};if(this.heightDel){
this.heightDel.unregisterAll();this.heightDel=null
};this.scrolltarget=null;this.focusview=null;this.othersb=null;(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"activateMouseWheel",function($0){
this.setAttribute("mousewheelactive",true)
},"deactivateMouseWheel",function($0){
this.setAttribute("mousewheelactive",false)
},"mousewheelUpdate",function($0){
if(this.axis!="y")return;if(this.mousewheelactive||this.scrolltarget&&this.scrolltarget.immediateparent&&this.scrolltarget.immediateparent.isMouseOver()){
this.activateWithTimeout();this.step(-$0)
}},"targetSizeUpdate",function($0){
if(this.scrolltarget){
var $1=this.scrolltarget[this.sizeAxis];if(this.othersb&&this.othersb.visible){
$1+=this[this.otherSizeAxis]
};this.setAttribute("scrollmax",$1);this.scrollbarSizeUpdate(null)
}},"scrollbarSizeUpdate",function($0){
this.updateThumbSize();if(this.scrolltarget.immediateparent[this.sizeAxis]-this.scrollmax>=0){
return
};var $1=this.scrolltarget[this.scrollattr]+this.scrollmax;if($1<this.scrolltarget.immediateparent[this.sizeAxis]){
var $2=this.scrolltarget.immediateparent[this.sizeAxis]-this.scrollmax;this.scrolltarget.setAttribute(this.scrollattr,$2)
}else{
this.updateThumbPos()
};this.pagesize=this[this.sizeAxis]
},"targetPosUpdate",function($0){
this.updateThumbPos()
},"updateThumbPos",function(){
var $0=0;if(this.scrollmax>0&&this.scrolltrack&&this.scrolltarget){
$0=Math.min(Math.ceil(-this.scrolltarget[this.scrollattr]/this.scrollmax*this.scrolltrack[this.sizeAxis]),this.scrolltrack[this.sizeAxis]-this.thumb[this.sizeAxis])
};this.thumb.setAttribute(this.axis,$0)
},"_showEnabled",function(){
with(this){
if(!_enabled){
this.thumb.setAttribute(sizeAxis,0)
}else updateThumbSize();this.thumb.setAttribute("visible",_enabled);if(scrolltarget)this.scrolltarget.setAttribute(scrollattr,0)
}},"updateThumbSize",function(){
with(this){
if(this.scrollmax<=this.scrolltarget.immediateparent[this.sizeAxis]){
if(this.scrollable){
this.setAttribute("scrollable",false);if(this.othersb)this.othersb.targetSizeUpdate(null)
};return
}else{
if(!this.scrollable){
this.setAttribute("scrollable",true);if(this.othersb)this.othersb.targetSizeUpdate(null)
}};var $0=0;if(this.scrollmax>0&&this.scrolltrack&&this.scrolltarget){
$0=Math.floor(this.scrolltarget.immediateparent[this.sizeAxis]/this.scrollmax*this.scrolltrack[this.sizeAxis])
};if($0<14)$0=14;thumb.setAttribute(this.sizeAxis,$0)
}},"setPosRelative",function($0){
if(!this.scrolltarget)return;var $1=this.scrolltarget[this.scrollattr]-$0;if($1>0)$1=0;var $2=Math.max(this.scrollmax-this.scrolltarget.immediateparent[this.sizeAxis],0);if($1<-$2)$1=-$2;this.scrolltarget.setAttribute(this.scrollattr,$1)
},"step",function($0){
this.setPosRelative($0*this.stepsize)
},"page",function($0){
this.setPosRelative($0*this.pagesize)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","bsscrlbr","children",[{attrs:{$6r:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.height-this.othersb.height:this.immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},$6s:function(){
try{
return [this,"othersb",this.othersb,"visible",this.immediateparent,"height",this.othersb,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$classrootdepth:1,height:new LzAlwaysExpr("height","expression","$6r","$6s",null),name:"heightConstraint"},"class":LzState},{attrs:{$6t:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.width-this.othersb.width:this.immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},$6u:function(){
try{
return [this,"othersb",this.othersb,"visible",this.immediateparent,"width",this.othersb,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$classrootdepth:1,name:"widthConstraint",width:new LzAlwaysExpr("width","expression","$6t","$6u",null)},"class":LzState}],"attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("_enabled","expression","$6p","$6q",null),_mwActivateDel:null,_mwDeactivateDel:null,_mwUpdateDel:null,axis:"y",clipSizeDel:null,focusview:null,heightDel:null,mousewheelactive:false,mousewheelevent_off:"onblur",mousewheelevent_on:"onfocus",onscrollable:LzDeclaredEvent,onscrollmax:LzDeclaredEvent,otherSizeAxis:"width",othersb:null,pagesize:null,scrollable:true,scrollattr:new LzAlwaysExpr("scrollattr","string","$6n","$6o",null),scrollmax:null,scrolltarget:null,sizeAxis:"height",stepsize:10,targetHeightDel:null,targetPosDel:null,thumb:null,usemousewheel:true,usetargetsize:false},$lzc$class_bsscrlbr.attributes)
}}})($lzc$class_bsscrlbr)
};{
Class.make("$lzc$class_$s",["scrolltarget",void 0,"axis",void 0,"$lzc$set_axis",function($0){
this.axis=$0;this.setAttribute("sizeAxis",$0=="x"?"width":"height");this.setAttribute("otherSizeAxis",$0=="y"?"width":"height")
},"sizeAxis",void 0,"otherSizeAxis",void 0,"$6v",function($0){
var $1=this.axis;if($1!==this["scrollattr"]||!this.inited){
this.setAttribute("scrollattr",$1)
}},"$6w",function(){
try{
return [this,"axis"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"scrollattr",void 0,"scrollmax",void 0,"onscrollmax",void 0,"pagesize",void 0,"stepsize",void 0,"scrollable",void 0,"focusview",void 0,"usemousewheel",void 0,"$lzc$set_usemousewheel",function($0){
with(this){
if($0==this.usemousewheel)return;this.usemousewheel=$0;if(this._mwUpdateDel){
this._mwUpdateDel.unregisterAll()
};if($0){
this._mwUpdateDel=new LzDelegate(this,"mousewheelUpdate",lz.Keys,"onmousewheeldelta")
}}},"mousewheelevent_on",void 0,"mousewheelevent_off",void 0,"mousewheelactive",void 0,"onscrollable",void 0,"$6x",function($0){
var $1=this["enabled"]&&this.scrollable&&(this._parentcomponent?this._parentcomponent._enabled:true);if($1!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$1)
}},"$6y",function(){
try{
return [this,"scrollable",this,"_parentcomponent",this._parentcomponent,"_enabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"_enabled",void 0,"usetargetsize",void 0,"othersb",void 0,"thumb",void 0,"_mwActivateDel",void 0,"_mwDeactivateDel",void 0,"_mwUpdateDel",void 0,"clipSizeDel",void 0,"targetHeightDel",void 0,"targetPosDel",void 0,"heightDel",void 0,"heightConstraint",void 0,"widthConstraint",void 0,"init",function(){
with(this){
var $0=false;if(!this.scrolltarget){
var $1=immediateparent.subviews.length;for(var $2=0;$2<$1;$2++){
var $3=immediateparent.subviews[$2];if($3 instanceof lz.view){
if(!(lz.bsscrlbr["$lzsc$isa"]?lz.bsscrlbr.$lzsc$isa($3):$3 instanceof lz.bsscrlbr)){
if(!this.scrolltarget)this.scrolltarget=$3
}else{
if($3!=this){
this.setAttribute("othersb",$3)
}}}};if(this.axis=="y"){
this.setAttribute("align","right")
}else{
this.setAttribute("valign","bottom")
};$0=true
};if(!this.focusview){
if(this.scrolltarget&&this.scrolltarget["focusable"]){
this.focusview=this.scrolltarget
}else if(this.immediateparent["focusable"]){
this.focusview=this.immediateparent
}};if(this.focusview){
this._mwActivateDel=new LzDelegate(this,"activateMouseWheel",this.focusview,this.mousewheelevent_on);this._mwDeactivateDel=new LzDelegate(this,"deactivateMouseWheel",this.focusview,this.mousewheelevent_off)
};if(this.sizeAxis=="width"){
if(!hassetwidth){
this.widthConstraint.setAttribute("applied",true)
}}else if(this.sizeAxis=="height"){
if(!hassetheight){
this.heightConstraint.setAttribute("applied",true)
}};if(!this.scrolltarget){
this.setAttribute("enabled",false)
}else{
this.clipSizeDel=new LzDelegate(this,"scrollbarSizeUpdate",this.scrolltarget.immediateparent,"on"+this.sizeAxis);if(this.scrollmax==null){
this.usetargetsize=true;this.targetHeightDel=new LzDelegate(this,"targetSizeUpdate",this.scrolltarget,"on"+this.sizeAxis);this.scrollmax=scrolltarget[this.sizeAxis];if($0&&this.othersb){
this.scrollmax+=this[this.otherSizeAxis]
}}else{
this.targetHeightDel=new LzDelegate(this,"scrollbarSizeUpdate",this,"onscrollmax")
};var $4;if(this.scrollattr=="yscroll"){
$4="onscrolly"
}else $4="on"+this.scrollattr;this.targetPosDel=new LzDelegate(this,"targetPosUpdate",this.scrolltarget,$4);this.heightDel=new LzDelegate(this,"scrollbarSizeUpdate",this.scrolltrack,"on"+this.sizeAxis);scrollbarSizeUpdate(null)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
}},"destroy",function(){
if(this._mwActivateDel){
this._mwActivateDel.unregisterAll();this._mwActivateDel=null
};if(this._mwDeactivateDel){
this._mwDeactivateDel.unregisterAll();this._mwDeactivateDel=null
};if(this._mwUpdateDel){
this._mwUpdateDel.unregisterAll();this._mwUpdateDel=null
};if(this.clipSizeDel){
this.clipSizeDel.unregisterAll();this.clipSizeDel=null
};if(this.targetHeightDel){
this.targetHeightDel.unregisterAll();this.targetHeightDel=null
};if(this.targetPosDel){
this.targetPosDel.unregisterAll();this.targetPosDel=null
};if(this.heightDel){
this.heightDel.unregisterAll();this.heightDel=null
};this.scrolltarget=null;this.focusview=null;this.othersb=null;(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"activateMouseWheel",function($0){
this.setAttribute("mousewheelactive",true)
},"deactivateMouseWheel",function($0){
this.setAttribute("mousewheelactive",false)
},"mousewheelUpdate",function($0){
if(this.axis!="y")return;if(this.mousewheelactive||this.scrolltarget&&this.scrolltarget.immediateparent&&this.scrolltarget.immediateparent.isMouseOver()){
this.activateWithTimeout();this.step(-$0)
}},"targetSizeUpdate",function($0){
if(this.scrolltarget){
var $1=this.scrolltarget[this.sizeAxis];if(this.othersb&&this.othersb.visible){
$1+=this[this.otherSizeAxis]
};this.setAttribute("scrollmax",$1);this.scrollbarSizeUpdate(null)
}},"scrollbarSizeUpdate",function($0){
this.updateThumbSize();if(this.scrolltarget.immediateparent[this.sizeAxis]-this.scrollmax>=0){
return
};var $1=this.scrolltarget[this.scrollattr]+this.scrollmax;if($1<this.scrolltarget.immediateparent[this.sizeAxis]){
var $2=this.scrolltarget.immediateparent[this.sizeAxis]-this.scrollmax;this.scrolltarget.setAttribute(this.scrollattr,$2)
}else{
this.updateThumbPos()
};this.pagesize=this[this.sizeAxis]
},"targetPosUpdate",function($0){
this.updateThumbPos()
},"updateThumbPos",function(){
with(this){
var $0=0;if(this.scrollmax>0&&this.scrolltrack&&this.scrolltarget){
$0=Math.min(Math.ceil(-this.scrolltarget[this.scrollattr]/this.scrollmax*this.scrolltrack[this.sizeAxis]),this.scrolltrack[this.sizeAxis]-this.thumb[this.sizeAxis])
};this.thumb.setAttribute(this.axis,$0)
}},"_showEnabled",function(){
with(this){
if(!_enabled){
this.thumb.setAttribute(sizeAxis,0)
}else updateThumbSize();this.thumb.setAttribute("visible",_enabled);if(scrolltarget)this.scrolltarget.setAttribute(scrollattr,0)
}},"updateThumbSize",function(){
with(this){
if(this.scrollmax<=this.scrolltarget.immediateparent[this.sizeAxis]){
if(this.scrollable){
this.setAttribute("scrollable",false);if(this.othersb)this.othersb.targetSizeUpdate(null)
};return
}else{
if(!this.scrollable){
this.setAttribute("scrollable",true);if(this.othersb)this.othersb.targetSizeUpdate(null)
}};var $0=0;if(this.scrollmax>0&&this.scrolltrack&&this.scrolltarget){
$0=Math.floor(this.scrolltarget.immediateparent[this.sizeAxis]/this.scrollmax*this.scrolltrack[this.sizeAxis])
};if($0<14)$0=14;thumb.setAttribute(this.sizeAxis,$0)
}},"setPosRelative",function($0){
with(this){
if(!this.scrolltarget)return;var $1=this.scrolltarget[this.scrollattr]-$0;if($1>0)$1=0;var $2=Math.max(this.scrollmax-this.scrolltarget.immediateparent[this.sizeAxis],0);if($1<-$2)$1=-$2;this.scrolltarget.setAttribute(this.scrollattr,$1)
}},"step",function($0){
this.setPosRelative($0*this.stepsize)
},"page",function($0){
this.setPosRelative($0*this.pagesize)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_basepanel,["displayName","<basepanel with='bsscrlbr'>","children",LzNode.mergeChildren([{attrs:{$6z:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.height-this.othersb.height:this.immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},$70:function(){
try{
return [this,"othersb",this.othersb,"visible",this.immediateparent,"height",this.othersb,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$classrootdepth:1,height:new LzAlwaysExpr("height","expression","$6z","$70",null),name:"heightConstraint"},"class":LzState},{attrs:{$71:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.width-this.othersb.width:this.immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},$72:function(){
try{
return [this,"othersb",this.othersb,"visible",this.immediateparent,"width",this.othersb,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$classrootdepth:1,name:"widthConstraint",width:new LzAlwaysExpr("width","expression","$71","$72",null)},"class":LzState}],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)],[$lzc$class_bsscrlbr]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("_enabled","expression","$6x","$6y",null),_mwActivateDel:null,_mwDeactivateDel:null,_mwUpdateDel:null,axis:"y",clipSizeDel:null,focusview:null,heightDel:null,mousewheelactive:false,mousewheelevent_off:"onblur",mousewheelevent_on:"onfocus",onscrollable:LzDeclaredEvent,onscrollmax:LzDeclaredEvent,otherSizeAxis:"width",othersb:null,pagesize:null,scrollable:true,scrollattr:new LzAlwaysExpr("scrollattr","string","$6v","$6w",null),scrollmax:null,scrolltarget:null,sizeAxis:"height",stepsize:10,targetHeightDel:null,targetPosDel:null,thumb:null,usemousewheel:true,usetargetsize:false},$lzc$class_$s.attributes)
}}})($lzc$class_$s)
};{
Class.make("$lzc$class_$t",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$73",function(){
with(this){
return lz.ModeManager
}},"$74",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$75",function($0){
this.setAttribute("mouseisover",true)
},"$76",function($0){
this.setAttribute("mouseisover",false)
},"$77",function($0){
this.setAttribute("mouseisdown",true)
},"$78",function($0){
this.setAttribute("mouseisdown",false)
},"$79",function($0){
this.onmouseover.sendEvent()
},"$7a",function($0){
this.onmouseout.sendEvent()
},"$7b",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$7c",function($0){
if($0==32||$0==13){
this.onmouseup.sendEvent();if(this.onclick.ready)this.onclick.sendEvent()
}},"_updateFrame",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=1;if(this.disabled){
$1=4
}else if(this.mouseisdown&&this.mouseisover){
$1=3
}else if(this.mouseisover){
$1=2
};if($1!==this.frame){
this.setAttribute("frame",$1)
};var $2="up";switch($1){
case 2:
$2="over";break;
case 3:
$2="down";break;

};if(this.mousestate!=$2){
this.setAttribute("mousestate",$2)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$s,["displayName","<basepanel with='buttonevents, bsscrlbr'>","children",LzNode.mergeChildren([],$lzc$class_$s["children"]),"attributes",new LzInheritedHash($lzc$class_$s.attributes)],[$lzc$class_buttonevents]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$74","$73","onmouseover","$75",null,"onmouseout","$76",null,"onmousedown","$77",null,"onmouseup","$78",null,"onfocus","$79",null,"onblur","$7a",null,"onkeydown","$7b",null,"onkeyup","$7c",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_$t.attributes)
}}})($lzc$class_$t)
};Class.make("$lzc$class_86",["$7l",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$7m",function(){
with(this){
try{
return [parent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$7n",function($0){
with(this){
var $1=parent.thumb.y;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$7o",function(){
with(this){
try{
return [parent.thumb,"y"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_scrltrk,["displayName","<anonymous extends='scrltrk' with='buttonevents, mousedownrepeater'>","attributes",new LzInheritedHash($lzc$class_scrltrk.attributes)]);Class.make("$lzc$class_87",["$7p",function($0){
with(this){
var $1=parent.width-2;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$7q",function(){
with(this){
try{
return [parent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$7r",function($0){
with(this){
var $1=classroot;if($1!==this["drawtarget"]||!this.inited){
this.setAttribute("drawtarget",$1)
}}},"$7s",function(){
try{
return [this,"classroot"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_scrlthmb,["displayName","<anonymous extends='scrlthmb' with='virtualdrawview'>","children",LzNode.mergeChildren([],$lzc$class_scrlthmb["children"]),"attributes",new LzInheritedHash($lzc$class_scrlthmb.attributes)]);Class.make("$lzc$class_88",["$7t",function($0){
with(this){
var $1=parent.thumb.y+parent.thumb.height;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$7u",function(){
with(this){
try{
return [parent.thumb,"y",parent.thumb,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$7v",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$7w",function(){
with(this){
try{
return [parent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$7x",function($0){
with(this){
var $1=parent.height-parent.thumb.y-parent.thumb.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$7y",function(){
with(this){
try{
return [parent,"height",parent.thumb,"y",parent.thumb,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_scrltrk,["displayName","<anonymous extends='scrltrk' with='buttonevents, mousedownrepeater'>","attributes",new LzInheritedHash($lzc$class_scrltrk.attributes)]);Class.make("$lzc$class_85",["$7h",function($0){
with(this){
var $1=immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$7i",function(){
with(this){
try{
return [immediateparent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$7j",function($0){
with(this){
var $1=immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$7k",function(){
with(this){
try{
return [immediateparent,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"thumb",void 0,"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzView,["displayName","<anonymous extends='view'>","children",[{attrs:{$classrootdepth:2,direction:-1,height:new LzAlwaysExpr("height","size","$7n","$7o",null),width:new LzAlwaysExpr("width","size","$7l","$7m",null)},"class":$lzc$class_86},{attrs:{$classrootdepth:2,drawtarget:new LzAlwaysExpr("drawtarget","expression","$7r","$7s",null),name:"thumb",width:new LzAlwaysExpr("width","size","$7p","$7q",null),x:1},"class":$lzc$class_87},{attrs:{$classrootdepth:2,direction:1,height:new LzAlwaysExpr("height","size","$7x","$7y",null),width:new LzAlwaysExpr("width","size","$7v","$7w",null),y:new LzAlwaysExpr("y","numberExpression","$7t","$7u",null)},"class":$lzc$class_88}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_89",["$7z",function($0){
with(this){
var $1=parent.width-4;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$80",function(){
with(this){
try{
return [parent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_scrlstepbtn,["displayName","<anonymous extends='scrlstepbtn' with='buttonevents, mousedownrepeater, keyboardrepeater, drawborderfocus, componentfocus, drawarrow, virtualdrawview, drawbutton, stylebutton'>","attributes",new LzInheritedHash($lzc$class_scrlstepbtn.attributes)]);Class.make("$lzc$class_8a",["$81",function($0){
with(this){
var $1=parent.height-this.height-2;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$82",function(){
with(this){
try{
return [parent,"height",this,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$83",function($0){
with(this){
var $1=parent.width-4;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$84",function(){
with(this){
try{
return [parent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_scrlstepbtn,["displayName","<anonymous extends='scrlstepbtn' with='buttonevents, mousedownrepeater, keyboardrepeater, drawborderfocus, componentfocus, drawarrow, virtualdrawview, drawbutton, stylebutton'>","attributes",new LzInheritedHash($lzc$class_scrlstepbtn.attributes)]);{
Class.make("$lzc$class_scrlbr",["size",void 0,"$7d",function($0){
var $1=this.size;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$7e",function(){
try{
return [this,"size"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$7f",function($0){
with(this){
if(canvas.capabilities["minimize_opacity_changes"]){

}else{
this.setAttribute("opacity",0.4)
}}},"$7g",function($0){
this.setAttribute("activated",$0)
},"activated",void 0,"onactivated",void 0,"$lzc$set_activated",function($0){
if($0!=this.activated){
this.activated=$0;if($0){
this.activate()
}else{
this.deactivate()
}};if(this.onactivated.ready)this.onactivated.sendEvent($0)
},"activateWithTimeout",function(){
with(this){
this.setAttribute("activated",true);if(!this.__deactivatedel){
this.__deactivatedel=new LzDelegate(this,"deactivate")
};lz.Timer.resetTimer(this.__deactivatedel,2000)
}},"activate",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};this.activated=true;if(canvas.capabilities["minimize_opacity_changes"]){

}else{
this.animate("opacity",1,200)
}}},"deactivate",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};this.activated=false;if(!this.isMouseOver()){
if(canvas.capabilities["minimize_opacity_changes"]){

}else{
this.animate("opacity",0.4,200)
}}}},"draw",function($0){
this.beginPath();this.drawshape($0,0,0,this.width-1,this.height-2);this.lineWidth=this.borderwidth;this.strokeStyle=this.interiorbordercolor;this.fillStyle=this.interiorfillcolor;this.fill();this.stroke()
},"scrolltrack",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$t,["tagname","scrlbr","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,height:new LzAlwaysExpr("height","size","$7j","$7k",null),name:"scrolltrack",thumb:void 0,width:new LzAlwaysExpr("width","size","$7h","$7i",null)},"class":$lzc$class_85},{attrs:{$classrootdepth:1,direction:-1,width:new LzAlwaysExpr("width","size","$7z","$80",null),x:2,y:2},"class":$lzc$class_89},{attrs:{$classrootdepth:1,direction:1,width:new LzAlwaysExpr("width","size","$83","$84",null),x:2,y:new LzAlwaysExpr("y","numberExpression","$81","$82",null)},"class":$lzc$class_8a}],$lzc$class_$t["children"]),"attributes",new LzInheritedHash($lzc$class_$t.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$7f",null,"onmouseisover","$7g",null],activated:false,onactivated:LzDeclaredEvent,size:new LzStyleConstraintExpr("size","expression","size",16,false),width:new LzAlwaysExpr("width","size","$7d","$7e",null)},$lzc$class_scrlbr.attributes)
}}})($lzc$class_scrlbr)
};Mixin.make("$lzc$class_drawfltr",["draw",function($0){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;this.drawshape($0,0,0,this.width-1,this.height-1);$0.fillStyle=$0.interiorfillcolor;$0.fill();$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.stroke()
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],null,["tagname","drawfltr","attributes",new LzInheritedHash(LzView.attributes)]);{
Class.make("$lzc$class_$u",["value",void 0,"disabled",void 0,"$8b",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$8c",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$8d",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$8e",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_basepanel,["displayName","<basepanel with='componentmodel'>","children",LzNode.mergeChildren([],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)],[$lzc$class_componentmodel]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$8d","$8e",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$8b","$8c",null),value:""},$lzc$class_$u.attributes)
}}})($lzc$class_$u)
};{
Class.make("$lzc$class_$v",["focusanimationspeed",void 0,"focused",void 0,"$8f",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$8g",function($0){
if(!this.focusable)return;this.setAttribute("focused",false)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$u,["displayName","<basepanel with='componentfocus, componentmodel'>","children",LzNode.mergeChildren([],$lzc$class_$u["children"]),"attributes",new LzInheritedHash($lzc$class_$u.attributes)],[$lzc$class_componentfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$8f",null,"onblur","$8g",null],focusanimationspeed:500,focused:false},$lzc$class_$v.attributes)
}}})($lzc$class_$v)
};Class.make("$lzc$class_$w",["draw",function($0){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;this.drawshape($0,0,0,this.width-1,this.height-1);$0.fillStyle=$0.interiorfillcolor;$0.fill();$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.stroke()
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$v,["displayName","<basepanel with='drawfltr, componentfocus, componentmodel'>","children",LzNode.mergeChildren([],$lzc$class_$v["children"]),"attributes",new LzInheritedHash($lzc$class_$v.attributes)],[$lzc$class_drawfltr]);{
Class.make("$lzc$class_$x",["$8h",function($0){
with(this){
if($0){
var $1=10;if(this.capabilities["minimize_opacity_changes"]){
$1=2
};this.setAttribute("shadowcolor",this.highlightcolor);this.setAttribute("shadowdistance",0);this.setAttribute("shadowblurradius",0);this.animate("shadowblurradius",$1,this.focusanimationspeed)
}else{
if(this.disabled)return;var $2=this.animate("shadowblurradius",0,this.focusanimationspeed);new LzDelegate(this,"__finishBlur",$2,"onstop")
}}},"__finishBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.setAttribute("shadowcolor",null)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$w,["displayName","<basepanel with='drawshadowfocus, drawfltr, componentfocus, componentmodel'>","children",LzNode.mergeChildren([],$lzc$class_$w["children"]),"attributes",new LzInheritedHash($lzc$class_$w.attributes)],[$lzc$class_drawshadowfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocused","$8h",null]},$lzc$class_$x.attributes)
}}})($lzc$class_$x)
};{
Class.make("$lzc$class_fltr",["target",void 0,"showbelow",void 0,"show",function($0){
with(this){
if(!$0)return;if($0!==this.target){
this.setAttribute("target",$0);if(!this["__posDel"]){
this.__posDel=new LzDelegate(this,"updatePosition")
}else{
this.__posDel.unregisterAll()
};this.__posDel.register($0,"onx");this.__posDel.register($0,"ony");this.__posDel.register($0,"onwidth");this.__posDel.register($0,"onheight");this.__posDel.register(canvas,"onwidth");this.__posDel.register(canvas,"onheight");this.updatePosition()
};this.animate("opacity",1,500)
}},"updatePosition",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(!this.target)return;var $1=this.target;var $2=$1.getAttributeRelative("x",canvas);var $3=$1.getAttributeRelative("y",canvas);if(this.showbelow){
if($3+$1.height+this.height<canvas.height){
$3+=$1.height
}else{
$3-=this.height
}}else{
if($3-this.height>0){
$3-=this.height
}else{
$3+=$1.height
}};if($2+this.width>canvas.width){
$2-=canvas.width-this.width
};if(this.x!=$2){
this.animate("x",$2,0)
};if(this.y!=$3){
this.animate("y",$3,0)
};this.bringToFront()
}},"hide",function(){
with(this){
this.__posDel.unregisterAll();lz.ModeManager.release(this);this.setAttribute("opacity",0);this.target=null
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$x,["tagname","fltr","children",LzNode.mergeChildren([],$lzc$class_$x["children"]),"attributes",new LzInheritedHash($lzc$class_$x.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({opacity:0,showbelow:true,target:null},$lzc$class_fltr.attributes)
}}})($lzc$class_fltr)
};{
Class.make("$lzc$class_$y",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$8i",function(){
with(this){
return lz.ModeManager
}},"$8j",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$8k",function($0){
this.setAttribute("mouseisover",true)
},"$8l",function($0){
this.setAttribute("mouseisover",false)
},"$8m",function($0){
this.setAttribute("mouseisdown",true)
},"$8n",function($0){
this.setAttribute("mouseisdown",false)
},"$8o",function($0){
this.onmouseover.sendEvent()
},"$8p",function($0){
this.onmouseout.sendEvent()
},"$8q",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$8r",function($0){
if($0==32||$0==13){
this.onmouseup.sendEvent();if(this.onclick.ready)this.onclick.sendEvent()
}},"_updateFrame",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=1;if(this.disabled){
$1=4
}else if(this.mouseisdown&&this.mouseisover){
$1=3
}else if(this.mouseisover){
$1=2
};if($1!==this.frame){
this.setAttribute("frame",$1)
};var $2="up";switch($1){
case 2:
$2="over";break;
case 3:
$2="down";break;

};if(this.mousestate!=$2){
this.setAttribute("mousestate",$2)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzText,["displayName","<text with='buttonevents'>","attributes",new LzInheritedHash(LzText.attributes)],[$lzc$class_buttonevents]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$8j","$8i","onmouseover","$8k",null,"onmouseout","$8l",null,"onmousedown","$8m",null,"onmouseup","$8n",null,"onfocus","$8o",null,"onblur","$8p",null,"onkeydown","$8q",null,"onkeyup","$8r",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_$y.attributes)
}}})($lzc$class_$y)
};{
Class.make("$lzc$class_$z",["value",void 0,"disabled",void 0,"$8s",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$8t",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$8u",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$8v",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$y,["displayName","<text with='componentmodel, buttonevents'>","attributes",new LzInheritedHash($lzc$class_$y.attributes)],[$lzc$class_componentmodel]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$8u","$8v",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$8s","$8t",null),value:""},$lzc$class_$z.attributes)
}}})($lzc$class_$z)
};{
Class.make("$lzc$class_listitem",["$8w",function($0){
var $1=this.mouseisover?this.controller.highlightcolor:(this.selected?this.controller.selectioncolor:0);if($1!==this["fgcolor"]||!this.inited){
this.setAttribute("fgcolor",$1)
}},"$8x",function(){
try{
return [this,"mouseisover",this.controller,"highlightcolor",this,"selected",this.controller,"selectioncolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$8y",function($0){
var $1=this.mouseisover?this.controller.selectioncolor:null;if($1!==this["bgcolor"]||!this.inited){
this.setAttribute("bgcolor",$1)
}},"$8z",function(){
try{
return [this,"mouseisover",this.controller,"selectioncolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"controller",void 0,"selectionmanager",void 0,"selected",void 0,"onselected",void 0,"$lzc$set_selected",function($0){
this.selected=$0;if(this.onselected.ready)this.onselected.sendEvent($0)
},"$90",function($0){
this.setAttribute("text","foo: "+$0)
},"$91",function($0){
this.selectionmanager.select(this);this.controller.setAttribute("value",this.data)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$z,["tagname","listitem","attributes",new LzInheritedHash($lzc$class_$z.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondata","$90",null,"onclick","$91",null],bgcolor:new LzAlwaysExpr("bgcolor","color","$8y","$8z",null),clickable:true,controller:null,fgcolor:new LzAlwaysExpr("fgcolor","color","$8w","$8x",null),onselected:LzDeclaredEvent,selected:false,selectionmanager:null,width:100},$lzc$class_listitem.attributes)
}}})($lzc$class_listitem)
};{
Class.make("$lzc$class_$12",["$92",function($0){
with(this){
if($0){
var $1=10;if(this.capabilities["minimize_opacity_changes"]){
$1=2
};this.setAttribute("shadowcolor",this.highlightcolor);this.setAttribute("shadowdistance",0);this.setAttribute("shadowblurradius",0);this.animate("shadowblurradius",$1,this.focusanimationspeed)
}else{
if(this.disabled)return;var $2=this.animate("shadowblurradius",0,this.focusanimationspeed);new LzDelegate(this,"__finishBlur",$2,"onstop")
}}},"__finishBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.setAttribute("shadowcolor",null)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_basepanel,["displayName","<basepanel with='drawshadowfocus'>","children",LzNode.mergeChildren([],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)],[$lzc$class_drawshadowfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocused","$92",null]},$lzc$class_$12.attributes)
}}})($lzc$class_$12)
};{
Class.make("$lzc$class_$13",["focusanimationspeed",void 0,"focused",void 0,"$93",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$94",function($0){
if(!this.focusable)return;this.setAttribute("focused",false)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$12,["displayName","<basepanel with='componentfocus, drawshadowfocus'>","children",LzNode.mergeChildren([],$lzc$class_$12["children"]),"attributes",new LzInheritedHash($lzc$class_$12.attributes)],[$lzc$class_componentfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$93",null,"onblur","$94",null],focusanimationspeed:500,focused:false},$lzc$class_$13.attributes)
}}})($lzc$class_$13)
};{
Class.make("$lzc$class_$14",["value",void 0,"disabled",void 0,"$95",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$96",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$97",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$98",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$13,["displayName","<basepanel with='componentmodel, componentfocus, drawshadowfocus'>","children",LzNode.mergeChildren([],$lzc$class_$13["children"]),"attributes",new LzInheritedHash($lzc$class_$13.attributes)],[$lzc$class_componentmodel]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$97","$98",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$95","$96",null),value:""},$lzc$class_$14.attributes)
}}})($lzc$class_$14)
};Class.make("$lzc$class_9j",["$9c",function($0){
var $1=this.parent.value;if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}},"$9d",function(){
try{
return [this.parent,"value"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzText,["displayName","<anonymous extends='text'>","attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_$10",["drawarrow",function($0,$1,$2,$3,$4,$5){
var $6=($3+$1)*0.5;if($5){
$0.moveTo($1,$4);$0.lineTo($6,$2);$0.lineTo($3,$4);$0.lineTo($1,$4)
}else{
$0.moveTo($1,$2);$0.lineTo($6,$4);$0.lineTo($3,$2);$0.lineTo($1,$2)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_bsbtn,["displayName","<bsbtn with='drawarrow'>","children",LzNode.mergeChildren([],$lzc$class_bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)],[$lzc$class_drawarrow]);Class.make("$lzc$class_9k",["$9e",function($0){
var $1=this.height;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$9f",function(){
try{
return [this,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$9g",function($0){
var $1=this.parent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$9h",function(){
try{
return [this.parent,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$9i",function($0){
this.parent.onclick.sendEvent(this)
},"draw",function($0){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["draw"]||this.nextMethod(arguments.callee,"draw")).call(this,$0);this.beginPath();$0.fillStyle=$0.iconcolor;this.drawarrow($0,5,7,this.width-6,this.height-8,false);this.fill()
},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$10,["displayName","<anonymous extends='bsbtn' with='drawarrow'>","children",LzNode.mergeChildren([],$lzc$class_$10["children"]),"attributes",new LzInheritedHash($lzc$class_$10.attributes)]);{
Class.make("$lzc$class_combobox",["$99",function($0){
this.open()
},"$9a",function($0){
this.setAttribute("opt",[])
},"opt",void 0,"open",function(){
with(this){
if(combobox_floater!==this.opt){
combobox_floater.setAttribute("opt",this.opt)
};combobox_floater.show(this)
}},"draw",function($0){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;this.drawshape($0,0,0,this.width-1,this.height-1);$0.fillStyle=$0.interiorfillcolor;$0.fill();$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.stroke()
},"$9b",function($0){
if(!this.focused)return;if($0==13||$0==32){
this.open()
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$14,["tagname","combobox","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,text:new LzAlwaysExpr("text","text","$9c","$9d",null)},"class":$lzc$class_9j},{attrs:{$classrootdepth:1,$delegates:["onclick","$9i",null],align:"right",clickable:true,focusable:false,height:new LzAlwaysExpr("height","size","$9g","$9h",null),width:new LzAlwaysExpr("width","size","$9e","$9f",null)},"class":$lzc$class_9k}],$lzc$class_$14["children"]),"attributes",new LzInheritedHash($lzc$class_$14.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onclick","$99",null,"onkeydown","$9b",null],clickable:true,opt:new LzOnceExpr("opt","expression","$9a",null),width:100,x:10},$lzc$class_combobox.attributes)
}}})($lzc$class_combobox)
};Class.make("$lzc$class_9y",["$9t",function($0){
this.setAttribute("controller",this.parent.parent.parent)
},"$9u",function($0){
this.setAttribute("selectionmanager",this.parent.selector)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_listitem,["displayName","<anonymous extends='listitem' with='componentmodel, buttonevents'>","attributes",new LzInheritedHash($lzc$class_listitem.attributes)]);Class.make("$lzc$class_9x",["$9r",function($0){
var $1=this.parent.parent.parent.opt;if($1!==this["nodes"]||!this.inited){
this.setAttribute("nodes",$1)
}},"$9s",function(){
try{
return [this.parent.parent.parent,"opt"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_replicator,["displayName","<anonymous extends='replicator'>","children",[{attrs:{controller:new LzOnceExpr("controller","expression","$9t",null),selectionmanager:new LzOnceExpr("selectionmanager","expression","$9u",null)},"class":$lzc$class_9y}],"attributes",new LzInheritedHash($lzc$class_replicator.attributes)]);Class.make("$lzc$class_9w",["$9n",function($0){
with(this){
var $1=immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$9o",function(){
with(this){
try{
return [immediateparent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$9p",function($0){
with(this){
var $1=immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$9q",function(){
with(this){
try{
return [immediateparent,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzView,["displayName","<anonymous extends='view'>","children",[{attrs:{selector:void 0},children:[{"class":$lzc$class_simplelayout},{attrs:{name:"selector",sel:"$lzc$set_selected"},"class":$lzc$class_selectionmanager},{attrs:{nodes:new LzAlwaysExpr("nodes","expression","$9r","$9s",null)},"class":$lzc$class_9x}],"class":LzView},{"class":$lzc$class_scrlbr}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_9v",["$9l",function($0){
this.setAttribute("opt",[])
},"opt",void 0,"$lzc$set_value",function($0){
if(!this.target){
return
};this.target.setAttribute("value",$0);this.hide()
},"$9m",function($0){
with(this){
if($0==null)return;lz.Focus.setFocus(this);lz.ModeManager.makeModal(this);if(this.contentstate.applied==false){
this.contentstate.setAttribute("applied",true)
}}},"passModeEvent",function($0,$1){
if($0=="onmousedown"&&(!$1||$1&&$1!==this.target&&!$1.childOf(this.target))){
this.hide()
};return true
},"contentstate",void 0,"content",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_fltr,["displayName","<anonymous extends='fltr' with='drawshadowfocus, drawfltr, componentfocus, componentmodel'>","children",LzNode.mergeChildren([{attrs:{content:void 0,name:"contentstate"},children:[{attrs:{clip:true,height:new LzAlwaysExpr("height","size","$9p","$9q",null),name:"content",width:new LzAlwaysExpr("width","size","$9n","$9o",null)},"class":$lzc$class_9w}],"class":LzState}],$lzc$class_fltr["children"]),"attributes",new LzInheritedHash($lzc$class_fltr.attributes)]);canvas.LzInstantiateView({attrs:{$delegates:["ontarget","$9m",null],$lzc$bind_name:function($0,$1){
switch(arguments.length){
case 1:
$1=true;

};if($1){
combobox_floater=$0
}else if(combobox_floater===$0){
combobox_floater=null
}},content:void 0,contentstate:void 0,height:200,name:"combobox_floater",opt:new LzOnceExpr("opt","expression","$9l",null),width:100},"class":$lzc$class_9v},2);{
Class.make("$lzc$class_$15",["__keydowntime",void 0,"__keystillDownDelegate",void 0,"__keydownrepeatinterval",void 0,"__keydowninitialinterval",void 0,"onkeystilldown",void 0,"init",function(){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__keystillDownDelegate=new LzDelegate(this,"__iskeystilldown")
}},"__iskeystilldown",function($0){
with(this){
var $1=$0-this.__keydowntime;this.__keydowntime=$0;var $2=lz.Keys.downKeysArray;if($2.length>0){
var $3;if($1>this.__keydowninitialinterval){
$3=this.__keydowninitialinterval
}else{
$3=this.__keydownrepeatinterval;for(var $4=0;$4<$2.length;$4++){
this.onkeystilldown.sendEvent($2[$4])
}};lz.Timer.resetTimer(this.__keystillDownDelegate,$3)
}}},"$9z",function($0){
with(this){
this.__keydowntime=new Date().getTime();lz.Timer.addTimer(this.__keystillDownDelegate,this.__keydowninitialinterval)
}},"$a0",function($0){
with(this){
if(lz.Keys.downKeysArray.length==0){
lz.Timer.removeTimer(this.__keystillDownDelegate)
}}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$p,["displayName","<bsbtn with='keyboardrepeater, virtualdrawview'>","children",LzNode.mergeChildren([],$lzc$class_$p["children"]),"attributes",new LzInheritedHash($lzc$class_$p.attributes)],[$lzc$class_keyboardrepeater]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onkeydown","$9z",null,"onkeyup","$a0",null],__keydowninitialinterval:300,__keydownrepeatinterval:50,__keydowntime:0,__keystillDownDelegate:null,onkeystilldown:LzDeclaredEvent},$lzc$class_$15.attributes)
}}})($lzc$class_$15)
};{
Class.make("$lzc$class_sliderbutton",["dragger",void 0,"$a5",function($0){
with(this){
var $1=Math.abs(parent.max-parent.min);var $2=(parseFloat($0)-parent.min)/$1;if($2<0){
$2=0
}else if($2>1){
$2=1
};this.setAttribute("x",Math.floor($2*(this.parent.width-this.width)))
}},"$a6",function($0){
with(this){
var $1=Math.abs(parent.max-parent.min);var $2=$0/(parent.width-this.width);if($2<0){
$2=0
}else if($2>1){
$2=1
};var $3=$2*$1+parent.min;parent.updateValue(this.clonenumber,$3);slider_floater.setAttribute("value",$3)
}},"$a7",function($0){
with(this){
slider_floater.show(this)
}},"$a8",function($0){
with(this){
slider_floater.hide()
}},"$a9",function(){
with(this){
return lz.Keys
}},"handleKeyDown",function($0){
with(this){
var $1=0;if($0==37||$0==38){
$1=-1
}else if($0==39||$0==40){
$1=1
};if(lz.Keys.isKeyDown("shift")){
$1*=2
};this.step($1)
}},"step",function($0){
with(this){
if(!this.focused)return;var $1=this.x+$0;var $2=parent.width-this.width;if($1<0){
$1=0
}else if($1>$2){
$1=$2
};if(this.x!=$1)this.setAttribute("x",$1)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$15,["tagname","sliderbutton","children",LzNode.mergeChildren([{attrs:{$a1:function($0){
var $1=this.parent.width-this.width;if($1!==this["drag_max_x"]||!this.inited){
this.setAttribute("drag_max_x",$1)
}},$a2:function(){
try{
return [this.parent,"width",this,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$a3:function($0){
var $1=this.parent.mouseisdown;if($1!==this["applied"]||!this.inited){
this.setAttribute("applied",$1)
}},$a4:function(){
try{
return [this.parent,"mouseisdown"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$classrootdepth:1,applied:new LzAlwaysExpr("applied","boolean","$a3","$a4",null),drag_axis:"x",drag_max_x:new LzAlwaysExpr("drag_max_x","number","$a1","$a2",null),drag_min_x:0,name:"dragger"},"class":$lzc$class_dragstate}],$lzc$class_$15["children"]),"attributes",new LzInheritedHash($lzc$class_$15.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondata","$a5",null,"onx","$a6",null,"onfocus","$a7",null,"onblur","$a8",null,"onkeydown","handleKeyDown",null,"onkeystilldown","handleKeyDown",null,"onmousewheeldelta","step","$a9"]},$lzc$class_sliderbutton.attributes)
}}})($lzc$class_sliderbutton)
};{
Class.make("$lzc$class_$16",["value",void 0,"disabled",void 0,"$aa",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$ab",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$ac",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$ad",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$5,["displayName","<basepanel with='componentmodel, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_$5["children"]),"attributes",new LzInheritedHash($lzc$class_$5.attributes)],[$lzc$class_componentmodel]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$ac","$ad",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$aa","$ab",null),value:""},$lzc$class_$16.attributes)
}}})($lzc$class_$16)
};Class.make("$lzc$class_al",["$ag",function($0){
var $1=this.parent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$ah",function(){
try{
return [this.parent,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$ai",function($0){
var $1=this.mouseisover?1:0.5;if($1!==this["opacity"]||!this.inited){
this.setAttribute("opacity",$1)
}},"$aj",function(){
try{
return [this,"mouseisover"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_sliderbutton,["displayName","<anonymous extends='sliderbutton' with='keyboardrepeater, virtualdrawview'>","children",LzNode.mergeChildren([],$lzc$class_sliderbutton["children"]),"attributes",new LzInheritedHash($lzc$class_sliderbutton.attributes)]);Class.make("$lzc$class_ak",["$ae",function($0){
var $1=this.parent._model;if($1!==this["nodes"]||!this.inited){
this.setAttribute("nodes",$1)
}},"$af",function(){
try{
return [this.parent,"_model"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_replicator,["displayName","<anonymous extends='replicator'>","children",[{attrs:{$classrootdepth:2,height:new LzAlwaysExpr("height","size","$ag","$ah",null),opacity:new LzAlwaysExpr("opacity","number","$ai","$aj",null),transition:"opacity .5s",width:10},"class":$lzc$class_al}],"attributes",new LzInheritedHash($lzc$class_replicator.attributes)]);{
Class.make("$lzc$class_sldr",["_model",void 0,"min",void 0,"max",void 0,"draw",function($0){
$0.clear();var $1=this.height*0.25;this.beginPath();this.drawshape($0,0,$1,this.width-1,$1*2);this.closePath();$0.lineWidth=this.borderwidth;$0.strokeStyle=this.interiorbordercolor;$0.fillStyle=this.interiorfillcolor;$0.fill();$0.stroke()
},"updateValue",function($0,$1){
this._model[$0]=$1;this.value=this._model.join(",");if(this.onvalue.ready)this.onvalue.sendEvent(this.value)
},"onvalue",void 0,"$lzc$set_value",function($0){
this.value=$0;this.setAttribute("_model",$0.split(","));if(this.onvalue.ready)this.onvalue.sendEvent(this.value)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_$16,["tagname","sldr","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,nodes:new LzAlwaysExpr("nodes","expression","$ae","$af",null)},"class":$lzc$class_ak}],$lzc$class_$16["children"]),"attributes",new LzInheritedHash($lzc$class_$16.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_model:[0],focusable:false,height:20,max:100,min:0,onvalue:LzDeclaredEvent,width:100},$lzc$class_sldr.attributes)
}}})($lzc$class_sldr)
};Class.make("$lzc$class_as",["$am",function($0){
with(this){
var $1=parent.textcolor;if($1!==this["fgcolor"]||!this.inited){
this.setAttribute("fgcolor",$1)
}}},"$an",function(){
with(this){
try{
return [parent,"textcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$ao",function($0){
with(this){
var $1=parent.value;if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}}},"$ap",function(){
with(this){
try{
return [parent,"value"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$aq",function($0){
with(this){
var $1=parent.textshadowcolor;if($1!==this["shadowcolor"]||!this.inited){
this.setAttribute("shadowcolor",$1)
}}},"$ar",function(){
with(this){
try{
return [parent,"textshadowcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],LzText,["displayName","<anonymous extends='text'>","attributes",new LzInheritedHash(LzText.attributes)]);canvas.LzInstantiateView({attrs:{$lzc$bind_name:function($0,$1){
switch(arguments.length){
case 1:
$1=true;

};if($1){
slider_floater=$0
}else if(slider_floater===$0){
slider_floater=null
}},focusable:false,name:"slider_floater",showbelow:false},children:[{attrs:{fgcolor:new LzAlwaysExpr("fgcolor","color","$am","$an",null),shadowangle:45,shadowblurradius:0.1,shadowcolor:new LzAlwaysExpr("shadowcolor","color","$aq","$ar",null),shadowdistance:1,text:new LzAlwaysExpr("text","text","$ao","$ap",null)},"class":$lzc$class_as}],"class":$lzc$class_fltr},2);;(function(){
var $0=LzCSSStyle,$1=LzCSSStyleRule;$0._addRule(new $1("canvas",{"font-family":new LzStyleIdent("Helvetica"),"font-size":12}));$0._addRule(new $1("basepanel",{"base-color":15329769,"border-radius":4,"border-width":1,"highlight-color":1477064,"icon-color":7974345,"interior-border-color":16777215,"interior-border-width":0,"text-color":5789784,"text-shadow-color":16777215}));$0._addRule(new $1("buttongroup",{"divider-gradient":"top,#dddddd 0%,#dddddd 100%","gradient-fill":"top,#fdfdfd 0%,#e5e5e5 82%,#dfdfdf 82%,#dfdfdf 100%"}));$0._addRule(new $1("scrlbr",{"border-radius":16,size:16}));$0._addRule(new $1("scrlthmb",{"border-radius":20,"border-width":0.5}));$0._addRule(new $1("bsbtn",{"bevel-width":0,"gradient-fill":"top,#fdfdfd 0%,#e5e5e5 77%,#dfdfdf 77%,#dfdfdf 100%","gradient-transition-speed":400,padding:8}));$0._addRule(new $1({attrname:"mousestate",attrvalue:"over",simpleselector:"bsbtn"},{"base-color":13823229,"gradient-fill":"top,#fdfdfd 0%,#ebebeb 73%,#e5e5e5 73%,#e5e5e5 100%","gradient-transition-speed":300,"text-color":0}));$0._addRule(new $1({attrname:"mousestate",attrvalue:"down",simpleselector:"bsbtn"},{"base-color":13823229,"gradient-fill":"top,#dfdfdf 0%,#dfdfdf 23%,#e5e5e5 23%,#fdfdfd 100%","gradient-transition-speed":200,"text-color":0}))
})();Class.make("$lzc$class_av",["$at",function($0){
this.setAttribute("width",100)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_btn,["displayName","<anonymous extends='btn'>","children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);Class.make("$lzc$class_aw",["$au",function($0){
this.animate("width",100,500)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_btn,["displayName","<anonymous extends='btn'>","children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);{
Class.make("$lzc$class_$17",["drawtarget",void 0,"ondrawtarget",void 0,"createContext",function(){
return
},"init",function(){
with(this){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0);this.context=$0
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
}},"$lzc$set_drawtarget",function($0){
with(this){
if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.drawtarget=$0;$0.addScope(this);if(this.ondrawtarget.ready)this.ondrawtarget.sendEvent($0)
}}},"destroy",function(){
if(this.drawtarget){
this.drawtarget.removeScope(this)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"redraw",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(!this.drawtarget||!canvas.isinited)return;this.drawtarget.redraw(this)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],$lzc$class_btn,["displayName","<btn with='virtualdrawview'>","children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)],[$lzc$class_virtualdrawview]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_$17.attributes)
}}})($lzc$class_$17)
};canvas.LzInstantiateView({attrs:{y:10},children:[{attrs:{spacing:20},"class":$lzc$class_simplelayout},{attrs:{height:72,width:195,x:10},"class":$lzc$class_bsbtn},{attrs:{disabled:true,height:50,width:50,x:10},"class":$lzc$class_bsbtn},{attrs:{$delegates:["onclick","$at",null],clickable:true,text:"OK",transition:"width .5s",x:10},"class":$lzc$class_av},{attrs:{$delegates:["onclick","$au",null],clickable:true,text:"Cancel",x:10},"class":$lzc$class_aw},{attrs:{borderwidth:0,x:10},children:[{attrs:{text:"Abort"},"class":$lzc$class_$17},{attrs:{disabled:true,text:"Retry"},"class":$lzc$class_$17},{attrs:{text:"Fail"},"class":$lzc$class_$17}],"class":$lzc$class_buttongroup},{attrs:{borderwidth:0,x:10},children:[{attrs:{text:"OK"},"class":$lzc$class_$17},{attrs:{disabled:true,text:"Revert"},"class":$lzc$class_$17}],"class":$lzc$class_buttongroup},{attrs:{text:"Hey there!",width:100,x:10},"class":$lzc$class_inpt},{attrs:{multiline:true,text:"Hey there! This text should wrap onto a few lines.",width:100,x:10},"class":$lzc$class_inpt},{attrs:{clip:true,height:200,width:200,x:10},children:[{attrs:{multiline:true,text:"Man through his scientific genius has been able to draw distance and save time and space. He has been able to carry highways through the stratosphere. We read just the other day that a rocket plane went 1900 miles in one hour. Twice as fast as the speed of sound. This is the new age. Bob Hope has described this new age, this jet age; it is an age in which planes will be moving so fast that we will have a non-stop flight from New York to Los Angeles, when you start out you might develop the hiccups and you will hic in New York and cup in Los Angeles. This is an age in which it will be possible to leave Tokyo on a Sunday morning and arrive in Seattle, Washington on the preceding Saturday night. When your friends meet you at the airport and ask what time did you leave Tokyo, you will have to say I left tomorrow. That is this new age. We live in one world geographically. We face the great problem of making it one spiritually.<br/>Through our scientific means we have made of the world a neighborhood and now the challenge confronts us through our moral and spiritual means to make of it a brotherhood. We must live together, we are not independent we are interdependent. We are all involved in a single process. Whatever affects one directly affects all indirectly for we are tied together in a single progress. We are all linked in the great chain of humanity.<br/>Martin Luther King, Jr.<br/>11 August 1956",width:184},"class":LzText},{"class":$lzc$class_scrlbr}],"class":LzView},{attrs:{max:200,min:100,value:"120,150",x:10},"class":$lzc$class_sldr},{attrs:{opt:[0,1,2,3,4,5,6,7,8,9,10,11,12]},"class":$lzc$class_combobox}],"class":$lzc$class_basepanel},41);lz["layout"]=LzLayout;lz["simplelayout"]=$lzc$class_simplelayout;lz["replicator"]=$lzc$class_replicator;lz["selectionmanager"]=$lzc$class_selectionmanager;lz["dragstate"]=$lzc$class_dragstate;lz["drawarrow"]=$lzc$class_drawarrow;lz["applybasecolor"]=$lzc$class_applybasecolor;lz["drawpanel"]=$lzc$class_drawpanel;lz["borderradius"]=$lzc$class_borderradius;lz["basepanel"]=$lzc$class_basepanel;lz["virtualdrawview"]=$lzc$class_virtualdrawview;lz["componentmodel"]=$lzc$class_componentmodel;lz["componentfocus"]=$lzc$class_componentfocus;lz["drawshadowfocus"]=$lzc$class_drawshadowfocus;lz["buttonevents"]=$lzc$class_buttonevents;lz["mousedownrepeater"]=$lzc$class_mousedownrepeater;lz["keyboardrepeater"]=$lzc$class_keyboardrepeater;lz["stylebutton"]=$lzc$class_stylebutton;lz["drawbutton"]=$lzc$class_drawbutton;lz["buttongroup"]=$lzc$class_buttongroup;lz["bsbtn"]=$lzc$class_bsbtn;lz["btn"]=$lzc$class_btn;lz["drawborderfocus"]=$lzc$class_drawborderfocus;lz["drawinputtext"]=$lzc$class_drawinputtext;lz["inpt"]=$lzc$class_inpt;lz["scrlstepbtn"]=$lzc$class_scrlstepbtn;lz["scrlthmb"]=$lzc$class_scrlthmb;lz["scrltrk"]=$lzc$class_scrltrk;lz["bsscrlbr"]=$lzc$class_bsscrlbr;lz["scrlbr"]=$lzc$class_scrlbr;lz["drawfltr"]=$lzc$class_drawfltr;lz["fltr"]=$lzc$class_fltr;lz["listitem"]=$lzc$class_listitem;lz["combobox"]=$lzc$class_combobox;lz["sliderbutton"]=$lzc$class_sliderbutton;lz["sldr"]=$lzc$class_sldr;canvas.initDone();