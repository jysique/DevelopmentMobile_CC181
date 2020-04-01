window.onload=function(){

        
    let game = new Phaser.Game(360,640,Phaser.AUTO,'content',
    {
        preload:preload, 
        create:create
    });

    function preload(){

        game.load.image("backyard","assets/images/backyard.png"); 
        game.load.image("arrow","assets/images/arrow.png");
        game.load.image("apple","assets/images/apple.png");
        game.load.image("candy","assets/images/candy.png");
        game.load.image("toy","assets/images/rubber_duck.png");
        game.load.image("rotate","assets/images/rotate.png");

        game.load.spritesheet("pet", "assets/images/pet.png", 97, 83, 5); 
    }
    function create(){
        let horizontal = game.world.width / 4;
		let	init = 50;

        let by = game.add.sprite(0,0,"backyard"); 

        let arrow_1 = game.add.sprite(0,0,"arrow");
        arrow_1.anchor.setTo(0.5);
        arrow_1.direction = "left"
        arrow_1.y = game.world.centerY;
        arrow_1.x = arrow_1.width*0.5;
        arrow_1.scale.setTo(-1);

        let arrow_2 = game.add.sprite(0,0,"arrow");
        arrow_2.anchor.setTo(0.5);
        arrow_2.y = game.world.centerY;
        arrow_2.x = game.width - (arrow_2.width*0.5);
        arrow_2.direction = "right";

        let apple = game.add.sprite(0,0,"apple");
        apple.anchor.setTo(0.5);
		apple.y = game.world.height*3/4;
        apple.x = horizontal*1+ init;
        
        let candy = game.add.sprite(0,0,"candy");
        candy.anchor.setTo(0.5);
		candy.y = game.world.height*3/4;
		candy.x = horizontal*0 + init;
        
        let toy = game.add.sprite(0,0,"toy");
		toy.anchor.setTo(0.5);
		toy.y = game.world.height*3/4;
		toy.x = horizontal*3+ init;

        let rotate = game.add.sprite(0,0,"rotate");
		rotate.anchor.setTo(0.5);
		rotate.y = game.world.height*3/4;
		rotate.x = horizontal*2+ init;

        let pet = game.add.sprite(0,0,"pet",1); 
        pet.anchor.setTo(0.5);
        pet.y = game.world.centerY;
        pet.x = game.world.centerX;

    }


}