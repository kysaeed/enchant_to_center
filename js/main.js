enchant();

// enchant.jsの表示をセンタリング
var moveStageToCenter = function(core) {
	var stagePos = {
		top: (window.innerHeight - (core.height * core.scale)) / 2,
		left: (window.innerWidth - (core.width * core.scale)) / 2,
	};
	var stage = document.getElementById('enchant-stage');
	stage.style.position = 'absolute';
	stage.style.top = stagePos.top + 'px';
	stage.style.left = stagePos.left + 'px';
	core._pageX = stagePos.left;
	core._pageY = stagePos.top;
};

var GameMainScene = Class.create(Scene, {
	initialize: function(core) {
		Scene.call(this);
		this.backgroundColor = '#9090b0';

		var sprite = new Sprite(300, 300);
		sprite.image = core.assets['./img/sprite.png'];
		sprite.moveTo(0, 250);
		sprite.tl.moveBy(900, 0, 300).moveBy(-900, 0, 300).loop();
		this.addChild(sprite);
	},
});

window.onload = function() {
    var core = new Core(1200, 800);
	core.fps = 60;

	// enchant.jsの表示をセンタリング
	moveStageToCenter(core);

	core.preload('./img/sprite.png');
	core.onload = function() {
		var main = new GameMainScene(core);
		core.replaceScene(main);
	};

  	core.start();
};
