/** layui-v2.1.6 MIT License By http://www.layui.com */
 ;layui.define("jquery",function(i){"use strict";var t=layui.$,a=(layui.hint(),layui.device()),l="element",e="layui-this",n="layui-show",s=function(){this.config={}};s.prototype.set=function(i){var a=this;return t.extend(!0,a.config,i),a},s.prototype.on=function(i,t){return layui.onevent.call(this,l,i,t)},s.prototype.tabAdd=function(i,a){var l=".layui-tab-title",e=t(".layui-tab[lay-filter="+i+"]"),n=e.children(l),s=n.children(".layui-tab-bar"),o=e.children(".layui-tab-content"),c='<li lay-id="'+(a.id||"")+'">'+(a.title||"unnaming")+"</li>";return s[0]?s.before(c):n.append(c),o.append('<div class="layui-tab-item">'+(a.content||"")+"</div>"),f.hideTabMore(!0),f.tabAuto(),this},s.prototype.tabDelete=function(i,a){var l=".layui-tab-title",e=t(".layui-tab[lay-filter="+i+"]"),n=e.children(l),s=n.find('>li[lay-id="'+a+'"]');return f.tabDelete(null,s),this},s.prototype.tabChange=function(i,a){var l=".layui-tab-title",e=t(".layui-tab[lay-filter="+i+"]"),n=e.children(l),s=n.find('>li[lay-id="'+a+'"]');return f.tabClick(null,null,s),this},s.prototype.tab=function(i){i=i||{},v.on("click",i.headerElem,function(a){var l=t(this).index();f.tabClick.call(this,a,l,null,i)})},s.prototype.progress=function(i,a){var l="layui-progress",e=t("."+l+"[lay-filter="+i+"]"),n=e.find("."+l+"-bar"),s=n.find("."+l+"-text");return n.css("width",a),s.text(a),this};var o=".layui-nav",c="layui-nav-item",r="layui-nav-bar",u="layui-nav-tree",d="layui-nav-child",h="layui-nav-more",y="layui-anim layui-anim-upbit",f={tabClick:function(i,a,s,o){o=o||{};var c=s||t(this),a=a||c.parent().children("li").index(c),r=o.headerElem?c.parent():c.parents(".layui-tab").eq(0),u=t(o.bodyElem)||r.children(".layui-tab-content").children(".layui-tab-item"),d=c.find("a"),h=r.attr("lay-filter");"javascript:;"!==d.attr("href")&&"_blank"===d.attr("target")||(c.addClass(e).siblings().removeClass(e),u.eq(a).addClass(n).siblings().removeClass(n)),layui.event.call(this,l,"tab("+h+")",{elem:r,index:a})},tabDelete:function(i,a){var n=a||t(this).parent(),s=n.index(),o=n.parents(".layui-tab").eq(0),c=o.children(".layui-tab-content").children(".layui-tab-item"),r=o.attr("lay-filter");n.hasClass(e)&&(n.next()[0]?f.tabClick.call(n.next()[0],null,s+1):n.prev()[0]&&f.tabClick.call(n.prev()[0],null,s-1)),n.remove(),c.eq(s).remove(),setTimeout(function(){f.tabAuto()},50),layui.event.call(this,l,"tabDelete("+r+")",{elem:o,index:s})},tabAuto:function(){var i="layui-tab-more",l="layui-tab-bar",e="layui-tab-close",n=this;t(".layui-tab").each(function(){var s=t(this),o=s.children(".layui-tab-title"),c=(s.children(".layui-tab-content").children(".layui-tab-item"),'lay-stope="tabmore"'),r=t('<span class="layui-unselect layui-tab-bar" '+c+"><i "+c+' class="layui-icon">&#xe61a;</i></span>');if(n===window&&8!=a.ie&&f.hideTabMore(!0),s.attr("lay-allowClose")&&o.find("li").each(function(){var i=t(this);if(!i.find("."+e)[0]){var a=t('<i class="layui-icon layui-unselect '+e+'">&#x1006;</i>');a.on("click",f.tabDelete),i.append(a)}}),o.prop("scrollWidth")>o.outerWidth()+1){if(o.find("."+l)[0])return;o.append(r),s.attr("overflow",""),r.on("click",function(t){o[this.title?"removeClass":"addClass"](i),this.title=this.title?"":"收缩"})}else o.find("."+l).remove(),s.removeAttr("overflow")})},hideTabMore:function(i){var a=t(".layui-tab-title");i!==!0&&"tabmore"===t(i.target).attr("lay-stope")||(a.removeClass("layui-tab-more"),a.find(".layui-tab-bar").attr("title",""))},clickThis:function(){var i=t(this),a=i.parents(o),n=a.attr("lay-filter"),s=i.find("a"),c="string"==typeof i.attr("lay-unselect");i.find("."+d)[0]||("javascript:;"!==s.attr("href")&&"_blank"===s.attr("target")||c||(a.find("."+e).removeClass(e),i.addClass(e)),layui.event.call(this,l,"nav("+n+")",i))},clickChild:function(){var i=t(this),a=i.parents(o),n=a.attr("lay-filter");a.find("."+e).removeClass(e),i.addClass(e),layui.event.call(this,l,"nav("+n+")",i)},showChild:function(){var i=t(this),a=i.parents(o),l=i.parent(),e=i.siblings("."+d);a.hasClass(u)&&(e.removeClass(y),l["none"===e.css("display")?"addClass":"removeClass"](c+"ed"))},collapse:function(){var i=t(this),a=i.find(".layui-colla-icon"),e=i.siblings(".layui-colla-content"),s=i.parents(".layui-collapse").eq(0),o=s.attr("lay-filter"),c="none"===e.css("display");if("string"==typeof s.attr("lay-accordion")){var r=s.children(".layui-colla-item").children("."+n);r.siblings(".layui-colla-title").children(".layui-colla-icon").html("&#xe602;"),r.removeClass(n)}e[c?"addClass":"removeClass"](n),a.html(c?"&#xe61a;":"&#xe602;"),layui.event.call(this,l,"collapse("+o+")",{title:i,content:e,show:c})}};s.prototype.init=function(i,l){var e=function(){return l?'[lay-filter="'+l+'"]':""}(),s={tab:function(){f.tabAuto.call({})},nav:function(){var i=200,l={},s={},p={},v=function(e,o,c){var r=t(this),f=r.find("."+d);o.hasClass(u)?e.css({top:r.position().top,height:r.children("a").height(),opacity:1}):(f.addClass(y),e.css({left:r.position().left+parseFloat(r.css("marginLeft")),top:r.position().top+r.height()-5}),l[c]=setTimeout(function(){e.css({width:r.width(),opacity:1})},a.ie&&a.ie<10?0:i),clearTimeout(p[c]),"block"===f.css("display")&&clearTimeout(s[c]),s[c]=setTimeout(function(){f.addClass(n),r.find("."+h).addClass(h+"d")},300))};t(o+e).each(function(a){var e=t(this),o=t('<span class="'+r+'"></span>'),y=e.find("."+c);e.find("."+r)[0]||(e.append(o),y.on("mouseenter",function(){v.call(this,o,e,a)}).on("mouseleave",function(){e.hasClass(u)||(clearTimeout(s[a]),s[a]=setTimeout(function(){e.find("."+d).removeClass(n),e.find("."+h).removeClass(h+"d")},300))}),e.on("mouseleave",function(){clearTimeout(l[a]),p[a]=setTimeout(function(){e.hasClass(u)?o.css({height:0,top:o.position().top+o.height()/2,opacity:0}):o.css({width:0,left:o.position().left+o.width()/2,opacity:0})},i)})),y.each(function(){var i=t(this),a=i.find("."+d);if(a[0]&&!i.find("."+h)[0]){var l=i.children("a");l.append('<span class="'+h+'"></span>')}i.off("click",f.clickThis).on("click",f.clickThis),i.children("a").off("click",f.showChild).on("click",f.showChild),a.children("dd").off("click",f.clickChild).on("click",f.clickChild)})})},breadcrumb:function(){var i=".layui-breadcrumb";t(i+e).each(function(){var i=t(this),a=i.attr("lay-separator")||">",l=i.find("a");l.find(".layui-box")[0]||(l.each(function(i){i!==l.length-1&&t(this).append('<span class="layui-box">'+a+"</span>")}),i.css("visibility","visible"))})},progress:function(){var i="layui-progress";t("."+i+e).each(function(){var a=t(this),l=a.find(".layui-progress-bar"),e=l.attr("lay-percent");l.css("width",e),a.attr("lay-showPercent")&&setTimeout(function(){var t=Math.round(l.width()/a.width()*100);t>100&&(t=100),l.html('<span class="'+i+'-text">'+t+"%</span>")},350)})},collapse:function(){var i="layui-collapse";t("."+i+e).each(function(){var i=t(this).find(".layui-colla-item");i.each(function(){var i=t(this),a=i.find(".layui-colla-title"),l=i.find(".layui-colla-content"),e="none"===l.css("display");a.find(".layui-colla-icon").remove(),a.append('<i class="layui-icon layui-colla-icon">'+(e?"&#xe602;":"&#xe61a;")+"</i>"),a.off("click",f.collapse).on("click",f.collapse)})})}};return s[i]?s[i]():layui.each(s,function(i,t){t()})},s.prototype.render=s.prototype.init;var p=new s,v=t(document);p.render();var b=".layui-tab-title li";v.on("click",b,f.tabClick),v.on("click",f.hideTabMore),t(window).on("resize",f.tabAuto),i(l,p)});