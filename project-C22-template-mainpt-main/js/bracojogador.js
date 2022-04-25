class BracoJogador {
    constructor(x, y, w, h) {
        const options = {
            isStatic: true
        };
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.jogadorbraco_Image = loadImage("./assets/playerArcher.png");
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        World.add(world, this.body);
        Matter.Body.setAngle(this.body, -90);
    }

    display() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.jogadorbraco_Image, 0, 0, this.w, this.h);
        pop();
    }
}