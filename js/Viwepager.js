function Viwepager(config) {

	/*{
		width:'100px',
		height:'100px',
		imgs:[{src:'',link:'',alt:''},{src:'',link:'',alt:''},{src:'',link:'',alt:''}],
		delay:3000,
        action:'mouseover',
        duration:'slow',
        currentFlagClass:'over-flag-class'
	}*/

	var width=config.width||'100px',
		height=config.height||'100px',
		imgs=config.imgs||[],
		delay=config.delay||3000,
        action=config.action||'mouseover',
        duration=config.duration||'slow',
        overFlag=config.overFlag||null;

    var $items=$('<div>');
    $items.attr('class','Viwepager-items');
    var $flags=$('<div>');
    $flags.attr('class','Viwepager-flags');
    var $text=$('<p>');

	this.createTo=function (box) {
        $items.css({
            width:width,
            height:height,
            position:'relative',
            overflow: 'hidden'
        });

		for(i in imgs){

			var $img=$('<img>');
            $img.css({
                width:width,
                height:height,
                position:'absolute'
            })
                .attr({
                    src:imgs[i].src,
                    alt:imgs[i].alt,
                    index: i.toString()
                })
                .appendTo($items);

            var $flag=$('<span>');
            $flag.html(" "+i+" ")
                .attr({
                    index: i.toString()
                })
                .on(action, function () {
                    change();
                })
                .appendTo($flags);
		}
		$items.appendTo(box);
        $flags.appendTo(box);
        $text.appendTo(box);

        change();
	};

	var timerId=null;

	this.play=function () {
		if (!timerId) timerId=setInterval(change, delay);	
	};
	this.pause=function () {
		clearInterval(timerId);
		timerId=null;
	};
	var change=function (nth) {
        var $currentImg;
        if(nth){
            console.log(nth,5555555);
            $currentImg=$items.find("[index="+nth+"]");
        }else{
            $currentImg=$items.find(':first');
        }
        $currentImg.css({
            filter:'alpha(opacity=0)',
            opacity:'0'

        })
            .animate({
                opacity: '1'},
            duration)
            .appendTo($items);

        if(overFlag){
            $flags.children().each(function (i) {
                $flags.children().eq(i).removeClass(overFlag);
            });
            $flags.children("[index="+$currentImg.attr('index')+"]").addClass(overFlag);

        }

        $text.html($currentImg.attr('alt'));
	};

	this.play();
}