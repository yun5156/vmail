/**
 * Created by jujube on 2015/4/13.
 */
$(function () {
    var vp=new Viwepager({
        width:'78px',
        height:'78px',
        imgs:[{src:'images/qrcode_vmall_app01.png',link:'',alt:'1234566'},{src:'images/qrcode_vmall_wechat01.jpg',link:'',alt:'dasdfasdfaf'}],
        delay:10000,
        duration:100,
        overFlag:'over-flag-class'/**/
    });
    vp.createTo($('#two-dimension'));
});