import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{ao as X,ap as oe,aq as ve,ad as ee,Z as y,$ as P,ai as ae,ac as Q,_ as $,U as ie,a0 as D,V as fe,W as de,g as T,n as ue,af as ce,ag as K,a5 as H,a6 as _e,ah as re,aa as te,k as he,w as me,s as j,ar as O,h as F,as as pe,at as ge,au as ye,a9 as we,av as be,aw as ke,ax as xe,ay as Ee,a3 as Ae,az as Ie,aA as Se,j as Te,aB as Ne,a as $e,ak as qe,f as Me,Q as Re,F as q,I as w,J as g,G as U,K as p,aC as Ce,e as Le,aD as De,E as He,H as Oe}from"../chunks/Rg0kMFwf.js";import{d as Be,l as Ve,c as We,a as E,t as A,s as Y,e as Ge,f as Pe}from"../chunks/BUiWog3g.js";import{p as G}from"../chunks/Ca2sVoXs.js";function Qe(a,e,r){y&&P();var t=a,n=ie,s,l=X()?oe:ve;ee(()=>{l(n,n=e())&&(s&&ae(s),s=Q(()=>r(t)))}),y&&(t=$)}function Ue(a,e){return e}function Ye(a,e,r,t){for(var n=[],s=e.length,l=0;l<s;l++)ye(e[l].e,n,!0);var d=s>0&&n.length===0&&r!==null;if(d){var h=r.parentNode;we(h),h.append(r),t.clear(),S(a,e[0].prev,e[s-1].next)}be(n,()=>{for(var _=0;_<s;_++){var v=e[_];d||(t.delete(v.k),S(a,v.prev,v.next)),ke(v.e,!d)}})}function ze(a,e,r,t,n,s=null){var l=a,d={items:new Map,first:null};{var h=a;l=y?D(fe(h)):h.appendChild(de())}y&&P();var _=null,v=!1,u=ue(()=>{var o=r();return he(o)?o:o==null?[]:te(o)});ee(()=>{var o=T(u),i=o.length;if(v&&i===0)return;v=i===0;let f=!1;if(y){var b=l.data===ce;b!==(i===0)&&(l=K(),D(l),H(!1),f=!0)}if(y){for(var k=null,c,m=0;m<i;m++){if($.nodeType===8&&$.data===_e){l=$,f=!0,H(!1);break}var R=o[m],N=t(R,m);c=ne($,d,k,null,R,N,m,n,e,r),d.items.set(N,c),k=c}i>0&&D(K())}y||Ke(o,d,l,n,e,t,r),s!==null&&(i===0?_?re(_):_=Q(()=>s(l)):_!==null&&ae(_,()=>{_=null})),f&&H(!0),T(u)}),y&&(l=$)}function Ke(a,e,r,t,n,s,l){var d=a.length,h=e.items,_=e.first,v=_,u,o=null,i=[],f=[],b,k,c,m;for(m=0;m<d;m+=1){if(b=a[m],k=s(b,m),c=h.get(k),c===void 0){var R=v?v.e.nodes_start:r;o=ne(R,e,o,o===null?e.first:o.next,b,k,m,t,n,l),h.set(k,o),i=[],f=[],v=o.next;continue}if(je(c,b,m),c.e.f&O&&re(c.e),c!==v){if(u!==void 0&&u.has(c)){if(i.length<f.length){var N=f[0],I;o=N.prev;var z=i[0],C=i[i.length-1];for(I=0;I<i.length;I+=1)Z(i[I],N,r);for(I=0;I<f.length;I+=1)u.delete(f[I]);S(e,z.prev,C.next),S(e,o,z),S(e,C,N),v=N,o=C,m-=1,i=[],f=[]}else u.delete(c),Z(c,v,r),S(e,c.prev,c.next),S(e,c,o===null?e.first:o.next),S(e,o,c),o=c;continue}for(i=[],f=[];v!==null&&v.k!==k;)v.e.f&O||(u??(u=new Set)).add(v),f.push(v),v=v.next;if(v===null)continue;c=v}i.push(c),o=c,v=c.next}if(v!==null||u!==void 0){for(var L=u===void 0?[]:te(u);v!==null;)v.e.f&O||L.push(v),v=v.next;var se=L.length;if(se>0){var le=d===0?r:null;Ye(e,L,le,h)}}F.first=e.first&&e.first.e,F.last=o&&o.e}function je(a,e,r,t){ge(a.v,e),a.i=r}function ne(a,e,r,t,n,s,l,d,h,_){var v=(h&xe)!==0,u=(h&Ee)===0,o=v?u?me(n):j(n):n,i=h&pe?j(l):l,f={i,v:o,k:s,a:null,e:null,prev:r,next:t};try{return f.e=Q(()=>d(a,o,i,_),y),f.e.prev=r&&r.e,f.e.next=t&&t.e,r===null?e.first=f:(r.next=f,r.e.next=f.e),t!==null&&(t.prev=f,t.e.prev=f.e),f}finally{}}function Z(a,e,r){for(var t=a.next?a.next.e.nodes_start:r,n=e?e.e.nodes_start:r,s=a.e.nodes_start;s!==t;){var l=Ae(s);n.before(s),s=l}}function S(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Fe(a,e,r,t,n){var d;y&&P();var s=(d=e.$$slots)==null?void 0:d[r],l=!1;s===!0&&(s=e.children,l=!0),s===void 0||s(a,l?()=>t:t)}function Ze(a){if(y){var e=!1,r=()=>{if(!e){if(e=!0,a.hasAttribute("value")){var t=a.value;M(a,"value",null),a.value=t}if(a.hasAttribute("checked")){var n=a.checked;M(a,"checked",null),a.checked=n}}};a.__on_r=r,Ie(r),Be()}}function M(a,e,r,t){var n=a.__attributes??(a.__attributes={});y&&(n[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||n[e]!==(n[e]=r)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Se]=r),r==null?a.removeAttribute(e):typeof r!="string"&&Je(a).includes(e)?a[e]=r:a.setAttribute(e,r))}var J=new Map;function Je(a){var e=J.get(a.nodeName);if(e)return e;J.set(a.nodeName,e=[]);for(var r,t=a,n=Element.prototype;n!==t;){r=Ne(t);for(var s in r)r[s].set&&e.push(s);t=Te(t)}return e}function Xe(a,e,r=e){var t=X();Ve(a,"input",n=>{var s=n?a.defaultValue:a.value;if(s=B(a)?V(s):s,r(s),t&&s!==(s=e())){var l=a.selectionStart,d=a.selectionEnd;a.value=s??"",d!==null&&(a.selectionStart=l,a.selectionEnd=Math.min(d,a.value.length))}}),(y&&a.defaultValue!==a.value||$e(e)==null&&a.value)&&r(B(a)?V(a.value):a.value),qe(()=>{var n=e();B(a)&&n===V(a.value)||a.type==="date"&&!n&&!a.value||n!==a.value&&(a.value=n??"")})}function B(a){var e=a.type;return e==="number"||e==="range"}function V(a){return a===""?null:+a}function ea(a,e,r){var t=Me(a,e);t&&t.set&&(a[e]=r,Re(()=>{a[e]=null}))}const aa=!0,ga=Object.freeze(Object.defineProperty({__proto__:null,prerender:aa},Symbol.toStringTag,{value:"Module"}));var ra=A('<td class="svelte-1jp6y4c"><h2 class="header-child svelte-1jp6y4c"><a> </a></h2></td>'),ta=A('<header class="header svelte-1jp6y4c" data-sveltekit-reload=""><table class="svelte-1jp6y4c"><thead><tr></tr></thead></table></header>');function na(a){let e=[{name:"󱂵 /home",url:"/"},{name:"󰖟 /website",url:"https://morgane.dev"},{name:"󱅻 /about",url:"https://morgane.dev/about"}],r=0;var t=We(),n=q(t);Qe(n,()=>r,s=>{var l=ta(),d=w(l),h=w(d),_=w(h);ze(_,5,()=>e,Ue,(v,u)=>{var o=ra(),i=w(o),f=w(i),b=w(f,!0);g(f),g(i),g(o),U(()=>{M(o,"style",`width: ${e.length??""}%`),M(f,"href",T(u).url),Y(b,T(u).name)}),E(v,o)}),g(_),g(h),g(d),g(l),E(s,l)}),E(a,t)}var sa=A('<div class="parent svelte-1ojv27m"><h2> </h2> <hr> <div class="container svelte-1ojv27m"><!></div></div>');function W(a,e){let r=G(e,"name",8);var t=sa(),n=w(t),s=w(n,!0);g(n);var l=p(n,4),d=w(l);Fe(d,e,"default",{}),g(l),g(t),U(()=>Y(s,r())),E(a,t)}var la=A("<p> <a> </a></p>");function x(a,e){let r=G(e,"name",8),t=G(e,"url",8);var n=la(),s=p(w(n)),l=w(s,!0);g(s),g(n),U(()=>{M(s,"href",t()),Y(l,r())}),E(a,n)}var oa=A('<center><div class="form__group field parent svelte-15edawm"><input type="text" class="form__field svelte-15edawm" placeholder="" required> <label for="name" class="form__label svelte-15edawm">Search on qwant.com</label></div></center>');function va(a){let e=De("");function r(){T(e).startsWith("!nx")?window.location.href="https://search.nixos.org/packages?channel=24.11&from=0&size=50&sort=relevance&type=packages&query="+T(e).replace("!nx",""):window.location.href="https://www.qwant.com/?q="+T(e)}function t(d){d.key==="Enter"&&r()}var n=oa(),s=w(n),l=w(s);Ze(l),Ge(l),Ce(2),g(s),g(n),Xe(l,()=>T(e),d=>Le(e,d)),Pe("keydown",l,t),E(a,n)}var ia=A("<!> <!> <!> <!> <!> <!>",1),fa=A("<!> <!> <!>",1),da=A("<!> <!>",1),ua=A('<!> <h1 class="paddle svelte-1bd4hog">Quick search :</h1> <p class="paddle svelte-1bd4hog"><i>use Qwant for searches, type !nx to search a nix package</i></p> <!> <h1 class="paddle svelte-1bd4hog">Quick access :</h1> <!> <!> <!>',1);function ya(a,e){He(e,!1);const r=!0;var t=ua(),n=q(t);na(n);var s=p(n,6);va(s);var l=p(s,4);W(l,{name:"Work",children:(_,v)=>{var u=ia(),o=q(u);x(o,{name:"Intra42",url:"https://intra.42.fr"});var i=p(o,2);x(i,{name:"Github",url:"https://github.com/m0rganedev"});var f=p(i,2);x(f,{name:"Render",url:"https://dashboard.render.com/"});var b=p(f,2);x(b,{name:"AppWrite",url:"https://cloud.appwrite.io/console/"});var k=p(b,2);x(k,{name:"URSSAF",url:"https://www.autoentrepreneur.urssaf.fr/services/espace-personnel"});var c=p(k,2);x(c,{name:"Gmail",url:"https://mail.google.com/mail/u/0/#inbox"}),E(_,u)},$$slots:{default:!0}});var d=p(l,2);W(d,{name:"Media",children:(_,v)=>{var u=fa(),o=q(u);x(o,{name:"Youtube",url:"https://youtube.com"});var i=p(o,2);x(i,{name:"Reddit",url:"https://reddit.com"});var f=p(i,2);x(f,{name:"BlueSky",url:"https://bsky.app/profile/morgane.dev"}),E(_,u)},$$slots:{default:!0}});var h=p(d,2);return W(h,{name:"Misc",children:(_,v)=>{var u=da(),o=q(u);x(o,{name:"W3Schools",url:"https://www.w3schools.com/"});var i=p(o,2);x(i,{name:"Nix Search",url:"https://search.nixos.org"}),E(_,u)},$$slots:{default:!0}}),E(a,t),ea(e,"prerender",r),Oe({prerender:r})}export{ya as component,ga as universal};
