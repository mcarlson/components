canvas=new LzCanvas(null,{__LZproxied:"false",appbuilddate:"2010-03-13T02:24:04Z",bgcolor:16777215,embedfonts:true,font:"Helvetica,Sans",fontname:"Helvetica,Sans",fontsize:12,fontstyle:"plain",height:"100%",lpsbuild:"15898 /Users/maxcarlson/openlaszlo/trunk-clean",lpsbuilddate:"2010-03-12T23:58:15Z",lpsrelease:"Latest",lpsversion:"5.0.x",runtime:"dhtml",width:"100%"});Mixin.make("DrawviewShared",null,["$lzsc$initialize",function($0,$1,$2,$3){
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
return {x:($0.x+$1.x)/2,y:($0.y+$1.y)/2}},"globalAlpha",1,"lineWidth",1,"lineCap","butt","lineJoin","miter","miterLimit",10,"strokeStyle","#000000","fillStyle","#000000"],null);Class.make("$lzc$class_drawview",[DrawviewShared,LzView],["__globalAlpha",null,"__lineWidth",null,"__lineCap",null,"__lineJoin",null,"__miterLimit",null,"__strokeStyle",null,"__fillStyle",null,"__contextstates",null,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.createContext()
},"construct",function($0,$1){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["construct"]||this.nextMethod(arguments.callee,"construct")).call(this,$0,$1);this.__contextstates=[]
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
if(this.__path.length==0)return;this.__updateLineStyle();this.__updateFillStyle();this.context.beginPath();var $0=this.aliaslines&&this.lineWidth%2?0.5:0;for(var $1=0;$1<this.__path.length;$1+=1){
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
this.__updateFillStyle();this.context.fillRect($0,$1,$2,$3)
},"clearRect",function($0,$1,$2,$3){
this.context.clearRect($0,$1,$2,$3)
},"strokeRect",function($0,$1,$2,$3){
this.__updateLineStyle();this.context.strokeRect($0,$1,$2,$3)
}],["tagname","drawview","attributes",new LzInheritedHash(LzView.attributes),"__colorcache",{},"images",{}]);lz[$lzc$class_drawview.tagname]=$lzc$class_drawview;Class.make("LzCanvasGradient",null,["__context",null,"__g",null,"$lzsc$initialize",function($0,$1,$2){
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
}}})($lzc$class_simplelayout);Mixin.make("$lzc$class_drawarrow",null,["drawarrow",function($0,$1,$2,$3,$4,$5){
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
}],["tagname","drawarrow","attributes",new LzInheritedHash(LzView.attributes)]);Mixin.make("$lzc$class_applybasecolor",null,["borderwidth",void 0,"$m1",void 0,"bordercolor",void 0,"$m2",void 0,"basecolor",void 0,"highlightcolor",void 0,"$m3",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m4",function($0){
if(!this.isinited)return;if(!$0)return;var $1=LzColorUtils.tohsv($0);if(!this.bordercolor){
this.setAttribute("bordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.4039))
};if(!this.interiorfillcolor){
this.setAttribute("interiorfillcolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this.interiorbordercolor){
this.setAttribute("interiorbordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.2196))
};if(!this["gradientfillstartup"]){
this.setAttribute("gradientfillstartup",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.1098))
};if(!this["gradientfillstopup"]){
this.setAttribute("gradientfillstopup",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this["gradientfillstartover"]){
this.setAttribute("gradientfillstartover",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.047))
};if(!this["gradientfillstopover"]){
this.setAttribute("gradientfillstopover",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.0039))
};if(!this["gradientfillstartdown"]){
this.setAttribute("gradientfillstartdown",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.0862))
};if(!this["gradientfillstopdown"]){
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
this.setAttribute("bordercolor",LzColorUtils.convertColor("null"))
},$m2:function($0){
this.setAttribute("basecolor",LzColorUtils.convertColor("null"))
},basecolor:new LzStyleConstraintExpr("basecolor","base-color","color",new LzOnceExpr("$m2"),false),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",new LzOnceExpr("$m1"),false),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0,false),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0,false),highlightcolor:new LzStyleConstraintExpr("highlightcolor","highlight-color","color",LzColorUtils.convertColor("0xff"),false)},$lzc$class_applybasecolor.attributes)
}}})($lzc$class_applybasecolor);Class.make("$lzc$class_drawpanel",$lzc$class_drawview,["lockredraw",void 0,"redraw",function($0){
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
}],["tagname","drawpanel","children",LzNode.mergeChildren([],$lzc$class_drawview["children"]),"attributes",new LzInheritedHash($lzc$class_drawview.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","redraw",null,"onheight","redraw",null,"oncontext","redraw",null],aliaslines:true,lockredraw:false,measuresize:false},$lzc$class_drawpanel.attributes)
}}})($lzc$class_drawpanel);Class.make("$lzc$class_applybasecolor$drawpanel",$lzc$class_drawpanel,["borderwidth",void 0,"$m5",void 0,"bordercolor",void 0,"$m6",void 0,"basecolor",void 0,"highlightcolor",void 0,"$m7",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m8",function($0){
with(this){
if(!this.isinited)return;if(!$0)return;var $1=LzColorUtils.tohsv($0);if(!this.bordercolor){
this.setAttribute("bordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.4039))
};if(!this.interiorfillcolor){
this.setAttribute("interiorfillcolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this.interiorbordercolor){
this.setAttribute("interiorbordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.2196))
};if(!this["gradientfillstartup"]){
this.setAttribute("gradientfillstartup",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.1098))
};if(!this["gradientfillstopup"]){
this.setAttribute("gradientfillstopup",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this["gradientfillstartover"]){
this.setAttribute("gradientfillstartover",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.047))
};if(!this["gradientfillstopover"]){
this.setAttribute("gradientfillstopover",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.0039))
};if(!this["gradientfillstartdown"]){
this.setAttribute("gradientfillstartdown",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.0862))
};if(!this["gradientfillstopdown"]){
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
LzNode.mergeAttributes({$delegates:["oninit","$m7",null,"onbasecolor","$m8",null],$m5:function($0){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("null"))
}},$m6:function($0){
with(this){
this.setAttribute("basecolor",LzColorUtils.convertColor("null"))
}},basecolor:new LzStyleConstraintExpr("basecolor","base-color","color",new LzOnceExpr("$m6"),false),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",new LzOnceExpr("$m5"),false),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0,false),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0,false),highlightcolor:new LzStyleConstraintExpr("highlightcolor","highlight-color","color",LzColorUtils.convertColor("0xff"),false)},$lzc$class_applybasecolor$drawpanel.attributes)
}}})($lzc$class_applybasecolor$drawpanel);Class.make("$lzc$class_basepanel",$lzc$class_applybasecolor$drawpanel,["scopes",void 0,"drawchildren",void 0,"$m9",void 0,"$m10",void 0,"interiorbordercolor",void 0,"$m11",void 0,"interiorfillcolor",void 0,"$m12",void 0,"$m13",void 0,"bordertopleftradius",void 0,"$m14",void 0,"$m15",void 0,"bordertoprightradius",void 0,"$m16",void 0,"$m17",void 0,"borderbottomrightradius",void 0,"$m18",void 0,"$m19",void 0,"borderbottomleftradius",void 0,"redraw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited||this.lockredraw)return;this.clear();if(this["draw"]){
this.draw(this)
};if(this.scopes&&this.scopes.length&&this.drawchildren){
this.__drawchildren()
};if(this["drawlast"]){
this.drawlast(this)
}},"__drawchildren",function($0){
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
this._rect($0,$1,$2,$3,$4,this.bordertopleftradius,this.borderbottomleftradius,this.borderbottomrightradius,this.bordertoprightradius)
},"range",function($0,$1,$2){
switch(arguments.length){
case 2:
$2=null;

};$0=$0>$1?$1:$0;if($2!=null){
$0=$0<$2?$2:$0
};return $0
},"_rect",function($0,$1,$2,$3,$4,$5,$6,$7,$8){
with(this){
switch(arguments.length){
case 5:
$5=0;
case 6:
$6=0;
case 7:
$7=0;
case 8:
$8=0;

};var $9=Math.min($3,$4)*0.5;$5=this.range($5,$9,0);$6=this.range($6||$5,$9,0);$7=this.range($7||$5,$9,0);$8=this.range($8||$5,$9,0);var $a=$0["curveTo"]?"curveTo":"quadraticCurveTo";$0.moveTo($1,$2+$5);$0.lineTo($1,$2+$4-$6);if($6!=0){
$0[$a]($1,$2+$4,$1+$6,$2+$4)
};$0.lineTo($1+$3-$7,$2+$4);if($7!=0){
$0[$a]($1+$3,$2+$4,$1+$3,$2+$4-$7)
};$0.lineTo($1+$3,$2+$8);if($8!=0){
$0[$a]($1+$3,$2,$1+$3-$8,$2)
};$0.lineTo($1+$5,$2);if($5!=0){
$0[$a]($1,$2,$1,$2+$5)
}}},"addScope",function($0){
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
}],["tagname","basepanel","children",LzNode.mergeChildren([],$lzc$class_applybasecolor$drawpanel["children"]),"attributes",new LzInheritedHash($lzc$class_applybasecolor$drawpanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$m10:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("null"))
}},$m11:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("null"))
}},$m12:function($0){
with(this){
var $1=cornerradius;if($1!==this["bordertopleftradius"]||!this.inited){
this.setAttribute("bordertopleftradius",$1)
}}},$m13:function(){
return [this,"cornerradius"]
},$m14:function($0){
with(this){
var $1=cornerradius;if($1!==this["bordertoprightradius"]||!this.inited){
this.setAttribute("bordertoprightradius",$1)
}}},$m15:function(){
return [this,"cornerradius"]
},$m16:function($0){
with(this){
var $1=cornerradius;if($1!==this["borderbottomrightradius"]||!this.inited){
this.setAttribute("borderbottomrightradius",$1)
}}},$m17:function(){
return [this,"cornerradius"]
},$m18:function($0){
with(this){
var $1=cornerradius;if($1!==this["borderbottomleftradius"]||!this.inited){
this.setAttribute("borderbottomleftradius",$1)
}}},$m19:function(){
return [this,"cornerradius"]
},$m9:function($0){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("null"))
}},borderbottomleftradius:new LzStyleConstraintExpr("borderbottomleftradius","border-bottom-left-radius","number",new LzAlwaysExpr("$m18","$m19"),false),borderbottomrightradius:new LzStyleConstraintExpr("borderbottomrightradius","border-bottom-right-radius","number",new LzAlwaysExpr("$m16","$m17"),false),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",new LzOnceExpr("$m9"),false),bordertopleftradius:new LzStyleConstraintExpr("bordertopleftradius","border-top-left-radius","number",new LzAlwaysExpr("$m12","$m13"),false),bordertoprightradius:new LzStyleConstraintExpr("bordertoprightradius","border-top-right-radius","number",new LzAlwaysExpr("$m14","$m15"),false),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0,false),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0,false),drawchildren:true,interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m10"),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m11"),false),scopes:null},$lzc$class_basepanel.attributes)
}}})($lzc$class_basepanel);Mixin.make("$lzc$class_virtualdrawview",null,["drawtarget",void 0,"ondrawtarget",void 0,"init",function(){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0)
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
}],["tagname","virtualdrawview","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview.attributes)
}}})($lzc$class_virtualdrawview);Mixin.make("$lzc$class_componentmodel",null,["value",void 0,"disabled",void 0,"$m20",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$m21",function(){
return [this,"disabled"]
},"$m22",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$m23",function(){
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
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("$m22","$m23"),disabled:false,focusable:new LzAlwaysExpr("$m20","$m21"),value:""},$lzc$class_componentmodel.attributes)
}}})($lzc$class_componentmodel);Mixin.make("$lzc$class_componentfocus",null,["focusanimationspeed",void 0,"focused",void 0,"$m24",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$m25",function($0){
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
}],["tagname","componentfocus","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$m24",null,"onblur","$m25",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus.attributes)
}}})($lzc$class_componentfocus);Mixin.make("$lzc$class_drawshadowfocus",null,["$m26",function($0){
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
}],["tagname","drawshadowfocus","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocused","$m26",null]},$lzc$class_drawshadowfocus.attributes)
}}})($lzc$class_drawshadowfocus);Mixin.make("$lzc$class_buttonevents",null,["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$m27",function(){
var $0=lz.ModeManager;return $0
},"$m28",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m29",function($0){
this.setAttribute("mouseisover",true)
},"$m30",function($0){
this.setAttribute("mouseisover",false)
},"$m31",function($0){
this.setAttribute("mouseisdown",true)
},"$m32",function($0){
this.setAttribute("mouseisdown",false)
},"$m33",function($0){
this.onmouseover.sendEvent()
},"$m34",function($0){
this.onmouseout.sendEvent()
},"$m35",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m36",function($0){
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
this.setAttribute("mousestate",$2);this.redraw()
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
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m28","$m27","onmouseover","$m29",null,"onmouseout","$m30",null,"onmousedown","$m31",null,"onmouseup","$m32",null,"onfocus","$m33",null,"onblur","$m34",null,"onkeydown","$m35",null,"onkeyup","$m36",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents.attributes)
}}})($lzc$class_buttonevents);Mixin.make("$lzc$class_mousedownrepeater",null,["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__mousestillDownDelegate=new LzDelegate(this,"__ismousestilldown")
},"__ismousestilldown",function($0){
var $1=$0-this.__mousedowntime;this.__mousedowntime=$0;if(this.mouseisdown){
var $2;if($1>600){
$2=this.__mousedowninitialinterval
}else{
$2=this.__mousedownrepeatinterval;this.onmousestilldown.sendEvent(this)
};lz.Timer.resetTimer(this.__mousestillDownDelegate,$2)
}},"$m37",function($0){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
},"$m38",function($0){
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
LzNode.mergeAttributes({$delegates:["onmousedown","$m37",null,"onmouseup","$m38",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater.attributes)
}}})($lzc$class_mousedownrepeater);Mixin.make("$lzc$class_keyboardrepeater",null,["__keydowntime",void 0,"__keystillDownDelegate",void 0,"__keydownrepeatinterval",void 0,"__keydowninitialinterval",void 0,"onkeystilldown",void 0,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.__keystillDownDelegate=new LzDelegate(this,"__iskeystilldown")
},"__iskeystilldown",function($0){
var $1=$0-this.__keydowntime;this.__keydowntime=$0;var $2=lz.Keys.downKeysArray;if($2.length>0){
var $3;if($1>this.__keydowninitialinterval){
$3=this.__keydowninitialinterval
}else{
$3=this.__keydownrepeatinterval;for(var $4=0;$4<$2.length;$4++){
this.onkeystilldown.sendEvent($2[$4])
}};lz.Timer.resetTimer(this.__keystillDownDelegate,$3)
}},"$m39",function($0){
this.__keydowntime=new Date().getTime();lz.Timer.addTimer(this.__keystillDownDelegate,this.__keydowninitialinterval)
},"$m40",function($0){
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
}],["tagname","keyboardrepeater","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onkeydown","$m39",null,"onkeyup","$m40",null],__keydowninitialinterval:300,__keydownrepeatinterval:50,__keydowntime:0,__keystillDownDelegate:null,onkeystilldown:LzDeclaredEvent},$lzc$class_keyboardrepeater.attributes)
}}})($lzc$class_keyboardrepeater);Mixin.make("$lzc$class_stylebutton",null,["vertical",void 0,"bevel",void 0,"$m41",void 0,"interiorbordercolor",void 0,"$m42",void 0,"$m43",void 0,"interiorbordercolorup",void 0,"$m44",void 0,"$m45",void 0,"interiorbordercolorover",void 0,"$m46",void 0,"$m47",void 0,"interiorbordercolordown",void 0,"$m48",void 0,"interiorfillcolor",void 0,"$m49",void 0,"$m50",void 0,"interiorfillcolorup",void 0,"$m51",void 0,"$m52",void 0,"interiorfillcolorover",void 0,"$m53",void 0,"$m54",void 0,"interiorfillcolordown",void 0,"$m55",void 0,"gradientfillstartup",void 0,"$m56",void 0,"gradientfillstopup",void 0,"$m57",void 0,"gradientfillstartover",void 0,"$m58",void 0,"gradientfillstopover",void 0,"$m59",void 0,"gradientfillstartdown",void 0,"$m60",void 0,"gradientfillstopdown",void 0,"gradientfillup",void 0,"$m61",void 0,"$m62",void 0,"gradientfillover",void 0,"$m63",void 0,"$m64",void 0,"gradientfilldown",void 0,"$m65",void 0,"$m66",void 0,"gradientfilldisabled",void 0,"cssToLinearGradient",function($0,$1){
if(!$0)return;if(!this._gradientfills){
this._gradientfills={}}else if(this._gradientfills[$0]!=null){
return this._gradientfills[$0]
};var $2=$0.split(",");if($2.length<2){
return
};var $3=$2.shift();var $4=0,$5=0;if($3=="top"){
$5=this.height
}else if($3=="left"){
$4=this.width
};var $6=this.createLinearGradient(0,0,$4,$5);for(var $7=0;$7<$2.length;$7++){
var $8=$2[$7].split(" ");var $9=$8[0];var $a=parseInt($8[1])*0.01;$6.addColorStop($a,$9)
};this._gradientfills[$0]=$6;return $6
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
}],["tagname","stylebutton","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$m41:function($0){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
},$m42:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m43:function(){
return [this,"interiorbordercolor"]
},$m44:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m45:function(){
return [this,"interiorbordercolor"]
},$m46:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m47:function(){
return [this,"interiorbordercolor"]
},$m48:function($0){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
},$m49:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m50:function(){
return [this,"interiorfillcolor"]
},$m51:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m52:function(){
return [this,"interiorfillcolor"]
},$m53:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m54:function(){
return [this,"interiorfillcolor"]
},$m55:function($0){
this.setAttribute("gradientfillstartup",LzColorUtils.convertColor("void(0)"))
},$m56:function($0){
this.setAttribute("gradientfillstopup",LzColorUtils.convertColor("void(0)"))
},$m57:function($0){
this.setAttribute("gradientfillstartover",LzColorUtils.convertColor("void(0)"))
},$m58:function($0){
this.setAttribute("gradientfillstopover",LzColorUtils.convertColor("void(0)"))
},$m59:function($0){
this.setAttribute("gradientfillstartdown",LzColorUtils.convertColor("void(0)"))
},$m60:function($0){
this.setAttribute("gradientfillstopdown",LzColorUtils.convertColor("void(0)"))
},$m61:function($0){
var $1=this.gradientfillup;if($1!==this["gradientfillover"]||!this.inited){
this.setAttribute("gradientfillover",$1)
}},$m62:function(){
return [this,"gradientfillup"]
},$m63:function($0){
var $1=this.gradientfillup;if($1!==this["gradientfilldown"]||!this.inited){
this.setAttribute("gradientfilldown",$1)
}},$m64:function(){
return [this,"gradientfillup"]
},$m65:function($0){
var $1=this.gradientfillup;if($1!==this["gradientfilldisabled"]||!this.inited){
this.setAttribute("gradientfilldisabled",$1)
}},$m66:function(){
return [this,"gradientfillup"]
},bevel:new LzStyleConstraintExpr("bevel","bevel-width","number",0,false),gradientfilldisabled:new LzStyleConstraintExpr("gradientfilldisabled","gradient-fill-disabled","string",new LzAlwaysExpr("$m65","$m66"),false),gradientfilldown:new LzStyleConstraintExpr("gradientfilldown","gradient-fill-down","string",new LzAlwaysExpr("$m63","$m64"),false),gradientfillover:new LzStyleConstraintExpr("gradientfillover","gradient-fill-over","string",new LzAlwaysExpr("$m61","$m62"),false),gradientfillstartdown:new LzStyleConstraintExpr("gradientfillstartdown","gradientfill-start-down","color",new LzOnceExpr("$m59"),false),gradientfillstartover:new LzStyleConstraintExpr("gradientfillstartover","gradientfill-start-over","color",new LzOnceExpr("$m57"),false),gradientfillstartup:new LzStyleConstraintExpr("gradientfillstartup","gradientfill-start-up","color",new LzOnceExpr("$m55"),false),gradientfillstopdown:new LzStyleConstraintExpr("gradientfillstopdown","gradientfill-stop-down","color",new LzOnceExpr("$m60"),false),gradientfillstopover:new LzStyleConstraintExpr("gradientfillstopover","gradientfill-stop-over","color",new LzOnceExpr("$m58"),false),gradientfillstopup:new LzStyleConstraintExpr("gradientfillstopup","gradientfill-stop-up","color",new LzOnceExpr("$m56"),false),gradientfillup:new LzStyleConstraintExpr("gradientfillup","gradient-fill-up","string","",false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m41"),false),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","interior-border-color-down","color",new LzAlwaysExpr("$m46","$m47"),false),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","interior-border-color-over","color",new LzAlwaysExpr("$m44","$m45"),false),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","interior-border-color-up","color",new LzAlwaysExpr("$m42","$m43"),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m48"),false),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","interior-fill-color-down","color",new LzAlwaysExpr("$m53","$m54"),false),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","interior-fill-color-over","color",new LzAlwaysExpr("$m51","$m52"),false),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","interior-fill-color-up","color",new LzAlwaysExpr("$m49","$m50"),false),vertical:new LzStyleConstraintExpr("vertical","gradient-vertical","boolean",false,false)},$lzc$class_stylebutton.attributes)
}}})($lzc$class_stylebutton);Mixin.make("$lzc$class_drawbutton",null,["draw",function($0){
if(this["drawtarget"]&&$0===this){
$0.clear();return
};$0.globalAlpha=this.disabled?0.5:1;$0.lineWidth=$0.borderwidth;this.styleinteriorborder($0);this.drawinteriorborder($0);this.stylegradient($0);this.drawgradient($0);this.styleborder($0);this.drawborder($0)
},"styleborder",function($0){
if(!this.bordercolor)return;$0.strokeStyle=this.bordercolor
},"drawborder",function($0){
if(this.borderwidth>0){
if(!this.bordercolor)return;$0.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);$0.closePath();$0.stroke()
}},"styleinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate]||!this["interiorbordercolor"+this.mousestate])return;$0.fillStyle=this["interiorfillcolor"+this.mousestate];if(this.borderwidth>0){
$0.strokeStyle=this["interiorbordercolor"+this.mousestate]
}},"drawinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate])return;$0.beginPath();this.drawshape($0,1,1,this.width-3,this.height-3);$0.closePath();$0.fill();if(this.borderwidth>0){
$0.stroke()
}},"stylegradient",function($0){
var $1=this["gradientfill"+(this.disabled?"disabled":this.mousestate)];if(this.vertical){
var $2=$1.indexOf("top");$1="left"+$1.substring($2+3)
};$0.fillStyle=this.cssToLinearGradient($1,$0)
},"drawgradient",function($0){
$0.beginPath();var $1=this.bevel+this.borderwidth;var $2=this.width-$1*2-2;var $3=this.height-$1-2;this.drawshape($0,$1+1,$1,$2,$3);$0.fill()
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
}],["tagname","drawbutton","attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_drawbutton$basepanel",$lzc$class_basepanel,["draw",function($0){
if(this["drawtarget"]&&$0===this){
$0.clear();return
};$0.globalAlpha=this.disabled?0.5:1;$0.lineWidth=$0.borderwidth;this.styleinteriorborder($0);this.drawinteriorborder($0);this.stylegradient($0);this.drawgradient($0);this.styleborder($0);this.drawborder($0)
},"styleborder",function($0){
if(!this.bordercolor)return;$0.strokeStyle=this.bordercolor
},"drawborder",function($0){
if(this.borderwidth>0){
if(!this.bordercolor)return;$0.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);$0.closePath();$0.stroke()
}},"styleinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate]||!this["interiorbordercolor"+this.mousestate])return;$0.fillStyle=this["interiorfillcolor"+this.mousestate];if(this.borderwidth>0){
$0.strokeStyle=this["interiorbordercolor"+this.mousestate]
}},"drawinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate])return;$0.beginPath();this.drawshape($0,1,1,this.width-3,this.height-3);$0.closePath();$0.fill();if(this.borderwidth>0){
$0.stroke()
}},"stylegradient",function($0){
var $1=this["gradientfill"+(this.disabled?"disabled":this.mousestate)];if(this.vertical){
var $2=$1.indexOf("top");$1="left"+$1.substring($2+3)
};$0.fillStyle=this.cssToLinearGradient($1,$0)
},"drawgradient",function($0){
$0.beginPath();var $1=this.bevel+this.borderwidth;var $2=this.width-$1*2-2;var $3=this.height-$1-2;this.drawshape($0,$1+1,$1,$2,$3);$0.fill()
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
}],["children",LzNode.mergeChildren([],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)]);Class.make("$lzc$class_stylebutton$drawbutton$basepanel",$lzc$class_drawbutton$basepanel,["vertical",void 0,"bevel",void 0,"$m67",void 0,"$m68",void 0,"$m69",void 0,"interiorbordercolorup",void 0,"$m70",void 0,"$m71",void 0,"interiorbordercolorover",void 0,"$m72",void 0,"$m73",void 0,"interiorbordercolordown",void 0,"$m74",void 0,"$m75",void 0,"$m76",void 0,"interiorfillcolorup",void 0,"$m77",void 0,"$m78",void 0,"interiorfillcolorover",void 0,"$m79",void 0,"$m80",void 0,"interiorfillcolordown",void 0,"$m81",void 0,"gradientfillstartup",void 0,"$m82",void 0,"gradientfillstopup",void 0,"$m83",void 0,"gradientfillstartover",void 0,"$m84",void 0,"gradientfillstopover",void 0,"$m85",void 0,"gradientfillstartdown",void 0,"$m86",void 0,"gradientfillstopdown",void 0,"gradientfillup",void 0,"$m87",void 0,"$m88",void 0,"gradientfillover",void 0,"$m89",void 0,"$m90",void 0,"gradientfilldown",void 0,"$m91",void 0,"$m92",void 0,"gradientfilldisabled",void 0,"cssToLinearGradient",function($0,$1){
with(this){
if(!$0)return;if(!this._gradientfills){
this._gradientfills={}}else if(this._gradientfills[$0]!=null){
return this._gradientfills[$0]
};var $2=$0.split(",");if($2.length<2){
return
};var $3=$2.shift();var $4=0,$5=0;if($3=="top"){
$5=this.height
}else if($3=="left"){
$4=this.width
};var $6=this.createLinearGradient(0,0,$4,$5);for(var $7=0;$7<$2.length;$7++){
var $8=$2[$7].split(" ");var $9=$8[0];var $a=parseInt($8[1])*0.01;$6.addColorStop($a,$9)
};this._gradientfills[$0]=$6;return $6
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
}],["children",LzNode.mergeChildren([],$lzc$class_drawbutton$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawbutton$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$m67:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
}},$m68:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m69:function(){
return [this,"interiorbordercolor"]
},$m70:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m71:function(){
return [this,"interiorbordercolor"]
},$m72:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m73:function(){
return [this,"interiorbordercolor"]
},$m74:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
}},$m75:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m76:function(){
return [this,"interiorfillcolor"]
},$m77:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m78:function(){
return [this,"interiorfillcolor"]
},$m79:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m80:function(){
return [this,"interiorfillcolor"]
},$m81:function($0){
with(this){
this.setAttribute("gradientfillstartup",LzColorUtils.convertColor("void(0)"))
}},$m82:function($0){
with(this){
this.setAttribute("gradientfillstopup",LzColorUtils.convertColor("void(0)"))
}},$m83:function($0){
with(this){
this.setAttribute("gradientfillstartover",LzColorUtils.convertColor("void(0)"))
}},$m84:function($0){
with(this){
this.setAttribute("gradientfillstopover",LzColorUtils.convertColor("void(0)"))
}},$m85:function($0){
with(this){
this.setAttribute("gradientfillstartdown",LzColorUtils.convertColor("void(0)"))
}},$m86:function($0){
with(this){
this.setAttribute("gradientfillstopdown",LzColorUtils.convertColor("void(0)"))
}},$m87:function($0){
var $1=this.gradientfillup;if($1!==this["gradientfillover"]||!this.inited){
this.setAttribute("gradientfillover",$1)
}},$m88:function(){
return [this,"gradientfillup"]
},$m89:function($0){
var $1=this.gradientfillup;if($1!==this["gradientfilldown"]||!this.inited){
this.setAttribute("gradientfilldown",$1)
}},$m90:function(){
return [this,"gradientfillup"]
},$m91:function($0){
var $1=this.gradientfillup;if($1!==this["gradientfilldisabled"]||!this.inited){
this.setAttribute("gradientfilldisabled",$1)
}},$m92:function(){
return [this,"gradientfillup"]
},bevel:new LzStyleConstraintExpr("bevel","bevel-width","number",0,false),gradientfilldisabled:new LzStyleConstraintExpr("gradientfilldisabled","gradient-fill-disabled","string",new LzAlwaysExpr("$m91","$m92"),false),gradientfilldown:new LzStyleConstraintExpr("gradientfilldown","gradient-fill-down","string",new LzAlwaysExpr("$m89","$m90"),false),gradientfillover:new LzStyleConstraintExpr("gradientfillover","gradient-fill-over","string",new LzAlwaysExpr("$m87","$m88"),false),gradientfillstartdown:new LzStyleConstraintExpr("gradientfillstartdown","gradientfill-start-down","color",new LzOnceExpr("$m85"),false),gradientfillstartover:new LzStyleConstraintExpr("gradientfillstartover","gradientfill-start-over","color",new LzOnceExpr("$m83"),false),gradientfillstartup:new LzStyleConstraintExpr("gradientfillstartup","gradientfill-start-up","color",new LzOnceExpr("$m81"),false),gradientfillstopdown:new LzStyleConstraintExpr("gradientfillstopdown","gradientfill-stop-down","color",new LzOnceExpr("$m86"),false),gradientfillstopover:new LzStyleConstraintExpr("gradientfillstopover","gradientfill-stop-over","color",new LzOnceExpr("$m84"),false),gradientfillstopup:new LzStyleConstraintExpr("gradientfillstopup","gradientfill-stop-up","color",new LzOnceExpr("$m82"),false),gradientfillup:new LzStyleConstraintExpr("gradientfillup","gradient-fill-up","string","",false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m67"),false),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","interior-border-color-down","color",new LzAlwaysExpr("$m72","$m73"),false),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","interior-border-color-over","color",new LzAlwaysExpr("$m70","$m71"),false),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","interior-border-color-up","color",new LzAlwaysExpr("$m68","$m69"),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m74"),false),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","interior-fill-color-down","color",new LzAlwaysExpr("$m79","$m80"),false),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","interior-fill-color-over","color",new LzAlwaysExpr("$m77","$m78"),false),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","interior-fill-color-up","color",new LzAlwaysExpr("$m75","$m76"),false),vertical:new LzStyleConstraintExpr("vertical","gradient-vertical","boolean",false,false)},$lzc$class_stylebutton$drawbutton$basepanel.attributes)
}}})($lzc$class_stylebutton$drawbutton$basepanel);Class.make("$lzc$class_m95",$lzc$class_simplelayout,["$m93",function($0){
with(this){
var $1=parent.axis;if($1!==this["axis"]||!this.inited){
this.setAttribute("axis",$1)
}}},"$m94",function(){
with(this){
return [parent,"axis"]
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
}],["attributes",new LzInheritedHash($lzc$class_simplelayout.attributes)]);Class.make("$lzc$class_buttongroup",$lzc$class_stylebutton$drawbutton$basepanel,["axis",void 0,"dividergradient",void 0,"draw",function($0){
var $1=this.subviews;var $2=$1.length;for(var $3=0;$3<$2;$3++){
var $4=$1[$3];$4.bordertopleftradius=$4.borderbottomleftradius=$4.bordertoprightradius=$4.borderbottomrightradius=0;if($3==0){
if(this.axis=="x"){
$4.bordertopleftradius=$4.borderbottomleftradius=this.cornerradius
}else{
$4.bordertopleftradius=$4.bordertoprightradius=this.cornerradius
}}else if($3==$2-1){
if(this.axis=="x"){
$4.bordertoprightradius=$4.borderbottomrightradius=this.cornerradius
}else{
$4.borderbottomleftradius=$4.borderbottomrightradius=this.cornerradius
}};$0.beginPath();$4.drawshape($0,$4.x,$4.y,$4.width,$4.height-1);$0.closePath();if($4.disabled){
$0.fillStyle=$0.basecolor
}else{
$4.stylegradient($0)
};$0.fill()
}},"drawlast",function($0){
with(this){
$0.fillStyle=this.cssToLinearGradient(this.dividergradient,$0);var $1=0;for(var $2=0,$3=this.subviews.length-1;$2<$3;$2++){
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
}],["tagname","buttongroup","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,axis:new LzAlwaysExpr("$m93","$m94"),spacing:0},"class":$lzc$class_m95}],$lzc$class_stylebutton$drawbutton$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_stylebutton$drawbutton$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({axis:"x",dividergradient:new LzStyleConstraintExpr("dividergradient","divider-gradient","string","",false),drawchildren:false},$lzc$class_buttongroup.attributes)
}}})($lzc$class_buttongroup);Class.make("$lzc$class_applybasecolor$basepanel",$lzc$class_basepanel,["$m96",void 0,"$m97",void 0,"$m98",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m99",function($0){
with(this){
if(!this.isinited)return;if(!$0)return;var $1=LzColorUtils.tohsv($0);if(!this.bordercolor){
this.setAttribute("bordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.4039))
};if(!this.interiorfillcolor){
this.setAttribute("interiorfillcolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this.interiorbordercolor){
this.setAttribute("interiorbordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.2196))
};if(!this["gradientfillstartup"]){
this.setAttribute("gradientfillstartup",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.1098))
};if(!this["gradientfillstopup"]){
this.setAttribute("gradientfillstopup",LzColorUtils.fromhsv($1.h,$1.s,$1.v))
};if(!this["gradientfillstartover"]){
this.setAttribute("gradientfillstartover",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.047))
};if(!this["gradientfillstopover"]){
this.setAttribute("gradientfillstopover",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.0039))
};if(!this["gradientfillstartdown"]){
this.setAttribute("gradientfillstartdown",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.0862))
};if(!this["gradientfillstopdown"]){
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
LzNode.mergeAttributes({$delegates:["oninit","$m98",null,"onbasecolor","$m99",null],$m96:function($0){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("null"))
}},$m97:function($0){
with(this){
this.setAttribute("basecolor",LzColorUtils.convertColor("null"))
}},basecolor:new LzStyleConstraintExpr("basecolor","base-color","color",new LzOnceExpr("$m97"),false),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",new LzOnceExpr("$m96"),false),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0,false),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0,false),highlightcolor:new LzStyleConstraintExpr("highlightcolor","highlight-color","color",LzColorUtils.convertColor("0xff"),false)},$lzc$class_applybasecolor$basepanel.attributes)
}}})($lzc$class_applybasecolor$basepanel);Class.make("$lzc$class_componentfocus$applybasecolor$basepanel",$lzc$class_applybasecolor$basepanel,["focusanimationspeed",void 0,"focused",void 0,"$m100",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$m101",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_applybasecolor$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$m100",null,"onblur","$m101",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus$applybasecolor$basepanel.attributes)
}}})($lzc$class_componentfocus$applybasecolor$basepanel);Class.make("$lzc$class_drawbutton$componentfocus$applybasecolor$basepanel",$lzc$class_componentfocus$applybasecolor$basepanel,["draw",function($0){
if(this["drawtarget"]&&$0===this){
$0.clear();return
};$0.globalAlpha=this.disabled?0.5:1;$0.lineWidth=$0.borderwidth;this.styleinteriorborder($0);this.drawinteriorborder($0);this.stylegradient($0);this.drawgradient($0);this.styleborder($0);this.drawborder($0)
},"styleborder",function($0){
if(!this.bordercolor)return;$0.strokeStyle=this.bordercolor
},"drawborder",function($0){
if(this.borderwidth>0){
if(!this.bordercolor)return;$0.beginPath();this.drawshape($0,0,0,this.width-1,this.height-1);$0.closePath();$0.stroke()
}},"styleinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate]||!this["interiorbordercolor"+this.mousestate])return;$0.fillStyle=this["interiorfillcolor"+this.mousestate];if(this.borderwidth>0){
$0.strokeStyle=this["interiorbordercolor"+this.mousestate]
}},"drawinteriorborder",function($0){
if(!this["interiorfillcolor"+this.mousestate])return;$0.beginPath();this.drawshape($0,1,1,this.width-3,this.height-3);$0.closePath();$0.fill();if(this.borderwidth>0){
$0.stroke()
}},"stylegradient",function($0){
var $1=this["gradientfill"+(this.disabled?"disabled":this.mousestate)];if(this.vertical){
var $2=$1.indexOf("top");$1="left"+$1.substring($2+3)
};$0.fillStyle=this.cssToLinearGradient($1,$0)
},"drawgradient",function($0){
$0.beginPath();var $1=this.bevel+this.borderwidth;var $2=this.width-$1*2-2;var $3=this.height-$1-2;this.drawshape($0,$1+1,$1,$2,$3);$0.fill()
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
}],["children",LzNode.mergeChildren([],$lzc$class_componentfocus$applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentfocus$applybasecolor$basepanel.attributes)]);Class.make("$lzc$class_drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel",$lzc$class_drawbutton$componentfocus$applybasecolor$basepanel,["$m102",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_drawbutton$componentfocus$applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawbutton$componentfocus$applybasecolor$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocused","$m102",null]},$lzc$class_drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel.attributes)
}}})($lzc$class_drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel);Class.make("$lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel",$lzc$class_drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel,["vertical",void 0,"bevel",void 0,"$m103",void 0,"$m104",void 0,"$m105",void 0,"interiorbordercolorup",void 0,"$m106",void 0,"$m107",void 0,"interiorbordercolorover",void 0,"$m108",void 0,"$m109",void 0,"interiorbordercolordown",void 0,"$m110",void 0,"$m111",void 0,"$m112",void 0,"interiorfillcolorup",void 0,"$m113",void 0,"$m114",void 0,"interiorfillcolorover",void 0,"$m115",void 0,"$m116",void 0,"interiorfillcolordown",void 0,"$m117",void 0,"gradientfillstartup",void 0,"$m118",void 0,"gradientfillstopup",void 0,"$m119",void 0,"gradientfillstartover",void 0,"$m120",void 0,"gradientfillstopover",void 0,"$m121",void 0,"gradientfillstartdown",void 0,"$m122",void 0,"gradientfillstopdown",void 0,"gradientfillup",void 0,"$m123",void 0,"$m124",void 0,"gradientfillover",void 0,"$m125",void 0,"$m126",void 0,"gradientfilldown",void 0,"$m127",void 0,"$m128",void 0,"gradientfilldisabled",void 0,"cssToLinearGradient",function($0,$1){
with(this){
if(!$0)return;if(!this._gradientfills){
this._gradientfills={}}else if(this._gradientfills[$0]!=null){
return this._gradientfills[$0]
};var $2=$0.split(",");if($2.length<2){
return
};var $3=$2.shift();var $4=0,$5=0;if($3=="top"){
$5=this.height
}else if($3=="left"){
$4=this.width
};var $6=this.createLinearGradient(0,0,$4,$5);for(var $7=0;$7<$2.length;$7++){
var $8=$2[$7].split(" ");var $9=$8[0];var $a=parseInt($8[1])*0.01;$6.addColorStop($a,$9)
};this._gradientfills[$0]=$6;return $6
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
}],["children",LzNode.mergeChildren([],$lzc$class_drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$m103:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("void(0)"))
}},$m104:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m105:function(){
return [this,"interiorbordercolor"]
},$m106:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m107:function(){
return [this,"interiorbordercolor"]
},$m108:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m109:function(){
return [this,"interiorbordercolor"]
},$m110:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("void(0)"))
}},$m111:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m112:function(){
return [this,"interiorfillcolor"]
},$m113:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m114:function(){
return [this,"interiorfillcolor"]
},$m115:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m116:function(){
return [this,"interiorfillcolor"]
},$m117:function($0){
with(this){
this.setAttribute("gradientfillstartup",LzColorUtils.convertColor("void(0)"))
}},$m118:function($0){
with(this){
this.setAttribute("gradientfillstopup",LzColorUtils.convertColor("void(0)"))
}},$m119:function($0){
with(this){
this.setAttribute("gradientfillstartover",LzColorUtils.convertColor("void(0)"))
}},$m120:function($0){
with(this){
this.setAttribute("gradientfillstopover",LzColorUtils.convertColor("void(0)"))
}},$m121:function($0){
with(this){
this.setAttribute("gradientfillstartdown",LzColorUtils.convertColor("void(0)"))
}},$m122:function($0){
with(this){
this.setAttribute("gradientfillstopdown",LzColorUtils.convertColor("void(0)"))
}},$m123:function($0){
var $1=this.gradientfillup;if($1!==this["gradientfillover"]||!this.inited){
this.setAttribute("gradientfillover",$1)
}},$m124:function(){
return [this,"gradientfillup"]
},$m125:function($0){
var $1=this.gradientfillup;if($1!==this["gradientfilldown"]||!this.inited){
this.setAttribute("gradientfilldown",$1)
}},$m126:function(){
return [this,"gradientfillup"]
},$m127:function($0){
var $1=this.gradientfillup;if($1!==this["gradientfilldisabled"]||!this.inited){
this.setAttribute("gradientfilldisabled",$1)
}},$m128:function(){
return [this,"gradientfillup"]
},bevel:new LzStyleConstraintExpr("bevel","bevel-width","number",0,false),gradientfilldisabled:new LzStyleConstraintExpr("gradientfilldisabled","gradient-fill-disabled","string",new LzAlwaysExpr("$m127","$m128"),false),gradientfilldown:new LzStyleConstraintExpr("gradientfilldown","gradient-fill-down","string",new LzAlwaysExpr("$m125","$m126"),false),gradientfillover:new LzStyleConstraintExpr("gradientfillover","gradient-fill-over","string",new LzAlwaysExpr("$m123","$m124"),false),gradientfillstartdown:new LzStyleConstraintExpr("gradientfillstartdown","gradientfill-start-down","color",new LzOnceExpr("$m121"),false),gradientfillstartover:new LzStyleConstraintExpr("gradientfillstartover","gradientfill-start-over","color",new LzOnceExpr("$m119"),false),gradientfillstartup:new LzStyleConstraintExpr("gradientfillstartup","gradientfill-start-up","color",new LzOnceExpr("$m117"),false),gradientfillstopdown:new LzStyleConstraintExpr("gradientfillstopdown","gradientfill-stop-down","color",new LzOnceExpr("$m122"),false),gradientfillstopover:new LzStyleConstraintExpr("gradientfillstopover","gradientfill-stop-over","color",new LzOnceExpr("$m120"),false),gradientfillstopup:new LzStyleConstraintExpr("gradientfillstopup","gradientfill-stop-up","color",new LzOnceExpr("$m118"),false),gradientfillup:new LzStyleConstraintExpr("gradientfillup","gradient-fill-up","string","",false),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m103"),false),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","interior-border-color-down","color",new LzAlwaysExpr("$m108","$m109"),false),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","interior-border-color-over","color",new LzAlwaysExpr("$m106","$m107"),false),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","interior-border-color-up","color",new LzAlwaysExpr("$m104","$m105"),false),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m110"),false),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","interior-fill-color-down","color",new LzAlwaysExpr("$m115","$m116"),false),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","interior-fill-color-over","color",new LzAlwaysExpr("$m113","$m114"),false),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","interior-fill-color-up","color",new LzAlwaysExpr("$m111","$m112"),false),vertical:new LzStyleConstraintExpr("vertical","gradient-vertical","boolean",false,false)},$lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel.attributes)
}}})($lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel);Class.make("$lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel",$lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel,["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$m129",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m130",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m131",function($0){
this.setAttribute("mouseisover",true)
},"$m132",function($0){
this.setAttribute("mouseisover",false)
},"$m133",function($0){
this.setAttribute("mouseisdown",true)
},"$m134",function($0){
this.setAttribute("mouseisdown",false)
},"$m135",function($0){
this.onmouseover.sendEvent()
},"$m136",function($0){
this.onmouseout.sendEvent()
},"$m137",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m138",function($0){
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
this.setAttribute("mousestate",$2);this.redraw()
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
}],["children",LzNode.mergeChildren([],$lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m130","$m129","onmouseover","$m131",null,"onmouseout","$m132",null,"onmousedown","$m133",null,"onmouseup","$m134",null,"onfocus","$m135",null,"onblur","$m136",null,"onkeydown","$m137",null,"onkeyup","$m138",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel.attributes)
}}})($lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel);Class.make("$lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel",$lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel,["value",void 0,"disabled",void 0,"$m139",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$m140",function(){
return [this,"disabled"]
},"$m141",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$m142",function(){
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
}],["children",LzNode.mergeChildren([],$lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("$m141","$m142"),disabled:false,focusable:new LzAlwaysExpr("$m139","$m140"),value:""},$lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel.attributes)
}}})($lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel);Class.make("$lzc$class_bsbtn",$lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel,["$lzsc$initialize",function($0,$1,$2,$3){
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
}],["tagname","bsbtn","children",LzNode.mergeChildren([],$lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentmodel$buttonevents$stylebutton$drawshadowfocus$drawbutton$componentfocus$applybasecolor$basepanel.attributes)]);Class.make("$lzc$class_m160",LzText,["$m156",function($0){
with(this){
var $1=parent.textcolorup;if($1!==this["fgcolor"]||!this.inited){
this.setAttribute("fgcolor",$1)
}}},"$m157",function(){
with(this){
return [parent,"textcolorup"]
}},"$m158",function($0){
with(this){
var $1=classroot.text;if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}}},"$m159",function(){
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
}],["attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_btn",$lzc$class_bsbtn,["$m143",function($0){
var $1=this.txt.height+this.textpadding*2;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$m144",function(){
return [this.txt,"height",this,"textpadding"]
},"$m145",function($0){
var $1=this.txt.width+this.textpadding*2+2;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$m146",function(){
return [this.txt,"width",this,"textpadding"]
},"text",void 0,"textpadding",void 0,"textcolorup",void 0,"$m147",void 0,"$m148",void 0,"textcolorover",void 0,"$m149",void 0,"$m150",void 0,"textcolordown",void 0,"$m151",void 0,"$m152",void 0,"textcolordisabled",void 0,"$m153",function($0){
if($0){
this.txt.setAttribute("fgcolor",this.textcolordisabled)
}},"$m154",function($0){
if(this.disabled){
this.txt.setAttribute("fgcolor",this.textcolordisabled)
}},"$m155",function($0){
var $1=this["textcolor"+$0];if(this.txt.fgcolor!=$1){
this.txt.setAttribute("fgcolor",$1)
}},"txt",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
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
}],["tagname","btn","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,align:"center",fgcolor:new LzAlwaysExpr("$m156","$m157"),name:"txt",text:new LzAlwaysExpr("$m158","$m159"),valign:"middle"},"class":$lzc$class_m160}],$lzc$class_bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","$m153",null,"oninit","$m154",null,"onmousestate","$m155",null],$m147:function($0){
var $1=this.textcolorup;if($1!==this["textcolorover"]||!this.inited){
this.setAttribute("textcolorover",$1)
}},$m148:function(){
return [this,"textcolorup"]
},$m149:function($0){
var $1=this.textcolorover;if($1!==this["textcolordown"]||!this.inited){
this.setAttribute("textcolordown",$1)
}},$m150:function(){
return [this,"textcolorover"]
},$m151:function($0){
var $1=this.textcolorup;if($1!==this["textcolordisabled"]||!this.inited){
this.setAttribute("textcolordisabled",$1)
}},$m152:function(){
return [this,"textcolorup"]
},height:new LzAlwaysExpr("$m143","$m144"),text:"",textcolordisabled:new LzStyleConstraintExpr("textcolordisabled","text-color-disabled","string",new LzAlwaysExpr("$m151","$m152"),false),textcolordown:new LzStyleConstraintExpr("textcolordown","text-color-down","string",new LzAlwaysExpr("$m149","$m150"),false),textcolorover:new LzStyleConstraintExpr("textcolorover","text-color-over","string",new LzAlwaysExpr("$m147","$m148"),false),textcolorup:new LzStyleConstraintExpr("textcolorup","text-color-up","string","black",false),textpadding:new LzStyleConstraintExpr("textpadding","text-padding","number",2,false),width:new LzAlwaysExpr("$m145","$m146")},$lzc$class_btn.attributes)
}}})($lzc$class_btn);Mixin.make("$lzc$class_drawborderfocus",null,["focuspercentage",void 0,"$m161",function($0){
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
}],["tagname","drawborderfocus","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocuspercentage","redraw",null,"onfocused","$m161",null],focuspercentage:0},$lzc$class_drawborderfocus.attributes)
}}})($lzc$class_drawborderfocus);Mixin.make("$lzc$class_drawinputtext",null,["draw",function($0){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;this.drawshape($0);if(this.focused)this.drawfocus($0);$0.fillStyle=$0.interiorfillcolor;$0.fill();$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.stroke()
},"drawfocus",function($0){
return $0
},"drawshape",function($0){
$0.rect(0,0,this.width,this.height,$0.cornerradius)
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
}],["tagname","drawinputtext","attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_componentmodel$inputtext",LzInputText,["value",void 0,"disabled",void 0,"$m162",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$m163",function(){
return [this,"disabled"]
},"$m164",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$m165",function(){
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
}],["attributes",new LzInheritedHash(LzInputText.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("$m164","$m165"),disabled:false,focusable:new LzAlwaysExpr("$m162","$m163"),value:""},$lzc$class_componentmodel$inputtext.attributes)
}}})($lzc$class_componentmodel$inputtext);Class.make("$lzc$class_componentfocus$componentmodel$inputtext",$lzc$class_componentmodel$inputtext,["focusanimationspeed",void 0,"focused",void 0,"$m166",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$m167",function($0){
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
}],["attributes",new LzInheritedHash($lzc$class_componentmodel$inputtext.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$m166",null,"onblur","$m167",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus$componentmodel$inputtext.attributes)
}}})($lzc$class_componentfocus$componentmodel$inputtext);Class.make("$lzc$class_drawinputtext$componentfocus$componentmodel$inputtext",$lzc$class_componentfocus$componentmodel$inputtext,["draw",function($0){
if(!$0["interiorfillcolor"]||!$0["interiorbordercolor"])return;this.drawshape($0);if(this.focused)this.drawfocus($0);$0.fillStyle=$0.interiorfillcolor;$0.fill();$0.lineWidth=$0.borderwidth;$0.strokeStyle=$0.interiorbordercolor;$0.stroke()
},"drawfocus",function($0){
return $0
},"drawshape",function($0){
$0.rect(0,0,this.width,this.height,$0.cornerradius)
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
}],["attributes",new LzInheritedHash($lzc$class_componentfocus$componentmodel$inputtext.attributes)]);Class.make("$lzc$class_drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext",$lzc$class_drawinputtext$componentfocus$componentmodel$inputtext,["focuspercentage",void 0,"$m168",function($0){
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
}],["attributes",new LzInheritedHash($lzc$class_drawinputtext$componentfocus$componentmodel$inputtext.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocuspercentage","redraw",null,"onfocused","$m168",null],focuspercentage:0},$lzc$class_drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext.attributes)
}}})($lzc$class_drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext);Class.make("$lzc$class_virtualdrawview$drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext",$lzc$class_drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext,["drawtarget",void 0,"ondrawtarget",void 0,"init",function(){
with(this){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0)
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
}],["attributes",new LzInheritedHash($lzc$class_drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview$drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext.attributes)
}}})($lzc$class_virtualdrawview$drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext);Class.make("$lzc$class_inpt",$lzc$class_virtualdrawview$drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext,["$m169",function($0){
var $1=!this.disabled;if($1!==this["enabled"]||!this.inited){
this.setAttribute("enabled",$1)
}},"$m170",function(){
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
}],["tagname","inpt","attributes",new LzInheritedHash($lzc$class_virtualdrawview$drawborderfocus$drawinputtext$componentfocus$componentmodel$inputtext.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({enabled:new LzAlwaysExpr("$m169","$m170")},$lzc$class_inpt.attributes)
}}})($lzc$class_inpt);Class.make("$lzc$class_virtualdrawview$view",LzView,["drawtarget",void 0,"ondrawtarget",void 0,"init",function(){
with(this){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0)
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
}],["attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview$view.attributes)
}}})($lzc$class_virtualdrawview$view);Class.make("$lzc$class_drawarrow$virtualdrawview$view",$lzc$class_virtualdrawview$view,["drawarrow",function($0,$1,$2,$3,$4,$5){
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
}],["attributes",new LzInheritedHash($lzc$class_virtualdrawview$view.attributes)]);Class.make("$lzc$class_componentfocus$drawarrow$virtualdrawview$view",$lzc$class_drawarrow$virtualdrawview$view,["focusanimationspeed",void 0,"focused",void 0,"$m171",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$m172",function($0){
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
}],["attributes",new LzInheritedHash($lzc$class_drawarrow$virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$m171",null,"onblur","$m172",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus$drawarrow$virtualdrawview$view.attributes)
}}})($lzc$class_componentfocus$drawarrow$virtualdrawview$view);Class.make("$lzc$class_drawborderfocus$componentfocus$drawarrow$virtualdrawview$view",$lzc$class_componentfocus$drawarrow$virtualdrawview$view,["focuspercentage",void 0,"$m173",function($0){
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
}],["attributes",new LzInheritedHash($lzc$class_componentfocus$drawarrow$virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocuspercentage","redraw",null,"onfocused","$m173",null],focuspercentage:0},$lzc$class_drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)
}}})($lzc$class_drawborderfocus$componentfocus$drawarrow$virtualdrawview$view);Class.make("$lzc$class_keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view",$lzc$class_drawborderfocus$componentfocus$drawarrow$virtualdrawview$view,["__keydowntime",void 0,"__keystillDownDelegate",void 0,"__keydownrepeatinterval",void 0,"__keydowninitialinterval",void 0,"onkeystilldown",void 0,"init",function(){
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
}}},"$m174",function($0){
with(this){
this.__keydowntime=new Date().getTime();lz.Timer.addTimer(this.__keystillDownDelegate,this.__keydowninitialinterval)
}},"$m175",function($0){
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
}],["attributes",new LzInheritedHash($lzc$class_drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onkeydown","$m174",null,"onkeyup","$m175",null],__keydowninitialinterval:300,__keydownrepeatinterval:50,__keydowntime:0,__keystillDownDelegate:null,onkeystilldown:LzDeclaredEvent},$lzc$class_keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)
}}})($lzc$class_keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view);Class.make("$lzc$class_mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view",$lzc$class_keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view,["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
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
}}},"$m176",function($0){
with(this){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
}},"$m177",function($0){
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
}],["attributes",new LzInheritedHash($lzc$class_keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmousedown","$m176",null,"onmouseup","$m177",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)
}}})($lzc$class_mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view);Class.make("$lzc$class_buttonevents$mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view",$lzc$class_mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view,["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$m178",function(){
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
};var $2="up";switch($1){
case 2:
$2="over";break;
case 3:
$2="down";break;

};if(this.mousestate!=$2){
this.setAttribute("mousestate",$2);this.redraw()
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
}],["attributes",new LzInheritedHash($lzc$class_mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m179","$m178","onmouseover","$m180",null,"onmouseout","$m181",null,"onmousedown","$m182",null,"onmouseup","$m183",null,"onfocus","$m184",null,"onblur","$m185",null,"onkeydown","$m186",null,"onkeyup","$m187",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents$mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)
}}})($lzc$class_buttonevents$mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view);Class.make("$lzc$class_scrlstepbtn",$lzc$class_buttonevents$mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view,["$m188",function($0){
var $1=this.width;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$m189",function(){
return [this,"width"]
},"$m190",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.setAttribute("opacity",0.4)
},"$m191",function($0){
this.animate("opacity",$0?1:0.4,200);this.classroot.setAttribute("activated",$0)
},"direction",void 0,"handleMouseDown",function($0){
if(this.constructor["$lzsc$isa"]?this.constructor.$lzsc$isa($0):$0 instanceof this.constructor)$0=this.direction;this.classroot.step($0);this.classroot.setAttribute("activated",true)
},"handleKeyDown",function($0){
if($0==37||$0==38){
this.handleMouseDown(-1)
}else if($0==39||$0==40){
this.handleMouseDown(1)
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
}],["tagname","scrlstepbtn","attributes",new LzInheritedHash($lzc$class_buttonevents$mousedownrepeater$keyboardrepeater$drawborderfocus$componentfocus$drawarrow$virtualdrawview$view.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m190",null,"onmouseisover","$m191",null,"onmousedown","handleMouseDown",null,"onmousestilldown","handleMouseDown",null,"onkeydown","handleKeyDown",null,"onkeystilldown","handleKeyDown",null,"onopacity","redraw",null],clickable:true,direction:1,focusable:true,height:new LzAlwaysExpr("$m188","$m189")},$lzc$class_scrlstepbtn.attributes)
}}})($lzc$class_scrlstepbtn);Class.make("$lzc$class_virtualdrawview$bsbtn",$lzc$class_bsbtn,["drawtarget",void 0,"ondrawtarget",void 0,"init",function(){
with(this){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0)
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
}],["children",LzNode.mergeChildren([],$lzc$class_bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview$bsbtn.attributes)
}}})($lzc$class_virtualdrawview$bsbtn);Class.make("$lzc$class_scrlthmb",$lzc$class_virtualdrawview$bsbtn,["$m192",function($0){
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
}],["tagname","scrlthmb","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,$m193:function($0){
this.setAttribute("doffset",this.getMouse("y"))
},$m194:function($0){
var $1=this.thumbControl(this.immediateparent.getMouse("y"));if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}},$m195:function(){
return [].concat(this["$lzc$thumbControl_dependencies"]?this["$lzc$thumbControl_dependencies"](this,this,this.immediateparent.getMouse("y")):[]).concat(this.immediateparent["$lzc$getMouse_dependencies"]?this.immediateparent["$lzc$getMouse_dependencies"](this,this.immediateparent,"y"):[])
},doffset:new LzOnceExpr("$m193"),name:"ythumbdrag",y:new LzAlwaysExpr("$m194","$m195")},"class":LzState},{attrs:{$classrootdepth:1,$m196:function($0){
this.setAttribute("doffset",this.getMouse("x"))
},$m197:function($0){
var $1=this.thumbControl(this.immediateparent.getMouse("x"));if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}},$m198:function(){
return [].concat(this["$lzc$thumbControl_dependencies"]?this["$lzc$thumbControl_dependencies"](this,this,this.immediateparent.getMouse("x")):[]).concat(this.immediateparent["$lzc$getMouse_dependencies"]?this.immediateparent["$lzc$getMouse_dependencies"](this,this.immediateparent,"x"):[])
},doffset:new LzOnceExpr("$m196"),name:"xthumbdrag",x:new LzAlwaysExpr("$m197","$m198")},"class":LzState}],$lzc$class_virtualdrawview$bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_virtualdrawview$bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseisover","$m192",null,"onmousedown","startDrag",null,"onmouseup","stopDrag",null],axis:"",clickable:true,focusable:false,target:null,targetscroll:0,trackscroll:0,vertical:true},$lzc$class_scrlthmb.attributes)
}}})($lzc$class_scrlthmb);Class.make("$lzc$class_mousedownrepeater$view",LzView,["__mousedowntime",void 0,"__mousestillDownDelegate",void 0,"__mousedownrepeatinterval",void 0,"__mousedowninitialinterval",void 0,"onmousestilldown",void 0,"init",function(){
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
}}},"$m199",function($0){
with(this){
this.__mousedowntime=new Date().getTime();lz.Timer.addTimer(this.__mousestillDownDelegate,500)
}},"$m200",function($0){
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
LzNode.mergeAttributes({$delegates:["onmousedown","$m199",null,"onmouseup","$m200",null],__mousedowninitialinterval:600,__mousedownrepeatinterval:50,__mousedowntime:0,__mousestillDownDelegate:null,clickable:true,onmousestilldown:LzDeclaredEvent},$lzc$class_mousedownrepeater$view.attributes)
}}})($lzc$class_mousedownrepeater$view);Class.make("$lzc$class_buttonevents$mousedownrepeater$view",$lzc$class_mousedownrepeater$view,["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$m201",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m202",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m203",function($0){
this.setAttribute("mouseisover",true)
},"$m204",function($0){
this.setAttribute("mouseisover",false)
},"$m205",function($0){
this.setAttribute("mouseisdown",true)
},"$m206",function($0){
this.setAttribute("mouseisdown",false)
},"$m207",function($0){
this.onmouseover.sendEvent()
},"$m208",function($0){
this.onmouseout.sendEvent()
},"$m209",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m210",function($0){
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
this.setAttribute("mousestate",$2);this.redraw()
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
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m202","$m201","onmouseover","$m203",null,"onmouseout","$m204",null,"onmousedown","$m205",null,"onmouseup","$m206",null,"onfocus","$m207",null,"onblur","$m208",null,"onkeydown","$m209",null,"onkeyup","$m210",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents$mousedownrepeater$view.attributes)
}}})($lzc$class_buttonevents$mousedownrepeater$view);Class.make("$lzc$class_scrltrk",$lzc$class_buttonevents$mousedownrepeater$view,["direction",void 0,"$m211",function($0){
this.classroot.setAttribute("activated",$0)
},"$m212",function($0){
this.classroot.page(this.direction);this.classroot.setAttribute("activated",true)
},"$m213",function($0){
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
LzNode.mergeAttributes({$delegates:["onmouseisover","$m211",null,"onmousedown","$m212",null,"onmousestilldown","$m213",null],clickable:true,direction:1},$lzc$class_scrltrk.attributes)
}}})($lzc$class_scrltrk);Mixin.make("$lzc$class_bsscrlbr",null,["scrolltarget",void 0,"axis",void 0,"$lzc$set_axis",function($0){
this.axis=$0;this.setAttribute("sizeAxis",$0=="x"?"width":"height");this.setAttribute("otherSizeAxis",$0=="y"?"width":"height")
},"sizeAxis",void 0,"otherSizeAxis",void 0,"$m214",function($0){
var $1=this.axis;if($1!==this["scrollattr"]||!this.inited){
this.setAttribute("scrollattr",$1)
}},"$m215",function(){
return [this,"axis"]
},"scrollattr",void 0,"scrollmax",void 0,"onscrollmax",void 0,"pagesize",void 0,"stepsize",void 0,"scrollable",void 0,"focusview",void 0,"usemousewheel",void 0,"$lzc$set_usemousewheel",function($0){
if($0==this.usemousewheel)return;this.usemousewheel=$0;if(this._mwUpdateDel){
this._mwUpdateDel.unregisterAll()
};if($0){
this._mwUpdateDel=new LzDelegate(this,"mousewheelUpdate",lz.Keys,"onmousewheeldelta")
}},"mousewheelevent_on",void 0,"mousewheelevent_off",void 0,"mousewheelactive",void 0,"onscrollable",void 0,"$m216",function($0){
var $1=this["enabled"]&&this.scrollable&&(this._parentcomponent?this._parentcomponent._enabled:true);if($1!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$1)
}},"$m217",function(){
return [this,"scrollable",this,"_parentcomponent",this._parentcomponent,"_enabled"]
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
}],["tagname","bsscrlbr","children",[{attrs:{$classrootdepth:1,$m218:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.height-this.othersb.height:this.immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},$m219:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"height",this.othersb,"height"]
},height:new LzAlwaysExpr("$m218","$m219"),name:"heightConstraint"},"class":LzState},{attrs:{$classrootdepth:1,$m220:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.width-this.othersb.width:this.immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},$m221:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"width",this.othersb,"width"]
},name:"widthConstraint",width:new LzAlwaysExpr("$m220","$m221")},"class":LzState}],"attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("$m216","$m217"),_mwActivateDel:null,_mwDeactivateDel:null,_mwUpdateDel:null,axis:"y",clipSizeDel:null,focusview:null,heightDel:null,mousewheelactive:false,mousewheelevent_off:"onblur",mousewheelevent_on:"onfocus",onscrollable:LzDeclaredEvent,onscrollmax:LzDeclaredEvent,otherSizeAxis:"width",othersb:null,pagesize:null,scrollable:true,scrollattr:new LzAlwaysExpr("$m214","$m215"),scrollmax:null,scrolltarget:null,sizeAxis:"height",stepsize:10,targetHeightDel:null,targetPosDel:null,thumb:null,usemousewheel:true,usetargetsize:false},$lzc$class_bsscrlbr.attributes)
}}})($lzc$class_bsscrlbr);Class.make("$lzc$class_bsscrlbr$basepanel",$lzc$class_basepanel,["scrolltarget",void 0,"axis",void 0,"$lzc$set_axis",function($0){
this.axis=$0;this.setAttribute("sizeAxis",$0=="x"?"width":"height");this.setAttribute("otherSizeAxis",$0=="y"?"width":"height")
},"sizeAxis",void 0,"otherSizeAxis",void 0,"$m222",function($0){
var $1=this.axis;if($1!==this["scrollattr"]||!this.inited){
this.setAttribute("scrollattr",$1)
}},"$m223",function(){
return [this,"axis"]
},"scrollattr",void 0,"scrollmax",void 0,"onscrollmax",void 0,"pagesize",void 0,"stepsize",void 0,"scrollable",void 0,"focusview",void 0,"usemousewheel",void 0,"$lzc$set_usemousewheel",function($0){
with(this){
if($0==this.usemousewheel)return;this.usemousewheel=$0;if(this._mwUpdateDel){
this._mwUpdateDel.unregisterAll()
};if($0){
this._mwUpdateDel=new LzDelegate(this,"mousewheelUpdate",lz.Keys,"onmousewheeldelta")
}}},"mousewheelevent_on",void 0,"mousewheelevent_off",void 0,"mousewheelactive",void 0,"onscrollable",void 0,"$m224",function($0){
var $1=this["enabled"]&&this.scrollable&&(this._parentcomponent?this._parentcomponent._enabled:true);if($1!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$1)
}},"$m225",function(){
return [this,"scrollable",this,"_parentcomponent",this._parentcomponent,"_enabled"]
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
}],["children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,$m226:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.height-this.othersb.height:this.immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},$m227:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"height",this.othersb,"height"]
},height:new LzAlwaysExpr("$m226","$m227"),name:"heightConstraint"},"class":LzState},{attrs:{$classrootdepth:1,$m228:function($0){
var $1=this.othersb&&this.othersb.visible?this.immediateparent.width-this.othersb.width:this.immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},$m229:function(){
return [this,"othersb",this.othersb,"visible",this.immediateparent,"width",this.othersb,"width"]
},name:"widthConstraint",width:new LzAlwaysExpr("$m228","$m229")},"class":LzState}],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("$m224","$m225"),_mwActivateDel:null,_mwDeactivateDel:null,_mwUpdateDel:null,axis:"y",clipSizeDel:null,focusview:null,heightDel:null,mousewheelactive:false,mousewheelevent_off:"onblur",mousewheelevent_on:"onfocus",onscrollable:LzDeclaredEvent,onscrollmax:LzDeclaredEvent,otherSizeAxis:"width",othersb:null,pagesize:null,scrollable:true,scrollattr:new LzAlwaysExpr("$m222","$m223"),scrollmax:null,scrolltarget:null,sizeAxis:"height",stepsize:10,targetHeightDel:null,targetPosDel:null,thumb:null,usemousewheel:true,usetargetsize:false},$lzc$class_bsscrlbr$basepanel.attributes)
}}})($lzc$class_bsscrlbr$basepanel);Class.make("$lzc$class_buttonevents$bsscrlbr$basepanel",$lzc$class_bsscrlbr$basepanel,["mouseisover",void 0,"mouseisdown",void 0,"mousestate",void 0,"$m230",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m231",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.setAttribute("mouseisover",false);this.setAttribute("mouseisdown",false)
}},"$m232",function($0){
this.setAttribute("mouseisover",true)
},"$m233",function($0){
this.setAttribute("mouseisover",false)
},"$m234",function($0){
this.setAttribute("mouseisdown",true)
},"$m235",function($0){
this.setAttribute("mouseisdown",false)
},"$m236",function($0){
this.onmouseover.sendEvent()
},"$m237",function($0){
this.onmouseout.sendEvent()
},"$m238",function($0){
if($0==32||$0==13){
this.onmousedown.sendEvent()
}},"$m239",function($0){
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
this.setAttribute("mousestate",$2);this.redraw()
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
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m231","$m230","onmouseover","$m232",null,"onmouseout","$m233",null,"onmousedown","$m234",null,"onmouseup","$m235",null,"onfocus","$m236",null,"onblur","$m237",null,"onkeydown","$m238",null,"onkeyup","$m239",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false,mousestate:"up"},$lzc$class_buttonevents$bsscrlbr$basepanel.attributes)
}}})($lzc$class_buttonevents$bsscrlbr$basepanel);Class.make("$lzc$class_m269",$lzc$class_scrltrk,["$m248",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m249",function(){
with(this){
return [parent,"width"]
}},"$m250",function($0){
with(this){
var $1=parent.thumb.y;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m251",function(){
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
}],["attributes",new LzInheritedHash($lzc$class_scrltrk.attributes)]);Class.make("$lzc$class_m270",$lzc$class_scrlthmb,["$m252",function($0){
with(this){
var $1=parent.width-2;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m253",function(){
with(this){
return [parent,"width"]
}},"$m254",function($0){
with(this){
var $1=classroot;if($1!==this["drawtarget"]||!this.inited){
this.setAttribute("drawtarget",$1)
}}},"$m255",function(){
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
}],["children",LzNode.mergeChildren([],$lzc$class_scrlthmb["children"]),"attributes",new LzInheritedHash($lzc$class_scrlthmb.attributes)]);Class.make("$lzc$class_m271",$lzc$class_scrltrk,["$m256",function($0){
with(this){
var $1=parent.thumb.y+parent.thumb.height;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m257",function(){
with(this){
return [parent.thumb,"y",parent.thumb,"height"]
}},"$m258",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m259",function(){
with(this){
return [parent,"width"]
}},"$m260",function($0){
with(this){
var $1=parent.height-parent.thumb.y-parent.thumb.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m261",function(){
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
}],["attributes",new LzInheritedHash($lzc$class_scrltrk.attributes)]);Class.make("$lzc$class_m268",LzView,["$m244",function($0){
with(this){
var $1=immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m245",function(){
with(this){
return [immediateparent,"width"]
}},"$m246",function($0){
with(this){
var $1=immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m247",function(){
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
}],["children",[{attrs:{$classrootdepth:2,direction:-1,height:new LzAlwaysExpr("$m250","$m251"),width:new LzAlwaysExpr("$m248","$m249")},"class":$lzc$class_m269},{attrs:{$classrootdepth:2,drawtarget:new LzAlwaysExpr("$m254","$m255"),name:"thumb",width:new LzAlwaysExpr("$m252","$m253"),x:1},"class":$lzc$class_m270},{attrs:{$classrootdepth:2,direction:1,height:new LzAlwaysExpr("$m260","$m261"),width:new LzAlwaysExpr("$m258","$m259"),y:new LzAlwaysExpr("$m256","$m257")},"class":$lzc$class_m271}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_m272",$lzc$class_scrlstepbtn,["$m262",function($0){
with(this){
var $1=parent.width-4;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m263",function(){
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
}],["attributes",new LzInheritedHash($lzc$class_scrlstepbtn.attributes)]);Class.make("$lzc$class_m273",$lzc$class_scrlstepbtn,["$m264",function($0){
with(this){
var $1=parent.height-this.height;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m265",function(){
with(this){
return [parent,"height",this,"height"]
}},"$m266",function($0){
with(this){
var $1=parent.width-4;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m267",function(){
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
}],["attributes",new LzInheritedHash($lzc$class_scrlstepbtn.attributes)]);Class.make("$lzc$class_scrlbr",$lzc$class_buttonevents$bsscrlbr$basepanel,["size",void 0,"$m240",function($0){
var $1=this.size;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$m241",function(){
return [this,"size"]
},"$m242",function($0){
with(this){
if(canvas.capabilities["minimize_opacity_changes"]){

}else{
this.setAttribute("opacity",0.4)
}}},"$m243",function($0){
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
this.beginPath();this.rect(0,0,this.width-1,this.height-2,this.width);this.lineWidth=this.borderwidth;this.strokeStyle=this.interiorbordercolor;this.fillStyle=this.interiorfillcolor;this.fill();this.stroke()
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
}],["tagname","scrlbr","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,height:new LzAlwaysExpr("$m246","$m247"),name:"scrolltrack",thumb:void 0,width:new LzAlwaysExpr("$m244","$m245")},"class":$lzc$class_m268},{attrs:{$classrootdepth:1,direction:-1,width:new LzAlwaysExpr("$m262","$m263"),x:2},"class":$lzc$class_m272},{attrs:{$classrootdepth:1,direction:1,width:new LzAlwaysExpr("$m266","$m267"),x:2,y:new LzAlwaysExpr("$m264","$m265")},"class":$lzc$class_m273}],$lzc$class_buttonevents$bsscrlbr$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_buttonevents$bsscrlbr$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m242",null,"onmouseisover","$m243",null],activated:false,onactivated:LzDeclaredEvent,size:new LzStyleConstraintExpr("size","size","expression",16,false),width:new LzAlwaysExpr("$m240","$m241")},$lzc$class_scrlbr.attributes)
}}})($lzc$class_scrlbr);Mixin.make("$lzc$class_drawfltr",null,["draw",function($0){
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
}],["tagname","drawfltr","attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_componentmodel$basepanel",$lzc$class_basepanel,["value",void 0,"disabled",void 0,"$m274",function($0){
var $1=!this.disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}},"$m275",function(){
return [this,"disabled"]
},"$m276",function($0){
var $1=!this.disabled;if($1!==this["clickable"]||!this.inited){
this.setAttribute("clickable",$1)
}},"$m277",function(){
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
}],["children",LzNode.mergeChildren([],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({clickable:new LzAlwaysExpr("$m276","$m277"),disabled:false,focusable:new LzAlwaysExpr("$m274","$m275"),value:""},$lzc$class_componentmodel$basepanel.attributes)
}}})($lzc$class_componentmodel$basepanel);Class.make("$lzc$class_componentfocus$componentmodel$basepanel",$lzc$class_componentmodel$basepanel,["focusanimationspeed",void 0,"focused",void 0,"$m278",function($0){
if(!this.focusable)return;this.setAttribute("focused",true)
},"$m279",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_componentmodel$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentmodel$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","$m278",null,"onblur","$m279",null],focusanimationspeed:500,focused:false},$lzc$class_componentfocus$componentmodel$basepanel.attributes)
}}})($lzc$class_componentfocus$componentmodel$basepanel);Class.make("$lzc$class_drawfltr$componentfocus$componentmodel$basepanel",$lzc$class_componentfocus$componentmodel$basepanel,["draw",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_componentfocus$componentmodel$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_componentfocus$componentmodel$basepanel.attributes)]);Class.make("$lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel",$lzc$class_drawfltr$componentfocus$componentmodel$basepanel,["$m280",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_drawfltr$componentfocus$componentmodel$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawfltr$componentfocus$componentmodel$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocused","$m280",null]},$lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel.attributes)
}}})($lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel);Class.make("$lzc$class_m283",LzAnimator,["$m281",function($0){
with(this){
parent.setAttribute("visible",true)
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
}],["attributes",new LzInheritedHash(LzAnimator.attributes)]);Class.make("$lzc$class_m284",LzAnimator,["$m282",function($0){
with(this){
parent.setAttribute("visible",false)
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
}],["attributes",new LzInheritedHash(LzAnimator.attributes)]);Class.make("$lzc$class_fltr",$lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel,["target",void 0,"show",function($0){
with(this){
if(!$0)return;this.setAttribute("target",$0);if(!this["__posDel"]){
this.__posDel=new LzDelegate(this,"updatePosition")
}else{
this.__posDel.unregisterAll()
};this.__posDel.register($0,"onx");this.__posDel.register($0,"ony");this.__posDel.register($0,"onwidth");this.__posDel.register($0,"onheight");this.__posDel.register(canvas,"onwidth");this.__posDel.register(canvas,"onheight");this.updatePosition();lz.Focus.setFocus(this);lz.ModeManager.makeModal(this);this.showAnim.doStart()
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
this.animate("x",$2,200)
};if(this.y!=$3){
this.animate("y",$3,200)
};this.setAttribute("shadowblurradius",0);this.animate("shadowblurradius",10,400);this.bringToFront()
}},"passModeEvent",function($0,$1){
if($0=="onmousedown"&&$1!==this.target){
this.hide()
};return true
},"hide",function(){
with(this){
this.__posDel.unregisterAll();lz.ModeManager.release(this);this.hideAnim.doStart()
}},"$lzc$set_value",function($0){
if(!this.target){
return
};this.target.setAttribute("value",$0);this.hide()
},"showAnim",void 0,"hideAnim",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
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
}],["tagname","fltr","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,$delegates:["onstart","$m281",null],attribute:"opacity",duration:"500",from:0,name:"showAnim",start:false,to:1},"class":$lzc$class_m283},{attrs:{$classrootdepth:1,$delegates:["onstop","$m282",null],attribute:"opacity",duration:"500",from:1,name:"hideAnim",start:false,to:0},"class":$lzc$class_m284}],$lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawshadowfocus$drawfltr$componentfocus$componentmodel$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({shadowangle:90,shadowblurradius:0,shadowcolor:LzColorUtils.convertColor("0x0"),shadowdistance:10,target:null,visible:false},$lzc$class_fltr.attributes)
}}})($lzc$class_fltr);(function(){
var $0=LzCSSStyle,$1=LzCSSStyleRule;$0._addRule(new $1("basepanel",{"base-color":15921906,"border-width":1,"corner-radius":3}));$0._addRule(new $1("buttongroup",{"divider-gradient":"top,#797979 0,#b0b0b0 50,#797979 100","gradient-fill-up":"top,#f2f2f2 0%,#f2f2f2 49%,#d6d6d6 50%,#f2f2f2 100%"}));$0._addRule(new $1("scrlbr",{"corner-radius":16,size:16}));$0._addRule(new $1("scrlthmb",{"corner-radius":20}));$0._addRule(new $1("bsbtn",{"bevel-width":1,"gradient-fill-down":"top,#bfbfbf 0%,#dcdcdc 49%,#f2f2f2 50%,#f2f2f2 100%","gradient-fill-over":"top,#f2f2f2 0%,#f2f2f2 49%,#e6e6e6 50%,#f1f1f1 100%","gradient-fill-up":"top,#f2f2f2 0%,#f2f2f2 49%,#d6d6d6 50%,#f2f2f2 100%"}))
})();Class.make("$lzc$class_m287",$lzc$class_btn,["$m285",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);Class.make("$lzc$class_m288",$lzc$class_btn,["$m286",function($0){
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
}],["children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);Class.make("$lzc$class_virtualdrawview$btn",$lzc$class_btn,["drawtarget",void 0,"ondrawtarget",void 0,"init",function(){
with(this){
var $0=this.immediateparent;if(lz.basepanel["$lzsc$isa"]?lz.basepanel.$lzsc$isa($0):$0 instanceof lz.basepanel){
this.setAttribute("drawtarget",$0)
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
}],["children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({drawtarget:null,ondrawtarget:LzDeclaredEvent},$lzc$class_virtualdrawview$btn.attributes)
}}})($lzc$class_virtualdrawview$btn);canvas.LzInstantiateView({attrs:{y:10},children:[{attrs:{spacing:10},"class":$lzc$class_simplelayout},{attrs:{height:50,width:50,x:10},"class":$lzc$class_bsbtn},{attrs:{disabled:true,height:50,width:50,x:10},"class":$lzc$class_bsbtn},{attrs:{$delegates:["onclick","$m285",null],clickable:true,text:"ok",x:10},"class":$lzc$class_m287},{attrs:{$delegates:["onclick","$m286",null],clickable:true,text:"cancel",x:10},"class":$lzc$class_m288},{attrs:{borderwidth:0,x:10},children:[{attrs:{text:"OK"},"class":$lzc$class_virtualdrawview$btn},{attrs:{text:"Revert"},"class":$lzc$class_virtualdrawview$btn}],"class":$lzc$class_buttongroup},{attrs:{borderwidth:0,x:10},children:[{attrs:{text:"OK"},"class":$lzc$class_virtualdrawview$btn},{attrs:{disabled:true,text:"Revert"},"class":$lzc$class_virtualdrawview$btn}],"class":$lzc$class_buttongroup},{attrs:{text:"Hey there!",width:100,x:10},"class":$lzc$class_inpt},{attrs:{multiline:true,text:"Hey there! This text should wrap onto a few lines.",width:100,x:10},"class":$lzc$class_inpt},{attrs:{clip:true,height:200,width:200,x:10},children:[{attrs:{font:"Helvetica,Sans",fontsize:12,fontstyle:"plain",multiline:true,text:"Man through his scientific genius has been able to draw distance and save time and space. He has been able to carry highways through the stratosphere. We read just the other day that a rocket plane went 1900 miles in one hour. Twice as fast as the speed of sound. This is the new age. Bob Hope has described this new age, this jet age; it is an age in which planes will be moving so fast that we will have a non-stop flight from New York to Los Angeles, when you start out you might develop the hiccups and you will hic in New York and cup in Los Angeles. This is an age in which it will be possible to leave Tokyo on a Sunday morning and arrive in Seattle, Washington on the preceding Saturday night. When your friends meet you at the airport and ask what time did you leave Tokyo, you will have to say I left tomorrow. That is this new age. We live in one world geographically. We face the great problem of making it one spiritually.<br/>Through our scientific means we have made of the world a neighborhood and now the challenge confronts us through our moral and spiritual means to make of it a brotherhood. We must live together, we are not independent we are interdependent. We are all involved in a single process. Whatever affects one directly affects all indirectly for we are tied together in a single progress. We are all linked in the great chain of humanity.<br/>Martin Luther King, Jr.<br/>11 August 1956",width:184},"class":LzText},{"class":$lzc$class_scrlbr}],"class":LzView}],"class":$lzc$class_basepanel},31);lz["simplelayout"]=$lzc$class_simplelayout;lz["drawarrow"]=$lzc$class_drawarrow;lz["applybasecolor"]=$lzc$class_applybasecolor;lz["drawpanel"]=$lzc$class_drawpanel;lz["basepanel"]=$lzc$class_basepanel;lz["virtualdrawview"]=$lzc$class_virtualdrawview;lz["componentmodel"]=$lzc$class_componentmodel;lz["componentfocus"]=$lzc$class_componentfocus;lz["drawshadowfocus"]=$lzc$class_drawshadowfocus;lz["buttonevents"]=$lzc$class_buttonevents;lz["mousedownrepeater"]=$lzc$class_mousedownrepeater;lz["keyboardrepeater"]=$lzc$class_keyboardrepeater;lz["stylebutton"]=$lzc$class_stylebutton;lz["drawbutton"]=$lzc$class_drawbutton;lz["buttongroup"]=$lzc$class_buttongroup;lz["bsbtn"]=$lzc$class_bsbtn;lz["btn"]=$lzc$class_btn;lz["drawborderfocus"]=$lzc$class_drawborderfocus;lz["drawinputtext"]=$lzc$class_drawinputtext;lz["inpt"]=$lzc$class_inpt;lz["scrlstepbtn"]=$lzc$class_scrlstepbtn;lz["scrlthmb"]=$lzc$class_scrlthmb;lz["scrltrk"]=$lzc$class_scrltrk;lz["bsscrlbr"]=$lzc$class_bsscrlbr;lz["scrlbr"]=$lzc$class_scrlbr;lz["drawfltr"]=$lzc$class_drawfltr;lz["fltr"]=$lzc$class_fltr;canvas.initDone();