/**
 * Created by 曹俊杰 on 2018/5/25.
 */

(function (w) {

    function Barrier(ctx,toDownImage,toUpImage,landHeight,minHeight){
        this.ctx = ctx;
        this.toDownImage = toDownImage;
        this.toUpImage = toUpImage;

        Barrier.number++;

        this.x = 300 + this.toDownImage.width*3*(Barrier.number-1);
        this.downY = 0;
        this.upY = 0;

        this.landHeight = landHeight;
        this.minHeight = minHeight;


        this.randomData(100);
    }
    Barrier.number = 0;
    Barrier.prototype = {
        constructor:Barrier,
        //更新x距离
        upDate: function (speed) {
            if(this.x<-this.toDownImage.width){
                this.x += this.toDownImage.width*3*Barrier.number;
                this.randomData(100);
            }
            this.x -= speed;
        },
        //随机产生高度
        randomData: function (space) {
            var maxHeight = this.ctx.canvas.height-this.landHeight - space -50;
            var randomHeight = Math.random()*maxHeight;
            randomHeight = randomHeight<this.minHeight?this.minHeight:randomHeight;

            this.downY = randomHeight - this.toDownImage.height;
            this.upY = randomHeight + space;

        },
        //画出管道
        draw: function () {
            this.ctx.drawImage(this.toDownImage,this.x,this.downY);
            this.ctx.drawImage(this.toUpImage,this.x,this.upY);
            this.drawPath();
        },
        //绘出管道路径
        drawPath: function () {
            this.ctx.rect(this.x,this.downY,this.toDownImage.width,this.toDownImage.height);
            this.ctx.rect(this.x,this.upY,this.toUpImage.width,this.toUpImage.height);
        }
    }


    w.getBarrier = function (ctx,toDownImage,toUpImage,landHeight,minHeight) {
        return new Barrier(ctx,toDownImage,toUpImage,landHeight,minHeight);
    }
}(window));
