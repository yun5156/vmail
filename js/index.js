/**
 * Created by jujube on 2015/4/13.
 */
$(function () {
    var vp1=new Viwepager({
        width:'78px',
        height:'78px',
        imgs:[{src:'images/qrcode_vmall_app01.png',link:'',alt:'扫码下载客户端'},{src:'images/qrcode_vmall_wechat01.jpg',link:'',alt:'微信关注我们'}],
        delay:10000,
        duration:100,
        overFlag:'over-flag-class'/**/
    });
    vp1.createTo($('#two-dimension'));

    var vp2=new Viwepager({
        width:'980px',
        height:'400px',
        imgs:[{src:'images/focus1.jpg',link:'',alt:''},{src:'images/focus2.jpg',link:'',alt:''},{src:'images/focus3.jpg',link:'',alt:''}],
        delay:5000,
        duration:'slow',
        overFlag:'over-flag-class'/**/
    });
    vp2.createTo($('#focus-pic'));

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
        overFlag:'over-flag-class'/**/
    });

    vp3.createTo($('.cabinet-row-2'));


    var viweshow1=new Viweshow({
        width:'276px',
        height:'312px',
        imgs:[{src:'images/ads/1.jpg',link:'',alt:''},{src:'images/ads/2.jpg',link:'',alt:''},{src:'images/ads/3.jpg',link:'',alt:''}],
        auto:5000,
        transition:'slow'
    });

    viweshow1.createTo($('#viweshow-1'));
});