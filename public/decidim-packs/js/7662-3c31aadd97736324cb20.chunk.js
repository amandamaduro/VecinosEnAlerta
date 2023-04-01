"use strict";(self.webpackChunktavarandu=self.webpackChunktavarandu||[]).push([[7662],{50045:function(e,t,n){n.d(t,{C:function(){return i},P:function(){return o},R:function(){return a}});var r=Object.defineProperty,s=(e,t)=>r(e,"name",{value:t,configurable:!0});class i{constructor(e){this.getStartOfToken=()=>this._start,this.getCurrentPosition=()=>this._pos,this.eol=()=>this._sourceText.length===this._pos,this.sol=()=>0===this._pos,this.peek=()=>this._sourceText.charAt(this._pos)?this._sourceText.charAt(this._pos):null,this.next=()=>{const e=this._sourceText.charAt(this._pos);return this._pos++,e},this.eat=e=>{if(this._testNextCharacter(e))return this._start=this._pos,this._pos++,this._sourceText.charAt(this._pos-1)},this.eatWhile=e=>{let t=this._testNextCharacter(e),n=!1;for(t&&(n=t,this._start=this._pos);t;)this._pos++,t=this._testNextCharacter(e),n=!0;return n},this.eatSpace=()=>this.eatWhile(/[\s\u00a0]/),this.skipToEnd=()=>{this._pos=this._sourceText.length},this.skipTo=e=>{this._pos=e},this.match=(e,t=!0,n=!1)=>{let r=null,s=null;if("string"===typeof e){s=new RegExp(e,n?"i":"g").test(this._sourceText.substr(this._pos,e.length)),r=e}else e instanceof RegExp&&(s=this._sourceText.slice(this._pos).match(e),r=null===s||void 0===s?void 0:s[0]);return!(null==s||!("string"===typeof e||s instanceof Array&&this._sourceText.startsWith(s[0],this._pos)))&&(t&&(this._start=this._pos,r&&r.length&&(this._pos+=r.length)),s)},this.backUp=e=>{this._pos-=e},this.column=()=>this._pos,this.indentation=()=>{const e=this._sourceText.match(/\s*/);let t=0;if(e&&0!==e.length){const n=e[0];let r=0;for(;n.length>r;)9===n.charCodeAt(r)?t+=2:t++,r++}return t},this.current=()=>this._sourceText.slice(this._start,this._pos),this._start=0,this._pos=0,this._sourceText=e}_testNextCharacter(e){const t=this._sourceText.charAt(this._pos);let n=!1;return n="string"===typeof e?t===e:e instanceof RegExp?e.test(t):e(t),n}}s(i,"CharacterStream");class a{constructor(e,t){this.containsPosition=e=>this.start.line===e.line?this.start.character<=e.character:this.end.line===e.line?this.end.character>=e.character:this.start.line<=e.line&&this.end.line>=e.line,this.start=e,this.end=t}setStart(e,t){this.start=new o(e,t)}setEnd(e,t){this.end=new o(e,t)}}s(a,"Range");class o{constructor(e,t){this.lessThanOrEqualTo=e=>this.line<e.line||this.line===e.line&&this.character<=e.character,this.line=e,this.character=t}setLine(e){this.line=e}setCharacter(e){this.character=e}}s(o,"Position")},67662:function(e,t,n){n.r(t);var r=n(97480),s=n(52877),i=n(77990),a=n(69538),o=n(93201),l=n(22618),c=n(53274),u=n(25580),h=n(84873),p=n(96300),d=n(34800),f=n(42266),v=n(92767),g=n(24196),m=n(81294),_=n(88081),y=n(5311),S=n(24635),k=n(97359),x=n(73486),C=n(84275),T=n(28087),R=n(15394),w=(n(59361),n(50045)),b=n(98007),A=(n(78265),n(73935),Object.defineProperty),P=(e,t)=>A(e,"name",{value:t,configurable:!0});const L=[s.t,i.q,a.P,o.L,l.y,c.o,u.I,h.J,p.k,d.g,f.L,v.P];function E(e,t,n,r,s){const i=g.i.filter((e=>e!==m.J&&e!==_.i&&(!r||e!==y.a)));n&&Array.prototype.push.apply(i,n),s&&Array.prototype.push.apply(i,L);return(0,S.Gu)(e,t,i).filter((e=>{if(-1!==e.message.indexOf("Unknown directive")&&e.nodes){const t=e.nodes[0];if(t&&t.kind===k.h.DIRECTIVE){const e=t.name.value;if("arguments"===e||"argumentDefinitions"===e)return!1}}return!0}))}P(E,"validateWithCustomRules");const O={["Error"]:1,["Warning"]:2,["Information"]:3,["Hint"]:4},Q=P(((e,t)=>{if(!e)throw new Error(t)}),"invariant");function W(e,t=null,n,r,s){var i,a;let o=null;s&&(e+="string"===typeof s?"\n\n"+s:"\n\n"+s.reduce(((e,t)=>e+=(0,x.S)(t)+"\n\n"),""));try{o=(0,C.Qc)(e)}catch(l){if(l instanceof T.__){const t=D(null!==(a=null===(i=l.locations)||void 0===i?void 0:i[0])&&void 0!==a?a:{line:0,column:0},e);return[{severity:O.Error,message:l.message,source:"GraphQL: Syntax",range:t}]}throw l}return G(o,t,n,r)}function G(e,t=null,n,r){if(!t)return[];const s=I(E(t,e,n,r),(e=>j(e,O.Error,"Validation"))),i=I((0,S.Gu)(t,e,[R.r]),(e=>j(e,O.Warning,"Deprecation")));return s.concat(i)}function I(e,t){return Array.prototype.concat.apply([],e.map(t))}function j(e,t,n){if(!e.nodes)return[];const r=[];return e.nodes.forEach((s=>{const i="Variable"!==s.kind&&"name"in s&&void 0!==s.name?s.name:"variable"in s&&void 0!==s.variable?s.variable:s;if(i){Q(e.locations,"GraphQL validation error requires locations.");const s=e.locations[0],a=N(i),o=s.column+(a.end-a.start);r.push({source:`GraphQL: ${n}`,message:e.message,severity:t,range:new w.R(new w.P(s.line-1,s.column-1),new w.P(s.line-1,o))})}})),r}function D(e,t){const n=(0,b.o)(),r=n.startState(),s=t.split("\n");Q(s.length>=e.line,"Query text must have more lines than where the error happened");let i=null;for(let c=0;c<e.line;c++)for(i=new w.C(s[c]);!i.eol();){if("invalidchar"===n.token(i,r))break}Q(i,"Expected Parser stream to be available.");const a=e.line-1,o=i.getStartOfToken(),l=i.getCurrentPosition();return new w.R(new w.P(a,o),new w.P(a,l))}function N(e){const t=e.loc;return Q(t,"Expected ASTNode to have a location."),t}P(W,"getDiagnostics"),P(G,"validateQuery"),P(I,"mapCat"),P(j,"annotations"),P(D,"getRange"),P(N,"getLocation");const q=["error","warning","information","hint"],U={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};r.C.registerHelper("lint","graphql",((e,t)=>W(e,t.schema,t.validationRules,void 0,t.externalFragments).map((e=>({message:e.message,severity:e.severity?q[e.severity-1]:q[0],type:e.source?U[e.source]:void 0,from:r.C.Pos(e.range.start.line,e.range.start.character),to:r.C.Pos(e.range.end.line,e.range.end.character)})))))},98007:function(e,t,n){n.d(t,{o:function(){return o}});var r=n(59361),s=n(97359),i=Object.defineProperty,a=(e,t)=>i(e,"name",{value:t,configurable:!0});function o(e={eatWhitespace:e=>e.eatWhile(r.i),lexRules:r.L,parseRules:r.P,editorConfig:{}}){return{startState(){const t={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeparator:!1,prevState:null};return h(e.parseRules,t,s.h.DOCUMENT),t},token(t,n){return l(t,n,e)}}}function l(e,t,n){var r;if(t.inBlockstring)return e.match(/.*"""/)?(t.inBlockstring=!1,"string"):(e.skipToEnd(),"string");const{lexRules:s,parseRules:i,eatWhitespace:a,editorConfig:o}=n;if(t.rule&&0===t.rule.length?p(t):t.needsAdvance&&(t.needsAdvance=!1,d(t,!0)),e.sol()){const n=(null===o||void 0===o?void 0:o.tabSize)||2;t.indentLevel=Math.floor(e.indentation()/n)}if(a(e))return"ws";const l=g(s,e);if(!l){return e.match(/\S+/)||e.match(/\s/),h(u,t,"Invalid"),"invalidchar"}if("Comment"===l.kind)return h(u,t,"Comment"),"comment";const f=c({},t);if("Punctuation"===l.kind)if(/^[{([]/.test(l.value))void 0!==t.indentLevel&&(t.levels=(t.levels||[]).concat(t.indentLevel+1));else if(/^[})\]]/.test(l.value)){const e=t.levels=(t.levels||[]).slice(0,-1);t.indentLevel&&e.length>0&&e[e.length-1]<t.indentLevel&&(t.indentLevel=e[e.length-1])}for(;t.rule;){let n="function"===typeof t.rule?0===t.step?t.rule(l,e):null:t.rule[t.step];if(t.needsSeparator&&(n=null===n||void 0===n?void 0:n.separator),n){if(n.ofRule&&(n=n.ofRule),"string"===typeof n){h(i,t,n);continue}if(null===(r=n.match)||void 0===r?void 0:r.call(n,l))return n.update&&n.update(t,l),"Punctuation"===l.kind?d(t,!0):t.needsAdvance=!0,n.style}v(t)}return c(t,f),h(u,t,"Invalid"),"invalidchar"}function c(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r++)e[n[r]]=t[n[r]];return e}a(o,"onlineParser"),a(l,"getToken"),a(c,"assign");const u={Invalid:[],Comment:[]};function h(e,t,n){if(!e[n])throw new TypeError("Unknown rule: "+n);t.prevState=Object.assign({},t),t.kind=n,t.name=null,t.type=null,t.rule=e[n],t.step=0,t.needsSeparator=!1}function p(e){e.prevState&&(e.kind=e.prevState.kind,e.name=e.prevState.name,e.type=e.prevState.type,e.rule=e.prevState.rule,e.step=e.prevState.step,e.needsSeparator=e.prevState.needsSeparator,e.prevState=e.prevState.prevState)}function d(e,t){var n;if(f(e)&&e.rule){const n=e.rule[e.step];if(n.separator){const t=n.separator;if(e.needsSeparator=!e.needsSeparator,!e.needsSeparator&&t.ofRule)return}if(t)return}for(e.needsSeparator=!1,e.step++;e.rule&&!(Array.isArray(e.rule)&&e.step<e.rule.length);)p(e),e.rule&&(f(e)?(null===(n=e.rule)||void 0===n?void 0:n[e.step].separator)&&(e.needsSeparator=!e.needsSeparator):(e.needsSeparator=!1,e.step++))}function f(e){const t=Array.isArray(e.rule)&&"string"!==typeof e.rule[e.step]&&e.rule[e.step];return t&&t.isList}function v(e){for(;e.rule&&(!Array.isArray(e.rule)||!e.rule[e.step].ofRule);)p(e);e.rule&&d(e,!1)}function g(e,t){const n=Object.keys(e);for(let r=0;r<n.length;r++){const s=t.match(e[n[r]]);if(s&&s instanceof Array)return{kind:n[r],value:s[0]}}}a(h,"pushRule"),a(p,"popRule"),a(d,"advanceRule"),a(f,"isList"),a(v,"unsuccessful"),a(g,"lex")}}]);
//# sourceMappingURL=7662-3c31aadd97736324cb20.chunk.js.map