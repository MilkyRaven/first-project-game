class LevelClear extends Phaser.Scene {
    constructor(){
      super({ key: 'LevelClear'});
    }

    preload () {
        this.load.image('clear', 'img/levelclear.png')
    }
    create(){
        this.add.image(395, 180, 'clear').setScale(0.6);
        this.add.text(450, 220, `${gameState.score}`, {fill: '#FFFFFF', fontSize: '40px'})

            this.input.on('pointerup', () => {
            this.scene.stop('LevelClear');
            this.scene.start('StartScene');  
        });
    }
  }