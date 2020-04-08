Game = function(game){}

Game.prototype = {
	create:function(){
        let horizontal = this.world.width / 4;
        let	init = 40;


        //this.state.start('Estoy en el Game');
        let background = this.add.sprite(0,0,"backyard");
        background.inputEnabled = true;
        background.events.onInputDown.add(this.clickBackGround,this);
	
        this.elements =[]; // para utilizar en toda la clase y en otras funciones
        //toy = rubber_duck
        
        let elements_keys = ["candy","apple","rotate","toy"]
        this.currentKey = "";
        let candy;
        for (let i = 0; i < elements_keys.length; i++) {
            candy= this.add.sprite(0,0,elements_keys[i]);
            candy.anchor.setTo(0.5);
            candy.y = this.world.height*3/4;
            candy.x = (horizontal*i)+ init;

            this.elements.push(candy);
            candy.inputEnabled = true;
            candy.events.onInputDown.add(this.clickElement,this);

        }
        this.pet = this.add.sprite(0,0,"pet"); 
        this.pet.anchor.setTo(0.5);
        this.pet.y = this.world.centerY;
        this.pet.x = this.world.centerX;

        this.pet.animations.add('funnyfaces', [1, 2, 3, 2, 1], 7, false);	
    },
    clickBackGround:function(sprite,event){
        //console.log(events.position.x);
        //console.log(events.position.y);
		if(this.currentKey !=""){
			this.clone(event.position,this);
		}

    },
    clone:function(position){
        
		let element_clone = this.add.sprite(position.x,position.y,this.currentKey);
        element_clone.anchor.setTo(0.5);

        let tweens = this.add.tween(this.pet).to({x:element_clone.x,y:element_clone.y});
        tweens.start();
        tweens.onComplete.add(this.playAnimation,this);
        this.pet.bringToTop(); //pone al sprite a la ultima capa
    },
    playAnimation:function(){
        this.pet.animations.play("funnyfaces");
    },
    clickElement:function(sprite){
        console.log(sprite.key);
        this.currentKey = sprite.key;
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].alpha = sprite.key == this.elements[i].key?0.6:1;
        }
    }

}