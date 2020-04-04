Preload = function(game){}

Preload.prototype = {
	preload:function(){
		
		this.load.image("backyard","assets/images/backyard.png"); 
        this.load.image("arrow","assets/images/arrow.png");
		this.load.image("apple","assets/images/apple.png");
		this.load.image("bar","assets/images/bar.png");
		this.load.image("candy","assets/images/candy.png");
		this.load.image("logo","assets/images/logo.png");
    	this.load.image("toy","assets/images/rubber_duck.png");
        this.load.image("rotate","assets/images/rotate.png");
        this.load.spritesheet("pet", "assets/images/pet.png", 97, 83, 5); 
	},
	create:function(){
		//console.log("Terminamos de cargar");
		this.state.start("Menu");
	}
}