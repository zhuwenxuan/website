(function(){
    var utils = xf.ui.Utils,
        base = xf.ui.Base,
        img = xf.ui.Img,
        ImgHandle = xf.ui.ImgHandle = function(opt){
            this.init(opt);
            this.initImgHandle();
        };
        ImgHandle.prototype = {
            uiName:"showimghandle",
            imghandlelist:[],
            currentIndex:0,
            initImgHandle:function(){
                this.showimg = new img({
                    data:this.data
                });
                this.showimg.render(this.imgid);
                this.showimg.showCurrent();
            },
            getHtmlTpl:function(){
                return '<div id="##" class="%%-wrap">'+
                    '<div id="##-imghandle" class="%%-imghandle-wrap">' +
                    this.getHandleHtml() +
                    '</div>'+
                    '</div>';
            },
            getHandleHtml:function(){
                var html = [];
                for(var i= 0,d;d=this.data[i++];){
                    html.push('<div class="%%-handle" '+(i==1?'current':"")+'>' +
                        '<img class="%%-img" src="'+ d.src+'" alt="'+d.desc+'"><strong>'+d.desc+'</strong>'+
                    '</div> ')
                }
                return html.join("");
            }
        }
    utils.inherits(ImgHandle,img);
})()