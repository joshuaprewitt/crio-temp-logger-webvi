"use strict";!function(e){e.BigNumber=function(e,r,t){var i,n=this;if(e instanceof BigNumber){for(i in{precision:0,roundType:0,_s:0,_f:0})n[i]=e[i];return n._d=e._d.slice(),void(e._s&&1===e._d.length&&0===e._d[0]&&(n._s=!1))}if(void 0!==e&&("-0"===e&&(e="0"),new RegExp(/e/i).test(e))){var s=e.toString().toLowerCase(),_=s.indexOf("e"),o=new BigNumber(s.slice(0,_)),u=s.slice(_+2),a=s.slice(_+1,_+2),h=new BigNumber(10),f=h.pow(a+u),g=o.multiply(f);e=g.toString()}for(n.precision=isNaN(r=Math.abs(r))?BigNumber.defaultPrecision:r,n.roundType=isNaN(t=Math.abs(t))?BigNumber.defaultRoundType:t,n._s="-"==(e+="").charAt(0),n._f=((e=e.replace(/[^\d.]/g,"").split(".",2))[0]=e[0].replace(/^0+/,"")||"0").length,i=(e=n._d=(e.join("")||"0").split("")).length;i;e[--i]=+e[i]);n.round()};var r=BigNumber,t=BigNumber.prototype;r.ROUND_HALF_EVEN=(r.ROUND_HALF_DOWN=(r.ROUND_HALF_UP=(r.ROUND_FLOOR=(r.ROUND_CEIL=(r.ROUND_DOWN=(r.ROUND_UP=0)+1)+1)+1)+1)+1)+1,r.defaultPrecision=40,r.defaultRoundType=r.ROUND_HALF_UP,t.add=function(e){if(this.isZero()&&this._s&&(this._s=!1),0===e||e.constructor===BigNumber&&1===e._d.length&&0===e._d[0])return new BigNumber(this);if(this._s!=(e=new BigNumber(e))._s)return e._s^=1,this.subtract(e);var r,t,i=new BigNumber(this),n=i._d,s=e._d,_=i._f,o=e._f;for(e=Math.max(_,o),_!=o&&((o=_-o)>0?i._zeroes(s,o,1):i._zeroes(n,-o,1)),r=(_=n.length)==(o=s.length)?n.length:((o=_-o)>0?i._zeroes(s,o):i._zeroes(n,-o)).length,t=0;r;t=(n[--r]=n[r]+s[r]+t)/10>>>0,n[r]%=10);return t&&++e&&n.unshift(t),i._f=e,i.round()},t.subtract=function(e){if(this.isZero()&&this._s&&(this._s=!1),0===e||e.constructor===BigNumber&&1===e._d.length&&0===e._d[0])return new BigNumber(this);if(this._s!=(e=new BigNumber(e))._s)return e._s^=1,this.add(e);var r,t,i=new BigNumber(this),n=i.abs().compare(e.abs())+1,s=n?i:e,_=n?e:i,o=s._f,u=_._f,a=o;for(s=s._d,_=_._d,o!=u&&((u=o-u)>0?i._zeroes(_,u,1):i._zeroes(s,-u,1)),r=(o=s.length)==(u=_.length)?s.length:((u=o-u)>0?i._zeroes(_,u):i._zeroes(s,-u)).length;r;){if(s[--r]<_[r]){for(t=r;t&&!s[--t];s[t]=9);--s[t],s[r]+=10}_[r]=s[r]-_[r]}return n||(i._s^=1),i._f=a,i._d=_,i.round()},t.multiply=function(e){var r,t,i,n=new BigNumber(this),s=n._d.length>=(e=new BigNumber(e))._d.length,_=(s?n:e)._d,o=(s?e:n)._d,u=_.length,a=o.length,h=new BigNumber;for(r=a;r;s&&i.unshift(s),h.set(h.add(new BigNumber(i.join("")))))for(i=new Array(a- --r).join("0").split(""),s=0,t=u;t;s+=_[--t]*o[r],i.unshift(s%10),s=s/10>>>0);return n._s=n._s!=e._s,n._f=((s=u+a-n._f-e._f)>=(t=(n._d=h._d).length)?this._zeroes(n._d,s-t+1,1).length:t)-s,n.round()},t.divide=function(e){if("0"==(e=new BigNumber(e)))throw new Error("Division by 0");if("0"==this)return new BigNumber;var r,t,i,n=new BigNumber(this),s=n._d,_=e._d,o=s.length-n._f,u=_.length-e._f,a=new BigNumber,h=0,f=1,g=0,d=0;for(a._s=n._s!=e._s,a.precision=Math.max(n.precision,e.precision),a._f=+a._d.pop(),o!=u&&n._zeroes(o>u?_:s,Math.abs(o-u)),e._f=_.length,_=e,_._s=!1,_=_.round(),e=new BigNumber;"0"==s[0];s.shift());e:do{for(i=g=0,"0"==e&&(e._d=[],e._f=0);h<s.length&&-1==e.compare(_);++h){if(i=h+1==s.length,(!f&&++g>1||(d=i&&"0"==e&&"0"==s[h]))&&(a._f==a._d.length&&++a._f,a._d.push(0)),"0"==s[h]&&"0"==e||(e._d.push(s[h]),++e._f),d)break e;if(i&&-1==e.compare(_)&&(a._f==a._d.length&&++a._f,1)||(i=0))for(;a._d.push(0),e._d.push(0),++e._f,-1==e.compare(_););}if(f=0,-1==e.compare(_)&&!(i=0))for(;i?a._d.push(0):i=1,e._d.push(0),++e._f,-1==e.compare(_););var c;for(t=new BigNumber,r=0;e.compare(c=t.add(_))+1&&++r;t.set(c));e.set(e.subtract(t)),!i&&a._f==a._d.length&&++a._f,a._d.push(r)}while((h<s.length||"0"!=e)&&a._d.length-a._f<=a.precision);return a.round()},t.mod=function(e){var r=this.subtract(this.divide(e).intPart().multiply(e));return r.isZero()&&r._s&&(r._s=!r._s),r},t.pow=function(e){var r,t=new BigNumber(this);if(0==(e=new BigNumber(e).intPart()))return t.set(1);for(r=Math.abs(e);--r;t.set(t.multiply(this)));return 0>e?t.set(new BigNumber(1).divide(t)):t},t.set=function(e){return this.constructor(e),this},t.compare=function(e){var r,t,i,n=this,s=this._f,_=new BigNumber(e),o=_._f,u=[-1,1];if(n.isZero()&&_.isZero())return 0;if(n._s!=_._s)return n._s?-1:1;if(s!=o)return u[s>o^n._s];for(s=(i=n._d).length,o=(_=_._d).length,r=-1,t=Math.min(s,o);++r<t;)if(i[r]!=_[r])return u[i[r]>_[r]^n._s];return s!=o?u[s>o^n._s]:0},t.negate=function(){var e=new BigNumber(this);return e._s^=1,e},t.abs=function(){var e=new BigNumber(this);return e._s=0,e},t.intPart=function(){return new BigNumber((this._s?"-":"")+(this._d.slice(0,this._f).join("")||"0"))},t.valueOf=t.toString=function(e,r){function t(e,r,t){var i="";if(String.prototype.repeat){var n="0".repeat(t-e.length);e=n+e}for(;e.length<t;)e="0"+e;i=e.replace(/0/g,"a"),i=i.replace(/1/g,"b"),i=i.replace(/a/g,"1"),i=i.replace(/b/g,"0");for(var s=!0,_="",o=i.length-1;o>=0;o--){var u,a=i.charAt(o);"0"===a?s===!0?(u="1",s=!1):u="0":u=s===!0?"0":"1",_=u+""+_}switch(r){case 2:return _;case 8:var h,f;switch(t){case 8:h=3,f="0";break;case 16:h=6,f="00";break;case 32:h=11,f="0";break;case 64:h=22,f="00"}_=f+_;for(var g="",d=h;d>=1;d--){var c=_[3*d-3]+""+_[3*d-2]+_[3*d-1];g=parseInt(c,2).toString(8)+""+g}return g;case 16:var l;switch(t){case 8:l=2;break;case 16:l=4;break;case 32:l=8;break;case 64:l=16}for(var p="",b=l;b>=1;b--){var m=_[4*b-4]+""+_[4*b-3]+_[4*b-2]+_[4*b-1];p=parseInt(m,2).toString(16)+""+p}return p.toUpperCase()}}function i(e){var r,t,i=new BigNumber(2),n=[];t=void 0===e?o:e;do r=t.mod(i),n.push(r.toString()),t=t.subtract(r).divide(i).intPart();while(1===t.compare(new BigNumber(0)));return n.reverse().join("")}function n(e){for(var r="";e.length%3!==0;)e="0"+e;for(var t=e.length/3;t>=1;t--){var i=e[3*t-3]+""+e[3*t-2]+e[3*t-1];r=parseInt(i,2).toString(8)+""+r}return r}function s(e){for(var r="";e.length%4!==0;)e="0"+e;for(var t=e.length/4;t>=1;t--){var i=e[4*t-4]+""+e[4*t-3]+e[4*t-2]+e[4*t-1];r=parseInt(i,2).toString(16)+""+r}return r}var _,o=this,u=(o._s?"-":"")+(o._d.slice(0,o._f).join("")||"0")+(o._f!=o._d.length?"."+o._d.slice(o._f).join(""):"");if(void 0===e&&(e=10),10===e)return u;if(this.compare(0)>-1)switch(e){case 2:_=i();break;case 8:_=n(i());break;case 16:_=s(i()).toUpperCase()}else{var a=o.negate(),h=i(a);_=t(h,e,r)}return _},t._zeroes=function(e,r,t){var i=["push","unshift"][t||0];for(++r;--r;e[i](0));return e},t.round=function(){if("_rounding"in this)return this;var e,r,t,i,n=BigNumber,s=this.roundType,_=this._d;for(this._rounding=!0;this._f>1&&!_[0];--this._f,_.shift());for(e=this._f,r=this.precision+e,t=_[r];_.length>e&&!_[_.length-1];_.pop());return i=(this._s?"-":"")+(r-e?"0."+this._zeroes([],r-e-1).join(""):"")+1,_.length>r&&(t&&(s==n.DOWN?!1:s==n.UP?!0:s==n.CEIL?!this._s:s==n.FLOOR?this._s:s==n.HALF_UP?t>=5:s==n.HALF_DOWN?t>5:s==n.HALF_EVEN?t>=5&&1&_[r-1]:!1)&&this.add(i),_.splice(r,_.length-r)),delete this._rounding,this},t.isZero=function(){return 1===this._d.length&&0===this._d[0]}}(window);