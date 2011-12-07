/*
 *  /MathJax/extensions/MathMenu.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

(function(c,f,i,e,b){var n="1.1.9";MathJax.Extension.MathMenu={version:n};var l=c.Browser.isPC,j=c.Browser.isMSIE;var h=(l?null:"5px");var m=c.CombineConfig("MathMenu",{delay:150,helpURL:"http://www.mathjax.org/help/user/",closeImg:i.fileURL(b.imageDir+"/CloseX-31.png"),showRenderer:true,showFontMenu:false,showContext:false,showDiscoverable:false,windowSettings:{status:"no",toolbar:"no",locationbar:"no",menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",width:100,height:50},styles:{"#MathJax_About":{position:"fixed",left:"50%",width:"auto","text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD",color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style":"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius":"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_Menu":{position:"absolute","background-color":"white",color:"black",width:"auto",padding:(l?"2px":"5px 0px"),border:"1px solid #CCCCCC",margin:0,cursor:"default",font:"menu","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":h,"-webkit-border-radius":h,"-moz-border-radius":h,"-khtml-border-radius":h,"box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_MenuItem":{padding:(l?"2px 2em":"1px 2em"),background:"transparent"},".MathJax_MenuTitle":{"background-color":"#CCCCCC",margin:(l?"-1px -1px 1px -1px":"-5px 0 0 0"),"text-align":"center","font-style":"italic","font-size":"80%",color:"#444444",padding:"2px 0",overflow:"hidden"},".MathJax_MenuArrow":{position:"absolute",right:".5em",color:"#666666","font-family":(j?"'Arial unicode MS'":null)},".MathJax_MenuActive .MathJax_MenuArrow":{color:"white"},".MathJax_MenuCheck":{position:"absolute",left:".7em","font-family":(j?"'Arial unicode MS'":null)},".MathJax_MenuRadioCheck":{position:"absolute",left:(l?"1em":".7em")},".MathJax_MenuLabel":{padding:(l?"2px 2em 4px 1.33em":"1px 2em 3px 1.33em"),"font-style":"italic"},".MathJax_MenuRule":{"border-top":(l?"1px solid #CCCCCC":"1px solid #DDDDDD"),margin:(l?"4px 1px 0px":"4px 3px")},".MathJax_MenuDisabled":{color:"GrayText"},".MathJax_MenuActive":{"background-color":(l?"Highlight":"#606872"),color:(l?"HighlightText":"white")},".MathJax_Menu_Close":{position:"absolute",width:"31px",height:"31px",top:"-15px",left:"-15px"}}});var g,d;c.Register.StartupHook("MathEvents Ready",function(){g=MathJax.Extension.MathEvents.Event.False;d=MathJax.Extension.MathEvents.Hover});var a=MathJax.Menu=MathJax.Object.Subclass({version:n,items:[],posted:false,title:null,margin:5,Init:function(o){this.items=[].slice.call(arguments,0)},With:function(o){if(o){c.Insert(this,o)}return this},Post:function(p,z){if(!p){p=window.event}var v=(!this.title?null:[["div",{className:"MathJax_MenuTitle"},[this.title]]]);var o=document.getElementById("MathJax_MenuFrame");if(!o){o=a.Background(this);delete k.lastItem;delete k.lastMenu;delete a.skipUp}var q=f.addElement(o,"div",{onmouseup:a.Mouseup,ondblclick:g,ondragstart:g,onselectstart:g,oncontextmenu:g,menuItem:this,className:"MathJax_Menu"},v);for(var s=0,r=this.items.length;s<r;s++){this.items[s].Create(q)}if(a.isMobile){f.addElement(q,"span",{className:"MathJax_Menu_Close",menu:z,ontouchstart:a.Close,ontouchend:g,onmousedown:a.Close,onmouseup:False,},[["img",{src:m.closeImg,style:{width:"100%",height:"100%"}}]])}this.posted=true;q.style.width=(q.offsetWidth+2)+"px";var w=p.pageX,u=p.pageY;if(!w&&!u){w=p.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;u=p.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(!z){if(w+q.offsetWidth>document.body.offsetWidth-this.margin){w=document.body.offsetWidth-q.offsetWidth-this.margin}if(a.isMobile){w=Math.max(5,w-Math.floor(q.offsetWidth/2));u-=20}a.skipUp=p.isContextMenu}else{var t="left",A=z.offsetWidth;w=(a.isMobile?30:A-2);u=0;while(z&&z!==o){w+=z.offsetLeft;u+=z.offsetTop;z=z.parentNode}if(w+q.offsetWidth>document.body.offsetWidth-this.margin&&!a.isMobile){t="right";w=Math.max(this.margin,w-A-q.offsetWidth+6)}if(!l){q.style["borderRadiusTop"+t]=0;q.style["WebkitBorderRadiusTop"+t]=0;q.style["MozBorderRadiusTop"+t]=0;q.style["KhtmlBorderRadiusTop"+t]=0}}q.style.left=w+"px";q.style.top=u+"px";if(document.selection&&document.selection.empty){document.selection.empty()}return g(p)},Remove:function(o,p){var q=document.getElementById("MathJax_MenuFrame");if(q){q.parentNode.removeChild(q);if(this.msieBackgroundBug){detachEvent("onresize",a.Resize)}}if(a.jax.hover){delete a.jax.hover.nofade;d.UnHover(a.jax)}return g(o)},Find:function(p){var r=[].slice.call(arguments,1);for(var q=0,o=this.items.length;q<o;q++){if(this.items[q].name===p){if(r.length){if(!this.items[q].menu){return null}return this.items[q].menu.Find.apply(this.items[q].menu,r)}return this.items[q]}}return null}},{config:m,div:null,Close:function(o){return a.Event(o,this.menu||this.parentNode,(this.menu?"Touchend":"Remove"))},Remove:function(o){return a.Event(o,this,"Remove")},Mouseover:function(o){return a.Event(o,this,"Mouseover")},Mouseout:function(o){return a.Event(o,this,"Mouseout")},Mousedown:function(o){return a.Event(o,this,"Mousedown")},Mouseup:function(o){return a.Event(o,this,"Mouseup")},Touchstart:function(o){return a.Event(o,this,"Touchstart")},Touchend:function(o){return a.Event(o,this,"Touchend")},Event:function(q,s,o,r){if(a.skipMouseover&&o==="Mouseover"&&!r){return g(q)}if(a.skipUp){if(o.match(/Mouseup|Touchend/)){delete a.skipUp;return g(q)}if(o==="Touchstart"||(o==="Mousedown"&&!a.skipMousedown)){delete a.skipUp}}if(!q){q=window.event}var p=s.menuItem;if(p&&p[o]){return p[o](q,s)}return null},BGSTYLE:{position:"absolute",left:0,top:0,"z-index":200,width:"100%",height:"100%",border:0,padding:0,margin:0},Background:function(p){var q=f.addElement(document.body,"div",{style:this.BGSTYLE,id:"MathJax_MenuFrame"},[["div",{style:this.BGSTYLE,menuItem:p,onmousedown:this.Remove}]]);var o=q.firstChild;if(p.msieBackgroundBug){o.style.backgroundColor="white";o.style.filter="alpha(opacity=0)";q.width=q.height=0;this.Resize();attachEvent("onresize",this.Resize)}else{o.style.position="fixed"}return q},Resize:function(){setTimeout(a.SetWH,0)},SetWH:function(){var o=document.getElementById("MathJax_MenuFrame");if(o){o=o.firstChild;o.style.width=o.style.height="1px";o.style.width=document.body.scrollWidth+"px";o.style.height=document.body.scrollHeight+"px"}},saveCookie:function(){f.Cookie.Set("menu",this.cookie)},getCookie:function(){this.cookie=f.Cookie.Get("menu")},getImages:function(){if(a.isMobile){var o=new Image();o.src=m.closeImg}}});var k=a.ITEM=MathJax.Object.Subclass({name:"",Create:function(p){if(!this.hidden){var o={onmouseover:a.Mouseover,onmouseout:a.Mouseout,onmouseup:a.Mouseup,onmousedown:a.Mousedown,ondragstart:g,onselectstart:g,onselectend:g,ontouchstart:a.Touchstart,ontouchend:a.Touchend,className:"MathJax_MenuItem",menuItem:this};if(this.disabled){o.className+=" MathJax_MenuDisabled"}f.addElement(p,"div",o,this.Label(o,p))}},Mouseover:function(s,u){if(!this.disabled){this.Activate(u)}if(!this.menu||!this.menu.posted){var t=document.getElementById("MathJax_MenuFrame").childNodes,p=u.parentNode.childNodes;for(var q=0,o=p.length;q<o;q++){var r=p[q].menuItem;if(r&&r.menu&&r.menu.posted){r.Deactivate(p[q])}}o=t.length-1;while(o>=0&&u.parentNode.menuItem!==t[o].menuItem){t[o].menuItem.posted=false;t[o].parentNode.removeChild(t[o]);o--}if(this.Timer&&!a.isMobile){this.Timer(s,u)}}},Mouseout:function(o,p){if(!this.menu||!this.menu.posted){this.Deactivate(p)}if(this.timer){clearTimeout(this.timer);delete this.timer}},Mouseup:function(o,p){return this.Remove(o,p)},Touchstart:function(o,p){return this.TouchEvent(o,p,"Mousedown")},Touchend:function(o,p){return this.TouchEvent(o,p,"Mouseup")},TouchEvent:function(p,q,o){if(this!==k.lastItem){if(k.lastMenu){a.Event(p,k.lastMenu,"Mouseout")}a.Event(p,q,"Mouseover",true);k.lastItem=this;k.lastMenu=q}if(this.nativeTouch){return null}a.Event(p,q,o);return false},Remove:function(o,p){p=p.parentNode.menuItem;return p.Remove(o,p)},Activate:function(o){this.Deactivate(o);o.className+=" MathJax_MenuActive"},Deactivate:function(o){o.className=o.className.replace(/ MathJax_MenuActive/,"")},With:function(o){if(o){c.Insert(this,o)}return this}});a.ITEM.COMMAND=a.ITEM.Subclass({action:function(){},Init:function(o,q,p){this.name=o;this.action=q;this.With(p)},Label:function(o,p){return[this.name]},Mouseup:function(o,p){if(!this.disabled){this.Remove(o,p);this.action.call(this,o)}return g(o)}});a.ITEM.SUBMENU=a.ITEM.Subclass({menu:null,marker:(l&&!c.Browser.isSafari?"\u25B6":"\u25B8"),Init:function(o,q){this.name=o;var p=1;if(!(q instanceof a.ITEM)){this.With(q),p++}this.menu=a.apply(a,[].slice.call(arguments,p))},Label:function(o,p){this.menu.posted=false;return[this.name+" ",["span",{className:"MathJax_MenuArrow"},[this.marker]]]},Timer:function(o,p){if(this.timer){clearTimeout(this.timer)}o={clientX:o.clientX,clientY:o.clientY};this.timer=setTimeout(e(["Mouseup",this,o,p]),m.delay)},Touchend:function(p,r){var q=this.menu.posted;var o=this.SUPER(arguments).Touchend.apply(this,arguments);if(q){this.Deactivate(r);delete k.lastItem;delete k.lastMenu}return o},Mouseup:function(p,r){if(!this.disabled){if(!this.menu.posted){if(this.timer){clearTimeout(this.timer);delete this.timer}this.menu.Post(p,r)}else{var q=document.getElementById("MathJax_MenuFrame").childNodes,o=q.length-1;while(o>=0){var s=q[o];s.menuItem.posted=false;s.parentNode.removeChild(s);if(s.menuItem===this.menu){break}o--}}}return g(p)}});a.ITEM.RADIO=a.ITEM.Subclass({variable:null,marker:(l?"\u25CF":"\u2713"),Init:function(p,o,q){this.name=p;this.variable=o;this.With(q);if(this.value==null){this.value=this.name}},Label:function(p,q){var o={className:"MathJax_MenuRadioCheck"};if(m.settings[this.variable]!==this.value){o={style:{display:"none"}}}return[["span",o,[this.marker]]," "+this.name]},Mouseup:function(r,s){if(!this.disabled){var t=s.parentNode.childNodes;for(var p=0,o=t.length;p<o;p++){var q=t[p].menuItem;if(q&&q.variable===this.variable){t[p].firstChild.style.display="none"}}s.firstChild.display="";m.settings[this.variable]=this.value;a.cookie[this.variable]=m.settings[this.variable];a.saveCookie();if(this.action){this.action.call(a)}}this.Remove(r,s);return g(r)}});a.ITEM.CHECKBOX=a.ITEM.Subclass({variable:null,marker:"\u2713",Init:function(p,o,q){this.name=p;this.variable=o;this.With(q)},Label:function(p,q){var o={className:"MathJax_MenuCheck"};if(!m.settings[this.variable]){o={style:{display:"none"}}}return[["span",o,[this.marker]]," "+this.name]},Mouseup:function(o,p){if(!this.disabled){p.firstChild.display=(m.settings[this.variable]?"none":"");m.settings[this.variable]=!m.settings[this.variable];a.cookie[this.variable]=m.settings[this.variable];a.saveCookie();if(this.action){this.action.call(a)}}this.Remove(o,p);return g(o)}});a.ITEM.LABEL=a.ITEM.Subclass({Init:function(o,p){this.name=o;this.With(p)},Label:function(o,p){delete o.onmouseover,delete o.onmouseout;delete o.onmousedown;o.className+=" MathJax_MenuLabel";return[this.name]}});a.ITEM.RULE=a.ITEM.Subclass({Label:function(o,p){delete o.onmouseover,delete o.onmouseout;delete o.onmousedown;o.className+=" MathJax_MenuRule";return null}});a.About=function(){var r=b["HTML-CSS"]||{fontInUse:""};var t=(r.webFonts?"":"local "),p=(r.webFonts?" web":"");var q=(r.imgFonts?"Image":t+r.fontInUse+p)+" fonts";var o=["MathJax.js v"+MathJax.fileversion,["br"]];o.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);a.About.GetJax(o,MathJax.InputJax,"Input Jax");a.About.GetJax(o,MathJax.OutputJax,"Output Jax");a.About.GetJax(o,MathJax.ElementJax,"Element Jax");o.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);a.About.GetJax(o,MathJax.Extension,"Extension",true);o.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center",{},[c.Browser+" v"+c.Browser.version+(r.webFonts?" \u2014 "+r.allowWebFonts+" fonts":"")]]);a.About.div=a.Background(a.About);var u=f.addElement(a.About.div,"div",{id:"MathJax_About",onclick:a.About.Remove},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],"using "+q,["br"],["br"],["span",{style:{display:"inline-block","text-align":"left","font-size":"80%","max-height":"20em",overflow:"auto","background-color":"#E4E4E4",padding:".4em .6em",border:"1px inset"}},o],["br"],["br"],["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]]]);var v=(document.documentElement||{});var s=window.innerHeight||v.clientHeight||v.scrollHeight||0;if(a.prototype.msieAboutBug){u.style.width="20em";u.style.position="absolute";u.style.left=Math.floor((document.documentElement.scrollWidth-u.offsetWidth)/2)+"px";u.style.top=(Math.floor((s-u.offsetHeight)/3)+document.body.scrollTop)+"px"}else{u.style.marginLeft=Math.floor(-u.offsetWidth/2)+"px";u.style.top=Math.floor((s-u.offsetHeight)/3)+"px"}};a.About.Remove=function(o){if(a.About.div){document.body.removeChild(a.About.div);delete a.About.div}};a.About.GetJax=function(p,u,s,r){var t=[];for(var v in u){if(u.hasOwnProperty(v)&&u[v]){if((r&&u[v].version)||(u[v].isa&&u[v].isa(u))){t.push((u[v].id||v)+" "+s+" v"+u[v].version)}}}t.sort();for(var q=0,o=t.length;q<o;q++){p.push(t[q],["br"])}return p};a.Help=function(){window.open(m.helpURL,"MathJaxHelp")};a.ShowSource=function(r){if(!r){r=window.event}var q={screenX:r.screenX,screenY:r.screenY};if(!a.jax){return}if(this.format==="MathML"){var o=MathJax.ElementJax.mml;if(o&&typeof(o.mbase.prototype.toMathML)!=="undefined"){try{a.ShowSource.Text(a.jax.root.toMathML(),r)}catch(p){if(!p.restart){throw p}e.After([this,a.ShowSource,q])}}else{if(!i.loadingToMathML){i.loadingToMathML=true;a.ShowSource.Window(r);e.Queue(i.Require("[MathJax]/extensions/toMathML.js"),function(){delete i.loadingToMathML;if(!o.mbase.prototype.toMathML){o.mbase.prototype.toMathML=function(){}}},[this,a.ShowSource,q]);return}}}else{if(a.jax.originalText==null){alert("No TeX form available");return}a.ShowSource.Text(a.jax.originalText,r)}};a.ShowSource.Window=function(p){if(!a.ShowSource.w){var q=[],o=m.windowSettings;for(var r in o){if(o.hasOwnProperty(r)){q.push(r+"="+o[r])}}a.ShowSource.w=window.open("","_blank",q.join(","))}return a.ShowSource.w};a.ShowSource.Text=function(u,t){var q=a.ShowSource.Window(t);u=u.replace(/^\s*/,"").replace(/\s*$/,"");u=u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");if(a.isMobile){q.document.open();q.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>MathJax Equation Source</title></head><body style='font-size:85%'>");q.document.write("<pre>"+u+"</pre>");q.document.write("<hr><input type='button' value='Close' onclick='window.close()' />");q.document.write("</body></html>");q.document.close()}else{q.document.open();q.document.write("<html><head><title>MathJax Equation Source</title></head><body style='font-size:85%'>");q.document.write("<table><tr><td><pre>"+u+"</pre></td></tr></table>");q.document.write("</body></html>");q.document.close();var s=q.document.body.firstChild;var r=(q.outerHeight-q.innerHeight)||30,p=(q.outerWidth-q.innerWidth)||30;p=Math.min(Math.floor(0.5*screen.width),s.offsetWidth+p+25);r=Math.min(Math.floor(0.5*screen.height),s.offsetHeight+r+25);q.resizeTo(p,r);if(t&&t.screenX!=null){var o=Math.max(0,Math.min(t.screenX-Math.floor(p/2),screen.width-p-20)),v=Math.max(0,Math.min(t.screenY-Math.floor(r/2),screen.height-r-20));q.moveTo(o,v)}}delete a.ShowSource.w};a.Scale=function(){var p=b["HTML-CSS"],o=b.NativeMML;var r=(p?p.config.scale:o.config.scale);var q=prompt("Scale all mathematics (compared to surrounding text) by",r+"%");if(q){if(q.match(/^\s*\d+\s*%?\s*$/)){q=parseInt(q);if(q){if(q!==r){if(p){p.config.scale=q}if(o){o.config.scale=q}a.cookie.scale=q;a.saveCookie();c.Reprocess()}}else{alert("The scale should not be zero")}}else{alert("The scale should be a perentage (e.g., 120%)")}}};a.Zoom=function(){if(!MathJax.Extension.MathZoom){i.Require("[MathJax]/extensions/MathZoom.js")}};a.Renderer=function(){var o=c.outputJax["jax/mml"];if(o[0]!==m.settings.renderer){c.Queue(["setRenderer",c,m.settings.renderer,"jax/mml"],["Rerender",c])}};a.Font=function(){var o=b["HTML-CSS"];if(!o){return}document.location.reload()};c.Browser.Select({MSIE:function(o){var p=(document.compatMode==="BackCompat");var q=o.versionAtLeast("8.0")&&document.documentMode>7;a.Augment({margin:20,msieBackgroundBug:(p||!q),msieAboutBug:p});if(document.documentMode>=9){delete m.styles["#MathJax_About"].filter;delete m.styles[".MathJax_Menu"].filter}},Firefox:function(o){a.skipMouseover=o.isMobile&&o.versionAtLeast("6.0");a.skipMousedown=o.isMobile}});a.isMobile=c.Browser.isMobile;a.noContextMenu=c.Browser.noContextMenu;c.Register.StartupHook("End Config",function(){m.settings=c.config.menuSettings;if(typeof(m.settings.showRenderer)!=="undefined"){m.showRenderer=m.settings.showRenderer}if(typeof(m.settings.showFontMenu)!=="undefined"){m.showFontMenu=m.settings.showFontMenu}if(typeof(m.settings.showContext)!=="undefined"){m.showContext=m.settings.showContext}a.getCookie();a.menu=a(k.SUBMENU("Show Math As",k.COMMAND("MathML Code",a.ShowSource,{nativeTouch:true,format:"MathML"}),k.COMMAND("Original Form",a.ShowSource,{nativeTouch:true})),k.RULE(),k.SUBMENU("Math Settings",k.SUBMENU("Zoom Trigger",k.RADIO("Hover","zoom",{action:a.Zoom}),k.RADIO("Click","zoom",{action:a.Zoom}),k.RADIO("Double-Click","zoom",{action:a.Zoom}),k.RADIO("No Zoom","zoom",{value:"None"}),k.RULE(),k.LABEL("Trigger Requires:"),k.CHECKBOX((c.Browser.isMac?"Option":"Alt"),"ALT"),k.CHECKBOX("Command","CMD",{hidden:!c.Browser.isMac}),k.CHECKBOX("Control","CTRL",{hidden:c.Browser.isMac}),k.CHECKBOX("Shift","Shift")),k.SUBMENU("Zoom Factor",k.RADIO("125%","zscale"),k.RADIO("133%","zscale"),k.RADIO("150%","zscale"),k.RADIO("175%","zscale"),k.RADIO("200%","zscale"),k.RADIO("250%","zscale"),k.RADIO("300%","zscale"),k.RADIO("400%","zscale")),k.RULE(),k.SUBMENU("Math Renderer",{hidden:!m.showRenderer},k.RADIO("HTML-CSS","renderer",{action:a.Renderer}),k.RADIO("MathML","renderer",{action:a.Renderer,value:"NativeMML"}),k.RADIO("SVG","renderer",{action:a.Renderer})),k.SUBMENU("Font Preference",{hidden:!m.showFontMenu},k.LABEL("For HTML-CSS:"),k.RADIO("Auto","font",{action:a.Font}),k.RULE(),k.RADIO("TeX (local)","font",{action:a.Font}),k.RADIO("TeX (web)","font",{action:a.Font}),k.RADIO("TeX (image)","font",{action:a.Font}),k.RULE(),k.RADIO("STIX (local)","font",{action:a.Font})),k.SUBMENU("Contextual Menu",{hidden:!m.showContext},k.RADIO("MathJax","context"),k.RADIO("Browser","context")),k.COMMAND("Scale All Math ...",a.Scale),k.RULE().With({hidden:m.showDiscoverable,name:"discover_rule"}),k.CHECKBOX("Highlight on Hover","discoverable",{hidden:m.showDiscoverable})),k.RULE(),k.COMMAND("About MathJax",a.About),k.COMMAND("MathJax Help",a.Help))});a.showRenderer=function(o){a.cookie.showRenderer=m.showRenderer=o;a.saveCookie();a.menu.Find("Math Settings","Math Renderer").hidden=!o};a.showFontMenu=function(o){a.cookie.showFontMenu=m.showFontMenu=o;a.saveCookie();a.menu.Find("Math Settings","Font Preference").hidden=!o};a.showContext=function(o){a.cookie.showContext=m.showContext=o;a.saveCookie();a.menu.Find("Math Settings","Contextual Menu").hidden=!o};a.showDiscoverable=function(o){a.cookie.showContext=m.showContext=o;a.saveCookie();a.menu.Find("Math Settings","Highlight on Hover").hidden=!o;a.menu.Find("Math Settings","discover_rule").hidden=!o};if(a.isMobile){(function(){var p=m.settings;var o=a.menu.Find("Math Settings","Zoom Trigger").menu;o.items[0].disabled=o.items[1].disabled=true;if(p.zoom==="Hover"||p.zoom=="Click"){p.zoom="None"}o.items=o.items.slice(0,4);if(navigator.appVersion.match(/[ (]Android[) ]/)){a.ITEM.SUBMENU.Augment({marker:"\u00BB"})}})()}e.Queue(c.Register.StartupHook("End Config",{}),["getImages",a],["Styles",i,m.styles],["Post",c.Startup.signal,"MathMenu Ready"],["loadComplete",i,"[MathJax]/extensions/MathMenu.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);

