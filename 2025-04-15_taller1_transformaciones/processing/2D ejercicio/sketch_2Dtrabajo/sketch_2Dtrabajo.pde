void setup() {
  size(600, 600);
  rectMode(CENTER);
}

void draw() {
  background(220);
  
  // Mover el origen al centro
  translate(width/2, height/2);
  
  // Rotación continua
  rotate(radians(frameCount));
  
  // Rectángulo base
  fill(255, 0, 0, 150);
  rect(0, 0, 300, 300);
  
  // Transformaciones aisladas
  pushMatrix();
    translate(sin(millis()*0.001)*100, 0); // Movimiento horizontal
    rotate(-radians(frameCount)); // Rotación contraria
    scale(abs(sin(millis()*0.002)) + 0.5); // Escala pulsante
    
    fill(0, 255, 0, 150);
    ellipse(0, 0, 200, 200);
  popMatrix();
  
  // Otras transformaciones
  pushMatrix();
    translate(0, cos(millis()*0.001)*100); // Movimiento vertical
    rotate(radians(frameCount*2)); // Rotación más rápida
    scale(map(sin(millis()*0.003), -1, 1, 0.3, 1.5));
    
    fill(0, 0, 255, 150);
    triangle(-50, 50, 0, -70, 50, 50);
  popMatrix();
}
