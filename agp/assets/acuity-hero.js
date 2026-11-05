(()=>{var ea="160",Kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},aA=0,Pa=1,cA=2;var rl=1,lA=2,un=3,Rn=0,Pt=1,dn=2;var sn=0,bi=1,Zs=2,Da=3,La=4,AA=5,Vn=100,hA=101,uA=102,Na=103,Fa=104,dA=200,fA=201,pA=202,mA=203,xo=204,Mo=205,gA=206,_A=207,xA=208,MA=209,vA=210,yA=211,EA=212,wA=213,SA=214,bA=0,TA=1,CA=2,$s=3,BA=4,IA=5,RA=6,UA=7,ol=0,PA=1,DA=2,Bn=0,LA=1,NA=2,FA=3,OA=4,kA=5,QA=6;var al=300,Bi=301,Ii=302,vo=303,yo=304,yr=306,Eo=1e3,Ut=1001,wo=1002,nt=1003,Oa=1004;var Vr=1005;var Vt=1006,zA=1007;var cs=1008;var In=1009,HA=1010,VA=1011,ta=1012,cl=1013,Cn=1014,kt=1015,Kt=1016,ll=1017,Al=1018,Yn=1020,GA=1021,vt=1023,YA=1024,WA=1025,Wn=1026,Ri=1027,XA=1028,hl=1029,qA=1030,ul=1031,dl=1033,Gr=33776,Yr=33777,Wr=33778,Xr=33779,ka=35840,Qa=35841,za=35842,Ha=35843,fl=36196,Va=37492,Ga=37496,Ya=37808,Wa=37809,Xa=37810,qa=37811,ja=37812,Ja=37813,Ka=37814,Za=37815,$a=37816,ec=37817,tc=37818,nc=37819,ic=37820,sc=37821,qr=36492,rc=36494,oc=36495,jA=36283,ac=36284,cc=36285,lc=36286;var er=2300,tr=2301,jr=2302,Ac=2400,hc=2401,uc=2402;var pl=3e3,Xn=3001,JA=3200,KA=3201,ZA=0,$A=1,Gt="",ft="srgb",pn="srgb-linear",na="display-p3",Er="display-p3-linear",nr="linear",Ke="srgb",ir="rec709",sr="p3";var si=7680;var dc=519,eh=512,th=513,nh=514,ml=515,ih=516,sh=517,rh=518,oh=519,fc=35044,gl=35048;var pc="300 es",So=1035,fn=2e3,rr=2001,rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},_t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=1234567,ss=Math.PI/180,ls=180/Math.PI;function ki(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function ia(i,e){return(i%e+e)%e}function ah(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ch(i,e,t){return i!==e?(t-i)/(e-i):0}function rs(i,e,t){return(1-t)*i+t*e}function lh(i,e,t,n){return rs(i,e,1-Math.exp(-t*n))}function Ah(i,e=1){return e-Math.abs(ia(i,e*2)-e)}function hh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fh(i,e){return i+Math.random()*(e-i)}function ph(i){return i*(.5-Math.random())}function mh(i){i!==void 0&&(mc=i);let e=mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gh(i){return i*ss}function _h(i){return i*ls}function bo(i){return(i&i-1)===0&&i!==0}function xh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function or(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mh(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),A=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*A,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*A,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*A,o*l);break;case"XZX":i.set(o*A,c*m,c*p,o*l);break;case"YXY":i.set(c*p,o*A,c*m,o*l);break;case"ZYZ":i.set(c*m,c*p,o*A,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _l={DEG2RAD:ss,RAD2DEG:ls,generateUUID:ki,clamp:Mt,euclideanModulo:ia,mapLinear:ah,inverseLerp:ch,lerp:rs,damp:lh,pingpong:Ah,smoothstep:hh,smootherstep:uh,randInt:dh,randFloat:fh,randFloatSpread:ph,seededRandom:mh,degToRad:gh,radToDeg:_h,isPowerOfTwo:bo,ceilPowerOfTwo:xh,floorPowerOfTwo:or,setQuaternionFromProperEuler:Mh,normalize:bt,denormalize:vi},me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let A=this.elements;return A[0]=e,A[1]=s,A[2]=o,A[3]=t,A[4]=r,A[5]=c,A[6]=n,A[7]=a,A[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],A=n[4],u=n[7],f=n[2],p=n[5],m=n[8],g=s[0],d=s[3],h=s[6],M=s[1],_=s[4],S=s[7],I=s[2],C=s[5],b=s[8];return r[0]=a*g+o*M+c*I,r[3]=a*d+o*_+c*C,r[6]=a*h+o*S+c*b,r[1]=l*g+A*M+u*I,r[4]=l*d+A*_+u*C,r[7]=l*h+A*S+u*b,r[2]=f*g+p*M+m*I,r[5]=f*d+p*_+m*C,r[8]=f*h+p*S+m*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],A=e[8];return t*a*A-t*o*l-n*r*A+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],A=e[8],u=A*a-o*l,f=o*c-A*r,p=l*r-a*c,m=t*u+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=u*g,e[1]=(s*l-A*n)*g,e[2]=(o*n-s*a)*g,e[3]=f*g,e[4]=(A*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jr.makeScale(e,t)),this}rotate(e){return this.premultiply(Jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jr=new ze;function xl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vh(){let i=ar("canvas");return i.style.display="block",i}var gc={};function os(i){i in gc||(gc[i]=!0,console.warn(i))}var _c=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xc=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[pn]:{transfer:nr,primaries:ir,toReference:i=>i,fromReference:i=>i},[ft]:{transfer:Ke,primaries:ir,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Er]:{transfer:nr,primaries:sr,toReference:i=>i.applyMatrix3(xc),fromReference:i=>i.applyMatrix3(_c)},[na]:{transfer:Ke,primaries:sr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(xc),fromReference:i=>i.applyMatrix3(_c).convertLinearToSRGB()}},yh=new Set([pn,Er]),qe={enabled:!0,_workingColorSpace:pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=bs[e].toReference,s=bs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return bs[i].primaries},getTransfer:function(i){return i===Gt?nr:bs[i].transfer}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ri,cr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=ar("canvas")),ri.width=e.width,ri.height=e.height;let n=ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ar("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Eh=0,lr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zr(s[a].image)):r.push(Zr(s[a]))}else r=Zr(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wh=0,Yt=class i extends rn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ut,s=Ut,r=Vt,a=cs,o=vt,c=In,l=i.DEFAULT_ANISOTROPY,A=Gt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=ki(),this.name="",this.source=new lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof A=="string"?this.colorSpace=A:(os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===Xn?ft:Gt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ft?Xn:pl}set encoding(e){os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xn?ft:Gt}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=al;Yt.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],A=c[4],u=c[8],f=c[1],p=c[5],m=c[9],g=c[2],d=c[6],h=c[10];if(Math.abs(A-f)<.01&&Math.abs(u-g)<.01&&Math.abs(m-d)<.01){if(Math.abs(A+f)<.1&&Math.abs(u+g)<.1&&Math.abs(m+d)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,S=(p+1)/2,I=(h+1)/2,C=(A+f)/4,b=(u+g)/4,H=(m+d)/4;return _>S&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=C/n,r=b/n):S>I?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=H/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=b/r,s=H/r),this.set(n,s,r,t),this}let M=Math.sqrt((d-m)*(d-m)+(u-g)*(u-g)+(f-A)*(f-A));return Math.abs(M)<.001&&(M=1),this.x=(d-m)/M,this.y=(u-g)/M,this.z=(f-A)/M,this.w=Math.acos((l+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},To=class extends rn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xn?ft:Gt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Yt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new lr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mt=class extends To{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ar=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nt,this.minFilter=nt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Co=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nt,this.minFilter=nt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],A=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],m=r[a+2],g=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=A,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(u!==g||c!==f||l!==p||A!==m){let d=1-o,h=c*f+l*p+A*m+u*g,M=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){let I=Math.sqrt(_),C=Math.atan2(I,h*M);d=Math.sin(d*C)/I,o=Math.sin(o*C)/I}let S=o*M;if(c=c*d+f*S,l=l*d+p*S,A=A*d+m*S,u=u*d+g*S,d===1-o){let I=1/Math.sqrt(c*c+l*l+A*A+u*u);c*=I,l*=I,A*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=A,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],A=n[s+3],u=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+A*u+c*p-l*f,e[t+1]=c*m+A*f+l*u-o*p,e[t+2]=l*m+A*p+o*f-c*u,e[t+3]=A*m-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),A=o(s/2),u=o(r/2),f=c(n/2),p=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*A*u+l*p*m,this._y=l*p*u-f*A*m,this._z=l*A*m+f*p*u,this._w=l*A*u-f*p*m;break;case"YXZ":this._x=f*A*u+l*p*m,this._y=l*p*u-f*A*m,this._z=l*A*m-f*p*u,this._w=l*A*u+f*p*m;break;case"ZXY":this._x=f*A*u-l*p*m,this._y=l*p*u+f*A*m,this._z=l*A*m+f*p*u,this._w=l*A*u-f*p*m;break;case"ZYX":this._x=f*A*u-l*p*m,this._y=l*p*u+f*A*m,this._z=l*A*m-f*p*u,this._w=l*A*u+f*p*m;break;case"YZX":this._x=f*A*u+l*p*m,this._y=l*p*u+f*A*m,this._z=l*A*m-f*p*u,this._w=l*A*u-f*p*m;break;case"XZY":this._x=f*A*u-l*p*m,this._y=l*p*u-f*A*m,this._z=l*A*m+f*p*u,this._w=l*A*u+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],A=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(A-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(A-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+A)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+A)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,A=t._w;return this._x=n*A+a*o+s*l-r*c,this._y=s*A+a*c+r*o-n*l,this._z=r*A+a*l+n*c-s*o,this._w=a*A-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),A=Math.atan2(l,o),u=Math.sin((1-t)*A)/l,f=Math.sin(t*A)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),A=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*A,this.y=n+c*A+o*l-r*u,this.z=s+c*u+r*A-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $r.copy(this).projectOnVector(e),this.sub($r)}reflect(e){return this.sub($r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$r=new R,Mc=new Zt,mn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),Cs.subVectors(this.max,Zi),oi.subVectors(e.a,Zi),ai.subVectors(e.b,Zi),ci.subVectors(e.c,Zi),En.subVectors(ai,oi),wn.subVectors(ci,ai),On.subVectors(oi,ci);let t=[0,-En.z,En.y,0,-wn.z,wn.y,0,-On.z,On.y,En.z,0,-En.x,wn.z,0,-wn.x,On.z,0,-On.x,-En.y,En.x,0,-wn.y,wn.x,0,-On.y,On.x,0];return!eo(t,oi,ai,ci,Cs)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,oi,ai,ci,Cs))?!1:(Bs.crossVectors(En,wn),t=[Bs.x,Bs.y,Bs.z],eo(t,oi,ai,ci,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},an=[new R,new R,new R,new R,new R,new R,new R,new R],Xt=new R,Ts=new mn,oi=new R,ai=new R,ci=new R,En=new R,wn=new R,On=new R,Zi=new R,Cs=new R,Bs=new R,kn=new R;function eo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){kn.fromArray(i,r);let o=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),c=e.dot(kn),l=t.dot(kn),A=n.dot(kn);if(Math.max(-Math.max(c,l,A),Math.min(c,l,A))>o)return!1}return!0}var Sh=new mn,$i=new R,to=new R,Un=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);let t=$i.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(to)),this.expandByPoint($i.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},cn=new R,no=new R,Is=new R,Sn=new R,io=new R,Rs=new R,so=new R,Ui=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){no.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(no);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Is),o=Sn.dot(this.direction),c=-Sn.dot(Is),l=Sn.lengthSq(),A=Math.abs(1-a*a),u,f,p,m;if(A>0)if(u=a*c-o,f=a*o-c,m=r*A,u>=0)if(f>=-m)if(f<=m){let g=1/A;u*=g,f*=g,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(no).addScaledVector(Is,f),p}intersectSphere(e,t){cn.subVectors(e.center,this.origin);let n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,A=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),A>=0?(r=(e.min.y-f.y)*A,a=(e.max.y-f.y)*A):(r=(e.max.y-f.y)*A,a=(e.min.y-f.y)*A),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,s,r){io.subVectors(t,e),Rs.subVectors(n,e),so.crossVectors(io,Rs);let a=this.direction.dot(so),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);let c=o*this.direction.dot(Rs.crossVectors(Sn,Rs));if(c<0)return null;let l=o*this.direction.dot(io.cross(Sn));if(l<0||c+l>a)return null;let A=-o*Sn.dot(so);return A<0?null:this.at(A/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class i{constructor(e,t,n,s,r,a,o,c,l,A,u,f,p,m,g,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,A,u,f,p,m,g,d)}set(e,t,n,s,r,a,o,c,l,A,u,f,p,m,g,d){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=A,h[10]=u,h[14]=f,h[3]=p,h[7]=m,h[11]=g,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/li.setFromMatrixColumn(e,0).length(),r=1/li.setFromMatrixColumn(e,1).length(),a=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),A=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*A,p=a*u,m=o*A,g=o*u;t[0]=c*A,t[4]=-c*u,t[8]=l,t[1]=p+m*l,t[5]=f-g*l,t[9]=-o*c,t[2]=g-f*l,t[6]=m+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*A,p=c*u,m=l*A,g=l*u;t[0]=f+g*o,t[4]=m*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*A,t[9]=-o,t[2]=p*o-m,t[6]=g+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*A,p=c*u,m=l*A,g=l*u;t[0]=f-g*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*A,t[9]=g-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*A,p=a*u,m=o*A,g=o*u;t[0]=c*A,t[4]=m*l-p,t[8]=f*l+g,t[1]=c*u,t[5]=g*l+f,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,m=o*c,g=o*l;t[0]=c*A,t[4]=g-f*u,t[8]=m*u+p,t[1]=u,t[5]=a*A,t[9]=-o*A,t[2]=-l*A,t[6]=p*u+m,t[10]=f-g*u}else if(e.order==="XZY"){let f=a*c,p=a*l,m=o*c,g=o*l;t[0]=c*A,t[4]=-u,t[8]=l*A,t[1]=f*u+g,t[5]=a*A,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*A,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bh,e,Th)}lookAt(e,t,n){let s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),bn.crossVectors(n,Ft),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),bn.crossVectors(n,Ft)),bn.normalize(),Us.crossVectors(Ft,bn),s[0]=bn.x,s[4]=Us.x,s[8]=Ft.x,s[1]=bn.y,s[5]=Us.y,s[9]=Ft.y,s[2]=bn.z,s[6]=Us.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],A=n[1],u=n[5],f=n[9],p=n[13],m=n[2],g=n[6],d=n[10],h=n[14],M=n[3],_=n[7],S=n[11],I=n[15],C=s[0],b=s[4],H=s[8],v=s[12],w=s[1],O=s[5],W=s[9],ae=s[13],U=s[2],D=s[6],V=s[10],X=s[14],Y=s[3],G=s[7],j=s[11],$=s[15];return r[0]=a*C+o*w+c*U+l*Y,r[4]=a*b+o*O+c*D+l*G,r[8]=a*H+o*W+c*V+l*j,r[12]=a*v+o*ae+c*X+l*$,r[1]=A*C+u*w+f*U+p*Y,r[5]=A*b+u*O+f*D+p*G,r[9]=A*H+u*W+f*V+p*j,r[13]=A*v+u*ae+f*X+p*$,r[2]=m*C+g*w+d*U+h*Y,r[6]=m*b+g*O+d*D+h*G,r[10]=m*H+g*W+d*V+h*j,r[14]=m*v+g*ae+d*X+h*$,r[3]=M*C+_*w+S*U+I*Y,r[7]=M*b+_*O+S*D+I*G,r[11]=M*H+_*W+S*V+I*j,r[15]=M*v+_*ae+S*X+I*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],A=e[2],u=e[6],f=e[10],p=e[14],m=e[3],g=e[7],d=e[11],h=e[15];return m*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*p-n*c*p)+g*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*A-r*c*A)+d*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*A-n*l*A)+h*(-s*o*A-t*c*u+t*o*f+s*a*u-n*a*f+n*c*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],A=e[8],u=e[9],f=e[10],p=e[11],m=e[12],g=e[13],d=e[14],h=e[15],M=u*d*l-g*f*l+g*c*p-o*d*p-u*c*h+o*f*h,_=m*f*l-A*d*l-m*c*p+a*d*p+A*c*h-a*f*h,S=A*g*l-m*u*l+m*o*p-a*g*p-A*o*h+a*u*h,I=m*u*c-A*g*c-m*o*f+a*g*f+A*o*d-a*u*d,C=t*M+n*_+s*S+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/C;return e[0]=M*b,e[1]=(g*f*r-u*d*r-g*s*p+n*d*p+u*s*h-n*f*h)*b,e[2]=(o*d*r-g*c*r+g*s*l-n*d*l-o*s*h+n*c*h)*b,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*p-n*c*p)*b,e[4]=_*b,e[5]=(A*d*r-m*f*r+m*s*p-t*d*p-A*s*h+t*f*h)*b,e[6]=(m*c*r-a*d*r-m*s*l+t*d*l+a*s*h-t*c*h)*b,e[7]=(a*f*r-A*c*r+A*s*l-t*f*l-a*s*p+t*c*p)*b,e[8]=S*b,e[9]=(m*u*r-A*g*r-m*n*p+t*g*p+A*n*h-t*u*h)*b,e[10]=(a*g*r-m*o*r+m*n*l-t*g*l-a*n*h+t*o*h)*b,e[11]=(A*o*r-a*u*r-A*n*l+t*u*l+a*n*p-t*o*p)*b,e[12]=I*b,e[13]=(A*g*s-m*u*s+m*n*f-t*g*f-A*n*d+t*u*d)*b,e[14]=(m*o*s-a*g*s-m*n*c+t*g*c+a*n*d-t*o*d)*b,e[15]=(a*u*s-A*o*s+A*n*c-t*u*c-a*n*f+t*o*f)*b,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,A=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,A*o+n,A*c-s*a,0,l*c-s*o,A*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,A=a+a,u=o+o,f=r*l,p=r*A,m=r*u,g=a*A,d=a*u,h=o*u,M=c*l,_=c*A,S=c*u,I=n.x,C=n.y,b=n.z;return s[0]=(1-(g+h))*I,s[1]=(p+S)*I,s[2]=(m-_)*I,s[3]=0,s[4]=(p-S)*C,s[5]=(1-(f+h))*C,s[6]=(d+M)*C,s[7]=0,s[8]=(m+_)*b,s[9]=(d-M)*b,s[10]=(1-(f+g))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=li.set(s[0],s[1],s[2]).length(),a=li.set(s[4],s[5],s[6]).length(),o=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qt.copy(this);let l=1/r,A=1/a,u=1/o;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=A,qt.elements[5]*=A,qt.elements[6]*=A,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=fn){let c=this.elements,l=2*r/(t-e),A=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,m;if(o===fn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===rr)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=A,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=fn){let c=this.elements,l=1/(t-e),A=1/(n-s),u=1/(a-r),f=(t+e)*l,p=(n+s)*A,m,g;if(o===fn)m=(a+r)*u,g=-2*u;else if(o===rr)m=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*A,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},li=new R,qt=new rt,bh=new R(0,0,0),Th=new R(1,1,1),bn=new R,Us=new R,Ft=new R,vc=new rt,yc=new Zt,hr=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],A=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-A,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(A,-1,1)),Math.abs(A)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-A,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-A,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hr.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ch=0,Ec=new R,Ai=new Zt,ln=new rt,Ps=new R,es=new R,Bh=new R,Ih=new Zt,wc=new R(1,0,0),Sc=new R(0,1,0),bc=new R(0,0,1),Rh={type:"added"},Uh={type:"removed"},Dt=class i extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new hr,n=new Zt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new ze}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Sc,e)}rotateZ(e){return this.rotateOnAxis(bc,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Sc,e)}translateZ(e){return this.translateOnAxis(bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(es,Ps,this.up):ln.lookAt(Ps,es,this.up),this.quaternion.setFromRotationMatrix(ln),s&&(ln.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(ln),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Ih,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,A=c.length;l<A;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),A=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),A.length>0&&(n.images=A),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let A=o[l];delete A.metadata,c.push(A)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new R(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=new R,An=new R,ro=new R,hn=new R,hi=new R,ui=new R,Tc=new R,oo=new R,ao=new R,co=new R,Ds=!1,yi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jt.subVectors(s,t),An.subVectors(n,t),ro.subVectors(e,t);let a=jt.dot(jt),o=jt.dot(An),c=jt.dot(ro),l=An.dot(An),A=An.dot(ro),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-o*A)*f,m=(a*A-o*c)*f;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(e,t,n,s,r,a,o,c){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hn.x),c.addScaledVector(a,hn.y),c.addScaledVector(o,hn.z),c)}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),An.subVectors(e,t),jt.cross(An).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),An.subVectors(this.a,this.b),jt.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;hi.subVectors(s,n),ui.subVectors(r,n),oo.subVectors(e,n);let c=hi.dot(oo),l=ui.dot(oo);if(c<=0&&l<=0)return t.copy(n);ao.subVectors(e,s);let A=hi.dot(ao),u=ui.dot(ao);if(A>=0&&u<=A)return t.copy(s);let f=c*u-A*l;if(f<=0&&c>=0&&A<=0)return a=c/(c-A),t.copy(n).addScaledVector(hi,a);co.subVectors(e,r);let p=hi.dot(co),m=ui.dot(co);if(m>=0&&p<=m)return t.copy(r);let g=p*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(ui,o);let d=A*m-p*u;if(d<=0&&u-A>=0&&p-m>=0)return Tc.subVectors(r,s),o=(u-A)/(u-A+(p-m)),t.copy(s).addScaledVector(Tc,o);let h=1/(d+g+f);return a=g*h,o=f*h,t.copy(n).addScaledVector(hi,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=ia(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lo(a,r,e+1/3),this.g=lo(a,r,e),this.b=lo(a,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=Ml[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return qe.fromWorkingColorSpace(xt.copy(this),e),Math.round(Mt(xt.r*255,0,255))*65536+Math.round(Mt(xt.g*255,0,255))*256+Math.round(Mt(xt.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(xt.copy(this),t);let n=xt.r,s=xt.g,r=xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,A=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=A<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=A,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=ft){qe.fromWorkingColorSpace(xt.copy(this),e);let t=xt.r,n=xt.g,s=xt.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(Ls);let n=rs(Tn.h,Ls.h,t),s=rs(Tn.s,Ls.s,t),r=rs(Tn.l,Ls.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xt=new xe;xe.NAMES=Ml;var Ph=0,qn=class extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=bi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=Mo,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pn=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var st=new R,Ns=new me,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),e}};var dr=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fr=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Bt=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Dh=0,Ht=new rt,Ao=new Dt,di=new R,Ot=new mn,ts=new mn,ut=new R,Qt=class i extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xl(e)?fr:dr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(Ot.min,ts.min),Ot.expandByPoint(ut),ut.addVectors(Ot.max,ts.max),Ot.expandByPoint(ut)):(Ot.expandByPoint(ts.min),Ot.expandByPoint(ts.max))}Ot.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,A=o.count;l<A;l++)ut.fromBufferAttribute(o,l),c&&(di.fromBufferAttribute(e,l),ut.add(di)),s=Math.max(s,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],A=[];for(let w=0;w<o;w++)l[w]=new R,A[w]=new R;let u=new R,f=new R,p=new R,m=new me,g=new me,d=new me,h=new R,M=new R;function _(w,O,W){u.fromArray(s,w*3),f.fromArray(s,O*3),p.fromArray(s,W*3),m.fromArray(a,w*2),g.fromArray(a,O*2),d.fromArray(a,W*2),f.sub(u),p.sub(u),g.sub(m),d.sub(m);let ae=1/(g.x*d.y-d.x*g.y);isFinite(ae)&&(h.copy(f).multiplyScalar(d.y).addScaledVector(p,-g.y).multiplyScalar(ae),M.copy(p).multiplyScalar(g.x).addScaledVector(f,-d.x).multiplyScalar(ae),l[w].add(h),l[O].add(h),l[W].add(h),A[w].add(M),A[O].add(M),A[W].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let w=0,O=S.length;w<O;++w){let W=S[w],ae=W.start,U=W.count;for(let D=ae,V=ae+U;D<V;D+=3)_(n[D+0],n[D+1],n[D+2])}let I=new R,C=new R,b=new R,H=new R;function v(w){b.fromArray(r,w*3),H.copy(b);let O=l[w];I.copy(O),I.sub(b.multiplyScalar(b.dot(O))).normalize(),C.crossVectors(H,O);let ae=C.dot(A[w])<0?-1:1;c[w*4]=I.x,c[w*4+1]=I.y,c[w*4+2]=I.z,c[w*4+3]=ae}for(let w=0,O=S.length;w<O;++w){let W=S[w],ae=W.start,U=W.count;for(let D=ae,V=ae+U;D<V;D+=3)v(n[D+0]),v(n[D+1]),v(n[D+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,A=new R,u=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),g=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,d),A.subVectors(a,r),u.subVectors(s,r),A.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),o.add(A),c.add(A),l.add(A),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),A.subVectors(a,r),u.subVectors(s,r),A.cross(u),n.setXYZ(f+0,A.x,A.y,A.z),n.setXYZ(f+1,A.x,A.y,A.z),n.setXYZ(f+2,A.x,A.y,A.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,c){let l=o.array,A=o.itemSize,u=o.normalized,f=new l.constructor(c.length*A),p=0,m=0;for(let g=0,d=c.length;g<d;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*A;for(let h=0;h<A;h++)f[m++]=l[p++]}return new Et(f,A,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let A=0,u=l.length;A<u;A++){let f=l[A],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],A=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];A.push(p.toJSON(e.data))}A.length>0&&(s[c]=A,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let A=s[l];this.setAttribute(l,A.clone(t))}let r=e.morphAttributes;for(let l in r){let A=[],u=r[l];for(let f=0,p=u.length;f<p;f++)A.push(u[f].clone(t));this.morphAttributes[l]=A}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,A=a.length;l<A;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cc=new rt,Qn=new Ui,Fs=new Un,Bc=new R,fi=new R,pi=new R,mi=new R,ho=new R,Os=new R,ks=new me,Qs=new me,zs=new me,Ic=new R,Rc=new R,Uc=new R,Hs=new R,Vs=new R,yt=class extends Dt{constructor(e=new Qt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Os.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let A=o[c],u=r[c];A!==0&&(ho.fromBufferAttribute(u,e),a?Os.addScaledVector(ho,A):Os.addScaledVector(ho.sub(t),A))}t.add(Os)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(Fs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Fs,Bc)===null||Qn.origin.distanceToSquared(Bc)>(e.far-e.near)**2))&&(Cc.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,A=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){let d=f[m],h=a[d.materialIndex],M=Math.max(d.start,p.start),_=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let S=M,I=_;S<I;S+=3){let C=o.getX(S),b=o.getX(S+1),H=o.getX(S+2);s=Gs(this,h,e,n,l,A,u,C,b,H),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let d=m,h=g;d<h;d+=3){let M=o.getX(d),_=o.getX(d+1),S=o.getX(d+2);s=Gs(this,a,e,n,l,A,u,M,_,S),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){let d=f[m],h=a[d.materialIndex],M=Math.max(d.start,p.start),_=Math.min(c.count,Math.min(d.start+d.count,p.start+p.count));for(let S=M,I=_;S<I;S+=3){let C=S,b=S+1,H=S+2;s=Gs(this,h,e,n,l,A,u,C,b,H),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let d=m,h=g;d<h;d+=3){let M=d,_=d+1,S=d+2;s=Gs(this,a,e,n,l,A,u,M,_,S),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};function Lh(i,e,t,n,s,r,a,o){let c;if(e.side===Pt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Rn,o),c===null)return null;Vs.copy(o),Vs.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Vs);return l<t.near||l>t.far?null:{distance:l,point:Vs.clone(),object:i}}function Gs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,fi),i.getVertexPosition(c,pi),i.getVertexPosition(l,mi);let A=Lh(i,e,t,n,fi,pi,mi,Hs);if(A){s&&(ks.fromBufferAttribute(s,o),Qs.fromBufferAttribute(s,c),zs.fromBufferAttribute(s,l),A.uv=yi.getInterpolation(Hs,fi,pi,mi,ks,Qs,zs,new me)),r&&(ks.fromBufferAttribute(r,o),Qs.fromBufferAttribute(r,c),zs.fromBufferAttribute(r,l),A.uv1=yi.getInterpolation(Hs,fi,pi,mi,ks,Qs,zs,new me),A.uv2=A.uv1),a&&(Ic.fromBufferAttribute(a,o),Rc.fromBufferAttribute(a,c),Uc.fromBufferAttribute(a,l),A.normal=yi.getInterpolation(Hs,fi,pi,mi,Ic,Rc,Uc,new R),A.normal.dot(n.direction)>0&&A.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new R,materialIndex:0};yi.getNormal(fi,pi,mi,u.normal),A.face=u}return A}var As=class i extends Qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],A=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(A,3)),this.setAttribute("uv",new Bt(u,2));function m(g,d,h,M,_,S,I,C,b,H,v){let w=S/b,O=I/H,W=S/2,ae=I/2,U=C/2,D=b+1,V=H+1,X=0,Y=0,G=new R;for(let j=0;j<V;j++){let $=j*O-ae;for(let Ae=0;Ae<D;Ae++){let z=Ae*w-W;G[g]=z*M,G[d]=$*_,G[h]=U,l.push(G.x,G.y,G.z),G[g]=0,G[d]=0,G[h]=C>0?1:-1,A.push(G.x,G.y,G.z),u.push(Ae/b),u.push(1-j/H),X+=1}}for(let j=0;j<H;j++)for(let $=0;$<b;$++){let Ae=f+$+D*j,z=f+$+D*(j+1),J=f+($+1)+D*(j+1),he=f+($+1)+D*j;c.push(Ae,z,he),c.push(z,J,he),Y+=6}o.addGroup(p,Y,v),p+=Y,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Pi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Tt(i){let e={};for(let t=0;t<i.length;t++){let n=Pi(i[t]);for(let s in n)e[s]=n[s]}return e}function Nh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vl(i){return i.getRenderTarget()===null?i.outputColorSpace:qe.workingColorSpace}var Qi={clone:Pi,merge:Tt},Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ot=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=Nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Di=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ct=class extends Di{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gi=-90,_i=1,Bo=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(gi,_i,e,t);s.layers=this.layers,this.add(s);let r=new Ct(gi,_i,e,t);r.layers=this.layers,this.add(r);let a=new Ct(gi,_i,e,t);a.layers=this.layers,this.add(a);let o=new Ct(gi,_i,e,t);o.layers=this.layers,this.add(o);let c=new Ct(gi,_i,e,t);c.layers=this.layers,this.add(c);let l=new Ct(gi,_i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,A]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,A),e.setRenderTarget(u,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},pr=class extends Yt{constructor(e,t,n,s,r,a,o,c,l,A){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,s,r,a,o,c,l,A),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Io=class extends mt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xn?ft:Gt),this.texture=new pr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new As(5,5,5),r=new ot({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:sn});r.uniforms.tEquirect.value=t;let a=new yt(s,r),o=t.minFilter;return t.minFilter===cs&&(t.minFilter=Vt),new Bo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},uo=new R,kh=new R,Qh=new ze,Jt=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=uo.subVectors(n,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(uo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qh.getNormalMatrix(e),s=this.coplanarPoint(uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zn=new Un,Ys=new R,mr=class{constructor(e=new Jt,t=new Jt,n=new Jt,s=new Jt,r=new Jt,a=new Jt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],A=s[5],u=s[6],f=s[7],p=s[8],m=s[9],g=s[10],d=s[11],h=s[12],M=s[13],_=s[14],S=s[15];if(n[0].setComponents(c-r,f-l,d-p,S-h).normalize(),n[1].setComponents(c+r,f+l,d+p,S+h).normalize(),n[2].setComponents(c+a,f+A,d+m,S+M).normalize(),n[3].setComponents(c-a,f-A,d-m,S-M).normalize(),n[4].setComponents(c-o,f-u,d-g,S-_).normalize(),t===fn)n[5].setComponents(c+o,f+u,d+g,S+_).normalize();else if(t===rr)n[5].setComponents(o,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ys.x=s.normal.x>0?e.max.x:e.min.x,Ys.y=s.normal.y>0?e.max.y:e.min.y,Ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zh(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,A){let u=l.array,f=l.usage,p=u.byteLength,m=i.createBuffer();i.bindBuffer(A,m),i.bufferData(A,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,A,u){let f=A.array,p=A._updateRange,m=A.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&m.length===0&&i.bufferSubData(u,0,f),m.length!==0){for(let g=0,d=m.length;g<d;g++){let h=m[g];t?i.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):i.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}A.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),A.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let A=n.get(l);A&&(i.deleteBuffer(A.buffer),n.delete(l))}function c(l,A){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,A));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,A),u.version=l.version}}return{get:a,remove:o,update:c}}var hs=class i extends Qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,A=c+1,u=e/o,f=t/c,p=[],m=[],g=[],d=[];for(let h=0;h<A;h++){let M=h*f-a;for(let _=0;_<l;_++){let S=_*u-r;m.push(S,-M,0),g.push(0,0,1),d.push(_/o),d.push(1-h/c)}}for(let h=0;h<c;h++)for(let M=0;M<o;M++){let _=M+l*h,S=M+l*(h+1),I=M+1+l*(h+1),C=M+1+l*h;p.push(_,S,C),p.push(S,I,C)}this.setIndex(p),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,du=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_u="gl_FragColor = linearToOutputTexel( gl_FragColor );",xu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Du=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,td=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,id=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,od=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,md=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Id=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ld=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,af=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Af=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,df=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_f=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Hh,alphahash_pars_fragment:Vh,alphamap_fragment:Gh,alphamap_pars_fragment:Yh,alphatest_fragment:Wh,alphatest_pars_fragment:Xh,aomap_fragment:qh,aomap_pars_fragment:jh,batching_pars_vertex:Jh,batching_vertex:Kh,begin_vertex:Zh,beginnormal_vertex:$h,bsdfs:eu,iridescence_fragment:tu,bumpmap_pars_fragment:nu,clipping_planes_fragment:iu,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:ru,clipping_planes_vertex:ou,color_fragment:au,color_pars_fragment:cu,color_pars_vertex:lu,color_vertex:Au,common:hu,cube_uv_reflection_fragment:uu,defaultnormal_vertex:du,displacementmap_pars_vertex:fu,displacementmap_vertex:pu,emissivemap_fragment:mu,emissivemap_pars_fragment:gu,colorspace_fragment:_u,colorspace_pars_fragment:xu,envmap_fragment:Mu,envmap_common_pars_fragment:vu,envmap_pars_fragment:yu,envmap_pars_vertex:Eu,envmap_physical_pars_fragment:Lu,envmap_vertex:wu,fog_vertex:Su,fog_pars_vertex:bu,fog_fragment:Tu,fog_pars_fragment:Cu,gradientmap_pars_fragment:Bu,lightmap_fragment:Iu,lightmap_pars_fragment:Ru,lights_lambert_fragment:Uu,lights_lambert_pars_fragment:Pu,lights_pars_begin:Du,lights_toon_fragment:Nu,lights_toon_pars_fragment:Fu,lights_phong_fragment:Ou,lights_phong_pars_fragment:ku,lights_physical_fragment:Qu,lights_physical_pars_fragment:zu,lights_fragment_begin:Hu,lights_fragment_maps:Vu,lights_fragment_end:Gu,logdepthbuf_fragment:Yu,logdepthbuf_pars_fragment:Wu,logdepthbuf_pars_vertex:Xu,logdepthbuf_vertex:qu,map_fragment:ju,map_pars_fragment:Ju,map_particle_fragment:Ku,map_particle_pars_fragment:Zu,metalnessmap_fragment:$u,metalnessmap_pars_fragment:ed,morphcolor_vertex:td,morphnormal_vertex:nd,morphtarget_pars_vertex:id,morphtarget_vertex:sd,normal_fragment_begin:rd,normal_fragment_maps:od,normal_pars_fragment:ad,normal_pars_vertex:cd,normal_vertex:ld,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:hd,clearcoat_normal_fragment_maps:ud,clearcoat_pars_fragment:dd,iridescence_pars_fragment:fd,opaque_fragment:pd,packing:md,premultiplied_alpha_fragment:gd,project_vertex:_d,dithering_fragment:xd,dithering_pars_fragment:Md,roughnessmap_fragment:vd,roughnessmap_pars_fragment:yd,shadowmap_pars_fragment:Ed,shadowmap_pars_vertex:wd,shadowmap_vertex:Sd,shadowmask_pars_fragment:bd,skinbase_vertex:Td,skinning_pars_vertex:Cd,skinning_vertex:Bd,skinnormal_vertex:Id,specularmap_fragment:Rd,specularmap_pars_fragment:Ud,tonemapping_fragment:Pd,tonemapping_pars_fragment:Dd,transmission_fragment:Ld,transmission_pars_fragment:Nd,uv_pars_fragment:Fd,uv_pars_vertex:Od,uv_vertex:kd,worldpos_vertex:Qd,background_vert:zd,background_frag:Hd,backgroundCube_vert:Vd,backgroundCube_frag:Gd,cube_vert:Yd,cube_frag:Wd,depth_vert:Xd,depth_frag:qd,distanceRGBA_vert:jd,distanceRGBA_frag:Jd,equirect_vert:Kd,equirect_frag:Zd,linedashed_vert:$d,linedashed_frag:ef,meshbasic_vert:tf,meshbasic_frag:nf,meshlambert_vert:sf,meshlambert_frag:rf,meshmatcap_vert:of,meshmatcap_frag:af,meshnormal_vert:cf,meshnormal_frag:lf,meshphong_vert:Af,meshphong_frag:hf,meshphysical_vert:uf,meshphysical_frag:df,meshtoon_vert:ff,meshtoon_frag:pf,points_vert:mf,points_frag:gf,shadow_vert:_f,shadow_frag:xf,sprite_vert:Mf,sprite_frag:vf},ce={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},nn={basic:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Tt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Tt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Tt([ce.points,ce.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Tt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Tt([ce.common,ce.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Tt([ce.sprite,ce.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Tt([ce.common,ce.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Tt([ce.lights,ce.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};nn.physical={uniforms:Tt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var Ws={r:0,b:0,g:0};function yf(i,e,t,n,s,r,a){let o=new xe(0),c=r===!0?0:1,l,A,u=null,f=0,p=null;function m(d,h){let M=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_)),_===null?g(o,c):_&&_.isColor&&(g(_,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===yr)?(A===void 0&&(A=new yt(new As(1,1,1),new ot({name:"BackgroundCubeMaterial",uniforms:Pi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),A.geometry.deleteAttribute("normal"),A.geometry.deleteAttribute("uv"),A.onBeforeRender=function(I,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(A.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(A)),A.material.uniforms.envMap.value=_,A.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,A.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,A.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,A.material.toneMapped=qe.getTransfer(_.colorSpace)!==Ke,(u!==_||f!==_.version||p!==i.toneMapping)&&(A.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),A.layers.enableAll(),d.unshift(A,A.geometry,A.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new yt(new hs(2,2),new ot({name:"BackgroundMaterial",uniforms:Pi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=qe.getTransfer(_.colorSpace)!==Ke,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,h){d.getRGB(Ws,vl(i)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(d,h=1){o.set(d),c=h,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,g(o,c)},render:m}}function Ef(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=d(null),l=c,A=!1;function u(U,D,V,X,Y){let G=!1;if(a){let j=g(X,V,D);l!==j&&(l=j,p(l.object)),G=h(U,X,V,Y),G&&M(U,X,V,Y)}else{let j=D.wireframe===!0;(l.geometry!==X.id||l.program!==V.id||l.wireframe!==j)&&(l.geometry=X.id,l.program=V.id,l.wireframe=j,G=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(G||A)&&(A=!1,H(U,D,V,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(U){return n.isWebGL2?i.bindVertexArray(U):r.bindVertexArrayOES(U)}function m(U){return n.isWebGL2?i.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function g(U,D,V){let X=V.wireframe===!0,Y=o[U.id];Y===void 0&&(Y={},o[U.id]=Y);let G=Y[D.id];G===void 0&&(G={},Y[D.id]=G);let j=G[X];return j===void 0&&(j=d(f()),G[X]=j),j}function d(U){let D=[],V=[],X=[];for(let Y=0;Y<s;Y++)D[Y]=0,V[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:X,object:U,attributes:{},index:null}}function h(U,D,V,X){let Y=l.attributes,G=D.attributes,j=0,$=V.getAttributes();for(let Ae in $)if($[Ae].location>=0){let J=Y[Ae],he=G[Ae];if(he===void 0&&(Ae==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),Ae==="instanceColor"&&U.instanceColor&&(he=U.instanceColor)),J===void 0||J.attribute!==he||he&&J.data!==he.data)return!0;j++}return l.attributesNum!==j||l.index!==X}function M(U,D,V,X){let Y={},G=D.attributes,j=0,$=V.getAttributes();for(let Ae in $)if($[Ae].location>=0){let J=G[Ae];J===void 0&&(Ae==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),Ae==="instanceColor"&&U.instanceColor&&(J=U.instanceColor));let he={};he.attribute=J,J&&J.data&&(he.data=J.data),Y[Ae]=he,j++}l.attributes=Y,l.attributesNum=j,l.index=X}function _(){let U=l.newAttributes;for(let D=0,V=U.length;D<V;D++)U[D]=0}function S(U){I(U,0)}function I(U,D){let V=l.newAttributes,X=l.enabledAttributes,Y=l.attributeDivisors;V[U]=1,X[U]===0&&(i.enableVertexAttribArray(U),X[U]=1),Y[U]!==D&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,D),Y[U]=D)}function C(){let U=l.newAttributes,D=l.enabledAttributes;for(let V=0,X=D.length;V<X;V++)D[V]!==U[V]&&(i.disableVertexAttribArray(V),D[V]=0)}function b(U,D,V,X,Y,G,j){j===!0?i.vertexAttribIPointer(U,D,V,Y,G):i.vertexAttribPointer(U,D,V,X,Y,G)}function H(U,D,V,X){if(n.isWebGL2===!1&&(U.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let Y=X.attributes,G=V.getAttributes(),j=D.defaultAttributeValues;for(let $ in G){let Ae=G[$];if(Ae.location>=0){let z=Y[$];if(z===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(z=U.instanceColor)),z!==void 0){let J=z.normalized,he=z.itemSize,Me=t.get(z);if(Me===void 0)continue;let ge=Me.buffer,Ie=Me.type,Re=Me.bytesPerElement,Se=n.isWebGL2===!0&&(Ie===i.INT||Ie===i.UNSIGNED_INT||z.gpuType===cl);if(z.isInterleavedBufferAttribute){let He=z.data,L=He.stride,lt=z.offset;if(He.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Ae.locationSize;Ee++)I(Ae.location+Ee,He.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Ee=0;Ee<Ae.locationSize;Ee++)S(Ae.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Ee=0;Ee<Ae.locationSize;Ee++)b(Ae.location+Ee,he/Ae.locationSize,Ie,J,L*Re,(lt+he/Ae.locationSize*Ee)*Re,Se)}else{if(z.isInstancedBufferAttribute){for(let He=0;He<Ae.locationSize;He++)I(Ae.location+He,z.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let He=0;He<Ae.locationSize;He++)S(Ae.location+He);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let He=0;He<Ae.locationSize;He++)b(Ae.location+He,he/Ae.locationSize,Ie,J,he*Re,he/Ae.locationSize*He*Re,Se)}}else if(j!==void 0){let J=j[$];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(Ae.location,J);break;case 3:i.vertexAttrib3fv(Ae.location,J);break;case 4:i.vertexAttrib4fv(Ae.location,J);break;default:i.vertexAttrib1fv(Ae.location,J)}}}}C()}function v(){W();for(let U in o){let D=o[U];for(let V in D){let X=D[V];for(let Y in X)m(X[Y].object),delete X[Y];delete D[V]}delete o[U]}}function w(U){if(o[U.id]===void 0)return;let D=o[U.id];for(let V in D){let X=D[V];for(let Y in X)m(X[Y].object),delete X[Y];delete D[V]}delete o[U.id]}function O(U){for(let D in o){let V=o[D];if(V[U.id]===void 0)continue;let X=V[U.id];for(let Y in X)m(X[Y].object),delete X[Y];delete V[U.id]}}function W(){ae(),A=!0,l!==c&&(l=c,p(l.object))}function ae(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:ae,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:S,disableUnusedAttributes:C}}function wf(i,e,t,n){let s=n.isWebGL2,r;function a(A){r=A}function o(A,u){i.drawArrays(r,A,u),t.update(u,r,1)}function c(A,u,f){if(f===0)return;let p,m;if(s)p=i,m="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,A,u,f),t.update(u,r,f)}function l(A,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f;m++)this.render(A[m],u[m]);else{p.multiDrawArraysWEBGL(r,A,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Sf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),A=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,S=a||e.has("OES_texture_float"),I=_&&S,C=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:A,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:d,maxVaryings:h,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:I,maxSamples:C}}function bf(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Jt,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,A(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=A(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,g=u.clipIntersection,d=u.clipShadows,h=i.get(u);if(!s||m===null||m.length===0||r&&!d)r?A(null):l();else{let M=r?0:n,_=M*4,S=h.clippingState||null;c.value=S,S=A(m,f,_,p);for(let I=0;I!==_;++I)S[I]=t[I];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function A(u,f,p,m){let g=u!==null?u.length:0,d=null;if(g!==0){if(d=c.value,m!==!0||d===null){let h=p+g*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(d===null||d.length<h)&&(d=new Float32Array(h));for(let _=0,S=p;_!==g;++_,S+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(d,S),d[S+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,d}}function Tf(i){let e=new WeakMap;function t(a,o){return o===vo?a.mapping=Bi:o===yo&&(a.mapping=Ii),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===vo||o===yo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Io(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var us=class extends Di{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,A=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=A*this.view.offsetY,c=o-A*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ei=4,Pc=[.125,.215,.35,.446,.526,.582],Gn=20,fo=new us,Dc=new xe,po=null,mo=0,go=0,Hn=(1+Math.sqrt(5))/2,xi=1/Hn,Lc=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Hn,xi),new R(0,Hn,-xi),new R(xi,0,Hn),new R(-xi,0,Hn),new R(Hn,xi,0),new R(-Hn,xi,0)],gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(po,mo,go),e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Kt,format:vt,colorSpace:pn,depthBuffer:!1},s=Nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cf(r)),this._blurMaterial=Bf(r,e,t)}return s}_compileMaterial(e){let t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,n,s){let o=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],A=this._renderer,u=A.autoClear,f=A.toneMapping;A.getClearColor(Dc),A.toneMapping=Bn,A.autoClear=!1;let p=new Pn({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),m=new yt(new As,p),g=!1,d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,g=!0):(p.color.copy(Dc),g=!0);for(let h=0;h<6;h++){let M=h%3;M===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):M===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));let _=this._cubeSize;Xs(s,M*_,h>2?_:0,_,_),A.setRenderTarget(s),g&&A.render(m,o),A.render(e,o)}m.geometry.dispose(),m.material.dispose(),A.toneMapping=f,A.autoClear=u,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Bi||e.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Xs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,fo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lc[(s-1)%Lc.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let A=3,u=new yt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gn-1),g=r/m,d=isFinite(r)?1+Math.floor(A*g):Gn;d>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Gn}`);let h=[],M=0;for(let b=0;b<Gn;++b){let H=b/g,v=Math.exp(-H*H/2);h.push(v),b===0?M+=v:b<d&&(M+=2*v)}for(let b=0;b<h.length;b++)h[b]=h[b]/M;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;let S=this._sizeLods[s],I=3*S*(s>_-Ei?s-_+Ei:0),C=4*(this._cubeSize-S);Xs(t,I,C,3*S,2*S),c.setRenderTarget(t),c.render(u,fo)}};function Cf(i){let e=[],t=[],n=[],s=i,r=i-Ei+1+Pc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ei?c=Pc[a-i+Ei-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),A=-l,u=1+l,f=[A,A,u,A,u,u,A,A,u,u,A,u],p=6,m=6,g=3,d=2,h=1,M=new Float32Array(g*m*p),_=new Float32Array(d*m*p),S=new Float32Array(h*m*p);for(let C=0;C<p;C++){let b=C%3*2/3-1,H=C>2?0:-1,v=[b,H,0,b+2/3,H,0,b+2/3,H+1,0,b,H,0,b+2/3,H+1,0,b,H+1,0];M.set(v,g*m*C),_.set(f,d*m*C);let w=[C,C,C,C,C,C];S.set(w,h*m*C)}let I=new Qt;I.setAttribute("position",new Et(M,g)),I.setAttribute("uv",new Et(_,d)),I.setAttribute("faceIndex",new Et(S,h)),e.push(I),s>Ei&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nc(i,e,t){let n=new mt(i,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Bf(i,e,t){let n=new Float32Array(Gn),s=new R(0,1,0);return new ot({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Fc(){return new ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Oc(){return new ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function sa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function If(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===vo||c===yo,A=c===Bi||c===Ii;if(l||A)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new gr(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||A&&u&&s(u)){t===null&&(t=new gr(i));let f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let A=0;A<l;A++)o[A]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Uf(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);for(let m in f.morphAttributes){let g=f.morphAttributes[m];for(let d=0,h=g.length;d<h;d++)e.remove(g[d])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let m in f)e.update(f[m],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let g=p[m];for(let d=0,h=g.length;d<h;d++)e.update(g[d],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,m=u.attributes.position,g=0;if(p!==null){let M=p.array;g=p.version;for(let _=0,S=M.length;_<S;_+=3){let I=M[_+0],C=M[_+1],b=M[_+2];f.push(I,C,C,b,b,I)}}else if(m!==void 0){let M=m.array;g=m.version;for(let _=0,S=M.length/3-1;_<S;_+=3){let I=_+0,C=_+1,b=_+2;f.push(I,C,C,b,b,I)}}else return;let d=new(xl(f)?fr:dr)(f,1);d.version=g;let h=r.get(u);h&&e.remove(h),r.set(u,d)}function A(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:A}}function Pf(i,e,t,n){let s=n.isWebGL2,r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function A(p,m){i.drawElements(r,m,o,p*c),t.update(m,r,1)}function u(p,m,g){if(g===0)return;let d,h;if(s)d=i,h="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](r,m,o,p*c,g),t.update(m,r,g)}function f(p,m,g){if(g===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<g;h++)this.render(p[h]/c,m[h]);else{d.multiDrawElementsWEBGL(r,m,0,o,p,0,g);let h=0;for(let M=0;M<g;M++)h+=m[M];t.update(h,r,1)}}this.setMode=a,this.setIndex=l,this.render=A,this.renderInstances=u,this.renderMultiDraw=f}function Df(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lf(i,e){return i[0]-e[0]}function Nf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ff(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new pt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,A,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,m=p!==void 0?p.length:0,g=r.get(A);if(g===void 0||g.count!==m){let U=function(){W.dispose(),r.delete(A),A.removeEventListener("dispose",U)};g!==void 0&&g.texture.dispose();let M=A.morphAttributes.position!==void 0,_=A.morphAttributes.normal!==void 0,S=A.morphAttributes.color!==void 0,I=A.morphAttributes.position||[],C=A.morphAttributes.normal||[],b=A.morphAttributes.color||[],H=0;M===!0&&(H=1),_===!0&&(H=2),S===!0&&(H=3);let v=A.attributes.position.count*H,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let O=new Float32Array(v*w*4*m),W=new Ar(O,v,w,m);W.type=kt,W.needsUpdate=!0;let ae=H*4;for(let D=0;D<m;D++){let V=I[D],X=C[D],Y=b[D],G=v*w*4*D;for(let j=0;j<V.count;j++){let $=j*ae;M===!0&&(a.fromBufferAttribute(V,j),O[G+$+0]=a.x,O[G+$+1]=a.y,O[G+$+2]=a.z,O[G+$+3]=0),_===!0&&(a.fromBufferAttribute(X,j),O[G+$+4]=a.x,O[G+$+5]=a.y,O[G+$+6]=a.z,O[G+$+7]=0),S===!0&&(a.fromBufferAttribute(Y,j),O[G+$+8]=a.x,O[G+$+9]=a.y,O[G+$+10]=a.z,O[G+$+11]=Y.itemSize===4?a.w:1)}}g={count:m,texture:W,size:new me(v,w)},r.set(A,g),A.addEventListener("dispose",U)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];let h=A.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",h),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{let p=f===void 0?0:f.length,m=n[A.id];if(m===void 0||m.length!==p){m=[];for(let _=0;_<p;_++)m[_]=[_,0];n[A.id]=m}for(let _=0;_<p;_++){let S=m[_];S[0]=_,S[1]=f[_]}m.sort(Nf);for(let _=0;_<8;_++)_<p&&m[_][1]?(o[_][0]=m[_][0],o[_][1]=m[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Lf);let g=A.morphAttributes.position,d=A.morphAttributes.normal,h=0;for(let _=0;_<8;_++){let S=o[_],I=S[0],C=S[1];I!==Number.MAX_SAFE_INTEGER&&C?(g&&A.getAttribute("morphTarget"+_)!==g[I]&&A.setAttribute("morphTarget"+_,g[I]),d&&A.getAttribute("morphNormal"+_)!==d[I]&&A.setAttribute("morphNormal"+_,d[I]),s[_]=C,h+=C):(g&&A.hasAttribute("morphTarget"+_)===!0&&A.deleteAttribute("morphTarget"+_),d&&A.hasAttribute("morphNormal"+_)===!0&&A.deleteAttribute("morphNormal"+_),s[_]=0)}let M=A.morphTargetsRelative?1:1-h;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Of(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,A=c.geometry,u=e.get(c,A);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var _r=class extends Yt{constructor(e,t,n,s,r,a,o,c,l,A){if(A=A!==void 0?A:Wn,A!==Wn&&A!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&A===Wn&&(n=Cn),n===void 0&&A===Ri&&(n=Yn),super(null,s,r,a,o,c,A,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:nt,this.minFilter=c!==void 0?c:nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},El=new Yt,wl=new _r(1,1);wl.compareFunction=ml;var Sl=new Ar,bl=new Co,Tl=new pr,kc=[],Qc=[],zc=new Float32Array(16),Hc=new Float32Array(9),Vc=new Float32Array(4);function zi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function at(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wr(i,e){let t=Qc[e];t===void 0&&(t=new Int32Array(e),Qc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function zf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function Hf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function Vf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(at(t,n))return;Vc.set(n),i.uniformMatrix2fv(this.addr,!1,Vc),ct(t,n)}}function Gf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(at(t,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),ct(t,n)}}function Yf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(at(t,n))return;zc.set(n),i.uniformMatrix4fv(this.addr,!1,zc),ct(t,n)}}function Wf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function qf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function jf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function Jf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function Zf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function $f(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function ep(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?wl:El;t.setTexture2D(e||r,s)}function tp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bl,s)}function np(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tl,s)}function ip(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sl,s)}function sp(i){switch(i){case 5126:return kf;case 35664:return Qf;case 35665:return zf;case 35666:return Hf;case 35674:return Vf;case 35675:return Gf;case 35676:return Yf;case 5124:case 35670:return Wf;case 35667:case 35671:return Xf;case 35668:case 35672:return qf;case 35669:case 35673:return jf;case 5125:return Jf;case 36294:return Kf;case 36295:return Zf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}function rp(i,e){i.uniform1fv(this.addr,e)}function op(i,e){let t=zi(e,this.size,2);i.uniform2fv(this.addr,t)}function ap(i,e){let t=zi(e,this.size,3);i.uniform3fv(this.addr,t)}function cp(i,e){let t=zi(e,this.size,4);i.uniform4fv(this.addr,t)}function lp(i,e){let t=zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ap(i,e){let t=zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hp(i,e){let t=zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function up(i,e){i.uniform1iv(this.addr,e)}function dp(i,e){i.uniform2iv(this.addr,e)}function fp(i,e){i.uniform3iv(this.addr,e)}function pp(i,e){i.uniform4iv(this.addr,e)}function mp(i,e){i.uniform1uiv(this.addr,e)}function gp(i,e){i.uniform2uiv(this.addr,e)}function _p(i,e){i.uniform3uiv(this.addr,e)}function xp(i,e){i.uniform4uiv(this.addr,e)}function Mp(i,e,t){let n=this.cache,s=e.length,r=wr(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||El,r[a])}function vp(i,e,t){let n=this.cache,s=e.length,r=wr(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bl,r[a])}function yp(i,e,t){let n=this.cache,s=e.length,r=wr(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Tl,r[a])}function Ep(i,e,t){let n=this.cache,s=e.length,r=wr(t,s);at(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sl,r[a])}function wp(i){switch(i){case 5126:return rp;case 35664:return op;case 35665:return ap;case 35666:return cp;case 35674:return lp;case 35675:return Ap;case 35676:return hp;case 5124:case 35670:return up;case 35667:case 35671:return dp;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return _p;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return yp;case 36289:case 36303:case 36311:case 36292:return Ep}}var Ro=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sp(t.type)}},Uo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wp(t.type)}},Po=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},_o=/(\w+)(\])?(\[|\.)?/g;function Gc(i,e){i.seq.push(e),i.map[e.id]=e}function Sp(i,e,t){let n=i.name,s=n.length;for(_o.lastIndex=0;;){let r=_o.exec(n),a=_o.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Gc(t,l===void 0?new Ro(o,i,e):new Uo(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Po(o),Gc(t,u)),t=u}}}var Ci=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Sp(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Yc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var bp=37297,Tp=0;function Cp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Bp(i){let e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(i),n;switch(e===t?n="":e===sr&&t===ir?n="LinearDisplayP3ToLinearSRGB":e===ir&&t===sr&&(n="LinearSRGBToLinearDisplayP3"),i){case pn:case Er:return[n,"LinearTransferOETF"];case ft:case na:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Wc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Cp(i.getShaderSource(e),a)}else return s}function Ip(i,e){let t=Bp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rp(i,e){let t;switch(e){case LA:t="Linear";break;case NA:t="Reinhard";break;case FA:t="OptimizedCineon";break;case OA:t="ACESFilmic";break;case QA:t="AgX";break;case kA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Up(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function Pp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(wi).join(`
`)}function Dp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wi(i){return i!==""}function Xc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(Np,Op)}var Fp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Op(i,e){let t=Ne[e];if(t===void 0){let n=Fp.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}var kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(kp,Qp)}function Qp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lA?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function Hp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case Ii:e="ENVMAP_TYPE_CUBE";break;case yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function Gp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ol:e="ENVMAP_BLENDING_MULTIPLY";break;case PA:e="ENVMAP_BLENDING_MIX";break;case DA:e="ENVMAP_BLENDING_ADD";break}return e}function Yp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wp(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=zp(t),l=Hp(t),A=Vp(t),u=Gp(t),f=Yp(t),p=t.isWebGL2?"":Up(t),m=Pp(t),g=Dp(r),d=s.createProgram(),h,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wi).join(`
`),h.length>0&&(h+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wi).join(`
`),M.length>0&&(M+=`
`)):(h=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+A:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),M=[p,Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+A:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Rp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Ip("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),a=Do(a),a=Xc(a,t),a=qc(a,t),o=Do(o),o=Xc(o,t),o=qc(o,t),a=jc(a),o=jc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let S=_+h+a,I=_+M+o,C=Yc(s,s.VERTEX_SHADER,S),b=Yc(s,s.FRAGMENT_SHADER,I);s.attachShader(d,C),s.attachShader(d,b),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function H(W){if(i.debug.checkShaderErrors){let ae=s.getProgramInfoLog(d).trim(),U=s.getShaderInfoLog(C).trim(),D=s.getShaderInfoLog(b).trim(),V=!0,X=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,d,C,b);else{let Y=Wc(s,C,"vertex"),G=Wc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+Y+`
`+G)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(U===""||D==="")&&(X=!1);X&&(W.diagnostics={runnable:V,programLog:ae,vertexShader:{log:U,prefix:h},fragmentShader:{log:D,prefix:M}})}s.deleteShader(C),s.deleteShader(b),v=new Ci(s,d),w=Lp(s,d)}let v;this.getUniforms=function(){return v===void 0&&H(this),v};let w;this.getAttributes=function(){return w===void 0&&H(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(d,bp)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tp++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=C,this.fragmentShader=b,this}var Xp=0,Lo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new No(e),t.set(e,n)),n}},No=class{constructor(e){this.id=Xp++,this.code=e,this.usedTimes=0}};function qp(i,e,t,n,s,r,a){let o=new ur,c=new Lo,l=[],A=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===0?"uv":`uv${v}`}function d(v,w,O,W,ae){let U=W.fog,D=ae.geometry,V=v.isMeshStandardMaterial?W.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||V),Y=X&&X.mapping===yr?X.image.height:null,G=m[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,$=j!==void 0?j.length:0,Ae=0;D.morphAttributes.position!==void 0&&(Ae=1),D.morphAttributes.normal!==void 0&&(Ae=2),D.morphAttributes.color!==void 0&&(Ae=3);let z,J,he,Me;if(G){let wt=nn[G];z=wt.vertexShader,J=wt.fragmentShader}else z=v.vertexShader,J=v.fragmentShader,c.update(v),he=c.getVertexShaderID(v),Me=c.getFragmentShaderID(v);let ge=i.getRenderTarget(),Ie=ae.isInstancedMesh===!0,Re=ae.isBatchedMesh===!0,Se=!!v.map,He=!!v.matcap,L=!!X,lt=!!v.aoMap,Ee=!!v.lightMap,Ce=!!v.bumpMap,fe=!!v.normalMap,Je=!!v.displacementMap,Ue=!!v.emissiveMap,E=!!v.metalnessMap,x=!!v.roughnessMap,N=v.anisotropy>0,te=v.clearcoat>0,Z=v.iridescence>0,ee=v.sheen>0,pe=v.transmission>0,le=N&&!!v.anisotropyMap,de=te&&!!v.clearcoatMap,be=te&&!!v.clearcoatNormalMap,De=te&&!!v.clearcoatRoughnessMap,K=Z&&!!v.iridescenceMap,Ve=Z&&!!v.iridescenceThicknessMap,T=ee&&!!v.sheenColorMap,q=ee&&!!v.sheenRoughnessMap,oe=!!v.specularMap,ne=!!v.specularColorMap,_e=!!v.specularIntensityMap,ke=pe&&!!v.transmissionMap,Ge=pe&&!!v.thicknessMap,Fe=!!v.gradientMap,re=!!v.alphaMap,B=v.alphaTest>0,ie=!!v.alphaHash,se=!!v.extensions,we=!!D.attributes.uv1,ve=!!D.attributes.uv2,We=!!D.attributes.uv3,Xe=Bn;return v.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Xe=i.toneMapping),{isWebGL2:A,shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:z,fragmentShader:J,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Re,instancing:Ie,instancingColor:Ie&&ae.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:pn,map:Se,matcap:He,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:Y,aoMap:lt,lightMap:Ee,bumpMap:Ce,normalMap:fe,displacementMap:f&&Je,emissiveMap:Ue,normalMapObjectSpace:fe&&v.normalMapType===$A,normalMapTangentSpace:fe&&v.normalMapType===ZA,metalnessMap:E,roughnessMap:x,anisotropy:N,anisotropyMap:le,clearcoat:te,clearcoatMap:de,clearcoatNormalMap:be,clearcoatRoughnessMap:De,iridescence:Z,iridescenceMap:K,iridescenceThicknessMap:Ve,sheen:ee,sheenColorMap:T,sheenRoughnessMap:q,specularMap:oe,specularColorMap:ne,specularIntensityMap:_e,transmission:pe,transmissionMap:ke,thicknessMap:Ge,gradientMap:Fe,opaque:v.transparent===!1&&v.blending===bi,alphaMap:re,alphaTest:B,alphaHash:ie,combine:v.combine,mapUv:Se&&g(v.map.channel),aoMapUv:lt&&g(v.aoMap.channel),lightMapUv:Ee&&g(v.lightMap.channel),bumpMapUv:Ce&&g(v.bumpMap.channel),normalMapUv:fe&&g(v.normalMap.channel),displacementMapUv:Je&&g(v.displacementMap.channel),emissiveMapUv:Ue&&g(v.emissiveMap.channel),metalnessMapUv:E&&g(v.metalnessMap.channel),roughnessMapUv:x&&g(v.roughnessMap.channel),anisotropyMapUv:le&&g(v.anisotropyMap.channel),clearcoatMapUv:de&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:T&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:q&&g(v.sheenRoughnessMap.channel),specularMapUv:oe&&g(v.specularMap.channel),specularColorMapUv:ne&&g(v.specularColorMap.channel),specularIntensityMapUv:_e&&g(v.specularIntensityMap.channel),transmissionMapUv:ke&&g(v.transmissionMap.channel),thicknessMapUv:Ge&&g(v.thicknessMap.channel),alphaMapUv:re&&g(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(fe||N),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:ve,vertexUv3s:We,pointsUvs:ae.isPoints===!0&&!!D.attributes.uv&&(Se||re),fog:!!U,useFog:v.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ae.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Se&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===Ke,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===dn,flipSided:v.side===Pt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:se&&v.extensions.derivatives===!0,extensionFragDepth:se&&v.extensions.fragDepth===!0,extensionDrawBuffers:se&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:A||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:A||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:A||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function h(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)w.push(O),w.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(M(w,v),_(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function M(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function _(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function S(v){let w=m[v.type],O;if(w){let W=nn[w];O=Qi.clone(W.uniforms)}else O=v.uniforms;return O}function I(v,w){let O;for(let W=0,ae=l.length;W<ae;W++){let U=l[W];if(U.cacheKey===w){O=U,++O.usedTimes;break}}return O===void 0&&(O=new Wp(i,w,v,r),l.push(O)),O}function C(v){if(--v.usedTimes===0){let w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function b(v){c.remove(v)}function H(){c.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:S,acquireProgram:I,releaseProgram:C,releaseShaderCache:b,programs:l,dispose:H}}function jp(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Jp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Kc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,m,g,d){let h=i[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:m,renderOrder:u.renderOrder,z:g,group:d},i[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=m,h.renderOrder=u.renderOrder,h.z=g,h.group=d),e++,h}function o(u,f,p,m,g,d){let h=a(u,f,p,m,g,d);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function c(u,f,p,m,g,d){let h=a(u,f,p,m,g,d);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function l(u,f){t.length>1&&t.sort(u||Jp),n.length>1&&n.sort(f||Kc),s.length>1&&s.sort(f||Kc)}function A(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:A,sort:l}}function Kp(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Zc,i.set(n,[a])):s>=r.length?(a=new Zc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new xe};break;case"SpotLight":t={position:new R,direction:new R,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function $p(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var em=0;function tm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nm(i,e){let t=new Zp,n=$p(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let A=0;A<9;A++)s.probe.push(new R);let r=new R,a=new rt,o=new rt;function c(A,u){let f=0,p=0,m=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let g=0,d=0,h=0,M=0,_=0,S=0,I=0,C=0,b=0,H=0,v=0;A.sort(tm);let w=u===!0?Math.PI:1;for(let W=0,ae=A.length;W<ae;W++){let U=A[W],D=U.color,V=U.intensity,X=U.distance,Y=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=D.r*V*w,p+=D.g*V*w,m+=D.b*V*w;else if(U.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(U.sh.coefficients[G],V);v++}else if(U.isDirectionalLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){let j=U.shadow,$=n.get(U);$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,s.directionalShadow[g]=$,s.directionalShadowMap[g]=Y,s.directionalShadowMatrix[g]=U.shadow.matrix,S++}s.directional[g]=G,g++}else if(U.isSpotLight){let G=t.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(D).multiplyScalar(V*w),G.distance=X,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,s.spot[h]=G;let j=U.shadow;if(U.map&&(s.spotLightMap[b]=U.map,b++,j.updateMatrices(U),U.castShadow&&H++),s.spotLightMatrix[h]=j.matrix,U.castShadow){let $=n.get(U);$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,s.spotShadow[h]=$,s.spotShadowMap[h]=Y,C++}h++}else if(U.isRectAreaLight){let G=t.get(U);G.color.copy(D).multiplyScalar(V),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),s.rectArea[M]=G,M++}else if(U.isPointLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*w),G.distance=U.distance,G.decay=U.decay,U.castShadow){let j=U.shadow,$=n.get(U);$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,$.shadowCameraNear=j.camera.near,$.shadowCameraFar=j.camera.far,s.pointShadow[d]=$,s.pointShadowMap[d]=Y,s.pointShadowMatrix[d]=U.shadow.matrix,I++}s.point[d]=G,d++}else if(U.isHemisphereLight){let G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(V*w),G.groundColor.copy(U.groundColor).multiplyScalar(V*w),s.hemi[_]=G,_++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=m;let O=s.hash;(O.directionalLength!==g||O.pointLength!==d||O.spotLength!==h||O.rectAreaLength!==M||O.hemiLength!==_||O.numDirectionalShadows!==S||O.numPointShadows!==I||O.numSpotShadows!==C||O.numSpotMaps!==b||O.numLightProbes!==v)&&(s.directional.length=g,s.spot.length=h,s.rectArea.length=M,s.point.length=d,s.hemi.length=_,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=C+b-H,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=v,O.directionalLength=g,O.pointLength=d,O.spotLength=h,O.rectAreaLength=M,O.hemiLength=_,O.numDirectionalShadows=S,O.numPointShadows=I,O.numSpotShadows=C,O.numSpotMaps=b,O.numLightProbes=v,s.version=em++)}function l(A,u){let f=0,p=0,m=0,g=0,d=0,h=u.matrixWorldInverse;for(let M=0,_=A.length;M<_;M++){let S=A[M];if(S.isDirectionalLight){let I=s.directional[f];I.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(h),f++}else if(S.isSpotLight){let I=s.spot[m];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(h),I.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(h),m++}else if(S.isRectAreaLight){let I=s.rectArea[g];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(h),o.identity(),a.copy(S.matrixWorld),a.premultiply(h),o.extractRotation(a),I.halfWidth.set(S.width*.5,0,0),I.halfHeight.set(0,S.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let I=s.point[p];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){let I=s.hemi[d];I.direction.setFromMatrixPosition(S.matrixWorld),I.direction.transformDirection(h),d++}}}return{setup:c,setupView:l,state:s}}function $c(i,e){let t=new nm(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function im(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new $c(i,e),t.set(r,[c])):a>=o.length?(c=new $c(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Fo=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function om(i,e,t){let n=new mr,s=new me,r=new me,a=new pt,o=new Fo({depthPacking:KA}),c=new Oo,l={},A=t.maxTextureSize,u={[Rn]:Pt,[Pt]:Rn,[dn]:dn},f=new ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:sm,fragmentShader:rm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Qt;m.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new yt(m,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let h=this.type;this.render=function(C,b,H){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;let v=i.getRenderTarget(),w=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),W=i.state;W.setBlending(sn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let ae=h!==un&&this.type===un,U=h===un&&this.type!==un;for(let D=0,V=C.length;D<V;D++){let X=C[D],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let G=Y.getFrameExtents();if(s.multiply(G),r.copy(Y.mapSize),(s.x>A||s.y>A)&&(s.x>A&&(r.x=Math.floor(A/G.x),s.x=r.x*G.x,Y.mapSize.x=r.x),s.y>A&&(r.y=Math.floor(A/G.y),s.y=r.y*G.y,Y.mapSize.y=r.y)),Y.map===null||ae===!0||U===!0){let $=this.type!==un?{minFilter:nt,magFilter:nt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new mt(s.x,s.y,$),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let j=Y.getViewportCount();for(let $=0;$<j;$++){let Ae=Y.getViewport($);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),W.viewport(a),Y.updateMatrices(X,$),n=Y.getFrustum(),S(b,H,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===un&&M(Y,H),Y.needsUpdate=!1}h=this.type,d.needsUpdate=!1,i.setRenderTarget(v,w,O)};function M(C,b){let H=e.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new mt(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,H,f,g,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,H,p,g,null)}function _(C,b,H,v){let w=null,O=H.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)w=O;else if(w=H.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let W=w.uuid,ae=b.uuid,U=l[W];U===void 0&&(U={},l[W]=U);let D=U[ae];D===void 0&&(D=w.clone(),U[ae]=D,b.addEventListener("dispose",I)),w=D}if(w.visible=b.visible,w.wireframe=b.wireframe,v===un?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:u[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,H.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let W=i.properties.get(w);W.light=H}return w}function S(C,b,H,v,w){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===un)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld);let ae=e.update(C),U=C.material;if(Array.isArray(U)){let D=ae.groups;for(let V=0,X=D.length;V<X;V++){let Y=D[V],G=U[Y.materialIndex];if(G&&G.visible){let j=_(C,G,v,w);C.onBeforeShadow(i,C,b,H,ae,j,Y),i.renderBufferDirect(H,null,ae,j,C,Y),C.onAfterShadow(i,C,b,H,ae,j,Y)}}}else if(U.visible){let D=_(C,U,v,w);C.onBeforeShadow(i,C,b,H,ae,D,null),i.renderBufferDirect(H,null,ae,D,C,null),C.onAfterShadow(i,C,b,H,ae,D,null)}}let W=C.children;for(let ae=0,U=W.length;ae<U;ae++)S(W[ae],b,H,v,w)}function I(C){C.target.removeEventListener("dispose",I);for(let H in l){let v=l[H],w=C.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function am(i,e,t){let n=t.isWebGL2;function s(){let B=!1,ie=new pt,se=null,we=new pt(0,0,0,0);return{setMask:function(ve){se!==ve&&!B&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){B=ve},setClear:function(ve,We,Xe,At,wt){wt===!0&&(ve*=At,We*=At,Xe*=At),ie.set(ve,We,Xe,At),we.equals(ie)===!1&&(i.clearColor(ve,We,Xe,At),we.copy(ie))},reset:function(){B=!1,se=null,we.set(-1,0,0,0)}}}function r(){let B=!1,ie=null,se=null,we=null;return{setTest:function(ve){ve?Re(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(ve){ie!==ve&&!B&&(i.depthMask(ve),ie=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case bA:i.depthFunc(i.NEVER);break;case TA:i.depthFunc(i.ALWAYS);break;case CA:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case BA:i.depthFunc(i.EQUAL);break;case IA:i.depthFunc(i.GEQUAL);break;case RA:i.depthFunc(i.GREATER);break;case UA:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){B=ve},setClear:function(ve){we!==ve&&(i.clearDepth(ve),we=ve)},reset:function(){B=!1,ie=null,se=null,we=null}}}function a(){let B=!1,ie=null,se=null,we=null,ve=null,We=null,Xe=null,At=null,wt=null;return{setTest:function(je){B||(je?Re(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(je){ie!==je&&!B&&(i.stencilMask(je),ie=je)},setFunc:function(je,St,tn){(se!==je||we!==St||ve!==tn)&&(i.stencilFunc(je,St,tn),se=je,we=St,ve=tn)},setOp:function(je,St,tn){(We!==je||Xe!==St||At!==tn)&&(i.stencilOp(je,St,tn),We=je,Xe=St,At=tn)},setLocked:function(je){B=je},setClear:function(je){wt!==je&&(i.clearStencil(je),wt=je)},reset:function(){B=!1,ie=null,se=null,we=null,ve=null,We=null,Xe=null,At=null,wt=null}}}let o=new s,c=new r,l=new a,A=new WeakMap,u=new WeakMap,f={},p={},m=new WeakMap,g=[],d=null,h=!1,M=null,_=null,S=null,I=null,C=null,b=null,H=null,v=new xe(0,0,0),w=0,O=!1,W=null,ae=null,U=null,D=null,V=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,G=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=G>=2);let $=null,Ae={},z=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),he=new pt().fromArray(z),Me=new pt().fromArray(J);function ge(B,ie,se,we){let ve=new Uint8Array(4),We=i.createTexture();i.bindTexture(B,We),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<se;Xe++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(ie,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ie+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return We}let Ie={};Ie[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ie[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Re(i.DEPTH_TEST),c.setFunc($s),Ue(!1),E(Pa),Re(i.CULL_FACE),fe(sn);function Re(B){f[B]!==!0&&(i.enable(B),f[B]=!0)}function Se(B){f[B]!==!1&&(i.disable(B),f[B]=!1)}function He(B,ie){return p[B]!==ie?(i.bindFramebuffer(B,ie),p[B]=ie,n&&(B===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ie),B===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ie)),!0):!1}function L(B,ie){let se=g,we=!1;if(B)if(se=m.get(ie),se===void 0&&(se=[],m.set(ie,se)),B.isWebGLMultipleRenderTargets){let ve=B.texture;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let We=0,Xe=ve.length;We<Xe;We++)se[We]=i.COLOR_ATTACHMENT0+We;se.length=ve.length,we=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,we=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,we=!0);we&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function lt(B){return d!==B?(i.useProgram(B),d=B,!0):!1}let Ee={[Vn]:i.FUNC_ADD,[hA]:i.FUNC_SUBTRACT,[uA]:i.FUNC_REVERSE_SUBTRACT};if(n)Ee[Na]=i.MIN,Ee[Fa]=i.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(Ee[Na]=B.MIN_EXT,Ee[Fa]=B.MAX_EXT)}let Ce={[dA]:i.ZERO,[fA]:i.ONE,[pA]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[vA]:i.SRC_ALPHA_SATURATE,[xA]:i.DST_COLOR,[gA]:i.DST_ALPHA,[mA]:i.ONE_MINUS_SRC_COLOR,[Mo]:i.ONE_MINUS_SRC_ALPHA,[MA]:i.ONE_MINUS_DST_COLOR,[_A]:i.ONE_MINUS_DST_ALPHA,[yA]:i.CONSTANT_COLOR,[EA]:i.ONE_MINUS_CONSTANT_COLOR,[wA]:i.CONSTANT_ALPHA,[SA]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(B,ie,se,we,ve,We,Xe,At,wt,je){if(B===sn){h===!0&&(Se(i.BLEND),h=!1);return}if(h===!1&&(Re(i.BLEND),h=!0),B!==AA){if(B!==M||je!==O){if((_!==Vn||C!==Vn)&&(i.blendEquation(i.FUNC_ADD),_=Vn,C=Vn),je)switch(B){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.ONE,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case La:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case La:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,I=null,b=null,H=null,v.set(0,0,0),w=0,M=B,O=je}return}ve=ve||ie,We=We||se,Xe=Xe||we,(ie!==_||ve!==C)&&(i.blendEquationSeparate(Ee[ie],Ee[ve]),_=ie,C=ve),(se!==S||we!==I||We!==b||Xe!==H)&&(i.blendFuncSeparate(Ce[se],Ce[we],Ce[We],Ce[Xe]),S=se,I=we,b=We,H=Xe),(At.equals(v)===!1||wt!==w)&&(i.blendColor(At.r,At.g,At.b,wt),v.copy(At),w=wt),M=B,O=!1}function Je(B,ie){B.side===dn?Se(i.CULL_FACE):Re(i.CULL_FACE);let se=B.side===Pt;ie&&(se=!se),Ue(se),B.blending===bi&&B.transparent===!1?fe(sn):fe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);let we=B.stencilWrite;l.setTest(we),we&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),N(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(B){W!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),W=B)}function E(B){B!==aA?(Re(i.CULL_FACE),B!==ae&&(B===Pa?i.cullFace(i.BACK):B===cA?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),ae=B}function x(B){B!==U&&(Y&&i.lineWidth(B),U=B)}function N(B,ie,se){B?(Re(i.POLYGON_OFFSET_FILL),(D!==ie||V!==se)&&(i.polygonOffset(ie,se),D=ie,V=se)):Se(i.POLYGON_OFFSET_FILL)}function te(B){B?Re(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Z(B){B===void 0&&(B=i.TEXTURE0+X-1),$!==B&&(i.activeTexture(B),$=B)}function ee(B,ie,se){se===void 0&&($===null?se=i.TEXTURE0+X-1:se=$);let we=Ae[se];we===void 0&&(we={type:void 0,texture:void 0},Ae[se]=we),(we.type!==B||we.texture!==ie)&&($!==se&&(i.activeTexture(se),$=se),i.bindTexture(B,ie||Ie[B]),we.type=B,we.texture=ie)}function pe(){let B=Ae[$];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function T(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(B){he.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),he.copy(B))}function ke(B){Me.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Me.copy(B))}function Ge(B,ie){let se=u.get(ie);se===void 0&&(se=new WeakMap,u.set(ie,se));let we=se.get(B);we===void 0&&(we=i.getUniformBlockIndex(ie,B.name),se.set(B,we))}function Fe(B,ie){let we=u.get(ie).get(B);A.get(ie)!==we&&(i.uniformBlockBinding(ie,we,B.__bindingPointIndex),A.set(ie,we))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},$=null,Ae={},p={},m=new WeakMap,g=[],d=null,h=!1,M=null,_=null,S=null,I=null,C=null,b=null,H=null,v=new xe(0,0,0),w=0,O=!1,W=null,ae=null,U=null,D=null,V=null,he.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Re,disable:Se,bindFramebuffer:He,drawBuffers:L,useProgram:lt,setBlending:fe,setMaterial:Je,setFlipSided:Ue,setCullFace:E,setLineWidth:x,setPolygonOffset:N,setScissorTest:te,activeTexture:Z,bindTexture:ee,unbindTexture:pe,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:oe,texImage3D:ne,updateUBOMapping:Ge,uniformBlockBinding:Fe,texStorage2D:T,texStorage3D:q,texSubImage2D:be,texSubImage3D:De,compressedTexSubImage2D:K,compressedTexSubImage3D:Ve,scissor:_e,viewport:ke,reset:re}}function cm(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,x){return p?new OffscreenCanvas(E,x):ar("canvas")}function g(E,x,N,te){let Z=1;if((E.width>te||E.height>te)&&(Z=te/Math.max(E.width,E.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ee=x?or:Math.floor,pe=ee(Z*E.width),le=ee(Z*E.height);u===void 0&&(u=m(pe,le));let de=N?m(pe,le):u;return de.width=pe,de.height=le,de.getContext("2d").drawImage(E,0,0,pe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+pe+"x"+le+")."),de}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function d(E){return bo(E.width)&&bo(E.height)}function h(E){return o?!1:E.wrapS!==Ut||E.wrapT!==Ut||E.minFilter!==nt&&E.minFilter!==Vt}function M(E,x){return E.generateMipmaps&&x&&E.minFilter!==nt&&E.minFilter!==Vt}function _(E){i.generateMipmap(E)}function S(E,x,N,te,Z=!1){if(o===!1)return x;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=x;if(x===i.RED&&(N===i.FLOAT&&(ee=i.R32F),N===i.HALF_FLOAT&&(ee=i.R16F),N===i.UNSIGNED_BYTE&&(ee=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.R8UI),N===i.UNSIGNED_SHORT&&(ee=i.R16UI),N===i.UNSIGNED_INT&&(ee=i.R32UI),N===i.BYTE&&(ee=i.R8I),N===i.SHORT&&(ee=i.R16I),N===i.INT&&(ee=i.R32I)),x===i.RG&&(N===i.FLOAT&&(ee=i.RG32F),N===i.HALF_FLOAT&&(ee=i.RG16F),N===i.UNSIGNED_BYTE&&(ee=i.RG8)),x===i.RGBA){let pe=Z?nr:qe.getTransfer(te);N===i.FLOAT&&(ee=i.RGBA32F),N===i.HALF_FLOAT&&(ee=i.RGBA16F),N===i.UNSIGNED_BYTE&&(ee=pe===Ke?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function I(E,x,N){return M(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==nt&&E.minFilter!==Vt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){return E===nt||E===Oa||E===Vr?i.NEAREST:i.LINEAR}function b(E){let x=E.target;x.removeEventListener("dispose",b),v(x),x.isVideoTexture&&A.delete(x)}function H(E){let x=E.target;x.removeEventListener("dispose",H),O(x)}function v(E){let x=n.get(E);if(x.__webglInit===void 0)return;let N=E.source,te=f.get(N);if(te){let Z=te[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(E),Object.keys(te).length===0&&f.delete(N)}n.remove(E)}function w(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let N=E.source,te=f.get(N);delete te[x.__cacheKey],a.memory.textures--}function O(E){let x=E.texture,N=n.get(E),te=n.get(x);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(N.__webglFramebuffer[Z]))for(let ee=0;ee<N.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(N.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(N.__webglFramebuffer[Z]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[Z])}else{if(Array.isArray(N.__webglFramebuffer))for(let Z=0;Z<N.__webglFramebuffer.length;Z++)i.deleteFramebuffer(N.__webglFramebuffer[Z]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Z=0;Z<N.__webglColorRenderbuffer.length;Z++)N.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[Z]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Z=0,ee=x.length;Z<ee;Z++){let pe=n.get(x[Z]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(x[Z])}n.remove(x),n.remove(E)}let W=0;function ae(){W=0}function U(){let E=W;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),W+=1,E}function D(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function V(E,x){let N=n.get(E);if(E.isVideoTexture&&Je(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){let te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(N,E,x);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function X(E,x){let N=n.get(E);if(E.version>0&&N.__version!==E.version){he(N,E,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function Y(E,x){let N=n.get(E);if(E.version>0&&N.__version!==E.version){he(N,E,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function G(E,x){let N=n.get(E);if(E.version>0&&N.__version!==E.version){Me(N,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let j={[Eo]:i.REPEAT,[Ut]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},$={[nt]:i.NEAREST,[Oa]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[zA]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},Ae={[eh]:i.NEVER,[oh]:i.ALWAYS,[th]:i.LESS,[ml]:i.LEQUAL,[nh]:i.EQUAL,[rh]:i.GEQUAL,[ih]:i.GREATER,[sh]:i.NOTEQUAL};function z(E,x,N){if(N?(i.texParameteri(E,i.TEXTURE_WRAP_S,j[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,j[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,j[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,$[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,$[x.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Ut||x.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,C(x.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,C(x.minFilter)),x.minFilter!==nt&&x.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ae[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let te=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===nt||x.minFilter!==Vr&&x.minFilter!==cs||x.type===kt&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Kt&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function J(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",b));let te=x.source,Z=f.get(te);Z===void 0&&(Z={},f.set(te,Z));let ee=D(x);if(ee!==E.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[ee].usedTimes++;let pe=Z[E.__cacheKey];pe!==void 0&&(Z[E.__cacheKey].usedTimes--,pe.usedTimes===0&&w(x)),E.__cacheKey=ee,E.__webglTexture=Z[ee].texture}return N}function he(E,x,N){let te=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=i.TEXTURE_3D);let Z=J(E,x),ee=x.source;t.bindTexture(te,E.__webglTexture,i.TEXTURE0+N);let pe=n.get(ee);if(ee.version!==pe.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);let le=qe.getPrimaries(qe.workingColorSpace),de=x.colorSpace===Gt?null:qe.getPrimaries(x.colorSpace),be=x.colorSpace===Gt||le===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let De=h(x)&&d(x.image)===!1,K=g(x.image,De,!1,s.maxTextureSize);K=Ue(x,K);let Ve=d(K)||o,T=r.convert(x.format,x.colorSpace),q=r.convert(x.type),oe=S(x.internalFormat,T,q,x.colorSpace,x.isVideoTexture);z(te,x,Ve);let ne,_e=x.mipmaps,ke=o&&x.isVideoTexture!==!0&&oe!==fl,Ge=pe.__version===void 0||Z===!0,Fe=I(x,K,Ve);if(x.isDepthTexture)oe=i.DEPTH_COMPONENT,o?x.type===kt?oe=i.DEPTH_COMPONENT32F:x.type===Cn?oe=i.DEPTH_COMPONENT24:x.type===Yn?oe=i.DEPTH24_STENCIL8:oe=i.DEPTH_COMPONENT16:x.type===kt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Wn&&oe===i.DEPTH_COMPONENT&&x.type!==ta&&x.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Cn,q=r.convert(x.type)),x.format===Ri&&oe===i.DEPTH_COMPONENT&&(oe=i.DEPTH_STENCIL,x.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Yn,q=r.convert(x.type))),Ge&&(ke?t.texStorage2D(i.TEXTURE_2D,1,oe,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,oe,K.width,K.height,0,T,q,null));else if(x.isDataTexture)if(_e.length>0&&Ve){ke&&Ge&&t.texStorage2D(i.TEXTURE_2D,Fe,oe,_e[0].width,_e[0].height);for(let re=0,B=_e.length;re<B;re++)ne=_e[re],ke?t.texSubImage2D(i.TEXTURE_2D,re,0,0,ne.width,ne.height,T,q,ne.data):t.texImage2D(i.TEXTURE_2D,re,oe,ne.width,ne.height,0,T,q,ne.data);x.generateMipmaps=!1}else ke?(Ge&&t.texStorage2D(i.TEXTURE_2D,Fe,oe,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,T,q,K.data)):t.texImage2D(i.TEXTURE_2D,0,oe,K.width,K.height,0,T,q,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ke&&Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,oe,_e[0].width,_e[0].height,K.depth);for(let re=0,B=_e.length;re<B;re++)ne=_e[re],x.format!==vt?T!==null?ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,K.depth,T,ne.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,oe,ne.width,ne.height,K.depth,0,ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,K.depth,T,q,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,oe,ne.width,ne.height,K.depth,0,T,q,ne.data)}else{ke&&Ge&&t.texStorage2D(i.TEXTURE_2D,Fe,oe,_e[0].width,_e[0].height);for(let re=0,B=_e.length;re<B;re++)ne=_e[re],x.format!==vt?T!==null?ke?t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ne.width,ne.height,T,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,re,oe,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(i.TEXTURE_2D,re,0,0,ne.width,ne.height,T,q,ne.data):t.texImage2D(i.TEXTURE_2D,re,oe,ne.width,ne.height,0,T,q,ne.data)}else if(x.isDataArrayTexture)ke?(Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,oe,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,T,q,K.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,K.width,K.height,K.depth,0,T,q,K.data);else if(x.isData3DTexture)ke?(Ge&&t.texStorage3D(i.TEXTURE_3D,Fe,oe,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,T,q,K.data)):t.texImage3D(i.TEXTURE_3D,0,oe,K.width,K.height,K.depth,0,T,q,K.data);else if(x.isFramebufferTexture){if(Ge)if(ke)t.texStorage2D(i.TEXTURE_2D,Fe,oe,K.width,K.height);else{let re=K.width,B=K.height;for(let ie=0;ie<Fe;ie++)t.texImage2D(i.TEXTURE_2D,ie,oe,re,B,0,T,q,null),re>>=1,B>>=1}}else if(_e.length>0&&Ve){ke&&Ge&&t.texStorage2D(i.TEXTURE_2D,Fe,oe,_e[0].width,_e[0].height);for(let re=0,B=_e.length;re<B;re++)ne=_e[re],ke?t.texSubImage2D(i.TEXTURE_2D,re,0,0,T,q,ne):t.texImage2D(i.TEXTURE_2D,re,oe,T,q,ne);x.generateMipmaps=!1}else ke?(Ge&&t.texStorage2D(i.TEXTURE_2D,Fe,oe,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,T,q,K)):t.texImage2D(i.TEXTURE_2D,0,oe,T,q,K);M(x,Ve)&&_(te),pe.__version=ee.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Me(E,x,N){if(x.image.length!==6)return;let te=J(E,x),Z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);let ee=n.get(Z);if(Z.version!==ee.__version||te===!0){t.activeTexture(i.TEXTURE0+N);let pe=qe.getPrimaries(qe.workingColorSpace),le=x.colorSpace===Gt?null:qe.getPrimaries(x.colorSpace),de=x.colorSpace===Gt||pe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let be=x.isCompressedTexture||x.image[0].isCompressedTexture,De=x.image[0]&&x.image[0].isDataTexture,K=[];for(let re=0;re<6;re++)!be&&!De?K[re]=g(x.image[re],!1,!0,s.maxCubemapSize):K[re]=De?x.image[re].image:x.image[re],K[re]=Ue(x,K[re]);let Ve=K[0],T=d(Ve)||o,q=r.convert(x.format,x.colorSpace),oe=r.convert(x.type),ne=S(x.internalFormat,q,oe,x.colorSpace),_e=o&&x.isVideoTexture!==!0,ke=ee.__version===void 0||te===!0,Ge=I(x,Ve,T);z(i.TEXTURE_CUBE_MAP,x,T);let Fe;if(be){_e&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ne,Ve.width,Ve.height);for(let re=0;re<6;re++){Fe=K[re].mipmaps;for(let B=0;B<Fe.length;B++){let ie=Fe[B];x.format!==vt?q!==null?_e?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,B,0,0,ie.width,ie.height,q,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,B,ne,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,B,0,0,ie.width,ie.height,q,oe,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,B,ne,ie.width,ie.height,0,q,oe,ie.data)}}}else{Fe=x.mipmaps,_e&&ke&&(Fe.length>0&&Ge++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ne,K[0].width,K[0].height));for(let re=0;re<6;re++)if(De){_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,K[re].width,K[re].height,q,oe,K[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ne,K[re].width,K[re].height,0,q,oe,K[re].data);for(let B=0;B<Fe.length;B++){let se=Fe[B].image[re].image;_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,B+1,0,0,se.width,se.height,q,oe,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,B+1,ne,se.width,se.height,0,q,oe,se.data)}}else{_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,q,oe,K[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ne,q,oe,K[re]);for(let B=0;B<Fe.length;B++){let ie=Fe[B];_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,B+1,0,0,q,oe,ie.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,B+1,ne,q,oe,ie.image[re])}}}M(x,T)&&_(i.TEXTURE_CUBE_MAP),ee.__version=Z.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ge(E,x,N,te,Z,ee){let pe=r.convert(N.format,N.colorSpace),le=r.convert(N.type),de=S(N.internalFormat,pe,le,N.colorSpace);if(!n.get(x).__hasExternalTextures){let De=Math.max(1,x.width>>ee),K=Math.max(1,x.height>>ee);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,de,De,K,x.depth,0,pe,le,null):t.texImage2D(Z,ee,de,De,K,0,pe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),fe(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,n.get(N).__webglTexture,0,Ce(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,n.get(N).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(E,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let te=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||fe(x)){let Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===kt?te=i.DEPTH_COMPONENT32F:Z.type===Cn&&(te=i.DEPTH_COMPONENT24));let ee=Ce(x);fe(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,te,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,te,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){let te=Ce(x);N&&fe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,x.width,x.height):fe(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let te=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<te.length;Z++){let ee=te[Z],pe=r.convert(ee.format,ee.colorSpace),le=r.convert(ee.type),de=S(ee.internalFormat,pe,le,ee.colorSpace),be=Ce(x);N&&fe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,de,x.width,x.height):fe(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);let te=n.get(x.depthTexture).__webglTexture,Z=Ce(x);if(x.depthTexture.format===Wn)fe(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(x.depthTexture.format===Ri)fe(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Se(E){let x=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Re(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=i.createRenderbuffer(),Ie(x.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ie(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(E,x,N){let te=n.get(E);x!==void 0&&ge(te.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Se(E)}function L(E){let x=E.texture,N=n.get(E),te=n.get(x);E.addEventListener("dispose",H),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=x.version,a.memory.textures++);let Z=E.isWebGLCubeRenderTarget===!0,ee=E.isWebGLMultipleRenderTargets===!0,pe=d(E)||o;if(Z){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let de=0;de<x.mipmaps.length;de++)N.__webglFramebuffer[le][de]=i.createFramebuffer()}else N.__webglFramebuffer[le]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)N.__webglFramebuffer[le]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ee)if(s.drawBuffers){let le=E.texture;for(let de=0,be=le.length;de<be;de++){let De=n.get(le[de]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&fe(E)===!1){let le=ee?x:[x];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){let be=le[de];N.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[de]);let De=r.convert(be.format,be.colorSpace),K=r.convert(be.type),Ve=S(be.internalFormat,De,K,be.colorSpace,E.isXRRenderTarget===!0),T=Ce(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,T,Ve,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,N.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),z(i.TEXTURE_CUBE_MAP,x,pe);for(let le=0;le<6;le++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ge(N.__webglFramebuffer[le][de],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else ge(N.__webglFramebuffer[le],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);M(x,pe)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let le=E.texture;for(let de=0,be=le.length;de<be;de++){let De=le[de],K=n.get(De);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),z(i.TEXTURE_2D,De,pe),ge(N.__webglFramebuffer,E,De,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),M(De,pe)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?le=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,te.__webglTexture),z(le,x,pe),o&&x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ge(N.__webglFramebuffer[de],E,x,i.COLOR_ATTACHMENT0,le,de);else ge(N.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,le,0);M(x,pe)&&_(le),t.unbindTexture()}E.depthBuffer&&Se(E)}function lt(E){let x=d(E)||o,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,Z=N.length;te<Z;te++){let ee=N[te];if(M(ee,x)){let pe=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(ee).__webglTexture;t.bindTexture(pe,le),_(pe),t.unbindTexture()}}}function Ee(E){if(o&&E.samples>0&&fe(E)===!1){let x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,te=E.height,Z=i.COLOR_BUFFER_BIT,ee=[],pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(E),de=E.isWebGLMultipleRenderTargets===!0;if(de)for(let be=0;be<x.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let be=0;be<x.length;be++){ee.push(i.COLOR_ATTACHMENT0+be),E.depthBuffer&&ee.push(pe);let De=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(De===!1&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[be]),De===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),de){let K=n.get(x[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,N,te,0,0,N,te,Z,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<x.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,le.__webglColorRenderbuffer[be]);let De=n.get(x[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ce(E){return Math.min(s.maxSamples,E.samples)}function fe(E){let x=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Je(E){let x=a.render.frame;A.get(E)!==x&&(A.set(E,x),E.update())}function Ue(E,x){let N=E.colorSpace,te=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===So||N!==pn&&N!==Gt&&(qe.getTransfer(N)===Ke?o===!1?e.has("EXT_sRGB")===!0&&te===vt?(E.format=So,E.minFilter=Vt,E.generateMipmaps=!1):x=cr.sRGBToLinear(x):(te!==vt||Z!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=U,this.resetTextureUnits=ae,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=He,this.setupRenderTarget=L,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=fe}function lm(i,e,t){let n=t.isWebGL2;function s(r,a=Gt){let o,c=qe.getTransfer(a);if(r===In)return i.UNSIGNED_BYTE;if(r===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(r===HA)return i.BYTE;if(r===VA)return i.SHORT;if(r===ta)return i.UNSIGNED_SHORT;if(r===cl)return i.INT;if(r===Cn)return i.UNSIGNED_INT;if(r===kt)return i.FLOAT;if(r===Kt)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===GA)return i.ALPHA;if(r===vt)return i.RGBA;if(r===YA)return i.LUMINANCE;if(r===WA)return i.LUMINANCE_ALPHA;if(r===Wn)return i.DEPTH_COMPONENT;if(r===Ri)return i.DEPTH_STENCIL;if(r===So)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===XA)return i.RED;if(r===hl)return i.RED_INTEGER;if(r===qA)return i.RG;if(r===ul)return i.RG_INTEGER;if(r===dl)return i.RGBA_INTEGER;if(r===Gr||r===Yr||r===Wr||r===Xr)if(c===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Gr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Gr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ka||r===Qa||r===za||r===Ha)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ka)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===za)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ha)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Va||r===Ga)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Va)return c===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ga)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ya||r===Wa||r===Xa||r===qa||r===ja||r===Ja||r===Ka||r===Za||r===$a||r===ec||r===tc||r===nc||r===ic||r===sc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ya)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wa)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xa)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qa)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ja)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ja)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ka)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Za)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$a)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ec)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tc)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nc)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ic)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sc)return c===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qr||r===rc||r===oc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===qr)return c===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jA||r===ac||r===cc||r===lc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===qr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ac)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ko=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Si=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Am={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let d=t.getJointPose(g,n),h=this._getHandJoint(l,g);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}let A=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=A.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Qo=class extends rn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,A=null,u=null,f=null,p=null,m=null,g=t.getContextAttributes(),d=null,h=null,M=[],_=[],S=new me,I=null,C=new Ct;C.layers.enable(1),C.viewport=new pt;let b=new Ct;b.layers.enable(2),b.viewport=new pt;let H=[C,b],v=new ko;v.layers.enable(1),v.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=M[z];return J===void 0&&(J=new as,M[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=M[z];return J===void 0&&(J=new as,M[z]=J),J.getGripSpace()},this.getHand=function(z){let J=M[z];return J===void 0&&(J=new as,M[z]=J),J.getHandSpace()};function W(z){let J=_.indexOf(z.inputSource);if(J===-1)return;let he=M[J];he!==void 0&&(he.update(z.inputSource,z.frame,l||a),he.dispatchEvent({type:z.type,data:z.inputSource}))}function ae(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",U);for(let z=0;z<M.length;z++){let J=_[z];J!==null&&(_[z]=null,M[z].disconnect(J))}w=null,O=null,e.setRenderTarget(d),p=null,f=null,u=null,s=null,h=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new mt(p.framebufferWidth,p.framebufferHeight,{format:vt,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,he=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?Ri:Wn,he=g.stencil?Yn:Cn);let ge={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new mt(f.textureWidth,f.textureHeight,{format:vt,type:In,depthTexture:new _r(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let Ie=e.properties.get(h);Ie.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(z){for(let J=0;J<z.removed.length;J++){let he=z.removed[J],Me=_.indexOf(he);Me>=0&&(_[Me]=null,M[Me].disconnect(he))}for(let J=0;J<z.added.length;J++){let he=z.added[J],Me=_.indexOf(he);if(Me===-1){for(let Ie=0;Ie<M.length;Ie++)if(Ie>=_.length){_.push(he),Me=Ie;break}else if(_[Ie]===null){_[Ie]=he,Me=Ie;break}if(Me===-1)break}let ge=M[Me];ge&&ge.connect(he)}}let D=new R,V=new R;function X(z,J,he){D.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(he.matrixWorld);let Me=D.distanceTo(V),ge=J.projectionMatrix.elements,Ie=he.projectionMatrix.elements,Re=ge[14]/(ge[10]-1),Se=ge[14]/(ge[10]+1),He=(ge[9]+1)/ge[5],L=(ge[9]-1)/ge[5],lt=(ge[8]-1)/ge[0],Ee=(Ie[8]+1)/Ie[0],Ce=Re*lt,fe=Re*Ee,Je=Me/(-lt+Ee),Ue=Je*-lt;J.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ue),z.translateZ(Je),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let E=Re+Je,x=Se+Je,N=Ce-Ue,te=fe+(Me-Ue),Z=He*Se/x*E,ee=L*Se/x*E;z.projectionMatrix.makePerspective(N,te,Z,ee,E,x),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function Y(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;v.near=b.near=C.near=z.near,v.far=b.far=C.far=z.far,(w!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,O=v.far);let J=z.parent,he=v.cameras;Y(v,J);for(let Me=0;Me<he.length;Me++)Y(he[Me],J);he.length===2?X(v,C,b):v.projectionMatrix.copy(C.projectionMatrix),G(z,v,J)};function G(z,J,he){he===null?z.matrix.copy(J.matrixWorld):(z.matrix.copy(he.matrixWorld),z.matrix.invert(),z.matrix.multiply(J.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ls*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let j=null;function $(z,J){if(A=J.getViewerPose(l||a),m=J,A!==null){let he=A.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let Me=!1;he.length!==v.cameras.length&&(v.cameras.length=0,Me=!0);for(let ge=0;ge<he.length;ge++){let Ie=he[ge],Re=null;if(p!==null)Re=p.getViewport(Ie);else{let He=u.getViewSubImage(f,Ie);Re=He.viewport,ge===0&&(e.setRenderTargetTextures(h,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(h))}let Se=H[ge];Se===void 0&&(Se=new Ct,Se.layers.enable(ge),Se.viewport=new pt,H[ge]=Se),Se.matrix.fromArray(Ie.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ie.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Re.x,Re.y,Re.width,Re.height),ge===0&&(v.matrix.copy(Se.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Me===!0&&v.cameras.push(Se)}}for(let he=0;he<M.length;he++){let Me=_[he],ge=M[he];Me!==null&&ge!==void 0&&ge.update(Me,J,l||a)}j&&j(z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}let Ae=new yl;Ae.setAnimationLoop($),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}};function hm(i,e){function t(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function n(d,h){h.color.getRGB(d.fogColor.value,vl(i)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function s(d,h,M,_,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(d,h):h.isMeshToonMaterial?(r(d,h),u(d,h)):h.isMeshPhongMaterial?(r(d,h),A(d,h)):h.isMeshStandardMaterial?(r(d,h),f(d,h),h.isMeshPhysicalMaterial&&p(d,h,S)):h.isMeshMatcapMaterial?(r(d,h),m(d,h)):h.isMeshDepthMaterial?r(d,h):h.isMeshDistanceMaterial?(r(d,h),g(d,h)):h.isMeshNormalMaterial?r(d,h):h.isLineBasicMaterial?(a(d,h),h.isLineDashedMaterial&&o(d,h)):h.isPointsMaterial?c(d,h,M,_):h.isSpriteMaterial?l(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,t(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===Pt&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,t(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===Pt&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,t(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,t(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);let M=e.get(h).envMap;if(M&&(d.envMap.value=M,d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap){d.lightMap.value=h.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=h.lightMapIntensity*_,t(h.lightMap,d.lightMapTransform)}h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,d.aoMapTransform))}function a(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform))}function o(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function c(d,h,M,_){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*M,d.scale.value=_*.5,h.map&&(d.map.value=h.map,t(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function l(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function A(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function u(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function f(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,d.roughnessMapTransform)),e.get(h).envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function p(d,h,M){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pt&&d.clearcoatNormalScale.value.negate())),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,h){h.matcap&&(d.matcap.value=h.matcap)}function g(d,h){let M=e.get(h).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function um(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){let S=_.program;n.uniformBlockBinding(M,S)}function l(M,_){let S=s[M.id];S===void 0&&(m(M),S=A(M),s[M.id]=S,M.addEventListener("dispose",d));let I=_.program;n.updateUBOMapping(M,I);let C=e.render.frame;r[M.id]!==C&&(f(M),r[M.id]=C)}function A(M){let _=u();M.__bindingPointIndex=_;let S=i.createBuffer(),I=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let _=s[M.id],S=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let C=0,b=S.length;C<b;C++){let H=Array.isArray(S[C])?S[C]:[S[C]];for(let v=0,w=H.length;v<w;v++){let O=H[v];if(p(O,C,v,I)===!0){let W=O.__offset,ae=Array.isArray(O.value)?O.value:[O.value],U=0;for(let D=0;D<ae.length;D++){let V=ae[D],X=g(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,W+U,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,_,S,I){let C=M.value,b=_+"_"+S;if(I[b]===void 0)return typeof C=="number"||typeof C=="boolean"?I[b]=C:I[b]=C.clone(),!0;{let H=I[b];if(typeof C=="number"||typeof C=="boolean"){if(H!==C)return I[b]=C,!0}else if(H.equals(C)===!1)return H.copy(C),!0}return!1}function m(M){let _=M.uniforms,S=0,I=16;for(let b=0,H=_.length;b<H;b++){let v=Array.isArray(_[b])?_[b]:[_[b]];for(let w=0,O=v.length;w<O;w++){let W=v[w],ae=Array.isArray(W.value)?W.value:[W.value];for(let U=0,D=ae.length;U<D;U++){let V=ae[U],X=g(V),Y=S%I;Y!==0&&I-Y<X.boundary&&(S+=I-Y),W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=X.storage}}}let C=S%I;return C>0&&(S+=I-C),M.__size=S,M.__cache={},this}function g(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function d(M){let _=M.target;_.removeEventListener("dispose",d);let S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function h(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:h}}var ds=class{constructor(e={}){let{canvas:t=vh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:A="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=new Uint32Array(4),m=new Int32Array(4),g=null,d=null,h=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;let _=this,S=!1,I=0,C=0,b=null,H=-1,v=null,w=new pt,O=new pt,W=null,ae=new xe(0),U=0,D=t.width,V=t.height,X=1,Y=null,G=null,j=new pt(0,0,D,V),$=new pt(0,0,D,V),Ae=!1,z=new mr,J=!1,he=!1,Me=null,ge=new rt,Ie=new me,Re=new R,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return b===null?X:1}let L=n;function lt(y,P){for(let k=0;k<y.length;k++){let Q=y[k],F=t.getContext(Q,P);if(F!==null)return F}return null}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:A,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ea}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",ie,!1),L===null){let P=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&P.shift(),L=lt(P,y),L===null)throw lt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ee,Ce,fe,Je,Ue,E,x,N,te,Z,ee,pe,le,de,be,De,K,Ve,T,q,oe,ne,_e,ke;function Ge(){Ee=new Rf(L),Ce=new Sf(L,Ee,e),Ee.init(Ce),ne=new lm(L,Ee,Ce),fe=new am(L,Ee,Ce),Je=new Df(L),Ue=new jp,E=new cm(L,Ee,fe,Ue,Ce,ne,Je),x=new Tf(_),N=new If(_),te=new zh(L,Ce),_e=new Ef(L,Ee,te,Ce),Z=new Uf(L,te,Je,_e),ee=new Of(L,Z,te,Je),T=new Ff(L,Ce,E),De=new bf(Ue),pe=new qp(_,x,N,Ee,Ce,_e,De),le=new hm(_,Ue),de=new Kp,be=new im(Ee,Ce),Ve=new yf(_,x,N,fe,ee,f,c),K=new om(_,ee,Ce),ke=new um(L,Je,Ce,fe),q=new wf(L,Ee,Je,Ce),oe=new Pf(L,Ee,Je,Ce),Je.programs=pe.programs,_.capabilities=Ce,_.extensions=Ee,_.properties=Ue,_.renderLists=de,_.shadowMap=K,_.state=fe,_.info=Je}Ge();let Fe=new Qo(_,L);this.xr=Fe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=Ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(D,V,!1))},this.getSize=function(y){return y.set(D,V)},this.setSize=function(y,P,k=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=y,V=P,t.width=Math.floor(y*X),t.height=Math.floor(P*X),k===!0&&(t.style.width=y+"px",t.style.height=P+"px"),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(D*X,V*X).floor()},this.setDrawingBufferSize=function(y,P,k){D=y,V=P,X=k,t.width=Math.floor(y*k),t.height=Math.floor(P*k),this.setViewport(0,0,y,P)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(j)},this.setViewport=function(y,P,k,Q){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,P,k,Q),fe.viewport(w.copy(j).multiplyScalar(X).floor())},this.getScissor=function(y){return y.copy($)},this.setScissor=function(y,P,k,Q){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,P,k,Q),fe.scissor(O.copy($).multiplyScalar(X).floor())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(y){fe.setScissorTest(Ae=y)},this.setOpaqueSort=function(y){Y=y},this.setTransparentSort=function(y){G=y},this.getClearColor=function(y){return y.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(y=!0,P=!0,k=!0){let Q=0;if(y){let F=!1;if(b!==null){let ue=b.texture.format;F=ue===dl||ue===ul||ue===hl}if(F){let ue=b.texture.type,ye=ue===In||ue===Cn||ue===ta||ue===Yn||ue===ll||ue===Al,Te=Ve.getClearColor(),Be=Ve.getClearAlpha(),Oe=Te.r,Pe=Te.g,Le=Te.b;ye?(p[0]=Oe,p[1]=Pe,p[2]=Le,p[3]=Be,L.clearBufferuiv(L.COLOR,0,p)):(m[0]=Oe,m[1]=Pe,m[2]=Le,m[3]=Be,L.clearBufferiv(L.COLOR,0,m))}else Q|=L.COLOR_BUFFER_BIT}P&&(Q|=L.DEPTH_BUFFER_BIT),k&&(Q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),de.dispose(),be.dispose(),Ue.dispose(),x.dispose(),N.dispose(),ee.dispose(),_e.dispose(),ke.dispose(),pe.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",wt),Fe.removeEventListener("sessionend",je),Me&&(Me.dispose(),Me=null),St.stop()};function re(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let y=Je.autoReset,P=K.enabled,k=K.autoUpdate,Q=K.needsUpdate,F=K.type;Ge(),Je.autoReset=y,K.enabled=P,K.autoUpdate=k,K.needsUpdate=Q,K.type=F}function ie(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function se(y){let P=y.target;P.removeEventListener("dispose",se),we(P)}function we(y){ve(y),Ue.remove(y)}function ve(y){let P=Ue.get(y).programs;P!==void 0&&(P.forEach(function(k){pe.releaseProgram(k)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,k,Q,F,ue){P===null&&(P=Se);let ye=F.isMesh&&F.matrixWorld.determinant()<0,Te=iA(y,P,k,Q,F);fe.setMaterial(Q,ye);let Be=k.index,Oe=1;if(Q.wireframe===!0){if(Be=Z.getWireframeAttribute(k),Be===void 0)return;Oe=2}let Pe=k.drawRange,Le=k.attributes.position,it=Pe.start*Oe,Nt=(Pe.start+Pe.count)*Oe;ue!==null&&(it=Math.max(it,ue.start*Oe),Nt=Math.min(Nt,(ue.start+ue.count)*Oe)),Be!==null?(it=Math.max(it,0),Nt=Math.min(Nt,Be.count)):Le!=null&&(it=Math.max(it,0),Nt=Math.min(Nt,Le.count));let ht=Nt-it;if(ht<0||ht===1/0)return;_e.setup(F,Q,Te,k,Be);let on,et=q;if(Be!==null&&(on=te.get(Be),et=oe,et.setIndex(on)),F.isMesh)Q.wireframe===!0?(fe.setLineWidth(Q.wireframeLinewidth*He()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(F.isLine){let Qe=Q.linewidth;Qe===void 0&&(Qe=1),fe.setLineWidth(Qe*He()),F.isLineSegments?et.setMode(L.LINES):F.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else F.isPoints?et.setMode(L.POINTS):F.isSprite&&et.setMode(L.TRIANGLES);if(F.isBatchedMesh)et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)et.renderInstances(it,ht,F.count);else if(k.isInstancedBufferGeometry){let Qe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,kr=Math.min(k.instanceCount,Qe);et.renderInstances(it,ht,kr)}else et.render(it,ht)};function We(y,P,k){y.transparent===!0&&y.side===dn&&y.forceSinglePass===!1?(y.side=Pt,y.needsUpdate=!0,Ss(y,P,k),y.side=Rn,y.needsUpdate=!0,Ss(y,P,k),y.side=dn):Ss(y,P,k)}this.compile=function(y,P,k=null){k===null&&(k=y),d=be.get(k),d.init(),M.push(d),k.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),y!==k&&y.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(_._useLegacyLights);let Q=new Set;return y.traverse(function(F){let ue=F.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){let Te=ue[ye];We(Te,k,F),Q.add(Te)}else We(ue,k,F),Q.add(ue)}),M.pop(),d=null,Q},this.compileAsync=function(y,P,k=null){let Q=this.compile(y,P,k);return new Promise(F=>{function ue(){if(Q.forEach(function(ye){Ue.get(ye).currentProgram.isReady()&&Q.delete(ye)}),Q.size===0){F(y);return}setTimeout(ue,10)}Ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Xe=null;function At(y){Xe&&Xe(y)}function wt(){St.stop()}function je(){St.start()}let St=new yl;St.setAnimationLoop(At),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(y){Xe=y,Fe.setAnimationLoop(y),y===null?St.stop():St.start()},Fe.addEventListener("sessionstart",wt),Fe.addEventListener("sessionend",je),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(P),P=Fe.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,P,b),d=be.get(y,M.length),d.init(),M.push(d),ge.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),z.setFromProjectionMatrix(ge),he=this.localClippingEnabled,J=De.init(this.clippingPlanes,he),g=de.get(y,h.length),g.init(),h.push(g),tn(y,P,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Y,G),this.info.render.frame++,J===!0&&De.beginShadows();let k=d.state.shadowsArray;if(K.render(k,y,P),J===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(g,y),d.setupLights(_._useLegacyLights),P.isArrayCamera){let Q=P.cameras;for(let F=0,ue=Q.length;F<ue;F++){let ye=Q[F];Ta(g,y,ye,ye.viewport)}}else Ta(g,y,P);b!==null&&(E.updateMultisampleRenderTarget(b),E.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(_,y,P),_e.resetDefaultState(),H=-1,v=null,M.pop(),M.length>0?d=M[M.length-1]:d=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function tn(y,P,k,Q){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||z.intersectsSprite(y)){Q&&Re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ge);let ye=ee.update(y),Te=y.material;Te.visible&&g.push(y,ye,Te,k,Re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||z.intersectsObject(y))){let ye=ee.update(y),Te=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Re.copy(y.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Re.copy(ye.boundingSphere.center)),Re.applyMatrix4(y.matrixWorld).applyMatrix4(ge)),Array.isArray(Te)){let Be=ye.groups;for(let Oe=0,Pe=Be.length;Oe<Pe;Oe++){let Le=Be[Oe],it=Te[Le.materialIndex];it&&it.visible&&g.push(y,ye,it,k,Re.z,Le)}}else Te.visible&&g.push(y,ye,Te,k,Re.z,null)}}let ue=y.children;for(let ye=0,Te=ue.length;ye<Te;ye++)tn(ue[ye],P,k,Q)}function Ta(y,P,k,Q){let F=y.opaque,ue=y.transmissive,ye=y.transparent;d.setupLightsView(k),J===!0&&De.setGlobalState(_.clippingPlanes,k),ue.length>0&&nA(F,ue,P,k),Q&&fe.viewport(w.copy(Q)),F.length>0&&ws(F,P,k),ue.length>0&&ws(ue,P,k),ye.length>0&&ws(ye,P,k),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function nA(y,P,k,Q){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let ue=Ce.isWebGL2;Me===null&&(Me=new mt(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Kt:In,minFilter:cs,samples:ue?4:0})),_.getDrawingBufferSize(Ie),ue?Me.setSize(Ie.x,Ie.y):Me.setSize(or(Ie.x),or(Ie.y));let ye=_.getRenderTarget();_.setRenderTarget(Me),_.getClearColor(ae),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear();let Te=_.toneMapping;_.toneMapping=Bn,ws(y,k,Q),E.updateMultisampleRenderTarget(Me),E.updateRenderTargetMipmap(Me);let Be=!1;for(let Oe=0,Pe=P.length;Oe<Pe;Oe++){let Le=P[Oe],it=Le.object,Nt=Le.geometry,ht=Le.material,on=Le.group;if(ht.side===dn&&it.layers.test(Q.layers)){let et=ht.side;ht.side=Pt,ht.needsUpdate=!0,Ca(it,k,Q,Nt,ht,on),ht.side=et,ht.needsUpdate=!0,Be=!0}}Be===!0&&(E.updateMultisampleRenderTarget(Me),E.updateRenderTargetMipmap(Me)),_.setRenderTarget(ye),_.setClearColor(ae,U),_.toneMapping=Te}function ws(y,P,k){let Q=P.isScene===!0?P.overrideMaterial:null;for(let F=0,ue=y.length;F<ue;F++){let ye=y[F],Te=ye.object,Be=ye.geometry,Oe=Q===null?ye.material:Q,Pe=ye.group;Te.layers.test(k.layers)&&Ca(Te,P,k,Be,Oe,Pe)}}function Ca(y,P,k,Q,F,ue){y.onBeforeRender(_,P,k,Q,F,ue),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(_,P,k,Q,y,ue),F.transparent===!0&&F.side===dn&&F.forceSinglePass===!1?(F.side=Pt,F.needsUpdate=!0,_.renderBufferDirect(k,P,Q,F,y,ue),F.side=Rn,F.needsUpdate=!0,_.renderBufferDirect(k,P,Q,F,y,ue),F.side=dn):_.renderBufferDirect(k,P,Q,F,y,ue),y.onAfterRender(_,P,k,Q,F,ue)}function Ss(y,P,k){P.isScene!==!0&&(P=Se);let Q=Ue.get(y),F=d.state.lights,ue=d.state.shadowsArray,ye=F.state.version,Te=pe.getParameters(y,F.state,ue,P,k),Be=pe.getProgramCacheKey(Te),Oe=Q.programs;Q.environment=y.isMeshStandardMaterial?P.environment:null,Q.fog=P.fog,Q.envMap=(y.isMeshStandardMaterial?N:x).get(y.envMap||Q.environment),Oe===void 0&&(y.addEventListener("dispose",se),Oe=new Map,Q.programs=Oe);let Pe=Oe.get(Be);if(Pe!==void 0){if(Q.currentProgram===Pe&&Q.lightsStateVersion===ye)return Ia(y,Te),Pe}else Te.uniforms=pe.getUniforms(y),y.onBuild(k,Te,_),y.onBeforeCompile(Te,_),Pe=pe.acquireProgram(Te,Be),Oe.set(Be,Pe),Q.uniforms=Te.uniforms;let Le=Q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=De.uniform),Ia(y,Te),Q.needsLights=rA(y),Q.lightsStateVersion=ye,Q.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),Q.currentProgram=Pe,Q.uniformsList=null,Pe}function Ba(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=Ci.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Ia(y,P){let k=Ue.get(y);k.outputColorSpace=P.outputColorSpace,k.batching=P.batching,k.instancing=P.instancing,k.instancingColor=P.instancingColor,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphColors=P.morphColors,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents,k.toneMapping=P.toneMapping}function iA(y,P,k,Q,F){P.isScene!==!0&&(P=Se),E.resetTextureUnits();let ue=P.fog,ye=Q.isMeshStandardMaterial?P.environment:null,Te=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:pn,Be=(Q.isMeshStandardMaterial?N:x).get(Q.envMap||ye),Oe=Q.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Pe=!!k.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Le=!!k.morphAttributes.position,it=!!k.morphAttributes.normal,Nt=!!k.morphAttributes.color,ht=Bn;Q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ht=_.toneMapping);let on=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=on!==void 0?on.length:0,Qe=Ue.get(Q),kr=d.state.lights;if(J===!0&&(he===!0||y!==v)){let zt=y===v&&Q.id===H;De.setState(Q,y,zt)}let tt=!1;Q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==kr.state.version||Qe.outputColorSpace!==Te||F.isBatchedMesh&&Qe.batching===!1||!F.isBatchedMesh&&Qe.batching===!0||F.isInstancedMesh&&Qe.instancing===!1||!F.isInstancedMesh&&Qe.instancing===!0||F.isSkinnedMesh&&Qe.skinning===!1||!F.isSkinnedMesh&&Qe.skinning===!0||F.isInstancedMesh&&Qe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Qe.instancingColor===!1&&F.instanceColor!==null||Qe.envMap!==Be||Q.fog===!0&&Qe.fog!==ue||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==De.numPlanes||Qe.numIntersection!==De.numIntersection)||Qe.vertexAlphas!==Oe||Qe.vertexTangents!==Pe||Qe.morphTargets!==Le||Qe.morphNormals!==it||Qe.morphColors!==Nt||Qe.toneMapping!==ht||Ce.isWebGL2===!0&&Qe.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Qe.__version=Q.version);let Nn=Qe.currentProgram;tt===!0&&(Nn=Ss(Q,P,F));let Ra=!1,Ki=!1,Qr=!1,gt=Nn.getUniforms(),Fn=Qe.uniforms;if(fe.useProgram(Nn.program)&&(Ra=!0,Ki=!0,Qr=!0),Q.id!==H&&(H=Q.id,Ki=!0),Ra||v!==y){gt.setValue(L,"projectionMatrix",y.projectionMatrix),gt.setValue(L,"viewMatrix",y.matrixWorldInverse);let zt=gt.map.cameraPosition;zt!==void 0&&zt.setValue(L,Re.setFromMatrixPosition(y.matrixWorld)),Ce.logarithmicDepthBuffer&&gt.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&gt.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Ki=!0,Qr=!0)}if(F.isSkinnedMesh){gt.setOptional(L,F,"bindMatrix"),gt.setOptional(L,F,"bindMatrixInverse");let zt=F.skeleton;zt&&(Ce.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),gt.setValue(L,"boneTexture",zt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(gt.setOptional(L,F,"batchingTexture"),gt.setValue(L,"batchingTexture",F._matricesTexture,E));let zr=k.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0&&Ce.isWebGL2===!0)&&T.update(F,k,Nn),(Ki||Qe.receiveShadow!==F.receiveShadow)&&(Qe.receiveShadow=F.receiveShadow,gt.setValue(L,"receiveShadow",F.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Fn.envMap.value=Be,Fn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Ki&&(gt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Qe.needsLights&&sA(Fn,Qr),ue&&Q.fog===!0&&le.refreshFogUniforms(Fn,ue),le.refreshMaterialUniforms(Fn,Q,X,V,Me),Ci.upload(L,Ba(Qe),Fn,E)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ci.upload(L,Ba(Qe),Fn,E),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&gt.setValue(L,"center",F.center),gt.setValue(L,"modelViewMatrix",F.modelViewMatrix),gt.setValue(L,"normalMatrix",F.normalMatrix),gt.setValue(L,"modelMatrix",F.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let zt=Q.uniformsGroups;for(let Hr=0,oA=zt.length;Hr<oA;Hr++)if(Ce.isWebGL2){let Ua=zt[Hr];ke.update(Ua,Nn),ke.bind(Ua,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function sA(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function rA(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,P,k){Ue.get(y.texture).__webglTexture=P,Ue.get(y.depthTexture).__webglTexture=k;let Q=Ue.get(y);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=k===void 0,Q.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,P){let k=Ue.get(y);k.__webglFramebuffer=P,k.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,k=0){b=y,I=P,C=k;let Q=!0,F=null,ue=!1,ye=!1;if(y){let Be=Ue.get(y);Be.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(L.FRAMEBUFFER,null),Q=!1):Be.__webglFramebuffer===void 0?E.setupRenderTarget(y):Be.__hasExternalTextures&&E.rebindTextures(y,Ue.get(y.texture).__webglTexture,Ue.get(y.depthTexture).__webglTexture);let Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ye=!0);let Pe=Ue.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[P])?F=Pe[P][k]:F=Pe[P],ue=!0):Ce.isWebGL2&&y.samples>0&&E.useMultisampledRTT(y)===!1?F=Ue.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[k]:F=Pe,w.copy(y.viewport),O.copy(y.scissor),W=y.scissorTest}else w.copy(j).multiplyScalar(X).floor(),O.copy($).multiplyScalar(X).floor(),W=Ae;if(fe.bindFramebuffer(L.FRAMEBUFFER,F)&&Ce.drawBuffers&&Q&&fe.drawBuffers(y,F),fe.viewport(w),fe.scissor(O),fe.setScissorTest(W),ue){let Be=Ue.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,Be.__webglTexture,k)}else if(ye){let Be=Ue.get(y.texture),Oe=P||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.__webglTexture,k||0,Oe)}H=-1},this.readRenderTargetPixels=function(y,P,k,Q,F,ue,ye){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ue.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){fe.bindFramebuffer(L.FRAMEBUFFER,Te);try{let Be=y.texture,Oe=Be.format,Pe=Be.type;if(Oe!==vt&&ne.convert(Oe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Le=Pe===Kt&&(Ee.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Pe!==In&&ne.convert(Pe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===kt&&(Ce.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-Q&&k>=0&&k<=y.height-F&&L.readPixels(P,k,Q,F,ne.convert(Oe),ne.convert(Pe),ue)}finally{let Be=b!==null?Ue.get(b).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(y,P,k=0){let Q=Math.pow(2,-k),F=Math.floor(P.image.width*Q),ue=Math.floor(P.image.height*Q);E.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,y.x,y.y,F,ue),fe.unbindTexture()},this.copyTextureToTexture=function(y,P,k,Q=0){let F=P.image.width,ue=P.image.height,ye=ne.convert(k.format),Te=ne.convert(k.type);E.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment),P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Q,y.x,y.y,F,ue,ye,Te,P.image.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Q,y.x,y.y,P.mipmaps[0].width,P.mipmaps[0].height,ye,P.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,Q,y.x,y.y,ye,Te,P.image),Q===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(y,P,k,Q,F=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=y.max.x-y.min.x+1,ye=y.max.y-y.min.y+1,Te=y.max.z-y.min.z+1,Be=ne.convert(Q.format),Oe=ne.convert(Q.type),Pe;if(Q.isData3DTexture)E.setTexture3D(Q,0),Pe=L.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)E.setTexture2DArray(Q,0),Pe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Q.unpackAlignment);let Le=L.getParameter(L.UNPACK_ROW_LENGTH),it=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Nt=L.getParameter(L.UNPACK_SKIP_PIXELS),ht=L.getParameter(L.UNPACK_SKIP_ROWS),on=L.getParameter(L.UNPACK_SKIP_IMAGES),et=k.isCompressedTexture?k.mipmaps[F]:k.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,et.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,y.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,y.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,y.min.z),k.isDataTexture||k.isData3DTexture?L.texSubImage3D(Pe,F,P.x,P.y,P.z,ue,ye,Te,Be,Oe,et.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Pe,F,P.x,P.y,P.z,ue,ye,Te,Be,et.data)):L.texSubImage3D(Pe,F,P.x,P.y,P.z,ue,ye,Te,Be,Oe,et),L.pixelStorei(L.UNPACK_ROW_LENGTH,Le),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,on),F===0&&Q.generateMipmaps&&L.generateMipmap(Pe),fe.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),fe.unbindTexture()},this.resetState=function(){I=0,C=0,b=null,fe.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===na?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===Er?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ft?Xn:pl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xn?ft:pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},zo=class extends ds{};zo.prototype.isWebGL1Renderer=!0;var Li=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ni=class extends Yt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=nt,A=nt,u,f){super(null,a,o,c,l,A,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mi=new rt,el=new rt,qs=[],tl=new mn,dm=new rt,ns=new yt,is=new Un,xr=class extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dn(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),tl.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(tl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),is.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),e.ray.intersectsSphere(is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mi),el.multiplyMatrices(n,Mi),ns.matrixWorld=el,ns.raycast(e,qs);for(let a=0,o=qs.length;a<o;a++){let c=qs[a];c.instanceId=r,c.object=this,t.push(c)}qs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var fs=class extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nl=new rt,Ho=new Ui,js=new Un,Js=new R,Mr=class extends Dt{constructor(e=new Qt,t=new fs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),js.radius+=r,e.ray.intersectsSphere(js)===!1)return;nl.copy(s).invert(),Ho.copy(e.ray).applyMatrix4(nl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=f,g=p;m<g;m++){let d=l.getX(m);Js.fromBufferAttribute(u,d),il(Js,d,c,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=f,g=p;m<g;m++)Js.fromBufferAttribute(u,m),il(Js,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function il(i,e,t,n,s,r,a){let o=Ho.distanceSqToPoint(i);if(o<t){let c=new R;Ho.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Vo=class i extends Qt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),A(),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(r.slice(),3)),this.setAttribute("uv",new Bt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new R,S=new R,I=new R;for(let C=0;C<t.length;C+=3)p(t[C+0],_),p(t[C+1],S),p(t[C+2],I),c(_,S,I,M)}function c(M,_,S,I){let C=I+1,b=[];for(let H=0;H<=C;H++){b[H]=[];let v=M.clone().lerp(S,H/C),w=_.clone().lerp(S,H/C),O=C-H;for(let W=0;W<=O;W++)W===0&&H===C?b[H][W]=v:b[H][W]=v.clone().lerp(w,W/O)}for(let H=0;H<C;H++)for(let v=0;v<2*(C-H)-1;v++){let w=Math.floor(v/2);v%2===0?(f(b[H][w+1]),f(b[H+1][w]),f(b[H][w])):(f(b[H][w+1]),f(b[H+1][w+1]),f(b[H+1][w]))}}function l(M){let _=new R;for(let S=0;S<r.length;S+=3)_.x=r[S+0],_.y=r[S+1],_.z=r[S+2],_.normalize().multiplyScalar(M),r[S+0]=_.x,r[S+1]=_.y,r[S+2]=_.z}function A(){let M=new R;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let S=d(M)/2/Math.PI+.5,I=h(M)/Math.PI+.5;a.push(S,1-I)}m(),u()}function u(){for(let M=0;M<a.length;M+=6){let _=a[M+0],S=a[M+2],I=a[M+4],C=Math.max(_,S,I),b=Math.min(_,S,I);C>.9&&b<.1&&(_<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),I<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,_){let S=M*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function m(){let M=new R,_=new R,S=new R,I=new R,C=new me,b=new me,H=new me;for(let v=0,w=0;v<r.length;v+=9,w+=6){M.set(r[v+0],r[v+1],r[v+2]),_.set(r[v+3],r[v+4],r[v+5]),S.set(r[v+6],r[v+7],r[v+8]),C.set(a[w+0],a[w+1]),b.set(a[w+2],a[w+3]),H.set(a[w+4],a[w+5]),I.copy(M).add(_).add(S).divideScalar(3);let O=d(I);g(C,w+0,M,O),g(b,w+2,_,O),g(H,w+4,S,O)}}function g(M,_,S,I){I<0&&M.x===1&&(a[_]=M.x-1),S.x===0&&S.z===0&&(a[_]=I/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function h(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var vr=class i extends Vo{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};function Ks(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Go=class extends Fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hc:r=e,o=2*t-n;break;case uc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hc:a=e,c=2*n-t;break;case uc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,A=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*A,this._offsetNext=a*A}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,A=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-t)/(s-t),g=m*m,d=g*m,h=-f*d+2*f*g-f*m,M=(1+f)*d+(-1.5-2*f)*g+(-.5+f)*m+1,_=(-1-p)*d+(1.5+p)*g+.5*m,S=p*d-p*g;for(let I=0;I!==o;++I)r[I]=h*a[A+I]+M*a[l+I]+_*a[c+I]+S*a[u+I];return r}},Yo=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,A=(n-t)/(s-t),u=1-A;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*A;return r}},Wo=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$t=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Go(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case tr:t=this.InterpolantFactoryMethodLinear;break;case jr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return tr;case this.InterpolantFactoryMethodSmooth:return jr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&fm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],A=e[o+1];if(l!==A&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let g=t[u+m];if(g!==t[f+m]||g!==t[p+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};$t.prototype.TimeBufferType=Float32Array;$t.prototype.ValueBufferType=Float32Array;$t.prototype.DefaultInterpolation=tr;var jn=class extends $t{};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=er;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends $t{};Xo.prototype.ValueTypeName="color";var qo=class extends $t{};qo.prototype.ValueTypeName="number";var jo=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let A=l+o;l!==A;l+=4)Zt.slerpFlat(r,0,a,l-o,a,l,c);return r}},ps=class extends $t{InterpolantFactoryMethodLinear(e){return new jo(this.times,this.values,this.getValueSize(),e)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.DefaultInterpolation=tr;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends $t{};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=er;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends $t{};Jo.prototype.ValueTypeName="vector";var Ko=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(A){o++,r===!1&&s.onStart!==void 0&&s.onStart(A,a,o),r=!0},this.itemEnd=function(A){a++,s.onProgress!==void 0&&s.onProgress(A,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(A){s.onError!==void 0&&s.onError(A)},this.resolveURL=function(A){return c?c(A):A},this.setURLModifier=function(A){return c=A,this},this.addHandler=function(A,u){return l.push(A,u),this},this.removeHandler=function(A){let u=l.indexOf(A);return u!==-1&&l.splice(u,2),this},this.getHandler=function(A){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(A))return m}return null}}},pm=new Ko,Zo=class{constructor(e){this.manager=e!==void 0?e:pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=sl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function sl(){return(typeof performance>"u"?Date:performance).now()}var ra="\\[\\]\\.:\\/",mm=new RegExp("["+ra+"]","g"),oa="[^"+ra+"]",gm="[^"+ra.replace("\\.","")+"]",_m=/((?:WC+[\/:])*)/.source.replace("WC",oa),xm=/(WCOD+)?/.source.replace("WCOD",gm),Mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oa),vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oa),ym=new RegExp("^"+_m+xm+Mm+vm+"$"),Em=["material","materials","bones","map"],$o=class{constructor(e,t,n){let s=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$e=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mm,"")}static parseTrackName(e){let t=ym.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Em.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let A=0;A<e.length;A++)if(e[A].name===l){l=A;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=$o;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vg=new Float32Array(1);var ms=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);var Cl={type:"change"},aa={type:"start"},Bl={type:"end"},Sr=new Ui,Il=new Jt,Sm=Math.cos(70*_l.DEG2RAD),br=class extends rn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.PAN},this.touches={ONE:Zn.ROTATE,TWO:Zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",ee),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cl),n.update(),r=s.NONE},this.update=function(){let T=new R,q=new Zt().setFromUnitVectors(e.up,new R(0,1,0)),oe=q.clone().invert(),ne=new R,_e=new Zt,ke=new R,Ge=2*Math.PI;return function(re=null){let B=n.object.position;T.copy(B).sub(n.target),T.applyQuaternion(q),o.setFromVector3(T),n.autoRotate&&r===s.NONE&&O(v(re)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ie=n.minAzimuthAngle,se=n.maxAzimuthAngle;isFinite(ie)&&isFinite(se)&&(ie<-Math.PI?ie+=Ge:ie>Math.PI&&(ie-=Ge),se<-Math.PI?se+=Ge:se>Math.PI&&(se-=Ge),ie<=se?o.theta=Math.max(ie,Math.min(se,o.theta)):o.theta=o.theta>(ie+se)/2?Math.max(ie,o.theta):Math.min(se,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(A,n.dampingFactor):n.target.add(A),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?o.radius=G(o.radius):o.radius=G(o.radius*l),T.setFromSpherical(o),T.applyQuaternion(oe),B.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,A.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),A.set(0,0,0));let we=!1;if(n.zoomToCursor&&C){let ve=null;if(n.object.isPerspectiveCamera){let We=T.length();ve=G(We*l);let Xe=We-ve;n.object.position.addScaledVector(S,Xe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let We=new R(I.x,I.y,0);We.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),we=!0;let Xe=new R(I.x,I.y,0);Xe.unproject(n.object),n.object.position.sub(Xe).add(We),n.object.updateMatrixWorld(),ve=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ve!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ve).add(n.object.position):(Sr.origin.copy(n.object.position),Sr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Sr.direction))<Sm?e.lookAt(n.target):(Il.setFromNormalAndCoplanarPoint(n.object.up,n.target),Sr.intersectPlane(Il,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),we=!0);return l=1,C=!1,we||ne.distanceToSquared(n.object.position)>a||8*(1-_e.dot(n.object.quaternion))>a||ke.distanceToSquared(n.target)>0?(n.dispatchEvent(Cl),ne.copy(n.object.position),_e.copy(n.object.quaternion),ke.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",de),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",Z),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",x),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ee),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new ms,c=new ms,l=1,A=new R,u=new me,f=new me,p=new me,m=new me,g=new me,d=new me,h=new me,M=new me,_=new me,S=new R,I=new me,C=!1,b=[],H={};function v(T){return T!==null?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed}function w(T){let q=Math.abs(T)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*q)}function O(T){c.theta-=T}function W(T){c.phi-=T}let ae=function(){let T=new R;return function(oe,ne){T.setFromMatrixColumn(ne,0),T.multiplyScalar(-oe),A.add(T)}}(),U=function(){let T=new R;return function(oe,ne){n.screenSpacePanning===!0?T.setFromMatrixColumn(ne,1):(T.setFromMatrixColumn(ne,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(oe),A.add(T)}}(),D=function(){let T=new R;return function(oe,ne){let _e=n.domElement;if(n.object.isPerspectiveCamera){let ke=n.object.position;T.copy(ke).sub(n.target);let Ge=T.length();Ge*=Math.tan(n.object.fov/2*Math.PI/180),ae(2*oe*Ge/_e.clientHeight,n.object.matrix),U(2*ne*Ge/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ae(oe*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),U(ne*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(T,q){if(!n.zoomToCursor)return;C=!0;let oe=n.domElement.getBoundingClientRect(),ne=T-oe.left,_e=q-oe.top,ke=oe.width,Ge=oe.height;I.x=ne/ke*2-1,I.y=-(_e/Ge)*2+1,S.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function G(T){return Math.max(n.minDistance,Math.min(n.maxDistance,T))}function j(T){u.set(T.clientX,T.clientY)}function $(T){Y(T.clientX,T.clientX),h.set(T.clientX,T.clientY)}function Ae(T){m.set(T.clientX,T.clientY)}function z(T){f.set(T.clientX,T.clientY),p.subVectors(f,u).multiplyScalar(n.rotateSpeed);let q=n.domElement;O(2*Math.PI*p.x/q.clientHeight),W(2*Math.PI*p.y/q.clientHeight),u.copy(f),n.update()}function J(T){M.set(T.clientX,T.clientY),_.subVectors(M,h),_.y>0?V(w(_.y)):_.y<0&&X(w(_.y)),h.copy(M),n.update()}function he(T){g.set(T.clientX,T.clientY),d.subVectors(g,m).multiplyScalar(n.panSpeed),D(d.x,d.y),m.copy(g),n.update()}function Me(T){Y(T.clientX,T.clientY),T.deltaY<0?X(w(T.deltaY)):T.deltaY>0&&V(w(T.deltaY)),n.update()}function ge(T){let q=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),q=!0;break}q&&(T.preventDefault(),n.update())}function Ie(T){if(b.length===1)u.set(T.pageX,T.pageY);else{let q=Ve(T),oe=.5*(T.pageX+q.x),ne=.5*(T.pageY+q.y);u.set(oe,ne)}}function Re(T){if(b.length===1)m.set(T.pageX,T.pageY);else{let q=Ve(T),oe=.5*(T.pageX+q.x),ne=.5*(T.pageY+q.y);m.set(oe,ne)}}function Se(T){let q=Ve(T),oe=T.pageX-q.x,ne=T.pageY-q.y,_e=Math.sqrt(oe*oe+ne*ne);h.set(0,_e)}function He(T){n.enableZoom&&Se(T),n.enablePan&&Re(T)}function L(T){n.enableZoom&&Se(T),n.enableRotate&&Ie(T)}function lt(T){if(b.length==1)f.set(T.pageX,T.pageY);else{let oe=Ve(T),ne=.5*(T.pageX+oe.x),_e=.5*(T.pageY+oe.y);f.set(ne,_e)}p.subVectors(f,u).multiplyScalar(n.rotateSpeed);let q=n.domElement;O(2*Math.PI*p.x/q.clientHeight),W(2*Math.PI*p.y/q.clientHeight),u.copy(f)}function Ee(T){if(b.length===1)g.set(T.pageX,T.pageY);else{let q=Ve(T),oe=.5*(T.pageX+q.x),ne=.5*(T.pageY+q.y);g.set(oe,ne)}d.subVectors(g,m).multiplyScalar(n.panSpeed),D(d.x,d.y),m.copy(g)}function Ce(T){let q=Ve(T),oe=T.pageX-q.x,ne=T.pageY-q.y,_e=Math.sqrt(oe*oe+ne*ne);M.set(0,_e),_.set(0,Math.pow(M.y/h.y,n.zoomSpeed)),V(_.y),h.copy(M);let ke=(T.pageX+q.x)*.5,Ge=(T.pageY+q.y)*.5;Y(ke,Ge)}function fe(T){n.enableZoom&&Ce(T),n.enablePan&&Ee(T)}function Je(T){n.enableZoom&&Ce(T),n.enableRotate&&lt(T)}function Ue(T){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",x)),be(T),T.pointerType==="touch"?pe(T):N(T))}function E(T){n.enabled!==!1&&(T.pointerType==="touch"?le(T):te(T))}function x(T){De(T),b.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",x)),n.dispatchEvent(Bl),r=s.NONE}function N(T){let q;switch(T.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case Kn.DOLLY:if(n.enableZoom===!1)return;$(T),r=s.DOLLY;break;case Kn.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;Ae(T),r=s.PAN}else{if(n.enableRotate===!1)return;j(T),r=s.ROTATE}break;case Kn.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;j(T),r=s.ROTATE}else{if(n.enablePan===!1)return;Ae(T),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(aa)}function te(T){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;z(T);break;case s.DOLLY:if(n.enableZoom===!1)return;J(T);break;case s.PAN:if(n.enablePan===!1)return;he(T);break}}function Z(T){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(T.preventDefault(),n.dispatchEvent(aa),Me(T),n.dispatchEvent(Bl))}function ee(T){n.enabled===!1||n.enablePan===!1||ge(T)}function pe(T){switch(K(T),b.length){case 1:switch(n.touches.ONE){case Zn.ROTATE:if(n.enableRotate===!1)return;Ie(T),r=s.TOUCH_ROTATE;break;case Zn.PAN:if(n.enablePan===!1)return;Re(T),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Zn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;He(T),r=s.TOUCH_DOLLY_PAN;break;case Zn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(T),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(aa)}function le(T){switch(K(T),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;lt(T),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ee(T),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;fe(T),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Je(T),n.update();break;default:r=s.NONE}}function de(T){n.enabled!==!1&&T.preventDefault()}function be(T){b.push(T.pointerId)}function De(T){delete H[T.pointerId];for(let q=0;q<b.length;q++)if(b[q]==T.pointerId){b.splice(q,1);return}}function K(T){let q=H[T.pointerId];q===void 0&&(q=new me,H[T.pointerId]=q),q.set(T.pageX,T.pageY)}function Ve(T){let q=T.pointerId===b[0]?b[1]:b[0];return H[q]}n.domElement.addEventListener("contextmenu",de),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",Z,{passive:!1}),this.update()}};var Tr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var en=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},bm=new us(-1,1,1,-1,0,1),ca=class extends Qt{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}},Tm=new ca,Hi=class{constructor(e){this._mesh=new yt(Tm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Vi=class extends en{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qi.clone(e.uniforms),this.material=new ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var gs=class extends en{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Cr=class extends en{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Br=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new me);this._width=n.width,this._height=n.height,t=new mt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vi(Tr),this.copyPass.material.blending=sn,this.clock=new Oi}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}gs!==void 0&&(a instanceof gs?n=!0:a instanceof Cr&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ir=class extends en{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Rl={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Gi=class i extends en{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new me(e.x,e.y):new me(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new mt(r,a,{type:Kt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new mt(r,a,{type:Kt});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new mt(r,a,{type:Kt});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Rl;this.highPassUniforms=Qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new me(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let A=Tr;this.copyUniforms=Qi.clone(A.uniforms),this.blendMaterial=new ot({uniforms:this.copyUniforms,vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,blending:Zs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new Pn,this.fsQuad=new Hi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new me(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new me(.5,.5)},direction:{value:new me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Gi.BlurDirectionX=new me(1,0);Gi.BlurDirectionY=new me(0,1);var Rr=class{constructor(e,t,n){this.variables=[],this.currentTextureIndex=0;let s=kt,r=new Li,a=new Di;a.position.z=1;let o={passThruTexture:{value:null}},c=u(p(),o),l=new yt(new hs(2,2),c);r.add(l),this.setDataType=function(m){return s=m,this},this.addVariable=function(m,g,d){let h=this.createShaderMaterial(g),M={name:m,initialValueTexture:d,material:h,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:nt,magFilter:nt};return this.variables.push(M),M},this.setVariableDependencies=function(m,g){m.dependencies=g},this.init=function(){if(n.capabilities.isWebGL2===!1&&n.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let m=0;m<this.variables.length;m++){let g=this.variables[m];g.renderTargets[0]=this.createRenderTarget(e,t,g.wrapS,g.wrapT,g.minFilter,g.magFilter),g.renderTargets[1]=this.createRenderTarget(e,t,g.wrapS,g.wrapT,g.minFilter,g.magFilter),this.renderTexture(g.initialValueTexture,g.renderTargets[0]),this.renderTexture(g.initialValueTexture,g.renderTargets[1]);let d=g.material,h=d.uniforms;if(g.dependencies!==null)for(let M=0;M<g.dependencies.length;M++){let _=g.dependencies[M];if(_.name!==g.name){let S=!1;for(let I=0;I<this.variables.length;I++)if(_.name===this.variables[I].name){S=!0;break}if(!S)return"Variable dependency not found. Variable="+g.name+", dependency="+_.name}h[_.name]={value:null},d.fragmentShader=`
uniform sampler2D `+_.name+`;
`+d.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){let m=this.currentTextureIndex,g=this.currentTextureIndex===0?1:0;for(let d=0,h=this.variables.length;d<h;d++){let M=this.variables[d];if(M.dependencies!==null){let _=M.material.uniforms;for(let S=0,I=M.dependencies.length;S<I;S++){let C=M.dependencies[S];_[C.name].value=C.renderTargets[m].texture}}this.doRenderTarget(M.material,M.renderTargets[g])}this.currentTextureIndex=g},this.getCurrentRenderTarget=function(m){return m.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(m){return m.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){l.geometry.dispose(),l.material.dispose();let m=this.variables;for(let g=0;g<m.length;g++){let d=m[g];d.initialValueTexture&&d.initialValueTexture.dispose();let h=d.renderTargets;for(let M=0;M<h.length;M++)h[M].dispose()}};function A(m){m.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}this.addResolutionDefine=A;function u(m,g){g=g||{};let d=new ot({name:"GPUComputationShader",uniforms:g,vertexShader:f(),fragmentShader:m});return A(d),d}this.createShaderMaterial=u,this.createRenderTarget=function(m,g,d,h,M,_){return m=m||e,g=g||t,d=d||Ut,h=h||Ut,M=M||nt,_=_||nt,new mt(m,g,{wrapS:d,wrapT:h,minFilter:M,magFilter:_,format:vt,type:s,depthBuffer:!1})},this.createTexture=function(){let m=new Float32Array(e*t*4),g=new Ni(m,e,t,vt,kt);return g.needsUpdate=!0,g},this.renderTexture=function(m,g){o.passThruTexture.value=m,this.doRenderTarget(c,g),o.passThruTexture.value=null},this.doRenderTarget=function(m,g){let d=n.getRenderTarget(),h=n.xr.enabled,M=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,l.material=m,n.setRenderTarget(g),n.render(r,a),l.material=c,n.xr.enabled=h,n.shadowMap.autoUpdate=M,n.setRenderTarget(d)};function f(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function p(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}};var Es=Math.min(window.innerWidth,window.innerHeight)<700||navigator.maxTouchPoints>1&&window.innerWidth<1100,dt=Es?16e3:36e3,Ul=Es?.27:.2,Pl=Es?1.5:2,Cm=1,Bm=!1,Pr=6,xs=.12,Ye={reform:2.2,hold:5,spin:6,burst:3.5,drift:2},Yi=Ye.reform+Ye.hold+Ye.spin+Ye.burst+Ye.drift,Im=Ye.reform,Rm=Ye.reform+Ye.hold,Um=Rm+Ye.spin,n0=Um+Ye.burst,Pm=180,Dm=5;var Lm=-98,ga={color:16765802,lift:.03,scale:1.25},Dr=Pm*Math.PI/180/Ye.spin,la=Lm*Math.PI/180*-1,Wi=36,Vl=23.4*Math.PI/180;var Nm=.82,Fm=38.9,Om=-77.04;var Gl=108;var Ze=new R(0,4,0),km=new R(0,22,Gl),Qm=0,zm=Math.PI,Hm=!1,Dl=0,Aa=new URLSearchParams(location.search).get("t"),_a=Aa!==null&&!isNaN(parseFloat(Aa))?parseFloat(Aa):null;var i0=new R(-.55,.45,.7).normalize(),Vm="#03050a",Lt=document.getElementById("hero"),Gm=document.getElementById("phase")||{textContent:""},ni=()=>Lt.clientWidth,Ji=()=>Lt.clientHeight,wa=new Li,It=new Ct(55,ni()/Ji(),.1,2e3);It.position.copy(km);var Yl=()=>{let i=ni(),e=Ji(),t=i<=760,n=Lt.dataset,s=(o,c)=>{let l=parseFloat(o);return isNaN(l)?c:l},r=t?s(n.shiftXMobile,0):s(n.shiftX,typeof Dl<"u"?Dl:0),a=t?s(n.shiftYMobile,s(n.shiftY,0)):s(n.shiftY,0);r||a?It.setViewOffset(i,e,-r*i,a*e,i,e):It.clearViewOffset()};Yl();var ii=new ds({antialias:!0,powerPreference:"high-performance"});ii.setPixelRatio(Math.min(window.devicePixelRatio,typeof Pl<"u"?Pl:2));ii.setSize(ni(),Ji());Lt.appendChild(ii.domElement);var yn=new br(It,ii.domElement);yn.target.copy(Ze);yn.enableDamping=!0;yn.enableZoom=!1;yn.enablePan=!1;yn.autoRotate=Bm&&_a===null;yn.autoRotateSpeed=.7;yn.minPolarAngle=Qm;yn.maxPolarAngle=zm;yn.enabled=Hm;var $n=new Br(ii);$n.addPass(new Ir(wa,It));var ei=new Gi(new me(ni(),Ji()),1.5,.4,.85);ei.strength=.5;ei.radius=.3;ei.threshold=.25;$n.addPass(ei);var Ym={uniforms:{tDiffuse:{value:null},bgColor:{value:new xe(Vm)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
                uniform sampler2D tDiffuse; uniform vec3 bgColor; varying vec2 vUv;
                void main() {
                    vec4 texel = texture2D(tDiffuse, vUv);
                    float alpha = clamp(max(texel.r, max(texel.g, texel.b)), 0.0, 1.0);
                    // soft radial vignette so the overlay text reads cleanly
                    float v = smoothstep(1.25, 0.35, length(vUv - 0.5) * 1.6);
                    gl_FragColor = vec4((texel.rgb + bgColor * (1.0 - alpha)) * mix(0.55, 1.0, v), 1.0);
                }`},Wm=new Vi(Ym);$n.addPass(Wm);$n.passes[$n.passes.length-1].renderToScreen=!0;var Wl=new Dt,xa=new xe,s0=new R,Xi=new vr(typeof Ul<"u"?Ul:.28),_n=Math.ceil(Math.sqrt(dt)),qi=_n,Ma=new Float32Array(dt*2);for(let i=0;i<dt;i++)Ma[i*2]=(i%_n+.5)/_n,Ma[i*2+1]=(Math.floor(i/_n)+.5)/qi;Xi.setAttribute("reference",new Dn(Ma,2));var Or=new Float32Array(dt),Sa=new Float32Array(dt),va=new Float32Array(dt);for(let i=0;i<dt;i++)Or[i]=.7+Math.random()*.6,Sa[i]=1,va[i]=Math.random();Xi.setAttribute("instanceScale",new Dn(Or,1));Xi.setAttribute("instanceOpacity",new Dn(Sa,1));var vs=new Pn({color:16777215,transparent:!0,depthWrite:!1}),Xm=i=>{i.onBeforeCompile=e=>{e.uniforms.texturePosition={value:null},e.uniforms.gpgpuEnabled={value:1},i.userData.shader=e,e.vertexShader=`
                    attribute vec2 reference;
                    attribute float instanceScale;
                    attribute float instanceOpacity;
                    varying float vInstanceOpacity;
                    uniform sampler2D texturePosition;
                    uniform float gpgpuEnabled;
                `+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`
                    vec4 mvPosition = vec4( transformed, 1.0 );
                    #ifdef USE_INSTANCING
                        mvPosition.xyz *= instanceScale;
                        vInstanceOpacity = instanceOpacity;
                        mat4 m = instanceMatrix;
                        if (gpgpuEnabled > 0.5) { m[3] = vec4(0.0, 0.0, 0.0, 1.0); }
                        mvPosition = m * mvPosition;
                        if (gpgpuEnabled > 0.5) {
                            mvPosition.xyz += texture2D(texturePosition, reference).xyz;
                        } else {
                            mvPosition.xyz += vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
                        }
                    #endif
                    mvPosition = modelViewMatrix * mvPosition;
                    gl_Position = projectionMatrix * mvPosition;
                    `),e.fragmentShader=`varying float vInstanceOpacity;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.a *= vInstanceOpacity;`)},i.needsUpdate=!0};Xm(vs);var ji=new xr(Xi,vs,dt);ji.instanceMatrix.setUsage(gl);wa.add(ji);var Lr=[];Wl.updateMatrix();for(let i=0;i<dt;i++)Lr.push(new R((Math.random()-.5)*100,(Math.random()-.5)*100,(Math.random()-.5)*100)),ji.setMatrixAt(i,Wl.matrix),ji.setColorAt(i,xa.setHex(3829720));var xn=1024,ti=512,qm="AJJJFyEAAG4DBAYAAAYABAwAAEoAFzgAAFoDBDgAADEAF0UAAEcDBAgAAAIABDwAACsAF0YAAD8DBEwAAAwAFw8AAAUAFwsAAAUAFyoAAAcAFwUAAEoDBEcAAAsAF3MAAAwAFw4AACMDBEYAAAsAF3AAAAQAFxoAABYDBAgAAAYABEAAAAcAF5EAADIBEwgAANwBBA8AAAYABDcAAAgAF5AAAK8AEwgAAAEAEwcAAHUAExAAANcBBBgAABAABCMAAAcAF48AAGMAFhgAADsAEwYAAHkAExUAANUBBBkAAAIABC4AAAoAF4wAAFgAFgEAAAYAFgUAAAMAFhkAALsAExQAANMBBBoAAAIABCUAABYAF4UAAFMAFhcAAAQAFhIAAL4AExQAALcBBAEAACEABBUAAAMABBkAABwAF4cAAFUAFhoAANIAExIAAAQAEwQAAK8BBAsAABYABBIAAAUABBwAABMAF44AAFcAFh0AANQAEwsAAAMAEwoAAJcBBAgAAA8ABAsAAAYABAcAAAcABA8AAAIABCIAAAoAF5UAAFoAFhQAAOcAEw4AALIBBAcAAAQABAgAAA0ABAEAAAsABB4AAAkAF5gAAFwAFhEAAAYAFgcAANoAEwsAAJcBBAkAACQABAEAABkABAMAAAQABBYAABAAF5YAAGAAFg0AAAcAFgoAAGwCBAMAAAsABAMAAC4ABAQAABEABBsAABoAF44AAF8AFgoAAAwAFgMAAOUAEwYAAH4BBAsAAFEABBcAABwAF5IAAF4AFggAAPAAEwkAAH0BBA4AADcABAkAAAwABCEAABQAF48AAGgAFgQAAIwAEwUAAF0AExIAAHQBBAsAABYABAYAABUABAgAAAYABA8AAAQABBwAABsAF4sAAPQAEwsAAFwAEyAAAGQBBAkAAAkABAsAAAcABAUAABAABA4AAAwABAcAAEAAFwUAAA8AF3YAAOUAExMAAFAAEwIAAAQAEy4AAEcAEwUAACQBBBAAAAYABAoAAAkABA4AAA4ABAkAABIABAMAAEAAF3IAAN8AExEAAFAAEz0AAEIAExIAABkBBCEAAA4ABAkAAAUABAUAAAQABCQAAD0AF28AANoAExAAAEwAE0YAAEIAExYAAAQAEwMAABIBBAIAAAoABBEAAA8ABAgAAAQABAgAAAQABCQAAD0AF2wAANgAEw8AAEsAE0kAAEYAExQAAAYAEwwAAA8BBAoAACoABAUAAAcABB8AAEIAF2oAANgAEwsAAEwAE0YAAE4AEwMAABwAEwEAAPcABAcAALYAF2sAANQAEwoAAE4AE0MAAGYBBBUAAD8ABAkAAGQAF2UAANYAEwsAAFIAE0QAAGQBBBcAACsABAUAAAEABAQAAAUABA4AAAoABAMAAAkABAIAAAQABAgAAD4AF2UAANUAEwkAAEIAE10AAAQAEwgAABEAEwIAAC8AEwYAAAgBBBcAAAMABAEAABgABAUAAAkABAwAAAQABA0AAAcABAcAAAUABAkAAAIABAsAAD0AF1sAANwAEwkAAEMAE20AAA0AEwwAACQAEwkAAAUBBBQAAAMABAcAABEABAYAAAEABAIAAAwABAkAAAUABAsAAAcABAoAAAIABA0AAAIABAsAADwAF1wAANcAEwoAACYAEwQAABsAE4kAAC4BBBIAAAIABBMAAAIABAUAAAMABAcAAAgABBEAAAMABAYAAAoABBsAAAcABAMAAD8AF10AANQAEwoAACUAEwsAAAYAEwEAAA8AE4oAAB4AEw0AAAEBBBEAAAMABBwAAAIABAgAAAoABA4AAAMABAUAAAoABBsAAAQABAsAADoAF1gAAAUAFwEAANQAEwkAACYAEwsAAAYAEwIAAAUAEwcAAAMAE4gAAB4AExsAAPMABBAAAAMABB8AAAEABAkAAAwABAsAAAQABAEAAA4ABCwAADYAF1wAANQAEwwAACUAEwsAAAUAEwQAAAEAEw4AAAEAE4cAAB8AEx0AAFYAEwMAAJsABAsAAAQABCkAAA8ABAYAAAQABAcAAAoABC0AAAUABAEAAC8AF18AANIAEwsAACMAEwwAAAQAEwUAAAIAE5cAAAgAEwQAAAUAEwQAAAUAEwMAAAIAEx4AAFQAEwcAADoABQUAAFsABAUAAA4ABCMAABcABAoAAAwABDAAADUAF08AAAEAFwgAANcAEwkAAB4AEw8AAAMAE6AAAAYAEzkAAE0AEwMAADsABQ0AAAIABQQAAGEABCkAABYABAsAAAkABDUAADUAF0wAAAMAFwcAAIMAFg8AAEUAEwoAABsAExAAAAUAE6IAAAEAE04AADkAEwMAADcABRsAAAMABQIAAGYABB8AABIABA0AAAgABDoAACgAF1IAAAYAFwEAAIUAFhYAAGUAExEAAAQAE/MAAGwABS8AAAYABQEAACYABAEAAAQABAQAAB8ABCoAAA4ABA0AABAABBQAAAEABB8AACUAF1wAAHsAFhsAAGkAExAAAAQAE/MAAGoABT0AABwABBAAAAMABAIAAAUABAQAAAwABC4AAAYABAUAAAQABAoAABMABAQAAAYABAMAAAkABB0AACQAFwoAAAEAF04AAHkAFhQAmAgAFgUAAAMAEwIAAFAAEwIAABEAExAAAAMAE/QAAB4AExEAADsABT8ABAYAAAsABB4AAAEABAsAAAsABCcAAAgABAoAAAQABAwAAA8ABAoAAA8ABBsAACUAFwUAAAQAF0sAAHoAFhYAmAgAFgUAEwgAAEwAEwsAAAkAExAAAAMAEwwBAAYAExcAADMABUEABAkAAAUABDMAAAsABBQAAAUABAoAAAkABAkAAAQABAoAAAMABAIAAAoABAwAAA4ABBkAAC8AF0gAAHsAFggAbwEAmAMAFgsAmAgAFgEAExUAAEYAEw0AAAgAEwwAAAQAEw4BAAYAExkAAAEAEwIAACUABUgABEsAAAMABAsAAAgABAMAACEABAoAAAIABAUAAAcABA0AAA8ABBQAADIAF0YAAHwAFgkAbwUAmAcAFgIAmAoAExoAACwAEwQAAAsAEwIAAAUAExAAAAcAEwwAAAUAEw0BAAEAEyIAACEABUkABE0AAA8ABAoAABMABAUAAAYABBIAAAcABAwAABUABBMAACoAF0UAAH8AFgUAbw0AmBEAEx0AAA4AEwQAABMAEwYAAAQAEw0AAAEAExUAAAQAEw0AAAMAEzQBACIABUUABEoAABMABAsAAAEABAMAAA0ABAcAAAEABBUAAAYABAwAAA4ABAUAAAYABBQAACUAFzwAAIYAFgcAbxAAmBEAEx8AAAsAEwcAAAsAE0IAAAQAEzYBACEABUMABFoAAAMABBMAAAEABCYAAAMABBAAAAsABAYAAAcABBcAACAAFzoAAIgAFgUAbxQAmBIAEx8AAAkAEwgAAAYAE0UAAAUAEzkBAB8ABUIABJgAAAEABBEAAAwABAQAAAgABBkAAB0AFzoAAIcAFgYAbxUAmBEAEyEAAAcAEwYAAAcAE0YAAAQAEzsBAAIAEwQAABwABT8ABKgAABkABBsAAB0AFzgAAIcAFgYAbxYAmBAAEyIAAAkAEwQAAAYAE0UAAAYAEzsBAAIAEwkAABkABT0ABKYAABoABCEAABgAFzYAAIgAFgYAbxcAmBEAEwoAAAUAExEAAAoAE04AAAQAE0sBAA0ABQYAAAYABTsABJ0AACIABBEAAAQABAwAABkAFzMAACIAkQUAAA4AkQcAAE4AFgYAbxgAmBIAEwwAAAgAEwkAAAQAEwUAAAIAE08AAAIAEzMBAAIAExkAAAgABUsABJwAACIABBEAAAYABAoAABoAFy4AACYAkQgAAAMAkQ8AAE0AFgcAbxgAAAMAmBEAEw0AABEAE40BAAMAExYAAAgABU0ABJsAAAIABAIAAB8ABBIAAAcABAcAAB0AFycAACsAkRsAAEsAFgcAbxUAAAoAmA0AEw4AAA8AE48BAAoAEwoAABAABUoABJkAAAMABAYAABEABB8AAAcABAMAACAAFyMAADMAkRgAAEgAFgcAbxUAAAsAmA0AEw4AAA8AE44BAAwAEwkAABEABUkABJkAAAMABAkAAA0ABCIAACgAFyEAADAAkRwAAEcAFggAbxUAAAoAmA4AEw8AAAUAEwUAAAYAE4wBABEAEwUAABUABQMAAAIABQMAAAMABToABJcAAAUABAwAAAoABAoAAAIABBkAACYAFyAAADUAkRUAAEgAFgkAbxYAAAcAmBIAEw0AAAYAE5ABAD0ABTkABJYAAAUABA4AABgABBcAACUAFyAAADUAkRIAAEkAFgsAbxQAAAcAmBUAEw8AAAQAE5EBADwABTgABJAAAAoABAkAAAMABAcAABYABBUAACYAFx8AADcAkQwAAEsAFgkAbxYAAAcAmBYAE6YBABsABQYAABUABQIAAAEABToABI8AAA4ABAQAAAkABAEAABkABAsAAAEABAkAACYAFx0AAI0AFgsAbxQAAAcAmBgAE6YBACEABQIAAA0ABUMABI8AADcABAoAAAMABAYAACcAFxoAAIwAFg0AbxMAAAgAmBsAE6YBAC0ABUQABIsAABgABAUAACEABAkAAAUABAEAACoAFxYAAIsAFhAAbxEAAAkAmB0AE6UBACwABUUABIoAABgABAQAAA4ABAMAABUABAgAAC8AFxUAAIkAFhIAbxAAAAoAmB0AE3cBAAQAEyMAAAQAEwMAACsABUYABIgAACQABAMAAAQABA8AABAABAMAAC8AFxQAAIgAFhMAbxAAAAsAmBoAE3kBAAMAEyEAADQABUcABIcAACYABAIAAAQABBEAAEAAFxQAAIcAFhQAbw8AAAwAmBkAE24BAAEAEwoAAAMAEx0AADkABUcABIYAAC0ABBMAAD8AFxIAAIgAFhYAbw0AAAwAmBcAE2kBAAkAEwcAAAUAExoAAD4ABSgAAAIABRsABIUAAC8ABBcAADwAFxAAAIkAFhUAbw4AAAsAmBUAE2oBAAsAEwMAAAcAExkAAEAABSYAAAEABQkAAAUABRAABIUAAC8ABBcAAEMAFwgAAIoAFhQAbxAAAAoAmBQAE2kBAA0AEwEAAAYAExoAAD0ABQQAAAIABSQAAAIABQoAAAgABQ0ABIMAADAABBcAAEUAFwYAAIoAFhQAbxEAAAwAmAkAAAgAE2gBABMAExIAAAQAEwMAAEAABQQAAAQABQQAAAEABRsAAAMABQoAABIABQkABH4AADEABBYAAA0ABAIAAMYAFhMAbxMAAAwAmAIAAA8AE2UBABQAEwsAAAIAEwIAAAoAEwEAAE4ABRgAAAUABQUAABwABQUABAcABQIABHQAADAABBcAAAwABAQAAMUAFhIAbxMAABUAeQEAAAYAE1oBAAIAEwsAABIAEwgAAGIABRcAAAYABQIAACIABQQABAMABQUABHMAAC8ABBkAAAoABAYAAMUAFgwAAAIAFgIAbxMAABAAeQ0AE0sBAAgAEwQAAAcAEwsAAA4AEwkAAGMABQQAAAEABRQAACoABQwABHIAAC0ABBsAAAgABAgAAMQAFgsAAAQAbxMAABEAeQwAE0UBABoAEwUAABMAEwkAAGwABQEAAAQABQsAAC0ABQwABHMAACsABBwAAAQABAsAAKQAkAYAABoAFggAAAcAbxAAABMAeQsAE0QBADIAEwoAAHIABQkAADcABQUABHMAACwABCoAAKMAkAUAAB0AFgMAAAoAbxAAABUAeQkAE0IBADMAEwoAAHMABQcAAAQABQMAADUABQMABHIAAC0ABCoAAKEAkAUAACwAbw4AABYAeQEAeAMAeQYAE0ABAC8AEw8AAHIABQUAAAQABQcAADUABQMABHIAACwABCsAAJ8AkAsAACIAjwIAAAMAbw4AAA8AeAMAAAQAeAYAeQMAEz8BADEAExIAAG0ABQYAAAUABQUAADcABQQABHEAAAEABAUAACcABCsAAJ4AkAsAAB8AjwUAAAQAbw0AAA4AeAUAAAMAeAoAEzwBADIAExMAAGsABQYAAEUABQMABHoAACMABCsAAJ4AkAoAAB4AjwYAAAYAbwsAAA4AeBMAEzsBADIAExQAAGkABQUAAEoABQIABHwAACAABCoAAKAAkAgAAB8AjwgAAAUAbwoAAA4AeBQAEzgBADMAExUAAGgABQUAAEsABQUABHoAAB4ABC0AAJ4AkAcAACAAjwYAAAcAbwUAABMAdw0AeAYAcAIAEzYBADQAExIAAGYABQgAAE0ABQYABH0AABkABDAAAJwAkAEAAAEAkAgAAB0AjwUAAAMAjwUAbwUAABMAdw8AeAEAcAcAEwEAcAIAEy8BADUAExMAAGQABQQAAFUABQQABIAAABUABDMAAJwAkAkAABwAjwUAAAMAjwUAABgAdxAAcAwAE2wABgEAE74AADcAExIAAGIABQQAAFoABQEABIkAAAoABDoAAJAAhgEAkAMAAAQAkAoAABwAjwQAAAUAjwIAABcAEwUAdwwAcA0AE2oABggAE7gAADgAExMAAF4ABQUAAF0ABIkAAAcABEAAAIsAhgMAkAQAAAYAkAgAABsAegQAABQAcgUAAAMAEwkAdwgAcA8AE2QABg4AE7kAADgAExAAAMIABIkAAAgABD8AAIoAhgQAkAQAAAgAkAgAABoAegYAAAQAegIAAAgAcg4AEwIAcgQAdwgAcBAAE18ABhIAEwMABgEAEwsABgEAE6sAABAAEwEAACUAEw0AAL0ABAQAAAUABIgAAAkABD8AAIcAhggAkAIAAAkAkAgAABkAeg4AAAMAchkAdwMAcBQAE1UABiIAEwYABgQAE6sAAAQAEwUAAAYAEwEAACUAEw0AAL0ABAQAAAcABIYAAAkABEEAAIUAhgoAAAgAkAkAABQAehQAchsAcBkAE1IABiMAEwMABggAE7QAAAUAEwIAACQAEw0AAL4ABAMAAAcABIYAAAoABEEAAIQAhgoAAAQAkA4AAA4AgwUAehUAchoAcBoAE1IABi8AE3oAjAoAEy8AAAIAEwQAACUAEwsAAMAABAIAAAgABIYAAAkABEEAAIUAhggAAAQAkBAAAAsAgwcAehQAchwAcBUAE1YABjAAE3gAjA4AEy0AAAEAEwQAACUAEwcAAMUABAIAAAgABIYAAAgABEIAAIMAhggAAAYAkBIAAAcAgwgAehUAchoAcBcAE1MABjIAE3gAjBAAEysAAAEAEwQAACUAEwcAAMcABAEAAAkABIQAAAgABEIAAIIAhggAAAcAkBEAAAgAgwcAehcAchkAcBcAEwIAcQQAE0wABjQAE3cAjBAAEysAAAEAEwQAACYAEwUAANIABIYAAAUABEEAAIQAhgUAAAgAkBIAAAgAgwgAehcAchkAcAMAcQQAcA0AcQsAE0kABjYAEzgAYgIAEzwAjBEAEykAAAIAEwQAACYAEwUAANIABIcAAAQABD8AAAIABAIAAJIAkBAAAAYAgwcAehkAchkAcQ4AcAEAcQEAcAQAcQoAEy4ABggAExcABjQAEzYAYgcAEzcAjBMAEygAAAIAEwUAACUAEwMAANUABMUAAAQABAMAAJMAkA8AAAQAgggAgwIAehoAchkAcSAAEykABg0AExUABjQAEwEABgMAEzAAYgsAEzMAjBQAEycAAAQAEwQAACYAEwEAANcABMIAAAUABAQAAJEAkBAAAAMALAMAggoAehUAmgUAchgAcSEAEycABhEAEwMABggAEwIABkUAEygAYgwAEzEAjBYAEyYAAAQAEwUAAPoABAQAAAMABLwAAAYABAQAAJEAkAYAAA0ALAYAggcAehQAmgkAchYAcSIAEyQABmYAExMAYgkAEwsAYgwAEzAAjBcAEyYAAAQAEwUAAPsABAcAAAEABKcAAA0ABAEAAAsABAMAAAEABAEAAI8AkAIAABIALAcAggYAehIAmg8AchAAcSkAExwABgIAEwEABmgAEw8AYgwAEwkAYhsAExMAYgMAEwwAjBgAEyUAAAQAEwYAAP0ABAUAAAIABKQAAAcABAQAAA4ABAcAAJ8ALA4AggEAgQIAehEAmhIAcgwAcS8AExYABm0AEwIABgIAEwcAYhYAEwEAYh4AEw8AYgoAjAEAEwQAjBoAEyQAAAUAEwYAAP4ABAUAAAMABKAAAAsABAQAAAsABAkAAAEABAMAAJQALAIAAAEALBQAehMAmhAAmQMAcgIAmQEAcgEAmQIAcgIAcTIAExMABnMAEwMAYjkAEwoAYg0AjCUAEx8AAAUAEwcAAP8ABAYAAAIABE8ABQIABEoAAAUABAYAABIABA4AAJMALBsAehAAmg0AmQ0AcTEAExUABnIAjAIAYlAAjCgAEx0AAAUAEwMAAAUBBAQAAAMABVEABEgAAAQABAkAAA8ABA8AAIwALCMAehAAcwIAmgEAcwcAmQ8AcTIAExQABnIAjAMAYlAAjCkAExwAAAUAEwMAAAwBBVcABEEAAAIABAsAABAABBEAAIoALCMAeg8AcwsAmQoAdAUAcQ0AdQMAcSIAExMABnAAjAgAYk0AjCsAEwoAjAIAEw4AAAYAEwIAAAgBBQQAAAIABWMABDMAAAIABAsAABAABBMAAIkALCIAehAAcwsAdAEAmQQAdAwAdgMAcQYAdgMAdQUAcR8AExUABm4AjAoAYksAjAYAYgEAjCQAEwYAjAUAEw4AAAcAEwIAAAgBBQQAAAIABWUABDAAAAEABA0AABAABA4AAAEABAQAAI0ALB4AegMAgAIAeggAcwIAegEAcwoAdBAAdg8AdQUAcRoAExwABmsAjA0AYlIAjCwAEw0AAAgAEwIAAAkBBQQAAAEABWgABCsAAAIABAIABQEABAEABQEABAkAABsABAIAAAIABAQAAI8ALBoAgAgAcxQAdA8AdhEAdQUAcRkAEx0ABmkAjA8AYlIAjCoAEw0AAAkAEwMAAAgBBW8ABCgAAAEABAMABQUABAkAABkABAIAAAMABAMAAJEALBgAgAoAcwQAjgMAcwsAdA8AdhMAdQQAcRYAAAQAExwABgcAAAIABlkAjBcAYlIAjCgAEw0AAAoAEwQAAAcBBXAABCoABQYABAkAAAEABAIAAAgABAEAAKcALBYAgA0AjggAcwUAlwQAdA0AdhQAdQUAcQIAAAMAcQsAAAYAEx8ABgQAAAkABlUAjBYAYksAjDAAEw0AAAoAEwIAAAEAEwEAAAcBBXIABCcABQcABAoAAAIABAQAAAMABAIAAKgALBcAgAcAjg0AlwYAfwQAdAoAdhUAdQIAcQUAAAUAcQcAAAoAEx4AAAwABlQAjBcAYkoAjDEAEwwAAAsAEwEAAAoBBXMABCYABQcABAwAAAYABAUAAKcALBYAjgEAgAIAjhEAlwYAfwYAdAIAfwEArQQAdhYAdQEAcQUAAAkAcQUAAAgAEx8AAAwABlQAjBcAYkgAjDIAEwwAABgBBXQABCMABQkABBQAAKgALBgAjhAAAAMAlwIAfwEAlwIAfwoArQUAdhUAdQEAcQQAAAgAcQcAAAcAExwAABAABg8ABwEABkMAjBgAYkYAjDMAEwwAABgBBXYABCAABQwABAEAAAYABAkAAKsALBgAjg8AAAQAfwEAAAEAfwQAqwEAfwEAqwIAfwYArQYAdhcAAAoAcQkAAAIAEx0AAAwABg8ABwgABj4AjB4AYkAAjDEAEwQAjAEAEwoAAA4AnAIAAAoBBXcABBQABRgAAAQABAgAAK4ALBcAjhAAAAcAfwMAqwoArQYAdhUAAA0AcQQAAAcAExsAAA0ABg0ABwwABjkAjCcAYjMAjDcAEw8AAA8AnAMAAAkBBXcABBIABRcAAAUABAcAALEALBgAjg8AAAgAfwMAqwgArQoAdhIAAA4AcQEAAAsAExkAAAoABhAABw4ABjcAjCkAYjAAjDgAEw4AABAAnAQAAAgBBXcABBEABRYAAAcABAUAALMALBkAjgMAAAMAjgkAAAgAfwMAqwgArQkAewEAdgwAewEAdgQAAB0AExcAAAoABg8ABxAABjYAjCoAYi8AjDcAEw0AABEAnAcAAAIAnAIAAAEBBXcABBAABRMAAAsABAMAALQALBoAjgEAAAcAjgkAAAcAfwMAqwgArQgAewQAdgUAewcAdgEAAB8AExcAAAoABg4ABxEABjUAjCsAYi4AjDcAEwwAABEAnAwAAAEBBXcABAkABRkAAK8AhQwAAAEAhQcALBkAAAkAjgoAAAcAfwMAqwUArgEArQoAew8AACIAkwIAExMAAAsABg0ABxsABiwAjCoAYiwAjDkAEwsAABIAnAwAAAABBXgABAkABRgAAK8AhRYALA0AABUAjgkAAAoAfwEAqwMArgQArQIArwEArQUAew4AACUAkwYAEw0AAAwABgwABx0ABhUAagQABhAAjCwAYioAjDoAEwIAAAIAEwQAABIAnAwAAAMBBXcABAkABRkAAK8AhRkALAMAhQEALAYAABAALAIAAAQAjgkAAAsAfwEAqwEArgQArwQArQMAew8AACcAkwcAEwsAAA0ABgoABx0ABg8AagMABgMAahEABgIAjDIAYiMAjDgAYAIAjAEAEwEAABkAnAsAAAUBBXYABAgABRsAAK8AhR8ALAEAhQMAAA8ALAMAAAUAjgkAAAwArgIAfgMArwMArQMAew8AACcAkwwAEwcAAA0ABgkABwYAawUABxIABg4AahoAjD8AYg4AjD8AYAQAABoAnAQAAAMAnAMAAAcBBXUABAQABR8AAAEABQEAAK0AhQEAhAIAhSAAABAALAIAAAYAjgoAAAsArgEAfgMArwEArAYAewsAfQQAAA8AfQUAABMAkwwAEwcAAAsABgEAawIAAAEAawMABgMABwQAawgABxEABgwABwIAahkAjEIAYggAjD8AYAYAABwAnAQAAA0BBZoAAK0AhAcAhRsAABEALAIAAAgAjgsAAAoAfgIArAcAewkAfAEAfQUAAAwAfQsAAA8Akw0AkgIAEwUAkgEAAA4AawQABgIABwMAawkABxIABgkABwMAahcAjEoAYgEAjD0AYAIAjAMAYAQAAB0AnAMAAA4BBZQAALQAhAYAhRkAAB4AjgsAAAgAfgMArAcAfAYAewMAfAEAfQcAAAgAfQ8AAAwAfQYAkwUAkgEAkwMAkgIAEwIAkgQAAA4AawQABgEAaw0ABxIABgYABwUAagMABwEAahIAjIgAYAoAACAAnAEAAA0BBZQAALQAhAYAhRUAABcAjgIAAAwAjgoAAAYAfgQArAMAfA0AfQMAAAUAfSkAbgUAkgsAABAAaxQABxIABgIABwsAagwAjIsAYAsAAB4AnAQAAAsBBY8AALoAhAUAhRYAABYAjgQAAA4AjgkAAAQAfgUAfAgAAAYAfQMAAAUAfSoAbgUAkgwAAAkAaxsABxQAaQQABwUAagwAjH4AAAMAjAkAYAsAAB8AnAUAAAsBBY8AALoAhAUAhRUAABcAjgQAAA8AjgUAAAMAjgEAAAMAfgQAfAUAAAIAfAMAAAgAfS8AbgYAkg0AAAcAaxsABxQAaQQABwQAagcAjIIAAAUAjAgAYAsAACAAnAUAAAwBBY4AALkAhAYAhRQAABgAjgQAABAAjgMAAAoAfgEAfAcAAAsAfTMAbgMAkgsAAAsAaxoABxIAaQIAagwAjIIAAAYAjAcAAAEAYAkAACMAnAYAAAwBBY0AALkAhAUAhRUAABgAjgQAABEAjgMAAAkAfAgAAAoAfTMAbAIAkgEAbgMAkgQAbAEAkgQAAAoAax0ABw0AaQEABwEAaQMAagEAaQIAagkAjIEAAAcAjAMAAAcAYAcAACMAnAYAAAwBBYkAAAIABQEAALkAhAYAhRQAABkAjgIAAAEAjgEAABEAjgQAAAkAfAgAAAkAfTMAbAIAkgIAbgIAkgIAbAMAkgMAAAwAax0ABwsAaRIAjH4AAAkAjAMAAAgAYAYAACQAnAYAAAwBBYYAAAEABQMAALsAhAcAhRQAAC0AjgIAAAwAfAcAAAoAfTIAbAQAkgEAbgEAkgEAbAQAkgIAAA4Aax4ABwsAaRAAjH0AABUAYAgAACIAnAUAAA4BBYUAAAEABQMAALsAhAYAhRQAAC4AjgIAAA0AfAcAAAgAfTMAbAwAkgEAAA4AayAABwkAaRIAjHsAABQAYAoAACAAnAUAABABBYUAAAEABQIAAL0AhAUAhRMAACsAjgIAAAEAjgEAAA4AfAgAAAcAfTMAbA0AAA4AayMABwcAaQUAaAMAaQoAjHsAABMAYAYAYQUAAB4AnAUAABIBBYQAAAEABQEAAL4AhAUAhRIAACUAjgkAABAAfAYAAAEAfAEAAAgAfTIAbA4AAA0AawQAbAgAaxgABwUAaQYAaAMAaQoAjH0AAAUAjAEAAAwAYAEAAAIAYQgAABwAnAYAABMBBYMAAMAAhAQAhREAACkAjgYAABIAfAYAAAoAfTIAbA8AAAsAawMAbAwAaxMAaAEAawEABwQAaQQAaAYAaQUAaAIAaQMAjH0AAAQAjAYAAAwAYQgAABkAnAgAABMBBYMAAMAAhAQAhRAAABcAUwMAAAQAUgQAAAsAjgMAABIAfAQAAA0AfSgAbQIAWAYAfQEAbBEAAAkAbBEAaw4AaAkAaQEAaAkAaQQAaAYAZwEAjIYAAAwAYQgAABUAnAEAAAIAnAkAABQBBYMAAMYAhQwAAA4AUxAAUgcAAAsAjgEAABMAfAMAAA0AfRoAbQEAfQIAbQMAfQMAbQYAWAkAbBQAAAEAbBYAaw0AaBgAZwgAjIIAAA0AYQkAABQAnAwAABUBBYMAAMYAhQQAABAAUxUAUgcAADUAfQQAAAQAfQYAAAUAfQIAbQ4AWAsAbC0AawoAaBQAZwwAjIAAAA8AYQkAABMAnA0AABYBBYIAAMcAhQIAAA8AUxgAUgYAAEgAfQIAbQ4AWAsAbC0AawgAaBUAZw4AjH4AABEAYQgAABMAnA0AABcBBYIAAMYAowMAAAoAUxwAUgcAACQAfAEAACMAbQ8AWA0AbCsAawYAaBcAZxAAjHoAABMAYQgAAA4AnAIAAAIAnA4AABgBBYAAAMcAowgAAAQAUx0AUgcAACQAfAYAABUAoQMAAAUAbQ8AWA4AbCsAaAMAawEAaBoAZxEAYwEAjHYAABQAYQgAAAkAnBYAABoBBX4AAMcAowwAUx0AUggAACcAfAMAABMAogUAAAUAbQ8AWA4AbCoAaB4AZxEAYwMAjHQAABQAYQcAAAoAnBYAABsBBXwAAMgAow4AUxwAUgcAAD8AogEAAAgATgEAbQ4AWA0AbCsAaB0AZwkAYwIAZwUAYwYAjHQAABQAYQMAAAsAnBIAACUBBXYAAMoAow4AUxsAUgcAAEkATgIAbQwAWA0AbCwAaB0AZwgAYw4AjHYAAB8AnAYAAAIAnAEAAAIAnAUAACoBBXMAAMkAoxAAUxoAUggAAEgATgIAbQsAWA8AbCsAaBsAZwsAYw4AjHYAAB4AnAQAAAIAnAUAAAEAnAQAAC0BBW4AAMoAoxIAUxsAUgkAAEYATgEAbQoAWBIAbCsAaBsAZwsAYw0AjHcAABwAnAMAAAMAnAYAAAMAnAEAAC8BBW0AAMgAoxUAUxoAUgoAAEQATgEATQEAbQgAWBUAbCoAaBoAZwwAYw4AjHYAABkAnAcAAAIAnAIAADgBBWoAAMkAoxYAUxwAUgkApQIAAEAATQMAbQYAVAMAWBUAbCgAaBoAZw4AYw0AjHcAABkAnAYAAAIAnAIAADgBHAYABWMAAMoAoxcAUxsAUgkApQgAABIApQYAACIATQIAVAIAbQMAVAUAWBcAbCcAaBgAZxAAYwoAjHoAABkAnAUAADwBHAoABV0AAMsAoxUAUx8AUgcApQwAAA0ApQoAACAATQEAUAEAVAoAWBgAbCYAaBgAZxEAYwkAjHsAABkAnAMAAD4BHAwABVkAAMwAoxMAUyIAUgQApQ4AAAwApQ8AABsATQIAUAEAVAgAnwYAWBUAbCUAaBgAZw8AYwwAjHoAABkAnAMAAD4BHAUAAAQAHAYABQkAHAYABUcAAMsAoxIAUyQAUgMApRAAAAwApQ4ApAYAAAkApAQAAAgATQEAUAEATQEAVAQAnwwAWBMAbCYAaBMAZxMAYwwAjHsAABcAnAQAAD8BHAQAAAUAHBUABUUAAMwAoxIAUyQAUgIApRQAAAkApQ4ApAkAAAQApAkAAAQApAEATQMAVAUAnw0AWBEAbCgAaA4AZxYAYw4AjHkAABgAnAEAAEEBHAUAAAQAHBcABUMAAMwAoxAAUycAUgEApRcAAAUApQ8ApBsATQIAVAcAnw4AWBAAbCcAaA0AZxYAYxAAjHYAAF0BHAQAAAUAHBcABUIAAM0Aow0AUykAUgEApRkAAAIApRAApBsATQIAVAgAnw4AWA8AbCYAaA4AZxUAYxMAjHQAAF4BHAMAAAUAHBcABSsAAAsABQ0AAMwAowwAUyoApSsApB0ATQEAVAcAnxEAWA4AbAEAAAIAbAEAAAEAbB8AaA8AZxQAYxUAZgQAjHAAAF0BHAQAAAUAHBcABQUAHAMABRYAAAMABQoAAAsABQEAAAUABQYAAMsAowoAUy4ApSsApBwATQEAVAQAnxUAWAkAVwMAAAYAbB4AZwEAaA0AZxUAYxUAZgcAjG8AAF4BHAMAAAQAHBgABQQAHAUABREAAAsABQUAABEABQYAAMoAowgAUzEApSsApBUAAAEApAYAVAQAnxcAWAcAVwQAAAcAbB4AZwQAaAEAZwMAaAEAZxkAYxQAZgoAjCMAYwEAjEkAAF8BHAMAAAQAHBkABQEAHAcABQ8AACMABQYAAMgAowYAUzQApSsApBsAAAEAnyQAVwIAAAcAbB8AZyAAYxUAZgsAjB0AYwYAjEkAAGABHAMAAAQAHCAABQ4AACUABQYAAMUAowcAUzUApSsApBYAAAEApAQAAAEAnyUAVwIAAAcAbB8AZx4AYxcAZg0AjBgAYwgAjEkAAGABHAQAAAQAHCAABQoAACgABQYAAMQAowgAUzUApSsApBcAAAEApAMAAAEAnycAAAgAbCAAZxsAYxoAZg0AjBUAYwsAjAIAXgEAjEMAAGEBHAQAAAUAHCAABQgAACgABQcAAMEAowsAUzUApSsApBcAAAIApAEAAAMAnyYAAAgAbCAAZxcAYwIAZwEAYx0AZg8AjAMAYwEAjAIAZQYAjAMAYw4AXgIAjEEAAGEBHAcAAAYAHB8ABQYAACoABQYAAMAAowwAUzUApSsApBgAAAYAnyYAAAoAbB0AZxYAYyMAZhAAYwIAZQgAYw8AXgQAjEAAAGIBHAcAAAUAHB8ABQYAACoABQcAAL4Aow0ANgEAUzMApSwApBgAAAcAnycAAAoAbB0AZxMAYyoAZgoAYwIAZQkAYw4AXgUAjD4AAGUBHAYAAAUAHB4ABQYAACsABQYAAL0AowcAAwMAowEAAwMANgMAUzEApSwApBkAAAYAnygAAAoAbAYAAAQAbBIAZxIAYywAZgkAYwMAZQgAYwoAXgkAjD0AAGgBHAUAAAYAHB0ABQUAACsABQYAAAMAFAMAAAIAFAEAALMAowcAAwgANgQAUzEApSsApBkAAAcAnygAAAwAbAEAAAYAbBAAZxUAYy8AZgUAYxQAXgoAjD0AAGoBHAMAAAYAHB8ABQMAACwABQUAAAgAFAEAALIAowgAAwgANgYAUy4ApSwApBoAAAcAnycAABEAWQEAAAIAbA0AZxgAYzQAZAEAYxIAXgoAjDwAAGwBHAIAAAYAHCMAACwABQQAALoAowgANhAAUy0ApSwApBsAAAYAnycAAAIAVgIAAAwAVQEAAAMAbA0AZxgAYzMAZAUAYw4AXgoAjDwAAG0BHAMAAAYAHCEAAC4ABQMAALoAowcAAwEANhIAUywApSsApBsAAAcAnyYAAAEAVgMAAAsAVQIAAAgAbAcAZxoAYzMAZAQAYw4AXgkAjD0AAG0BHAQAAAcAHB8AAC8ABQEAALsAowcAAwEANhMAUysApSsApBwAAAcAnyYAVgMAAAoAVQMAAA4AbAEAZwIAAA0AZwwAYzIAZAYAYwEAZAIAYwgAXgkAjD0AAAYAjQEAAGcBHAQAAAgAHB0AADcAFAIAALIAowcAAwIANhAANQUAUyoApSoApB0AAAYAnyYAAAEAVgEAAAoAVQMAWQIAAB4AZwsAYzEAZAsAYwcAXgkAjDwAAAYAjQMAAGgBHAIAAAgAHB0AADcAFAIAALIAowYAAwMANhAANQYAUykApQEAUwEApSgApB0AAAYAnygAAAkAVQQAWQIAAB4AZwsAYzEAZAsAYwcAXgkAjDsAAAYAjQMAAGoBHAMAAAgAHBsAADgAFAEAALAAowcAAwQANhAANQgAUysApSYApB4AAAcAnycAAAEAVQsAWQMAAB4AZwMAYzkAZAgAYwgAXgoAjDoAAAcAjQMAAGsBHAMAAAgAHBoAAOkAowYAAwUANhAANQkAUysApSUApB4AAAgAnyYAVQsAWQgAABwAYzoAZAgAYwUAXhAAjDUAAAgAjQQAAGwBHAMAAAgAHBkAAOgAowYAAwYANhAANQsAUykAOAEApSQApB4AAAkAnyYAVQoAWQkAABwAYzkAZAgAYwEAZAEAYwMAXhAAjDMAAAoAjQMAAG4BHAEAAAoAHBgAACoAMAcAALcAowYAAwMANhMANQ0AUyUAOAcApQQAEAQApRgApB4AAAkAnyYAVQkAWQsAAB0AYzgAZAoAYwIAXhEAjBAAXwMAjB4AAAsAjQMAAHoBHBcAACcAMAMAAAEAMAkAALQAowYAAwMANhMANQ4AUyIAOAoApQEAOAEAEAcApRYApCAAAAgAnyoAVQQAWQwAAB0AYzcAZAQAAAMAZAMAYwIAXhIAjAkAXwsAjBgAAA8AjQMAAHoBHBcAACYAMAMAAAQAMAsAAK8AowcAAwMANhMANRAAUx4AOA4AEAoApRMApCEAAAcAny8AWQwAABwAYzcAZAUAAAMAZAIAYwIAXhEAjAcAXQIAXwwAjBQAAAEAjAEAABIAjQEAAOIABQEAAJkAHBYAACUAMAIAAAoAMAgAAK0AowcAAwQANhQANRAAUxsAOBEAEAsApREADyIAAAYAny8AWQwAABsAYzgAAAEAZAEAAAEAZAEAAAQAZAMAXhMAjAYAXQMAXwwAjBEAAP0ABQEAAJUAHBcAADMAMAcAAKsAowYAAwUANhQANRIAUxgAOBIAEA0ApQ8ADyIAAAYAny8AWQsAAB0AYzQAAAwAZAIAXhUAjAEAXgIAjAEAXQMAXw8AjAEAAAIAjAkAAJYBHBYAABYAHAgAABcAMAYAAKoANh8ANRMAUxUAOBQAEA8ApQ0ADyMAAAUAny8AWQoAAB8AYwcAAAEAYygAAA8AZAEAXhgAXQEAjAIAXQMAXw0AAAYAjAMAAAcBBQIAAJAAHBcAABQAHAoAABgAMAgAAKcANh8ANRUAUxIAOBYAEBAApQsADyIAAAcAny0AWQoAACEAYwQAAAMAYykAAA4AZAEAXhcAXQcAXwwAAAcAjAMAAJkBHBgAABMAHAkAABwAMAgAAKUANh4ANRYAUw8AOBkAEBEApQkADyIAAAgAnywAWQoAACgAYygAABAAXhYAXQwAXwYAAAkAjAIAAJoBHBkAABIAHAgAAB0AMAkAAKUANh0ANRcAUw0AOBoAEBMApQcADyIAAAkAnysAWQcAACsAYycAABIAXhMAXAMAXQwAXwQAABYBBQMAAI0AHBkAABEAHAkAACkAEQIAAAIAEgMAAJsANh0ANRkAUwkAOBwAEBUApQIADyYAAAkAnygAWQkAACsAYyUAABUAXhEAXAQAXQwAXwMAAAoAjAQAAAkBBQQAAI0AHBkAABAAHAkAACoAEQMAEgUAAJgANh4ANRoAUwYAOB0AEBgADyYAAAoAnyQAWQwAACsAYyMAABgAXg0AXAcAXQoAXwUAAAgAjAYAAAkBBQIAAJAAHBgAAA8AHAoAACoAEQMAEgcAAJcANh0ANRoAUwMAOCAAEBgADyYAAAsAnyAAWQ8AACsAYyIAABkAXg0AXAkAXQgAXwUAAAgAjAUAAJ4BHBcAAAwAHAwAACsAEQIAEgkAAJUANh4ANRwAOCAAEBgADyYAAAsAnxsAngQAWQ4AAC0AYyEAABsAXgsAXAoAXQoAXwMAAAgAjAUAAJ8BHBoAAAQAHA0AKAEAAB0ALwIAAAgAEQgAEgkAAAQALgMAAI4ANh4ANRwAOCAAEBgADycAAAsAnxUAngoAWQwAAC8AYx8AAB0AXgkAXAoAXQwAXwMAAAcAjAQAAB4AlAIAAIIBHCkAKAEAAB0ALwUAAAYAEQEAAAUAEQEAEgIAAAsALgQAAI0ANh4ANRwAOCAAEBgADykAAAkAnxMAngwAWQwAAC8AYx4AAB4AXgoAXAkAXQYAXAMAXQQAXwMAACgAlAUAAIMBHB4AJwUAKAMAAB8ALwEAAA8AEgEAAJ0ANh4ANRwAOCAAEBgADykAmwEAAAkAnxEAng4AWQgAADIAYx0AACAAXgkAXAkAXQIAXAgAXQQAXwIAACgAlAUAAIQBHB0AJwUAKAMAAM0ANh4ANRwAOB8AEBkADycAmwMAAAoAnwMAngEAnwEAngQAnwcAng4AWQcAADMAYxsAACIAXgoAXBMAXQMAXwMAACYAlAYAAIYBHBsAJwUAKAMAAM0ANh4ANRwAOB8AEBkADyUAmwYAAAoAnwIAngoAnwEAnhEAWQUAADUAYxkAACMAXgsAXBIAXQQAXwMAACUAlAYAAIkBHBkAJwQAKAMAAMwANh8ANRwAOB8AEBkADyUAmwYAAAoAnwIAnhwAWQEAADkAYxkAACIAXggAAAEAXgMAXBIAXQUAXwIAACUAlAYAAIwBHBcAJwMAKAIAAM0ANgEANAYANhgANRsAOB8AEBoADyUAmwYAAAsAnhsAADwAYxgAACMAXgYAAAMAXgQAXBEAXQYAXwMAACMAlAYAAI4BHAYAAAQAHAcAJwcAKAEAAAgAJQEAAMUANAkANhcANRoAOB4AEBsADyQAmwgAAAoAnhsAADwAYxUAACYAXgUAAAUAXgMAXBIAXQYAXwMAACEAlAUAAJwBHAQAJwsAJQwAAMAANAoANhUANRoAOB4AEBkADwIAEAEADyQAmwkAAAkAnhoAAD4AYxIAADIAXgMAXBMAXQYAXwMAACAAlAUAAJ0BHAMAJwkAJRAAAL0ANAwANgMANQIANgIANSEAOCMAEBoADycAmwoAAAgAnhgAAEAAYxIAADIAXgIAXBQAXQYAXwQAAB8AlAUAAJ4BHAIAJwgAJRAAJAEAALwANA0ANgIANR8AQgIANQMAOCUAEBkADycAmwwAAAcAnhUAAEQAYxEAADIAXgIAXBQAXQYAXwQAACAAlAQAAKABJwgAJQwAJAUAALsANA8ANR4AQgYAOCYAEBkADycAmwQApgIAmwEApgIAmwUAAAUAnhMAAEcAYxAAADIAXgIAXBQAXQYAXwQAACAAlAEAAAEAlAIAAKEBJwYAJgIAJQoAJAYAALwANA4ANR0AQgcAOCYAEBkADygApgwAmwIAAAQAnhEAAEkAYxAAADMAXgIAXAwAWwYAXQMAWwMAXwUAACEAlAQAAAEAlAIAAKABJwIAJgQAJQEAJgEAJQUAJAgAAL0ANA4ANRoAQgkAOCcAEBcADygApg4AmwIAAAQAng0AAEwAYxAAADMAXgMAXAoAWw4AXwUAACAAlAkAAKABJgYAJQMAJAkAAL4AUQkANAUANRkAQgsAOAoAOQYAOBMAOQEAOAIAEBcADygApg8AmwIAAAMAngsAAE8AYw8AADMAXgMAXAkAWw8AXwUAACUAlAQAAKQBJgIAAAEAJQIAJAkAAL4AUQMANAwANRUAQg8AOAgAOQgAOAIAOQIAOAUAOQYAOAIAOQMAOAIAEBYADygAphAAmwIAAAIAngcAAFMAYw8AADQAXgIAXAMAAAIAXAQAWw8AXwUAACAAlAIAAAUAlAMAAKYBJAsAAL4ANA8ANRUAQg8AOAgAORwAOAIAEBYADycAphIAmwIAAAEAngUAAFUAYw8AADQAXgIAXAMAAAIAXAQAWw8AXwUAACAAlAIAAAcAlAEAAKcBJAsAAL4APwgAPgIANAQANRQAQhMAOAQAOR4AOgIAEBYADyYAphIApwEAmwEApwEAAFoAYw8AADQAXgMAXAIAAAUAXAIAWw4AXwUAACEAlAEAAAkAlAIAAKUBJAkAACEAIQMAAJsAPwgAPgYANQEAPgEANQMAPgMANQsAQhQAOAEANwIAOAEAOR8AOgEAEBYADx0AsQEADwYAphQApwMAAFsAYw0AADUAXgMAXAEAAAgAWwwAXwcAACsAlAMAAKUBJAgAACAAIQMAAAMAKQIAAJgAPwcAPg4ANQoAQhUANwQAOR8AOgEAEBYADxwAsQIADwYAphMApwMAABUADQIAAEUAYw0AADUAXgMAXAEAAAgAWwoAXwkAACwAlAIAAKYBJAcAAB4AIQMAAAUAKQQAAJgAPwIAPhIANQkAQhMANwYAOR8AOgIAEBYADxsAsQIADwUAphQApwQAABEADQUAAEYAYwwAADYAXgEAXAIAAAkAWwgAXwkAACUAlAMAAAQAlAQAAKYBIwIAJAQAABkAIQcAKQIAAAIAKQcAAJgAPhMANQkAQhIANwcAOR0AOgMAEBYAQwEADxsAsQIADwUAphQApwMAqAIAAAsAqAQADQYAAEcAYwsAADYAXgEAXAEAAAoAWwkAXwYAACcAlAMAAAQAlAIAAKgBIwYAABgAIQcAKQMAAAEAKQkAABMAsAIAAIMAPhIANQkAQgcAPAgAOwIANwkAORwAOgQAEBMAQwMADxoAsQMADwQAphcAqAQAAAUAqAkADQYAAEcAYwsAADUAXgEAXAIAAAsAWwQAXwkAACAAlAEAAAcAlAIAAAEAlAEAAAEAlAEAAAIAlAEAAKgBIwcAABYAIQgAKQMAAAEAKRAAAAQAKQUAAAMAsAIAAIMAPhMANQQAPQIANQIAQgcAPAkAOwEANwgAORwAOgUAEBIAQwUADxgAsQYADwEAphgAqBIADQYAAEcAYwsAADUAXgEAXAEAAA8AXwgAACEAlAIAAAkAlAQAAAIAlAEAAKgBIwIAAAEAIwUAABUAIQcAKQMAAAMAKRgAAAIAsAEAAIYAPgcAQQIAPgkAPQkAQgYAPAkAOwMANwYAORwAOgYAEBEAQwYADwQAsQMADwoAsQIADwQAsQYADwEAphkAqBEADQUAAEkAYwgAADcAXAIAABEAXwUAACIAlAEAAAoAlAMAAK8BIwYAABQAIQcAKQMAAAMAKRwAAIcAPgMAQQUAPggAPQoAQgEAPQQAPAkAOwMANwYAORsAOgMAEBQAQwcADwMAsQUADwgAsQ0ADwEAphoAqBAADQUAAEkAYwgAAAMAiwEAADMAXAIAABEAXwQAACIAlAEAAAoAlAMAALIBIwMAIgIAAAcAIgQAAAcAIQgAKQQAAAEAKR4AAIYAPgMAQQYAPgcAPQ8APAkAOwMANwUAORwAOgMAEBMAQwgADwMAsRsAphsAqA8ADQUAAEkAYwgAAAMAiwIAADIAXAIAABAAXwQAACIAlAEAAAwAlAIAAAYAlAIAAKsBIwMAIgMAAAIAIgQAAAEAIgQAAAMAIQsAKSIAAIcAPgEAQQcAPgcAPQ8APAkAOwQANwMAORwAOgUAEA0AQw0ADwMAsRsAph0AqAwADQYAAEoAYwUAAAQAiwQAADAAXAUAAA8AXwIAACEAlAIAABMAlAQAAKsBIwIAIgkAAAQAIgMAIQ0AKSIAAIcAQQgAPggAPQ8APAgAOwQANwMAORwAOgcAEAsAQw4AsR0ApiAAqAgADQYAAEwAYwMAAAUAiwQAADAAXAYAAEYAlAQAAK8BIgUAAAYAIgMAIQ4AKSQAKgEAAIQAQQcAQAMAPgMAPREAPAkAOwMANwMAORsAOggAEAkAQxIAsRkApiQAqAYADQYAAE0AYwIAAAUAiwUAAC8AXAEAAAEAXAQAAEAAlAsAALABIgQAAAUAIgMAIQ4AKSIAKgQAAIMAQQcAQAMAPgQAPQ8APAoAOwMANwMAORoAOgoAEAcAQxQAsRcApioADQYAAFUAiwUAADIAXAMAAD8AlAwAALIBIgIAAAUAIgIAIQ8AKSIAKgUAAIMAQQUAQAQAPgIAQAEAPRAAPAkAOwQANwMAORoAOgoAEAIAQwEAEAEAQxcAsRkApicADQcAAFUAiwYAADIAXAMAAD0AlAQAAAIAlAcAALsBIRAAKSEAKgYAAIMAQQMAQAgAPQ8APAoAOwQANwMAORoAOgkAQx4AsRgApiUADQcAAFYAiwYAADIAXAMAAD0AlAEAAAUAlAcAALsBIRYAKRsAKgYAAIUAQQEAQAgAPQ8APAsAOwMANwMAORQAOgMAOQIAOgoAQx8AsRcApiQADQgAAFYAiwUAADQAXAMAAC0AlQEAABQAlAQAAAEAlAIAALwBIRYAKRgAKgoAAIQAQAgAPQ8APAsAOwMANwMAORMAOg8AQyEAsRgApiEADQgAAFgAiwQAADUAlQEAXAQAACkAlQMAABMAlAQAAL8BIRwAKRIAKgsAAIQAQAgAPQ4APAwAOwIANwEAAAcAOQ0AOg8AQyIAsRgApiAADQkAAFgAiwMAADYAlQMAXAIAlQEAACgAlQQAABIAlAQAAL8BIRwAKRIAKgsAKwMAAAEAKwUAAH0AQAcAPQ0APAsAAAwAOQsAOhAAQyMAsRgAph4ADQkAAJIAlQMAXAEAlQMAACYAlQYAABMAlAIAAL8BIRwAKRMAKgoAKwkALAMAAHsAQAcAPQ0APAcAABAAOQoAOhAAQyUAsRYADgEAphwADQkAAIUACQEAAA0AlQgAACMAlQsAANEBIRsAKRQAHgIAKggAKwgALAYAAHoAQAUAPQcAAAQAPQMAPAUAABIAOQoAOhAAQx8ADAYAsRUADgMAphoADQoAAIUACQcAAAcAlQkAACEAlgEAlQsAANEBIRsAKRQAHgIAKgYAKwoALAcAAHsAQAMAPQQAAAwAPAEAABUAOQgAOhEAQw0ADAMAQwoADAwAsRMADgQAphUADQ4AAIcACQcAAAcAlQgAACAAlgIAlQkAANMBIRsAKRIAHgUAKgUAKwoALAgAAHwAQAEAPQEAACUAOQQAAAUAOhEAQwsADAYAQwUADBAAsQEADAQAsQwADggAphEADQ4AAIkACQYAAAcAlQgAAB8AlgMAlQkAANMBIRsAKQkAHgIAKQQAHgkAKgQAKwsALAcAHgEAAKsAOhIAQwoADCEAsQoAqQEADgoApggADgIApgIADRAAAIsACQcAAAUAlQgAAB4AlQUACQYAANUBIRwAKQkAHg0AKgYAKwoALAYAHgMAAKwAOhAAQwoADCIAsQEAqQIAsQIAqQYADgoApgUADgYADRAAAIwACQcAAAUAlQcAAB0AlQYACQYAANUBIR0AKQgAHg0AKgYAKwoALAYAHgMAAKwAOhEAQwMARAUADCQAqQoADhQADRAAAI4ACQcAAAUAlQYAABwAlQcACQUAANUBIR0AKQkAHg0AKgcAKwkALAUAHgQAAK0AOhEAQwIARAUADCQAqQoADhMADRAAAJAACQcAAAQAlQYAABoAlQgACQYAANMBIR8AKQkAHg0AKggAKwcALAYAHgUAAKwAOhEAQwEARAYADCQAqQsADhIADQ8AAJIACQcAAAQAlQYAABYAlQoACQgAANEBISEAKQsAHgoAKggAKwMAHgQALAIAHgEALAIAHgYAAKsAOgYARQEAOgIARQEAOgkARAUADCUAqQsADhIADQ0AAJUACQcAAAQAlQYAABUAlQoACQkAANABISEAKQkAHgwAKgkAKwIAHg8AAKsARgUARQUARAYAOgIARAYADCUAqQwADhEADQwAAJcACQoAAAIAlQQAABQAlQsACQgAABwACQEAALMBIRoAHggAKQgAHg4AKgQAHhcAAKkARgUARQUARA4ADCQAqQwADhIADQsAAJkACQoAAAIAlQQAAA4ACQEAlQ4ACQoAABsACQIAALIBLQEAIRkAHggAIQEAKQUAHisAAKkARgUARQgARAsADCMAqQ0ADhIADQkAAJsACQsAAAIAlQEAAA8ACQMAlQYACRIAABEACQIAAAcACQMAAK8BLQUAIRkAHggAKQMAHisAAKoARQ0ARAsADCIAqQ0ADhMADQgAAJ0ACQsAABEACQQAlQEACRcAAAQACQ0AAAcACQQAAK4BLQgAIRUAHjgAAKoARQ0ARAsADCIAqQwADhQADQcAAJ4ACQsAABEACRkAAAYACQ0AAAkACQMAAK4BLQwAIREAHjcAAKoARQ4ARAsADCIAqQwADhQADQUAAKAACQ0AAA8ACRgAAAcACQEAABUACQEAAK8BLQ8AIAEAIQ4AHjsAAKYARQ4ARAoADCMAqQsADhUADQQAAKIACQwAAA8ACRgAAAcACQEAABUACQEAAK8BLQ8AIAIAIQ4AHjwAAKQARQ8ARAkADCIAqQwADhUADQQAAKMACQoAABAACRgAAAYACQEAABcACQEAAAsACQIAAKEBLQ8AIAMAIQ0AHjwAAAEAHgQAAJ4ARRAARAgADCMAqQwADhUADQMAAKUACQoAABAACRcAAAYACQIAAAUACQQAAA0ACQEAAAcACQkAAJ0BLRAAIAQAIQ0AHkMAAJsARRAARAcADCQAqQIAqgEAAgsADhMADQIAAKcACQsAAA8ACRUAAAcACQMAAAIACQQAABcACQoAAJwBLQ8AIAYAIQsAHkYAAJoARQ8ARAYADCQAqgQAAg0ADhIADQEAAKcACQsAABAACRMAAAcACQkAABsACQcAAJwBLQ4AIAgAIQoAHkcAAJkARQ8ARAUADCUAqgUAAg0ADhAAAKoACQsAAA8ACRMAAAcACQcAAB4ACQYAAAgACQUAAI8BLQIAAAEALQoAIAkAIQMAIAIAIQEAIAEAIQMAHkgAAJkARQkARAEARQMARAYADCUAqgQAAhAADg0AAKsACQsAAA8ACRIAAAgACQcAACIACQIAAAYACQkAAI4BLQEAAAEALQkAIBIAIQIAHkcAAAEAHgUAAJUARQUARA0ADCUAqgIATAIAAhIADgkAAK4ACQ0AAAwACRIAAAcACQkAAB4ACQUAAAUACQ4AABwACAEAAG4BLQcAIBUAIQIAHlUAAI4ARQQARAwADCYATAQAAhQADgcAAK8ACQ0AAA0ACRAAAAcACQQAAAIACQQAABAACQYAAAYACQcAAAMACQ8ACAMAABoACAIAAGwBLQYAIBYAIQIAHlcAAI0ARQQARAwADCUATAQAAhQADgcAALAACQwAABAACQIAAAMACQgAAAgACQMAAAIACQQAAAsACQMAAAIACQcAAAcACRcACAUAABoACAEAAGoBIAEALQUAIBYAIQIAHlkAAI0ARQIARAwADCYATAQAAhQADgYAALIACQoAABkACQUAAAkACQIAAAIACQQAAAwACQEAAAoACQEAAAYACQIAAAEACRQACAkAABcACAEAAGcBIAIALQYAIBgAHlsAAIwARAwADCcATAMAAhcADgQAALIACQoAACcACQIAAAMACQQAAB0ACQEAAAQACRIACAsAABYACAEAAGYBIAIALQEAIAEALQMAIBYAHl8AAIsARAsADCgATAIAAhkADgIAALUACQgAACcACQIAAAQACQQAACIACREACAwAABIACAIAAAEACAIAAGQBIAYALQIAIBMAHmMAAIsARAIASwIARAEADAIARAIADCoAAhsAALcACQcAACcACQIAAAQACQEAAAIACQEAACYACQ0ACA0AABEACAIAAGgBIBkAHmYAAIoASwIADDAAAhsAALkACQUAACcACQMAAAUACQIAACgACQsACA4AAA8ACAMAAGgBIBgAHmsAAIYASwEADDEAAhsAALoACQQAACcACQMAAAUACQIAACoACQkACA4AAAsACAEAAAIACAMAAAgACAEAAGEBIBYAHmwAAIcADDEAAhoAALwACQMAAFEACQEAAAoACQgACBEAAAQACAgAAAoACAIAAF8BIBcAHmwAAIcASwwADCUAAhoAAL8ACQUAAEsACQIAAAsACQcACBMAAAUACAMAAA0ACAEAAGEBIBUAHm0AAIYASwwADCUAAhsAAL0ACQkAAEkACQEAAAsACQcACBQAABQACAMAAGABIBMAHm4AAIcASwsADCYAAhsAALwACQ0AAAEACQUAAEsACQcACBEAABgACAEAAAIAiAEAAF8BIBEAHm8AAIcASwwADAcASwMADBwAAhoAAL8ACRIAAEkACQcACBIAABsAiAIAAF4BIBAAHm8AAIgASwwADAYASwcADBgAAhoAAMEACRAAAEgACQgACBIAAB8AiAIAAFoBIBAAHm8AAIgASwwADAMASwEADAEASwgADBkAAhkAAMkACQ0AAEIACQkACAgAAAUACAcAAB8AiAIAAFkBIBAAHm4AAIgASxkADBgARwEAAhkAAM0ACQsAAAcACQEAAAcACQEAAAQACQEAACsACQMAAAMACQMACAcAAAgACAYAAB8AiAIAAFgBIBAAHm0AAIoASxgADBQARwcAAhcAANUACQIAAAYACQYAAAIACQgAAAcAGQUAACcACQEACAcAAAgACAYAACMAiAEAAFYBIBAAHmwAAIkASxkADBMARwsAAhQAANwACQMAABQACQEAGQMAACoACAcAAAkACAYAACIAiAIAAFUBIBAAHmsAAIoASxkADBMARwwASAEAAhMAAPAACQMAAD4ACAcAAB0AiAEAAAMAiAEAAFYBIBEAHmkAAIoASxoADBMARwwASAIAAhEAAOIACQQAAAkACQMAAEAACAgAABsAiAMAAAIAiAEAAFUBIBIAHgIAIAIAHgsAHwQAHlQAAIwASxkADBIARw4ASAIAAhEAAOMACQMAAAcACQMAAEIACAcAAHcBIBUAHgoAHwUAHlMAAI0ASxkADBIARw4ASAMAAhAASQEAADcBCAMAAB4AiAEAAFYBIBUAHgcAHwgAHlIAAI8ASxgADBIARw4ASAMAAg8ASQIAAFkBiAIAAFUBIBUAHgEAIAEAHwwAHlEAAJAASx0ARwEADAwARw4ASAMAAg0ASQQAACEBigIAAI0BIBgAHwsAHlAAAJEASx0ARwQADAkARw0ASAQAAgkASQgAAAUBigMAABkAigIAAI4BIBcAHwwAHk4AAJIASx0ARwUADAMARwEADAQARw0ASAQASREAAAYBigMAABgAigIAAI8BIBcAHwwAHk0AAJIASx0ARwoADAQARw0ASAMASREAAAYBigcAAAIAigMAAA4AigQAAI4BIBgAHwwAHksAAJIASx4ARw0ADAMARwsASAMASREAABgATwIAAOcAihEAAA4AigUAAI4BIBYAHxEAHkYAAJIASx8ARw0ADAMARwoASAQASREAABgATwMAAOUAihIAAA4AigUAAI4BIBYAHxMAHkMAAJIASxoARxQADAIARwkASAUASREAABgATwMAAOQAihIAAA8AigUAAI8BIBUAHxcAHj4AAJMASxoARx8ASAUASREAABcATwQAAOQAihEAABAAigUAAI8BIBUAHxgAHj0AAJIASxsARyAASAYASQ8AABUATwcAANoAigEAAAcAihIAABAAigYAAI4BIBUAHxgAHj0AAJIASxsARx4ASQMASAYASQ8AABQATwcAANgAigQAAAUAihIAABEAigYAAI8BIBQAHxgAHj0AAJIASxsARxoASQoASAMASQ8AABQATwcAANYAigcAAAQAihEAABIAigkAAI0BIBIAHxoAHjwAAJEASxwARxgASQwASAQASQ4AABIATwkAANUAigwAAAEAihAAABIAigoAAD0AWgEAAE8BIBEAHxkAHj0AAJEASxwARxgASQwASAQASQ0AABIATwsAANMAiiAAABAAigoAAD0AWgIAAFABIA8AHxkAHj0AAJEASxwARxYAMQIASQwASAQASQ0AABEATwkAAAEATwEAANMAiiIAAA4AigsAAD0AWgIAAFEBIA4AHxoAHjwAAJAASx0ARxUAMQcASQgASAMASQ0AAA8ATw0AANQAiiQAAAwAigwAAJEBIA0AHx4AHjcAAJAASx4ARxMAMQkASQcASAIASQ0AAA0ATxAAANIAiigAAAoAigwAAD4AWgEAACEAAQIAADEBIAsAHx4AHjcAAJAASx8ARxAAMQ0ASQYASAEASQwAAA4ATxAAAM8AigEAAAIAiikAAAgAig0AAF4AAQMAADQBIAgAHx8AHjcAAJAASwIAMwQASxoARw4AMQ4ASREAABAATw8AAM8AigMAAAEAiiwAAAUAig4AAJYBIAUAHyEAHjYAAJAAMxMASw4ARwEAMwMARwgAMQ8ASQ8AABEATxAAAM8AijAAAAUAig4AAFoAAQEAAAEAAQEAADkBIAUAHyIAHjQAAJEAMxUASwkAMwgAMgEARwUAMRAASQ0AABMATxAAAM8AikQAAFgAAQQAADsBIAIACwIAHyEAHjQAAJIAMx0AMgQAMwEAMgQAMRUASQwAABQATw8AANAAikQAAFkAAQMAADwBCwQAHyAAHjMAAJMAMxkAMg4AMRQASQsAABUATw8AAM8AikUAAJgBCwQAHyAAHjMAAJQAMxgAMg8AMRMASQkAABgATw4AAM4AikYAAJgBCwQAHyAAHjMAAJUAMxcAMg8AMRMASQgAABkATw0AAM4AikkAAJYBCwUAHxUAnQcAHwIAHjQAAJUAMxcAMhAAMRIASQcAABoATw0AAM0AikwAAJQBCwUAHxMAnQoAHwEAHjMAAJcAMxYAMhEAMREASQYAABsATw0AAMsAik8AAJMBCwUAHxIAnQwAHjMAAJcAMxYAMhIAMRAASQYAABsATwwAAMgAilUAACwAhwEAAGUBCwQAHxIAnQwAHjIAAJkAMxUAMhQAMQ0ASQcAABoATw0AAMUAilgAACwAhwMAAGMBCwQAHxIAnQwAHjEAAJoAMxUAMhQAMQ0ASQcAABoATw0AAMEAil0AACwAhwMAAGIBCwUAHxEAnQwAHjEAAJsAMxQAMhQAMQwASQkAABgATw0AAMAAimAAACwAhwMAAGEBCwUAHxAAnQ0AHjEAAJsAMxQAMhcAMQgASQoAABcATw4AAL8AimEAAC0AhwQAAF4BCwYAHwUACgMAHwgAnQ0AHjAAAJ0AMxEAMhoAMQYASQwAABYATw4AALsAigEAAAEAimMAAC8AhwMAAF0BCwcAHwMACgYAHwIACgQAnRMAHigAAKAAMxAAMhkAGgcASQwAABYATw0AALwAimcAAC8AhwEAAF0BCwcAHwIACg4AnRMAHicAAKAAMxAAMhgAGggASQwAABYATw0AALwAimkAAIsBCwkACg8AnRIAHiMAAKQAMxAAMhYAGgoASQwAABcATwwAALwAimkAAIsBCwkAChAAnREAHh8AAKgAMxAAMhUAGgwASQsAABcATwwAALwAimkAAIsBCwkAChEAnRAAHh0AAKoAMxAAMhQAGg0ASQsAABcATwsAALwAimsAAIoBCwgAChUAnREAHhYAAK0AMxAAMhMAGg8ASQoAABcATwsAALwAimwAAIgBCwcAChkAnQ8AHhQAAK8AMxAAMhMAGg8ASQkAABgATwsAALwAim0AAIcBCwYAChwAnQwAHhQAALEAMw8AMhEAGhEASQcAABsATwkAAL0Aim4AAIYBCwYACh4AnQoAHhMAALIAMw8AGgEAMg8AGhEASQUAAB8ATwYAAMAAim4AAIUBCwYACh8AnQkAHhIAALMAMw8AGgEAMgcAGgMAMgUAGhEASQMAACMATwIAAMIAim8AAIQBCwYACh8AnQkACgIAHg8AALQAMw8AGgIAMgUAGhgASgMASQIAAOYAigEAAAEAim4AAIQBCwYACh4AnQkACgMAHg8AALUAMw4AGgIAMgQAGhkASgMASQIAAOUAinIAAIMBCwYACh0AnQoACgMAHg8AALUAMw4AGgIAMgMAGhkASgQASQIAAOYAinEAAIMBCwcAChwAnQkACgQAHg8AALUAMw4AGh8ASgMAGgIAAOcAinAAAIIBCwcACh4AnQcACgQAHhAAALYAMw0AGiAASgEAGgMAAOcAim8AAIMBCwYACigAHhIAALYAMw0AGiQAAOgAim8AAIIBCwUACigAHhMAALcAMwwAGiMAAOkAinAAAIABCwUACigAHhMAALkAMwEAGgIAMwgAGiMAAOkAinAAAIABCwUACicAHhQAALoAGgIAMwcAGiQAAOoAim8AAIABCwQACiYAHhUAALsAGgUAMwEAGhoAGwQAGggAAOsAim8AAIABCwQACiUAHhUAAL0AGh4AGwUAGgYAAO4Aim0AAIEBCwQACiUAHhQAAL4AGh0AGwYAGgUAAO8Aim0AAIEBCwQACiQAHhQAAMAAGhwAGwUAGgYAAO8Aim0AAIEBCwQACiMAHQMAHhIAAMAAGh0AGwIAGgcAAPAAimwAAIEBCwQACiQAHQQAHhAAAMIAGiQAAPIAimsAAIEBCwQACiMAHQgAHgwAAMQAGiMAAPIAimsAAIEBCwMACiQAHQoAHgkAAMUAGiEAAPUAimoAAIIBCwMACiMAHQsAHgcAAMcAGh8AAPYAiiUAAAkAijwAAIIBCwMACiMAHQwAHgUAAMgAGh4AAPcAiiIAABAAijcAAIMBCwMACiMAHQ0AHgMAAMgAGh4AAPgAihwAABgAijUAAIIBCwUACiIAHQ0AHgMAAMgAGh0AAPkAihkAABsAijMAAIQBCwUACiEAHQ0AHgMAAMoAGhoAAPsAihgAAB4AiggAAAEAiicAAIUBCwUACiEAHQ4AHgEAAMsAGhcAAP0AihkAAB8AigYAAAIAiicAAIUBCwUACiEAHQ4AAMwAGgwAAAUAGgIAAAABihAAAAMAigMAACQAigQAAAMAiiYAAIUBCwYACiEAAAEAHQwAAM4AGggAAAsBigwAAC0AigMAAAMAiicAAIUBCwYACiEAAAUAHQcAANEAGgMAABABiggAAC8AigIAAAQAiiYAAD4AiQIAAEUBCwYACiQAAPABigQAADYAigIAAAIAiiMAAD8AiQIAAEQBCwYACiUAACwCiiMAAEAAiQQAAEEBCwcACiUAAC0CiiIAAEEAiQMAAEEBCwcACiUAADACih4AAEMAiQMAAEABCwYACigAAC4Cih4AAEQAiQIAAD8BCwYACikAAC8Cih0AAEUAiQIAAAEAiQEAADwBCwYACigAADACih0AAEUAiQQAADsBCwcACicAADECih0AAEYAiQMAADsBCwcACicAADICihgAAEoAiQUAAAMAiQMAADMBCwcACiYAADUCigoAAAEAiggAAE0AiQoAADQBCwgACiIAAD0CigQAAAMAigUAAE8AiQoAADQBCwYACh8AAEsCigIAAE8AiQsAADUBCwUAChoAAKACiQkAADcBCwUAChsAAKACiQgAADgBCwUAChsAAKICiQcAADYBCwYAChsAAKMCiQUAADcBCwYAChsAAJwCiQEAAAYAiQQAADgBCwUAChQAAAIACgUAAE4CigMAAAMAigQAAEQAiQIAAAUAiQQAADkBCwYAChMAAFUCigoAAEMAiQcAAAEAiQQAADkBCwYAChMAAFYCigkAAEIAiQgAAAIAiQEAADoBCwcAChMAAFYCigkAAEIAiQcAAD4BCwIAAAIACwIAChgAAFICiggAAEIAiQcAAD8BCwIAAAIACwIAChcAAFQCigcAAEEAiQcAAEABCwIAAAIACwIAChUAAFYCigUAAAEAigEAAEAAiQcAAEQBCwMAChQAAFgCigMAAEEAiQgAAEUBCwUAChEAAJsCiQsAAEQBCwQAChIAAJkCiQkAAEQBCwkAChEAAJcCiQoAAEUBCwkAChEAAJYCiQsAAEUBCwgACg4AAJkCiQsAAEYBCwgACg0AAJkCiQwAAEUBCwkACgwAAJoCiQsAAEUBCwoACgwAAJsCiQkAAEUBCwsACg0AAJ4CiQMAAEsBCwYACg8AAOoDCwcAChIAAOUDCwgAChMAAOUDCwgAChIAAOUDCwkAChEAAOYDCwkACg8AAOgDCwgACg8AAIQBGAQAAGECCwYAChEAAIMBGAUAAGECCwYAChAAAIUBGAEAAGQCCwYACg8AAOsDCwcACgwAAO4DCwgACgkAAPADCwcACgoAAB0AFQEAANADCwgACgoAABgAFQgAAM4DCwkACgoAABUAFQkAANADCxAACgMAABUAFQEAANkDCwwAAAEACwEAAPQDCwcAAAIACwUAAPADCwIAAAEACwYAAAIACwUACgEAAPADCwMAAAEACwQAAAEACwYACgIAAPEDCwUAAAEACwcACgMAAPEDCwwACgUAAPIDCwkACgkAAPADCwsAAAEACgQAAPQDCwYAABlcoAQAAPoDoAUAAPYDoAcAAPcDoAIAAPkDoAQAAPoDoAUAAPoDoAYAANYBoAEAAFsAoAIAAMQBoAgAAEoBoAcAAIQAoAUAABsAoAEAADwAoAIAAMIBoAsAAEQBoBAAAFcAoAEAACYAoAkAABMAoAkAADcAoAYAAL8BoAgAAEcBoBIAAFYAoAMAACMAoA0AAA4AoA4AABQAoAUAAAUAoAUAAAUAoBQAALwBoAgAAEcBoBYAAFMAoAUAACAAoDIAAAoAoEUAAKEBoAgAAEMBoB4AAEIAoCYAAAIAoI4AAKABoAYAAD4BoAIAAAEAoCUAAAkAoAUAAC0AoLkAAKABoAUAADsBoEQAACAAoL8AAJ0BoAYAADYBoEkAABwAoMYAAJgBoAkAABcBoAUAABIAoFAAABkAoNAAAAcAoAIAAH0BoAQAAAUAoA0AABMBoAcAAA0AoFQAABgAoN0AAHkBoAYAAAMAoBAAABABoA4AAAYAoFUAABcAoOMAAHQBoAcAAAIAoBEAAAoBoG0AAA8AoPEAAG8BoAgAAAEAoBEAAMcAoAcAAAgAoAYAAAMAoBAAABcAoG4AAA8AoPcAAGwBoAgAAAIAoBEAAMIAoAwAAAUAoB0AAAcAoHsAAA8AoPsAAGkBoAkAAAIAoBEAALwAoLgAAAsAoA0BAFMBoA4AAAMAoBEAAJsAoAQAAAoAoAIAAAgAoMAAAAkAoBUBAEoBoBEAAAMAoBEAAJAAoAYAAAQAoBQAAAEAoMIAAAoAoBoBAPcAoAcAAEcAoBIAAAQAoBAAAI8AoOIAAAkAoBwBAPcAoBAAAD4AoAQAAAMAoAgAAAYAoBEAAIwAoOgAAAEAoB8BAFoBoBIAAIkAoAoCAPUAoAwAABsAoAMAADkAoBYAAIQAoA0CALMAoAIAAEEAoA8AAAwAoAYAAAUAoA0AAA4AoAIAABYAoCAAAIAAoBACALYAoAQAAAYAoAsAAC0AoDoAAAQAoAwAAAkAoCUAAH8AoBACAMQAoAUAAA4AoAUAAB4AoHYAAIEAoAoCAKIAoAIAAAUAoAMAAAkAoAMAABgAoBIAACIAoG8AAIQAoAUCAKAAoE0AABwAoGkAAIYAoAYCAJsAoFsAAAYAoAkAAAcAoGcAAIUAoAcCAIoAoAUAAAMAoN8AAIQAoAgCAIwAoOMAAIQAoAwCAI4AoNsAAIUAoBICAI4AoNgAAHsAoB4CAIkAoMsAAIgAoCQCAG0AoAIAAAcAoAQAAAsAoNEAAIMAoCcCAG0AoO4AAHoAoC0CAGsAoPAAAEwAoAIAACQAoDMCAG0AoOUAAFAAoAwAABoAoDsCAFgAoAkAAAwAoN8AAFEAoBAAABcAoEECAFUAoAoAAAsAoN0AAFAAoBIAABYAoDwCAFwAoAkAABUAoNMAAE0AoBQAABYAoA8AAAMAoCACAI8AoMsAAEkAoBYAACcAoB4CAJUAoMgAACsAoAQAABYAoBkAACgAoBwCAJcAoMwAABgAoAgAAAQAoAYAABAAoBoAAC8AoBoCAJQAoNgAABEAoA8AABEAoBQAAC0AoCECAIYAoAIAAAkAoOAAAGIAoC0CAH4AoPsAAEsAoD8CAH0AoAQBACYAoAkAAA0AoEQCAIEAoAUBABkAoGMCAIAAoAkBAA4AoG0CAHsAoAwBAAYAoHgCAHUAoA4BAAEAoIECAG8AoJYDAHAAoJIDAB8AoAIAAAYAoAMAAAYAoA0AADUAoJYDAAgAoAIAAAwAoCQAAD8AoJkDAAMAoC8AADoAoNADAAkAoA4AABMAoPYDAAEAoKYz",ba=new Uint8Array(xn*ti);{let i=Uint8Array.from(atob(qm),t=>t.charCodeAt(0)),e=0;for(let t=0;t<i.length;t+=3){let n=i[t],s=i[t+1]|i[t+2]<<8;ba.fill(n,e,e+s),e+=s}}var jm=(i,e)=>ba[Math.min(ti-1,Math.floor(e*ti))*xn+Math.min(xn-1,Math.floor(i*xn))],Mn=new Float32Array(dt*3),gn=new Float32Array(dt*3),Xl=new Uint8Array(dt);function Jm(i,e,t){let n=1-i/(e-1)*2,s=Math.sqrt(1-n*n),r=i*2.39996323;t[0]=s*Math.sin(r),t[1]=n,t[2]=s*Math.cos(r)}var Ll=new xe(.93,.96,1),r0=new xe(.52,.56,.48),o0=new xe(.18,.38,.24),Km=new xe(.3,.55,.28),Zm=new xe(.12,.42,.18),$m=new xe(.62,.58,.3),eg=new xe(.86,.72,.46),tg=new xe(.55,.5,.42),ng=new xe(.92,.9,.8),Nl=(i,e,t,n,s,r)=>i>=t&&i<=n&&e>=s&&e<=r,ig=[[14,31,-17,36],[14,31,36,60],[25,40,50,76],[36,46,75,112],[-32,-19,118,146],[23,37,-118,-101],[-50,-20,-75,-66],[-30,-17,13,26]],sg=[[27,40,70,100],[-45,-5,-78,-66],[36,50,-122,-104],[44,48,5,15]],rg=160,og=23,ag=(i,e,t,n)=>{let s=Math.abs(i),r=s/90;if(t===rg||t===og||s>72)return n.copy(Ll);for(let o of ig)if(Nl(i,e,o[0],o[1],o[2],o[3]))return n.copy(eg).lerp($m,Math.random()*.3);for(let o of sg)if(Nl(i,e,o[0],o[1],o[2],o[3]))return n.copy(tg).lerp(Km,Math.random()*.4);let a=Math.sin(s*Math.PI/180);return a>.9?n.setRGB(.92,.95,1):a>.72?n.setRGB(.55,.6,.5).lerp(Ll,(a-.72)/.18):a>.45?n.setRGB(.76,.66,.42).lerp(new xe(.55,.6,.5),(a-.45)/.27):n.setRGB(.32,.62,.3).lerp(new xe(.76,.66,.42),a/.45),s<12&&(e>-80&&e<-45||e>8&&e<32||e>95&&e<150)&&n.lerp(Zm,.45),n},Ms=(i,e)=>ba[(e+ti)%ti*xn+(i+xn)%xn]!==0,cg=(i,e)=>{let t=Math.floor(i*xn),n=Math.floor(e*ti);return!Ms(t-1,n)||!Ms(t+1,n)||!Ms(t,n-1)||!Ms(t,n+1)},lg=(i,e)=>{let t=Math.floor(i*xn),n=Math.floor(e*ti);for(let s=-2;s<=2;s++)for(let r=-2;r<=2;r++)if(Ms(t+r,n+s))return!0;return!1};{let i=dt*7,e=[],t=[],n=[0,0,0];for(let c=0;c<i;c++){Jm(c,i,n);let l=Math.atan2(n[0],n[2]),A=Math.asin(n[1]),u=jm(.5+l/(2*Math.PI),.5-A/Math.PI);(u?e:t).push(n[0],n[1],n[2],u)}let s=Math.min(e.length/4,Math.round(dt*Nm)),r=dt-s,a=new xe,o=(c,l,A,u)=>{let f=c.length/4,p=f/l;for(let m=0;m<l;m++){let g=Math.floor(m*p)*4,d=(A+m)*3,h=c[g],M=c[g+1],_=c[g+2];if(Mn[d]=h,Mn[d+1]=M,Mn[d+2]=_,Xl[A+m]=u?c[g+3]:0,u){let S=Math.asin(M)*180/Math.PI,I=Math.atan2(h,_)*180/Math.PI;ag(S,I,c[g+3],a);let C=.5+Math.atan2(h,_)/(2*Math.PI),b=.5-Math.asin(M)/Math.PI;cg(C,b)&&a.lerp(ng,.55),a.offsetHSL(0,0,(Math.random()-.5)*.07),gn[d]=a.r,gn[d+1]=a.g,gn[d+2]=a.b}else{let S=.5+Math.atan2(h,_)/(2*Math.PI),I=.5-Math.asin(M)/Math.PI,C=lg(S,I)?.35:0;a.setRGB(.05+.1*C,.22+.2*C,.6+.25*C).offsetHSL(0,0,(Math.random()-.5)*.05),gn[d]=a.r,gn[d+1]=a.g,gn[d+2]=a.b}}};o(e,s,0,!0),o(t,r,s,!1)}var Fl=(i,e)=>{let t=Mn[i*3],n=Mn[i*3+1],s=Mn[i*3+2],r=parseFloat(Lt.dataset.energySpread||"1")||1,a=Wi*(1.2+Math.random()*2.2*r);e.set(t*a*(1+r*.6)+Ze.x,n*a+Ze.y,s*a*.6+Ze.z)},ha=Es?700:1400,ya=new Qt;{let i=new Float32Array(ha*3),e=new Float32Array(ha*3),t=new xe;for(let n=0;n<ha;n++){let s=Math.random(),r=Math.random(),a=s*Math.PI*2,o=Math.acos(2*r-1),c=700+Math.random()*200;i[n*3]=c*Math.sin(o)*Math.cos(a),i[n*3+1]=c*Math.cos(o),i[n*3+2]=c*Math.sin(o)*Math.sin(a);let l=.22+Math.pow(Math.random(),3)*.4;t.setHSL(.58+Math.random()*.08,.25,.8).multiplyScalar(l),e[n*3]=t.r,e[n*3+1]=t.g,e[n*3+2]=t.b}ya.setAttribute("position",new Et(i,3)),ya.setAttribute("color",new Et(e,3))}var ql=new fs({size:Es?2.6:2.2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1}),jl=new Mr(ya,ql);wa.add(jl);var Ea=new Ni(new Float32Array(_n*qi*4),_n,qi,vt,kt);function Ag(){let i=Ea.image.data;for(let e=0;e<_n*qi;e++){let t=e*4;if(e<dt){let n=Lr[e];i[t]=n.x,i[t+1]=n.y,i[t+2]=n.z}else i[t]=999999,i[t+1]=999999,i[t+2]=999999;i[t+3]=1}Ea.needsUpdate=!0}var vn=new Rr(_n,qi,ii),Jl=vn.createTexture(),Kl=vn.createTexture();{let i=Jl.image.data,e=Kl.image.data,t=new R;for(let n=0;n<_n*qi;n++){let s=n*4;typeof Fl=="function"&&n<dt?(Fl(n,t),i[s]=t.x,i[s+1]=t.y,i[s+2]=t.z):(i[s]=(Math.random()-.5)*160,i[s+1]=(Math.random()-.5)*160,i[s+2]=(Math.random()-.5)*160),i[s+3]=1,e[s]=e[s+1]=e[s+2]=0,e[s+3]=0}}var hg=`
            void main() {
                vec2 uv = gl_FragCoord.xy / resolution.xy;
                vec3 pos = texture2D(texturePosition, uv).xyz;
                vec3 vel = texture2D(textureVelocity, uv).xyz;
                pos += vel * 0.016;
                gl_FragColor = vec4(pos, 1.0);
            }
        `,ug=`
            uniform float uTime;
            uniform float uDeltaTime;
            uniform float uStiffness;
            uniform float uDamping;
            uniform float uNoiseStrength;
            uniform sampler2D textureTarget;
            uniform vec3 uShockwaveCenter;
            uniform float uShockwaveForce;
            uniform float uShockwaveRadius;

            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
            vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
            float snoise(vec3 v) {
                const vec2 C = vec2(1.0/6.0, 1.0/3.0);
                const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
                vec3 i  = floor(v + dot(v, vec3(C.y)));
                vec3 x0 = v - i + dot(i, vec3(C.x));
                vec3 g = step(x0.yzx, x0.xyz);
                vec3 l = 1.0 - g;
                vec3 i1 = min(g.xyz, l.zxy);
                vec3 i2 = max(g.xyz, l.zxy);
                vec3 x1 = x0 - i1 + vec3(C.x);
                vec3 x2 = x0 - i2 + vec3(C.y);
                vec3 x3 = x0 - D.yyy;
                i = mod289(i);
                vec4 p = permute(permute(permute(
                           i.z + vec4(0.0, i1.z, i2.z, 1.0))
                         + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                         + i.x + vec4(0.0, i1.x, i2.x, 1.0));
                float n_ = 0.142857142857;
                vec3 ns = n_ * D.wyz - D.xzx;
                vec4 j = p - 49.0 * floor(p * ns.z);
                vec4 x_ = floor(j * ns.z);
                vec4 y_ = floor(j - 7.0 * x_);
                vec4 x = x_ *ns.x + ns.yyyy;
                vec4 y = y_ *ns.x + ns.yyyy;
                vec4 h = 1.0 - abs(x) - abs(y);
                vec4 b0 = vec4(x.xy, y.xy);
                vec4 b1 = vec4(x.zw, y.zw);
                vec4 s0 = floor(b0)*2.0 + 1.0;
                vec4 s1 = floor(b1)*2.0 + 1.0;
                vec4 sh = -step(h, vec4(0.0));
                vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
                vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
                vec3 p0 = vec3(a0.xy, h.x);
                vec3 p1 = vec3(a0.zw, h.y);
                vec3 p2 = vec3(a1.xy, h.z);
                vec3 p3 = vec3(a1.zw, h.w);
                vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
                p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
                vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                m = m * m;
                return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
            }

            vec3 curlNoise(vec3 p) {
                const float e = 0.05;
                float dx = snoise(vec3(p.x + e, p.y, p.z)) - snoise(vec3(p.x - e, p.y, p.z));
                float dy = snoise(vec3(p.x, p.y + e, p.z)) - snoise(vec3(p.x, p.y - e, p.z));
                float dz = snoise(vec3(p.x, p.y, p.z + e)) - snoise(vec3(p.x, p.y, p.z - e));
                return vec3(dy - dz, dz - dx, dx - dy) / (2.0 * e);
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / resolution.xy;
                vec3 pos = texture2D(texturePosition, uv).xyz;
                vec3 vel = texture2D(textureVelocity, uv).xyz;
                vec3 target = texture2D(textureTarget, uv).xyz;

                vec3 force = -uStiffness * (pos - target);

                if (uNoiseStrength > 0.0) {
                    vec3 n = curlNoise(pos * 0.04 + vec3(0.0, 0.0, uTime * 0.25));
                    force += n * uNoiseStrength * 5.0;
                    // gentle upward lift so the energy rises like heat
                    force += vec3(0.0, 6.0, 0.0) * uNoiseStrength;
                }

                if (uShockwaveForce > 0.0) {
                    float d = distance(pos, uShockwaveCenter);
                    if (d < uShockwaveRadius && d > 0.1) {
                        float s = (1.0 - (d / uShockwaveRadius)) * uShockwaveForce;
                        force += normalize(pos - uShockwaveCenter) * s * 500.0;
                    }
                }

                vel += force * uDeltaTime;
                vel *= (1.0 - uDamping);

                float maxVel = 600.0;
                if (length(vel) > maxVel) vel = normalize(vel) * maxVel;

                gl_FragColor = vec4(vel, 1.0);
            }
        `,Nr=vn.addVariable("texturePosition",hg,Jl),Fr=vn.addVariable("textureVelocity",ug,Kl);vn.setVariableDependencies(Nr,[Nr,Fr]);vn.setVariableDependencies(Fr,[Nr,Fr]);var Rt=Fr.material.uniforms;Rt.uTime={value:0};Rt.uDeltaTime={value:.016};Rt.textureTarget={value:Ea};Rt.uStiffness={value:Pr};Rt.uDamping={value:xs};Rt.uNoiseStrength={value:0};Rt.uShockwaveCenter={value:Ze.clone()};Rt.uShockwaveForce={value:0};Rt.uShockwaveRadius={value:140*Math.max(1,parseFloat(Lt.dataset.energySpread||"1")||1)};var Ol=vn.init();Ol!==null&&console.error(Ol);var Wt=i=>i*i*(3-2*i),Ln=i=>Math.max(0,Math.min(1,i)),dg=Math.PI*2,Zl=Dr*Ye.spin,$l=Ye.burst+Ye.drift+Ye.reform,fg=dg-Zl-Dr*$l,pg=i=>{let e=(i-Im+Yi)%Yi;if(e<Ye.hold)return la;if(e<Ye.hold+Ye.spin)return la+Dr*(e-Ye.hold);let t=e-Ye.hold-Ye.spin;return la+Zl+Dr*t+fg*Wt(t/$l)},kl=parseFloat(Lt.dataset.energySpread||"1")||1;function mg(i){let e=i,t={energy:0,alpha:1,stiff:Pr,damp:xs,turb:0,shock:0,glow:.5,thresh:.25,label:"Earth"};if(e<Ye.reform){let n=Ln(e/Ye.reform);return t.stiff=Pr*(.9+.9*Wt(n)),t.damp=.08+(xs-.08)*n,t.turb=.3*(1-Wt(Ln(n*2.5))),t.energy=1-Wt(n),t.glow=1.2-.7*n,t.thresh=.18+.07*n,t.alpha=1,t.label="Reform",t}if(e-=Ye.reform,e<Ye.hold)return t.label="Hold",t;if(e-=Ye.hold,e<Ye.spin)return t;if(e-=Ye.spin,e<Ye.burst){let n=e/Ye.burst;return t.shock=.22*kl*Math.sin(Math.PI*Ln(n*1.3)),t.stiff=Pr*(1-Wt(n))*(1-Wt(n)),t.damp=xs-(xs-.05)*Wt(n),t.turb=.9*Wt(Ln((n-.15)/.85)),t.energy=Wt(Ln(n*1.2)),t.glow=.5+.6*Wt(n),t.thresh=.25-.07*Wt(n),t.label="Energy",t}e-=Ye.burst;{let n=Ln(e/Ye.drift);return t.stiff=0,t.damp=.035,t.turb=1.1,t.energy=1,t.shock=.1*(kl-1)*(1-n),t.glow=1.2,t.thresh=.18,t.alpha=1-.45*n,t.label="Energy",t}}var gg=Lt.dataset.dcLabel!=="off",ys=document.createElement("div");ys.className="agp-dc";ys.innerHTML="<i></i><span>Washington, DC</span>";Lt.appendChild(ys);{let i=document.createElement("style");i.textContent='.agp-dc{position:absolute;left:0;top:0;z-index:4;display:flex;align-items:center;gap:9px;pointer-events:none;opacity:0;transform:translate(-9px,-50%);transition:opacity .35s;font-family:Figtree,"Helvetica Neue",Arial,sans-serif;font-weight:600;font-size:clamp(14px,1.25vw,18px);letter-spacing:.04em;color:#fff;text-shadow:0 1px 10px rgba(0,0,0,.9),0 0 24px rgba(0,0,0,.7);white-space:nowrap}.agp-dc.on{opacity:1}.agp-dc i{width:11px;height:11px;border-radius:50%;background:#ffd36a;box-shadow:0 0 0 4px rgba(255,211,106,.28),0 0 18px rgba(255,211,106,.9);animation:agpdc 1.1s ease-in-out infinite}@keyframes agpdc{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.72)}}@media(max-width:760px){.agp-dc{font-size:13px}}',document.head.appendChild(i)}var ua=(()=>{let i=Fm*Math.PI/180,e=Om*Math.PI/180;return new R(Math.cos(i)*Math.sin(e),Math.sin(i),Math.cos(i)*Math.cos(e))})(),_s=new R,da=new R;function _g(i,e,t,n,s,r,a){let o=Math.cos(i),c=Math.sin(i),l=ua.x*Wi*1.01,A=ua.y*Wi*1.01,u=ua.z*Wi*1.01,f=l*o+u*c,p=-l*c+u*o;_s.set(f+Ze.x,A*t-p*n+Ze.y,A*n+p*t+Ze.z);let m=((_s.x-Ze.x)*s+(_s.y-Ze.y)*r+(_s.z-Ze.z)*a)/(Wi*1.01),g=e>.97&&m>.25;g&&(da.copy(_s).project(It),ys.style.transform="translate("+((da.x+1)/2*ni()-9).toFixed(1)+"px,"+((1-da.y)/2*Ji()).toFixed(1)+"px) translateY(-50%)"),ys.classList.toggle("on",g)}var Ql="",zl=new Oi,Hl=0,Ur=new xe,fa=new xe(ga.color),xg=Float32Array.from(Or),pa=Math.cos(Vl),ma=Math.sin(Vl);It.lookAt(Ze);var eA=!0;"IntersectionObserver"in window&&new IntersectionObserver(i=>{eA=i[0].isIntersecting},{threshold:0}).observe(Lt);function tA(){if(requestAnimationFrame(tA),!eA||document.hidden){zl.getDelta();return}let i=Math.min(zl.getDelta(),.05);Hl+=i*Cm;let e=Hl,t=_a!==null?_a:e,n=mg(t%Yi);ei.strength=n.glow,ei.threshold=n.thresh,Rt.uTime.value=e,Rt.uDeltaTime.value=i,Rt.uStiffness.value=n.stiff,Rt.uDamping.value=n.damp,Rt.uNoiseStrength.value=n.turb,Rt.uShockwaveForce.value=n.shock,n.label!==Ql&&(Gm.textContent=n.label,Ql=n.label,Lt.dispatchEvent(new CustomEvent("acuityhero",{detail:{phase:n.label,loopSeconds:Yi}})));let s=Math.max(1,.78/It.aspect),r=(ni()<=760?parseFloat(Lt.dataset.scaleMobile||Lt.dataset.scale||"1"):parseFloat(Lt.dataset.scale||"1"))||1,a=Gl*s*r,o=.1*Math.sin(t*.2);It.position.set(Ze.x+Math.sin(o)*a,Ze.y+22/128*a,Ze.z+Math.cos(o)*a),It.lookAt(Ze),ql.opacity=.85+.15*Math.sin(t*.7),jl.rotation.y=t*.004;let c=pg(t%Yi),l=Math.cos(c),A=Math.sin(c),u=It.position.x-Ze.x,f=It.position.y-Ze.y,p=It.position.z-Ze.z,m=Math.hypot(u,f,p),g=u/m,d=f/m,h=p/m,M=1-n.energy,_=(1-n.energy)*Wt(Ln((t%Yi-Ye.reform*.6)/1.2)),S=t*.12;for(let C=0;C<dt;C++){let b=C*3,H=Xl[C]===Dm,v=Wi*(1+(H?ga.lift*_:0)),w=Mn[b]*v,O=Mn[b+1]*v,W=Mn[b+2]*v,ae=w*l+W*A,U=-w*A+W*l;Lr[C].set(ae+Ze.x,O*pa-U*ma+Ze.y,O*ma+U*pa+Ze.z);let D=gn[b],V=gn[b+1],X=gn[b+2];if(H&&(D+=(fa.r-D)*_,V+=(fa.g-V)*_,X+=(fa.b-X)*_,Or[C]=xg[C]*(1+(ga.scale-1)*_)),n.energy>0){let $=va[C],Ae=.015*Math.sin(S*6+$*12),z=$<.6?.07+$/.6*.06+Ae:.5+($-.6)/.4*.09+Ae;Ur.setHSL(z,.9,.56),D+=(Ur.r-D)*n.energy,V+=(Ur.g-V)*n.energy,X+=(Ur.b-X)*n.energy}xa.setRGB(D,V,X),ji.setColorAt(C,xa);let Y=Lr[C],G=((Y.x-Ze.x)*g+(Y.y-Ze.y)*d+(Y.z-Ze.z)*h)/v,j=1-M*(1-Ln(.55+G*1.6))*.85;Sa[C]=n.alpha*(.75+.25*va[C])*j}gg&&_g(c,M,pa,ma,g,d,h),ji.instanceColor.needsUpdate=!0,Xi.attributes.instanceOpacity.needsUpdate=!0,Xi.attributes.instanceScale.needsUpdate=!0,Ag(),vn.compute();let I=vn.getCurrentRenderTarget(Nr).texture;vs.userData.shader&&(vs.userData.shader.uniforms.texturePosition.value=I,vs.userData.shader.uniforms.gpgpuEnabled.value=1),$n.render(i)}tA();var Mg=()=>{let i=ni(),e=Ji();It.aspect=i/e,Yl(),It.updateProjectionMatrix(),ii.setSize(i,e),$n.setSize(i,e),ei.resolution.set(i,e)};window.addEventListener("resize",Mg);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
