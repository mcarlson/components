canvas=new LzCanvas(null,{__LZproxied:"false",appbuilddate:"2010-02-07T04:21:39Z",bgcolor:16777215,embedfonts:true,font:"Helvetica,Sans",fontname:"Helvetica,Sans",fontsize:12,fontstyle:"plain",height:"100%",lpsbuild:"15558 /Users/maxcarlson/openlaszlo/trunk-clean",lpsbuilddate:"2010-01-29T20:34:49Z",lpsrelease:"Latest",lpsversion:"4.8.x",runtime:"dhtml",width:"100%"});Class.make("$lzc$class_simplelayout",LzLayout,["axis",void 0,"$lzc$set_axis",function($0){
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
}}],["tagname","simplelayout","attributes",new LzInheritedHash(LzLayout.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({axis:"y",inset:0,spacing:0},$lzc$class_simplelayout.attributes)
}}})($lzc$class_simplelayout);Class.make("$lzc$class_m5",$lzc$class_simplelayout,["$m1",function($0){
with(this){
var $1=parent.spacing;if($1!==this["spacing"]||!this.inited){
this.setAttribute("spacing",$1)
}}},"$m2",function(){
with(this){
return [parent,"spacing"]
}},"$m3",function($0){
with(this){
var $1=parent.inset;if($1!==this["inset"]||!this.inited){
this.setAttribute("inset",$1)
}}},"$m4",function(){
with(this){
return [parent,"inset"]
}},"$classrootdepth",void 0],["attributes",new LzInheritedHash($lzc$class_simplelayout.attributes)]);Class.make("$lzc$class_vbox",LzView,["spacing",void 0,"inset",void 0],["tagname","vbox","children",[{attrs:{$classrootdepth:1,axis:"y",inset:new LzAlwaysExpr("$m3","$m4"),spacing:new LzAlwaysExpr("$m1","$m2")},"class":$lzc$class_m5}],"attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({inset:0,spacing:0},$lzc$class_vbox.attributes)
}}})($lzc$class_vbox);Mixin.make("$lzc$class_drawable",null,["arc",function($0,$1,$2,$3,$4,$5){
switch(arguments.length){
case 5:
$5=false;

};var $6=$0+$2*Math.cos($3);var $7=$1+$2*Math.sin(2*Math.PI-$3);$3*=180/Math.PI;$4*=180/Math.PI;var $8=$5==true?$4-$3-360:$4-$3;this.moveTo($6,$7);return this._drawArc($0,$1,$2,$8,$3)
},"rect",function($0,$1,$2,$3,$4){
switch(arguments.length){
case 4:
$4=0;

};LzKernelUtils.rect(this,$0,$1,$2,$3,$4)
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
return {x:($0.x+$1.x)/2,y:($0.y+$1.y)/2}},"globalAlpha",void 0,"lineWidth",void 0,"lineCap",void 0,"lineJoin",void 0,"miterLimit",void 0,"strokeStyle",void 0,"fillStyle",void 0,"__globalAlpha",void 0,"__lineWidth",void 0,"__lineCap",void 0,"__lineJoin",void 0,"__miterLimit",void 0,"__strokeStyle",void 0,"__fillStyle",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.createContext()
},"$lzc$set_context",function($0){
this.beginPath();if(this.context){
this.__lineWidth=null;this.__lineCap=null;this.__lineJoin=null;this.__miterLimit=null;this.__fillStyle=null;this.__strokeStyle=null;this.__globalAlpha=null
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzc$set_context"]||this.nextMethod(arguments.callee,"$lzc$set_context")).call(this,$0)
},"__drawImageCnt",void 0,"getImage",function($0){
var $1=lz.drawable.images;if(!$1[$0]){
var $2=$0;if($0.indexOf("http:")!=0&&$0.indexOf("https:")!=0){
$2=this.sprite.getResourceUrls($0)[0]
};var $3=new Image();$3.src=$2;$1[$0]=$3;if($2!=$0){
$1[$2]=$3
}};return $1[$0]
},"drawImage",function(image,x,y,w,h,r){
if(typeof image=="string"){
image=this.getImage(image)
};if(!(image&&image.nodeType==1&&image.nodeName=="IMG")){

}else if(!image.complete){
var fname="__drawImage"+this.__drawImageCnt++;this[fname]=function(){
lz.embed.removeEventHandler(image,"load",this,fname);delete this[fname];this.drawImage(image,x,y,w,h,r)
};lz.embed.attachEventHandler(image,"load",this,fname)
}else{
var $0=r?r:0;this.context.save();this.clear();var $1=x?x:0;var $2=y?y:0;this.context.translate($1,$2);this.context.rotate($0);this.context.drawImage(image,0,0,w,h);this.context.restore()
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
}},"fill",function(){
this.__playPath();this.context.fill()
},"__updateFillStyle",function(){
if(this.__fillStyle!=this.fillStyle){
if(this.fillStyle instanceof LzCanvasGradient){
this.fillStyle.__applyFillTo(this.context)
}else{
var $0=lz.drawable.__colorcache;var $1=$0[this.fillStyle];if($1==null){
$1=LzColorUtils.torgb(this.fillStyle);$0[this.fillStyle]=$1
};this.context.fillStyle=$1
};this.__fillStyle=this.fillStyle
}},"__updateStyles",function(){
var $0={lineWidth:"__lineWidth",lineCap:"__lineCap",lineJoin:"__lineJoin",miterLimit:"__miterLimit",globalAlpha:"__globalAlpha"};for(var $1 in $0){
var $2=$0[$1];var $3=this[$1];if(this[$2]!=$3){
this.context[$1]=$3;this[$2]=$3
}};if(this.__strokeStyle!=this.strokeStyle){
if(this.strokeStyle instanceof LzCanvasGradient){
this.strokeStyle.__applyStrokeTo(this.context)
}else{
var $4=lz.drawable.__colorcache;var $5=$4[this.strokeStyle];if($5==null){
$5=LzColorUtils.torgb(this.strokeStyle);$4[this.strokeStyle]=$5
};this.context.strokeStyle=$5
};this.__strokeStyle=this.strokeStyle
}},"__playPath",function(){
if(this.__path.length==0)return;this.__updateStyles();this.__updateFillStyle();this.context.beginPath();for(var $0=0;$0<this.__path.length;$0+=1){
var $1=this.__path[$0];var $2=$1[0];if($2==0){
this.context.closePath()
}else if($2==3){
this.context.quadraticCurveTo($1[1],$1[2],$1[3],$1[4])
}else if($2==4){
this.context.bezierCurveTo($1[1],$1[2],$1[3],$1[4],$1[5],$1[6])
}else if($2==1){
this.context.moveTo($1[1],$1[2])
}else if($2==2){
this.context.lineTo($1[1],$1[2])
}}},"clipPath",function(){},"clipButton",function(){},"stroke",function(){
this.__playPath();this.context.stroke()
},"clear",function(){
this.context.clearRect(0,0,this.width,this.height)
},"clearMask",function(){},"createLinearGradient",function($0,$1,$2,$3){
return new LzCanvasGradient(this,[$0,$1,$2,$3],false)
},"createRadialGradient",function($0,$1,$2,$3,$4,$5){
return new LzCanvasGradient(this,[$0,$1,$2,$3,$4,$5],true)
},"rotate",function($0){
this.context.rotate($0)
},"translate",function($0,$1){
this.context.translate($0,$1)
},"save",function(){
this.__fillStyle=this.__strokeStyle=null;this.context.save()
},"restore",function(){
this.__fillStyle=this.__strokeStyle=null;this.context.restore()
},"fillRect",function($0,$1,$2,$3){
this.__updateFillStyle();this.context.fillRect($0,$1,$2,$3)
},"text",void 0],["__colorcache",{},"images",{},"tagname","drawable","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({__drawImageCnt:0,__fillStyle:null,__globalAlpha:null,__lineCap:null,__lineJoin:null,__lineWidth:null,__miterLimit:null,__strokeStyle:null,fillStyle:"#000000",globalAlpha:1,lineCap:"round",lineJoin:"round",lineWidth:1,miterLimit:3,strokeStyle:"#000000",text:"// Classes that implement an interface must obey the LZX // tag-&gt;class mapping convention and must be dynamic // Next two are part of the required LFC tag class protocol private private private private private private private // called when the context has been created // hash of image resources for drawImage"},$lzc$class_drawable.attributes)
}}})($lzc$class_drawable);Class.make("LzCanvasGradient",null,["__context",null,"__g",null,"$lzsc$initialize",function($0,$1,$2){
this.__context=$0;if($2){
this.__g=$0.context.createRadialGradient.apply($0.context,$1)
}else{
this.__g=$0.context.createLinearGradient.apply($0.context,$1)
}},"addColorStop",function($0,$1){
var $2=lz.drawable.__colorcache;var $3=$2[$1];if($3==null){
$3=LzColorUtils.torgb($1);$2[$1]=$3
};var $4=this.__context.globalAlpha;if($4!=1){
$3=this.torgba($3,$4)
};this.__g.addColorStop($0,$3)
},"torgba",function($0,$1){
if($0.indexOf("rgba")==-1){
var $2=$0.substring(4,$0.length-1).split(",");$2.push($1);return "rgba("+$2.join(",")+")"
}else{
return $0
}},"__applyFillTo",function($0){
$0.fillStyle=this.__g
},"__applyStrokeTo",function($0){
$0.strokeStyle=this.__g
}],null);Class.make("$lzc$class_drawable$view",LzView,["arc",function($0,$1,$2,$3,$4,$5){
with(this){
switch(arguments.length){
case 5:
$5=false;

};var $6=$0+$2*Math.cos($3);var $7=$1+$2*Math.sin(2*Math.PI-$3);$3*=180/Math.PI;$4*=180/Math.PI;var $8=$5==true?$4-$3-360:$4-$3;this.moveTo($6,$7);return this._drawArc($0,$1,$2,$8,$3)
}},"rect",function($0,$1,$2,$3,$4){
with(this){
switch(arguments.length){
case 4:
$4=0;

};LzKernelUtils.rect(this,$0,$1,$2,$3,$4)
}},"oval",function($0,$1,$2,$3){
with(this){
switch(arguments.length){
case 3:
$3=NaN;

};if(isNaN($3)){
$3=$2
};var $4=$2<20&&$3<20?5:8;var $5=Math.PI/($4/2);var $6=$2/Math.cos($5/2);var $7=$3/Math.cos($5/2);this.moveTo($0+$2,$1);var $8=0,$9,$a,$b,$c,$d;for(var $e=0;$e<$4;$e++){
$8+=$5;$9=$8-$5/2;$c=$0+Math.cos($9)*$6;$d=$1+Math.sin($9)*$7;$a=$0+Math.cos($8)*$2;$b=$1+Math.sin($8)*$3;this.quadraticCurveTo($c,$d,$a,$b)
};return {x:$a,y:$b}}},"_drawArc",function($0,$1,$2,$3,$4,$5){
with(this){
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
}};return {x:$7,y:$8}}},"distance",function($0,$1){
with(this){
var $2=$1.x-$0.x;var $3=$1.y-$0.y;return Math.sqrt($2*$2+$3*$3)
}},"intersection",function($0,$1,$2,$3){
var $4=($3.x-$2.x)*($0.y-$2.y)-($3.y-$2.y)*($0.x-$2.x);var $5=($3.y-$2.y)*($1.x-$0.x)-($3.x-$2.x)*($1.y-$0.y);if($5==0){
if($4==0){
return -1
}else{
return null
}};$4/=$5;return {x:$0.x+($1.x-$0.x)*$4,y:$0.y+($1.y-$0.y)*$4}},"midpoint",function($0,$1){
return {x:($0.x+$1.x)/2,y:($0.y+$1.y)/2}},"globalAlpha",void 0,"lineWidth",void 0,"lineCap",void 0,"lineJoin",void 0,"miterLimit",void 0,"strokeStyle",void 0,"fillStyle",void 0,"__globalAlpha",void 0,"__lineWidth",void 0,"__lineCap",void 0,"__lineJoin",void 0,"__miterLimit",void 0,"__strokeStyle",void 0,"__fillStyle",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.createContext()
},"$lzc$set_context",function($0){
this.beginPath();if(this.context){
this.__lineWidth=null;this.__lineCap=null;this.__lineJoin=null;this.__miterLimit=null;this.__fillStyle=null;this.__strokeStyle=null;this.__globalAlpha=null
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzc$set_context"]||this.nextMethod(arguments.callee,"$lzc$set_context")).call(this,$0)
},"__drawImageCnt",void 0,"getImage",function($0){
with(this){
var $1=lz.drawable.images;if(!$1[$0]){
var $2=$0;if($0.indexOf("http:")!=0&&$0.indexOf("https:")!=0){
$2=this.sprite.getResourceUrls($0)[0]
};var $3=new Image();$3.src=$2;$1[$0]=$3;if($2!=$0){
$1[$2]=$3
}};return $1[$0]
}},"drawImage",function($0,$1,$2,$3,$4,$5){
with(this){
var image=$0;var x=$1;var y=$2;var w=$3;var h=$4;var r=$5;if(typeof image=="string"){
image=this.getImage(image)
};if(!(image&&image.nodeType==1&&image.nodeName=="IMG")){

}else if(!image.complete){
var fname="__drawImage"+this.__drawImageCnt++;this[fname]=function(){
lz.embed.removeEventHandler(image,"load",this,fname);delete this[fname];this.drawImage(image,x,y,w,h,r)
};lz.embed.attachEventHandler(image,"load",this,fname)
}else{
var $6=r?r:0;this.context.save();this.clear();var $7=x?x:0;var $8=y?y:0;this.context.translate($7,$8);this.context.rotate($6);this.context.drawImage(image,0,0,w,h);this.context.restore()
}}},"__checkContext",function(){},"beginPath",function(){
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
}},"fill",function(){
this.__playPath();this.context.fill()
},"__updateFillStyle",function(){
with(this){
if(this.__fillStyle!=this.fillStyle){
if(this.fillStyle instanceof LzCanvasGradient){
this.fillStyle.__applyFillTo(this.context)
}else{
var $0=lz.drawable.__colorcache;var $1=$0[this.fillStyle];if($1==null){
$1=LzColorUtils.torgb(this.fillStyle);$0[this.fillStyle]=$1
};this.context.fillStyle=$1
};this.__fillStyle=this.fillStyle
}}},"__updateStyles",function(){
with(this){
var $0={lineWidth:"__lineWidth",lineCap:"__lineCap",lineJoin:"__lineJoin",miterLimit:"__miterLimit",globalAlpha:"__globalAlpha"};for(var $1 in $0){
var $2=$0[$1];var $3=this[$1];if(this[$2]!=$3){
this.context[$1]=$3;this[$2]=$3
}};if(this.__strokeStyle!=this.strokeStyle){
if(this.strokeStyle instanceof LzCanvasGradient){
this.strokeStyle.__applyStrokeTo(this.context)
}else{
var $4=lz.drawable.__colorcache;var $5=$4[this.strokeStyle];if($5==null){
$5=LzColorUtils.torgb(this.strokeStyle);$4[this.strokeStyle]=$5
};this.context.strokeStyle=$5
};this.__strokeStyle=this.strokeStyle
}}},"__playPath",function(){
if(this.__path.length==0)return;this.__updateStyles();this.__updateFillStyle();this.context.beginPath();for(var $0=0;$0<this.__path.length;$0+=1){
var $1=this.__path[$0];var $2=$1[0];if($2==0){
this.context.closePath()
}else if($2==3){
this.context.quadraticCurveTo($1[1],$1[2],$1[3],$1[4])
}else if($2==4){
this.context.bezierCurveTo($1[1],$1[2],$1[3],$1[4],$1[5],$1[6])
}else if($2==1){
this.context.moveTo($1[1],$1[2])
}else if($2==2){
this.context.lineTo($1[1],$1[2])
}}},"clipPath",function(){},"clipButton",function(){},"stroke",function(){
this.__playPath();this.context.stroke()
},"clear",function(){
this.context.clearRect(0,0,this.width,this.height)
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
},"save",function(){
this.__fillStyle=this.__strokeStyle=null;this.context.save()
},"restore",function(){
this.__fillStyle=this.__strokeStyle=null;this.context.restore()
},"fillRect",function($0,$1,$2,$3){
this.__updateFillStyle();this.context.fillRect($0,$1,$2,$3)
}],["__colorcache",{},"images",{},"attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({__drawImageCnt:0,__fillStyle:null,__globalAlpha:null,__lineCap:null,__lineJoin:null,__lineWidth:null,__miterLimit:null,__strokeStyle:null,fillStyle:"#000000",globalAlpha:1,lineCap:"round",lineJoin:"round",lineWidth:1,miterLimit:3,strokeStyle:"#000000"},$lzc$class_drawable$view.attributes)
}}})($lzc$class_drawable$view);Class.make("$lzc$class_drawview",$lzc$class_drawable$view,null,["tagname","drawview","attributes",new LzInheritedHash($lzc$class_drawable$view.attributes)]);Class.make("$lzc$class_basepanel",$lzc$class_drawable$view,["draw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited)return
}],["tagname","basepanel","attributes",new LzInheritedHash($lzc$class_drawable$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","draw",null,"onheight","draw",null,"oncontext","draw",null]},$lzc$class_basepanel.attributes)
}}})($lzc$class_basepanel);Mixin.make("$lzc$class_componentmodel",null,["value",void 0,"disabled",void 0,"$m6",function($0){
with(this){
var $1=!disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}}},"$m7",function(){
return [this,"disabled"]
},"$lzc$set_disabled",function($0){
this.disabled=$0;this.setAttribute("focusable",!$0);this.setAttribute("clickable",!$0);if(this.ondisabled.ready){
this.ondisabled.sendEvent($0)
}}],["tagname","componentmodel","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({disabled:false,focusable:new LzAlwaysExpr("$m6","$m7"),value:""},$lzc$class_componentmodel.attributes)
}}})($lzc$class_componentmodel);Mixin.make("$lzc$class_componentfocus",null,["doFocus",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.disabled)this.animate("shadowblurradius",10,500)
},"doBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.animate("shadowblurradius",0,500)
}],["tagname","componentfocus","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","doFocus",null,"onblur","doBlur",null],shadowblurradius:0,shadowcolor:LzColorUtils.convertColor("0xcc"),shadowdistance:0},$lzc$class_componentfocus.attributes)
}}})($lzc$class_componentfocus);Mixin.make("$lzc$class_boxmodel",null,["construct",function($0,$1){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["construct"]||this.nextMethod(arguments.callee,"construct")).call(this,$0,$1);var $2=this.__styleinfo;$2.margin={capability:"css2boxmodel",isdimension:true,affectsoffset:true};$2.borderWidth={capability:"css2boxmodel",isdimension:true,affectsoffset:true};$2.borderColor={capability:"css2boxmodel"};$2.padding={capability:"css2boxmodel",isdimension:true,affectsoffset:true}},"margin",void 0,"onmargin",void 0,"$lzc$set_margin",function($0){
if(this.margin!=$0){
this.margin=$0;this.__widthoffset=this.__heightoffset=$0*2+this.borderwidth*2+this.padding*2;this.setCSS("margin",$0)
};if(this.onmargin.ready)this.onmargin.sendEvent($0)
},"borderwidth",void 0,"onborderwidth",void 0,"$lzc$set_borderwidth",function($0){
if(this.borderwidth!=$0){
this.borderwidth=$0;this.__widthoffset=this.__heightoffset=this.margin*2+$0*2+this.padding*2;this.setCSS("borderWidth",$0)
};if(this.onborderwidth.ready)this.onborderwidth.sendEvent($0)
},"bordercolor",void 0,"onbordercolor",void 0,"$lzc$set_bordercolor",function($0){
if(this.bordercolor!=$0){
this.bordercolor=$0;this.setCSS("borderColor",LzColorUtils.torgb($0))
};if(this.onbordercolor.ready)this.onbordercolor.sendEvent($0)
},"padding",void 0,"onpadding",void 0,"$lzc$set_padding",function($0){
if(this.padding!=$0){
this.padding=$0;this.__widthoffset=this.__heightoffset=this.margin*2+this.borderwidth*2+$0*2;this.setCSS("padding",$0)
};if(this.onpadding.ready)this.onpadding.sendEvent($0)
}],["tagname","boxmodel","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",LzColorUtils.convertColor("0x0")),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0),margin:new LzStyleConstraintExpr("margin","margin","number",0),onbordercolor:LzDeclaredEvent,onborderwidth:LzDeclaredEvent,onmargin:LzDeclaredEvent,onpadding:LzDeclaredEvent,padding:new LzStyleConstraintExpr("padding","padding","number",0)},$lzc$class_boxmodel.attributes)
}}})($lzc$class_boxmodel);Mixin.make("$lzc$class_buttonevents",null,["mouseisover",void 0,"mouseisdown",void 0,"$m8",function(){
var $0=lz.ModeManager;return $0
},"$m9",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.mouseisover=this.mouseisdown=false;this._updateFrame()
}},"$m10",function($0){
this.setAttribute("mouseisover",true)
},"$m11",function($0){
this.setAttribute("mouseisover",false)
},"$m12",function($0){
this.setAttribute("mouseisdown",true)
},"$m13",function($0){
this.setAttribute("mouseisdown",false)
},"$m14",function($0){
if($0==32||$0==13){
this.mouseisover=true;this.mouseisdown=true;this._updateFrame();if(this.onclick.ready)this.onclick.sendEvent()
}},"$m15",function($0){
if($0==32||$0==13){
this.mouseisover=false;this.mouseisdown=false;this._updateFrame()
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
}}],["tagname","buttonevents","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m9","$m8","onmouseover","$m10",null,"onmouseout","$m11",null,"onmousedown","$m12",null,"onmouseup","$m13",null,"onkeydown","$m14",null,"onkeyup","$m15",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents.attributes)
}}})($lzc$class_buttonevents);Mixin.make("$lzc$class_drawbutton",null,["basecolor",void 0,"borderwidth",void 0,"bordercolor",void 0,"$m16",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m17",function($0){
if(!this.isinited)return;if(!$0)return;var $1=LzColorUtils.tohsv($0);if(!this.bordercolor){
this.setAttribute("bordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.4039))
};if(!this.interiorfillcolor){
this.setAttribute("interiorfillcolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this.interiorbordercolor){
this.setAttribute("interiorbordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.2196))
};if(!this.gradientfillstartup){
this.setAttribute("gradientfillstartup",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.1098))
};if(!this.gradientfillstopup){
this.setAttribute("gradientfillstopup",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this.gradientfillstartover){
this.setAttribute("gradientfillstartover",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.047))
};if(!this.gradientfillstopover){
this.setAttribute("gradientfillstopover",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.0039))
};if(!this.gradientfillstartdown){
this.setAttribute("gradientfillstartdown",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.0862))
};if(!this.gradientfillstopdown){
this.setAttribute("gradientfillstopdown",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.1999))
};this.draw()
},"draw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited)return;switch(this.frame){
case 1:
var $1="up";break;
case 2:
var $1="over";break;
case 3:
var $1="down";break;
case 4:
var $1="up";break;
default:
return;

};this.clear();this.globalAlpha=this.disabled?0.5:1;this.lineWidth=this.borderwidth;this.drawinteriorborder($1);this.drawgradient($1);this.drawborder()
},"drawborder",function(){
if(this.borderwidth>0){
if(!this.bordercolor)return;this.beginPath();this.rect(0,0,this.width,this.height,this.cornerradius);this.closePath();this.strokeStyle=this.bordercolor;this.stroke()
}},"$m18",function($0){},"$m19",void 0,"interiorbordercolor",void 0,"$m20",void 0,"interiorfillcolor",void 0,"$m21",void 0,"$m22",void 0,"interiorbordercolorup",void 0,"$m23",void 0,"$m24",void 0,"interiorfillcolorup",void 0,"$m25",void 0,"$m26",void 0,"interiorbordercolorover",void 0,"$m27",void 0,"$m28",void 0,"interiorfillcolorover",void 0,"$m29",void 0,"$m30",void 0,"interiorbordercolordown",void 0,"$m31",void 0,"$m32",void 0,"interiorfillcolordown",void 0,"drawinteriorborder",function($0){
switch(arguments.length){
case 0:
$0="up";

};if(!this["interiorfillcolor"+$0])return;this.beginPath();this.rect(1,1,this.width-2,this.height-2,this.cornerradius);this.closePath();this.fillStyle=this["interiorfillcolor"+$0];this.fill();if(this.borderwidth>0){
if(!this["interiorbordercolor"+$0])return;this.strokeStyle=this["interiorbordercolor"+$0];this.stroke()
}},"$m33",function($0){},"$m34",void 0,"gradientfillstartup",void 0,"$m35",function($0){},"$m36",void 0,"gradientfillstopup",void 0,"$m37",function($0){},"$m38",void 0,"gradientfillstartover",void 0,"$m39",function($0){},"$m40",void 0,"gradientfillstopover",void 0,"$m41",function($0){},"$m42",void 0,"gradientfillstartdown",void 0,"$m43",function($0){},"$m44",void 0,"gradientfillstopdown",void 0,"_resetgradientcache",function($0){
this._gradientfills=[]
},"drawgradient",function($0){
switch(arguments.length){
case 0:
$0="up";

};if(!this["gradientfillstart"+$0]||!this["gradientfillstop"+$0])return;this.beginPath();if($0=="down"){
this.rect(2,2,this.width-4,(this.height-4)*0.5)
}else{
this.rect(2,height*0.5,this.width-4,(this.height-4)*0.5)
};this.closePath();if(!this._gradientfills)this._gradientfills=[];if(!this._gradientfills[this.frame]){
var $1=this.createLinearGradient(0,Math.round(0.5*height),0,height);$1.addColorStop(0,this["gradientfillstart"+$0]);$1.addColorStop(1,this["gradientfillstop"+$0]);this._gradientfills[this.frame]=$1
};this.fillStyle=this._gradientfills[this.frame];this.fill()
}],["tagname","drawbutton","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m16",null,"onbasecolor","$m17",null,"onframe","draw",null,"oninteriorbordercolor","$m18",null,"ongradientfillstartup","$m33",null,"ongradientfillstopup","$m35",null,"ongradientfillstartover","$m37",null,"ongradientfillstopover","$m39",null,"ongradientfillstartdown","$m41",null,"ongradientfillstopdown","$m43",null,"gradientfillstartup","_resetgradientcache",null,"gradientfillstopup","_resetgradientcache",null,"gradientfillstartover","_resetgradientcache",null,"gradientfillstopover","_resetgradientcache",null,"gradientfillstartdown","_resetgradientcache",null,"gradientfillstopdown","_resetgradientcache",null],$m19:function($0){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("null"))
},$m20:function($0){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("null"))
},$m21:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m22:function(){
return [this,"interiorbordercolor"]
},$m23:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m24:function(){
return [this,"interiorfillcolor"]
},$m25:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m26:function(){
return [this,"interiorbordercolor"]
},$m27:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m28:function(){
return [this,"interiorfillcolor"]
},$m29:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m30:function(){
return [this,"interiorbordercolor"]
},$m31:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m32:function(){
return [this,"interiorfillcolor"]
},$m34:function($0){
this.setAttribute("gradientfillstartup",LzColorUtils.convertColor("null"))
},$m36:function($0){
this.setAttribute("gradientfillstopup",LzColorUtils.convertColor("null"))
},$m38:function($0){
this.setAttribute("gradientfillstartover",LzColorUtils.convertColor("null"))
},$m40:function($0){
this.setAttribute("gradientfillstopover",LzColorUtils.convertColor("null"))
},$m42:function($0){
this.setAttribute("gradientfillstartdown",LzColorUtils.convertColor("null"))
},$m44:function($0){
this.setAttribute("gradientfillstopdown",LzColorUtils.convertColor("null"))
},basecolor:new LzStyleConstraintExpr("basecolor","base-color","color"),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color"),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number"),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0),gradientfillstartdown:new LzStyleConstraintExpr("gradientfillstartdown","gradientfill-start-down","color",new LzOnceExpr("$m42")),gradientfillstartover:new LzStyleConstraintExpr("gradientfillstartover","gradientfill-start-over","color",new LzOnceExpr("$m38")),gradientfillstartup:new LzStyleConstraintExpr("gradientfillstartup","gradientfill-start-up","color",new LzOnceExpr("$m34")),gradientfillstopdown:new LzStyleConstraintExpr("gradientfillstopdown","gradientfill-stop-down","color",new LzOnceExpr("$m44")),gradientfillstopover:new LzStyleConstraintExpr("gradientfillstopover","gradientfill-stop-over","color",new LzOnceExpr("$m40")),gradientfillstopup:new LzStyleConstraintExpr("gradientfillstopup","gradientfill-stop-up","color",new LzOnceExpr("$m36")),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m19")),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","interior-border-color-down","color",new LzAlwaysExpr("$m29","$m30")),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","interior-border-color-over","color",new LzAlwaysExpr("$m25","$m26")),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","interior-border-color-up","color",new LzAlwaysExpr("$m21","$m22")),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m20")),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","interior-fill-color-down","color",new LzAlwaysExpr("$m31","$m32")),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","interior-fill-color-over","color",new LzAlwaysExpr("$m27","$m28")),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","interior-fill-color-up","color",new LzAlwaysExpr("$m23","$m24"))},$lzc$class_drawbutton.attributes)
}}})($lzc$class_drawbutton);Class.make("$lzc$class_componentfocus$basepanel",$lzc$class_basepanel,["doFocus",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.disabled)this.animate("shadowblurradius",10,500)
},"doBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.animate("shadowblurradius",0,500)
}],["attributes",new LzInheritedHash($lzc$class_basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","doFocus",null,"onblur","doBlur",null],shadowblurradius:0,shadowcolor:LzColorUtils.convertColor("0xcc"),shadowdistance:0},$lzc$class_componentfocus$basepanel.attributes)
}}})($lzc$class_componentfocus$basepanel);Class.make("$lzc$class_drawbutton$componentfocus$basepanel",$lzc$class_componentfocus$basepanel,["basecolor",void 0,"borderwidth",void 0,"bordercolor",void 0,"$m55",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m56",function($0){
with(this){
if(!this.isinited)return;if(!$0)return;var $1=LzColorUtils.tohsv($0);if(!this.bordercolor){
this.setAttribute("bordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.4039))
};if(!this.interiorfillcolor){
this.setAttribute("interiorfillcolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this.interiorbordercolor){
this.setAttribute("interiorbordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.2196))
};if(!this.gradientfillstartup){
this.setAttribute("gradientfillstartup",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.1098))
};if(!this.gradientfillstopup){
this.setAttribute("gradientfillstopup",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this.gradientfillstartover){
this.setAttribute("gradientfillstartover",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.047))
};if(!this.gradientfillstopover){
this.setAttribute("gradientfillstopover",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.0039))
};if(!this.gradientfillstartdown){
this.setAttribute("gradientfillstartdown",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.0862))
};if(!this.gradientfillstopdown){
this.setAttribute("gradientfillstopdown",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.1999))
};this.draw()
}},"draw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited)return;switch(this.frame){
case 1:
var $1="up";break;
case 2:
var $1="over";break;
case 3:
var $1="down";break;
case 4:
var $1="up";break;
default:
return;

};this.clear();this.globalAlpha=this.disabled?0.5:1;this.lineWidth=this.borderwidth;this.drawinteriorborder($1);this.drawgradient($1);this.drawborder()
},"drawborder",function(){
if(this.borderwidth>0){
if(!this.bordercolor)return;this.beginPath();this.rect(0,0,this.width,this.height,this.cornerradius);this.closePath();this.strokeStyle=this.bordercolor;this.stroke()
}},"$m57",function($0){},"$m58",void 0,"interiorbordercolor",void 0,"$m59",void 0,"interiorfillcolor",void 0,"$m60",void 0,"$m61",void 0,"interiorbordercolorup",void 0,"$m62",void 0,"$m63",void 0,"interiorfillcolorup",void 0,"$m64",void 0,"$m65",void 0,"interiorbordercolorover",void 0,"$m66",void 0,"$m67",void 0,"interiorfillcolorover",void 0,"$m68",void 0,"$m69",void 0,"interiorbordercolordown",void 0,"$m70",void 0,"$m71",void 0,"interiorfillcolordown",void 0,"drawinteriorborder",function($0){
switch(arguments.length){
case 0:
$0="up";

};if(!this["interiorfillcolor"+$0])return;this.beginPath();this.rect(1,1,this.width-2,this.height-2,this.cornerradius);this.closePath();this.fillStyle=this["interiorfillcolor"+$0];this.fill();if(this.borderwidth>0){
if(!this["interiorbordercolor"+$0])return;this.strokeStyle=this["interiorbordercolor"+$0];this.stroke()
}},"$m72",function($0){},"$m73",void 0,"gradientfillstartup",void 0,"$m74",function($0){},"$m75",void 0,"gradientfillstopup",void 0,"$m76",function($0){},"$m77",void 0,"gradientfillstartover",void 0,"$m78",function($0){},"$m79",void 0,"gradientfillstopover",void 0,"$m80",function($0){},"$m81",void 0,"gradientfillstartdown",void 0,"$m82",function($0){},"$m83",void 0,"gradientfillstopdown",void 0,"_resetgradientcache",function($0){
this._gradientfills=[]
},"drawgradient",function($0){
with(this){
switch(arguments.length){
case 0:
$0="up";

};if(!this["gradientfillstart"+$0]||!this["gradientfillstop"+$0])return;this.beginPath();if($0=="down"){
this.rect(2,2,this.width-4,(this.height-4)*0.5)
}else{
this.rect(2,height*0.5,this.width-4,(this.height-4)*0.5)
};this.closePath();if(!this._gradientfills)this._gradientfills=[];if(!this._gradientfills[this.frame]){
var $1=this.createLinearGradient(0,Math.round(0.5*height),0,height);$1.addColorStop(0,this["gradientfillstart"+$0]);$1.addColorStop(1,this["gradientfillstop"+$0]);this._gradientfills[this.frame]=$1
};this.fillStyle=this._gradientfills[this.frame];this.fill()
}}],["attributes",new LzInheritedHash($lzc$class_componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m55",null,"onbasecolor","$m56",null,"onframe","draw",null,"oninteriorbordercolor","$m57",null,"ongradientfillstartup","$m72",null,"ongradientfillstopup","$m74",null,"ongradientfillstartover","$m76",null,"ongradientfillstopover","$m78",null,"ongradientfillstartdown","$m80",null,"ongradientfillstopdown","$m82",null,"gradientfillstartup","_resetgradientcache",null,"gradientfillstopup","_resetgradientcache",null,"gradientfillstartover","_resetgradientcache",null,"gradientfillstopover","_resetgradientcache",null,"gradientfillstartdown","_resetgradientcache",null,"gradientfillstopdown","_resetgradientcache",null],$m58:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("null"))
}},$m59:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("null"))
}},$m60:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m61:function(){
return [this,"interiorbordercolor"]
},$m62:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m63:function(){
return [this,"interiorfillcolor"]
},$m64:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m65:function(){
return [this,"interiorbordercolor"]
},$m66:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m67:function(){
return [this,"interiorfillcolor"]
},$m68:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m69:function(){
return [this,"interiorbordercolor"]
},$m70:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m71:function(){
return [this,"interiorfillcolor"]
},$m73:function($0){
with(this){
this.setAttribute("gradientfillstartup",LzColorUtils.convertColor("null"))
}},$m75:function($0){
with(this){
this.setAttribute("gradientfillstopup",LzColorUtils.convertColor("null"))
}},$m77:function($0){
with(this){
this.setAttribute("gradientfillstartover",LzColorUtils.convertColor("null"))
}},$m79:function($0){
with(this){
this.setAttribute("gradientfillstopover",LzColorUtils.convertColor("null"))
}},$m81:function($0){
with(this){
this.setAttribute("gradientfillstartdown",LzColorUtils.convertColor("null"))
}},$m83:function($0){
with(this){
this.setAttribute("gradientfillstopdown",LzColorUtils.convertColor("null"))
}},basecolor:new LzStyleConstraintExpr("basecolor","base-color","color"),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color"),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number"),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0),gradientfillstartdown:new LzStyleConstraintExpr("gradientfillstartdown","gradientfill-start-down","color",new LzOnceExpr("$m81")),gradientfillstartover:new LzStyleConstraintExpr("gradientfillstartover","gradientfill-start-over","color",new LzOnceExpr("$m77")),gradientfillstartup:new LzStyleConstraintExpr("gradientfillstartup","gradientfill-start-up","color",new LzOnceExpr("$m73")),gradientfillstopdown:new LzStyleConstraintExpr("gradientfillstopdown","gradientfill-stop-down","color",new LzOnceExpr("$m83")),gradientfillstopover:new LzStyleConstraintExpr("gradientfillstopover","gradientfill-stop-over","color",new LzOnceExpr("$m79")),gradientfillstopup:new LzStyleConstraintExpr("gradientfillstopup","gradientfill-stop-up","color",new LzOnceExpr("$m75")),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m58")),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","interior-border-color-down","color",new LzAlwaysExpr("$m68","$m69")),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","interior-border-color-over","color",new LzAlwaysExpr("$m64","$m65")),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","interior-border-color-up","color",new LzAlwaysExpr("$m60","$m61")),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m59")),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","interior-fill-color-down","color",new LzAlwaysExpr("$m70","$m71")),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","interior-fill-color-over","color",new LzAlwaysExpr("$m66","$m67")),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","interior-fill-color-up","color",new LzAlwaysExpr("$m62","$m63"))},$lzc$class_drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_drawbutton$componentfocus$basepanel);Class.make("$lzc$class_buttonevents$drawbutton$componentfocus$basepanel",$lzc$class_drawbutton$componentfocus$basepanel,["mouseisover",void 0,"mouseisdown",void 0,"$m47",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m48",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.mouseisover=this.mouseisdown=false;this._updateFrame()
}},"$m49",function($0){
this.setAttribute("mouseisover",true)
},"$m50",function($0){
this.setAttribute("mouseisover",false)
},"$m51",function($0){
this.setAttribute("mouseisdown",true)
},"$m52",function($0){
this.setAttribute("mouseisdown",false)
},"$m53",function($0){
if($0==32||$0==13){
this.mouseisover=true;this.mouseisdown=true;this._updateFrame();if(this.onclick.ready)this.onclick.sendEvent()
}},"$m54",function($0){
if($0==32||$0==13){
this.mouseisover=false;this.mouseisdown=false;this._updateFrame()
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
}}],["attributes",new LzInheritedHash($lzc$class_drawbutton$componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m48","$m47","onmouseover","$m49",null,"onmouseout","$m50",null,"onmousedown","$m51",null,"onmouseup","$m52",null,"onkeydown","$m53",null,"onkeyup","$m54",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents$drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_buttonevents$drawbutton$componentfocus$basepanel);Class.make("$lzc$class_componentmodel$buttonevents$drawbutton$componentfocus$basepanel",$lzc$class_buttonevents$drawbutton$componentfocus$basepanel,["value",void 0,"disabled",void 0,"$m45",function($0){
with(this){
var $1=!disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}}},"$m46",function(){
return [this,"disabled"]
},"$lzc$set_disabled",function($0){
this.disabled=$0;this.setAttribute("focusable",!$0);this.setAttribute("clickable",!$0);if(this.ondisabled.ready){
this.ondisabled.sendEvent($0)
}}],["attributes",new LzInheritedHash($lzc$class_buttonevents$drawbutton$componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({disabled:false,focusable:new LzAlwaysExpr("$m45","$m46"),value:""},$lzc$class_componentmodel$buttonevents$drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_componentmodel$buttonevents$drawbutton$componentfocus$basepanel);Class.make("$lzc$class_boxmodel$componentmodel$buttonevents$drawbutton$componentfocus$basepanel",$lzc$class_componentmodel$buttonevents$drawbutton$componentfocus$basepanel,["construct",function($0,$1){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["construct"]||this.nextMethod(arguments.callee,"construct")).call(this,$0,$1);var $2=this.__styleinfo;$2.margin={capability:"css2boxmodel",isdimension:true,affectsoffset:true};$2.borderWidth={capability:"css2boxmodel",isdimension:true,affectsoffset:true};$2.borderColor={capability:"css2boxmodel"};$2.padding={capability:"css2boxmodel",isdimension:true,affectsoffset:true}},"margin",void 0,"onmargin",void 0,"$lzc$set_margin",function($0){
if(this.margin!=$0){
this.margin=$0;this.__widthoffset=this.__heightoffset=$0*2+this.borderwidth*2+this.padding*2;this.setCSS("margin",$0)
};if(this.onmargin.ready)this.onmargin.sendEvent($0)
},"onborderwidth",void 0,"$lzc$set_borderwidth",function($0){
if(this.borderwidth!=$0){
this.borderwidth=$0;this.__widthoffset=this.__heightoffset=this.margin*2+$0*2+this.padding*2;this.setCSS("borderWidth",$0)
};if(this.onborderwidth.ready)this.onborderwidth.sendEvent($0)
},"onbordercolor",void 0,"$lzc$set_bordercolor",function($0){
with(this){
if(this.bordercolor!=$0){
this.bordercolor=$0;this.setCSS("borderColor",LzColorUtils.torgb($0))
};if(this.onbordercolor.ready)this.onbordercolor.sendEvent($0)
}},"padding",void 0,"onpadding",void 0,"$lzc$set_padding",function($0){
if(this.padding!=$0){
this.padding=$0;this.__widthoffset=this.__heightoffset=this.margin*2+this.borderwidth*2+$0*2;this.setCSS("padding",$0)
};if(this.onpadding.ready)this.onpadding.sendEvent($0)
}],["attributes",new LzInheritedHash($lzc$class_componentmodel$buttonevents$drawbutton$componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",LzColorUtils.convertColor("0x0")),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0),margin:new LzStyleConstraintExpr("margin","margin","number",0),onbordercolor:LzDeclaredEvent,onborderwidth:LzDeclaredEvent,onmargin:LzDeclaredEvent,onpadding:LzDeclaredEvent,padding:new LzStyleConstraintExpr("padding","padding","number",0)},$lzc$class_boxmodel$componentmodel$buttonevents$drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_boxmodel$componentmodel$buttonevents$drawbutton$componentfocus$basepanel);Class.make("$lzc$class_bsbtn",$lzc$class_boxmodel$componentmodel$buttonevents$drawbutton$componentfocus$basepanel,null,["tagname","bsbtn","attributes",new LzInheritedHash($lzc$class_boxmodel$componentmodel$buttonevents$drawbutton$componentfocus$basepanel.attributes)]);Class.make("$lzc$class_m90",LzText,["$m88",function($0){
with(this){
var $1=classroot.text;if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}}},"$m89",function(){
with(this){
return [classroot,"text"]
}},"$classrootdepth",void 0],["attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_btn",$lzc$class_bsbtn,["$m84",function($0){
var $1=this.txt.height+2;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$m85",function(){
return [this.txt,"height"]
},"$m86",function($0){
var $1=this.txt.width+4;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$m87",function(){
return [this.txt,"width"]
},"text",void 0,"txt",void 0],["tagname","btn","children",[{attrs:{$classrootdepth:1,align:"center",name:"txt",text:new LzAlwaysExpr("$m88","$m89"),valign:"middle"},"class":$lzc$class_m90}],"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({height:new LzAlwaysExpr("$m84","$m85"),text:"",width:new LzAlwaysExpr("$m86","$m87")},$lzc$class_btn.attributes)
}}})($lzc$class_btn);Mixin.make("$lzc$class_drawinputtext",null,["draw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited)return;this.rect(1,1,this.width-3,this.height-5,3);this.strokeStyle=10066329;this.stroke();this.fillStyle=15921906;this.fill()
}],["tagname","drawinputtext","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","draw",null,"onheight","draw",null,"oncontext","draw",null,"onframe","draw",null]},$lzc$class_drawinputtext.attributes)
}}})($lzc$class_drawinputtext);Class.make("$lzc$class_componentfocus$inputtext",LzInputText,["doFocus",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.disabled)this.animate("shadowblurradius",10,500)
},"doBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.animate("shadowblurradius",0,500)
}],["attributes",new LzInheritedHash(LzInputText.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","doFocus",null,"onblur","doBlur",null],shadowblurradius:0,shadowcolor:LzColorUtils.convertColor("0xcc"),shadowdistance:0},$lzc$class_componentfocus$inputtext.attributes)
}}})($lzc$class_componentfocus$inputtext);Class.make("$lzc$class_drawinputtext$componentfocus$inputtext",$lzc$class_componentfocus$inputtext,["draw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited)return;this.rect(1,1,this.width-3,this.height-5,3);this.strokeStyle=10066329;this.stroke();this.fillStyle=15921906;this.fill()
}],["attributes",new LzInheritedHash($lzc$class_componentfocus$inputtext.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","draw",null,"onheight","draw",null,"oncontext","draw",null,"onframe","draw",null]},$lzc$class_drawinputtext$componentfocus$inputtext.attributes)
}}})($lzc$class_drawinputtext$componentfocus$inputtext);Class.make("$lzc$class_drawable$drawinputtext$componentfocus$inputtext",$lzc$class_drawinputtext$componentfocus$inputtext,["arc",function($0,$1,$2,$3,$4,$5){
with(this){
switch(arguments.length){
case 5:
$5=false;

};var $6=$0+$2*Math.cos($3);var $7=$1+$2*Math.sin(2*Math.PI-$3);$3*=180/Math.PI;$4*=180/Math.PI;var $8=$5==true?$4-$3-360:$4-$3;this.moveTo($6,$7);return this._drawArc($0,$1,$2,$8,$3)
}},"rect",function($0,$1,$2,$3,$4){
with(this){
switch(arguments.length){
case 4:
$4=0;

};LzKernelUtils.rect(this,$0,$1,$2,$3,$4)
}},"oval",function($0,$1,$2,$3){
with(this){
switch(arguments.length){
case 3:
$3=NaN;

};if(isNaN($3)){
$3=$2
};var $4=$2<20&&$3<20?5:8;var $5=Math.PI/($4/2);var $6=$2/Math.cos($5/2);var $7=$3/Math.cos($5/2);this.moveTo($0+$2,$1);var $8=0,$9,$a,$b,$c,$d;for(var $e=0;$e<$4;$e++){
$8+=$5;$9=$8-$5/2;$c=$0+Math.cos($9)*$6;$d=$1+Math.sin($9)*$7;$a=$0+Math.cos($8)*$2;$b=$1+Math.sin($8)*$3;this.quadraticCurveTo($c,$d,$a,$b)
};return {x:$a,y:$b}}},"_drawArc",function($0,$1,$2,$3,$4,$5){
with(this){
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
}};return {x:$7,y:$8}}},"distance",function($0,$1){
with(this){
var $2=$1.x-$0.x;var $3=$1.y-$0.y;return Math.sqrt($2*$2+$3*$3)
}},"intersection",function($0,$1,$2,$3){
var $4=($3.x-$2.x)*($0.y-$2.y)-($3.y-$2.y)*($0.x-$2.x);var $5=($3.y-$2.y)*($1.x-$0.x)-($3.x-$2.x)*($1.y-$0.y);if($5==0){
if($4==0){
return -1
}else{
return null
}};$4/=$5;return {x:$0.x+($1.x-$0.x)*$4,y:$0.y+($1.y-$0.y)*$4}},"midpoint",function($0,$1){
return {x:($0.x+$1.x)/2,y:($0.y+$1.y)/2}},"globalAlpha",void 0,"lineWidth",void 0,"lineCap",void 0,"lineJoin",void 0,"miterLimit",void 0,"strokeStyle",void 0,"fillStyle",void 0,"__globalAlpha",void 0,"__lineWidth",void 0,"__lineCap",void 0,"__lineJoin",void 0,"__miterLimit",void 0,"__strokeStyle",void 0,"__fillStyle",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.createContext()
},"$lzc$set_context",function($0){
this.beginPath();if(this.context){
this.__lineWidth=null;this.__lineCap=null;this.__lineJoin=null;this.__miterLimit=null;this.__fillStyle=null;this.__strokeStyle=null;this.__globalAlpha=null
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzc$set_context"]||this.nextMethod(arguments.callee,"$lzc$set_context")).call(this,$0)
},"__drawImageCnt",void 0,"getImage",function($0){
with(this){
var $1=lz.drawable.images;if(!$1[$0]){
var $2=$0;if($0.indexOf("http:")!=0&&$0.indexOf("https:")!=0){
$2=this.sprite.getResourceUrls($0)[0]
};var $3=new Image();$3.src=$2;$1[$0]=$3;if($2!=$0){
$1[$2]=$3
}};return $1[$0]
}},"drawImage",function($0,$1,$2,$3,$4,$5){
with(this){
var image=$0;var x=$1;var y=$2;var w=$3;var h=$4;var r=$5;if(typeof image=="string"){
image=this.getImage(image)
};if(!(image&&image.nodeType==1&&image.nodeName=="IMG")){

}else if(!image.complete){
var fname="__drawImage"+this.__drawImageCnt++;this[fname]=function(){
lz.embed.removeEventHandler(image,"load",this,fname);delete this[fname];this.drawImage(image,x,y,w,h,r)
};lz.embed.attachEventHandler(image,"load",this,fname)
}else{
var $6=r?r:0;this.context.save();this.clear();var $7=x?x:0;var $8=y?y:0;this.context.translate($7,$8);this.context.rotate($6);this.context.drawImage(image,0,0,w,h);this.context.restore()
}}},"__checkContext",function(){},"beginPath",function(){
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
}},"fill",function(){
this.__playPath();this.context.fill()
},"__updateFillStyle",function(){
with(this){
if(this.__fillStyle!=this.fillStyle){
if(this.fillStyle instanceof LzCanvasGradient){
this.fillStyle.__applyFillTo(this.context)
}else{
var $0=lz.drawable.__colorcache;var $1=$0[this.fillStyle];if($1==null){
$1=LzColorUtils.torgb(this.fillStyle);$0[this.fillStyle]=$1
};this.context.fillStyle=$1
};this.__fillStyle=this.fillStyle
}}},"__updateStyles",function(){
with(this){
var $0={lineWidth:"__lineWidth",lineCap:"__lineCap",lineJoin:"__lineJoin",miterLimit:"__miterLimit",globalAlpha:"__globalAlpha"};for(var $1 in $0){
var $2=$0[$1];var $3=this[$1];if(this[$2]!=$3){
this.context[$1]=$3;this[$2]=$3
}};if(this.__strokeStyle!=this.strokeStyle){
if(this.strokeStyle instanceof LzCanvasGradient){
this.strokeStyle.__applyStrokeTo(this.context)
}else{
var $4=lz.drawable.__colorcache;var $5=$4[this.strokeStyle];if($5==null){
$5=LzColorUtils.torgb(this.strokeStyle);$4[this.strokeStyle]=$5
};this.context.strokeStyle=$5
};this.__strokeStyle=this.strokeStyle
}}},"__playPath",function(){
if(this.__path.length==0)return;this.__updateStyles();this.__updateFillStyle();this.context.beginPath();for(var $0=0;$0<this.__path.length;$0+=1){
var $1=this.__path[$0];var $2=$1[0];if($2==0){
this.context.closePath()
}else if($2==3){
this.context.quadraticCurveTo($1[1],$1[2],$1[3],$1[4])
}else if($2==4){
this.context.bezierCurveTo($1[1],$1[2],$1[3],$1[4],$1[5],$1[6])
}else if($2==1){
this.context.moveTo($1[1],$1[2])
}else if($2==2){
this.context.lineTo($1[1],$1[2])
}}},"clipPath",function(){},"clipButton",function(){},"stroke",function(){
this.__playPath();this.context.stroke()
},"clear",function(){
this.context.clearRect(0,0,this.width,this.height)
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
},"save",function(){
this.__fillStyle=this.__strokeStyle=null;this.context.save()
},"restore",function(){
this.__fillStyle=this.__strokeStyle=null;this.context.restore()
},"fillRect",function($0,$1,$2,$3){
this.__updateFillStyle();this.context.fillRect($0,$1,$2,$3)
}],["__colorcache",{},"images",{},"attributes",new LzInheritedHash($lzc$class_drawinputtext$componentfocus$inputtext.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({__drawImageCnt:0,__fillStyle:null,__globalAlpha:null,__lineCap:null,__lineJoin:null,__lineWidth:null,__miterLimit:null,__strokeStyle:null,fillStyle:"#000000",globalAlpha:1,lineCap:"round",lineJoin:"round",lineWidth:1,miterLimit:3,strokeStyle:"#000000"},$lzc$class_drawable$drawinputtext$componentfocus$inputtext.attributes)
}}})($lzc$class_drawable$drawinputtext$componentfocus$inputtext);Class.make("$lzc$class_inpt",$lzc$class_drawable$drawinputtext$componentfocus$inputtext,null,["tagname","inpt","attributes",new LzInheritedHash($lzc$class_drawable$drawinputtext$componentfocus$inputtext.attributes)]);(function(){
var $0=LzCSSStyle,$1=LzCSSStyleRule;$0._addRule(new $1("basepanel",{"base-color":15921906,"border-width":0.5,"corner-radius":3}))
})();Class.make("$lzc$class_m93",$lzc$class_btn,["$m91",function($0){
this.animate("width",100,500)
}],["children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);Class.make("$lzc$class_m94",$lzc$class_btn,["$m92",function($0){
this.animate("width",100,500)
}],["children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);canvas.LzInstantiateView({attrs:{spacing:10,x:100,y:100},children:[{attrs:{height:50,width:50},"class":$lzc$class_bsbtn},{attrs:{disabled:true,height:50,width:50},"class":$lzc$class_bsbtn},{attrs:{$delegates:["onclick","$m91",null],clickable:true,text:"ok"},"class":$lzc$class_m93},{attrs:{$delegates:["onclick","$m92",null],clickable:true,text:"cancel"},"class":$lzc$class_m94},{attrs:{text:"Hey!",width:100},"class":$lzc$class_inpt},{attrs:{multiline:true,text:"Hey! this text should wrap",width:100},"class":$lzc$class_inpt}],"class":$lzc$class_vbox},10);lz["simplelayout"]=$lzc$class_simplelayout;lz["vbox"]=$lzc$class_vbox;lz["drawable"]=$lzc$class_drawable;lz["drawview"]=$lzc$class_drawview;lz["basepanel"]=$lzc$class_basepanel;lz["componentmodel"]=$lzc$class_componentmodel;lz["componentfocus"]=$lzc$class_componentfocus;lz["boxmodel"]=$lzc$class_boxmodel;lz["buttonevents"]=$lzc$class_buttonevents;lz["drawbutton"]=$lzc$class_drawbutton;lz["bsbtn"]=$lzc$class_bsbtn;lz["btn"]=$lzc$class_btn;lz["drawinputtext"]=$lzc$class_drawinputtext;lz["inpt"]=$lzc$class_inpt;canvas.initDone();