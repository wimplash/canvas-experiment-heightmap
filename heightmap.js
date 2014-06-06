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
	var _props;

	if (props) {
		this._props.width = props.width || DEFAULT_PROPS.width;
		this._props.height = props.height || DEFAULT_PROPS.height;
		this._props.rotation = props.rotation || DEFAULT_PROPS.rotation;
		this._props.skew = props.skew || DEFAULT_PROPS.skew;
	} else {
		this._props = defaultProps();
	}

	return {
		getWidth: function() { return this._props.width; },
		getHeight: function() { return this._props.height; },
		getRotation: function() { return this._props.rotation; },
		getSkew: function() { return this._props.skew; }
	};
};

wimplash.experiments.canvas.heightmap.HeightMap.prototype.generateTo = function generateTo(ctx) {
	ctx.font = '20px Times New Roman';
	ctx.fillStyle = 'Black';
	ctx.fillText('Hello world! (w: ' + this.getWidth() + ')', 5, 30);
};
