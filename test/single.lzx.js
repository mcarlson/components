canvas=new LzCanvas(null,{__LZproxied:"false",appbuilddate:"2010-02-04T22:58:21Z",bgcolor:16777215,embedfonts:true,font:"Helvetica,Sans",fontname:"Helvetica,Sans",fontsize:12,fontstyle:"plain",height:"100%",lpsbuild:"15558 /Users/maxcarlson/openlaszlo/trunk-clean",lpsbuilddate:"2010-01-29T20:34:49Z",lpsrelease:"Latest",lpsversion:"4.8.x",runtime:"dhtml",width:"100%"});Class.make("$lzc$class_simplelayout",LzLayout,["axis",void 0,"$lzc$set_axis",function($0){
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
}}})($lzc$class_vbox);Mixin.make("DrawviewShared",null,["$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
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
}],null);Mixin.make("$lzc$class_boxmodel",null,["construct",function($0,$1){
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
}}})($lzc$class_boxmodel);Class.make("$lzc$class_basepanel",$lzc$class_drawview,["draw",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.context||!this.isinited)return
}],["tagname","basepanel","children",LzNode.mergeChildren([],$lzc$class_drawview["children"]),"attributes",new LzInheritedHash($lzc$class_drawview.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","draw",null,"onheight","draw",null,"oncontext","draw",null]},$lzc$class_basepanel.attributes)
}}})($lzc$class_basepanel);Mixin.make("$lzc$class_buttonmodel",null,["value",void 0,"disabled",void 0,"$m6",function($0){
with(this){
var $1=!disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}}},"$m7",function(){
return [this,"disabled"]
},"$lzc$set_disabled",function($0){
this.disabled=$0;this.setAttribute("focusable",!$0);this.setAttribute("clickable",!$0);if(this.ondisabled.ready){
this.ondisabled.sendEvent($0)
}}],["tagname","buttonmodel","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({disabled:false,focusable:new LzAlwaysExpr("$m6","$m7"),value:""},$lzc$class_buttonmodel.attributes)
}}})($lzc$class_buttonmodel);Mixin.make("$lzc$class_buttonevents",null,["mouseisover",void 0,"mouseisdown",void 0,"$m8",function(){
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
}}})($lzc$class_buttonevents);Mixin.make("$lzc$class_buttonfocus",null,["doFocus",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.disabled)this.animate("shadowblurradius",10,500)
},"doBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.animate("shadowblurradius",0,500)
}],["tagname","buttonfocus","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","doFocus",null,"onblur","doBlur",null],shadowblurradius:0,shadowcolor:LzColorUtils.convertColor("0xcc"),shadowdistance:0},$lzc$class_buttonfocus.attributes)
}}})($lzc$class_buttonfocus);Mixin.make("$lzc$class_drawbutton",null,["$m16",void 0,"basecolor",void 0,"borderwidth",void 0,"$m17",void 0,"bordercolor",void 0,"$m18",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m19",function($0){
if(!this.isinited)return;if($0==-1)return;var $1=LzColorUtils.tohsv($0);if(!this.bordercolor){
this.setAttribute("bordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.4))
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
this.beginPath();this.rect(0,0,this.width,this.height,this.cornerradius);this.closePath();this.strokeStyle=this.bordercolor;this.stroke()
}},"$m20",function($0){},"$m21",void 0,"interiorbordercolor",void 0,"$m22",void 0,"interiorfillcolor",void 0,"$m23",void 0,"$m24",void 0,"interiorbordercolorup",void 0,"$m25",void 0,"$m26",void 0,"interiorfillcolorup",void 0,"$m27",void 0,"$m28",void 0,"interiorbordercolorover",void 0,"$m29",void 0,"$m30",void 0,"interiorfillcolorover",void 0,"$m31",void 0,"$m32",void 0,"interiorbordercolordown",void 0,"$m33",void 0,"$m34",void 0,"interiorfillcolordown",void 0,"drawinteriorborder",function($0){
switch(arguments.length){
case 0:
$0="up";

};this.beginPath();this.rect(1,1,this.width-2,this.height-2,this.cornerradius);this.closePath();this.fillStyle=this["interiorfillcolor"+$0];this.fill();if(this.borderwidth>0){
this.strokeStyle=this["interiorbordercolor"+$0];this.stroke()
}},"$m35",function($0){},"$m36",void 0,"gradientfillstartup",void 0,"$m37",function($0){},"$m38",void 0,"gradientfillstopup",void 0,"$m39",function($0){},"$m40",void 0,"gradientfillstartover",void 0,"$m41",function($0){},"$m42",void 0,"gradientfillstopover",void 0,"$m43",function($0){},"$m44",void 0,"gradientfillstartdown",void 0,"$m45",function($0){},"$m46",void 0,"gradientfillstopdown",void 0,"_resetgradientcache",function($0){
this._gradientfills=[]
},"drawgradient",function($0){
switch(arguments.length){
case 0:
$0="up";

};this.beginPath();if($0=="down"){
this.rect(2,2,this.width-4,(this.height-4)*0.5)
}else{
this.rect(2,height*0.5,this.width-4,(this.height-4)*0.5)
};this.closePath();if(!this._gradientfills)this._gradientfills=[];if(!this._gradientfills[this.frame]){
var $1=this.createLinearGradient(0,Math.round(0.5*height),0,height);if(!this["gradientfillstart"+$0]||!this["gradientfillstop"+$0])return;$1.addColorStop(0,this["gradientfillstart"+$0]);$1.addColorStop(1,this["gradientfillstop"+$0]);this._gradientfills[this.frame]=$1
};this.fillStyle=this._gradientfills[this.frame];this.fill()
}],["tagname","drawbutton","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m18",null,"onbasecolor","$m19",null,"onframe","draw",null,"oninteriorbordercolor","$m20",null,"ongradientfillstartup","$m35",null,"ongradientfillstopup","$m37",null,"ongradientfillstartover","$m39",null,"ongradientfillstopover","$m41",null,"ongradientfillstartdown","$m43",null,"ongradientfillstopdown","$m45",null,"gradientfillstartup","_resetgradientcache",null,"gradientfillstopup","_resetgradientcache",null,"gradientfillstartover","_resetgradientcache",null,"gradientfillstopover","_resetgradientcache",null,"gradientfillstartdown","_resetgradientcache",null,"gradientfillstopdown","_resetgradientcache",null],$m16:function($0){
this.setAttribute("basecolor",LzColorUtils.convertColor("-1"))
},$m17:function($0){
this.setAttribute("bordercolor",LzColorUtils.convertColor("-1"))
},$m21:function($0){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("null"))
},$m22:function($0){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("null"))
},$m23:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m24:function(){
return [this,"interiorbordercolor"]
},$m25:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m26:function(){
return [this,"interiorfillcolor"]
},$m27:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m28:function(){
return [this,"interiorbordercolor"]
},$m29:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m30:function(){
return [this,"interiorfillcolor"]
},$m31:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m32:function(){
return [this,"interiorbordercolor"]
},$m33:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m34:function(){
return [this,"interiorfillcolor"]
},$m36:function($0){
this.setAttribute("gradientfillstartup",LzColorUtils.convertColor("null"))
},$m38:function($0){
this.setAttribute("gradientfillstopup",LzColorUtils.convertColor("null"))
},$m40:function($0){
this.setAttribute("gradientfillstartover",LzColorUtils.convertColor("null"))
},$m42:function($0){
this.setAttribute("gradientfillstopover",LzColorUtils.convertColor("null"))
},$m44:function($0){
this.setAttribute("gradientfillstartdown",LzColorUtils.convertColor("null"))
},$m46:function($0){
this.setAttribute("gradientfillstopdown",LzColorUtils.convertColor("null"))
},basecolor:new LzStyleConstraintExpr("basecolor","base-color","color",new LzOnceExpr("$m16")),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",new LzOnceExpr("$m17")),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number"),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0),gradientfillstartdown:new LzStyleConstraintExpr("gradientfillstartdown","gradientfill-start-down","color",new LzOnceExpr("$m44")),gradientfillstartover:new LzStyleConstraintExpr("gradientfillstartover","gradientfill-start-over","color",new LzOnceExpr("$m40")),gradientfillstartup:new LzStyleConstraintExpr("gradientfillstartup","gradientfill-start-up","color",new LzOnceExpr("$m36")),gradientfillstopdown:new LzStyleConstraintExpr("gradientfillstopdown","gradientfill-stop-down","color",new LzOnceExpr("$m46")),gradientfillstopover:new LzStyleConstraintExpr("gradientfillstopover","gradientfill-stop-over","color",new LzOnceExpr("$m42")),gradientfillstopup:new LzStyleConstraintExpr("gradientfillstopup","gradientfill-stop-up","color",new LzOnceExpr("$m38")),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m21")),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","interior-border-color-down","color",new LzAlwaysExpr("$m31","$m32")),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","interior-border-color-over","color",new LzAlwaysExpr("$m27","$m28")),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","interior-border-color-up","color",new LzAlwaysExpr("$m23","$m24")),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m22")),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","interior-fill-color-down","color",new LzAlwaysExpr("$m33","$m34")),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","interior-fill-color-over","color",new LzAlwaysExpr("$m29","$m30")),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","interior-fill-color-up","color",new LzAlwaysExpr("$m25","$m26"))},$lzc$class_drawbutton.attributes)
}}})($lzc$class_drawbutton);Class.make("$lzc$class_buttonfocus$basepanel",$lzc$class_basepanel,["doFocus",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(!this.disabled)this.animate("shadowblurradius",10,500)
},"doBlur",function($0){
switch(arguments.length){
case 0:
$0=null;

};this.animate("shadowblurradius",0,500)
}],["children",LzNode.mergeChildren([],$lzc$class_basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onfocus","doFocus",null,"onblur","doBlur",null],shadowblurradius:0,shadowcolor:LzColorUtils.convertColor("0xcc"),shadowdistance:0},$lzc$class_buttonfocus$basepanel.attributes)
}}})($lzc$class_buttonfocus$basepanel);Class.make("$lzc$class_drawbutton$buttonfocus$basepanel",$lzc$class_buttonfocus$basepanel,["$m57",void 0,"basecolor",void 0,"borderwidth",void 0,"$m58",void 0,"bordercolor",void 0,"$m59",function($0){
this.setAttribute("basecolor",this.basecolor)
},"$m60",function($0){
with(this){
if(!this.isinited)return;if($0==-1)return;var $1=LzColorUtils.tohsv($0);if(!this.bordercolor){
this.setAttribute("bordercolor",LzColorUtils.fromhsv($1.h,$1.s,$1.v-0.4))
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
this.beginPath();this.rect(0,0,this.width,this.height,this.cornerradius);this.closePath();this.strokeStyle=this.bordercolor;this.stroke()
}},"$m61",function($0){},"$m62",void 0,"interiorbordercolor",void 0,"$m63",void 0,"interiorfillcolor",void 0,"$m64",void 0,"$m65",void 0,"interiorbordercolorup",void 0,"$m66",void 0,"$m67",void 0,"interiorfillcolorup",void 0,"$m68",void 0,"$m69",void 0,"interiorbordercolorover",void 0,"$m70",void 0,"$m71",void 0,"interiorfillcolorover",void 0,"$m72",void 0,"$m73",void 0,"interiorbordercolordown",void 0,"$m74",void 0,"$m75",void 0,"interiorfillcolordown",void 0,"drawinteriorborder",function($0){
switch(arguments.length){
case 0:
$0="up";

};this.beginPath();this.rect(1,1,this.width-2,this.height-2,this.cornerradius);this.closePath();this.fillStyle=this["interiorfillcolor"+$0];this.fill();if(this.borderwidth>0){
this.strokeStyle=this["interiorbordercolor"+$0];this.stroke()
}},"$m76",function($0){},"$m77",void 0,"gradientfillstartup",void 0,"$m78",function($0){},"$m79",void 0,"gradientfillstopup",void 0,"$m80",function($0){},"$m81",void 0,"gradientfillstartover",void 0,"$m82",function($0){},"$m83",void 0,"gradientfillstopover",void 0,"$m84",function($0){},"$m85",void 0,"gradientfillstartdown",void 0,"$m86",function($0){},"$m87",void 0,"gradientfillstopdown",void 0,"_resetgradientcache",function($0){
this._gradientfills=[]
},"drawgradient",function($0){
with(this){
switch(arguments.length){
case 0:
$0="up";

};this.beginPath();if($0=="down"){
this.rect(2,2,this.width-4,(this.height-4)*0.5)
}else{
this.rect(2,height*0.5,this.width-4,(this.height-4)*0.5)
};this.closePath();if(!this._gradientfills)this._gradientfills=[];if(!this._gradientfills[this.frame]){
var $1=this.createLinearGradient(0,Math.round(0.5*height),0,height);if(!this["gradientfillstart"+$0]||!this["gradientfillstop"+$0])return;$1.addColorStop(0,this["gradientfillstart"+$0]);$1.addColorStop(1,this["gradientfillstop"+$0]);this._gradientfills[this.frame]=$1
};this.fillStyle=this._gradientfills[this.frame];this.fill()
}}],["children",LzNode.mergeChildren([],$lzc$class_buttonfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_buttonfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["oninit","$m59",null,"onbasecolor","$m60",null,"onframe","draw",null,"oninteriorbordercolor","$m61",null,"ongradientfillstartup","$m76",null,"ongradientfillstopup","$m78",null,"ongradientfillstartover","$m80",null,"ongradientfillstopover","$m82",null,"ongradientfillstartdown","$m84",null,"ongradientfillstopdown","$m86",null,"gradientfillstartup","_resetgradientcache",null,"gradientfillstopup","_resetgradientcache",null,"gradientfillstartover","_resetgradientcache",null,"gradientfillstopover","_resetgradientcache",null,"gradientfillstartdown","_resetgradientcache",null,"gradientfillstopdown","_resetgradientcache",null],$m57:function($0){
with(this){
this.setAttribute("basecolor",LzColorUtils.convertColor("-1"))
}},$m58:function($0){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("-1"))
}},$m62:function($0){
with(this){
this.setAttribute("interiorbordercolor",LzColorUtils.convertColor("null"))
}},$m63:function($0){
with(this){
this.setAttribute("interiorfillcolor",LzColorUtils.convertColor("null"))
}},$m64:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorup"]||!this.inited){
this.setAttribute("interiorbordercolorup",$1)
}},$m65:function(){
return [this,"interiorbordercolor"]
},$m66:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorup"]||!this.inited){
this.setAttribute("interiorfillcolorup",$1)
}},$m67:function(){
return [this,"interiorfillcolor"]
},$m68:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolorover"]||!this.inited){
this.setAttribute("interiorbordercolorover",$1)
}},$m69:function(){
return [this,"interiorbordercolor"]
},$m70:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolorover"]||!this.inited){
this.setAttribute("interiorfillcolorover",$1)
}},$m71:function(){
return [this,"interiorfillcolor"]
},$m72:function($0){
var $1=this.interiorbordercolor;if($1!==this["interiorbordercolordown"]||!this.inited){
this.setAttribute("interiorbordercolordown",$1)
}},$m73:function(){
return [this,"interiorbordercolor"]
},$m74:function($0){
var $1=this.interiorfillcolor;if($1!==this["interiorfillcolordown"]||!this.inited){
this.setAttribute("interiorfillcolordown",$1)
}},$m75:function(){
return [this,"interiorfillcolor"]
},$m77:function($0){
with(this){
this.setAttribute("gradientfillstartup",LzColorUtils.convertColor("null"))
}},$m79:function($0){
with(this){
this.setAttribute("gradientfillstopup",LzColorUtils.convertColor("null"))
}},$m81:function($0){
with(this){
this.setAttribute("gradientfillstartover",LzColorUtils.convertColor("null"))
}},$m83:function($0){
with(this){
this.setAttribute("gradientfillstopover",LzColorUtils.convertColor("null"))
}},$m85:function($0){
with(this){
this.setAttribute("gradientfillstartdown",LzColorUtils.convertColor("null"))
}},$m87:function($0){
with(this){
this.setAttribute("gradientfillstopdown",LzColorUtils.convertColor("null"))
}},basecolor:new LzStyleConstraintExpr("basecolor","base-color","color",new LzOnceExpr("$m57")),bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",new LzOnceExpr("$m58")),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number"),cornerradius:new LzStyleConstraintExpr("cornerradius","corner-radius","number",0),gradientfillstartdown:new LzStyleConstraintExpr("gradientfillstartdown","gradientfill-start-down","color",new LzOnceExpr("$m85")),gradientfillstartover:new LzStyleConstraintExpr("gradientfillstartover","gradientfill-start-over","color",new LzOnceExpr("$m81")),gradientfillstartup:new LzStyleConstraintExpr("gradientfillstartup","gradientfill-start-up","color",new LzOnceExpr("$m77")),gradientfillstopdown:new LzStyleConstraintExpr("gradientfillstopdown","gradientfill-stop-down","color",new LzOnceExpr("$m87")),gradientfillstopover:new LzStyleConstraintExpr("gradientfillstopover","gradientfill-stop-over","color",new LzOnceExpr("$m83")),gradientfillstopup:new LzStyleConstraintExpr("gradientfillstopup","gradientfill-stop-up","color",new LzOnceExpr("$m79")),interiorbordercolor:new LzStyleConstraintExpr("interiorbordercolor","interior-border-color","color",new LzOnceExpr("$m62")),interiorbordercolordown:new LzStyleConstraintExpr("interiorbordercolordown","interior-border-color-down","color",new LzAlwaysExpr("$m72","$m73")),interiorbordercolorover:new LzStyleConstraintExpr("interiorbordercolorover","interior-border-color-over","color",new LzAlwaysExpr("$m68","$m69")),interiorbordercolorup:new LzStyleConstraintExpr("interiorbordercolorup","interior-border-color-up","color",new LzAlwaysExpr("$m64","$m65")),interiorfillcolor:new LzStyleConstraintExpr("interiorfillcolor","interior-fill-color","color",new LzOnceExpr("$m63")),interiorfillcolordown:new LzStyleConstraintExpr("interiorfillcolordown","interior-fill-color-down","color",new LzAlwaysExpr("$m74","$m75")),interiorfillcolorover:new LzStyleConstraintExpr("interiorfillcolorover","interior-fill-color-over","color",new LzAlwaysExpr("$m70","$m71")),interiorfillcolorup:new LzStyleConstraintExpr("interiorfillcolorup","interior-fill-color-up","color",new LzAlwaysExpr("$m66","$m67"))},$lzc$class_drawbutton$buttonfocus$basepanel.attributes)
}}})($lzc$class_drawbutton$buttonfocus$basepanel);Class.make("$lzc$class_buttonevents$drawbutton$buttonfocus$basepanel",$lzc$class_drawbutton$buttonfocus$basepanel,["mouseisover",void 0,"mouseisdown",void 0,"$m49",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m50",function($0){
if($0&&(this.mouseisover||this.mouseisdown)&&!this.childOf($0)){
this.mouseisover=this.mouseisdown=false;this._updateFrame()
}},"$m51",function($0){
this.setAttribute("mouseisover",true)
},"$m52",function($0){
this.setAttribute("mouseisover",false)
},"$m53",function($0){
this.setAttribute("mouseisdown",true)
},"$m54",function($0){
this.setAttribute("mouseisdown",false)
},"$m55",function($0){
if($0==32||$0==13){
this.mouseisover=true;this.mouseisdown=true;this._updateFrame();if(this.onclick.ready)this.onclick.sendEvent()
}},"$m56",function($0){
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
}}],["children",LzNode.mergeChildren([],$lzc$class_drawbutton$buttonfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_drawbutton$buttonfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["ondisabled","_updateFrame",null,"onmode","$m50","$m49","onmouseover","$m51",null,"onmouseout","$m52",null,"onmousedown","$m53",null,"onmouseup","$m54",null,"onkeydown","$m55",null,"onkeyup","$m56",null,"onmouseisover","_updateFrame",null,"onmouseisdown","_updateFrame",null],clickable:true,mouseisdown:false,mouseisover:false},$lzc$class_buttonevents$drawbutton$buttonfocus$basepanel.attributes)
}}})($lzc$class_buttonevents$drawbutton$buttonfocus$basepanel);Class.make("$lzc$class_buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel",$lzc$class_buttonevents$drawbutton$buttonfocus$basepanel,["value",void 0,"disabled",void 0,"$m47",function($0){
with(this){
var $1=!disabled;if($1!==this["focusable"]||!this.inited){
this.setAttribute("focusable",$1)
}}},"$m48",function(){
return [this,"disabled"]
},"$lzc$set_disabled",function($0){
this.disabled=$0;this.setAttribute("focusable",!$0);this.setAttribute("clickable",!$0);if(this.ondisabled.ready){
this.ondisabled.sendEvent($0)
}}],["children",LzNode.mergeChildren([],$lzc$class_buttonevents$drawbutton$buttonfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_buttonevents$drawbutton$buttonfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({disabled:false,focusable:new LzAlwaysExpr("$m47","$m48"),value:""},$lzc$class_buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel.attributes)
}}})($lzc$class_buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel);Class.make("$lzc$class_boxmodel$buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel",$lzc$class_buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel,["construct",function($0,$1){
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
}],["children",LzNode.mergeChildren([],$lzc$class_buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({bordercolor:new LzStyleConstraintExpr("bordercolor","border-color","color",LzColorUtils.convertColor("0x0")),borderwidth:new LzStyleConstraintExpr("borderwidth","border-width","number",0),margin:new LzStyleConstraintExpr("margin","margin","number",0),onbordercolor:LzDeclaredEvent,onborderwidth:LzDeclaredEvent,onmargin:LzDeclaredEvent,onpadding:LzDeclaredEvent,padding:new LzStyleConstraintExpr("padding","padding","number",0)},$lzc$class_boxmodel$buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel.attributes)
}}})($lzc$class_boxmodel$buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel);Class.make("$lzc$class_bsbtn",$lzc$class_boxmodel$buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel,null,["tagname","bsbtn","children",LzNode.mergeChildren([],$lzc$class_boxmodel$buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel["children"]),"attributes",new LzInheritedHash($lzc$class_boxmodel$buttonmodel$buttonevents$drawbutton$buttonfocus$basepanel.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({margin:10},$lzc$class_bsbtn.attributes)
}}})($lzc$class_bsbtn);Class.make("$lzc$class_m94",LzText,["$m92",function($0){
with(this){
var $1=classroot.text;if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}}},"$m93",function(){
with(this){
return [classroot,"text"]
}},"$classrootdepth",void 0],["attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_btn",$lzc$class_bsbtn,["$m88",function($0){
var $1=this.txt.height+2;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}},"$m89",function(){
return [this.txt,"height"]
},"$m90",function($0){
var $1=this.txt.width+4;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$m91",function(){
return [this.txt,"width"]
},"text",void 0,"txt",void 0],["tagname","btn","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,align:"center",name:"txt",text:new LzAlwaysExpr("$m92","$m93"),valign:"middle"},"class":$lzc$class_m94}],$lzc$class_bsbtn["children"]),"attributes",new LzInheritedHash($lzc$class_bsbtn.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({height:new LzAlwaysExpr("$m88","$m89"),text:"",width:new LzAlwaysExpr("$m90","$m91")},$lzc$class_btn.attributes)
}}})($lzc$class_btn);(function(){
var $0=LzCSSStyle,$1=LzCSSStyleRule;$0._addRule(new $1("basepanel",{"base-color":15921906,"border-width":0.5,"corner-radius":3}))
})();Class.make("$lzc$class_m97",$lzc$class_btn,["$m95",function($0){
this.animate("width",100,500)
}],["children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);Class.make("$lzc$class_m98",$lzc$class_btn,["$m96",function($0){
this.animate("width",100,500)
}],["children",LzNode.mergeChildren([],$lzc$class_btn["children"]),"attributes",new LzInheritedHash($lzc$class_btn.attributes)]);canvas.LzInstantiateView({attrs:{x:100,y:100},children:[{attrs:{height:50,width:50},"class":$lzc$class_bsbtn},{attrs:{disabled:true,height:50,width:50},"class":$lzc$class_bsbtn},{attrs:{$delegates:["onclick","$m95",null],clickable:true,text:"ok"},"class":$lzc$class_m97},{attrs:{$delegates:["onclick","$m96",null],clickable:true,text:"cancel"},"class":$lzc$class_m98}],"class":$lzc$class_vbox},8);lz["simplelayout"]=$lzc$class_simplelayout;lz["vbox"]=$lzc$class_vbox;lz["boxmodel"]=$lzc$class_boxmodel;lz["basepanel"]=$lzc$class_basepanel;lz["buttonmodel"]=$lzc$class_buttonmodel;lz["buttonevents"]=$lzc$class_buttonevents;lz["buttonfocus"]=$lzc$class_buttonfocus;lz["drawbutton"]=$lzc$class_drawbutton;lz["bsbtn"]=$lzc$class_bsbtn;lz["btn"]=$lzc$class_btn;canvas.initDone();