canvas=new LzCanvas(null,{__LZproxied:"false",appbuilddate:"2010-02-18T21:07:49Z",bgcolor:16777215,embedfonts:true,font:"Helvetica,Sans",fontname:"Helvetica,Sans",fontsize:12,fontstyle:"plain",height:"100%",lpsbuild:"15732 /Users/maxcarlson/openlaszlo/trunk-clean",lpsbuilddate:"2010-02-13T03:16:54Z",lpsrelease:"Latest",lpsversion:"5.0.x",runtime:"dhtml",width:"100%"});Mixin.make("DrawviewShared",null,["$lzsc$initialize",function($0,$1,$2,$3){
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
},"lineTo",function($0,$1){},"moveTo",function($0,$1){},"quadraticCurveTo",function($0,$1,$2,$3){},"arc",function($0,$1,$2,$3,$4,$5){
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
return {x:($0.x+$1.x)/2,y:($0.y+$1.y)/2}}],null);Class.make("$lzc$class_drawview",[DrawviewShared,LzView],["globalAlpha",1,"lineWidth",1,"lineCap","round","lineJoin","round","miterLimit",3,"strokeStyle","#000000","fillStyle","#000000","__globalAlpha",null,"__lineWidth",null,"__lineCap",null,"__lineJoin",null,"__miterLimit",null,"__strokeStyle",null,"__fillStyle",null,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.createContext()
},"$lzc$set_context",function($0){
this.beginPath();if(this.context){
this.__lineWidth=null;this.__lineCap=null;this.__lineJoin=null;this.__miterLimit=null;this.__fillStyle=null;this.__strokeStyle=null;this.__globalAlpha=null
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzc$set_context"]||this.nextMethod(arguments.callee,"$lzc$set_context")).call(this,$0)
},"__drawImageCnt",0,"getImage",function($0){
with(this){
var $1=lz.drawview.images;if(!$1[$0]){
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
var $0=lz.drawview.__colorcache;var $1=$0[this.fillStyle];if($1==null){
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
var $4=lz.drawview.__colorcache;var $5=$4[this.strokeStyle];if($5==null){
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
}],["tagname","drawview","attributes",new LzInheritedHash(LzView.attributes),"__colorcache",{},"__rrfactors",null,"images",{}]);lz[$lzc$class_drawview.tagname]=$lzc$class_drawview;Class.make("LzCanvasGradient",null,["__context",null,"__g",null,"$lzsc$initialize",function($0,$1,$2){
this.__context=$0;if($2){
this.__g=$0.context.createRadialGradient.apply($0.context,$1)
}else{
this.__g=$0.context.createLinearGradient.apply($0.context,$1)
}},"addColorStop",function($0,$1){
var $2=lz.drawview.__colorcache;var $3=$2[$1];if($3==null){
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
}],null);Class.make("$lzc$class_simplelayout",LzLayout,["axis",void 0,"$lzc$set_axis",function($0){
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
}],["tagname","simplelayout","attributes",new LzInheritedHash(LzLayout.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({axis:"y",inset:0,spacing:0},$lzc$class_simplelayout.attributes)
}}})($lzc$class_simplelayout);Mixin.make("$lzc$class_applybasecolor",null,["borderwidth",void 0,"$m1",void 0,"bordercolor",void 0,"$m2",void 0,"basecolor",void 0,"highlightcolor",void 0,"$m3",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m4",function($0){
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
};if(this.redraw)this.redraw()
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
}],["tagname","applybasecolor","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m3",null,"onbasecolor","$m4",null],$m1:function($0){
this.setAttribute("bordercolor",LzColorUtils.convertColor("void 0"))
},$m2:function($0){
this.setAttribute("basecolor",LzColorUtils.convertColor("void 0"))
},basecolor:new LzStyleConstraintExpr("basecolor","base-color","color",new LzOnceExpr("$m2")),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",new LzOnceExpr("$m1")),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0),highlightcolor:new LzStyleConstraintExpr("highlightcolor","highlight-color","color",LzColorUtils.convertColor("0xff"))},$lzc$class_applybasecolor.attributes)
}}})($lzc$class_applybasecolor);Class.make("$lzc$class_drawpanel",$lzc$class_drawview,["redraw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited||this.lockredraw)return;this.draw(this)
},"draw",function(){
this.clear()
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
}],["tagname","drawpanel","children",LzNode.mergeChildren([],$lzc$class_drawview["children"]),"attributes",new LzInheritedHash($lzc$class_drawview.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","redraw",null,"onheight","redraw",null,"oncontext","redraw",null]},$lzc$class_drawpanel.attributes)
}}})($lzc$class_drawpanel);Class.make("$lzc$class_applybasecolor$drawpanel",$lzc$class_drawpanel,["borderwidth",void 0,"$m8",void 0,"bordercolor",void 0,"$m9",void 0,"basecolor",void 0,"highlightcolor",void 0,"$m10",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m11",function($0){
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
};if(this.redraw)this.redraw()
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
}],["children",LzNode.mergeChildren([],$lzc$class_drawpanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawpanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m10",null,"onbasecolor","$m11",null],$m8:function($0){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("void 0"))
}},$m9:function($0){
with(this){
this.setAttribute("basecolor",LzColorUtils.convertColor("void 0"))
}},basecolor:new LzStyleConstraintExpr("basecolor","base-color","color",new LzOnceExpr("$m9")),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",new LzOnceExpr("$m8")),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0),highlightcolor:new LzStyleConstraintExpr("highlightcolor","highlight-color","color",LzColorUtils.convertColor("0xff"))},$lzc$class_applybasecolor$drawpanel.attributes)
}}})($lzc$class_applybasecolor$drawpanel);Class.make("$lzc$class_basepanel",$lzc$class_applybasecolor$drawpanel,["$m5",void 0,"$m6",void 0,"interiorbordercolor",void 0,"$m7",void 0,"interiorfillcolor",void 0,"lockredraw",void 0,"scopes",void 0,"redraw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited||this.lockredraw)return;this.clear();if(this["draw"])this.draw(this);if(!this.scopes){
return
};var $1=this.scopes.length;if(!$1)return;for(var $2=0;$2<$1;$2++){
var $3=this.scopes[$2];if($3){
var $4=$3.x;var $5=$3.y;this.translate($4,$5);this.beginPath();$3.draw(this);this.translate(-$4,-$5)
}}},"addScope",function($0){
with(this){
if(!this.scopes){
this.scopes=[]
};new LzDelegate(this,"redraw",$0,"onx");new LzDelegate(this,"redraw",$0,"ony");new LzDelegate(this,"redraw",$0,"onwidth");new LzDelegate(this,"redraw",$0,"onheight");this.scopes.push($0)
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
}],["tagname","basepanel","children",LzNode.mergeChildren([],$lzc$class_applybasecolor$drawpanel["children"]),"attributes",new LzInheritedHash($lzc$class_applybasecolor$drawpanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","redraw",null,"onheight","redraw",null,"oncontext","redraw",null],$m5:function($0){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("void 0"))
}},$m6:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void 0"))
}},$m7:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void 0"))
}},bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",new LzOnceExpr("$m5")),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m6")),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m7")),lockredraw:false,scopes:null},$lzc$class_basepanel.attributes)
}}})($lzc$class_basepanel);Mixin.make("$lzc$class_componentmodel",null,["value",void 0,"disabled",void 0,"$m12",function($0){
with(this){
var $1=!disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}}},"$m13",function(){
return [this,"disabled"]
},"$m14",function($0){
with(this){
var $1=!disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}}},"$m15",function(){
return [this,"disabled"]
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
}],["tagname","componentmodel","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("$m14","$m15"),disabled:false,focusable:new LzAlwaysExpr("$m12","$m13"),value:""},$lzc$class_componentmodel.attributes)
}}})($lzc$class_componentmodel);Mixin.make("$lzc$class_componentfocus",null,["focusanimationspeed",void 0,"doFocus",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=10;if(this.capabilities.minimize_opacity_changes){
$1=2
};if(!this.disabled)this.animate("shadowblurradius",$1,this.focusanimationspeed)
},"doBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.animate("shadowblurradius",0,this.focusanimationspeed)
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
}],["tagname","componentfocus","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","doFocus",null,"onblur","doBlur",null],focusanimationspeed:500,shadowblurradius:0,shadowcolor:LzColorUtils.convertColor("0xcc"),shadowdistance:0},$lzc$class_componentfocus.attributes)
}}})($lzc$class_componentfocus);Mixin.make("$lzc$class_virtualdrawview",null,["drawtarget",void 0,"ondrawtarget",void 0,"init",function(){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
},"$lzc$set_drawtarget",function($0){
if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.drawtarget=$0;$0.addScope(this);if(this.ondrawtarget.ready)this.ondrawtarget.sendEvent($0)
}},"redraw",function($0){
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
}],["tagname","virtualdrawview","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview.attributes)
}}})($lzc$class_virtualdrawview);Mixin.make("$lzc$class_buttonevents",null,["mouseisover",void 0,"mouseisdown",void 0,"$m16",function(){
var $0=lz.ModeManager;return $0
},"$m17",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m18",function($0){
this.setAttribute("mouseisover",true)
},"$m19",function($0){
this.setAttribute("mouseisover",false)
},"$m20",function($0){
this.setAttribute("mouseisdown",true)
},"$m21",function($0){
this.setAttribute("mouseisdown",false)
},"$m22",function($0){
this.onmouseover.sendEvent()
},"$m23",function($0){
this.onmouseout.sendEvent()
},"$m24",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m25",function($0){
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
}],["tagname","buttonevents","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m17","$m16","onmouseover","$m18",null,"onmouseout","$m19",null,"onmousedown","$m20",null,"onmouseup","$m21",null,"onfocus","$m22",null,"onblur","$m23",null,"onkeydown","$m24",null,"onkeyup","$m25",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents.attributes)
}}})($lzc$class_buttonevents);Mixin.make("$lzc$class_mousedownrepeater",null,["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__mousestillDownDelegate=new LzDelegate(this,"__ismousestilldown")
},"__ismousestilldown",function($0){
var $1=$0-this.__mousedowntime;this.__mousedowntime=$0;if(this.mouseisdown){
var $2;if($1>600){
$2=this.__mousedowninitialinterval
}else{
$2=this.__mousedownrepeatinterval;this.onmousestilldown.sendEvent()
};lz.Timer.resetTimer(this.__mousestillDownDelegate,$2)
}},"$m26",function($0){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
},"$m27",function($0){
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
}],["tagname","mousedownrepeater","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousedown","$m26",null,"onmouseup","$m27",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater.attributes)
}}})($lzc$class_mousedownrepeater);Mixin.make("$lzc$class_drawbutton",null,["vertical",void 0,"mousestate",void 0,"$m28",function($0){
var $1="up";switch($0){
case 2:
$1="over";break;
case 3:
$1="down";break;

};if(this.mousestate!=$1){
this.setAttribute("mousestate",$1);this.redraw()
}},"draw",function($0){
if(this.drawtarget&&$0===this){
$0.clear();return
};$0.globalAlpha=this.disabled?0.5:1;$0.lineWidth=$0.borderwidth;this.drawinteriorborder($0);this.drawgradient($0);this.drawborder($0)
},"drawborder",function($0){
if(this.borderwidth>0){
if(!this.bordercolor)return;$0.beginPath();$0.rect(0,0,this.width,this.height,this.cornerradius);$0.closePath();$0.strokeStyle=this.bordercolor;$0.stroke()
}},"$m29",function($0){},"$m30",void 0,"interiorbordercolor",void 0,"$m31",void 0,"interiorfillcolor",void 0,"$m32",void 0,"$m33",void 0,"interiorbordercolorup",void 0,"$m34",void 0,"$m35",void 0,"interiorfillcolorup",void 0,"$m36",void 0,"$m37",void 0,"interiorbordercolorover",void 0,"$m38",void 0,"$m39",void 0,"interiorfillcolorover",void 0,"$m40",void 0,"$m41",void 0,"interiorbordercolordown",void 0,"$m42",void 0,"$m43",void 0,"interiorfillcolordown",void 0,"drawinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate])return;$0.beginPath();$0.rect(1,1,this.width-2,this.height-2,this.cornerradius);$0.closePath();$0.fillStyle=this["interiorfillcolor"+this.mousestate];$0.fill();if(this.borderwidth>0){
if(!this["interiorbordercolor"+this.mousestate])return;$0.strokeStyle=this["interiorbordercolor"+this.mousestate];$0.stroke()
}},"$m44",void 0,"gradientfillstartup",void 0,"$m45",void 0,"gradientfillstopup",void 0,"$m46",void 0,"gradientfillstartover",void 0,"$m47",void 0,"gradientfillstopover",void 0,"$m48",void 0,"gradientfillstartdown",void 0,"$m49",void 0,"gradientfillstopdown",void 0,"__resetgradientcache",function($0){
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
}],["tagname","drawbutton","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onframe","$m28",null,"oninteriorbordercolor","$m29",null,"ongradientfillstartup","__resetgradientcache",null,"ongradientfillstopup","__resetgradientcache",null,"ongradientfillstartover","__resetgradientcache",null,"ongradientfillstopover","__resetgradientcache",null,"ongradientfillstartdown","__resetgradientcache",null,"ongradientfillstopdown","__resetgradientcache",null,"ongradientsideways","__resetgradientcache",null],$m30:function($0){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
},$m31:function($0){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
},$m32:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m33:function(){
return [this,"interiorbordercolor"]
},$m34:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m35:function(){
return [this,"interiorfillcolor"]
},$m36:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m37:function(){
return [this,"interiorbordercolor"]
},$m38:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m39:function(){
return [this,"interiorfillcolor"]
},$m40:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m41:function(){
return [this,"interiorbordercolor"]
},$m42:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m43:function(){
return [this,"interiorfillcolor"]
},$m44:function($0){
this.setAttribute("gradientfillstartup",LzColorUtils.convertColor("void(0)"))
},$m45:function($0){
this.setAttribute("gradientfillstopup",LzColorUtils.convertColor("void(0)"))
},$m46:function($0){
this.setAttribute("gradientfillstartover",LzColorUtils.convertColor("void(0)"))
},$m47:function($0){
this.setAttribute("gradientfillstopover",LzColorUtils.convertColor("void(0)"))
},$m48:function($0){
this.setAttribute("gradientfillstartdown",LzColorUtils.convertColor("void(0)"))
},$m49:function($0){
this.setAttribute("gradientfillstopdown",LzColorUtils.convertColor("void(0)"))
},gradientfillstartdown:new LzStyleConstraintExpr("gradientfillstartdown","gradientfill-start-down","color",new LzOnceExpr("$m48")),gradientfillstartover:new LzStyleConstraintExpr("gradientfillstartover","gradientfill-start-over","color",new LzOnceExpr("$m46")),gradientfillstartup:new LzStyleConstraintExpr("gradientfillstartup","gradientfill-start-up","color",new LzOnceExpr("$m44")),gradientfillstopdown:new LzStyleConstraintExpr("gradientfillstopdown","gradientfill-stop-down","color",new LzOnceExpr("$m49")),gradientfillstopover:new LzStyleConstraintExpr("gradientfillstopover","gradientfill-stop-over","color",new LzOnceExpr("$m47")),gradientfillstopup:new LzStyleConstraintExpr("gradientfillstopup","gradientfill-stop-up","color",new LzOnceExpr("$m45")),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m30")),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","interior-border-color-down","color",new LzAlwaysExpr("$m40","$m41")),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","interior-border-color-over","color",new LzAlwaysExpr("$m36","$m37")),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","interior-border-color-up","color",new LzAlwaysExpr("$m32","$m33")),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m31")),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","interior-fill-color-down","color",new LzAlwaysExpr("$m42","$m43")),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","interior-fill-color-over","color",new LzAlwaysExpr("$m38","$m39")),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","interior-fill-color-up","color",new LzAlwaysExpr("$m34","$m35")),mousestate:"up",vertical:false},$lzc$class_drawbutton.attributes)
}}})($lzc$class_drawbutton);Class.make("$lzc$class_applybasecolor$basepanel",$lzc$class_basepanel,["$m86",void 0,"$m87",void 0,"$m88",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m89",function($0){
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
};if(this.redraw)this.redraw()
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
}],["children",LzNode.mergeChildren([],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m88",null,"onbasecolor","$m89",null],$m86:function($0){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("void 0"))
}},$m87:function($0){
with(this){
this.setAttribute("basecolor",LzColorUtils.convertColor("void 0"))
}},basecolor:new LzStyleConstraintExpr("basecolor","base-color","color",new LzOnceExpr("$m87")),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",new LzOnceExpr("$m86")),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0),highlightcolor:new LzStyleConstraintExpr("highlightcolor","highlight-color","color",LzColorUtils.convertColor("0xff"))},$lzc$class_applybasecolor$basepanel.attributes)
}}})($lzc$class_applybasecolor$basepanel);Class.make("$lzc$class_componentfocus$applybasecolor$basepanel",$lzc$class_applybasecolor$basepanel,["focusanimationspeed",void 0,"doFocus",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=10;if(this.capabilities.minimize_opacity_changes){
$1=2
};if(!this.disabled)this.animate("shadowblurradius",$1,this.focusanimationspeed)
},"doBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.animate("shadowblurradius",0,this.focusanimationspeed)
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
}],["children",LzNode.mergeChildren([],$lzc$class_applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_applybasecolor$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","doFocus",null,"onblur","doBlur",null],focusanimationspeed:500,shadowblurradius:0,shadowcolor:LzColorUtils.convertColor("0xcc"),shadowdistance:0},$lzc$class_componentfocus$applybasecolor$basepanel.attributes)
}}})($lzc$class_componentfocus$applybasecolor$basepanel);Class.make("$lzc$class_drawbutton$componentfocus$applybasecolor$basepanel",$lzc$class_componentfocus$applybasecolor$basepanel,["vertical",void 0,"mousestate",void 0,"$m64",function($0){
var $1="up";switch($0){
case 2:
$1="over";break;
case 3:
$1="down";break;

};if(this.mousestate!=$1){
this.setAttribute("mousestate",$1);this.redraw()
}},"draw",function($0){
if(this.drawtarget&&$0===this){
$0.clear();return
};$0.globalAlpha=this.disabled?0.5:1;$0.lineWidth=$0.borderwidth;this.drawinteriorborder($0);this.drawgradient($0);this.drawborder($0)
},"drawborder",function($0){
if(this.borderwidth>0){
if(!this.bordercolor)return;$0.beginPath();$0.rect(0,0,this.width,this.height,this.cornerradius);$0.closePath();$0.strokeStyle=this.bordercolor;$0.stroke()
}},"$m65",function($0){},"$m66",void 0,"$m67",void 0,"$m68",void 0,"$m69",void 0,"interiorbordercolorup",void 0,"$m70",void 0,"$m71",void 0,"interiorfillcolorup",void 0,"$m72",void 0,"$m73",void 0,"interiorbordercolorover",void 0,"$m74",void 0,"$m75",void 0,"interiorfillcolorover",void 0,"$m76",void 0,"$m77",void 0,"interiorbordercolordown",void 0,"$m78",void 0,"$m79",void 0,"interiorfillcolordown",void 0,"drawinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate])return;$0.beginPath();$0.rect(1,1,this.width-2,this.height-2,this.cornerradius);$0.closePath();$0.fillStyle=this["interiorfillcolor"+this.mousestate];$0.fill();if(this.borderwidth>0){
if(!this["interiorbordercolor"+this.mousestate])return;$0.strokeStyle=this["interiorbordercolor"+this.mousestate];$0.stroke()
}},"$m80",void 0,"gradientfillstartup",void 0,"$m81",void 0,"gradientfillstopup",void 0,"$m82",void 0,"gradientfillstartover",void 0,"$m83",void 0,"gradientfillstopover",void 0,"$m84",void 0,"gradientfillstartdown",void 0,"$m85",void 0,"gradientfillstopdown",void 0,"__resetgradientcache",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_componentfocus$applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentfocus$applybasecolor$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onframe","$m64",null,"oninteriorbordercolor","$m65",null,"ongradientfillstartup","__resetgradientcache",null,"ongradientfillstopup","__resetgradientcache",null,"ongradientfillstartover","__resetgradientcache",null,"ongradientfillstopover","__resetgradientcache",null,"ongradientfillstartdown","__resetgradientcache",null,"ongradientfillstopdown","__resetgradientcache",null,"ongradientsideways","__resetgradientcache",null],$m66:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
}},$m67:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
}},$m68:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m69:function(){
return [this,"interiorbordercolor"]
},$m70:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m71:function(){
return [this,"interiorfillcolor"]
},$m72:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m73:function(){
return [this,"interiorbordercolor"]
},$m74:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m75:function(){
return [this,"interiorfillcolor"]
},$m76:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m77:function(){
return [this,"interiorbordercolor"]
},$m78:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m79:function(){
return [this,"interiorfillcolor"]
},$m80:function($0){
with(this){
this.setAttribute("gradientfillstartup",LzColorUtils.convertColor("void(0)"))
}},$m81:function($0){
with(this){
this.setAttribute("gradientfillstopup",LzColorUtils.convertColor("void(0)"))
}},$m82:function($0){
with(this){
this.setAttribute("gradientfillstartover",LzColorUtils.convertColor("void(0)"))
}},$m83:function($0){
with(this){
this.setAttribute("gradientfillstopover",LzColorUtils.convertColor("void(0)"))
}},$m84:function($0){
with(this){
this.setAttribute("gradientfillstartdown",LzColorUtils.convertColor("void(0)"))
}},$m85:function($0){
with(this){
this.setAttribute("gradientfillstopdown",LzColorUtils.convertColor("void(0)"))
}},gradientfillstartdown:new LzStyleConstraintExpr("gradientfillstartdown","gradientfill-start-down","color",new LzOnceExpr("$m84")),gradientfillstartover:new LzStyleConstraintExpr("gradientfillstartover","gradientfill-start-over","color",new LzOnceExpr("$m82")),gradientfillstartup:new LzStyleConstraintExpr("gradientfillstartup","gradientfill-start-up","color",new LzOnceExpr("$m80")),gradientfillstopdown:new LzStyleConstraintExpr("gradientfillstopdown","gradientfill-stop-down","color",new LzOnceExpr("$m85")),gradientfillstopover:new LzStyleConstraintExpr("gradientfillstopover","gradientfill-stop-over","color",new LzOnceExpr("$m83")),gradientfillstopup:new LzStyleConstraintExpr("gradientfillstopup","gradientfill-stop-up","color",new LzOnceExpr("$m81")),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m66")),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","interior-border-color-down","color",new LzAlwaysExpr("$m76","$m77")),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","interior-border-color-over","color",new LzAlwaysExpr("$m72","$m73")),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","interior-border-color-up","color",new LzAlwaysExpr("$m68","$m69")),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m67")),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","interior-fill-color-down","color",new LzAlwaysExpr("$m78","$m79")),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","interior-fill-color-over","color",new LzAlwaysExpr("$m74","$m75")),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","interior-fill-color-up","color",new LzAlwaysExpr("$m70","$m71")),mousestate:"up",vertical:false},$lzc$class_drawbutton$componentfocus$applybasecolor$basepanel.attributes)
}}})($lzc$class_drawbutton$componentfocus$applybasecolor$basepanel);Class.make("$lzc$class_buttonevents$drawbutton$componentfocus$applybasecolor$basepanel",$lzc$class_drawbutton$componentfocus$applybasecolor$basepanel,["mouseisover",void 0,"mouseisdown",void 0,"$m54",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m55",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m56",function($0){
this.setAttribute("mouseisover",true)
},"$m57",function($0){
this.setAttribute("mouseisover",false)
},"$m58",function($0){
this.setAttribute("mouseisdown",true)
},"$m59",function($0){
this.setAttribute("mouseisdown",false)
},"$m60",function($0){
this.onmouseover.sendEvent()
},"$m61",function($0){
this.onmouseout.sendEvent()
},"$m62",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m63",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_drawbutton$componentfocus$applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawbutton$componentfocus$applybasecolor$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m55","$m54","onmouseover","$m56",null,"onmouseout","$m57",null,"onmousedown","$m58",null,"onmouseup","$m59",null,"onfocus","$m60",null,"onblur","$m61",null,"onkeydown","$m62",null,"onkeyup","$m63",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents$drawbutton$componentfocus$applybasecolor$basepanel.attributes)
}}})($lzc$class_buttonevents$drawbutton$componentfocus$applybasecolor$basepanel);Class.make("$lzc$class_componentmodel$buttonevents$drawbutton$componentfocus$applybasecolor$basepanel",$lzc$class_buttonevents$drawbutton$componentfocus$applybasecolor$basepanel,["value",void 0,"disabled",void 0,"$m50",function($0){
with(this){
var $1=!disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}}},"$m51",function(){
return [this,"disabled"]
},"$m52",function($0){
with(this){
var $1=!disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}}},"$m53",function(){
return [this,"disabled"]
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
}],["children",LzNode.mergeChildren([],$lzc$class_buttonevents$drawbutton$componentfocus$applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_buttonevents$drawbutton$componentfocus$applybasecolor$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("$m52","$m53"),disabled:false,focusable:new LzAlwaysExpr("$m50","$m51"),value:""},$lzc$class_componentmodel$buttonevents$drawbutton$componentfocus$applybasecolor$basepanel.attributes)
}}})($lzc$class_componentmodel$buttonevents$drawbutton$componentfocus$applybasecolor$basepanel);Class.make("$lzc$class_bsbtn",$lzc$class_componentmodel$buttonevents$drawbutton$componentfocus$applybasecolor$basepanel,["$lzsc$initialize",function($0,$1,$2,$3){
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
}],["tagname","bsbtn","children",LzNode.mergeChildren([],$lzc$class_componentmodel$buttonevents$drawbutton$componentfocus$applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentmodel$buttonevents$drawbutton$componentfocus$applybasecolor$basepanel.attributes)]);Class.make("$lzc$class_m96",LzText,["$m94",function($0){
with(this){
var $1=classroot.text;if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}}},"$m95",function(){
with(this){
return [classroot,"text"]
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
}],["attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_btn",$lzc$class_bsbtn,["$m90",function($0){
var $1=this.txt.height+2;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$m91",function(){
return [this.txt,"height"]
},"$m92",function($0){
var $1=this.txt.width+4;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$m93",function(){
return [this.txt,"width"]
},"text",void 0,"txt",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
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
}],["tagname","btn","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,align:"center",name:"txt",text:new LzAlwaysExpr("$m94","$m95"),valign:"middle"},"class":$lzc$class_m96}],$lzc$class_bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({height:new LzAlwaysExpr("$m90","$m91"),text:"",width:new LzAlwaysExpr("$m92","$m93")},$lzc$class_btn.attributes)
}}})($lzc$class_btn);Mixin.make("$lzc$class_drawinputtext",null,["borderopacity",void 0,"doFocus",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.disabled){
this.setAttribute("borderopacity",0);this.animate("borderopacity",1,this.focusanimationspeed);this.focused=true;this.redraw()
}},"doBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=this.animate("borderopacity",0,this.focusanimationspeed);new LzDelegate(this,"finishBlur",$1,"onstop");this.redraw()
},"finishBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.focused=false;this.setAttribute("borderopacity",1)
},"draw",function($0){
with(this){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;$0.rect(1,0,this.width-1,this.height,$0.cornerradius);$0.lineWidth=$0.borderwidth;$0.strokeStyle=this.focused?$0.highlightcolor:$0.interiorbordercolor;$0.fillStyle=$0.interiorfillcolor;$0.fill();var $1=$0.globalAlpha;$0.globalAlpha=borderopacity;$0.stroke();$0.globalAlpha=$1
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
}],["tagname","drawinputtext","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onborderopacity","redraw",null],borderopacity:1},$lzc$class_drawinputtext.attributes)
}}})($lzc$class_drawinputtext);Class.make("$lzc$class_componentfocus$inputtext",LzInputText,["focusanimationspeed",void 0,"doFocus",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=10;if(this.capabilities.minimize_opacity_changes){
$1=2
};if(!this.disabled)this.animate("shadowblurradius",$1,this.focusanimationspeed)
},"doBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.animate("shadowblurradius",0,this.focusanimationspeed)
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
}],["attributes",new LzInheritedHash(LzInputText.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","doFocus",null,"onblur","doBlur",null],focusanimationspeed:500,shadowblurradius:0,shadowcolor:LzColorUtils.convertColor("0xcc"),shadowdistance:0},$lzc$class_componentfocus$inputtext.attributes)
}}})($lzc$class_componentfocus$inputtext);Class.make("$lzc$class_virtualdrawview$componentfocus$inputtext",$lzc$class_componentfocus$inputtext,["drawtarget",void 0,"ondrawtarget",void 0,"init",function(){
with(this){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
}},"$lzc$set_drawtarget",function($0){
with(this){
if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.drawtarget=$0;$0.addScope(this);if(this.ondrawtarget.ready)this.ondrawtarget.sendEvent($0)
}}},"redraw",function($0){
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
}],["attributes",new LzInheritedHash($lzc$class_componentfocus$inputtext.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview$componentfocus$inputtext.attributes)
}}})($lzc$class_virtualdrawview$componentfocus$inputtext);Class.make("$lzc$class_drawinputtext$virtualdrawview$componentfocus$inputtext",$lzc$class_virtualdrawview$componentfocus$inputtext,["borderopacity",void 0,"doFocus",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.disabled){
this.setAttribute("borderopacity",0);this.animate("borderopacity",1,this.focusanimationspeed);this.focused=true;this.redraw()
}},"doBlur",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};var $1=this.animate("borderopacity",0,this.focusanimationspeed);new LzDelegate(this,"finishBlur",$1,"onstop");this.redraw()
}},"finishBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.focused=false;this.setAttribute("borderopacity",1)
},"draw",function($0){
with(this){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;$0.rect(1,0,this.width-1,this.height,$0.cornerradius);$0.lineWidth=$0.borderwidth;$0.strokeStyle=this.focused?$0.highlightcolor:$0.interiorbordercolor;$0.fillStyle=$0.interiorfillcolor;$0.fill();var $1=$0.globalAlpha;$0.globalAlpha=borderopacity;$0.stroke();$0.globalAlpha=$1
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
}],["attributes",new LzInheritedHash($lzc$class_virtualdrawview$componentfocus$inputtext.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onborderopacity","redraw",null],borderopacity:1},$lzc$class_drawinputtext$virtualdrawview$componentfocus$inputtext.attributes)
}}})($lzc$class_drawinputtext$virtualdrawview$componentfocus$inputtext);Class.make("$lzc$class_inpt",$lzc$class_drawinputtext$virtualdrawview$componentfocus$inputtext,["$lzsc$initialize",function($0,$1,$2,$3){
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
}],["tagname","inpt","attributes",new LzInheritedHash($lzc$class_drawinputtext$virtualdrawview$componentfocus$inputtext.attributes)]);Class.make("$lzc$class_virtualdrawview$view",LzView,["drawtarget",void 0,"ondrawtarget",void 0,"init",function(){
with(this){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
}},"$lzc$set_drawtarget",function($0){
with(this){
if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.drawtarget=$0;$0.addScope(this);if(this.ondrawtarget.ready)this.ondrawtarget.sendEvent($0)
}}},"redraw",function($0){
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
}],["attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview$view.attributes)
}}})($lzc$class_virtualdrawview$view);Class.make("$lzc$class_componentfocus$virtualdrawview$view",$lzc$class_virtualdrawview$view,["focusanimationspeed",void 0,"doFocus",function($0){
switch(arguments.length){
case 0:
$0=null;

};var $1=10;if(this.capabilities.minimize_opacity_changes){
$1=2
};if(!this.disabled)this.animate("shadowblurradius",$1,this.focusanimationspeed)
},"doBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.animate("shadowblurradius",0,this.focusanimationspeed)
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
}],["attributes",new LzInheritedHash($lzc$class_virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","doFocus",null,"onblur","doBlur",null],focusanimationspeed:500,shadowblurradius:0,shadowcolor:LzColorUtils.convertColor("0xcc"),shadowdistance:0},$lzc$class_componentfocus$virtualdrawview$view.attributes)
}}})($lzc$class_componentfocus$virtualdrawview$view);Class.make("$lzc$class_mousedownrepeater$componentfocus$virtualdrawview$view",$lzc$class_componentfocus$virtualdrawview$view,["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
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
}}},"$m118",function($0){
with(this){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
}},"$m119",function($0){
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
}],["attributes",new LzInheritedHash($lzc$class_componentfocus$virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousedown","$m118",null,"onmouseup","$m119",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater$componentfocus$virtualdrawview$view.attributes)
}}})($lzc$class_mousedownrepeater$componentfocus$virtualdrawview$view);Class.make("$lzc$class_buttonevents$mousedownrepeater$componentfocus$virtualdrawview$view",$lzc$class_mousedownrepeater$componentfocus$virtualdrawview$view,["mouseisover",void 0,"mouseisdown",void 0,"$m108",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m109",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m110",function($0){
this.setAttribute("mouseisover",true)
},"$m111",function($0){
this.setAttribute("mouseisover",false)
},"$m112",function($0){
this.setAttribute("mouseisdown",true)
},"$m113",function($0){
this.setAttribute("mouseisdown",false)
},"$m114",function($0){
this.onmouseover.sendEvent()
},"$m115",function($0){
this.onmouseout.sendEvent()
},"$m116",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m117",function($0){
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
}],["attributes",new LzInheritedHash($lzc$class_mousedownrepeater$componentfocus$virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m109","$m108","onmouseover","$m110",null,"onmouseout","$m111",null,"onmousedown","$m112",null,"onmouseup","$m113",null,"onfocus","$m114",null,"onblur","$m115",null,"onkeydown","$m116",null,"onkeyup","$m117",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents$mousedownrepeater$componentfocus$virtualdrawview$view.attributes)
}}})($lzc$class_buttonevents$mousedownrepeater$componentfocus$virtualdrawview$view);Class.make("$lzc$class_applybasecolor$buttonevents$mousedownrepeater$componentfocus$virtualdrawview$view",$lzc$class_buttonevents$mousedownrepeater$componentfocus$virtualdrawview$view,["borderwidth",void 0,"$m104",void 0,"bordercolor",void 0,"$m105",void 0,"basecolor",void 0,"highlightcolor",void 0,"$m106",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m107",function($0){
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
};if(this.redraw)this.redraw()
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
}],["attributes",new LzInheritedHash($lzc$class_buttonevents$mousedownrepeater$componentfocus$virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m106",null,"onbasecolor","$m107",null],$m104:function($0){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("void 0"))
}},$m105:function($0){
with(this){
this.setAttribute("basecolor",LzColorUtils.convertColor("void 0"))
}},basecolor:new LzStyleConstraintExpr("basecolor","base-color","color",new LzOnceExpr("$m105")),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",new LzOnceExpr("$m104")),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0),highlightcolor:new LzStyleConstraintExpr("highlightcolor","highlight-color","color",LzColorUtils.convertColor("0xff"))},$lzc$class_applybasecolor$buttonevents$mousedownrepeater$componentfocus$virtualdrawview$view.attributes)
}}})($lzc$class_applybasecolor$buttonevents$mousedownrepeater$componentfocus$virtualdrawview$view);Class.make("$lzc$class_scrlstepbtn",$lzc$class_applybasecolor$buttonevents$mousedownrepeater$componentfocus$virtualdrawview$view,["$m97",function($0){
var $1=this.width;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$m98",function(){
return [this,"width"]
},"$m99",function($0){
this.setAttribute("opacity",0.1)
},"$m100",function($0){
this.animate("opacity",$0?0.8:0.1,200);this.classroot.setAttribute("activated",$0)
},"direction",void 0,"$m101",function($0){
this.classroot.step(this.direction);this.classroot.setAttribute("activated",true)
},"$m102",function($0){
this.classroot.step(this.direction);this.classroot.setAttribute("activated",true)
},"$m103",function($0){
if($0==37||$0==38){
this.classroot.step(-1);this.classroot.setAttribute("activated",true)
}else if($0==39||$0==40){
this.classroot.step(1);this.classroot.setAttribute("activated",true)
}},"draw",function($0){
if(!$0["interiorbordercolor"])return;$0.beginPath();var $1=2;var $2=2;var $3=this.width-2;var $4=this.height-2;if(this.direction<0){
$0.moveTo($1,$4);$0.lineTo(($3+$1)*0.5,$2);$0.lineTo($3,$4);$0.moveTo($1,$4)
}else{
$0.moveTo($1,$2);$0.lineTo(($3+$1)*0.5,$4);$0.lineTo($3,$2);$0.moveTo($1,$2)
};var $5=$0.globalAlpha;$0.globalAlpha=this.opacity;$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.fillStyle=$0.interiorbordercolor;$0.fill();$0.globalAlpha=$5
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
}],["tagname","scrlstepbtn","attributes",new LzInheritedHash($lzc$class_applybasecolor$buttonevents$mousedownrepeater$componentfocus$virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m99",null,"onmouseisover","$m100",null,"onmousedown","$m101",null,"onmousestilldown","$m102",null,"onkeydown","$m103",null,"onopacity","redraw",null],clickable:true,direction:1,focusable:true,height:new LzAlwaysExpr("$m97","$m98")},$lzc$class_scrlstepbtn.attributes)
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
}}},"$m133",function($0){
with(this){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
}},"$m134",function($0){
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
}],["attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousedown","$m133",null,"onmouseup","$m134",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater$view.attributes)
}}})($lzc$class_mousedownrepeater$view);Class.make("$lzc$class_buttonevents$mousedownrepeater$view",$lzc$class_mousedownrepeater$view,["mouseisover",void 0,"mouseisdown",void 0,"$m123",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m124",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m125",function($0){
this.setAttribute("mouseisover",true)
},"$m126",function($0){
this.setAttribute("mouseisover",false)
},"$m127",function($0){
this.setAttribute("mouseisdown",true)
},"$m128",function($0){
this.setAttribute("mouseisdown",false)
},"$m129",function($0){
this.onmouseover.sendEvent()
},"$m130",function($0){
this.onmouseout.sendEvent()
},"$m131",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m132",function($0){
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
}],["attributes",new LzInheritedHash($lzc$class_mousedownrepeater$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m124","$m123","onmouseover","$m125",null,"onmouseout","$m126",null,"onmousedown","$m127",null,"onmouseup","$m128",null,"onfocus","$m129",null,"onblur","$m130",null,"onkeydown","$m131",null,"onkeyup","$m132",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents$mousedownrepeater$view.attributes)
}}})($lzc$class_buttonevents$mousedownrepeater$view);Class.make("$lzc$class_scrltrk",$lzc$class_buttonevents$mousedownrepeater$view,["direction",void 0,"$m120",function($0){
this.classroot.setAttribute("activated",$0)
},"$m121",function($0){
this.classroot.page(this.direction);this.classroot.setAttribute("activated",true)
},"$m122",function($0){
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
}],["tagname","scrltrk","attributes",new LzInheritedHash($lzc$class_buttonevents$mousedownrepeater$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseisover","$m120",null,"onmousedown","$m121",null,"onmousestilldown","$m122",null],clickable:true,direction:1},$lzc$class_scrltrk.attributes)
}}})($lzc$class_scrltrk);Class.make("$lzc$class_virtualdrawview$bsbtn",$lzc$class_bsbtn,["drawtarget",void 0,"ondrawtarget",void 0,"init",function(){
with(this){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
}},"$lzc$set_drawtarget",function($0){
with(this){
if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.drawtarget=$0;$0.addScope(this);if(this.ondrawtarget.ready)this.ondrawtarget.sendEvent($0)
}}},"redraw",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview$bsbtn.attributes)
}}})($lzc$class_virtualdrawview$bsbtn);Class.make("$lzc$class_scrlthmb",$lzc$class_virtualdrawview$bsbtn,["$m135",function($0){
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
}],["tagname","scrlthmb","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,$m136:function($0){
this.setAttribute("doffset",this.getMouse("y"))
},$m137:function($0){
var $1=this.thumbControl(this.immediateparent.getMouse("y"));if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}},$m138:function(){
return [].concat(this["$lzc$thumbControl_dependencies"]?this["$lzc$thumbControl_dependencies"](this,this,this.immediateparent.getMouse("y")):[]).concat(this.immediateparent["$lzc$getMouse_dependencies"]?this.immediateparent["$lzc$getMouse_dependencies"](this,this.immediateparent,"y"):[])
},doffset:new LzOnceExpr("$m136"),name:"ythumbdrag",y:new LzAlwaysExpr("$m137","$m138")},"class":LzState},{attrs:{$classrootdepth:1,$m139:function($0){
this.setAttribute("doffset",this.getMouse("x"))
},$m140:function($0){
var $1=this.thumbControl(this.immediateparent.getMouse("x"));if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}},$m141:function(){
return [].concat(this["$lzc$thumbControl_dependencies"]?this["$lzc$thumbControl_dependencies"](this,this,this.immediateparent.getMouse("x")):[]).concat(this.immediateparent["$lzc$getMouse_dependencies"]?this.immediateparent["$lzc$getMouse_dependencies"](this,this.immediateparent,"x"):[])
},doffset:new LzOnceExpr("$m139"),name:"xthumbdrag",x:new LzAlwaysExpr("$m140","$m141")},"class":LzState}],$lzc$class_virtualdrawview$bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_virtualdrawview$bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseisover","$m135",null,"onmousedown","startDrag",null,"onmouseup","stopDrag",null],axis:"",clickable:true,focusable:false,target:null,targetscroll:0,trackscroll:0,vertical:true},$lzc$class_scrlthmb.attributes)
}}})($lzc$class_scrlthmb);Mixin.make("$lzc$class_bsscrlbr",null,["scrolltarget",void 0,"axis",void 0,"$lzc$set_axis",function($0){
this.axis=$0;this.setAttribute("sizeAxis",$0=="x"?"width":"height");this.setAttribute("otherSizeAxis",$0=="y"?"width":"height")
},"sizeAxis",void 0,"otherSizeAxis",void 0,"$m142",function($0){
var $1=this.axis;if($1!==this["scrollattr"]||!this.inited){
this.setAttribute("scrollattr",$1)
}},"$m143",function(){
return [this,"axis"]
},"scrollattr",void 0,"scrollmax",void 0,"onscrollmax",void 0,"pagesize",void 0,"stepsize",void 0,"scrollable",void 0,"focusview",void 0,"usemousewheel",void 0,"$lzc$set_usemousewheel",function($0){
if($0==this.usemousewheel)return;this.usemousewheel=$0;if(this._mwUpdateDel){
this._mwUpdateDel.unregisterAll()
};if($0){
this._mwUpdateDel=new LzDelegate(this,"mousewheelUpdate",lz.Keys,"onmousewheeldelta")
}},"mousewheelevent_on",void 0,"mousewheelevent_off",void 0,"mousewheelactive",void 0,"onscrollable",void 0,"$m144",function($0){
var $1=this.enabled&&this.scrollable&&(this._parentcomponent?this._parentcomponent._enabled:true);if($1!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$1)
}},"$m145",function(){
return [this,"enabled",this,"scrollable",this,"_parentcomponent",this._parentcomponent,"_enabled"]
},"_enabled",void 0,"usetargetsize",void 0,"othersb",void 0,"thumb",void 0,"_mwActivateDel",void 0,"_mwDeactivateDel",void 0,"_mwUpdateDel",void 0,"clipSizeDel",void 0,"targetHeightDel",void 0,"targetPosDel",void 0,"heightDel",void 0,"heightConstraint",void 0,"widthConstraint",void 0,"init",function(){
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
}],["tagname","bsscrlbr","children",[{attrs:{$classrootdepth:1,$m146:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.height-this.othersb.height:this.immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},$m147:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"height",this.othersb,"height"]
},height:new LzAlwaysExpr("$m146","$m147"),name:"heightConstraint"},"class":LzState},{attrs:{$classrootdepth:1,$m148:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.width-this.othersb.width:this.immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},$m149:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"width",this.othersb,"width"]
},name:"widthConstraint",width:new LzAlwaysExpr("$m148","$m149")},"class":LzState}],"attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("$m144","$m145"),_mwActivateDel:null,_mwDeactivateDel:null,_mwUpdateDel:null,axis:"y",clipSizeDel:null,focusview:null,heightDel:null,mousewheelactive:false,mousewheelevent_off:"onblur",mousewheelevent_on:"onfocus",onscrollable:LzDeclaredEvent,onscrollmax:LzDeclaredEvent,otherSizeAxis:"width",othersb:null,pagesize:null,scrollable:true,scrollattr:new LzAlwaysExpr("$m142","$m143"),scrollmax:null,scrolltarget:null,sizeAxis:"height",stepsize:10,targetHeightDel:null,targetPosDel:null,thumb:null,usemousewheel:true,usetargetsize:false},$lzc$class_bsscrlbr.attributes)
}}})($lzc$class_bsscrlbr);Class.make("$lzc$class_bsscrlbr$basepanel",$lzc$class_basepanel,["scrolltarget",void 0,"axis",void 0,"$lzc$set_axis",function($0){
this.axis=$0;this.setAttribute("sizeAxis",$0=="x"?"width":"height");this.setAttribute("otherSizeAxis",$0=="y"?"width":"height")
},"sizeAxis",void 0,"otherSizeAxis",void 0,"$m188",function($0){
var $1=this.axis;if($1!==this["scrollattr"]||!this.inited){
this.setAttribute("scrollattr",$1)
}},"$m189",function(){
return [this,"axis"]
},"scrollattr",void 0,"scrollmax",void 0,"onscrollmax",void 0,"pagesize",void 0,"stepsize",void 0,"scrollable",void 0,"focusview",void 0,"usemousewheel",void 0,"$lzc$set_usemousewheel",function($0){
with(this){
if($0==this.usemousewheel)return;this.usemousewheel=$0;if(this._mwUpdateDel){
this._mwUpdateDel.unregisterAll()
};if($0){
this._mwUpdateDel=new LzDelegate(this,"mousewheelUpdate",lz.Keys,"onmousewheeldelta")
}}},"mousewheelevent_on",void 0,"mousewheelevent_off",void 0,"mousewheelactive",void 0,"onscrollable",void 0,"$m190",function($0){
var $1=this.enabled&&this.scrollable&&(this._parentcomponent?this._parentcomponent._enabled:true);if($1!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$1)
}},"$m191",function(){
return [this,"enabled",this,"scrollable",this,"_parentcomponent",this._parentcomponent,"_enabled"]
},"_enabled",void 0,"usetargetsize",void 0,"othersb",void 0,"thumb",void 0,"_mwActivateDel",void 0,"_mwDeactivateDel",void 0,"_mwUpdateDel",void 0,"clipSizeDel",void 0,"targetHeightDel",void 0,"targetPosDel",void 0,"heightDel",void 0,"heightConstraint",void 0,"widthConstraint",void 0,"init",function(){
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
}],["children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,$m192:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.height-this.othersb.height:this.immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},$m193:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"height",this.othersb,"height"]
},height:new LzAlwaysExpr("$m192","$m193"),name:"heightConstraint"},"class":LzState},{attrs:{$classrootdepth:1,$m194:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.width-this.othersb.width:this.immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},$m195:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"width",this.othersb,"width"]
},name:"widthConstraint",width:new LzAlwaysExpr("$m194","$m195")},"class":LzState}],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("$m190","$m191"),_mwActivateDel:null,_mwDeactivateDel:null,_mwUpdateDel:null,axis:"y",clipSizeDel:null,focusview:null,heightDel:null,mousewheelactive:false,mousewheelevent_off:"onblur",mousewheelevent_on:"onfocus",onscrollable:LzDeclaredEvent,onscrollmax:LzDeclaredEvent,otherSizeAxis:"width",othersb:null,pagesize:null,scrollable:true,scrollattr:new LzAlwaysExpr("$m188","$m189"),scrollmax:null,scrolltarget:null,sizeAxis:"height",stepsize:10,targetHeightDel:null,targetPosDel:null,thumb:null,usemousewheel:true,usetargetsize:false},$lzc$class_bsscrlbr$basepanel.attributes)
}}})($lzc$class_bsscrlbr$basepanel);Class.make("$lzc$class_buttonevents$bsscrlbr$basepanel",$lzc$class_bsscrlbr$basepanel,["mouseisover",void 0,"mouseisdown",void 0,"$m178",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m179",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m180",function($0){
this.setAttribute("mouseisover",true)
},"$m181",function($0){
this.setAttribute("mouseisover",false)
},"$m182",function($0){
this.setAttribute("mouseisdown",true)
},"$m183",function($0){
this.setAttribute("mouseisdown",false)
},"$m184",function($0){
this.onmouseover.sendEvent()
},"$m185",function($0){
this.onmouseout.sendEvent()
},"$m186",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m187",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_bsscrlbr$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_bsscrlbr$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m179","$m178","onmouseover","$m180",null,"onmouseout","$m181",null,"onmousedown","$m182",null,"onmouseup","$m183",null,"onfocus","$m184",null,"onblur","$m185",null,"onkeydown","$m186",null,"onkeyup","$m187",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents$bsscrlbr$basepanel.attributes)
}}})($lzc$class_buttonevents$bsscrlbr$basepanel);Class.make("$lzc$class_m197",$lzc$class_scrltrk,["$m158",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m159",function(){
with(this){
return [parent,"width"]
}},"$m160",function($0){
with(this){
var $1=parent.thumb.y;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m161",function(){
with(this){
return [parent.thumb,"y"]
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
}],["attributes",new LzInheritedHash($lzc$class_scrltrk.attributes)]);Class.make("$lzc$class_m198",$lzc$class_scrlthmb,["$m162",function($0){
with(this){
var $1=parent.width-2;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m163",function(){
with(this){
return [parent,"width"]
}},"$m164",function($0){
with(this){
var $1=classroot;if($1!==this["drawtarget"]||!this.inited){
this.setAttribute("drawtarget",$1)
}}},"$m165",function(){
return [this,"classroot"]
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
}],["children",LzNode.mergeChildren([],$lzc$class_scrlthmb["children"]),"attributes",new LzInheritedHash($lzc$class_scrlthmb.attributes)]);Class.make("$lzc$class_m199",$lzc$class_scrltrk,["$m166",function($0){
with(this){
var $1=parent.thumb.y+parent.thumb.height;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m167",function(){
with(this){
return [parent.thumb,"y",parent.thumb,"height"]
}},"$m168",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m169",function(){
with(this){
return [parent,"width"]
}},"$m170",function($0){
with(this){
var $1=parent.height-parent.thumb.y-parent.thumb.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m171",function(){
with(this){
return [parent,"height",parent.thumb,"y",parent.thumb,"height"]
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
}],["attributes",new LzInheritedHash($lzc$class_scrltrk.attributes)]);Class.make("$lzc$class_m196",LzView,["$m154",function($0){
with(this){
var $1=immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m155",function(){
with(this){
return [immediateparent,"width"]
}},"$m156",function($0){
with(this){
var $1=immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m157",function(){
with(this){
return [immediateparent,"height"]
}},"thumb",void 0,"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
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
}],["children",[{attrs:{$classrootdepth:2,direction:-1,height:new LzAlwaysExpr("$m160","$m161"),width:new LzAlwaysExpr("$m158","$m159")},"class":$lzc$class_m197},{attrs:{$classrootdepth:2,drawtarget:new LzAlwaysExpr("$m164","$m165"),name:"thumb",width:new LzAlwaysExpr("$m162","$m163"),x:1},"class":$lzc$class_m198},{attrs:{$classrootdepth:2,direction:1,height:new LzAlwaysExpr("$m170","$m171"),width:new LzAlwaysExpr("$m168","$m169"),y:new LzAlwaysExpr("$m166","$m167")},"class":$lzc$class_m199}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_m200",$lzc$class_scrlstepbtn,["$m172",function($0){
with(this){
var $1=parent.width-2;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m173",function(){
with(this){
return [parent,"width"]
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
}],["attributes",new LzInheritedHash($lzc$class_scrlstepbtn.attributes)]);Class.make("$lzc$class_m201",$lzc$class_scrlstepbtn,["$m174",function($0){
with(this){
var $1=parent.height-this.height;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m175",function(){
with(this){
return [parent,"height",this,"height"]
}},"$m176",function($0){
with(this){
var $1=parent.width-2;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m177",function(){
with(this){
return [parent,"width"]
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
}],["attributes",new LzInheritedHash($lzc$class_scrlstepbtn.attributes)]);Class.make("$lzc$class_scrlbr",$lzc$class_buttonevents$bsscrlbr$basepanel,["size",void 0,"$m150",function($0){
var $1=this.size;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$m151",function(){
return [this,"size"]
},"$m152",function($0){
with(this){
if(canvas.capabilities.minimize_opacity_changes){

}else{
this.setAttribute("opacity",0.4)
}}},"$m153",function($0){
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

};this.activated=true;if(canvas.capabilities.minimize_opacity_changes){

}else{
this.animate("opacity",1,200)
}}},"deactivate",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};this.activated=false;if(!this.isMouseOver()){
if(canvas.capabilities.minimize_opacity_changes){

}else{
this.animate("opacity",0.4,200)
}}}},"draw",function($0){
this.beginPath();this.rect(0,0,this.width,this.height,this.width);this.lineWidth=this.borderwidth;this.strokeStyle=this.interiorbordercolor;this.fillStyle=this.interiorfillcolor;this.fill();this.stroke()
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
}],["tagname","scrlbr","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,height:new LzAlwaysExpr("$m156","$m157"),name:"scrolltrack",thumb:void 0,width:new LzAlwaysExpr("$m154","$m155")},"class":$lzc$class_m196},{attrs:{$classrootdepth:1,direction:-1,width:new LzAlwaysExpr("$m172","$m173"),x:1},"class":$lzc$class_m200},{attrs:{$classrootdepth:1,direction:1,width:new LzAlwaysExpr("$m176","$m177"),x:1,y:new LzAlwaysExpr("$m174","$m175")},"class":$lzc$class_m201}],$lzc$class_buttonevents$bsscrlbr$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_buttonevents$bsscrlbr$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m152",null,"onmouseisover","$m153",null],activated:false,onactivated:LzDeclaredEvent,size:new LzStyleConstraintExpr("size","size","expression",16),width:new LzAlwaysExpr("$m150","$m151")},$lzc$class_scrlbr.attributes)
}}})($lzc$class_scrlbr);(function(){
var $0=LzCSSStyle,$1=LzCSSStyleRule;$0._addRule(new $1("basepanel",{"base-color":15921906,"border-width":0.5,"corner-radius":3}));$0._addRule(new $1("scrlbr",{"corner-radius":16,size:16}));$0._addRule(new $1("scrlthmb",{"corner-radius":20}))
})();Class.make("$lzc$class_m204",$lzc$class_btn,["$m202",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);Class.make("$lzc$class_m205",$lzc$class_btn,["$m203",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);canvas.LzInstantiateView({attrs:{x:10,y:10},children:[{attrs:{spacing:10},"class":$lzc$class_simplelayout},{attrs:{height:50,width:50},"class":$lzc$class_bsbtn},{attrs:{disabled:true,height:50,width:50},"class":$lzc$class_bsbtn},{attrs:{$delegates:["onclick","$m202",null],clickable:true,text:"ok"},"class":$lzc$class_m204},{attrs:{$delegates:["onclick","$m203",null],clickable:true,text:"cancel"},"class":$lzc$class_m205},{attrs:{text:"Hey there!",width:100},"class":$lzc$class_inpt},{attrs:{multiline:true,text:"Hey there! This text should wrap onto a few lines.",width:100},"class":$lzc$class_inpt},{attrs:{clip:true,height:200,width:200},children:[{attrs:{font:"Helvetica,Sans",fontsize:12,fontstyle:"plain",multiline:true,text:"Man through his scientific genius has been able to draw distance and save time and space. He has been able to carry highways through the stratosphere. We read just the other day that a rocket plane went 1900 miles in one hour. Twice as fast as the speed of sound. This is the new age. Bob Hope has described this new age, this jet age; it is an age in which planes will be moving so fast that we will have a non-stop flight from New York to Los Angeles, when you start out you might develop the hiccups and you will hic in New York and cup in Los Angeles. This is an age in which it will be possible to leave Tokyo on a Sunday morning and arrive in Seattle, Washington on the preceding Saturday night. When your friends meet you at the airport and ask what time did you leave Tokyo, you will have to say I left tomorrow. That is this new age. We live in one world geographically. We face the great problem of making it one spiritually.<br/>Through our scientific means we have made of the world a neighborhood and now the challenge confronts us through our moral and spiritual means to make of it a brotherhood. We must live together, we are not independent we are interdependent. We are all involved in a single process. Whatever affects one directly affects all indirectly for we are tied together in a single progress. We are all linked in the great chain of humanity.<br/>Martin Luther King, Jr.<br/>11 August 1956",width:184},"class":LzText},{"class":$lzc$class_scrlbr}],"class":LzView}],"class":$lzc$class_basepanel},21);lz["simplelayout"]=$lzc$class_simplelayout;lz["applybasecolor"]=$lzc$class_applybasecolor;lz["drawpanel"]=$lzc$class_drawpanel;lz["basepanel"]=$lzc$class_basepanel;lz["componentmodel"]=$lzc$class_componentmodel;lz["componentfocus"]=$lzc$class_componentfocus;lz["virtualdrawview"]=$lzc$class_virtualdrawview;lz["buttonevents"]=$lzc$class_buttonevents;lz["mousedownrepeater"]=$lzc$class_mousedownrepeater;lz["drawbutton"]=$lzc$class_drawbutton;lz["bsbtn"]=$lzc$class_bsbtn;lz["btn"]=$lzc$class_btn;lz["drawinputtext"]=$lzc$class_drawinputtext;lz["inpt"]=$lzc$class_inpt;lz["scrlstepbtn"]=$lzc$class_scrlstepbtn;lz["scrltrk"]=$lzc$class_scrltrk;lz["scrlthmb"]=$lzc$class_scrlthmb;lz["bsscrlbr"]=$lzc$class_bsscrlbr;lz["scrlbr"]=$lzc$class_scrlbr;canvas.initDone();