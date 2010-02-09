canvas=new LzCanvas(null,{__LZproxied:"false",appbuilddate:"2010-02-09T01:50:04Z",bgcolor:16777215,embedfonts:true,font:"Helvetica,Sans",fontname:"Helvetica,Sans",fontsize:12,fontstyle:"plain",height:"100%",lpsbuild:"15558 /Users/maxcarlson/openlaszlo/trunk-clean",lpsbuilddate:"2010-01-29T20:34:49Z",lpsrelease:"Latest",lpsversion:"4.8.x",runtime:"dhtml",width:"100%"});Class.make("$lzc$class_simplelayout",LzLayout,["axis",void 0,"$lzc$set_axis",function($0){
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
return {x:($0.x+$1.x)/2,y:($0.y+$1.y)/2}},"__globalAlpha",void 0,"__lineWidth",void 0,"__lineCap",void 0,"__lineJoin",void 0,"__miterLimit",void 0,"__strokeStyle",void 0,"__fillStyle",void 0,"$lzc$set_context",function($0){
this.beginPath();if(this.context){
this.__lineWidth=null;this.__lineCap=null;this.__lineJoin=null;this.__miterLimit=null;this.__fillStyle=null;this.__strokeStyle=null;this.__globalAlpha=null
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzc$set_context"]||this.nextMethod(arguments.callee,"$lzc$set_context")).call(this,$0)
},"globalAlpha",void 0,"lineWidth",void 0,"lineCap",void 0,"lineJoin",void 0,"miterLimit",void 0,"strokeStyle",void 0,"fillStyle",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);if(!this.context)this.createContext()
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
LzNode.mergeAttributes({__drawImageCnt:0,__fillStyle:null,__globalAlpha:null,__lineCap:null,__lineJoin:null,__lineWidth:null,__miterLimit:null,__strokeStyle:null,fillStyle:LzColorUtils.convertColor("0x0"),globalAlpha:1,lineCap:"round",lineJoin:"round",lineWidth:1,miterLimit:3,strokeStyle:LzColorUtils.convertColor("0x0"),text:"/** @access private */ /** @access private */ /** @access private */ /** @access private */ /** @access private */ /** @access private */ /** @access private */ /** @access private */ /** called when the context has been created @access private */ // hash of image resources for drawImage"},$lzc$class_drawable.attributes)
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
return {x:($0.x+$1.x)/2,y:($0.y+$1.y)/2}},"__globalAlpha",void 0,"__lineWidth",void 0,"__lineCap",void 0,"__lineJoin",void 0,"__miterLimit",void 0,"__strokeStyle",void 0,"__fillStyle",void 0,"$lzc$set_context",function($0){
this.beginPath();if(this.context){
this.__lineWidth=null;this.__lineCap=null;this.__lineJoin=null;this.__miterLimit=null;this.__fillStyle=null;this.__strokeStyle=null;this.__globalAlpha=null
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzc$set_context"]||this.nextMethod(arguments.callee,"$lzc$set_context")).call(this,$0)
},"globalAlpha",void 0,"lineWidth",void 0,"lineCap",void 0,"lineJoin",void 0,"miterLimit",void 0,"strokeStyle",void 0,"fillStyle",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);if(!this.context)this.createContext()
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
LzNode.mergeAttributes({__drawImageCnt:0,__fillStyle:null,__globalAlpha:null,__lineCap:null,__lineJoin:null,__lineWidth:null,__miterLimit:null,__strokeStyle:null,fillStyle:LzColorUtils.convertColor("0x0"),globalAlpha:1,lineCap:"round",lineJoin:"round",lineWidth:1,miterLimit:3,strokeStyle:LzColorUtils.convertColor("0x0")},$lzc$class_drawable$view.attributes)
}}})($lzc$class_drawable$view);Class.make("$lzc$class_drawview",$lzc$class_drawable$view,null,["tagname","drawview","attributes",new LzInheritedHash($lzc$class_drawable$view.attributes)]);Class.make("$lzc$class_basepanel",$lzc$class_drawview,["borderwidth",void 0,"bordercolor",void 0,"interiorbordercolor",void 0,"interiorfillcolor",void 0,"lockredraw",void 0,"redraw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited||this.lockredraw)return;this.clear();this.draw()
},"draw",function(){
return false
}],["tagname","basepanel","attributes",new LzInheritedHash($lzc$class_drawview.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","redraw",null,"onheight","redraw",null,"oncontext","redraw",null],bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color"),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color"),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color"),lockredraw:false},$lzc$class_basepanel.attributes)
}}})($lzc$class_basepanel);Mixin.make("$lzc$class_componentmodel",null,["value",void 0,"disabled",void 0,"$m6",function($0){
with(this){
var $1=!disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}}},"$m7",function(){
return [this,"disabled"]
},"$m8",function($0){
with(this){
var $1=!disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}}},"$m9",function(){
return [this,"disabled"]
}],["tagname","componentmodel","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("$m8","$m9"),disabled:false,focusable:new LzAlwaysExpr("$m6","$m7"),value:""},$lzc$class_componentmodel.attributes)
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
}}})($lzc$class_componentfocus);Mixin.make("$lzc$class_applybasecolor",null,["basecolor",void 0,"$m10",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m11",function($0){
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
};this.redraw()
}],["tagname","applybasecolor","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m10",null,"onbasecolor","$m11",null],basecolor:new LzStyleConstraintExpr("basecolor","base-color","color")},$lzc$class_applybasecolor.attributes)
}}})($lzc$class_applybasecolor);Mixin.make("$lzc$class_boxmodel",null,["construct",function($0,$1){
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
}}})($lzc$class_boxmodel);Mixin.make("$lzc$class_buttonevents",null,["mouseisover",void 0,"mouseisdown",void 0,"$m12",function(){
var $0=lz.ModeManager;return $0
},"$m13",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m14",function($0){
this.setAttribute("mouseisover",true)
},"$m15",function($0){
this.setAttribute("mouseisover",false)
},"$m16",function($0){
this.setAttribute("mouseisdown",true)
},"$m17",function($0){
this.setAttribute("mouseisdown",false)
},"$m18",function($0){
this.onmouseover.sendEvent()
},"$m19",function($0){
this.onmouseout.sendEvent()
},"$m20",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m21",function($0){
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
}}],["tagname","buttonevents","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m13","$m12","onmouseover","$m14",null,"onmouseout","$m15",null,"onmousedown","$m16",null,"onmouseup","$m17",null,"onfocus","$m18",null,"onblur","$m19",null,"onkeydown","$m20",null,"onkeyup","$m21",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents.attributes)
}}})($lzc$class_buttonevents);Mixin.make("$lzc$class_mousedownrepeater",null,["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__mousestillDownDelegate=new LzDelegate(this,"__ismousestilldown")
},"__ismousestilldown",function($0){
var $1=$0-this.__mousedowntime;this.__mousedowntime=$0;if(this.mouseisdown){
var $2;if($1>600){
$2=this.__mousedowninitialinterval
}else{
$2=this.__mousedownrepeatinterval;this.onmousestilldown.sendEvent()
};lz.Timer.resetTimer(this.__mousestillDownDelegate,$2)
}},"$m22",function($0){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
},"$m23",function($0){
lz.Timer.removeTimer(this.__mousestillDownDelegate)
}],["tagname","mousedownrepeater","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousedown","$m22",null,"onmouseup","$m23",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater.attributes)
}}})($lzc$class_mousedownrepeater);Mixin.make("$lzc$class_drawbutton",null,["vertical",void 0,"mousestate",void 0,"$m24",function($0){
var $1="up";switch($0){
case 2:
$1="over";break;
case 3:
$1="down";break;

};if(this.mousestate!=$1){
this.setAttribute("mousestate",$1);this.redraw()
}},"draw",function(){
this.globalAlpha=this.disabled?0.5:1;this.lineWidth=this.borderwidth;this.drawinteriorborder(this);this.drawgradient(this);this.drawborder(this)
},"drawborder",function($0){
if(this.borderwidth>0){
if(!this.bordercolor)return;$0.beginPath();$0.rect(0,0,this.width,this.height,this.cornerradius);$0.closePath();$0.strokeStyle=this.bordercolor;$0.stroke()
}},"$m25",function($0){},"$m26",void 0,"interiorbordercolor",void 0,"$m27",void 0,"interiorfillcolor",void 0,"$m28",void 0,"$m29",void 0,"interiorbordercolorup",void 0,"$m30",void 0,"$m31",void 0,"interiorfillcolorup",void 0,"$m32",void 0,"$m33",void 0,"interiorbordercolorover",void 0,"$m34",void 0,"$m35",void 0,"interiorfillcolorover",void 0,"$m36",void 0,"$m37",void 0,"interiorbordercolordown",void 0,"$m38",void 0,"$m39",void 0,"interiorfillcolordown",void 0,"drawinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate])return;$0.beginPath();$0.rect(1,1,this.width-2,this.height-2,this.cornerradius);$0.closePath();$0.fillStyle=this["interiorfillcolor"+this.mousestate];$0.fill();if(this.borderwidth>0){
if(!this["interiorbordercolor"+this.mousestate])return;$0.strokeStyle=this["interiorbordercolor"+this.mousestate];$0.stroke()
}},"$m40",void 0,"gradientfillstartup",void 0,"$m41",void 0,"gradientfillstopup",void 0,"$m42",void 0,"gradientfillstartover",void 0,"$m43",void 0,"gradientfillstopover",void 0,"$m44",void 0,"gradientfillstartdown",void 0,"$m45",void 0,"gradientfillstopdown",void 0,"__resetgradientcache",function($0){
this._gradientfills=[]
},"drawgradient",function($0){
if(!this["gradientfillstart"+this.mousestate]||!this["gradientfillstop"+this.mousestate])return;$0.beginPath();var $1=1;var $2=this.width-$1*2;var $3=this.height-$1*2;if(this.mousestate=="down"){
if(this.vertical){
$0.rect($1,$1,$2*0.5,$3)
}else{
$0.rect($1,$1,$2,$3*0.5)
}}else{
if(this.vertical){
$0.rect($1,$1,$2*0.5,$3)
}else{
$0.rect($1,$3*0.5,$2,$3*0.5)
}};if(!this._gradientfills)this._gradientfills=[];if(!this._gradientfills[this.frame]){
if(this.vertical){
var $4=$0.createLinearGradient(0,0,$2,0)
}else{
var $4=$0.createLinearGradient(0,Math.round(0.5*$3),0,$3)
};$4.addColorStop(0,this["gradientfillstart"+this.mousestate]);$4.addColorStop(1,this["gradientfillstop"+this.mousestate]);this._gradientfills[this.frame]=$4
};$0.fillStyle=this._gradientfills[this.frame];$0.fill()
}],["tagname","drawbutton","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onframe","$m24",null,"oninteriorbordercolor","$m25",null,"ongradientfillstartup","__resetgradientcache",null,"ongradientfillstopup","__resetgradientcache",null,"ongradientfillstartover","__resetgradientcache",null,"ongradientfillstopover","__resetgradientcache",null,"ongradientfillstartdown","__resetgradientcache",null,"ongradientfillstopdown","__resetgradientcache",null,"ongradientsideways","__resetgradientcache",null],$m26:function($0){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("null"))
},$m27:function($0){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("null"))
},$m28:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m29:function(){
return [this,"interiorbordercolor"]
},$m30:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m31:function(){
return [this,"interiorfillcolor"]
},$m32:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m33:function(){
return [this,"interiorbordercolor"]
},$m34:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m35:function(){
return [this,"interiorfillcolor"]
},$m36:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m37:function(){
return [this,"interiorbordercolor"]
},$m38:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m39:function(){
return [this,"interiorfillcolor"]
},$m40:function($0){
this.setAttribute("gradientfillstartup",LzColorUtils.convertColor("null"))
},$m41:function($0){
this.setAttribute("gradientfillstopup",LzColorUtils.convertColor("null"))
},$m42:function($0){
this.setAttribute("gradientfillstartover",LzColorUtils.convertColor("null"))
},$m43:function($0){
this.setAttribute("gradientfillstopover",LzColorUtils.convertColor("null"))
},$m44:function($0){
this.setAttribute("gradientfillstartdown",LzColorUtils.convertColor("null"))
},$m45:function($0){
this.setAttribute("gradientfillstopdown",LzColorUtils.convertColor("null"))
},gradientfillstartdown:new LzStyleConstraintExpr("gradientfillstartdown","gradientfill-start-down","color",new LzOnceExpr("$m44")),gradientfillstartover:new LzStyleConstraintExpr("gradientfillstartover","gradientfill-start-over","color",new LzOnceExpr("$m42")),gradientfillstartup:new LzStyleConstraintExpr("gradientfillstartup","gradientfill-start-up","color",new LzOnceExpr("$m40")),gradientfillstopdown:new LzStyleConstraintExpr("gradientfillstopdown","gradientfill-stop-down","color",new LzOnceExpr("$m45")),gradientfillstopover:new LzStyleConstraintExpr("gradientfillstopover","gradientfill-stop-over","color",new LzOnceExpr("$m43")),gradientfillstopup:new LzStyleConstraintExpr("gradientfillstopup","gradientfill-stop-up","color",new LzOnceExpr("$m41")),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m26")),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","interior-border-color-down","color",new LzAlwaysExpr("$m36","$m37")),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","interior-border-color-over","color",new LzAlwaysExpr("$m32","$m33")),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","interior-border-color-up","color",new LzAlwaysExpr("$m28","$m29")),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m27")),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","interior-fill-color-down","color",new LzAlwaysExpr("$m38","$m39")),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","interior-fill-color-over","color",new LzAlwaysExpr("$m34","$m35")),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","interior-fill-color-up","color",new LzAlwaysExpr("$m30","$m31")),mousestate:"up",vertical:false},$lzc$class_drawbutton.attributes)
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
}}})($lzc$class_componentfocus$basepanel);Class.make("$lzc$class_drawbutton$componentfocus$basepanel",$lzc$class_componentfocus$basepanel,["vertical",void 0,"mousestate",void 0,"$m62",function($0){
var $1="up";switch($0){
case 2:
$1="over";break;
case 3:
$1="down";break;

};if(this.mousestate!=$1){
this.setAttribute("mousestate",$1);this.redraw()
}},"draw",function(){
this.globalAlpha=this.disabled?0.5:1;this.lineWidth=this.borderwidth;this.drawinteriorborder(this);this.drawgradient(this);this.drawborder(this)
},"drawborder",function($0){
if(this.borderwidth>0){
if(!this.bordercolor)return;$0.beginPath();$0.rect(0,0,this.width,this.height,this.cornerradius);$0.closePath();$0.strokeStyle=this.bordercolor;$0.stroke()
}},"$m63",function($0){},"$m64",void 0,"$m65",void 0,"$m66",void 0,"$m67",void 0,"interiorbordercolorup",void 0,"$m68",void 0,"$m69",void 0,"interiorfillcolorup",void 0,"$m70",void 0,"$m71",void 0,"interiorbordercolorover",void 0,"$m72",void 0,"$m73",void 0,"interiorfillcolorover",void 0,"$m74",void 0,"$m75",void 0,"interiorbordercolordown",void 0,"$m76",void 0,"$m77",void 0,"interiorfillcolordown",void 0,"drawinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate])return;$0.beginPath();$0.rect(1,1,this.width-2,this.height-2,this.cornerradius);$0.closePath();$0.fillStyle=this["interiorfillcolor"+this.mousestate];$0.fill();if(this.borderwidth>0){
if(!this["interiorbordercolor"+this.mousestate])return;$0.strokeStyle=this["interiorbordercolor"+this.mousestate];$0.stroke()
}},"$m78",void 0,"gradientfillstartup",void 0,"$m79",void 0,"gradientfillstopup",void 0,"$m80",void 0,"gradientfillstartover",void 0,"$m81",void 0,"gradientfillstopover",void 0,"$m82",void 0,"gradientfillstartdown",void 0,"$m83",void 0,"gradientfillstopdown",void 0,"__resetgradientcache",function($0){
this._gradientfills=[]
},"drawgradient",function($0){
with(this){
if(!this["gradientfillstart"+this.mousestate]||!this["gradientfillstop"+this.mousestate])return;$0.beginPath();var $1=1;var $2=this.width-$1*2;var $3=this.height-$1*2;if(this.mousestate=="down"){
if(this.vertical){
$0.rect($1,$1,$2*0.5,$3)
}else{
$0.rect($1,$1,$2,$3*0.5)
}}else{
if(this.vertical){
$0.rect($1,$1,$2*0.5,$3)
}else{
$0.rect($1,$3*0.5,$2,$3*0.5)
}};if(!this._gradientfills)this._gradientfills=[];if(!this._gradientfills[this.frame]){
if(this.vertical){
var $4=$0.createLinearGradient(0,0,$2,0)
}else{
var $4=$0.createLinearGradient(0,Math.round(0.5*$3),0,$3)
};$4.addColorStop(0,this["gradientfillstart"+this.mousestate]);$4.addColorStop(1,this["gradientfillstop"+this.mousestate]);this._gradientfills[this.frame]=$4
};$0.fillStyle=this._gradientfills[this.frame];$0.fill()
}}],["attributes",new LzInheritedHash($lzc$class_componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onframe","$m62",null,"oninteriorbordercolor","$m63",null,"ongradientfillstartup","__resetgradientcache",null,"ongradientfillstopup","__resetgradientcache",null,"ongradientfillstartover","__resetgradientcache",null,"ongradientfillstopover","__resetgradientcache",null,"ongradientfillstartdown","__resetgradientcache",null,"ongradientfillstopdown","__resetgradientcache",null,"ongradientsideways","__resetgradientcache",null],$m64:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("null"))
}},$m65:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("null"))
}},$m66:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m67:function(){
return [this,"interiorbordercolor"]
},$m68:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m69:function(){
return [this,"interiorfillcolor"]
},$m70:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m71:function(){
return [this,"interiorbordercolor"]
},$m72:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m73:function(){
return [this,"interiorfillcolor"]
},$m74:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m75:function(){
return [this,"interiorbordercolor"]
},$m76:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m77:function(){
return [this,"interiorfillcolor"]
},$m78:function($0){
with(this){
this.setAttribute("gradientfillstartup",LzColorUtils.convertColor("null"))
}},$m79:function($0){
with(this){
this.setAttribute("gradientfillstopup",LzColorUtils.convertColor("null"))
}},$m80:function($0){
with(this){
this.setAttribute("gradientfillstartover",LzColorUtils.convertColor("null"))
}},$m81:function($0){
with(this){
this.setAttribute("gradientfillstopover",LzColorUtils.convertColor("null"))
}},$m82:function($0){
with(this){
this.setAttribute("gradientfillstartdown",LzColorUtils.convertColor("null"))
}},$m83:function($0){
with(this){
this.setAttribute("gradientfillstopdown",LzColorUtils.convertColor("null"))
}},gradientfillstartdown:new LzStyleConstraintExpr("gradientfillstartdown","gradientfill-start-down","color",new LzOnceExpr("$m82")),gradientfillstartover:new LzStyleConstraintExpr("gradientfillstartover","gradientfill-start-over","color",new LzOnceExpr("$m80")),gradientfillstartup:new LzStyleConstraintExpr("gradientfillstartup","gradientfill-start-up","color",new LzOnceExpr("$m78")),gradientfillstopdown:new LzStyleConstraintExpr("gradientfillstopdown","gradientfill-stop-down","color",new LzOnceExpr("$m83")),gradientfillstopover:new LzStyleConstraintExpr("gradientfillstopover","gradientfill-stop-over","color",new LzOnceExpr("$m81")),gradientfillstopup:new LzStyleConstraintExpr("gradientfillstopup","gradientfill-stop-up","color",new LzOnceExpr("$m79")),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m64")),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","interior-border-color-down","color",new LzAlwaysExpr("$m74","$m75")),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","interior-border-color-over","color",new LzAlwaysExpr("$m70","$m71")),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","interior-border-color-up","color",new LzAlwaysExpr("$m66","$m67")),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m65")),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","interior-fill-color-down","color",new LzAlwaysExpr("$m76","$m77")),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","interior-fill-color-over","color",new LzAlwaysExpr("$m72","$m73")),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","interior-fill-color-up","color",new LzAlwaysExpr("$m68","$m69")),mousestate:"up",vertical:false},$lzc$class_drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_drawbutton$componentfocus$basepanel);Class.make("$lzc$class_applybasecolor$drawbutton$componentfocus$basepanel",$lzc$class_drawbutton$componentfocus$basepanel,["basecolor",void 0,"$m60",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m61",function($0){
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
};this.redraw()
}}],["attributes",new LzInheritedHash($lzc$class_drawbutton$componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m60",null,"onbasecolor","$m61",null],basecolor:new LzStyleConstraintExpr("basecolor","base-color","color")},$lzc$class_applybasecolor$drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_applybasecolor$drawbutton$componentfocus$basepanel);Class.make("$lzc$class_buttonevents$applybasecolor$drawbutton$componentfocus$basepanel",$lzc$class_applybasecolor$drawbutton$componentfocus$basepanel,["mouseisover",void 0,"mouseisdown",void 0,"$m50",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m51",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m52",function($0){
this.setAttribute("mouseisover",true)
},"$m53",function($0){
this.setAttribute("mouseisover",false)
},"$m54",function($0){
this.setAttribute("mouseisdown",true)
},"$m55",function($0){
this.setAttribute("mouseisdown",false)
},"$m56",function($0){
this.onmouseover.sendEvent()
},"$m57",function($0){
this.onmouseout.sendEvent()
},"$m58",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m59",function($0){
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
}}],["attributes",new LzInheritedHash($lzc$class_applybasecolor$drawbutton$componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m51","$m50","onmouseover","$m52",null,"onmouseout","$m53",null,"onmousedown","$m54",null,"onmouseup","$m55",null,"onfocus","$m56",null,"onblur","$m57",null,"onkeydown","$m58",null,"onkeyup","$m59",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents$applybasecolor$drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_buttonevents$applybasecolor$drawbutton$componentfocus$basepanel);Class.make("$lzc$class_componentmodel$buttonevents$applybasecolor$drawbutton$componentfocus$basepanel",$lzc$class_buttonevents$applybasecolor$drawbutton$componentfocus$basepanel,["value",void 0,"disabled",void 0,"$m46",function($0){
with(this){
var $1=!disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}}},"$m47",function(){
return [this,"disabled"]
},"$m48",function($0){
with(this){
var $1=!disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}}},"$m49",function(){
return [this,"disabled"]
}],["attributes",new LzInheritedHash($lzc$class_buttonevents$applybasecolor$drawbutton$componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("$m48","$m49"),disabled:false,focusable:new LzAlwaysExpr("$m46","$m47"),value:""},$lzc$class_componentmodel$buttonevents$applybasecolor$drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_componentmodel$buttonevents$applybasecolor$drawbutton$componentfocus$basepanel);Class.make("$lzc$class_boxmodel$componentmodel$buttonevents$applybasecolor$drawbutton$componentfocus$basepanel",$lzc$class_componentmodel$buttonevents$applybasecolor$drawbutton$componentfocus$basepanel,["construct",function($0,$1){
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
}],["attributes",new LzInheritedHash($lzc$class_componentmodel$buttonevents$applybasecolor$drawbutton$componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",LzColorUtils.convertColor("0x0")),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0),margin:new LzStyleConstraintExpr("margin","margin","number",0),onbordercolor:LzDeclaredEvent,onborderwidth:LzDeclaredEvent,onmargin:LzDeclaredEvent,onpadding:LzDeclaredEvent,padding:new LzStyleConstraintExpr("padding","padding","number",0)},$lzc$class_boxmodel$componentmodel$buttonevents$applybasecolor$drawbutton$componentfocus$basepanel.attributes)
}}})($lzc$class_boxmodel$componentmodel$buttonevents$applybasecolor$drawbutton$componentfocus$basepanel);Class.make("$lzc$class_bsbtn",$lzc$class_boxmodel$componentmodel$buttonevents$applybasecolor$drawbutton$componentfocus$basepanel,null,["tagname","bsbtn","attributes",new LzInheritedHash($lzc$class_boxmodel$componentmodel$buttonevents$applybasecolor$drawbutton$componentfocus$basepanel.attributes)]);Class.make("$lzc$class_m90",LzText,["$m88",function($0){
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
return {x:($0.x+$1.x)/2,y:($0.y+$1.y)/2}},"__globalAlpha",void 0,"__lineWidth",void 0,"__lineCap",void 0,"__lineJoin",void 0,"__miterLimit",void 0,"__strokeStyle",void 0,"__fillStyle",void 0,"$lzc$set_context",function($0){
this.beginPath();if(this.context){
this.__lineWidth=null;this.__lineCap=null;this.__lineJoin=null;this.__miterLimit=null;this.__fillStyle=null;this.__strokeStyle=null;this.__globalAlpha=null
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzc$set_context"]||this.nextMethod(arguments.callee,"$lzc$set_context")).call(this,$0)
},"globalAlpha",void 0,"lineWidth",void 0,"lineCap",void 0,"lineJoin",void 0,"miterLimit",void 0,"strokeStyle",void 0,"fillStyle",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);if(!this.context)this.createContext()
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
LzNode.mergeAttributes({__drawImageCnt:0,__fillStyle:null,__globalAlpha:null,__lineCap:null,__lineJoin:null,__lineWidth:null,__miterLimit:null,__strokeStyle:null,fillStyle:LzColorUtils.convertColor("0x0"),globalAlpha:1,lineCap:"round",lineJoin:"round",lineWidth:1,miterLimit:3,strokeStyle:LzColorUtils.convertColor("0x0")},$lzc$class_drawable$drawinputtext$componentfocus$inputtext.attributes)
}}})($lzc$class_drawable$drawinputtext$componentfocus$inputtext);Class.make("$lzc$class_inpt",$lzc$class_drawable$drawinputtext$componentfocus$inputtext,null,["tagname","inpt","attributes",new LzInheritedHash($lzc$class_drawable$drawinputtext$componentfocus$inputtext.attributes)]);Class.make("$lzc$class_mousedownrepeater$componentfocus$basepanel",$lzc$class_componentfocus$basepanel,["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__mousestillDownDelegate=new LzDelegate(this,"__ismousestilldown")
}},"__ismousestilldown",function($0){
with(this){
var $1=$0-this.__mousedowntime;this.__mousedowntime=$0;if(this.mouseisdown){
var $2;if($1>600){
$2=this.__mousedowninitialinterval
}else{
$2=this.__mousedownrepeatinterval;this.onmousestilldown.sendEvent()
};lz.Timer.resetTimer(this.__mousestillDownDelegate,$2)
}}},"$m109",function($0){
with(this){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
}},"$m110",function($0){
with(this){
lz.Timer.removeTimer(this.__mousestillDownDelegate)
}}],["attributes",new LzInheritedHash($lzc$class_componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousedown","$m109",null,"onmouseup","$m110",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater$componentfocus$basepanel.attributes)
}}})($lzc$class_mousedownrepeater$componentfocus$basepanel);Class.make("$lzc$class_buttonevents$mousedownrepeater$componentfocus$basepanel",$lzc$class_mousedownrepeater$componentfocus$basepanel,["mouseisover",void 0,"mouseisdown",void 0,"$m99",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m100",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m101",function($0){
this.setAttribute("mouseisover",true)
},"$m102",function($0){
this.setAttribute("mouseisover",false)
},"$m103",function($0){
this.setAttribute("mouseisdown",true)
},"$m104",function($0){
this.setAttribute("mouseisdown",false)
},"$m105",function($0){
this.onmouseover.sendEvent()
},"$m106",function($0){
this.onmouseout.sendEvent()
},"$m107",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m108",function($0){
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
}}],["attributes",new LzInheritedHash($lzc$class_mousedownrepeater$componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m100","$m99","onmouseover","$m101",null,"onmouseout","$m102",null,"onmousedown","$m103",null,"onmouseup","$m104",null,"onfocus","$m105",null,"onblur","$m106",null,"onkeydown","$m107",null,"onkeyup","$m108",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents$mousedownrepeater$componentfocus$basepanel.attributes)
}}})($lzc$class_buttonevents$mousedownrepeater$componentfocus$basepanel);Class.make("$lzc$class_applybasecolor$buttonevents$mousedownrepeater$componentfocus$basepanel",$lzc$class_buttonevents$mousedownrepeater$componentfocus$basepanel,["basecolor",void 0,"$m97",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m98",function($0){
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
};this.redraw()
}}],["attributes",new LzInheritedHash($lzc$class_buttonevents$mousedownrepeater$componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m97",null,"onbasecolor","$m98",null],basecolor:new LzStyleConstraintExpr("basecolor","base-color","color")},$lzc$class_applybasecolor$buttonevents$mousedownrepeater$componentfocus$basepanel.attributes)
}}})($lzc$class_applybasecolor$buttonevents$mousedownrepeater$componentfocus$basepanel);Class.make("$lzc$class_scrlstepbtn",$lzc$class_applybasecolor$buttonevents$mousedownrepeater$componentfocus$basepanel,["$m91",function($0){
var $1=this.width;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$m92",function(){
return [this,"width"]
},"$m93",function($0){
this.animate("opacity",$0?0.8:0.1,200);this.classroot.setAttribute("activated",$0)
},"direction",void 0,"$m94",function($0){
this.classroot.step(this.direction)
},"$m95",function($0){
this.classroot.step(this.direction)
},"$m96",function($0){
if($0==37||$0==38){
this.classroot.step(-1)
}else if($0==39||$0==40){
this.classroot.step(1)
}},"draw",function(){
this.beginPath();var $0=2;var $1=2;var $2=this.width-2;var $3=this.height-2;if(this.direction<0){
this.moveTo($0,$3);this.lineTo(($2+$0)*0.5,$1);this.lineTo($2,$3);this.moveTo($0,$3)
}else{
this.moveTo($0,$1);this.lineTo(($2+$0)*0.5,$3);this.lineTo($2,$1);this.moveTo($0,$1)
};this.globalAlpha=1;this.lineWidth=this.borderwidth;this.lineStyle=this.interiorbordercolor;this.fill()
}],["tagname","scrlstepbtn","attributes",new LzInheritedHash($lzc$class_applybasecolor$buttonevents$mousedownrepeater$componentfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseisover","$m93",null,"onmousedown","$m94",null,"onmousestilldown","$m95",null,"onkeydown","$m96",null],clickable:true,direction:1,focusable:true,height:new LzAlwaysExpr("$m91","$m92"),opacity:0.1},$lzc$class_scrlstepbtn.attributes)
}}})($lzc$class_scrlstepbtn);Class.make("$lzc$class_mousedownrepeater$view",LzView,["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__mousestillDownDelegate=new LzDelegate(this,"__ismousestilldown")
}},"__ismousestilldown",function($0){
with(this){
var $1=$0-this.__mousedowntime;this.__mousedowntime=$0;if(this.mouseisdown){
var $2;if($1>600){
$2=this.__mousedowninitialinterval
}else{
$2=this.__mousedownrepeatinterval;this.onmousestilldown.sendEvent()
};lz.Timer.resetTimer(this.__mousestillDownDelegate,$2)
}}},"$m124",function($0){
with(this){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
}},"$m125",function($0){
with(this){
lz.Timer.removeTimer(this.__mousestillDownDelegate)
}}],["attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousedown","$m124",null,"onmouseup","$m125",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater$view.attributes)
}}})($lzc$class_mousedownrepeater$view);Class.make("$lzc$class_buttonevents$mousedownrepeater$view",$lzc$class_mousedownrepeater$view,["mouseisover",void 0,"mouseisdown",void 0,"$m114",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m115",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m116",function($0){
this.setAttribute("mouseisover",true)
},"$m117",function($0){
this.setAttribute("mouseisover",false)
},"$m118",function($0){
this.setAttribute("mouseisdown",true)
},"$m119",function($0){
this.setAttribute("mouseisdown",false)
},"$m120",function($0){
this.onmouseover.sendEvent()
},"$m121",function($0){
this.onmouseout.sendEvent()
},"$m122",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m123",function($0){
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
}}],["attributes",new LzInheritedHash($lzc$class_mousedownrepeater$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m115","$m114","onmouseover","$m116",null,"onmouseout","$m117",null,"onmousedown","$m118",null,"onmouseup","$m119",null,"onfocus","$m120",null,"onblur","$m121",null,"onkeydown","$m122",null,"onkeyup","$m123",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents$mousedownrepeater$view.attributes)
}}})($lzc$class_buttonevents$mousedownrepeater$view);Class.make("$lzc$class_scrltrk",$lzc$class_buttonevents$mousedownrepeater$view,["direction",void 0,"$m111",function($0){
this.classroot.setAttribute("activated",$0)
},"$m112",function($0){
this.classroot.page(this.direction)
},"$m113",function($0){
this.classroot.page(this.direction)
}],["tagname","scrltrk","attributes",new LzInheritedHash($lzc$class_buttonevents$mousedownrepeater$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseisover","$m111",null,"onmousedown","$m112",null,"onmousestilldown","$m113",null],clickable:true,direction:1},$lzc$class_scrltrk.attributes)
}}})($lzc$class_scrltrk);Class.make("$lzc$class_scrlthmb",$lzc$class_bsbtn,["$m126",function($0){
this.classroot.setAttribute("activated",$0)
},"target",void 0,"axis",void 0,"trackscroll",void 0,"targetscroll",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.classroot.thumb=this
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
}}],["tagname","scrlthmb","children",[{attrs:{$classrootdepth:1,$m127:function($0){
this.setAttribute("doffset",this.getMouse("y"))
},$m128:function($0){
var $1=this.thumbControl(this.immediateparent.getMouse("y"));if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}},$m129:function(){
return [].concat(this["$lzc$thumbControl_dependencies"]?this["$lzc$thumbControl_dependencies"](this,this,this.immediateparent.getMouse("y")):[]).concat(this.immediateparent["$lzc$getMouse_dependencies"]?this.immediateparent["$lzc$getMouse_dependencies"](this,this.immediateparent,"y"):[])
},doffset:new LzOnceExpr("$m127"),name:"ythumbdrag",y:new LzAlwaysExpr("$m128","$m129")},"class":LzState},{attrs:{$classrootdepth:1,$m130:function($0){
this.setAttribute("doffset",this.getMouse("x"))
},$m131:function($0){
var $1=this.thumbControl(this.immediateparent.getMouse("x"));if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}},$m132:function(){
return [].concat(this["$lzc$thumbControl_dependencies"]?this["$lzc$thumbControl_dependencies"](this,this,this.immediateparent.getMouse("x")):[]).concat(this.immediateparent["$lzc$getMouse_dependencies"]?this.immediateparent["$lzc$getMouse_dependencies"](this,this.immediateparent,"x"):[])
},doffset:new LzOnceExpr("$m130"),name:"xthumbdrag",x:new LzAlwaysExpr("$m131","$m132")},"class":LzState}],"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseisover","$m126",null,"onmousedown","startDrag",null,"onmouseup","stopDrag",null],axis:"",clickable:true,focusable:false,target:null,targetscroll:0,trackscroll:0,vertical:true},$lzc$class_scrlthmb.attributes)
}}})($lzc$class_scrlthmb);Mixin.make("$lzc$class_bsscrlbr",null,["scrolltarget",void 0,"axis",void 0,"$lzc$set_axis",function($0){
this.axis=$0;this.setAttribute("sizeAxis",$0=="x"?"width":"height");this.setAttribute("otherSizeAxis",$0=="y"?"width":"height")
},"sizeAxis",void 0,"otherSizeAxis",void 0,"$m133",function($0){
var $1=this.axis;if($1!==this["scrollattr"]||!this.inited){
this.setAttribute("scrollattr",$1)
}},"$m134",function(){
return [this,"axis"]
},"scrollattr",void 0,"scrollmax",void 0,"onscrollmax",void 0,"pagesize",void 0,"stepsize",void 0,"scrollable",void 0,"focusview",void 0,"usemousewheel",void 0,"$lzc$set_usemousewheel",function($0){
if($0==this.usemousewheel)return;this.usemousewheel=$0;if(this._mwUpdateDel){
this._mwUpdateDel.unregisterAll()
};if($0){
this._mwUpdateDel=new LzDelegate(this,"mousewheelUpdate",lz.Keys,"onmousewheeldelta")
}},"mousewheelevent_on",void 0,"mousewheelevent_off",void 0,"mousewheelactive",void 0,"onscrollable",void 0,"$m135",function($0){
var $1=this.enabled&&this.scrollable&&(this._parentcomponent?this._parentcomponent._enabled:true);if($1!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$1)
}},"$m136",function(){
return [this,"enabled",this,"scrollable",this,"_parentcomponent",this._parentcomponent,"_enabled"]
},"_enabled",void 0,"usetargetsize",void 0,"othersb",void 0,"thumb",void 0,"_mwActivateDel",void 0,"_mwDeactivateDel",void 0,"_mwUpdateDel",void 0,"clipSizeDel",void 0,"targetHeightDel",void 0,"targetPosDel",void 0,"heightDel",void 0,"heightConstraint",void 0,"widthConstraint",void 0,"init",function(){
with(this){
var $0=false;if(!this.scrolltarget){
var $1=immediateparent.subviews.length;for(var $2=0;$2<$1;$2++){
var $3=immediateparent.subviews[$2];if($3 instanceof lz.view){
if(!$lzsc$issubclassof($3,lz.bsscrlbr)){
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
this.setAttribute("activated",true);if(!this.__deactivatedel){
this.__deactivatedel=new LzDelegate(this,"deactivate")
};lz.Timer.resetTimer(this.__deactivatedel,3000);this.step(-$0)
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
}],["tagname","bsscrlbr","children",[{attrs:{$classrootdepth:1,$m137:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.height-this.othersb.height:this.immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},$m138:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"height",this.othersb,"height"]
},height:new LzAlwaysExpr("$m137","$m138"),name:"heightConstraint"},"class":LzState},{attrs:{$classrootdepth:1,$m139:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.width-this.othersb.width:this.immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},$m140:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"width",this.othersb,"width"]
},name:"widthConstraint",width:new LzAlwaysExpr("$m139","$m140")},"class":LzState}],"attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("$m135","$m136"),_mwActivateDel:null,_mwDeactivateDel:null,_mwUpdateDel:null,axis:"y",clipSizeDel:null,focusview:null,heightDel:null,mousewheelactive:false,mousewheelevent_off:"onblur",mousewheelevent_on:"onfocus",onscrollable:LzDeclaredEvent,onscrollmax:LzDeclaredEvent,othersb:null,pagesize:null,scrollable:true,scrollattr:new LzAlwaysExpr("$m133","$m134"),scrollmax:null,scrolltarget:null,stepsize:10,targetHeightDel:null,targetPosDel:null,thumb:null,usemousewheel:true,usetargetsize:false},$lzc$class_bsscrlbr.attributes)
}}})($lzc$class_bsscrlbr);Class.make("$lzc$class_bsscrlbr$basepanel",$lzc$class_basepanel,["scrolltarget",void 0,"axis",void 0,"$lzc$set_axis",function($0){
this.axis=$0;this.setAttribute("sizeAxis",$0=="x"?"width":"height");this.setAttribute("otherSizeAxis",$0=="y"?"width":"height")
},"sizeAxis",void 0,"otherSizeAxis",void 0,"$m178",function($0){
var $1=this.axis;if($1!==this["scrollattr"]||!this.inited){
this.setAttribute("scrollattr",$1)
}},"$m179",function(){
return [this,"axis"]
},"scrollattr",void 0,"scrollmax",void 0,"onscrollmax",void 0,"pagesize",void 0,"stepsize",void 0,"scrollable",void 0,"focusview",void 0,"usemousewheel",void 0,"$lzc$set_usemousewheel",function($0){
with(this){
if($0==this.usemousewheel)return;this.usemousewheel=$0;if(this._mwUpdateDel){
this._mwUpdateDel.unregisterAll()
};if($0){
this._mwUpdateDel=new LzDelegate(this,"mousewheelUpdate",lz.Keys,"onmousewheeldelta")
}}},"mousewheelevent_on",void 0,"mousewheelevent_off",void 0,"mousewheelactive",void 0,"onscrollable",void 0,"$m180",function($0){
var $1=this.enabled&&this.scrollable&&(this._parentcomponent?this._parentcomponent._enabled:true);if($1!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$1)
}},"$m181",function(){
return [this,"enabled",this,"scrollable",this,"_parentcomponent",this._parentcomponent,"_enabled"]
},"_enabled",void 0,"usetargetsize",void 0,"othersb",void 0,"thumb",void 0,"_mwActivateDel",void 0,"_mwDeactivateDel",void 0,"_mwUpdateDel",void 0,"clipSizeDel",void 0,"targetHeightDel",void 0,"targetPosDel",void 0,"heightDel",void 0,"heightConstraint",void 0,"widthConstraint",void 0,"init",function(){
with(this){
var $0=false;if(!this.scrolltarget){
var $1=immediateparent.subviews.length;for(var $2=0;$2<$1;$2++){
var $3=immediateparent.subviews[$2];if($3 instanceof lz.view){
if(!$lzsc$issubclassof($3,lz.bsscrlbr)){
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
with(this){
if(this.axis!="y")return;if(this.mousewheelactive||this.scrolltarget&&this.scrolltarget.immediateparent&&this.scrolltarget.immediateparent.isMouseOver()){
this.setAttribute("activated",true);if(!this.__deactivatedel){
this.__deactivatedel=new LzDelegate(this,"deactivate")
};lz.Timer.resetTimer(this.__deactivatedel,3000);this.step(-$0)
}}},"targetSizeUpdate",function($0){
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
}],["children",[{attrs:{$classrootdepth:1,$m182:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.height-this.othersb.height:this.immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},$m183:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"height",this.othersb,"height"]
},height:new LzAlwaysExpr("$m182","$m183"),name:"heightConstraint"},"class":LzState},{attrs:{$classrootdepth:1,$m184:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.width-this.othersb.width:this.immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},$m185:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"width",this.othersb,"width"]
},name:"widthConstraint",width:new LzAlwaysExpr("$m184","$m185")},"class":LzState}],"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("$m180","$m181"),_mwActivateDel:null,_mwDeactivateDel:null,_mwUpdateDel:null,axis:"y",clipSizeDel:null,focusview:null,heightDel:null,mousewheelactive:false,mousewheelevent_off:"onblur",mousewheelevent_on:"onfocus",onscrollable:LzDeclaredEvent,onscrollmax:LzDeclaredEvent,othersb:null,pagesize:null,scrollable:true,scrollattr:new LzAlwaysExpr("$m178","$m179"),scrollmax:null,scrolltarget:null,stepsize:10,targetHeightDel:null,targetPosDel:null,thumb:null,usemousewheel:true,usetargetsize:false},$lzc$class_bsscrlbr$basepanel.attributes)
}}})($lzc$class_bsscrlbr$basepanel);Class.make("$lzc$class_applybasecolor$bsscrlbr$basepanel",$lzc$class_bsscrlbr$basepanel,["basecolor",void 0,"$m176",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m177",function($0){
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
};this.redraw()
}}],["children",LzNode.mergeChildren([],$lzc$class_bsscrlbr$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_bsscrlbr$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m176",null,"onbasecolor","$m177",null],basecolor:new LzStyleConstraintExpr("basecolor","base-color","color")},$lzc$class_applybasecolor$bsscrlbr$basepanel.attributes)
}}})($lzc$class_applybasecolor$bsscrlbr$basepanel);Class.make("$lzc$class_buttonevents$applybasecolor$bsscrlbr$basepanel",$lzc$class_applybasecolor$bsscrlbr$basepanel,["mouseisover",void 0,"mouseisdown",void 0,"$m166",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m167",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m168",function($0){
this.setAttribute("mouseisover",true)
},"$m169",function($0){
this.setAttribute("mouseisover",false)
},"$m170",function($0){
this.setAttribute("mouseisdown",true)
},"$m171",function($0){
this.setAttribute("mouseisdown",false)
},"$m172",function($0){
this.onmouseover.sendEvent()
},"$m173",function($0){
this.onmouseout.sendEvent()
},"$m174",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m175",function($0){
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
}}],["children",LzNode.mergeChildren([],$lzc$class_applybasecolor$bsscrlbr$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_applybasecolor$bsscrlbr$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m167","$m166","onmouseover","$m168",null,"onmouseout","$m169",null,"onmousedown","$m170",null,"onmouseup","$m171",null,"onfocus","$m172",null,"onblur","$m173",null,"onkeydown","$m174",null,"onkeyup","$m175",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents$applybasecolor$bsscrlbr$basepanel.attributes)
}}})($lzc$class_buttonevents$applybasecolor$bsscrlbr$basepanel);Class.make("$lzc$class_m187",$lzc$class_scrltrk,["$m148",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m149",function(){
with(this){
return [parent,"width"]
}},"$m150",function($0){
with(this){
var $1=parent.thumb.y;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m151",function(){
with(this){
return [parent.thumb,"y"]
}},"$classrootdepth",void 0],["attributes",new LzInheritedHash($lzc$class_scrltrk.attributes)]);Class.make("$lzc$class_m188",$lzc$class_scrlthmb,["$m152",function($0){
with(this){
var $1=parent.width-4;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m153",function(){
with(this){
return [parent,"width"]
}},"$classrootdepth",void 0],["children",LzNode.mergeChildren([],$lzc$class_scrlthmb["children"]),"attributes",new LzInheritedHash($lzc$class_scrlthmb.attributes)]);Class.make("$lzc$class_m189",$lzc$class_scrltrk,["$m154",function($0){
with(this){
var $1=parent.thumb.y+parent.thumb.height;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m155",function(){
with(this){
return [parent.thumb,"y",parent.thumb,"height"]
}},"$m156",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m157",function(){
with(this){
return [parent,"width"]
}},"$m158",function($0){
with(this){
var $1=parent.height-parent.thumb.y-parent.thumb.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m159",function(){
with(this){
return [parent,"height",parent.thumb,"y",parent.thumb,"height"]
}},"$classrootdepth",void 0],["attributes",new LzInheritedHash($lzc$class_scrltrk.attributes)]);Class.make("$lzc$class_m186",LzView,["$m144",function($0){
with(this){
var $1=immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m145",function(){
with(this){
return [immediateparent,"width"]
}},"$m146",function($0){
with(this){
var $1=immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m147",function(){
with(this){
return [immediateparent,"height"]
}},"thumb",void 0,"$classrootdepth",void 0],["children",[{attrs:{$classrootdepth:2,direction:-1,height:new LzAlwaysExpr("$m150","$m151"),width:new LzAlwaysExpr("$m148","$m149")},"class":$lzc$class_m187},{attrs:{$classrootdepth:2,name:"thumb",width:new LzAlwaysExpr("$m152","$m153"),x:1},"class":$lzc$class_m188},{attrs:{$classrootdepth:2,direction:1,height:new LzAlwaysExpr("$m158","$m159"),width:new LzAlwaysExpr("$m156","$m157"),y:new LzAlwaysExpr("$m154","$m155")},"class":$lzc$class_m189}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_m190",$lzc$class_scrlstepbtn,["$m160",function($0){
with(this){
var $1=parent.width-2;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m161",function(){
with(this){
return [parent,"width"]
}},"$classrootdepth",void 0],["attributes",new LzInheritedHash($lzc$class_scrlstepbtn.attributes)]);Class.make("$lzc$class_m191",$lzc$class_scrlstepbtn,["$m162",function($0){
with(this){
var $1=parent.height-this.height;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m163",function(){
with(this){
return [parent,"height",this,"height"]
}},"$m164",function($0){
with(this){
var $1=parent.width-2;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m165",function(){
with(this){
return [parent,"width"]
}},"$classrootdepth",void 0],["attributes",new LzInheritedHash($lzc$class_scrlstepbtn.attributes)]);Class.make("$lzc$class_scrlbr",$lzc$class_buttonevents$applybasecolor$bsscrlbr$basepanel,["size",void 0,"$m141",function($0){
var $1=this.size;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$m142",function(){
return [this,"size"]
},"$m143",function($0){
this.setAttribute("activated",$0)
},"activated",void 0,"onactivated",void 0,"$lzc$set_activated",function($0){
if($0!=this.activated){
this.activated=$0;if($0){
this.activate()
}else{
this.deactivate()
}};if(this.onactivated.ready)this.onactivated.sendEvent($0)
},"activate",function(){
this.activated=true;this.animate("opacity",1,200)
},"deactivate",function(){
this.activated=false;if(!this.isMouseOver()){
this.animate("opacity",0.2,200)
}},"draw",function(){
this.beginPath();this.rect(0,0,this.width,this.height,this.width);this.lineWidth=this.borderwidth;this.lineStyle=this.interiorbordercolor;this.fillStyle=this.interiorfillcolor;this.fill();this.stroke()
},"scrolltrack",void 0],["tagname","scrlbr","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,height:new LzAlwaysExpr("$m146","$m147"),name:"scrolltrack",thumb:void 0,width:new LzAlwaysExpr("$m144","$m145")},"class":$lzc$class_m186},{attrs:{$classrootdepth:1,direction:-1,width:new LzAlwaysExpr("$m160","$m161"),x:1},"class":$lzc$class_m190},{attrs:{$classrootdepth:1,direction:1,width:new LzAlwaysExpr("$m164","$m165"),x:1,y:new LzAlwaysExpr("$m162","$m163")},"class":$lzc$class_m191}],$lzc$class_buttonevents$applybasecolor$bsscrlbr$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_buttonevents$applybasecolor$bsscrlbr$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseisover","$m143",null],activated:false,onactivated:LzDeclaredEvent,opacity:0.2,size:new LzStyleConstraintExpr("size","size","expression",16),width:new LzAlwaysExpr("$m141","$m142")},$lzc$class_scrlbr.attributes)
}}})($lzc$class_scrlbr);(function(){
var $0=LzCSSStyle,$1=LzCSSStyleRule;$0._addRule(new $1("basepanel",{"base-color":15921906,"border-width":0.5,"corner-radius":3}));$0._addRule(new $1("scrlbr",{"corner-radius":16,size:16}));$0._addRule(new $1("scrlthmb",{"corner-radius":20}))
})();Class.make("$lzc$class_m194",$lzc$class_btn,["$m192",function($0){
this.animate("width",100,500)
}],["children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);Class.make("$lzc$class_m195",$lzc$class_btn,["$m193",function($0){
this.animate("width",100,500)
}],["children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);canvas.LzInstantiateView({attrs:{spacing:10,x:10,y:10},children:[{attrs:{height:50,width:50},"class":$lzc$class_bsbtn},{attrs:{disabled:true,height:50,width:50},"class":$lzc$class_bsbtn},{attrs:{$delegates:["onclick","$m192",null],clickable:true,text:"ok"},"class":$lzc$class_m194},{attrs:{$delegates:["onclick","$m193",null],clickable:true,text:"cancel"},"class":$lzc$class_m195},{attrs:{text:"Hey there!",width:100},"class":$lzc$class_inpt},{attrs:{multiline:true,text:"Hey there! This text should wrap onto a few lines.",width:100},"class":$lzc$class_inpt},{attrs:{bgcolor:LzColorUtils.convertColor("0xffffff"),clip:true,height:200,width:200},children:[{attrs:{font:"Helvetica,Sans",fontsize:12,fontstyle:"plain",multiline:true,text:"Man through his scientific genius has been able to draw distance and save time and space. He has been able to carry highways through the stratosphere. We read just the other day that a rocket plane went 1900 miles in one hour. Twice as fast as the speed of sound. This is the new age. Bob Hope has described this new age, this jet age; it is an age in which planes will be moving so fast that we will have a non-stop flight from New York to Los Angeles, when you start out you might develop the hiccups and you will hic in New York and cup in Los Angeles. This is an age in which it will be possible to leave Tokyo on a Sunday morning and arrive in Seattle, Washington on the preceding Saturday night. When your friends meet you at the airport and ask what time did you leave Tokyo, you will have to say I left tomorrow. That is this new age. We live in one world geographically. We face the great problem of making it one spiritually.<br/>Through our scientific means we have made of the world a neighborhood and now the challenge confronts us through our moral and spiritual means to make of it a brotherhood. We must live together, we are not independent we are interdependent. We are all involved in a single process. Whatever affects one directly affects all indirectly for we are tied together in a single progress. We are all linked in the great chain of humanity.<br/>Martin Luther King, Jr.<br/>11 August 1956",width:180},"class":LzText},{"class":$lzc$class_scrlbr}],"class":LzView}],"class":$lzc$class_vbox},21);lz["simplelayout"]=$lzc$class_simplelayout;lz["vbox"]=$lzc$class_vbox;lz["drawable"]=$lzc$class_drawable;lz["drawview"]=$lzc$class_drawview;lz["basepanel"]=$lzc$class_basepanel;lz["componentmodel"]=$lzc$class_componentmodel;lz["componentfocus"]=$lzc$class_componentfocus;lz["applybasecolor"]=$lzc$class_applybasecolor;lz["boxmodel"]=$lzc$class_boxmodel;lz["buttonevents"]=$lzc$class_buttonevents;lz["mousedownrepeater"]=$lzc$class_mousedownrepeater;lz["drawbutton"]=$lzc$class_drawbutton;lz["bsbtn"]=$lzc$class_bsbtn;lz["btn"]=$lzc$class_btn;lz["drawinputtext"]=$lzc$class_drawinputtext;lz["inpt"]=$lzc$class_inpt;lz["scrlstepbtn"]=$lzc$class_scrlstepbtn;lz["scrltrk"]=$lzc$class_scrltrk;lz["scrlthmb"]=$lzc$class_scrlthmb;lz["bsscrlbr"]=$lzc$class_bsscrlbr;lz["scrlbr"]=$lzc$class_scrlbr;canvas.initDone();