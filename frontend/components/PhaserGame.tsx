import React from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';

export default class PhaserGame extends React.Component {
  state = {
    game: {
      width: 1920,
      height: 1080,
      type: Phaser.CANVAS,
      scene: {
        init: function() {
          this.cameras.main.setBackgroundColor('#24252A');
        },
        create: function() {
          this.helloWorld = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'hello from phaser', {
            font: '48px Arial',
            fill: '#ffffff',
          });
          this.helloWorld.setOrigin(0.5);
        },
        update: function() {
          this.helloWorld.angle += 1;
        },
      },
    },
  };

  render() {
    return <IonPhaser game={this.state.game as any} />;
  }
}
