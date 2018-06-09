/**
 * Created by 曹俊杰 on 2018/5/24.
 */

//背景构造函数

(function (w) {

    function BackgroundImage(ctx,img,x,y){
        this.ctx = ctx;
        this.img = img;

        this.x = x;
        this.y = y;

    }
    BackgroundImage.prototype = {
        constructor:BackgroundImage,

        //背景移动数据更新
        upDate: function (speed) {
            this.x = this.x < -this.img.width?this.x + this.img.width*2:this.x;
            this.x -= speed;
        },
        //画出背景
        draw: function () {
            this.ctx.drawImage(this.img,this.x,this.y,this.img.width,this.img.height);
        }
    };



    w.getBackground = function (ctx,img,x,y) {
        return new BackgroundImage(ctx,img,x,y);
    }

}(window));
