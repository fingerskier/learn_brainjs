//brain.js https://github.com/BrainJS/brain.js 

window.onload = function(){
    var input = {
        start: function () {
            window.addEventListener('resize', output.start);
            output.canvas.addEventListener('mousemove', input.mousemove);
        },
        oldPosition: [0,0],
        mousemove: function(event) {
            var newPosition = [
                event.clientX/this.offsetWidth, 
                event.clientY/this.offsetHeight
            ];
            var aiPosition = neural.net.run(input.oldPosition);
            output.positionRect('yellow',output.scale(aiPosition));
            output.positionRect('white',newPosition);
            neural.net.train([{input: input.oldPosition, output: newPosition}], neural.opt);
            input.oldPosition = newPosition;
        }
    };
    
    var output = {
        size: 15,
        canvas: document.getElementById('out'),
        start: function () {
            output.context = output.canvas.getContext('2d');
            output.canvas.width = window.innerWidth;
            output.canvas.height = window.innerHeight;
            output.clear();
            output.draw('black');
        },
        draw:  function (color) {
            var w = output.canvas.width,
            h = output.canvas.height;
            output.context.fillStyle = color;
            output.context.fillRect(0,0,w,h);
            
        },
        rect: function (color,x,y) {
            var n = output.size;
            output.context.fillStyle = color;
            output.context.fillRect(x,y,n,n);
        },
        positionRect: function (color,position,scale) {
            scale = scale || 1;
            output.draw('rgba(0,0,0,0.02)');
            var x = (position[0]*output.canvas.width),
            y = (position[1]*output.canvas.height);
            output.rect(color,x*scale,y*scale);
        },
        scale: function (p) {
            //this should not be here, but makes it look better!
            var s = 0.00015;
            var sx = output.canvas.width*s;
            var sy = output.canvas.height*s;
            return [(p[0]-sx)*(1+(sx*2)),(p[1]-sy)*(1+(sy*2))];
        },
        clear: function () {
            var w = output.canvas.width, 
            h = output.canvas.height;
            output.context.clearRect(0,0,w,h);
        }
    };
    
    var neural = {
        net: new brain.recurrent.LSTM(),
        start: function () {
            neural.net.train([{
                //input: [X,Y,oldX,oldY,distance,angle]
                input: [0,0],
                //output:[X,Y]
                output: [0,0]
            }], neural.opt);
        },
        opt: {
            errorThresh: 0.1,
            learningRate: 0.5,
            interations: 1
        }
    };
    
    neural.start();
    output.start();
    input.start();
}
