window.onload=function(){
    //console.log("HOLA MUNDO");
    //let es como var
    let current_animal={}, //OBJECTO VACIO
        animals = ["sheep", "horse", "pig","chicken"],
        isMoving = false,
        new_animal = {},
        index = 0;
    let arrow_1;
    let arrow_2;
        
    let game = new Phaser.Game(640,360,Phaser.AUTO,'content',
    {
        preload:preload, //predeterminado por phaser
        create:create,      //metods prede. 
        update:update      // la parte derecha son las funciones creadas
    });
        //ancho , alto , dimension(webgl o canvas) , el contenedor
    function preload(){
        //console.log("preload")
        //CARGAS ASSETS
        game.load.image("background","assets/images/background.png"); //DICCIONARIO keys ,rutas
        game.load.image("arrow","assets/images/arrow.png");
        game.load.spritesheet("sheep","assets/images/sheep_spritesheet.png",244,200,3);
        // _ , _ , ancho , largo , fotogramas,
        game.load.spritesheet("chicken","assets/images/chicken_spritesheet.png",131,200,3);
        game.load.spritesheet("horse","assets/images/horse_spritesheet.png",212,200,3);
        game.load.spritesheet("pig","assets/images/pig_spritesheet.png",297,200,3);

    }
    function create(){
        //console.log("create") //constructor
        let bg = game.add.sprite(0,0,"background"); //pos x, pos y, key diccionario

        //ARROW 1 ===========================================
        arrow_1 = game.add.sprite(0,0,"arrow");
        arrow_1.anchor.setTo(0.5);
        arrow_1.direction = "left" //PROP NO EXISTE


        arrow_1.y = game.world.centerY;
        //arrow_1.y = game.height * 0,5;
        arrow_1.x = arrow_1.width*0.5;
        arrow_1.scale.setTo(-1);

        //ARROW 2 ===========================================
        arrow_2 = game.add.sprite(0,0,"arrow");
        arrow_2.anchor.setTo(0.5);
        arrow_2.y = game.world.centerY;
        arrow_2.x = game.width - (arrow_2.width*0.5);
        arrow_2.direction = "right" //PROP NO EXISTE

        //EVENTOS DE CLICK
        arrow_1.inputEnabled = true;
        arrow_1.events.onInputDown.add(clickArrow); //funcion

        arrow_2.inputEnabled = true;
        arrow_2.events.onInputDown.add(clickArrow); //funcion

        //let index = game.rnd.integerInRange(0,animals.length-1);


        //SHEEP ===========================================
        current_animal = game.add.sprite(0,0,animals[index]); // _ , _ , nombre, nro de fotograma (comienza en 0).
        //por defecto agarra el primer fotograma
        current_animal.anchor.setTo(0.5);

        current_animal.y = game.world.centerY;
        current_animal.x = game.world.centerX;

        current_animal.animations.add("animate",[0,1,2,1,0,1],3,true); 
                    //nombre de la animacion, Array secuencias que puede hacer, velocidad, bool loop //
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
            },300); //to(_, tiempo)
            tween_current.start();

            let tween_new = game.add.tween(new_animal).to({
                x: game.world.centerX
            },300); //to(_, tiempo)
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
            },300); //to(_, tiempo)
            tween_current.start();

            let tween_new = game.add.tween(new_animal).to({
                x: game.world.centerX
            },300); //to(_, tiempo)
            tween_new.onComplete.add(onCompleteTween);
            tween_new.start();
            //current_animal.x +=10;
            //let tween = game.add.tween(current_animal).to({x:current_animal.x+40},200);
            //tween.start();
            
        }
        console.log(index);
        
    }

    function onCompleteTween(){
        isMoving=false;
        current_animal.destroy(); //se vueva nula 
        current_animal = new_animal;
        arrow_2.alpha = 1;
        arrow_1.alpha = 1;
        //current_animal.kill(); //desactiva inaptive de unity y no lo considera en el update
    }
    function update(){
        //console.log("update")
    }

}