(function(){(function(){function g(a){return"".trim?a.trim():a.replace(/^\s+/,"").replace(/\s+$/,"")}var b={VERSION:"0.10.2",templates:{},$:"undefined"!==typeof window?window.jQuery||window.Zepto||null:null,addTemplate:function(a,d){if("object"===typeof a)for(var e in a)this.addTemplate(e,a[e]);else b[a]?console.error("Invalid name: "+a+"."):b.templates[a]?console.error('Template "'+a+'  " exists'):(b.templates[a]=d,b[a]=function(c,d){c=c||{};var e=Mustache.to_html(b.templates[a],c,b.templates);return b.$&&
    !d?b.$(g(e)):e})},clearAll:function(){for(var a in b.templates)delete b[a];b.templates={}},refresh:function(){b.clearAll();b.grabTemplates()},grabTemplates:function(){var a,d,e=document.getElementsByTagName("script"),c,f=[];a=0;for(d=e.length;a<d;a++)if((c=e[a])&&c.innerHTML&&c.id&&("text/html"===c.type||"text/x-icanhaz"===c.type))b.addTemplate(c.id,g(c.innerHTML)),f.unshift(c);a=0;for(d=f.length;a<d;a++)f[a].parentNode.removeChild(f[a])}};"undefined"!==typeof exports?("undefined"!==typeof module&&
    module.exports&&(exports=module.exports=b),exports.ich=b):this.ich=b;"undefined"!==typeof document&&(b.$?b.$(function(){b.grabTemplates()}):document.addEventListener("DOMContentLoaded",function(){b.grabTemplates()},!0))})()})();