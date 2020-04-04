window.onload=function(){
    let game = new Phaser.Game(360,640,Phaser.AUTO);
    game.state.add('Preload',Preload);  //Key y value - nombre del archivo
    game.state.add('Menu',Menu);
    game.state.add('Game',Game);
    game.state.start('Preload');
}