/*
* @Author: 曹俊杰
* @Date:   2018-05-26 16:43:52
* @Last Modified by:   曹俊杰
* @Last Modified time: 2018-05-26 17:16:09
*/

(function (w){
	function Over(ctx){
		this.ctx = ctx;
	}
	Over.prototype.draw = function(){
		this.ctx.fillStyle = "rgba(100,100,100,0.5)";
        this.ctx.fillRect(0,0,cvs.width,cvs.height);

        this.ctx.font = "50px 微软雅黑";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = 'red';
        this.ctx.fillText("GAME OVER!!",cvs.width/2,cvs.height/2);
	}

	w.getOver = function(ctx){
		return new Over(ctx);
	}
}(window));