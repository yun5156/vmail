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
});