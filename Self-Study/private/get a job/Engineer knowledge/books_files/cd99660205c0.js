(function(){if(window.parent!=window&&!window.lightningjs){var f=window,h=window.parent.lightningjs,d=f.lightningjs={modules:h.modules},n=h.modules;d.expensive=function(b){b._waitforload=!0;return b};void 0;d.require=h.require;d.provide=function(b,k){function l(){var a=f.console;if(a&&a.error)try{a.error.apply(a,arguments)}catch(c){}else if(f.opera)try{f.opera.postError.apply(f.opera,arguments)}catch(i){}}function h(a){var c=a[0],i=a[1],b=0<i?o[i]:k,g=Array.prototype.slice.call(a[2]),f=g.shift(),
a=e._.fh[c]=e._.fh[c]||[],i=e._.eh[c]=e._.eh[c]||[];e._.ph[c]=e._.ph[c]||[];var d,j;if(b){if(b=b[f])try{d=b.apply(b,g)}catch(m){j=m}else j=Error("unknown deferred method '"+f+"'"),l(j.toString());d&&(o[c]=d);if(j){for(;i.length;){c=i.shift();try{c(j)}catch(n){l(n)}}i.push=function(a){a(j)}}else{for(;a.length;){c=a.shift();try{c(d)}catch(p){l(p)}}a.push=function(a){a(d)}}}else l("cannot call deferred method '"+f+"' on 'undefined'")}function p(){for(var a=g.shift();a;){var c;if(q)c=!1;else{var b=a[1];
c=0<b?o[b]:k;var d=Array.prototype.slice.call(a[2]).shift(),e=void 0,b=r[b]?!0:!1;c=c?(e=c[d])?e._waitforload?!0:!1:!1:b?!0:!1}c?(r[a[0]]=!0,m.push(a)):h(a);a=g.shift()}}d.require(b);var e=n[b];if(e.provided)l("deferred module '"+b+"' is already defined");else{e.provided=!0;var g=(e._.s||[]).slice(),o={"0":k},m=[],r={},q=!1;g&&g[0]&&(o[g[0][1]]=k);k._load=function(){q=!0;for(var a=m.shift();a;)h(a),a=m.shift()};e._.s={push:function(a){g.push(a);p()}};p()}};n.lightningjs.provided||d.provide("lightningjs",
{load:function(){var b=h.modules,d,f;for(f in b)d=b[f],d._&&d("_load")}})}})();
(function(){var e=void 0,f=!0,j=null,k=window.parent;window.usabilla_live=window.usabilla_live||{};
window.usabilla_live.events={event:function(a,g,d){var b=window.usabilla_live_settings||{},c=b.configuration||{},h=!1;"campaign"===a&&"a"===g&&(h=f);c.ga&&(c.ga.a&&c.ga[a]&&d._action)&&this.ga(c.ga[a],d._action,d._label||j,d._value||j,h);c.ot&&(c.ot.a&&c.ot[a+":"+g])&&this.ot(c.ot[a+":"+g],a,d,b);if(b.eventCallback&&d._action)try{b.eventCallback(a,d._action,d._label||j,d._value||j,d.user_data||{})}catch(i){}},ga:function(a,g,d,b,c){k._gaq&&k._gaq.push?(a=["_trackEvent",a,g,d||e,b||e],c&&a.push(f),
k._gaq.push(a)):k.pageTracker&&k.pageTracker._trackEvent?(a=[a,g,d||e,b||e],c&&a.push(f),k.pageTracker._trackEvent.apply(k.pageTracker,a)):k.GoogleAnalyticsObject&&k[k.GoogleAnalyticsObject]&&(a=["send","event",a,g],d&&a.push(d),b&&a.push(b),c&&a.push({nonInteraction:1}),k[k.GoogleAnalyticsObject].apply(k,a))},ot:function(a,g,d,b){var c=j;if(b.adobe&&b.adobe.AppMeasure)c=b.adobe.AppMeasure();else if(k.s_gi&&(k.s_account||k.s&&k.s.account))c=k.s_gi(k.s_account||k.s&&k.s.account);var h=[];if(c&&c.tl){var i=
!1;a.e&&(c.linkTrackEvents=c.events=a.e,h.push("events"),i=f);if(a.l){var l=this.c(d);l&&(c[a.l]=l,h.push(a.l),i=f)}i&&(c.linkTrackVars=h.join(","),b.adobe&&b.adobe.preTrackCallback&&b.adobe.preTrackCallback(c,g,a,d,b),c.tl(f,"o","Usabilla"))}},c:function(a){var g=[],d=this.b(a,["data","site_id"]),b=this.b(a,["form","hash_mappings"]),c=this.b(b,["hash"]),h=this.b(b,["fields"]);if(d===j||b===j||c===j||h===j)return j;for(b=0;b<h.length;b++){var i=this.b(a.data,h[b].field),l=h[b].answers||j,n=h[b].hash||
j;if(!(i===j||l===j||n===j))for(var m in l)l.hasOwnProperty(m)&&m==i&&g.push([d,c,h[b].hash,h[b].answers[m].hash].join(":"))}return 0===g.length?j:g.join(",")},b:function(a,g){if(a===e||a===j||g===e||g===j||!g.hasOwnProperty("length"))return j;if(0===g.length)return a;var d=g.shift();return a.hasOwnProperty(d)?this.b(a[d],g):j}};
})();(function(){var d=window.parent.document;function e(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}window.usabilla_live=window.usabilla_live||{};window.usabilla_live.onEvent=e;window.usabilla_live.stopEvent=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)};window.usabilla_live.triggerEvent=function(a,b){if(d.createEventObject)a.fireEvent("on"+b,d.createEventObject());else{var c=d.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}};
window.usabilla_live.onParentLoad=function(a){"complete"==window.parent.document.readyState?setTimeout(a,0):e(window.parent,"load",a)};
})();(function(){(function(){var T,U,L,V,W,F,r,o,n,u,p,s,M,G,N,O,m,P,g,i,y,v,z,A,X,H,q,h,Y,$,aa,B=[].indexOf||function(a){for(var b=0,d=this.length;b<d;b++)if(b in this&&this[b]===a)return b;return-1},Q=function(a,b){return function(){return a.apply(b,arguments)}},ba={}.hasOwnProperty,I=function(a,b){function d(){this.constructor=a}for(var e in b)ba.call(b,e)&&(a[e]=b[e]);d.prototype=b.prototype;a.prototype=new d;a.__super__=b.prototype;return a};window.ensure_json=function(a){ensure_json.loading=ensure_json.loading||
!1;if("function"===typeof("undefined"!==typeof JSON&&null!==JSON?JSON.stringify:void 0))"function"===typeof a&&a();else if(ensure_json.loading)ensure_json.callbacks=ensure_json.callbacks.push(a);else return ensure_json.loading=!0,ensure_json.callbacks=[a],a=document.createElement("script"),a.src="//cdnjs.cloudflare.com/ajax/libs/json3/3.3.0/json3.min.js",a.onload=function(){var a,d,e,f;ensure_json.loading=!1;f=ensure_json.callbacks;d=0;for(e=f.length;d<e;d++)a=f[d],"function"===typeof a&&a();return ensure_json.callbacks=
[]},document.getElementsByTagName("head")[0].appendChild(a)};var c=window,Z=document,R,C;C={};R=["popout.coffee","v2\/popout.coffee","v2\/slideout.coffee","slideout.coffee"];c.ScriptExists=function(a){return 0<=B.call(R,a)};c.IncludeScript=function(a,b){var d,e,f;if(0>B.call(R,a))return!1;d=C[a]=C[a]||{};if(d.value)return setTimeout(function(){return"function"===typeof b?b(d.value):void 0},0),!0;if(d.tag)return b&&d.callbacks.push(b),!0;d.callbacks=[];b&&d.callbacks.push(b);e=Z.getElementsByTagName("script")[0];f=d.tag=Z.createElement("script");f.src=
"https://d6tizftlrpuof.cloudfront.net/live/scripts/campaign-include/86dc661b70c760ed8a79e04d6b5d9e61/"+a;f.async=!0;e.parentNode.insertBefore(f,e);return!0};c.RegisterScript=function(a,b){var d,e,f,c,g;d=C[a]=C[a]||{};d.value=b;if(d.callbacks){g=d.callbacks;f=0;for(c=g.length;f<c;f++)e=g[f],e(b);return delete d.callbacks}};i=window.parent;g=i.document;L="https:";"https:"!==g.location.protocol&&(L="http:");n={};var w,D;D=function(a,b){var d;d=""+L+"//w.usabilla.com/a/t?m=c&b="+encodeURIComponent("cd99660205c0")+"&c="+encodeURIComponent(a)+"&e="+encodeURIComponent(b)+"&cb="+
(new Date).getTime();return(new Image(1,1)).src=d};w=function(a,b,d,e){var f,c,b=b||{};b._label=b._campaign_id=e;b._action=d;return null!=(f=window.usabilla_live)?null!=(c=f.events)?"function"===typeof c.event?c.event("campaign",a,b):void 0:void 0:void 0};n.hit=function(a,b){null==b&&(b=null);D(a,"a");return w("a",b,"Campaign:Open",a)};n.click=function(a,b){null==b&&(b=null);D(a,"c");return w("c",b,"Campaign:Feedback Clicked",a)};n.pageSwitch=function(a,b){null==b&&(b=null);return w("p",{user_data:b},
"Campaign:Page Switch",a)};n.success=function(a,b){null==b&&(b=null);D(a,"s");return w("s",b,"Campaign:Success",a)};n.fail=function(a,b){null==b&&(b=null);D(a,"f");return w("f",b,"Campaign:Close",a)};i=window.parent;g=i.document;h={};q=0;c=function(a,b,d){var e,f,c;this.callback=d;this.id=q++;this.invert=a.invert||!1;this.invert||(this.group="url");c=RegExp(a.regexp,"i");e=this.get(a);f=this.invert;this.triggered=function(){return c.test(e())===!f}};c.prototype.get=function(a){var b;b={href:function(a){return function(){var b,
c;b=(null!=g?null!=(c=g.location)?c.href:void 0:void 0)||"";if(a)return b;-1!==b.indexOf("#")&&(b=b.substring(0,b.indexOf("#")));-1!==b.indexOf("?")&&(b=b.substring(0,b.indexOf("?")));return b}},pathname:function(a){return!a?function(){var a;return(null!=(a=g.location)?a.pathname:void 0)||""}:function(){var a;return((null!=(a=g.location)?a.pathname:void 0)||"")+(g.location.search||"")+(g.location.hash||"")}}};return null==b[a.match]?function(){return""}:b[a.match](a.query||!1)};c.prototype.destroy=
function(){};h.url=c;c=function(a,b,d){var e=this;this.callback=d;this.id=q++;this.triggered=function(){return!1};this.timer=setTimeout(function(){e.timer=null;e.triggered=function(){return!0};return e.callback()},a.time)};c.prototype.destroy=function(){if(this.timer)return clearTimeout(this.timer)};h.delay=c;h.percentage=function(a,b,d){var e,c;this.data=b;this.callback=d;this.id=q++;b="function"===typeof(e=this.data).chanceHit?e.chanceHit():void 0;null===b&&(b=Math.random()<=a.percentage/100,"function"===
typeof(c=this.data).chanceHit&&c.chanceHit(b));this.triggered=b?function(){return true}:function(){return false}};c=function(a,b,d){this.callback=d;this.id=q++;y.initialize();this.t=!1;"new"===a.state&&y.isNew()&&(this.t=!0);"returning"===a.state&&y.isReturning()&&(this.t=!0)};c.prototype.triggered=function(){return this.t};h.visitor=c;c=function(a,b,d){this.callback=d;this.onScroll=Q(this.onScroll,this);this.id=q++;this.margin=a.margin||200;this.pos=a.pos||"bottom";this.t=!1;window.usabilla_live.onEvent(i,
"scroll",this.onScroll)};c.prototype.onScroll=function(){var a,b,d;b=i.pageYOffset||g.body.scrollTop||g.documentElement.scrollTop||0;d=i.innerHeight||g.documentElement.clientHeight||g.body.clientHeight||0;a=Math.max(g.body.scrollHeight||0,g.documentElement.scrollHeight||0,g.body.offsetHeight||0,g.documentElement.offsetHeight||0,g.body.clientHeight||0,g.documentElement.clientHeight||0);if("bottom"===this.pos&&a-(b+d)<=this.margin||"top"===this.pos&&b>=this.margin)return this.t=!0,this.callback(),this.destroy()};
c.prototype.triggered=function(){return this.t};c.prototype.destroy=function(){return window.usabilla_live.stopEvent(i,"scroll",this.onScroll)};h.scroll=c;h.pages=function(a,b,d){var e;this.callback=d;this.id=q++;d=a.op||"least";e=(("function"===typeof b.pageVisitCount?b.pageVisitCount():void 0)||0)+1;b.pageVisitCount(e);this.triggered="least"===d&&e>=a.pages||"most"===d&&e<=a.pages?function(){return!0}:function(){return!1}};c=function(a,b,d){var e,c=this;this.callback=d;this.mouseOut=Q(this.mouseOut,
this);this.id=q++;this.triggered=function(){return!1};b=1E4;"time"in a&&(b=a.time);e=i;window.attachEvent&&(e=g);setTimeout(function(){return window.usabilla_live.onEvent(e,"mouseout",c.mouseOut)},b)};c.prototype.mouseOut=function(a){var b,d,e,a=a||i.event;e=a.relatedTarget||a.toElement;d=a.clientY;b=!0;-1<i.navigator.userAgent.indexOf("MSIE")&&"[object HTMLSelectElement]"===a.fromElement.toString()&&(b=!1);if(!e&&1>d&&b)return this.triggered=function(){return!0},this.callback(),this.destroy()};c.prototype.destroy=
function(){var a;a=i;window.attachEvent&&(a=g);return window.usabilla_live.stopEvent(a,"mouseout",this.mouseOut)};h.mouseout=c;p={};c=function(a,b,d){this.callback=d;this.id=q++;this.name=a.name;this._triggered=!1;this.name in p||(p[this.name]={triggered:!1,list:[]});p[this.name].triggered&&(this._triggered=!0);p[this.name].list.push(this)};c.prototype.triggered=function(){return this._triggered};c.prototype.trigger=function(){this._triggered=!0;return this.callback()};h.custom=c;c=function(a,b,d){var e;
this.callback=d;this.triggered=function(){return!1};e=a.tests;b=0;for(d=e.length;b<d;b++)a=e[b],this[a]()&&(this.triggered=function(){return!0})};c.prototype.match=function(a){return RegExp(a,"i").test(i.navigator.userAgent)};c.prototype.mwin=function(){return this.match("windows")&&this.match("phone")};c.prototype.mios=function(){return this.match("(iphone|ipod)")&&!this.match("windows")};c.prototype.mand=function(){return this.match("android")&&this.match("mobile")&&!this.match("windows")};c.prototype.mrim=
function(){return this.match("(rim|bb10|blackberry)")&&!this.match("tablet")};c.prototype.mfos=function(){return this.match("firefox")&&this.match("mobile")&&!this.match("android")};c.prototype.mmee=function(){return this.match("meego")};c.prototype.twin=function(){return this.match("windows")&&this.match("touch")&&!this.match("phone")};c.prototype.tios=function(){return this.match("ipad")};c.prototype.tand=function(){return this.match("android")&&!this.match("mobile")};c.prototype.trim=function(){return this.match("(rim|bb10|blackberry)")&&
this.match("tablet")};c.prototype.tfos=function(){return this.match("firefox")&&this.match("tablet")&&!this.match("android")};c.prototype.mob=function(){return this.mios()||this.mand()||this.mwin()||this.mrim()||this.mfos()||this.mmee()};c.prototype.tab=function(){return this.tios()||this.tand()||this.twin()||this.trim()||this.tfos()};c.prototype.desk=function(){return!this.mob()&&!this.tab()&&!this.match("(mobile|tablet)")};h.device=c;c=function(a,b,d){var e;this.callback=d;this.triggered=function(){return!1};
this.test=a.test;this.name=a.name;this.opt="";a["case"]&&(this.opt="i");this.re=a.regexp||"";if("function"===typeof this[e=this.test]&&this[e]())this.triggered=function(){return true}};c.prototype.exists=function(){return this.cookie_exists()};c.prototype.nexists=function(){return!this.cookie_exists()};c.prototype.regexp=function(){return RegExp(this.re,this.opt).test(this.cookie_get())};c.prototype.cookie_exists=function(){return RegExp("(?:^|;\\s*)"+encodeURIComponent(this.name).replace(/[\-\.\+\*]/g,
"\\$&")+"\\s*\\=",this.opt).test(g.cookie)};c.prototype.cookie_get=function(){return decodeURIComponent(g.cookie.replace(RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(this.name).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$",this.opt),"$1"))||null};h.cookie=c;c=function(a,b,d){var e=this;this.spec=a;this.callback=d;this._triggered=!1;this.t=setInterval(function(){return e.checkValues()},1E3);this.checkValues()};c.prototype.checks={equals:function(a,b){return""+a===""+b},nequals:function(a,
b){return""+a!==""+b},contains:function(a,b){return RegExp(b,"i").test(a)},ncontains:function(a,b){return!RegExp(b,"i").test(a)},gt:function(a,b){return a>b},gte:function(a,b){return a>=b},lt:function(a,b){return a<b},lte:function(a,b){return a<=b},oneof:function(a,b){var d,e,c,j;j=b.split(",");e=0;for(c=j.length;e<c;e++)if(d=j[e],""+a===d.trim())return!0;return!1}};c.prototype.checkOp=function(a,b,d){var e,c,j;c=0;for(j=b.length;c<j;c++)if(e=b[c],this.checks[a](e,d))return!0;return!1};c.prototype.getDottedVar=
function(a,b,d){var e,c,j,b=b.split(".");e=a;c=0;for(j=b.length;c<j;c++)if(a=b[c],a in e)e=e[a];else return d;return e};c.prototype.getVars=function(a){var b,d,e,c,j,g,h;d=[];j=this.spec.vars;e=0;for(c=j.length;e<c;e++)b=j[e],b="*"===b?(null!=(g=window.usabilla_live_settings)?null!=(h=g.local_data)?h.custom:void 0:void 0)||{}:this.getDottedVar(i,b,{}),b=this.getDottedVar(b,a,null),null!==b&&d.push(b);return d};c.prototype.checkValues=function(){var a,b,d,e,c,j;b=!0;j=this.spec.ops;e=0;for(c=j.length;e<
c;e++)a=j[e],d=this.getVars(a["var"]),b&&(b=this.checkOp(a.comp,d,a.val));if(b)return clearInterval(this.t),this._triggered=!0,this.callback()};c.prototype.triggered=function(){return this._triggered};h.jsval=c;window.usabilla_live.campaignTrigger=function(a){var b,d,e,c;if(a in p){if(!p[a].triggered){c=p[a].list;d=0;for(e=c.length;d<e;d++)b=c[d],b.trigger()}return p[a].triggered=!0}return p[a]={triggered:!0,list:[]}};v=function(a,b,d){var e,c,j,g;g=["-webkit-","-moz-","-o-","-ms-"];c=0;for(j=g.length;c<
j;c++)e=g[c],a.style[e+b]=d.replace("%p%",e);return a.style[b]=d.replace("%p%","")};i=parent.window;g=i.document;s=s||{};c=function(a,b){this.config=a;this.iframe=b;this.frameCount=this.configValue(["shakes","wobbles"],4);this.amplitude=this.configValue(["amp","amplitude"],2);this.top=this.configValue(["top"],1);this.bottom=this.configValue(["bottom"],-1);this.offset=this.configValue(["offset"],0);this.delay=this.configValue(["delay"],2E3);this.speed=this.configValue(["speed"],50);this.duration=this.configValue(["duration"],
0);this.timer=null;this.initialize()};c.prototype.getTags=function(){return["move"]};c.prototype.configValue=function(a,b){var d,e,c;e=0;for(c=a.length;e<c;e++)if(d=a[e],d in this.config)return this.config[d];return b};c.prototype.frames=function(){var a,b,d,c;b=[];a=d=1;for(c=this.frameCount;1<=c?d<=c:d>=c;a=1<=c?++d:--d)b.push([this.speed,this.offset+this.amplitude*(a%2?this.top:this.bottom)]);b.push([this.speed,this.offset]);this.delay&&b.push([this.delay,this.offset]);return b};c.prototype.frame=
function(){return{}};c.prototype.start=function(a){var b,d,c,f=this;null==a&&(a=null);setTimeout(function(){return"function"===typeof a?a():void 0},0);if(!this.timer&&(c=0,d=this.frames(),b=function(){var a;a=d[c];return f.timer=setTimeout(function(){f.frame(a[1]);c=(c+1)%d.length;return b()},a[0])},b(),0<this.duration))return setTimeout(function(){return f.stop()},this.duration)};c.prototype.stop=function(a){null==a&&(a=null);this.timer&&(clearTimeout(this.timer),this.frame(0));return setTimeout(function(){return typeof a===
"function"?a():void 0},0)};c.prototype.initialize=function(){};c.prototype.destroy=function(){return this.stop()};var S=s,E=function(){return $=E.__super__.constructor.apply(this,arguments)};I(E,c);E.prototype.initialize=function(){var a;a=this.iframe.getAttribute("data-tags")||"";this.css="left";if(a.match(/\b(left|right)\b/))return this.css="top"};E.prototype.frame=function(a){return this.iframe.style[this.css]=""+a+"px"};S.shake=E;var S=s,t=function(){return aa=t.__super__.constructor.apply(this,
arguments)};I(t,c);t.prototype.initialize=function(){var a;a=this.iframe.getAttribute("data-tags")||"";this.origin="50% 100%";a.match(/\bright\b/)&&(this.origin="100% 50%");a.match(/\bleft\b/)&&(this.origin="0% 50%");a.match(/\btop\b/)&&(this.origin="50% 0%");this.transition=this.configValue(["transition"],!0);this.type="skewX";a.match(/\b(left|right)\b/)&&(this.type="skewY");v(this.iframe,"transform-origin",this.origin);if(this.transition)return v(this.iframe,"transition","%p%transform "+this.speed/
1E3+"s ease")};t.prototype.unit=function(){var a;return"skewX"===(a=this.type)||"skewY"===a||"rotate"===a||"rotateX"===a||"rotateY"===a||"rotateZ"===a?"deg":""};t.prototype.frame=function(a){return v(this.iframe,"transform",""+this.type+"("+a+this.unit()+")")};t.prototype.destroy=function(){return this.stop(function(){v(this.iframe,"transform-origin",null);return v(this.iframe,"transition",null)})};S.skew=t;s=s||{};i=window.parent;g=i.document;m=z=null;try{m=window.localStorage,z=window.sessionStorage}catch(ca){}A=
"usbl."+"cd99660205c0";y=null;r=[];F=[];o=[];G=!1;T={"70b654e7a2db":{"v":20,"a":true,"t":[{"type":"delay","time":30000,"multiplier":1000},{"type":"percentage","percentage":1},{"type":"pages","pages":3,"op":"least"}],"r":90,"e":{"effect":"v2\/popout","speed":600,"location":"https:\/\/d6tizftlrpuof.cloudfront.net\/live\/i\/5d4a0435efc5ad26491200bb\/d95ff4910c78126450476e721836bef72fbc8879.html"}},"d124d9552d41":{"v":2,"a":false,"t":[{"type":"delay","time":1000,"multiplier":1000},{"type":"percentage","percentage":100},{"type":"pages","pages":1,"op":"least"}],"r":90,"e":false},"5142314d89e1":{"v":12,"a":false,"t":[{"type":"mouseout","time":5000,"multiplier":1000},{"type":"url","match":"pathname","query":true,"invert":false,"regexp":"(\\?mode\\=questionnaire)"},{"type":"url","match":"pathname","query":true,"invert":true,"regexp":"(mode\\=guidance)"}],"e":false}};V=[];Y=function(a){var b,d,c,f;if(0<=B.call(r,a))return!0;f=a.getTags();d=0;for(c=f.length;d<c;d++)if(b=f[d],0<=B.call(F,b))return!1;r.push(a);c=a.getTags();a=0;for(d=c.length;a<d;a++)b=c[a],F.push(b);return!0};P=function(a){return"T"===a?!0:"F"===a?!1:null};H=function(a){return!0===a?"T":!1===a?"F":""};N=function(a,b,d){return null===b?"":null===a||+new Date>parseInt(a)||0<d&&d!==b?+new Date+864E5*
b:a};var k=function(a,b,d){this.key=a;this.testing=null!=b?b:!1;this.expire=null!=d?d:null;this.clear();a=m.getItem(this.key);if(null!=a&&!this.testing&&(a=a.split("/"),7===a.length&&("T"===a[0]&&(this._clicked=!0),this._version=parseInt(a[1])||null,this._chanceHit=P(a[2]),this._adCampaign=P(a[3]),this._pageVisitCount=parseInt(a[4]||"0"),this._resetInterval=parseInt(a[5]||this.expire),this._expiration=N(a[6],this._resetInterval,this.expire),this._expiration>a[6])))this._clicked=!1};k.prototype._clicked=
null;k.prototype._version=null;k.prototype._chanceHit=null;k.prototype._adCampaign=null;k.prototype._pageVisitCount=null;k.prototype._resetInterval=null;k.prototype._expiration=null;k.prototype.save=function(){var a;if(!this.testing)return a=[],a.push(H(this._clicked)),a.push(this._version||""),a.push(H(this._chanceHit)),a.push(H(this._adCampaign)),null===this._pageVisitCount?a.push(""):a.push(parseInt(this._pageVisitCount).toString()),a.push(parseInt(this.expire)||""),a.push(N(this._expiration,this.expire,
parseInt(this._resetInterval||0))),m.setItem(this.key,a.join("/"))};k.prototype.clear=function(){this._clicked=!1;return this._expiration=this._pageVisitCount=this._adCampaign=this._chanceHit=this._version=null};k.prototype.clicked=function(a){null==a&&(a=null);null!=a&&(this._clicked=!0===a,this.save());return this._clicked};k.prototype.version=function(a){null==a&&(a=null);null!=a&&(this._version=a,this.save());return this._version};k.prototype.chanceHit=function(a){null==a&&(a=null);null!=a&&(this._chanceHit=
!0===a,this.save());return this._chanceHit};k.prototype.adCampaign=function(a){null==a&&(a=null);null!=a&&(this._adCampaign=!0===a,this.save());return this._adCampaign};k.prototype.pageVisitCount=function(a){null==a&&(a=null);null!=a&&(this._pageVisitCount=a,this.save());return this._pageVisitCount};var J=function(a,b,d){this.campaign=d};J.prototype.getTags=function(){return[]};J.prototype.start=function(){};J.prototype.stop=function(){};c=function(a){this.iframe=a;this.triggerUpdate=Q(this.triggerUpdate,
this);this.effect=null;this.triggered=!1;this.effectData=null;this.stopped=!1;this.firstTime=!0;setTimeout(this.triggerUpdate,0)};c.prototype.isBoost=function(){return!1};c.prototype.isTriggered=function(){return!1};c.prototype.initializeEffect=function(a){var b,d,c,f=this;if(null!=(null!=(b=this.effectData)?b.effect:void 0)&&null!=s[this.effectData.effect])b=s[this.effectData.effect];else{if(ScriptExists(""+(null!=(d=this.effectData)?d.effect:void 0)+".coffee")){IncludeScript(""+(null!=(c=this.effectData)?
c.effect:void 0)+".coffee",function(b){f.effect=new b(f.effectData,f.iframe,f);return"function"===typeof a?a():void 0});return}b=J}this.effect=new b(this.effectData,this.iframe,this);return"function"===typeof a?a():void 0};c.prototype.getTags=function(){return null===this.effect?[]:this.effect.getTags()};c.prototype.stop=function(){this.stopped=!0;if(null!==this.effect)return this.effect.stop()};c.prototype.destroy=function(){this.stop();if(null!==this.effect)return this.effect.destroy(),this.effect=
null};c.prototype.triggerUpdate=function(){var a,b=this;this.triggered=this.isTriggered();if(this.active&&(!this.stopped&&!(null===this.effect&&!1===this.triggered))&&(a=new k(this.data.key),!a._clicked&&this.shouldActivate()))return this.initializeEffect(function(){if(!b.stopped&&Y(b))if(b.triggered){if(b.effect.start(),b.firstTime)return b.firstTime=!1,b.activate()}else return b.effect.stop()})};c.prototype.shouldActivate=function(){return!0};c.prototype.activate=function(){};c.prototype.success=
function(){};c.prototype.failure=function(){};c.prototype.feedbackClicked=function(){};c.prototype.firstFeedback=function(){};c.prototype.markAsClicked=function(){};c.prototype.pageSwitch=function(){};var x=function(a,b){this.data=a;x.__super__.constructor.call(this,b);this.active=!0;this.effectData=this.data.e;this.trigger={triggered:function(){return!0}};h[this.data.t.type]&&(this.trigger=new h[this.data.t.type](this.data.t,{},this.triggerUpdate))};I(x,c);x.prototype.isTriggered=function(){return this.trigger.triggered()};
x.prototype.destroy=function(){var a;x.__super__.destroy.call(this);return"function"===typeof(a=this.trigger).destroy?a.destroy():void 0};W=x;var l=function(a,b,d,c){this.id=a;this.testing=null!=c?c:!1;l.__super__.constructor.call(this,d);this.version=parseInt(b.v);this.active=b.a;this.expire=parseFloat(b.r)||null;this.triggers=null;this.effectData=b.e;this.storage_name=""+A+".c."+this.id;this.data=new k(this.storage_name,this.testing,this.expire);this.boost=!1;this.data.clicked()&&(this.active=!1);
this.active?(null!==this.data.version()&&this.data.version()!==this.version&&this.data.clear(),this.data.version(this.version),this.triggers=this.initializeTriggers(b.t)):this.stop()};I(l,c);l.prototype.isBoost=function(){return this.boost};l.prototype.initializeTriggers=function(a){var b,d,c,f;f=[];d=0;for(c=a.length;d<c;d++)b=a[d],null!=h[b.type]&&f.push(new h[b.type](b,this.data,this.triggerUpdate));return f};l.prototype.isTriggered=function(){var a,b,c,e,f,g,h;if(this.stopped||null===this.triggers)return!1;
e=!0;a={};h=this.triggers;f=0;for(g=h.length;f<g;f++)c=h[f],c.triggered()?c.group&&(a[c.group]=!0):c.group?c.group&&(a[c.group]=a[c.group]||!1):e=!1;for(b in a)(c=a[b])||(e=!1);return e};l.prototype.shouldActivate=function(){return G?!1:G=!0};l.prototype.activate=function(){if(!this.testing)return n.hit(this.id)};l.prototype.pageSwitch=function(a){if(!this.testing)return n.pageSwitch(this.id,a)};l.prototype.success=function(){this.data.clicked(!0);if(!this.testing)return n.success(this.id)};l.prototype.successOnFeedback=
function(){var a=this;return this.firstFeedback=function(){if(!a.testing)return n.success(a.id)}};l.prototype.failure=function(){this.data.clicked(!0);if(!this.testing)return n.fail(this.id)};l.prototype.feedbackClicked=function(){this.testing||n.click(this.id);if(null==this.effect.stopOnFeedback||!1!==this.effect.stopOnFeedback)return this.data.clicked(!0)};l.prototype.destroy=function(){var a,b,c,e,f;l.__super__.destroy.call(this);if(null!==this.triggers){e=this.triggers;f=[];b=0;for(c=e.length;b<
c;b++)a=e[b],f.push("function"===typeof a.destroy?a.destroy():void 0);return f}};l.prototype.markAsClicked=function(){return this.data.clicked(!0)};U=l;var K=function(){this.returning=this.initialized=!1;this.key=""+A+".v";null!==m.getItem(this.key)&&this.initialize()};K.prototype.initialize=function(){if(!this.initialized){this.initialized=!0;if(null===m.getItem(this.key))return m.setItem(this.key,1),g.cookie="usbls=1;path=/";if(!g.cookie.match(/\busbls=1\b/))return this.returning=!0}};K.prototype.isNew=
function(){return!this.returning};K.prototype.isReturning=function(){return this.returning};X=function(){if(!m||!z)return!1;try{return m.setItem("test_storage",1),m.removeItem("test_storage"),z.setItem("test_storage",1),z.removeItem("test_storage"),!0}catch(a){return!1}};O=function(a,b,c,e){var f,g,h,i;null==b&&(b=!1);null==c&&(c=null);null==e&&(e=null);if(X()){y=new K;null===c&&(c=T);null===e&&(e=V);h=0;for(i=o.length;h<i;h++)f=o[h],f.destroy();o=[];r=[];F=[];h=[];for(g in c)f=c[g],h.push(new U(g,
f,a,b));o=h;c=0;for(g=e.length;c<g;c++)f=e[c],o.push(new W(f,a));var k;k=[];a=0;for(e=o.length;a<e;a++)f=o[a],k.push(f.storage_name);a=function(a){var b;b=A+".c.";return null===a||0<=B.call(k,a)||a.substr(0,b.length)!==b?!1:!0};if(!(b||0===m.length)){f=[];b=e=0;for(c=m.length-1;0<=c?e<=c:e>=c;b=0<=c?++e:--e)a(m.key(b))&&f.push(m.removeItem(m.key(b)));return f}}};u=null;M=!0;window.usabilla_live||(window.usabilla_live={});window.usabilla_live.campaignInit=O;window.usabilla_live.campaignReset=function(a){G=
!1;return O(a)};window.usabilla_live.setCampaignPrefix=function(a){return A=a};window.usabilla_live.stopCampaignsForFeedback=function(){var a,b,c;if(null!==u)return u;u=[];b=0;for(c=r.length;b<c;b++)a=r[b],a.feedbackClicked(),null!=a.id&&a.isBoost()&&u.push(a.id);b=0;for(c=o.length;b<c;b++)a=o[b],a.stop();return u};window.usabilla_live.onFeedback=function(){var a,b,c,e;if(M){M=!1;e=[];b=0;for(c=r.length;b<c;b++)a=r[b],e.push(a.firstFeedback());return e}}}).call(this);
})();(function(){var d=window.parent.document;function e(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}window.usabilla_live=window.usabilla_live||{};window.usabilla_live.onEvent=e;window.usabilla_live.stopEvent=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)};window.usabilla_live.triggerEvent=function(a,b){if(d.createEventObject)a.fireEvent("on"+b,d.createEventObject());else{var c=d.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}};
window.usabilla_live.onParentLoad=function(a){"complete"==window.parent.document.readyState?setTimeout(a,0):e(window.parent,"load",a)};
})();(function(){var d=window.parent.document;function e(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}window.usabilla_live=window.usabilla_live||{};window.usabilla_live.onEvent=e;window.usabilla_live.stopEvent=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)};window.usabilla_live.triggerEvent=function(a,b){if(d.createEventObject)a.fireEvent("on"+b,d.createEventObject());else{var c=d.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}};
window.usabilla_live.onParentLoad=function(a){"complete"==window.parent.document.readyState?setTimeout(a,0):e(window.parent,"load",a)};
})();(function(){var b="https:\/\/d6tizftlrpuof.cloudfront.net\/live\/",f="body { background: transparent; padding: 0; margin: 0; text-align: left; }",g="",h=window.parent.document;window.usabilla_live=window.usabilla_live||{};
window.usabilla_live.createIframe=function(c){var d,e=['<!DOCTYPE html>\n<html lang="en-US">','<base href="'+b+'"></base>',"<title>Usabilla Feedback Button</title>\n<style type='text/css'>",f,"</style>\n<body>",g,"</body>\n</html>"].join("\n"),a=h.createElement("iframe");a.src=/MSIE[ ]+6/.test(navigator.userAgent)?"javascript:false":"";a.style.width="0px";a.style.height="0px";a.style.margin="0";a.style.padding="0";a.style.border="0";a.style.overflow="hidden";a.style.zIndex=
9998;a.style.position="absolute";a.style.left="0";a.style.top="0";a.style["box-shadow"]="0 0 0";a.style.backgroundColor="transparent";a.frameBorder=0;a.marginWidth=0;a.marginHeight=0;a.scrolling="no";a.allowTransparency=!0;a.setAttribute("data-tags","right");a.setAttribute("title","Usabilla Feedback Button");c.appendChild(a);var c=a.contentWindow,i=h.body.scrollTop||0;try{c.document.open()}catch(j){d="javascript:document.open();document.domain='"+h.domain+"';",a.src=d+"void(0);"}try{c.document.write(e),
c.document.close()}catch(k){a.src=d+'document.write("'+e.replace(/"/g,String.fromCharCode(92)+'"')+'");document.close();'}try{a.contentWindow.document.body.scrollTop=0,h.location.toString().match(/#(top)?$/)&&(h.body.scrollTop=i)}catch(l){}return a};
})();(function(){var b=null,c=window.parent,e=c.document,f=b,g=b,j=b,k=window.usabilla_live=window.usabilla_live||{},l=b,m=window.usabilla_live_settings={local_data:{email:b,custom:{}},ie10focusfix:!1,eventCallback:b,form:b,zIndex:9999,configuration:{"ga":{"a":false}}},n=!0,o=b,p=!1;
function q(){var a,d;"undefined"!=typeof c.innerWidth?(a=c.innerWidth,d=c.innerHeight):"undefined"!=typeof e.documentElement&&"undefined"!=typeof e.documentElement.clientWidth&&0!=e.documentElement.clientWidth?(a=e.documentElement.clientWidth,d=e.documentElement.clientHeight):(a=e.getElementsByTagName("body")[0].clientWidth,d=e.getElementsByTagName("body")[0].clientHeight);c.open("https://api.usabilla.com/v2/f/"+"cd99660205c0"+"?w="+a+"&h="+d+"&url="+encodeURIComponent(window.location),"_blank","height=470,width=465")}
if(c!=window){k.onParentLoad(function(){var a="height:0px;z-index:99999990;right:0px;top:50%;margin-top:-0px;position:fixed;width:0px",d=e.body;j!==b&&(d=e.getElementById(j)||d);f=e.createElement("div");f.className="usabilla_live_button_container";f.setAttribute("class","usabilla_live_button_container");f.setAttribute("role","button");f.setAttribute("tabindex","0");f.setAttribute("style",a);f.setAttribute("aria-label","Usabilla Feedback Button");"setAttribute"in f.style&&f.style.setAttribute("cssText",a,0);d.appendChild(f);g=f.style.display;if(/MSIE[ ]+(6|7)/.test(navigator.userAgent)){f.style.display=
"none";for(p=!0;0<r.length;)r.shift()()}else{0<e.getElementsByTagName("head").length&&(a=e.createElement("style"),a.setAttribute("type","text/css"),a.setAttribute("media","print"),a.styleSheet?a.styleSheet.cssText=".usabilla_live_button_container { display: none; }":a.appendChild(e.createTextNode(".usabilla_live_button_container { display: none; }")),e.getElementsByTagName("head")[0].appendChild(a));o=k.createIframe(f);k.buttonClick=function(){function a(){if(!t){t=true;e.body.removeChild(h)}}var d=
k.stopCampaignsForFeedback();l===b&&(l=window.lightningjs.require("usabilla_live_feedback","//w.usabilla.com/feedbacklet"));l("setEventHandler",k.events);var v=l,w="cd99660205c0",h=e.createElement("div");h.style.position="fixed";h.style.zIndex=""+m.zIndex;h.style.top=0;h.style.left=0;h.style.right=0;h.style.bottom=0;h.style.background="#555";h.style.opacity="0.8";h.style.filter="alpha(opacity=80)";e.body.appendChild(h);var i=e.createElement("div");i.style.position="absolute";i.style.left="50%";i.style.top="50%";
i.style.margin="-32px 0 0 -32px";i.style.width="64px";i.style.height="64px";i.style.backgroundImage="url(https://d6tizftlrpuof.cloudfront.net/live/resources/throbber.gif)";h.appendChild(i);var t=false;setTimeout(a,15E3);v("start",w,d,m,a,k.onFeedback)};k.onEvent(o.contentWindow.document,"click",function(){k.buttonClick()});for(k.onEvent(f,"keyup",function(a){e.hasFocus()&&(a.keyCode===13||a.keyCode===32)&&k.buttonClick()});0<r.length;)r.shift()();n&&k.campaignInit(o)}});var r=[],
s=function(a){f!==b?a():r.push(a)};window.lightningjs.provide("usabilla_live",{setStyle:function(a){s(function(){for(var d in a)a.hasOwnProperty(d)&&(f.style[d]=a[d])})},setButtonZIndex:function(a){s(function(){f.style.zIndex=a})},setInterfaceZIndex:function(a){m.zIndex=parseInt(a)},setParent:function(a){j=a},show:function(){s(function(){f.style.display=g})},hide:function(){s(function(){f.style.display="none"})},data:function(a){m.local_data.email=a.email||b;m.local_data.custom=a.custom||m.local_data.custom},
setCampaign:function(a,d,u){n=!1;s(function(){k.campaignInit(o,u,a,d)})},virtualPageView:function(){n=!0;s(function(){k.campaignReset(o);var a="https://w.usabilla.com/a/t?m=b&b="+encodeURIComponent("cd99660205c0")+"&e=SPAC&cb="+(new Date).getTime();(new Image(1,1)).src=a})},trigger:k.campaignTrigger,popup:q,click:function(){p?q():s(function(){k.buttonClick()})},setForm:function(a){m.form=a},disableScreenshot:function(a){m.generateScreenshot=!a},onLoad:function(a){s(a)},ie10FocusFix:function(){m.ie10focusfix=
!0},setEventCallback:function(a){m.eventCallback=a},setSelectionCallback:function(a){m.selectionCallback=a},configureAdobeAnalytics:function(a){m.adobe=a},setCustomOptionClick:function(a){m.customOptionClick=a},setIntegrationData:function(a){m.local_data.integrations=a}})};
})();