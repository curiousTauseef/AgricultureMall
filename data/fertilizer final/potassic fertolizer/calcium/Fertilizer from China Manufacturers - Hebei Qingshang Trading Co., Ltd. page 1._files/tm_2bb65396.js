window.jQuery&&function(c){var d={config:{cover_baseFloatZIndex:100,cover_overlay:!0},setConfig:function(a){d.config=c.extend(!0,d.config,a||{})}};d.tools=function(){return{env:function(){var a=navigator.userAgent.toLowerCase();return{ie:!1,ie6:!1,ie10:!1,mac:-1<a.indexOf("macintosh"),webkit:-1<a.indexOf(" applewebkit/"),isCustomDomain:function(){if(!this.ie)return!1;var a=document.domain,c=window.location.hostname;return a!=c&&a!="["+c+"]"}}}(),genKey:function(){return Array.prototype.slice.call(arguments).join("-")},
setOpacity:function(a,d){this.env.ie&&!this.env.ie10?(d=Math.round(100*d),c(a).css("filter",100<=d?"":"progid:DXImageTransform.Microsoft.Alpha(opacity\x3d"+d+")")):c(a).css("opacity",d)},getViewPaneSize:function(){var a="CSS1Compat"==document.compatMode;return{width:(a?document.documentElement.clientWidth:document.body.clientWidth)||0,height:(a?document.documentElement.clientHeight:document.body.clientHeight)||0}},getScrollPosition:function(){var a=window;if("pageXOffset"in a)return{x:a.pageXOffset||
0,y:a.pageYOffset||0};a=a.document;return{x:a.documentElement.scrollLeft||a.body.scrollLeft||0,y:a.documentElement.scrollTop||a.body.scrollTop||0}},getSize:function(a){return{width:a.offsetWidth||0,height:a.offsetHeight||0}}}}();d.cover=function(){function a(h){var a=n.options,k=c(window);if(h)"function"==typeof h[h.data("options").showAnim]?h[h.data("options").showAnim]():h.show();else{var g=['\x3cdiv tabIndex\x3d"-1" style\x3d"position: ',d.tools.env.ie6?"absolute":"fixed","; z-index: ",m+1,"; top: 0px; left: 0px; ",
d.tools.env.ie6?"":"background-color: "+a.bgColor,'" style\x3d"display:none" class\x3d"',a.coverClass,'"\x3e'];d.tools.env.ie6&&d.bgIframe&&g.push(d.bgIframe.html(a.bgColor));g.push("\x3c/div\x3e");h=c(g.join(""));d.tools.setOpacity(h,void 0!=a.bgOpacity?a.bgOpacity:0.5);h.bind("keydown",function(){return!1});h.bind("keypress",function(){return!1});h.bind("keyup",function(){return!1});c("body").append(h);h.data("options",a);"function"==typeof h[a.showAnim]?h[a.showAnim]():h.show();e[n.coverKey]=h;
e[n.coverKey].used=!1}l=h;var q=h.data("options").rangeId,a=function(){var b=d.tools.getViewPaneSize();if(q&&0<c("#"+q).length&&c("#"+q).attr("id")==q){var b=d.tools.getSize(c("#"+q).get(0)),a=c("#"+q).offset().left,e=c("#"+q).offset().top;h.css("position","absolute");h.css({left:a+"px",top:e+"px"})}h.css({width:b.width+"px",height:b.height+"px"})},v=function(){var b=d.tools.getScrollPosition();q&&0<c("#"+q).length&&c("#"+q).attr("id")==q&&(b={x:c("#"+q).offset().left,y:c("#"+q).offset().top});h.css({left:b.x+
"px",top:b.y+"px"})};b=a;k.bind("resize",a);a();d.tools.env.mac&&d.tools.env.webkit||h.focus();if(d.tools.env.ie6){var w=function(){v();arguments.callee.prevScrollHandler.apply(this,arguments)};k.get(0).setTimeout(function(){w.prevScrollHandler=window.onscroll||function(){};window.onscroll=w},0);v()}}function g(a){var e=a?a:e;e&&(a=c(window),e.hide(),a.unbind("resize",b),d.tools.env.ie6&&a.get(0).setTimeout(function(){window.onscroll=window.onscroll&&window.onscroll.prevScrollHandler||null},0),b=
null)}var e={},k=[],l,b,m=null,n={};return{show:function(b){d.tools.env.ie6&&d.setConfig({cover_overlay:!1});n.options=c.extend(!0,{rangeId:"",bgColor:"white",bgOpacity:0.4,baseFloatZIndex:d.config.cover_baseFloatZIndex,showAnim:"fadeIn",dialog:null,overlay:d.config.cover_overlay,coverClass:""},b||{});n.coverKey=d.tools.genKey(n.options.bgColor,n.options.bgOpacity,n.options.baseFloatZIndex,n.options.rangeId);b=e[n.coverKey];if(null===m||0==k.length)m=d.config.cover_baseFloatZIndex;if(!n.options.overlay){var l=
0<k.length?k[k.length-1]:null;l&&l.base&&l.key!=n.coverKey&&g(e[l.key])}a(b);e[n.coverKey].used?(b.css("z-index",m+1),k.push({key:n.coverKey})):(e[n.coverKey].used=!0,k.push({key:n.coverKey,base:!0}));c(n.options.dialog).css("z-index",m+=10)},hide:function(){if(0!=k.length){var b=k[k.length-1],c=1<k.length?k[k.length-2]:null;c&&b.key==c.key||g(l);m-=10;c&&(a(e[c.key]),e[c.key].css("z-index",m-9));b.base&&(e[b.key].used=!1);k.pop()}},remove:function(){for(var b in e)e[b].remove();e={};k=[];m=null},
getCover:function(){return l}}}();d.drag=function(){return function(a){function g(a){var e=d.tools.getSize(c(m).get(0)),k=d.tools.getViewPaneSize(),g=a.screenX,s=a.screenY,p=g-n.x,z=s-n.y;n={x:g,y:s};h.x+=p;h.y+=z;g=h.x+u[3]<t?-u[3]:h.x-u[1]>k.width-e.width-t?k.width-e.width+(b.rtl?u[1]:0):h.x;e=h.y+u[0]<t?-u[0]:h.y-u[2]>k.height-e.height-t?k.height-e.height+u[2]:h.y;k="fixed"==c(m).css("position");s=c(m).css("marginTop");p=c(m).css("marginLeft");l._.position={x:g,y:e};0!=parseFloat(s)&&"auto"!=s&&
(e-=parseFloat(s));0!=parseFloat(p)&&"auto"!=p&&(g-=parseFloat(p));k||(k=d.tools.getScrollPosition(),g+=k.x,e+=k.y);b.rtl&&(k=d.tools.getSize(c(m).get(0)),g=d.tools.getViewPaneSize().width-k.width-g);e={top:(0<e?e:0)+"px"};e[b.rtl?"right":"left"]=(0<g?g:0)+"px";c(m).css(e);l._.moved=1;a.preventDefault()}function e(b){c(document).unbind("mousemove",g);c(document).unbind("mouseup",e);d.tools.env.ie6&&d.cover&&0!=d.cover.getCover().find(".bgiframe:visible").length&&(b=d.cover.getCover().find(".bgiframe:visible").get(0).contentWindow.document,
c(b).unbind("mousemove",g),c(b).unbind("mouseup",e))}function k(){var b=d.tools.getScrollPosition();l._.position={x:c(m).offset().left-b.x,y:c(m).offset().top-b.y}}var l=this,b=l._=c.extend(!0,{dialog:null,title:null,margins:null,magnetDistance:null,rtl:!1},a||{});if(b.dialog&&b.title){var m=b.dialog;a=b.title;var n=null,h=null,t=b.magnetDistance,u=b.margins||[0,0,0,0];null===t&&(t=20);c(a).bind("mousedown",function(b){k();n={x:b.screenX,y:b.screenY};c(document).bind("mousemove",g);c(document).bind("mouseup",
e);h=l._.position||{};if(d.tools.env.ie6&&d.cover&&0!=d.cover.getCover().find(".bgiframe:visible").length){var a=d.cover.getCover().find(".bgiframe:visible").get(0).contentWindow.document;c(a).bind("mousemove",g);c(a).bind("mouseup",e)}b.preventDefault()});c(a).bind("mouseover",function(){c(this).css("cursor","move")});c(a).bind("mouseout",function(){c(this).css("cursor","default")});k()}}}();d.bgIframe=function(){var a=function(a){if(!d.tools.env.ie6)return"";var c=[];a="\x3chtml\x3e\x3cbody style\x3d\\'background-color:"+
a+";\\'\x3e\x3c/body\x3e\x3c/html\x3e";c.push('\x3ciframe class\x3d"bgiframe" hidefocus\x3d"true" frameborder\x3d"0" tabindex\x3d"-1" style\x3d"z-index:-1" src\x3d"javascript:');c.push("void((function(){document.open();document.write( '"+a+"' );document.close();})())");c.push('" style\x3d"position:absolute;left:0;top:0;width:100%;height: 100%;progid:DXImageTransform.Microsoft.Alpha(opacity\x3d100)"\x3e\x3c/iframe\x3e');return c.join("")},g=function(e){e=c.extend(!0,{dialog:null,bgColor:"white"},e||
{});d.tools.env.ie6&&null!=e.dialog&&0!==c(e.dialog).length&&0===c(e.dialog).children("iframe.bgiframe").length&&c(e.dialog).prepend(a(e.bgColor))};g.html=a;return g}();d.center=function(){return function(a){var g=a.dialog;if(0!=c(g).length){delete a.dialog;a=c.extend(!0,{dialog:null,position:"absolute",top:"50%",left:"50%",marginTop:0,relative:!0},a||{});var e=c(g);"50%"==a.top&&(a.marginTop=-e.outerHeight()/2);"50%"==a.left&&(a.marginLeft=-e.outerWidth()/2);a.relative&&!e.parent().is("body")&&"static"==
e.parent().css("position")&&e.parent().css("position","relative");delete a.relative;"fixed"==a.position&&d.tools.env.ie6&&(a.marginTop+=c(window).scrollTop(),a.position="absolute",c(window).scroll(function(){e.stop().animate({marginTop:c(window).scrollTop()-e.outerHeight()/2})}));e.css(a)}}}();c.fn.focusUI=function(){return function(a){var d=this.find("h2:first");0!=c(this).length&&(a=c.extend(!0,{cover:!1,drag:!1,center:!1,bgIframe:!0,title:null},a||{}),a.title&&0<c(a.title).length&&(d=c(a.title)),
a.cover&&FocusUI.cover.show({dialog:this}),a.bgIframe&&(a.cover||FocusUI.bgIframe({dialog:this})),a.center&&FocusUI.center({dialog:this,position:"fixed"}),a.drag&&FocusUI.drag({dialog:this,title:d}))}}();window.FocusUI=d}(jQuery);
jQuery(function(){var c=function(){},d=function(b,a){-1!==b.indexOf("?")?(b=b.split("?"),b[1]=b[1]?b[1]+"\x26"+a.join("\x26"):a.join("\x26"),b=b.join("?")):-1!==b.indexOf("#")?(b=b.splig("#"),b[1]="?"+a.join("\x26"),b=b.join("#")):b+="?"+a.join("\x26");return b},a="LOGON_CALLBACK_"+(new Date).valueOf(),g={tmpl:'\x3cdiv id\x3d"dialog4login" style\x3d"display:none;"\x3e\x3cdiv id\x3d"header4login"\x3e\x3cdiv id\x3d"title4login"\x3e\x3c/div\x3e\x3ca href\x3d"javascript:void(\'close\')" id\x3d"close4login"\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d"content4login"\x3e\x3c/div\x3e\x3c/div\x3e',
elems:{wrap:"#dialog4login",header:"#header4login",title:"#title4login",close:"#close4login",content:"#content4login"},style:{ifrWidth:550,ifrHeight:290,width:565,height:"auto"},text:{title:"SIGN IN",close:""},url:"",callback:c},e=null,k=[],l=function(b){"function"===typeof b.callback&&k.push(b.callback);if(e)return e;e=this;this._={};this.elems={};this.config=jQuery.extend(!0,{},g,b);this.init()};l.prototype={init:function(){var b=this.elems,a=this.config;b.$wrap=jQuery(a.tmpl);b.$header=b.$wrap.find(a.elems.header);
b.$title=b.$wrap.find(a.elems.title);b.$close=b.$wrap.find(a.elems.close);b.$content=b.$wrap.find(a.elems.content);b.$title.html(a.text.title);b.$close.html(a.text.close);b.$wrap.appendTo(document.body).css({width:this.config.style.width,height:this.config.style.height});this.hide();var c=this;b.$close.click(function(b){b.stopPropagation();b.preventDefault();c.hide();c.unload()})},load:function(b,c){this.unload();window[a]=function(){for(;k.length;)k.shift().apply(this,[].slice.call(arguments))};
var e=[];document.domain!==window.location.hostname&&e.push("domain\x3d"+document.domain);e.push("callback\x3d"+a);c=d(c,e);b=d(b,["forwardPage\x3d"+encodeURIComponent(c)]);this.elems.$loginFrame=jQuery('\x3ciframe src\x3d"'+b+'" frameborder\x3d"0" style\x3d"width:'+this.config.style.ifrWidth+"px; height:"+this.config.style.ifrHeight+'px"\x3e\x3c/iframe\x3e').appendTo(this.elems.$content)},unload:function(){this.elems.$loginFrame&&this.elems.$loginFrame.remove();window[a]=c},show:function(){FocusUI.cover.hide();
this.elems.$wrap.focusUI({cover:!0,drag:!1,center:!0,bgIframe:!0,bgColor:"#000",bgOpacity:0.5});this.elems.$wrap.show().css("zIndex",1E3)},hide:function(){this.elems.$wrap.hide();FocusUI.cover.hide()},callback:function(b){"function"===typeof b&&k.push(b)},title:function(b){this.elems.$title.html(b||this.config.text.title)},style:function(b){$.extend(!0,this.config.style,b);this.elems.$wrap.css({width:this.config.style.width,height:this.config.style.height})}};window.LoginLayer=l});
void function(c){var d={athena:function(){c.ajax({url:"/head/headInfo.do",type:"post",dataType:"json",success:function(a){var d=a[0].status,e=a[0].welcomeUserName,k=a[0].newMailNumber,l=encodeURIComponent(window.location.href);a=c(".athena-user-state").eq(0);a.length||(a=c(".state").eq(0));e='\x3cli class\x3d"user menu-item first" id\x3d"welUser"\x3eWelcome \x3ca href\x3d"http://membercenter.made-in-china.com"\x3e\x3cstrong\x3e'+(e||"")+"\x3c/strong\x3e\x3c/a\x3e!\x3c/li\x3e";k='\x3cli class\x3d"message menu-item"\x3e\x3ca href\x3d"http://membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox" alt\x3d"'+
k+' New Message(s)" title\x3d"'+k+' New Message(s)" class\x3d"red"\x3e\x3ci class\x3d"icon"\x3e\x26#xf0e0;\x3c/i\x3e'+k+"\x3c/a\x3e\x3c/li\x3e";l='\x3cli class\x3d"sign menu-item last"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3ddoLogout\x26baseNextPage\x3d'+l+'"\x3eSign Out\x3c/a\x3e\x3c/li\x3e';d?(a.empty(),a.html(e+k+l)):(a.empty(),a.html('\x3cli class\x3d"user menu-item"\x3eNew user? \x3ca rel\x3d"nofollow" href\x3d"http://membercenter.made-in-china.com/join/"\x3eJoin Free\x3c/a\x3e\x3c/li\x3e\x3cli class\x3d"sign menu-item"\x3e\x3ca rel\x3d"nofollow" href\x3d"javascript:login();"\x3eSign In\x3c/a\x3e\x3c/li\x3e'))}})},
now:function(){function a(a){if(a&&a.length){var k=encodeURIComponent(window.location.href),d=c("#top .user-nav").eq(0),b=c("#top .site-nav .inquiry a strong")[0],m=a[3]||0,n='\x3cli class\x3d"first menu-item"\x3eWelcome \x3ca href\x3d"http://membercenter.made-in-china.com"\x3e\x3cstrong\x3e'+(a[1]||"")+"\x3c/strong\x3e\x3c/a\x3e!",m='\x3cli class\x3d"message menu-item"\x3e\x3ca href\x3d"http://membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox" alt\x3d"'+m+' New Message(s)" title\x3d"'+
m+' New Message(s)" class\x3d"red"\x3e\x3ci class\x3d"icon"\x3e\x26#xf0e0;\x3c/i\x3e'+m+"\x3c/a\x3e\x3c/li\x3e",h='\x3cli class\x3d"menu-item last"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3ddoLogout\x26baseNextPage\x3d'+k+'"\x3eSign Out\x3c/a\x3e\x3c/li\x3e';b.innerHTML=a[2]||0;a[0]?(d.empty(),d.html(n+m+h)):(a='\x3cli class\x3d"first menu-item"\x3eNew user? \x3ca rel\x3d"nofollow" href\x3d"http://membercenter.made-in-china.com/join/"\x3eJoin Free\x3c/a\x3e\x3c/li\x3e\x3cli class\x3d"signin menu-item"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3dlogon\x26amp;baseNextPage\x3d'+
k+'"\x3eSign In\x3c/a\x3e\x3c/li\x3e',d.empty(),d.html(a))}}var d="";"/report-cart/"===c("#top .site-nav .inquiry a").eq(0).attr("href")&&(d="\x26sc\x3d1");window.MIC_SRVRNM=document.location.protocol+"//"+document.location.host;d=(window.MIC_SRVRNM||"")+"/ajaxfunction.do?xcase\x3dajaxlogonconnection"+d+"\x26t\x3d"+(new Date).getTime();c.get(d,function(c){c=c.replace(/^.*(\[.*\]).*$/g,"$1");a(eval(c))})},old:function(){window.MIC_SRVRNM=document.location.protocol+"//"+document.location.host;var a=
function(){var a=(window.MIC_SRVRNM||"")+"/ajaxfunction.do?xcase\x3dajaxlogonconnection",e=function(){if(window.logonStatus){var a=document.getElementById("welcome_logon_span"),c=document.getElementById("inquiry_number_span"),b=document.getElementById("join_now_span"),e=document.getElementById("logout_span"),d=document.getElementById("logon_span"),h=document.getElementById("newMsg"),g=document.getElementById("vohome_span");0<parseInt(logonStatus[0])?(a&&(a.innerHTML='Welcome \x3ca href\x3d"http://membercenter.made-in-china.com"\x3e'+
(logonStatus[1]?"\x3cstrong\x3e"+document.createTextNode(logonStatus[1]).nodeValue+"\x3c/strong\x3e":"")+"!\x3c/a\x3e "),c&&(c.innerHTML=logonStatus[2]),b&&(b.style.display="none"),e&&(e.style.display="inline"),d&&(d.style.display="none"),g&&(g.style.display="inline"),0<parseInt(logonStatus[3])?(h||(h=document.createElement("span"),h.setAttribute("id","newMsg"),a.parentNode.insertBefore(h,a.nextSibling)),h.innerHTML=' | \x3ca href\x3d"http://membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox"\x3e\x3cimg src\x3d"/images/new_msg.gif"  alt\x3d"#N0# New Message(s)" title\x3d"#N0# New Message(s)" /\x3e #N0#\x3c/a\x3e'.replace(/#N0#/g,
logonStatus[3]),h.style.display="inline"):h&&(h.style.display="none")):(a&&(a.innerHTML=""),c&&(c.innerHTML=logonStatus[2]),b&&(b.style.display="inline"),e&&(e.style.display="none"),d&&(d.style.display="inline"),h&&(h.style.display="none"))}};c.get(window.location.protocol+"//"+window.location.host+"/ajaxfunction.do?xcase\x3dgetLoginStatus",function(d){c.get(a,function(a){a=a.replace(/^var\s*/,"window.");eval(a);e()})})};window.addMICtoFavorite=function(a,c){try{window.external.AddFavorite(a,c)}catch(d){}};
return function(){try{logonStatus="",a(),document.body.outerHTML&&(document.getElementById("welcome_fav").outerHTML='\x3ca id\x3d"welcome_fav" href\x3d"javascript:addMICtoFavorite(\'http://www.made-in-china.com',"Made-in-China.com - The world of China products');\"\x3eAdd Made-in-China.com to your favorites list\x3c/a\x3e")}catch(c){}}}.call(this)};window.headerStatus=d}.call(this,window.jQuery);
void function(){var c=function(){var a=function(){},c=function(b,c){var d=document.createElement("script");d.type="text/javascript";d.async=d.defer=!0;var e=!1,g=function(){"complete"!==d.readyState&&"loaded"!==d.readyState||l.call(d)},l=function(){d.onload=d.onerror=a;e&&d.detachEvent("onreadystatechange",g);setTimeout(c,0)};d.onload=d.onerror=l;d.readyState&&!d.addEventListener&&(e=!0,d.attachEvent("onreadystatechange",g));d.src=b;document.body.appendChild(d)},b=function(a,b){var d=arguments.callee;
c(a.shift(),function(){a.length?d(a,b):b()})};return function(){var c=[].slice.call(arguments);if(c.length){var d=a;"function"===typeof c[c.length-1]&&(d=c.pop());for(var e=[],g,l=0;l<c.length;l++)g=c[l],"function"===typeof g&&(g=g()),"string"===typeof g&&(g=g.replace(/^\s+|\s+$/g,""))&&e.push(g);e.length?b(e,d):d()}}}.call(this),d=function(a){jQuery(function(){var d=function(){},b,e,g,h=Object.prototype.toString,t={map:function(f,a){var b,c=h.call(f).match(/\w+/g)[1];if("Array"===c)for(b=[],c=0;c<
f.length;c++)b.push(a(c,f[c]));else if("Object"===c){b={};for(var d in f)b[d]=a(d,f[d])}return b},where:function(f,a){var b,c;c=h.call(f).match(/\w+/g)[1];if("Array"===c){b=[];for(var d=0;d<f.length;d++)(c=a(d,f[d]))&&b.push(f[d])}else if("Object"===c)for(d in b={},f)(c=a(d,f[d]))&&(b[d]=f[d]);return b},indexOf:function(f,a){for(var b=-1,c=0;c<f.length;c++)if(f[c]===a){b=c;break}return b}},u=function(){var f=document.createElement("div");f.style.cssText="width:1px; height:1px; position:absolute; top:0; left:0; overflow:hidden;";
var a=!1;return{img:function(b,c){a||(document.body.appendChild(f),a=!0);var d=document.createElement("img"),e=[],g;for(g in c)e.push(g+"\x3d"+encodeURIComponent(c[g]));e.push("_\x3d"+(new Date).valueOf());e=b+(/\?/.test(b)?"\x26":"?")+e.join("\x26");d.src=e;f.appendChild(d)}}}(),D=function(f,a){u.img("http://membercenter.made-in-china.com/tm.do?xcase\x3dtestTM",{visitorId:f,url:encodeURIComponent(a)})},q=function(f){this.api=f||null;this.isReady=!1;this.readyEvents=[]};q.prototype={execReady:function(){if(this.isReady){for(var f=
0;f<this.readyEvents.length;f++)this.readyEvents[f].call(this);this.readyEvents=[]}},ready:function(f){"function"===typeof f&&this.readyEvents.push(f);this.execReady()},beReady:function(){this.isReady=!0;this.execReady()},setApi:function(f){f&&(this.api=f,this.beReady())},chatTo:function(f){this.api.chatTo($.extend(!0,{},f,{type:b.type}))}};var v=new q,q=function(){this.isReady=!1;this.readyEvents=[]};q.prototype={execReady:function(){if(this.isReady)for(var f=0;f<this.readyEvents.length;f++)this.readyEvents[f].call(this)},
ready:function(f){"function"===typeof f&&this.readyEvents.push(f);this.execReady()},beReady:function(){this.isReady=!0;this.execReady()}};var w=new q,s={chat:'\x3ca rel\x3d"nofollow" class\x3d"" href\x3d"javascript:void(\'Chat Now\')" title\x3d"Chat with Supplier Online now!"\x3eChat with Supplier.\x3c/a\x3e',online:'\x3ca rel\x3d"nofollow" class\x3d"" href\x3d"javascript:void(\'Chat Now\')" title\x3d"Chat with Supplier Online now!"\x3eChat with Supplier.\x3c/a\x3e',list:{wrap:'\x3cdiv class\x3d"tmer-list"\x3e\x3cdiv class\x3d"tm-manager-box"\x3e\x3cspan\x3eSales Manager: \x3c/span\x3e\x3cdiv class\x3d"inline tm-manager"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"tm-person-box"\x3e\x3cspan\x3eSales Person: \x3c/span\x3e\x3cdiv class\x3d"inline tm-person"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
button:'\x3ca rel\x3d"nofollow" class\x3d"tm-user" href\x3d"javascript:void(\'Chat Now!\')" title\x3d"Chat with Supplier Online now!"\x3e\x3c/a\x3e'},fixed:'\x3ca rel\x3d"nofollow" class\x3d"" href\x3d"javascript:void(\'Chat Now!\')" title\x3d"Chat with Supplier Online now!"\x3e\x3c/a\x3e',teletext:'\x3cdiv class\x3d"J-status"\x3e\x3cdiv class\x3d"pic"\x3e\x3ca rel\x3d"nofollow" title\x3d"Chat with Supplier Online now!" href\x3d"#" class\x3d"J-hovertitle"\x3e\x3cimg src\x3d"//www.micstatic.com/an/img/tm-offline.png" alt\x3d"Offline" /\x3e\x3c/a\x3e\x3c/div\x3e\x3ca rel\x3d"nofollow" href\x3d"#" class\x3d"J-title"\x3eTM\x3c/a\x3e\x3c/div\x3e',
texticon:'\x3ca rel\x3d"nofollow" href\x3d"javascript:void(\'Chat Now\')" title\x3d"Chat with Supplier Online now!" class\x3d"tm"\x3e\x3c/a\x3e'},p={texticon:function(f){this.$elem=jQuery(s.texticon);this.$elem.insertAfter(f)}};p.texticon.prototype={online:function(f){this.$elem.show();"function"===typeof f&&f()},offline:function(f){this.$elem.addClass("offline").show();"function"===typeof f&&f()}};p.fixed=function(f){this.$elem=jQuery(s.fixed);this.$elem.insertAfter(f)};p.fixed.prototype={online:function(f){this.$elem.removeClass("sider-tm-off").addClass("sider-tm-on").show();
"function"===typeof f&&f()},offline:function(f){this.$elem.removeClass("sider-tm-on").addClass("sider-tm-off").show();"function"===typeof f&&f()}};p.teletext=function(f){this.$elem=jQuery(s.teletext);this.$elem.insertAfter(f)};p.teletext.prototype={online:function(f){this.$elem.removeClass("offline").addClass("online");this.$elem.find("img").attr({alt:"online",src:"//www.micstatic.com/an/img/tm-online.png"});this.$elem.find(".J-title").html("Chat with Supplier");this.$elem.find(".J-hovertitle").attr("title",
"Chat with Supplier Online now!");"function"===typeof f&&f()},offline:function(f){this.$elem.removeClass("online").addClass("offline");this.$elem.find("img").attr({alt:"offline",src:"//www.micstatic.com/an/img/tm-offline.png"});this.$elem.find(".J-title").html("Leave a message");this.$elem.find(".J-hovertitle").attr("title","Supplier is offline now, Please leave your message.");"function"===typeof f&&f()}};p.chat=function(f){this.$elem=jQuery(s.chat);this.$elem.insertAfter(f)};p.chat.prototype={online:function(f){this.$elem.addClass("tm-status-on").show();
"function"===typeof f&&f()},offline:function(f){this.$elem.addClass("tm-status-off").attr({title:"Supplier is offline now, Please leave your message.",href:"javascript:void('Please Leave a Message')"}).html("Leave a message.").show();"function"===typeof f&&f()}};p.online=function(f){this.$elem=jQuery(s.online);this.$elem.insertAfter(f)};p.online.prototype={online:function(f){this.$elem.addClass("tm-status-on").show();"function"===typeof f&&f()},offline:function(f){this.$elem.addClass("tm-status-off").attr({title:"Supplier is offline now, Please leave your message.",
href:"javascript:void('Please Leave a Message')"}).html("Leave a message.").show();"function"===typeof f&&f()}};p.list=function(f,a){var b=this.$wrap=jQuery(s.list.wrap);b.insertAfter(f);this.$managerBox=b.find(".tm-manager-box");this.$personBox=b.find(".tm-person-box");var c=b.find(".tm-manager"),b=b.find(".tm-person"),d=/00$/;this._={has:{manager:0,person:0}};for(var e=[],g,k,h=0;h<a.length;h++)k=a[h],g=jQuery(s.list.button).html(k.name)[0],g.uid=k.id,d.test(k.id)?(c.append(g),this._.has.manager++):
(b.append(g),this._.has.person++),e.push(g);this.$elem=jQuery(e);!c.children("a.tm-user").length&&c.hide();!b.children("a.tm-user").length&&b.hide()};p.list.prototype={online:function(f){this._.has.manager||this._.has.person?(this.$wrap.show(),this.$elem.show(),this._.has.manager||this.$managerBox.hide(),this._.has.person||this.$personBox.hide()):this.$wrap.hide();"function"===typeof f&&f()},offline:function(f){this.$elem.hide();"function"===typeof f&&f()}};a.render&&($.extend(!0,s,a.render.tags),
$.extend(!0,p,a.render.processors));var z=function(f){f.stopPropagation()},A=function(f){f.preventDefault()},E=function(f,b){var a=f.getAttribute("processor");return a in p?(a=new p[a](f,b),a.$elem.click(z).click(A),a):null},M=function(a){a="function"===typeof a?a:d;jQuery.ajax({url:b.audit,dataType:"jsonp",jsonp:"callback",cache:!1,success:function(c){b.userStatus=c;"function"===typeof a&&a(c)}})},F=function(a,b){for(var c=0;c<a.length;c++)if(a[c].id===b)return a[c];return null},N=function(a,b){this.id=
a;this.elems=b?[b]:[];this.users=[];this.online=[];this.offline=[]},O=function(){var a=[],b=[],c;e.each(function(d,e){c=e.getAttribute("cid");if(-1===t.indexOf(b,c))b.push(c),a.push(new N(c,e));else{var g=F(a,c);g&&g.elems.push(e)}});return{coms:a,ids4unique:b}},P=function(a,c){g&&g.ids4unique.length&&jQuery.ajax({url:b.users,dataType:"jsonp",jsonp:"callback",cache:!1,data:{comIdStr:g.ids4unique.join(",")},success:function(b){var d=!1,e,k;for(k in b)if(d=!0,e=F(g.coms,k)){e.users=b[k].slice();e.uids=
[];for(var h=0;h<e.users.length;h++)e.uids.push(e.users[h].id)}d?"function"===typeof a&&a(b):"function"===typeof c&&c()},error:function(){"function"===typeof c&&c()}})},G=function(a,b){for(var c=[],d=0;d<a.length;d++)-1!==t.indexOf(a[d].uids,b)&&c.push(a[d]);return c},Q=function(){for(var a=g.coms,b=[],c=0;c<a.length;c++)a[c].online.length||b.push(a[c]);return b},R=function(a,c,d){for(var e=d=d?d:"user_ids[]\x3d",g=b.URL_THRESHOLD,k=[],h=[],l,m=0;m<a.length;m++)if(l=a[m],c in l&&l[c].length){for(var n=
e,p="\x26"+d,q=l[c],r=h,s=c,t=[],u=0;u<r.length;u++)t=t.concat(r[u][s]);(n+t.concat(q).join(p)).length<=g?h.push(l):(k.push(h),h=[l])}k.push(h);return k},S=function(a,b,c){var d=c||"user_ids[]\x3d";c="\x26"+d;for(var e=[],g=0;g<a.length;g++)e=e.concat(a[g][b]);return d+e.join(c)},T=function(a,c,e){jQuery.ajax({url:b.choose2talk,dataType:"jsonp",jsonp:"callback",cache:!1,data:{userIdStr:a.online.length?a.online.join(","):a.offline.join(","),dataId:a.dataId},success:c||d,complete:e||d})},U=function(a){var b=
/([^_]+)_1$/,c="";/1$/.test(a)&&(c=b.exec(a)[1]);return c},V={1:"product",2:"offer",3:"company",4:"productGroup"},W=function(a){var b={id:"null",type:"null"};(a=/([^_]+)_(\d)$/.exec(a))&&(b={id:a[1],type:V[a[2]]||"other"});return b},H=function(a){v.ready(function(){var c=function(a){var f=this;jQuery(this).unbind("click",c);var e=jQuery(this);if(a=e.data("talk2"))v.chatTo(a),d(this);else{a=e.data("tmData");var g=U(a.dataId),k=W(a.dataId);b&&b.userStatus&&b.userStatus.visitorId&&!a.online.length||
T(a,function(a){a&&(g&&jQuery.extend(!0,a,{productId:g}),k&&jQuery.extend(!0,a,{inquiryData:k}),v.chatTo(a),e.data("talk2",a))},function(){d(f)})}},d=function(b){(b?jQuery(b):a.$elem).click(c)};d()})},I=function(a){w.ready(function(){for(var a=g.coms,b=0;b<a.length;b++)jQuery(a[b].elems).each(function(a,b){b.buttonRefer&&b.buttonRefer.$elem.click(function(a){a.preventDefault();alert("TradeMessenger is currently available to non-Chinese buyers and suppliers with business lienses or identity card.")})})})},
X=function(){if($(".J-header-refresh").length)window.location.reload(!0);else{var a="header-type";$(".athena-user-state").length?a="athena":$("#logon_span").length?a="old":$("#welcome_logon_span").length&&(a="now");if(a in window.headerStatus)window.headerStatus[a]();else"function"===typeof window.logonRefresh&&window.logonRefresh()}},x=null,Y={ifrWidth:550,ifrHeight:290,width:490,height:"auto"},J={ifrWidth:550,ifrHeight:290,width:565,height:"auto"},r=new LoginLayer({callback:function(a){var c=arguments.callee;
r.hide();b.userStatus=$.extend(!0,{},b.userStatus,a);if("signin"===a.tmaction)setTimeout(function(){r.callback(c);r.unload();r.load(b.login,b.transition);r.title("SIGN IN");r.style(J);r.show()},1);else{if(a.visitorId){B();var d=b.token,d=d+("\x26visitorId\x3d"+a.visitorId);y(function(){window.MaiTong&&(b.userStatus.tm="true",C(d),D(a.visitorId,d),b.userStatus&&"true"===b.userStatus.tm&&(MaiTong.startWeb(),v.setApi(MaiTong)),x&&jQuery(x).click())})}else B(),b.userStatus=$.extend(!0,{},{login:"true",
tm:a.tm}),"true"===a.tm?y(function(){x&&jQuery(x).click()}):I(),X();setTimeout(function(){r.unload()},1)}}}),K=function(a){a.preventDefault();x=this;"1"!==b.userStatus.ip&&$(this).data("tmData").online.length?y(function(a){r.unload();r.title("Online Chat");r.style(Y);r.load(b.visitor,b.transition);r.show()}):y(function(a){a.isClientInstalled?(B(),x&&jQuery(x).click()):(r.unload(),r.title("SIGN IN"),r.style(J),r.load(b.login,b.transition),r.show())})},Z=function(){w.ready(function(){for(var a=g.coms,
b=0;b<a.length;b++)jQuery(a[b].elems).each(function(a,b){b.buttonRefer&&b.buttonRefer.$elem.click(K)})})},B=function(){w.ready(function(){for(var a=g.coms,b=0;b<a.length;b++)jQuery(a[b].elems).each(function(a,b){b.buttonRefer&&b.buttonRefer.$elem.unbind("click",K)})})},aa=function(){for(var a=Q(),c=R(a,"uids","user_ids[]\x3d"),d=0,a=0;a<c.length;a++)void function(a){jQuery.ajax({url:b.userTMStatus+"\x26"+S(a,"uids","user_ids[]\x3d"),dataType:"jsonp",jsonp:"callback",cache:!1,timeout:1E4,data:{domain:"micen"},
success:function(b){var c,d;for(d in b)if(b[d].online){c=G(a,d);for(var e=0;e<c.length;e++)c[e].online.push(d)}else for(c=G(a,d),e=0;e<c.length;e++)c[e].offline.push(d);for(e=0;e<a.length;e++){c=a[e];var f;for(b=0;b<c.elems.length;b++){d=c.elems[b];f=d.getAttribute("processor");var g=d.getAttribute("dataid");switch(f){case "list":f=t.where(c.users,function(a,b){return-1!==t.indexOf(c.online,b.id)});f=E(d,f);d.buttonRefer=f;f.$elem.each(function(a,b){jQuery(b).data("tmData",{online:[b.uid],dataId:g})});
break;default:if(f=E(c.elems[b]),d.buttonRefer=f,f.$elem.data("tmData",{online:c.online.slice(),offline:c.offline.slice(),dataId:g}),!c.online.length){f.offline();H(f);continue}}f.online();H(f)}}},error:function(){u.img("http://www.made-in-china.com/ajaxfunction.do?xcase\x3dtmExceptionLog",{type:1,para:encodeURIComponent(window.location.href)})},complete:function(){d++;d===c.length&&w.beReady()}})}.call(this,c[a])},L=!1,C=function(a){L||(MaiTong.configWeb({token_url:a||b.token,domain:"micen",lang:"en"}),
L=!0)},y=function(a){a="function"===typeof a?a:d;c(b.tmloader,function(){if(window.MaiTong){if("true"!==b.userStatus.login&&"1"!==b.userStatus.ip||!MaiTong.isClientInstalled){if("ip"in b.userStatus&&"1"!==b.userStatus.ip&&"true"!==b.userStatus.login){if(b.userStatus&&"true"===b.userStatus.tm&&b.userStatus.visitorId){var c=b.token+"\x26visitorId\x3d"+b.userStatus.visitorId;C(c);D(b.userStatus.visitorId,c);MaiTong.startWeb();v.setApi(MaiTong)}}else C(),b.userStatus&&"true"===b.userStatus.login&&"true"===
b.userStatus.tm&&(MaiTong.startWeb(),v.setApi(MaiTong));b.type="web"}else b.type="client",v.setApi(MaiTong);a(MaiTong)}})};(function(c){var d={tm:"http://webim.en.trademessenger.com",tmloader:"http://webim.en.trademessenger.com/assets/js/loader.js?st\x3d"+parseInt((new Date).valueOf()/12/60/60/1E3),userTMStatus:"http://www.made-in-china.com/ajaxfunction.do?xcase\x3dgetTmStatus",vo:"http://membercenter.made-in-china.com",en:"http://www.made-in-china.com",token:"http://membercenter.made-in-china.com/tm.do?xcase\x3dtoken4TMWeb\x26callback\x3d?",
users:"http://www.made-in-china.com/im.do?xcase\x3dgetSubAccount",choose2talk:"http://www.made-in-china.com/im.do?xcase\x3dchooseUserToTalk4TM3",audit:"http://membercenter.made-in-china.com/tm.do?xcase\x3dtmRightsCheck",visitor:"http://membercenter.made-in-china.com/tm.do?xcase\x3dvisitorReg",login:"https://login.made-in-china.com/logon.do?xcase\x3dlogonPage4TM3",transition:"http://www.made-in-china.com/im.do?xcase\x3dtmLogonHandle",holderSelector:".tm3_chat_status",URL_THRESHOLD:1500};b=$.extend(!0,
{},d,a.params);c(b)})(function(a){e=jQuery(b.holderSelector).filter(function(){return!this.__tm_rendered__}).each(function(){this.__tm_rendered__=!0});g=O();P(function(){aa()});M(function(a){"true"===a.login||a.visitorId?"true"===a.tm?y():I():Z()})});if(jQuery.browser.msie&&6==jQuery.browser.version){var ba=/void\s*\(?.*?\)?[;]?$/,A=function(a){a.preventDefault()};jQuery("a").each(function(a,b){ba.test(b.href)&&jQuery(b).click(A)})}})},a=function(){var a=!1;return function(){if(!a){var c=document.createElement("link");
c.rel="stylesheet";c.type="text/css";c.media="all";c.href="//www.micstatic.com/gb/css/tm/tm.css";document.getElementsByTagName("head")[0].appendChild(c);a=!0}}}.call(this),g=function(){var a=[],d=function(){if(window.jQuery)for(;a.length;)a.shift().call(this)};return function(b){"function"===typeof b&&a.push(b);d();window.jQuery||c("//www.micstatic.com/gb/js/libs/jquery.js",function(){d()})}}.call(this),e=function(c){a();g(function(){d(c||{})})};window.addEventListener?window.addEventListener("load",
e,!1):window.attachEvent("onload",e);window.executeTM=e}.call(this);