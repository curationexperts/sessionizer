!function(e){"use strict";e(["jquery"],function(e){function t(t){return!t.nodeName||-1!==e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])}function n(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}var o=e.scrollTo=function(t,n,o){return e(window).scrollTo(t,n,o)};return o.defaults={axis:"xy",duration:0,limit:!0},e.fn.scrollTo=function(r,i,s){"object"==typeof i&&(s=i,i=0),"function"==typeof s&&(s={onAfter:s}),"max"===r&&(r=9e9),s=e.extend({},o.defaults,s),i=i||s.duration;var a=s.queue&&s.axis.length>1;return a&&(i/=2),s.offset=n(s.offset),s.over=n(s.over),this.each(function(){function f(t){var n=e.extend({},s,{queue:!0,duration:i,complete:t&&function(){t.call(l,m,s)}});d.animate(p,n)}if(null!==r){var u,c=t(this),l=c?this.contentWindow||window:this,d=e(l),m=r,p={};switch(typeof m){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)){m=n(m);break}if(m=c?e(m):e(m,l),!m.length)return;case"object":(m.is||m.style)&&(u=(m=e(m)).offset())}var h=e.isFunction(s.offset)&&s.offset(l,m)||s.offset;e.each(s.axis.split(""),function(e,t){var n="x"===t?"Left":"Top",r=n.toLowerCase(),i="scroll"+n,x=d[i](),v=o.max(l,t);if(u)p[i]=u[r]+(c?0:x-d.offset()[r]),s.margin&&(p[i]-=parseInt(m.css("margin"+n),10)||0,p[i]-=parseInt(m.css("border"+n+"Width"),10)||0),p[i]+=h[r]||0,s.over[r]&&(p[i]+=m["x"===t?"width":"height"]()*s.over[r]);else{var w=m[r];p[i]=w.slice&&"%"===w.slice(-1)?parseFloat(w)/100*v:w}s.limit&&/^\d+$/.test(p[i])&&(p[i]=p[i]<=0?0:Math.min(p[i],v)),!e&&s.axis.length>1&&(x===p[i]?p={}:a&&(f(s.onAfterFirst),p={}))}),f(s.onAfter)}})},o.max=function(n,o){var r="x"===o?"Width":"Height",i="scroll"+r;if(!t(n))return n[i]-e(n)[r.toLowerCase()]();var s="client"+r,a=n.ownerDocument||n.document,f=a.documentElement,u=a.body;return Math.max(f[i],u[i])-Math.min(f[s],u[s])},e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){return e(t.elem)[t.prop]()},set:function(t){var n=this.get(t);if(t.options.interrupt&&t._last&&t._last!==n)return e(t.elem).stop();var o=Math.round(t.now);n!==o&&(e(t.elem)[t.prop](o),t._last=this.get(t))}},o})}("function"==typeof define&&define.amd?define:function(e,t){"use strict";"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)});