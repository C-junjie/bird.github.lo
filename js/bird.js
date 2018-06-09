/**
 * Created by 曹俊杰 on 2018/5/25.
 */

(function (w) {
    function Bird(ctx,img,rowCount,x,y,downSpeed,addSpeed){
        this.ctx = ctx;
        this.img = img;

        this.rowCount = rowCount;

        this.width = this.img.width/this.rowCount;
        this.height = this.img.height;

        this.current = 0;
        this.x = x;
        this.y = y;

        this.downSpeed = downSpeed;
        this.addSpeed = addSpeed;

        this.moveUp(-3);
    }

    Bird.prototype = {

        constructor:Bird,
        //触发小鸟上升事件
        moveUp: function (distance) {
            var selfThis = this;
            document.addEventListener("click", function (e) {
                    selfThis.downSpeed = distance;
            })
        },
        //更新数据
        upDate: function () {
            this.y += this.downSpeed;
            this.current = ++this.current > 2? 0:this.current;
            this.downSpeed += this.addSpeed;//逐渐增加下落速度
        },
        //画出当前数据状态的鸟
        draw: function () {
            //最大角度
            var maxRotate = Math.PI/180*60;
            var everyRotate = Math.PI/180*5;

            var tatolRotate = everyRotate*this.downSpeed;
            tatolRotate = tatolRotate>maxRotate?maxRotate:tatolRotate;

            this.ctx.save();

            this.ctx.translate(this.x+this.width/2,this.y+this.height/2);
            this.ctx.rotate(tatolRotate);

            this.ctx.drawImage(this.img,this.width*this.current,0,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height);

            this.ctx.restore();
        }

    };

    //存储创建出来的鸟对象
    var bird = null;
    w.getBird = function (ctx,img,rowCount,x,y,downSpeed,addSpeed) {
        // 如果已经创建过了，就不再创建直接返回bird;
        if(!bird){
            bird = new Bird(ctx,img,rowCount,x,y,downSpeed,addSpeed);
        }
        return bird;
    }
}(window));
