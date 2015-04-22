/**
 * Created by jujube on 2015/4/22.
 */
function Viweshow(config){
    /*{
     width:'100px',
     height:'100px',
     imgs:[{src:'',link:'',alt:''},{src:'',link:'',alt:''},{src:'',link:'',alt:''}],
     auto:5000,
     transition:'slow'
     }*/

    var width=config.width||'100px',
        height=config.height||'100px',
        imgs=config.imgs||[],
        auto=config.auto||5000,
        transition=config.transition||100;

    var _this=this;
    var $wrap=$('<div>');//包装
    var $btnPrev=$('<div>prev</div>');
    var $btnNext=$('<div>next</div>');
    var $mask=$('<div>');
    var items=[];

    this.createTo= function ($box) {
        for(var i=0;i<imgs.length;i++){
            var $img=$('<img>');
            $img.attr({
                src:imgs[i].src,
                alt:imgs[i].alt
            });

            var $a=$("<a>");
            $a.attr({
                href:imgs[i].link,
                index:i
            })
                .css({
                    display:'block',
                    width:width,
                    height:height,
                    position: 'absolute',
                    left:width
                })
                .append($img);
            items.push($a);
            $mask.append($a);

        }

        $wrap.append($mask,$btnNext,$btnPrev);

        $mask.css({
            overflow:'hidden',
            position: 'relative',
            height:height,
            width:width
        });


        $btnPrev.text('prev')
            .attr({
                class:'btn-prev'
            })
            .on('click', function () {
                change(false);
            });
        $btnNext.text('next')
            .attr({
                class:'btn-next'
            })
            .on('click',function(){
                change(true);
            });

        $wrap.appendTo($box);
    };



    var $current=items[0];

    var animateComplete= function () {
        $btnPrev.on('click', function () {
            change(false);
        });
        $btnNext.on('click', function () {
            change(true);
        })
    };
    var change=function(b){

        $btnPrev.off('click');
        $btnNext.off('click');

        var index;
        var len=items.length;
        for(var i=0;i++;i<len){
            if($current==items[i]){

                if(b&&i+1>len-1){
                    index=0;
                }else if(!b&&i-1<0){
                    index=len-1;
                }else{
                    index=b?i+1:i-1;
                }
                break;
            }
        }

        var $neighbor= items[index];

        if(b){

            $current.css({
                left:'0px'
            })
                .animate({
                left:width
            },transition);

            $neighbor.css({
                left:width * -1
            })
                .animate({
                    left:'0px'
                },transition, function () {
                    $current=$(this);
                    animateComplete();
                });

        }else{
            $current.css({
                left:'0px'
            })
                .animate({
                    left:-1 * width
                },transition);

            $neighbor.css({
                left:width
            })
                .animate({
                    left:'0px'
                },transition, function () {
                    $current=$(this);
                    animateComplete();
                });
        }

    }
}