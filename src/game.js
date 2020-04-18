/**
 * Author: Michael Hadley, mikewesthad.com
 * Asset Credits:
 *  - Tuxemon, https://github.com/Tuxemon/Tuxemon
 */

const config = {
  type: window.Phaser.AUTO,
  width: 1200,
  height: 800,
  parent: "game-container",
  pixelArt: true,
  backgroundColor: "black",
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new window.Phaser.Game(config);
let controls;

function preload() {
  this.load.image("tiles", "./PathAndObjects.png");
  this.load.tilemapTiledJSON("map", "./maptest1.json");
}

function create() {
  const map = this.make.tilemap({ key: "map" });

  // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
  // Phaser's cache (i.e. the name you used in preload)
  // map.addTilesetImage('kenney_simple_platformer', 'tiles');
  const tileset = map.addTilesetImage("PathAndObjects", "tiles");
  map.createStaticLayer("Tile Layer 1", tileset, 0, 0);

  // Phaser supports multiple cameras, but you can access the default camera like this:
  const camera = this.cameras.main;

  // Set up the arrows to control the camera
  const cursors = this.input.keyboard.createCursorKeys();
  controls = new window.Phaser.Cameras.Controls.FixedKeyControl({
    camera: camera,
    left: cursors.left,
    right: cursors.right,
    up: cursors.up,
    down: cursors.down,
    speed: 0.5
  });

  // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  // Help text that has a "fixed" position on the screen
  //   this.add
  //     .text(16, 16, "Arrow keys to scroll", {
  //       font: "18px monospace",
  //       fill: "#ffffff",
  //       padding: { x: 20, y: 10 },
  //       backgroundColor: "#000000"
  //     })
  //     .setScrollFactor(0);
}

function update(time, delta) {
  // Apply the controls to the camera each update tick of the game
  controls.update(delta);
}

export default game;
