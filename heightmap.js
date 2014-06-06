if (!wimplash) { wimplash = {}; }
if (!wimplash.experiments) { wimplash.experiments = {}; }
if (!wimplash.experiments.canvas) { wimplash.experiments.canvas = {}; }
if (!wimplash.experiments.canvas.heightmap) { wimplash.experiments.canvas.heightmap = {}; }
wimplash.experiments.canvas.heightmap.HeightMap = function HeightMap(props) {
};
wimplash.experiments.canvas.heightmap.HeightMap.prototype.generateTo = function generateTo(ctx) {
	ctx.font = '20px Times New Roman';
	ctx.fillStyle = 'Black';
	ctx.fillText('Hello world!', 5, 30);
};
