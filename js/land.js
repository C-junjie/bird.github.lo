/**
 * Created by 曹俊杰 on 2018/5/25.
 */
(function (w) {
    function Land(ctx,img){
        this.ctx = ctx;
        this.img = img;

        Land.number++;
        this.x = this.img.width*(Land.number-1);

    }
    Land.number = 0;
    Land.prototype = {
        constructor : Land,

        //更新大地数据
        upDate: function (speed){
            this.x = this.x < -this.img.width? this.x + this.img.width*Land.number:this.x;
            this.x -= speed;
        },
        //画出大地
        draw:function(){
            this.ctx.drawImage(this.img,this.x,this.ctx.canvas.height - this.img.height);
        }
    }

    w.getLand = function (ctx,img) {
        return new Land(ctx,img);
    }
}(window));

