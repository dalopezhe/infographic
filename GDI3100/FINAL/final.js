(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#03040A").s().p("AAGANQgEAAgFgEIgKgHIAIgIQAFgFADgBQAGgCACAEIADAKIgBAJQgBAFgEAAIgCgBg");
	this.shape.setTransform(-47.5386,-170.2886,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPABQAIgUACgKIAVgCQADAQgJARIgRAeQgMgNAEgSg");
	this.shape_1.setTransform(-56.1043,-152.2685,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED9B38").s().p("AgYAEQgDgXAcgFQANgCAFAGQAEAFABANQACAMgCAFQgDAJgNABIgGAAQgXAAgDgVg");
	this.shape_2.setTransform(-47.5707,-170.2892,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B3CAA").s().p("AAwDzQgVgZgOgFQAPhOABgKQADgygcgkQgGgJACgFQAeg9ghhGQgwhLgPgoQgDgJgIgNIgMgVQAHgEAfAPQAXAMAMgdQAaAcAGAYQgFAjAFA1IAIBZQAAASAZAeQAWAdgFAXQgTAZAEAiIANA7IAaBeQgVgEgVgYg");
	this.shape_3.setTransform(15.514,-68.4153,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAOIgCgdQAFAAAEgCIAWAaQgDADgFAAQgGAGgFAAQgFAAgFgEg");
	this.shape_4.setTransform(-55.3123,-157.1176,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#295FB9").s().p("AArDKQgSAAgIgDQgOgFgEgOIgag/QglgugOhEQgFgVgKhmQgDgYATgQQAgASAIgGQAJgGAKgwQAcAtAMAMQAaAbAlABQAJA1AABHQABAqgCBUIgOApQgJAdgZAAIgCgBg");
	this.shape_5.setTransform(24.8799,-74.5085,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED9B38").s().p("AhJDjIgbgWQgWgQgFgGQgNgOgKACQgJACgJAPQgOAZgOgEQgLgEgMgXIg9huQgCgJgDgEQgFgIgMAJQgdAVgSgKQgQgIgIgkIgHgRQgFgKACgJQAPAJANgDQALgEALgPQAegnAoAVQAbAPALgdQAMgeAZgHQATgFAiAIQAdAHALgKQAMgKgDggQgJgjgCgRQgFgfAXgMQAVgLAXAUQANALAWAbQAbAZAZADQAaADAggSQAagPAcAFQAbADAZAUIAoAfQAYAOAQgKQAdgRgKhLIAAgPQAWAVALAkQAGAVAIAqQAPBIAFAnQAHA+gJA0QgaAHgagOQgbgNgQgcQgCgEgDgMQgCgLgFgFQgBgFgBAFQgBAEAEgDQAMAXgSAWQgMAQgPgDQgMgCgQgNQgLgOgFgIQgHgNgBgNQgTAUgWgFQgNgDgZgSQgGgBgGgMQgGgLgKABQgGAIAHAcQAFAWgQAGQg2ARg3g8QgDAUAMAfQALAhgBAQQgBAGADAOQACANgBAHQgEAggBAFQgGAUgPAHQgHADgGAAQgJAAgKgGg");
	this.shape_6.setTransform(-4.6472,-101.3322,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#03040A").s().p("Ag8AUQABgQAGgRIANgfQAFgFAIADIBYA9QgRAggmAAQg8AAgCABg");
	this.shape_7.setTransform(-50.8138,-150.7656,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C9AA83").s().p("AglAjQgig5ADhNQAIgGAAgJIgBgSQBOAfAqBDQAKALAAAPQgBAKgDAWQgCAVAEAOQAEAPgJALIADAwQhFgqghg4g");
	this.shape_8.setTransform(-62.8201,-155.2384,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgWBkQgcgXgPgLQgLgJgEgFQgIgJAEgMIgDghQgOh/B/AKQAcACAUAcQATAcgEAjQgFAsgLAhQgOAogZAdIgDAAIgDABQgZgCgZgTg");
	this.shape_9.setTransform(-47.5636,-162.2475,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B3CAA").s().p("ABoE8IgTgYQgOgjgIgRQgPgdgoAIQgJADgIgSQgDgIgGgYIgXhTQgMgvgDgkQgFhEgYhYIguiYQgCgEgBgPICmCOQAGA9ASBQIAiCLQASBJAbCSQgHACgGAAQgKAAgIgGg");
	this.shape_10.setTransform(17.6294,21.1668,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#295FB9").s().p("AC2D9QgMgLgHABQgHABgPAMQgYAUgggFQgdgDgZgVQgjgdgbgNQgkgPgmABQgXgMgVgZIgkguQgOgbgIgNQgQgVgbABQgHAAgKgPQgIgMgGgPQgwh7gGilIAHgHIAmA6QAMAOATAkQAUAaAmgQQAIgDAJAJQADACAKAPQANAVAWAsQATAiAGAFQARANAegWQANgKAQAKQAJAGASAPQAIAEAPAOQAOAKAOgHQAQgHAEgUQABgGgBgdQAAgdgQg6QgHgbAOgKQAIgEAIAFIAPAKQApAWAIAAQAYABALgvQAEgUAQALQAIAGAQASQAvBFArBhQAPAhADAWQAFAfgNAcQgFAMAFAPQACAIAJAQQAfBNgwBHQgTAFgRAAQgvAAgqgkg");
	this.shape_11.setTransform(-13.8947,-77.2183,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#090B7B").s().p("ACbEcQgbgIg/gNQgwgWgrgnQgjgggogwIgCgCQgxgvgfgkQgqgugbguQgMgdghgoQgogvgKgSIgVgcQgMgSgEgPQA3gXA3AtQApAgAaAHQAnALAlgdQAPgLAWASQAaAVAhAJQAdAHAlAAQAtARAQAuIgVhHQgNgrgDgeQgCgbACgJQADgVAPgMQAQAAAHANQAFAHAFAQQAJATAHAGQAKALAQAAQAOAAAJgLQAEgFAIgTIAGgMQAFgHAIABIALBVQAGAyAPAgIAJBUQAFAxACAiQABASAMAQQAHAKAQAQIAzA+QAcAkANAgQAJAVgDAMQgEAQgYABQgfACgOAEQgYAGgQARQgDADgKABIgQABQgmgRgxgNg");
	this.shape_12.setTransform(14.171,-27.755,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D83321").s().p("ADUM7IgPgXQgagqgXg8IglhsQg0ibgqicQgQg9gWhiIglieIhKkhQgRgRgIgkIhUl5QgJgmAIgaQAMgSAVADQALABAXAHQApAFAXAJQAhAMAUAZIAYB1QAOBFALAvIAGAaQADAQADAKIA3D8IALA6IALA6QANA1APBZQASBrAIAkQAgCZAsDzQAIAsAJBHIAPB0IAFAVQACANgMAFQgGADgFAAQgIAAgGgHg");
	this.shape_13.setTransform(44.6931,92.8357,1.0005,1.0995,0,-0.2179,1.8887);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D83321").s().p("AjlF3QghgYgCgqQgIg9gBgdQgCgyAMgnQAFgXAEgLQAIgTAQgHQAhgNADgXQACgTgUgbIgXgfQgEgLAFgLIALgUQAXgpAEg7QADgngQgWQgPgWgggBQhegCAEBWIACAYQAAAPgDAKQgEAHgHACQgLAAgDgDQgQgXgmgcQgrgfgOgQQAAhAAlgeQAegZBMgOQDigrChBYQApAWAgAmQAbAfAZAwQAkBEAzApQAdAYA9AsQA0AqAfAkQARAUAIAMQAMAUADATQAVAsgOArQgQAvgugUQgYgLgHgGQhDg2hIAlQgZANgZgJQgRgGgcgVQgUgUgLgJQgSgPgQAIQgPAHADAXQABANAGAaQABAogMALQgNAMgpgDQgbgDgQAFQgVAHgMAWQgDAIgDAAQgcgCg2AWQgsASgdAAIgJgBg");
	this.shape_14.setTransform(-20.498,-143.2705,1.0005,1.0995,0,-0.2179,1.8887);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,-185.2,139.5,370.5);


(lib.Tween44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#03040A").s().p("AAGANQgEAAgFgEIgKgHIAIgIQAFgFADgBQAGgCACAEIADAKIgBAJQgBAFgEAAIgCgBg");
	this.shape.setTransform(-47.5386,-120.7379,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPABQAIgUACgKIAVgCQADAQgJARIgRAeQgMgNAEgSg");
	this.shape_1.setTransform(-56.1043,-107.9624,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED9B38").s().p("AgYAEQgDgXAcgFQANgCAFAGQAEAFABANQACAMgCAFQgDAJgNABIgGAAQgXAAgDgVg");
	this.shape_2.setTransform(-47.5707,-120.7384,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B3CAA").s().p("AAwDzQgVgZgOgFQAPhOABgKQADgygcgkQgGgJACgFQAeg9ghhGQgwhLgPgoQgDgJgIgNIgMgVQAHgEAfAPQAXAMAMgdQAaAcAGAYQgFAjAFA1IAIBZQAAASAZAeQAWAdgFAXQgTAZAEAiIANA7IAaBeQgVgEgVgYg");
	this.shape_3.setTransform(15.514,-48.5142,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAOIgCgdQAFAAAEgCIAWAaQgDADgFAAQgGAGgFAAQgFAAgFgEg");
	this.shape_4.setTransform(-55.3123,-111.4002,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#295FB9").s().p("AArDKQgSAAgIgDQgOgFgEgOIgag/QglgugOhEQgFgVgKhmQgDgYATgQQAgASAIgGQAJgGAKgwQAcAtAMAMQAaAbAlABQAJA1AABHQABAqgCBUIgOApQgJAdgZAAIgCgBg");
	this.shape_5.setTransform(24.8799,-52.834,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED9B38").s().p("AhJDjIgbgWQgWgQgFgGQgNgOgKACQgJACgJAPQgOAZgOgEQgLgEgMgXIg9huQgCgJgDgEQgFgIgMAJQgdAVgSgKQgQgIgIgkIgHgRQgFgKACgJQAPAJANgDQALgEALgPQAegnAoAVQAbAPALgdQAMgeAZgHQATgFAiAIQAdAHALgKQAMgKgDggQgJgjgCgRQgFgfAXgMQAVgLAXAUQANALAWAbQAbAZAZADQAaADAggSQAagPAcAFQAbADAZAUIAoAfQAYAOAQgKQAdgRgKhLIAAgPQAWAVALAkQAGAVAIAqQAPBIAFAnQAHA+gJA0QgaAHgagOQgbgNgQgcQgCgEgDgMQgCgLgFgFQgBgFgBAFQgBAEAEgDQAMAXgSAWQgMAQgPgDQgMgCgQgNQgLgOgFgIQgHgNgBgNQgTAUgWgFQgNgDgZgSQgGgBgGgMQgGgLgKABQgGAIAHAcQAFAWgQAGQg2ARg3g8QgDAUAMAfQALAhgBAQQgBAGADAOQACANgBAHQgEAggBAFQgGAUgPAHQgHADgGAAQgJAAgKgGg");
	this.shape_6.setTransform(-4.6472,-71.8509,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#03040A").s().p("Ag8AUQABgQAGgRIANgfQAFgFAIADIBYA9QgRAggmAAQg8AAgCABg");
	this.shape_7.setTransform(-50.8138,-106.8969,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C9AA83").s().p("AglAjQgig5ADhNQAIgGAAgJIgBgSQBOAfAqBDQAKALAAAPQgBAKgDAWQgCAVAEAOQAEAPgJALIADAwQhFgqghg4g");
	this.shape_8.setTransform(-62.8201,-110.0679,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgWBkQgcgXgPgLQgLgJgEgFQgIgJAEgMIgDghQgOh/B/AKQAcACAUAcQATAcgEAjQgFAsgLAhQgOAogZAdIgDAAIgDABQgZgCgZgTg");
	this.shape_9.setTransform(-47.5636,-115.0372,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B3CAA").s().p("ABoE8IgTgYQgOgjgIgRQgPgdgoAIQgJADgIgSQgDgIgGgYIgXhTQgMgvgDgkQgFhEgYhYIguiYQgCgEgBgPICmCOQAGA9ASBQIAiCLQASBJAbCSQgHACgGAAQgKAAgIgGg");
	this.shape_10.setTransform(17.6294,14.9956,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#295FB9").s().p("AC2D9QgMgLgHABQgHABgPAMQgYAUgggFQgdgDgZgVQgjgdgbgNQgkgPgmABQgXgMgVgZIgkguQgOgbgIgNQgQgVgbABQgHAAgKgPQgIgMgGgPQgwh7gGilIAHgHIAmA6QAMAOATAkQAUAaAmgQQAIgDAJAJQADACAKAPQANAVAWAsQATAiAGAFQARANAegWQANgKAQAKQAJAGASAPQAIAEAPAOQAOAKAOgHQAQgHAEgUQABgGgBgdQAAgdgQg6QgHgbAOgKQAIgEAIAFIAPAKQApAWAIAAQAYABALgvQAEgUAQALQAIAGAQASQAvBFArBhQAPAhADAWQAFAfgNAcQgFAMAFAPQACAIAJAQQAfBNgwBHQgTAFgRAAQgvAAgqgkg");
	this.shape_11.setTransform(-13.8947,-54.7552,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#090B7B").s().p("ACbEcQgbgIg/gNQgwgWgrgnQgjgggogwIgCgCQgxgvgfgkQgqgugbguQgMgdghgoQgogvgKgSIgVgcQgMgSgEgPQA3gXA3AtQApAgAaAHQAnALAlgdQAPgLAWASQAaAVAhAJQAdAHAlAAQAtARAQAuIgVhHQgNgrgDgeQgCgbACgJQADgVAPgMQAQAAAHANQAFAHAFAQQAJATAHAGQAKALAQAAQAOAAAJgLQAEgFAIgTIAGgMQAFgHAIABIALBVQAGAyAPAgIAJBUQAFAxACAiQABASAMAQQAHAKAQAQIAzA+QAcAkANAgQAJAVgDAMQgEAQgYABQgfACgOAEQgYAGgQARQgDADgKABIgQABQgmgRgxgNg");
	this.shape_12.setTransform(14.171,-19.6878,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D83321").s().p("ADUM7IgPgXQgagqgXg8IglhsQg0ibgqicQgQg9gWhiIglieIhKkhQgRgRgIgkIhUl5QgJgmAIgaQAMgSAVADQALABAXAHQApAFAXAJQAhAMAUAZIAYB1QAOBFALAvIAGAaQADAQADAKIA3D8IALA6IALA6QANA1APBZQASBrAIAkQAgCZAsDzQAIAsAJBHIAPB0IAFAVQACANgMAFQgGADgFAAQgIAAgGgHg");
	this.shape_13.setTransform(44.6931,65.8057,1.0003,0.7795,0,-0.3073,1.3392);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D83321").s().p("AjlF3QghgYgCgqQgIg9gBgdQgCgyAMgnQAFgXAEgLQAIgTAQgHQAhgNADgXQACgTgUgbIgXgfQgEgLAFgLIALgUQAXgpAEg7QADgngQgWQgPgWgggBQhegCAEBWIACAYQAAAPgDAKQgEAHgHACQgLAAgDgDQgQgXgmgcQgrgfgOgQQAAhAAlgeQAegZBMgOQDigrChBYQApAWAgAmQAbAfAZAwQAkBEAzApQAdAYA9AsQA0AqAfAkQARAUAIAMQAMAUADATQAVAsgOArQgQAvgugUQgYgLgHgGQhDg2hIAlQgZANgZgJQgRgGgcgVQgUgUgLgJQgSgPgQAIQgPAHADAXQABANAGAaQABAogMALQgNAMgpgDQgbgDgQAFQgVAHgMAWQgDAIgDAAQgcgCg2AWQgsASgdAAIgJgBg");
	this.shape_14.setTransform(-20.498,-101.5833,1.0003,0.7795,0,-0.3073,1.3392);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,-131.3,139.5,262.6);


(lib.Tween43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#03040A").s().p("AAGANQgEAAgFgEIgKgHIAIgIQAFgFADgBQAGgCACAEIADAKIgBAJQgBAFgEAAIgCgBg");
	this.shape.setTransform(-47.5386,-170.3807,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPABQAIgUACgKIAVgCQADAQgJARIgRAeQgMgNAEgSg");
	this.shape_1.setTransform(-56.1043,-152.3523,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED9B38").s().p("AgYAEQgDgXAcgFQANgCAFAGQAEAFABANQACAMgCAFQgDAJgNABIgGAAQgXAAgDgVg");
	this.shape_2.setTransform(-47.5707,-170.3814,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B3CAA").s().p("AAwDzQgVgZgOgFQAPhOABgKQADgygcgkQgGgJACgFQAeg9ghhGQgwhLgPgoQgDgJgIgNIgMgVQAHgEAfAPQAXAMAMgdQAaAcAGAYQgFAjAFA1IAIBZQAAASAZAeQAWAdgFAXQgTAZAEAiIANA7IAaBeQgVgEgVgYg");
	this.shape_3.setTransform(15.514,-68.4585,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAOIgCgdQAFAAAEgCIAWAaQgDADgFAAQgGAGgFAAQgFAAgFgEg");
	this.shape_4.setTransform(-55.3123,-157.2037,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#295FB9").s().p("AArDKQgSAAgIgDQgOgFgEgOIgag/QglgugOhEQgFgVgKhmQgDgYATgQQAgASAIgGQAJgGAKgwQAcAtAMAMQAaAbAlABQAJA1AABHQABAqgCBUIgOApQgJAdgZAAIgCgBg");
	this.shape_5.setTransform(24.8799,-74.5544,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED9B38").s().p("AhJDjIgbgWQgWgQgFgGQgNgOgKACQgJACgJAPQgOAZgOgEQgLgEgMgXIg9huQgCgJgDgEQgFgIgMAJQgdAVgSgKQgQgIgIgkIgHgRQgFgKACgJQAPAJANgDQALgEALgPQAegnAoAVQAbAPALgdQAMgeAZgHQATgFAiAIQAdAHALgKQAMgKgDggQgJgjgCgRQgFgfAXgMQAVgLAXAUQANALAWAbQAbAZAZADQAaADAggSQAagPAcAFQAbADAZAUIAoAfQAYAOAQgKQAdgRgKhLIAAgPQAWAVALAkQAGAVAIAqQAPBIAFAnQAHA+gJA0QgaAHgagOQgbgNgQgcQgCgEgDgMQgCgLgFgFQgBgFgBAFQgBAEAEgDQAMAXgSAWQgMAQgPgDQgMgCgQgNQgLgOgFgIQgHgNgBgNQgTAUgWgFQgNgDgZgSQgGgBgGgMQgGgLgKABQgGAIAHAcQAFAWgQAGQg2ARg3g8QgDAUAMAfQALAhgBAQQgBAGADAOQACANgBAHQgEAggBAFQgGAUgPAHQgHADgGAAQgJAAgKgGg");
	this.shape_6.setTransform(-4.6472,-101.3912,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#03040A").s().p("Ag8AUQABgQAGgRIANgfQAFgFAIADIBYA9QgRAggmAAQg8AAgCABg");
	this.shape_7.setTransform(-50.8138,-150.8486,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C9AA83").s().p("AglAjQgig5ADhNQAIgGAAgJIgBgSQBOAfAqBDQAKALAAAPQgBAKgDAWQgCAVAEAOQAEAPgJALIADAwQhFgqghg4g");
	this.shape_8.setTransform(-62.8201,-155.3237,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgWBkQgcgXgPgLQgLgJgEgFQgIgJAEgMIgDghQgOh/B/AKQAcACAUAcQATAcgEAjQgFAsgLAhQgOAogZAdIgDAAIgDABQgZgCgZgTg");
	this.shape_9.setTransform(-47.5636,-162.3359,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B3CAA").s().p("ABoE8IgTgYQgOgjgIgRQgPgdgoAIQgJADgIgSQgDgIgGgYIgXhTQgMgvgDgkQgFhEgYhYIguiYQgCgEgBgPICmCOQAGA9ASBQIAiCLQASBJAbCSQgHACgGAAQgKAAgIgGg");
	this.shape_10.setTransform(17.6294,21.1659,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#295FB9").s().p("AC2D9QgMgLgHABQgHABgPAMQgYAUgggFQgdgDgZgVQgjgdgbgNQgkgPgmABQgXgMgVgZIgkguQgOgbgIgNQgQgVgbABQgHAAgKgPQgIgMgGgPQgwh7gGilIAHgHIAmA6QAMAOATAkQAUAaAmgQQAIgDAJAJQADACAKAPQANAVAWAsQATAiAGAFQARANAegWQANgKAQAKQAJAGASAPQAIAEAPAOQAOAKAOgHQAQgHAEgUQABgGgBgdQAAgdgQg6QgHgbAOgKQAIgEAIAFIAPAKQApAWAIAAQAYABALgvQAEgUAQALQAIAGAQASQAvBFArBhQAPAhADAWQAFAfgNAcQgFAMAFAPQACAIAJAQQAfBNgwBHQgTAFgRAAQgvAAgqgkg");
	this.shape_11.setTransform(-13.8947,-77.2661,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#090B7B").s().p("ACbEcQgbgIg/gNQgwgWgrgnQgjgggogwIgCgCQgxgvgfgkQgqgugbguQgMgdghgoQgogvgKgSIgVgcQgMgSgEgPQA3gXA3AtQApAgAaAHQAnALAlgdQAPgLAWASQAaAVAhAJQAdAHAlAAQAtARAQAuIgVhHQgNgrgDgeQgCgbACgJQADgVAPgMQAQAAAHANQAFAHAFAQQAJATAHAGQAKALAQAAQAOAAAJgLQAEgFAIgTIAGgMQAFgHAIABIALBVQAGAyAPAgIAJBUQAFAxACAiQABASAMAQQAHAKAQAQIAzA+QAcAkANAgQAJAVgDAMQgEAQgYABQgfACgOAEQgYAGgQARQgDADgKABIgQABQgmgRgxgNg");
	this.shape_12.setTransform(14.171,-27.779,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D83321").s().p("ADUM7IgPgXQgagqgXg8IglhsQg0ibgqicQgQg9gWhiIglieIhKkhQgRgRgIgkIhUl5QgJgmAIgaQAMgSAVADQALABAXAHQApAFAXAJQAhAMAUAZIAYB1QAOBFALAvIAGAaQADAQADAKIA3D8IALA6IALA6QANA1APBZQASBrAIAkQAgCZAsDzQAIAsAJBHIAPB0IAFAVQACANgMAFQgGADgFAAQgIAAgGgHg");
	this.shape_13.setTransform(44.6931,92.8691,1.0005,1.1001,0,-0.2178,1.8904);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D83321").s().p("AjlF3QghgYgCgqQgIg9gBgdQgCgyAMgnQAFgXAEgLQAIgTAQgHQAhgNADgXQACgTgUgbIgXgfQgEgLAFgLIALgUQAXgpAEg7QADgngQgWQgPgWgggBQhegCAEBWIACAYQAAAPgDAKQgEAHgHACQgLAAgDgDQgQgXgmgcQgrgfgOgQQAAhAAlgeQAegZBMgOQDigrChBYQApAWAgAmQAbAfAZAwQAkBEAzApQAdAYA9AsQA0AqAfAkQARAUAIAMQAMAUADATQAVAsgOArQgQAvgugUQgYgLgHgGQhDg2hIAlQgZANgZgJQgRgGgcgVQgUgUgLgJQgSgPgQAIQgPAHADAXQABANAGAaQABAogMALQgNAMgpgDQgbgDgQAFQgVAHgMAWQgDAIgDAAQgcgCg2AWQgsASgdAAIgJgBg");
	this.shape_14.setTransform(-20.498,-143.3495,1.0005,1.1001,0,-0.2178,1.8904);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,-185.4,139.5,370.70000000000005);


(lib.Tween41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgjAJQAVgPAOgCQARgBATASg");
	this.shape.setTransform(19.2352,-71.4271,0.862,1.0002,0,0.7876,11.9051);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgJAHQgFgOgEgGIAKgCQADAEAMAFQAKAFACAHQABACgDADQgDADgDABIgGABQgJAAgFgJg");
	this.shape_1.setTransform(19.5244,-76.8613,0.862,1.0002,0,0.7876,11.9051);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgEAQQgJgLgFgBQAJgPAFgEQAIgKAPACIAAAIQAAAFAAABQgJAEAHANQAGANgMADIgCAAQgHAAgGgIg");
	this.shape_2.setTransform(11.1219,-76.5854,0.862,1.0002,0,0.7876,11.9051);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgngYIA0AEQAbAIAAAlQgsAAgjgxg");
	this.shape_3.setTransform(26.7679,-53.2592,0.862,1.0002,0,0.7876,11.9051);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AAAANQg0gHgdgQIAAgRQAaARASAGQAZAIAYgEQASgBATAIIAhAUQgRgEhBgKg");
	this.shape_4.setTransform(15.4193,-69.2172,0.862,1.0002,0,0.7876,11.9051);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgsA7QgYgHgPgGQg0gSASg4IAYgoQAwAWA5AKQAwAIA/AAQgMAQgFAMQgGAPAEAQQgJACgJgUQgHgQgPAJQgNAJghALQgZAMACAfIgngKg");
	this.shape_5.setTransform(14.7961,-61.2996,0.862,1.0002,0,0.7876,11.9051);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#03040A").s().p("AgsBXQhIgOgbggQgDgMAGgFQAEgDAMgCQAMAFAXAFQgXgJgMgRQgWgQAVgRIALABQAOACAJgKIAPgUQAMgNASgBQAKgBAWAFIAFAEQAEACADAAIgCgIQAKgXAIAAQAHABAhAYQAxAzAPARIASAQQAKAKgBANIhIAqQgbALgjAAQgZAAgegGgAgqAkQApAGAZALQgfgOgkgDIABAAg");
	this.shape_6.setTransform(19.101,-71.4909,0.862,1.0002,0,0.7876,11.9051);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUgmQAPAigQASQgMAQgiAJQAUg2AbgXg");
	this.shape_7.setTransform(37.9618,88.1374,0.8651,0.9987,0,0.7887,12.4921);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgZAOQgfgegMgLQgPgNALgNQBIAxBCgfQANAVgCAeQgHAPgTAJIghAOQgSgNgZgbg");
	this.shape_8.setTransform(29.8368,-70.6159,0.862,1.0002,0,0.7876,11.9051);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#03040A").s().p("AgVA6QgigJgGgDQgWgJgJgVQgLggAXgPQAfgNANgIQAWgMANANQAFAFAOAZIAoAWQAYANAPANQABAXgWAIg");
	this.shape_9.setTransform(22.0257,-54.4785,0.862,1.0002,0,0.7876,11.9051);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#63A34D").s().p("ABgBHQgagDgpgZIgcgSQgQgJgQAPIgMAFIgdAAQgPABgMAHQgJADgNAKQgOALgHADQgHABgEgGIgLgSQAEgXASgMQAIgFAdgKIBMgaQAqgRAYgaQAvAJAgAiQAaAaAXAwQgcAagfAAIgKgBg");
	this.shape_10.setTransform(21.6458,-80.6377,0.862,1.0002,0,0.7876,11.9051);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#010306").s().p("Ag5BiQglgWgNgtQgBgFgLhLQgDgbATgOQALgJAfgIQAEArAoAVQAVALAyASQAJALAYALQAYANAJALQgIANgcAWQgaAUgJAQQgIgBgsAFIgPABQgXAAgQgKg");
	this.shape_11.setTransform(9.9901,-54.3922,0.862,1.0002,0,0.7876,11.9051);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2F3843").s().p("AgyBrQASgYAAgPQAAgFAFgNQAEgKgBgIQgEgWgWgGQgagEgLgFQgHgFgDgGQgKgdAdgfQAMgOAVgMIAmgSIAfgSQATgLAPgBQAmAYAEArQACATgIA8QgIA8gzAnQgUAOhXAqQADgSATgag");
	this.shape_12.setTransform(31.1985,-53.5037,0.862,1.0002,0,0.7876,11.9051);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ED9B38").s().p("AAjFKQAIgPADgUQABgLgBgaQAAgkAYgtQAXgsgDgxQgCgwgbguQgohGhUAAQgeABgQADQgZAEgSAMQgSgjAHgkQAGgeAagjQAQgWAWgzQASgrAngjQAbgXAzggQAKgFAMgBIAVgBQANACACAQQgBAVAEAOQABALgEAHQgOAVgDAHQgMAbgPAMQgoAagFAXQgFAWASA8QAMAkAWAPQAVAOAqgBIAYgCQANAAAIALQgfBVATBqQATBuhhBtQgJALgPAbQgPAWgTAHg");
	this.shape_13.setTransform(-0.0686,-39.3086,0.862,1.0002,0,0.7876,11.9051);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4FAFF8").s().p("AlxE5IAWggIBlimQA7hfAxhDQBFhfBDg+QBQhMBcgqQBvg0BkAvQgHAdgcAOQgjAMgRAHQgoAOgUAJQgiAOgRAYQiJAwgyB8QgGATgKAMQgwA9AKBRIh5BIQhEAqgxAjIhTA9QgCgTAMgTg");
	this.shape_14.setTransform(-7.6711,-61.0997,0.862,1.0002,0,0.7876,11.9051);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-91.5,80.5,183.1);


(lib.Tween39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B3CAA").s().p("Ah/EsQgSgYAJgiQAOgzAAgHQgyATADg1QAEhEAUhNQAPg7AdhRQAOgoAbgtIAyhPIATAAQgoBoArB0QAFANAIAIQAJAKAJgEQAZgKAnAMQAtANASgCQgbApg2BAQhABMgUAbIgnA4QgYAggWAUIgVARQgLAGgLAAIgEAAg");
	this.shape.setTransform(-27.9243,32.0001,0.9922,1.026,0,0,6.5512);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#295FB9").s().p("AjjD5QgmgJgVADQgMABgSgRQgkgmgChSQgBhSAjgnIA2guQAJAOAOAgQAPAWAfgFQADgBALAjQAIASAJAIQAMALASAAQAhABANggQAIgVALgHQANgIAUAHQAEABALgBQAYAFAPghQAQgiAYACQAhAEAPgYQAHgKALgpIAaAcQAPARASgGQAmgOAAg4QAAgNADgFQAEgGAPADQAZAFAQgOQANgNACgZQACgZANgIQALgHAYABQANAVgJAWQgFANgQAYQgKATgVA7QgSAygTAaQgHAJgpAnQgeAcgJAbQgCAHgFAAQgmgBgbAlQgoA3gGAEQgGASgWABQgLAAgQgKIgDgNQgCgIgKAOQgNARgLgBQgigFgkAVQgVALgoAaIgLABQgSAAgegHg");
	this.shape_1.setTransform(4.656,6.5379,0.9922,1.026,0,0,6.5512);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C87CA").s().p("AioF/QgWgDgPgUQgPgZgLgKIgkgcQgWgRgIgRQgJADgQANQgOALgLABQgMABgIgIQgagMAHgdQA0jLB8idQADgFAHgFIAMgKQAWgiApgcQBshKCXhYQB1gzBNBIQAtAqAMA5QALA2gTA7IgXBGQgMAogBAfQAAAMgLAPQgQAKgPATIgaAiQgMAPgoApQgiAjgRAaQgMASgVgIQgOgGgVgUQgIAWgTAQQgKAIgfARIg/AoQglAXgfAKQgHACgYAYQgSARgSAAIgEAAg");
	this.shape_2.setTransform(16.7,-4.7,0.9922,1.026,0,0,6.5512,10.5,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.6,-61.3,89.30000000000001,122.69999999999999);


(lib.Tween36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1818").s().p("AgBA0QgVgEgKgFQgRgKABgeQAAgyAigEQARgCAYAaQAZAbgDAQQgHAkglAAIgGAAg");
	this.shape.setTransform(-44.5292,-70.9886);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBEQgbgIgLgdQgWg/AxggQATgMAlANQAlANAOAWIAJARQAaA4gLAOQgJANg7gBIgNAAQgbAAgMgDg");
	this.shape_1.setTransform(-45.2984,-71.4089);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AACAKIgYgEQgEgBACgEQAHgIAKgCIAQAAQADAHALACQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgIAEgKAAIgEAAg");
	this.shape_2.setTransform(8.2717,75.6827);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgaAUIgHgkQAUgJAPAPIABADQgCAKADABQAEACARgEQAKAGgBAFQgBAFgKABIgZABIgYAAg");
	this.shape_3.setTransform(8.8045,75.5547);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgfARQgFgMAOgMQANgMARgEQAHgCAPABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgBAXQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABIgQAFIgZANQgFACgEAAQgHAAgEgIg");
	this.shape_4.setTransform(-44.8658,62.1389);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgnATQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAQgUAVgIQARgGAaADQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIABAVQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgNgCgZAGQgVAFgNAAIgGAAg");
	this.shape_5.setTransform(-43.8521,53.5917);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AAcAUQglgLgZABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAPgUAOgDQANgEAfAMQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgEAEAAAGIgBAMQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_6.setTransform(-42.7687,76.5692);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgbATQgKgEgBgGQAAgHAIgFQATgMAKgDQAPgFAPAKIAJAFIABAYQAAABAAABQgBABAAAAQgBAAAAABQgBAAgBAAIgVgBIgUABIgJAAQgHAAgFgBg");
	this.shape_7.setTransform(-45.4264,83.6669);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#521A1B").s().p("AgYAlQgHgNgFgDQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQAMg/A9gDQAFAAgBADQgDAggJAVQgMAagXARIgCAAQgIgCgGgLg");
	this.shape_8.setTransform(-66.5659,-58.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AiDAzQgLgOAMgOQALgOASgEQALgDAXABQAcAAAMgBQAWgCAPgMQgKgFgMACIgXAFQgmAGgCgBQgXAAgMgVQgMgPALgOQAZgNAoABIBBABIA6gBQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAGAJAYAaQAUAWAHAPQAAAAABABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQgZACgiAPQglASgTAHQglAPgkAAQgoAAglgSg");
	this.shape_9.setTransform(-28.413,57.3982);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7A2827").s().p("AgrCbQhBhEAYhkQAXhmBZgoQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIAXAnQAOAXAHARQAUAugGARQgGAQgsATIAAABQgtAZgfAsIgBACIAAA6QAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgCAAIgCgBg");
	this.shape_10.setTransform(-66.6823,-65.6443);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AjlBPQgMgPALgOQAVgLA0AAQAyAAAagPQgMgDg4AJQgnAGgVgbIAAAAQgHgMABgGQAAgJAQgCQAcgMAmAAIBCAFQA6AEAggOQAogSAagzQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIARAXQAKANANACQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAIgBADIgUAaQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAABABAAQAMABAtgFQAhgDAUAIQAOANgMARQgSARgYALQgYAKgXgBQg6gDhHAXQhRAfgpAOQgYAIgVAAQgpAAghgeg");
	this.shape_11.setTransform(-18.5986,77.7331);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CD5439").s().p("AjTGAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgZhFgHggQgLg5ALgzQAGgZgFgnQgHgtgCgWQgDgiANgkIAAgBIAYgyQAOgeAFgXIABgCQAlgfADgPQADgQgWgvIgSggQgKgSACgQIABgCQA2hFBmgDQBlgDBLBCQAsAmAdAiQAjAqATAsQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgNAqgbAcQgbAbgsAPQgkANgPAnQgDAHgPBFIgKA/QgIAjgVAWQghAlg3AAQg8AAghA0Ig/BdIgCABIgBAAg");
	this.shape_12.setTransform(-43.0781,-50.2003);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D79548").s().p("AhkGtIgCgBQhfhzhWinIgHgNQgEgHADgHQAmiTCTgPQA2gFASg2QAIgZAIgoIAMhCQARhNBCgaQA8gXAQgzQAEgLADgDQAFgIAKACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAhAuATA/QAPAuAKBHQADAVARAmQAQAnADAUQABAFgFgBQhUgeg+BFIgZAZQgFAFgcALQgWAHgDARQgLA8AMA6QARBLAkBIQAAAAAAAAQABABAAAAQAAABgBAAQAAAAAAABIgXAuQgxBfhqAAQgRAAgTgDg");
	this.shape_13.setTransform(-35.1615,-23.2669);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BAC74D").s().p("Ai4E8QgEgEgKgeQgKgpgognIAAgBQgbgUgLgNQgTgUgDgZIAAgBQgVg5grg3Qgegmg5g3QgjgfgQgRQgdgcgQgZQgBAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAMgMAcABQAvADAkgYQAegUAagsQAFgHAHgSQAIgOAOgDQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAYAuAtA2QAaAgA2A9QANANAHABQAdADBMAeQBAAaArgFQAKgBAKAHQBEAwBeANQA8AKBxgCQAaAZAnAWIBIAlIANAFQAIAEABAHQAAAJgHAGQgEACgMAFQhCAdhSgBQhlgBhDAfQguAVhDACIhzgEQgiAAgTANQgTANgHAfQgLAvgxAJQgHADgHAAQgOAAgHgLg");
	this.shape_14.setTransform(10.3694,38.3564);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808F38").s().p("ADVFpQhKgPg/gjQgIgFgPgBQgSgCgGgDQgTgJhfgWQhIgQgjgiQhlhigzhhQgfg8gPgzQgRg+ACg7QABgdAKgSQAMgWAYgLQASgIAXgVQAcgaAJgGQAjgYAeABQAfAAAfAXQA3ApA1BCQAeAlA5BWQAlA4BJByQBBBkA1BAQAVAZAeAdIA4AyIAUAQQAKAKgCAOQgIAJgOADIgYACIgLAAQhKAAg9gMg");
	this.shape_15.setTransform(9.6004,3.6531);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.8,-88.6,141.89999999999998,177.3);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhwBjIjHhrIDPhcIAojgICYCpIDggfIhwDEIBiDMIjeguIijCcg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-32.4,62.5,64.9);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-0.0523,3.2383,0.9999,0.9999,30.0066);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-21.3,43.2,42.7);


(lib.Tween32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-2.3388,2.8239,0.9999,0.9999,45.0049);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.4,43.1,42.9);


(lib.Tween31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-3.339,0.5574,0.9999,0.9999,60.0053);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-21.6,42.4,43.3);


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-0.0355,0.0484,0.9999,0.9999,90.0026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-21.7,41.6,43.5);


(lib.Tween29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-1.5614,1.289,1,1,105.0024);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-21.1,43.4,42.2);


(lib.Tween28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-3.1698,-0.0876,0.9999,0.9999,120.0017);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-21.6,42.7,43.2);


(lib.Tween27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-2.7835,-2.3432,1,1,135.0006);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-21.5,42.9,43.1);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-0.53,-3.3103,1,1,150.0008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-21.1,43.3,42.3);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-20.8,43.5,41.6);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-0.0523,3.2383,0.9999,0.9999,30.0066);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-21.3,43.2,42.7);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-2.3388,2.8239,0.9999,0.9999,45.0049);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.4,43.1,42.9);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-3.339,0.5574,0.9999,0.9999,60.0053);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-21.6,42.4,43.3);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-0.0355,0.0484,0.9999,0.9999,90.0026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-21.7,41.6,43.5);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-1.5614,1.289,1,1,105.0024);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-21.1,43.4,42.2);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-3.1698,-0.0876,0.9999,0.9999,120.0017);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-21.6,42.7,43.2);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-2.7835,-2.3432,1,1,135.0006);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-21.5,42.9,43.1);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-0.53,-3.3103,1,1,150.0008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-21.1,43.3,42.3);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-20.8,43.5,41.6);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-0.0523,3.2383,0.9999,0.9999,30.0066);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-21.3,43.2,42.7);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-2.3388,2.7739,0.9999,0.9999,45.0049);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.4,43.1,42.8);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-3.339,0.5574,0.9999,0.9999,60.0053);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-21.6,42.4,43.3);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(0.0145,-0.0016,0.9999,0.9999,90.0026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-21.7,41.599999999999994,43.4);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-1.5614,1.289,1,1,105.0024);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-21.1,43.4,42.2);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-3.1698,-0.0376,0.9999,0.9999,120.0017);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-21.5,42.7,43.2);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-2.7335,-2.3432,1,1,135.0006);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-21.5,42.9,43.1);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(-0.53,-3.3103,1,1,150.0008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-21.1,43.3,42.3);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADC4D").s().p("AhCBJIiXgUIBrhqIgciVICHBEICFhJIgXCWIBvBnIiXAYIhACKg");
	this.shape.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-20.8,43.5,41.6);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag0AiIAAgBQAxgGAigmQAKgJALgQIACAAQgVAkgWASQgWATgXAAQgJAAgJgDg");
	this.shape.setTransform(5.15,-24.076);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVAuQgPgWgHgXIgUguIABAAIAWAmQAOAWAFARQACAJgBAFg");
	this.shape_1.setTransform(-8.1333,-33.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B69576").s().p("AgcDtIgdgFQgegFgXgUQgYgUgJgdQgRg1gFgmQgTiSAjABQARAAAQAzQAIAaAFAZQAFg9ALg9QAUh6AYADQAXADgIBTIgIBVIAfhiQAehiAXAFQAXAFgVBnIgXBnQADABAkhVQAnhUATAEQATADgaBaIgZBbIAfgwQAegvAPAGQAPAFgfBdQgfBcgtBZQgPAdgdAOQgVALgWAAIgRgBg");
	this.shape_2.setTransform(-2.9,-16.35,1,1,0,0,0,-2.9,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A57F58").s().p("AAAGpQhWgEgchmQgIgfgCgmIAVqiICpAeIA7JQIAAAkQgCAsgJAkQgbBvhSAAIgFAAg");
	this.shape_3.setTransform(-1.375,21.4817);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-63.9,34.5,127.9);


(lib.rightarm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7C387").s().p("Ag+DQQgUgTgWgnQgegzgMgnQgOguASgIQAQgGAgAqQAQAWANAWQgRg8gNg8Qgbh7AXgHQAWgHAXBTIAXBTIgIhpQgHhpAWgEQAYgEARBpQAJA1AIA1IgChfQgBheASgFQATgFAQBgIARBfQABAAACg6QACg6AQgBQAXgBAHCFQAHCIghA4IisAhQgFgCgLgKg");
	this.shape.setTransform(15.3292,21.9677);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7C387").s().p("AhcE2QgPgkgJgtIgHgrIAAgBQAAh+gDh/QgGj9gMg3ICigeQAEgBADADQAEACABAEIByJYQADApgEAiQgOBwhZAQQgLACgKAAQhHAAgohhg");
	this.shape_1.setTransform(25.1317,81.5416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightarm, new cjs.Rectangle(0,0,39.7,122.3), null);


(lib.obrigado = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("obrigado1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// buttom
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6A7QgSgXAAgjQAAgfAQgXQAUgdAoAAQApAAAUAbQAQAUAAAhQAAAigSAYQgVAbgmAAQgkAAgWgYgAgmguQgQAQAAAgQAAAaANASQAOASAcAAQAdAAANgUQAMgUAAgaQAAgbgPgRQgOgRgaAAQgXAAgPARg");
	this.shape.setTransform(121,21.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/BPIAAidIA/AAQAfAAARAYQARAUgBAhQAAAYgJAUQgRAkgmAAgAgqA9IAlAAQAKgBAHgCQAMgEAIgLQAGgKADgPIACgRQAAgcgMgQQgMgRgYAAIglAAg");
	this.shape_1.setTransform(104.8,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAvBPIgQgwIg+AAIgRAwIgVAAIA7idIAXAAIA6CdgAAYAOIgXhEIgZBEIAwAAg");
	this.shape_2.setTransform(89.3,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwBBQgWgXAAgoQAAgmAVgYQAUgWAfAAQAWAAAQAJQAXAMAFAfIgVAAQgDgRgMgIQgMgIgSAAQgVAAgOARQgPAQAAAfQAAAcAMASQAMASAaAAQAVAAAOgMQAOgNAAgcIgxAAIAAgRIBFAAIAABUIgOAAIgFgVQgLAMgIAFQgOAIgUAAQgcAAgTgSg");
	this.shape_3.setTransform(73.025,21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKBPIAAidIAVAAIAACdg");
	this.shape_4.setTransform(61.975,21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAmBPIgCgFIgBgMIgBgbQgBgQgKgFQgGgCgNgBIguAAIAABEIgVAAIAAidIBGAAQASAAAMAGQAVAJAAAcQAAAOgFAJQgGAJgLAEQAJAEAFAGQAFAHAAANIABAWQAAAIACAFQABAHAFACIAAAEgAgqgGIAvAAQAPABAIgHQAJgFAAgQQAAgRgMgGQgHgDgKgBIgyAAg");
	this.shape_5.setTransform(51.275,21.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag8BPIAAidIBDAAQAcAAAMARQAHAJAAANQAAAPgJAKQgEAFgIAEQAMAFAGAEQAKALAAASQAAAPgJANQgPASgfAAgAgnA9IAtAAQAUAAAJgMQAFgHAAgKQAAgRgPgGQgJgEgNAAIgqAAgAgngLIAnAAQANAAAIgEQALgGAAgPQAAgQgMgFQgHgDgOAAIgmAAg");
	this.shape_6.setTransform(35.975,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag5A7QgTgXAAgjQAAgfAQgXQAVgdAnAAQApAAAUAbQAQAUAAAhQAAAigSAYQgVAbgmAAQglAAgUgYgAgmguQgQAQAAAgQAAAaAOASQANASAdAAQAcAAAMgUQANgUAAgaQAAgbgOgRQgPgRgaAAQgXAAgPARg");
	this.shape_7.setTransform(19.7,21.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202020").s().p("AgCAAQAFgBAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAABg");
	this.shape_8.setTransform(40.8778,0.5938);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202020").s().p("AgEAAIAJAAIgDABg");
	this.shape_9.setTransform(107.8,2.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202020").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_10.setTransform(114.3639,0.7125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#202020").s().p("AAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIABAEIgBADIAAAAIAAgEg");
	this.shape_11.setTransform(138.375,15.4767);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#202020").s().p("AAAAEIgBAEIABgQQAAALABgDQACAAgCAJQAAgBAAgBQAAgBAAgBQAAAAAAgBQgBAAAAAAg");
	this.shape_12.setTransform(138.1875,21.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#202020").s().p("Aj+DfIg1AAIABgDIgWACQgHgDgiACQgiABgPgEIgDAFQgZAAgFgCIADAAQABgDgHABIgMABIgGACQgBAAAAAAQAAAAAAABQAAAAAAAAQABAAABAAIgygBQgegBgKgCIgpADQgWADgTgBIAAgBIgXgBQgTgCADgDIgCgXIgCgPQgCgSABgPIABAFQACgFgDgPQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQABgEgBgEIgBgIIABACQACgMgCgbIgBgrQAAAFACgFQgCgGgBgVIgBgaIACAHQgCgLADgJQACgLgCgLIgCAOQABgIgBgEQgBgBAAgBQAAgBAAAAQgBgBAAAAQAAABgBAAQABgEACgDIACgLQABAMABgFIAEgWIAAgLQgDABgBgIQAAgFgCAFIABgsQABgagCgPIABgDIACgYIAfAAQAJABAAAEQAWAAAOgFIgKABQAFgDAZABQgaADgIADQAHAAAigFIADAEQAGgBAFACQAEABAGgDIgCgBQAMAAAKgCIAUgCIgBABIAMAAQAIgBADACIgMAAQABACAPAEQAHgBABgCQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAIgFACQAggCAPgEIAAABIAWgBQANgCAEACIgCAAQAFACAQgCQANgBABADQABABAAAAQAAAAgBAAQAAAAgBAAQgBAAgCAAQgGABAGACQAJABAHgDQAFgDAJABIgDABIAqgCQAHADAagBQAZAAAKADQgBAAAAgBQAAAAAAAAQAAAAAAgBQABAAABAAIAEgCIAAABQAHABADgDQADABAJgCIALAAQAAgBALAAQgHABAAABQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQAIAAALgDQALgCAKABIALACQAAgDAKAAIAJgBIAFACQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIANAAQAIAAABgCIgIAAQAMAAASgBQASgCAIABIAAAGQAFABAMgBQAKgBAGABIgDgBIAGgCIgVABIARgDIgZABIAIgBIgDgDIAQABQAHABAIgBQABAAAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAHgBAMACIALABIgBAAQAQgBACgBIgIAAIAIgBQAFgBAGABQAGgBACgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIACABQABAAAAAAQABAAAAABQAAAAAAAAQAAAAgBABQAKgBAEgCQAEgCAJABIgBABIAKAAQgCAAgBABQgBAAAAAAQgBAAAAABQAAAAABABQABABgJAAQABABAHAAIAMAAQAFgBAAgBQgBgBAAgBQAAAAABgBQAAAAAAAAQAAAAABgBIAIACIgFgDIANAAIgIABIAQACQAKABAKgBIgHACQAAAAAAAAQAAABABAAQAAAAABAAQABABACAAQAJgBAAABQAAABAAAAQAAAAABABQAAAAABAAQABAAAAAAQAHAAAEgCQADgBANABQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgDgBIAoABQgPgBAMgBQgDACAWAAIABAAQACAAAAAAQAAAAAAAAQgBABgBAAQgBAAgCAAIgFAAQgGABADACQABACAJABQAJgBABgCQABAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAJABAIgCQAHgDAJABIAMACIARADQABAAAAAAQAAgBgBAAQAAAAgBAAQgCgBgCAAQgBAAgCgBQgBAAAAAAQgBAAAAgBQABAAABAAQALADAUgCQAZgDALACIgDADIATAAIgJgCIANAAQAHABgEABIAQgBIAOABIgGAAIgFABQAJABARgBQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAABIAHABQAFgCAMgBIAVgBIAAABQAIAAAaACQAUABANgCIABAAIgCgBQgEgBALgBIARgBQAEACACAAQAAgBAFgBIAHgBQABABAAAAQABAAABAAQAAAAAAABQABAAAAAAQABACAHAAQAGAAgBgDQADACANABIgGAAIABACQABAAABAAQAAAAAAAAQAAAAABABQAAAAgBAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQACgCAEABIgHADIAGgBQgBAAAAABQgBAAAAABQAAAAAAABQAAAAABABQALgBgDgDQgFgDABgCIAmgBIABARIgCgCIAAAKIABADIAAAKQgBgHgCgBIABARQAAAJACABIgBAAIgCAqIAAAXQAAAKACABQAAADgBANQgBAJACAEIgBAEIgCgGQgCAEACAKQABAIgDACIABAEIgBALQABAQgCADQABABAAAAQAAABAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAABABQAAABAAABQgBgBAAAIIADACIgIALQACAJACgBQACAAABAMIgBgCQgCADACAKQABAMgBAJQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIgCgBIABAJIAAAAQgCAEABAEQABAEgCAFQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABIADAOIgEgFIACAVQABAOgCAEIgBgGQgDABAAAFIgCgQIACAHQAAABAAAAQABABAAAAQAAAAAAAAQABAAAAAAIgEgbIAFAHQAAgFgBgDIgBgGQAAgCAAgBQABgBAAAAQAAAAABAAQAAAAAAAAQgCgQACgLQACAMABgGIgCgUIgEgWQgCgMABgVQACgTgBgHIgCAEQAAABAAAAQgBAAAAAAQAAgBAAgBQAAgBgBgBQADABAAgIQgCgGABgIQAAgHgBgEQABABACgKQAAABAAgBQABAAAAAAQAAgBAAAAQABgBAAgBQABgCACAJQgBgIAAgOQgBgNgDgHIgBAEIACgQIgBABQAAgLADgIIABAOQACgFgCgIIgCgPIACAFQAAABAAABQAAAAAAABQABAAAAAAQAAAAAAAAQABgEgCgQIABABQABgKgCgCQgDgCACgGIgCAAQADgSACAMQAAgKgCgFIgCAFIgCACIAAgEIgBgIIgDAAIAEgBIAAABIABgBQgGgEghADQgcADgTgFQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABIgFABIgkgBIADgCIghADIgbAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAEgCQgHABgMgCQgKgCgCADIAFABQgOAAgYABIgnADQgBgBAAAAQAAAAABgBQAAAAACAAQABAAACAAQAHAAgDgDQgIgBgSABIgcABIAFgBQgKgBACABQACADgJAAQACgDgHAAIgFADQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQgEACgMABQgNAAgDACIAAgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQgHAAgNACQgVgCADgBQgHAAgBABQgBACgEACIALABIgVABIAJgCQgGgBgJABIgRACIAGABIgOABQAAgCgHAAQgFgBADgCQgOgBgRACIgeADIACgBIAAgBQgNgBgPAEQAFgCgBAAIgLABQgHACgIAAIADgCIgEgBQACADgIgBQAGgDgKgBQgKgBADgDIgNADQgLACAEADIAFgBQAAACgLgBIAGgBQgNACgYgBIgmABIAHgBQAEgBgFAAQgPgBgTACIgiADQgBgCAPgBQAPABAAgDQgvACgpADQgGgDgQABQgTACgJgDQABADgTABQAAAAAAAAQAAgBAAAAQAAAAgBAAQgBgBgBAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBQgIACgNAAQgOAAAAgDQgBADgLgBQgMAAgEABQgGgBgMAAIgVAAQADACgKAAIgKABIABgBQgDgBgIABIgPAAIgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBABgMABQgMACgHgDQAEAAADgBQgTABgpAAQgoAAgVACIAHgDQgNgDgHAEQgIAEgIAAIh8gFIABAQQABAEACgGIgBAFQgBADABAEIABgBQgCAKABAjQABAggEAKQABAJgBAWQgBAUADAQQgBAEgBgEQgBgEgBAFIAEAZIgBgBQADANgEAhQgDAkACAQIgBgBQAAgBAAAAQAAAAAAABQgBAAAAABQAAABAAAAIAAAIIABgFQADAaABAfQgCgGgBAHQgBAIgBABQAAAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAABAHIAAALIgBAEIAEABIABAAIADABIAHAAQANgCABgDIA6gBIAAABQAEgCALABQALACABgCIgBACIgBABIALgBQgEABAAACQgBABAGABQACAAABgBQABAAAAAAQAAgBAAAAQAAAAAAAAQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEAEQAFAAABgDQABgCgHgBIBJgBIgCADQAZgCAMADQABAAAAgBQABAAAAgBQAAAAAAAAQAAAAAAgBQAHgBABACQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAIgEABIAegDQABACALABQALACAKAAIgCgCIgFgBIAIgBIAHAEIALgEIABAEIAKgDQAFgCAEAAIAYADIARAEQABgDAQAAQAQAAACgCQAPADAeAAIAyABIgCAAQAIABAHgCQAJgDAIAAIgFABQAcAFAugHQgBABAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQACABAEAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAFAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAIAEABIAKgDQA3AEAfgCQABABABAAQAAAAABAAQAAAAAAABQAAAAAAAAIgDACIBCgEIACADQADAAAFgCQADgBAHABQADAAgOACQAKABAFgCQAGgCAJAAIgEAEQAIABAGgCIAHgEQAKgBAJADQAJAEAPgBQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBIAUAAIAVAAQAGADgFAAQgFAAAGADIgQgCQAIABgIABQgKAAABACQAGAAAegDQAAABgGABQgGAAAEACIAHgBIgHABQACACAEgBIAIgBQABgCgCgCIABABQAHgDAQAAQAQAAAGgCIAAACQAHABATgFIACADQABACAKgBIAAgDQABgCAIAAIgFABQgEABADABQAIgBABABQADACAFABQADgBAGAAQAFAAABgDQADACAJADQgCgCAJgBQAJgBgBgCQACACgGACQgFACAGACQAWgDABgEIARACIgDABIAbgBQAQAAAFgDQgCADARAAQANAAgGADQANgBAHgDQgBACAKABQAMAAACABQAEgCAUgBQgCAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABIAHgBIAGADQABgBABAAQABAAABgBQABAAAAAAQAAgBgBAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAHABgCABIgBADIAOgFQADABADABQAKgDAHACIgMAAIAEADIAPgDQANACABAEIgCAHIgIABQABACAJAAQADABgKACIgQADQgOAAgBgEQAAgDgIAAIgWADIAAgCIgEAAIgCABQAAgBgKAAIgSAAIADACQgNACgSgDQgTgCgJAAIgOAEIgDgDIgJACQgGABgIAAQgagCgvAAQg0ABgVgBIAAAAQgUgDgcAEQghAFgSgDIACgBQgJAAACgBQABAAAAAAQAAgBAAAAQgBAAgBAAQgBgBgCAAQgDAEghABIAJgCIgCgCQgCAAgEAAQgHADgUACIgfABIgMgEIgQgEIgJAEQgIgCgKAEIAQgBIgBABIAEgBIAEgBQACABAAAAQABABABAAQAAAAAAAAQAAABAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgTAAgBgBIgLgBIgGABIgCgBQgLgBgeAFQAGgCgDgBIgFgDIAbABQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgHgBgMABQgOACgKgBIACgBIAAgBQgKgBgEAEQgBgCgJgBQgJgBgFABIgHACQgDABgIgBIAFgBQgHgBgGABIgHABIABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAgBgBQgLABgOAFIACgCIgXACQgMABgBgCQABAEgPgBIgZAAQADgBACgBQgOACgUgBIgkgBIgDgFQgGAAgIAFQgJAEgGAAgAAuDNQABAAABgBQABAAAAAAQABAAAAgBQAAAAAAAAIgNAAIAJACgAKnCXIACACIAAAAIAAAFIgCgHg");
	this.shape_13.setTransform(69.2,22.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#202020").s().p("AgDAAIAHAAIgEABIgDgBg");
	this.shape_14.setTransform(98.1857,42.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#202020").s().p("AAAACQgBgGgBAEQABgHACAEIACAEQAAABAAABQgBABAAAAQAAABAAAAQAAAAgBAAIgBgDg");
	this.shape_15.setTransform(0.75,13.5938);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#202020").s().p("AgBgCQADACAAACIgCABQAAgDgBgCg");
	this.shape_16.setTransform(138.2,13.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#202020").s().p("AAAALIAAgFQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQABgDgBgDIgCgHIgDgHQADgEADANIgBgBIAAABQADANgEAKIgBgGg");
	this.shape_17.setTransform(137.2,40.6938);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#202020").s().p("AAAAEIgBgIIACAEQABAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgBABIAAgBg");
	this.shape_18.setTransform(137.0583,43.1125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DEA7EA").s().p("AqnDSIAAmjIVPAAIAAGjg");
	this.shape_19.setTransform(69.65,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.5,45);


(lib.music = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FAFCFB").ss(5).p("AipAAIFTAA");
	this.shape.setTransform(25.8483,6.2971,0.661,0.5731);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFCFB").s().p("Ag+BZQgogWgJgpQgKgpAbgkQAbglAvgLQAugKAoAVQAnAWAJApIABACIAAAjQgGAfgZAYQgZAZgjAIQgQADgOAAQgeAAgagOg");
	this.shape_1.setTransform(31.3789,31.694,0.6609,0.5731);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FAFCFB").ss(5,1,1).p("AizEWIAAorIFnAAIAAIr");
	this.shape_2.setTransform(25.4967,15.8911,0.6609,0.5731);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAFCFB").s().p("Ag+BZQgogWgJgpQgKgpAbgkQAbglAvgLQAugKAoAVQAnAWAJApIABACIAAAjQgGAfgZAYQgZAZgjAIQgQADgOAAQgeAAgagOg");
	this.shape_3.setTransform(7.5848,31.694,0.6609,0.5731);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.music, new cjs.Rectangle(0,-2.5,39.9,40.1), null);


(lib.Leftarm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7C387").s().p("AiKCsQgeg6AFiIQAFiEAWADQAQACALA6IALA7IANheQANheATAGQASAGABBeIACBeIAZhlQAZhlAWAGQAXAGgPBlIgPBlIAfhOQAfhOAWAIQAWAIglB2QgTA6gYA5QATgRAVgQQArggAQAIQAQAIgVAoQgJAPgtBCQgZAlgYAPQgMAIgHAAg");
	this.shape.setTransform(48.5053,22.0603,1,1,5.743);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7C387").s().p("AiOGHQhTgkALhwQADgjANgmID0o5ICqA5QgYA0hCEBQghCAgcB3IgOAkQgSAqgWAgQgzBMg7AAQgVAAgWgJg");
	this.shape_1.setTransform(24.2751,75.8638,1,1,5.743);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Leftarm, new cjs.Rectangle(0,0,64.5,114.8), null);


(lib.grazie_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("grazie");
	}
	this.frame_2 = function() {
		playSound("grazie");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// sound
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5BPIAAidIBxAAIAAATIhcAAIAAAxIBVAAIAAARIhVAAIAAA1IBeAAIAAATg");
	this.shape.setTransform(96.95,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBPIAAidIAVAAIAACdg");
	this.shape_1.setTransform(86.375,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag9BPIAAgRIBgh5IhZAAIAAgTIB0AAIAAASIhgB4IBgAAIAAATg");
	this.shape_2.setTransform(76.475,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAvBPIgQgwIg9AAIgSAwIgVAAIA7idIAYAAIA4CdgAAYAPIgYhFIgYBFIAwAAg");
	this.shape_3.setTransform(62.45,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAmBPIgCgGIgBgLIgBgbQgBgQgKgFQgGgCgNgBIguAAIAABEIgVAAIAAidIBGAAQASAAAMAGQAVAKAAAbQAAAOgFAJQgGAJgLAEQAJAEAFAGQAFAHAAANIABAWQAAAIACAFQABAHAFACIAAAEgAgqgGIAvAAQAPAAAIgFQAJgHAAgPQAAgRgMgGQgHgDgKgBIgyAAg");
	this.shape_4.setTransform(47.625,22.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwBBQgWgXAAgoQAAgmAVgYQAUgWAfAAQAWAAAQAJQAXAMAFAfIgVAAQgDgRgMgIQgMgIgSAAQgVAAgOARQgPAQAAAfQAAAcAMASQAMASAaAAQAVAAAOgMQAOgNAAgcIgxAAIAAgRIBFAAIAABUIgOAAIgFgVQgLAMgIAFQgOAIgUAAQgcAAgTgSg");
	this.shape_5.setTransform(30.325,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202020").s().p("AgBgBQADAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_6.setTransform(38.45,0.57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202020").s().p("AgEAAIAIAAIgDABg");
	this.shape_7.setTransform(101.25,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202020").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_8.setTransform(107.4139,0.7125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202020").s().p("AAAABQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAIABAEIgBADIAAAAIAAgDg");
	this.shape_9.setTransform(127.375,17.1938);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202020").s().p("AgBAHIABgOQAAAJABgCQABAAgBAIQAAgHgCAGg");
	this.shape_10.setTransform(127.2125,22.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#202020").s().p("Aj7DfIgxAAIAAgEIgVAEQgHgEgeABQgiACgNgEIgCAGQgZAAgDgEIACAAQAAgCgFABIgLAAQgFABgCABQAAABAAAAQgBABAAAAQAAAAABAAQAAAAABABIgugCQgdAAgJgDQgOAAgYAEIgzABIABAAIgGgBQAAgSABgMQADgKACABIgDgdQgDgQABgPIACAFQABgHgDgMQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAQABgEgBgEIgCgHIACADQABgLgBgaQgDgeAAgLQABAHACgHQgDgHgBgRIgBgaIACAHQgBgKACgKQADgJgCgKIgDAMQACgRgEAEQAAgEACgDQACgCAAgIIACAEQAAAFABgDIADgVIABgKQgEABABgIQAAgEgEAEIACgoQABgZgCgOQACgBABgKIABgPIAcABQAJABgBACQAWAAANgEIgJABQAEgDAYAAQgZAEgHACIAmgEIAEAEQAEgCAFACQAFACAFgDIgBgBQAKAAAJgBQAKgDAJAAIgBACIALgCQAHAAAFACIgNABQABACAOACQAHAAABgCQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAgBAAIgEABQAfAAANgEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAVgCQALgCAGABIgEAAQAGADAPgCQAMgBABAEQABAAAAAAQAAAAgBAAQAAAAgBAAQgBAAgBABQgGAAAFABQAKACAEgDQAGgDAHABIgBABIAmgBQAIACAXAAQAYgBAJADQAAAAAAgBQgBAAAAAAQAAAAABgBQAAAAABAAIAFgBIgBABQAGAAAEgDQADABAIgBIAKgBQAAgBALAAQgHABAAACQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAIAAAKgCQALgEAIABIAKADQACgCAJgBIAHgBQAIACgBACIANAAQAGAAACgBIgHgCQALABARgCQAQgBAJABIgBAGQAFABALgBQAJgBAFABIgCgBIAFgCIgTABIAPgEIgXACIAIgCIgCgCQAGgBAIABQAGACAIgCQAAABABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABAAQAAABABAAQAHgBALACQAKABAEgBIgBABQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAAAABQAOgBABgBIgGgBIAHgBQAFgBAGABQAGgBABgCQAAAAAAgBQAAAAAAAAQgBAAgBAAQgBgBgBAAQACAAAEABQAAABABAAQAAAAABAAQAAABAAAAQgBAAAAAAQAIAAAFgDQADgCAKACQgBAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAGAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQACACgKgBQABADAIAAIALAAQAEgCAAgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBIAIACIgEgCIALgBIgHABIAOACQALABAIgBIgFABQgBABAAAAQAAABABAAQAAAAABAAQABABACAAQAJgBgBABQAAAAABABQAAAAAAABQABAAAAAAQABAAABABQAGAAAEgCQADgCALABQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIgEgBIAmABQgOgBALgCQgBABAHABIAMACIACgCQABABAAAAQABAAgBAAQgBABgBAAQgBAAgCABIgEgBQgGABACACQACADAIAAQAJgBABgCQAAAAABgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAHAAAJgDQAGgCAJABIALADIAPACQABAAAAgBQAAAAAAAAQgBAAgBgBQgBAAgCAAQgHgBAEgCQAKAEAUgDQAWgDAMACIgEAEIASAAIgIgCIAMAAQABAAABABQABAAABAAQAAAAAAABQAAAAgBABIAOgCIAOACIgHAAIgDABQAHAAARAAQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAABAAIAFABQAFgBALgBIAUAAIAAAAQAJAAAWABQAVACALgCIABAAIgCgBQgEgBAKgBIARgBQACACAEAAQAAAAAAgBQAAAAABAAQAAgBABAAQABAAABAAIAHAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABABAHAAQAGgBgBgCIAGACIAKABIgHAAIACABQAAABAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAFgCQABgBAFABIgJACIAJAAQgEABgBADIAIgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAgBABgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAEAAIAAANIACAeIgDgDQABAIABAEIAAAJQgBgIgDAAIABAPQABAJACACIgBgBIgDAoIABAUQAAALACAAQAAACgCAMQAAAKACADQAAACgBABQAAABAAAAQAAABAAAAQgBgBAAAAIgBgGQgBAEABAKQAAAIgCABQAAABAAABQABABAAABQAAAAAAAAQAAAAABgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAABQgDABABALQAAANgBAFQAAABAAAAQAAABABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAABABQAAABAAABQgCgBABAGIACADIgHALQABAHADAAQABAAABAKQgBADABAIQACAMgCAIIAAgDIgCgBIABAIIAAABQgCADABAEIAAAIQgBgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAgBABIAEANIgEgFIACAUQACANgEAEIAAgGQgDABAAAFIgBgPIABAGQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAIgDgaIADAHQABgFgBgCIgCgHQABgBAAgBQABAAAAgBQAAAAAAAAQABAAAAABQgBgPABgLQACAKACgFIgEgUIgDgUQgDgLACgTQACgSgBgHIgCAEQgBABAAAAQAAAAAAAAQAAAAAAgBQAAgBAAgBQACABAAgIQgCgGABgGQAAgIAAgDIACgIQAAAAABAAQAAgBAAAAQAAAAABgBQAAgBAAgBQABgBACAIQgCgHAAgOQAAgMgDgGIgBADIABgPQAAgJADgHIABANQACgFgCgIIgCgOIACAFQAAABAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAgEgDgOIACABQACgKgEgBQgCgDACgFIgCAAQAEgQABAKQAAgHgDgHIgBAEIgCADIgBgXIABAFIABgGIABgQIgSACIgHAAQgQABgOgDQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgFABIgigBIACgBIgeACIgZABQAAAAAAAAQgBAAAAAAQAAAAABAAQAAgBAAAAIADgBQgGAAgMgBQgJgCgCADIAEAAQgMAAgXABIgkACQgBAAAAAAQAAgBABAAQAAAAABAAQABAAACgBQACAAABAAQABAAABAAQAAAAAAgBQAAAAgBAAQgIgBgQABIgaAAIADgBQgIgBABACQACACgHgBQABgCgHAAIgDACQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgBQgEABgMAAQgNABgCABIAAgCQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQgGgBgMACQgUgCAEAAQgIgBAAACQgBABgFABIAMACIgVAAIAIgBIgOAAIgOABIAEACIgMACQAAgCgIgBQgEAAADgDQgNgBgRACIgbACIACAAIAAgBQgOAAgNADQAFgCgBgBIgLABQgFADgIAAQAHgCgIgBQABACgHABQAHgEgLgBQgJgBADgDIgMADQgLACAFADIAEgBQAAACgKAAIAFgBQgMABgWAAIgkABIAGgCQADgBgEgBQgOAAgRACIghADQAAgCAOAAQAOgBAAgCIhTAFQgFgDgPACQgSABgJgCQADADgUAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQAAgBgBAAQAAAAAAAAQAAAAAAAAQgHABgNAAQgNAAABgDQgCACgJAAQgMgBgDACIgSAAQgMAAgHAAQAFADgYgBQABAAABAAQABAAABAAQAAAAAAgBQAAAAgBAAQgBgCgJACIgNAAIgCgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAgBAAQAAABgLABQgMACgFgCIAFgCQgSABgmABQglAAgUABIAHgDQgNgCgGADQgHAEgIAAIg/gDIg1gCIABAPQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIACgDIgCAFQgBADABADIACgBQgCAKABAhQABAegEAJQABAJgBAVQAAATACAOQAAAEgCgEQAAgBAAAAQgBgBAAABQAAAAAAABQAAABAAABIACAYIAAgBQADALgEAgQgDAhACAOIAAgBQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABIAAAHQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABgBIABgDQACAXAAAeQAAgFgBAGQgCAHgBABQAAAAAAAAQABABAAAAQAAAAABAAQAAABABAAQABgBAAAIQABALgCANIAAAJIgBABIAAAGIAAAAQAFgCAAgCIAzgBIAAABQAEgCAKABQAKACACgBIgCABIAAACIAKgCQgFABAAACQAAACAGAAQABAAABgBQABAAAAAAQABAAAAgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQABAAAAAAIADACQAFAAABgCQABgCgGAAIBEgBIgCACQAagBAJACQABgBAAAAQABAAAAgBQAAAAAAAAQgBAAAAAAQAHgCABACQABACAIgCIgJACIAdgCQAAABAKACQALABAIgBIgBgBIgEgBIAIgBIAFAEIALgDIABACQAEABAGgDIAIgBIAWACIAQADQABgCAOAAQAQABACgCQAOACAcAAIAwAAIgDABQAHACAIgDQAIgDAHABIgDABQAVADAvgFQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAGABQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQABAAAAAAQABAAABAAQABAAABAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIADABIAKgDQA0AEAcgCQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIgCABIAggBIAdgCIABADQAEAAAFgCQADgCAGACQADAAgOABQAKACAFgCQAGgDAIABIgFADQAJACAFgCIAHgDQAJgCAIADQAJAEANgCQABAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAUAAIAUgBQAEADgEAAQgFgBAGADIgPgBQAHACgHAAQgJABAAABIARgBIASgCQAAABgGAAQgFABADACIAGgBIgGACQACABAEAAIAIgBQABgCgDgEIABABQAGgCAQAAQAQAAAEgBIAAABQAIAAAQgEIADAEQABABAJAAIABgEQAAgCAHAAIgEABQgBAAgBAAQAAABAAAAQAAAAAAAAQABABABAAQAGgBACABIAHADQADgCAGABQAEAAABgCQACACAJABQgCgBAIgBQAJgCgBgBQACABgFADQgFACAGACQAUgDABgEIARADIgFABIAagCQAPAAAGgEQgDAEAQAAQAMAAgFACQALAAAHgDQgBACAKABQALAAACABQAEgDATAAQgCAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAHAAIAGACQABAAABAAQABAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQACAAABAAQABAAAAABQABAAAAAAQAAABAAAAIgBACIANgEQAFABABACQAJgDAGACIgMAAIAFACIANgDQAOACABADIgDAHIgHABQAAADAJAAQACABgIACIgQACQgNAAAAgCQAAgDgIgBIgUADIgBgCQgCAAgEACQABgCgKAAIgRAAIADACQgNACgQgCQgTgEgIACIgMADIgDgDIgKADQgEAAgIAAQgXgCguABQgvAAgVgBIAEACQgUgEgdAEQgfAEgRgDIADgBQgJAAACAAQABgBAAAAQAAgBgBAAQAAAAgBAAQgBgBgCAAQgCAEgfAAIAIgBIgDgBQgCgBgDAAQgHADgSABIgeACIgKgDIgQgGIgIAGQgHgCgKACIAPAAIAAAAIACAAIAGAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgCADQgTAAgCgCIgPgBIgCgBQgKgBgcAHQAGgCgEgCIgEgDIAaAAIgDgBQgGgBgMABQgNABgJgBQABAAABAAQABAAAAAAQAAgBAAAAQAAAAAAAAQgLgCgDAEQgCgCgHgBQgIgBgHABIgGADIgKAAIAFgCQgGgBgFACIgHAAIAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgKAAgEACIgKADIABgDIgVADQgLABgBgCQAAAEgNAAIgXgBQAAgBABAAQAAAAABAAQAAAAABgBQABAAAAgBQgMADgVgBIgggBIgEgEQgFAAgIAEQgHAEgHAAgABGDdQABABAFAAIABgCgAAfDNQABAAABgBQABAAAAAAQAAAAAAgBQAAAAgBgBIgLAAQAKABgBACgAAwDKIAGAAIgGAAg");
	this.shape_11.setTransform(63.7,22.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#202020").s().p("AgDAAQAIgBgBABIgEABIgDgBg");
	this.shape_12.setTransform(89.6357,42.4167);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#202020").s().p("AAAACQgBgGgBAEQABgGABADIADAEIgCAEIgBgDg");
	this.shape_13.setTransform(0.75,12.8426);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#202020").s().p("AgBgBQADABAAABIgCABQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBgBAAg");
	this.shape_14.setTransform(127.2,15.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#202020").s().p("AAAAKIAAgEQADABgBgIIgCgHIgCgGQACgEAEAMQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAEAMgEAKIgBgGg");
	this.shape_15.setTransform(126.2,40.8515);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#202020").s().p("AAAAEIgBgHIADADQAAAAAAABQAAAAAAABQAAABAAAAQgBAAAAABIgBAAIAAAAg");
	this.shape_16.setTransform(126.0333,43.1375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D79548").s().p("ApwDSIAAmjIThAAIAAGjg");
	this.shape_17.setTransform(64.15,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149.2,45);


(lib.gracias_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("gracias");
	}
	this.frame_2 = function() {
		playSound("gracias");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// sound
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsBEQgRgPABgZIAUAAQABANAFAJQAKAPAZAAQALAAAKgDQASgHAAgRQABgNgJgFQgHgGgRgEIgUgFQgUgEgIgFQgPgKAAgTQAAgWAOgNQAPgOAaAAQAXAAARAMQARAMAAAaIgUAAQgCgMgFgHQgJgNgWAAQgSAAgIAIQgIAIAAALQAAALAKAGQAFADAWAFIAVAFQAPAEAJAFQAOAMAAAVQABAagUALQgSALgYAAQgcAAgQgPg");
	this.shape.setTransform(108.55,22.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvBPIgQgwIg9AAIgSAwIgVAAIA7idIAYAAIA4CdgAAYAPIgXhFIgZBFIAwAAg");
	this.shape_1.setTransform(94.05,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKBPIAAidIAVAAIAACdg");
	this.shape_2.setTransform(83.825,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsBCQgYgVAAgtQAAgjASgXQAUgYAiAAQAdAAARAPQAQARACATIgVAAQgEgPgKgIQgKgKgTABQgWAAgOAQQgOAQAAAhQAAAcANARQAMARAZAAQAXAAAMgSQAGgKADgPIAVAAQgDAZgPARQgTAUgfAAQgaAAgTgRg");
	this.shape_3.setTransform(72.625,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAvBPIgQgwIg+AAIgRAwIgWAAIA8idIAXAAIA6CdgAAZAPIgYhFIgZBFIAxAAg");
	this.shape_4.setTransform(57.45,22.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAmBPIgCgGIgBgLIgBgbQgBgQgKgFQgGgCgNgBIguAAIAABEIgVAAIAAidIBGAAQASAAAMAGQAVAKAAAbQAAAOgFAJQgGAJgLAEQAJAEAFAGQAFAHAAANIABAWQAAAIACAFQABAHAFACIAAAEgAgqgGIAvAAQAPAAAIgFQAJgHAAgPQAAgRgMgGQgHgDgKgBIgyAAg");
	this.shape_5.setTransform(42.625,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwBBQgWgXAAgoQAAgmAVgYQAUgWAfAAQAWAAAQAJQAXAMAFAfIgVAAQgDgRgMgIQgMgIgSAAQgVAAgOARQgPAQAAAfQAAAcAMASQAMASAaAAQAVAAAOgMQAOgNAAgcIgxAAIAAgRIBFAAIAABUIgOAAIgFgVQgLAMgIAFQgOAIgUAAQgcAAgTgSg");
	this.shape_6.setTransform(25.325,22.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202020").s().p("AgBAAQADgBAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAABg");
	this.shape_7.setTransform(38.45,0.5938);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202020").s().p("AgEAAIAIAAIgDABg");
	this.shape_8.setTransform(101.25,2.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202020").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_9.setTransform(107.4139,0.7125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202020").s().p("AAAABQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAIABAEIgBADIAAAAIAAgDg");
	this.shape_10.setTransform(127.375,17.1938);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#202020").s().p("AAAAEIgBADIABgOQAAAJABgCQACAAgCAIQAAgBAAgBQAAAAAAgBQAAgBAAAAQgBAAAAAAg");
	this.shape_11.setTransform(127.1875,22.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#202020").s().p("Aj7DfIgxAAIAAgEIgUADQgIgDgeACQghABgPgEIgBAGQgZAAgDgDIACAAQAAgDgFABIgLAAQgFABgBACQgBAAAAAAQgBABAAAAQAAAAABAAQAAAAABABIgugCQgdAAgJgEIg9AGIgbAAIABAAIgHgBIACgeQACgKACABIgEgdQgCgRABgOIABAFQACgGgDgNQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQACgEgCgEIgBgGIABACQACgMgCgZIgCgqQABAGADgFQgEgHgBgRIgBgZIACAGQgCgKADgKQADgIgCgLIgDAMQABgHgBgEQAAgFgCADQABgEACgDQABgBAAgJQABALACgFIAEgVIAAgKQgEABABgHQAAgGgEAGIACgqQABgYgCgOQACgBABgJIABgQIAcABQAJABAAACQAUABAOgFIgJABQAEgCAYAAQgZADgHACIAmgEIAEAEQAFgBAEABQAFABAFgCIgBgBQAKAAAJgBIATgDIgBACIALgBQAIgBAEACIgNABQABABAOADQAIAAAAgCQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAgBAAIgEABQAfgBANgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAVgCQALgCAGACIgEAAQAGABAPgBQALgBACADQABABAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQgGABAFABQAKABAEgCQAGgDAIABIgDABIAngBQAHACAYgBQAYAAAKADQgBAAAAgBQgBAAAAAAQAAAAABgBQAAAAABAAIAEgCIAAABQAGABAEgDQADABAIgBIAKgBQAAgBALAAQgHABAAACQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAIABAKgDQALgDAIABIAKACQACgDAIAAIAIgBIAGACQAAAAABAAQAAABAAAAQAAAAABAAQAAABgBAAIAMAAQAIAAABgBIgHgBQALAAARgBQAQgDAIACIAAAGQAFABALgBQAKgBAEABIgCgBIAFgCIgTABIAPgDIgXACIAIgCIgCgDIAOAAQAGACAIgCQAAABABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAGgBALACQAKACAFgCIgBAAQgBAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAOAAABgBIgGgBIAHgBQAFgBAGABQAGgBABgCIAAgBIACAAQAAABABAAQAAAAAAAAQABABgBAAQAAAAAAABQAIAAAFgDQADgCAKABIgCABIAGAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQACABgKAAQABACAIAAIALAAQABgBABAAQABAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBIAIACIgEgDIALAAIgHABIAOACQAMABAHgBIgFACQgBAAAAAAQAAABABAAQAAAAABAAQACABABAAQAIgBAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABAAQAGAAAEgBQACgCAMABQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAgBAAIgDgBIAmABQgOgBAMgCQgCACAHABIAMABIACgBQABAAAAAAQABAAgBABQAAAAgCAAQgBAAgCABIgEgBQgGABADACQABADAIAAQAIgBACgCQAAAAABgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAHAAAJgCQAGgDAJABIALADIAPACQABAAAAgBQABAAgBAAQgBAAgBgBQgBAAgBAAQgIgBAEgBQAKADAUgCQAWgEAMADIgEADIASAAIgIgCIAMAAQABAAABABQABAAABAAQAAAAAAABQAAAAgBAAIAOgBIAOABIgHAAIgDABQAIABAQgBQAAABAAAAQAAAAAAAAQAAABAAAAQABAAABAAIAFABQAFgBALgBIAUgBIAAABQAIAAAYABQATABAMgBIABAAIgCgBQgEgBALgBIAQgBQADACACAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAIAHgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABACAHAAQAGAAgCgDIAHACIAKABIgHAAIACABQAAABAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAEgCQADAAAEAAIgJADIAIgBQgEABAAADIAHgBQABAAAAAAQAAgBABAAQAAAAABgBQAAgBABgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBIAEAAIACAsIgDgCQAAAFACAGIAAAJQgBgIgCAAIAAAQQABAHABACIgCAnIAAAVQAAALACAAQABACgDAMQgBAKADAEQAAABgBABQAAABAAAAQAAABAAAAQgBAAAAgBIgBgGQgBAFABAJQAAAHgCACQAAABAAABQABABAAABQAAAAAAAAQAAAAABgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQgCACAAAMQAAAMgBAGQAAAAAAAAQAAABABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAABABQAAABAAABQgCgBABAHIACACIgHAKQACAIACAAQABgBABAMIAAgBQgCADACAIQACALgCAJQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgCAAIABAIIAAABQgCAEABADIAAAIQgBgBAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBABIAEANIgEgFIACAVQABAMgDAEIAAgGQgDABAAAFIgBgPIABAGQAAABAAAAQABABAAAAQAAABAAAAQABAAAAAAIgDgaIADAHQACgFgCgCIgBgHQAAgBAAgBQABgBAAAAQAAAAABAAQAAAAAAABQgBgQABgKQACALACgGIgEgUIgDgUQgDgLACgTQACgSgBgHIgCAEQAAABAAAAQgBAAAAAAQAAAAAAgBQAAgBgBgCQADACAAgIQgCgGABgHQABgGgBgEIACgIQAAAAAAAAQABgBAAAAQAAAAAAgBQABgBAAAAQABgCACAIQgCgHAAgOQAAgMgDgGIgBADIACgPIgBABQAAgLADgGIABANQACgFgCgIIgCgOIACAFQAAABAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQABgFgDgNIACAAQABgJgDgBQgCgDACgGIgCAAQAEgPABAKQAAgHgDgHIgBAEIgCAEIgBgYIABAGIABgHIABgQIgZACQgQABgOgEQAAABABAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgFABIgigBIADgBIgfACIgZABQAAAAAAAAQgBAAAAAAQAAAAABAAQAAgBAAAAIADgCQgGABgMgCQgJgBgBACIADABQgMAAgXABIgkADQgBgBAAAAQAAAAABgBQAAAAABAAQABAAACgBQACAAABAAQABAAABAAQAAAAAAgBQAAAAgBgBQgIgBgQABIgaABIADgBQgJgBACABQACADgHgBQABgBgHgBIgDACQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgCQgEACgMAAQgMABgDACIAAgDQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQgGgBgMADQgUgCADAAQgHgBAAABQgBACgFABIAMACIgUABIAIgCQgFgBgKABIgPACIAFABIgMACQAAgCgIgBQgEgBADgCQgNgBgRACIgcADIADgBIAAgBQgMgBgPAEQAFgBgBgBIgLABQgFABgIABQAFgCgGgBQABACgHABQAHgEgLgCQgJAAADgDIgMADQgJACACACQgMABgWABIgkAAIAGgBQADgBgEAAQgOgBgRACIghADQAAgCAOAAQAOgBAAgCQgsABgnAEQgFgEgPACQgSACgJgCQACACgTABQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgBAAgBAAQAAgBgBAAQAAAAAAAAQAAAAAAAAQgHACgNgBQgNAAABgDQgCACgKAAQgLgBgDACQgGgBgLAAIgUAAQACACgIAAIgKABIAAgBQgCgBgHABIgOAAIgCgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAgBAAQAAACgLAAQgMABgFgCQADABACgCQgSACgmgBQglAAgUACIAHgDQgNgDgGAEQgHAEgIAAIhzgFIAAAPQABADABgGIgBAFQAAADAAAEIACgCQgCALABAgQABAegEAJQABAJAAAVQgCATADAOQgBAEgBgEQAAgBAAAAQgBAAAAAAQAAAAAAABQAAABAAABIACAYIAAgBQADALgDAfQgEAiACAOIAAgBQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABIgBAHIADgEQACAYAAAdQAAgGgBAHQgCAHgBABQAAAAAAAAQABABAAAAQAAAAABAAQAAABABAAQAAgBABAIQAAAMgBANIAAAJIgBABIAAAEIAAABQAFgCAAgBIAzgCIAAABQAEgCAKABQAKABACAAIgCABIAAABIAKAAQgEABgBABQAAACAGAAQABAAABgBQABAAAAAAQABAAAAgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQABAAAAgBIADADQAFAAABgCQABgCgHAAIBFgBIgCACQAYgCALADQABgBAAAAQABAAAAgBQAAAAAAAAQgBAAAAAAQAHgCABACQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIgEABIAdgCQAAABAKABQALACAIgBIgBgBIgEgBIAHAAIAGADIALgDIABADIAJgDQAGgBADAAIAWACIAQAEQABgEAOABQAQAAACgCQAOADAcAAIAwAAIgDABQAHABAIgCQAIgDAHAAIgDABQAMACAWgBQASAAAQgCQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAGABQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQABAAAAAAQABAAABAAQABAAABAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIADABIAKgDQA0AEAdgCQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAAAIgCABIAfgBIAegCIACADQADAAAFgCQADgBAHABQACABgOAAQAKACAFgCQAGgCAIAAIgFADQAJACAFgCIAHgDQAJgDAIAEQAJAEANgCQABAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAUAAIAUgBQAEADgEAAQgFAAAGACIgPgBQAHACgHAAQgJAAAAACQAGAAAdgDQAAABgGABQgFAAADACIAGgBIgGACQABABAFgBIAIAAQABgCgEgEIACABQAGgCAQAAQAPAAAFgBIAAABQAIABARgFIACADQABACAJgBIAAgDQABgCAHAAIgEABQgBAAgBAAQAAABAAAAQAAAAAAAAQABABABAAQAMgCADAFQADgBAGAAQAEAAABgCQACABAJACQgBgBAHgBQAJgCAAgBQABABgGADQgEACAGACQAUgDABgEIARACIgFABIAagBQAQgBAEgCQgBACAPABQANAAgGADQAMgBAGgDQgBADAKAAQALAAACABQAEgCATgBQgCAAgBABQgBAAAAAAQgBAAAAABQAAAAAAAAQAGgBABABIAGADQABgBABAAQABAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQACAAABAAQABAAAAABQABAAAAAAQAAABAAAAIgCACIAOgEIAGACQAJgCAGABIgLAAIAEADIANgDQANADACADIgDAGIgIACQACACAIAAQACABgIACIgQACQgNAAAAgDQAAgDgIAAIgVADIAAgCIgEAAIgCABQABgBgKAAIgQAAIACACQgMACgRgDQgSgCgJABIgMADIgDgDIgKACQgEACgIgBQgYgDgtABQgwACgUgCIAAAAQgTgDgaAEQgeAFgSgDIADgBQgJABACgCQABAAAAAAQAAgBgBAAQAAAAgBAAQgBgBgCAAQgCAEgfAAIAIgBIgDgCQgCgBgDABQgHADgSABIgeACIgLgEIgPgEIgIAEQgHgBgKACIAPAAIAAAAIACAAIAFgBQABABABAAQABABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAIgQAAIAEAAIABgBIgHAAIACABIgEgBIgJgBIgHABIgBgCQgKAAgcAGQAGgDgEgBIgEgDIAaAAIgDgCQgGAAgMAAQgNACgIgBIABgBIABgBQgLgBgDAEQgCgCgHgBQgJgBgGABIgGACQgDABgHgBIAFgBQgGgBgGABIgGABIAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBgBQgKABgEABIgKAEIABgDIgVADQgLABgBgCQAAADgNABIgXgBQAAgBABAAQAAAAABAAQABAAAAgBQABAAAAAAQgNACgUgBIgggBIgEgFQgFABgIAEQgHAEgHAAgAAfDNQABAAABgBQABAAAAAAQAAAAAAgBQAAAAgBAAIgLAAQAKABgBABgAJwCbIABACIABAAIAAAEIgCgGg");
	this.shape_12.setTransform(63.7,22.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#202020").s().p("AgDAAIAHAAIgEABg");
	this.shape_13.setTransform(89.6357,42.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#202020").s().p("AAAACQgBgGgBAEQABgGABADIADAEIgCAEIgBgDg");
	this.shape_14.setTransform(0.75,12.8426);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#202020").s().p("AgBgBQADABAAABIgCABQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_15.setTransform(127.2,15.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#202020").s().p("AAAAKIAAgEQADABgBgIIgCgHIgCgGQACgEADAMQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQADAMgDAKIgBgGg");
	this.shape_16.setTransform(126.2,40.8515);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#202020").s().p("AAAAEIgBgHIACADQABAAAAABQAAAAAAABQgBABAAAAQAAAAAAABIgBAAIAAAAg");
	this.shape_17.setTransform(126.0583,43.1375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BAC74D").s().p("ApwDSIAAmjIThAAIAAGjg");
	this.shape_18.setTransform(64.15,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.2,45);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHAaIAAgzIAPAAIAAAzg");
	mask.setTransform(0.825,2.625);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96BDD8").s().p("AABAaQgGAAAAgHIgCglQgBgDADgCQACgCACAAQAGgBABAHIACAlQABAHgHABg");
	this.shape.setTransform(0.8267,2.6191);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,1.7,5.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgHAaIAAgzIAPAAIAAAzg");
	mask.setTransform(0.825,2.625);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96BDD8").s().p("AABAaQgGAAAAgHIgCglQgBgDADgCQACgCACAAQAGgBABAHIACAlQABAHgHABg");
	this.shape.setTransform(0.8267,2.6191);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,1.7,5.3), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah0BwIAAjfIDpAAIAADfg");
	mask.setTransform(11.675,11.15);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96BDD8").s().p("Ag0BwQgGAAgBgHQgIhZAthQQgaASgQAGQgOAEgIAAIgGAAQgJgBgGgGQgHgGgBgIQgDgOALgKQAGgGANgGQAXgIA+AEIAAAAIAogKQArgIAUALQAOAGACALQAEAPgPAIQgHAEgOABIgBAAQgWAAgxgSQAkBNgBBWQAAAHgHAAQgDAAgCgCQgDgCAAgDQABhUgihJQgZAngLAsQgMAuAEAuQAAAHgGABgAhThPQgJADgFAFQgFAFABAGQABAIALACQAHABANgFQATgGAegXIgVgBQgdAAgNAFgAAVhZQApAPAWAAQAJAAAFgCQAFgEgBgEQgBgEgHgDQgKgFgQAAQgTAAgcAHg");
	this.shape.setTransform(11.6859,11.1438);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,23.4,22.3), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiIALIAAgVIERAAIAAAVg");
	mask.setTransform(13.7,1.075);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96BDD8").s().p("AhIAEQAAgHAHAAICDgHQAGgBABAIQAAAHgHAAIiDAHQgGAAgBgHg");
	this.shape.setTransform(20.075,1.0694);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#96BDD8").s().p("AA3AKIhugFQgHAAAAgHQABgIAHABIBuAGQAHAAAAAGQAAAHgHAAg");
	this.shape_1.setTransform(6.275,0.9944);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,27.4,2.2), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiIALIAAgVIERAAIAAAVg");
	mask.setTransform(13.7,1.075);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96BDD8").s().p("AhIAEQAAgHAHAAICDgHQAGgBABAIQAAAHgHAAIiDAHQgGAAgBgHg");
	this.shape.setTransform(20.075,1.0694);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#96BDD8").s().p("AA3AKIhugFQgHAAAAgHQABgIAHABIBuAGQAHAAAAAGQAAAHgHAAg");
	this.shape_1.setTransform(6.275,0.9944);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,27.4,2.2), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj6BBIAAiBIH1AAIAACBg");
	mask.setTransform(25.1,6.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7C387").s().p("AgmA0QgVgRgEgbQgDgaAQgVQAQgVAbgEQAZgDAVARQAVAQADAbQAEAagQAVQgRAVgaAEIgIAAQgVAAgRgNg");
	this.shape.setTransform(43.8008,6.5257);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7C387").s().p("AgmA0QgVgRgDgbQgEgaARgVQAPgVAbgEQAZgDAVARQAVAQAEAbQADAZgRAWQgQAVgaAEIgIAAQgVAAgRgNg");
	this.shape_1.setTransform(6.4,6.5257);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,50.2,13.1), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghHAYnMAAAgxNMBCPAAAMAAAAxNg");
	mask.setTransform(211.975,157.525);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnYDBIAAmBIOxAAIAAGBg");
	mask.setTransform(47.275,19.275);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46291A").s().p("ABAAmIhugLQgwgEAFgdQAEgZAggFQAhgFAnAPQAjANAaAWQAHAGACAGQADAIgFAFQgEAFgLAAIgIgBg");
	this.shape.setTransform(83.5327,3.836);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#46291A").s().p("AhWAiQgFgFADgIQACgGAHgGQAagWAjgNQAngPAhAFQAgAFAEAZQAFAdgwAEIhuALIgIABQgLAAgEgFg");
	this.shape_1.setTransform(9.6173,3.836);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#46291A").s().p("AABA4Qg4gCgpgcQgwgfgPgyQARAUASAPQARAOAXAJQAlATAxABQAuACAqgSQAsgVAagpQgKA0gxAgQgpAbg1AAIgGAAg");
	this.shape_2.setTransform(78.525,30.4788);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#46291A").s().p("AhkAdQgWgPgQgVQgQgWgFgaQAaApAsAVQAqASAugCQAxgBAlgTQAXgJARgOQASgPARgUQgPAygwAfQgpAcg4ACIgGAAQg1AAgpgbg");
	this.shape_3.setTransform(16.025,30.4788);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#46291A").s().p("AhKAPQgqgQgUgcQAcATAnAKQAiAIAjAAQAjABAkgJQAngJAbgUQgTAcgqARQgkAOgoAAQgogBgigOg");
	this.shape_4.setTransform(47.075,35.55);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,94.6,38.6), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AsJL1IAA3pIYTAAIAAXpg");
	mask_1.setTransform(77.75,75.725);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#912C8F").s().p("AAmLNQgegSgYgXIgUgTQgdAagxAUQhjAohmgdQhngdgghfQgKgegCggIAAgbQgrAVg3ADQhsAHg1hbQg1haAhhpQAKghASgfIAPgYQgbgVgXgqQgthTAahnQAZhoBIg1QAkgaAfgFQgKgbgBgmQgChMAsg1QArg1BLgQQAmgJAdACQAHgsAdgwQA7hfBxgRQBugRBWBFQhAgIgrANQg1AQgmAzQgkAygGBCQgFBDAcA3QgtAOghAoQggAogHAxQgHAxAVAwQAVAwAoAaQg2AIgoAuQgnAtgDA6QgCA6AjAyQAkAxA1ANQgLA4AZA3QAZA4AxAZQAwAZA5gMQA4gNAjgrQARA7AxAoQAxAoA7ABQA6ACAzglQAzglAUg7QACAZAPAUQAQAUAWAGQAXAGAXgKQAWgKAMgUQAbBOBTAeQBTAeBEgoQgVAZgcATQgpAcgxAJQg/AMhAgfIgzghQgJAlggApQhABRhuAVQgeAFgdAAQhOAAhHgog");
	this.shape_1.setTransform(77.7388,75.7163);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(0,0,155.5,151.5), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EghHAYnMAAAgxNMBCPAAAMAAAAxNg");
	mask_1.setTransform(211.975,157.525);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EghHAYnMAAAgxNMBCPAAAMAAAAxNg");
	mask_1.setTransform(211.975,157.525);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg6lAnEMAAAhOHMB1LAAAMAAABOHg");
	mask_1.setTransform(375,250);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAXgcIgTAXQgTAXgHAL");
	this.shape.setTransform(171.75,257.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAkgsIgWAdQgaAigXAa");
	this.shape_1.setTransform(172.575,262.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAJicIgGB/QgFCIgGAy");
	this.shape_2.setTransform(169.725,252.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAEC4IgCgHQgDgRAHhJQAIhIgHgZQgJgngFg3QgEg5AGgW");
	this.shape_3.setTransform(198.6475,264.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAhgUQgjAUgeAV");
	this.shape_4.setTransform(190.1,241.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAwgmQg2AmgpAn");
	this.shape_5.setTransform(180.675,248.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgNAlQAAgHADgNQAHgYARgc");
	this.shape_6.setTransform(196.9969,262.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAmh0IgNAKQgQAOgMAWQgoBGAGB1");
	this.shape_7.setTransform(193.8051,261.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#95BDD8").s().p("AAAFRQhxiAhchbIhFhCIAGnfIATABQAZAFAeASQBhA4BwClQByCmBUDIQAqBlAUBEQgWAtguAUQgWAKgYAAQhJAAhYhbg");
	this.shape_8.setTransform(196.325,262.8234);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A57F58").s().p("ABhGHQhNgwiBi5IiMjXIgHljIAZAFQAhAKAlAcQB4BYB7DjQAQAkBaCiIAwBzQApB3gnASQgjARghAAQgmAAgjgWg");
	this.shape_9.setTransform(195.6316,261.8541);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(167.9,220.1,55.900000000000006,85.50000000000003), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjvA9IAAh5IHfAAIAAB5g");
	mask_1.setTransform(24,59.125);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A57F58").s().p("AglAwQgUgPgDgZQgDgYAQgVQAPgUAZgDQAYgDAUAQQAUAPAEAZQADAYgPAUQgQAUgZAEIgIAAQgUAAgRgNg");
	this.shape_5.setTransform(48.8758,6.1179);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A57F58").s().p("AglAwQgUgPgDgZQgDgYAQgVQAPgUAZgDQAYgDAVAQQAUAPADAZQADAYgPAUQgQAUgZAEIgIAAQgUAAgRgNg");
	this.shape_6.setTransform(13.1258,6.1179);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Eg6lAnEMAAAhOHMB1LAAAMAAABOHg");
	mask_2.setTransform(375,250);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_2, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Eg6lAnEMAAAhOHMB1LAAAMAAABOHg");
	mask_2.setTransform(375,250);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_2, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AwfRqMAAAgjTMAg/AAAMAAAAjTg");
	mask_1.setTransform(105.6,150.125);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmaQRQi9hViTidQiSichQjLQhTjSAAjmQAAjlBTjSQBQjLCSicQCTidC9hVQDEhZDWAAQDXAADEBZQC9BVCTCdQCSCcBQDLQBTDSAADlQAADmhTDSQhQDLiSCcQiTCdi9BVQjEBZjXAAQjWAAjEhZg");
	this.shape_2.setTransform(346.1,113);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,0,0), null);


(lib.ALA4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BAC74D").s().p("AC2FbQhDgliRgtIiGgmQhLhDhCheQiEi6AriEIAcgcQAighAfgWQBkhJAlA4IAnAZQAyAmA9BAQDCDKDhF8QgdANgrAFQgSACgSAAQg/AAg0geg");
	this.shape.setTransform(40.5624,37.7184);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ALA4_2, new cjs.Rectangle(0,0,81.1,75.5), null);


(lib.ALA4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BAC74D").s().p("AC2FbQhDgliRgtIiGgmQhLhDhCheQiEi6AriEIAcgcQAighAfgWQBkhJAlA4IAnAZQAyAmA9BAQDCDKDhF8QgdANgrAFQgSACgSAAQg/AAg0geg");
	this.shape.setTransform(40.5624,37.7184);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ALA4, new cjs.Rectangle(0,0,81.1,75.5), null);


(lib.ala3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BAC74D").s().p("AC2FbQhDgliRgtIiGgmQhLhDhCheQiEi6AriEIAcgcQAighAfgWQBkhJAlA4IAnAZQAyAmA9BAQDCDKDhF8QgdANgrAFQgSACgSAAQg/AAg0geg");
	this.shape.setTransform(48.6597,22.7416,1.2078,0.6711,0,0,-5.8917);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.4,44.7);


(lib.ala1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BAC74D").s().p("AC2FcQhDgmiRgtIiGgmQhLhDhCheQiEi6AriEIAcgcQAighAfgWQBkhJAlA4IAnAZQAyAmA9BAQDCDKDhF8QgdANgrAFQgSACgSAAQg/AAg0gdg");
	this.shape.setTransform(40.5624,37.7434);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ala1, new cjs.Rectangle(0,0,81.1,75.5), null);


(lib.Group_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(25.1,6.5,1,1,0,0,0,25.1,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,50.2,13.1), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(13.7,1.1,1,1,0,0,0,13.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,27.4,2.2), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(13.7,1.1,1,1,0,0,0,13.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,27.4,2.2), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(11.7,11.2,1,1,0,0,0,11.7,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,23.4,22.3), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(0.8,2.6,1,1,0,0,0,0.8,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,1.7,5.3), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(0.8,2.6,1,1,0,0,0,0.8,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,1.7,5.3), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_4_1();
	this.instance_1.setTransform(77.8,75.7,1,1,0,0,0,77.8,75.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,155.5,151.5), null);


(lib.Group_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_5();
	this.instance_1.setTransform(47.2,19.2,1,1,0,0,0,47.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,94.6,38.6), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EghHAYnMAAAgxNMBCPAAAMAAAAxNg");
	mask_2.setTransform(800.475,157.525);

	// Layer_3
	this.instance = new lib.Group_6();
	this.instance.setTransform(803.6,272.75,1,1,0,0,0,47.2,19.2);
	this.instance.alpha = 0.7188;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2A6C4").s().p("AAPBqQgIAAgHgHQgFgGgDgJQgDgKAAgZQgBgrgRgnQgLgYgCgJQgEgXAQgMQARgMAOASQAYAZAMBBQAIAxgBAWQgCASgFAIQgJAOgMAAIgBAAg");
	this.shape_3.setTransform(885.8722,245.6068);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2A6C4").s().p("AAgApQgOgPgIgGQgTgQgaAAIgMABIgMABQgPgBgHgIQgFgGAAgJQABgJAFgHQAJgMASgDQBBgGAjASQAgARAGAaQAEAPgIAPQgJAPgOAAIgBAAQgMAAgNgKg");
	this.shape_4.setTransform(818.9533,189.6149);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2A6C4").s().p("AAeA0QgJgDgLgKIg5gvQgNgKgBgIQgBgHAFgHQAEgGAHgDQAfgLAgAUQAfATALAgQAEALgBALQgCAMgIAFQgFAEgHAAQgEAAgGgCg");
	this.shape_5.setTransform(858.4177,206.3969);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B53567").s().p("AgDACIAFgEIACAFg");
	this.shape_6.setTransform(862.95,312.775);

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.setTransform(783.2,259.75,1,1,0,0,0,77.8,75.7);
	this.instance_1.alpha = 0.1797;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE7E9F").s().p("AiOLkQgfgSgZgXIgTgTQgdAagxAUQhjAohngdQhngdgghfQgKgegBggIAAgbQgsAVg2ADQhtAHg1hbQg1haAhhpQALghARgfQAJgPAHgJQgcgVgWgqQgthTAZhnQAahoBIg1QAkgaAegFQgJgbgBgmQgChMArg1QAsg1BLgQQAlgJAdACIAHgcQALgiATgeQA7hfBwgRQA0gIAvALQAzAMAvAlQAdAXAYAeQALAPAGAKQAEgMAJgTQASglAZgdQBOhfB1APQB1AQA/BWQAgAsAIAoIATgJQAZgJAbgEQBWgOBNApQBNApAgBaQAQAtABAlIAaADQAgAIAdARQBdA2AeCFQAfCFgyBlQgYAzgfAYIANAXQAQAdAIAgQAcBmgyBhQgrBUhhAcQg8ARhDgHIgPgCIgKAMQggAlgrAWQgeAQgiAGQg/AMg/gfIgzghQgKAlggApQg/BRhvAVQgeAFgcAAQhNAAhHgog");
	this.shape_7.setTransform(801.2702,257.4928);

	var maskedShapeInstanceList = [this.instance,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.instance_1,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_1},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(705.4,179.5,191.80000000000007,135.60000000000002), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EghHAYnMAAAgxNMBCPAAAMAAAAxNg");
	mask_1.setTransform(800.475,157.525);

	// Layer_3
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(800.5,157.5,1,1,0,0,0,212,157.5);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.setTransform(800.5,167.8,1,1,0,0,0,800.5,167.8);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.setTransform(800.5,157.5,1,1,0,0,0,212,157.5);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.setTransform(800.5,157.5,1,1,0,0,0,212,157.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(588.5,0,424,315.1), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EghHAYnMAAAgxNMBCPAAAMAAAAxNg");
	mask_1.setTransform(800.475,157.525);

	// Layer_3
	this.instance = new lib.ClipGroup_0_1();
	this.instance.setTransform(800.5,167.8,1,1,0,0,0,800.5,167.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(588.5,0,424,315.1), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_5_1();
	this.instance.setTransform(27.5,32.6,1,1,0,0,0,27.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,55,65.3), null);


(lib.Group_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_1_1();
	this.instance_2.setTransform(225.8,131.6,1,1,0,0,0,225.8,131.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,451.7,263.1), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Eg6lAnEMAAAhOHMB1LAAAMAAABOHg");
	mask_2.setTransform(375,250);

	// Layer_3
	this.instance = new lib.Group_7();
	this.instance.setTransform(256.75,228,1,1,0,0,0,225.8,131.6);
	this.instance.alpha = 0.75;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(31,96.4,451.7,263.1), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmaRWQi9hbiSinQiTinhQjYQhTjgAAj1QAAj0BTjgQBQjYCTinQCSinC9hbQDEhfDWAAQDXAADEBfQC9BbCTCnQCSCnBQDYQBTDgAAD0QAAD1hTDgQhQDYiSCnQiTCni9BbQjEBfjXAAQjWAAjEhfg");
	mask.setTransform(105.6,120.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgMgOIAHgOIASA5");
	this.shape.setTransform(103.025,104.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgMAcIAUg3IAFAK");
	this.shape_1.setTransform(98.775,104.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAwAKIgegTIgmAWIg1BsQgZgSgfgjQg9hEgbhPIBFg6ICkBTIB8hRIBOA6IgVBNQgeBZguAxg");
	this.shape_2.setTransform(99.575,106.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAOgOQgKANgQAQ");
	this.shape_3.setTransform(122.7,100.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("ACSgpQg1Avg+AVQhWAehagf");
	this.shape_4.setTransform(105.725,107.1317);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("ABJAyQhKgehHhF");
	this.shape_5.setTransform(82.325,104.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AA7BVIipipIDdAAIAACpg");
	this.shape_6.setTransform(104.125,150.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED6B50").s().p("AA7BVIipipIDdAAIAACpg");
	this.shape_7.setTransform(111.175,153.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AhnAAQAAArAfAfQAeAeAqAAQArAAAfgeQAegfAAgrQAAgqgegfQgfgegrAAQgqAAgeAeQgfAfAAAqg");
	this.shape_8.setTransform(98.7,149.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EF8AA8").s().p("AhUBTIAAinICpCpg");
	this.shape_9.setTransform(94.825,154.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AhUBTIAAinICpCpg");
	this.shape_10.setTransform(92.175,147.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E9B75B").s().p("AhIBKQgfgfAAgrQAAgqAfgfQAegeAqAAQArAAAeAeQAfAfAAAqQAAArgfAfQgeAegrAAQgqAAgegeg");
	this.shape_11.setTransform(101.2,145.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgPgJIAfAT");
	this.shape_12.setTransform(46.85,133.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgdgTQAiAVAZAS");
	this.shape_13.setTransform(52.425,137.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgMgIIAZAR");
	this.shape_14.setTransform(57.55,140.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgXivIAIBlQAMB+AbB8");
	this.shape_15.setTransform(57.1,159.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgIn0IAFGBQAGGmAGDC");
	this.shape_16.setTransform(59.675,168.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#95BDD8").s().p("AlfJaIgryPIC8gkQCiCKCNg3QBHgcAng3IC8AkIgOSPg");
	this.shape_17.setTransform(98.95,158.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiCBqIh3iCIAahNICTAEIBUAkICfgsIBTAQIiNDDg");
	this.shape_18.setTransform(100.65,108.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#95BDD8").s().p("AhbJIQgzAAAWlJQAEgzAyn3QATi8A+hDQAUgVAWgGQALgDAHABIA1SPg");
	this.shape_19.setTransform(51.9829,159.9125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A57F58").s().p("AhpJIQAYppAJjaQAAglAEgmIAAAAQAPicA6hCQATgVAVgJQAKgFAIAAIArGdIgGLyg");
	this.shape_20.setTransform(53.4,159.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("ACCAOQggANgfAFQgaAFgPgCQgXgDgpgSQgwgUgrgc");
	this.shape_21.setTransform(99.9,85.5438);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#E9B75B").ss(1,1,1).p("AAJAGIgRgL");
	this.shape_22.setTransform(59.725,50.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#E9B75B").ss(1,1,1).p("AAIAIIgPgP");
	this.shape_23.setTransform(60.75,48.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E9B75B").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQAEAAACACQACADAAACQAAADgCADQgCACgEAAQgCAAgDgCg");
	this.shape_24.setTransform(71.475,65.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AggA3IBBht");
	this.shape_25.setTransform(68,57.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("Ag2gkIBtBJ");
	this.shape_26.setTransform(67.8,57.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A57F58").s().p("AgCBkQgtgTgTggQgWgkgEglQgEgsAbgYQAZgVAjACQAQABAMAFIAXAMQAYAOAHALIARBSQAMBWgbAIQgMAEgNAAQgYAAgcgMg");
	this.shape_27.setTransform(67.2959,57.5782);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E9B75B").s().p("AgHAAQAAgHAHAAQAEAAACADQACACAAACQAAAIgIAAQgHAAAAgIg");
	this.shape_28.setTransform(90.15,39.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E9B75B").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQAIAAAAAHQAAAIgIAAQgCAAgCgDg");
	this.shape_29.setTransform(90.075,43.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAUAiQgJgIgJgMQgTgYgCgX");
	this.shape_30.setTransform(82.8,16.775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgfgPQACABAVAJQAUAIAUAN");
	this.shape_31.setTransform(125.025,7.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgbgrQAlApASAu");
	this.shape_32.setTransform(132,16);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgwgyQAcAJAWATQAhAbANAu");
	this.shape_33.setTransform(119.55,12.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgdgkIAXAQQAYAVAMAk");
	this.shape_34.setTransform(113.175,15.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAHAHQgHgJgFgD");
	this.shape_35.setTransform(111.7,17.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DF433B").s().p("AhAAGIgMgfIA6ANQBAAHAfgZQgCAMgLAOQgWAagrAHIgPACQggAAgQgZg");
	this.shape_36.setTransform(127.075,7.0653);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DF433B").s().p("AAXAhQgWg9gngXIAHgmIAOAIQAPALAMARQAnA1gMBaQgDgagLgfg");
	this.shape_37.setTransform(113.3412,20.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DF433B").s().p("AAnA5QgohBhJgXIAhhXIAXAHQAbAMAVATQBCBCgeCFQgGgdgVghg");
	this.shape_38.setTransform(117.6188,19.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DF433B").s().p("AAMBOQgMg7g1g3IAchaIAVAXQAYAeAOAeQAvBihDBIQAFgTgHgeg");
	this.shape_39.setTransform(130.5189,22.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DF433B").s().p("AgeBDQhFgXgLg9QgGgfAIgaIBUAtQBcAoAugQQgJAbgWAXQgeAegpAAQgTAAgXgIg");
	this.shape_40.setTransform(132.7214,13.4361);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DF433B").s().p("AkrDtQgciSBHh0QAjg6ApgdQAOhUBagfQBXgfCGAdQBtAYAmBUQATAqgDAmQirggiaANQgxAEgpAIIgfAHIh7Edg");
	this.shape_41.setTransform(98.7995,24.3933);

	this.instance = new lib.Group_0();
	this.instance.setTransform(103.25,88.35,1,1,0,0,0,27.5,32.6);
	this.instance.alpha = 0.1992;
	this.instance.compositeOperation = "multiply";

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("Agfg2IAfAZQAfAbAAALQAAANgfARIgfAP");
	this.shape_42.setTransform(112.55,56.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("Ag2AOIAggUQAngQAmAT");
	this.shape_43.setTransform(94.725,40.5719);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AA3AOQgMgMgUgIQgmgQgnAT");
	this.shape_44.setTransform(120.475,40.5719);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A57F58").s().p("AALGaQglgFhGglQhSgsgug0Qgsgzgjh7QgbhigCg4QgFhnAyhdQBTidDNAAQDQgBBSCTQAdAzAKA/QAHAugFAiQgBAOgJA0QgIAqABAQIAFBHQABA7gTAoQg3BlhrAzQhFAhguAAIgOAAg");
	this.shape_45.setTransform(101.3903,48.0904);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A57F58").s().p("AlfLqIgFowIgmpfID8gxIAAkSIEdAAIAAESID8AxIgqJfIAEIwg");
	this.shape_46.setTransform(98.95,143.75);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.instance,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.instance},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(39.2,0.1,104.89999999999999,219.20000000000002), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Eg6lAnEMAAAhOHMB1LAAAMAAABOHg");
	mask_2.setTransform(375,250);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_6_1();
	this.instance_4.setTransform(375,250,1,1,0,0,0,375,250);

	this.instance_5 = new lib.ClipGroup_1_0();
	this.instance_5.setTransform(136.55,239,1,1,0,0,0,105.6,120.5);

	this.instance_6 = new lib.ClipGroup_2_2();
	this.instance_6.setTransform(375,250,1,1,0,0,0,375,250);

	this.instance_7 = new lib.ClipGroup_3_2();
	this.instance_7.setTransform(375,250,1,1,0,0,0,375,250);

	this.instance_8 = new lib.ClipGroup_4_2();
	this.instance_8.setTransform(375,250,1,1,0,0,0,375,250);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(0,0,750,500), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Eg6lAnEMAAAhOHMB1LAAAMAAABOHg");
	mask_2.setTransform(375,250);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_0_2();
	this.instance_1.setTransform(375,250,1,1,0,0,0,375,250);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,750,500), null);


// stage content:
(lib._final = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FAFCFB").ss(5).p("AipAAIFTAA");
	this.shape.setTransform(527.3983,603.0471,0.661,0.5731);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFCFB").s().p("Ag+BZQgogWgJgpQgKgpAbgkQAbglAvgLQAugKAoAVQAnAWAJApIABACIAAAjQgGAfgZAYQgZAZgjAIQgQADgOAAQgeAAgagOg");
	this.shape_1.setTransform(532.929,628.444,0.6609,0.5731);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FAFCFB").ss(5,1,1).p("AizEWIAAorIFnAAIAAIr");
	this.shape_2.setTransform(527.0467,612.6411,0.6609,0.5731);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAFCFB").s().p("Ag+BZQgogWgJgpQgKgpAbgkQAbglAvgLQAugKAoAVQAnAWAJApIABACIAAAjQgGAfgZAYQgZAZgjAIQgQADgOAAQgeAAgagOg");
	this.shape_3.setTransform(509.1348,628.444,0.6609,0.5731);

	this.instance = new lib.music();
	this.instance.setTransform(522.05,614.35,1,1,0,0,0,19.9,17.6);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-4,44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:509.1348,y:628.444,scaleY:0.5731}},{t:this.shape_2,p:{x:527.0467,y:612.6411,scaleY:0.5731}},{t:this.shape_1,p:{x:532.929,y:628.444,scaleY:0.5731}},{t:this.shape,p:{x:527.3983,y:603.0471,scaleX:0.661}}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.1145,y:628.4392,scaleY:0.5731}},{t:this.shape_2,p:{x:527.0256,y:612.6371,scaleY:0.5731}},{t:this.shape_1,p:{x:532.9076,y:628.4392,scaleY:0.5731}},{t:this.shape,p:{x:527.3878,y:603.0436,scaleX:0.661}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.1145,y:628.4392,scaleY:0.5731}},{t:this.shape_2,p:{x:527.0256,y:612.6371,scaleY:0.5731}},{t:this.shape_1,p:{x:532.9076,y:628.4392,scaleY:0.5731}},{t:this.shape,p:{x:527.3878,y:603.0436,scaleX:0.661}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.1145,y:628.4392,scaleY:0.5731}},{t:this.shape_2,p:{x:527.0256,y:612.6371,scaleY:0.5731}},{t:this.shape_1,p:{x:532.9076,y:628.4392,scaleY:0.5731}},{t:this.shape,p:{x:527.3878,y:603.0436,scaleX:0.661}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.0942,y:628.4343,scaleY:0.573}},{t:this.shape_2,p:{x:527.0045,y:612.633,scaleY:0.573}},{t:this.shape_1,p:{x:532.8862,y:628.4343,scaleY:0.573}},{t:this.shape,p:{x:527.3666,y:603.0418,scaleX:0.6609}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.0942,y:628.4343,scaleY:0.573}},{t:this.shape_2,p:{x:527.0045,y:612.633,scaleY:0.573}},{t:this.shape_1,p:{x:532.8862,y:628.4343,scaleY:0.573}},{t:this.shape,p:{x:527.3666,y:603.0418,scaleX:0.6609}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.1145,y:628.4392,scaleY:0.5731}},{t:this.shape_2,p:{x:527.0256,y:612.6371,scaleY:0.5731}},{t:this.shape_1,p:{x:532.9076,y:628.4392,scaleY:0.5731}},{t:this.shape,p:{x:527.3878,y:603.0436,scaleX:0.661}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.0942,y:628.4343,scaleY:0.573}},{t:this.shape_2,p:{x:527.0045,y:612.633,scaleY:0.573}},{t:this.shape_1,p:{x:532.8862,y:628.4343,scaleY:0.573}},{t:this.shape,p:{x:527.3666,y:603.0418,scaleX:0.6609}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.0942,y:628.4343,scaleY:0.573}},{t:this.shape_2,p:{x:527.0045,y:612.633,scaleY:0.573}},{t:this.shape_1,p:{x:532.8862,y:628.4343,scaleY:0.573}},{t:this.shape,p:{x:527.3666,y:603.0418,scaleX:0.6609}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.1145,y:628.4392,scaleY:0.5731}},{t:this.shape_2,p:{x:527.0256,y:612.6371,scaleY:0.5731}},{t:this.shape_1,p:{x:532.9076,y:628.4392,scaleY:0.5731}},{t:this.shape,p:{x:527.3878,y:603.0436,scaleX:0.661}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.0942,y:628.4343,scaleY:0.573}},{t:this.shape_2,p:{x:527.0045,y:612.633,scaleY:0.573}},{t:this.shape_1,p:{x:532.8862,y:628.4343,scaleY:0.573}},{t:this.shape,p:{x:527.3666,y:603.0418,scaleX:0.6609}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.0942,y:628.4343,scaleY:0.573}},{t:this.shape_2,p:{x:527.0045,y:612.633,scaleY:0.573}},{t:this.shape_1,p:{x:532.8862,y:628.4343,scaleY:0.573}},{t:this.shape,p:{x:527.3666,y:603.0418,scaleX:0.6609}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.1145,y:628.4392,scaleY:0.5731}},{t:this.shape_2,p:{x:527.0256,y:612.6371,scaleY:0.5731}},{t:this.shape_1,p:{x:532.9076,y:628.4392,scaleY:0.5731}},{t:this.shape,p:{x:527.3878,y:603.0436,scaleX:0.661}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.0942,y:628.4343,scaleY:0.573}},{t:this.shape_2,p:{x:527.0045,y:612.633,scaleY:0.573}},{t:this.shape_1,p:{x:532.8862,y:628.4343,scaleY:0.573}},{t:this.shape,p:{x:527.3666,y:603.0418,scaleX:0.6609}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3,p:{x:509.0942,y:628.4343,scaleY:0.573}},{t:this.shape_2,p:{x:527.0045,y:612.633,scaleY:0.573}},{t:this.shape_1,p:{x:532.8862,y:628.4343,scaleY:0.573}},{t:this.shape,p:{x:527.3666,y:603.0418,scaleX:0.6609}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(12).to({_off:true},2).wait(2).to({_off:false},0).wait(14));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,24.99,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,24.99,0,124.95,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,99.96,99.96,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,74.97,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,0,124.95,0,0), 0).wait(2).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,0,124.95,0), 0).wait(2));

	// red
	this.instance_1 = new lib.Tween43("synched",0);
	this.instance_1.setTransform(307.15,898.65,1,1,0,0,0,0,-35.7);

	this.instance_2 = new lib.Tween44("synched",0);
	this.instance_2.setTransform(307.15,893.1,1,1,0,0,0,0,-32.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween45("synched",0);
	this.instance_3.setTransform(307.15,934.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,regY:-32.9,y:893.1},4).wait(6).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).wait(6).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).wait(6).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).wait(6).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).wait(6).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).wait(6).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).wait(6).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).to({_off:false,regY:-35.7,y:898.65},5).to({_off:true,regY:-32.9,y:893.1},4).wait(6).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).wait(6).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).wait(6).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).wait(48).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).wait(48).to({_off:false,regY:-35.7,y:898.65},0).to({_off:true,regY:-32.9,y:893.1},4).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},4).to({_off:true,regY:0,y:934.3},5).wait(1).to({_off:false,regY:-32.9,y:893.1},4).to({_off:true,regY:0,y:934.3},5).wait(1).to({_off:false,regY:-32.9,y:893.1},4).to({_off:true,regY:0,y:934.3},5).wait(1).to({_off:false,regY:-32.9,y:893.1},4).to({_off:true,regY:0,y:934.3},5).wait(1).to({_off:false,regY:-32.9,y:893.1},4).to({_off:true,regY:0,y:934.3},5).wait(1).to({_off:false,regY:-32.9,y:893.1},4).to({_off:true,regY:0,y:934.3},5).wait(1).to({_off:false,regY:-32.9,y:893.1},4).to({_off:true,regY:0,y:934.3},5).wait(1).to({_off:false,regY:-32.9,y:893.1},4).to({_off:true,regY:-35.7,y:898.65},5).to({_off:false,regY:-32.9,y:893.1},4).to({_off:true,regY:0,y:934.3},5).wait(1).to({_off:false,regY:-32.9,y:893.1},4).to({_off:true,regY:0,y:934.3},5).wait(1).to({_off:false,regY:-32.9,y:893.1},4).to({_off:true,regY:0,y:934.3},5).wait(1).to({_off:false,regY:-32.9,y:893.1},4).to({regX:-0.1,scaleY:1.1026,skewX:-24.9131,x:307},6).to({regX:0,scaleY:1.2554,skewX:37.1942,x:307.2},5).wait(1).to({scaleY:1,skewX:0,x:307.15},0).to({regX:-0.1,scaleY:1.1026,skewX:-24.9131,x:307},6).to({regX:0,scaleY:1.2554,skewX:37.1942,x:307.2},5).wait(1).to({scaleY:1,skewX:0,x:307.15},0).to({regX:-0.1,scaleY:1.1026,skewX:-24.9131,x:307},6).to({regX:0,scaleY:1.2554,skewX:37.1942,x:307.2},5).wait(1).to({scaleY:1,skewX:0,x:307.15},0).to({regX:-0.1,scaleY:1.1026,skewX:-24.9131,x:307},6).to({regX:0,scaleY:1.2554,skewX:37.1942,x:307.2},5).to({_off:true},1).to({_off:false,scaleY:1,skewX:0,x:307.15},4).to({regX:-0.1,scaleY:1.1026,skewX:-24.9131,x:307},6).to({regX:0,scaleY:1.2554,skewX:37.1942,x:307.2},5).wait(1).to({scaleY:1,skewX:0,x:307.15},0).to({regX:-0.1,scaleY:1.1026,skewX:-24.9131,x:307},6).to({regX:0,scaleY:1.2554,skewX:37.1942,x:307.2},5).wait(1).to({scaleY:1,skewX:0,x:307.15},0).to({regX:-0.1,scaleY:1.1026,skewX:-24.9131,x:307},6).to({regX:0,scaleY:1.2554,skewX:37.1942,x:307.2},5).wait(1).to({scaleY:1,skewX:0,x:307.15},0).to({regX:-0.1,scaleY:1.1026,skewX:-24.9131,x:307},6).to({regX:0,scaleY:1.2554,skewX:37.1942,x:307.2},5).to({_off:true},1).to({_off:false,scaleY:1,skewX:0,x:307.15},4).to({regX:-0.1,scaleY:1.1026,skewX:-24.9131,x:307},6).to({regX:0,scaleY:1.2554,skewX:37.1942,x:307.2},5).wait(1).to({scaleY:1,skewX:0,x:307.15},0).to({regX:-0.1,scaleY:1.1026,skewX:-24.9131,x:307},6).to({regX:0,scaleY:1.0086,skewX:7.4897,x:307.2},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},5).to({_off:true},1).wait(4).to({_off:false},5).to({_off:true},1).wait(4).to({_off:false},5).to({_off:true},1).wait(4).to({_off:false},5).to({_off:true},1).wait(4).to({_off:false},5).to({_off:true},1).wait(4).to({_off:false},5).to({_off:true},1).wait(4).to({_off:false},5).to({_off:true},1).wait(13).to({_off:false},5).to({_off:true},1).wait(4).to({_off:false},5).to({_off:true},1).wait(4).to({_off:false},5).to({_off:true},1).wait(131));

	// patared
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#03040A").s().p("AgLANQgTAEgHgFQAYguAzAWIgZAgQgIgKgQADg");
	this.shape_4.setTransform(269.3,897.8768);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#03040A").s().p("AgFAjQgPgDADgNQAHgPAAgGIgDgdIAcgDIADARQACALgCAFIgHAYQgFAMgJAAIgCAAg");
	this.shape_5.setTransform(309.699,919.1625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#03040A").s().p("AgUgRQAFgRAhgRIAFAeQgGAKgOATQgLAVgDAXQgPg0AGgRg");
	this.shape_6.setTransform(266.6762,915.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#03040A").s().p("AgWgVQARgNApAJIgHAdQgZABgJADQgSAFgLARQgFglARgOg");
	this.shape_7.setTransform(260.1682,906.545);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2F3843").s().p("ADRBgQgQgCgHgQIgKgaQgTgqgmgPQgkgPgvAKQglAIgwAYIhQAsQgPAHgMABQgNACgOgGQgPgMAKgRQACgPgCgCQgBgDgMgBIgYAEQgOABgDgTQgGgHAEgJIAJgNIA6gIQAWgBgDgLQgHgOgCgGQAAgdAZgFQAhgGAxAKQBCAOANABQAcADANgCQAWgCAQgOQA1A2AaAeQAqAvAcAsIgJALQgIAHgIAAQgGAAgHgEg");
	this.shape_8.setTransform(287.3855,906.3431);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(240));

	// blue_head
	this.instance_4 = new lib.Tween41("synched",0);
	this.instance_4.setTransform(435.85,821.4,1,1,0,0,0,-37.1,-34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-41.5,scaleX:1.0508,skewY:-17.8893,y:814.15},9).to({scaleX:1.0001,skewY:-0.4808},10).wait(20).to({regY:-34.3,scaleX:1,skewY:0,y:821.4},0).to({regY:-41.5,scaleX:1.0508,skewY:-17.8893,y:814.15},9).to({scaleX:1.0001,skewY:-0.4808},10).wait(21).to({regY:-34.3,scaleX:1,skewY:0,y:821.4},0).to({regY:-41.5,scaleX:1.0508,skewY:-17.8893,y:814.15},9).to({scaleX:1.0001,skewY:-0.4808},10).wait(20).to({regY:-34.3,scaleX:1,skewY:0,y:821.4},0).to({regY:-41.5,scaleX:1.0508,skewY:-17.8893,y:814.15},9).to({scaleX:1.0001,skewY:-0.4808},10).wait(22).to({regY:-34.3,scaleX:1,skewY:0,y:821.4},0).to({regY:-41.5,scaleX:1.0508,skewY:-17.8893,y:814.15},9).to({scaleX:1.0001,skewY:-0.4808},10).wait(20).to({regY:-34.3,scaleX:1,skewY:0,y:821.4},0).to({regY:-41.5,scaleX:1.0508,skewY:-17.8893,y:814.15},9).to({scaleX:1.0001,skewY:-0.4808},10).wait(23));

	// blue_alas
	this.instance_5 = new lib.Tween39("synched",0);
	this.instance_5.setTransform(472.9,828.8,1,1,0,0,0,41.5,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:36.4,regY:-53.6,scaleX:1.2907,scaleY:0.3327,x:467.85,y:819.7},9).to({scaleX:1.3848,scaleY:0.8979},10).to({regX:36.5,regY:-53.5,scaleX:1.0174,scaleY:1.2373,x:468,y:819.75},10).wait(1).to({regX:41.5,regY:-44.6,scaleX:1,scaleY:1,x:472.9,y:828.8},0).to({regX:36.4,regY:-53.6,scaleX:1.2907,scaleY:0.3327,x:467.85,y:819.7},9).to({scaleX:1.3848,scaleY:0.8979},10).to({regX:36.5,regY:-53.5,scaleX:1.0174,scaleY:1.2373,x:468,y:819.75},10).wait(1).to({regX:41.5,regY:-44.6,scaleX:1,scaleY:1,x:472.9,y:828.8},0).to({regX:36.4,regY:-53.6,scaleX:1.2907,scaleY:0.3327,x:467.85,y:819.7},9).to({scaleX:1.3848,scaleY:0.8979},10).to({regX:36.5,regY:-53.5,scaleX:1.0174,scaleY:1.2373,x:468,y:819.75},10).wait(1).to({regX:41.5,regY:-44.6,scaleX:1,scaleY:1,x:472.9,y:828.8},0).to({regX:36.4,regY:-53.6,scaleX:1.2907,scaleY:0.3327,x:467.85,y:819.7},9).to({scaleX:1.3848,scaleY:0.8979},10).to({regX:36.5,regY:-53.5,scaleX:1.0174,scaleY:1.2373,x:468,y:819.75},10).wait(1).to({regX:41.5,regY:-44.6,scaleX:1,scaleY:1,x:472.9,y:828.8},0).to({regX:36.4,regY:-53.6,scaleX:1.2907,scaleY:0.3327,x:467.85,y:819.7},9).to({scaleX:1.3848,scaleY:0.8979},10).to({regX:36.5,regY:-53.5,scaleX:1.0174,scaleY:1.2373,x:468,y:819.75},10).wait(1).to({regX:41.5,regY:-44.6,scaleX:1,scaleY:1,x:472.9,y:828.8},0).to({regX:36.4,regY:-53.6,scaleX:1.2907,scaleY:0.3327,x:467.85,y:819.7},9).to({scaleX:1.3848,scaleY:0.8979},10).to({regX:36.5,regY:-53.5,scaleX:1.0174,scaleY:1.2373,x:468,y:819.75},10).wait(1).to({regX:41.5,regY:-44.6,scaleX:1,scaleY:1,x:472.9,y:828.8},0).to({regX:36.4,regY:-53.6,scaleX:1.2907,scaleY:0.3327,x:467.85,y:819.7},9).to({scaleX:1.3848,scaleY:0.8979},10).to({regX:36.5,regY:-53.5,scaleX:1.0174,scaleY:1.2373,x:468,y:819.75},10).wait(1).to({regX:41.5,regY:-44.6,scaleX:1,scaleY:1,x:472.9,y:828.8},0).to({regX:36.4,regY:-53.6,scaleX:1.2907,scaleY:0.3327,x:467.85,y:819.7},9).to({scaleX:1.3848,scaleY:0.8979},10).to({regX:36.5,regY:-53.5,scaleX:1.0174,scaleY:1.2373,x:468,y:819.75},10).wait(1));

	// colour_blue
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED9B38").s().p("AAfDMQgQgDgNgKQgIgHgNgRIgRgWIgRgbIgmhCQgRgggDgUQgFgjAUgSQATgSAqACQAAglAFgSQAGgSAQgWQAOgWAQgJQARgLAVACQAWACAOAOQAPANACAWQACAWgNAPIgNAOQgIAHgDAHQgEAJACAWIAFArIAGAeIAFAPIAFAMQAGATAFAgQAHAsgIAWIgDAHQgFALgJAJQgMALgPAEQgKADgKAAIgMgBg");
	this.shape_9.setTransform(472.9225,797.7402);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DBF3D1").s().p("AiAC+QgUgCgOgQQgJgJgDgKIACgHQAIgXgHgrQgEghgHgTIgEgLQAAgnASgrQAdhAA1gUQAPgGAVgDIAlgEQANgCAGgDIAUgNQANgIAPgCQAPgBAOAGQAOAGAJAMQAJANABAPQAVgGAVAMQAVAMAGAVQAGAWgMAVQgMAVgVAGQgBAPACBDQACAzgMAeQgKAagTAJQgRAKgSgFQgOgFgEAAQgGAAgHADIgMAHQgVAJgXgGQgYgHgNgTQgEgHgEABQgDAAgCAFQgIASgSALQgPAIgPAAIgIgBg");
	this.shape_10.setTransform(500.8523,799.16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#090C7B").s().p("AlNJ4QgRgCgOgLQgHgFgFgHIgLgEQgRgGgLgOQgKgNgDgSQgCgRAGgQQACgHAIgMIAJgTIAGgVQACgPADgHQgHgDgHgFQgPgLgGgRQgGgRADgWQACgOAIgYQAkhvAQgoQAghUAkg7QALgSAKgMIAGgbQAOhEAEgOQALgoAZg2QAeg9ANgfIAUgtQAMgZANgRQAWgdAqgZIBLgnQAxgZAvghIBBgvQAngaAfgNQAogQAnACQAsADAdAYQAWASAMAeQALAbAAAfQAAAigPAdQgMAYgUANQAGAOADASQAeCXhoCyQgfA0geAfQgeAfgtAaIgWAOQgLAJgFAKQgGAKgFAXQgFAPgMALQgMAMgPAEQgQAEgQgEIgGgCIgLAPQgXAjgHAIQgSAWgVAGQgXAHgWgMQgOgIgIgLQgFAMgCAKIgKA/QgIAkgUAQQgRANgXAAQgTgBgNgJIgJAPQgbAtgGAeQgEATgCAmQgDAhgOASQgKANgQAHQgMAFgMAAIgJgBg");
	this.shape_11.setTransform(429.6231,880.9218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(240));

	// blue
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgjAJQAVgPAOgCQARgCATATg");
	this.shape_12.setTransform(488.975,785.4157);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgJAHQgFgOgEgFIAKgDQADAEAMAGQAKAEACAHQABACgDADQgDAEgDAAIgGABQgJAAgFgJg");
	this.shape_13.setTransform(489.2286,779.9408);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgDARQgLgMgEgBQAKgPAEgEQAJgJANABIABAIQAAAFgBABQgIAEAHANQAGANgMADIgCAAQgHAAgFgHg");
	this.shape_14.setTransform(479.3,781.9874);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgngYIA0AEQAbAJAAAkQgsAAgjgxg");
	this.shape_15.setTransform(498.175,801.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AAAANQg0gHgdgQIAAgRQAZAQAUAHQAYAIAXgDQATgCATAJIAhAUQgRgFhBgKg");
	this.shape_16.setTransform(484.5,788.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgsA7QgYgGgPgHQg0gSASg4IAYgpQAwAXA5AKQAwAHA/ABQgZAgAGAbQgJACgJgUQgHgQgPAJQgNAJghALQgZAMACAgIgngLg");
	this.shape_17.setTransform(483.8919,796.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#03040A").s().p("AgsBXQhIgOgbggQgGgTAZgCQAMAFAYAEQgYgIgMgSQgXgQAWgQIALAAQAOACAJgKIAPgUQAMgNASgBQAKgBAWAFIAFAEQAEACADAAIgCgIQAKgXAIAAQAHABAhAYIBABEIASARQAKAKgBAMIhIAqQgbALgjAAQgZAAgegGgAgqAlQAsAGAbAMQgigQgrgDIAGABg");
	this.shape_18.setTransform(488.8127,785.3592);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAUgmQAPAhgQATQgMAPgiAKQAUg2AbgXg");
	this.shape_19.setTransform(435.2004,906.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#03040A").s().p("AgJAIQAAgYgLgJQAEgJAKgFQALgFAGgEQAMAcgCAUQgCAZgTAXQgIgNgBgbg");
	this.shape_20.setTransform(476.3333,922.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#03040A").s().p("AAJALQgWgHgRAJQABgKgIgJIgMgRQATABAngCQAhAGAIArIgpgOg");
	this.shape_21.setTransform(482.375,903.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#03040A").s().p("AACAvQgJgEgDgIQgVgzAXgkQAFAEAHAKQAHAHAKgBQgLAdAJAcQACAFgCAJIgDAOQgDgCgLgEg");
	this.shape_22.setTransform(428.367,924.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#03040A").s().p("AAAAgQgHghgWgNIAUgnQAqAagDA2QgBAYgOACIgCABQgKAAgDgWg");
	this.shape_23.setTransform(489.3098,918.7547);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F2F2").s().p("AgZAOQgfgfgMgKQgPgNALgNQBHAxBDgfQANAVgCAeQgHAOgTAKIghAOQgSgNgZgbg");
	this.shape_24.setTransform(501.5261,784);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#03040A").s().p("AgVA6IgogMQgWgJgJgUQgLggAXgQQAfgNANgIQAWgMANANQAFAGANAYIApAWQAYANAPANQABAWgWAKg");
	this.shape_25.setTransform(492.5492,801.7311);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#63A34D").s().p("ABgBHQgagDgpgZQgTgNgJgFQgQgJgQAPIgMAFQgUgBgJABQgPACgMAGQgJADgNAKQgOALgHADQgHABgEgGIgLgSQAEgWASgNQAIgFAdgKIBMgaQAqgRAYgaQAvAJAgAiQAaAbAXAwQgbAZggAAIgKgBg");
	this.shape_26.setTransform(491.675,775.7052);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#010306").s().p("Ag5BjQglgXgNgsQgBgFgLhMQgDgbATgOQAMgJAegIQAEArAoAVQAVALAyASQAJALAYALQAYANAJALQgIAOgcAVQgaAUgJAQQgIgBgsAGIgPAAQgXAAgQgJg");
	this.shape_27.setTransform(478.3228,804.3471);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2F3843").s().p("AgxBrQASgYAAgPQAAgFAEgNQAEgLgBgHQgEgWgVgHQgagDgMgGQgGgEgEgFQgGgSAHgQQAEgMAOgPQANgNAVgMIAmgSIAegSQAUgMAPgBQAlAZAFAqQABATgIA8QgIA8gzAmQgTAPhXArQADgUATgZg");
	this.shape_28.setTransform(503.3928,800.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2F3843").s().p("AknBxQgDgEgFgQIgCgUQAGgRASgUQAXgbAFgHQAXgUAJgNQAPgVABgYIALgdIAcgLQAZAcAnAJQAZAFAyAAQAbAABTgQQBFgNArAIIATANQAJAJgJAPIgdAZQAWALAvAJQAmAMAMAhQAJAbgdAMQgaAHgZgQIgtgjIAHAtQgFATgbADQgvgFgtgsQg8g6hdAKQheAJgxBFIgTAZQgNANgQAAQgIAEgFAAQgGAAgDgEg");
	this.shape_29.setTransform(457.8726,910.2189);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ED9B38").s().p("AAjFKQAIgPADgUQABgMgBgZQAAgkAYgtQAXgsgDgxQgCgwgbguQgnhGhVAAQgeAAgQAEQgZAEgSANQgSgkAHgkQAGgdAaglQAQgXAWgxQATgrAmgiQAbgYAzgfQAJgGANgBIAVgBQANACACAQQgCAVAFAOQABALgEAIQgNASgEAJQgMAcgPALQgoAagFAWQgFAXASA8QAMAkAWAPQAWAPApgCIAYgDQANABAIALQgfBUATBrQATBthhBuIgYAmQgPAXgTAGg");
	this.shape_30.setTransform(466.677,821.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1B3CAA").s().p("Ah/EsQgSgYAKgiQAOgygBgIQgyATADg1QAFhEAThNQAPg6AdhSQAPgoAagtQANgVAmg6IATAAQgpBnArB1QAFANAIAIQAKAKAIgEQAagKAnAMQAsANASgCQgbApg1BAQhBBMgTAbIgoA4QgYAggWATQgQAPgFADQgKAGgLAAIgFAAg");
	this.shape_31.setTransform(402.3915,908.5375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4FAFF8").s().p("AlxE4IAWgfIBlinQA7heAxhDQBFhfBDg/QBQhMBcgqQBwgzBjAuQgHAegcANQgjAMgRAHQgoAPgUAIQgiAPgRAXQiJAwgyB9QgHATgJAMQgwA9AKBRIh5BIQhEApgxAkIhTA8QgCgSAMgUg");
	this.shape_32.setTransform(457.3357,801.3593);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#090B7B").s().p("AjvF5QgKgEgHgXQgJgbACgmQAFgrAAgWQABhvAghPQA3gqBBhXQBXhzAVgYIAhgmQATgWARgLIATgRQALgKAFgIQAKgRAKgEQALgFAQALQAJAHAMgCQALgCAEgFQARgWAUAIQAMAEAXANQADAIgCAJIgGAPQgiAzgNAeIgaAlQgPATgSAKIgwBFIjlEvQgZAjgGAgIg7BiIgJAPQgEAFgFAAIgFgBg");
	this.shape_33.setTransform(412.1682,935.5114);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#295FB9").s().p("AjiD5QgngJgUADQgNABgRgRQglgmgBhSQgChSAjgnIA2guQAJAOAOAgQAQAWAfgGQABAAAEANIAIAVQAIASAJAJQANALASAAQAhAAAMggQAJgUAKgHQANgJAUAIQAFABAKgBQAYAFAQghQAQgjAYADQAgAEAQgYQAGgKAMgpIAZAcQAQARARgGQAmgOAAg4QAAgNADgFQAFgGAOADQAaAFAPgPQAOgNABgYQACgZAOgIQALgHAXABQANAVgJAWQgFANgQAYQgJASgWA8QgSAygTAaQgHAKgpAmQgeAcgIAbQgDAHgEAAQgngBgbAlQgoA3gGAEQgFASgXABQgLAAgQgKIgCgNQgDgIgJAOQgNARgMgBQghgFglAVQgUALgpAaIgLABQgTAAgcgHg");
	this.shape_34.setTransform(435.4439,880.0743);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3C87CA").s().p("AipF/QgVgDgQgUQgPgZgKgKIgkgcQgWgRgIgRQgJADgQANQgOALgLABQgMABgIgIQgagLAHgeQAyjKB+ieQADgFAHgFIAMgKQAVgiApgcQBqhICahaQB0gyBOBHQAtAqAMA5QAKA1gTA8IgWBGQgMAogBAfQAAAMgLAPQgQAJgQATIgZAjQgNAQgnAoQgjAkgQAZQgVAfgvgvQgJAWgTAQQgJAIgfARIg/AnQgmAXgeAKQgHADgYAYQgSARgSAAIgFAAg");
	this.shape_35.setTransform(438.1779,850.194);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1B3CAA").s().p("AiNOJIgFgUQgLgugCgpIgIiVQgFhXAFg+QAGhBABhyQABiAADgyIAUmBIAJiWIAJiWQgJgMAEgPQACgGALgRQAnhCBIhdIB3iaQAKgNAMAFQAKAEgBAMQgDA1AGBQIAJCGIAGCcQADBZgCBEQgBBLgRA3QgCAFAAALQgCAJgMgBQgWgCgDgYIgUiWIAAgdQABgTgGgMQgGALAAAOIABAYIAAC5QABBygBBGQgBBPgEAZQgHA6gaAqQgDAFAAALIABASIAADcQABBIgHBYQgEA6gKBmQgDAdgaAXQgbhHgDhrIgGiyQAAAigFAxIgJBUIgMBxQgKBAgQAwIgIAVQgFAJgNABIgBAAQgNAAgFgLg");
	this.shape_36.setTransform(408.2965,1015.8415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(240));

	// ALA4
	this.instance_6 = new lib.ALA4();
	this.instance_6.setTransform(840.05,1098.95,1.1512,1.0126,0,3.0552,0,10.6,10);
	var instance_6Filter_2 = new cjs.ColorFilter(0.97,0.97,0.97,1,0,0,0,0);
	this.instance_6.filters = [instance_6Filter_2];
	this.instance_6.cache(-2,-2,85,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({skewY:-1.499},0).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({skewY:-1.499},0).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({skewY:-1.499},0).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({skewY:-1.499},0).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({skewY:-1.499},0).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({skewY:-1.499},0).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({skewY:-1.499},0).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({skewY:-1.499},0).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({skewY:-1.499},0).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({skewY:-1.499},0).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).to({regX:10.7,regY:10.1,scaleX:1.1532,skewY:-1.499,x:840.15},5).wait(1).to({skewY:-1.499},0).wait(1).to({regX:10.6,regY:10,scaleX:1.1512,skewY:0,x:840.05,y:1098.95},0).to({scaleX:1.5493,skewY:-39.0473,y:1098.85},4).wait(5));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_2).wait(240));

	// EYES
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAcAlIgXgFIgVgDIgJgEIgGgFQgGgEgCgHIgBgIQAAgOADgKQACgGADgEQAEgCAIgBIAMABIAIABIARAFIALAHIAGAFQADAEACAKIABAGIAAAHIgBAEIAAAKQAAAGgBADQgCADgCABIgCAAIgEAAg");
	this.shape_37.setTransform(817.7583,1050.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgqA7QgbgIgKgQQgHgMACgXQACgRAGgMQAFgJAOgQQAGgHAEgCQAFgDAJgBQAPgBAJADQAGABARAGIAUAJQAKAFAFAFQAEACAIALQAMASADAJIADARIAFAPQADAJgCAGQgCAFgGAGQgFAGgGACQgEABgIAAIgMAAQg4AAgcgJgAgwgcQgDADgCAHQgDAJAAAOIABAJQACAGAGAFIAGAFIAJADIAWAEIAWAEQAEABACgBQACAAACgDQABgDAAgGIAAgKIABgEIAAgHIgBgHQgCgJgDgEIgGgFIgLgHIgRgGIgIAAIgMgBQgIABgEACg");
	this.shape_38.setTransform(819.3972,1050.4903);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAcAFIgXgBIgUAAIgKgBIgGAAIgIgCIgBgBQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAIAFgBIAMgBIANAAIAHAAIARABIAMABIAFABIAFABIABABIAAABIAAABQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEABIgCAAIgEAAg");
	this.shape_39.setTransform(817.75,1050.5375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgqAIQgbgBgKgCQgHgCACgDQACgBAGgCIATgDIAKgBIAOgBIAYAAIAXABIAUABIAPACIAMABIAPADIADACIAFACQABABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgIACIgLABIgMAAIgfAAIhBgBgAgwgDIgFACQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAABIABABIAIABIAGABIAJAAIAWABIAWAAIAGAAIAEAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAAgBIABgBIgBgCIgFgBIgGAAIgLgBIgRgBIgIAAIgMAAIgMAAg");
	this.shape_40.setTransform(819.3972,1050.4688);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAcAlQgHAAgQgEIgUgEQgHAAgDgEQgCAAgEgEQgGgEgCgIIgBgIQAAgPADgIQADgIACgEQAEgEAIAAIANAAIAHAAIARAIIAMAIIAFAEQADAEACAMIABALIAAAIIAAAIQgBAIgBAAQgCAEgCAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAIgEgCg");
	this.shape_41.setTransform(817.75,1051.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgqA/QgbgJgKgQQgHgPACgVQACgTAGgLQAFgMAOgRQAGgHAEAAQAFgFAJAAQAPgDAJADQAGAAARAIIAUAJIAPALIAMANQAMATADALIADARQACAHADAJQADAHgCAIQgCAIgGAFQgFAHgGABIgMAAIgfABQgqAAgXgJgAgwgcQgDADgCAJQgDAHAAAQIABAHQACAIAGAFQADADADAAQADAEAGABIAWADQAOAEAIAAQAEAFACgFQACAAACgEQABABAAgJIAAgIIABgIIgBgMQgCgKgDgFIgGgDIgLgJIgRgIIgIAAIgMAAQgIAAgEAFg");
	this.shape_42.setTransform(819.3972,1050.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_38},{t:this.shape_37}]},19).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_38},{t:this.shape_37}]},20).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_38},{t:this.shape_37}]},21).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_38},{t:this.shape_37}]},23).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_38},{t:this.shape_37}]},19).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_38},{t:this.shape_37}]},20).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_38},{t:this.shape_37}]},21).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_38},{t:this.shape_37}]},27).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_38},{t:this.shape_37}]},26).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).wait(4));

	// COLOUR
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CD5439").s().p("AAnCEQgHgCgEgFQgFgGAAgHQAAgLAKgGQAEgDAGAAQAFAAAFADQAGADACAHQADAHgCAHQgDAGgGAEQgFADgFAAIgEAAgAgGBOIgQgFIgLgFIgLgJQgFAAgEgBQgHgDgDgIQgIABgIgGQgJgFgGgOQgVgqAIg1QACgRAHgJQAHgJAQgJQAmgSAcAEQAUADAkAWQAMAHADAHQAHALgIAJIAIAHIAEACQAIAEAEAEQAKAJgBARIAAAAQAGACAEAEQAHAHgBAKQgCAJgJAEIgGACIAAACQgBAKgJAGIgIADIgMAEIgEADQgJAFgKgEQgGgDgDgGQgdAPggALIgBAAQAJAHANAEQAGACADgBIAFgCQAEgCACACQADABgBAEQgCADgCACQgFADgFAAIgFgBg");
	this.shape_43.setTransform(817.7022,1051.1256);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D79548").s().p("AhEDSQgGgHAAgJIAAgHQABgEgBgCIgHgKQgGgGAAgIQgBgIAFgHQgGABgGgFQgEgEgCgGQgEgKAEgOQAEgTAHgNQgGAAgFgDQgFgEgCgFQgFgMAMgVIAkhHIAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAIgdATQgIAGgEgDQgEgFAIgHQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgGAEQgDADgCgBQgHgBACgLIABgCIgQAIIgTAMQgDADgDAAQgHAAABgEQAAgDACgDQAKgJANgRIAUgbQALgMAdgcIAegZIAPgJIAHgGIAEgBIAKgHIAdgXQASgNAPgEQAFgCADACQADADgBAJQgEASgHARIAMgHIAGgDIAMgKQALgKACgFQAGgHACABQAFACgCAIQAHAAABAIIgBAHQAFgCAGADIAEAEIAIgDQAOgGAIgBQAQAAAGALQAFALgMAUQgaAxgWAjQgmA+gxA8QgQAVgEAJQgFAJgHAdQgIAbgWApQgIARgKACIgEABQgGAAgGgGgAhYhuQgWAVgHAJIgMARIgNAPQAEAAAIgGIAOgHIAGgJQAMgVAbgiIgRAPgAhtg0IgDADQALgDAKgJIgSAJgAhjhEIAXgMIAAgBQAggvAMgaQgnAogcAugAgyhUIAAAAIAFgBIABgDIgGAEgAAYjCQgNAIgWATIgLAHIAAABQABAJgIAOIgUAhQgDAFAAADIAAABIAJgFIAAgBQAAgEAGgFIAXgTIABAAIANgQQAOgNAKACIABgBQAMgVAGgZQgKAAgJAIg");
	this.shape_44.setTransform(839.2,1104.4711);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43}]}).wait(240));

	// loro_4
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1A1818").s().p("AgBAsIgfgKQgSgKABgZQACgoAjgDQARgBAYAXQAYAWgEAPQgHAegiAAIgJgBg");
	this.shape_45.setTransform(817.6754,1047.655);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AANBHQgnAAgNgDQgbgIgLgdQgWg/AxggQATgMAlANQAlAMAOAXIAJARQAaA4gLAOQgIAMgzAAIgJAAg");
	this.shape_46.setTransform(817.0123,1047.0656);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("AACAKQgFAAgTgEQgEgBACgEQAHgIAKgCIAQAAQADAIALABQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgIAEgKAAIgEAAg");
	this.shape_47.setTransform(870.5717,1195.1327);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AgaAUIgHgkQAUgJAPAQQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABQgCAJADACQAEABARgDQAKAFgBAFQgBAGgKABIgZAAIgYAAg");
	this.shape_48.setTransform(871.1045,1195.043);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AgfAQQgFgMAOgLQANgMARgEQAEgBASAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgBAXQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgQAGIgZANQgFACgEAAQgHAAgEgJg");
	this.shape_49.setTransform(817.4342,1181.6308);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AgnATQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAQgVAVgHQARgHAaADQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAIABAVQAAAEgEAAQgNgCgZAGQgWAGgOAAIgEgBg");
	this.shape_50.setTransform(818.4444,1173.0593);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("AAcAUQgmgLgYABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAPgUAOgDQANgEAfAMQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQgEAEAAAGIgBAMQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_51.setTransform(819.5313,1196.0192);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AgbATQgKgEgBgGQAAgHAIgFQATgMAKgDQAPgFAPAKIAJAFIABAZQAAAAAAABQgBABAAAAQgBAAAAABQgBAAgBAAQgKABgLgBIgUAAIgHABQgIAAgGgCg");
	this.shape_52.setTransform(816.8736,1203.1281);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#521A1B").s().p("AgKAyQgIgCgGgLQgHgNgFgDQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAMg/A9gEQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQgDAggJAUQgMAbgXAQIgBAAIgBAAg");
	this.shape_53.setTransform(795.7313,1061.2333);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CCCCCC").s().p("AiDAzQgLgOAMgPQALgNASgFQALgCAXAAQAdABALgCQAWgCAPgMQgKgEgMACIgXAEIgoAGQgXAAgMgWQgMgNALgPQAZgNAoAAIBBACIA6gBIADABQAGAKAYAaQAUAWAHAPQACAEgFABQgZACgiAPQglASgTAHQglAPgkAAQgoAAglgSg");
	this.shape_54.setTransform(833.8905,1176.8758);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7A2827").s().p("AgrCbQhBhDAYhlQAXhlBZgpQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAIAXAoQAOAXAHARQAUAtgGASQgGAQgsATIAAAAQgtAZgfAsIgBACIAAA6QAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgCAAIgCgBg");
	this.shape_55.setTransform(795.6177,1053.805);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CCCCCC").s().p("AjkBPQgNgPAMgNQAVgMAzAAQAyAAAbgPQgMgDg4AJQgoAGgUgaIgBgBQgGgMAAgGQABgJAQgCQAbgMAmAAIBCAFQA6AEAggOQApgSAZgzQACgEADADIARAXQALANANACQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgVAbQAAAAAAABQgBAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQABABAAAAQABAAAAAAQAMABAtgFQAigDAUAIQAOAOgMAQQgTASgXAKQgYAKgXgBQg6gDhIAXQhQAfgpAOQgYAIgVAAQgqAAgggeg");
	this.shape_56.setTransform(843.6889,1197.1747);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CD5439").s().p("AjTGAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgZhGgHgfQgLg6ALgyQAGgZgFgoQgHgsgCgWQgDgiANglIAAAAIAYgzQAOgeAFgWIABgCQAlgfADgQQADgQgWgvIgSgfQgKgSACgRIABgBQA2hFBmgDQBlgDBLBCQAsAmAdAhQAjAqATAtQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgNArgbAbQgbAcgsAPQgkANgPAnQgCAGgQBGIgKA/QgIAjgVAXQghAkg3AAQg8AAghA0QgPAZgwBEQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_57.setTransform(819.2219,1069.2984);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D79548").s().p("AhkGtIgCgBQhfhzhWinIgHgNQgEgHADgHQAmiTCTgPQA2gGASg1QAIgZAIgoIAMhCQARhNBCgaQA8gYAQgyQAEgMADgDQAFgHAKABIACACQAhAuATA+QAPAvAKBHQADAWARAlQAQAnADAUQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAgBQhUgeg+BGIgZAYQgFAFgcALQgWAHgDASQgLA8AMA6QARBKAkBJQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAIgXAuQgxBfhqAAQgRAAgTgDg");
	this.shape_58.setTransform(827.137,1096.2076);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BAC74D").s().p("Ai4E8QgEgEgKgeQgKgogogoIAAAAQgbgUgLgOQgTgUgDgZIAAgBQgVg5grg3Qgegmg5g3IgzgvQgdgdgQgZQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQANgMAbACQAvADAkgYQAegVAagrIAMgaQAIgOAOgDQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAYAuAtA2QAaAgA2A9QANAOAHAAQAeADBLAeQBAAaArgEQALgBAJAGQBEAwBeAOQA8AJBxgBQAaAYAnAWIBIAlIANAFQAIAEABAHQAAAJgHAGIgQAIQhCAdhSgBQhmgBhCAeQguAWhDABIhzgDQgigBgTANQgTANgHAfQgLAwgxAIQgIADgGAAQgOAAgHgLg");
	this.shape_59.setTransform(872.6694,1157.8223);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#808F38").s().p("ABME3QgIgEgQgCQgRgCgGgDQgUgJhegWQhIgQgjgiQhlhigzhhQgfg8gPgzQgRg+ACg7QABgdAKgSQALgVAZgMQASgHAXgVQAcgaAJgHQAjgXAeAAQAfAAAfAXQA3ApA1BCQAeAmA5BWQAlA4BIBxQBCBkA1BAQAUAZAfAdIA3AyIAVAQQAKAKgBAPQgJAJgOADIgYABIgRAAQibAAhvg+g");
	this.shape_60.setTransform(871.9004,1123.1089);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D79548").s().p("AhfBLQgCgEAHgGIAWgRQADgIAIgKQAPgSAUgOQAEgHADgDQAHgDADgEIAFgGQADgFAEADQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIAkgTIAQgKQAMgJAHgIQAEgGAEgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAAAQABADgDADQgEAFgHAFIgBABQADACgBAEIgEADIgnATIgCACIgKAJQgIAHgSAMIgSAQIgCAEQAEACgCAGQAAACgEAEIgRAOQgGAGgDAAQgDAAgCgCQgFAFgCAFIgCAGQgDADgDgCQgBAAgBgEIgDAAIAAgDIgLAJQgDAEgDABIgFABQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_61.setTransform(838.7229,1094.15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BAC74D").s().p("AC2FbQhDgliRgtIiGgmQhLhDhCheQiEi6AriEIAcgcQAighAfgWQBkhJAlA4IAnAZQAyAmA9BAQDCDKDhF8QgdANgrAFQgSACgSAAQg/AAg0geg");
	this.shape_62.setTransform(884.0296,837.5236,1,0.4966);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_62}]},1).wait(9));

	// ALA4_2
	this.instance_7 = new lib.ALA4_2();
	this.instance_7.setTransform(851.95,1095.75,0.9052,0.7889,0,0,0,9.3,11);
	var instance_7Filter_3 = new cjs.ColorFilter(0.7,0.7,0.7,1,0,0,0,0);
	this.instance_7.filters = [instance_7Filter_3];
	this.instance_7.cache(-2,-2,85,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({skewY:1.3567},0).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({skewY:1.3567},0).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({skewY:1.3567},0).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({skewY:1.3567},0).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({skewY:1.3567},0).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({skewY:1.3567},0).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({skewY:1.3567},0).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({skewY:1.3567},0).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({skewY:1.3567},0).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({skewY:1.3567},0).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).to({regY:11.1,scaleX:0.9055,skewY:1.3567,y:1095.8},5).wait(1).to({skewY:1.3567},0).wait(1).to({regY:11,scaleX:0.9052,skewY:0,y:1095.75},0).to({regY:10.9,scaleX:1.1664,skewY:-39.097,y:1095.7},4).wait(5));
	this.timeline.addTween(cjs.Tween.get(instance_7Filter_3).wait(240));

	// eye_loro3
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAcAqIgXgGIgVgGQgGgCgDgDQgDgBgDgEQgGgGgCgHIgBgIQAAgRADgKQACgIADgCQAEgDAIgBIAMACIAIABIARAIQAFACAGAGIAGAGQADAEACAMIABAHIAAAHIgBAFIAAAKQAAAHgBADQgCAEgCAAIgBABIgFgBg");
	this.shape_63.setTransform(845.9583,777.3583);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AA2BOQhBgDgfgNQgbgLgKgSQgHgOACgXQACgUAGgOQAFgJAOgRQAGgIAEgCQAFgDAJAAQAPAAAJADIAXAKIAUALQAKAGAFAFQAEAEAIAMQAMAUADALIADATIAFAQQADALgCAGQgCAGgGAGQgFAGgGACQgDABgGAAIgDAAgAgwgiQgDACgCAIQgDAKAAAQIABAJQACAHAGAGQADAEADABQADADAGACIAWAGIAWAGIAGAAQACAAACgEQABgDAAgHIAAgKIABgFIAAgHIgBgIQgCgLgDgEIgGgGQgGgGgFgCIgRgIIgIgBIgMgCQgIABgEADg");
	this.shape_64.setTransform(847.5972,776.9813);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAcAFIgXAAIgVgBIgJgBIgGAAIgIgCIgBgBQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAAAIAFgBIAMAAIAMAAIAIAAIARABIALABIAGABIAFABIABABIAAABIgBAAIAAACQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgEAAIgCAAIgEAAg");
	this.shape_65.setTransform(845.9583,777.0375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgqAIQgbgCgKgCQgHgCACgCQACgCAGgCIATgDIAKgBIAOgBIAYAAIAXACIAUABIAPABIAMACIAPAEIADACIAFACQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgIACIgLABIgMAAQhBgBgfgBgAgwgEIgFABQgBABAAAAQgBABAAAAQgBABAAAAQAAAAAAAAIABABIAIACIAGAAIAJABIAWABIAWAAIAGAAIAEAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgCIABAAIAAgBIgBgBIgFgBIgGAAIgLgCIgRgBIgIAAIgMAAIgMAAg");
	this.shape_66.setTransform(847.5972,777);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAcAfQgIAAgPgDIgVgGQgGAAgDgDQgDAAgDgDIgIgJIgBgIQAAgMADgJQACgGADAAQAEgDAIAAIAMAAIAIAAIARAJQAFAAAGAGIAGADQADADACAJIABAFIAAAGIgBADIAAAJQAAAGgBAAQgCADgCAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgEgBg");
	this.shape_67.setTransform(845.9583,777.225);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgqAwQgbgJgKgPQgHgJACgUQACgPAGgJQAFgJAOgMQAGgGAEAAQAFgDAJAAIAYAAIAXAJIAUAJQAKADAFAGIAMAMQAMAPADAIIADAPIAFAMQADAJgCADQgCAGgGADQgFAGgGAAQgEADgIAAQhBgDgfgJgAgwgaQgDAAgCAGQgDAJAAALIABAJIAIAJQADADADAAQADADAGAAIAWAGQAOADAIAAQAEADACgDQACAAACgDQABAAAAgGIAAgJIABgDIAAgGIgBgGQgCgIgDgDIgGgDQgGgGgFAAIgRgJIgIAAIgMAAQgIAAgEADg");
	this.shape_68.setTransform(847.5972,777);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63}]}).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},18).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},20).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},20).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},19).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},14).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},21).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},21).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},24).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).wait(20));

	// loro3_ala
	this.instance_8 = new lib.ala3();
	this.instance_8.setTransform(873.6,825.1,1,1,0,0,0,12.6,7.3);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:7.4,scaleY:1.589,y:825.3},4).to({regX:12.7,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},5).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).wait(1).to({regX:12.7,regY:7.4,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},0).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).wait(1).to({regX:12.7,regY:7.4,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},0).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).to({regY:7.7,scaleY:1.5966,y:825.6},5).wait(26).to({regX:12.6,regY:7.3,scaleX:1,scaleY:1,x:873.6,y:825.1},0).to({regY:7.4,scaleY:1.589,y:825.3},4).to({regX:12.7,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},5).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).wait(1).to({regX:12.7,regY:7.4,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},0).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).wait(1).to({regX:12.7,regY:7.4,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},0).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).to({regY:7.7,scaleY:1.5966,y:825.6},5).wait(28).to({regX:12.6,regY:7.3,scaleX:1,scaleY:1,x:873.6,y:825.1},0).to({regY:7.4,scaleY:1.589,y:825.3},4).to({regX:12.7,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},5).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).wait(1).to({regX:12.7,regY:7.4,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},0).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).wait(1).to({regX:12.7,regY:7.4,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},0).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).to({regY:7.7,scaleY:1.5966,y:825.6},5).wait(25).to({regX:12.6,regY:7.3,scaleX:1,scaleY:1,x:873.6,y:825.1},0).to({regY:7.4,scaleY:1.589,y:825.3},4).to({regX:12.7,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},5).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).wait(1).to({regX:12.7,regY:7.4,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},0).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).wait(1).to({regX:12.7,regY:7.4,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},0).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).to({regY:7.7,scaleY:1.5966,y:825.6},5).wait(25).to({regX:12.6,regY:7.3,scaleX:1,scaleY:1,x:873.6,y:825.1},0).to({regY:7.4,scaleY:1.589,y:825.3},4).to({regX:12.7,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},5).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).wait(1).to({regX:12.7,regY:7.4,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},0).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).wait(1).to({regX:12.7,regY:7.4,scaleX:1.0029,scaleY:0.5993,x:873.75,y:825.35},0).wait(1).to({regY:7.5,scaleY:0.895,y:825.4},0).wait(1).to({regX:12.8,scaleX:1.0023,scaleY:0.599,x:873.9},0).wait(1).to({regY:7.6,scaleY:0.8949,y:825.45},0).to({regY:7.7,scaleY:1.5966,y:825.6},5).wait(11));

	// coloreye_3
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CD5439").s().p("AAJBgQgLgCgVgKIgegQQgPgIgJgIQgEgDgNgRQgLgRgDgHQgDgKAAgSQAAgSADgLQAGgUARgNQARgNAUAAQALgBAJAEQAZgDAUAQQAHAGAOAOQAGAGAbARQAUAOAJAMQAMAPAAAVQAAAUgLAQQgKAQgTAIQgPAHgPgCQgMAFgMAAIgJAAg");
	this.shape_69.setTransform(846.1511,775.4759);

	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(240));

	// loro_3
	this.instance_9 = new lib.Tween36("synched",0);
	this.instance_9.setTransform(902.6,847.75,1,1,0,0,-0.0883,10,0.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CD5439").s().p("AAfBjQgQgCgNgJIgKgKQgJgFgKgIQgWgSgSgSIgIgJQgHgEgFgFQgMgLgFgSQgFgSAFgQQAFgRAOgNQANgMARgEQAJgCAMABQAVACAOAKQANAAAMAFQATAIAKAPQAEAGAGAMQAGAMAEAFIASAUQAKALADAQQADAQgFAPQgFAPgLAMQgMALgPAFQgJADgLAAIgKgBg");
	this.shape_70.setTransform(848.4034,775.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.instance_9}]}).wait(240));

	// GRAZIE
	this.grazie = new lib.grazie_1();
	this.grazie.name = "grazie";
	this.grazie.setTransform(759.35,880.5,1,1,0,0,0,74.5,22.5);
	new cjs.ButtonHelper(this.grazie, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.grazie).wait(240));

	// GRACIAS
	this.gracias = new lib.gracias_1();
	this.gracias.name = "gracias";
	this.gracias.setTransform(152.85,792.5,1,1,0,0,0,72,22.5);
	new cjs.ButtonHelper(this.gracias, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.gracias).wait(240));

	// OBRIGADO
	this.obrigado = new lib.obrigado();
	this.obrigado.name = "obrigado";
	this.obrigado.setTransform(605.05,785.5,1,1,0,0,0,69.2,22.5);
	new cjs.ButtonHelper(this.obrigado, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.obrigado).wait(240));

	// star4
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FADC4D").s().p("AgmAnIhSgVIBDgzIgFhVIBFAwIBQgfIgZBRIA2BBIhUACIgtBIg");
	this.shape_71.setTransform(370.55,703.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:370.55,y:703.775},0).wait(1).to({rotation:-14.9992,x:370.5643,y:703.7954},0).wait(1).to({rotation:-29.9984,x:370.6226,y:703.775},0).wait(1).to({rotation:-44.9975,x:370.6368,y:703.7536},0).wait(1).to({rotation:-59.9968,x:370.6821,y:703.725},0).wait(1).to({rotation:-74.9966,x:370.725,y:703.7313},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965,x:370.7547,y:703.7156},0).wait(1).to({rotation:-104.9956,x:370.8415,y:703.7063},0).wait(1).to({rotation:-119.9947,x:370.8875,y:703.7531},0).wait(1).to({rotation:-134.9938,x:370.8825,y:703.7941},0).wait(1));

	// star3
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FADC4D").s().p("Ag0AzIhogxIBmgzIAOhyIBRBRIBwgWIgzBnIA3BjIhxgSIhOBUg");
	this.shape_72.setTransform(682.35,684.55,1.4345,1.5963,0,0,0,-0.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(1).to({rotation:-14.999,y:684.6},0).wait(1).to({rotation:-29.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-44.9973,x:682.45},0).wait(1).to({rotation:-59.9967,x:682.5,y:684.45},0).wait(1).to({rotation:-74.9959},0).wait(1).to({regX:-0.2,rotation:-89.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-104.9942},0).wait(1).to({rotation:-119.9931},0).wait(1).to({regX:-0.3,rotation:-149.9914,x:682.6,y:684.7},0).wait(1).to({regY:2.5,rotation:-164.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-179.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-194.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-209.9881,x:682.8,y:684.65},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-360,x:682.35,y:684.55},0).wait(1).to({rotation:-374.999,y:684.6},0).wait(1).to({rotation:-389.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-404.9969,x:682.45},0).wait(1).to({rotation:-419.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-434.9959},0).wait(1).to({regX:-0.2,rotation:-449.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-464.9942},0).wait(1).to({rotation:-479.9931},0).wait(1).to({regX:-0.3,rotation:-509.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-524.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-539.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-554.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-569.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-720,x:682.35,y:684.55},0).wait(1).to({rotation:-734.999,y:684.6},0).wait(1).to({rotation:-749.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-764.9969,x:682.45},0).wait(1).to({rotation:-779.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-794.9959},0).wait(1).to({regX:-0.2,rotation:-809.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-824.9942},0).wait(1).to({rotation:-839.9931},0).wait(1).to({regX:-0.3,rotation:-869.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-884.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-899.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-914.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-929.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-1080,x:682.35,y:684.55},0).wait(1).to({rotation:-1094.999,y:684.6},0).wait(1).to({rotation:-1109.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-1124.9969,x:682.45},0).wait(1).to({rotation:-1139.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-1154.9959},0).wait(1).to({regX:-0.2,rotation:-1169.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-1184.9942},0).wait(1).to({rotation:-1199.9931},0).wait(1).to({regX:-0.3,rotation:-1229.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-1244.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-1259.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-1274.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-1289.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-1440,x:682.35,y:684.55},0).wait(1).to({rotation:-1454.999,y:684.6},0).wait(1).to({rotation:-1469.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-1484.9969,x:682.45},0).wait(1).to({rotation:-1499.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-1514.9959},0).wait(1).to({regX:-0.2,rotation:-1529.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-1544.9942},0).wait(1).to({rotation:-1559.9931},0).wait(1).to({regX:-0.3,rotation:-1589.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-1604.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-1619.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-1634.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-1649.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-1800,x:682.35,y:684.55},0).wait(1).to({rotation:-1814.999,y:684.6},0).wait(1).to({rotation:-1829.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-1844.9969,x:682.45},0).wait(1).to({rotation:-1859.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-1874.9959},0).wait(1).to({regX:-0.2,rotation:-1889.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-1904.9942},0).wait(1).to({rotation:-1919.9931},0).wait(1).to({regX:-0.3,rotation:-1949.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-1964.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-1979.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-1994.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-2009.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-2160,x:682.35,y:684.55},0).wait(1).to({rotation:-2174.999,y:684.6},0).wait(1).to({rotation:-2189.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-2204.9969,x:682.45},0).wait(1).to({rotation:-2219.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-2234.9959},0).wait(1).to({regX:-0.2,rotation:-2249.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-2264.9942},0).wait(1).to({rotation:-2279.9931},0).wait(1).to({regX:-0.3,rotation:-2309.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-2324.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-2339.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-2354.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-2369.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-2520,x:682.35,y:684.55},0).wait(1).to({rotation:-2534.999,y:684.6},0).wait(1).to({rotation:-2549.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-2564.9969,x:682.45},0).wait(1).to({rotation:-2579.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-2594.9959},0).wait(1).to({regX:-0.2,rotation:-2609.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-2624.9942},0).wait(1).to({rotation:-2639.9931},0).wait(1).to({regX:-0.3,rotation:-2669.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-2684.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-2699.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-2714.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-2729.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-2880,x:682.35,y:684.55},0).wait(1).to({rotation:-2894.999,y:684.6},0).wait(1).to({rotation:-2909.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-2924.9969,x:682.45},0).wait(1).to({rotation:-2939.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-2954.9959},0).wait(1).to({regX:-0.2,rotation:-2969.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-2984.9942},0).wait(1).to({rotation:-2999.9931},0).wait(1).to({regX:-0.3,rotation:-3029.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-3044.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-3059.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-3074.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-3089.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-3240,x:682.35,y:684.55},0).wait(1).to({rotation:-3254.999,y:684.6},0).wait(1).to({rotation:-3269.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-3284.9969,x:682.45},0).wait(1).to({rotation:-3299.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-3314.9959},0).wait(1).to({regX:-0.2,rotation:-3329.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-3344.9942},0).wait(1).to({rotation:-3359.9931},0).wait(1).to({regX:-0.3,rotation:-3389.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-3404.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-3419.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-3434.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-3449.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-3600,x:682.35,y:684.55},0).wait(1).to({rotation:-3614.999,y:684.6},0).wait(1).to({rotation:-3629.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-3644.9969,x:682.45},0).wait(1).to({rotation:-3659.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-3674.9959},0).wait(1).to({regX:-0.2,rotation:-3689.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-3704.9942},0).wait(1).to({rotation:-3719.9931},0).wait(1).to({regX:-0.3,rotation:-3749.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-3764.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-3779.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-3794.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-3809.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-3960,x:682.35,y:684.55},0).wait(1).to({rotation:-3974.999,y:684.6},0).wait(1).to({rotation:-3989.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-4004.9969,x:682.45},0).wait(1).to({rotation:-4019.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-4034.9959},0).wait(1).to({regX:-0.2,rotation:-4049.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-4064.9942},0).wait(1).to({rotation:-4079.9931},0).wait(1).to({regX:-0.3,rotation:-4109.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-4124.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-4139.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-4154.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-4169.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-4320,x:682.35,y:684.55},0).wait(1).to({rotation:-4334.999,y:684.6},0).wait(1).to({rotation:-4349.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-4364.9969,x:682.45},0).wait(1).to({rotation:-4379.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-4394.9959},0).wait(1).to({regX:-0.2,rotation:-4409.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-4424.9942},0).wait(1).to({rotation:-4439.9931},0).wait(1).to({regX:-0.3,rotation:-4469.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-4484.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-4499.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-4514.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-4529.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-4680,x:682.35,y:684.55},0).wait(1).to({rotation:-4694.999,y:684.6},0).wait(1).to({rotation:-4709.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-4724.9969,x:682.45},0).wait(1).to({rotation:-4739.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-4754.9959},0).wait(1).to({regX:-0.2,rotation:-4769.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-4784.9942},0).wait(1).to({rotation:-4799.9931},0).wait(1).to({regX:-0.3,rotation:-4829.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-4844.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-4859.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-4874.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-4889.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-5040,x:682.35,y:684.55},0).wait(1).to({rotation:-5054.999,y:684.6},0).wait(1).to({rotation:-5069.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-5084.9969,x:682.45},0).wait(1).to({rotation:-5099.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-5114.9959},0).wait(1).to({regX:-0.2,rotation:-5129.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-5144.9942},0).wait(1).to({rotation:-5159.9931},0).wait(1).to({regX:-0.3,rotation:-5189.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-5204.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-5219.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-5234.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-5249.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-5400,x:682.35,y:684.55},0).wait(1).to({rotation:-5414.999,y:684.6},0).wait(1).to({rotation:-5429.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-5444.9969,x:682.45},0).wait(1).to({rotation:-5459.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-5474.9959},0).wait(1).to({regX:-0.2,rotation:-5489.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-5504.9942},0).wait(1).to({rotation:-5519.9931},0).wait(1).to({regX:-0.3,rotation:-5549.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-5564.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-5579.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-5594.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-5609.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-5760,x:682.35,y:684.55},0).wait(1).to({rotation:-5774.999,y:684.6},0).wait(1).to({rotation:-5789.9983,x:682.4,y:684.55},0).wait(1).to({scaleX:1.4344,rotation:-5804.9969,x:682.45},0).wait(1).to({rotation:-5819.9967,x:682.5,y:684.5},0).wait(1).to({rotation:-5834.9959},0).wait(1).to({regX:-0.2,rotation:-5849.9951,x:682.55,y:684.6},0).wait(1).to({scaleY:1.5962,rotation:-5864.9942},0).wait(1).to({rotation:-5879.9931},0).wait(1).to({regX:-0.3,rotation:-5909.9911,x:682.65,y:684.7},0).wait(1).to({regY:2.5,rotation:-5924.9906,x:682.75,y:684.55},0).wait(1).to({scaleX:1.4343,rotation:-5939.9901,x:682.7},0).wait(1).to({regX:-0.4,rotation:-5954.9892,x:682.75},0).wait(1).to({regY:2.4,scaleY:1.5961,rotation:-5969.9884,x:682.8,y:684.7},0).wait(1).to({regX:-0.1,scaleX:1.4345,scaleY:1.5963,rotation:-6120,x:682.35,y:684.55},0).wait(1).to({rotation:-6134.999,y:684.6},0).wait(1));

	// star2
	this.instance_10 = new lib.Tween34("synched",0);
	this.instance_10.setTransform(645.05,557.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1).to({regX:-0.1,rotation:-134.9938,y:557.7},0).wait(1).to({regY:-0.1,rotation:-149.993,y:557.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:645.05,y:557.6},0).wait(1).to({rotation:-14.9992},0).wait(1).to({rotation:-29.9984},0).wait(1).to({rotation:-44.9975},0).wait(1).to({rotation:-59.9968,y:557.65},0).wait(1).to({rotation:-74.9966,x:645},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-89.9965},0).wait(1).to({rotation:-104.9956,x:644.95},0).wait(1).to({rotation:-119.9947,x:644.9},0).wait(1));

	// star
	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.setTransform(428.15,552.95);

	this.instance_12 = new lib.Tween8("synched",0);
	this.instance_12.setTransform(428.65,556.25);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween9("synched",0);
	this.instance_13.setTransform(430.85,555.3);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween10("synched",0);
	this.instance_14.setTransform(431.3,553);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween11("synched",0);
	this.instance_15.setTransform(429.7,551.65);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween12("synched",0);
	this.instance_16.setTransform(428.15,552.9);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween13("synched",0);
	this.instance_17.setTransform(431.5,552.4);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween14("synched",0);
	this.instance_18.setTransform(430.5,550.2);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween15("synched",0);
	this.instance_19.setTransform(428.2,549.75);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween16("synched",0);
	this.instance_20.setTransform(428.15,552.95);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween17("synched",0);
	this.instance_21.setTransform(428.65,556.25);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween18("synched",0);
	this.instance_22.setTransform(430.9,555.3);
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween19("synched",0);
	this.instance_23.setTransform(431.3,553.05);
	this.instance_23._off = true;

	this.instance_24 = new lib.Tween20("synched",0);
	this.instance_24.setTransform(429.7,551.65);
	this.instance_24._off = true;

	this.instance_25 = new lib.Tween21("synched",0);
	this.instance_25.setTransform(428.2,552.85);
	this.instance_25._off = true;

	this.instance_26 = new lib.Tween22("synched",0);
	this.instance_26.setTransform(431.5,552.4);
	this.instance_26._off = true;

	this.instance_27 = new lib.Tween23("synched",0);
	this.instance_27.setTransform(430.5,550.15);
	this.instance_27._off = true;

	this.instance_28 = new lib.Tween24("synched",0);
	this.instance_28.setTransform(428.2,549.75);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween25("synched",0);
	this.instance_29.setTransform(428.15,552.95);
	this.instance_29._off = true;

	this.instance_30 = new lib.Tween26("synched",0);
	this.instance_30.setTransform(428.65,556.25);
	this.instance_30._off = true;

	this.instance_31 = new lib.Tween27("synched",0);
	this.instance_31.setTransform(430.9,555.3);
	this.instance_31._off = true;

	this.instance_32 = new lib.Tween28("synched",0);
	this.instance_32.setTransform(431.3,553.05);
	this.instance_32._off = true;

	this.instance_33 = new lib.Tween29("synched",0);
	this.instance_33.setTransform(429.7,551.65);
	this.instance_33._off = true;

	this.instance_34 = new lib.Tween30("synched",0);
	this.instance_34.setTransform(428.2,552.85);
	this.instance_34._off = true;

	this.instance_35 = new lib.Tween31("synched",0);
	this.instance_35.setTransform(431.5,552.4);
	this.instance_35._off = true;

	this.instance_36 = new lib.Tween32("synched",0);
	this.instance_36.setTransform(430.5,550.15);
	this.instance_36._off = true;

	this.instance_37 = new lib.Tween33("synched",0);
	this.instance_37.setTransform(428.2,549.75);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(5).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(7).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(8).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(9).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(11).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(12).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(13).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(14).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(15).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(16).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(17).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(18).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(19).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(20).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(21).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(22).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(23).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(24).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(25).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(24));

	// BRAIN
	this.instance_38 = new lib.ClipGroup_7();
	this.instance_38.setTransform(524.05,562.75,1,1,0,0,0,800.5,167.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(240));

	// ala1
	this.instance_39 = new lib.ala1();
	this.instance_39.setTransform(762.3,261.05,1.0084,0.9939,0,-5.9595,3.5334,0.7,14.3);
	var instance_39Filter_4 = new cjs.ColorFilter(0.65,0.65,0.65,1,0,0,0,0);
	this.instance_39.filters = [instance_39Filter_4];
	this.instance_39.cache(-2,-2,85,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(21).to({regX:40.6,regY:37.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:802.15,y:284.45},0).to({regX:5.2,regY:20.1,scaleY:0.5455,x:766.75,y:266.75},5).to({regY:20.2,scaleX:0.8861,scaleY:0.9622,y:266.85},5).wait(1).to({regX:0.7,regY:14.3,scaleX:1.0084,scaleY:0.9939,skewX:-5.9595,skewY:3.5334,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(42).to({regX:40.6,regY:37.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:802.15,y:284.45},0).to({regX:5.2,regY:20.1,scaleY:0.5455,x:766.75,y:266.75},5).to({regY:20.2,scaleX:0.8861,scaleY:0.9622,y:266.85},5).wait(1).to({regX:0.7,regY:14.3,scaleX:1.0084,scaleY:0.9939,skewX:-5.9595,skewY:3.5334,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(18).to({regX:40.6,regY:37.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:802.15,y:284.45},0).to({regX:5.2,regY:20.1,scaleY:0.5455,x:766.75,y:266.75},5).to({regY:20.2,scaleX:0.8861,scaleY:0.9622,y:266.85},5).wait(1).to({regX:0.7,regY:14.3,scaleX:1.0084,scaleY:0.9939,skewX:-5.9595,skewY:3.5334,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.6,scaleY:0.9934,skewX:-5.9591,y:261.45},3).wait(1).to({regX:0.7,regY:14.3,scaleY:0.9939,skewX:-5.9595,x:762.3,y:261.05},0).to({regX:0.8,regY:14.4,scaleY:0.402,skewX:-5.9593,x:762.35,y:261.25},3).to({regY:14.8,scaleX:1.0387,scaleY:0.6159,skewX:-5.9574,skewY:3.5323,x:762.4,y:261.6},3).wait(18));
	this.timeline.addTween(cjs.Tween.get(instance_39Filter_4).wait(240));

	// glasses
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(1,1,1).p("ABZBIQgFADgBADQgGAGgHAGQgZARgeAEQgTADgSgGQgKgGgKgEQgegRgPgQQgFgGAAgCQgUgcABgXQgCgWAKgQQABgGAFgDQAFgKAMgJQAIgHAOgDQASAIAcAVQAOALASAOQAKAIAJAIQARAMARAOQAAgBABACIABAAABPAfQABABABAAQAEAEAFAEQABAAAAABIABABQADADAEACQgBAMgJANIAugGIAJAJAiOhvQAVAVAKAVQAFANADAS");
	this.shape_73.setTransform(747.8,209.8743);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AALATIgLgCQgCAAgCgDQgBAAgBgBQgBAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAFABQAHACASAAQAEAAADACIACACIAAADIgGABgAgLgEQgLgBgGgDIgGgCQgFgFADgBQAAgCAHABQAHADAxAFQADAAAEADQABgBAAABQAAAAABAAQAAAAABABQAAAAABABIAAADIgFABg");
	this.shape_74.setTransform(746.6188,212.9929);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAMBZIgBAAIgBAAIgBgBIgBAAIgFAAQAAgBgBAAQAAAAgBAAQAAAAAAABQAAAAgBAAIgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAABQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIgBgBIgDAAIABAAIgDAAIgGgCIgBAAIAAAAIAAgBIgBAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAABAAAAIgBgBIgCgBIgBAAIgBAAIAAAAIgBgBIgBgBQgFAAAAgDIgBgCIgCgBIgBAAIgEgDIAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIgCgCIgCgBIgBAAIgEgDIAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAABAAAAIgCgBIgDgCIgBgBIgBgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBgBIAAgBIgBAAIgCgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBAAIAAgBIgBgBIAAAAIgBgBIgBgBIAAAAIgBAAIgBgCIgCAAIgBgCIgCgBIAAgBIgBgBIAAAAIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIAAAAIgBAAQAAgBgBgBQAAAAAAAAQAAgBgBAAQAAAAAAABIAAgBIgBAAIABAAIgCgBQAAgBAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgBIgBgBIgBgBIAAgBIgBAAIABgCIgBAAIAAgBQAAgBAAAAQAAgBgBAAQAAAAAAABQAAAAAAAAIgBgCIAAgBIgBAAIAAgBQAAAAAAgBQgBAAAAAAQAAAAABAAQAAAAAAAAIgCgDIAAgBIgBgBIAAgBIgBAAIAAgCQgEgFACgDIAAgCIgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAABIgBgCIAAgCIgBgCIAAgBQAAgBgBAAQAAgBAAAAQAAAAABAAQAAgBAAABIAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIAAgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIAAgBIABgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgBQAAgBABABIAAgCIABAAIgBgCIABABIgBgCIABAAIABAAIAAgCIAAAAIABgCQgBgFACAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIgBAAIABgBIAAgBIAAAAIAAgBIABAAIAAgCIABgBIABgBIAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAABIAAgBIACAAQAAgBAAAAQgBAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABIAAgBIACAAQAAgBAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABABIAAAAQgBgBABAAIAAAAIABgBIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAABQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAABIACgCIAAgBIABAAIAAgBIACAAIAAgBIAAABIABgBIAAgBIABAAIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAQgCgBACABQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAABQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAABIACAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIABAAIABgBIABABIACAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAAAAAIABAAIAAgCIABAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABABQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABABQACgBADACIABAAIABAAIABABQABAAAAAAQAAAAABAAQAAABABAAQAAABABABIACACIAEACIABABIADABIABACIABAAIABAAQAAAAAAAAQABgBAAAAQAAAAAAABQAAAAAAABQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABIABAAIABABIABAAIAAAAIABABIABAAIABABIADACIAAABIACACIACACQABgBAEAEIABABIABAAIAAABIABAAIAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAABAAABIACABIADACIgBABIABAAIABACIABAAQACAAACAEIABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABACIACABIAAAAIABAAIACACIAAAAIAAAAIABAAIACADIABAAIABABIACABQAAAAAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAAABIACABIABABIABABQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIACAAIABACIABAAIAAABIABAAIABABIABAAIAAAAIABAAIgBABIABABIABgBIAAABIAAABIADADIAAAAIABABIAAABIAAAAIABAAIABABIABAAIACACIAAABIABAAIADADIAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIABABIABAAIABAAIABABIABABQAAAAAAAAQAAgBAAAAQABAAAAABQAAAAAAABIAAAAIACABIACABIABABIABAAIAAAAIACACIACAAIABABIABAAIABABIABAAIABABIABABIABABIAAABIACABIABAAQgBgBABABIAAABIABAAIABAAIADAGIABAAIABAAIACABIACACIAAAAIABABIABAAIAEAFIABAFQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAABQgBABABAAQAAAAAAAAQgBAAAAAAQAAABAAAAQABAAAAAAIAAABQAAgBgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBgBAAABIABABQgBAAAAAAQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAAIgBABIABABIgBAAIAAABIgBAAIAAABIgBABIAAAAIAAABIgBAAIAAABIgBAAQgBgBABABIAAABQgBgBABABIgCAAIgCADIgCABIgCADIgBABIAAAAIgBABIgCABIgBABIAAABQAAgBgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgBAAIgBABIgEADIgBACIgCAAIABAAIgBAAIAAABIAAAAIgEAEQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIgBAAQAAgBAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAABIgCAAIABAAIgBAAIAAABIgBAAIgBABIAAAAIgBAAIgBABIgBAAIgCABIgCAAQAAAAAAgBQAAAAAAAAQAAAAAAABQAAAAgBABIgBABQgBgBAAACIgBAAQgBgBABABIgCABIgBAAIgBAAIgCABIgBAAIgOACIgFAAIgCAAIgDABIgCAAgAgNAVQAAAAAAABQAAAAAAABQABAAABABQAAAAABABQACACAEABIAKABIASAAIAFgBIABgCIgDgDQgDgCgDAAQgTAAgGgCIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABgAgpgGQgDABAFAFIAGABQAFADALABIAsAEIAFgBIAAgCQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgFgDgDABQgxgEgGgDIgFgBQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAg");
	this.shape_75.setTransform(747.1607,211.9469);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#191818").s().p("AAAACIgBgBIAAAAIABgBIAAAAIABAAIAAgBIABAAIAAABIAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBAAg");
	this.shape_76.setTransform(741,203.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]}).wait(240));

	// LORO1
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1A1818").s().p("AgBA0QgVgEgKgFQgRgKABgeQAAgyAigEQARgCAYAaQAZAbgDAQQgHAkgjAAIgIAAg");
	this.shape_77.setTransform(748.3708,212.4705);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AANBHQgnAAgNgDQgbgIgLgdQgWg/AxggQATgMAlANQAlAMAOAXIAJARQAaA4gLAOQgIAMgzAAIgJAAg");
	this.shape_78.setTransform(747.6123,212.0656);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#999999").s().p("AACAKQgFAAgTgEQgEgBACgEQAHgIAKgCIAQAAQADAIALABQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgIAEgKAAIgEAAg");
	this.shape_79.setTransform(801.1717,359.1327);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#999999").s().p("AgaAUIgHgkQAUgJAPAQQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABQgCAJADABQAEACARgEQAKAGgBAFQgBAGgKABIgZAAIgYAAg");
	this.shape_80.setTransform(801.7045,359.043);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#999999").s().p("AgfAQQgFgMAOgLQANgMARgEQAEgBASAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIgBAWQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgQAFIgZANQgFADgEAAQgHAAgEgJg");
	this.shape_81.setTransform(748.0342,345.6089);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#999999").s().p("AgnATQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAPgVAWgHQARgHAaADQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAIAAAVQABAEgEAAQgNgDgZAHQgWAGgOAAIgEgBg");
	this.shape_82.setTransform(749.0508,337.0593);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#999999").s().p("AAcAUQgngLgXABQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAgBQAPgUAOgDQANgEAfAMQAEACgDADQgEAEgBAGIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAIgBAAg");
	this.shape_83.setTransform(750.1516,360.0192);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#999999").s().p("AgbATQgKgEgBgGQAAgHAIgFQASgMALgDQAPgFAPAKIAJAFIABAZQAAAAAAABQgBABAAAAQgBAAAAABQgBAAgBAAIgVAAIgUAAIgHABQgIAAgGgCg");
	this.shape_84.setTransform(747.4736,367.1281);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#521A1B").s().p("AgYAlQgHgNgFgDQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAMg/A9gEIADABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQgDAhgJAUQgMAbgXAQIgCAAQgIgCgGgLg");
	this.shape_85.setTransform(726.3313,225.225);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CCCCCC").s().p("AiDAzQgLgOAMgPQALgOASgEQALgCAXAAQAdABALgCQAWgCAPgMQgKgEgMACIgXAEIgoAGQgXAAgMgWQgNgOAMgOQAZgNAoAAIBBACQATgCAnABIADABQAGAKAYAaQAUAWAHAPQACAEgFABQgZACgiAPQglASgTAHQglAPgkAAQgoAAglgSg");
	this.shape_86.setTransform(764.4905,340.8758);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7A2827").s().p("AgrCbQhBhDAYhlQAXhlBZgpQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAIAXAoQAOAXAHARQAUAtgGASQgGAQgsATIAAAAQgtAZgfAsIgBACIAAA6QAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgCAAIgCgBg");
	this.shape_87.setTransform(726.2177,217.805);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CCCCCC").s().p("AjkBPQgNgPAMgNQAVgMAzAAQAyAAAbgPQgNgDg3AJQgoAGgUgaIgBgBQgGgMAAgGQABgJAQgCQAbgMAmAAIBCAFQA6AEAggOQApgSAZgzQACgEADADIARAXQALANANACQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIgVAbQAAAAAAABQgBAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQABABAAAAQABAAAAAAQAMABAtgFQAigDAUAIQAOAOgMAQQgTASgXAKQgYAKgXgBQg6gDhIAXQhQAfgpAOQgYAIgVAAQgqAAgggeg");
	this.shape_88.setTransform(774.2889,361.1624);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CD5439").s().p("AjTGAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgZhGgHgfQgLg6ALgyQAGgZgFgoQgHgsgCgWQgDgjANgkIAAAAIAYgzQAOgeAFgWIABgCQAlgfADgQQADgQgWgvIgSgfQgKgSACgRIABgBQA2hFBmgDQBlgDBLBCQAsAmAdAhQAjAqATAtQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgNArgbAbQgbAcgsAPQgkAMgPAoQgCAGgQBGIgKA/QgIAjgVAXQggAjg4ABQg8AAghA0QgPAZgwBEQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_89.setTransform(749.8219,233.2984);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D79548").s().p("AhkGtIgCgBQhfhzhWinIgHgNQgEgHADgHQAmiTCTgPQA2gGASg1QAIgZAIgoIAMhCQARhNBCgaQA8gYAQgyQAEgMADgDQAFgHAKABIACACQAhAuATA+QAPAvAKBHQADAWARAlQAQAnADAUQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAgBQhUgeg+BGQgEAEgVAUQgFAFgcALQgWAHgDASQgLA8AMA6QARBKAkBJQAAAAABABQAAAAAAAAQAAABAAAAQgBAAAAAAIgXAvQgxBfhqAAQgRAAgTgDg");
	this.shape_90.setTransform(757.737,260.2076);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BAC74D").s().p("Ai4E8QgEgEgKgeQgKgogogoIAAAAQgbgUgLgOQgTgUgDgZIAAgBQgVg5grg3Qgegmg5g3IgzgvQgdgdgQgZQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQANgMAbACQAvADAkgYQAegVAagrQAFgIAHgSQAIgOAOgDQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAYAuAtA2QAaAgA2A9QANAOAHAAQAeADBLAeQBAAaArgEQALgBAJAGQBEAwBeAOQA8AJBxgBQAaAYAnAWIBIAlIANAFQAIAEABAHQAAAJgHAGQgEACgMAFQhCAdhSAAQhmgBhCAeQguAWhDABIhzgDQgigBgTANQgTANgHAfQgLAwgxAIQgIADgGAAQgOAAgHgLg");
	this.shape_91.setTransform(803.2694,321.8223);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#808F38").s().p("ABME3QgHgFgRgBQgRgCgGgDQgUgJhegWQhIgQgjgiQhlhigzhhQgfg8gPgzQgRg+ACg7QABgdAKgSQALgVAZgMQASgIAXgVQAcgZAJgHQAjgXAeAAQAfAAAfAXQA3ApA1BCQAeAmA5BWQAlA4BIBxQBCBkA1BAQAUAZAfAdIA3AyIAVAQQAKAKgCAPQgIAJgOACIgYACIgRAAQibAAhvg+g");
	this.shape_92.setTransform(802.5004,287.1089);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]}).wait(240));

	// GirlEyes
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2B2B2B").s().p("AgbAcQgLgLAAgRQAAgPALgMQAMgLAPgBQAQAAAMAMQALALAAAQQAAAQgLAMQgMAMgQAAQgPAAgMgMg");
	this.shape_93.setTransform(615.3128,1038.86,1.063,0.9547);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2B2B2B").s().p("AgbAcQgLgLAAgRQAAgPALgMQAMgLAPgBQAQAAAMAMQALALAAAQQAAAQgLAMQgMAMgQAAQgPAAgMgMg");
	this.shape_94.setTransform(590.4128,1039.36,1.063,0.9547);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94,p:{scaleY:0.9547,skewX:0,y:1039.36}},{t:this.shape_93,p:{scaleY:0.9547,skewX:0,y:1038.86}}]}).to({state:[{t:this.shape_94,p:{scaleY:0.0943,skewX:180,y:1039.0476}},{t:this.shape_93,p:{scaleY:0.0943,skewX:180,y:1039.0976}}]},2).to({state:[{t:this.shape_94,p:{scaleY:1.0371,skewX:180,y:1039.0234}},{t:this.shape_93,p:{scaleY:1.0371,skewX:180,y:1039.5734}}]},2).to({state:[{t:this.shape_94,p:{scaleY:0.9547,skewX:0,y:1039.36}},{t:this.shape_93,p:{scaleY:0.9547,skewX:0,y:1038.86}}]},30).to({state:[{t:this.shape_94,p:{scaleY:0.0943,skewX:180,y:1039.0476}},{t:this.shape_93,p:{scaleY:0.0943,skewX:180,y:1039.0976}}]},2).to({state:[{t:this.shape_94,p:{scaleY:1.0371,skewX:180,y:1039.0234}},{t:this.shape_93,p:{scaleY:1.0371,skewX:180,y:1039.5734}}]},2).to({state:[{t:this.shape_94,p:{scaleY:0.9547,skewX:0,y:1039.36}},{t:this.shape_93,p:{scaleY:0.9547,skewX:0,y:1038.86}}]},31).to({state:[{t:this.shape_94,p:{scaleY:0.0943,skewX:180,y:1039.0476}},{t:this.shape_93,p:{scaleY:0.0943,skewX:180,y:1039.0976}}]},2).to({state:[{t:this.shape_94,p:{scaleY:1.0371,skewX:180,y:1039.0234}},{t:this.shape_93,p:{scaleY:1.0371,skewX:180,y:1039.5734}}]},2).to({state:[{t:this.shape_94,p:{scaleY:0.9547,skewX:0,y:1039.36}},{t:this.shape_93,p:{scaleY:0.9547,skewX:0,y:1038.86}}]},31).to({state:[{t:this.shape_94,p:{scaleY:0.0943,skewX:180,y:1039.0476}},{t:this.shape_93,p:{scaleY:0.0943,skewX:180,y:1039.0976}}]},2).to({state:[{t:this.shape_94,p:{scaleY:1.0371,skewX:180,y:1039.0234}},{t:this.shape_93,p:{scaleY:1.0371,skewX:180,y:1039.5734}}]},2).to({state:[{t:this.shape_94,p:{scaleY:0.9547,skewX:0,y:1039.36}},{t:this.shape_93,p:{scaleY:0.9547,skewX:0,y:1038.86}}]},31).to({state:[{t:this.shape_94,p:{scaleY:0.0943,skewX:180,y:1039.0476}},{t:this.shape_93,p:{scaleY:0.0943,skewX:180,y:1039.0976}}]},2).to({state:[{t:this.shape_94,p:{scaleY:1.0371,skewX:180,y:1039.0234}},{t:this.shape_93,p:{scaleY:1.0371,skewX:180,y:1039.5734}}]},2).to({state:[{t:this.shape_94,p:{scaleY:0.9547,skewX:0,y:1039.36}},{t:this.shape_93,p:{scaleY:0.9547,skewX:0,y:1038.86}}]},31).to({state:[{t:this.shape_94,p:{scaleY:0.0943,skewX:180,y:1039.0476}},{t:this.shape_93,p:{scaleY:0.0943,skewX:180,y:1039.0976}}]},2).to({state:[{t:this.shape_94,p:{scaleY:1.0371,skewX:180,y:1039.0234}},{t:this.shape_93,p:{scaleY:1.0371,skewX:180,y:1039.5734}}]},2).to({state:[{t:this.shape_94,p:{scaleY:0.9547,skewX:0,y:1039.36}},{t:this.shape_93,p:{scaleY:0.9547,skewX:0,y:1038.86}}]},31).to({state:[{t:this.shape_94,p:{scaleY:0.0943,skewX:180,y:1039.0476}},{t:this.shape_93,p:{scaleY:0.0943,skewX:180,y:1039.0976}}]},2).to({state:[{t:this.shape_94,p:{scaleY:1.0371,skewX:180,y:1039.0234}},{t:this.shape_93,p:{scaleY:1.0371,skewX:180,y:1039.5734}}]},2).to({state:[{t:this.shape_94,p:{scaleY:0.9547,skewX:0,y:1039.36}},{t:this.shape_93,p:{scaleY:0.9547,skewX:0,y:1038.86}}]},21).to({state:[{t:this.shape_94,p:{scaleY:0.0943,skewX:180,y:1039.0476}},{t:this.shape_93,p:{scaleY:0.0943,skewX:180,y:1039.0976}}]},2).to({state:[{t:this.shape_94,p:{scaleY:1.0371,skewX:180,y:1039.0234}},{t:this.shape_93,p:{scaleY:1.0371,skewX:180,y:1039.5734}}]},2).wait(2));

	// leftArm
	this.instance_40 = new lib.Leftarm();
	this.instance_40.setTransform(485.15,1167.35,1,1,0,0,0,10,113);
	var instance_40Filter_5 = new cjs.ColorFilter(0.82,0.82,0.82,1,45.9,45.9,45.9,0);
	this.instance_40.filters = [instance_40Filter_5];
	this.instance_40.cache(-2,-2,69,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},5).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(1).to({regX:10,regY:113,scaleY:1,skewX:0,x:485.15,y:1167.35},0).to({regX:11.8,regY:109,scaleY:1.1049,skewX:-25.1707,x:487,y:1163.35},4).to({scaleY:1.0001,skewX:-0.841},5).wait(2));
	this.timeline.addTween(cjs.Tween.get(instance_40Filter_5).wait(240));

	// Right_Arm
	this.instance_41 = new lib.rightarm();
	this.instance_41.setTransform(681.1,1175.65,1,1.0001,0,-3.9703,-4.6852,25.6,115.9);
	var instance_41Filter_6 = new cjs.ColorFilter(0.82,0.82,0.82,1,45.9,45.9,45.9,0);
	this.instance_41.filters = [instance_41Filter_6];
	this.instance_41.cache(-2,-2,44,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1,y:1175.65},5).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(1).to({regY:115.9,scaleY:1.0001,skewX:-3.9703,x:681.1},0).to({regX:25.5,regY:116,scaleY:1.0751,skewX:16.8545,x:681,y:1175.7},4).to({regX:25.6,scaleY:1.0005,skewX:-2.8578,x:681.15,y:1175.65},5).wait(2));
	this.timeline.addTween(cjs.Tween.get(instance_41Filter_6).wait(240));

	// Girl
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#88BDA0").s().p("AgmAXQhLi/AGgPQAFgQBpgHQA2gDA0gBIhJGlQglhcglhgg");
	this.shape_95.setTransform(552.0311,1113);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E7C387").s().p("Al2FUIEcmIQDBjVCMhIQArgXAhgFQARgDAHACIAgExImcE2Qg1AogxAcQhcAzhAAAQgwAAgfgcg");
	this.shape_96.setTransform(517.125,1130.827);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AANBEQgNgkgMgZIAKhK");
	this.shape_97.setTransform(632.075,1117.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#88BDA0").s().p("AhsjSIBqAEQBpAHAFAQQAGAPhLC/QglBgglBcg");
	this.shape_98.setTransform(633.5189,1113);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E7C387").s().p("ABFFTQgogpglg1IgfguIjGj7QgFhAgohPIAhjvQAoAGBAA8QBxBqCCDtQARAkBwCQIA3EMQgXAMgZAAQhIAAhdhgg");
	this.shape_99.setTransform(659.05,1137.7858);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AghA6IBDhz");
	this.shape_100.setTransform(560.8,1047.225);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("Ag5gnIBzBP");
	this.shape_101.setTransform(560.6,1047.05);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E7C387").s().p("AgCBqQgvgUgUghQgYgmgDgoQgEgvAcgZQAagXAkACQARABANAGIAYAMQAZAPAIAMIARBXQAMBbgcAJQgMAEgNAAQgZAAgegNg");
	this.shape_102.setTransform(560.0304,1047.4329);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AA0ApIhnhR");
	this.shape_103.setTransform(579.45,1002.95);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EF8AA8").s().p("Al1DVQgSg+AOhTQAaikCehiQBmg3CHAXQCkAbBdCOQAfAwAMA7QANA8ABACQAXAYADAdQACAegYANQgXANgdgLQgVgHgfgWQgYgSgegjQgegjgRghQgHgMgPgkQgOgdgKgRQggg2grgTQgggOguAGQg5AHgcAmIgvBdQg/BxhLBig");
	this.shape_104.setTransform(597.4223,1015.1381);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgrhDIBXCH");
	this.shape_105.setTransform(620.15,1188.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAyhDIhjCH");
	this.shape_106.setTransform(562.475,1188.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAAiyIABFl");
	this.shape_107.setTransform(592.65,1200.425);

	this.instance_42 = new lib.Group();
	this.instance_42.setTransform(592.35,1179.85,1,1,0,0,0,0.8,2.6);
	this.instance_42.alpha = 0.5;
	this.instance_42.compositeOperation = "multiply";

	this.instance_43 = new lib.Group_1();
	this.instance_43.setTransform(592.35,1179.85,1,1,0,0,0,0.8,2.6);
	this.instance_43.compositeOperation = "multiply";

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#96BDD8").s().p("AABAaQgGAAAAgHIgCglQgBgDADgCQACgCACAAQAGgBABAHIACAlQABAHgHABg");
	this.shape_108.setTransform(592.3767,1179.8691);

	this.instance_44 = new lib.Group_2();
	this.instance_44.setTransform(592.75,1188.25,1,1,0,0,0,11.7,11.2);
	this.instance_44.compositeOperation = "multiply";

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#96BDD8").s().p("Ag0BwQgGAAgBgHQgIhZAthQQgaASgQAGQgOAEgIAAIgGAAQgJgBgGgGQgHgGgBgIQgDgOALgKQAGgGANgGQAXgIA+AEIAAAAIAogKQArgIAUALQAOAGACALQAEAPgPAIQgHAEgOABIgBAAQgWAAgxgSQAkBNgBBWQAAAHgHAAQgDAAgCgCQgDgCAAgDQABhUgihJQgZAngLAsQgMAuAEAuQAAAHgGABgAhThPQgJADgFAFQgFAFABAGQABAIALACQAHABANgFQATgGAegXIgVgBQgdAAgNAFgAAVhZQApAPAWAAQAJAAAFgCQAFgEgBgEQgBgEgHgDQgKgFgQAAQgTAAgcAHg");
	this.shape_109.setTransform(592.7359,1188.1938);

	this.instance_45 = new lib.Group_3();
	this.instance_45.setTransform(593.4,1180.2,1,1,0,0,0,13.7,1.1);
	this.instance_45.alpha = 0.5;
	this.instance_45.compositeOperation = "multiply";

	this.instance_46 = new lib.Group_4();
	this.instance_46.setTransform(593.4,1180.2,1,1,0,0,0,13.7,1.1);
	this.instance_46.compositeOperation = "multiply";

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#96BDD8").s().p("AhIAEQAAgHAHAAICDgHQAGgBABAIQAAAHgHAAIiDAHQgGAAgBgHg");
	this.shape_110.setTransform(599.775,1180.1694);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#96BDD8").s().p("AA3AKIhugFQgHAAAAgHQABgIAHABIBuAGQAHAAAAAGQAAAHgHAAg");
	this.shape_111.setTransform(585.975,1180.0944);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#2B2B2B").ss(0.5,1,1).p("AE1AAIpoAA");
	this.shape_112.setTransform(591.55,1182.15);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#2B2B2B").ss(0.5,1,1).p("AEyAAIpjAA");
	this.shape_113.setTransform(591.5,1177.45);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#2B2B2B").ss(0.5,1,1).p("AEtAAIpYAA");
	this.shape_114.setTransform(591.3,1179.75);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#96BDD8").s().p("AmFDVIBamGIgEgjIJyAAIgEAjIBHGGg");
	this.shape_115.setTransform(590.525,1197.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#2B2B2B").ss(1.5,1,1).p("AAAhjIAADH");
	this.shape_116.setTransform(600.05,1107.65);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(0.8,1,1).p("AAAgVIAAAr");
	this.shape_117.setTransform(600.05,1119.525);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#2B2B2B").ss(1.5,1,1).p("AAAiNIAAEb");
	this.shape_118.setTransform(587.6,1111.825);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(0.8,1,1).p("AAAgVIAAAr");
	this.shape_119.setTransform(587.6,1127.675);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgiATQAggWAlgP");
	this.shape_120.setTransform(611.625,1079.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AAhAPQgdgQgkgN");
	this.shape_121.setTransform(574.25,1078.45);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("ABSggQgTAAgeAIQg8AQg2Ap");
	this.shape_122.setTransform(614.2,1095.125);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AhXgeIAxAEQA9AOBBAs");
	this.shape_123.setTransform(572.1,1094.95);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#88BDA0").s().p("AiLBvQAGgCAMgbQATgoAMgVQA5hdBpgqIAmAlQAkAxgHBAQgyAZg8AVQhZAhgyAAQgRAAgMgEg");
	this.shape_124.setTransform(608.6313,1088.2578);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#88BDA0").s().p("AggBSIh9guQgIhAApgxQANgQARgMIANgJQB4AqBBBeQAPAWAUAnQAOAbAGABQgOAEgTAAQg5AAhlghg");
	this.shape_125.setTransform(578.6847,1088.2578);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#88BDA0").s().p("ADuGUQhQgdgKgBQgagBgpALQguALgXABQgaACgpgKQgsgLgbAAQgNAAhmAbQhZAXgdgLIgRmDIgrmPIEIgzIAHAQQAJAUAQAQQAxA0BWAAQBXAAAeg0QAJgQADgUIAAgQIEKAyIghDyQAUAoANAqQAUBCgLAqQgLApggAnQgUAZgXASIAKDrQgKADgMAAQghAAgvgSg");
	this.shape_126.setTransform(593.3702,1131.1727);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("ACIAXQgeALgcAFQgYAEgOgBQgagEgwgVQg2gYgwgi");
	this.shape_127.setTransform(592.95,1076.7955);

	this.instance_47 = new lib.Group_5();
	this.instance_47.setTransform(601.35,1052,1,1,0,0,0,25.1,6.5);
	this.instance_47.alpha = 0.25;
	this.instance_47.compositeOperation = "multiply";

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("ABTAGQgbAQgiADQhDAIglg6");
	this.shape_128.setTransform(600.575,1055.3224);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AgahJIAVAjQAWAwAKBBIgwAA");
	this.shape_129.setTransform(606.025,1043.85);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("Ag5APIAigVQAogSApAV");
	this.shape_130.setTransform(588.775,1029.3846);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#2B2B2B").ss(0.8,1,1).p("AA6APQgNgNgVgIQgogSgpAV");
	this.shape_131.setTransform(615.7,1029.3846);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E7C387").s().p("AAMG0QgngFhJgoQhXgvgwg3Qgug3gkiCQgdhogCg8QgFhuA0hjQBXimDXgBQDaAABWCbQAeA3AKBDQAHAxgFAkQgBAQgKA2QgIAuABAQIAGBMQABA+gUArQg6BshwA2QhIAkgvAAIgPgBg");
	this.shape_132.setTransform(595.7531,1037.3694);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E7C387").s().p("AmhMaIBZmHIhbtWIEIgzIAAkjIEoAAIAAEjIEIAzIghDxQAVAqANAoQAVBDgLAqQgKAoghAnQgUAZgXASIgoEsIBHGHg");
	this.shape_133.setTransform(593.375,1139.275);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#88BDA0").s().p("AjiCaIAAkmIB0gLQCXgHC6ASIAAEmg");
	this.shape_134.setTransform(593.175,1090.9147);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EF8AA8").s().p("AAAGhQgagOgOgFQgXgKgTgBQgTAAgaAIIgtAOQg7AMg3gkQg2gkgNg8QgFgggDgQQgFgcgOgPQgGgHgQgKQgQgLgGgGQgOgQgCgZQgBgXAJgXQAHgRAPgXIAaglQA5haADiGQABhCgBglQgCgxgJg2IJ6BPQAOCdAOBPQAYCBAtBfIAfBAQAPAlgBAfQAAAsggAkQggAjgsAEQgTACgcgEIgugJQg7gKggAXQgKAHgVAaQgSAWgOAHQgOAHgRAAQgYAAgfgOg");
	this.shape_135.setTransform(593.6401,1070.0482);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.instance_47},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_46},{t:this.instance_45},{t:this.shape_109},{t:this.instance_44},{t:this.shape_108},{t:this.instance_43},{t:this.instance_42},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]}).wait(240));

	// eyes
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#2B2B2B").s().p("AgQAhQgVgKAAgXQAAgPALgLQALgLAPAAQAXAAALAVQALAVgSAWQgOALgNAAQgHAAgJgFg");
	this.shape_136.setTransform(282.1873,248.3661);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#2B2B2B").s().p("AgZAbQgLgLAAgQQAAgOALgMQALgLAOABQAPgBAMALQALAMgBAOQABAQgLALQgLALgQgBQgOABgLgLg");
	this.shape_137.setTransform(258.15,248.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137,p:{scaleY:1,y:248.35}},{t:this.shape_136,p:{scaleY:1,y:248.3661}}]}).to({state:[{t:this.shape_137,p:{scaleY:0.16,y:248.3869}},{t:this.shape_136,p:{scaleY:0.16,y:248.3895}}]},2).to({state:[{t:this.shape_137,p:{scaleY:0.9333,y:248.3474}},{t:this.shape_136,p:{scaleY:0.9333,y:248.3624}}]},2).to({state:[{t:this.shape_137,p:{scaleY:1,y:248.35}},{t:this.shape_136,p:{scaleY:1,y:248.3661}}]},19).to({state:[{t:this.shape_137,p:{scaleY:0.16,y:248.3869}},{t:this.shape_136,p:{scaleY:0.16,y:248.3895}}]},2).to({state:[{t:this.shape_137,p:{scaleY:0.9333,y:248.3474}},{t:this.shape_136,p:{scaleY:0.9333,y:248.3624}}]},2).to({state:[{t:this.shape_137,p:{scaleY:1,y:248.35}},{t:this.shape_136,p:{scaleY:1,y:248.3661}}]},20).to({state:[{t:this.shape_137,p:{scaleY:0.16,y:248.3869}},{t:this.shape_136,p:{scaleY:0.16,y:248.3895}}]},2).to({state:[{t:this.shape_137,p:{scaleY:0.9333,y:248.3474}},{t:this.shape_136,p:{scaleY:0.9333,y:248.3624}}]},2).to({state:[{t:this.shape_137,p:{scaleY:1,y:248.35}},{t:this.shape_136,p:{scaleY:1,y:248.3661}}]},21).to({state:[{t:this.shape_137,p:{scaleY:0.16,y:248.3869}},{t:this.shape_136,p:{scaleY:0.16,y:248.3895}}]},2).to({state:[{t:this.shape_137,p:{scaleY:0.9333,y:248.3474}},{t:this.shape_136,p:{scaleY:0.9333,y:248.3624}}]},2).to({state:[{t:this.shape_137,p:{scaleY:1,y:248.35}},{t:this.shape_136,p:{scaleY:1,y:248.3661}}]},23).to({state:[{t:this.shape_137,p:{scaleY:0.16,y:248.3869}},{t:this.shape_136,p:{scaleY:0.16,y:248.3895}}]},2).to({state:[{t:this.shape_137,p:{scaleY:0.9333,y:248.3474}},{t:this.shape_136,p:{scaleY:0.9333,y:248.3624}}]},2).to({state:[{t:this.shape_137,p:{scaleY:1,y:248.35}},{t:this.shape_136,p:{scaleY:1,y:248.3661}}]},19).to({state:[{t:this.shape_137,p:{scaleY:0.16,y:248.3869}},{t:this.shape_136,p:{scaleY:0.16,y:248.3895}}]},2).to({state:[{t:this.shape_137,p:{scaleY:0.9333,y:248.3474}},{t:this.shape_136,p:{scaleY:0.9333,y:248.3624}}]},2).to({state:[{t:this.shape_137,p:{scaleY:1,y:248.35}},{t:this.shape_136,p:{scaleY:1,y:248.3661}}]},20).to({state:[{t:this.shape_137,p:{scaleY:0.16,y:248.3869}},{t:this.shape_136,p:{scaleY:0.16,y:248.3895}}]},2).to({state:[{t:this.shape_137,p:{scaleY:0.9333,y:248.3474}},{t:this.shape_136,p:{scaleY:0.9333,y:248.3624}}]},2).to({state:[{t:this.shape_137,p:{scaleY:1,y:248.35}},{t:this.shape_136,p:{scaleY:1,y:248.3661}}]},21).to({state:[{t:this.shape_137,p:{scaleY:0.16,y:248.3869}},{t:this.shape_136,p:{scaleY:0.16,y:248.3895}}]},2).to({state:[{t:this.shape_137,p:{scaleY:0.9333,y:248.3474}},{t:this.shape_136,p:{scaleY:0.9333,y:248.3624}}]},2).to({state:[{t:this.shape_137,p:{scaleY:1,y:248.35}},{t:this.shape_136,p:{scaleY:1,y:248.3661}}]},27).to({state:[{t:this.shape_137,p:{scaleY:0.16,y:248.3869}},{t:this.shape_136,p:{scaleY:0.16,y:248.3895}}]},2).to({state:[{t:this.shape_137,p:{scaleY:0.9333,y:248.3474}},{t:this.shape_136,p:{scaleY:0.9333,y:248.3624}}]},2).to({state:[{t:this.shape_137,p:{scaleY:1,y:248.35}},{t:this.shape_136,p:{scaleY:1,y:248.3661}}]},26).to({state:[{t:this.shape_137,p:{scaleY:0.16,y:248.3869}},{t:this.shape_136,p:{scaleY:0.16,y:248.3895}}]},2).to({state:[{t:this.shape_137,p:{scaleY:0.9333,y:248.3474}},{t:this.shape_136,p:{scaleY:0.9333,y:248.3624}}]},2).wait(4));

	// mouth
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgQAmQgrgFgWghIgNgfIC8gGQgJAVgTAUQghAfglADIgMAAg");
	this.shape_138.setTransform(270.8792,270.675,0.4286,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_138).wait(4).to({scaleX:0.9161,x:270.8276},0).wait(30).to({scaleX:0.4286,x:270.8792},0).wait(4).to({scaleX:0.9161,x:270.8276},0).wait(31).to({scaleX:0.4286,x:270.8792},0).wait(4).to({scaleX:0.9161,x:270.8276},0).wait(31).to({scaleX:0.4286,x:270.8792},0).wait(4).to({scaleX:0.9161,x:270.8276},0).wait(31).to({scaleX:0.4286,x:270.8792},0).wait(4).to({scaleX:0.9161,x:270.8276},0).wait(31).to({scaleX:0.4286,x:270.8792},0).wait(4).to({scaleX:0.9161,x:270.8276},0).wait(31).to({scaleX:0.4286,x:270.8792},0).wait(4).to({scaleX:0.9161,x:270.8276},0).wait(27));

	// arm
	this.instance_48 = new lib.Tween3("synched",0);
	this.instance_48.setTransform(346,385.35,1,1.0027,0,-4.2046,0,0.1,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(1).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(15).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(1).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(1).to({skewX:-6.5363},0).wait(15).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(1).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(16).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(1).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(16).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(1).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(16).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(1).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(16).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(1).to({scaleY:1.0027,skewX:-4.2046},0).to({scaleY:1.0114,skewX:8.6065,x:345.95},4).to({scaleY:1.0066,skewX:-6.5363,x:346},5).wait(12));

	// boy
	this.instance_49 = new lib.ClipGroup_8();
	this.instance_49.setTransform(506.8,330.45,1,1,0,0,0,375,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(240));

	// HELLO
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#2B2B2B").s().p("AgNBeQgFgGAAgIQAAgIAFgGQAGgHAHAAQAIAAAFAHQAGAGAAAIQAAAIgGAGQgFAGgIAAQgHAAgGgGgAgPAiIAAiFIAfAAIAACFg");
	this.shape_139.setTransform(711.2,287.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#2B2B2B").s().p("AgdBhQgNgIgJgOQgJgNgFgTQgFgUAAgXQAAgXAFgTQAEgTAJgNQAKgOANgIQANgHAQAAQARAAANAHQANAIAJAOQAKANAFATQAEATAAAXQAAAXgEAUQgFATgKANQgJAOgNAIQgNAHgRAAQgQAAgNgHgAgPhCQgHAGgFAJQgEAKgCANQgDAOAAAOQAAAPADANQACAOAEAJQAFAKAHAGQAHAFAIAAQAJAAAHgFQAHgGAFgKQAEgJADgOQACgNAAgPQAAgOgDgOQgCgNgFgKQgEgJgHgGQgHgFgJAAQgIAAgHAFg");
	this.shape_140.setTransform(698.575,286.975);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#2B2B2B").s().p("AAYBjIgehVIgTAAIAABVIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAIAEAKQAEALAAAPQAAALgDAJQgDAJgEAGQgFAGgFADQgGADgFABIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_141.setTransform(683.825,287);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#2B2B2B").s().p("Ag4BjIAAjFIA0AAQAIAAAKACQAKACAIAFQAIAGAFAJQAGAKAAAQQAAASgIALQgIAKgKAFIAAAAQAFABAGADQAGADAEAGQAFAHADAIQADAIAAALQAAAQgFAKQgFALgIAHQgIAGgKADQgKADgJAAgAgYBHIAVAAQAFAAAFgCQAFgCAEgEQAFgDACgGQACgGAAgHQAAgJgDgGQgCgGgFgEQgEgEgGgBQgFgCgEAAIgUAAgAgYgPIASAAIAJgCQAFgBAEgDQAEgEACgFQADgFAAgIQAAgIgDgFQgCgFgEgDQgEgEgFgBIgJgBIgSAAg");
	this.shape_142.setTransform(669.175,287);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#2B2B2B").s().p("Ag2BjIAAjFIA2AAQAJAAAKADQAKADAIAGQAIAHAFALQAFAMAAARQAAAOgEAMQgFALgHAHQgIAHgKAEQgJAEgLAAIgWAAIAABPgAgVgHIATAAQALAAAHgIQAIgJAAgPQAAgQgIgIQgHgGgLAAIgTAAg");
	this.shape_143.setTransform(649.675,287);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#2B2B2B").s().p("AgcBgQgMgGgHgLQgIgKgDgOQgDgNAAgQIAAh+IAhAAIAAB7IACASQABAIADAHQADAGAGAEQAGAEAHAAQAJAAAGgEQAFgEADgGQAEgHABgIIABgSIAAh7IAhAAIAAB+QAAAQgDANQgDAOgIAKQgHALgMAGQgMAFgRAAQgQAAgMgFg");
	this.shape_144.setTransform(634.225,287.25);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#2B2B2B").s().p("AggBiQgOgHgJgJIATgZQAGAIAKAEQAIAFAKAAQAJAAAIgIQAGgHABgNQAAgNgJgHQgIgIgMgGIgPgJQgIgEgFgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgLAIgIQAIgHAKgDQAKgEAJAAQAPAAAMAFQANAFAHAJIgSAYQgLgNgRAAIgJACQgDABgEAEQgEADgBAFQgCAGgBAHQAAAMAIAHQAHAHALAGIAPAJQAIAEAHAGQAFAHAFAJQADAJAAANQAAAPgEALQgFALgIAIQgHAIgLADQgKAEgKAAQgRAAgOgGg");
	this.shape_145.setTransform(614.4,286.975);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#2B2B2B").s().p("AgKAkIAAhHIAVAAIAABHg");
	this.shape_146.setTransform(605.125,280.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#2B2B2B").s().p("AgQBjIAAioIglAAIAAgdIBrAAIAAAdIgmAAIAACog");
	this.shape_147.setTransform(596.625,287);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#2B2B2B").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_148.setTransform(584.725,287);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#2B2B2B").s().p("AAeBjIAAhYIg7AAIAABYIghAAIAAjFIAhAAIAABQIA7AAIAAhQIAhAAIAADFg");
	this.shape_149.setTransform(569.35,287);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#2B2B2B").s().p("AAbBjIgbiUIAAAAIgbCUIgnAAIgljFIAiAAIAZCYIABAAIAbiYIAiAAIAcCYIAAAAIAaiYIAgAAIgmDFg");
	this.shape_150.setTransform(550.325,287);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#2B2B2B").s().p("AgNBfQgFgHAAgIQAAgIAFgHQAFgFAIAAQAIAAAFAFQAGAHAAAIQAAAIgGAHQgFAFgIAAQgIAAgFgFgAgPAiIAAiFIAfAAIAACFg");
	this.shape_151.setTransform(436.05,249);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#2B2B2B").s().p("AgdBhQgNgIgJgOQgJgNgFgTQgFgUAAgXQAAgXAFgTQAEgTAJgNQAKgOANgIQANgHAQAAQARAAANAHQANAIAJAOQAKANAFATQAEATAAAXQAAAXgEAUQgFATgKANQgJAOgNAIQgNAHgRAAQgQAAgNgHgAgPhCQgHAGgFAJQgEAKgCANQgDAOAAAOQAAAPADANQACAOAEAJQAFAKAHAGQAHAFAIAAQAJAAAHgFQAHgGAFgKQAEgJADgOQACgNAAgPQAAgOgDgOQgCgNgFgKQgEgJgHgGQgHgFgJAAQgIAAgHAFg");
	this.shape_152.setTransform(423.425,248.875);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2B2B2B").s().p("AgrBjIAAjFIAiAAIAACmIA1AAIAAAfg");
	this.shape_153.setTransform(411.425,248.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#2B2B2B").s().p("AgrBjIAAjFIAiAAIAACmIA1AAIAAAfg");
	this.shape_154.setTransform(400.425,248.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#2B2B2B").s().p("AgtBjIAAjFIBYAAIAAAdIg3AAIAAA1IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_155.setTransform(388.375,248.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#2B2B2B").s().p("AAeBjIAAhYIg7AAIAABYIghAAIAAjFIAhAAIAABQIA7AAIAAhQIAhAAIAADFg");
	this.shape_156.setTransform(373.5,248.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139}]}).wait(240));

	// guides
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgeBiQgMgHgJgKIAOgSQAHAHAKAGQAJAFAKAAQAMAAAIgJQAIgIAAgQQAAgHgDgGQgBgFgGgGIgKgIIgbgQQgJgGgDgFQgGgGgDgIQgDgKAAgMQAAgOAFgKQAEgLAHgHQAHgHAKgDQAJgEAJAAQAPAAALAFQALAFAIAJIgPASQgLgOgSAAQgFAAgEACQgGACgEAEQgDADgEAHQgCAHAAAIQAAAGACAHQADAGAEAEIAJAIIALAGQAKAEAFAFQAIADAGAIQAHAGADAKQADAIAAANQAAAOgDAKQgFALgHAHQgIAIgIADQgMAEgJAAQgPAAgOgGg");
	this.shape_157.setTransform(928.7,651.35);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAbBjIgghYIgYAAIAABYIgYAAIAAjFIAzAAQAKAAAKADQAKADAHAGQAHAIAFAJQADALAAAOQABAMgDAJQgDAIgFAHQgFAGgGADQgGADgGACIAlBdgAgdgIIAYAAQAOAAAHgJQAKgJgBgRQAAgKgCgHQgEgHgEgDQgEgEgGgCIgLgBIgXAAg");
	this.shape_158.setTransform(916.55,651.35);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAWIg6AAIAAA+IA2AAIAAAUIg2AAIAABGIA9AAIAAAXg");
	this.shape_159.setTransform(903.525,651.35);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgMBjIAAhPIgxh2IAbAAIAiBdIAjhdIAbAAIgyB2IAABPg");
	this.shape_160.setTransform(890.925,651.35);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAoBjIgMguIg4AAIgLAuIgaAAIAyjFIAgAAIAxDFgAgZAhIAyAAIgZhsIAAAAg");
	this.shape_161.setTransform(878.65,651.35);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgoBjIAAjFIAaAAIAACtIA3AAIAAAYg");
	this.shape_162.setTransform(867.625,651.35);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgcBgQgLgGgKgPQgJgOgEgTQgFgSAAgYQAAgXAEgTQAFgTAJgOQAJgNAMgHQANgIAPAAQAQAAAMAIQANAHAJANQAJAOAEATQAFATAAAXQAAAXgFATQgEATgJAOQgKAPgMAGQgMAIgQAAQgOAAgOgIgAgRhKQgIAIgFAJQgFALgCAPQgDAMAAATQAAATADAMQACAPAFALQAEAKAJAHQAHAGAKABQAKgBAIgGQAIgHAFgKQAGgLABgPQAEgPAAgQQAAgQgEgPQgBgPgGgLQgFgJgIgIQgIgGgKAAQgKAAgHAGg");
	this.shape_163.setTransform(847.95,651.35);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAeBjIgeifIAAAAIgdCfIggAAIgmjFIAZAAIAeCkIAAAAIAfikIAcAAIAfCkIABAAIAdikIAYAAIgmDFg");
	this.shape_164.setTransform(829.475,651.35);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgLBjIAAiwIgnAAIAAgVIBlAAIAAAVIgnAAIAACwg");
	this.shape_165.setTransform(814,651.35);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgdBiQgNgGgJgLIAPgSQAFAHALAGQAKAFAJAAQANAAAHgJQAJgIAAgQQAAgHgDgGIgHgLQgEgEgHgEIgLgHQgHgEgIgFQgIgEgFgHQgGgHgDgHQgDgJAAgNQAAgOAEgKQAFgLAHgHQAIgHAJgDQAJgEAJAAQAQAAAKAFQALAEAIAKIgPASQgLgOgRAAQgHAAgDACQgFACgFAEQgEAEgCAGQgDAHAAAIQAAAIADAFQACAGAEAEIAJAIIALAGIAPAJQAIADAGAIQAGAFAEALQAEAJAAAMQAAANgEALQgEAJgHAJQgJAIgIADQgLAEgKAAQgPAAgNgGg");
	this.shape_166.setTransform(797.95,651.35);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAnBjIgLguIg4AAIgMAuIgZAAIAxjFIAhAAIAxDFgAgZAhIAyAAIgZhsIAAAAg");
	this.shape_167.setTransform(785.2,651.35);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAiBjIAAhbIhEAAIAABbIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_168.setTransform(770.2,651.35);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AA3BjIAAijIgBAAIgsCjIgWAAIgrijIgBAAIAACjIgXAAIAAjFIAlAAIAqCcIAAAAIAqicIAmAAIAADFg");
	this.shape_169.setTransform(936.325,617.75);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAXIg6AAIAAA+IA2AAIAAATIg2AAIAABHIA9AAIAAAWg");
	this.shape_170.setTransform(920.675,617.75);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgMBjIAAivIglAAIAAgWIBjAAIAAAWIglAAIAACvg");
	this.shape_171.setTransform(909.175,617.75);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgeBhQgNgFgIgLIAPgTQAFAJALAFQAKAFAKgBQALAAAIgIQAIgIAAgQQAAgIgDgGQgCgEgEgGIgKgIIgcgQQgIgGgEgFQgFgEgEgLQgDgIAAgNQAAgOAEgLQAFgLAIgGQAGgHAKgEQAJgDAKAAQAPAAAKAFQALAFAIAJIgPASQgKgOgSAAQgHAAgDACQgFABgFAFQgEADgCAHQgDAGAAAJQAAAGADAHQACAFAEAFIAJAHIALAHQAKAEAFAFQAIADAGAHQAGAIAEAIQAEAKAAAMQAAANgEAKQgEALgIAIQgHAHgJAEQgLAEgJAAQgRAAgNgHg");
	this.shape_172.setTransform(897.95,617.75);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgMBjIAAhPIgxh2IAbAAIAiBdIAjhdIAbAAIgyB2IAABPg");
	this.shape_173.setTransform(885.875,617.75);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgdBhQgOgFgIgLIAPgTQAGAJAKAFQAKAFAJgBQAMAAAIgIQAIgJAAgPQAAgHgCgHIgHgKQgEgEgHgEIgagQQgIgEgFgHQgGgHgDgIQgDgKAAgLQAAgOAEgLQAFgLAHgGQAIgIAJgDQAJgDAKAAQAPAAAKAFQALAFAIAJIgPASQgLgOgSAAQgGAAgDACQgFABgEAFQgFAEgCAGQgDAGAAAJQAAAGADAHQACAGAEAEQAEAEAGADIAKAHIAPAJQAHADAHAHQAHAIADAIQAEAJAAANQAAAMgEALQgFAMgHAHQgHAHgKAEQgKAEgKAAQgPAAgNgHg");
	this.shape_174.setTransform(873.725,617.75);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgSBgQgMgIgKgNQgKgOgFgSQgEgTAAgYQgBgVAFgTQAGgUAIgNQAKgOAMgIQANgHAPgBQARABAMAGQALAFAJAMIgQASQgFgKgJgEQgIgEgJAAQgLAAgIAGQgJAIgFAKQgFAJgDAQQgDARAAANQAAARADAPQADAOAGALQAGAMAIAFQAIAHAMAAQAQgBAHgGIAAg+IgZAAIAAgUIAxAAIAABgQgIAGgLAFQgNAFgQgBQgQABgOgIg");
	this.shape_175.setTransform(850.4,617.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAdBjIg+iZIgBAAIAACZIgXAAIAAjFIAeAAIA9CZIABAAIAAiZIAYAAIAADFg");
	this.shape_176.setTransform(835,617.75);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgbBgQgMgGgKgPQgJgOgEgTQgFgTAAgXQAAgWAFgTQAFgVAIgMQAJgOAMgHQANgIAPAAQAQAAANAIQAMAHAJAOQAJANAEAUQAFATAAAWQAAAXgFATQgEATgJAOQgKAPgLAGQgNAIgQAAQgOAAgNgIgAgRhKQgJAHgEAKQgFALgDAPQgCARAAAOQAAAPACARQADAOAFALQAEAKAJAIQAIAFAJAAQAKAAAIgFQAIgHAFgLQAFgKADgPQACgRAAgPQAAgOgCgRQgDgQgFgKQgFgLgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_177.setTransform(818.875,617.75);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgdBhQgNgFgJgLIAPgTQAFAIALAGQAKAFAJgBQANAAAHgIQAIgJAAgPQAAgHgCgHIgHgKQgEgEgHgEIgLgIQgHgDgIgFQgHgEgGgHQgFgHgDgIQgEgIAAgNQAAgOAFgLQAEgLAHgGQAIgIAJgDQAJgDAJAAQAQAAAKAFQALAEAIAKIgPASQgKgOgTAAQgFAAgEACQgFABgFAFQgEAEgCAGQgCAGgBAJQABAIACAFQADAGADAEIAJAHIALAHIAPAJQAHADAIAHQAFAGAEAKQAEAKAAAMQAAAMgEALQgEALgIAIQgIAIgJADQgKAEgKAAQgPAAgNgHg");
	this.shape_178.setTransform(804.4,617.75);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAXIg6AAIAAA+IA2AAIAAATIg2AAIAABHIA9AAIAAAWg");
	this.shape_179.setTransform(783.425,617.75);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAjBjIAAhcIhFAAIAABcIgZAAIAAjFIAZAAIAABUIBFAAIAAhUIAZAAIAADFg");
	this.shape_180.setTransform(768.775,617.75);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgLBjIAAivIgnAAIAAgWIBlAAIAAAWIgnAAIAACvg");
	this.shape_181.setTransform(755.6,617.75);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgTAkIARhHIAWAAIgUBHg");
	this.shape_182.setTransform(943.875,594.075);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgdBiQgOgHgIgKIAPgTQAGAJAKAFQAKAEAJABQAMgBAIgIQAIgJAAgPQAAgHgCgGIgHgLQgEgEgHgEIgagQQgIgEgFgGQgGgIgDgIQgDgIAAgMQAAgPAEgLQAFgLAHgGQAIgIAJgCQAJgEAKAAQAPAAAKAFQALAEAIAKIgPASQgLgOgSAAQgGAAgDACQgFACgEAEQgFAEgCAGQgDAHAAAIQAAAHADAGQACAGAEADIAJAIIALAHIAPAJQAHADAHAHQAFAFAFAMQAEAIAAAMQAAANgEAMQgFALgHAHQgIAIgJADQgKAEgKAAQgPAAgNgGg");
	this.shape_183.setTransform(934.625,584.15);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgLBjIAAiwIgmAAIAAgVIBkAAIAAAVIgmAAIAACwg");
	this.shape_184.setTransform(923.65,584.15);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgcBhQgLgIgKgOQgJgNgEgUQgFgSAAgYQAAgWAFgUQAEgSAIgOQAKgOAMgIQANgHAPAAQAQAAANAHQAMAIAJAOQAIAOAFASQAFATAAAXQAAAYgFASQgFATgIAOQgJAOgMAIQgNAHgQAAQgPAAgNgHgAgRhKQgIAHgFALQgFAJgDAQQgCAQAAAPQAAAPACARQADAPAFAKQAFALAIAGQAIAHAJAAQAKAAAIgHQAJgHADgKQAGgMADgNQACgNAAgTQAAgSgCgNQgDgNgGgMQgDgKgJgIQgIgGgKAAQgJAAgIAGg");
	this.shape_185.setTransform(911.35,584.15);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAbBjIghhZIgXAAIAABZIgYAAIAAjFIAzAAQAKAAAKADQAJADAIAGQAHAGAEALQAEAJAAAQQAAAMgDAJQgDAKgFAFQgEAGgHADQgFADgGACIAlBdgAgdgIIAYAAQANAAAJgJQAIgKAAgQQAAgKgDgHQgCgGgFgEQgFgEgFgBIgLgCIgXAAg");
	this.shape_186.setTransform(897.075,584.15);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAbBjIgghZIgXAAIAABZIgZAAIAAjFIAzAAQAKAAAKADQAKADAHAGQAIAHADAKQAFAKAAAPQAAAMgDAJQgEAKgFAFQgEAGgGADQgFADgHACIAlBdgAgcgIIAXAAQANAAAJgJQAIgJAAgRQAAgLgCgGQgDgGgFgEQgFgEgFgBQgFgCgGAAIgWAAg");
	this.shape_187.setTransform(883.275,584.15);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AAoBjIgLguIg5AAIgLAuIgaAAIAyjFIAgAAIAxDFgAgYAhIAxAAIgYhrIgBAAg");
	this.shape_188.setTransform(868.85,584.15);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgyBjIAAjFIAyAAQAHAAAKACQAKAEAHAFQAIAHAFALQAEAKAAAQQAAAOgDAMQgGALgGAGQgGAHgKADQgKAFgJAAIgaAAIAABUgAgZgGIAWAAQAMAAAJgJQAJgKgBgRQABgSgJgJQgIgHgNgBIgWAAg");
	this.shape_189.setTransform(857.25,584.15);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AAdBjIg+iYIgBAAIAACYIgXAAIAAjFIAeAAIA9CZIABAAIAAiZIAXAAIAADFg");
	this.shape_190.setTransform(823.175,584.15);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgLBjIAAjFIAYAAIAADFg");
	this.shape_191.setTransform(811.7,584.15);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgLBjIAAiwIgnAAIAAgVIBlAAIAAAVIgnAAIAACwg");
	this.shape_192.setTransform(785.2,584.15);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgbBfQgLgEgHgLQgHgKgDgNQgDgNAAgPIAAiBIAZAAIAAB+QAAAKACAKQABAKAEAGQAEAHAGAFQAIAEAIAAQAKAAAGgEQAHgFAEgHQAEgHACgJQABgKAAgKIAAh+IAZAAIAACBQAAAPgDANQgDANgHAKQgIALgLAEQgLAHgQgBQgQABgLgHg");
	this.shape_193.setTransform(772.35,584.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("Ag1BjIAAjFIAwAAQAIAAAJACQAKADAHAEQAHAGAGAKQAFAJAAAPQAAAJgDAIQgCAHgEAGQgEAFgEAEIgKAFIAAABQAFABAGADQAGACAFAHQAFAGADAJQAEAIAAAMQAAAQgFALQgGAKgHAGQgHAHgLADQgLACgHAAgAgdBOIAYAAQAHAAAGgCQAHgCAEgEQAFgFACgGQADgGAAgKQAAgIgEgJQgDgHgFgFQgGgFgFgBQgGgCgGAAIgXAAgAgdgNIAWAAQAGAAAEgCQAFgBAFgEQAFgFACgFQADgGAAgJQAAgJgDgHQgCgFgFgEQgEgEgGgBQgEgCgHAAIgVAAg");
	this.shape_194.setTransform(758.125,584.15);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AACAiIANhDIAUAAIgOBDgAgiAiIAMhDIAVAAIgPBDg");
	this.shape_195.setTransform(239.075,652.025);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AA3BjIAAijIgBAAIgsCjIgWAAIgrijIgBAAIAACjIgXAAIAAjFIAlAAIAqCcIAAAAIAqicIAmAAIAADFg");
	this.shape_196.setTransform(224.225,658.55);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAWIg5AAIAAA/IA2AAIAAAUIg2AAIAABFIA8AAIAAAXg");
	this.shape_197.setTransform(208.55,658.55);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgLBjIAAiwIgnAAIAAgVIBlAAIAAAVIgnAAIAACwg");
	this.shape_198.setTransform(197.05,658.55);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgdBiQgOgHgIgKIAPgSQAGAIAKAFQAKAFAJAAQAMgBAIgHQAIgKAAgPQAAgHgCgGIgHgLQgEgEgHgEIgagQQgIgEgFgHQgFgGgEgIQgDgLAAgLQAAgOAEgKQAFgLAHgHQAHgGAKgEQALgEAIAAQAPAAAKAFQALAFAIAJIgPASQgLgOgSAAQgGAAgDACQgFACgEAEQgFAEgCAGQgDAHAAAIQAAAHADAGQACAHAEADIAJAIIALAGIAPAJQAHADAHAIQAHAGADAKQAEAIAAANQAAANgEALQgFALgHAHQgHAIgKADQgKAEgKAAQgPAAgNgGg");
	this.shape_199.setTransform(185.825,658.55);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgMBjIAAhPIgxh2IAbAAIAiBdIAkhdIAaAAIgyB2IAABPg");
	this.shape_200.setTransform(173.75,658.55);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgdBiQgOgHgIgKIAPgSQAFAHALAGQAKAFAKAAQALgBAIgHQAIgJAAgQQAAgJgCgEQgDgFgFgGQgEgFgFgDIgMgHQgHgEgIgFQgIgEgFgHQgEgFgFgJQgDgKAAgMQAAgOAFgKQAEgLAIgHQAGgGALgEQAKgEAIAAQAOAAALAFQALAEAIAKIgPASQgLgOgSAAQgFAAgEACQgFACgEAEQgFAEgCAGQgDAFABAKQAAAIABAFIAHAKIAKAIIAKAGQAJAEAHAFQAGADAHAIQAGAFAEALQAEAJAAAMQAAANgFALQgDAJgIAJQgIAIgJADQgKAEgJAAQgQAAgNgGg");
	this.shape_201.setTransform(161.6,658.55);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgSBgQgNgIgJgNQgKgOgFgSQgFgTABgXQgBgWAFgTQAFgUAJgNQAKgOAMgIQAOgHAOgBQARABALAFQANAGAIANIgPARQgGgKgJgEQgIgEgKAAQgKAAgJAGQgIAHgFALQgFAJgDAQQgDARAAAOQAAAQADAPQAEARAFAIQAGANAIAEQAIAHAMAAQAQgBAHgGIAAg+IgaAAIAAgUIAyAAIAABgQgIAGgLAFQgNAFgQgBQgQABgOgIg");
	this.shape_202.setTransform(322,624.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AAdBjIg/iZIAAAAIAACZIgXAAIAAjFIAeAAIA9CZIABAAIAAiZIAYAAIAADFg");
	this.shape_203.setTransform(306.6,624.95);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgbBgQgNgHgJgOQgJgOgEgTQgFgTAAgXQAAgXAFgSQAFgVAIgNQAIgNANgHQANgIAPAAQAQAAAMAIQANAHAJANQAJAOAEAUQAFASAAAXQAAAXgFATQgEATgJAOQgKAPgMAGQgMAIgQAAQgPAAgMgIgAgRhKQgJAHgEALQgFAKgDAPQgCAMAAATQAAATACANQADAOAFALQAEAKAJAIQAIAFAJAAQAKAAAIgFQAIgIAFgKQAFgKADgPQACgRAAgPQAAgOgCgRQgDgQgFgJQgFgLgIgHQgIgGgKAAQgJAAgIAGg");
	this.shape_204.setTransform(290.475,624.95);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgdBhQgNgFgJgLIAPgSQAGAIAKAFQAKAFAKgBQALAAAIgIQAIgIAAgQQAAgIgCgGQgDgFgFgFQgEgEgFgEIgMgIQgHgDgIgFQgIgEgFgHQgEgEgFgLQgDgIAAgNQAAgOAFgLQAEgKAHgHQAHgGALgFQAKgDAIAAQAMAAAOAFQAKAEAIAKIgPASQgLgOgSAAQgFAAgEACQgFABgEAFQgFAEgCAGQgDAFABAKQAAAIABAFIAHAKIAKAHIAKAHIAQAJQAGADAHAHQAFAGAFAKQAEAKAAAMQAAANgFAKQgDAKgIAJQgIAIgJADQgKAEgJAAQgQAAgNgHg");
	this.shape_205.setTransform(276,624.95);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AACAiIAQhDIASAAIgNBDgAgiAiIAPhDIASAAIgNBDg");
	this.shape_206.setTransform(265.35,618.425);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("Ag7BjIAAjFIAuAAQAiAAATAZQAUAaAAAvQAAAwgUAaQgTAZgiAAgAghBNIAUAAQAKAAAIgFQAKgFAGgJQAGgJAEgPQAEgPAAgTQAAgRgEgQQgEgOgGgKQgGgJgKgFQgHgFgLAAIgUAAg");
	this.shape_207.setTransform(248.95,624.95);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAXIg6AAIAAA+IA3AAIAAAUIg3AAIAABGIA9AAIAAAWg");
	this.shape_208.setTransform(235.35,624.95);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgoBjIAAjFIAaAAIAACuIA2AAIAAAXg");
	this.shape_209.setTransform(224.65,624.95);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgoBjIAAjFIAaAAIAACuIA3AAIAAAXg");
	this.shape_210.setTransform(214.2,624.95);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAoBjIgLgvIg5AAIgMAvIgZAAIAyjFIAgAAIAxDFgAgYAhIAxAAIgYhsIgBAAg");
	this.shape_211.setTransform(201.15,624.95);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgRBgQgOgIgJgOQgJgOgEgTQgGgVAAgUQAAgTAGgVQAFgUAIgOQAKgNANgIQAOgIAOAAQAQAAALAGQAOAGAHAMIgPARQgHgKgIgDQgJgEgIgBQgLAAgIAHQgIAFgGAMQgFAKgDAQQgCAMgBASQABATACAMQADAOAFAMQAGAKAJAHQAHAHALgBQALABAIgGQAIgEAFgKIAPARQgIALgMAIQgMAHgQAAQgQAAgMgIg");
	this.shape_212.setTransform(188.3,624.95);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAdBjIg+iZIgBAAIAACZIgXAAIAAjFIAeAAIA9CZIABAAIAAiZIAXAAIAADFg");
	this.shape_213.setTransform(168.625,624.95);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgMBjIAAjFIAZAAIAADFg");
	this.shape_214.setTransform(157.175,624.95);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAnBjIgKgvIg5AAIgMAvIgZAAIAyjFIAhAAIAwDFgAgYAhIAxAAIgYhsIgBAAg");
	this.shape_215.setTransform(146.9,624.95);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAbBjIghhYIgXAAIAABYIgYAAIAAjFIAzAAQAKAAAKADQAJADAIAGQAHAGAEALQAEAKAAAPQAAAMgDAJQgDAJgFAGQgEAGgHADQgFADgGACIAlBdgAgdgIIAYAAQANAAAJgJQAIgKAAgQQAAgLgDgFQgCgHgFgEQgFgEgFgBIgLgCIgXAAg");
	this.shape_216.setTransform(133.925,624.95);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("Ag1BjIAAjFIAwAAQAIAAAJACQAKACAHAFQAHAGAGAKQAFAIAAAQQAAAJgDAIQgCAHgEAFQgEAGgEAEIgKAGIAAAAQAFAAAGAEQAGADAFAGQAFAGADAIQAEAJAAAMQAAARgFAJQgGALgHAGQgHAGgLADQgLADgHAAgAgdBOIAYAAQAHAAAGgCQAGgDAFgEQAFgDACgHQADgHAAgJQAAgIgEgKQgDgGgFgFQgGgFgFgBQgGgCgGAAIgXAAgAgdgNIAWAAQAGAAAEgCQAFgCAFgEQAFgEACgFQADgHAAgJQAAgIgDgGQgCgGgFgEQgFgEgFgBQgEgCgHAAIgVAAg");
	this.shape_217.setTransform(119.875,624.95);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAXIg6AAIAAA+IA2AAIAAAUIg2AAIAABGIA9AAIAAAWg");
	this.shape_218.setTransform(102.475,624.95);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AAjBjIAAhcIhFAAIAABcIgZAAIAAjFIAZAAIAABUIBFAAIAAhUIAZAAIAADFg");
	this.shape_219.setTransform(87.825,624.95);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgLBjIAAivIgnAAIAAgWIBlAAIAAAWIgnAAIAACvg");
	this.shape_220.setTransform(74.65,624.95);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgpBjIAAjFIBTAAIAAAXIg5AAIAABAIA1AAIAAAUIg1AAIAABag");
	this.shape_221.setTransform(324.775,591.35);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgbBhQgMgIgKgOQgJgNgEgUQgFgTAAgXQAAgWAFgUQAFgUAIgMQAJgOAMgIQANgHAPAAQAQAAANAHQAMAIAJAOQAJANAEATQAFAUAAAWQAAAXgFATQgEAUgJANQgKAOgLAIQgNAHgQAAQgPAAgMgHgAgRhKQgJAIgEAKQgFAKgDAPQgCAQAAAPQAAAPACARQADAPAFAKQAEAKAJAHQAIAHAJgBQAKABAIgHQAIgGAFgLQAFgKADgPQACgRAAgPQAAgPgCgQQgDgQgFgJQgFgLgIgHQgIgGgKAAQgJAAgIAGg");
	this.shape_222.setTransform(310.325,591.35);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgLBjIAAiwIgmAAIAAgVIBkAAIAAAVIgmAAIAACwg");
	this.shape_223.setTransform(284.2,591.35);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAbBjIghhZIgXAAIAABZIgYAAIAAjFIAzAAQAKAAAKADQAJADAIAGQAHAGAEALQAEAJAAAQQAAAMgDAJQgDAKgFAFQgEAGgHADQgFADgGACIAlBdgAgdgIIAYAAQANAAAJgJQAIgJAAgRQAAgKgDgHQgCgGgFgEQgFgEgFgBIgLgCIgXAAg");
	this.shape_224.setTransform(273.175,591.35);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAoBjIgLguIg5AAIgMAuIgZAAIAyjFIAgAAIAxDFgAgYAhIAxAAIgYhrIgBAAg");
	this.shape_225.setTransform(258.75,591.35);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgyBjIAAjFIAxAAQAIAAAKACQAJAEAIAFQAIAJAFAJQAEAKAAAQQABAPgFALQgDAJgIAIQgJAIgHACQgKAFgJAAIgaAAIAABUgAgZgGIAWAAQANAAAIgJQAIgJAAgSQAAgSgIgJQgIgHgNgBIgWAAg");
	this.shape_226.setTransform(247.15,591.35);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AAoBjIgMguIg4AAIgLAuIgaAAIAyjFIAgAAIAxDFgAgZAhIAyAAIgYhrIgBAAg");
	this.shape_227.setTransform(219.825,591.35);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgqBjIAAjFIBTAAIAAAXIg7AAIAAA+IA2AAIAAAUIg2AAIAABGIA9AAIAAAWg");
	this.shape_228.setTransform(195.2,591.35);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgQBjIgwjFIAbAAIAlCoIABAAIAmioIAaAAIgxDFg");
	this.shape_229.setTransform(182.025,591.35);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AAoBjIgMguIg4AAIgLAuIgaAAIAyjFIAgAAIAxDFgAgZAhIAyAAIgYhrIgBAAg");
	this.shape_230.setTransform(168.875,591.35);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AAiBjIAAhbIhDAAIAABbIgaAAIAAjFIAaAAIAABUIBDAAIAAhUIAaAAIAADFg");
	this.shape_231.setTransform(153.9,591.35);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgdBiQgNgGgJgLIAPgSQAGAHAKAGQAKAEAKAAQALABAIgJQAIgJAAgPQABgHgDgGIgHgKQgEgFgHgEIgLgHQgHgDgIgGQgIgEgFgGQgFgHgDgJQgEgIAAgMQAAgPAFgLQAEgLAHgGQAHgHALgDQAKgEAHAAQAQAAALAFQAKAEAIAKIgPASQgLgOgSAAQgFAAgEACQgFACgEAEQgFAFgCAFQgDAHABAIQgBAIADAFQADAGAEADIAJAIIAKAHIAQAJQAGADAHAHQAFAGAFALQAEAJAAALQAAANgEAMQgEAKgIAIQgIAIgJADQgKAEgJAAQgQAAgNgGg");
	this.shape_232.setTransform(125.7,591.35);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("Ag7BjIAAjFIAtAAQAjAAATAaQAUAZAAAvQAAAxgUAZQgUAZgiAAgAgiBNIAUAAQALAAAIgFQAJgFAGgJQAIgKADgOQADgNABgVQgBgTgDgOQgDgOgIgKQgGgKgJgEQgIgFgLAAIgUAAg");
	this.shape_233.setTransform(112.45,591.35);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAbBjIgghZIgYAAIAABZIgYAAIAAjFIAzAAQALAAAJADQAKADAHAGQAHAHAFAKQADALAAAOQAAAMgCAJQgDAIgFAHQgFAGgGADQgGADgGACIAlBdgAgdgIIAYAAQAOAAAHgJQAJgJAAgRQAAgKgDgHQgCgGgFgEQgFgFgFAAQgFgCgGAAIgXAAg");
	this.shape_234.setTransform(98.1,591.35);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgMBjIAAjFIAYAAIAADFg");
	this.shape_235.setTransform(87.05,591.35);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("Ag1BjIAAjFIAwAAQAIAAAJACQAKADAHAEQAIAHAFAJQAFAKAAAOQAAAJgDAIQgCAHgEAGQgDAEgFAFIgKAFIAAABQAFABAGADQAGACAFAHQAFAGADAJQAEAIAAAMQAAAPgFAMQgGAKgHAGQgIAHgKADQgLACgHAAgAgdBOIAYAAQAHAAAGgCQAGgCAFgEQAFgFACgGQACgFAAgLQAAgKgDgHQgDgIgFgEQgGgEgFgCQgGgCgGAAIgXAAgAgdgNIAWAAQAGAAAEgCQAFgBAFgEQAEgEADgGQADgGAAgJQAAgJgDgHQgDgGgEgDQgFgEgFgBQgEgCgHAAIgVAAg");
	this.shape_236.setTransform(77.175,591.35);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgdBhQgOgGgIgKIAPgTQAHAJAJAFQAKAFAKgBQALAAAIgIQAJgJAAgPQAAgIgEgGQgCgFgEgFIgKgJIgMgHIgPgIQgHgEgGgHQgGgGgDgJQgDgJAAgMQAAgOAEgLQAFgKAIgHQAHgIAJgDQAKgDAJAAQAOAAALAFQALAEAIAKIgPASQgKgOgSAAIgKACQgFACgFADQgEAEgCAHQgDAGAAAJQAAAHADAGQACAFAEAFIAJAHIALAHIAPAJQAIADAHAIQAFAGAEAJQAEAJAAANQAAANgFAKQgEAMgGAGQgIAIgJAEQgLAEgJAAQgQAAgNgHg");
	this.shape_237.setTransform(977.6,1235.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAdBjIg+iZIgBAAIAACZIgXAAIAAjFIAeAAIA9CZIABAAIAAiZIAXAAIAADFg");
	this.shape_238.setTransform(963.675,1235.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgbBgQgNgHgJgOQgIgOgFgTQgFgTAAgXQAAgWAFgUQAEgTAJgOQAIgNANgHQANgIAPAAQAQAAAMAIQANAHAJANQAIAOAGATQAEAUAAAWQAAAXgEATQgGATgIAOQgJAOgNAHQgMAIgQAAQgPAAgMgIgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAARACAOQADAPAFALQAFALAIAHQAIAFAJAAQALAAAHgFQAHgHAGgLQAFgLADgPQACgOAAgRQAAgQgCgPQgDgPgFgLQgGgLgHgGQgHgHgLAAQgJAAgIAHg");
	this.shape_239.setTransform(947.55,1235.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgLBjIAAjFIAXAAIAADFg");
	this.shape_240.setTransform(936.05,1235.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgMBjIAAivIglAAIAAgWIBkAAIAAAWIgmAAIAACvg");
	this.shape_241.setTransform(927.6,1235.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgSBgQgNgIgJgOQgJgOgEgTQgGgSAAgXQAAgWAGgSQAFgUAIgOQAKgNANgIQANgIAPAAQAPAAAMAGQANAGAIAMIgPARQgGgJgJgFQgIgEgJAAQgLAAgIAGQgIAHgGALQgFALgDAOQgCAQgBAPQABAQACAPQADAPAFALQAGALAJAGQAHAHALgBQALABAIgGQAIgFAFgJIAPAQQgIANgMAGQgLAIgRAAQgQAAgNgIg");
	this.shape_242.setTransform(916.4,1235.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AAoBjIgMgvIg4AAIgLAvIgaAAIAyjFIAgAAIAxDFgAAZAgIgYhrIgBAAIgZBrIAyAAg");
	this.shape_243.setTransform(902.5,1235.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAbBjIghhYIgWAAIAABYIgZAAIAAjFIA0AAQAJAAAKADQAJADAIAGQAHAGAEALQAFALAAAOQAAAMgEAJQgCAJgGAGQgEAGgHADQgFADgGACIAlBdgAgcgIIAWAAQAOAAAJgJQAJgKAAgQQAAgKgDgHQgEgGgDgEQgFgEgGgCIgLgBIgWAAg");
	this.shape_244.setTransform(884.75,1235.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgMBjIAAjFIAYAAIAADFg");
	this.shape_245.setTransform(873.75,1235.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgqBjIAAjFIBTAAIAAAWIg7AAIAAA/IA3AAIAAATIg3AAIAABGIA9AAIAAAXg");
	this.shape_246.setTransform(864.9,1235.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AAiBjIAAhcIhEAAIAABcIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_247.setTransform(850.275,1235.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgMBjIAAivIgmAAIAAgWIBkAAIAAAWIgmAAIAACvg");
	this.shape_248.setTransform(837.1,1235.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("Ag7BjIAAjFIAuAAQAiAAATAZQAUAaAAAvQAAAxgUAZQgTAZgiAAgAgiBNIAVAAQAKAAAIgFQAJgEAHgKQAGgJAEgPQAEgPAAgTQAAgSgEgPQgEgPgGgJQgHgJgJgGQgIgEgKAAIgVAAg");
	this.shape_249.setTransform(820.175,1235.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAdBjIg+iZIgBAAIAACZIgXAAIAAjFIAeAAIA9CZIABAAIAAiZIAXAAIAADFg");
	this.shape_250.setTransform(804.025,1235.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAoBjIgLgvIg5AAIgLAvIgaAAIAyjFIAgAAIAxDFgAAZAgIgYhrIgBAAIgYBrIAxAAg");
	this.shape_251.setTransform(789.2,1235.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgMBjIAAhPIgxh2IAbAAIAiBdIAjhdIAbAAIgyB2IAABPg");
	this.shape_252.setTransform(772.175,1235.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAnBjIgKgvIg5AAIgLAvIgaAAIAyjFIAhAAIAwDFgAAZAgIgYhrIgBAAIgZBrIAyAAg");
	this.shape_253.setTransform(759.9,1235.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgdBhQgOgGgIgKIAPgTQAHAJAJAFQAKAFAKgBQALAAAIgIQAJgJAAgPQAAgIgEgGQgCgFgEgFIgKgJIgMgHIgPgIQgHgEgGgHQgGgGgDgJQgDgJAAgMQAAgOAEgLQAFgKAIgHQAHgIAJgDQAKgDAJAAQAOAAALAFQALAEAIAKIgPASQgKgOgSAAIgKACQgFACgFADQgEAEgCAHQgDAGAAAJQAAAHADAGQACAFAEAFIAJAHIALAHIAPAJQAIADAGAIQAGAGAEAJQAEAJAAANQAAANgEAKQgFAMgGAGQgIAIgJAEQgLAEgJAAQgQAAgNgHg");
	this.shape_254.setTransform(746.75,1235.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAWIg6AAIAAA/IA3AAIAAATIg3AAIAABGIA9AAIAAAXg");
	this.shape_255.setTransform(730.1,1235.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgnBjIAAjFIAZAAIAACuIA3AAIAAAXg");
	this.shape_256.setTransform(719.45,1235.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgzBjIAAjFIAzAAQAHAAAKADQAKACAHAHQAIAGAEALQAFAKABARQAAAOgFAKQgEAMgHAGQgHAHgJAEQgKADgJAAIgaAAIAABVgAgZgGIAWAAQANAAAIgJQAIgJAAgSQAAgSgIgIQgIgJgNABIgWAAg");
	this.shape_257.setTransform(707.25,1235.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgbBgQgNgHgJgOQgJgOgEgTQgFgTAAgXQAAgWAEgUQAFgTAJgOQAIgNANgHQANgIAPAAQAQAAAMAIQANAHAJANQAJAOAEATQAFAUAAAWQAAAXgFATQgEATgJAOQgJAOgNAHQgMAIgQAAQgPAAgMgIgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAARACAOQADAPAFALQAFALAIAHQAIAFAJAAQAKAAAIgFQAHgHAGgLQAFgLADgPQACgOABgRQgBgQgCgPQgDgPgFgLQgGgLgHgGQgIgHgKAAQgJAAgIAHg");
	this.shape_258.setTransform(691.8,1235.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgqBjIAAjFIBTAAIAAAWIg7AAIAAA/IA2AAIAAATIg2AAIAABGIA9AAIAAAXg");
	this.shape_259.setTransform(678.3,1235.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgzBjIAAjFIAzAAQAIAAAJADQAKACAHAHQAIAGAEALQAFAKABARQAAAOgFAKQgEAMgHAGQgHAHgKAEQgJADgJAAIgaAAIAABVgAgZgGIAWAAQANAAAIgJQAIgJAAgSQAAgSgIgIQgIgJgNABIgWAAg");
	this.shape_260.setTransform(665.85,1235.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgMBjIAAivIglAAIAAgWIBjAAIAAAWIglAAIAACvg");
	this.shape_261.setTransform(648.9,1235.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AAoBjIgLgvIg5AAIgLAvIgaAAIAyjFIAgAAIAxDFgAAZAgIgYhrIgBAAIgYBrIAxAAg");
	this.shape_262.setTransform(637.55,1235.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAiBjIAAhcIhEAAIAABcIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_263.setTransform(622.625,1235.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAeBjIgeifIAAAAIgdCfIggAAIgmjFIAZAAIAeCkIABAAIAeikIAcAAIAgCkIAAAAIAdikIAZAAIgnDFg");
	this.shape_264.setTransform(604.1,1235.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AAcBjIg8hjIAAAAIAABjIgZAAIAAjFIAZAAIAABYIAAAAIA4hYIAeAAIg/BcIBDBpg");
	this.shape_265.setTransform(583.075,1235.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgSBgQgNgIgJgOQgJgOgEgTQgFgSgBgXQABgWAFgSQAEgUAJgOQAKgNANgIQANgIAPAAQAPAAAMAGQANAGAJAMIgQARQgHgJgIgFQgIgEgJAAQgMAAgHAGQgIAHgFALQgGALgDAOQgDAQAAAPQAAAQADAPQADAPAGALQAFALAIAGQAIAHALgBQALABAIgGQAIgFAFgJIAPAQQgIANgMAGQgMAIgQAAQgQAAgNgIg");
	this.shape_266.setTransform(568.75,1235.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgMBjIAAjFIAYAAIAADFg");
	this.shape_267.setTransform(558.1,1235.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AA3BjIAAijIgBAAIgsCjIgWAAIgrijIgBAAIAACjIgXAAIAAjFIAlAAIAqCcIAAAAIAqicIAmAAIAADFg");
	this.shape_268.setTransform(544.475,1235.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgMBjIAAjFIAYAAIAADFg");
	this.shape_269.setTransform(530.85,1235.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AA3BjIAAijIgBAAIgsCjIgWAAIgrijIgBAAIAACjIgXAAIAAjFIAlAAIAqCcIAAAAIAqicIAmAAIAADFg");
	this.shape_270.setTransform(517.225,1235.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgMBjIAAhPIgxh2IAbAAIAiBdIAjhdIAbAAIgyB2IAABPg");
	this.shape_271.setTransform(496.275,1235.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAWIg6AAIAAA/IA3AAIAAATIg3AAIAABGIA9AAIAAAXg");
	this.shape_272.setTransform(484.75,1235.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AAiBjIAAhcIhEAAIAABcIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_273.setTransform(470.125,1235.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgMBjIAAivIgmAAIAAgWIBkAAIAAAWIgmAAIAACvg");
	this.shape_274.setTransform(456.95,1235.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgKAMQgFgFAAgHQAAgGAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_275.setTransform(323.775,1167.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgKAMQgFgFAAgHQAAgGAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_276.setTransform(317.425,1167.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgKAMQgFgFAAgHQAAgGAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_277.setTransform(311.075,1167.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgSBgQgNgHgJgOQgKgNgFgTQgFgTAAgYQAAgVAFgTQAFgTAJgOQAJgOANgHQANgIAPAAQAQAAANAGQAMAFAIANIgQARQgGgJgIgFQgIgEgKAAQgKAAgIAGQgIAHgGALQgGALgCAOQgDAPAAAPQAAARADAPQADAPAGALQAFAKAJAHQAIAGAMAAQAPAAAIgHIAAg9IgaAAIAAgVIAzAAIAABfQgJAIgMAEQgLAEgRAAQgQAAgOgHg");
	this.shape_278.setTransform(300.125,1159.325);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAdBjIg+iYIgBAAIAACYIgXAAIAAjFIAeAAIA9CZIABAAIAAiZIAXAAIAADFg");
	this.shape_279.setTransform(284.775,1159.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgMBjIAAjFIAYAAIAADFg");
	this.shape_280.setTransform(273.35,1159.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgMBjIAAhPIgxh2IAbAAIAiBdIAjhdIAbAAIgyB2IAABPg");
	this.shape_281.setTransform(263.825,1159.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAoBjIgLguIg5AAIgLAuIgaAAIAyjFIAgAAIAxDFgAAZAgIgYhrIgBAAIgYBrIAxAAg");
	this.shape_282.setTransform(251.55,1159.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgdBiQgOgHgIgKIAPgSQAGAIAKAFQAJAFAKAAQAMAAAIgJQAJgIgBgQQAAgIgDgGQgBgGgGgEIgKgJIgLgGIgPgJQgHgEgGgHQgFgGgDgJQgEgIAAgNQAAgOAFgKQAEgLAHgHQAIgHAJgEQAKgDAJAAQAOAAALAFQALAFAIAJIgPASQgKgOgTAAIgJACQgFABgFAFQgDAEgDAGQgCAGgBAJQABAHACAGQACAFAEAFIAJAIIALAGIAPAJQAIADAHAIQAFAGAEAJQAEAKAAAMQAAANgEAKQgFALgHAIQgHAHgJAEQgKAEgLAAQgOAAgOgGg");
	this.shape_283.setTransform(238.4,1159.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgqBjIAAjFIBTAAIAAAWIg7AAIAAA+IA2AAIAAAUIg2AAIAABGIA9AAIAAAXg");
	this.shape_284.setTransform(221.75,1159.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AAbBjIghhYIgWAAIAABYIgZAAIAAjFIA0AAQAJAAAKADQAKADAHAGQAHAHAFAKQADAKAAAPQAAAMgDAJQgCAIgGAHQgFAHgGACQgFADgGACIAlBdgAgcgIIAWAAQAOAAAJgJQAIgKABgQQAAgKgEgHQgDgGgDgEQgFgEgGgCIgLgBIgWAAg");
	this.shape_285.setTransform(209.1,1159.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AAnBjIgKguIg5AAIgLAuIgaAAIAyjFIAhAAIAwDFgAAZAgIgYhrIgBAAIgZBrIAyAAg");
	this.shape_286.setTransform(194.7,1159.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgMBjIAAhPIgxh2IAbAAIAiBdIAjhdIAbAAIgyB2IAABPg");
	this.shape_287.setTransform(177.675,1159.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAWIg6AAIAAA+IA3AAIAAAUIg3AAIAABGIA9AAIAAAXg");
	this.shape_288.setTransform(166.15,1159.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAiBjIAAhbIhEAAIAABbIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_289.setTransform(151.525,1159.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgMBjIAAiwIgmAAIAAgVIBkAAIAAAVIgmAAIAACwg");
	this.shape_290.setTransform(138.35,1159.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgMBjIAAiwIgmAAIAAgVIBkAAIAAAVIgmAAIAACwg");
	this.shape_291.setTransform(124.4,1159.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AAnBjIgKguIg5AAIgLAuIgaAAIAyjFIAhAAIAwDFgAAZAgIgYhrIgBAAIgYBrIAxAAg");
	this.shape_292.setTransform(113.05,1159.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AAiBjIAAhbIhEAAIAABbIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_293.setTransform(98.125,1159.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAeBjIgeifIAAAAIgdCfIghAAIgljFIAaAAIAdCkIABAAIAeikIAdAAIAeCkIABAAIAdikIAYAAIgmDFg");
	this.shape_294.setTransform(79.6,1159.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AAeBjIgeifIAAAAIgdCfIghAAIgmjFIAaAAIAdCkIABAAIAfikIAcAAIAgCkIAAAAIAdikIAZAAIgnDFg");
	this.shape_295.setTransform(341,1115.55);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgcBgQgMgHgJgOQgIgOgFgTQgFgTAAgXQAAgWAEgUQAFgTAJgOQAJgNAMgHQANgIAPAAQAQAAAMAIQANAHAJANQAJAOAEATQAFAUAAAWQAAAXgFATQgEATgJAOQgJAOgNAHQgMAIgQAAQgPAAgNgIgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAARACAOQADAPAFALQAFALAIAHQAIAFAJAAQALAAAHgFQAHgHAGgLQAFgLADgPQACgOABgRQgBgQgCgPQgDgPgFgLQgGgLgHgGQgHgHgLAAQgJAAgIAHg");
	this.shape_296.setTransform(322.45,1115.55);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAdBjIg+iZIgBAAIAACZIgXAAIAAjFIAeAAIA9CZIABAAIAAiZIAXAAIAADFg");
	this.shape_297.setTransform(306.375,1115.55);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAcBjIg8hjIAAAAIAABjIgZAAIAAjFIAZAAIAABYIAAAAIA4hYIAeAAIg/BcIBDBpg");
	this.shape_298.setTransform(292.375,1115.55);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgMBjIAAivIgmAAIAAgWIBkAAIAAAWIgmAAIAACvg");
	this.shape_299.setTransform(274.8,1115.55);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAdBjIg+iZIgBAAIAACZIgXAAIAAjFIAeAAIA9CZIABAAIAAiZIAXAAIAADFg");
	this.shape_300.setTransform(261.775,1115.55);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgbBgQgNgHgJgOQgIgOgFgTQgFgTAAgXQAAgWAFgUQAEgTAJgOQAJgNAMgHQANgIAPAAQAQAAAMAIQANAHAJANQAJAOAFATQAEAUAAAWQAAAXgEATQgFATgJAOQgJAOgNAHQgMAIgQAAQgPAAgMgIgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAARACAOQADAPAFALQAFALAIAHQAIAFAJAAQALAAAHgFQAHgHAGgLQAFgLADgPQADgOAAgRQAAgQgDgPQgDgPgFgLQgGgLgHgGQgHgHgLAAQgJAAgIAHg");
	this.shape_301.setTransform(245.65,1115.55);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("Ag7BjIAAjFIAuAAQAiAAATAZQAUAaAAAvQAAAxgUAZQgTAZgiAAgAgiBNIAVAAQAKAAAIgFQAJgEAHgKQAGgJAEgPQAEgPAAgTQAAgSgEgPQgEgPgGgJQgHgJgJgGQgIgEgKAAIgVAAg");
	this.shape_302.setTransform(230.275,1115.55);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgMBjIAAhPIgxh2IAbAAIAiBdIAjhdIAbAAIgyB2IAABPg");
	this.shape_303.setTransform(211.375,1115.55);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgqBjIAAjFIBTAAIAAAWIg7AAIAAA/IA2AAIAAATIg2AAIAABGIA9AAIAAAXg");
	this.shape_304.setTransform(199.85,1115.55);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AAiBjIAAhcIhEAAIAABcIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_305.setTransform(185.225,1115.55);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgMBjIAAivIglAAIAAgWIBkAAIAAAWIgmAAIAACvg");
	this.shape_306.setTransform(172.05,1115.55);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgKAMQgFgEAAgIQAAgGAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAGQAAAIgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_307.setTransform(160.125,1123.95);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgKAMQgFgEAAgIQAAgGAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAGQAAAIgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_308.setTransform(153.775,1123.95);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgKAMQgFgEAAgIQAAgGAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAGQAAAIgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_309.setTransform(147.425,1123.95);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgbBgQgNgHgJgOQgIgOgFgTQgFgTAAgXQAAgWAFgUQAEgTAJgOQAIgNANgHQANgIAPAAQAQAAANAIQAMAHAJANQAIAOAGATQAEAUAAAWQAAAXgEATQgGATgIAOQgJAOgMAHQgNAIgQAAQgPAAgMgIgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAARACAOQADAPAFALQAFALAIAHQAIAFAJAAQALAAAHgFQAHgHAGgLQAFgLADgPQACgOAAgRQAAgQgCgPQgDgPgFgLQgGgLgHgGQgHgHgLAAQgJAAgIAHg");
	this.shape_310.setTransform(137.45,1115.55);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAdBjIg+iZIgBAAIAACZIgXAAIAAjFIAeAAIA9CZIABAAIAAiZIAXAAIAADFg");
	this.shape_311.setTransform(121.375,1115.55);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgMBjIAAivIglAAIAAgWIBkAAIAAAWIgmAAIAACvg");
	this.shape_312.setTransform(103.75,1115.55);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgbBgQgLgGgHgKQgHgKgDgOQgDgMAAgQIAAiAIAZAAIAAB+IACATQABAKAEAHQAEAHAGAEQAHAFAJAAQAKAAAHgFQAGgEAEgHQAEgHABgKIACgTIAAh+IAZAAIAACAQAAAQgDAMQgDAOgIAKQgGAKgMAGQgLAFgQAAQgQAAgLgFg");
	this.shape_313.setTransform(90.95,1115.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("Ag1BjIAAjFIAwAAQAHAAAJACQAKACAIAFQAHAGAGAJQAFAKAAAPQAAAKgDAHQgCAHgEAFQgDAGgFADQgFAEgGADIAAAAQAGABAGADQAGADAFAGQAFAGADAIQAEAJAAAMQAAAQgFAKQgGAKgHAHQgIAGgKADQgJADgJAAgAgdBOIAYAAQAGAAAHgCQAGgCAEgFQAFgDADgHQACgHAAgJQAAgKgDgIQgDgGgFgFQgFgFgGgCIgMgBIgXAAgAgdgNIAWAAQAFAAAFgCQAFgCAFgEQAEgEADgFQADgGAAgKQAAgIgDgGQgDgHgEgDQgFgEgFgBIgLgCIgVAAg");
	this.shape_314.setTransform(76.725,1115.55);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AggBiQgOgHgJgJIATgZQAGAIAJAEQAKAFAJAAQAJAAAHgIQAIgHAAgNQAAgNgJgHQgIgIgMgGIgPgJQgIgEgFgGQgFgHgDgJQgEgJAAgMQAAgPAFgLQAFgLAIgIQAIgHAKgDQAKgEAJAAQAQAAALAFQAMAFAJAJIgTAYQgLgNgQAAIgJACQgEABgEAEQgDADgCAFQgCAGAAAHQAAAMAHAHQAHAHAMAGIAOAJQAIAEAGAGQAGAHAEAJQAEAJABANQgBAPgEALQgFALgHAIQgIAIgKADQgLAEgLAAQgQAAgOgGg");
	this.shape_315.setTransform(973.8,958.625);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgQBjIAAipIglAAIAAgcIBrAAIAAAcIgmAAIAACpg");
	this.shape_316.setTransform(962.425,958.65);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgSBhQgOgIgKgOQgJgOgFgTQgFgTAAgXQAAgWAFgTQAFgTAKgOQAJgOAOgHQANgIAQAAQARAAANAGQANAHAIALIgUAYQgLgRgSAAQgKAAgHAGQgHAGgFAKQgFAJgDAOQgCANAAAOQAAAPACANQADAOAFAJQAFAKAHAGQAHAGAKAAQALAAAGgFQAIgFAEgIIAUAXQgIAMgMAHQgMAHgTAAQgPAAgOgHg");
	this.shape_317.setTransform(950.6,958.625);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAdIg3AAIAAA1IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_318.setTransform(937.625,958.65);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgrBjIAAjFIAiAAIAACmIA1AAIAAAfg");
	this.shape_319.setTransform(926.475,958.65);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_320.setTransform(912.975,958.65);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape_321.setTransform(902.225,958.65);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("Ag/BjIAAjFIAyAAQAlAAAUAaQAUAaAAAuQAAAvgUAaQgUAaglAAgAgdBGIAQAAQAKgBAHgEQAIgEAGgJQAGgJADgMQADgNAAgSQAAgRgDgMQgDgNgGgKQgGgIgIgEQgHgFgKAAIgQAAg");
	this.shape_322.setTransform(891.025,958.65);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgTBgQgOgHgJgOQgKgNgFgTQgFgTAAgYQAAgVAFgTQAFgTAJgOQAKgOANgIQAOgIAPAAQASAAANAHQANAGAIAMIgTAXQgLgQgTAAQgLAAgHAGQgHAGgFAJQgFAKgDAOQgCANAAANQAAAQACANQADANAFAKQAFAKAHAFQAHAGALAAQAGAAAGgBQAFgCAEgDIAAgzIgYAAIAAgcIA2AAIAABkQgJAHgMAEQgNAFgRAAQgRAAgOgIg");
	this.shape_323.setTransform(869.325,958.575);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAZBjIg4iLIAAAAIAACLIgeAAIAAjFIAnAAIA2CMIABAAIAAiMIAdAAIAADFg");
	this.shape_324.setTransform(853.65,958.65);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape_325.setTransform(841.775,958.65);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AAZBjIg4iLIAAAAIAACLIgeAAIAAjFIAmAAIA3CMIABAAIAAiMIAdAAIAADFg");
	this.shape_326.setTransform(829.9,958.65);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAIAEAKQAEAKAAAPQAAAMgDAJQgDAIgEAGQgFAHgFACQgGAFgFAAIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_327.setTransform(815.225,958.65);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_328.setTransform(800.275,958.65);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAdIg3AAIAAA1IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_329.setTransform(787.575,958.65);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgrBjIAAjFIAiAAIAACmIA1AAIAAAfg");
	this.shape_330.setTransform(776.425,958.65);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgrBjIAAjFIBYAAIAAAeIg3AAIAAA3IAyAAIAAAbIgxAAIAABVg");
	this.shape_331.setTransform(759.35,958.65);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgdBhQgNgIgJgOQgJgNgFgTQgFgUAAgXQAAgXAFgTQAEgTAJgNQAKgOANgIQANgHAQAAQARAAANAHQANAIAJAOQAKANAFATQAEATAAAXQAAAXgEAUQgFATgKANQgJAOgNAIQgNAHgRAAQgQAAgNgHgAgPhCQgHAGgFAJQgEAKgCANQgDAOAAAOQAAAPADANQACAOAEAJQAFAKAHAGQAHAFAIAAQAJAAAHgFQAHgGAFgKQAEgJADgOQACgNAAgPQAAgOgDgOQgCgNgFgKQgEgJgHgGQgHgFgJAAQgIAAgHAFg");
	this.shape_332.setTransform(744.675,958.625);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAdIg3AAIAAA1IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_333.setTransform(725.325,958.65);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgrBjIAAjFIAiAAIAACmIA1AAIAAAfg");
	this.shape_334.setTransform(714.175,958.65);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("Ag4BjIAAjFIA0AAQAIAAAKACQAKACAIAFQAIAGAFAKQAGAJAAAQQAAASgIALQgIAKgKAFIAAAAQAFABAGADQAGAEAEAFQAFAHADAIQADAIAAAMQAAAPgFALQgFALgIAGQgIAHgKADQgKACgJAAgAgYBHIAVAAQAFAAAFgCQAFgCAEgEQAFgDACgGQACgGAAgHQAAgJgDgGQgCgGgFgEQgEgDgGgCQgFgCgEAAIgUAAgAgYgPIASAAIAJgCQAFgBAEgDQAEgEACgFQADgGAAgHQAAgHgDgGQgCgFgEgDQgEgEgFgBIgJgBIgSAAg");
	this.shape_335.setTransform(700.975,958.65);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_336.setTransform(686.175,958.65);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("Ag2BjIAAjFIA2AAQAJAAAKACQAKADAIAHQAIAHAFALQAFALAAASQAAAOgEAMQgFALgHAHQgIAHgKAEQgJAEgLgBIgWAAIAABQgAgVgHIATAAQALAAAHgIQAIgJAAgPQAAgQgIgIQgHgGgLgBIgTAAg");
	this.shape_337.setTransform(673.975,958.65);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_338.setTransform(659.375,958.65);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgTBhQgNgIgJgOQgKgOgFgTQgFgTAAgXQAAgWAFgTQAFgTAKgOQAKgOANgHQAOgIAPAAQARAAANAGQANAHAIALIgUAYQgLgRgSAAQgKAAgGAGQgIAGgFAKQgFAJgDAOQgDANAAAOQAAAPADANQADAOAFAJQAFAKAIAGQAGAGALAAQAKAAAHgFQAGgFAFgIIATAXQgHAMgMAHQgNAHgSAAQgQAAgOgHg");
	this.shape_339.setTransform(646.1,958.625);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AAZBjIg3iLIgBAAIABCLIgfAAIAAjFIAmAAIA4CMIAAAAIAAiMIAdAAIAADFg");
	this.shape_340.setTransform(625.1,958.65);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAdIg3AAIAAA1IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_341.setTransform(611.275,958.65);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgVBjIgwjFIAlAAIAgCeIABAAIAiieIAjAAIgxDFg");
	this.shape_342.setTransform(597.65,958.65);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAdIg3AAIAAA1IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_343.setTransform(584.925,958.65);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAdIg3AAIAAA1IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_344.setTransform(567.275,958.65);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAIAEAKQAEAKAAAPQAAAMgDAJQgDAIgEAGQgFAHgFACQgGAFgFAAIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_345.setTransform(554.225,958.65);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_346.setTransform(539.275,958.65);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AggBiQgOgHgIgJIASgZQAGAIAKAEQAIAFAKAAQAJAAAIgIQAGgHABgNQAAgNgJgHQgIgIgMgGIgPgJQgIgEgFgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgLAIgIQAIgHAKgDQAKgEAJAAQAPAAAMAFQANAFAHAJIgSAYQgLgNgRAAIgJACQgDABgEAEQgEADgBAFQgDAGAAAHQAAAMAIAHQAHAHALAGIAPAJQAIAEAHAGQAFAHAFAJQADAJAAANQAAAPgEALQgFALgIAIQgHAIgLADQgKAEgKAAQgRAAgOgGg");
	this.shape_347.setTransform(520.8,958.625);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgQBjIAAipIglAAIAAgcIBrAAIAAAcIgmAAIAACpg");
	this.shape_348.setTransform(509.425,958.65);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgdBhQgNgIgJgOQgJgNgFgTQgFgUAAgXQAAgXAFgTQAEgTAJgNQAKgOANgIQANgHAQAAQARAAANAHQANAIAJAOQAKANAFATQAEATAAAXQAAAXgEAUQgFATgKANQgJAOgNAIQgNAHgRAAQgQAAgNgHgAgPhCQgHAGgFAJQgEAKgCANQgDAOAAAOQAAAPADANQACAOAEAJQAFAKAHAGQAHAFAIAAQAJAAAHgFQAHgGAFgKQAEgJADgOQACgNAAgPQAAgOgDgOQgCgNgFgKQgEgJgHgGQgHgFgJAAQgIAAgHAFg");
	this.shape_349.setTransform(496.675,958.625);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAIAEAKQAEAKAAAPQAAAMgDAJQgDAIgEAGQgFAHgFACQgGAFgFAAIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_350.setTransform(481.925,958.65);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAIAEAKQAEAKAAAPQAAAMgDAJQgDAIgEAGQgFAHgFACQgGAFgFAAIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_351.setTransform(467.575,958.65);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_352.setTransform(452.625,958.65);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("Ag2BjIAAjFIA2AAQAJAAAKACQAKADAIAHQAIAHAFALQAFALAAASQAAAOgEAMQgFALgHAHQgIAHgKAEQgJAEgLgBIgWAAIAABQgAgVgHIATAAQALAAAHgIQAIgJAAgPQAAgQgIgIQgHgGgLgBIgTAAg");
	this.shape_353.setTransform(440.425,958.65);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AA0BjIAAiYIgBAAIgnCYIgZAAIgoiYIgBAAIABCYIgeAAIAAjFIAtAAIAmCQIAAAAIAliQIAwAAIAADFg");
	this.shape_354.setTransform(422.8,489.85);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_355.setTransform(406.725,489.85);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AAeBjIAAhYIg7AAIAABYIghAAIAAjFIAhAAIAABQIA7AAIAAhQIAhAAIAADFg");
	this.shape_356.setTransform(391.85,489.85);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgQBjIAAipIglAAIAAgcIBrAAIAAAcIgmAAIAACpg");
	this.shape_357.setTransform(378.275,489.85);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgTBgQgOgHgJgOQgKgNgFgTQgFgTAAgYQAAgVAFgTQAFgTAJgOQAKgOANgIQAOgIAPAAQASAAANAHQANAGAIAMIgTAXQgLgQgTAAQgLAAgHAGQgHAGgFAJQgFAKgDAOQgCANAAANQAAAQACANQADANAFAKQAFAKAHAFQAHAGALAAQAGAAAGgBQAFgCAEgDIAAgzIgYAAIAAgcIA2AAIAABkQgJAHgMAEQgNAFgRAAQgRAAgOgIg");
	this.shape_358.setTransform(360.325,489.775);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AAZBjIg4iLIAAAAIAACLIgeAAIAAjFIAmAAIA4CMIAAAAIAAiMIAdAAIAADFg");
	this.shape_359.setTransform(344.65,489.85);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape_360.setTransform(332.775,489.85);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgQBjIAAipIglAAIAAgcIBrAAIAAAcIgmAAIAACpg");
	this.shape_361.setTransform(323.825,489.85);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_362.setTransform(311.925,489.85);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgQBjIAAipIglAAIAAgcIBrAAIAAAcIgmAAIAACpg");
	this.shape_363.setTransform(300.075,489.85);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape_364.setTransform(291.075,489.85);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AA0BjIAAiYIgBAAIgnCYIgZAAIgoiYIgBAAIABCYIgeAAIAAjFIAtAAIAmCQIAAAAIAliQIAwAAIAADFg");
	this.shape_365.setTransform(277,489.85);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_366.setTransform(260.925,489.85);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AAZBjIg4iLIAAAAIAACLIgeAAIAAjFIAmAAIA4CMIAAAAIAAiMIAdAAIAADFg");
	this.shape_367.setTransform(240.7,489.85);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_368.setTransform(226.875,489.85);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AAeBjIAAhYIg6AAIAABYIgiAAIAAjFIAiAAIAABQIA6AAIAAhQIAhAAIAADFg");
	this.shape_369.setTransform(212,489.85);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgQBjIAAipIglAAIAAgcIBrAAIAAAcIgmAAIAACpg");
	this.shape_370.setTransform(198.425,489.85);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("Ag/BjIAAjFIAyAAQAlAAAUAaQAUAaAAAuQAAAvgUAaQgUAaglAAgAgdBFIAQAAQAKAAAHgEQAIgEAGgJQAGgIADgNQADgNAAgSQAAgRgDgMQgDgNgGgKQgGgIgIgFQgHgEgKAAIgQAAg");
	this.shape_371.setTransform(180.825,489.85);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AAZBjIg4iLIAAAAIAACLIgeAAIAAjFIAnAAIA2CMIABAAIAAiMIAdAAIAADFg");
	this.shape_372.setTransform(164.25,489.85);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_373.setTransform(148.975,489.85);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgTBgQgOgHgJgOQgKgNgFgTQgFgTAAgYQAAgVAFgTQAFgTAJgOQAKgOANgIQAOgIAPAAQASAAANAHQANAGAIAMIgTAXQgLgQgTAAQgLAAgHAGQgHAGgFAJQgFAKgDAOQgCANAAANQAAAQACANQADANAFAKQAFAKAHAFQAHAGALAAQAGAAAGgBQAFgCAEgDIAAgzIgYAAIAAgcIA2AAIAABkQgJAHgMAEQgNAFgRAAQgRAAgOgIg");
	this.shape_374.setTransform(129.075,489.775);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AAZBjIg4iLIAAAAIAACLIgeAAIAAjFIAnAAIA2CMIABAAIAAiMIAdAAIAADFg");
	this.shape_375.setTransform(113.4,489.85);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape_376.setTransform(101.525,489.85);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAHAEALQAEAKAAAQQAAALgDAJQgDAIgEAGQgFAHgFADQgGADgFABIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_377.setTransform(91.375,489.85);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_378.setTransform(76.425,489.85);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_379.setTransform(63.725,489.85);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AAeBjIAAhYIg7AAIAABYIghAAIAAjFIAhAAIAABQIA7AAIAAhQIAhAAIAADFg");
	this.shape_380.setTransform(48.85,489.85);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgQBjIAAhMIgxh5IAkAAIAdBYIAAgBIAfhXIAjAAIgyB5IAABMg");
	this.shape_381.setTransform(904.225,460.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("Ag4BjIAAjFIA0AAQAIAAAKACQAKACAIAFQAIAGAFAJQAGAKAAAQQAAASgIALQgIAKgKAFIAAAAQAFACAGACQAGAEAEAFQAFAHADAIQADAIAAALQAAAQgFAKQgFAMgIAGQgIAHgKACQgKADgJAAgAgYBHIAVAAQAFAAAFgCQAFgBAEgFQAFgDACgGQACgGAAgHQAAgJgDgGQgCgGgFgEQgEgDgGgCQgFgCgEAAIgUAAgAgYgPIASAAIAJgCQAFgBAEgDQAEgEACgFQADgGAAgHQAAgIgDgFQgCgFgEgDQgEgEgFgBIgJgBIgSAAg");
	this.shape_382.setTransform(890.975,460.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AggBiQgOgHgJgJIATgZQAGAIAKAEQAIAFAKAAQAJAAAIgIQAGgHABgNQAAgNgJgHQgIgIgMgGIgPgJQgIgEgFgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgLAIgIQAIgHAKgDQAKgEAJAAQAPAAAMAFQANAFAHAJIgSAYQgLgNgRAAIgJACQgDABgEAEQgEADgBAFQgDAGAAAHQAAAMAIAHQAHAHALAGIAPAJQAIAEAHAGQAFAHAFAJQADAJAAANQAAAPgEALQgFALgIAIQgHAIgLADQgKAEgKAAQgRAAgOgGg");
	this.shape_383.setTransform(871.35,460.575);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("Ag/BjIAAjFIAyAAQAlAAAUAaQAUAaAAAuQAAAvgUAaQgUAaglAAgAgdBFIAQAAQAKAAAHgEQAIgEAGgJQAGgIADgNQADgNAAgSQAAgRgDgMQgDgNgGgKQgGgIgIgFQgHgEgKAAIgQAAg");
	this.shape_384.setTransform(857.725,460.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AAZBjIg4iLIAAAAIAACLIgeAAIAAjFIAmAAIA3CMIABAAIAAiMIAdAAIAADFg");
	this.shape_385.setTransform(841.15,460.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgcBgQgMgGgHgKQgIgLgDgOQgDgNAAgQIAAh+IAhAAIAAB7IACASQABAIADAHQADAGAGAEQAGAEAHAAQAJAAAGgEQAFgEADgGQAEgHABgIIABgSIAAh7IAhAAIAAB+QAAAQgDANQgDAOgIALQgHAKgMAGQgMAFgRAAQgQAAgMgFg");
	this.shape_386.setTransform(825.025,460.85);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgdBhQgNgIgJgOQgJgNgFgTQgFgUAAgXQAAgXAFgTQAEgTAJgNQAKgOANgIQANgHAQAAQARAAANAHQANAIAJAOQAKANAFATQAEATAAAXQAAAXgEAUQgFATgKANQgJAOgNAIQgNAHgRAAQgQAAgNgHgAgPhCQgHAGgFAJQgEAKgCANQgDAOAAAOQAAAPADANQACAOAEAJQAFAKAHAGQAHAFAIAAQAJAAAHgFQAHgGAFgKQAEgJADgOQACgNAAgPQAAgOgDgOQgCgNgFgKQgEgJgHgGQgHgFgJAAQgIAAgHAFg");
	this.shape_387.setTransform(808.875,460.575);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AggBiQgOgHgJgJIATgZQAGAIAJAEQAKAFAJAAQAJAAAHgIQAHgHABgNQAAgNgJgHQgIgIgMgGIgPgJQgIgEgFgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgLAIgIQAIgHAKgDQAKgEAJAAQAPAAAMAFQAMAFAJAJIgTAYQgLgNgRAAIgJACQgDABgEAEQgDADgCAFQgCAGAAAHQgBAMAIAHQAHAHAMAGIAOAJQAIAEAHAGQAFAHAFAJQADAJAAANQAAAPgEALQgFALgHAIQgIAIgKADQgLAEgLAAQgQAAgOgGg");
	this.shape_388.setTransform(794.15,460.575);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgQBjIAAipIglAAIAAgcIBrAAIAAAcIgmAAIAACpg");
	this.shape_389.setTransform(777.975,460.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_390.setTransform(766.075,460.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_391.setTransform(753.375,460.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("Ag2BjIAAjFIA2AAQAJAAAKADQAKADAIAGQAIAHAFALQAFALAAASQAAAOgEAMQgFALgHAHQgIAHgKAEQgJADgLAAIgWAAIAABQgAgVgHIATAAQALAAAHgIQAIgJAAgPQAAgQgIgIQgHgGgLgBIgTAAg");
	this.shape_392.setTransform(740.475,460.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_393.setTransform(727.325,460.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAHAEALQAEAKAAAQQAAALgDAJQgDAIgEAGQgFAHgFADQgGADgFABIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_394.setTransform(714.275,460.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgQBjIAAhMIgxh5IAkAAIAdBYIAAgBIAfhXIAjAAIgyB5IAABMg");
	this.shape_395.setTransform(695.175,460.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_396.setTransform(683.075,460.6);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AAeBjIAAhYIg6AAIAABYIgiAAIAAjFIAiAAIAABQIA6AAIAAhQIAhAAIAADFg");
	this.shape_397.setTransform(668.2,460.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgQBjIAAipIglAAIAAgcIBrAAIAAAcIgmAAIAACpg");
	this.shape_398.setTransform(654.625,460.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgTBgQgOgHgJgOQgKgNgFgTQgFgTAAgYQAAgVAFgTQAFgTAJgOQAKgOANgIQAOgIAPAAQASAAANAHQANAGAIAMIgTAXQgLgQgTAAQgLAAgHAGQgHAGgFAJQgFAKgDAOQgCANAAANQAAAQACANQADANAFAKQAFAKAHAFQAHAGALAAQAGAAAGgBQAFgCAEgDIAAgzIgYAAIAAgcIA2AAIAABkQgJAHgMAEQgNAFgRAAQgRAAgOgIg");
	this.shape_399.setTransform(636.675,460.525);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AAZBjIg4iLIAAAAIAACLIgeAAIAAjFIAnAAIA2CMIABAAIAAiMIAdAAIAADFg");
	this.shape_400.setTransform(621,460.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape_401.setTransform(609.125,460.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AAZBjIg4iLIAAAAIAACLIgeAAIAAjFIAmAAIA3CMIABAAIAAiMIAdAAIAADFg");
	this.shape_402.setTransform(597.25,460.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_403.setTransform(581.975,460.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_404.setTransform(569.275,460.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AA0BjIAAiYIAAAAIgpCYIgYAAIgoiYIgBAAIABCYIgeAAIAAjFIAtAAIAmCQIAAAAIAliQIAwAAIAADFg");
	this.shape_405.setTransform(552.3,460.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgWAlIAQhJIAdAAIgVBJg");
	this.shape_406.setTransform(533.575,470.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AggBiQgOgHgJgJIATgZQAGAIAKAEQAIAFAKAAQAJAAAIgIQAGgHABgNQAAgNgJgHQgIgIgMgGIgPgJQgIgEgFgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgLAIgIQAIgHAKgDQAKgEAJAAQAPAAAMAFQANAFAHAJIgSAYQgLgNgRAAIgJACQgDABgEAEQgDADgCAFQgCAGgBAHQAAAMAIAHQAHAHALAGIAPAJQAIAEAHAGQAFAHAFAJQADAJAAANQAAAPgEALQgFALgIAIQgHAIgLADQgKAEgKAAQgRAAgOgGg");
	this.shape_407.setTransform(523.95,460.575);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAHAEALQAEAKAAAQQAAALgDAJQgDAIgEAGQgFAHgFADQgGADgFABIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_408.setTransform(511.375,460.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_409.setTransform(497.875,460.6);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AAZBjIg3iLIgBAAIABCLIgfAAIAAjFIAnAAIA3CMIAAAAIAAiMIAdAAIAADFg");
	this.shape_410.setTransform(483.1,460.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAHAEALQAEAKAAAQQAAALgDAJQgDAIgEAGQgFAHgFADQgGADgFABIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_411.setTransform(468.425,460.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_412.setTransform(453.475,460.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_413.setTransform(440.775,460.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgrBjIAAjFIAiAAIAACmIA1AAIAAAfg");
	this.shape_414.setTransform(429.625,460.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgrBjIAAjFIAiAAIAACmIA1AAIAAAfg");
	this.shape_415.setTransform(413.825,460.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_416.setTransform(400.325,460.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgSBhQgOgIgKgOQgIgOgGgTQgFgTAAgXQAAgWAFgTQAGgTAJgOQAKgOANgHQAOgIAPAAQARAAANAGQANAHAIALIgTAYQgMgRgSAAQgKAAgGAGQgIAGgFAKQgFAJgDAOQgCANgBAOQABAPACANQADAOAFAJQAFAKAIAGQAGAGALAAQAJAAAHgFQAHgFAGgIIATAXQgIAMgMAHQgNAHgSAAQgPAAgOgHg");
	this.shape_417.setTransform(387.05,460.575);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgdBhQgNgIgJgOQgJgNgFgTQgFgUAAgXQAAgXAFgTQAEgTAJgNQAKgOANgIQANgHAQAAQARAAANAHQANAIAJAOQAKANAFATQAEATAAAXQAAAXgEAUQgFATgKANQgJAOgNAIQgNAHgRAAQgQAAgNgHgAgPhCQgHAGgFAJQgEAKgCANQgDAOAAAOQAAAPADANQACAOAEAJQAFAKAHAGQAHAFAIAAQAJAAAHgFQAHgGAFgKQAEgJADgOQACgNAAgPQAAgOgDgOQgCgNgFgKQgEgJgHgGQgHgFgJAAQgIAAgHAFg");
	this.shape_418.setTransform(371.475,460.575);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgVBjIgwjFIAlAAIAhCeIAAAAIAiieIAjAAIgxDFg");
	this.shape_419.setTransform(356.15,460.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_420.setTransform(338.475,460.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAHAEALQAEAKAAAQQAAALgDAJQgDAIgEAGQgFAHgFADQgGADgFABIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_421.setTransform(325.425,460.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_422.setTransform(310.475,460.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AggBiQgOgHgIgJIASgZQAGAIAKAEQAIAFAKAAQAJAAAIgIQAGgHAAgNQABgNgJgHQgIgIgMgGIgQgJQgGgEgGgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgLAIgIQAIgHAKgDQAKgEAKAAQAOAAANAFQAMAFAHAJIgSAYQgLgNgRAAIgJACQgDABgEAEQgDADgDAFQgCAGAAAHQAAAMAIAHQAHAHALAGIAQAJQAHAEAGAGQAGAHAFAJQADAJAAANQABAPgGALQgEALgIAIQgHAIgLADQgKAEgKAAQgRAAgOgGg");
	this.shape_423.setTransform(292,460.575);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgQBjIAAipIglAAIAAgcIBrAAIAAAcIgmAAIAACpg");
	this.shape_424.setTransform(280.625,460.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgdBhQgNgIgJgOQgJgNgFgTQgFgUAAgXQAAgXAFgTQAEgTAJgNQAKgOANgIQANgHAQAAQARAAANAHQANAIAJAOQAKANAFATQAEATAAAXQAAAXgEAUQgFATgKANQgJAOgNAIQgNAHgRAAQgQAAgNgHgAgPhCQgHAGgFAJQgEAKgCANQgDAOAAAOQAAAPADANQACAOAEAJQAFAKAHAGQAHAFAIAAQAJAAAHgFQAHgGAFgKQAEgJADgOQACgNAAgPQAAgOgDgOQgCgNgFgKQgEgJgHgGQgHgFgJAAQgIAAgHAFg");
	this.shape_425.setTransform(267.875,460.575);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAHAEALQAEAKAAAQQAAALgDAJQgDAIgEAGQgFAHgFADQgGADgFABIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_426.setTransform(253.125,460.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAHAEALQAEAKAAAQQAAALgDAJQgDAIgEAGQgFAHgFADQgGADgFABIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_427.setTransform(238.775,460.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_428.setTransform(223.825,460.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("Ag2BjIAAjFIA2AAQAJAAAKADQAKADAIAGQAIAHAFALQAFALAAASQAAAOgEAMQgFALgHAHQgIAHgKAEQgJADgLAAIgWAAIAABQgAgVgHIATAAQALAAAHgIQAIgJAAgPQAAgQgIgIQgHgGgLgBIgTAAg");
	this.shape_429.setTransform(211.625,460.6);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgWAlIAQhJIAdAAIgVBJg");
	this.shape_430.setTransform(195.825,470.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AggBiQgOgHgJgJIATgZQAGAIAKAEQAJAFAJAAQAJAAAHgIQAIgHAAgNQAAgNgJgHQgIgIgMgGIgPgJQgIgEgFgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgLAIgIQAIgHAKgDQAKgEAJAAQAPAAAMAFQAMAFAJAJIgTAYQgLgNgRAAIgJACQgDABgEAEQgDADgCAFQgCAGAAAHQgBAMAIAHQAHAHAMAGIAOAJQAIAEAHAGQAFAHAFAJQADAJAAANQAAAPgEALQgFALgHAIQgIAIgKADQgLAEgLAAQgQAAgOgGg");
	this.shape_431.setTransform(186.2,460.575);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape_432.setTransform(176.425,460.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgQBjIAAhMIgxh5IAkAAIAdBYIAAgBIAfhXIAjAAIgyB5IAABMg");
	this.shape_433.setTransform(161.525,460.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgQBjIAAipIglAAIAAgcIBrAAIAAAcIgmAAIAACpg");
	this.shape_434.setTransform(149.775,460.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape_435.setTransform(140.775,460.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgrBjIAAjFIAiAAIAACmIA1AAIAAAfg");
	this.shape_436.setTransform(132.525,460.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AAjBjIgJgqIgzAAIgLAqIghAAIAxjFIAqAAIAwDFgAAVAfIgVhhIAAAAIgVBhIAqAAg");
	this.shape_437.setTransform(119.025,460.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_438.setTransform(106.325,460.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AAYBjIgehUIgTAAIAABUIghAAIAAjFIA5AAQALAAALADQAKADAHAHQAIAHAEALQAEAKAAAQQAAALgDAJQgDAIgEAGQgFAHgFADQgGADgFABIAkBcgAgZgJIATAAQALAAAIgIQAIgIAAgPQAAgJgCgGQgDgGgEgDQgEgEgFgBIgJgBIgTAAg");
	this.shape_439.setTransform(93.275,460.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgtBjIAAjFIBYAAIAAAeIg3AAIAAA0IAzAAIAAAaIgzAAIAAA7IA6AAIAAAeg");
	this.shape_440.setTransform(74.325,460.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AAeBjIAAhYIg6AAIAABYIgiAAIAAjFIAiAAIAABQIA6AAIAAhQIAhAAIAADFg");
	this.shape_441.setTransform(59.45,460.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgQBjIAAipIglAAIAAgcIBrAAIAAAcIgmAAIAACpg");
	this.shape_442.setTransform(45.875,460.6);

	this.text = new cjs.Text("", "6px 'Avenir-Light'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(728.75,404.3);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgKAMQgFgEAAgIQAAgGAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAGQAAAIgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_443.setTransform(981.575,408.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgKAMQgFgEAAgIQAAgGAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAGQAAAIgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_444.setTransform(975.225,408.8);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgKAMQgFgEAAgIQAAgGAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAGQAAAIgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_445.setTransform(968.875,408.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgdBhQgOgGgIgKIAPgTQAGAJAKAFQAJAFAKgBQAMAAAIgIQAJgJgBgPQAAgIgDgGQgBgFgGgFIgKgJIgLgHIgPgIQgHgEgGgHQgFgGgDgJQgEgJAAgMQAAgOAFgLQAEgKAHgHQAIgIAJgDQAKgDAJAAQAOAAALAFQALAFAIAJIgPASQgKgOgTAAIgJACQgFACgFADQgDAFgDAGQgCAGgBAJQABAHACAFQACAGAEAFIAJAHIALAHIAPAJQAIAEAHAGQAFAHAEAJQAEAJAAANQAAANgEAKQgFAMgHAGQgHAIgJAEQgKAEgLAAQgOAAgOgHg");
	this.shape_446.setTransform(959.3,400.4);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgcBgQgMgHgJgOQgIgOgFgTQgFgTAAgXQAAgWAEgUQAFgTAJgNQAJgOAMgHQANgIAPAAQAQAAAMAIQANAHAJAOQAJANAEATQAFAUAAAWQAAAXgFATQgEATgJAOQgJAOgNAHQgMAIgQAAQgPAAgNgIgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAARACAOQADAPAFALQAFALAIAHQAIAFAJAAQALAAAHgFQAHgHAGgLQAFgLADgPQACgOABgRQgBgQgCgPQgDgPgFgLQgGgLgHgGQgHgHgLAAQgJAAgIAHg");
	this.shape_447.setTransform(945.25,400.4);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AAbBjIghhYIgWAAIAABYIgZAAIAAjFIA0AAQAJAAAKADQAKADAHAGQAHAHAEAKQAEALABAOQgBAMgDAJQgCAIgGAHQgEAGgHADQgFADgGACIAlBdgAgcgIIAWAAQAOAAAJgJQAIgJABgSQAAgJgEgHQgDgGgDgEQgFgEgGgBIgLgCIgWAAg");
	this.shape_448.setTransform(931,400.4);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgyBjIAAjFIAxAAQAJAAAJADQAJACAIAHQAHAGAGALQAEAKAAARQAAAOgEAKQgEAMgHAGQgIAHgIAEQgKADgKAAIgaAAIAABVgAgagGIAXAAQAMAAAJgJQAIgJAAgSQAAgSgIgIQgJgJgMABIgXAAg");
	this.shape_449.setTransform(917.45,400.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAWIg6AAIAAA/IA3AAIAAATIg3AAIAABHIA9AAIAAAWg");
	this.shape_450.setTransform(899.4,400.4);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AAiBjIAAhcIhEAAIAABcIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_451.setTransform(884.775,400.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgMBjIAAivIgmAAIAAgWIBlAAIAAAWIgnAAIAACvg");
	this.shape_452.setTransform(871.6,400.4);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAWIg6AAIAAA/IA3AAIAAATIg3AAIAABHIA9AAIAAAWg");
	this.shape_453.setTransform(856.55,400.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AAbBjIghhYIgWAAIAABYIgZAAIAAjFIA0AAQAJAAAKADQAJADAIAGQAHAHAEAKQAFALAAAOQAAAMgEAJQgDAIgEAHQgGAGgGADQgFADgGACIAlBdgAgcgIIAWAAQAOAAAIgJQAKgJAAgSQAAgJgDgHQgEgGgDgEQgFgEgGgBIgLgCIgWAAg");
	this.shape_454.setTransform(843.9,400.4);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AAoBjIgMgvIg4AAIgLAvIgaAAIAyjFIAgAAIAxDFgAAZAgIgYhqIgBAAIgZBqIAyAAg");
	this.shape_455.setTransform(829.5,400.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgdBhQgOgGgIgKIAPgTQAHAJAJAFQAKAFAKgBQALAAAIgIQAJgJAAgPQAAgIgEgGQgCgFgEgFIgKgJIgMgHIgPgIQgHgEgGgHQgGgGgDgJQgDgJAAgMQAAgOAEgLQAFgKAIgHQAHgIAJgDQAKgDAJAAQAOAAALAFQALAFAIAJIgPASQgKgOgSAAIgKACQgFACgFADQgEAFgCAGQgDAGAAAJQAAAHADAFQACAGAEAFIAJAHIALAHIAPAJQAIAEAGAGQAGAHAEAJQAEAJAAANQAAANgFAKQgEAMgGAGQgIAIgJAEQgLAEgJAAQgQAAgNgHg");
	this.shape_456.setTransform(811.55,400.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("Ag7BjIAAjFIAuAAQAiAAATAZQAUAaAAAvQAAAwgUAaQgTAZgiAAgAgiBNIAVAAQAKAAAIgFQAJgEAHgKQAGgJAEgPQAEgPAAgTQAAgTgEgOQgEgPgGgJQgHgJgJgGQgIgEgKAAIgVAAg");
	this.shape_457.setTransform(798.325,400.4);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AAbBjIgghYIgYAAIAABYIgYAAIAAjFIAzAAQAKAAAKADQAJADAIAGQAHAHAFAKQADALAAAOQAAAMgCAJQgEAIgEAHQgFAGgGADQgHADgFACIAlBdgAgdgIIAYAAQANAAAIgJQAJgJAAgSQAAgJgDgHQgCgGgFgEQgEgEgGgBIgLgCIgXAAg");
	this.shape_458.setTransform(784,400.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgMBjIAAjFIAZAAIAADFg");
	this.shape_459.setTransform(773,400.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("Ag1BjIAAjFIAwAAQAHAAAJACQAKACAIAFQAHAGAGAJQAFAKAAAPQAAAKgDAHQgCAHgEAFQgDAGgFADQgFAEgGADIAAAAQAGABAGADQAGADAFAGQAFAGADAJQAEAIAAAMQAAAQgFAKQgGAKgHAHQgIAGgKADQgJADgJAAgAgdBOIAYAAQAGAAAHgCQAGgCAEgFQAFgDADgHQACgHAAgJQAAgKgDgIQgDgGgFgFQgFgFgGgCIgMgBIgXAAgAgdgNIAWAAQAFAAAFgCQAFgCAFgDQAEgFADgFQADgHAAgJQAAgIgDgGQgDgGgEgFQgFgDgFgBIgLgCIgVAAg");
	this.shape_460.setTransform(763.125,400.4);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AgMBjIAAivIgmAAIAAgWIBkAAIAAAWIgmAAIAACvg");
	this.shape_461.setTransform(745.95,400.4);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgbBgQgLgGgHgKQgHgKgDgOQgDgNAAgPIAAiAIAaAAIAAB+IABATQACAKADAHQAEAHAHAEQAGAFAJAAQAKAAAGgFQAHgEAEgHQADgHACgKIABgTIAAh+IAaAAIAACAQAAAPgDANQgEAOgGAKQgHAKgLAGQgMAFgQAAQgQAAgLgFg");
	this.shape_462.setTransform(733.15,400.65);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("Ag1BjIAAjFIAwAAQAHAAAJACQAKACAIAFQAHAGAGAJQAFAKAAAPQAAAKgDAHQgCAHgEAFQgDAGgFADQgFAEgGADIAAAAQAGABAGADQAGADAFAGQAFAGADAJQAEAIAAAMQAAAQgFAKQgGAKgHAHQgIAGgKADQgJADgJAAgAgdBOIAYAAQAGAAAHgCQAGgCAEgFQAFgDADgHQACgHAAgJQAAgKgDgIQgDgGgFgFQgFgFgGgCIgMgBIgXAAgAgdgNIAWAAQAFAAAFgCQAFgCAFgDQAEgFADgFQADgHAAgJQAAgIgDgGQgDgGgEgFQgFgDgFgBIgLgCIgVAAg");
	this.shape_463.setTransform(718.925,400.4);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgTAkIAQhHIAXAAIgUBHg");
	this.shape_464.setTransform(703.45,410.3);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgdBhQgOgGgIgKIAPgTQAHAJAJAFQAKAFAKgBQALAAAIgIQAJgJAAgPQAAgIgDgGQgDgFgEgFIgKgJIgMgHIgPgIQgHgEgGgHQgGgGgDgJQgDgJAAgMQAAgOAEgLQAFgKAIgHQAHgIAKgDQAJgDAJAAQAOAAAMAFQAKAFAIAJIgPASQgKgOgSAAIgKACQgFACgEADQgFAFgCAGQgCAGAAAJQAAAHACAFQACAGAEAFIAKAHIAKAHIAQAJQAHAEAGAGQAGAHAEAJQAEAJAAANQAAANgFAKQgEAMgGAGQgIAIgKAEQgKAEgJAAQgPAAgOgHg");
	this.shape_465.setTransform(694.2,400.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("Ag7BjIAAjFIAuAAQAiAAATAZQAUAaAAAvQAAAwgUAaQgTAZgiAAgAgiBNIAVAAQAKAAAIgFQAJgEAHgKQAGgJAEgPQAEgPAAgTQAAgTgEgOQgEgPgGgJQgHgJgJgGQgIgEgKAAIgVAAg");
	this.shape_466.setTransform(680.975,400.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AAbBjIgghYIgYAAIAABYIgYAAIAAjFIAzAAQAKAAAKADQAKADAHAGQAHAHAFAKQADALAAAOQAAAMgDAJQgDAIgFAHQgFAGgFADQgGADgGACIAlBdgAgdgIIAYAAQANAAAJgJQAIgJABgSQgBgJgDgHQgCgGgFgEQgEgEgGgBIgLgCIgXAAg");
	this.shape_467.setTransform(666.65,400.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgMBjIAAjFIAZAAIAADFg");
	this.shape_468.setTransform(655.65,400.4);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("Ag1BjIAAjFIAwAAQAHAAAJACQAKACAIAFQAHAGAGAJQAFAKAAAPQAAAKgDAHQgCAHgEAFQgDAGgFADQgFAEgGADIAAAAQAGABAGADQAGADAFAGQAFAGADAJQAEAIAAAMQAAAQgFAKQgGAKgHAHQgIAGgKADQgJADgJAAgAgdBOIAYAAQAGAAAHgCQAGgCAEgFQAFgDADgHQACgHAAgJQAAgKgDgIQgDgGgFgFQgFgFgGgCIgMgBIgXAAgAgdgNIAWAAQAFAAAFgCQAFgCAFgDQAEgFADgFQADgHAAgJQAAgIgDgGQgDgGgEgFQgFgDgFgBIgLgCIgVAAg");
	this.shape_469.setTransform(645.775,400.4);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("Ag7BjIAAjFIAuAAQAiAAATAZQAUAaAAAvQAAAwgUAaQgTAZgiAAgAgiBNIAVAAQAKAAAIgFQAJgEAHgKQAGgJAEgPQAEgPAAgTQAAgTgEgOQgEgPgGgJQgHgJgJgGQgIgEgKAAIgVAAg");
	this.shape_470.setTransform(625.625,400.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AAdBjIg+iZIgBAAIAACZIgXAAIAAjFIAeAAIA9CYIABAAIAAiYIAXAAIAADFg");
	this.shape_471.setTransform(609.475,400.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AAnBjIgKgvIg5AAIgLAvIgaAAIAyjFIAhAAIAwDFgAAZAgIgYhqIgBAAIgYBqIAxAAg");
	this.shape_472.setTransform(594.65,400.4);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AgdBhQgOgGgIgKIAPgTQAHAJAJAFQAJAFAKgBQAMAAAIgIQAJgJgBgPQAAgIgDgGQgBgFgGgFIgKgJIgLgHIgPgIQgHgEgGgHQgFgGgDgJQgEgJAAgMQAAgOAFgLQAEgKAHgHQAIgIAJgDQAKgDAJAAQAOAAALAFQAMAFAHAJIgPASQgKgOgTAAIgJACQgFACgFADQgDAFgDAGQgCAGgBAJQABAHACAFQACAGAEAFIAKAHIAKAHIAPAJQAIAEAHAGQAGAHADAJQAEAJAAANQAAANgEAKQgFAMgHAGQgHAIgKAEQgJAEgLAAQgPAAgNgHg");
	this.shape_473.setTransform(576.7,400.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AAdBjIg+iZIgBAAIAACZIgXAAIAAjFIAeAAIA9CYIABAAIAAiYIAXAAIAADFg");
	this.shape_474.setTransform(562.775,400.4);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AAnBjIgLgvIg4AAIgLAvIgaAAIAyjFIAhAAIAwDFgAAZAgIgYhqIgBAAIgZBqIAyAAg");
	this.shape_475.setTransform(547.95,400.4);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AA3BjIAAijIgBAAIgsCjIgWAAIgrijIgBAAIAACjIgXAAIAAjFIAlAAIAqCcIAAAAIAqicIAmAAIAADFg");
	this.shape_476.setTransform(530.975,400.4);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgbBgQgLgGgHgKQgHgKgDgOQgDgNAAgPIAAiAIAaAAIAAB+IABATQACAKADAHQAEAHAHAEQAGAFAJAAQAKAAAGgFQAHgEAEgHQADgHACgKIABgTIAAh+IAaAAIAACAQAAAPgDANQgEAOgGAKQgHAKgLAGQgMAFgQAAQgQAAgLgFg");
	this.shape_477.setTransform(513,400.65);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AAiBjIAAhcIhEAAIAABcIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_478.setTransform(497.075,400.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#B7E2ED").s().p("EhKcAFoIAArPMCU5AAAIAALPg");
	this.shape_479.setTransform(512.5,475.975);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#DBF3D1").s().p("EhKeASIMAAAgkPMCU9AAAMAAAAkPg");
	this.shape_480.setTransform(514.7,865);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#E3BFF3").s().p("EhKfARbMAAAgi1MCU+AAAMAAAAi1g");
	this.shape_481.setTransform(512.75,623.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgLBiQgEgFAAgHQAAgIAEgEQAFgGAGABQAGgBAFAGQAEAEAAAIQAAAHgEAFQgFAEgGABQgGgBgFgEgAgMAnIAAgNQAAgMAEgKQAEgJAIgJIAGgHIAKgNQADgHAAgJQAAgOgGgJQgGgHgLAAQgFAAgEADQgFACgDAEQgEAEgCAFIgCALIgVgEQACgKAEgJQAEgIAGgHQAGgFAIgEQAJgEAJAAQAUAAANANQAMANAAAYQAAAJgCAGIgFANIgHALIgKAJIgHAIIgEAIIgCAIIgBAJIAAAKg");
	this.shape_482.setTransform(720.475,108.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgSBgQgNgHgJgOQgKgNgFgTQgFgTAAgYQAAgVAFgTQAFgTAJgOQAJgOANgHQANgIAPAAQAQAAANAGQAMAFAIANIgQARQgGgJgIgFQgIgEgKAAQgKAAgIAGQgIAHgGALQgGALgCAOQgDAPAAAPQAAARADAPQADAPAGALQAFAKAJAHQAIAGAMAAQAPAAAIgHIAAg9IgaAAIAAgVIAzAAIAABfQgJAIgMAEQgLAEgRAAQgQAAgOgHg");
	this.shape_483.setTransform(707.375,108.875);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AAdBjIg+iYIgBAAIAACYIgXAAIAAjFIAeAAIA9CYIABAAIAAiYIAXAAIAADFg");
	this.shape_484.setTransform(692.025,108.95);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgMBjIAAjFIAYAAIAADFg");
	this.shape_485.setTransform(680.6,108.95);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgMBjIAAhQIgxh1IAbAAIAiBdIAjhdIAbAAIgyB1IAABQg");
	this.shape_486.setTransform(671.075,108.95);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AAoBjIgLguIg5AAIgLAuIgaAAIAyjFIAgAAIAxDFgAAZAhIgYhrIgBAAIgYBrIAxAAg");
	this.shape_487.setTransform(658.8,108.95);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgdBiQgOgHgIgKIAPgTQAGAJAKAFQAJAEAKABQAMgBAIgIQAJgIgBgRQAAgHgDgFQgBgGgGgFIgKgIIgLgIIgPgIQgHgEgGgGQgFgHgDgJQgEgIAAgMQAAgPAFgLQAEgKAHgHQAIgIAJgCQAKgEAJAAQAOAAALAFQALAEAIAKIgPASQgKgOgTAAIgJABQgFADgFAEQgDADgDAHQgCAGgBAJQABAIACAEQACAGAEAEIAJAIIALAHIAPAJQAIAEAHAGQAFAHAEAJQAEAJAAAMQAAAOgEALQgFAKgHAIQgHAHgJAEQgKAEgLAAQgOAAgOgGg");
	this.shape_488.setTransform(645.65,108.95);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgMBjIAAhQIgxh1IAbAAIAiBdIAjhdIAbAAIgyB1IAABQg");
	this.shape_489.setTransform(628.975,108.95);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgqBjIAAjFIBTAAIAAAWIg7AAIAAA+IA2AAIAAAVIg2AAIAABGIA9AAIAAAWg");
	this.shape_490.setTransform(617.45,108.95);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AAiBjIAAhbIhEAAIAABbIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_491.setTransform(602.825,108.95);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgMBjIAAiwIglAAIAAgVIBkAAIAAAVIgmAAIAACwg");
	this.shape_492.setTransform(589.65,108.95);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAWIg6AAIAAA+IA3AAIAAAVIg3AAIAABGIA9AAIAAAWg");
	this.shape_493.setTransform(574.6,108.95);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AAbBjIgghZIgYAAIAABZIgYAAIAAjFIAzAAQAKAAAKADQAKACAHAHQAHAGAFALQADAKAAAPQAAAMgCAJQgEAJgEAGQgGAGgFADQgHADgFACIAlBdgAgdgIIAYAAQANAAAIgJQAJgKAAgRQAAgKgCgGQgEgGgEgEQgEgEgGgBIgLgCIgXAAg");
	this.shape_494.setTransform(561.95,108.95);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AAoBjIgLguIg5AAIgLAuIgaAAIAyjFIAgAAIAxDFgAAZAhIgYhrIgBAAIgYBrIAxAAg");
	this.shape_495.setTransform(547.55,108.95);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgMBjIAAiwIgmAAIAAgVIBkAAIAAAVIgmAAIAACwg");
	this.shape_496.setTransform(531.65,108.95);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AAoBjIgLguIg5AAIgLAuIgaAAIAyjFIAhAAIAwDFgAAZAhIgYhrIgBAAIgYBrIAxAAg");
	this.shape_497.setTransform(520.3,108.95);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AAiBjIAAhbIhEAAIAABbIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_498.setTransform(505.375,108.95);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AAeBjIgeigIAAAAIgdCgIggAAIgmjFIAaAAIAdCkIAAAAIAfikIAdAAIAeCkIABAAIAdikIAYAAIgmDFg");
	this.shape_499.setTransform(486.85,108.95);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AAeBjIgeigIAAAAIgdCgIggAAIgmjFIAZAAIAeCkIABAAIAeikIAcAAIAgCkIAAAAIAdikIAZAAIgnDFg");
	this.shape_500.setTransform(461.45,108.95);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgcBhQgMgJgJgNQgJgNgEgUQgFgTAAgXQAAgXAFgTQAEgTAJgNQAIgOANgIQANgHAPAAQAQAAANAHQAMAIAJAOQAIANAGATQAEATAAAXQAAAXgEATQgGAUgIANQgJANgMAJQgNAHgQAAQgPAAgNgHgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAAQACAPQADAPAFALQAFALAIAGQAIAHAJAAQALAAAHgHQAIgGAFgLQAFgLADgPQADgPgBgQQABgQgDgPQgDgPgFgLQgFgLgIgGQgHgGgLgBQgJABgIAGg");
	this.shape_501.setTransform(442.9,108.95);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AAdBjIg+iYIgBAAIAACYIgXAAIAAjFIAeAAIA9CYIABAAIAAiYIAXAAIAADFg");
	this.shape_502.setTransform(426.825,108.95);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AAcBjIg8hjIAAAAIAABjIgZAAIAAjFIAZAAIAABYIAAAAIA4hYIAeAAIg/BbIBDBqg");
	this.shape_503.setTransform(412.825,108.95);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgMBjIAAhQIgxh1IAbAAIAiBdIAjhdIAbAAIgyB1IAABQg");
	this.shape_504.setTransform(394.125,108.95);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgqBjIAAjFIBSAAIAAAWIg6AAIAAA+IA3AAIAAAVIg3AAIAABGIA9AAIAAAWg");
	this.shape_505.setTransform(382.6,108.95);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AAiBjIAAhbIhEAAIAABbIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_506.setTransform(367.975,108.95);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AgMBjIAAiwIgmAAIAAgVIBkAAIAAAVIgmAAIAACwg");
	this.shape_507.setTransform(354.8,108.95);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgcBhQgMgJgJgNQgJgNgEgUQgFgTAAgXQAAgXAEgTQAFgTAJgNQAJgOAMgIQANgHAPAAQAQAAANAHQAMAIAJAOQAIANAGATQAEATAAAXQAAAXgEATQgGAUgIANQgJANgMAJQgNAHgQAAQgPAAgNgHgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAAQACAPQADAPAFALQAFALAIAGQAIAHAJAAQAKAAAIgHQAIgGAFgLQAFgLADgPQADgPgBgQQABgQgDgPQgDgPgFgLQgFgLgIgGQgIgGgKgBQgJABgIAGg");
	this.shape_508.setTransform(337.05,108.95);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("Ag7BjIAAjFIAuAAQAiAAATAZQAUAaAAAvQAAAwgUAZQgTAagiAAgAgiBNIAVAAQAKAAAIgFQAJgFAHgJQAGgKAEgOQAEgPAAgTQAAgTgEgOQgEgOgGgKQgHgKgJgFQgIgEgKAAIgVAAg");
	this.shape_509.setTransform(321.675,108.95);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AgVCfQgIgJgBgPQABgNAIgLQAJgKANAAQAOAAAJAKQAJALAAANQAAAPgJAJQgJAKgOAAQgNAAgJgKgAgYA+IAAgVQAAgXAHgPQAHgQAOgOIAJgKQAJgKAFgJQAGgJgBgOQABgUgJgLQgIgLgQAAQgKAAgGAEQgGAEgEAGQgFAIgDAHIgDAPIgtgJQABgRAIgPQAFgPALgLQAKgLAPgHQAPgGATAAQAkAAAXAXQAXAWgBApQAAAMgDAOQgEAMgFAIQgGAJgIAJIgOAQQgOAMgEALQgEAMAAAOIAAAPg");
	this.shape_510.setTransform(718.95,71.925);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AAoCjIhWifIgCAAIAACfIg3AAIAAlFIA3AAIAACNIACAAIBSiNIA+AAIhgCWIBmCvg");
	this.shape_511.setTransform(698.975,72.175);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AhICjIAAlFIA4AAIAAESIBZAAIAAAzg");
	this.shape_512.setTransform(677.725,72.175);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AA6CjIgQhFIhVAAIgQBFIg3AAIBQlFIBGAAIBPFFgAgkAyIBHAAIgjigIAAAAg");
	this.shape_513.setTransform(655.525,72.175);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AgaCjIAAkWIg9AAIAAgvICvAAIAAAvIg9AAIAAEWg");
	this.shape_514.setTransform(635.975,72.175);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#DB82D8").s().p("Ag2CgQgWgKgOgQIAegoQALANAOAHQAPAHAQAAQAQAAAMgMQALgNAAgUQAAgWgNgMQgNgMgVgLQgPgHgLgHQgLgHgJgLQgJgLgGgOQgEgOAAgVQAAgaAIgSQAHgRAOgMQAMgNARgFQASgGAPAAQAZAAATAIQATAIAOAQIgfAnQgRgWgcABQgGAAgJACQgGADgGAFQgGAGgDAIQgEALAAAKQAAAVANALQANANASAJQAPAHAJAGQAMAIALAKQAKALAHAPQAGAPAAAVQAAAZgIASQgHATgNALQgMAOgRAGQgRAGgSAAQgbAAgYgLg");
	this.shape_515.setTransform(608.75,72.15);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#DB82D8").s().p("AgaCjIAAkWIg9AAIAAgvICvAAIAAAvIg9AAIAAEWg");
	this.shape_516.setTransform(589.975,72.175);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#DB82D8").s().p("AgwCfQgWgOgPgVQgPgXgIgfQgIghAAglQAAgnAIgfQAHgdAQgYQAOgWAXgNQAWgMAaAAQAcAAAVAMQAXANAOAWQAQAYAHAdQAIAfAAAnQAAAngIAfQgHAfgQAXQgOAWgXANQgVAMgcAAQgaAAgWgMgAgZhtQgMAKgHAPQgHAQgEAWQgEAXAAAXQAAAYAEAWQAEAWAHARQAHAQAMAIQAMAKANAAQAPAAAMgKQAKgIAIgQQAIgQAEgXQADgUAAgaQAAgZgDgVQgFgXgHgPQgIgQgLgJQgLgJgPAAQgOAAgLAJg");
	this.shape_517.setTransform(569.025,72.15);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#DB82D8").s().p("AAmCjIgxiLIgfAAIAACLIg1AAIAAlFIBdAAQAUAAAQAFQARAFAMAMQANAMAGARQAHASAAAYQAAARgFAQQgEANgIAMQgHAKgJAFQgKAHgIACIA6CWgAgqgQIAfAAQAUAAANgMQANgNAAgZQAAgOgEgLQgFgKgGgFQgHgFgIgDQgHgCgJAAIgfAAg");
	this.shape_518.setTransform(544.775,72.175);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#DB82D8").s().p("AAmCjIgxiLIgfAAIAACLIg1AAIAAlFIBdAAQAUAAAQAFQARAFAMAMQANAMAGARQAHASAAAYQAAARgFAQQgEANgIAMQgHAKgJAFQgKAHgIACIA6CWgAgqgQIAfAAQAUAAANgMQANgNAAgZQAAgOgEgLQgFgKgGgFQgHgFgIgDQgHgCgJAAIgfAAg");
	this.shape_519.setTransform(521.175,72.175);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#DB82D8").s().p("AA6CjIgQhFIhVAAIgQBFIg4AAIBRlFIBGAAIBPFFgAgkAyIBHAAIgjigIgBAAg");
	this.shape_520.setTransform(496.6,72.175);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#DB82D8").s().p("AhaCjIAAlFIBaAAQAPAAAQAFQAQAEAOALQANAMAIASQAJATAAAbQAAAZgIATQgHASgNAMQgNANgPAFQgQAGgRAAIgmAAIAACDgAgkgMIAgAAQASAAAMgOQANgNAAgaQAAgagNgMQgMgMgSAAIggAAg");
	this.shape_521.setTransform(476.525,72.175);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgwCfQgWgNgPgWQgPgVgIghQgIgfAAgnQAAgnAIgfQAHgfAQgWQAOgWAXgNQAWgMAaAAQAbAAAWAMQAVAMAQAXQAPAVAIAgQAIAfAAAnQAAAngIAfQgIAggPAWQgQAWgVANQgWAMgbAAQgaAAgWgMgAgZhtQgMAKgHAPQgIASgEAUQgDAaAAAUQAAAVADAZQAEAVAIASQAHAQAMAIQAMAKANAAQAOAAANgKQAKgIAIgQQAIgSAEgVQADgUAAgaQAAgagEgUQgDgUgIgSQgIgQgLgJQgLgJgPAAQgOAAgLAJg");
	this.shape_522.setTransform(441.575,72.15);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AhoCjIAAlFIBSAAQA+AAAgArQAhArAABMQAABNghArQggArg+AAgAgwByIAaAAQARAAALgHQANgGAKgPQAKgOAFgWQAFgUAAgeQAAgdgFgUQgFgWgKgOQgJgOgOgIQgNgHgPAAIgaAAg");
	this.shape_523.setTransform(415.575,72.175);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgbCjIAAh9IhRjIIA8AAIAwCRIABgBIAyiQIA6AAIhTDIIAAB9g");
	this.shape_524.setTransform(383.3,72.175);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AAxCjIAAiRIhhAAIAACRIg2AAIAAlFIA2AAIAACEIBhAAIAAiEIA3AAIAAFFg");
	this.shape_525.setTransform(359,72.175);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AAtCjIgtj0IAAAAIgtD0Ig/AAIg+lFIA4AAIAqD8IABAAIAsj8IA5AAIAtD8IABAAIAqj8IA1AAIg+FFg");
	this.shape_526.setTransform(327.675,72.175);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AgqBjIAAjFIBTAAIAAAWIg7AAIAAA+IA3AAIAAAVIg3AAIAABFIA9AAIAAAXg");
	this.shape_527.setTransform(804.15,172.75);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgSBgQgNgHgJgOQgKgNgFgTQgFgTAAgYQAAgVAFgTQAFgTAJgOQAJgOANgHQANgIAPAAQAQAAANAGQAMAFAIANIgQARQgGgJgIgFQgIgEgKAAQgKAAgIAGQgIAHgGALQgGALgCAOQgDAPAAAPQAAARADAPQADAPAGALQAFAKAJAHQAIAGAMAAQAPAAAIgHIAAg9IgaAAIAAgVIAzAAIAABfQgJAIgMAEQgLAEgRAAQgQAAgOgHg");
	this.shape_528.setTransform(789.925,172.675);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AAnBjIgKguIg5AAIgLAuIgaAAIAyjFIAhAAIAwDFgAAZAhIgYhrIgBAAIgYBrIAxAAg");
	this.shape_529.setTransform(775.9,172.75);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgbBfQgLgFgHgKQgHgKgDgOQgDgNAAgOIAAiCIAaAAIAAB/IABAUQACAJADAHQAEAIAGAEQAHAEAJAAQAKAAAGgEQAHgEAEgIQADgHACgJIACgUIAAh/IAZAAIAACCQAAAOgDANQgDAOgIAKQgGAKgMAFQgLAHgQgBQgQABgLgHg");
	this.shape_530.setTransform(761.65,173);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AgSBgQgNgHgJgOQgKgNgFgTQgFgTAAgYQAAgVAFgTQAFgTAJgOQAJgOANgHQANgIAPAAQAQAAANAGQAMAFAIANIgQARQgGgJgIgFQgIgEgKAAQgKAAgIAGQgIAHgGALQgGALgCAOQgDAPAAAPQAAARADAPQADAPAGALQAFAKAJAHQAIAGAMAAQAPAAAIgHIAAg9IgaAAIAAgVIAzAAIAABfQgJAIgMAEQgLAEgRAAQgQAAgOgHg");
	this.shape_531.setTransform(746.125,172.675);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AAdBjIg+iYIgBAAIAACYIgXAAIAAjFIAeAAIA9CYIABAAIAAiYIAXAAIAADFg");
	this.shape_532.setTransform(730.775,172.75);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AAoBjIgLguIg5AAIgLAuIgaAAIAyjFIAgAAIAxDFgAAZAhIgYhrIgBAAIgYBrIAxAAg");
	this.shape_533.setTransform(715.95,172.75);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgoBjIAAjFIAZAAIAACtIA3AAIAAAYg");
	this.shape_534.setTransform(705,172.75);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AAdBjIg+iYIgBAAIAACYIgXAAIAAjFIAeAAIA9CYIABAAIAAiYIAXAAIAADFg");
	this.shape_535.setTransform(685.475,172.75);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AAoBjIgMguIg4AAIgLAuIgaAAIAyjFIAgAAIAxDFgAAZAhIgYhrIgBAAIgZBrIAyAAg");
	this.shape_536.setTransform(670.65,172.75);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AA3BjIAAijIgBAAIgsCjIgWAAIgrijIgBAAIAACjIgXAAIAAjFIAlAAIAqCcIAAAAIAqicIAmAAIAADFg");
	this.shape_537.setTransform(653.675,172.75);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AgbBfQgLgFgHgKQgHgKgDgOQgDgNAAgOIAAiCIAZAAIAAB/IACAUQACAJADAHQAEAIAGAEQAHAEAJAAQAKAAAHgEQAGgEAEgIQAEgHABgJIACgUIAAh/IAZAAIAACCQAAAOgDANQgEAOgGAKQgHAKgLAFQgMAHgQgBQgQABgLgHg");
	this.shape_538.setTransform(635.7,173);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AAiBjIAAhbIhEAAIAABbIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_539.setTransform(619.775,172.75);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AgqBjIAAjFIBTAAIAAAWIg7AAIAAA+IA2AAIAAAVIg2AAIAABFIA9AAIAAAXg");
	this.shape_540.setTransform(600.9,172.75);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AgSBgQgNgIgJgOQgJgOgFgTQgEgSAAgXQAAgVAEgUQAGgSAJgOQAJgPAMgHQAOgIAPAAQAPAAANAGQAMAGAJAMIgRARQgGgJgHgFQgJgEgJAAQgLAAgIAHQgIAGgGALQgFALgDAOQgDAQABAPQgBARADAOQADAOAFALQAGALAJAHQAHAGAMABQAKgBAIgFQAIgGAEgHIAQAQQgIALgLAIQgNAHgQAAQgPAAgOgIg");
	this.shape_541.setTransform(588.05,172.75);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AgbBfQgLgFgHgKQgHgKgDgOQgDgNAAgOIAAiCIAaAAIAAB/IABAUQACAJADAHQAEAIAHAEQAGAEAJAAQAKAAAHgEQAGgEAEgIQADgHACgJIABgUIAAh/IAaAAIAACCQAAAOgDANQgEAOgGAKQgHAKgLAFQgMAHgQgBQgQABgLgHg");
	this.shape_542.setTransform(573.05,173);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("Ag7BjIAAjFIAuAAQAiAAATAZQAUAaAAAvQAAAwgUAZQgTAagiAAgAgiBNIAVAAQAKAAAIgFQAJgEAHgKQAGgKAEgOQAEgOAAgUQAAgSgEgPQgEgOgGgKQgHgKgJgEQgIgFgKAAIgVAAg");
	this.shape_543.setTransform(557.975,172.75);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AgcBhQgMgJgJgNQgIgNgFgUQgFgTAAgXQAAgXAEgTQAFgTAJgNQAJgOAMgIQANgHAPAAQAQAAANAHQAMAIAJAOQAJANAEATQAFATAAAXQAAAXgFATQgEAUgJANQgJANgMAJQgNAHgQAAQgPAAgNgHgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAAQACAPQADAPAFALQAFALAIAGQAIAHAJAAQAKAAAIgHQAHgGAGgLQAFgLADgPQACgPAAgQQAAgQgCgPQgDgPgFgLQgGgLgHgGQgIgGgKAAQgJAAgIAGg");
	this.shape_544.setTransform(541.7,172.75);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AAbBjIghhZIgWAAIAABZIgZAAIAAjFIA0AAQAJAAAKADQAJACAIAHQAHAGAEALQAEAKABAPQAAAMgEAJQgCAIgGAHQgEAGgHADQgFAEgGABIAlBdgAgcgIIAWAAQAOAAAJgJQAJgJAAgRQAAgLgDgGQgEgGgDgEQgFgEgGgCIgLgBIgWAAg");
	this.shape_545.setTransform(527.45,172.75);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AgyBjIAAjFIAxAAQAIAAAKACQAKADAHAGQAHAHAGAKQAEAMAAAPQABAPgFALQgEAKgHAHQgIAHgIADQgKAEgJAAIgaAAIAABVgAgZgGIAWAAQAMAAAJgJQAIgJAAgSQAAgSgIgJQgJgHgMgBIgWAAg");
	this.shape_546.setTransform(513.9,172.75);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AAdBjIg+iYIgBAAIAACYIgXAAIAAjFIAeAAIA9CYIABAAIAAiYIAXAAIAADFg");
	this.shape_547.setTransform(493.275,172.75);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AAnBjIgKguIg5AAIgLAuIgaAAIAyjFIAhAAIAwDFgAAZAhIgYhrIgBAAIgYBrIAxAAg");
	this.shape_548.setTransform(478.45,172.75);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgSBgQgNgIgJgOQgJgOgFgTQgEgSAAgXQAAgVAEgUQAGgSAJgOQAJgPAMgHQAOgIAPAAQAPAAANAGQAMAGAJAMIgRARQgGgJgHgFQgJgEgJAAQgLAAgIAHQgIAGgFALQgGALgDAOQgDAQABAPQgBARADAOQADAOAGALQAFALAJAHQAHAGAMABQAKgBAIgFQAIgGAEgHIAQAQQgIALgLAIQgNAHgQAAQgPAAgOgIg");
	this.shape_549.setTransform(465.65,172.75);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AgbBhQgNgJgJgNQgIgNgFgUQgFgTAAgXQAAgXAFgTQAEgTAJgNQAJgOAMgIQANgHAPAAQAQAAAMAHQANAIAJAOQAJANAFATQAEATAAAXQAAAXgEATQgFAUgJANQgJANgNAJQgMAHgQAAQgPAAgMgHgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAAQACAPQADAPAFALQAFALAIAGQAIAHAJAAQALAAAHgHQAHgGAGgLQAFgLADgPQADgPAAgQQAAgQgDgPQgDgPgFgLQgGgLgHgGQgHgGgLAAQgJAAgIAGg");
	this.shape_550.setTransform(445,172.75);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AAeBjIgeigIAAAAIgdCgIghAAIgljFIAaAAIAdCkIABAAIAeikIAdAAIAeCkIABAAIAdikIAYAAIgmDFg");
	this.shape_551.setTransform(426.55,172.75);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgMBjIAAiwIglAAIAAgVIBkAAIAAAVIgmAAIAACwg");
	this.shape_552.setTransform(411.1,172.75);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AgMBjIAAhQIgxh1IAbAAIAiBdIAjhdIAbAAIgyB1IAABQg");
	this.shape_553.setTransform(396.025,172.75);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AgoBjIAAjFIAZAAIAACtIA3AAIAAAYg");
	this.shape_554.setTransform(386.75,172.75);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AAdBjIg+iYIgBAAIAACYIgXAAIAAjFIAeAAIA9CYIABAAIAAiYIAXAAIAADFg");
	this.shape_555.setTransform(372.525,172.75);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgcBhQgMgJgJgNQgJgNgEgUQgFgTAAgXQAAgXAEgTQAFgTAJgNQAJgOAMgIQANgHAPAAQAQAAANAHQAMAIAJAOQAIANAGATQAEATAAAXQAAAXgEATQgGAUgIANQgJANgMAJQgNAHgQAAQgPAAgNgHgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAAQACAPQADAPAFALQAFALAIAGQAIAHAJAAQAKAAAIgHQAIgGAFgLQAFgLADgPQADgPgBgQQABgQgDgPQgDgPgFgLQgFgLgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_556.setTransform(356.4,172.75);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AgSAkIAPhHIAXAAIgUBHg");
	this.shape_557.setTransform(340.4,182.65);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AAiBjIAAhbIhEAAIAABbIgZAAIAAjFIAZAAIAABUIBEAAIAAhUIAaAAIAADFg");
	this.shape_558.setTransform(329.375,172.75);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgMBjIAAiwIgmAAIAAgVIBkAAIAAAVIgmAAIAACwg");
	this.shape_559.setTransform(316.2,172.75);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AAbBjIghhZIgWAAIAABZIgZAAIAAjFIA0AAQAJAAAKADQAJACAIAHQAHAGAEALQAFAKAAAPQAAAMgEAJQgCAIgGAHQgEAGgHADQgFAEgGABIAlBdgAgcgIIAWAAQAOAAAJgJQAJgJAAgRQAAgLgDgGQgEgGgDgEQgFgEgGgCIgLgBIgWAAg");
	this.shape_560.setTransform(305.15,172.75);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AAnBjIgLguIg4AAIgLAuIgaAAIAyjFIAhAAIAwDFgAAZAhIgYhrIgBAAIgZBrIAyAAg");
	this.shape_561.setTransform(290.75,172.75);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AgqBjIAAjFIBTAAIAAAWIg7AAIAAA+IA3AAIAAAVIg3AAIAABFIA9AAIAAAXg");
	this.shape_562.setTransform(278.55,172.75);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AAdBjIg+iYIgBAAIAACYIgXAAIAAjFIAeAAIA9CYIABAAIAAiYIAXAAIAADFg");
	this.shape_563.setTransform(258.775,172.75);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AgcBhQgMgJgJgNQgJgNgEgUQgFgTAAgXQAAgXAFgTQAEgTAJgNQAIgOANgIQANgHAPAAQAQAAANAHQAMAIAJAOQAIANAGATQAEATAAAXQAAAXgEATQgGAUgIANQgJANgMAJQgNAHgQAAQgPAAgNgHgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAAQACAPQADAPAFALQAFALAIAGQAIAHAJAAQALAAAHgHQAIgGAFgLQAFgLADgPQADgPgBgQQABgQgDgPQgDgPgFgLQgFgLgIgGQgHgGgLAAQgJAAgIAGg");
	this.shape_564.setTransform(242.65,172.75);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AgdBiQgOgHgIgKIAPgSQAHAIAJAFQAJAEALABQALAAAIgJQAIgJAAgQQAAgHgCgFQgDgHgFgEIgKgIIgLgHIgPgJQgHgEgGgGQgFgHgDgJQgEgIAAgMQAAgPAFgKQAEgLAIgHQAHgHAKgDQAJgEAJAAQAOAAAMAFQALAFAHAJIgPASQgLgOgSAAIgJABQgFACgEAFQgEAEgDAGQgDAGABAJQgBAIADAEQACAGAEAEIAKAIIAKAHIAQAJQAHAEAGAGQAHAHADAJQAEAJAAAMQAAAOgFALQgDAKgIAIQgHAHgKAEQgJAEgKAAQgQAAgNgGg");
	this.shape_565.setTransform(222.9,172.75);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgqBjIAAjFIBTAAIAAAWIg7AAIAAA+IA2AAIAAAVIg2AAIAABFIA9AAIAAAXg");
	this.shape_566.setTransform(211.55,172.75);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AAbBjIgghZIgYAAIAABZIgYAAIAAjFIAzAAQAKAAAKADQAJACAIAHQAHAGAFALQADAKAAAPQAAAMgCAJQgDAIgFAHQgFAGgGADQgHAEgFABIAlBdgAgdgIIAYAAQANAAAIgJQAJgJAAgRQAAgLgDgGQgCgGgFgEQgEgEgGgCIgLgBIgXAAg");
	this.shape_567.setTransform(198.9,172.75);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgbBfQgLgFgHgKQgHgKgDgOQgDgNAAgOIAAiCIAZAAIAAB/IACAUQABAJAEAHQAEAIAGAEQAHAEAJAAQAKAAAHgEQAGgEAEgIQAEgHABgJIACgUIAAh/IAZAAIAACCQAAAOgDANQgEAOgHAKQgGAKgLAFQgMAHgQgBQgQABgLgHg");
	this.shape_568.setTransform(183.55,173);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AgMBjIAAiwIgmAAIAAgVIBkAAIAAAVIgmAAIAACwg");
	this.shape_569.setTransform(170.75,172.75);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AAnBjIgKguIg5AAIgLAuIgaAAIAyjFIAhAAIAwDFgAAZAhIgYhrIgBAAIgYBrIAxAAg");
	this.shape_570.setTransform(159.4,172.75);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AgqBjIAAjFIBTAAIAAAWIg7AAIAAA+IA2AAIAAAVIg2AAIAABFIA9AAIAAAXg");
	this.shape_571.setTransform(147.2,172.75);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AAbBjIgghZIgYAAIAABZIgYAAIAAjFIAzAAQAKAAAKADQAJACAIAHQAHAGAFALQADAKAAAPQAAAMgCAJQgDAIgFAHQgFAGgGADQgHAEgFABIAlBdgAgdgIIAYAAQANAAAIgJQAJgJAAgRQAAgLgCgGQgDgGgFgEQgEgEgGgCIgLgBIgXAAg");
	this.shape_572.setTransform(134.55,172.75);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgSBgQgNgIgJgOQgJgOgFgTQgEgSAAgXQAAgVAEgUQAFgSAJgOQAJgPANgHQAOgIAPAAQAPAAANAGQAMAGAIAMIgQARQgGgJgHgFQgJgEgJAAQgMAAgHAHQgIAGgGALQgFALgDAOQgDAQABAPQgBARADAOQADAOAFALQAGALAJAHQAHAGAMABQAKgBAIgFQAIgGAEgHIAQAQQgIALgLAIQgNAHgQAAQgPAAgOgIg");
	this.shape_573.setTransform(120.6,172.75);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AgnBjIAAjFIAYAAIAACtIA4AAIAAAYg");
	this.shape_574.setTransform(104.55,172.75);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AgoBjIAAjFIAaAAIAACtIA2AAIAAAYg");
	this.shape_575.setTransform(94.15,172.75);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AAnBjIgKguIg5AAIgLAuIgaAAIAyjFIAhAAIAwDFgAAZAhIgYhrIgBAAIgYBrIAxAAg");
	this.shape_576.setTransform(81.1,172.75);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AgpBjIAAjFIBTAAIAAAWIg6AAIAABBIA1AAIAAAUIg1AAIAABag");
	this.shape_577.setTransform(64.575,172.75);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AgbBhQgNgJgJgNQgJgNgEgUQgFgTAAgXQAAgXAEgTQAFgTAJgNQAJgOAMgIQANgHAPAAQAQAAAMAHQANAIAJAOQAJANAEATQAFATAAAXQAAAXgFATQgEAUgJANQgJANgNAJQgMAHgQAAQgPAAgMgHgAgRhKQgIAGgFALQgFALgDAPQgCAPAAAQQAAAQACAPQADAPAFALQAFALAIAGQAIAHAJAAQAKAAAIgHQAHgGAGgLQAFgLADgPQACgPABgQQgBgQgCgPQgDgPgFgLQgGgLgHgGQgIgGgKAAQgJAAgIAGg");
	this.shape_578.setTransform(50.1,172.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.text},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]}).wait(240));

	// guides
	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#DBF3D1").s().p("EhKeAU8MAAAgp3MCU9AAAMAAAAp3g");
	this.shape_579.setTransform(514.7,285);

	this.timeline.addTween(cjs.Tween.get(this.shape_579).wait(240));

	// background_
	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#EAEDE3").s().p("EhP6Bj2MAAAjHrMCf1AAAMAAADHrg");
	this.shape_580.setTransform(510.5,639);

	this.timeline.addTween(cjs.Tween.get(this.shape_580).wait(240));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:2, endFrame:2, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:4, endFrame:4, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:6, endFrame:6, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:8, endFrame:8, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:10, endFrame:10, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:12, endFrame:12, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:14, endFrame:14, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:18, endFrame:18, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:20, endFrame:20, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:22, endFrame:22, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:24, endFrame:24, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:26, endFrame:26, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:28, endFrame:28, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:30, endFrame:30, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:34, endFrame:34, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:36, endFrame:36, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:38, endFrame:38, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:40, endFrame:40, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:42, endFrame:42, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:44, endFrame:44, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:46, endFrame:46, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:50, endFrame:50, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:52, endFrame:52, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:54, endFrame:54, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:56, endFrame:56, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:58, endFrame:58, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:60, endFrame:60, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:62, endFrame:62, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:66, endFrame:66, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:68, endFrame:68, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:70, endFrame:70, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:72, endFrame:72, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:74, endFrame:74, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:76, endFrame:76, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:78, endFrame:78, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:82, endFrame:82, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:84, endFrame:84, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:86, endFrame:86, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:88, endFrame:88, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:90, endFrame:90, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:92, endFrame:92, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:94, endFrame:94, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:98, endFrame:98, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:100, endFrame:100, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:102, endFrame:102, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:104, endFrame:104, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:106, endFrame:106, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:108, endFrame:108, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:110, endFrame:110, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:114, endFrame:114, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:116, endFrame:116, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:118, endFrame:118, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:120, endFrame:120, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:122, endFrame:122, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:124, endFrame:124, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:126, endFrame:126, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:130, endFrame:130, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:132, endFrame:132, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:134, endFrame:134, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:136, endFrame:136, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:138, endFrame:138, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:140, endFrame:140, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:142, endFrame:142, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:146, endFrame:146, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:148, endFrame:148, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:150, endFrame:150, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:152, endFrame:152, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:154, endFrame:154, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:156, endFrame:156, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:158, endFrame:158, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:162, endFrame:162, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:164, endFrame:164, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:166, endFrame:166, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:168, endFrame:168, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:170, endFrame:170, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:172, endFrame:172, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:174, endFrame:174, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:178, endFrame:178, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:180, endFrame:180, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:182, endFrame:182, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:184, endFrame:184, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:186, endFrame:186, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:188, endFrame:188, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:190, endFrame:190, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:194, endFrame:194, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:196, endFrame:196, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:198, endFrame:198, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:200, endFrame:200, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:202, endFrame:202, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:204, endFrame:204, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:206, endFrame:206, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:210, endFrame:210, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:212, endFrame:212, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:214, endFrame:214, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:216, endFrame:216, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:218, endFrame:218, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:220, endFrame:220, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:222, endFrame:222, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:226, endFrame:226, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:228, endFrame:228, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:230, endFrame:230, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:232, endFrame:232, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:234, endFrame:234, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:236, endFrame:236, x:-2, y:-4, w:44, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:238, endFrame:238, x:-2, y:-4, w:44, h:44});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(511,640,873.9000000000001,638);
// library properties:
lib.properties = {
	id: 'AAF76059CAAB4F46821007DD4991FC04',
	width: 1024,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/gracias.mp3", id:"gracias"},
		{src:"sounds/grazie.mp3", id:"grazie"},
		{src:"sounds/obrigado1.mp3", id:"obrigado1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AAF76059CAAB4F46821007DD4991FC04'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;