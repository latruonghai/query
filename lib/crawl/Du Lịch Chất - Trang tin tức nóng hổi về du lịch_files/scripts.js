/* modernizr 3.5.0 (Custom Build) | MIT user for: flex menu * https://modernizr.com/download/?-prefixes-setclasses-teststyles */
!function(e,n,t){function s(e,n){return typeof e===n}function o(){var e,n,t,o,a,i,r;for(var l in d)if(d.hasOwnProperty(l)){if(e=[],n=d[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=s(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=o:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=o),f.push((o?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(h&&(n=n.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\s)"+t+"no-js(\s|$)");n=n.replace(s,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),h?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):h?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(h?"svg":"body"),e.fake=!0),e}function l(e,t,s,o){var a,l,f,d,c="modernizr",p=i("div"),h=r();if(parseInt(s,10))for(;s--;)f=i("div"),f.id=o?o[s]:c+(s+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+c,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=c,h.fake&&(h.style.background="",h.style.overflow="hidden",d=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=d,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],d=[],c={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr;var p=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];c._prefixes=p;var u=n.documentElement,h="svg"===u.nodeName.toLowerCase();c.testStyles=l;o(),a(f),delete c.addTest,delete c.addAsyncTest;for(var m=0;m<Modernizr._q.length;m++)Modernizr._qm;e.Modernizr=Modernizr}(window,document);
/*! Bootstrap tolltips v3.3.6. (c) 2011-2015 Twitter. MIT @license: en.wikipedia.org/wiki/MIT_License renamed from .tooltip to tietooltip to avoid conflict with jQuery UI Tooltip */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,p=l.test(a);p&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),f=s[0].offsetWidth,u=s[0].offsetHeight;if(p){var c=a,d=this.getPosition(this.$viewport);a="bottom"==a&&h.bottom+u>d.bottom?"top":"top"==a&&h.top-u<d.top?"bottom":"right"==a&&h.right+f>d.width?"left":"left"==a&&h.left-f<d.left?"right":a,s.removeClass(c).addClass(a)}var v=this.getCalculatedOffset(a,h,f,u);this.applyPlacement(v,a);var g=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",g).emulateTransitionEnd(i.TRANSITION_DURATION):g()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,p=o[0].offsetHeight;"top"==i&&p!=s&&(e.top=e.top+s-p);var h=this.getViewportAdjustedDelta(i,e,l,p);h.left?e.left+=h.left:e.top+=h.top;var f=/top|bottom/.test(i),u=f?2*h.left-n+l:2*h.top-s+p,c=f?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(u,o[0][c],f)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,r,a,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+o;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l)}else{var p=e.left-s,h=e.left+s+i;p<r.left?n.left=r.left-p:h>r.right&&(n.left=r.left+r.width-h)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var o=t.fn.tietooltip;t.fn.tietooltip=e,t.fn.tietooltip.Constructor=i,t.fn.tietooltip.noConflict=function(){return t.fn.tietooltip=o,this}}(jQuery);
/*! FitVids 1.1. (c) 2013, Chris Coyier - http:// css-tricks.com + Dave Rupert - http:// daverupert.com. WTFPL license - http:// sam.zoy.org/wtfpl/ */
!function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null,ignore:null};return b&&a.extend(c,b),this.each(function(){var b=['iframe[src*="player.vimeo.com"]','iframe[src*="player.twitch.tv"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];c.customSelector&&b.push(c.customSelector);var d=".fitvidsignore";c.ignore&&(d=d+", "+c.ignore);var e=a(this).find(b.join(","));e=e.not("object object"),e=e.not(d),e.each(function(){var b=a(this);if(!(b.parents(d).length>0||"embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".tie-fluid-width-video-wrapper").length)){b.css("height")||b.css("width")||!isNaN(b.attr("height"))&&!isNaN(b.attr("width"))||(b.attr("height",9),b.attr("width",16));var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),e=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),f=c/e;if(!b.attr("name")){var g="fitvid"+a.fn.fitVids._count;b.attr("name",g),a.fn.fitVids._count++}b.wrap('<div class="tie-fluid-width-video-wrapper"></div>').parent(".tie-fluid-width-video-wrapper").css("padding-top",100*f+"%"),b.removeAttr("height").removeAttr("width")}})})},a.fn.fitVids._count=0}(window.jQuery||window.Zepto);
/*! jQuery Mousewheel 3.1.13 * Copyright 2015 jQuery Foundation and other contributors * Released under the MIT license. * http://jquery.org/license */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});
/*! Theia Sticky Sidebar v1.4.0. (c) 2013-2016 WeCodePixels and other contributors. MIT @license: en.wikipedia.org/wiki/MIT_License */ // Edited by Fouad Badawy to add is-fixed
!function(i){i.fn.theiaStickySidebar=function(t){function o(t,o){var a=e(t,o);a||(console.log("TST: Body width smaller than options.minWidth. Init is delayed."),i(document).scroll(function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)),i(window).resize(function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)))}function e(t,o){return t.initialized===!0?!0:i("body").width()<t.minWidth?!1:(a(t,o),!0)}function a(t,o){t.initialized=!0,i("head").append(i('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),o.each(function(){function o(){a.fixedScrollTop=0,a.sidebar.removeClass('is-fixed').css({"min-height":"1px"}),a.stickySidebar.css({position:"static",width:""})}function e(t){var o=t.height();return t.children().each(function(){o=Math.max(o,i(this).height())}),o}var a={};a.sidebar=i(this),a.options=t||{},a.container=i(a.options.containerSelector),0==a.container.size()&&(a.container=a.sidebar.parent()),a.sidebar.parents().css("-webkit-transform","none"),a.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),a.stickySidebar=a.sidebar.find(".theiaStickySidebar"),0==a.stickySidebar.length&&(a.sidebar.find("script").remove(),a.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()),a.sidebar.append(a.stickySidebar)),a.marginTop=parseInt(a.sidebar.css("margin-top")),a.marginBottom=parseInt(a.sidebar.css("margin-bottom")),a.paddingTop=parseInt(a.sidebar.css("padding-top")),a.paddingBottom=parseInt(a.sidebar.css("padding-bottom"));var n=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight();a.stickySidebar.css("padding-top",1),a.stickySidebar.css("padding-bottom",1),n-=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight()-d-n,0==n?(a.stickySidebar.css("padding-top",0),a.stickySidebarPaddingTop=0):a.stickySidebarPaddingTop=1,0==d?(a.stickySidebar.css("padding-bottom",0),a.stickySidebarPaddingBottom=0):a.stickySidebarPaddingBottom=1,a.previousScrollTop=null,a.fixedScrollTop=0,o(),a.onScroll=function(a){if(a.stickySidebar.is(":visible")){if(i("body").width()<a.options.minWidth)return void o();if(a.options.disableOnResponsiveLayouts){var n=a.sidebar.outerWidth("none"==a.sidebar.css("float"));if(n+50>a.container.width())return void o()}var d=i(document).scrollTop(),r="static";if(d>=a.container.offset().top+(a.paddingTop+a.marginTop-a.options.additionalMarginTop)){var s,c=a.paddingTop+a.marginTop+t.additionalMarginTop,p=a.paddingBottom+a.marginBottom+t.additionalMarginBottom,b=a.container.offset().top,l=a.container.offset().top+e(a.container),g=0+t.additionalMarginTop,h=a.stickySidebar.outerHeight()+c+p<i(window).height();s=h?g+a.stickySidebar.outerHeight():i(window).height()-a.marginBottom-a.paddingBottom-t.additionalMarginBottom;var f=b-d+a.paddingTop+a.marginTop,S=l-d-a.paddingBottom-a.marginBottom,u=a.stickySidebar.offset().top-d,m=a.previousScrollTop-d;"fixed"==a.stickySidebar.css("position")&&"modern"==a.options.sidebarBehavior&&(u+=m),"stick-to-top"==a.options.sidebarBehavior&&(u=t.additionalMarginTop),"stick-to-bottom"==a.options.sidebarBehavior&&(u=s-a.stickySidebar.outerHeight()),u=m>0?Math.min(u,g):Math.max(u,s-a.stickySidebar.outerHeight()),u=Math.max(u,f),u=Math.min(u,S-a.stickySidebar.outerHeight());var y=a.container.height()==a.stickySidebar.outerHeight();r=(y||u!=g)&&(y||u!=s-a.stickySidebar.outerHeight())?d+u-a.sidebar.offset().top-a.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==r)a.stickySidebar.css({position:"fixed",width:a.sidebar.width(),top:u,left:a.sidebar.offset().left+parseInt(a.sidebar.css("padding-left"))});else if("absolute"==r){var k={};"absolute"!=a.stickySidebar.css("position")&&(k.position="absolute",k.top=d+u-a.sidebar.offset().top-a.stickySidebarPaddingTop-a.stickySidebarPaddingBottom),k.width=a.sidebar.width(),k.left="",a.stickySidebar.css(k)}else"static"==r&&o();"static"!=r&&1==a.options.updateSidebarHeight&&a.sidebar.addClass('is-fixed').css({"min-height":a.stickySidebar.outerHeight()+a.stickySidebar.offset().top-a.sidebar.offset().top+a.paddingBottom}),a.previousScrollTop=d}},a.onScroll(a),i(document).scroll(function(i){return function(){i.onScroll(i)}}(a)),i(window).resize(function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(a))})}var n={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern"};t=i.extend(n,t),t.additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,o(t,this)}}(jQuery);
/*! jQuery-viewport-checker v1.8.7 (c) 2015 Dirk Groenen https://github.com/dirkgroenen/jQuery-viewport-checker MIT @license: en.wikipedia.org/wiki/MIT_License */
!function(o){o.fn.viewportChecker=function(t){var e={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(o,t){},scrollHorizontal:!1,scrollBox:window};o.extend(e,t);var a=this,s={height:o(e.scrollBox).height(),width:o(e.scrollBox).width()};return this.checkElements=function(){var t,l;e.scrollHorizontal?(t=Math.max(o("html").scrollLeft(),o("body").scrollLeft(),o(window).scrollLeft()),l=t+s.width):(t=Math.max(o("html").scrollTop(),o("body").scrollTop(),o(window).scrollTop()),l=t+s.height),a.each(function(){var a=o(this),i={},n={};if(a.data("vp-add-class")&&(n.classToAdd=a.data("vp-add-class")),a.data("vp-remove-class")&&(n.classToRemove=a.data("vp-remove-class")),a.data("vp-add-class-full-view")&&(n.classToAddForFullView=a.data("vp-add-class-full-view")),a.data("vp-keep-add-class")&&(n.removeClassAfterAnimation=a.data("vp-remove-after-animation")),a.data("vp-offset")&&(n.offset=a.data("vp-offset")),a.data("vp-repeat")&&(n.repeat=a.data("vp-repeat")),a.data("vp-scrollHorizontal")&&(n.scrollHorizontal=a.data("vp-scrollHorizontal")),a.data("vp-invertBottomOffset")&&(n.scrollHorizontal=a.data("vp-invertBottomOffset")),o.extend(i,e),o.extend(i,n),!a.data("vp-animated")||i.repeat){String(i.offset).indexOf("%")>0&&(i.offset=parseInt(i.offset)/100*s.height);var d=i.scrollHorizontal?a.offset().left:a.offset().top,r=i.scrollHorizontal?d+a.width():d+a.height(),c=Math.round(d)+i.offset,f=i.scrollHorizontal?c+a.width():c+a.height();i.invertBottomOffset&&(f-=2*i.offset),l>c&&f>t?(a.removeClass(i.classToRemove),a.addClass(i.classToAdd),i.callbackFunction(a,"add"),l>=r&&d>=t?a.addClass(i.classToAddForFullView):a.removeClass(i.classToAddForFullView),a.data("vp-animated",!0),i.removeClassAfterAnimation&&a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){a.removeClass(i.classToAdd)})):a.hasClass(i.classToAdd)&&i.repeat&&(a.removeClass(i.classToAdd+" "+i.classToAddForFullView),i.callbackFunction(a,"remove"),a.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&o(document).bind("touchmove MSPointerMove pointermove",this.checkElements),o(e.scrollBox).bind("load scroll",this.checkElements),o(window).resize(function(t){s={height:o(e.scrollBox).height(),width:o(e.scrollBox).width()},a.checkElements()}),this.checkElements(),this}}(jQuery);
/*! Modified By Fouad Badawy Ajax Autocomplete for jQuery, version v1.2.24 (c) 2015 Tomas Kirda MIT @license: en.wikipedia.org/wiki/MIT_License */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(e){"use strict";function t(n,o){var i=function(){},s=this,a={ajaxSettings:{},autoSelectFirst:!1,appendTo:document.body,serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:t.formatResult,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:i,onSearchComplete:i,onSearchError:i,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:function(e,t,n){return-1!==e.value.toLowerCase().indexOf(n)},paramName:"query",transformResult:function(t){return"string"==typeof t?e.parseJSON(t):t},showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1};s.element=n,s.el=e(n),s.suggestions=[],s.badQueries=[],s.selectedIndex=-1,s.currentValue=s.element.value,s.intervalId=0,s.cachedResponse={},s.onChangeInterval=null,s.onChange=null,s.isLocal=!1,s.suggestionsContainer=null,s.noSuggestionsContainer=null,s.options=e.extend({},a,o),s.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},s.hint=null,s.hintValue="",s.selection=null,s.initialize(),s.setOptions(o)}var n=function(){return{escapeRegExChars:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},createNode:function(e){var t=document.createElement("div");return t.className=e,t.style.position="absolute",t.style.display="none",t}}}(),o={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40};t.utils=n,e.Autocomplete=t,t.formatResult=function(e,t){if(!t)return e.value;var o="("+n.escapeRegExChars(t)+")";return e.value.replace(new RegExp(o,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")},t.prototype={killerFn:null,initialize:function(){var n,o=this,i="."+o.classes.suggestion,s=o.classes.selected,a=o.options;o.element.setAttribute("autocomplete","off"),o.killerFn=function(t){0===e(t.target).closest("."+o.options.containerClass).length&&(o.killSuggestions(),o.disableKillerFn())},o.noSuggestionsContainer=e('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),o.suggestionsContainer=t.utils.createNode(a.containerClass),n=e(o.suggestionsContainer),n.appendTo(a.appendTo),"auto"!==a.width&&n.width(a.width),n.on("mouseover.autocomplete",i,function(){o.activate(e(this).data("index"))}),n.on("mouseout.autocomplete",function(){o.selectedIndex=-1,n.children("."+s).removeClass(s)}),n.on("click.autocomplete",i,function(){o.select(e(this).data("index"))}),o.fixPositionCapture=function(){o.visible&&o.fixPosition()},e(window).on("resize.autocomplete",o.fixPositionCapture),o.el.on("keydown.autocomplete",function(e){o.onKeyPress(e)}),o.el.on("keyup.autocomplete",function(e){o.onKeyUp(e)}),o.el.on("blur.autocomplete",function(){o.onBlur()}),o.el.on("focus.autocomplete",function(){o.onFocus()}),o.el.on("change.autocomplete",function(e){o.onKeyUp(e)}),o.el.on("input.autocomplete",function(e){o.onKeyUp(e)})},onFocus:function(){var e=this;e.fixPosition(),e.el.val().length>=e.options.minChars&&e.onValueChange()},onBlur:function(){this.enableKillerFn()},abortAjax:function(){var e=this;e.currentRequest&&(e.currentRequest.abort(),e.currentRequest=null)},setOptions:function(t){var n=this,o=n.options;e.extend(o,t),n.isLocal=e.isArray(o.lookup),n.isLocal&&(o.lookup=n.verifySuggestionsFormat(o.lookup)),o.orientation=n.validateOrientation(o.orientation,"bottom"),e(n.suggestionsContainer).css({"max-height":o.maxHeight+"px",width:o.width+"px","z-index":o.zIndex})},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var e=this;e.disabled=!0,clearInterval(e.onChangeInterval),e.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var t=this,n=e(t.suggestionsContainer),o=n.parent().get(0);if(o===document.body||t.options.forceFixPosition){var i=t.options.orientation,s=n.outerHeight(),a=t.el.outerHeight(),l=t.el.offset();if(t.el.closest("#pop-up-live-search").length>0){var r=t.el.closest("#pop-up-live-search").outerWidth(),u={top:l.top,left:l.left};u.maxWidth=r-30+"px"}else if(t.el.closest(".tie-alignleft").length>0){if(is_RTL)var c=Math.floor(l.left+t.el.outerWidth()-t.options.width+1);else var c=Math.floor(l.left-1);var u={top:l.top,left:c}}else{if(is_RTL)var c=Math.floor(l.left-1);else var c=Math.floor(l.left+t.el.outerWidth()-t.options.width+1);var u={top:l.top,left:c}}var g=t.el.closest(".live-search-parent"),d=g.data("skin");if(n.addClass(d),"auto"===i){var p=e(window).height(),h=e(window).scrollTop(),f=-h+l.top-s,v=h+p-(l.top+a+s);i=Math.max(f,v)===f?"top":"bottom"}if("top"===i?u.top+=-s:u.top+=a,o!==document.body){var m,C=n.css("opacity");t.visible||n.css("opacity",0).show(),m=n.offsetParent().offset(),u.top-=m.top,u.left-=m.left,t.visible||n.css("opacity",C).hide()}"auto"===t.options.width&&(u.width=t.el.outerWidth()-2+"px"),n.css(u)}},enableKillerFn:function(){var t=this;e(document).on("click.autocomplete",t.killerFn)},disableKillerFn:function(){var t=this;e(document).off("click.autocomplete",t.killerFn)},killSuggestions:function(){var e=this;e.stopKillSuggestions(),e.intervalId=window.setInterval(function(){e.visible&&(e.el.val(e.currentValue),e.hide()),e.stopKillSuggestions()},50)},stopKillSuggestions:function(){window.clearInterval(this.intervalId)},isCursorAtEnd:function(){var e,t=this,n=t.el.val().length,o=t.element.selectionStart;return"number"==typeof o?o===n:document.selection?(e=document.selection.createRange(),e.moveStart("character",-n),n===e.text.length):!0},onKeyPress:function(e){var t=this;if(!t.disabled&&!t.visible&&e.which===o.DOWN&&t.currentValue)return void t.suggest();if(!t.disabled&&t.visible){switch(e.which){case o.ESC:t.el.val(t.currentValue),t.hide();break;case o.RIGHT:if(t.hint&&t.options.onHint&&t.isCursorAtEnd()){t.selectHint();break}return;case o.TAB:if(t.hint&&t.options.onHint)return void t.selectHint();if(-1===t.selectedIndex)return void t.hide();if(t.select(t.selectedIndex),t.options.tabDisabled===!1)return;break;case o.RETURN:if(-1===t.selectedIndex)return void t.hide();t.select(t.selectedIndex);break;case o.UP:t.moveUp();break;case o.DOWN:t.moveDown();break;default:return}e.stopImmediatePropagation(),e.preventDefault()}},onKeyUp:function(e){var t=this;if(!t.disabled){switch(e.which){case o.UP:case o.DOWN:return}clearInterval(t.onChangeInterval),t.currentValue!==t.el.val()&&(t.findBestHint(),t.options.deferRequestBy>0?t.onChangeInterval=setInterval(function(){t.onValueChange()},t.options.deferRequestBy):t.onValueChange())}},onValueChange:function(){var t=this,n=t.options,o=t.el.val(),i=t.getQuery(o);return t.selection&&t.currentValue!==i&&(t.selection=null,(n.onInvalidateSelection||e.noop).call(t.element)),clearInterval(t.onChangeInterval),t.currentValue=o,t.selectedIndex=-1,n.triggerSelectOnValidInput&&t.isExactMatch(i)?void t.select(0):void(i.length<n.minChars?t.hide():t.getSuggestions(i))},isExactMatch:function(e){var t=this.suggestions;return 1===t.length&&t[0].value.toLowerCase()===e.toLowerCase()},getQuery:function(t){var n,o=this.options.delimiter;return o?(n=t.split(o),e.trim(n[n.length-1])):t},getSuggestionsLocal:function(t){var n,o=this,i=o.options,s=t.toLowerCase(),a=i.lookupFilter,l=parseInt(i.lookupLimit,10);return n={suggestions:e.grep(i.lookup,function(e){return a(e,t,s)})},l&&n.suggestions.length>l&&(n.suggestions=n.suggestions.slice(0,l)),n},getSuggestions:function(t){var n,o,i,s,a=this,l=a.options,r=l.serviceUrl;if(l.params[l.paramName]=t,o=l.ignoreParams?null:l.params,l.onSearchStart.call(a.element,l.params)!==!1){if(e.isFunction(l.lookup))return void l.lookup(t,function(e){a.suggestions=e.suggestions,a.suggest(),l.onSearchComplete.call(a.element,t,e.suggestions)});a.isLocal?n=a.getSuggestionsLocal(t):(e.isFunction(r)&&(r=r.call(a.element,t)),i=r+"?"+e.param(o||{}),n=a.cachedResponse[i]),n&&e.isArray(n.suggestions)?(a.suggestions=n.suggestions,a.suggest(),l.onSearchComplete.call(a.element,t,n.suggestions)):a.isBadQuery(t)?l.onSearchComplete.call(a.element,t,[]):(a.abortAjax(),s={url:r,data:o,type:l.type,dataType:l.dataType},e.extend(s,l.ajaxSettings),a.currentRequest=e.ajax(s).done(function(e){var n;a.currentRequest=null,n=l.transformResult(e,t),a.processResponse(n,t,i),l.onSearchComplete.call(a.element,t,n.suggestions)}).fail(function(e,n,o){l.onSearchError.call(a.element,t,e,n,o)}))}},isBadQuery:function(e){if(!this.options.preventBadQueries)return!1;for(var t=this.badQueries,n=t.length;n--;)if(0===e.indexOf(t[n]))return!0;return!1},hide:function(){var t=this,n=e(t.suggestionsContainer);e.isFunction(t.options.onHide)&&t.visible&&t.options.onHide.call(t.element,n),t.visible=!1,t.selectedIndex=-1,clearInterval(t.onChangeInterval),e(t.suggestionsContainer).hide(),t.signalHint(null)},suggest:function(){if(0===this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var t,n=this,o=n.options,i=o.groupBy,s=o.formatResult,a=n.getQuery(n.currentValue),l=n.classes.suggestion,r=n.classes.selected,u=e(n.suggestionsContainer),c=e(n.noSuggestionsContainer),g=o.beforeRender,d="",p=function(e,n){var o=e.data[i];return t===o?"":(t=o,'<div class="autocomplete-group"><strong>'+t+"</strong></div>")};return o.triggerSelectOnValidInput&&n.isExactMatch(a)?void n.select(0):(e.each(n.suggestions,function(e,t){i&&(d+=p(t,a,e)),d+='<div class="'+l+'" data-index="'+e+'">'+s(t,a)+"</div>"}),this.adjustContainerWidth(),c.detach(),u.html(d),e.isFunction(g)&&g.call(n.element,u),n.fixPosition(),u.show(),o.autoSelectFirst&&(n.selectedIndex=0,u.scrollTop(0),u.children("."+l).first().addClass(r)),n.visible=!0,void n.findBestHint())},noSuggestions:function(){var t=this,n=e(t.suggestionsContainer),o=e(t.noSuggestionsContainer);this.adjustContainerWidth(),o.detach(),n.empty(),n.append(o),t.fixPosition(),n.show(),t.visible=!0},adjustContainerWidth:function(){var t,n=this,o=n.options,i=e(n.suggestionsContainer);"auto"===o.width&&(t=n.el.outerWidth()-2,i.width(t>0?t:300))},findBestHint:function(){var t=this,n=t.el.val().toLowerCase(),o=null;n&&(e.each(t.suggestions,function(e,t){var i=0===t.value.toLowerCase().indexOf(n);return i&&(o=t),!i}),t.signalHint(o))},signalHint:function(t){var n="",o=this;t&&(n=o.currentValue+t.value.substr(o.currentValue.length)),o.hintValue!==n&&(o.hintValue=n,o.hint=t,(this.options.onHint||e.noop)(n))},verifySuggestionsFormat:function(t){return t.length&&"string"==typeof t[0]?e.map(t,function(e){return{value:e,data:null}}):t},validateOrientation:function(t,n){return t=e.trim(t||"").toLowerCase(),-1===e.inArray(t,["auto","bottom","top"])&&(t=n),t},processResponse:function(e,t,n){var o=this,i=o.options;e.suggestions=o.verifySuggestionsFormat(e.suggestions),i.noCache||(o.cachedResponse[n]=e,i.preventBadQueries&&0===e.suggestions.length&&o.badQueries.push(t)),t===o.getQuery(o.currentValue)&&(o.suggestions=e.suggestions,o.suggest())},activate:function(t){var n,o=this,i=o.classes.selected,s=e(o.suggestionsContainer),a=s.find("."+o.classes.suggestion);return s.find("."+i).removeClass(i),o.selectedIndex=t,-1!==o.selectedIndex&&a.length>o.selectedIndex?(n=a.get(o.selectedIndex),e(n).addClass(i),n):null},selectHint:function(){var t=this,n=e.inArray(t.hint,t.suggestions);t.select(n)},select:function(e){var t=this;t.hide(),t.onSelect(e)},moveUp:function(){var t=this;if(-1!==t.selectedIndex)return 0===t.selectedIndex?(e(t.suggestionsContainer).children().first().removeClass(t.classes.selected),t.selectedIndex=-1,t.el.val(t.currentValue),void t.findBestHint()):void t.adjustScroll(t.selectedIndex-1)},moveDown:function(){var e=this;e.selectedIndex!==e.suggestions.length-1&&e.adjustScroll(e.selectedIndex+1)},adjustScroll:function(t){var n=this,o=n.activate(t);if(o){var i,s,a,l=e(o).outerHeight();i=o.offsetTop,s=e(n.suggestionsContainer).scrollTop(),a=s+n.options.maxHeight-l,s>i?e(n.suggestionsContainer).scrollTop(i):i>a&&e(n.suggestionsContainer).scrollTop(i-n.options.maxHeight+l),n.options.preserveInput||n.el.val(n.getValue(n.suggestions[t].value)),n.signalHint(null)}},onSelect:function(t){var n=this,o=n.options.onSelect,i=n.suggestions[t];n.currentValue=n.getValue(i.value),n.currentValue===n.el.val()||n.options.preserveInput||n.el.val(n.currentValue),n.signalHint(null),n.suggestions=[],n.selection=i,e.isFunction(o)&&o.call(n.element,i)},getValue:function(e){var t,n,o=this,i=o.options.delimiter;return i?(t=o.currentValue,n=t.split(i),1===n.length?e:t.substr(0,t.length-n[n.length-1].length)+e):e},dispose:function(){var t=this;t.el.off(".autocomplete").removeData("autocomplete"),t.disableKillerFn(),e(window).off("resize.autocomplete",t.fixPositionCapture),e(t.suggestionsContainer).remove()}},e.fn.autocomplete=e.fn.devbridgeAutocomplete=function(n,o){var i="autocomplete";return 0===arguments.length?this.first().data(i):this.each(function(){var s=e(this),a=s.data(i);"string"==typeof n?a&&"function"==typeof a[n]&&a[n](o):(a&&a.dispose&&a.dispose(),a=new t(this,n),s.data(i,a))})}});
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(){function a(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function l(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function n(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http:// www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(r){setTimeout(function(){throw r},1)}if("scroll"===C){var u,w,z,A=/^x$/i.test(h.axis)?"Left":"Top",D=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,u=h.container["scroll"+A],z=u+m(f).position()[A.toLowerCase()]+D):h.container=null:(u=t.State.scrollAnchor[t.State["scrollProperty"+A]],w=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===A?"Top":"Left")]],z=m(f).offset()[A.toLowerCase()]+D),i={scroll:{rootPropertyValue:!1,startValue:u,currentValue:u,endValue:z,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:A,alternateValue:w}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var E=m.extend(!0,{},g(f).tweensContainer);for(var F in E)if("element"!==F){var G=E[F].startValue;E[F].startValue=E[F].currentValue=E[F].endValue,E[F].endValue=G,p.isEmptyObject(s)||(E[F].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(E[F]),f)}i=E}else if("start"===C){var E;g(f).tweensContainer&&g(f).isAnimating===!0&&(E=g(f).tweensContainer),m.each(q,function(b,c){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(b)){var e=a(c,!0),f=e[0],g=e[1],h=e[2];if(v.RegEx.isHex.test(f)){for(var i=["Red","Green","Blue"],j=v.Values.hexToRgb(f),k=h?v.Values.hexToRgb(h):d,l=0;l<i.length;l++){var m=[j[l]];g&&m.push(g),k!==d&&m.push(k[l]),q[b+i[l]]=m}delete q[b]}}});for(var H in q){var K=a(q[H]),L=K[0],M=K[1],N=K[2];H=v.Names.camelCase(H);var O=v.Hooks.getRoot(H),P=!1;if(g(f).isSVG||"tween"===O||v.Names.prefixCheck(O)[1]!==!1||v.Normalizations.registered[O]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(H)&&!N&&0!==L&&(N=0),h._cacheValues&&E&&E[H]?(N===d&&(N=E[H].endValue+E[H].unitType),P=g(f).rootPropertyValueCache[O]):v.Hooks.registered[H]?N===d?(P=v.getPropertyValue(f,O),N=v.getPropertyValue(f,H,P)):P=v.Hooks.templates[O][1]:N===d&&(N=v.getPropertyValue(f,H));var Q,R,S,T=!1;if(Q=l(H,N),N=Q[0],S=Q[1],Q=l(H,L),L=Q[0].replace(/^([+-\/*])=/,function(a,b){return T=b,""}),R=Q[1],N=parseFloat(N)||0,L=parseFloat(L)||0,"%"===R&&(/^(fontSize|lineHeight)$/.test(H)?(L/=100,R="em"):/^scale/.test(H)?(L/=100,R=""):/(Red|Green|Blue)$/i.test(H)&&(L=L/100*255,R="")),/[\/*]/.test(T))R=S;else if(S!==R&&0!==N)if(0===L)R=S;else{e=e||n();var U=/margin|padding|left|right|width|text|word|letter/i.test(H)||/X$/.test(H)||"x"===H?"x":"y";switch(S){case"%":N*="x"===U?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:N*=e[S+"ToPx"]}switch(R){case"%":N*=1/("x"===U?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:N*=1/e[R+"ToPx"]}}switch(T){case"+":L=N+L;break;case"-":L=N-L;break;case"*":L=N*L;break;case"/":L=N/L}i[H]={rootPropertyValue:P,startValue:N,currentValue:N,endValue:L,unitType:R,easing:M},t.debug&&console.log("tweensContainer ("+H+"): "+JSON.stringify(i[H]),f)}else t.debug&&console.log("Skipping ["+O+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish|finishAll)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"finishAll":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==q||s!==!0&&!p.isString(s)||(m.each(m.queue(b,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b()}),m.queue(b,p.isString(s)?s:"",[]))});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)
}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):("finish"===q||"finishAll"===q)&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)});
/*! VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
!function(t){"function"==typeof require&&"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["velocity"],t):t()}(function(){return function(t,a,e,r){function n(t,a){var e=[];return t&&a?($.each([t,a],function(t,a){var r=[];$.each(a,function(t,a){for(;a.toString().length<5;)a="0"+a;r.push(a)}),e.push(r.join(""))}),parseFloat(e[0])>parseFloat(e[1])):!1}if(!t.Velocity||!t.Velocity.Utilities)return void(a.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var i=t.Velocity,$=i.Utilities,s=i.version,o={major:1,minor:1,patch:0};if(n(o,s)){var l="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http:// github.com/julianshapiro/velocity.";throw alert(l),new Error(l)}i.RegisterEffect=i.RegisterUI=function(t,a){function e(t,a,e,r){var n=0,s;$.each(t.nodeType?[t]:t,function(t,a){r&&(e+=t*r),s=a.parentNode,$.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(t,e){n+=parseFloat(i.CSS.getPropertyValue(a,e))})}),i.animate(s,{height:("In"===a?"+":"-")+"="+n},{queue:!1,easing:"ease-in-out",duration:e*("In"===a?.6:1)})}return i.Redirects[t]=function(n,s,o,l,c,u){function f(){s.display!==r&&"none"!==s.display||!/Out$/.test(t)||$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"display","none")}),s.complete&&s.complete.call(c,c),u&&u.resolver(c||n)}var p=o===l-1;a.defaultDuration="function"==typeof a.defaultDuration?a.defaultDuration.call(c,c):parseFloat(a.defaultDuration);for(var d=0;d<a.calls.length;d++){var g=a.calls[d],y=g[0],m=s.duration||a.defaultDuration||1e3,X=g[1],Y=g[2]||{},O={};if(O.duration=m*(X||1),O.queue=s.queue||"",O.easing=Y.easing||"ease",O.delay=parseFloat(Y.delay)||0,O._cacheValues=Y._cacheValues||!0,0===d){if(O.delay+=parseFloat(s.delay)||0,0===o&&(O.begin=function(){s.begin&&s.begin.call(c,c);var a=t.match(/(In|Out)$/);a&&"In"===a[0]&&y.opacity!==r&&$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"opacity",0)}),s.animateParentHeight&&a&&e(c,a[0],m+O.delay,s.stagger)}),null!==s.display)if(s.display!==r&&"none"!==s.display)O.display=s.display;else if(/In$/.test(t)){var v=i.CSS.Values.getDisplayType(n);O.display="inline"===v?"inline-block":v}s.visibility&&"hidden"!==s.visibility&&(O.visibility=s.visibility)}d===a.calls.length-1&&(O.complete=function(){if(a.reset){for(var t in a.reset){var e=a.reset[t];i.CSS.Hooks.registered[t]!==r||"string"!=typeof e&&"number"!=typeof e||(a.reset[t]=[a.reset[t],a.reset[t]])}var s={duration:0,queue:!1};p&&(s.complete=f),i.animate(n,a.reset,s)}else p&&f()},"hidden"===s.visibility&&(O.visibility=s.visibility)),i.animate(n,y,O)}},i},i.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var c in i.RegisterEffect.packagedEffects)i.RegisterEffect(c,i.RegisterEffect.packagedEffects[c]);i.RunSequence=function(t){var a=$.extend(!0,[],t);a.length>1&&($.each(a.reverse(),function(t,e){var r=a[t+1];if(r){var n=e.o||e.options,s=r.o||r.options,o=n&&n.sequenceQueue===!1?"begin":"complete",l=s&&s[o],c={};c[o]=function(){var t=r.e||r.elements,a=t.nodeType?[t]:t;l&&l.call(a,a),i(e)},r.o?r.o=$.extend({},s,c):r.options=$.extend({},s,c)}}),a.reverse()),i(a[0])}}(window.jQuery||window.Zepto||window,window,document)});
/*! DETECT IE */
function detectIE(){ var msie = userAgent.indexOf('MSIE '); if (msie > 0){ return parseInt(userAgent.substring(msie + 5, userAgent.indexOf('.', msie)), 10);/*IE 10 or older*/} var trident = userAgent.indexOf('Trident/'); if (trident > 0){ var rv = userAgent.indexOf('rv:'); return parseInt(userAgent.substring(rv + 3, userAgent.indexOf('.', rv)), 10); /* IE 11 */} var edge = userAgent.indexOf('Edge/'); if (edge > 0){ return parseInt(userAgent.substring(edge + 5, userAgent.indexOf('.', edge)), 10); /* Edge (IE 12+) */} return false; /*other browser*/ }
/*! jQuery & Zepto Lazy v1.7.5 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,l,u){function f(){L=t.devicePixelRatio>1,c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(l.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),l.a=function(t){c(t),i.push.apply(i,t)},l.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},l.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+u+" resize."+u,l.e))}function c(t){var i=a.defaultImage,o=a.placeholder,l=a.imageBase,u=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(u)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||l;g===N&&h&&A.attr(u)&&A.attr(u,b(A.attr(u),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,l=!1,u=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||u,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(l=!0,g.data(c,!0),d(g,h,v,p))}l&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var l=a.attribute,u=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(l+" "+u+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(l))||"";h.attr(C,t.attr(f)).attr(F,t.attr(u)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,l){function u(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||l?u():n=setTimeout(u,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+u,f)}function a(a,o){var l=this,u=n.extend({},l.config,o),f={},c=u.name+"-"+ ++i;return l.config=function(t,r){return r===e?u[t]:(u[t]=r,l)},l.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),l},l.getItems=function(){return f.g?f.g():{}},l.update=function(t){return f.e&&f.e({},!t),l},l.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),l},l.loadAll=function(){return f.e&&f.e({all:!0},!0),l},l.destroy=function(){return n(u.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(l,u,a,f,c),u.chainable?a:l}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,l=o._f||(o._f={}),u=0,f=t.length;u<f;u++)(o[t[u]]===e||n.isFunction(o[t[u]]))&&(o[t[u]]=i);for(var c=0,s=r.length;c<s;c++)l[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);
/*jQuery.flexMenu 1.4.2 | https://github.com/352Media/flexMenu */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var i,n=e(window).width(),l=e(window).height(),o=[];e(window).resize(function(){clearTimeout(i),i=setTimeout(function(){e(window).width()===n&&e(window).height()===l||(e(o).each(function(){e(this).flexMenu({undo:!0}).flexMenu(this.options)}),n=e(window).width(),l=e(window).height())},200)}),e.fn.flexMenu=function(i){var n,l=e.extend({threshold:2,cutoff:2,linkText:"More",linkTitle:"View More",linkTextAll:"Menu",linkTitleAll:"Open/Close Menu",showOnHover:!0,popupAbsolute:!0,popupClass:"",undo:!1},i);return this.options=l,(n=e.inArray(this,o))>=0?o.splice(n,1):o.push(this),this.each(function(){var i=e(this),n=i.find("> li");if(n.length){var o,t,f,u,d,r,p=n.first(),s=n.last(),a=i.find("li").length,h=Math.floor(p.offset().top),c=Math.floor(p.outerHeight(!0)),M=!1;function w(e){return Math.ceil(e.offset().top)>=h+c}if(w(s)&&a>l.threshold&&!l.undo&&i.is(":visible")){var v=e('<ul class="flexMenu-popup" style="display:none;'+(l.popupAbsolute?" position: absolute;":"")+'"></ul>');for(v.addClass(l.popupClass),r=a;r>1;r--){if(t=w(o=i.find("> li:last-child")),r-1<=l.cutoff){e(i.children().get().reverse()).appendTo(v),M=!0;break}if(!t)break;o.appendTo(v)}M?i.append('<li class="flexMenu-viewMore flexMenu-allInPopup"><a href="#" title="'+l.linkTitleAll+'">'+l.linkTextAll+"</a></li>"):i.append('<li class="flexMenu-viewMore"><a href="#" title="'+l.linkTitle+'">'+l.linkText+"</a></li>"),w(f=i.find("> li.flexMenu-viewMore"))&&i.find("> li:nth-last-child(2)").appendTo(v),v.children().each(function(e,i){v.prepend(i)}),f.append(v),i.find("> li.flexMenu-viewMore > a").click(function(i){var n;n=f,e("li.flexMenu-viewMore.active").not(n).removeClass("active").find("> ul").hide(),v.toggle(),i.preventDefault()}),l.showOnHover&&"undefined"!=typeof Modernizr&&!Modernizr.touch&&f.hover(function(){v.show()},function(){v.hide()})}else if(l.undo&&i.find("ul.flexMenu-popup")){for(u=(d=i.find("ul.flexMenu-popup")).find("li").length,r=1;r<=u;r++)d.find("> li:first-child").appendTo(i);d.remove(),i.find("> li.flexMenu-viewMore").remove()}}})}});
/* tiesticky.js 1.2.0 - headroom.js | URL: http://wicky.nillia.ms/headroom.js */
!function(t){t&&(t.fn.tiesticky=function(i){return this.each(function(){var e=t(this),s=e.data("tiesticky"),o="object"==typeof i&&i;o=t.extend(!0,{},TieSticky.options,o),s||((s=new TieSticky(this,o)).init(),e.data("tiesticky",s)),"string"==typeof i&&(s[i](),"destroy"===i&&e.removeData("tiesticky"))})},t("[data-tiesticky]").each(function(){var i=t(this);i.tiesticky(i.data())}))}(window.jQuery),function(t,i){"use strict";"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?module.exports=i():t.TieSticky=i()}(this,function(){"use strict";var t={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};function i(t){this.callback=t,this.ticking=!1}function e(t,i){var s;i=function t(i){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var e,s,o,n=i||{};for(s=1;s<arguments.length;s++){var h=arguments[s]||{};for(e in h)"object"!=typeof n[e]||(o=n[e])&&"undefined"!=typeof window&&(o===window||o.nodeType)?n[e]=n[e]||h[e]:n[e]=t(n[e],h[e])}return n}(i,e.options),this.lastKnownScrollY=0,this.elem=t,this.tolerance=(s=i.tolerance)===Object(s)?s:{down:s,up:s},this.classes=i.classes,this.behaviorMode=i.behaviorMode,this.scroller=i.scroller,this.initialised=!1,this.onPin=i.onPin,this.onUnpin=i.onUnpin,this.onTop=i.onTop,this.onNotTop=i.onNotTop,this.onBottom=i.onBottom,this.onNotBottom=i.onNotBottom,this.offset=i.offset,this.windwidth=i.windwidth,this.offset="default"!=this.behaviorMode?this.offset+this.elem.offsetHeight:this.offset,this.offset=$body.hasClass("admin-bar")?this.offset-i.adminBarH:this.offset,this.offset=$body.hasClass("border-layout")?this.offset-25:this.offset,this.offset=$body.hasClass("border-layout")&&this.windwidth<992?this.offset+25:this.offset,this.menuHeight=i.menuHeight,this.isHightestThanSticky=i.isHightestThanSticky,this.heightDiff=i.heightDiff}return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,i.prototype={constructor:i,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){if(e.cutsTheMustard)return"default"==this.behaviorMode&&this.elem.classList.add("default-behavior-mode"),this.debouncer=new i(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var t=this.classes;this.initialised=!0,this.elem.classList.remove(t.unpinned,t.pinned,t.top,t.notTop,t.initial,"fixed-nav"),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var t=this.elem.classList,i=this.classes;!t.contains(i.pinned)&&t.contains(i.unpinned)||(t.add(i.unpinned),t.remove(i.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var t=this.elem.classList,i=this.classes;t.contains(i.unpinned)&&(t.remove(i.unpinned),t.add(i.pinned),this.onPin&&this.onPin.call(this))},top:function(){var t=this.elem.classList,i=this.classes;t.contains(i.top)||(t.add(i.top),t.remove(i.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var t=this.elem.classList,i=this.classes;t.contains(i.notTop)||(t.add(i.notTop),t.remove(i.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var t=this.elem.classList,i=this.classes;t.contains(i.bottom)||(t.add(i.bottom),t.remove(i.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var t=this.elem.classList,i=this.classes;t.contains(i.notBottom)||(t.add(i.notBottom),t.remove(i.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(t){return Math.max(t.offsetHeight,t.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var t=document.body,i=document.documentElement;return Math.max(t.scrollHeight,i.scrollHeight,t.offsetHeight,i.offsetHeight,t.clientHeight,i.clientHeight)},getElementHeight:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(t){var i=t<0,e=t+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return i||e},toleranceExceeded:function(t,i){return Math.abs(t-this.lastKnownScrollY)>=this.tolerance[i]},shouldUnpin:function(t,i){var e=t>this.lastKnownScrollY,s=t>=this.offset;return e&&s&&i},shouldPin:function(t,i){var e=t<this.lastKnownScrollY,s=t<=this.offset;return e&&i||s},update:function(){var t=this.getScrollY(),i=t>this.lastKnownScrollY?"down":"up",e=this.toleranceExceeded(t,i);this.isOutOfBounds(t)||("default"==this.behaviorMode&&this.isHightestThanSticky&&this.offset<t&&t<this.offset+this.heightDiff?this.elem.classList.add("just-before-sticky"):this.elem.classList.remove("just-before-sticky"),t<=this.offset-this.elem.offsetHeight&&"default"!=this.behaviorMode?(this.top(),this.elem.classList.add("unpinned-no-transition")):t<=this.offset&&"default"==this.behaviorMode?this.top():t>this.offset&&(this.notTop(),"default"==this.behaviorMode&&t<this.offset+100&&jQuery(".autocomplete-suggestions").hide()),t+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(t,e)?this.unpin():this.shouldPin(t,e)&&(this.pin(),t>this.offset&&"default"!=this.behaviorMode&&(this.elem.classList.remove("unpinned-no-transition"),jQuery(".autocomplete-suggestions").hide())),this.lastKnownScrollY=t)}},e.options={tolerance:{up:0,down:0},offset:0,behaviorMode:"upwards",scroller:window,classes:{initial:"fixed",pinned:"fixed-pinned",unpinned:"fixed-unpinned",top:"fixed-top",notTop:"fixed-nav",bottom:"fixed-bottom",notBottom:"fixed-not-bottom"}},e.cutsTheMustard=void 0!==t&&t.rAF&&t.bind&&t.classList,e});
/*! jQuery iLightBox (2.4.0) - Revolutionary Lightbox Plugin http:// www.ilightbox.net/ */
(function(g,p,Q){function F(a,b){return parseInt(a.css(b),10)||0}function J(){var a=p,b="inner";"innerWidth"in p||(b="client",a=document.documentElement||document.body);return{width:a[b+"Width"],height:a[b+"Height"]}}function ia(){var a=L();p.location.hash="";p.scrollTo(a.x,a.y)}function ja(a,b){a="//ilightbox.net/getSource/jsonp.php?url="+encodeURIComponent(a).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A");g.ajax({url:a,dataType:"jsonp"});iLCallback=
function(a){b.call(this,a)}}function R(a){var b=[];g("*",a).each(function(){var a="";"none"!=g(this).css("background-image")?a=g(this).css("background-image"):"undefined"!=typeof g(this).attr("src")&&"img"==this.nodeName.toLowerCase()&&(a=g(this).attr("src"));if(-1==a.indexOf("gradient")){a=a.replace(/url\(\"/g,"");a=a.replace(/url\(/g,"");a=a.replace(/\"\)/g,"");a=a.replace(/\)/g,"");a=a.split(",");for(var d=0;d<a.length;d++)if(0<a[d].length&&-1==g.inArray(a[d],b)){var e="";D.msie&&9>D.version&&
(e="?"+M(3E3*S()));b.push(a[d]+e)}}});return b}function Z(a){a=a.split(".").pop().toLowerCase();var b=-1!==a.indexOf("?")?a.split("?").pop():"";return a.replace(b,"")}function aa(a){a=Z(a);return-1!==T.image.indexOf(a)?"image":-1!==T.flash.indexOf(a)?"flash":-1!==T.video.indexOf(a)?"video":"iframe"}function ba(a,b){return parseInt(b/100*a)}function U(a){return(a=String(a).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/))?
{href:a[0]||"",protocol:a[1]||"",authority:a[2]||"",host:a[3]||"",hostname:a[4]||"",port:a[5]||"",pathname:a[6]||"",search:a[7]||"",hash:a[8]||""}:null}function N(a,b){function c(a){var b=[];a.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(a){"/.."===a?b.pop():b.push(a)});return b.join("").replace(/^\//,"/"===a.charAt(0)?"/":"")}b=U(b||"");a=U(a||"");return b&&a?(b.protocol||a.protocol)+(b.protocol||b.authority?b.authority:a.authority)+
c(b.protocol||b.authority||"/"===b.pathname.charAt(0)?b.pathname:b.pathname?(a.authority&&!a.pathname?"/":"")+a.pathname.slice(0,a.pathname.lastIndexOf("/")+1)+b.pathname:a.pathname)+(b.protocol||b.authority||b.pathname?b.search:b.search||a.search)+b.hash:null}function ka(a,b,c){this.php_js=this.php_js||{};this.php_js.ENV=this.php_js.ENV||{};var d=0,e=0,f=0,h={dev:-6,alpha:-5,a:-5,beta:-4,b:-4,RC:-3,rc:-3,"#":-2,p:1,pl:1};d=function(a){a=(""+a).replace(/[_\-+]/g,".");a=a.replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,
".");return a.length?a.split("."):[-8]};var g=function(a){return a?isNaN(a)?h[a]||-7:parseInt(a,10):0};a=d(a);b=d(b);e=ca(a.length,b.length);for(d=0;d<e;d++)if(a[d]!=b[d])if(a[d]=g(a[d]),b[d]=g(b[d]),a[d]<b[d]){f=-1;break}else if(a[d]>b[d]){f=1;break}if(!c)return f;switch(c){case ">":case "gt":return 0<f;case ">=":case "ge":return 0<=f;case "<=":case "le":return 0>=f;case "==":case "=":case "eq":return 0===f;case "<>":case "!=":case "ne":return 0!==f;case "":case "<":case "lt":return 0>f;default:return null}}
function L(){var a=0,b=0;"number"==typeof p.pageYOffset?(b=p.pageYOffset,a=p.pageXOffset):document.body&&(document.body.scrollLeft||document.body.scrollTop)?(b=document.body.scrollTop,a=document.body.scrollLeft):document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)&&(b=document.documentElement.scrollTop,a=document.documentElement.scrollLeft);return{x:a,y:b}}function da(a,b,c){var d=r[a+b];null==d&&(d=r[b]);return null!=d?(0==b.indexOf(a)&&null==c&&(c=
b.substring(a.length)),null==c&&(c=b),c+'="'+d+'" '):""}function A(a,b){if(0==a.indexOf("emb#"))return"";0==a.indexOf("obj#")&&null==b&&(b=a.substring(4));return da("obj#",a,b)}function G(a,b){if(0==a.indexOf("obj#"))return"";0==a.indexOf("emb#")&&null==b&&(b=a.substring(4));return da("emb#",a,b)}function ea(a,b){var c,d="",e=b?" />":">";-1==a.indexOf("emb#")&&(c=r["obj#"+a],null==c&&(c=r[a]),0==a.indexOf("obj#")&&(a=a.substring(4)),null!=c&&(d='  <param name="'+a+'" value="'+c+'"'+e+"\n"));return d}
function la(){for(var a=0;a<arguments.length;a++){var b=arguments[a];delete r[b];delete r["emb#"+b];delete r["obj#"+b]}}function ma(){var a="QT_GenerateOBJECTText";var b=arguments;if(4>b.length||0!=b.length%2)b=na,b=b.replace("%%",a),alert(b),a="";else{r=[];r.src=b[0];r.width=b[1];r.height=b[2];r.classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";r.pluginspage="http://www.apple.com/quicktime/download/";a=b[3];if(null==a||""==a)a="6,0,2,0";r.codebase="http://www.apple.com/qtactivex/qtplugin.cab#version="+
a;for(var c,d=4;d<b.length;d+=2)c=b[d].toLowerCase(),a=b[d+1],"name"==c||"id"==c?r.name=a:r[c]=a;b="<object "+A("classid")+A("width")+A("height")+A("codebase")+A("name","id")+A("tabindex")+A("hspace")+A("vspace")+A("border")+A("align")+A("class")+A("title")+A("accesskey")+A("noexternaldata")+">\n"+ea("src",!1);d="  <embed "+G("src")+G("width")+G("height")+G("pluginspage")+G("name")+G("align")+G("tabindex");la("src","width","height","pluginspage","classid","codebase","name","tabindex","hspace","vspace",
"border","align","noexternaldata","class","title","accesskey");for(c in r)a=r[c],null!=a&&(d+=G(c),b+=ea(c,!1));a=b+d+"> </embed>\n</object>"}return a}var T={flash:["swf"],image:"bmp gif jpeg jpg png tiff tif jfif jpe".split(" "),iframe:"asp aspx cgi cfm htm html jsp php pl php3 php4 php5 phtml rb rhtml shtml txt".split(" "),video:"avi mov mpg mpeg movie mp4 webm ogv ogg 3gp m4v".split(" ")},O=g(p),E=g(document),D,B,H,t="",V=navigator.userAgent||navigator.vendor||p.opera,z=!!("ontouchstart"in p)&&
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(V),oa=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(V)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(V.substr(0,
4)),K=z?"itap.iLightBox":"click.iLightBox",pa=z?"touchstart.iLightBox":"mousedown.iLightBox",qa=z?"touchend.iLightBox":"mouseup.iLightBox",W=z?"touchmove.iLightBox":"mousemove.iLightBox",I=Math.abs,P=Math.sqrt,X=Math.round,ca=Math.max,Y=Math.min,M=Math.floor,S=Math.random,fa=function(a,b,c,d){var e=this;e.options=b;e.selector=a.selector||a;e.context=a.context;e.instant=d;1>c.length?e.attachItems():e.items=c;e.vars={total:e.items.length,start:0,current:null,next:null,prev:null,BODY:g("body"),loadRequests:0,
overlay:g('<div class="ilightbox-overlay"></div>'),loader:g('<div class="ilightbox-loader"><div></div></div>'),toolbar:g('<div class="ilightbox-toolbar"></div>'),innerToolbar:g('<div class="ilightbox-inner-toolbar"></div>'),title:g('<div class="ilightbox-title"></div>'),closeButton:g('<a class="ilightbox-close" title="'+e.options.text.close+'"></a>'),fullScreenButton:g('<a class="ilightbox-fullscreen" title="'+e.options.text.enterFullscreen+'"></a>'),innerPlayButton:g('<a class="ilightbox-play" title="'+
e.options.text.slideShow+'"></a>'),innerNextButton:g('<a class="ilightbox-next-button" title="'+e.options.text.next+'"></a>'),innerPrevButton:g('<a class="ilightbox-prev-button" title="'+e.options.text.previous+'"></a>'),holder:g('<div class="ilightbox-holder'+(z?" supportTouch":"")+'" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),nextPhoto:g('<div class="ilightbox-holder'+(z?" supportTouch":"")+' ilightbox-next" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
prevPhoto:g('<div class="ilightbox-holder'+(z?" supportTouch":"")+' ilightbox-prev" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),nextButton:g('<a class="ilightbox-button ilightbox-next-button" ondragstart="return false;" title="'+e.options.text.next+'"><span></span></a>'),prevButton:g('<a class="ilightbox-button ilightbox-prev-button" ondragstart="return false;" title="'+e.options.text.previous+'"><span></span></a>'),thumbnails:g('<div class="ilightbox-thumbnails" ondragstart="return false;"><div class="ilightbox-thumbnails-container"><a class="ilightbox-thumbnails-dragger"></a><div class="ilightbox-thumbnails-grid"></div></div></div>'),
thumbs:!1,nextLock:!1,prevLock:!1,hashLock:!1,isMobile:!1,mobileMaxWidth:980,isInFullScreen:!1,isSwipe:!1,mouseID:0,cycleID:0,isPaused:0};e.vars.hideableElements=e.vars.nextButton.add(e.vars.prevButton);e.normalizeItems();e.availPlugins();e.options.startFrom=0<e.options.startFrom&&e.options.startFrom>=e.vars.total?e.vars.total-1:e.options.startFrom;e.options.startFrom=e.options.randomStart?M(S()*e.vars.total):e.options.startFrom;e.vars.start=e.options.startFrom;d?e.instantCall():e.patchItemsEvents();
e.options.linkId&&(e.hashChangeHandler(),O.iLightBoxHashChange(function(){e.hashChangeHandler()}));z&&(a=/(click|mouseenter|mouseleave|mouseover|mouseout)/ig,e.options.caption.show=e.options.caption.show.replace(a,"itap"),e.options.caption.hide=e.options.caption.hide.replace(a,"itap"),e.options.social.show=e.options.social.show.replace(a,"itap"),e.options.social.hide=e.options.social.hide.replace(a,"itap"));e.options.controls.arrows&&g.extend(e.options.styles,{nextOffsetX:0,prevOffsetX:0,nextOpacity:0,
prevOpacity:0})};fa.prototype={showLoader:function(){this.vars.loadRequests+=1;"horizontal"==this.options.path.toLowerCase()?this.vars.loader.addClass("ilightbox-show").stop().animate({top:"-30px"},this.options.show.speed,"easeOutCirc"):this.vars.loader.addClass("ilightbox-show").stop().animate({left:"-30px"},this.options.show.speed,"easeOutCirc")},hideLoader:function(){--this.vars.loadRequests;this.vars.loadRequests=0>this.vars.loadRequests?0:this.vars.loadRequests;"horizontal"==this.options.path.toLowerCase()?
0>=this.vars.loadRequests&&this.vars.loader.removeClass("ilightbox-show").stop().animate({top:"-192px"},this.options.show.speed,"easeInCirc"):0>=this.vars.loadRequests&&this.vars.loader.removeClass("ilightbox-show").stop().animate({left:"-192px"},this.options.show.speed,"easeInCirc")},createUI:function(){var a=this;a.ui={currentElement:a.vars.holder,nextElement:a.vars.nextPhoto,prevElement:a.vars.prevPhoto,currentItem:a.vars.current,nextItem:a.vars.next,prevItem:a.vars.prev,hide:function(){a.closeAction()},
refresh:function(){0<arguments.length?a.repositionPhoto(!0):a.repositionPhoto()},fullscreen:function(){a.fullScreenAction()}}},attachItems:function(){var a=this,b=[],c=[];g(a.selector,a.context).each(function(){var d=g(this),e=d.attr(a.options.attr)||null,f=d.data("options")&&eval("({"+d.data("options")+"})")||{},h=d.data("caption"),l=d.data("title"),k=d.data("type")||aa(e);c.push({URL:e,caption:h,title:l,type:k,options:f});a.instant||b.push(d)});a.items=c;a.itemsObject=b},normalizeItems:function(){var a=
this,b=[];g.each(a.items,function(c,d){"string"==typeof d&&(d={url:d});var e=d.url||d.URL||null,f=d.options||{},h=d.caption||null,l=d.title||null,k=d.type?d.type.toLowerCase():aa(e),n="object"!=typeof e?Z(e):"";f.thumbnail=f.thumbnail||("image"==k?e:null);f.videoType=f.videoType||null;f.skin=f.skin||a.options.skin;f.width=f.width||null;f.height=f.height||null;f.mousewheel="undefined"!=typeof f.mousewheel?f.mousewheel:!0;f.swipe="undefined"!=typeof f.swipe?f.swipe:!0;f.social="undefined"!=typeof f.social?
f.social:a.options.social.buttons&&g.extend({},{},a.options.social.buttons);"video"==k&&(f.html5video="undefined"!=typeof f.html5video?f.html5video:{},f.html5video.webm=f.html5video.webm||f.html5video.WEBM||null,f.html5video.controls="undefined"!=typeof f.html5video.controls?f.html5video.controls:"controls",f.html5video.preload=f.html5video.preload||"metadata",f.html5video.autoplay="undefined"!=typeof f.html5video.autoplay?f.html5video.autoplay:!1);f.width&&f.height||("video"==k?(f.width=1280,f.height=
720):"iframe"==k?(f.width="100%",f.height="90%"):"flash"==k&&(f.width=1280,f.height=720));delete d.url;d.index=c;d.URL=e;d.caption=h;d.title=l;d.type=k;d.options=f;d.ext=n;b.push(d)});a.items=b},instantCall:function(){var a=this.vars.start;this.vars.current=a;this.vars.next=this.items[a+1]?a+1:null;this.vars.prev=this.items[a-1]?a-1:null;this.addContents();this.patchEvents()},addContents:function(){var a=this,b=a.vars,c=a.options,d=J(),e=c.path.toLowerCase(),f=0<b.total&&a.items.filter(function(a,
b,d){return-1===["image","flash","video"].indexOf(a.type)&&"undefined"===typeof a.recognized&&(c.smartRecognition||a.options.smartRecognition)}),h=0<f.length;c.mobileOptimizer&&!c.innerToolbar&&(b.isMobile=d.width<=b.mobileMaxWidth);b.overlay.addClass(c.skin).hide().css("opacity",c.overlay.opacity);c.linkId&&b.overlay[0].setAttribute("linkid",c.linkId);c.controls.toolbar&&(b.toolbar.addClass(c.skin).append(b.closeButton),c.controls.fullscreen&&b.toolbar.append(b.fullScreenButton),c.controls.slideshow&&
b.toolbar.append(b.innerPlayButton),1<b.total&&b.toolbar.append(b.innerPrevButton).append(b.innerNextButton));b.BODY.addClass("ilightbox-noscroll").append(b.overlay).append(b.loader).append(b.holder).append(b.nextPhoto).append(b.prevPhoto);c.innerToolbar||b.BODY.append(b.toolbar);c.controls.arrows&&b.BODY.append(b.nextButton).append(b.prevButton);c.controls.thumbnail&&1<b.total&&(b.BODY.append(b.thumbnails),b.thumbnails.addClass(c.skin).addClass("ilightbox-"+e),g("div.ilightbox-thumbnails-grid",b.thumbnails).empty(),
b.thumbs=!0);d="horizontal"==c.path.toLowerCase()?{left:parseInt(d.width/2-b.loader.outerWidth()/2)}:{top:parseInt(d.height/2-b.loader.outerHeight()/2)};b.loader.addClass(c.skin).css(d);b.nextButton.add(b.prevButton).addClass(c.skin);"horizontal"==e&&b.loader.add(b.nextButton).add(b.prevButton).addClass("horizontal");b.BODY[b.isMobile?"addClass":"removeClass"]("isMobile");c.infinite||(b.prevButton.add(b.prevButton).add(b.innerPrevButton).add(b.innerNextButton).removeClass("disabled"),0==b.current&&
b.prevButton.add(b.innerPrevButton).addClass("disabled"),b.current>=b.total-1&&b.nextButton.add(b.innerNextButton).addClass("disabled"));c.show.effect?(b.overlay.stop().fadeIn(c.show.speed),b.toolbar.stop().fadeIn(c.show.speed)):(b.overlay.show(),b.toolbar.show());var l=f.length;h?(a.showLoader(),g.each(f,function(d,e){a.ogpRecognition(this,function(d){console.log(d);var e=-1;a.items.filter(function(a,b,c){a.URL==d.url&&(e=b);return a.URL==d.url});var f=a.items[e];d&&g.extend(!0,f,{URL:d.source,type:d.type,
recognized:!0,options:{html5video:d.html5video,width:"image"==d.type?0:d.width||f.width,height:"image"==d.type?0:d.height||f.height,thumbnail:f.options.thumbnail||d.thumbnail}});l--;0==l&&(a.hideLoader(),b.dontGenerateThumbs=!1,a.generateThumbnails(),c.show.effect?setTimeout(function(){a.generateBoxes()},c.show.speed):a.generateBoxes())})})):c.show.effect?setTimeout(function(){a.generateBoxes()},c.show.speed):a.generateBoxes();a.createUI();p.iLightBox={close:function(){a.closeAction()},fullscreen:function(){a.fullScreenAction()},
moveNext:function(){a.moveTo("next")},movePrev:function(){a.moveTo("prev")},goTo:function(b){a.goTo(b)},refresh:function(){a.refresh()},reposition:function(){0<arguments.length?a.repositionPhoto(!0):a.repositionPhoto()},setOption:function(b){a.setOption(b)},destroy:function(){a.closeAction();a.dispatchItemsEvents()}};c.linkId&&(b.hashLock=!0,p.location.hash=c.linkId+"/"+b.current,setTimeout(function(){b.hashLock=!1},55));c.slideshow.startPaused||(a.resume(),b.innerPlayButton.removeClass("ilightbox-play").addClass("ilightbox-pause"));
"function"==typeof a.options.callback.onOpen&&a.options.callback.onOpen.call(a)},loadContent:function(a,b,c){this.createUI();a.speed=c||this.options.effects.loadedFadeSpeed;"current"==b&&(this.vars.lockWheel=a.options.mousewheel?!1:!0,this.vars.lockSwipe=a.options.swipe?!1:!0);switch(b){case "current":var d=this.vars.holder;var e=this.vars.current;break;case "next":d=this.vars.nextPhoto;e=this.vars.next;break;case "prev":d=this.vars.prevPhoto,e=this.vars.prev}d.removeAttr("style class").addClass("ilightbox-holder"+
(z?" supportTouch":"")).addClass(a.options.skin);g("div.ilightbox-inner-toolbar",d).remove();if(a.title||this.options.innerToolbar){var f=this.vars.innerToolbar.clone();if(a.title&&this.options.show.title){var h=this.vars.title.clone();h.empty().html(a.title);f.append(h)}this.options.innerToolbar&&f.append(1<this.vars.total?this.vars.toolbar.clone():this.vars.toolbar);d.prepend(f)}console.warn("loadContent",arguments);this.loadSwitcher(a,d,e,b)},loadSwitcher:function(a,b,c,d){var e=this,f=e.options,
h={element:b,position:c};switch(a.type){case "image":"function"==typeof f.callback.onBeforeLoad&&f.callback.onBeforeLoad.call(e,e.ui,c);"function"==typeof a.options.onBeforeLoad&&a.options.onBeforeLoad.call(e,h);e.loadImage(a.URL,function(k){"function"==typeof f.callback.onAfterLoad&&f.callback.onAfterLoad.call(e,e.ui,c);"function"==typeof a.options.onAfterLoad&&a.options.onAfterLoad.call(e,h);b.data({naturalWidth:k?k.width:400,naturalHeight:k?k.height:200});g("div.ilightbox-container",b).empty().append(k?
'<img src="'+a.URL+'" class="ilightbox-image" />':'<span class="ilightbox-alert">'+f.errors.loadImage+"</span>");"function"==typeof f.callback.onRender&&f.callback.onRender.call(e,e.ui,c);"function"==typeof a.options.onRender&&a.options.onRender.call(e,h);e.configureHolder(a,d,b)});break;case "video":b.data({naturalWidth:a.options.width,naturalHeight:a.options.height});"current"===d?(e.addContent(b,a),"function"==typeof f.callback.onRender&&f.callback.onRender.call(e,e.ui,c),"function"==typeof a.options.onRender&&
a.options.onRender.call(e,h)):g("div.ilightbox-container",b).empty();e.configureHolder(a,d,b);break;case "iframe":b.data({naturalWidth:a.options.width,naturalHeight:a.options.height});e.configureHolder(a,d,b);if("current"===d){var l=e.addContent(b,a);"function"==typeof f.callback.onRender&&f.callback.onRender.call(e,e.ui,c);"function"==typeof a.options.onRender&&a.options.onRender.call(e,h);"function"==typeof f.callback.onBeforeLoad&&f.callback.onBeforeLoad.call(e,e.ui,c);"function"==typeof a.options.onBeforeLoad&&
a.options.onBeforeLoad.call(e,h);l.bind("load",function(){"function"==typeof f.callback.onAfterLoad&&f.callback.onAfterLoad.call(e,e.ui,c);"function"==typeof a.options.onAfterLoad&&a.options.onAfterLoad.call(e,h);l.unbind("load")})}else g("div.ilightbox-container",b).empty();break;case "inline":l=g(a.URL);var k=e.addContent(b,a),n=R(b);b.data({naturalWidth:e.items[c].options.width||l.outerWidth(),naturalHeight:e.items[c].options.height||l.outerHeight()});k.children().eq(0).show();"function"==typeof f.callback.onRender&&
f.callback.onRender.call(e,e.ui,c);"function"==typeof a.options.onRender&&a.options.onRender.call(e,h);"function"==typeof f.callback.onBeforeLoad&&f.callback.onBeforeLoad.call(e,e.ui,c);"function"==typeof a.options.onBeforeLoad&&a.options.onBeforeLoad.call(e,h);e.loadImage(n,function(){"function"==typeof f.callback.onAfterLoad&&f.callback.onAfterLoad.call(e,e.ui,c);"function"==typeof a.options.onAfterLoad&&a.options.onAfterLoad.call(e,h);e.configureHolder(a,d,b)});break;case "flash":l=e.addContent(b,
a);b.data({naturalWidth:e.items[c].options.width||l.outerWidth(),naturalHeight:e.items[c].options.height||l.outerHeight()});"function"==typeof f.callback.onRender&&f.callback.onRender.call(e,e.ui,c);"function"==typeof a.options.onRender&&a.options.onRender.call(e,h);e.configureHolder(a,d,b);break;case "ajax":var m=a.options.ajax||{};"function"==typeof f.callback.onBeforeLoad&&f.callback.onBeforeLoad.call(e,e.ui,c);"function"==typeof a.options.onBeforeLoad&&a.options.onBeforeLoad.call(e,h);e.showLoader();
g.ajax({url:a.URL||f.ajaxSetup.url,data:m.data||null,dataType:m.dataType||"html",type:m.type||f.ajaxSetup.type,cache:m.cache||f.ajaxSetup.cache,crossDomain:m.crossDomain||f.ajaxSetup.crossDomain,global:m.global||f.ajaxSetup.global,ifModified:m.ifModified||f.ajaxSetup.ifModified,username:m.username||f.ajaxSetup.username,password:m.password||f.ajaxSetup.password,beforeSend:m.beforeSend||f.ajaxSetup.beforeSend,complete:m.complete||f.ajaxSetup.complete,success:function(k,l,n){e.hideLoader();var q=g(k),
u=g("div.ilightbox-container",b),C=e.items[c].options.width||parseInt(q[0].getAttribute("width")),v=e.items[c].options.height||parseInt(q[0].getAttribute("height")),y=q[0].getAttribute("width")&&q[0].getAttribute("height")?{overflow:"hidden"}:{};u.empty().append(g('<div class="ilightbox-wrapper"></div>').css(y).html(q));b.show().data({naturalWidth:C||u.outerWidth(),naturalHeight:v||u.outerHeight()}).hide();"function"==typeof f.callback.onRender&&f.callback.onRender.call(e,e.ui,c);"function"==typeof a.options.onRender&&
a.options.onRender.call(e,h);q=R(b);e.loadImage(q,function(){"function"==typeof f.callback.onAfterLoad&&f.callback.onAfterLoad.call(e,e.ui,c);"function"==typeof a.options.onAfterLoad&&a.options.onAfterLoad.call(e,h);e.configureHolder(a,d,b)});f.ajaxSetup.success(k,l,n);"function"==typeof m.success&&m.success(k,l,n)},error:function(k,l,n){"function"==typeof f.callback.onAfterLoad&&f.callback.onAfterLoad.call(e,e.ui,c);"function"==typeof a.options.onAfterLoad&&a.options.onAfterLoad.call(e,h);e.hideLoader();
g("div.ilightbox-container",b).empty().append('<span class="ilightbox-alert">'+f.errors.loadContents+"</span>");e.configureHolder(a,d,b);f.ajaxSetup.error(k,l,n);"function"==typeof m.error&&m.error(k,l,n)}});break;case "html":k=a.URL;container=g("div.ilightbox-container",b);k[0].nodeName?l=k.clone():(k=g(k),l=k.selector?g("<div>"+k+"</div>"):k);var C=e.items[c].options.width||parseInt(l.attr("width")),y=e.items[c].options.height||parseInt(l.attr("height"));e.addContent(b,a);l.appendTo(document.documentElement).hide();
"function"==typeof f.callback.onRender&&f.callback.onRender.call(e,e.ui,c);"function"==typeof a.options.onRender&&a.options.onRender.call(e,h);n=R(b);"function"==typeof f.callback.onBeforeLoad&&f.callback.onBeforeLoad.call(e,e.ui,c);"function"==typeof a.options.onBeforeLoad&&a.options.onBeforeLoad.call(e,h);e.loadImage(n,function(){"function"==typeof f.callback.onAfterLoad&&f.callback.onAfterLoad.call(e,e.ui,c);"function"==typeof a.options.onAfterLoad&&a.options.onAfterLoad.call(e,h);b.show().data({naturalWidth:C||
container.outerWidth(),naturalHeight:y||container.outerHeight()}).hide();l.remove();e.configureHolder(a,d,b)})}},configureHolder:function(a,b,c){var d=this,e=d.vars,f=d.options;"current"!=b&&("next"==b?c.addClass("ilightbox-next"):c.addClass("ilightbox-prev"));if("current"==b)var h=e.current;else if("next"==b){var l=f.styles.nextOpacity;h=e.next}else l=f.styles.prevOpacity,h=e.prev;var k={element:c,position:h};d.items[h].options.width=d.items[h].options.width||0;d.items[h].options.height=d.items[h].options.height||
0;"current"==b?f.show.effect?c.css(B,H).fadeIn(a.speed,function(){c.css(B,"");if(a.caption){d.setCaption(a,c);var b=g("div.ilightbox-caption",c),e=parseInt(b.outerHeight()/c.outerHeight()*100);f.caption.start&50>=e&&b.fadeIn(f.effects.fadeSpeed)}if(b=a.options.social)d.setSocial(b,a.URL,c),f.social.start&&g("div.ilightbox-social",c).fadeIn(f.effects.fadeSpeed);d.generateThumbnails();"function"==typeof f.callback.onShow&&f.callback.onShow.call(d,d.ui,h);"function"==typeof a.options.onShow&&a.options.onShow.call(d,
k)}):(c.show(),d.generateThumbnails(),"function"==typeof f.callback.onShow&&f.callback.onShow.call(d,d.ui,h),"function"==typeof a.options.onShow&&a.options.onShow.call(d,k)):f.show.effect?c.fadeTo(a.speed,l,function(){"next"==b?e.nextLock=!1:e.prevLock=!1;d.generateThumbnails();"function"==typeof f.callback.onShow&&f.callback.onShow.call(d,d.ui,h);"function"==typeof a.options.onShow&&a.options.onShow.call(d,k)}):(c.css({opacity:l}).show(),"next"==b?e.nextLock=!1:e.prevLock=!1,d.generateThumbnails(),
"function"==typeof f.callback.onShow&&f.callback.onShow.call(d,d.ui,h),"function"==typeof a.options.onShow&&a.options.onShow.call(d,k));setTimeout(function(){d.repositionPhoto()},0)},generateBoxes:function(){var a=this.vars,b=this.options;b.infinite&&3<=a.total?(a.current==a.total-1&&(a.next=0),0==a.current&&(a.prev=a.total-1)):b.infinite=!1;this.loadContent(this.items[a.current],"current",b.show.speed);this.items[a.next]&&this.loadContent(this.items[a.next],"next",b.show.speed);this.items[a.prev]&&
this.loadContent(this.items[a.prev],"prev",b.show.speed)},generateThumbnails:function(){var a=this,b=a.vars,c=a.options,d=null;if(b.thumbs&&!a.vars.dontGenerateThumbs){var e=b.thumbnails,f=g("div.ilightbox-thumbnails-container",e),h=g("div.ilightbox-thumbnails-grid",f),l=0;h.removeAttr("style").empty();g.each(a.items,function(k,n){var m=b.current==k?"ilightbox-active":"",C=b.current==k?c.thumbnails.activeOpacity:c.thumbnails.normalOpacity,y=n.options.thumbnail,q=g('<div class="ilightbox-thumbnail"></div>'),
u=g('<div class="ilightbox-thumbnail-icon"></div>');q.css({opacity:0}).addClass(m);"video"!=n.type&&"flash"!=n.type||"undefined"!=typeof n.options.icon?n.options.icon&&(u.addClass("ilightbox-thumbnail-"+n.options.icon),q.append(u)):(u.addClass("ilightbox-thumbnail-video"),q.append(u));y&&a.loadImage(y,function(b){l++;b?q.data({naturalWidth:b.width,naturalHeight:b.height}).append('<img src="'+y+'" border="0" />'):q.data({naturalWidth:c.thumbnails.maxWidth,naturalHeight:c.thumbnails.maxHeight});clearTimeout(d);
d=setTimeout(function(){a.positionThumbnails(e,f,h)},20);setTimeout(function(){q.fadeTo(c.effects.loadedFadeSpeed,C)},20*l)});h.append(q)});a.vars.dontGenerateThumbs=!0}},positionThumbnails:function(a,b,c){var d=this,e=d.vars,f=d.options,h=J(),l=f.path.toLowerCase();a||(a=e.thumbnails);b||(b=g("div.ilightbox-thumbnails-container",a));c||(c=g("div.ilightbox-thumbnails-grid",b));var k=g(".ilightbox-thumbnail",c);e="horizontal"==l?h.width-f.styles.pageOffsetX:k.eq(0).outerWidth()-f.styles.pageOffsetX;
h="horizontal"==l?k.eq(0).outerHeight()-f.styles.pageOffsetY:h.height-f.styles.pageOffsetY;var n="horizontal"==l?0:e,m="horizontal"==l?h:0,C=g(".ilightbox-active",c),y={};3>arguments.length&&(k.css({opacity:f.thumbnails.normalOpacity}),C.css({opacity:f.thumbnails.activeOpacity}));k.each(function(a){a=g(this);var b=a.data(),c="horizontal"==l?0:f.thumbnails.maxWidth;height="horizontal"==l?f.thumbnails.maxHeight:0;dims=d.getNewDimenstions(c,height,b.naturalWidth,b.naturalHeight,!0);a.css({width:dims.width,
height:dims.height});"horizontal"==l&&a.css({"float":"left"});"horizontal"==l?n+=a.outerWidth():m+=a.outerHeight()});y={width:n,height:m};c.css(y);y={};k=c.offset();var q=C.length?C.offset():{top:parseInt(h/2),left:parseInt(e/2)};k.top-=E.scrollTop();k.left-=E.scrollLeft();q.top=q.top-k.top-E.scrollTop();q.left=q.left-k.left-E.scrollLeft();"horizontal"==l?(y.top=0,y.left=parseInt(e/2-q.left-C.outerWidth()/2)):(y.top=parseInt(h/2-q.top-C.outerHeight()/2),y.left=0);3>arguments.length?c.stop().animate(y,
f.effects.repositionSpeed,"easeOutCirc"):c.css(y)},loadImage:function(a,b){g.isArray(a)||(a=[a]);var c=this,d=a.length;0<d?(c.showLoader(),g.each(a,function(e,f){var h=new Image;h.onload=function(){--d;0==d&&(c.hideLoader(),b(h))};h.onerror=h.onabort=function(){--d;0==d&&(c.hideLoader(),b(!1))};h.src=a[e]})):b(!1)},patchItemsEvents:function(){var a=this,b=a.vars,c=z?"itap.iL":"click.iL",d=z?"click.iL":"itap.iL";if(a.context&&a.selector){var e=g(a.selector,a.context);g(a.context).on(c,a.selector,function(){var c=
g(this);c=e.index(c);b.current=c;b.next=a.items[c+1]?c+1:null;b.prev=a.items[c-1]?c-1:null;a.addContents();a.patchEvents();return!1}).on(d,a.selector,function(){return!1})}else g.each(a.itemsObject,function(e,h){h.on(c,function(){b.current=e;b.next=a.items[e+1]?e+1:null;b.prev=a.items[e-1]?e-1:null;a.addContents();a.patchEvents();return!1}).on(d,function(){return!1})})},dispatchItemsEvents:function(){this.context&&this.selector?g(this.context).off(".iL",this.selector):g.each(this.itemsObject,function(a,
b){b.off(".iL")})},refresh:function(){this.dispatchItemsEvents();this.attachItems();this.normalizeItems();this.patchItemsEvents()},patchEvents:function(){function a(a){c.isMobile||(c.mouseID||c.hideableElements.show(),c.mouseID=clearTimeout(c.mouseID),-1===k.indexOf(a.target)&&(c.mouseID=setTimeout(function(){c.hideableElements.hide();c.mouseID=clearTimeout(c.mouseID)},3E3)))}var b=this,c=b.vars,d=b.options,e=d.path.toLowerCase(),f=g(".ilightbox-holder"),h=t.fullScreenEventName+".iLightBox",l=verticalDistanceThreshold=
100,k=[c.nextButton[0],c.prevButton[0],c.nextButton[0].firstChild,c.prevButton[0].firstChild];O.bind("resize.iLightBox",function(){var a=J();d.mobileOptimizer&&!d.innerToolbar&&(c.isMobile=a.width<=c.mobileMaxWidth);c.BODY[c.isMobile?"addClass":"removeClass"]("isMobile");b.repositionPhoto(null);z&&(clearTimeout(c.setTime),c.setTime=setTimeout(function(){var a=L().y;p.scrollTo(0,a-30);p.scrollTo(0,a+30);p.scrollTo(0,a)},2E3));c.thumbs&&b.positionThumbnails()}).bind("keydown.iLightBox",function(a){if(d.controls.keyboard)switch(a.keyCode){case 13:a.shiftKey&&
d.keyboard.shift_enter&&b.fullScreenAction();break;case 27:d.keyboard.esc&&b.closeAction();break;case 37:d.keyboard.left&&!c.lockKey&&b.moveTo("prev");break;case 38:d.keyboard.up&&!c.lockKey&&b.moveTo("prev");break;case 39:d.keyboard.right&&!c.lockKey&&b.moveTo("next");break;case 40:d.keyboard.down&&!c.lockKey&&b.moveTo("next")}});t.supportsFullScreen&&O.bind(h,function(){b.doFullscreen()});h=[d.caption.show+".iLightBox",d.caption.hide+".iLightBox",d.social.show+".iLightBox",d.social.hide+".iLightBox"].filter(function(a,
b,c){return c.lastIndexOf(a)===b});var n="";g.each(h,function(a,b){0!=a&&(n+=" ");n+=b});E.on(K,".ilightbox-overlay",function(){d.overlay.blur&&b.closeAction()}).on(K,".ilightbox-next, .ilightbox-next-button",function(){b.moveTo("next")}).on(K,".ilightbox-prev, .ilightbox-prev-button",function(){b.moveTo("prev")}).on(K,".ilightbox-thumbnail",function(){var a=g(this);a=g(".ilightbox-thumbnail",c.thumbnails).index(a);a!=c.current&&b.goTo(a)}).on(n,".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)",
function(a){var b=g("div.ilightbox-caption",c.holder),e=g("div.ilightbox-social",c.holder),f=d.effects.fadeSpeed;c.nextLock||c.prevLock?(a.type!=d.caption.show||b.is(":visible")?a.type==d.caption.hide&&b.is(":visible")&&b.fadeOut(f):b.fadeIn(f),a.type!=d.social.show||e.is(":visible")?a.type==d.social.hide&&e.is(":visible")&&e.fadeOut(f):e.fadeIn(f)):(a.type!=d.caption.show||b.is(":visible")?a.type==d.caption.hide&&b.is(":visible")&&b.stop().fadeOut(f):b.stop().fadeIn(f),a.type!=d.social.show||e.is(":visible")?
a.type==d.social.hide&&e.is(":visible")&&e.stop().fadeOut(f):e.stop().fadeIn(f))}).on("mouseenter.iLightBox mouseleave.iLightBox",".ilightbox-wrapper",function(a){c.lockWheel="mouseenter"==a.type?!0:!1}).on(K,".ilightbox-toolbar a.ilightbox-close, .ilightbox-toolbar a.ilightbox-fullscreen, .ilightbox-toolbar a.ilightbox-play, .ilightbox-toolbar a.ilightbox-pause",function(){var a=g(this);a.hasClass("ilightbox-fullscreen")?b.fullScreenAction():a.hasClass("ilightbox-play")?(b.resume(),a.addClass("ilightbox-pause").removeClass("ilightbox-play")):
a.hasClass("ilightbox-pause")?(b.pause(),a.addClass("ilightbox-play").removeClass("ilightbox-pause")):b.closeAction()}).on(W,".ilightbox-overlay, .ilightbox-thumbnails-container",function(a){a.preventDefault()});if(d.controls.arrows&&!z)E.on("mousemove.iLightBox",a);if(d.controls.slideshow&&d.slideshow.pauseOnHover)E.on("mouseenter.iLightBox mouseleave.iLightBox",".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)",function(a){"mouseenter"==a.type&&c.cycleID?b.pause():"mouseleave"==a.type&&c.isPaused&&
b.resume()});h=g(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails");if(d.controls.mousewheel)h.on("mousewheel.iLightBox",function(a,d){c.lockWheel||(a.preventDefault(),0>d?b.moveTo("next"):0<d&&b.moveTo("prev"))});if(d.controls.swipe)f.on(pa,function(a){function h(a){var b=g(this);a=r[a];var c=[w.coords[0]-x.coords[0],w.coords[1]-x.coords[1]];b[0].style["horizontal"==e?"left":"top"]=("horizontal"==e?a.left-c[0]:a.top-c[1])+"px"}function k(a){if(w){var b=a.originalEvent.touches?a.originalEvent.touches[0]:
a;x={time:(new Date).getTime(),coords:[b.pageX-n,b.pageY-m]};f.each(h);a.preventDefault()}}function q(){f.each(function(){var a=g(this),b=a.data("offset")||{top:a.offset().top-m,left:a.offset().left-n},c=b.top;b=b.left;a.css(B,H).stop().animate({top:c,left:b},500,"easeOutCirc",function(){a.css(B,"")})})}if(!(c.nextLock||c.prevLock||1==c.total||c.lockSwipe)){c.BODY.addClass("ilightbox-closedhand");a=a.originalEvent.touches?a.originalEvent.touches[0]:a;var m=E.scrollTop(),n=E.scrollLeft(),p=[f.eq(0).offset(),
f.eq(1).offset(),f.eq(2).offset()],r=[{top:p[0].top-m,left:p[0].left-n},{top:p[1].top-m,left:p[1].left-n},{top:p[2].top-m,left:p[2].left-n}],w={time:(new Date).getTime(),coords:[a.pageX-n,a.pageY-m]},x;f.bind(W,k);E.one(qa,function(a){f.unbind(W,k);c.BODY.removeClass("ilightbox-closedhand");w&&x&&("horizontal"==e&&1E3>x.time-w.time&&I(w.coords[0]-x.coords[0])>l&&I(w.coords[1]-x.coords[1])<verticalDistanceThreshold?w.coords[0]>x.coords[0]?c.current!=c.total-1||d.infinite?(c.isSwipe=!0,b.moveTo("next")):
q():0!=c.current||d.infinite?(c.isSwipe=!0,b.moveTo("prev")):q():"vertical"==e&&1E3>x.time-w.time&&I(w.coords[1]-x.coords[1])>l&&I(w.coords[0]-x.coords[0])<verticalDistanceThreshold?w.coords[1]>x.coords[1]?c.current!=c.total-1||d.infinite?(c.isSwipe=!0,b.moveTo("next")):q():0!=c.current||d.infinite?(c.isSwipe=!0,b.moveTo("prev")):q():q());w=x=Q})}})},goTo:function(a){var b=this,c=b.vars,d=b.options,e=a-c.current;d.infinite&&(a==c.total-1&&0==c.current&&(e=-1),c.current==c.total-1&&0==a&&(e=1));if(1==
e)b.moveTo("next");else if(-1==e)b.moveTo("prev");else{if(c.nextLock||c.prevLock)return!1;"function"==typeof d.callback.onBeforeChange&&d.callback.onBeforeChange.call(b,b.ui);d.linkId&&(c.hashLock=!0,p.location.hash=d.linkId+"/"+a);b.items[a]&&(b.items[a].options.mousewheel?b.vars.lockWheel=!1:c.lockWheel=!0,c.lockSwipe=b.items[a].options.swipe?!1:!0);g.each([c.holder,c.nextPhoto,c.prevPhoto],function(a,b){b.css(B,H).fadeOut(d.effects.loadedFadeSpeed)});c.current=a;c.next=a+1;c.prev=a-1;b.createUI();
setTimeout(function(){b.generateBoxes()},d.effects.loadedFadeSpeed+50);g(".ilightbox-thumbnail",c.thumbnails).removeClass("ilightbox-active").eq(a).addClass("ilightbox-active");b.positionThumbnails();d.linkId&&setTimeout(function(){c.hashLock=!1},55);d.infinite||(c.nextButton.add(c.prevButton).add(c.innerPrevButton).add(c.innerNextButton).removeClass("disabled"),0==c.current&&c.prevButton.add(c.innerPrevButton).addClass("disabled"),c.current>=c.total-1&&c.nextButton.add(c.innerNextButton).addClass("disabled"));
b.resetCycle();"function"==typeof d.callback.onAfterChange&&d.callback.onAfterChange.call(b,b.ui)}},moveTo:function(a){var b=this,c=b.vars,d=b.options,e=d.path.toLowerCase(),f=J(),h=d.effects.switchSpeed;if(c.nextLock||c.prevLock)return!1;var l="next"==a?c.next:c.prev;d.linkId&&(c.hashLock=!0,p.location.hash=d.linkId+"/"+l);if("next"==a){if(!b.items[l])return!1;var k=c.nextPhoto,n=c.holder,m=c.prevPhoto,C="ilightbox-prev",y="ilightbox-next"}else if("prev"==a){if(!b.items[l])return!1;k=c.prevPhoto;
n=c.holder;m=c.nextPhoto;C="ilightbox-next";y="ilightbox-prev"}"function"==typeof d.callback.onBeforeChange&&d.callback.onBeforeChange.call(b,b.ui);"next"==a?c.nextLock=!0:c.prevLock=!0;var q=g("div.ilightbox-caption",n),u=g("div.ilightbox-social",n);q.length&&q.stop().fadeOut(h,function(){g(this).remove()});u.length&&u.stop().fadeOut(h,function(){g(this).remove()});b.items[l].caption&&(b.setCaption(b.items[l],k),q=g("div.ilightbox-caption",k),u=parseInt(q.outerHeight()/k.outerHeight()*100),d.caption.start&&
50>=u&&q.fadeIn(h));if(q=b.items[l].options.social)b.setSocial(q,b.items[l].URL,k),d.social.start&&g("div.ilightbox-social",k).fadeIn(d.effects.fadeSpeed);g.each([k,n,m],function(a,b){b.removeClass("ilightbox-next ilightbox-prev")});var v=k.data("offset");q=f.width-d.styles.pageOffsetX;f=f.height-d.styles.pageOffsetY;u=v.newDims.width;var r=v.newDims.height,t=v.thumbsOffset;v=v.diff;var w=parseInt(f/2-r/2-v.H-t.H/2);v=parseInt(q/2-u/2-v.W-t.W/2);k.css(B,H).animate({top:w,left:v,opacity:1},h,c.isSwipe?
"easeOutCirc":"easeInOutCirc",function(){k.css(B,"")});g("div.ilightbox-container",k).animate({width:u,height:r},h,c.isSwipe?"easeOutCirc":"easeInOutCirc");r=n.data("offset");var x=r.object;v=r.diff;u=r.newDims.width;r=r.newDims.height;u=parseInt(u*d.styles["next"==a?"prevScale":"nextScale"]);r=parseInt(r*d.styles["next"==a?"prevScale":"nextScale"]);w="horizontal"==e?parseInt(f/2-x.offsetY-r/2-v.H-t.H/2):parseInt(f-x.offsetX-v.H-t.H/2);"prev"==a?v="horizontal"==e?parseInt(q-x.offsetX-v.W-t.W/2):parseInt(q/
2-u/2-v.W-x.offsetY-t.W/2):(w="horizontal"==e?w:parseInt(x.offsetX-v.H-r-t.H/2),v="horizontal"==e?parseInt(x.offsetX-v.W-u-t.W/2):parseInt(q/2-x.offsetY-u/2-v.W-t.W/2));g("div.ilightbox-container",n).animate({width:u,height:r},h,c.isSwipe?"easeOutCirc":"easeInOutCirc");n.addClass(C).css(B,H).animate({top:w,left:v,opacity:d.styles.prevOpacity},h,c.isSwipe?"easeOutCirc":"easeInOutCirc",function(){n.css(B,"");g(".ilightbox-thumbnail",c.thumbnails).removeClass("ilightbox-active").eq(l).addClass("ilightbox-active");
b.positionThumbnails();b.items[l]&&(c.lockWheel=b.items[l].options.mousewheel?!1:!0,c.lockSwipe=b.items[l].options.swipe?!1:!0);c.isSwipe=!1;-1!==["iframe","video"].indexOf(b.items[c.current].type)&&g("div.ilightbox-container",n).empty();"next"==a?(c.nextPhoto=m,c.prevPhoto=n,c.holder=k,c.nextPhoto.hide(),c.next+=1,c.prev=c.current,c.current+=1,d.infinite&&(c.current>c.total-1&&(c.current=0),c.current==c.total-1&&(c.next=0),0==c.current&&(c.prev=c.total-1)),b.createUI(),b.items[c.next]?b.loadContent(b.items[c.next],
"next"):c.nextLock=!1):(c.prevPhoto=m,c.nextPhoto=n,c.holder=k,c.prevPhoto.hide(),c.next=c.current,c.current=c.prev,c.prev=c.current-1,d.infinite&&(c.current==c.total-1&&(c.next=0),0==c.current&&(c.prev=c.total-1)),b.createUI(),b.items[c.prev]?b.loadContent(b.items[c.prev],"prev"):c.prevLock=!1);-1!==["iframe","video"].indexOf(b.items[c.current].type)&&b.loadContent(b.items[c.current],"current");d.linkId&&setTimeout(function(){c.hashLock=!1},55);d.infinite||(c.nextButton.add(c.prevButton).add(c.innerPrevButton).add(c.innerNextButton).removeClass("disabled"),
0==c.current&&c.prevButton.add(c.innerPrevButton).addClass("disabled"),c.current>=c.total-1&&c.nextButton.add(c.innerNextButton).addClass("disabled"));b.repositionPhoto();b.resetCycle();"function"==typeof d.callback.onAfterChange&&d.callback.onAfterChange.call(b,b.ui)});w="horizontal"==e?F(m,"top"):"next"==a?parseInt(-(f/2)-m.outerHeight()):parseInt(2*w);v="horizontal"==e?"next"==a?parseInt(-(q/2)-m.outerWidth()):parseInt(2*v):F(m,"left");m.css(B,H).animate({top:w,left:v,opacity:d.styles.nextOpacity},
h,c.isSwipe?"easeOutCirc":"easeInOutCirc",function(){m.css(B,"")}).addClass(y)},setCaption:function(a,b){var c=g('<div class="ilightbox-caption"></div>');a.caption&&(c.html(a.caption),g("div.ilightbox-container",b).append(c))},normalizeSocial:function(a,b){var c=this.options,d=p.location.href;g.each(a,function(e,f){if(!f)return!0;switch(e.toLowerCase()){case "facebook":var h="http://www.facebook.com/share.php?v=4&src=bm&u={URL}";var g="Share on Facebook";break;case "twitter":h="http://twitter.com/home?status={URL}";
g="Share on Twitter";break;case "googleplus":h="https://plus.google.com/share?url={URL}";g="Share on Google+";break;case "delicious":h="http://delicious.com/post?url={URL}";g="Share on Delicious";break;case "digg":h="http://digg.com/submit?phase=2&url={URL}";g="Share on Digg";break;case "reddit":h="http://reddit.com/submit?url={URL}",g="Share on reddit"}a[e]={URL:f.URL&&N(d,f.URL)||c.linkId&&p.location.href||"string"!==typeof b&&d||b&&N(d,b)||d,source:f.source||h||f.URL&&N(d,f.URL)||b&&N(d,b),text:f.text||
g||"Share on "+e,width:"undefined"==typeof f.width||isNaN(f.width)?640:parseInt(f.width),height:f.height||360}});return a},setSocial:function(a,b,c){var d=g('<div class="ilightbox-social"></div>'),e="<ul>";a=this.normalizeSocial(a,b);g.each(a,function(a,b){a.toLowerCase();var c=b.source.replace(/\{URL\}/g,encodeURIComponent(b.URL).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+"));e+='<li class="'+a+'"><a href="'+c+'" onclick="javascript:window.open(this.href'+
(0>=b.width||0>=b.height?"":", '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height="+b.height+",width="+b.width+",left=40,top=40'")+');return false;" title="'+b.text+'" target="_blank"></a></li>'});e+="</ul>";d.html(e);g("div.ilightbox-container",c).append(d)},fullScreenAction:function(){t.supportsFullScreen?t.isFullScreen()?t.cancelFullScreen(document.documentElement):t.requestFullScreen(document.documentElement):this.doFullscreen()},doFullscreen:function(){var a=this.vars,b=J(),c=this.options;
if(c.fullAlone){var d=a.holder,e=this.items[a.current],f=b.width,h=b.height,l=[d,a.nextPhoto,a.prevPhoto,a.nextButton,a.prevButton,a.overlay,a.toolbar,a.thumbnails,a.loader];b=[a.nextPhoto,a.prevPhoto,a.nextButton,a.prevButton,a.loader,a.thumbnails];if(a.isInFullScreen)a.isInFullScreen=a.lockKey=a.lockWheel=a.lockSwipe=!1,a.overlay.css({opacity:this.options.overlay.opacity}),g.each(b,function(a,b){b.show()}),a.fullScreenButton.attr("title",c.text.enterFullscreen),d.data({naturalWidth:d.data("naturalWidthOld"),
naturalHeight:d.data("naturalHeightOld"),naturalWidthOld:null,naturalHeightOld:null}),g.each(l,function(a,b){b.removeClass("ilightbox-fullscreen")}),"function"==typeof c.callback.onExitFullScreen&&c.callback.onExitFullScreen.call(this,this.ui);else{a.isInFullScreen=a.lockKey=a.lockWheel=a.lockSwipe=!0;a.overlay.css({opacity:1});g.each(b,function(a,b){b.hide()});a.fullScreenButton.attr("title",c.text.exitFullscreen);if(-1!=c.fullStretchTypes.indexOf(e.type))d.data({naturalWidthOld:d.data("naturalWidth"),
naturalHeightOld:d.data("naturalHeight"),naturalWidth:f,naturalHeight:h});else{b=e.options.fullViewPort||c.fullViewPort||"";a=f;e=h;f=d.data("naturalWidth");var k=d.data("naturalHeight");"fill"==b.toLowerCase()?(e=a/f*k,e<h&&(a=h/k*f,e=h)):"fit"==b.toLowerCase()?(h=this.getNewDimenstions(a,e,f,k,!0),a=h.width,e=h.height):"stretch"!=b.toLowerCase()&&(h=this.getNewDimenstions(a,e,f,k,f>a||k>e?!0:!1),a=h.width,e=h.height);d.data({naturalWidthOld:d.data("naturalWidth"),naturalHeightOld:d.data("naturalHeight"),
naturalWidth:a,naturalHeight:e})}g.each(l,function(a,b){b.addClass("ilightbox-fullscreen")});"function"==typeof c.callback.onEnterFullScreen&&c.callback.onEnterFullScreen.call(this,this.ui)}}else a.isInFullScreen=a.isInFullScreen?!1:!0;this.repositionPhoto(!0)},closeAction:function(){var a=this.vars,b=this.options;O.unbind(".iLightBox");E.off(".iLightBox");a.isInFullScreen&&t.cancelFullScreen(document.documentElement);g(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails").off(".iLightBox");
b.hide.effect?a.overlay.stop().fadeOut(b.hide.speed,function(){a.overlay.remove();a.BODY.removeClass("ilightbox-noscroll").off(".iLightBox")}):(a.overlay.remove(),a.BODY.removeClass("ilightbox-noscroll").off(".iLightBox"));g.each([a.toolbar,a.holder,a.nextPhoto,a.prevPhoto,a.nextButton,a.prevButton,a.loader,a.thumbnails],function(a,b){b.removeAttr("style").remove()});a.dontGenerateThumbs=a.isInFullScreen=!1;p.iLightBox=null;b.linkId&&(a.hashLock=!0,ia(),setTimeout(function(){a.hashLock=!1},55));"function"==
typeof b.callback.onHide&&b.callback.onHide.call(this,this.ui)},repositionPhoto:function(){var a=this.vars,b=this.options,c=b.path.toLowerCase(),d=J(),e=d.width,f=d.height;d=a.isInFullScreen&&b.fullAlone||a.isMobile?0:"horizontal"==c?0:a.thumbnails.outerWidth();var h=a.isMobile?a.toolbar.outerHeight():a.isInFullScreen&&b.fullAlone?0:"horizontal"==c?a.thumbnails.outerHeight():0;e=a.isInFullScreen&&b.fullAlone?e:e-b.styles.pageOffsetX;f=a.isInFullScreen&&b.fullAlone?f:f-b.styles.pageOffsetY;var l="horizontal"==
c?parseInt(this.items[a.next]||this.items[a.prev]?2*(b.styles.nextOffsetX+b.styles.prevOffsetX):30>=e/10?30:e/10):parseInt(30>=e/10?30:e/10)+d,k="horizontal"==c?parseInt(30>=f/10?30:f/10)+h:parseInt(this.items[a.next]||this.items[a.prev]?2*(b.styles.nextOffsetX+b.styles.prevOffsetX):30>=f/10?30:f/10);d={type:"current",width:e,height:f,item:this.items[a.current],offsetW:l,offsetH:k,thumbsOffsetW:d,thumbsOffsetH:h,animate:arguments.length,holder:a.holder};this.repositionEl(d);this.items[a.next]&&(d=
g.extend(d,{type:"next",item:this.items[a.next],offsetX:b.styles.nextOffsetX,offsetY:b.styles.nextOffsetY,holder:a.nextPhoto}),this.repositionEl(d));this.items[a.prev]&&(d=g.extend(d,{type:"prev",item:this.items[a.prev],offsetX:b.styles.prevOffsetX,offsetY:b.styles.prevOffsetY,holder:a.prevPhoto}),this.repositionEl(d));b="horizontal"==c?{left:parseInt(e/2-a.loader.outerWidth()/2)}:{top:parseInt(f/2-a.loader.outerHeight()/2)};a.loader.css(b)},repositionEl:function(a){var b=this.vars,c=this.options,
d=c.path.toLowerCase(),e="current"==a.type?b.isInFullScreen&&c.fullAlone?a.width:a.width-a.offsetW:a.width-a.offsetW,f="current"==a.type?b.isInFullScreen&&c.fullAlone?a.height:a.height-a.offsetH:a.height-a.offsetH,h=a.item,l=a.item.options,k=a.holder,n=a.offsetX||0,m=a.offsetY||0,p=a.thumbsOffsetW,r=a.thumbsOffsetH;"current"==a.type?("number"==typeof l.width&&l.width&&(e=b.isInFullScreen&&c.fullAlone&&(-1!=c.fullStretchTypes.indexOf(h.type)||l.fullViewPort||c.fullViewPort)?e:l.width>e?e:l.width),
"number"==typeof l.height&&l.height&&(f=b.isInFullScreen&&c.fullAlone&&(-1!=c.fullStretchTypes.indexOf(h.type)||l.fullViewPort||c.fullViewPort)?f:l.height>f?f:l.height)):("number"==typeof l.width&&l.width&&(e=l.width>e?e:l.width),"number"==typeof l.height&&l.height&&(f=l.height>f?f:l.height));c.innerToolbar&&(f=parseInt(f-g(".ilightbox-inner-toolbar",k).outerHeight()));b="string"==typeof l.width&&-1!=l.width.indexOf("%")?ba(parseInt(l.width.replace("%","")),a.width):k.data("naturalWidth");h="string"==
typeof l.height&&-1!=l.height.indexOf("%")?ba(parseInt(l.height.replace("%","")),a.height):k.data("naturalHeight");h="string"==typeof l.width&&-1!=l.width.indexOf("%")||"string"==typeof l.height&&-1!=l.height.indexOf("%")?{width:b,height:h}:this.getNewDimenstions(e,f,b,h);e=g.extend({},h,{});"prev"==a.type||"next"==a.type?(b=parseInt(h.width*("next"==a.type?c.styles.nextScale:c.styles.prevScale)),h=parseInt(h.height*("next"==a.type?c.styles.nextScale:c.styles.prevScale))):(b=h.width,h=h.height);f=
parseInt((F(k,"padding-left")+F(k,"padding-right")+F(k,"border-left-width")+F(k,"border-right-width"))/2);l=parseInt((F(k,"padding-top")+F(k,"padding-bottom")+F(k,"border-top-width")+F(k,"border-bottom-width")+(g(".ilightbox-inner-toolbar",k).outerHeight()||0))/2);switch(a.type){case "current":var q=parseInt(a.height/2-h/2-l-r/2),u=parseInt(a.width/2-b/2-f-p/2);break;case "next":q="horizontal"==d?parseInt(a.height/2-m-h/2-l-r/2):parseInt(a.height-n-l-r/2);u="horizontal"==d?parseInt(a.width-n-f-p/
2):parseInt(a.width/2-b/2-f-m-p/2);break;case "prev":q="horizontal"==d?parseInt(a.height/2-m-h/2-l-r/2):parseInt(n-l-h-r/2),u="horizontal"==d?parseInt(n-f-b-p/2):parseInt(a.width/2-m-b/2-f-p/2)}k.data("offset",{top:q,left:u,newDims:e,diff:{W:f,H:l},thumbsOffset:{W:p,H:r},object:a});0<a.animate&&c.effects.reposition?(k.css(B,H).stop().animate({top:q,left:u},c.effects.repositionSpeed,"easeOutCirc",function(){k.css(B,"")}),g("div.ilightbox-container",k).stop().animate({width:b,height:h},c.effects.repositionSpeed,
"easeOutCirc"),g("div.ilightbox-inner-toolbar",k).stop().animate({width:b},c.effects.repositionSpeed,"easeOutCirc",function(){g(this).css("overflow","visible")})):(k.css({top:q,left:u}),g("div.ilightbox-container",k).css({width:b,height:h}),g("div.ilightbox-inner-toolbar",k).css({width:b}))},resume:function(a){var b=this,c=b.vars,d=b.options;!d.slideshow.pauseTime||d.controls.slideshow&&1>=c.total||a<c.isPaused||(c.isPaused=0,c.cycleID&&(c.cycleID=clearTimeout(c.cycleID)),c.cycleID=setTimeout(function(){c.current==
c.total-1?b.goTo(0):b.moveTo("next")},d.slideshow.pauseTime))},pause:function(a){var b=this.vars;a<b.isPaused||(b.isPaused=a||100,b.cycleID&&(b.cycleID=clearTimeout(b.cycleID)))},resetCycle:function(){var a=this.vars;this.options.controls.slideshow&&a.cycleID&&!a.isPaused&&this.resume()},getNewDimenstions:function(a,b,c,d,e){factor=a?b?Y(a/c,b/d):a/c:b/d;e||(factor>this.options.maxScale?factor=this.options.maxScale:factor<this.options.minScale&&(factor=this.options.minScale));a=this.options.keepAspectRatio?
X(c*factor):a;b=this.options.keepAspectRatio?X(d*factor):b;return{width:a,height:b,ratio:factor}},setOption:function(a){this.options=g.extend(!0,this.options,a||{});this.refresh()},availPlugins:function(){var a=document.createElement("video");this.plugins={flash:!oa,quicktime:0<=parseInt(ha.getVersion("QuickTime"))?!0:!1,html5H264:!(!a.canPlayType||!a.canPlayType("video/mp4").replace(/no/,"")),html5WebM:!(!a.canPlayType||!a.canPlayType("video/webm").replace(/no/,"")),html5Vorbis:!(!a.canPlayType||
!a.canPlayType("video/ogg").replace(/no/,"")),html5QuickTime:!(!a.canPlayType||!a.canPlayType("video/quicktime").replace(/no/,""))}},addContent:function(a,b){switch(b.type){case "video":var c=!1,d=b.videoType,e=b.options.html5video;("video/mp4"==d||"mp4"==b.ext||"m4v"==b.ext||e.h264)&&this.plugins.html5H264?(b.ext="mp4",b.URL=e.h264||b.URL):e.webm&&this.plugins.html5WebM?(b.ext="webm",b.URL=e.webm||b.URL):e.ogg&&this.plugins.html5Vorbis&&(b.ext="ogv",b.URL=e.ogg||b.URL);!this.plugins.html5H264||"video/mp4"!=
d&&"mp4"!=b.ext&&"m4v"!=b.ext?!this.plugins.html5WebM||"video/webm"!=d&&"webm"!=b.ext?!this.plugins.html5Vorbis||"video/ogg"!=d&&"ogv"!=b.ext?!this.plugins.html5QuickTime||"video/quicktime"!=d&&"mov"!=b.ext&&"qt"!=b.ext||(c=!0,d="video/quicktime"):(c=!0,d="video/ogg"):(c=!0,d="video/webm"):(c=!0,d="video/mp4");if(c)var f=g("<video />",{width:"100%",height:"100%",preload:e.preload,autoplay:e.autoplay,poster:e.poster,controls:e.controls}).append(g("<source />",{src:b.URL,type:d}));else this.plugins.quicktime?
(f=g("<object />",{type:"video/quicktime",pluginspage:"http://www.apple.com/quicktime/download"}).attr({data:b.URL,width:"100%",height:"100%"}).append(g("<param />",{name:"src",value:b.URL})).append(g("<param />",{name:"autoplay",value:"false"})).append(g("<param />",{name:"loop",value:"false"})).append(g("<param />",{name:"scale",value:"tofit"})),D.msie&&(f=ma(b.URL,"100%","100%","","SCALE","tofit","AUTOPLAY","false","LOOP","false"))):f=g("<span />",{"class":"ilightbox-alert",html:this.options.errors.missingPlugin.replace("{pluginspage}",
"http://www.apple.com/quicktime/download").replace("{type}","QuickTime")});break;case "flash":if(this.plugins.flash){var h="",l=0;b.options.flashvars?g.each(b.options.flashvars,function(a,b){0!=l&&(h+="&");h+=a+"="+encodeURIComponent(b);l++}):h=null;f=g("<embed />").attr({type:"application/x-shockwave-flash",src:b.URL,width:"number"==typeof b.options.width&&b.options.width&&"1"==this.options.minScale&&"1"==this.options.maxScale?b.options.width:"100%",height:"number"==typeof b.options.height&&b.options.height&&
"1"==this.options.minScale&&"1"==this.options.maxScale?b.options.height:"100%",quality:"high",bgcolor:"#000000",play:"true",loop:"true",menu:"true",wmode:"transparent",scale:"showall",allowScriptAccess:"always",allowFullScreen:"true",flashvars:h,fullscreen:"yes"})}else f=g("<span />",{"class":"ilightbox-alert",html:this.options.errors.missingPlugin.replace("{pluginspage}","http://www.adobe.com/go/getflash").replace("{type}","Adobe Flash player")});break;case "iframe":f=g("<iframe />").attr({width:"number"==
typeof b.options.width&&b.options.width&&"1"==this.options.minScale&&"1"==this.options.maxScale?b.options.width:"100%",height:"number"==typeof b.options.height&&b.options.height&&"1"==this.options.minScale&&"1"==this.options.maxScale?b.options.height:"100%",src:b.URL,frameborder:0,hspace:0,vspace:0,scrolling:z?"auto":"scroll",webkitAllowFullScreen:"",mozallowfullscreen:"",allowFullScreen:""});break;case "inline":f=g('<div class="ilightbox-wrapper"></div>').html(g(b.URL).clone(!0));break;case "html":c=
b.URL,c[0].nodeName||(c=g(b.URL),c=c.selector?g("<div>"+c+"</div>"):c),f=g('<div class="ilightbox-wrapper"></div>').html(c)}g("div.ilightbox-container",a).empty().html(f);"video"===f[0].tagName.toLowerCase()&&D.webkit&&setTimeout(function(){var a=f[0].currentSrc+"?"+M(3E4*S());f[0].currentSrc=a;f[0].src=a});return f},ogpRecognition:function(a,b){var c=this,d=a.URL;c.showLoader();ja(d,function(a){c.hideLoader();if(a){var d={length:!1};d.url=a.url;if(200==a.status){a=a.results;var e=a.type,g=a.source;
d.source=g.src;d.width=g.width&&parseInt(g.width)||0;d.height=g.height&&parseInt(g.height)||0;d.type=e;d.thumbnail=g.thumbnail||a.images&&a.images[0];d.html5video=a.html5video||{};d.length=!0;"application/x-shockwave-flash"==g.type?d.type="flash":-1!=g.type.indexOf("video/")?d.type="video":-1!=g.type.indexOf("/html")?d.type="iframe":-1!=g.type.indexOf("image/")&&(d.type="image")}else if("undefined"!=typeof a.response)throw a.response;b.call(this,d.length?d:!1)}})},hashChangeHandler:function(a){var b=
this.vars,c=this.options;a=U(a||p.location.href).hash;var d=a.split("/");b.hashLock||"#"+c.linkId!=d[0]&&1<a.length||(d[1]?(b=d[1]||0,this.items[b]?(a=g(".ilightbox-overlay"),a.length&&a.attr("linkid")==c.linkId?this.goTo(b):this.itemsObject[b].trigger(z?"itap":"click")):(a=g(".ilightbox-overlay"),a.length&&this.closeAction())):(a=g(".ilightbox-overlay"),a.length&&this.closeAction()))}};g.fn.iLightBox=function(){var a=arguments,b=g.isPlainObject(a[0])?a[0]:a[1],c=g.isArray(a[0])||"string"==typeof a[0]?
a[0]:a[1];b||(b={});b=g.extend(!0,{attr:"href",path:"vertical",skin:"dark",linkId:!1,infinite:!1,startFrom:0,randomStart:!1,keepAspectRatio:!0,maxScale:1,minScale:.2,innerToolbar:!1,smartRecognition:!1,mobileOptimizer:!0,fullAlone:!0,fullViewPort:null,fullStretchTypes:"flash, video",overlay:{blur:!0,opacity:.85},controls:{arrows:!1,slideshow:!1,toolbar:!0,fullscreen:!0,thumbnail:!0,keyboard:!0,mousewheel:!0,swipe:!0},keyboard:{left:!0,right:!0,up:!0,down:!0,esc:!0,shift_enter:!0},show:{effect:!0,
speed:300,title:!0},hide:{effect:!0,speed:300},caption:{start:!0,show:"mouseenter",hide:"mouseleave"},social:{start:!0,show:"mouseenter",hide:"mouseleave",buttons:!1},styles:{pageOffsetX:0,pageOffsetY:0,nextOffsetX:45,nextOffsetY:0,nextOpacity:1,nextScale:1,prevOffsetX:45,prevOffsetY:0,prevOpacity:1,prevScale:1},thumbnails:{maxWidth:120,maxHeight:80,normalOpacity:1,activeOpacity:.6},effects:{reposition:!0,repositionSpeed:200,switchSpeed:500,loadedFadeSpeed:180,fadeSpeed:200},slideshow:{pauseTime:5E3,
pauseOnHover:!1,startPaused:!0},text:{close:"Press Esc to close",enterFullscreen:"Enter Fullscreen (Shift+Enter)",exitFullscreen:"Exit Fullscreen (Shift+Enter)",slideShow:"Slideshow",next:"Next",previous:"Previous"},errors:{loadImage:"An error occurred when trying to load photo.",loadContents:"An error occurred when trying to load contents.",missingPlugin:"The content your are attempting to view requires the <a href='{pluginspage}' target='_blank'>{type} plugin</a>."},ajaxSetup:{url:"",beforeSend:function(a,
b){},cache:!1,complete:function(a,b){},crossDomain:!1,error:function(a,b,c){},success:function(a,b,c){},global:!0,ifModified:!1,username:null,password:null,type:"GET"},callback:{}},b);var d=g.isArray(c)||"string"==typeof c?!0:!1;c=g.isArray(c)?c:[];"string"==typeof a[0]&&(c[0]=a[0]);if(ka(g.fn.jquery,"1.8",">=")){var e=new fa(g(this),b,c,d);return{close:function(){e.closeAction()},fullscreen:function(){e.fullScreenAction()},moveNext:function(){e.moveTo("next")},movePrev:function(){e.moveTo("prev")},
goTo:function(a){e.goTo(a)},refresh:function(){e.refresh()},reposition:function(){0<arguments.length?e.repositionPhoto(!0):e.repositionPhoto()},setOption:function(a){e.setOption(a)},destroy:function(){e.closeAction();e.dispatchItemsEvents()}}}throw"The jQuery version that was loaded is too old. iLightBox requires jQuery 1.8+";};g.iLightBox=function(a,b){return g.fn.iLightBox(a,b)};g.extend(g.easing,{easeInCirc:function(a,b,c,d,e){return-d*(P(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*
P(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return 1>(b/=e/2)?-d/2*(P(1-b*b)-1)+c:d/2*(P(1-(b-=2)*b)+1)+c}});(function(){g.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(a,b){g.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)};g.attrFn&&(g.attrFn[b]=!0)});g.event.special.itap={setup:function(){var a=this,b=g(this),c,d;b.bind("touchstart.iTap",function(e){c=L();b.one("touchend.iTap",function(b){d=L();b=g.event.fix(b||
p.event);b.type="itap";c&&d&&c.x==d.x&&c.y==d.y&&(g.event.dispatch||g.event.handle).call(a,b);c=d=Q})})},teardown:function(){g(this).unbind("touchstart.iTap")}}})();(function(){t={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",prefix:""};browserPrefixes=["webkit","moz","o","ms","khtml"];if("undefined"!=typeof document.cancelFullScreen)t.supportsFullScreen=!0;else for(var a=0,b=browserPrefixes.length;a<b;a++)if(t.prefix=
browserPrefixes[a],"undefined"!=typeof document[t.prefix+"CancelFullScreen"]){t.supportsFullScreen=!0;break}t.supportsFullScreen&&(t.fullScreenEventName=t.prefix+"fullscreenchange",t.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;default:return document[this.prefix+"FullScreen"]}},t.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},t.cancelFullScreen=function(a){return""===
this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()})})();(function(){var a=navigator.userAgent;a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];a=b[1]||"";b=b[2]||"0";D={};a&&(D[a]=!0,D.version=b);D.chrome?D.webkit=!0:D.webkit&&(D.safari=!0)})();(function(){function a(a){for(var d=0,
f=b.length;d<f;d++){var h=b[d]?b[d]+a.charAt(0).toUpperCase()+a.slice(1):a;if(c.style[h]!==Q)return h}}var b=["","webkit","moz","ms","o"],c=document.createElement("div");B=a("transform")||"";H=a("perspective")?"translateZ(0) ":""})();var ha={version:"0.7.9",name:"PluginDetect",handler:function(a,b,c){return function(){a(b,c)}},openTag:"<",isDefined:function(a){return"undefined"!=typeof a},isArray:function(a){return/array/i.test(Object.prototype.toString.call(a))},isFunc:function(a){return"function"==
typeof a},isString:function(a){return"string"==typeof a},isNum:function(a){return"number"==typeof a},isStrNum:function(a){return"string"==typeof a&&/\d/.test(a)},getNumRegx:/[\d][\d\.\_,-]*/,splitNumRegx:/[\.\_,-]/g,getNum:function(a,b){var c=this.isStrNum(a)?(this.isDefined(b)?new RegExp(b):this.getNumRegx).exec(a):null;return c?c[0]:null},compareNums:function(a,b,c){var d=parseInt;if(this.isStrNum(a)&&this.isStrNum(b)){if(this.isDefined(c)&&c.compareNums)return c.compareNums(a,b);a=a.split(this.splitNumRegx);
b=b.split(this.splitNumRegx);for(c=0;c<Y(a.length,b.length);c++){if(d(a[c],10)>d(b[c],10))return 1;if(d(a[c],10)<d(b[c],10))return-1}}return 0},formatNum:function(a,b){var c;if(!this.isStrNum(a))return null;this.isNum(b)||(b=4);b--;var d=a.replace(/\s/g,"").split(this.splitNumRegx).concat(["0","0","0","0"]);for(c=0;4>c;c++)if(/^(0+)(.+)$/.test(d[c])&&(d[c]=RegExp.$2),c>b||!/\d/.test(d[c]))d[c]="0";return d.slice(0,4).join(",")},$$hasMimeType:function(a){return function(b){if(!a.isIE&&b){var c,d,e=
a.isArray(b)?b:a.isString(b)?[b]:[];for(d=0;d<e.length;d++)if(a.isString(e[d])&&/[^\s]/.test(e[d])&&(c=(b=navigator.mimeTypes[e[d]])?b.enabledPlugin:0)&&(c.name||c.description))return b}return null}},findNavPlugin:function(a,b,c){a=new RegExp(a,"i");b=!this.isDefined(b)||b?/\d/:0;c=c?new RegExp(c,"i"):0;var d=navigator.plugins,e;for(e=0;e<d.length;e++){var f=d[e].description||"";var h=d[e].name||"";if(a.test(f)&&(!b||b.test(RegExp.leftContext+RegExp.rightContext))||a.test(h)&&(!b||b.test(RegExp.leftContext+
RegExp.rightContext)))if(!c||!c.test(f)&&!c.test(h))return d[e]}return null},getMimeEnabledPlugin:function(a,b,c){var d;b=new RegExp(b,"i");c=c?new RegExp(c,"i"):0;var e,f=this.isString(a)?[a]:a;for(e=0;e<f.length;e++)if((d=this.hasMimeType(f[e]))&&(d=d.enabledPlugin)){var h=d.description||"";a=d.name||"";if(b.test(h)||b.test(a))if(!c||!c.test(h)&&!c.test(a))return d}return 0},getPluginFileVersion:function(a,b){var c,d,e=-1;if(2<this.OS||!a||!a.version||!(c=this.getNum(a.version)))return b;if(!b)return c;
c=this.formatNum(c);b=this.formatNum(b);var f=b.split(this.splitNumRegx);var h=c.split(this.splitNumRegx);for(d=0;d<f.length;d++)if(-1<e&&d>e&&"0"!=f[d]||h[d]!=f[d]&&(-1==e&&(e=d),"0"!=f[d]))return b;return c},AXO:p.ActiveXObject,getAXO:function(a){var b=null;try{b=new this.AXO(a)}catch(c){}return b},convertFuncs:function(a){var b,c=/^[\$][\$]/;for(b in a)if(c.test(b))try{var d=b.slice(2);0<d.length&&!a[d]&&(a[d]=a[b](a),delete a[b])}catch(e){}},initObj:function(a,b,c){var d;if(a){if(1==a[b[0]]||
c)for(d=0;d<b.length;d+=2)a[b[d]]=b[d+1];for(d in a)(c=a[d])&&1==c[b[0]]&&this.initObj(c,b)}},initScript:function(){var a=navigator,b,c=document,d=a.userAgent||"",e=a.vendor||"",f=a.platform||"";a=a.product||"";this.initObj(this,["$",this]);for(b in this.Plugins)this.Plugins[b]&&this.initObj(this.Plugins[b],["$",this,"$$",this.Plugins[b]],1);this.convertFuncs(this);this.OS=100;if(f){var h=["Win",1,"Mac",2,"Linux",3,"FreeBSD",4,"iPhone",21.1,"iPod",21.2,"iPad",21.3,"Win.*CE",22.1,"Win.*Mobile",22.2,
"Pocket\\s*PC",22.3,"",100];for(b=h.length-2;0<=b;b-=2)if(h[b]&&(new RegExp(h[b],"i")).test(f)){this.OS=h[b+1];break}}this.head=c.getElementsByTagName("head")[0]||c.getElementsByTagName("body")[0]||c.body||null;this.verIE=(this.isIE=(new Function("return/*@cc_on!@*/!1"))())&&/MSIE\s*(\d+\.?\d*)/i.test(d)?parseFloat(RegExp.$1,10):null;this.docModeIE=this.verIEfull=null;if(this.isIE){b=document.createElement("div");try{b.style.behavior="url(#default#clientcaps)",this.verIEfull=b.getComponentVersion("{89820200-ECBD-11CF-8B85-00AA005B4383}",
"componentid").replace(/,/g,".")}catch(l){}b=parseFloat(this.verIEfull||"0",10);this.docModeIE=c.documentMode||(/back/i.test(c.compatMode||"")?5:b)||this.verIE;this.verIE=b||this.docModeIE}this.ActiveXEnabled=!1;if(this.isIE)for(c="Msxml2.XMLHTTP Msxml2.DOMDocument Microsoft.XMLDOM ShockwaveFlash.ShockwaveFlash TDCCtl.TDCCtl Shell.UIHelper Scripting.Dictionary wmplayer.ocx".split(" "),b=0;b<c.length;b++)if(this.getAXO(c[b])){this.ActiveXEnabled=!0;break}this.verGecko=(this.isGecko=/Gecko/i.test(a)&&
/Gecko\s*\/\s*\d/i.test(d))?this.formatNum(/rv\s*\:\s*([\.\,\d]+)/i.test(d)?RegExp.$1:"0.9"):null;this.verChrome=(this.isChrome=/Chrome\s*\/\s*(\d[\d\.]*)/i.test(d))?this.formatNum(RegExp.$1):null;this.verSafari=(this.isSafari=(/Apple/i.test(e)||!e&&!this.isChrome)&&/Safari\s*\/\s*(\d[\d\.]*)/i.test(d))&&/Version\s*\/\s*(\d[\d\.]*)/i.test(d)?this.formatNum(RegExp.$1):null;this.verOpera=(this.isOpera=/Opera\s*[\/]?\s*(\d+\.?\d*)/i.test(d))&&(/Version\s*\/\s*(\d+\.?\d*)/i.test(d),1)?parseFloat(RegExp.$1,
10):null;this.addWinEvent("load",this.handler(this.runWLfuncs,this))},init:function(a){var b={status:-3,plugin:0};if(!this.isString(a))return b;if(1==a.length)return this.getVersionDelimiter=a,b;a=a.toLowerCase().replace(/\s/g,"");var c=this.Plugins[a];if(!c||!c.getVersion)return b;b.plugin=c;this.isDefined(c.installed)||(c.installed=null,c.version=null,c.version0=null,c.getVersionDone=null,c.pluginName=a);this.garbage=!1;if(this.isIE&&!this.ActiveXEnabled&&"java"!==a)return b.status=-2,b;b.status=
1;return b},fPush:function(a,b){this.isArray(b)&&(this.isFunc(a)||this.isArray(a)&&0<a.length&&this.isFunc(a[0]))&&b.push(a)},callArray:function(a){var b;if(this.isArray(a))for(b=0;b<a.length&&null!==a[b];b++)this.call(a[b]),a[b]=null},call:function(a){var b=this.isArray(a)?a.length:-1;if(0<b&&this.isFunc(a[0]))a[0](this,1<b?a[1]:0,2<b?a[2]:0,3<b?a[3]:0);else this.isFunc(a)&&a(this)},getVersionDelimiter:",",$$getVersion:function(a){return function(b,c,d){b=a.init(b);if(0>b.status)return null;b=b.plugin;
1!=b.getVersionDone&&(b.getVersion(null,c,d),null===b.getVersionDone&&(b.getVersionDone=1));a.cleanup();return c=(c=b.version||b.version0)?c.replace(a.splitNumRegx,a.getVersionDelimiter):c}},cleanup:function(){this.garbage&&this.isDefined(p.CollectGarbage)&&p.CollectGarbage()},isActiveXObject:function(a,b){var c=!1,d='<object width="1" height="1" style="display:none" '+a.getCodeBaseVersion(b)+">"+a.HTML+this.openTag+"/object>";if(!this.head)return c;this.head.insertBefore(document.createElement("object"),
this.head.firstChild);this.head.firstChild.outerHTML=d;try{this.head.firstChild.classid=a.classID}catch(e){}try{this.head.firstChild.object&&(c=!0)}catch(e){}try{c&&4>this.head.firstChild.readyState&&(this.garbage=!0)}catch(e){}this.head.removeChild(this.head.firstChild);return c},codebaseSearch:function(a,b){var c=this;if(!c.ActiveXEnabled||!a)return null;a.BIfuncs&&a.BIfuncs.length&&null!==a.BIfuncs[a.BIfuncs.length-1]&&c.callArray(a.BIfuncs);var d,e=a.SEARCH;if(c.isStrNum(b)){if(e.match&&e.min&&
0>=c.compareNums(b,e.min))return!0;if(e.match&&e.max&&0<=c.compareNums(b,e.max))return!1;(d=c.isActiveXObject(a,b))&&(!e.min||0<c.compareNums(b,e.min))&&(e.min=b);d||e.max&&!(0>c.compareNums(b,e.max))||(e.max=b);return d}var f=[0,0,0,0],h=[].concat(e.digits),g=e.min?1:0,k,n=function(b,d){var e=[].concat(f);e[b]=d;return c.isActiveXObject(a,e.join(","))};if(e.max){d=e.max.split(c.splitNumRegx);for(k=0;k<d.length;k++)d[k]=parseInt(d[k],10);d[0]<h[0]&&(h[0]=d[0])}if(e.min){var m=e.min.split(c.splitNumRegx);
for(k=0;k<m.length;k++)m[k]=parseInt(m[k],10);m[0]>f[0]&&(f[0]=m[0])}if(m&&d)for(k=1;k<m.length&&m[k-1]==d[k-1];k++)d[k]<h[k]&&(h[k]=d[k]),m[k]>f[k]&&(f[k]=m[k]);if(e.max)for(k=1;k<h.length;k++)if(0<d[k]&&0==h[k]&&h[k-1]<e.digits[k-1]){h[k-1]+=1;break}for(k=0;k<h.length;k++){m={};for(e=0;20>e&&!(1>h[k]-f[k]);e++){d=X((h[k]+f[k])/2);if(m["a"+d])break;m["a"+d]=1;n(k,d)?(f[k]=d,g=1):h[k]=d}h[k]=f[k];!g&&n(k,f[k])&&(g=1);if(!g)break}return g?f.join(","):null},addWinEvent:function(a,b){if(this.isFunc(b))if(p.addEventListener)p.addEventListener(a,
b,!1);else if(p.attachEvent)p.attachEvent("on"+a,b);else{var c=p["on"+a];p["on"+a]=this.winHandler(b,c)}},winHandler:function(a,b){return function(){a();"function"==typeof b&&b()}},WLfuncs0:[],WLfuncs:[],runWLfuncs:function(a){a.winLoaded=!0;a.callArray(a.WLfuncs0);a.callArray(a.WLfuncs);if(a.onDoneEmptyDiv)a.onDoneEmptyDiv()},winLoaded:!1,$$onWindowLoaded:function(a){return function(b){a.winLoaded?a.call(b):a.fPush(b,a.WLfuncs)}},div:null,divID:"plugindetect",divWidth:50,pluginSize:1,emptyDiv:function(){var a,
b,c;if(this.div&&this.div.childNodes)for(a=this.div.childNodes.length-1;0<=a;a--){if((c=this.div.childNodes[a])&&c.childNodes)for(b=c.childNodes.length-1;0<=b;b--){var d=c.childNodes[b];try{c.removeChild(d)}catch(e){}}if(c)try{this.div.removeChild(c)}catch(e){}}!this.div&&(a=document.getElementById(this.divID))&&(this.div=a);if(this.div&&this.div.parentNode){try{this.div.parentNode.removeChild(this.div)}catch(e){}this.div=null}},DONEfuncs:[],onDoneEmptyDiv:function(){var a,b;if(this.winLoaded&&(!this.WLfuncs||
!this.WLfuncs.length||null===this.WLfuncs[this.WLfuncs.length-1])){for(a in this)if((b=this[a])&&b.funcs&&(3==b.OTF||b.funcs.length&&null!==b.funcs[b.funcs.length-1]))return;for(a=0;a<this.DONEfuncs.length;a++)this.callArray(this.DONEfuncs);this.emptyDiv()}},getWidth:function(a){return a&&(a=a.scrollWidth||a.offsetWidth,this.isNum(a))?a:-1},getTagStatus:function(a,b,c,d){var e=a.span,f=this.getWidth(e);c=c.span;var g=this.getWidth(c);b=b.span;var l=this.getWidth(b);if(!(e&&c&&b&&this.getDOMobj(a)))return-2;
if(g<l||0>f||0>g||0>l||l<=this.pluginSize||1>this.pluginSize)return 0;if(f>=l)return-1;try{if(f==this.pluginSize&&(!this.isIE||4==this.getDOMobj(a).readyState)&&(!a.winLoaded&&this.winLoaded||a.winLoaded&&this.isNum(d)&&(this.isNum(a.count)||(a.count=d),10<=d-a.count)))return 1}catch(k){}return 0},getDOMobj:function(a,b){var c=a?a.span:0,d=c&&c.firstChild?1:0;try{d&&b&&this.div.focus()}catch(e){}return d?c.firstChild:null},setStyle:function(a,b){var c=a.style,d;if(c&&b)for(d=0;d<b.length;d+=2)try{c[b[d]]=
b[d+1]}catch(e){}},insertDivInBody:function(a,b){var c=null,d=b?p.top.document:p.document,e=d.getElementsByTagName("body")[0]||d.body;if(!e)try{d.write('<div id="pd33993399">.'+this.openTag+"/div>"),c=d.getElementById("pd33993399")}catch(f){}if(e=d.getElementsByTagName("body")[0]||d.body)e.insertBefore(a,e.firstChild),c&&e.removeChild(c)},insertHTML:function(a,b,c,d,e){e=document;var f=e.createElement("span"),g,l="outlineStyle none borderStyle none padding 0px margin 0px visibility visible".split(" ");
this.isDefined(d)||(d="");if(this.isString(a)&&/[^\s]/.test(a)){a=a.toLowerCase().replace(/\s/g,"");var k=this.openTag+a+' width="'+this.pluginSize+'" height="'+this.pluginSize+'" ';k+='style="outline-style:none;border-style:none;padding:0px;margin:0px;visibility:visible;display:inline;" ';for(g=0;g<b.length;g+=2)/[^\s]/.test(b[g+1])&&(k+=b[g]+'="'+b[g+1]+'" ');k+=">";for(g=0;g<c.length;g+=2)/[^\s]/.test(c[g+1])&&(k+=this.openTag+'param name="'+c[g]+'" value="'+c[g+1]+'" />');k+=d+this.openTag+"/"+
a+">"}else k=d;this.div||((b=e.getElementById(this.divID))?this.div=b:(this.div=e.createElement("div"),this.div.id=this.divID),this.setStyle(this.div,l.concat(["width",this.divWidth+"px","height",this.pluginSize+3+"px","fontSize",this.pluginSize+3+"px","lineHeight",this.pluginSize+3+"px","verticalAlign","baseline","display","block"])),b||(this.setStyle(this.div,"position absolute right 0px top 0px".split(" ")),this.insertDivInBody(this.div)));if(this.div&&this.div.parentNode){this.setStyle(f,l.concat(["fontSize",
this.pluginSize+3+"px","lineHeight",this.pluginSize+3+"px","verticalAlign","baseline","display","inline"]));try{f.innerHTML=k}catch(n){}try{this.div.appendChild(f)}catch(n){}return{span:f,winLoaded:this.winLoaded,tagName:a,outerHTML:k}}return{span:null,winLoaded:this.winLoaded,tagName:"",outerHTML:k}},Plugins:{quicktime:{mimeType:["video/quicktime","application/x-quicktimeplayer","image/x-macpaint","image/x-quicktime"],progID:"QuickTimeCheckObject.QuickTimeCheck.1",progID0:"QuickTime.QuickTime",classID:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
minIEver:7,HTML:'<param name="src" value="" /><param name="controller" value="false" />',getCodeBaseVersion:function(a){return'codebase="#version='+a+'"'},SEARCH:{min:0,max:0,match:0,digits:[16,128,128,0]},getVersion:function(a){var b=this.$,c=null,d=null;if(b.isIE){b.isStrNum(a)&&(a=a.split(b.splitNumRegx),3<a.length&&0<parseInt(a[3],10)&&(a[3]="9999"),a=a.join(","));if(b.isStrNum(a)&&b.verIE>=this.minIEver&&0<this.canUseIsMin()){this.installed=this.isMin(a);this.getVersionDone=0;return}this.getVersionDone=
1;!c&&b.verIE>=this.minIEver&&(c=this.CDBASE2VER(b.codebaseSearch(this)));c||(d=b.getAXO(this.progID))&&d.QuickTimeVersion&&(c=d.QuickTimeVersion.toString(16),c=parseInt(c.charAt(0),16)+"."+parseInt(c.charAt(1),16)+"."+parseInt(c.charAt(2),16))}else b.hasMimeType(this.mimeType)&&(d=3!=b.OS?b.findNavPlugin("QuickTime.*Plug-?in",0):null)&&d.name&&(c=b.getNum(d.name));this.installed=c?1:d?0:-1;this.version=b.formatNum(c,3)},cdbaseUpper:["7,60,0,0","0,0,0,0"],cdbaseLower:["7,50,0,0",null],cdbase2ver:[function(a,
b){var c=b.split(a.$.splitNumRegx);return[c[0],c[1].charAt(0),c[1].charAt(1),c[2]].join()},null],CDBASE2VER:function(a){var b=this.$,c,d=this.cdbaseUpper,e=this.cdbaseLower;if(a)for(a=b.formatNum(a),c=0;c<d.length;c++)if(d[c]&&0>b.compareNums(a,d[c])&&e[c]&&0<=b.compareNums(a,e[c])&&this.cdbase2ver[c])return this.cdbase2ver[c](this,a);return a},canUseIsMin:function(){var a=this.$,b,c=this.canUseIsMin,d=this.cdbaseUpper,e=this.cdbaseLower;if(!c.value)for(c.value=-1,b=0;b<d.length;b++){if(d[b]&&a.codebaseSearch(this,
d[b])){c.value=1;break}if(e[b]&&a.codebaseSearch(this,e[b])){c.value=-1;break}}this.SEARCH.match=1==c.value?1:0;return c.value},isMin:function(a){return this.$.codebaseSearch(this,a)?.7:-1}},flash:{mimeType:"application/x-shockwave-flash",progID:"ShockwaveFlash.ShockwaveFlash",classID:"clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",getVersion:function(){var a=function(a){return a?(a=/[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(a))?a[0].replace(/[rRdD\.]/g,",").replace(/\s/g,""):null:null},b=this.$,c,d=null,
e=null,f=null;if(b.isIE){for(c=15;2<c;c--)if(e=b.getAXO(this.progID+"."+c)){f=c.toString();break}e||(e=b.getAXO(this.progID));if("6"==f)try{e.AllowScriptAccess="always"}catch(h){return"6,0,21,0"}try{d=a(e.GetVariable("$version"))}catch(h){}!d&&f&&(d=f)}else{if(e=b.hasMimeType(this.mimeType)){c=b.getDOMobj(b.insertHTML("object",["type",this.mimeType],[],"",this));try{d=b.getNum(c.GetVariable("$version"))}catch(h){}}d||((c=e?e.enabledPlugin:null)&&c.description&&(d=a(c.description)),d&&(d=b.getPluginFileVersion(c,
d)))}this.installed=d?1:-1;this.version=b.formatNum(d);return!0}},shockwave:{mimeType:"application/x-director",progID:"SWCtl.SWCtl",classID:"clsid:166B1BCA-3F9C-11CF-8075-444553540000",getVersion:function(){var a=null,b=null,c=this.$;if(c.isIE){try{b=c.getAXO(this.progID).ShockwaveVersion("")}catch(d){}c.isString(b)&&0<b.length?a=c.getNum(b):c.getAXO(this.progID+".8")?a="8":c.getAXO(this.progID+".7")?a="7":c.getAXO(this.progID+".1")&&(a="6")}else(b=c.findNavPlugin("Shockwave\\s*for\\s*Director"))&&
b.description&&c.hasMimeType(this.mimeType)&&(a=c.getNum(b.description)),a&&(a=c.getPluginFileVersion(b,a));this.installed=a?1:-1;this.version=c.formatNum(a)}},zz:0}};ha.initScript();var na='The "%%" function requires an even number of arguments.\nArguments should be in the form "atttributeName", "attributeValue", ...',r=null;(function(){function a(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}var b=document,c=g.event.special,d=b.documentMode,e="oniLightBoxHashChange"in p&&(void 0===
d||7<d);g.fn.iLightBoxHashChange=function(a){return a?this.bind("iLightBoxHashChange",a):this.trigger("iLightBoxHashChange")};g.fn.iLightBoxHashChange.delay=50;c.iLightBoxHashChange=g.extend(c.iLightBoxHashChange,{setup:function(){if(e)return!1;g(f.start)},teardown:function(){if(e)return!1;g(f.stop)}});var f=function(){function c(){var b=a(),d=t(n);b!==n?(r(n=b,d),g(p).trigger("iLightBoxHashChange")):d!==n&&(location.href=location.href.replace(/#.*/,"")+d);f=setTimeout(c,g.fn.iLightBoxHashChange.delay)}
var d={},f,n=a(),m=function(a){return a},r=m,t=m;d.start=function(){f||c()};d.stop=function(){f&&clearTimeout(f);f=void 0};D.msie&&!e&&function(){var e,f;d.start=function(){e||(f=(f=g.fn.iLightBoxHashChange.src)&&f+a(),e=g('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){f||r(a());c()}).attr("src",f||"javascript:0").insertAfter("body")[0].contentWindow,b.onpropertychange=function(){try{"title"===event.propertyName&&(e.document.title=b.title)}catch(v){}})};d.stop=m;t=function(){return a(e.location.href)};
r=function(a,c){var d=e.document,f=g.fn.iLightBoxHashChange.domain;a!==c&&(d.title=b.title,d.open(),f&&d.write('<script>document.domain="'+f+'"\x3c/script>'),d.close(),e.location.hash=a)}}();return d}()})();Array.prototype.filter||(Array.prototype.filter=function(a,b){if(null==this)throw new TypeError;var c=Object(this),d=c.length>>>0;if("function"!=typeof a)throw new TypeError;for(var e=[],f=0;f<d;f++)if(f in c){var g=c[f];a.call(b,g,f,c)&&e.push(g)}return e});Array.prototype.indexOf||(Array.prototype.indexOf=
function(a,b){if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),d=c.length>>>0;if(0===d)return-1;var e=+b||0;Infinity===I(e)&&(e=0);if(e>=d)return-1;for(e=ca(0<=e?e:d-I(e),0);e<d;){if(e in c&&c[e]===a)return e;e++}return-1});Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=c;1<arguments.length&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&
(d=(0<d||-1)*M(I(d))));for(c=0<=d?Y(d,c-1):c-I(d);0<=c;c--)if(c in b&&b[c]===a)return c;return-1})})(jQuery,this);
!function(e){function t(t){var n=t||window.event,i=[].slice.call(arguments,1),l=0,s=0,o=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(l=n.wheelDelta/120),n.detail&&(l=-n.detail/3),o=l,void 0!==n.axis&&n.axis===n.HORIZONTAL_AXIS&&(o=0,s=-1*l),void 0!==n.wheelDeltaY&&(o=n.wheelDeltaY/120),void 0!==n.wheelDeltaX&&(s=-1*n.wheelDeltaX/120),i.unshift(t,l,s,o),(e.event.dispatch||e.event.handle).apply(this,i)}var n=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var i=n.length;i;)e.event.fixHooks[n[--i]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery);
!function(a,b,c){for(var e,d=0,f=function(a){e&&(b.requestAnimationFrame(f,a),jQuery.fx.tick())},g=["ms","moz","webkit","o"],h=0,i=g.length;h<i&&!b.requestAnimationFrame;++h)b.requestAnimationFrame=b[g[h]+"RequestAnimationFrame"],b.cancelAnimationFrame=b[g[h]+"CancelAnimationFrame"]||b[g[h]+"CancelRequestAnimationFrame"];b.requestAnimationFrame||(b.requestAnimationFrame=function(a,c){var e=(new Date).getTime(),f=e-d,g=Math.max(0,16-f),h=b.setTimeout(function(){a(e+g)},g);return d=e+g,h}),b.cancelAnimationFrame||(b.cancelAnimationFrame=function(a){clearTimeout(a)}),jQuery.fx.timer=function(a){a()&&jQuery.timers.push(a)&&!e&&(e=!0,f(a.elem))},jQuery.fx.stop=function(){e=!1}}(jQuery,this);




/**
 * Declaring and initializing global variables
 */
var $doc          = jQuery(document),
		$window       = jQuery(window),
		$html         = jQuery('html'),
		$body         = jQuery('body'),
		$themeHeader  = jQuery('#theme-header'),
		$the_post     = jQuery('#the-post'),
		$wrapper      = jQuery('#tie-wrapper'),
		$container    = jQuery('#tie-container'),
		$postContent  = $the_post.find( '.entry' ),
		is_Lazy       = tie.lazyload,
		is_RTL        = tie.is_rtl ? true : false,
		fixedDesktop  = tie.sticky_desktop,
		fixedMobile   = tie.sticky_mobile,
		userAgent     = navigator.userAgent,
		isDuringAjax  = false,
		megaMenuAjax  = false,
		intialWidth   = $window.width(),
		adBlock       = false;



$doc.ready(function(){

	'use strict';

	tie_animate_element();


	/**
	 * Ad Blocker
	 */
	if( tie.ad_blocker_detector && typeof $tieE3 === 'undefined' ){
		adBlock = true;
		$html.css({'marginRight': getScrollBarWidth(), 'overflow': 'hidden'});
		setTimeout(function(){ $body.addClass('tie-popup-is-opend');},10);
		tieBtnOpen('#tie-popup-adblock');
	}


	/**
	 * Story Index
	 */
	jQuery('.index-title').viewportChecker({
		repeat: true,
		offset: 30,
		callbackFunction: function( elem, action ){
			var ID = elem.attr('id');
			jQuery('#story-index a').removeClass('is-current');
			jQuery('#trigger-' + ID).addClass('is-current');
		}
	});

	jQuery('#story-index').theiaStickySidebar({
		'containerSelector'   : '#the-post .entry-content',
		'additionalMarginTop' : 150
	});

	jQuery( '#story-index-icon, #story-index a' ).on('click', function(){
		jQuery('#story-index').find( 'ul' ).toggle();
	});


	/**
	 * Remove the products from: Popup shopping cart, Cart Widget, Cart Page
	 */
	$doc.on('click', '.remove', function(){
		var $element = jQuery(this).parent('li');
		$element.add(jQuery(this).parents('.cart_item')).velocity('stop').velocity('transition.bounceLeftOut', { duration: 600});
	});


	/**
	 * Tooltips
	 */
	jQuery('[data-toggle="tooltip"]').tietooltip();


	/**
	 * Toggle post content for mobile
	 */
	$doc.on('click', '#toggle-post-button', function(){
		$postContent.toggleClass('is-expanded');
		jQuery(this).hide();
		return false;
	});


	/**
	 * Toggle Shortcode
	 */
	$doc.on('click', 'h3.toggle-head', function(){
		var $thisElement = jQuery(this).parent();
		$thisElement.find('div.toggle-content').slideToggle();
		$thisElement.toggleClass('tie-sc-open tie-sc-close');
	});


	/**
	 * Responsive Videos
	 */
	$wrapper.fitVids({
		ignore         : '.video-player-wrapper, .youtube-box, #buddypress, .featured-area .tie-fluid-width-video-wrapper',
		customSelector : "iframe[src*='maps.google.com'], iframe[src*='google.com/maps'], iframe[src*='dailymotion.com']"
	});


	/**
	 * Share Buttons : Print
	 */
	$doc.on('click', '.print-share-btn', function(){
		window.print();
		return false;
	});


	/**
	 * Open Share buttons in a popup
	 */
	$doc.on('click', '.share-links a', function(){
		var link = jQuery(this).attr('href');
		if( link != '#' ){
			window.open( link, 'TIEshare', 'height=450,width=760,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0' );
			return false;
		}
	});


	/**
	 * Masonry
	 */
	if( jQuery.fn.masonry ){

		var $grid = jQuery('#masonry-grid'),
				onloadsWrap = jQuery('#media-page-layout');

		if( $grid.length ){

			$grid.masonry({
				columnWidth     : '.grid-sizer',
				gutter          : '.gutter-sizer',
				itemSelector    : '.post-element',
				percentPosition : true,
				isInitLayout    : false, // v3
				initLayout      : false, // v4
				originLeft      : ! is_RTL,
				isOriginLeft    : ! is_RTL
			}).addClass( 'masonry-loaded' );

			// Run after masonry complete
			$grid.masonry( 'on', 'layoutComplete', function(){
				isDuringAjax = false;
			});

			// Run the masonry
			$grid.masonry();

			// Load images and re fire masonry
			$grid.imagesLoaded().progress( function(){
				$grid.masonry('layout');
			});

			onloadsWrap.find('.loader-overlay').fadeOut().remove();
			onloadsWrap.find('.post-element').velocity('transition.slideUpIn',{duration: 400, stagger: 200});
		}
	}


	/**
	 * Lightbox
	 */
	jQuery( 'a.lightbox-enabled' ).iLightBox({
		skin: tie.lightbox_skin,
		path: tie.lightbox_thumb,
		controls: {
			arrows: tie.lightbox_arrows
		},
		callback: {
			onOpen: function(){
				$html.css({'marginRight': getScrollBarWidth(), 'overflow': 'hidden'});
			},
			onHide: function(){
				setTimeout(function(){
					$html.removeAttr('style');
				}, 300);
			}
		}
	});

	if( tie.lightbox_all ){
		$the_post.find('div.entry a').not( 'div.entry .gallery a' ).each(function(i, el){
			var href_value = el.href;
			if (/\.(jpg|jpeg|png|gif)$/.test(href_value)){
				jQuery(this).iLightBox({
					skin: tie.lightbox_skin,
					callback: {
						onOpen: function(){
							$html.css({'marginRight': getScrollBarWidth(), 'overflow': 'hidden'});
						},
						onHide: function(){
							setTimeout(function(){
								$html.removeAttr('style');
							}, 300);
						}
					}
				});
			}
		});
	}

	if( tie.lightbox_gallery ){
		$the_post.find('div.entry .gallery a').each(function(){
			//var href_value = el.href;
			//if (/\.(jpg|jpeg|png|gif)$/.test(href_value)){
				jQuery(this).addClass( 'ilightbox-gallery' );
			//}
		});

		$the_post.find( '.ilightbox-gallery' ).iLightBox({
			skin: tie.lightbox_skin,
			path: tie.lightbox_thumb,
			controls: {
				arrows: tie.lightbox_arrows
			},
			callback: {
				onOpen: function(){
					$html.css({'marginRight': getScrollBarWidth(), 'overflow': 'hidden'});
				},
				onHide: function(){
					setTimeout(function(){
						$html.removeAttr('style');
					}, 300);
				}
			}
		});
	}


	/**
	 * Responsive Tables
	 */
	if( tie.responsive_tables ){
		$the_post.find('table').wrap( '<div class="table-is-responsive"></div>' );
	}


	/**
	 * Tabs
	 */
	jQuery('.tabs-wrapper').each(function(){

		var $tab = jQuery( this );
		$tab.find('.tabs li:first').addClass('active');

		if( $tab.hasClass( 'tabs-vertical') ){
			var minHeight = $tab.find('.tabs').outerHeight();
			$tab.find('.tab-content').css({minHeight: minHeight});
		}

		$tab.find('.tabs li').on( 'click', function(){

			var $tabTitle = jQuery( this );
			if( ! $tabTitle.hasClass( 'active' ) ){

				$tabTitle.parents('.tabs').find('li').removeClass('active');
				$tabTitle.addClass('active');

				$tabTitle.parents('.tabs-wrapper').find('.tab-content').hide();
				var currentTab = $tabTitle.find('a').attr('href'),
				activeTab  = jQuery( currentTab ).show();

				activeTab.find('.tab-content-elements li').velocity('stop').velocity('transition.slideUpIn',{stagger: 100 ,duration: 500});
				activeTab.find('.tab-content-wrap').velocity('stop').velocity('transition.slideDownIn',{duration: 700});

				tie_animate_element( activeTab );
			}

			return false;
		});
	});



	/**
	 * Sticky video
	 */
	if( tie.is_sticky_video && jQuery( '#the-sticky-video' ).length ){

		var $featuredMedia = jQuery( '#the-sticky-video' ),
				top = $featuredMedia.offset().top,
				beforeOffset = fixedDesktop ? 60 : 0,
				beforeOffset = $body.hasClass('admin-bar') ? beforeOffset + 32 : beforeOffset,
				offset = Math.floor( top + $featuredMedia.outerHeight() - beforeOffset),
				widowWidth = $window.width();

		jQuery('.video-close-btn').click(function() {
			$featuredMedia.removeClass('video-is-sticky').addClass('stop-sticky');
		});

		/*
		* the twitter video dosen't load untile the page is loaded,
		* so we recalcualte the offset after the twitter video loaded.
		*/

		$window.on( 'resize load', function() {

			top = $featuredMedia.offset().top;
			offset = Math.floor( top + $featuredMedia.outerHeight() - beforeOffset);
			widowWidth = $window.width();

			/*
			* if the page has a sidebar, sticky the video at the top of it with the same width.
			*/
			if( $body.hasClass('has-sidebar') ){
				var $sidebar = jQuery('.sidebar'),
						sidebarWidth = $sidebar.width(),
						sidebarPadding = ($body.hasClass('magazine2') && $body.hasClass('sidebar-right')) ? 40 : 15,
						sidebarRightOffset = $window.width() - ($sidebar.offset().left + sidebarWidth);

				$featuredMedia.find('.featured-area-inner').css({
					width: sidebarWidth,
					height: sidebarWidth * (9/16),
					right: sidebarRightOffset - sidebarPadding,
					left: "auto",
					top: beforeOffset + 20
				});
			}

		}).on( 'scroll', function() {
			if( ! $featuredMedia.hasClass('stop-sticky') ){
				$featuredMedia.toggleClass('video-is-sticky', $window.scrollTop() > offset && widowWidth > 992 );
			}
		});

	}


	/**
	 * Menus
	 */
	// Properly update the ARIA states on focus (keyboard) and mouse over events
	jQuery( 'nav > ul' ).on( 'focus.wparia  mouseenter.wparia', '[aria-haspopup="true"]', function ( ev ){
		jQuery( ev.currentTarget ).attr( 'aria-expanded', true );
	});

	// Properly update the ARIA states on blur (keyboard) and mouse out events
	jQuery( 'nav > ul' ).on( 'blur.wparia  mouseleave.wparia', '[aria-haspopup="true"]', function ( ev ){
		jQuery( ev.currentTarget ).attr( 'aria-expanded', false );
	});

	// iPad menu hover bug with Safari
	if( userAgent.match(/iPad/i) ){
		if( userAgent.search('Safari') >= 0 && userAgent.search('Chrome') < 0 ){
			jQuery('#main-nav li.menu-item-has-children a, #main-nav li.mega-menu a, .top-bar li.menu-item-has-children a').attr('onclick','return true');
		}
	}


	/**
	 * Magazine box filters flexmenu
	 */
	var $flexmenu_elements = jQuery('.mag-box-filter-links, .flex-tabs .tabs');
	$flexmenu_elements.flexMenu({
		threshold   : 0,
		cutoff      : 0,
		linkText    : '<span class="tie-icon-dots-three-horizontal"></span>',
		linkTextAll : '<span class="tie-icon-dots-three-horizontal"></span>',
		linkTitle   : '',
		linkTitleAll: '',
		showOnHover : ( intialWidth > 991 ? true : false )
	});

	$flexmenu_elements.css({'opacity':1});


	/**
	 * Sticky Menus
	 */
	function fixedNav(){

		var windwidth     = $window.width() + getScrollBarWidth(),
				$fixedElement = false,
				adminBarHeight;

		// The Admin bar is active
		if( $body.hasClass('admin-bar') ){

			adminBarHeight = windwidth < 783 ? 46 : 32;
			adminBarHeight = windwidth < 601 ? 0  : adminBarHeight;
		}

		// Desktop : Get the Sticky Element
		if( windwidth > 992 ){
			$fixedElement = jQuery('#main-nav');
		}
		// Mobile : Get the Sticky Element
		else{
			$fixedElement = $themeHeader.hasClass('header-layout-1') ? jQuery('#main-nav') : jQuery('.logo-container');
		}


		// Check if the menu exists
		if( $fixedElement.length ){

			// The Element height
			var menuHeight = $fixedElement.outerHeight();

			// Set the height to the parent element
			$fixedElement.parent().css({height: menuHeight});

			// destory the plugin to call it againe with new values in resize
			$fixedElement.tiesticky('destroy');

			if( ( fixedDesktop && windwidth > 991 ) || ( fixedMobile && windwidth < 992 ) ){

				// intialize it againe
				$fixedElement.tiesticky({
					offset       : $fixedElement.offset().top,
					behaviorMode : tie.sticky_behavior,
					tolerance    : 0,
					windwidth    : windwidth,
					menuHeight   : menuHeight,
					heightDiff   : menuHeight - 60,
					adminBarH    : adminBarHeight,
					isHightestThanSticky:  menuHeight > 60 ? true : false
				});
			}
		}
	}

	if( fixedDesktop || fixedMobile ){
		fixedNav();
		$window.resize(fixedNav);
	}



	/**
	 * Sticky Sidebars
	 */
	if( jQuery( '.is-sticky' ).length ){
		var stickySidebarBottom = 35,
		stickySidebarTop = fixedDesktop ? 68 : 0;
		stickySidebarTop = ( tie.sticky_behavior != 'default' ) ? 8 : stickySidebarTop;
		stickySidebarTop = ( $body.hasClass('admin-bar') ) ? stickySidebarTop + 32 : stickySidebarTop;
		stickySidebarTop = ( $body.hasClass('border-layout') ) ? stickySidebarTop + 30 : stickySidebarTop;

		jQuery( '.is-sticky' ).theiaStickySidebar({
			'additionalMarginTop'    : stickySidebarTop,
			'additionalMarginBottom' : stickySidebarBottom,
			'minWidth'               : 990
		});
	}


	/**
	 * Popup Module
	 */
	var $tiePopup = jQuery('.tie-popup' );

	$doc.on( 'click', '.tie-popup-trigger', function (event){
		event.preventDefault();
		tieBtnOpen('#tie-popup-login');
	});

	if ( jQuery('.tie-search-trigger').length ){

		if ( tie.type_to_search ){
			$doc.bind('keydown', function(e){

				if( ! jQuery( 'input, textarea' ).is( ':focus' ) && ! jQuery( '#tie-popup-login' ).is( ':visible' ) && ! e.ctrlKey && ! e.metaKey && e.keyCode >= 65 && e.keyCode <= 90 && (detectIE() > 9 || detectIE() === false)){
					$container.removeClass('side-aside-open');
					tieBtnOpen('#tie-popup-search-wrap');
				}
			});
		}

		jQuery('.tie-search-trigger').on( 'click', function (){
			tieBtnOpen('#tie-popup-search-wrap');
			return false;
		});
	}

	function tieBtnOpen(windowToOpen){

		jQuery(windowToOpen).show();

		if(detectIE() == false && windowToOpen == '#tie-popup-search-wrap' ){
			$tiePopup.find('form input[type="text"]').focus();
		}

		if( is_Lazy ){
			jQuery(windowToOpen).find('.lazy-img').lazy({
				effect: 'fadeIn',
				effectTime: 100,
			});
		}

		setTimeout(function(){ $body.addClass('tie-popup-is-opend'); },10);
		$html.css({'marginRight': getScrollBarWidth(), 'overflow': 'hidden'});
	}

	// Close popup when clicking the esc keyboard button
	if ( $tiePopup.length && ! adBlock ){
		$doc.keyup(function(event){
			if ( event.which == '27' && $body.hasClass('tie-popup-is-opend')){
				tie_close_popup();
			}
		});
	}

	// Close Popup when click on the background
	$tiePopup.on('click', function(event){
		if( jQuery( event.target ).is('.tie-popup:not(.is-fixed-popup)') ){
			event.preventDefault();
			tie_close_popup();
		}
	});

	// Close Popup when click on the close button
	jQuery('.tie-btn-close').on( 'click', function (){
		tie_close_popup();
		return false;
	});

	// Popup close function
	function tie_close_popup(){
		jQuery.when($tiePopup.fadeOut(500)).done(function(){
			$html.removeAttr('style');
		});
		jQuery('.autocomplete-suggestions').fadeOut();
		$body.removeClass('tie-popup-is-opend');
		jQuery('#tie-popup-search-input').val('');
	}

	// get the scrollbar width
	function getScrollBarWidth (){
		var outer = jQuery('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
				widthHasScroll = jQuery('<div>').css({width: '100%'}).appendTo(outer).outerWidth();

		outer.remove();
		return 100 - widthHasScroll;
	}


	/**
	 * Slideout Sidebar
	 */
	function hasParentClass( e, classname ){
		if( e === document ){
			return false;
		}

		if( jQuery(e).hasClass( classname ) ){
			return true;
		}

		return e.parentNode && hasParentClass( e.parentNode, classname );
	}

	var resetMenu = function(){
		$container.removeClass('side-aside-open');
	},
	bodyClickFn = function(evt){
		if( !hasParentClass( evt.target, 'side-aside' ) ){
			resetMenu();
			document.removeEventListener( 'touchstart', bodyClickFn );
			document.removeEventListener( 'click', bodyClickFn );
		}
	},
	el = jQuery('.side-aside-nav-icon, #mobile-menu-icon');

	el.on( 'touchstart click', function( ev ){
		ev.stopPropagation();
		ev.preventDefault();
		$container.addClass('side-aside-open');
		jQuery('.autocomplete-suggestions').hide();

		if( is_Lazy ){
			jQuery('.side-aside .lazy-img').lazy({
				bind: 'event'
			});
		}
	});

	$container.on( 'touchstart click', bodyClickFn );

	// close side nav whene colose in esc button on keyboard
	$doc.on('keydown', function(e){
		if( e.which == 27 ){
			resetMenu();
			document.removeEventListener( 'touchstart', bodyClickFn );
			document.removeEventListener( 'click', bodyClickFn );
		}
	});

	// close when click on close button inside the sidebar
	jQuery('.close-side-aside').on('click',function(e){
		resetMenu();
		e.preventDefault();
	});

	// close the aside on resize when reaches the breakpoint
	$window.resize(function() {
		intialWidth = $window.width();

		if( intialWidth == 991 ){
			resetMenu();
		}
	});


	/**
	 * Scroll To #
	 */
	jQuery( 'a[href^="#go-to-"]' ).on('click', function(){

		var hrefId = jQuery(this).attr('href'),
				target = '#'+hrefId.slice(7);

		jQuery(target).velocity('stop').velocity('scroll', {
			duration : 800,
			offset   : fixedDesktop ? -100 : -40,
			easing   : 'ease-in-out'
		});

		return false;
	});




	/**
	 * Go to top button
	 */
	var $topButton = jQuery('#go-to-top');
	$window.scroll(function(){
		if ( $window.scrollTop() > 100 ){
			$topButton.addClass('show-top-button');
		}
		else {
			$topButton.removeClass('show-top-button');
		}
	});




	/**
	 * Drop Down Menus
	 */
	var menu = function(el){
		this.target = el;
		this.target.find('.sub-menu,.menu-sub-content, .comp-sub-menu').css({
			'dispay'  : 'none',
			'opacity' : 0
		});
		this.target.on({
			mouseenter: this.reveal,
			mouseleave: this.conceal
		},'li');
	};

	// Show
	menu.prototype.reveal = function(){
		var target = jQuery(this).children('.sub-menu,.menu-sub-content, .comp-sub-menu');
		if (target.hasClass('is_open')){
			target.velocity('stop').velocity('reverse');
		}
		else {
			target.velocity('stop').velocity(
				'transition.slideDownIn',{
					duration: 250,
					delay: 0,
					complete : function(){
						target.addClass('is_open');
					}
			});
		}
	};

	// Hide
	menu.prototype.conceal = function(){
		var target = jQuery(this).children('.sub-menu,.menu-sub-content, .comp-sub-menu');
		target.velocity('stop').velocity(
			'transition.fadeOut',{
				duration: 100,
				delay: 0,
				complete: function(){
					target.removeClass('is_open');
				}
			}
		);
	};

	var $menu    = jQuery('ul.components, #theme-header .menu');
	var dropMenu = new menu($menu);




	/**
	 * Custom Scrollbar
	 */
	if(jQuery.fn.mCustomScrollbar && $body.hasClass('is-desktop')){

		jQuery('.has-custom-scroll').each(function(){
			var thisElement   = jQuery(this),
					scroll_height = thisElement.data('height')  ? thisElement.data('height')  : 'auto',
					data_padding  = thisElement.data('padding') ? thisElement.data('padding') : 0;

			thisElement.mCustomScrollbar('destroy');

			if ( thisElement.data('height') == 'window' ){
				var thisHeight   = thisElement.height(),
						windowHeight = $window.height() - data_padding - 50;

				scroll_height = ( thisHeight < windowHeight ) ? thisHeight : windowHeight;
			}

			thisElement.mCustomScrollbar({
				scrollButtons     : { enable: false },
				autoHideScrollbar : thisElement.hasClass('show-scroll') ? false : true,
				scrollInertia     : 100,
				mouseWheel        : {
					enable          : true,
					scrollAmount    : 60
				},
				set_height        : scroll_height,
				advanced          : { updateOnContentResize: true },
				callbacks:{
					whileScrolling:function(){
						tie_animate_element( thisElement, 'custom-scroll-area' );
					}
				}
			});
		});

		var $instagramSection = jQuery('#footer-instagram .tie-insta-photos');
		if ( $instagramSection.length ){
			$instagramSection.mCustomScrollbar({
				axis: 'x',
				scrollInertia: 100,
				advanced: {autoExpandHorizontalScroll:true},
				horizontalScroll: true
			});
		}
	}


	/**
	 * Parallax
	 */
	var $parallax = jQuery('.tie-parallax');

	if ( $parallax.length && jQuery.fn.jarallax ){
		$parallax.imagesLoaded(function(){

			$parallax.jarallax({
				noAndroid: true,
				noIos: true,
			});
		});

		$window.scroll(function(){
			var scrolled = $window.scrollTop();
			$parallax.find('.entry-header, #go-to-content').css({ opacity : 1-(scrolled/1000) });
		});
	}


	/**
	 * Mega Menus
	 */
	//Featured post and check also
	$doc.on('mouseenter', '.mega-recent-featured, .mega-cat', function(){
		var menuItem    = jQuery(this),
				thePostsDiv = menuItem.find( '.mega-ajax-content' ),
				isMegaCat   = false,
				number      = 0;

		if( menuItem.hasClass('mega-cat') ){
			isMegaCat = true;
			number    = 5;

			if( menuItem.has( '.cats-vertical' ).length ){
				number  = 4;
			}
		}

		tie_mega_menu_category( menuItem, thePostsDiv, isMegaCat, number );
	});


	// Mega menu For menu with sub cats layout
	$doc.on('mouseenter', '.mega-sub-cat', function(){
		var menuItem = jQuery(this),
				theCatID = menuItem.attr('data-id');

		if( menuItem.hasClass('is-active') ){

			return;
		}

		var theMenuParent = menuItem.closest( '.mega-menu' ),
				thePostsDiv   = theMenuParent.find( '.mega-ajax-content' ),
				number        = 5;

		if( theMenuParent.has( '.cats-vertical' ).length ){
			number  = 4;
		}

		theMenuParent.find( '.mega-sub-cat' ).removeClass( 'is-active' );
		menuItem.addClass( 'is-active' );

		if( thePostsDiv.find( '#loaded-' + theCatID ).length ){
			thePostsDiv.find( 'ul' ).hide();

			var currentUL = thePostsDiv.find( '#loaded-' + theCatID + ', .mega-check-also ul' ).show();

			// Animate the loaded items
			currentUL.find( 'li' ).hide().velocity('stop').velocity( 'transition.slideUpIn', {
				stagger : 100,
				duration: 500
			});

			return false;
		}
		else{
			menuItem.removeClass( 'is-loaded' );
		}

		tie_mega_menu_category( menuItem, thePostsDiv, true, number );
		return false;
	});


	/**
	 * MEGA MENUS GET AJAX POSTS
	 */
	function tie_mega_menu_category( menuItem, thePostsDiv, isMegaCat, number ){
		var theCatID     = menuItem.attr('data-id'),
				postsNumber  = 7,
				featuredPost = true;

		if( theCatID && ! menuItem.hasClass( 'is-loaded' )){

			menuItem.addClass('is-loaded');

			if( isMegaCat ){
				postsNumber = number;
				featuredPost = false;
			}
			else if( menuItem.hasClass( 'menu-item-has-children' ) ){
				postsNumber = 4;
			}

			// Cancel the current Ajax request if the user made a new one
			if( megaMenuAjax && megaMenuAjax.readystate != 4 ){
				megaMenuAjax.abort();
			}

			// Ajax Call
			megaMenuAjax = jQuery.ajax({
				url : tie.ajaxurl,
				type: 'post',
				data: {
					action  : 'tie_mega_menu_load_ajax',
					id      : theCatID,
					featured: featuredPost,
					number  : postsNumber
				},
				beforeSend: function(){
					// Add the loader
					if( ! thePostsDiv.find('.loader-overlay').length ){
						thePostsDiv.addClass('is-loading').append( tie.ajax_loader );
					}
				},
				success: function( data ){

					if( !featuredPost ){
						var content = '<ul id="loaded-'+ theCatID +'">'+ data +'</ul>';
					}
					else{
						var content = jQuery( data );
					}

					thePostsDiv.append( content );

					thePostsDiv.find( 'ul' ).hide();

					var currentUL  = thePostsDiv.find( '#loaded-' + theCatID + ', .mega-check-also ul' ).show().find('li'),
							recentPost = thePostsDiv.find('.mega-recent-post');

					// Animate the loaded items
					recentPost.add(currentUL).hide().velocity('stop').velocity( 'transition.slideUpIn', {
						stagger : 100,
						duration: 500,
						complete: function(){
							tie_animate_element( thePostsDiv );
						}
					});
				},
				error: function(){
					menuItem.removeClass('is-loaded');
				},
				complete: function(){
					thePostsDiv.removeClass('is-loading').find('.loader-overlay').remove();
				}
			});
		}
	}


	/**
	 * Infinite Scroll for archives
	 **/
	jQuery('.infinite-scroll-archives').viewportChecker({
		repeat: true,
		offset: 60,
		callbackFunction: function(){
			if( isDuringAjax === false ){
				isDuringAjax = true;
				tie_ajax_archives();
			}
		}
	});


	/**
	 * Load More Button for archives
	 **/
	$doc.on( 'click', '#load-more-archives', function(){

		if( isDuringAjax === false ){
			isDuringAjax = true;
			tie_ajax_archives();
		}
	});




	/**
	 * Archives Ajax Pagination
	 */
	function tie_ajax_archives(){

		var pagiButton = jQuery('#load-more-archives');

		if( ! pagiButton.length ){
			return false;
		}

		var theQuery    = pagiButton.attr('data-query'),
				theURL      = pagiButton.attr('data-url'),
				maxPages    = pagiButton.attr('data-max'),
				buttonText  = pagiButton.attr('data-text'),
				latest_post = pagiButton.attr('data-latest'),
				currentPage = parseInt( pagiButton.attr('data-page') ) +1,
				is_masonry  = false;

		// Check if the Button Disabled
		if( pagiButton.hasClass( 'pagination-disabled' ) || currentPage > maxPages ){
			return false;
		}

		// Change the page address
		/*
		if ( typeof window.history.pushState == 'function'){

			theURL = theURL.replace( '99999', currentPage );

			var state = {
				page: currentPage,
				permalink: theURL
			};

			window.history.pushState( state, 'window.location.title', theURL );
		}
		*/

		// Page Layout
		if( jQuery('#masonry-grid').length ){
			var theBlock = jQuery('#masonry-grid');
			is_masonry = true;
		}
		else{
			var theBlock = jQuery('#posts-container');
		}

		var theLayout   = theBlock.attr('data-layout'),
				theSettings = theBlock.attr('data-settings');

		// Ajax Call
		jQuery.ajax({
			url : tie.ajaxurl,
			type: 'post',
			data: {
				action      : 'tie_archives_load_more',
				query       : theQuery,
				max         : maxPages,
				page        : currentPage,
				latest_post : latest_post,
				layout      : theLayout,
				settings    : theSettings
			},
			beforeSend: function(){
				pagiButton.html( tie.ajax_loader );
			},
			success: function( data ){

				data = jQuery.parseJSON(data);

				// Change the latest post number
				pagiButton.attr( 'data-latest', data['latest_post'] );


				// Hide next posts button
				if( data['hide_next'] ){
					pagiButton.addClass( 'pagination-disabled' );
					pagiButton.html( data['button'] );
				}
				else{
					pagiButton.html( buttonText );
				}

				data = data['code'];
				data = data.replace( /<li class="/g, '<li class="posts-items-'+ currentPage +' ' );

				var content = jQuery( data );

				if( is_masonry ){
					theBlock.append( content ).masonry( 'appended', content );
					tie_animate_element( theBlockList_li );
					isDuringAjax = false;

					// Load images and re fire masonry
					theBlock.imagesLoaded().progress( function(){
						theBlock.masonry('layout');
					});

				}
				else{

					theBlock.append( content );
					var theBlockList_li = theBlock.find( '.posts-items-'+currentPage ).hide();

					// Animate the loaded items
					theBlockList_li.velocity('stop').velocity( 'transition.slideUpIn', {
						stagger : 100,
						duration: 500,
						complete: function(){
							tie_animate_element( theBlockList_li );
							isDuringAjax = false;
						}
					});
				}

			}
		});

		// Change the next page number
		pagiButton.attr( 'data-page', currentPage );

		return false;
	}


	/**
	 * Blocks Ajax Pagination
	 */
	$doc.on( 'click', '.block-pagination', function(){

		var pagiButton   = jQuery(this),
				theBlock     = pagiButton.closest('.mag-box'),
				theBlockID   = theBlock.get(0).id,
				theSection   = theBlock.closest('.section-item'),
				theTermID    = theBlock.attr('data-term'),
				currentPage  = theBlock.attr('data-current'),
				theBlockList = theBlock.find('.posts-list-container'),
				theBlockDiv  = theBlock.find('.mag-box-container'),
				options      = jQuery.extend( {}, window[ 'js_'+theBlockID.replace( 'tie-', 'tie_' ) ] ),
				theListClass = 'posts-items',
				isLoadMore   = false,
				sectionWidth = 'single';

		if( currentPage && options ){
			if( theTermID ){
				if( options[ 'tags' ] ){
					options[ 'tags' ] = theTermID;
				}
				else{
					options[ 'id' ] = theTermID;
				}
			}

			// Custom Block List Class
			if( options[ 'ajax_class' ] ){
				theListClass = options[ 'ajax_class' ];
			}

			// Check if the Button Disabled
			if( pagiButton.hasClass( 'pagination-disabled' ) ){
				return false;
			}

			// Check if the button type is Load More
			if( pagiButton.hasClass( 'load-more-button' ) ){
				currentPage++;
				isLoadMore = true;
			}

			// Next page button
			else if( pagiButton.hasClass( 'next-posts' ) ){
				currentPage++;
				theBlock.find( '.prev-posts' ).removeClass( 'pagination-disabled' );
			}

			// Prev page button
			else if( pagiButton.hasClass( 'prev-posts' ) ){
				currentPage--;
				theBlock.find( '.next-posts' ).removeClass( 'pagination-disabled' );
			}

			// Full Width Section
			if( theSection.hasClass( 'full-width' ) ){
				sectionWidth = 'full';
			}

			// Ajax Call
			jQuery.ajax({
				url : tie.ajaxurl,
				type: 'post',
				data: {
					action : 'tie_blocks_load_more',
					block  : options,
					page   : currentPage,
					width  : sectionWidth
				},
				beforeSend: function(){

					// Load More button----------
					if( isLoadMore ){
						pagiButton.html( tie.ajax_loader );
					}
					// Other pagination Types
					else{
						var blockHeight = theBlockDiv.height();
						theBlockDiv.append( tie.ajax_loader ).attr( 'style', 'min-height:' +blockHeight+ 'px' );
						theBlockList.addClass('is-loading');
					}
				},
				success: function( data ){

					data = jQuery.parseJSON(data);

					// Hide next posts button
					if( data['hide_next'] ){
						theBlock.find( '.next-posts').addClass( 'pagination-disabled' );
						if( pagiButton.hasClass( 'show-more-button' ) || isLoadMore ){
							pagiButton.html( data['button'] );
						}
					}
					else if( isLoadMore ){
						pagiButton.html( pagiButton.attr('data-text') );
					}

					// Hide Prev posts button
					if( data[ 'hide_prev' ] ){
						theBlock.find( '.prev-posts').addClass( 'pagination-disabled' );
					}

					// Posts code
					data = data['code'];

					// Load More button append the new items
					if( isLoadMore ){
						var content = ( '<ul class="'+theListClass+' posts-list-container clearfix posts-items-loaded-ajax posts-items-'+currentPage+'">'+ data +'</ul>' );
						content = jQuery( content );
						theBlockDiv.append( content );
					}

					// Other pagination Types
					else{
						var content = ( '<ul class="'+theListClass+' posts-list-container posts-items-'+currentPage+'">'+ data +'</ul>' );
						content = jQuery( content );
						theBlockDiv.html( content );
					}

					var theBlockList_li = theBlock.find( '.posts-items-'+currentPage );

					// Animate the loaded items
					theBlockList_li.find( 'li' ).hide().velocity('stop').velocity( 'transition.slideUpIn', {
						stagger: 100,
						duration: 500,
						complete: function(){
							tie_animate_element( theBlockList_li );
							theBlockDiv.attr( 'style', '' );
						}
					});
				}
			});

			// Change the next page number
			theBlock.attr( 'data-current', currentPage );
		}
		return false;
	});


	/**
	 * AJAX FILTER FOR BLOCKS
	 */
	$doc.on( 'click', '.block-ajax-term', function(){
		var termButton   = jQuery(this),
				theBlock     = termButton.closest('.mag-box'),
				theTermID    = termButton.attr('data-id'),
				theBlockID   = theBlock.get(0).id,
				theBlockList = theBlock.find('.posts-list-container'),
				theBlockDiv  = theBlock.find('.mag-box-container'),
				options      = jQuery.extend( {}, window[ 'js_'+theBlockID.replace( 'tie-', 'tie_' ) ] ),
				theListClass = 'posts-items';

		if( options ){

			// Set the data attr new values
			theBlock.attr( 'data-current', 1 );

			if( theTermID ){
				if( options[ 'tags' ] ){
					options[ 'tags' ] = theTermID;
				}
				else{
					options[ 'id' ] = theTermID;
				}

				theBlock.attr( 'data-term', theTermID );
			}
			else{
				theBlock.removeAttr( 'data-term' );
			}

			// Custom Block List Class
			if( options[ 'ajax_class' ] ){
				theListClass = options[ 'ajax_class' ];
			}

			// Ajax Call
			jQuery.ajax({
				url : tie.ajaxurl,
				type: 'post',
				data: {
					action: 'tie_blocks_load_more',
					block : options,
				},
				beforeSend: function(){
					var blockHeight = theBlockDiv.height();
					theBlockDiv.append( tie.ajax_loader ).attr( 'style', 'min-height:' +blockHeight+ 'px' );
					theBlockList.addClass('is-loading')
				},
				success: function( data ){

					data = jQuery.parseJSON(data);

					// Reset the pagination
					theBlock.find( '.block-pagination').removeClass( 'pagination-disabled' );
					var LoadMoreButton = theBlock.find( '.show-more-button' );
					LoadMoreButton.html( LoadMoreButton.attr('data-text') );

					// Active the selected term
					theBlock.find( '.block-ajax-term').removeClass( 'active' );
					termButton.addClass( 'active' );

					// Hide next posts button
					if( data['hide_next'] ){
						theBlock.find( '.next-posts').addClass( 'pagination-disabled' );
						theBlock.find( '.show-more-button' ).html( data['button'] )
					}

					// Hide Prev posts button
					if( data['hide_prev'] ){
						theBlock.find( '.prev-posts').addClass( 'pagination-disabled' );
					}

					// Posts code
					data = data['code'];

					var content = ( '<ul class="'+theListClass+' ajax-content posts-list-container">'+data+"</ul>" );
					content = jQuery( content );
					theBlockDiv.html( content );

					// Animate the loaded items
					theBlockDiv.find( 'li' ).hide().velocity('stop').velocity( 'transition.slideUpIn', {
						stagger: 100,
						duration: 500,
						complete: function(){
							tie_animate_element( theBlockDiv );
						}
					});

					theBlockDiv.attr( 'style', '' );
				}
			});

		}

		return false;
	});


	/**
	 * Reading Position Indicator
	 */
	if( tie.is_singular && tie.reading_indicator ){
		if( $postContent.length ){

			$postContent.imagesLoaded(function(){
				var content_height  = $postContent.height(),
						window_height   = $window.height();

				$window.scroll(function(){
					var percent        = 0,
							content_offset = $postContent.offset().top,
							window_offest  = $window.scrollTop();

					if (window_offest > content_offset){
						percent = 100 * (window_offest - content_offset) / (content_height - window_height);
					}

					jQuery('#reading-position-indicator').css('width', percent + '%');
				});
			});
		}
	}


	/**
	 * Check Also Box
	 */
	var $check_also_box = jQuery('#check-also-box');
	if( tie.is_singular && $check_also_box.length ){

		var articleHeight   = $the_post.outerHeight(),
				checkAlsoClosed = false ;

		$window.scroll(function(){
			if( ! checkAlsoClosed ){
				var articleScroll = $window.scrollTop();
				if ( articleScroll > articleHeight ){
					$check_also_box.addClass('show-check-also');
				}
				else {
					$check_also_box.removeClass('show-check-also');
				}
			}
		});
	}

	jQuery('#check-also-close').on( 'click', function(){
		$check_also_box.removeClass('show-check-also');
		checkAlsoClosed = true ;
		return false;
	});




	/**
	 * BuddyPress
	 */
	if( tie.is_buddypress_active ){

		jQuery('div.activity').on( 'click', function(event){
			var $target = jQuery(event.target);
			if ( $target.parent().hasClass('load-more') ){
				$target.html( tie.ajax_loader );
			}
		});

		var $activity_list = jQuery('.main-content .activity-list li, .main-content #groups-list li, .main-content #members-list li');
		$activity_list.viewportChecker({
			callbackFunction: function(elem, action){
				elem.velocity('stop').velocity('transition.slideUpIn',{stagger: 200, duration: 500});
			}
		});

		jQuery('div.activity-type-tabs').on( 'click', function(event){
			jQuery('.activity').addClass('ajax-loaded');
			return false;
		});

		jQuery('div.item-list-tabs, .pagination-links').on( 'click', function(event){
			jQuery('#groups-dir-list, #members-dir-list').addClass('ajax-loaded');
		});

		if( jQuery.fn.masonry ){
			var $buddypressLists = jQuery('.main-content #groups-list, .main-content #members-list');
			$buddypressLists.imagesLoaded(function(){
				$buddypressLists.masonry({
					itemSelector    : 'li',
					percentPosition : true,
					originLeft      : ! is_RTL,
					isOriginLeft    : ! is_RTL,
				});
			});
		}
	}


	/**
	 * AJAX SEARCH
	 */
	jQuery('.is-ajax-search').devbridgeAutocomplete({
		serviceUrl : tie.ajaxurl,
		params     : {'action':'tie_ajax_search'},
		minChars   : 3,
		width      : 370,
		maxHeight  : 'auto',
		noSuggestionNotice: tie.lang_no_results,
		showNoSuggestionNotice: true,
		onSearchStart: function(query){
			jQuery(this).parent().find('.fa').removeClass('fa-search').addClass('fa-spinner fa-spin');
		},
		onSearchComplete: function(query){
			jQuery( this ).parent().find('.fa').removeClass('fa-spinner fa-spin').addClass('fa-search');

			if( is_Lazy ){
				jQuery('.autocomplete-suggestions').find('.lazy-img').each(function() {
					jQuery(this).attr('src', jQuery(this).attr('data-src')).removeAttr('data-src');
				});
			}
		},
		formatResult: function(suggestion, currentValue){
			return suggestion.layout;
		},
		onSelect: function(suggestion){
			window.location = suggestion.url;
		}
	});




	/**
	 * Select and Share
	 */
	if( tie.is_singular && tie.select_share ){

		$postContent.mousedown(function (event){
			$body.attr('mouse-top',event.clientY+window.pageYOffset);
			$body.attr('mouse-left',event.clientX);
			if(!getRightClick(event) && getSelectionText().length){
				jQuery('.fly-text-share').remove();
				document.getSelection().removeAllRanges();
			}
		});

		$postContent.mouseup(function (event){
			var t  = jQuery(event.target),
					st = getSelectionText(),
					ds = st;

			if(st.length > 3 && !getRightClick(event)){
				var mts = $body.attr('mouse-top'),
						mte = event.clientY+window.pageYOffset;

				if( parseInt(mts) < parseInt(mte) ) mte = mts;

				var mlp = $body.attr('mouse-left'),
						mrp = event.clientX,
						ml  = parseInt(mlp)+(parseInt(mrp)-parseInt(mlp))/2,
						sl  = window.location.href.split('?')[0],
						maxl = 114;

				st   = st.substring(0,maxl);

				if( tie.twitter_username ){
					maxl = maxl - ( tie.twitter_username.length+2 );
					st   = st.substring(0,maxl);
					st   = st+' @'+tie.twitter_username;
				}

				var share_content = '';

				if( tie.select_share_twitter ){
					share_content += "<a href=\"https://twitter.com/share?url="+encodeURIComponent(sl)+"&text="+encodeURIComponent(st)+"\" class='fa fa-twitter' onclick=\"window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600\');return false;\"></a>";
				}

				if( tie.select_share_facebook && tie.facebook_app_id ){
					share_content += "<a href=\"https://www.facebook.com/dialog/feed?app_id="+tie.facebook_app_id+"&amp;link="+encodeURIComponent(sl)+"&amp;quote="+encodeURIComponent(ds)+"\" class='fa fa-facebook' onclick=\"window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600\');return false;\"></a>";
				}

				if( tie.select_share_linkedin ){
					share_content += "<a href=\"https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(sl)+"&summary="+encodeURIComponent(ds)+"\" class='fa fa-linkedin' onclick=\"window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600\');return false;\"></a>";
				}

				if( tie.select_share_email ){
					share_content += "<a href=\"mailto:?body="+encodeURIComponent(ds)+" "+encodeURIComponent(sl)+"\" class='fa fa-envelope' onclick=\"window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600\');return false;\"></a>";
				}

				if( share_content != '' ){
					$body.append( "<div class=\"fly-text-share\">"+ share_content +"</div>" );
				}

				jQuery('.fly-text-share').css({
					position: 'absolute',
					top     : parseInt(mte)-60,
					left    : parseInt(ml)
				}).velocity('stop').velocity('transition.expandIn',{duration: 200});
			}
		});
	}

	function getRightClick(e){
		var rightclick;
		if (!e) var e = window.event;
		if (e.which) rightclick = (e.which == 3);
		else if (e.button) rightclick = (e.button == 2);
		return rightclick;
	}

	function getSelectionText(){
		var text = '';
		if (window.getSelection){
			text = window.getSelection().toString();
		}
		else if (document.selection && document.selection.type != "Control"){
			text = document.selection.createRange().text;
		}
		return text;
	}



	/**
	 * ANIMATE ELEMENTS
	 * This function used to animate theme elements
	 * Used multiple times in this files to fire the animation for intial and Ajax content
	 */
	function tie_animate_element( element, area ){

		if( typeof element != 'undefined' ){
			var $circ_svg       = element.find( '.pie-svg' ),
					$star_rating    = element.find( '.post-rating' ),
					$percent_rating = element.find( '.digital-rating-static' ),
					$animationElem  = is_Lazy ? element.find( '.news-gallery .post-thumb, .big-thumb-left-box-inner, .lazy-img' ) : '';
		}
		else{
			var $circ_svg       = jQuery( '.pie-svg' ),
					$star_rating    = jQuery( '.post-rating' ),
					$percent_rating = jQuery( '.digital-rating-static' ),
					$animationElem  = is_Lazy ? jQuery( '.news-gallery .post-thumb, .big-thumb-left-box-inner, .lazy-img:visible' ) : '';
		}

		// Lazy Load
		if( is_Lazy ){

			$animationElem.lazy({
				effect:    'fadeIn',
				effectTime: 500,
				threshold: (area == 'custom-scroll-area') ? 0 : 500,
				afterLoad: function(element) {

					if( jQuery.fn.masonry ){
						jQuery( '#masonry-grid' ).masonry( 'layout' );
					}
				},
			});

			// fadein post content images in lazyload mode.
			if( tie.is_singular ){
				$the_post.find(".entry img[class*='wp-image-']").viewportChecker();
			}

		}

		// Circular Rating Using SVG
		$circ_svg.viewportChecker({
			callbackFunction: function(elem, action){
				var val     = parseInt(elem.parent().data('pct')),
						$circle = elem.find('.circle_bar'),
						r       = $circle.attr('r'),
						c       = Math.PI*(r*2),
						pct     = ((100-val)/100)*c;

				$circle.css({ strokeDashoffset: pct});
			}
		});

		// animate star rating in viewport
		$star_rating.viewportChecker({
			callbackFunction: function(elem, action){
				var rate_val = elem.data('rate-val');
				elem.find('.stars-rating-active').velocity('stop').velocity({width: rate_val},{duration: 600});
			}
		});

		// animate percent rating in viewport
		$percent_rating.viewportChecker({
			callbackFunction: function(elem, action){
				var rate_val = elem.data('rate-val') + '%';
				elem.velocity('stop').velocity({width: rate_val},{stagger: 200, duration: 600});
			}
		});
	}


	/**
	 * Mobile Menus
	 */
	if( tie.mobile_menu_active ){
		var $mainNav    = jQuery('#main-nav div.main-menu > ul'),
				$mobileMenu = jQuery('#mobile-menu'),
				mobileItems = '';

		// Main Nav
		if( $mainNav.length ){
			var mobileItems = $mainNav.clone();

			mobileItems.find( 'div.mega-menu-content' ).remove();
			mobileItems.removeAttr('id').find( 'li' ).removeAttr('id');
			mobileItems.find( 'li.menu-item-has-children:not(.hide-mega-headings)' ).append( '<span class="mobile-arrows fa fa-chevron-down"></span>' );
			$mobileMenu.append( mobileItems );

			/* if the mobile menu has only one element, show it's sub content menu */
			var mobileItemsLis = mobileItems.find('> li');
			if( mobileItemsLis.length == 1 ){
				mobileItemsLis.find('> .mobile-arrows').toggleClass('is-open');
				mobileItemsLis.find('> ul').show();
			}
		}

		// Top Nav
		if( tie.mobile_menu_top ){
			var $topNav = jQuery('#top-nav div.top-menu > ul');

			if( $topNav.length ){
				var mobileItemsTop = $topNav.clone();

				mobileItemsTop.removeAttr('id').find( 'li' ).removeAttr('id');
				mobileItemsTop.find( 'li.menu-item-has-children' ).append( '<span class="mobile-arrows fa fa-chevron-down"></span>' );
				$mobileMenu.append( mobileItemsTop );
			}
		}

		// Open, CLose behavior
		if( ! tie.mobile_menu_parent ){
			jQuery('#mobile-menu li.menu-item-has-children > a, #mobile-menu li.menu-item-has-children > .mobile-arrows').click(function(){
				jQuery(this).parent().find('ul:first').slideToggle(300);
				jQuery(this).parent().find('> .mobile-arrows').toggleClass('is-open');
				return false;
			});
		}
		else{
			jQuery('#mobile-menu li.menu-item-has-children .mobile-arrows').click(function(){
				jQuery(this).toggleClass('is-open').closest('.menu-item').find('ul:first').slideToggle(300);
				return false;
			});
		}
	}



	/**
	 * Taqyeem scripts
	 */
	// MOUSEMOVE HANDLER
	$doc.on( 'mousemove', '.taq-user-rate-active', function(e){
		var $rated = jQuery(this);

		if( $rated.hasClass('rated-done') ){
			return false;
		}

		if( !e.offsetX ){
			e.offsetX = e.clientX - jQuery(e.target).offset().left;
		}

		// Custom Code for the theme
		var offset = e.offsetX,
				width = $rated.width(),
		score = Math.round((offset/width)*100);

		$rated.find('.user-rate-image span').attr( 'data-user-rate', score ).css('width', score + '%');
	});

	// CLICK HANDLER
	$doc.on( 'click', '.taq-user-rate-active', function(){

		var $rated = jQuery(this),
				$ratedParent = $rated.parent(),
				$ratedCount  = $ratedParent.find('.taq-count'),
				post_id      = $rated.attr( 'data-id' ),
				numVotes     = $ratedCount.text();

		if( $rated.hasClass('rated-done')){
			return false;
		}

		// Custom Code for the theme
		var userRatedValue = $rated.find('.user-rate-image span').data('user-rate');
		$rated.find( '.user-rate-image' ).hide();
		$rated.append('<span class="taq-load">'+ tie.ajax_loader  +'</span>');
		// --------

		if (userRatedValue >= 95) {
			userRatedValue = 100;
		}

		var userRatedValueCalc = (userRatedValue*5)/100;

		// Ajax Call
		jQuery.post(
			taqyeem.ajaxurl,
			{
				action: 'taqyeem_rate_post',
				post  : post_id,
				value : userRatedValueCalc
			},
			function( data ) {
				$rated.addClass('rated-done').attr('data-rate',userRatedValue);
				$rated.find('.user-rate-image span').width(userRatedValue+'%');

				jQuery('.taq-load').fadeOut(function () {
					$ratedParent.find('.taq-score').html( userRatedValueCalc );

					if( $ratedCount.length ){
						numVotes =  parseInt(numVotes)+1;
						$ratedCount.html(numVotes);
					}
					else{
						$ratedParent.find('small').hide();
					}

					$ratedParent.find('strong').html(taqyeem.your_rating);
					$rated.find('.user-rate-image').fadeIn();
			});
		}, 'html');

		return false;
	});

	// MOUSELEAVE HANDLER
	$doc.on( 'mouseleave', '.taq-user-rate-active', function(){
		var $rated = jQuery(this);
		if( $rated.hasClass('rated-done') ){
			return false;
		}
		var post_rate = $rated.attr('data-rate');
		$rated.find('.user-rate-image span').css('width', post_rate + '%');
	});


	/**
	 * Videos PlayList hot fix
	 */
	jQuery( '.video-playlist-wrapper .video-frame' ).css('visibility', 'visible');

	// End Of Text :)
});
