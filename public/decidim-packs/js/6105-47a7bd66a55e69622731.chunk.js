"use strict";(self.webpackChunktavarandu=self.webpackChunktavarandu||[]).push([[6105],{26105:function(e,t,n){n.r(t),n.d(t,{a:function(){return l},s:function(){return s}});var r=n(97480),i=Object.defineProperty,o=(e,t)=>i(e,"name",{value:t,configurable:!0});function c(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}o(c,"_mergeNamespaces");var l={exports:{}};!function(e){var t,n,r=e.Pos;function i(e){var t=e.flags;return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}function c(e,t){for(var n=i(e),r=n,o=0;o<t.length;o++)-1==r.indexOf(t.charAt(o))&&(r+=t.charAt(o));return n==r?e:new RegExp(e.source,r)}function l(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function h(e,t,n){t=c(t,"g");for(var i=n.line,o=n.ch,l=e.lastLine();i<=l;i++,o=0){t.lastIndex=o;var h=e.getLine(i),s=t.exec(h);if(s)return{from:r(i,s.index),to:r(i,s.index+s[0].length),match:s}}}function s(e,t,n){if(!l(t))return h(e,t,n);t=c(t,"gm");for(var i,o=1,s=n.line,a=e.lastLine();s<=a;){for(var f=0;f<o&&!(s>a);f++){var u=e.getLine(s++);i=null==i?u:i+"\n"+u}o*=2,t.lastIndex=n.ch;var g=t.exec(i);if(g){var p=i.slice(0,g.index).split("\n"),d=g[0].split("\n"),v=n.line+p.length-1,m=p[p.length-1].length;return{from:r(v,m),to:r(v+d.length-1,1==d.length?m+d[0].length:d[d.length-1].length),match:g}}}}function a(e,t,n){for(var r,i=0;i<=e.length;){t.lastIndex=i;var o=t.exec(e);if(!o)break;var c=o.index+o[0].length;if(c>e.length-n)break;(!r||c>r.index+r[0].length)&&(r=o),i=o.index+1}return r}function f(e,t,n){t=c(t,"g");for(var i=n.line,o=n.ch,l=e.firstLine();i>=l;i--,o=-1){var h=e.getLine(i),s=a(h,t,o<0?0:h.length-o);if(s)return{from:r(i,s.index),to:r(i,s.index+s[0].length),match:s}}}function u(e,t,n){if(!l(t))return f(e,t,n);t=c(t,"gm");for(var i,o=1,h=e.getLine(n.line).length-n.ch,s=n.line,u=e.firstLine();s>=u;){for(var g=0;g<o&&s>=u;g++){var p=e.getLine(s--);i=null==i?p:p+"\n"+i}o*=2;var d=a(i,t,h);if(d){var v=i.slice(0,d.index).split("\n"),m=d[0].split("\n"),x=s+v.length,L=v[v.length-1].length;return{from:r(x,L),to:r(x+m.length-1,1==m.length?L+m[0].length:m[m.length-1].length),match:d}}}}function g(e,t,n,r){if(e.length==t.length)return n;for(var i=0,o=n+Math.max(0,e.length-t.length);;){if(i==o)return i;var c=i+o>>1,l=r(e.slice(0,c)).length;if(l==n)return c;l>n?o=c:i=c+1}}function p(e,i,o,c){if(!i.length)return null;var l=c?t:n,h=l(i).split(/\r|\n\r?/);e:for(var s=o.line,a=o.ch,f=e.lastLine()+1-h.length;s<=f;s++,a=0){var u=e.getLine(s).slice(a),p=l(u);if(1==h.length){var d=p.indexOf(h[0]);if(-1==d)continue e;return o=g(u,p,d,l)+a,{from:r(s,g(u,p,d,l)+a),to:r(s,g(u,p,d+h[0].length,l)+a)}}var v=p.length-h[0].length;if(p.slice(v)==h[0]){for(var m=1;m<h.length-1;m++)if(l(e.getLine(s+m))!=h[m])continue e;var x=e.getLine(s+h.length-1),L=l(x),O=h[h.length-1];if(L.slice(0,O.length)==O)return{from:r(s,g(u,p,v,l)+a),to:r(s+h.length-1,g(x,L,O.length,l))}}}}function d(e,i,o,c){if(!i.length)return null;var l=c?t:n,h=l(i).split(/\r|\n\r?/);e:for(var s=o.line,a=o.ch,f=e.firstLine()-1+h.length;s>=f;s--,a=-1){var u=e.getLine(s);a>-1&&(u=u.slice(0,a));var p=l(u);if(1==h.length){var d=p.lastIndexOf(h[0]);if(-1==d)continue e;return{from:r(s,g(u,p,d,l)),to:r(s,g(u,p,d+h[0].length,l))}}var v=h[h.length-1];if(p.slice(0,v.length)==v){var m=1;for(o=s-h.length+1;m<h.length-1;m++)if(l(e.getLine(o+m))!=h[m])continue e;var x=e.getLine(s+1-h.length),L=l(x);if(L.slice(L.length-h[0].length)==h[0])return{from:r(s+1-h.length,g(x,L,x.length-h[0].length,l)),to:r(s,g(u,p,v.length,l))}}}}function v(e,t,n,i){var o;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==typeof i?o=i.caseFold:(o=i,i=null),"string"==typeof t?(null==o&&(o=!1),this.matches=function(n,r){return(n?d:p)(e,t,r,o)}):(t=c(t,"gm"),i&&!1===i.multiline?this.matches=function(n,r){return(n?f:h)(e,t,r)}:this.matches=function(n,r){return(n?u:s)(e,t,r)})}o(i,"regexpFlags"),o(c,"ensureFlags"),o(l,"maybeMultiline"),o(h,"searchRegexpForward"),o(s,"searchRegexpForwardMultiline"),o(a,"lastMatchIn"),o(f,"searchRegexpBackward"),o(u,"searchRegexpBackwardMultiline"),String.prototype.normalize?(t=o((function(e){return e.normalize("NFD").toLowerCase()}),"doFold"),n=o((function(e){return e.normalize("NFD")}),"noFold")):(t=o((function(e){return e.toLowerCase()}),"doFold"),n=o((function(e){return e}),"noFold")),o(g,"adjustPos"),o(p,"searchStringForward"),o(d,"searchStringBackward"),o(v,"SearchCursor"),v.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(n=r(n.line,n.ch),t?(n.ch--,n.ch<0&&(n.line--,n.ch=(this.doc.getLine(n.line)||"").length)):(n.ch++,n.ch>(this.doc.getLine(n.line)||"").length&&(n.ch=0,n.line++)),0!=e.cmpPos(n,this.doc.clipPos(n))))return this.atOccurrence=!1;var i=this.matches(t,n);if(this.afterEmptyMatch=i&&0==e.cmpPos(i.from,i.to),i)return this.pos=i,this.atOccurrence=!0,this.pos.match||!0;var o=r(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:o,to:o},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var i=e.splitLines(t);this.doc.replaceRange(i,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+i.length-1,i[i.length-1].length+(1==i.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new v(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new v(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],i=this.getSearchCursor(t,this.getCursor("from"),n);i.findNext()&&!(e.cmpPos(i.to(),this.getCursor("to"))>0);)r.push({anchor:i.from(),head:i.to()});r.length&&this.setSelections(r,0)}))}(r.a.exports);var h=l.exports,s=Object.freeze(c({__proto__:null,[Symbol.toStringTag]:"Module",default:h},[l.exports]))}}]);
//# sourceMappingURL=6105-47a7bd66a55e69622731.chunk.js.map