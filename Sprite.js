
// canvas tool
function Sprite(id) {

    var me = this,
    cvs = document.getElementById(id);

    if ( ! cvs || ! cvs.tagName || cvs.tagName.toLowerCase() != 'canvas') {
        throw new Error("必須傳入 canvas 的 id!");
    }

    this.canvas = cvs;

    this.canvas.style.cssText = 'position:absolute;top:0;left:0;';
    this.resizeTo(this.canvas.width, this.canvas.height);
}

Sprite.prototype = {
    moveTo: function(x, y){
        this.canvas.style.left = x + 'px';
        this.canvas.style.top = y + 'px';
        return this;
    },
    resizeTo: function(w, h){
        this.canvas.width = parseInt(w, 10);
        this.width = this.canvas.width;
        this.canvas.height = parseInt(h, 10);
        this.height = this.canvas.height;
        this.ctx = this.canvas.getContext('2d');
        return this;
    },
    draw: function(callback){
        callback(this.ctx);
        return this;
    },
    on: function(event_type, callback){
        this.canvas.addEventListener(event_type, callback);
        return this;
    },
    off: function(event_type, callback){
        this.canvas.removeEventListener(event_type, callback);
        return this;
    }
};

