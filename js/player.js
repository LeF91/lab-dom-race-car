class player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.gameScreenBounding = this.gameScreen.getBoundingClientRect();
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.speed = 4;

    this.init(imgSrc);
  }

  init(src) {
    this.element = document.createElement("img");

    this.element.src = src;
    this.element.style.position = "absolute";
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    this.gameScreen.append(this.element);
  }

  move(direction) {
    switch (direction) {
      case "up":
        if (this.top <= 0) return;
        this.top -= this.speed;

        break;
      case "down":
        const playerBottom = this.top + this.height;
        if (playerBottom >= this.gameScreenBounding.height) return;
        this.top += this.speed;

        break;
      case "left":
        if (this.left <= 0) return;
        this.left -= this.speed;

        break;
      case "right":
        const playerRight = this.left + this.width;
        if (playerRight > this.gameScreenBounding.width) return;
        this.left += this.speed;

        break;
    }
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }

  didCollide(obstacle) {
    const playerBounding = this.element.getBoundingClientRect();
    const obsBounding = obstacle.element.getBoundingClientRect();

    const isInX =
      obsBounding.right > playerBounding.left &&
      obsBounding.left < playerBounding.right;
    const isInY =
      obsBounding.bottom > playerBounding.top &&
      obsBounding.top < playerBounding.bottom;

    return isInX && isInY;
  }
}

export default player;
