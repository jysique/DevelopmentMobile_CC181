Game = function(game){}

Game.prototype = { //propiedad del objecto Game (propio de JS )
	create:function(){

        this.levelData = JSON.parse(this.cache.getText("level")); //cache diccionario de phaser -> string a json

        //GRUPOS ->array de phaser
        this.platforms = this.game.add.group(); //grupos de plataforms
        this.levelData.platformData.forEach(this.createPlatform,this);

        this.fires = this.game.add.group(); 
        this.levelData.fireData.forEach(this.createFire,this);

        let player = this.game.add.sprite(this.levelData.playerStart.x,this.levelData.playerStart.y ,"player_spritesheet");

    },
    createPlatform:function(element){
        //PRIMERA FORMA
        //let platform = this.game.add.sprite(element.x, element.y ,"platform");
        //this.platforms.add(platform);

        //SEGUNDA FORMA
        //this.platforms.create(element.x,element.y,"platform");

        //TERCERA FORMA
        let platform = new Phaser.Sprite(this,element.x,element.y,"platform");
        this.platforms.add(platform); //Lo agrega a la escena
    },
    createFire:function(element){
        let fire = this.game.add.sprite(element.x, element.y ,"fire_spritesheet");
        this.fires.add(fire);
        fire.animations.add("fire_animate",[0,1],5,true); 
        fire.animations.play("fire_animate");
    },
}
