/**
 * Created by jujube on 2015/4/22.
 */
function Viweshow(config){
    /*{
     width:100,
     height:100,
     imgs:[{src:'',link:'',alt:''},{src:'',link:'',alt:''},{src:'',link:'',alt:''}],
     auto:5000,
     transition:'slow'
     }*/
    var width=config.width||100,
        height=config.height||100,
        imgs=config.imgs||[],
        auto=config.auto||5000,
        transition=config.transition||100,

        $btnPrev=$('<b>'),//前页按钮
        $btnNext=$('<b>'),//后页按钮
        $group=$('<div>'),//组
        $mask=$('<div>'),
        index=0;

    function move(b){
        if(b){
            index=index==imgs.length-1?0:index+=1;
        }else{
            index=index==0?imgs.length-1:index-=1;
        }
        //console.log(index);
        $group.animate({
            marginLeft:-1*index*width+'px'
        },transition);
    }

    this.createTo= function (box) {
        $(box).append($mask,$btnPrev,$btnNext);

        var len=imgs.length;
        for(var i=0;i<len;i++){
            var $a=$('<a>'),$img=$('<img>');
            $img.attr({
                src:imgs[i].src,
                alt:imgs[i].alt
            });
            $a.attr({
                href:imgs[i].link,
                index:i
            }).css({
                display:'block',
                float:'left',
                width:width+'px',
                height:height+'px',
                overflow:'hidden'
            });
            $group.append($a.append($img));
        }
        //
        $mask.css({
            width:width+'px',
            overflow:'hidden',
            height:height+'px'
        }).append($group);
        //
        $group.css({
            width:width*len+'px',
            height:height+'px'
        });
        //
        $btnPrev.text('prev').on('click', function () {
            move(false);
        }).addClass('btn-prev');
        //
        $btnNext.text('next').on('click', function () {
            move(true);
        }).addClass('btn-next');
    };
}