/**
 * Created by 曹俊杰 on 2018/5/24.
 */

//定义一个图片全部加载完毕触发的函数
    function imageLoad(imgObject,backFn){
        var saveImage = {};
        var count = 0;
        var imageCount = 0;
        for(var k in imgObject){
            imageCount++;
            var image = new Image();

            image.onload = function () {
                count++;
                if(count >= imageCount){
                    backFn(saveImage);
                }
            };
            image.src = imgObject[k];
            saveImage[k] = image;
        }
    }