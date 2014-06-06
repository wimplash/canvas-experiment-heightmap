if (typeof(wimplash) === 'undefined') { wimplash = {}; }
if (typeof(wimplash.experiments) === 'undefined') { wimplash.experiments = {}; }
if (typeof(wimplash.experiments.canvas) === 'undefined') { wimplash.experiments.canvas = {}; }
if (typeof(wimplash.experiments.canvas.heightmap) === 'undefined') { wimplash.experiments.canvas.heightmap = {}; }
wimplash.experiments.canvas.heightmap.HeightMap = function HeightMap(props) {
};
wimplash.experiments.canvas.heightmap.HeightMap.prototype.generateTo = function generateTo(ctx) {
	ctx.font = '20px Times New Roman';
	ctx.fillStyle = 'Black';
	ctx.fillText('Hello world!', 5, 30);
};
