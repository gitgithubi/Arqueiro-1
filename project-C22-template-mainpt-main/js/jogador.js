class Jogador {
    constructor(x, y, w, h) {
        let options = {
            isStatic: true
        };
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.jogador_Image = loadImage("./assets/player.png");
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        World.add(world, this.body);
    }

    display() {
        let pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.jogador_Image, pos.x, pos.y, this.w, this.h);
        pop();
    }
}