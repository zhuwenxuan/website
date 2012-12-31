(function(){
    var uid = 'XFUI',
        number = 1,
        eventbase = xf.EventBase,
        utils = xf.ui.Utils;
    var Base = xf.ui.Base = function(){
    };
    Base.prototype = {
        init:function(opt){
            for(var k in opt){
                this[k] = opt[k];
            }
            this.id = this.uid();
        },
        uid:function(){
            return uid+number++;
        },
        formatHtml:function(tpl){
            var prefix = 'xfui-' + this.uiName;
            return (tpl
                .replace(/##/g, this.id)
                .replace(/%%-/g, this.uiName ? prefix + '-' : '')
                .replace(/%%/g, (this.uiName ? prefix : '') + ' ' + this.className))
        },
        getDom:function(name){
            if (!name) {
                return document.getElementById(this.id);
            } else {
                return document.getElementById(this.id + '_' + name);
            }
        },
        render:function(id){
            utils.$(id).innerHTML = this.formatHtml(this.getHtmlTpl());
            this.fireEvent("render");
        }
    }
    utils.inherits(Base,eventbase)
})();