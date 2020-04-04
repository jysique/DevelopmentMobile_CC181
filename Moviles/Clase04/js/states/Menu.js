Menu = function(game){}

Menu.prototype = {
	create:function(){
        let background = this.add.sprite(0,0,"backyard");

        let title = this.add.text(0,0,"TITULO",{
            font: "20px Arial",
            fill : "#ffffff"
        });
        title.anchor.setTo(0.5);
        title.x = this.world.centerX;
        title.y = this.world.centerY;
        title.inputEnabled = true;
        //this porque ya pertenece a esta clase. A todoa funcion se le añade la palabra
        //reservada this. en cualquier llamada
        //.add asigna un retorno de una funcion
        //this. => game, create  object Object
        //this.goGame => diferentes objectos . object window
        //toda funcion de eventos se tiene que poner la funcion + un this que hace referencia al game
        title.events.onInputDown.add(this.goGame,this);
        
    },
    //Esta funcion desconoce lo demas (todo lo anterior)
    goGame:function(){
        //create  object Windows
        this.state.start('Game');

    }
}