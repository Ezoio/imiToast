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
            icon: "https://www.easyicon.net/api/resizeApi.php?id=1168361&size=128",
            body: msg?msg:'道路千万条，身体第一条\r\n 久坐不运动，亲人两行泪。'
        });
        setTimeout(function(){
          notification.close();
        },3000)
        // notification.onclick = function (event) {
        //     //回到发送此通知的页面
        //     window.focus();
        //     //回来后要做什么
        //     console.log("I'm back");
        // }
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
