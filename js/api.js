/**
 * 开发版本的文件导入
 */
(function (){
    var paths  = [
            'core/xf.js',
            'core/Utils.js',
            'core/EventBase.js',
            'core/Base.js',
            'Img.js',
            'ImgHandle.js'
        ],
        baseURL = 'js/xfui/';
    for (var i=0,pi;pi = paths[i++];) {
        document.write('<script type="text/javascript" src="'+ baseURL + pi +'"></script>');
    }
})();
