/***
*一个提醒自己喝水走动的谷歌浏览器插件
*
*/
var interval =  document.getElementById('interval');
console.warn('imi toast is runing background ,the toast time interval is 45min ');

var item = window.setInterval("showNotice()",1000*60*45)

function setToast(_that){
  console.error(_that)
  window.clearInterval(item)
  item = window.setInterval("showNotice()",3000*3)
}

function showNotice(msg) {
    //发送通知
    newNotify = function () {
        var notification = new Notification("系统通知:", {
            dir: "auto",
            lang: "hi",
            requireInteraction: true,
            //tag: "testTag",
            icon: "https://raw.githubusercontent.com/Ezoio/imiToast/master/imi_toast/imi.ico",
            body: msg?msg:'道路千万条，身体第一条\r\n 久坐不运动，亲人两行泪。'
        });
        setTimeout(function(){
          notification.close();
        },3000)
    }
    //权限判断
    if (Notification.permission == "granted") {
        newNotify();
    } else {
        //请求权限
        Notification.requestPermission(function (perm) {
            if (perm == "granted") {
                newNotify();
            }
        })
    }
}
