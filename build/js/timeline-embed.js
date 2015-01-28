function getEmbedScriptPath(e){for(var t=document.getElementsByTagName("script"),i="",n="",o=0;o<t.length;o++)t[o].src.match(e)&&(i=t[o].src);return""!=i&&(n="/"),i.split("?")[0].split("/").slice(0,-1).join("/")+n}function createStoryJS(e,t){function i(){LoadLib.js(b.js,n)}function n(){y.js=!0,"en"!=b.lang?LoadLib.js(j.locale,o):y.language=!0,c()}function o(){y.language=!0,c()}function a(){y.css=!0,c()}function s(){y.font.css=!0,c()}function l(){y.font.js=!0,c()}function c(){y.checks>40||(y.checks++,y.js&&y.css&&y.font.css&&y.font.js&&y.language?y.finished||(y.finished=!0,g()):y.timeout=setTimeout("onloaded_check_again();",250))}function r(){var e="storyjs-embed";f=document.createElement("div"),h=document.getElementById(""!=b.embed_id?b.embed_id:"timeline-embed"),h.appendChild(f),f.setAttribute("id",b.id),b.width.toString().match("%")?h.style.width=b.width.split("%")[0]+"%":(b.width=b.width-2,h.style.width=b.width+"px"),b.height.toString().match("%")?(h.style.height=b.height,e+=" full-embed",h.style.height=b.height.split("%")[0]+"%"):b.width.toString().match("%")?(e+=" full-embed",b.height=b.height-16,h.style.height=b.height+"px"):(e+=" sized-embed",b.height=b.height-16,h.style.height=b.height+"px"),h.setAttribute("class",e),h.setAttribute("className",e),f.style.position="relative"}function g(){VCO.debug=b.debug;var e=VCO.ConfigFactory.fromGoogle(b.source);storyjs_embed=new VCO.Timeline("timeline-embed",new VCO.TimelineConfig(e),b)}var f,h,u,m=!1,d="2.24",p="1.7.1",y={timeout:"",checks:0,finished:!1,js:!1,css:!1,jquery:!1,has_jquery:!1,language:!1,font:{css:!1,js:!1}},j={base:embed_path,css:embed_path+"css/",js:embed_path+"js/",locale:embed_path+"js/locale/",jquery:"//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",font:{google:!1,css:embed_path+"css/fonts/",js:"//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"}},b={version:d,debug:!1,type:"timeline",id:"storyjs",embed_id:"timeline-embed",embed:!0,width:"100%",height:"100%",source:"https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadFYzRjJPUGktY0NkWXFUWkVIZDNGRHc&output=html",lang:"en",font:"default",css:j.css+"timeline.css?"+d,js:"",api_keys:{google:"",flickr:"",twitter:""},gmap_key:""},S=[{name:"Merriweather-NewsCycle",google:["News+Cycle:400,700:latin","Merriweather:400,700,900:latin"]},{name:"NewsCycle-Merriweather",google:["News+Cycle:400,700:latin","Merriweather:300,400,700:latin"]},{name:"PoiretOne-Molengo",google:["Poiret+One::latin","Molengo::latin"]},{name:"Arvo-PTSans",google:["Arvo:400,700,400italic:latin","PT+Sans:400,700,400italic:latin"]},{name:"PTSerif-PTSans",google:["PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"]},{name:"PT",google:["PT+Sans+Narrow:400,700:latin","PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"]},{name:"DroidSerif-DroidSans",google:["Droid+Sans:400,700:latin","Droid+Serif:400,700,400italic:latin"]},{name:"Lekton-Molengo",google:["Lekton:400,700,400italic:latin","Molengo::latin"]},{name:"NixieOne-Ledger",google:["Nixie+One::latin","Ledger::latin"]},{name:"AbrilFatface-Average",google:["Average::latin","Abril+Fatface::latin"]},{name:"PlayfairDisplay-Muli",google:["Playfair+Display:400,400italic:latin","Muli:300,400,300italic,400italic:latin"]},{name:"Rancho-Gudea",google:["Rancho::latin","Gudea:400,700,400italic:latin"]},{name:"Bevan-PotanoSans",google:["Bevan::latin","Pontano+Sans::latin"]},{name:"BreeSerif-OpenSans",google:["Bree+Serif::latin","Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800:latin"]},{name:"SansitaOne-Kameron",google:["Sansita+One::latin","Kameron:400,700:latin"]},{name:"Lora-Istok",google:["Lora:400,700,400italic,700italic:latin","Istok+Web:400,700,400italic,700italic:latin"]},{name:"Pacifico-Arimo",google:["Pacifico::latin","Arimo:400,700,400italic,700italic:latin"]}];if("object"==typeof e)for(u in e)Object.prototype.hasOwnProperty.call(e,u)&&(b[u]=e[u]);if("undefined"!=typeof t&&(b.source=t),"object"==typeof url_config&&(m=!0,b.source.match("docs.google.com")||b.source.match("json")||b.source.match("storify")||(b.source="https://docs.google.com/spreadsheet/pub?key="+b.source+"&output=html")),b.js.match("locale")&&(b.lang=b.js.split("locale/")[1].replace(".js",""),b.js=j.js+"timeline-min.js?"+d),b.js.match("/")||(b.css=j.css+b.type+".css?"+d,b.js=j.js+b.type,b.js+=b.debug?".js?"+d:"-min.js?"+d,b.id="storyjs-"+b.type),j.locale=b.lang.match("/")?b.lang:j.locale+b.lang+".js?"+d,r(),LoadLib.css(b.css,a),"default"==b.font)y.font.js=!0,y.font.css=!0;else{var _;b.font.match("/")?(_=b.font.split(".css")[0].split("/"),j.font.name=_[_.length-1],j.font.css=b.font):(j.font.name=b.font,j.font.css=j.font.css+"font."+b.font.toLowerCase()+".css?"+d),LoadLib.css(j.font.css,s);for(var k=0;k<S.length;k++)j.font.name==S[k].name&&(j.font.google=!0,WebFontConfig={google:{families:S[k].google}});j.font.google?LoadLib.js(j.font.js,l):y.font.js=!0}try{if(y.has_jquery=jQuery,y.has_jquery=!0,y.has_jquery){var v=jQuery.fn.jquery.split("."),w=p.split(".");for(y.jquery=!0,k=0;2>k;k++){var L=v[k],P=parseFloat(w[k]);if(L!=P){y.jquery=L>P;break}}}}catch(T){y.jquery=!1}y.jquery?i():LoadLib.js(j.jquery,i),this.onloaded_check_again=function(){c()}}LazyLoad=function(e){function t(t,i){var n,o=e.createElement(t);for(n in i)i.hasOwnProperty(n)&&o.setAttribute(n,i[n]);return o}function i(e){var t,i,n=r[e];n&&(t=n.callback,i=n.urls,i.shift(),g=0,i.length||(t&&t.call(n.context,n.obj),r[e]=null,f[e].length&&o(e)))}function n(){var t=navigator.userAgent;l={async:e.createElement("script").async===!0},(l.webkit=/AppleWebKit\//.test(t))||(l.ie=/MSIE/.test(t))||(l.opera=/Opera/.test(t))||(l.gecko=/Gecko\//.test(t))||(l.unknown=!0)}function o(o,g,h,u,m){var d,p,y,j,b,S,_=function(){i(o)},k="css"===o,v=[];if(l||n(),g)if(g="string"==typeof g?[g]:g.concat(),k||l.async||l.gecko||l.opera)f[o].push({urls:g,callback:h,obj:u,context:m});else for(d=0,p=g.length;p>d;++d)f[o].push({urls:[g[d]],callback:d===p-1?h:null,obj:u,context:m});if(!r[o]&&(j=r[o]=f[o].shift())){for(c||(c=e.head||e.getElementsByTagName("head")[0]),b=j.urls,d=0,p=b.length;p>d;++d)S=b[d],k?y=l.gecko?t("style"):t("link",{href:S,rel:"stylesheet"}):(y=t("script",{src:S}),y.async=!1),y.className="lazyload",y.setAttribute("charset","utf-8"),l.ie&&!k?y.onreadystatechange=function(){/loaded|complete/.test(y.readyState)&&(y.onreadystatechange=null,_())}:k&&(l.gecko||l.webkit)?l.webkit?(j.urls[d]=y.href,s()):(y.innerHTML='@import "'+S+'";',a(y)):y.onload=y.onerror=_,v.push(y);for(d=0,p=v.length;p>d;++d)c.appendChild(v[d])}}function a(e){var t;try{t=!!e.sheet.cssRules}catch(n){return g+=1,void(200>g?setTimeout(function(){a(e)},50):t&&i("css"))}i("css")}function s(){var e,t=r.css;if(t){for(e=h.length;--e>=0;)if(h[e].href===t.urls[0]){i("css");break}g+=1,t&&(200>g?setTimeout(s,50):i("css"))}}var l,c,r={},g=0,f={css:[],js:[]},h=e.styleSheets;return{css:function(e,t,i,n){o("css",e,t,i,n)},js:function(e,t,i,n){o("js",e,t,i,n)}}}(this.document),LoadLib=function(){function e(e){var i=0,n=!1;for(i=0;i<t.length;i++)t[i]==e&&(n=!0);return n?!0:(t.push(e),!1)}var t=[];return{css:function(t,i,n,o){e(t)||LazyLoad.css(t,i,n,o)},js:function(t,i,n,o){e(t)||LazyLoad.js(t,i,n,o)}}}(this.document);var WebFontConfig;if("undefined"==typeof embed_path)var _tmp_script_path=getEmbedScriptPath("timeline-embed.js"),embed_path=_tmp_script_path.substr(0,_tmp_script_path.lastIndexOf("js/"));!function(){"object"==typeof url_config?createStoryJS(url_config):"object"==typeof timeline_config?createStoryJS(timeline_config):"object"==typeof storyjs_config?createStoryJS(storyjs_config):"object"==typeof config&&createStoryJS(config)}();