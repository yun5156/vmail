/**
 * Created by jujube on 2015/4/13.
 */
$(function () {

    //回到顶部功能
    var $btn_back=$(".back-top");
    $btn_back.on('click', function () {
        $('html,body').animate({scrollTop:0},500);
    });
    $(window).scroll(function () {
        if($(window).scrollTop()==0){
            $btn_back.css('opacity','0');
        }else{
            $btn_back.css('opacity','1');
        }
    });

    /***************************************/
    var vp1=new Viwepager({
        width:'78px',
        height:'78px',
        imgs:[{src:'images/qrcode_vmall_app01.png',link:'',alt:'扫码下载客户端'},{src:'images/qrcode_vmall_wechat01.jpg',link:'',alt:'微信关注我们'}],
        delay:10000,
        duration:100,
        overFlag:'over-flag-class'/**/
    });
    vp1.createTo($('#mobile-code'));
    /************************************************/
    var focus_pic=new Viwepager({
        width:'980px',
        height:'400px',
        imgs:[{src:'images/focus1.jpg',link:'',alt:''},
            {src:'images/focus2.jpg',link:'',alt:''},
            {src:'images/focus3.jpg',link:'',alt:''},
            {src:'images/focus4.jpg',link:'',alt:''},
            {src:'images/focus5.jpg',link:'',alt:''}],
        delay:5000,
        duration:'slow',
        overFlag:'over-flag-class'
    });
    focus_pic.createTo($('#focus-pic'));
    /************************************************/
    var vs=new Viweshow({
        width: 276,
        height: 310,
        imgs: [
            {
                src: 'images/ads/1.jpg',
                link: '',
                alt: ''
            },
            {
                src: 'images/ads/2.jpg',
                link: '',
                alt: ''
            },
            {
                src: 'images/ads/3.jpg',
                link: '',
                alt: ''
            }
        ],  auto: 5000,
        transition: 'slow'
    });

    vs.createTo($('#viweshow-1'));
    /************************************************/
    //新闻和公告切换
    var $todo=$('#todo-ad-info');
    var todo={
        current_dl:'',
        current_style:'current-item',
        items:$todo.find('dl'),
        activate:'mouseover'
    };
    todo.items.each(function () {
        if($(this).hasClass(todo.current_style)){
            todo.current_dl=$(this);
        }
        $(this).find('dt').on(todo.activate, function (e) {
            var $dl=$(e.currentTarget).parent();
            if(!$dl.hasClass(todo.current_style)){
                todo.current_dl.removeClass(todo.current_style);
                $dl.addClass(todo.current_style);
                todo.current_dl=$dl;
            }
        })
    });


    //vartodo={item1:1,item2:2};

    /*
    var vp3=new Viwepager({
        width:'1200px',
        height:'160px',
        imgs:[
            {src:'images/b1.jpg',link:'',alt:''},
            {src:'images/b2.jpg',link:'',alt:''},
            {src:'images/b3.jpg',link:'',alt:''},
            {src:'images/b4.jpg',link:'',alt:''},
            {src:'images/b5.jpg',link:'',alt:''},
            {src:'images/b6.jpg',link:'',alt:''},
            {src:'images/b7.jpg',link:'',alt:''},
            {src:'images/b8.jpg',link:'',alt:''}
        ],
        delay:5000,
        duration:'slow',
        overFlag:'over-flag-class'
    });

    vp3.createTo($('.cabinet-row-2'));


    */
});