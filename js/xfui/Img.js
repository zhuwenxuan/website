(function(){
    var utils = xf.ui.Utils,
        base = xf.ui.Base;
    var Img = xf.ui.Img = function(opt){
        this.init(opt);
        this.addListener("render",function(){
            var wrap = utils.$(this.id);
            this.imglist = wrap.childNodes;
        });
    };
    Img.prototype = {
        uiName:"showimg",
        imglist:[],
        currentIndex:0,
        getHtmlTpl:function(){
            return '<div id="##" class="%%-wrap">' +
                this.getDataHtml()+
                '</div>';
        },
        getDataHtml:function(){
            var html = [];
            for(var i= 0,d;d=this.data[i++];){
                html.push('<img class="%%-img hide" src="'+ d.bigsrc+'" href="'+ d.link+'" target="_blank">');
            }
            return html.join("");
        },
        pre:function(){
            if(this.currentIndex-1<=this.imglist.length){
                this.currentIndex = this.imglist.length-1;
            }else{
                this.currentIndex -=1;
            }
            this.showCurrent();
        },
        next:function(){
            if((this.currentIndex+1)>this.imglist.length){
                this.currentIndex = 0;
            }else{
                this.currentIndex +=1;
            }
            this.showCurrent();
        },
        showCurrent:function(){
            utils.removeClasses(this.imglist[this.currentIndex],"current");
            utils.addClass(this.imglist[this.currentIndex],"current");
        }
    }
    utils.inherits(Img,base)
})();

