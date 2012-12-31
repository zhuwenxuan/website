(function(){
    xf.ui.Utils = {
        $:function(id){
            return document.getElementById(id);
        },
        createNode:function(tag){
            return document.createElement(tag);
        },
        inherits:function (subClass, superClass) {
            var oldP = subClass.prototype,
                newP = this.makeInstance(superClass.prototype);
            this.extend(newP, oldP, true);
            subClass.prototype = newP;
            return (newP.constructor = subClass);
        },
        makeInstance:function (obj) {
            var noop = new Function();
            noop.prototype = obj;
            obj = new noop;
            noop.prototype = null;
            return obj;
        },
        extend:function (t, s, b) {
            if (s) {
                for (var k in s) {
                    if (!b || !t.hasOwnProperty(k)) {
                        t[k] = s[k];
                    }
                }
            }
            return t;
        },
        trim:function (str) {
            return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
        },
        addClass:function (elm, classNames) {
            if(!elm)return;
            classNames = this.trim(classNames).replace(/[ ]{2,}/g,' ').split(' ');
            for(var i = 0,ci,cls = elm.className;ci=classNames[i++];){
                if(!new RegExp('\\b' + ci + '\\b').test(cls)){
                    elm.className += ' ' + ci;
                }
            }
        },
        isArray : function (source) {
            return '[object Array]' == Object.prototype.toString.call(source);
        },
        removeClasses:function (elm, classNames) {
            classNames = this.isArray(classNames) ? classNames :
                this.trim(classNames).replace(/[ ]{2,}/g,' ').split(' ');
            for(var i = 0,ci,cls = elm.className;ci=classNames[i++];){
                cls = cls.replace(new RegExp('\\b' + ci + '\\b'),'')
            }
            cls = this.trim(cls).replace(/[ ]{2,}/g,' ');
            if(cls!=undefined){
                elm.className = cls;
            }else{
                this.removeAttributes(elm,['class']);
            }
        },
        removeAttributes:function (node, attrNames) {
            for (var i = 0, ci; ci = attrNames[i++];) {
                ci = attrFix[ci] || ci;
                switch (ci) {
                    case 'className':
                        node[ci] = '';
                        break;
                    case 'style':
                        node.style.cssText = '';
                        !browser.ie && node.removeAttributeNode(node.getAttributeNode('style'))
                }
                node.removeAttribute(ci);
            }
        }
    };
})();