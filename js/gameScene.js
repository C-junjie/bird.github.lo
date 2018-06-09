/**
 * Created by 曹俊杰 on 2018/5/26.
 */

(function (w) {

    function GetScene(ctx,saveImage){
        this.ctx = ctx;
        this.saveImage = saveImage;
        //总的对象
        this.tatolObject = [];
        //监听者列表
        this.listenerArr = [];

        this._createObject();
    }
    GetScene.prototype = {
        constructor:GetScene,

        //创建出场景所需的所有对象
        _createObject: function () {
            //创建2个背景图
            this.tatolObject.push(getBackground(this.ctx,this.saveImage.sky,0,0));
            this.tatolObject.push(getBackground(this.ctx,this.saveImage.sky,this.saveImage.sky.width,0));
            //创建6个障碍物
            for (var i = 0; i < 6; i++) {
                this.tatolObject.push(getBarrier(this.ctx,this.saveImage.pipeDown,this.saveImage.pipeUp,this.saveImage.land.height,100));
            }
            //创建4个大地
            for (var i = 0; i < 4; i++) {
                this.tatolObject.push(getLand(this.ctx,this.saveImage.land));
            }
            //创建一个小鸟
            this.tatolObject.push(getBird(this.ctx,this.saveImage.bird,3,20,100,2,0.1));
            
        },
        //添加监听者
        addListener:function (fn){
            this.listenerArr.push(fn);
        },

        //执行监听函数
        executeListener:function(){
            this.listenerArr.forEach(function(fn){
                fn();
            });
        },
        //画出场景
        draw: function () {

            var bird = getBird();
            var birdX = bird.x + bird.width/2;
            var birdY = bird.y + bird.height/2;

            if(ctx.isPointInPath(birdX,birdY)
               || birdY<0
               || birdY>(this.ctx.canvas.height-this.saveImage.land.height)){

                this.executeListener();
                return;
            }
            ctx.beginPath();
            this.tatolObject.forEach(function (object) {
                object.draw();
                object.upDate(3);
            })
        }
    
    };



    w.getGameScene = function (ctx,saveImage) {
        return new GetScene(ctx,saveImage);
    }
}(window));


