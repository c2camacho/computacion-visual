# 🧪 taller_algoritmos_rasterizacion_basica

## 📅 Fecha
`2025-05-05` – Fecha de entrega 

---

## 🎯 Objetivo del Taller

Comprender e implementar los algoritmos clásicos de rasterización para líneas, círculos y triángulos, entendiendo cómo se construyen imágenes píxel a píxel en una pantalla. El objetivo es desarrollar una base sólida sobre cómo se generan primitivas gráficas sin usar librerías de alto nivel.

---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

este taller se centra en los algoritmos fundamentales para convertir representaciones geométricas básicas (líneas, círculos, triángulos) en una representación discreta de píxeles en una imagen rasterizada. Se exploran conceptos como:

Discretización: Cómo convertir entidades continuas en un conjunto finito de puntos (píxeles).

Eficiencia algorítmica: Buscar métodos que utilicen operaciones simples y minimicen cálculos costosos.

Interpolación: Calcular valores intermedios (como las coordenadas x a lo largo de una línea de escaneo) basándose en los valores de los vértices.

Recorrido y manipulación de píxeles: Cómo acceder y modificar los valores de color de los píxeles en una imagen.

---

## 🔧 Herramientas y Entornos

Especifica los entornos usados:

- Python (`opencv-python`, `torch`, `mediapipe`, `diffusers`, etc.)

---

## 📁 Estructura del Proyecto

```
Rasterización desde Cero: Dibujando con Algoritmos Clásicos/
├── python/               # python
├── README.md
```
---

## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas
1. Preparar el entorno de dibujo
2. Dibujar una línea con el algoritmo de Bresenham
3. Dibujar un círculo con el algoritmo de punto medio
4. Rellenar un triángulo (simple rasterización por scanline)
5. Mostrar el resultado

### 🔹 Código relevante

```python

def midpoint_circle(x0, y0, radius):
    """
    Dibuja un círculo centrado en (x0, y0) con el radio dado
    utilizando el algoritmo de punto medio.
    """
    # Inicializar las coordenadas y la variable de decisión
    x = radius
    y = 0
    p = 1 - radius

    # Bucle para generar los puntos del primer octante
    while x >= y:
        # Dibujar los ocho puntos simétricos correspondientes al punto (x, y)
        for dx, dy in [(x, y), (y, x), (-x, y), (-y, x), (-x, -y), (-y, -x), (x, -y), (y, -x)]:
            # Verificar si las coordenadas están dentro de los límites de la imagen
            if 0 <= x0 + dx < width and 0 <= y0 + dy < height:
                # Establecer el color del píxel a azul
                pixels[x0 + dx, y0 + dy] = (0, 0, 255)
        # Incrementar la coordenada y
        y += 1
        # Actualizar la variable de decisión p
        if p <= 0:
            p = p + 2*y + 1
        else:
            x -= 1
            p = p + 2*y - 2*x + 1

---

## 📊 Resultados Visuales

### 📌 Este taller **requiere explícitamente un GIF animado**:

> ✅ Si tu taller lo indica, debes incluir **al menos un GIF** mostrando la ejecución o interacción.

![visualizacion de los objetos por el algoritmo de rasterización](.python\Taller6Py.gif)
```

---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

```text
"Create a photorealistic image of a robot painting a mural using Stable Diffusion"
"Segment a car and a person using SAM at point (200, 300)"
```

📎 Usa buenas prácticas de prompts según la [guía de IA actualizada](./guia_prompts_inteligencias_artificiales_actualizada.md)

---

## 💬 Reflexión Final

Responde en 2-3 párrafos:

- ¿Qué aprendiste o reforzaste con este taller?
- ¿Qué parte fue más compleja o interesante?
- ¿Qué mejorarías o qué aplicarías en futuros proyectos?

---
