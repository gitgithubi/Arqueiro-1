const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  playerBase = new Basejogador(200, 350, 180, 150);
  player = new Jogador(195, playerBase.y - 145, 55, 180);
  playerArcher = new BracoJogador(260, player.y - 20, 120, 120);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  playerBase.display();
  player.display();
  playerArcher.display();

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}