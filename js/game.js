import * as Phaser from './phaser.min.js';
import { main as OpenAI } from './ai.mjs';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Charger les images et autres ressources
}

function create() {
    // Initialiser les éléments du jeu
}

function update() {
    // Logique de mise à jour du jeu
}
