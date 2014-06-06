if (typeof(wimplash) === 'undefined') { wimplash = {}; }
if (typeof(wimplash.experiments) === 'undefined') { wimplash.experiments = {}; }
if (typeof(wimplash.experiments.canvas) === 'undefined') { wimplash.experiments.canvas = {}; }
if (typeof(wimplash.experiments.canvas.heightmap) === 'undefined') { wimplash.experiments.canvas.heightmap = {}; }
wimplash.experiments.canvas.heightmap.onload = function onload() {
	var elCanvas = document.getElementById('experiments-canvas-heightmap');
	if (elCanvas.getContext) {
		var ctx = elCanvas.getContext('2d');
		var heightmap = new wimplash.experiments.canvas.heightmap.HeightMap();
		heightmap.generateTo(ctx);
	}
};
