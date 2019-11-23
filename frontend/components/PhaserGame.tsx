import React from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import Overlay from "./Overlay";

export default class PhaserGame extends React.Component {
  state = {
    game: {
      width: 1920,
      height: 1080,
      type: Phaser.AUTO,
      scene: {
        init: function() {
          this.cameras.main.setBackgroundColor('#373fff');
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
    return (
        <div id={"canvasContainer"}>
          <div>
            <IonPhaser game={this.state.game as any} />
          </div>
          <Overlay/>
        </div>
    );
  }

}
