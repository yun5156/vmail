/**
 * Created by jujube on 2015/4/13.
 */
$(function () {
    var info={
        width:'980px',
        height:'400px',
        pics:[{src:'images/focus3.jpg',link:"http://www.baidu.com"},{src:'images/focus1.jpg',link:"http://www.baidu.com"},{src:'images/focus2.jpg',link:"http://www.baidu.com"}]

    }
    var picPlay= new Viwepager(info);
    $('body').append(picPlay.$wrap);
    picPlay.start();
});