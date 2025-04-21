# computacion-visual taller 1

# En la carpeta pruebas esta todo los pantallazos para demostrar lo realizado 

---Cubo 3D Animado con React---

En este proyecto, se creó una figura tridimensional —un cubo de color rosa— utilizando React Three Fiber, una librería que combina React con el poder gráfico de Three.js. El cubo, definido con un tamaño estándar y un material que reacciona a la luz, cobra vida mediante tres animaciones simultáneas que transforman su presencia estática en un espectáculo dinámico.

Primero, el cubo se desplaza verticalmente siguiendo una trayectoria suave en forma de onda, como si flotara en un mar invisible. Este movimiento, generado con una función senoidal, simula la elegancia de un objeto suspendido en el aire. Segundo, gira sobre sí mismo de manera continua, rotando en ambos ejes con un incremento constante que añade fluidez a su danza. Por último, late como un corazón, expandiéndose y contrayéndose al ritmo de una pulsación calculada matemáticamente, lo que aporta un efecto orgánico a su geometría perfecta.

Detrás de estas animaciones hay un sistema que calcula cada fotograma en tiempo real, utilizando el tiempo transcurrido para sincronizar los movimientos y funciones como Math.sin() para garantizar suavidad. La integración de TypeScript asegura que el código sea robusto, mientras que Vite optimiza el rendimiento durante el desarrollo.

---(2D) en Processing---

Se decidió trabajar en dos dimensiones para facilitar el aprendizaje. Las transformaciones en 2D son más sencillas de entender y aplicar. Además, permiten concentrarse en los fundamentos sin distracciones.

El sketch se organizó en dos partes principales:

Setup: Aquí se configuró el tamaño de la ventana y los modos de dibujo.
Draw: En esta sección se colocaron las figuras y sus transformaciones.

Se usaron funciones como translate() para mover el origen y rotate() para girar las figuras. Todo esto se combinó con pushMatrix() y popMatrix() para aislar efectos y evitar interferencias.

Para crear movimiento, se emplearon:

frameCount: Permitió rotaciones continuas.
millis(): Generó movimientos suaves y repetitivos.

---python---

Metodología
El desarrollo se estructuró en cuatro etapas claramente definidas:

Configuración del entorno: Se inicializó el espacio de trabajo importando las bibliotecas esenciales:

Matplotlib para visualización

NumPy para operaciones matriciales

ImageIO para exportación de animaciones

FuncAnimation para gestión de cuadros animados

Modelado geométrico: Se definió un triángulo como figura base mediante una matriz de vértices en coordenadas cartesianas. Esta elección se fundamenta en su simplicidad geométrica y versatilidad para demostrar transformaciones.

Implementación de transformaciones:

Traslación: Mediante matrices de transformación homogénea que incorporan componentes tx y ty

Rotación: Utilizando funciones trigonométricas (seno y coseno) para calcular la nueva posición angular

Escala: Aplicando factores de multiplicación (sx, sy) a las coordenadas originales