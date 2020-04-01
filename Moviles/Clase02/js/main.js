window.onload=function(){

    let current_animal={}, 
        animals = ["sheep", "horse", "pig","chicken"],
        isMoving = false,
        new_animal = {},
        index = 0,
        arrow_1 = {},
        arrow_2 = {}
    let game = new Phaser.Game(640,360,Phaser.AUTO,'content',
    {
        preload:preload, 
        create:create,    
        update:update    
    });

    function preload(){

        game.load.image("background","assets/images/background.png"); 
        game.load.image("arrow","assets/images/arrow.png");
        game.load.spritesheet("sheep","assets/images/sheep_spritesheet.png",244,200,3);
        
        game.load.spritesheet("chicken","assets/images/chicken_spritesheet.png",131,200,3);
        game.load.spritesheet("horse","assets/images/horse_spritesheet.png",212,200,3);
        game.load.spritesheet("pig","assets/images/pig_spritesheet.png",297,200,3);

    }
    function create(){
        
        let bg = game.add.sprite(0,0,"background"); 

        
        arrow_1 = game.add.sprite(0,0,"arrow");
        arrow_1.anchor.setTo(0.5);
        arrow_1.direction = "left"
        arrow_1.y = game.world.centerY;
        arrow_1.x = arrow_1.width*0.5;
        arrow_1.scale.setTo(-1);

        
        let arrow_2 = game.add.sprite(0,0,"arrow");
        arrow_2.anchor.setTo(0.5);
        arrow_2.y = game.world.centerY;
        arrow_2.x = game.width - (arrow_2.width*0.5);
        arrow_2.direction = "right" 


        arrow_1.inputEnabled = true;
        arrow_1.events.onInputDown.add(clickArrow); 

        arrow_2.inputEnabled = true;
        arrow_2.events.onInputDown.add(clickArrow); 


        
        current_animal = game.add.sprite(0,0,animals[index]); 
        current_animal.anchor.setTo(0.5);

        current_animal.y = game.world.centerY;
        current_animal.x = game.world.centerX;

        current_animal.animations.add("animate",[0,1,2,1,0,1],3,true); 
        current_animal.animations.play("animate");

    }
    
    function clickArrow(sprite){
        if(isMoving){
            return;
        }
        isMoving = true;
        if (sprite.direction == "left") {
            index = index == 0? animals.length-1:index-1;
            arrow_1.alpha = 0.5;
            new_animal = game.add.sprite(0,0,animals[index]);
            new_animal.anchor.setTo(0.5)
            new_animal.x = game.width + new_animal.width;
            new_animal.y = game.world.centerY;
            let tween_current = game.add.tween(current_animal).to({
                x: -current_animal.width
            },300); 
            tween_current.start();

            let tween_new = game.add.tween(new_animal).to({
                x: game.world.centerX
            },300); 
            tween_new.onComplete.add(onCompleteTween);
            tween_new.start();

        }else if(sprite.direction == "right"){
            index = index == animals.length-1? 0:index+1;
    
            arrow_2.alpha = 0.5;
            new_animal = game.add.sprite(0,0,animals[index]);
            new_animal.anchor.setTo(0.5)
            new_animal.x = - new_animal.width;
            new_animal.y = game.world.centerY;
            let tween_current = game.add.tween(current_animal).to({
                x: current_animal.width + game.width
            },300); 
            tween_current.start();

            let tween_new = game.add.tween(new_animal).to({
                x: game.world.centerX
            },300); 
            tween_new.onComplete.add(onCompleteTween);
            tween_new.start();


        }
        console.log(index);
    }

    function onCompleteTween(){
        isMoving=false;
        current_animal.destroy(); 
        current_animal = new_animal;
        arrow_2.alpha = 1;
        arrow_1.alpha = 1;
    }
    function update(){

    }

}