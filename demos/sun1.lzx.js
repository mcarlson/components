LzFontManager.addFont('futura','normal','normal','resources/futuraregular.ttf','ar');var combobox_floater=null;var slider_floater=null;canvas=new LzCanvas(null,{__LZproxied:"false",appbuilddate:"2010-07-17T05:42:34Z",bgcolor:16777215,embedfonts:true,font:"Verdana,Vera,sans-serif",fontsize:11,fontstyle:"plain",height:"100%",lpsbuild:"16953 /Users/maxcarlson/openlaszlo/trunk-clean",lpsbuilddate:"2010-07-16T01:16:41Z",lpsrelease:"Latest",lpsversion:"5.0.x",runtime:"dhtml",width:"100%"});Mixin.make("DrawviewShared",["$lzsc$initialize",function($0,$1,$2,$3){
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
this.__path=[[1,0,0]];this.__pathisopen=true
},"closePath",function(){
if(this.__pathisopen){
this.__path.push([0])
};this.__pathisopen=false
},"moveTo",function($0,$1){
if(this.__pathisopen){
this.__path.push([1,$0,$1])
}},"lineTo",function($0,$1){
if(this.__pathisopen){
this.__path.push([2,$0,$1])
}},"quadraticCurveTo",function($0,$1,$2,$3){
if(this.__pathisopen){
this.__path.push([3,$0,$1,$2,$3])
}},"bezierCurveTo",function($0,$1,$2,$3,$4,$5){
if(this.__pathisopen){
this.__path.push([4,$0,$1,$2,$3,$4,$5])
}},"arc",function($0,$1,$2,$3,$4,$5){
with(this){
if(this.__pathisopen){
var $6=$0+$2*Math.cos(-$3);var $7=$1+$2*Math.sin(2*Math.PI+$3);this.__path.push([1,$6,$7]);this.__path.push([5,$0,$1,$2,$3,$4,$5])
}}},"fill",function(){
this.__playPath();this.context.fill()
},"__updateFillStyle",function(){
with(this){
if(this.__globalAlpha!=this.globalAlpha){
this.__globalAlpha=this.context.globalAlpha=this.globalAlpha
};if(this.__fillStyle!=this.fillStyle){
if(this.fillStyle instanceof LzCanvasGradient){
this.fillStyle.__applyFillTo(this.context)
}else{
var $0=lz.drawview.__colorcache;var $1=$0[this.fillStyle];if($1==null){
$1=LzColorUtils.torgb(this.fillStyle);$0[this.fillStyle]=$1
};this.context.fillStyle=$1
};this.__fillStyle=this.fillStyle
}}},"__updateLineStyle",function(){
with(this){
var $0={lineWidth:"__lineWidth",lineCap:"__lineCap",lineJoin:"__lineJoin",miterLimit:"__miterLimit"};for(var $1 in $0){
var $2=$0[$1];var $3=this[$1];if(this[$2]!=$3){
this.context[$1]=$3;this[$2]=$3
}};if(this.__strokeStyle!=this.strokeStyle){
if(this.strokeStyle instanceof LzCanvasGradient){
this.strokeStyle.__applyStrokeTo(this.context)
}else{
var $4=lz.drawview.__colorcache;var $5=$4[this.strokeStyle];if($5==null){
$5=LzColorUtils.torgb(this.strokeStyle);$4[this.strokeStyle]=$5
};this.context.strokeStyle=$5
};this.__strokeStyle=this.strokeStyle
}}},"__playPath",function(){
if(this.__path.length==0)return;this.__dirty=true;this.__updateLineStyle();this.__updateFillStyle();this.context.beginPath();var $0=this.aliaslines&&this.lineWidth%2?0.5:0;for(var $1=0;$1<this.__path.length;$1+=1){
var $2=this.__path[$1];switch($2[0]){
case 0:
this.context.closePath();break;
case 1:
this.context.moveTo($2[1]+$0,$2[2]+$0);break;
case 2:
this.context.lineTo($2[1]+$0,$2[2]+$0);break;
case 3:
this.context.quadraticCurveTo($2[1],$2[2],$2[3]+$0,$2[4]+$0);break;
case 4:
this.context.bezierCurveTo($2[1],$2[2],$2[3],$2[4],$2[5]+$0,$2[6]+$0);break;
case 5:
this.context.arc($2[1]+$0,$2[2]+$0,$2[3],$2[4],$2[5],$2[6]);break;

}}},"clipPath",function(){
this.__playPath();this.context.clip()
},"clipButton",function(){},"stroke",function(){
this.__playPath();this.context.stroke()
},"clear",function(){
if(this["__dirty"]==false)return;this.__dirty=false;this.context.clearRect(0,0,this.width,this.height)
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
}],[DrawviewShared,LzView],["tagname","drawview","attributes",new LzInheritedHash(LzView.attributes),"__colorcache",{},"images",{}]);lz[$lzc$class_drawview.tagname]=$lzc$class_drawview;Class.make("LzCanvasGradient",["__context",null,"__g",null,"$lzsc$initialize",function($0,$1,$2){
this.__context=$0;if($2){
this.__g=$0.context.createRadialGradient.apply($0.context,$1)
}else{
this.__g=$0.context.createLinearGradient.apply($0.context,$1)
}},"addColorStop",function($0,$1){
var $2=lz.drawview.__colorcache;var $3=$2[$1];if($3==null){
$3=LzColorUtils.torgb($1);$2[$1]=$3
};var $4=this.__context.globalAlpha;if($4!=null&&$4!=1){
$3=this.torgba($3,$4)
};try{
this.__g.addColorStop($0,$3)
}
catch($5){}},"torgba",function($0,$1){
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
}}},"$m2",function($0){
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
LzNode.mergeAttributes({$delegates:["onconstruct","$m2",null],locked:2},LzLayout.attributes)
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
Class.make("LzSelectionManager",["sel",void 0,"selectedHash",void 0,"selected",void 0,"toggle",void 0,"lastRangeStart",void 0,"construct",function($0,$1){
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
LzNode.mergeAttributes({sel:"setSelected"},LzSelectionManager.attributes)
}}})(LzSelectionManager)
};{
Class.make("$lzc$class_dragstate",["drag_axis",void 0,"drag_min_x",void 0,"drag_max_x",void 0,"drag_min_y",void 0,"drag_max_y",void 0,"$m3",void 0,"__dragstate_ydoffset",void 0,"$m4",void 0,"$m5",void 0,"y",void 0,"$m6",void 0,"__dragstate_xdoffset",void 0,"$m7",void 0,"$m8",void 0,"x",void 0,"__dragstate_getnewpos",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
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
LzNode.mergeAttributes({$m3:function($0){
this.setAttribute("__dragstate_ydoffset",this.yoffset-this.getMouse("y"))
},$m4:function($0){
var $1=this.drag_axis=="both"||this.drag_axis=="y"?this.__dragstate_getnewpos("y",this.immediateparent.getMouse("y")+this.__dragstate_ydoffset):this.y;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}},$m5:function(){
with(this){
try{
return [this,"drag_axis",this,"__dragstate_ydoffset",this,"y"].concat($lzc$getFunctionDependencies("__dragstate_getnewpos",this,this,["y",this.immediateparent.getMouse("y")+this.__dragstate_ydoffset],null)).concat($lzc$getFunctionDependencies("getMouse",this,this.immediateparent,["y"],null))
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},$m6:function($0){
this.setAttribute("__dragstate_xdoffset",this.xoffset-this.getMouse("x"))
},$m7:function($0){
var $1=this.drag_axis=="both"||this.drag_axis=="x"?this.__dragstate_getnewpos("x",this.immediateparent.getMouse("x")+this.__dragstate_xdoffset):this.x;if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}},$m8:function(){
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
},__dragstate_xdoffset:new LzOnceExpr("__dragstate_xdoffset","expression","$m6",null),__dragstate_ydoffset:new LzOnceExpr("__dragstate_ydoffset","expression","$m3",null),drag_axis:"both",drag_max_x:null,drag_max_y:null,drag_min_x:null,drag_min_y:null,x:new LzAlwaysExpr("x","expression","$m7","$m8",null),y:new LzAlwaysExpr("y","expression","$m4","$m5",null)},$lzc$class_dragstate.attributes)
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
Mixin.make("$lzc$class_applybasecolor",["$m9",void 0,"basecolor",void 0,"onbasecolor",void 0,"$lzc$set_basecolor",function($0){
this.basecolor=$0;this._basehsv=LzColorUtils.tohsv($0);if(this.onbasecolor.ready)this.onbasecolor.sendEvent($0)
},"lockredraw",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.lockredraw=false;this.setAttribute("basecolor",this.basecolor)
},"$m10",function($0){
if(!this.isinited)return;if(!$0)return;var $1=this._basehsv;if(!this.bordercolor){
this.setAttribute("bordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.4039))
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
LzNode.mergeAttributes({$delegates:["onbasecolor","$m10",null],$m9:function($0){
this.setAttribute("basecolor",LzColorUtils.convertColor("null"))
},basecolor:new LzStyleConstraintExpr("basecolor","color","base-color",new LzOnceExpr("basecolor","color","$m9",null),false),lockredraw:true,onbasecolor:LzDeclaredEvent},$lzc$class_applybasecolor.attributes)
}}})($lzc$class_applybasecolor)
};{
Class.make("$lzc$class_drawpanel",["lockredraw",void 0,"redraw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited||this.lockredraw)return;this.draw(this)
},"draw",function($0){
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
LzNode.mergeAttributes({$delegates:["onwidth","redraw",null,"onheight","redraw",null,"oninit","redraw",null],aliaslines:true,lineCap:"round",lockredraw:false,measuresize:false},$lzc$class_drawpanel.attributes)
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
Class.make("$lzc$class_borderradius$drawpanel",["borderradius",void 0,"onborderradius",void 0,"$lzc$set_borderradius",function($0){
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
LzNode.mergeAttributes({borderbottomleftradius:new LzStyleConstraintExpr("borderbottomleftradius","number","border-bottom-left-radius",-1,false),borderbottomrightradius:new LzStyleConstraintExpr("borderbottomrightradius","number","border-bottom-right-radius",-1,false),borderradius:new LzStyleConstraintExpr("borderradius","string","border-radius","",false),bordertopleftradius:new LzStyleConstraintExpr("bordertopleftradius","number","border-top-left-radius",-1,false),bordertoprightradius:new LzStyleConstraintExpr("bordertoprightradius","number","border-top-right-radius",-1,false),onborderbottomleftradius:LzDeclaredEvent,onborderbottomrightradius:LzDeclaredEvent,onborderradius:LzDeclaredEvent,onbordertopleftradius:LzDeclaredEvent,onbordertoprightradius:LzDeclaredEvent},$lzc$class_borderradius$drawpanel.attributes)
}}})($lzc$class_borderradius$drawpanel)
};{
Class.make("$lzc$class_applybasecolor$borderradius$drawpanel",["$m11",void 0,"basecolor",void 0,"onbasecolor",void 0,"$lzc$set_basecolor",function($0){
with(this){
this.basecolor=$0;this._basehsv=LzColorUtils.tohsv($0);if(this.onbasecolor.ready)this.onbasecolor.sendEvent($0)
}},"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.lockredraw=false;this.setAttribute("basecolor",this.basecolor)
},"$m12",function($0){
with(this){
if(!this.isinited)return;if(!$0)return;var $1=this._basehsv;if(!this.bordercolor){
this.setAttribute("bordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.4039))
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
}],$lzc$class_borderradius$drawpanel,["displayName","<drawpanel with='applybasecolor, borderradius'>","children",LzNode.mergeChildren([],$lzc$class_borderradius$drawpanel["children"]),"attributes",new LzInheritedHash($lzc$class_borderradius$drawpanel.attributes)],[$lzc$class_applybasecolor]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onbasecolor","$m12",null],$m11:function($0){
with(this){
this.setAttribute("basecolor",LzColorUtils.convertColor("null"))
}},basecolor:new LzStyleConstraintExpr("basecolor","color","base-color",new LzOnceExpr("basecolor","color","$m11",null),false),lockredraw:true,onbasecolor:LzDeclaredEvent},$lzc$class_applybasecolor$borderradius$drawpanel.attributes)
}}})($lzc$class_applybasecolor$borderradius$drawpanel)
};{
Class.make("$lzc$class_basepanel",["scopes",void 0,"drawchildren",void 0,"padding",void 0,"borderwidth",void 0,"$m13",void 0,"bordercolor",void 0,"highlightcolor",void 0,"selectioncolor",void 0,"$m14",void 0,"interiorbordercolor",void 0,"$m15",void 0,"interiorfillcolor",void 0,"$m16",void 0,"$m17",void 0,"interiorborderwidth",void 0,"redraw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited||this.lockredraw)return;this.clear();this.beginPath();if(this["draw"]){
this.draw(this)
};if(this.scopes&&this.scopes.length&&this.drawchildren){
this.__drawchildren()
};if(this["drawlast"]){
this.drawlast(this)
};this.closePath()
},"__drawchildren",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.scopes||!this.scopes.length||!this.drawchildren){
return
};var $1=this.measuresize;this.measuresize=false;for(var $2=0,$3=this.scopes.length;$2<$3;$2++){
var $4=this.scopes[$2];if($4){
var $5=$4.x;var $6=$4.y;this.translate($5,$6);this.beginPath();$4.draw(this);this.translate(-$5,-$6)
}};this.measuresize=$1
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
}],$lzc$class_applybasecolor$borderradius$drawpanel,["tagname","basepanel","children",LzNode.mergeChildren([],$lzc$class_applybasecolor$borderradius$drawpanel["children"]),"attributes",new LzInheritedHash($lzc$class_applybasecolor$borderradius$drawpanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$m13:function($0){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("null"))
}},$m14:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("null"))
}},$m15:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("null"))
}},$m16:function($0){
var $1=this.borderwidth;if($1!==this["interiorborderwidth"]||!this.inited){
this.setAttribute("interiorborderwidth",$1)
}},$m17:function(){
try{
return [this,"borderwidth"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},bordercolor:new LzStyleConstraintExpr("bordercolor","color","border-color",new LzOnceExpr("bordercolor","color","$m13",null),false),borderwidth:new LzStyleConstraintExpr("borderwidth","number","border-width",0,false),drawchildren:true,highlightcolor:new LzStyleConstraintExpr("highlightcolor","color","highlight-color",LzColorUtils.convertColor("0xff"),false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","color","interior-border-color",new LzOnceExpr("interiorbordercolor","color","$m14",null),false),interiorborderwidth:new LzStyleConstraintExpr("interiorborderwidth","number","interior-border-width",new LzAlwaysExpr("interiorborderwidth","number","$m16","$m17",null),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","color","interior-fill-color",new LzOnceExpr("interiorfillcolor","color","$m15",null),false),padding:new LzStyleConstraintExpr("padding","number","padding",3,false),scopes:null,selectioncolor:new LzStyleConstraintExpr("selectioncolor","color","selection-color",LzColorUtils.convertColor("0x9999ff"),false)},$lzc$class_basepanel.attributes)
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

};if(!this.drawtarget||!this.isinited)return;this.drawtarget.redraw(this)
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
Mixin.make("$lzc$class_componentmodel",["value",void 0,"disabled",void 0,"$m18",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$m19",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m20",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$m21",function(){
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
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$m20","$m21",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$m18","$m19",null),value:""},$lzc$class_componentmodel.attributes)
}}})($lzc$class_componentmodel)
};{
Mixin.make("$lzc$class_componentfocus",["focusanimationspeed",void 0,"focused",void 0,"$m22",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$m23",function($0){
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
LzNode.mergeAttributes({$delegates:["onfocus","$m22",null,"onblur","$m23",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus.attributes)
}}})($lzc$class_componentfocus)
};{
Mixin.make("$lzc$class_drawshadowfocus",["$m24",function($0){
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
LzNode.mergeAttributes({$delegates:["onfocused","$m24",null]},$lzc$class_drawshadowfocus.attributes)
}}})($lzc$class_drawshadowfocus)
};{
Mixin.make("$lzc$class_buttonevents",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$m25",function(){
return lz.ModeManager
},"$m26",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m27",function($0){
this.setAttribute("mouseisover",true)
},"$m28",function($0){
this.setAttribute("mouseisover",false)
},"$m29",function($0){
this.setAttribute("mouseisdown",true)
},"$m30",function($0){
this.setAttribute("mouseisdown",false)
},"$m31",function($0){
this.onmouseover.sendEvent()
},"$m32",function($0){
this.onmouseout.sendEvent()
},"$m33",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m34",function($0){
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
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m26","$m25","onmouseover","$m27",null,"onmouseout","$m28",null,"onmousedown","$m29",null,"onmouseup","$m30",null,"onfocus","$m31",null,"onblur","$m32",null,"onkeydown","$m33",null,"onkeyup","$m34",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents.attributes)
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
}},"$m35",function($0){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
},"$m36",function($0){
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
LzNode.mergeAttributes({$delegates:["onmousedown","$m35",null,"onmouseup","$m36",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater.attributes)
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
}},"$m37",function($0){
this.__keydowntime=new Date().getTime();lz.Timer.addTimer(this.__keystillDownDelegate,this.__keydowninitialinterval)
},"$m38",function($0){
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
LzNode.mergeAttributes({$delegates:["onkeydown","$m37",null,"onkeyup","$m38",null],__keydowninitialinterval:300,__keydownrepeatinterval:50,__keydowntime:0,__keystillDownDelegate:null,onkeystilldown:LzDeclaredEvent},$lzc$class_keyboardrepeater.attributes)
}}})($lzc$class_keyboardrepeater)
};{
Mixin.make("$lzc$class_stylebutton",["vertical",void 0,"bevel",void 0,"$m39",void 0,"interiorbordercolor",void 0,"$m40",void 0,"$m41",void 0,"interiorbordercolorup",void 0,"$m42",void 0,"$m43",void 0,"interiorbordercolorover",void 0,"$m44",void 0,"$m45",void 0,"interiorbordercolordown",void 0,"$m46",void 0,"interiorfillcolor",void 0,"$m47",void 0,"$m48",void 0,"interiorfillcolorup",void 0,"$m49",void 0,"$m50",void 0,"interiorfillcolorover",void 0,"$m51",void 0,"$m52",void 0,"interiorfillcolordown",void 0,"gradientfill",void 0,"_parseLinearGradientCache",void 0,"parseLinearGradient",function($0){
var $1=this._parseLinearGradientCache[$0];if(!$1){
var $2=$0.split(",");if($2.length<2){
return
};var $3=$2.shift();$1={};$1.startpos=$3;$1.colorstops=[];for(var $4=0;$4<$2.length;$4++){
var $5=$2[$4].split(" ");$1.colorstops[$4]={color:$5[0],percentage:parseInt($5[1])*0.01}};this._parseLinearGradientCache[$0]=$1
};return $1
},"tintColor",function($0){
if(!this._basehsv){
return $0
}else{
var $1=LzColorUtils.tohsv($0);return LzColorUtils.fromhsv(this._basehsv.h,this._basehsv.s,$1.v)
}},"__resetgradientcache",function($0){
this._gradientfills={}},"cssToLinearGradient",function($0,$1){
if(!$1)return;var $2=this["_gradientfills"];if(!$2){
$2=this._gradientfills={}}else if($2[$1]!=null){
return $2[$1]
};var $3=this.parseLinearGradient($1);var $4=0,$5=0,$6=0,$7=0,$8=$3.startpos;if($8=="top"){
$7=this.height
}else if($8=="bottom"){
$5=this.height
}else if($8=="left"){
$6=this.width
}else if($8=="right"){
$4=this.width
};var $9=$0.createLinearGradient($4,$5,$6,$7);var $a=$3.colorstops;for(var $b=0,$c=$a.length;$b<$c;$b++){
var $d=$a[$b];$9.addColorStop($d.percentage,this.tintColor($d.color))
};$2[$1]=$9;return $9
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
LzNode.mergeAttributes({$delegates:["onwidth","__resetgradientcache",null,"onheight","__resetgradientcache",null,"onbasecolor","__resetgradientcache",null],$m39:function($0){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
},$m40:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m41:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m42:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m43:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m44:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m45:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m46:function($0){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
},$m47:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m48:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m49:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m50:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m51:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m52:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},_parseLinearGradientCache:{},bevel:new LzStyleConstraintExpr("bevel","number","bevel-width",0,false),gradientfill:new LzStyleConstraintExpr("gradientfill","string","gradient-fill","",false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","color","interior-border-color",new LzOnceExpr("interiorbordercolor","color","$m39",null),false),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","color","interior-border-color-down",new LzAlwaysExpr("interiorbordercolordown","color","$m44","$m45",null),false),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","color","interior-border-color-over",new LzAlwaysExpr("interiorbordercolorover","color","$m42","$m43",null),false),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","color","interior-border-color-up",new LzAlwaysExpr("interiorbordercolorup","color","$m40","$m41",null),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","color","interior-fill-color",new LzOnceExpr("interiorfillcolor","color","$m46",null),false),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","color","interior-fill-color-down",new LzAlwaysExpr("interiorfillcolordown","color","$m51","$m52",null),false),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","color","interior-fill-color-over",new LzAlwaysExpr("interiorfillcolorover","color","$m49","$m50",null),false),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","color","interior-fill-color-up",new LzAlwaysExpr("interiorfillcolorup","color","$m47","$m48",null),false),vertical:new LzStyleConstraintExpr("vertical","boolean","gradient-vertical",false,false)},$lzc$class_stylebutton.attributes)
}}})($lzc$class_stylebutton)
};{
Mixin.make("$lzc$class_drawbutton",["draw",function($0){
if(this["drawtarget"]&&$0===this){
$0.clear();return
};$0.globalAlpha=this.disabled?0.5:1;if(this.interiorborderwidth){
$0.lineWidth=$0.interiorborderwidth;this.styleinteriorborder($0);this.drawinteriorborder($0)
};$0.lineWidth=$0.borderwidth;if(this.borderwidth){
this.styleborder($0);this.drawborder($0)
};this.stylegradient($0);this.drawgradient($0)
},"styleborder",function($0){
if(!this.bordercolor)return;$0.strokeStyle=this.bordercolor
},"drawborder",function($0){
if(this.borderwidth<=0)return;if(!this.bordercolor)return;$0.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);$0.closePath();$0.stroke()
},"styleinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate]||!this["interiorbordercolor"+this.mousestate])return;$0.fillStyle=this["interiorfillcolor"+this.mousestate];$0.strokeStyle=this["interiorbordercolor"+this.mousestate]
},"drawinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate])return;$0.beginPath();this.drawshape($0,1,1,this.width-3,this.height-3);$0.closePath();$0.fill();$0.stroke()
},"stylegradient",function($0){
var $1=this["gradientfill"];if(this.vertical){
var $2=$1.indexOf("top");if($2>-1){
$1="left"+$1.substring($2+3)
}else{
$2=$1.indexOf("bottom");if($2>-1){
$1="right"+$1.substring($2+6)
}}};$0.fillStyle=this.cssToLinearGradient($0,$1)
},"drawgradient",function($0){
$0.beginPath();var $1=1;if(this.bevel){
var $1=this.bevel+this.borderwidth
};this.drawshape($0,$1,$1,this.width-$1*2-1,this.height-$1*2-1);$0.fill()
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
LzNode.mergeAttributes({$delegates:["onmousestate","redraw",null]},$lzc$class_drawbutton.attributes)
}}})($lzc$class_drawbutton)
};{
Class.make("$lzc$class_drawbutton$basepanel",["draw",function($0){
if(this["drawtarget"]&&$0===this){
$0.clear();return
};$0.globalAlpha=this.disabled?0.5:1;if(this.interiorborderwidth){
$0.lineWidth=$0.interiorborderwidth;this.styleinteriorborder($0);this.drawinteriorborder($0)
};$0.lineWidth=$0.borderwidth;if(this.borderwidth){
this.styleborder($0);this.drawborder($0)
};this.stylegradient($0);this.drawgradient($0)
},"styleborder",function($0){
if(!this.bordercolor)return;$0.strokeStyle=this.bordercolor
},"drawborder",function($0){
if(this.borderwidth<=0)return;if(!this.bordercolor)return;$0.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);$0.closePath();$0.stroke()
},"styleinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate]||!this["interiorbordercolor"+this.mousestate])return;$0.fillStyle=this["interiorfillcolor"+this.mousestate];$0.strokeStyle=this["interiorbordercolor"+this.mousestate]
},"drawinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate])return;$0.beginPath();this.drawshape($0,1,1,this.width-3,this.height-3);$0.closePath();$0.fill();$0.stroke()
},"stylegradient",function($0){
var $1=this["gradientfill"];if(this.vertical){
var $2=$1.indexOf("top");if($2>-1){
$1="left"+$1.substring($2+3)
}else{
$2=$1.indexOf("bottom");if($2>-1){
$1="right"+$1.substring($2+6)
}}};$0.fillStyle=this.cssToLinearGradient($0,$1)
},"drawgradient",function($0){
$0.beginPath();var $1=1;if(this.bevel){
var $1=this.bevel+this.borderwidth
};this.drawshape($0,$1,$1,this.width-$1*2-1,this.height-$1*2-1);$0.fill()
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
LzNode.mergeAttributes({$delegates:["onmousestate","redraw",null]},$lzc$class_drawbutton$basepanel.attributes)
}}})($lzc$class_drawbutton$basepanel)
};{
Class.make("$lzc$class_stylebutton$drawbutton$basepanel",["vertical",void 0,"bevel",void 0,"$m53",void 0,"$m54",void 0,"$m55",void 0,"interiorbordercolorup",void 0,"$m56",void 0,"$m57",void 0,"interiorbordercolorover",void 0,"$m58",void 0,"$m59",void 0,"interiorbordercolordown",void 0,"$m60",void 0,"$m61",void 0,"$m62",void 0,"interiorfillcolorup",void 0,"$m63",void 0,"$m64",void 0,"interiorfillcolorover",void 0,"$m65",void 0,"$m66",void 0,"interiorfillcolordown",void 0,"gradientfill",void 0,"_parseLinearGradientCache",void 0,"parseLinearGradient",function($0){
with(this){
var $1=this._parseLinearGradientCache[$0];if(!$1){
var $2=$0.split(",");if($2.length<2){
return
};var $3=$2.shift();$1={};$1.startpos=$3;$1.colorstops=[];for(var $4=0;$4<$2.length;$4++){
var $5=$2[$4].split(" ");$1.colorstops[$4]={color:$5[0],percentage:parseInt($5[1])*0.01}};this._parseLinearGradientCache[$0]=$1
};return $1
}},"tintColor",function($0){
with(this){
if(!this._basehsv){
return $0
}else{
var $1=LzColorUtils.tohsv($0);return LzColorUtils.fromhsv(this._basehsv.h,this._basehsv.s,$1.v)
}}},"__resetgradientcache",function($0){
this._gradientfills={}},"cssToLinearGradient",function($0,$1){
if(!$1)return;var $2=this["_gradientfills"];if(!$2){
$2=this._gradientfills={}}else if($2[$1]!=null){
return $2[$1]
};var $3=this.parseLinearGradient($1);var $4=0,$5=0,$6=0,$7=0,$8=$3.startpos;if($8=="top"){
$7=this.height
}else if($8=="bottom"){
$5=this.height
}else if($8=="left"){
$6=this.width
}else if($8=="right"){
$4=this.width
};var $9=$0.createLinearGradient($4,$5,$6,$7);var $a=$3.colorstops;for(var $b=0,$c=$a.length;$b<$c;$b++){
var $d=$a[$b];$9.addColorStop($d.percentage,this.tintColor($d.color))
};$2[$1]=$9;return $9
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
}],$lzc$class_drawbutton$basepanel,["displayName","<basepanel with='stylebutton, drawbutton'>","children",LzNode.mergeChildren([],$lzc$class_drawbutton$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawbutton$basepanel.attributes)],[$lzc$class_stylebutton]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","__resetgradientcache",null,"onheight","__resetgradientcache",null,"onbasecolor","__resetgradientcache",null],$m53:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
}},$m54:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m55:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m56:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m57:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m58:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m59:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m60:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
}},$m61:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m62:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m63:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m64:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m65:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m66:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},_parseLinearGradientCache:{},bevel:new LzStyleConstraintExpr("bevel","number","bevel-width",0,false),gradientfill:new LzStyleConstraintExpr("gradientfill","string","gradient-fill","",false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","color","interior-border-color",new LzOnceExpr("interiorbordercolor","color","$m53",null),false),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","color","interior-border-color-down",new LzAlwaysExpr("interiorbordercolordown","color","$m58","$m59",null),false),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","color","interior-border-color-over",new LzAlwaysExpr("interiorbordercolorover","color","$m56","$m57",null),false),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","color","interior-border-color-up",new LzAlwaysExpr("interiorbordercolorup","color","$m54","$m55",null),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","color","interior-fill-color",new LzOnceExpr("interiorfillcolor","color","$m60",null),false),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","color","interior-fill-color-down",new LzAlwaysExpr("interiorfillcolordown","color","$m65","$m66",null),false),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","color","interior-fill-color-over",new LzAlwaysExpr("interiorfillcolorover","color","$m63","$m64",null),false),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","color","interior-fill-color-up",new LzAlwaysExpr("interiorfillcolorup","color","$m61","$m62",null),false),vertical:new LzStyleConstraintExpr("vertical","boolean","gradient-vertical",false,false)},$lzc$class_stylebutton$drawbutton$basepanel.attributes)
}}})($lzc$class_stylebutton$drawbutton$basepanel)
};Class.make("$lzc$class_m69",["$m67",function($0){
with(this){
var $1=parent.axis;if($1!==this["axis"]||!this.inited){
this.setAttribute("axis",$1)
}}},"$m68",function(){
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
this._updateborders();for(var $1=0,$2=subviews.length;$1<$2;$1++){
var $3=subviews[$1];$0.beginPath();$3.drawshape($0,$3.x,$3.y,$3.width,$3.height-1);$0.closePath();if($3.disabled){
$0.fillStyle=$0.basecolor
}else{
$3.stylegradient($0)
};$0.fill()
}}},"drawlast",function($0){
with(this){
$0.fillStyle=this.cssToLinearGradient($0,this.dividergradient);var $1=0;for(var $2=0,$3=this.subviews.length-1;$2<$3;$2++){
var $4=subviews[$2];if(this.axis=="x"){
$1+=$4.width;$0.fillRect($1,1,1,this.height-2)
}else{
$1+=$4.height;$0.fillRect(1,$1,this.width-2,1)
}};this.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);this.styleborder($0);this.stroke()
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
}],$lzc$class_stylebutton$drawbutton$basepanel,["tagname","buttongroup","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,axis:new LzAlwaysExpr("axis","string","$m67","$m68",null),spacing:0},"class":$lzc$class_m69}],$lzc$class_stylebutton$drawbutton$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_stylebutton$drawbutton$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onaddsubview","_updateborders",null],axis:"x",dividergradient:new LzStyleConstraintExpr("dividergradient","string","divider-gradient","",false),drawchildren:false},$lzc$class_buttongroup.attributes)
}}})($lzc$class_buttongroup)
};{
Class.make("$lzc$class_componentfocus$basepanel",["focusanimationspeed",void 0,"focused",void 0,"$m70",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$m71",function($0){
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
LzNode.mergeAttributes({$delegates:["onfocus","$m70",null,"onblur","$m71",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus$basepanel.attributes)
}}})($lzc$class_componentfocus$basepanel)
};{
Class.make("$lzc$class_drawbutton$componentfocus$basepanel",["draw",function($0){
if(this["drawtarget"]&&$0===this){
$0.clear();return
};$0.globalAlpha=this.disabled?0.5:1;if(this.interiorborderwidth){
$0.lineWidth=$0.interiorborderwidth;this.styleinteriorborder($0);this.drawinteriorborder($0)
};$0.lineWidth=$0.borderwidth;if(this.borderwidth){
this.styleborder($0);this.drawborder($0)
};this.stylegradient($0);this.drawgradient($0)
},"styleborder",function($0){
if(!this.bordercolor)return;$0.strokeStyle=this.bordercolor
},"drawborder",function($0){
if(this.borderwidth<=0)return;if(!this.bordercolor)return;$0.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);$0.closePath();$0.stroke()
},"styleinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate]||!this["interiorbordercolor"+this.mousestate])return;$0.fillStyle=this["interiorfillcolor"+this.mousestate];$0.strokeStyle=this["interiorbordercolor"+this.mousestate]
},"drawinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate])return;$0.beginPath();this.drawshape($0,1,1,this.width-3,this.height-3);$0.closePath();$0.fill();$0.stroke()
},"stylegradient",function($0){
var $1=this["gradientfill"];if(this.vertical){
var $2=$1.indexOf("top");if($2>-1){
$1="left"+$1.substring($2+3)
}else{
$2=$1.indexOf("bottom");if($2>-1){
$1="right"+$1.substring($2+6)
}}};$0.fillStyle=this.cssToLinearGradient($0,$1)
},"drawgradient",function($0){
$0.beginPath();var $1=1;if(this.bevel){
var $1=this.bevel+this.borderwidth
};this.drawshape($0,$1,$1,this.width-$1*2-1,this.height-$1*2-1);$0.fill()
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
}],$lzc$class_componentfocus$basepanel,["displayName","<basepanel with='drawbutton, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_componentfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentfocus$basepanel.attributes)],[$lzc$class_drawbutton]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousestate","redraw",null]},$lzc$class_drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_drawbutton$componentfocus$basepanel)
};{
Class.make("$lzc$class_drawshadowfocus$drawbutton$componentfocus$basepanel",["$m72",function($0){
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
}],$lzc$class_drawbutton$componentfocus$basepanel,["displayName","<basepanel with='drawshadowfocus, drawbutton, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_drawbutton$componentfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawbutton$componentfocus$basepanel.attributes)],[$lzc$class_drawshadowfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocused","$m72",null]},$lzc$class_drawshadowfocus$drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_drawshadowfocus$drawbutton$componentfocus$basepanel)
};{
Class.make("$lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel",["vertical",void 0,"bevel",void 0,"$m73",void 0,"$m74",void 0,"$m75",void 0,"interiorbordercolorup",void 0,"$m76",void 0,"$m77",void 0,"interiorbordercolorover",void 0,"$m78",void 0,"$m79",void 0,"interiorbordercolordown",void 0,"$m80",void 0,"$m81",void 0,"$m82",void 0,"interiorfillcolorup",void 0,"$m83",void 0,"$m84",void 0,"interiorfillcolorover",void 0,"$m85",void 0,"$m86",void 0,"interiorfillcolordown",void 0,"gradientfill",void 0,"_parseLinearGradientCache",void 0,"parseLinearGradient",function($0){
with(this){
var $1=this._parseLinearGradientCache[$0];if(!$1){
var $2=$0.split(",");if($2.length<2){
return
};var $3=$2.shift();$1={};$1.startpos=$3;$1.colorstops=[];for(var $4=0;$4<$2.length;$4++){
var $5=$2[$4].split(" ");$1.colorstops[$4]={color:$5[0],percentage:parseInt($5[1])*0.01}};this._parseLinearGradientCache[$0]=$1
};return $1
}},"tintColor",function($0){
with(this){
if(!this._basehsv){
return $0
}else{
var $1=LzColorUtils.tohsv($0);return LzColorUtils.fromhsv(this._basehsv.h,this._basehsv.s,$1.v)
}}},"__resetgradientcache",function($0){
this._gradientfills={}},"cssToLinearGradient",function($0,$1){
if(!$1)return;var $2=this["_gradientfills"];if(!$2){
$2=this._gradientfills={}}else if($2[$1]!=null){
return $2[$1]
};var $3=this.parseLinearGradient($1);var $4=0,$5=0,$6=0,$7=0,$8=$3.startpos;if($8=="top"){
$7=this.height
}else if($8=="bottom"){
$5=this.height
}else if($8=="left"){
$6=this.width
}else if($8=="right"){
$4=this.width
};var $9=$0.createLinearGradient($4,$5,$6,$7);var $a=$3.colorstops;for(var $b=0,$c=$a.length;$b<$c;$b++){
var $d=$a[$b];$9.addColorStop($d.percentage,this.tintColor($d.color))
};$2[$1]=$9;return $9
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
}],$lzc$class_drawshadowfocus$drawbutton$componentfocus$basepanel,["displayName","<basepanel with='stylebutton, drawshadowfocus, drawbutton, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_drawshadowfocus$drawbutton$componentfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawshadowfocus$drawbutton$componentfocus$basepanel.attributes)],[$lzc$class_stylebutton]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","__resetgradientcache",null,"onheight","__resetgradientcache",null,"onbasecolor","__resetgradientcache",null],$m73:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
}},$m74:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m75:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m76:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m77:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m78:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m79:function(){
try{
return [this,"interiorbordercolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m80:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
}},$m81:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m82:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m83:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m84:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m85:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m86:function(){
try{
return [this,"interiorfillcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},_parseLinearGradientCache:{},bevel:new LzStyleConstraintExpr("bevel","number","bevel-width",0,false),gradientfill:new LzStyleConstraintExpr("gradientfill","string","gradient-fill","",false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","color","interior-border-color",new LzOnceExpr("interiorbordercolor","color","$m73",null),false),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","color","interior-border-color-down",new LzAlwaysExpr("interiorbordercolordown","color","$m78","$m79",null),false),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","color","interior-border-color-over",new LzAlwaysExpr("interiorbordercolorover","color","$m76","$m77",null),false),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","color","interior-border-color-up",new LzAlwaysExpr("interiorbordercolorup","color","$m74","$m75",null),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","color","interior-fill-color",new LzOnceExpr("interiorfillcolor","color","$m80",null),false),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","color","interior-fill-color-down",new LzAlwaysExpr("interiorfillcolordown","color","$m85","$m86",null),false),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","color","interior-fill-color-over",new LzAlwaysExpr("interiorfillcolorover","color","$m83","$m84",null),false),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","color","interior-fill-color-up",new LzAlwaysExpr("interiorfillcolorup","color","$m81","$m82",null),false),vertical:new LzStyleConstraintExpr("vertical","boolean","gradient-vertical",false,false)},$lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel)
};{
Class.make("$lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$m87",function(){
with(this){
return lz.ModeManager
}},"$m88",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m89",function($0){
this.setAttribute("mouseisover",true)
},"$m90",function($0){
this.setAttribute("mouseisover",false)
},"$m91",function($0){
this.setAttribute("mouseisdown",true)
},"$m92",function($0){
this.setAttribute("mouseisdown",false)
},"$m93",function($0){
this.onmouseover.sendEvent()
},"$m94",function($0){
this.onmouseout.sendEvent()
},"$m95",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m96",function($0){
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
}],$lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel,["displayName","<basepanel with='buttonevents, stylebutton, drawshadowfocus, drawbutton, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel.attributes)],[$lzc$class_buttonevents]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m88","$m87","onmouseover","$m89",null,"onmouseout","$m90",null,"onmousedown","$m91",null,"onmouseup","$m92",null,"onfocus","$m93",null,"onblur","$m94",null,"onkeydown","$m95",null,"onkeyup","$m96",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel)
};{
Class.make("$lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel",["value",void 0,"disabled",void 0,"$m97",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$m98",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m99",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$m100",function(){
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
}],$lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel,["displayName","<basepanel with='componentmodel, buttonevents, stylebutton, drawshadowfocus, drawbutton, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel.attributes)],[$lzc$class_componentmodel]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$m99","$m100",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$m97","$m98",null),value:""},$lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel)
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
}],$lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel,["tagname","bsbtn","children",LzNode.mergeChildren([],$lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$basepanel.attributes)]);Class.make("$lzc$class_m120",["$m106",function($0){
with(this){
var $1=parent.iconresource;if($1!==this["resource"]||!this.inited){
this.setAttribute("resource",$1)
}}},"$m107",function(){
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
}],LzView,["displayName","<anonymous extends='view'>","attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_m121",["$m112",function($0){
with(this){
var $1=parent.textcolor;if($1!==this["fgcolor"]||!this.inited){
this.setAttribute("fgcolor",$1)
}}},"$m113",function(){
with(this){
try{
return [parent,"textcolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$m114",function($0){
with(this){
var $1=classroot.text;if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}}},"$m115",function(){
with(this){
try{
return [classroot,"text"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$m116",function($0){
with(this){
var $1=(parent.width-this.width)*0.5;if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}}},"$m117",function(){
with(this){
try{
return [parent,"width",this,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$m118",function($0){
with(this){
var $1=(parent.height-this.height)*0.5;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m119",function(){
with(this){
try{
return [parent,"height",this,"height"]
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
Class.make("$lzc$class_btn",["$m101",function($0){
var $1=this.txt.width+this.padding;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$m102",function(){
try{
return [this.txt,"width",this,"padding"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m103",function($0){
var $1=this.txt.height+this.padding;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$m104",function(){
try{
return [this.txt,"height",this,"padding"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"text",void 0,"textcolor",void 0,"iconresource",void 0,"iconpadding",void 0,"iconposition",void 0,"$m105",function($0){
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
}],$lzc$class_bsbtn,["tagname","btn","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,$delegates:["oniconpadding","_update",null,"oniconposition","_update",null,"onwidth","_update","$m108","onheight","_update","$m109","onwidth","_update","$m110","onheight","_update","$m111"],$m108:function(){
return this.icon
},$m109:function(){
return this.icon
},$m110:function(){
return this.txt
},$m111:function(){
return this.txt
},_update:function($0){
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
}},icon:void 0,name:"_iconstate"},children:[{attrs:{$classrootdepth:1,name:"icon",resource:new LzAlwaysExpr("resource","string","$m106","$m107",null)},"class":$lzc$class_m120}],"class":LzState},{attrs:{$classrootdepth:1,fgcolor:new LzAlwaysExpr("fgcolor","color","$m112","$m113",null),name:"txt",text:new LzAlwaysExpr("text","text","$m114","$m115",null),x:new LzAlwaysExpr("x","numberExpression","$m116","$m117",null),y:new LzAlwaysExpr("y","numberExpression","$m118","$m119",null)},"class":$lzc$class_m121}],$lzc$class_bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m105",null],height:new LzAlwaysExpr("height","size","$m103","$m104",null),iconpadding:10,iconposition:"left",iconresource:"",text:"",textcolor:new LzStyleConstraintExpr("textcolor","string","text-color","black",false),width:new LzAlwaysExpr("width","size","$m101","$m102",null)},$lzc$class_btn.attributes)
}}})($lzc$class_btn)
};{
Mixin.make("$lzc$class_drawborderfocus",["focuspercentage",void 0,"$m122",function($0){
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
LzNode.mergeAttributes({$delegates:["onfocuspercentage","redraw",null,"onfocused","$m122",null],focuspercentage:0},$lzc$class_drawborderfocus.attributes)
}}})($lzc$class_drawborderfocus)
};Mixin.make("$lzc$class_drawinputtext",["draw",function($0){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;$0.drawshape($0,-$0.padding,-$0.padding,this.width+$0.padding,this.height+$0.padding);if(this.focused)this.drawfocus($0);$0.fillStyle=$0.interiorfillcolor;$0.fill();$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.stroke()
},"drawfocus",function($0){
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
Class.make("$lzc$class_componentmodel$inputtext",["value",void 0,"disabled",void 0,"$m123",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$m124",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m125",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$m126",function(){
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
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$m125","$m126",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$m123","$m124",null),value:""},$lzc$class_componentmodel$inputtext.attributes)
}}})($lzc$class_componentmodel$inputtext)
};{
Class.make("$lzc$class_componentfocus$componentmodel$inputtext",["focusanimationspeed",void 0,"focused",void 0,"$m127",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$m128",function($0){
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
}],$lzc$class_componentmodel$inputtext,["displayName","<inputtext with='componentfocus, componentmodel'>","attributes",new LzInheritedHash($lzc$class_componentmodel$inputtext.attributes)],[$lzc$class_componentfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$m127",null,"onblur","$m128",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus$componentmodel$inputtext.attributes)
}}})($lzc$class_componentfocus$componentmodel$inputtext)
};Class.make("$lzc$class_drawinputtext$componentfocus$componentmodel$inputtext",["draw",function($0){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;$0.drawshape($0,-$0.padding,-$0.padding,this.width+$0.padding,this.height+$0.padding);if(this.focused)this.drawfocus($0);$0.fillStyle=$0.interiorfillcolor;$0.fill();$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.stroke()
},"drawfocus",function($0){
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
}],$lzc$class_componentfocus$componentmodel$inputtext,["displayName","<inputtext with='drawinputtext, componentfocus, componentmodel'>","attributes",new LzInheritedHash($lzc$class_componentfocus$componentmodel$inputtext.attributes)],[$lzc$class_drawinputtext]);{
Class.make("$lzc$class_drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext",["focuspercentage",void 0,"$m129",function($0){
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
}],$lzc$class_drawinputtext$componentfocus$componentmodel$inputtext,["displayName","<inputtext with='drawborderfocus, drawinputtext, componentfocus, componentmodel'>","attributes",new LzInheritedHash($lzc$class_drawinputtext$componentfocus$componentmodel$inputtext.attributes)],[$lzc$class_drawborderfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocuspercentage","redraw",null,"onfocused","$m129",null],focuspercentage:0},$lzc$class_drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext.attributes)
}}})($lzc$class_drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext)
};{
Class.make("$lzc$class_virtualdrawview$drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext",["drawtarget",void 0,"ondrawtarget",void 0,"createContext",function(){
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
switch(arguments.length){
case 0:
$0=null;

};if(!this.drawtarget||!this.isinited)return;this.drawtarget.redraw(this)
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
}],$lzc$class_drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext,["displayName","<inputtext with='virtualdrawview, drawborderfocus, drawinputtext, componentfocus, componentmodel'>","attributes",new LzInheritedHash($lzc$class_drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext.attributes)],[$lzc$class_virtualdrawview]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview$drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext.attributes)
}}})($lzc$class_virtualdrawview$drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext)
};{
Class.make("$lzc$class_inpt",["$m130",function($0){
var $1=!this.disabled;if($1!==this["enabled"]||!this.inited){
this.setAttribute("enabled",$1)
}},"$m131",function(){
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
}],$lzc$class_virtualdrawview$drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext,["tagname","inpt","attributes",new LzInheritedHash($lzc$class_virtualdrawview$drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({enabled:new LzAlwaysExpr("enabled","boolean","$m130","$m131",null)},$lzc$class_inpt.attributes)
}}})($lzc$class_inpt)
};{
Class.make("$lzc$class_virtualdrawview$view",["drawtarget",void 0,"ondrawtarget",void 0,"createContext",function(){
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
switch(arguments.length){
case 0:
$0=null;

};if(!this.drawtarget||!this.isinited)return;this.drawtarget.redraw(this)
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
}],LzView,["displayName","<view with='virtualdrawview'>","attributes",new LzInheritedHash(LzView.attributes)],[$lzc$class_virtualdrawview]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview$view.attributes)
}}})($lzc$class_virtualdrawview$view)
};Class.make("$lzc$class_drawarrow$virtualdrawview$view",["drawarrow",function($0,$1,$2,$3,$4,$5){
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
}],$lzc$class_virtualdrawview$view,["displayName","<view with='drawarrow, virtualdrawview'>","attributes",new LzInheritedHash($lzc$class_virtualdrawview$view.attributes)],[$lzc$class_drawarrow]);{
Class.make("$lzc$class_componentfocus$drawarrow$virtualdrawview$view",["focusanimationspeed",void 0,"focused",void 0,"$m132",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$m133",function($0){
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
}],$lzc$class_drawarrow$virtualdrawview$view,["displayName","<view with='componentfocus, drawarrow, virtualdrawview'>","attributes",new LzInheritedHash($lzc$class_drawarrow$virtualdrawview$view.attributes)],[$lzc$class_componentfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$m132",null,"onblur","$m133",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus$drawarrow$virtualdrawview$view.attributes)
}}})($lzc$class_componentfocus$drawarrow$virtualdrawview$view)
};{
Class.make("$lzc$class_drawborderfocus$componentfocus$drawarrow$virtualdrawview$view",["focuspercentage",void 0,"$m134",function($0){
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
}],$lzc$class_componentfocus$drawarrow$virtualdrawview$view,["displayName","<view with='drawborderfocus, componentfocus, drawarrow, virtualdrawview'>","attributes",new LzInheritedHash($lzc$class_componentfocus$drawarrow$virtualdrawview$view.attributes)],[$lzc$class_drawborderfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocuspercentage","redraw",null,"onfocused","$m134",null],focuspercentage:0},$lzc$class_drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)
}}})($lzc$class_drawborderfocus$componentfocus$drawarrow$virtualdrawview$view)
};{
Class.make("$lzc$class_keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view",["__keydowntime",void 0,"__keystillDownDelegate",void 0,"__keydownrepeatinterval",void 0,"__keydowninitialinterval",void 0,"onkeystilldown",void 0,"init",function(){
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
}}},"$m135",function($0){
with(this){
this.__keydowntime=new Date().getTime();lz.Timer.addTimer(this.__keystillDownDelegate,this.__keydowninitialinterval)
}},"$m136",function($0){
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
}],$lzc$class_drawborderfocus$componentfocus$drawarrow$virtualdrawview$view,["displayName","<view with='keyboardrepeater, drawborderfocus, componentfocus, drawarrow, virtualdrawview'>","attributes",new LzInheritedHash($lzc$class_drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)],[$lzc$class_keyboardrepeater]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onkeydown","$m135",null,"onkeyup","$m136",null],__keydowninitialinterval:300,__keydownrepeatinterval:50,__keydowntime:0,__keystillDownDelegate:null,onkeystilldown:LzDeclaredEvent},$lzc$class_keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)
}}})($lzc$class_keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view)
};{
Class.make("$lzc$class_mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view",["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
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
}}},"$m137",function($0){
with(this){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
}},"$m138",function($0){
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
}],$lzc$class_keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view,["displayName","<view with='mousedownrepeater, keyboardrepeater, drawborderfocus, componentfocus, drawarrow, virtualdrawview'>","attributes",new LzInheritedHash($lzc$class_keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)],[$lzc$class_mousedownrepeater]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousedown","$m137",null,"onmouseup","$m138",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)
}}})($lzc$class_mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view)
};{
Class.make("$lzc$class_buttonevents$mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$m139",function(){
with(this){
return lz.ModeManager
}},"$m140",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m141",function($0){
this.setAttribute("mouseisover",true)
},"$m142",function($0){
this.setAttribute("mouseisover",false)
},"$m143",function($0){
this.setAttribute("mouseisdown",true)
},"$m144",function($0){
this.setAttribute("mouseisdown",false)
},"$m145",function($0){
this.onmouseover.sendEvent()
},"$m146",function($0){
this.onmouseout.sendEvent()
},"$m147",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m148",function($0){
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
}],$lzc$class_mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view,["displayName","<view with='buttonevents, mousedownrepeater, keyboardrepeater, drawborderfocus, componentfocus, drawarrow, virtualdrawview'>","attributes",new LzInheritedHash($lzc$class_mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)],[$lzc$class_buttonevents]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m140","$m139","onmouseover","$m141",null,"onmouseout","$m142",null,"onmousedown","$m143",null,"onmouseup","$m144",null,"onfocus","$m145",null,"onblur","$m146",null,"onkeydown","$m147",null,"onkeyup","$m148",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents$mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)
}}})($lzc$class_buttonevents$mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view)
};{
Class.make("$lzc$class_scrlstepbtn",["$m149",function($0){
var $1=this.width;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$m150",function(){
try{
return [this,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m151",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.setAttribute("opacity",0.4)
},"$m152",function($0){
this.animate("opacity",$0?1:0.4,200);this.classroot.setAttribute("activated",$0)
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
this.drawarrow($0,1,1,this.width-2,this.height-2,this.direction<0)
},"draw",function($0){
if(!$0["interiorbordercolor"])return;$0.beginPath();this.drawshape($0);if(this.focused)this.drawfocus($0);var $1=$0.globalAlpha;$0.globalAlpha=this.opacity;$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.fillStyle=$0.interiorbordercolor;$0.fill();$0.globalAlpha=$1
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
}],$lzc$class_buttonevents$mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view,["tagname","scrlstepbtn","attributes",new LzInheritedHash($lzc$class_buttonevents$mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m151",null,"onmouseisover","$m152",null,"onmousedown","handleMouseDown",null,"onmousestilldown","handleMouseDown",null,"onkeydown","handleKeyDown",null,"onkeystilldown","handleKeyDown",null,"onopacity","redraw",null],clickable:true,direction:1,focusable:true,height:new LzAlwaysExpr("height","size","$m149","$m150",null)},$lzc$class_scrlstepbtn.attributes)
}}})($lzc$class_scrlstepbtn)
};{
Class.make("$lzc$class_virtualdrawview$bsbtn",["drawtarget",void 0,"ondrawtarget",void 0,"createContext",function(){
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
switch(arguments.length){
case 0:
$0=null;

};if(!this.drawtarget||!this.isinited)return;this.drawtarget.redraw(this)
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
}],$lzc$class_bsbtn,["displayName","<bsbtn with='virtualdrawview'>","children",LzNode.mergeChildren([],$lzc$class_bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)],[$lzc$class_virtualdrawview]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview$bsbtn.attributes)
}}})($lzc$class_virtualdrawview$bsbtn)
};{
Class.make("$lzc$class_scrlthmb",["$m153",function($0){
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
}],$lzc$class_virtualdrawview$bsbtn,["tagname","scrlthmb","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,$m154:function($0){
this.setAttribute("doffset",this.getMouse("y"))
},$m155:function($0){
var $1=this.thumbControl(this.immediateparent.getMouse("y"));if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}},$m156:function(){
with(this){
try{
return [].concat($lzc$getFunctionDependencies("thumbControl",this,this,[this.immediateparent.getMouse("y")],null)).concat($lzc$getFunctionDependencies("getMouse",this,this.immediateparent,["y"],null))
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},doffset:new LzOnceExpr("doffset","expression","$m154",null),name:"ythumbdrag",y:new LzAlwaysExpr("y","expression","$m155","$m156",null)},"class":LzState},{attrs:{$classrootdepth:1,$m157:function($0){
this.setAttribute("doffset",this.getMouse("x"))
},$m158:function($0){
var $1=this.thumbControl(this.immediateparent.getMouse("x"));if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}},$m159:function(){
with(this){
try{
return [].concat($lzc$getFunctionDependencies("thumbControl",this,this,[this.immediateparent.getMouse("x")],null)).concat($lzc$getFunctionDependencies("getMouse",this,this.immediateparent,["x"],null))
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},doffset:new LzOnceExpr("doffset","expression","$m157",null),name:"xthumbdrag",x:new LzAlwaysExpr("x","expression","$m158","$m159",null)},"class":LzState}],$lzc$class_virtualdrawview$bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_virtualdrawview$bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseisover","$m153",null,"onmousedown","startDrag",null,"onmouseup","stopDrag",null],axis:"",clickable:true,focusable:false,target:null,targetscroll:0,trackscroll:0,vertical:true},$lzc$class_scrlthmb.attributes)
}}})($lzc$class_scrlthmb)
};{
Class.make("$lzc$class_mousedownrepeater$view",["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
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
}}},"$m160",function($0){
with(this){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
}},"$m161",function($0){
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
LzNode.mergeAttributes({$delegates:["onmousedown","$m160",null,"onmouseup","$m161",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater$view.attributes)
}}})($lzc$class_mousedownrepeater$view)
};{
Class.make("$lzc$class_buttonevents$mousedownrepeater$view",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$m162",function(){
with(this){
return lz.ModeManager
}},"$m163",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m164",function($0){
this.setAttribute("mouseisover",true)
},"$m165",function($0){
this.setAttribute("mouseisover",false)
},"$m166",function($0){
this.setAttribute("mouseisdown",true)
},"$m167",function($0){
this.setAttribute("mouseisdown",false)
},"$m168",function($0){
this.onmouseover.sendEvent()
},"$m169",function($0){
this.onmouseout.sendEvent()
},"$m170",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m171",function($0){
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
}],$lzc$class_mousedownrepeater$view,["displayName","<view with='buttonevents, mousedownrepeater'>","attributes",new LzInheritedHash($lzc$class_mousedownrepeater$view.attributes)],[$lzc$class_buttonevents]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m163","$m162","onmouseover","$m164",null,"onmouseout","$m165",null,"onmousedown","$m166",null,"onmouseup","$m167",null,"onfocus","$m168",null,"onblur","$m169",null,"onkeydown","$m170",null,"onkeyup","$m171",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents$mousedownrepeater$view.attributes)
}}})($lzc$class_buttonevents$mousedownrepeater$view)
};{
Class.make("$lzc$class_scrltrk",["direction",void 0,"$m172",function($0){
this.classroot.setAttribute("activated",$0)
},"$m173",function($0){
this.classroot.page(this.direction);this.classroot.setAttribute("activated",true)
},"$m174",function($0){
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
}],$lzc$class_buttonevents$mousedownrepeater$view,["tagname","scrltrk","attributes",new LzInheritedHash($lzc$class_buttonevents$mousedownrepeater$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseisover","$m172",null,"onmousedown","$m173",null,"onmousestilldown","$m174",null],clickable:true,direction:1},$lzc$class_scrltrk.attributes)
}}})($lzc$class_scrltrk)
};{
Mixin.make("$lzc$class_bsscrlbr",["scrolltarget",void 0,"axis",void 0,"$lzc$set_axis",function($0){
this.axis=$0;this.setAttribute("sizeAxis",$0=="x"?"width":"height");this.setAttribute("otherSizeAxis",$0=="y"?"width":"height")
},"sizeAxis",void 0,"otherSizeAxis",void 0,"$m175",function($0){
var $1=this.axis;if($1!==this["scrollattr"]||!this.inited){
this.setAttribute("scrollattr",$1)
}},"$m176",function(){
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
}},"mousewheelevent_on",void 0,"mousewheelevent_off",void 0,"mousewheelactive",void 0,"onscrollable",void 0,"$m177",function($0){
var $1=this["enabled"]&&this.scrollable&&(this._parentcomponent?this._parentcomponent._enabled:true);if($1!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$1)
}},"$m178",function(){
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
}],null,["tagname","bsscrlbr","children",[{attrs:{$classrootdepth:1,$m179:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.height-this.othersb.height:this.immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},$m180:function(){
try{
return [this,"othersb",this.othersb,"visible",this.immediateparent,"height",this.othersb,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},height:new LzAlwaysExpr("height","expression","$m179","$m180",null),name:"heightConstraint"},"class":LzState},{attrs:{$classrootdepth:1,$m181:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.width-this.othersb.width:this.immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},$m182:function(){
try{
return [this,"othersb",this.othersb,"visible",this.immediateparent,"width",this.othersb,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},name:"widthConstraint",width:new LzAlwaysExpr("width","expression","$m181","$m182",null)},"class":LzState}],"attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("_enabled","expression","$m177","$m178",null),_mwActivateDel:null,_mwDeactivateDel:null,_mwUpdateDel:null,axis:"y",clipSizeDel:null,focusview:null,heightDel:null,mousewheelactive:false,mousewheelevent_off:"onblur",mousewheelevent_on:"onfocus",onscrollable:LzDeclaredEvent,onscrollmax:LzDeclaredEvent,otherSizeAxis:"width",othersb:null,pagesize:null,scrollable:true,scrollattr:new LzAlwaysExpr("scrollattr","string","$m175","$m176",null),scrollmax:null,scrolltarget:null,sizeAxis:"height",stepsize:10,targetHeightDel:null,targetPosDel:null,thumb:null,usemousewheel:true,usetargetsize:false},$lzc$class_bsscrlbr.attributes)
}}})($lzc$class_bsscrlbr)
};{
Class.make("$lzc$class_bsscrlbr$basepanel",["scrolltarget",void 0,"axis",void 0,"$lzc$set_axis",function($0){
this.axis=$0;this.setAttribute("sizeAxis",$0=="x"?"width":"height");this.setAttribute("otherSizeAxis",$0=="y"?"width":"height")
},"sizeAxis",void 0,"otherSizeAxis",void 0,"$m183",function($0){
var $1=this.axis;if($1!==this["scrollattr"]||!this.inited){
this.setAttribute("scrollattr",$1)
}},"$m184",function(){
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
}}},"mousewheelevent_on",void 0,"mousewheelevent_off",void 0,"mousewheelactive",void 0,"onscrollable",void 0,"$m185",function($0){
var $1=this["enabled"]&&this.scrollable&&(this._parentcomponent?this._parentcomponent._enabled:true);if($1!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$1)
}},"$m186",function(){
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
}],$lzc$class_basepanel,["displayName","<basepanel with='bsscrlbr'>","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,$m187:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.height-this.othersb.height:this.immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},$m188:function(){
try{
return [this,"othersb",this.othersb,"visible",this.immediateparent,"height",this.othersb,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},height:new LzAlwaysExpr("height","expression","$m187","$m188",null),name:"heightConstraint"},"class":LzState},{attrs:{$classrootdepth:1,$m189:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.width-this.othersb.width:this.immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},$m190:function(){
try{
return [this,"othersb",this.othersb,"visible",this.immediateparent,"width",this.othersb,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},name:"widthConstraint",width:new LzAlwaysExpr("width","expression","$m189","$m190",null)},"class":LzState}],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)],[$lzc$class_bsscrlbr]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("_enabled","expression","$m185","$m186",null),_mwActivateDel:null,_mwDeactivateDel:null,_mwUpdateDel:null,axis:"y",clipSizeDel:null,focusview:null,heightDel:null,mousewheelactive:false,mousewheelevent_off:"onblur",mousewheelevent_on:"onfocus",onscrollable:LzDeclaredEvent,onscrollmax:LzDeclaredEvent,otherSizeAxis:"width",othersb:null,pagesize:null,scrollable:true,scrollattr:new LzAlwaysExpr("scrollattr","string","$m183","$m184",null),scrollmax:null,scrolltarget:null,sizeAxis:"height",stepsize:10,targetHeightDel:null,targetPosDel:null,thumb:null,usemousewheel:true,usetargetsize:false},$lzc$class_bsscrlbr$basepanel.attributes)
}}})($lzc$class_bsscrlbr$basepanel)
};{
Class.make("$lzc$class_buttonevents$bsscrlbr$basepanel",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$m191",function(){
with(this){
return lz.ModeManager
}},"$m192",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m193",function($0){
this.setAttribute("mouseisover",true)
},"$m194",function($0){
this.setAttribute("mouseisover",false)
},"$m195",function($0){
this.setAttribute("mouseisdown",true)
},"$m196",function($0){
this.setAttribute("mouseisdown",false)
},"$m197",function($0){
this.onmouseover.sendEvent()
},"$m198",function($0){
this.onmouseout.sendEvent()
},"$m199",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m200",function($0){
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
}],$lzc$class_bsscrlbr$basepanel,["displayName","<basepanel with='buttonevents, bsscrlbr'>","children",LzNode.mergeChildren([],$lzc$class_bsscrlbr$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_bsscrlbr$basepanel.attributes)],[$lzc$class_buttonevents]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m192","$m191","onmouseover","$m193",null,"onmouseout","$m194",null,"onmousedown","$m195",null,"onmouseup","$m196",null,"onfocus","$m197",null,"onblur","$m198",null,"onkeydown","$m199",null,"onkeyup","$m200",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents$bsscrlbr$basepanel.attributes)
}}})($lzc$class_buttonevents$bsscrlbr$basepanel)
};Class.make("$lzc$class_m230",["$m209",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m210",function(){
with(this){
try{
return [parent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$m211",function($0){
with(this){
var $1=parent.thumb.y;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m212",function(){
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
}],$lzc$class_scrltrk,["displayName","<anonymous extends='scrltrk' with='buttonevents, mousedownrepeater'>","attributes",new LzInheritedHash($lzc$class_scrltrk.attributes)]);Class.make("$lzc$class_m231",["$m213",function($0){
with(this){
var $1=parent.width-2;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m214",function(){
with(this){
try{
return [parent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$m215",function($0){
with(this){
var $1=classroot;if($1!==this["drawtarget"]||!this.inited){
this.setAttribute("drawtarget",$1)
}}},"$m216",function(){
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
}],$lzc$class_scrlthmb,["displayName","<anonymous extends='scrlthmb' with='virtualdrawview'>","children",LzNode.mergeChildren([],$lzc$class_scrlthmb["children"]),"attributes",new LzInheritedHash($lzc$class_scrlthmb.attributes)]);Class.make("$lzc$class_m232",["$m217",function($0){
with(this){
var $1=parent.thumb.y+parent.thumb.height;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m218",function(){
with(this){
try{
return [parent.thumb,"y",parent.thumb,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$m219",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m220",function(){
with(this){
try{
return [parent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$m221",function($0){
with(this){
var $1=parent.height-parent.thumb.y-parent.thumb.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m222",function(){
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
}],$lzc$class_scrltrk,["displayName","<anonymous extends='scrltrk' with='buttonevents, mousedownrepeater'>","attributes",new LzInheritedHash($lzc$class_scrltrk.attributes)]);Class.make("$lzc$class_m229",["$m205",function($0){
with(this){
var $1=immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m206",function(){
with(this){
try{
return [immediateparent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$m207",function($0){
with(this){
var $1=immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m208",function(){
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
}],LzView,["displayName","<anonymous extends='view'>","children",[{attrs:{$classrootdepth:2,direction:-1,height:new LzAlwaysExpr("height","size","$m211","$m212",null),width:new LzAlwaysExpr("width","size","$m209","$m210",null)},"class":$lzc$class_m230},{attrs:{$classrootdepth:2,drawtarget:new LzAlwaysExpr("drawtarget","expression","$m215","$m216",null),name:"thumb",width:new LzAlwaysExpr("width","size","$m213","$m214",null),x:1},"class":$lzc$class_m231},{attrs:{$classrootdepth:2,direction:1,height:new LzAlwaysExpr("height","size","$m221","$m222",null),width:new LzAlwaysExpr("width","size","$m219","$m220",null),y:new LzAlwaysExpr("y","numberExpression","$m217","$m218",null)},"class":$lzc$class_m232}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_m233",["$m223",function($0){
with(this){
var $1=parent.width-4;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m224",function(){
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
}],$lzc$class_scrlstepbtn,["displayName","<anonymous extends='scrlstepbtn' with='buttonevents, mousedownrepeater, keyboardrepeater, drawborderfocus, componentfocus, drawarrow, virtualdrawview'>","attributes",new LzInheritedHash($lzc$class_scrlstepbtn.attributes)]);Class.make("$lzc$class_m234",["$m225",function($0){
with(this){
var $1=parent.height-this.height;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m226",function(){
with(this){
try{
return [parent,"height",this,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$m227",function($0){
with(this){
var $1=parent.width-4;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m228",function(){
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
}],$lzc$class_scrlstepbtn,["displayName","<anonymous extends='scrlstepbtn' with='buttonevents, mousedownrepeater, keyboardrepeater, drawborderfocus, componentfocus, drawarrow, virtualdrawview'>","attributes",new LzInheritedHash($lzc$class_scrlstepbtn.attributes)]);{
Class.make("$lzc$class_scrlbr",["size",void 0,"$m201",function($0){
var $1=this.size;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$m202",function(){
try{
return [this,"size"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m203",function($0){
with(this){
if(canvas.capabilities["minimize_opacity_changes"]){

}else{
this.setAttribute("opacity",0.4)
}}},"$m204",function($0){
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
}],$lzc$class_buttonevents$bsscrlbr$basepanel,["tagname","scrlbr","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,height:new LzAlwaysExpr("height","size","$m207","$m208",null),name:"scrolltrack",thumb:void 0,width:new LzAlwaysExpr("width","size","$m205","$m206",null)},"class":$lzc$class_m229},{attrs:{$classrootdepth:1,direction:-1,width:new LzAlwaysExpr("width","size","$m223","$m224",null),x:2},"class":$lzc$class_m233},{attrs:{$classrootdepth:1,direction:1,width:new LzAlwaysExpr("width","size","$m227","$m228",null),x:2,y:new LzAlwaysExpr("y","numberExpression","$m225","$m226",null)},"class":$lzc$class_m234}],$lzc$class_buttonevents$bsscrlbr$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_buttonevents$bsscrlbr$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m203",null,"onmouseisover","$m204",null],activated:false,onactivated:LzDeclaredEvent,size:new LzStyleConstraintExpr("size","expression","size",16,false),width:new LzAlwaysExpr("width","size","$m201","$m202",null)},$lzc$class_scrlbr.attributes)
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
Class.make("$lzc$class_componentmodel$basepanel",["value",void 0,"disabled",void 0,"$m235",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$m236",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m237",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$m238",function(){
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
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$m237","$m238",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$m235","$m236",null),value:""},$lzc$class_componentmodel$basepanel.attributes)
}}})($lzc$class_componentmodel$basepanel)
};{
Class.make("$lzc$class_componentfocus$componentmodel$basepanel",["focusanimationspeed",void 0,"focused",void 0,"$m239",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$m240",function($0){
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
}],$lzc$class_componentmodel$basepanel,["displayName","<basepanel with='componentfocus, componentmodel'>","children",LzNode.mergeChildren([],$lzc$class_componentmodel$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentmodel$basepanel.attributes)],[$lzc$class_componentfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$m239",null,"onblur","$m240",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus$componentmodel$basepanel.attributes)
}}})($lzc$class_componentfocus$componentmodel$basepanel)
};Class.make("$lzc$class_drawfltr$componentfocus$componentmodel$basepanel",["draw",function($0){
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
}],$lzc$class_componentfocus$componentmodel$basepanel,["displayName","<basepanel with='drawfltr, componentfocus, componentmodel'>","children",LzNode.mergeChildren([],$lzc$class_componentfocus$componentmodel$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentfocus$componentmodel$basepanel.attributes)],[$lzc$class_drawfltr]);{
Class.make("$lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel",["$m241",function($0){
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
}],$lzc$class_drawfltr$componentfocus$componentmodel$basepanel,["displayName","<basepanel with='drawshadowfocus, drawfltr, componentfocus, componentmodel'>","children",LzNode.mergeChildren([],$lzc$class_drawfltr$componentfocus$componentmodel$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawfltr$componentfocus$componentmodel$basepanel.attributes)],[$lzc$class_drawshadowfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocused","$m241",null]},$lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel.attributes)
}}})($lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel)
};{
Class.make("$lzc$class_fltr",["target",void 0,"show",function($0){
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

};if(!this.target)return;var $1=this.target;var $2=$1.getAttributeRelative("x",canvas);var $3=$1.getAttributeRelative("y",canvas);if($3+$1.height+this.height<canvas.height){
$3+=$1.height
}else{
$3-=this.height
};if($2+this.width>canvas.width){
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
}],$lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel,["tagname","fltr","children",LzNode.mergeChildren([],$lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({opacity:0,target:null},$lzc$class_fltr.attributes)
}}})($lzc$class_fltr)
};{
Class.make("$lzc$class_buttonevents$text",["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$m242",function(){
with(this){
return lz.ModeManager
}},"$m243",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m244",function($0){
this.setAttribute("mouseisover",true)
},"$m245",function($0){
this.setAttribute("mouseisover",false)
},"$m246",function($0){
this.setAttribute("mouseisdown",true)
},"$m247",function($0){
this.setAttribute("mouseisdown",false)
},"$m248",function($0){
this.onmouseover.sendEvent()
},"$m249",function($0){
this.onmouseout.sendEvent()
},"$m250",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m251",function($0){
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
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m243","$m242","onmouseover","$m244",null,"onmouseout","$m245",null,"onmousedown","$m246",null,"onmouseup","$m247",null,"onfocus","$m248",null,"onblur","$m249",null,"onkeydown","$m250",null,"onkeyup","$m251",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents$text.attributes)
}}})($lzc$class_buttonevents$text)
};{
Class.make("$lzc$class_componentmodel$buttonevents$text",["value",void 0,"disabled",void 0,"$m252",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$m253",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m254",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$m255",function(){
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
}],$lzc$class_buttonevents$text,["displayName","<text with='componentmodel, buttonevents'>","attributes",new LzInheritedHash($lzc$class_buttonevents$text.attributes)],[$lzc$class_componentmodel]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$m254","$m255",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$m252","$m253",null),value:""},$lzc$class_componentmodel$buttonevents$text.attributes)
}}})($lzc$class_componentmodel$buttonevents$text)
};{
Class.make("$lzc$class_listitem",["$m256",function($0){
var $1=this.mouseisover?this.controller.highlightcolor:(this.selected?this.controller.selectioncolor:0);if($1!==this["fgcolor"]||!this.inited){
this.setAttribute("fgcolor",$1)
}},"$m257",function(){
try{
return [this,"mouseisover",this.controller,"highlightcolor",this,"selected",this.controller,"selectioncolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m258",function($0){
var $1=this.mouseisover?this.controller.selectioncolor:null;if($1!==this["bgcolor"]||!this.inited){
this.setAttribute("bgcolor",$1)
}},"$m259",function(){
try{
return [this,"mouseisover",this.controller,"selectioncolor"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"controller",void 0,"selectionmanager",void 0,"selected",void 0,"onselected",void 0,"$lzc$set_selected",function($0){
this.selected=$0;if(this.onselected.ready)this.onselected.sendEvent($0)
},"$m260",function($0){
this.setAttribute("text","foo: "+$0)
},"$m261",function($0){
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
}],$lzc$class_componentmodel$buttonevents$text,["tagname","listitem","attributes",new LzInheritedHash($lzc$class_componentmodel$buttonevents$text.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondata","$m260",null,"onclick","$m261",null],bgcolor:new LzAlwaysExpr("bgcolor","color","$m258","$m259",null),clickable:true,controller:null,fgcolor:new LzAlwaysExpr("fgcolor","color","$m256","$m257",null),onselected:LzDeclaredEvent,selected:false,selectionmanager:null,width:100},$lzc$class_listitem.attributes)
}}})($lzc$class_listitem)
};{
Class.make("$lzc$class_drawshadowfocus$basepanel",["$m262",function($0){
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
LzNode.mergeAttributes({$delegates:["onfocused","$m262",null]},$lzc$class_drawshadowfocus$basepanel.attributes)
}}})($lzc$class_drawshadowfocus$basepanel)
};{
Class.make("$lzc$class_componentfocus$drawshadowfocus$basepanel",["focusanimationspeed",void 0,"focused",void 0,"$m263",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$m264",function($0){
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
}],$lzc$class_drawshadowfocus$basepanel,["displayName","<basepanel with='componentfocus, drawshadowfocus'>","children",LzNode.mergeChildren([],$lzc$class_drawshadowfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawshadowfocus$basepanel.attributes)],[$lzc$class_componentfocus]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$m263",null,"onblur","$m264",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus$drawshadowfocus$basepanel.attributes)
}}})($lzc$class_componentfocus$drawshadowfocus$basepanel)
};{
Class.make("$lzc$class_componentmodel$componentfocus$drawshadowfocus$basepanel",["value",void 0,"disabled",void 0,"$m265",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$m266",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m267",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$m268",function(){
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
}],$lzc$class_componentfocus$drawshadowfocus$basepanel,["displayName","<basepanel with='componentmodel, componentfocus, drawshadowfocus'>","children",LzNode.mergeChildren([],$lzc$class_componentfocus$drawshadowfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentfocus$drawshadowfocus$basepanel.attributes)],[$lzc$class_componentmodel]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$m267","$m268",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$m265","$m266",null),value:""},$lzc$class_componentmodel$componentfocus$drawshadowfocus$basepanel.attributes)
}}})($lzc$class_componentmodel$componentfocus$drawshadowfocus$basepanel)
};Class.make("$lzc$class_m279",["$m272",function($0){
var $1=this.parent.value;if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}},"$m273",function(){
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
}],LzText,["displayName","<anonymous extends='text'>","attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_drawarrow$bsbtn",["drawarrow",function($0,$1,$2,$3,$4,$5){
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
}],$lzc$class_bsbtn,["displayName","<bsbtn with='drawarrow'>","children",LzNode.mergeChildren([],$lzc$class_bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)],[$lzc$class_drawarrow]);Class.make("$lzc$class_m280",["$m274",function($0){
var $1=this.height;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$m275",function(){
try{
return [this,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m276",function($0){
var $1=this.parent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$m277",function(){
try{
return [this.parent,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m278",function($0){
this.parent.onclick.sendEvent(this)
},"draw",function($0){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["draw"]||this.nextMethod(arguments.callee,"draw")).call(this,$0);this.beginPath();$0.fillStyle=$0.interiorbordercolor;this.drawarrow($0,4,4,this.width-4,this.height-4,false);this.fill()
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
}],$lzc$class_drawarrow$bsbtn,["displayName","<anonymous extends='bsbtn' with='drawarrow'>","children",LzNode.mergeChildren([],$lzc$class_drawarrow$bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_drawarrow$bsbtn.attributes)]);{
Class.make("$lzc$class_combobox",["$m269",function($0){
this.open()
},"$m270",function($0){
this.setAttribute("opt",[])
},"opt",void 0,"open",function(){
with(this){
if(combobox_floater!==this.opt){
combobox_floater.setAttribute("opt",this.opt)
};combobox_floater.show(this)
}},"draw",function($0){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;this.drawshape($0,0,0,this.width-1,this.height-1);$0.fillStyle=$0.interiorfillcolor;$0.fill();$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.stroke()
},"$m271",function($0){
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
}],$lzc$class_componentmodel$componentfocus$drawshadowfocus$basepanel,["tagname","combobox","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,text:new LzAlwaysExpr("text","text","$m272","$m273",null)},"class":$lzc$class_m279},{attrs:{$classrootdepth:1,$delegates:["onclick","$m278",null],align:"right",clickable:true,focusable:false,height:new LzAlwaysExpr("height","size","$m276","$m277",null),width:new LzAlwaysExpr("width","size","$m274","$m275",null)},"class":$lzc$class_m280}],$lzc$class_componentmodel$componentfocus$drawshadowfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentmodel$componentfocus$drawshadowfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onclick","$m269",null,"onkeydown","$m271",null],clickable:true,opt:new LzOnceExpr("opt","expression","$m270",null),width:100,x:10},$lzc$class_combobox.attributes)
}}})($lzc$class_combobox)
};Class.make("$lzc$class_m294",["$m289",function($0){
this.setAttribute("controller",this.parent.parent.parent)
},"$m290",function($0){
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
}],$lzc$class_listitem,["displayName","<anonymous extends='listitem' with='componentmodel, buttonevents'>","attributes",new LzInheritedHash($lzc$class_listitem.attributes)]);Class.make("$lzc$class_m293",["$m287",function($0){
var $1=this.parent.parent.parent.opt;if($1!==this["nodes"]||!this.inited){
this.setAttribute("nodes",$1)
}},"$m288",function(){
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
}],$lzc$class_replicator,["displayName","<anonymous extends='replicator'>","children",[{attrs:{controller:new LzOnceExpr("controller","expression","$m289",null),selectionmanager:new LzOnceExpr("selectionmanager","expression","$m290",null)},"class":$lzc$class_m294}],"attributes",new LzInheritedHash($lzc$class_replicator.attributes)]);Class.make("$lzc$class_m292",["$m283",function($0){
with(this){
var $1=immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m284",function(){
with(this){
try{
return [immediateparent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$m285",function($0){
with(this){
var $1=immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m286",function(){
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
}],LzView,["displayName","<anonymous extends='view'>","children",[{attrs:{selector:void 0},children:[{"class":$lzc$class_simplelayout},{attrs:{name:"selector",sel:"$lzc$set_selected"},"class":LzSelectionManager},{attrs:{nodes:new LzAlwaysExpr("nodes","expression","$m287","$m288",null)},"class":$lzc$class_m293}],"class":LzView},{"class":$lzc$class_scrlbr}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_m291",["$m281",function($0){
this.setAttribute("opt",[])
},"opt",void 0,"$lzc$set_value",function($0){
if(!this.target){
return
};this.target.setAttribute("value",$0);this.hide()
},"$m282",function($0){
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
}],$lzc$class_fltr,["displayName","<anonymous extends='fltr' with='drawshadowfocus, drawfltr, componentfocus, componentmodel'>","children",LzNode.mergeChildren([{attrs:{content:void 0,name:"contentstate"},children:[{attrs:{clip:true,height:new LzAlwaysExpr("height","size","$m285","$m286",null),name:"content",width:new LzAlwaysExpr("width","size","$m283","$m284",null)},"class":$lzc$class_m292}],"class":LzState}],$lzc$class_fltr["children"]),"attributes",new LzInheritedHash($lzc$class_fltr.attributes)]);canvas.LzInstantiateView({attrs:{$delegates:["ontarget","$m282",null],$lzc$bind_name:function($0,$1){
switch(arguments.length){
case 1:
$1=true;

};if($1){
combobox_floater=$0
}else if(combobox_floater===$0){
combobox_floater=null
}},content:void 0,contentstate:void 0,height:200,name:"combobox_floater",opt:new LzOnceExpr("opt","expression","$m281",null),width:100},"class":$lzc$class_m291},2);{
Class.make("$lzc$class_keyboardrepeater$virtualdrawview$bsbtn",["__keydowntime",void 0,"__keystillDownDelegate",void 0,"__keydownrepeatinterval",void 0,"__keydowninitialinterval",void 0,"onkeystilldown",void 0,"init",function(){
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
}}},"$m295",function($0){
with(this){
this.__keydowntime=new Date().getTime();lz.Timer.addTimer(this.__keystillDownDelegate,this.__keydowninitialinterval)
}},"$m296",function($0){
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
}],$lzc$class_virtualdrawview$bsbtn,["displayName","<bsbtn with='keyboardrepeater, virtualdrawview'>","children",LzNode.mergeChildren([],$lzc$class_virtualdrawview$bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_virtualdrawview$bsbtn.attributes)],[$lzc$class_keyboardrepeater]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onkeydown","$m295",null,"onkeyup","$m296",null],__keydowninitialinterval:300,__keydownrepeatinterval:50,__keydowntime:0,__keystillDownDelegate:null,onkeystilldown:LzDeclaredEvent},$lzc$class_keyboardrepeater$virtualdrawview$bsbtn.attributes)
}}})($lzc$class_keyboardrepeater$virtualdrawview$bsbtn)
};{
Class.make("$lzc$class_sliderbutton",["dragger",void 0,"$m301",function($0){
with(this){
var $1=Math.abs(parent.max-parent.min);var $2=(parseFloat($0)-parent.min)/$1;if($2<0){
$2=0
}else if($2>1){
$2=1
};this.setAttribute("x",Math.floor($2*(this.parent.width-this.width)))
}},"$m302",function($0){
with(this){
var $1=Math.abs(parent.max-parent.min);var $2=$0/(parent.width-this.width);if($2<0){
$2=0
}else if($2>1){
$2=1
};var $3=$2*$1+parent.min;parent.updateValue(this.clonenumber,$3);slider_floater.setAttribute("value",$3)
}},"$m303",function($0){
with(this){
slider_floater.show(this)
}},"$m304",function($0){
with(this){
slider_floater.hide()
}},"$m305",function(){
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
}],$lzc$class_keyboardrepeater$virtualdrawview$bsbtn,["tagname","sliderbutton","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,$m297:function($0){
var $1=this.parent.width-this.width;if($1!==this["drag_max_x"]||!this.inited){
this.setAttribute("drag_max_x",$1)
}},$m298:function(){
try{
return [this.parent,"width",this,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},$m299:function($0){
var $1=this.parent.mouseisdown;if($1!==this["applied"]||!this.inited){
this.setAttribute("applied",$1)
}},$m300:function(){
try{
return [this.parent,"mouseisdown"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},applied:new LzAlwaysExpr("applied","boolean","$m299","$m300",null),drag_axis:"x",drag_max_x:new LzAlwaysExpr("drag_max_x","number","$m297","$m298",null),drag_min_x:0,name:"dragger"},"class":$lzc$class_dragstate}],$lzc$class_keyboardrepeater$virtualdrawview$bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_keyboardrepeater$virtualdrawview$bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondata","$m301",null,"onx","$m302",null,"onfocus","$m303",null,"onblur","$m304",null,"onkeydown","handleKeyDown",null,"onkeystilldown","handleKeyDown",null,"onmousewheeldelta","step","$m305"]},$lzc$class_sliderbutton.attributes)
}}})($lzc$class_sliderbutton)
};{
Class.make("$lzc$class_componentmodel$componentfocus$basepanel",["value",void 0,"disabled",void 0,"$m306",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$m307",function(){
try{
return [this,"disabled"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m308",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$m309",function(){
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
}],$lzc$class_componentfocus$basepanel,["displayName","<basepanel with='componentmodel, componentfocus'>","children",LzNode.mergeChildren([],$lzc$class_componentfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentfocus$basepanel.attributes)],[$lzc$class_componentmodel]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("clickable","boolean","$m308","$m309",null),disabled:false,focusable:new LzAlwaysExpr("focusable","boolean","$m306","$m307",null),value:""},$lzc$class_componentmodel$componentfocus$basepanel.attributes)
}}})($lzc$class_componentmodel$componentfocus$basepanel)
};Class.make("$lzc$class_m317",["$m312",function($0){
var $1=this.parent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$m313",function(){
try{
return [this.parent,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}},"$m314",function($0){
var $1=this.mouseisover?1:0.5;if($1!==this["opacity"]||!this.inited){
this.setAttribute("opacity",$1)
}},"$m315",function(){
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
}],$lzc$class_sliderbutton,["displayName","<anonymous extends='sliderbutton' with='keyboardrepeater, virtualdrawview'>","children",LzNode.mergeChildren([],$lzc$class_sliderbutton["children"]),"attributes",new LzInheritedHash($lzc$class_sliderbutton.attributes)]);Class.make("$lzc$class_m316",["$m310",function($0){
var $1=this.parent._model;if($1!==this["nodes"]||!this.inited){
this.setAttribute("nodes",$1)
}},"$m311",function(){
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
}],$lzc$class_replicator,["displayName","<anonymous extends='replicator'>","children",[{attrs:{$classrootdepth:2,height:new LzAlwaysExpr("height","size","$m312","$m313",null),opacity:new LzAlwaysExpr("opacity","number","$m314","$m315",null),transition:"opacity .5s",width:10},"class":$lzc$class_m317}],"attributes",new LzInheritedHash($lzc$class_replicator.attributes)]);{
Class.make("$lzc$class_sldr",["_model",void 0,"min",void 0,"max",void 0,"draw",function($0){
var $1=this.height*0.25;this.drawshape($0,0,$1,this.width-1,$1*2);$0.lineWidth=this.borderwidth;$0.strokeStyle=this.interiorbordercolor;$0.fillStyle=this.interiorfillcolor;$0.fill();$0.stroke()
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
}],$lzc$class_componentmodel$componentfocus$basepanel,["tagname","sldr","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,nodes:new LzAlwaysExpr("nodes","expression","$m310","$m311",null)},"class":$lzc$class_m316}],$lzc$class_componentmodel$componentfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentmodel$componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_model:[0],focusable:false,height:20,max:100,min:0,onvalue:LzDeclaredEvent,width:100},$lzc$class_sldr.attributes)
}}})($lzc$class_sldr)
};Class.make("$lzc$class_m320",["$m318",function($0){
with(this){
var $1=parent.value;if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}}},"$m319",function(){
with(this){
try{
return [parent,"value"]
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
}},focusable:false,name:"slider_floater"},children:[{attrs:{text:new LzAlwaysExpr("text","text","$m318","$m319",null)},"class":$lzc$class_m320}],"class":$lzc$class_fltr},2);;(function(){
var $0=LzCSSStyle,$1=LzCSSStyleRule;$0._addRule(new $1("canvas",{"background-color":15856113,"font-family":new LzStyleIdent("futura"),"font-size":12}));$0._addRule(new $1("sunbutton1",{"base-color":16777215,"border-color":16777215,"border-radius":3,"highlight-color":6710886,"shadow-angle":35,"shadow-blur-radius":0,"shadow-distance":0,"text-color":9868950,"text-padding":4}));$0._addRule(new $1({attrname:"mousestate",attrvalue:"over",simpleselector:"sunbutton1"},{"text-color":8044866}));$0._addRule(new $1(["sunbutton1",{attrname:"focused",attrvalue:"false"},{attrname:"mousestate",attrvalue:"over"}],{"shadow-blur-radius":4}));$0._addRule(new $1({attrname:"mousestate",attrvalue:"down",simpleselector:"sunbutton1"},{"text-color":15181597}))
})();Class.make("$lzc$class_m327",["$m323",function($0){
with(this){
this.setAttribute("duration",parent.focusanimationspeed)
}},"$m324",function($0){
this.parent.setAttribute("shadowcolor",this.parent.highlightcolor);if(this.parent.shadowdistance!=2){
this.parent.setAttribute("shadowdistance",0)
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
}],LzAnimatorGroup,["displayName","<anonymous extends='animatorgroup'>","children",[{attrs:{$classrootdepth:2,attribute:"shadowdistance",to:2},"class":LzAnimator},{attrs:{$classrootdepth:2,attribute:"shadowblurradius",to:4},"class":LzAnimator}],"attributes",new LzInheritedHash(LzAnimatorGroup.attributes)]);Class.make("$lzc$class_m328",["$m325",function($0){
with(this){
this.setAttribute("duration",parent.focusanimationspeed)
}},"$m326",function($0){
if(!this.parent.focused)this.parent.setAttribute("shadowcolor",null)
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
}],LzAnimatorGroup,["displayName","<anonymous extends='animatorgroup'>","children",[{attrs:{$classrootdepth:2,attribute:"shadowdistance",to:0},"class":LzAnimator},{attrs:{$classrootdepth:2,attribute:"shadowblurradius",to:0},"class":LzAnimator}],"attributes",new LzInheritedHash(LzAnimatorGroup.attributes)]);{
Class.make("$lzc$class_sunbutton1",["$m321",function($0){
with(this){
this.setAttribute("shadowcolor",LzColorUtils.convertColor("null"))
}},"$m322",function($0){
if(this.disabled){
this.drawtarget=this.immediateparent;this.drawtarget.addScope(this)
}},"draw",function($0){
with(this){
if(!this.isinited)return;if(this["drawtarget"]&&$0===this){
$0.clear();return
};$0.fillStyle=this.disabled?15856113:$0["interiorfillcolor"];$0.borderwidth=$0.lineWidth=this.disabled?3:0;this.styleborder($0);this.drawborder($0);this.drawinteriorborder($0);if(this.mousestate=="over"){
this.setAttribute("shadowcolor",$0.highlightcolor);this.showanim.doStart()
}else if(mousestate=="up"){
if(!this.focused){
this.hideanim.doStart()
}}}},"showanim",void 0,"hideanim",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
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
}],$lzc$class_btn,["tagname","sunbutton1","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,$delegates:["onstart","$m324",null],duration:new LzOnceExpr("duration","number","$m323",null),name:"showanim",process:"simultaneous",start:false},"class":$lzc$class_m327},{attrs:{$classrootdepth:1,$delegates:["onstop","$m326",null],duration:new LzOnceExpr("duration","number","$m325",null),name:"hideanim",process:"simultaneous",start:false},"class":$lzc$class_m328}],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m322",null],shadowcolor:new LzOnceExpr("shadowcolor","color","$m321",null)},$lzc$class_sunbutton1.attributes)
}}})($lzc$class_sunbutton1)
};Class.make("$lzc$class_m333",["$m329",function($0){
with(this){
var $1=immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m330",function(){
with(this){
try{
return [immediateparent,"width"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"$m331",function($0){
with(this){
var $1=immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m332",function(){
with(this){
try{
return [immediateparent,"height"]
}
catch($lzsc$e){
if(Error["$lzsc$isa"]?Error.$lzsc$isa($lzsc$e):$lzsc$e instanceof Error){
lz.$lzsc$thrownError=$lzsc$e
};throw $lzsc$e
}}},"draw",function($0){
with(this){
$0.beginPath();$0.rect(0,0,this.width,this.height);$0.closePath();$0.fillStyle=canvas.bgcolor;$0.fill()
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
}],$lzc$class_basepanel,["displayName","<anonymous extends='basepanel' with='applybasecolor, borderradius'>","children",LzNode.mergeChildren([{attrs:{inset:10,spacing:10},"class":$lzc$class_simplelayout},{attrs:{align:"center",text:"Submit"},"class":$lzc$class_sunbutton1},{attrs:{align:"center",text:"Cancel"},"class":$lzc$class_sunbutton1},{attrs:{align:"center",text:"Ok"},"class":$lzc$class_sunbutton1},{attrs:{align:"center",text:"Revert",textcolor:"#e7a71d"},"class":$lzc$class_sunbutton1},{attrs:{align:"center",disabled:true,text:"Disabled"},"class":$lzc$class_sunbutton1}],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)]);canvas.LzInstantiateView({attrs:{height:new LzAlwaysExpr("height","size","$m331","$m332",null),width:new LzAlwaysExpr("width","size","$m329","$m330",null)},"class":$lzc$class_m333},47);lz["layout"]=LzLayout;lz["simplelayout"]=$lzc$class_simplelayout;lz["replicator"]=$lzc$class_replicator;lz["selectionmanager"]=LzSelectionManager;lz["dragstate"]=$lzc$class_dragstate;lz["drawarrow"]=$lzc$class_drawarrow;lz["applybasecolor"]=$lzc$class_applybasecolor;lz["drawpanel"]=$lzc$class_drawpanel;lz["borderradius"]=$lzc$class_borderradius;lz["basepanel"]=$lzc$class_basepanel;lz["virtualdrawview"]=$lzc$class_virtualdrawview;lz["componentmodel"]=$lzc$class_componentmodel;lz["componentfocus"]=$lzc$class_componentfocus;lz["drawshadowfocus"]=$lzc$class_drawshadowfocus;lz["buttonevents"]=$lzc$class_buttonevents;lz["mousedownrepeater"]=$lzc$class_mousedownrepeater;lz["keyboardrepeater"]=$lzc$class_keyboardrepeater;lz["stylebutton"]=$lzc$class_stylebutton;lz["drawbutton"]=$lzc$class_drawbutton;lz["buttongroup"]=$lzc$class_buttongroup;lz["bsbtn"]=$lzc$class_bsbtn;lz["btn"]=$lzc$class_btn;lz["drawborderfocus"]=$lzc$class_drawborderfocus;lz["drawinputtext"]=$lzc$class_drawinputtext;lz["inpt"]=$lzc$class_inpt;lz["scrlstepbtn"]=$lzc$class_scrlstepbtn;lz["scrlthmb"]=$lzc$class_scrlthmb;lz["scrltrk"]=$lzc$class_scrltrk;lz["bsscrlbr"]=$lzc$class_bsscrlbr;lz["scrlbr"]=$lzc$class_scrlbr;lz["drawfltr"]=$lzc$class_drawfltr;lz["fltr"]=$lzc$class_fltr;lz["listitem"]=$lzc$class_listitem;lz["combobox"]=$lzc$class_combobox;lz["sliderbutton"]=$lzc$class_sliderbutton;lz["sldr"]=$lzc$class_sldr;lz["sunbutton1"]=$lzc$class_sunbutton1;canvas.initDone();