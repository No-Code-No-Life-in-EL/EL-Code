// var index=0;
//     var imgs=["../images/fengdian02.jfif","../images/danche.jfif","../images/landscape.jfif","../images/Low-Carbon-City.jpg"]; /*图片的地址 */
//     function qiehuan(){
//         document.getElementById("img").src=imgs[index];
//         index++;
//         if(index > 3){
//             index=0;    //只有四张图片，当为3的时候重置为0
//         }
//     }
//   setInterval("qiehuan()",1000);  //每3秒重新运行函数qiehuan()


// //图片点击切换部分：
//         window.onload = function () {
//         //获取四张图片id
//         var c1 = document.getElementById("clk1");
//         var c2 = document.getElementById("clk2");
//         var c3 = document.getElementById("clk3");
//         var c4 = document.getElementById("clk4");

//         //点击相应按钮，则显示相应图片
//         c1.οnclick=function() {
//             document.getElementById("img").src=imgs[0];
//         }
//         c2.οnclick=function() {
//             document.getElementById("img").src=imgs[1];
//         }
//         c3.οnclick=function() {
//             document.getElementById("img").src=imgs[2];
//         }
//         c4.οnclick=function() {
//             document.getElementById("img").src=imgs[3];
//         }
//     }