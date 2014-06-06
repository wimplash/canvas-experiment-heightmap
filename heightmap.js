if (typeof(wimplash) === 'undefined') { wimplash = {}; }
if (typeof(wimplash.experiments) === 'undefined') { wimplash.experiments = {}; }
if (typeof(wimplash.experiments.canvas) === 'undefined') { wimplash.experiments.canvas = {}; }
if (typeof(wimplash.experiments.canvas.heightmap) === 'undefined') { wimplash.experiments.canvas.heightmap = {}; }
wimplash.experiments.canvas.heightmap.HeightMap = function HeightMap(props) {

	var _width;
	var _height;
	var _rotation;
	var _skew;
	var _scale= 1;

	var _defaultProps = function() {
		return {
			width: 50,
			height: 50,
			rotation: 0,
			skew: 0
		};
	};

	var _generateHeightMap = function() {
		var map = [];
		for (i = 0; i < _height; i++) {
			map[i] = [];
			for (j = 0; j < _width; j++) {
				map[i][j] = Math.floor(Math.random() * 256);
			}
		}
		return map;
	};

	var _drawTo = function(ctx, map) {
		ctx.scale(10, 10);
		var origFillStyle = ctx.fillStyle;
		for (i = 0; i < _height; i++) {
			for (j = 0; j < _width; j++) {
				ctx.fillStyle = 'rgb(' + map[i][j] + ',' + map[i][j] + ',' + map[i][j] +')';
				ctx.fillRect(i, j, 1, 1);
			}
		}
		ctx.fillStyle = origFillStyle;
		ctx.scale(1, 1);
	};

	var _generateTo = function(ctx) {
		_drawTo(ctx, _generateHeightMap());
	};

	var _initialize = function(props) {
		var defProps = _defaultProps();
		if (props) {
			_width = props.width || defProps.width;
			_height = props.height || defProps.height;
			_rotation = props.rotation || defProps.rotation;
			_skew = props.skew || defProps.skew;
		} else {
			_width = defProps.width;
			_height = defProps.height;
			_rotation = defProps.rotation;
			_skew = defProps.skew;
		}

		return {
			generateTo: _generateTo
		};
	};

	return _initialize(props);
};
