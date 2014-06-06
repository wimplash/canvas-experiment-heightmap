if (typeof(wimplash) === 'undefined') { wimplash = {}; }
if (typeof(wimplash.experiments) === 'undefined') { wimplash.experiments = {}; }
if (typeof(wimplash.experiments.canvas) === 'undefined') { wimplash.experiments.canvas = {}; }
if (typeof(wimplash.experiments.canvas.heightmap) === 'undefined') { wimplash.experiments.canvas.heightmap = {}; }
wimplash.experiments.canvas.heightmap.HeightMap = function HeightMap(props) {
	var DEFAULT_PROPS = {
			width: 50,
			height: 50,
			rotation: 0,
			skew: 0
	};

	var _width;
	var _height;
	var _rotation;
	var _skew;

	if (props) {
		this._width = props.width || DEFAULT_PROPS.width;
		this._height = props.height || DEFAULT_PROPS.height;
		this._rotation = props.rotation || DEFAULT_PROPS.rotation;
		this._skew = props.skew || DEFAULT_PROPS.skew;
	} else {
		this._width = DEFAULT_PROPS.width;
		this._height = DEFAULT_PROPS.height;
		this._rotation = DEFAULT_PROPS.rotation;
		this._skew = DEFAULT_PROPS.skew;
	}

	var _generateTo = function generateTo(ctx) {
		ctx.font = '20px Times New Roman';
		ctx.fillStyle = 'Black';
		ctx.fillText('Hello world! (w: ' + this._width + ')', 5, 30);
	};

	return {
		generateTo: _generateTo
	};
};
