if (!wimplash) { wimplash = {}; }
if (!wimplash.experiments) { wimplash.experiments = {}; }
if (!wimplash.experiments.canvas) { wimplash.experiments.canvas = {}; }
if (!wimplash.experiments.canvas.heightmap) { wimplash.experiments.canvas.heightmap = {}; }
wimplash.experiments.canvas.heightmap.onload = function onload() {
	var elCanvas = document.getElementById('experiments-canvas-heightmap');
	if (elCanvas.getContext) {
		var ctx = elCanvas.getContext('2d');
		var heightmap = new wimplash.experiments.canvas.heightmap.HeightMap();
		heightmap.generateTo(ctx);
	}
};
