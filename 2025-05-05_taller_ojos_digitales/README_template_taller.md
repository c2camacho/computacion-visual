# 🧪 Ojos Digitales: Introducción a la Visión Artificial

## 📅 Fecha
`2025-05-05` – Fecha de entrega 

---

## 🎯 Objetivo del Taller

Entender los fundamentos de la percepción visual artificial mediante imágenes en escala de grises, filtros y detección básica de bordes. Se trabajará con OpenCV para explorar cómo los computadores interpretan imágenes visuales básicas.

---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [ ] Manipular imagenes 

---

## 🔧 Herramientas y Entornos

Especifica los entornos usados:

- Python (`opencv-python`, `torch`, `mediapipe`, `diffusers`, etc.)
- Google Colab

📌 Usa las herramientas según la [guía de instalación oficial](./guia_instalacion_entornos_visual.md)

---

## 📁 Estructura del Proyecto

```
2025-05-05_taller_ojos_digitales/
├── python/                  
├── README.md
```

📎 Sigue la estructura de entregas descrita en la [guía GitLab](./guia_gitlab_computacion_visual.md)

---

## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas
1. Cargar una imagen a color y convertirla a escala de grises.
2. Aplicar filtros convolucionales simples (blur, sharpening).
3. Implementar detección de bordes utilizando:
- Filtro de Sobel en X y Y.
- Filtro Laplaciano.
- Comparación visual entre métodos.
4. Visualizar cada resultado con cv2.imshow() o matplotlib.pyplot.imshow().

### 🔹 Código relevante

Incluye un fragmento que resuma el corazón del taller:

```python
# Aplicar filtros convolucionales
    # Filtro de desenfoque (blur)
    blur_filter = np.ones((5,5), np.float32)/25
    blurred_image = cv2.filter2D(gray_image, -1, blur_filter)

    # Filtro de sharpening (enfoque)
    sharpening_filter = np.array([[-1, -1, -1],
                                  [-1,  9, -1],
                                  [-1, -1, -1]])
    sharpened_image = cv2.filter2D(gray_image, -1, sharpening_filter)

```

---

## 📊 Resultados Visuales

### 📌 Este taller **requiere explícitamente un GIF animado**:

> ✅ Si tu taller lo indica, debes incluir **al menos un GIF** mostrando la ejecución o interacción.

![Explorando la Imagen como Matriz](python/Taller3Py.gif)

> ❌ No se aceptará la entrega si falta el GIF en talleres que lo requieren.

---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

```text
"Design a step-by-step Python tutorial using OpenCV and Matplotlib that demonstrates fundamental image processing techniques. The tutorial must: (1) Load a color image and convert it to grayscale using cv2.cvtColor(), (2) Apply basic convolutional filters including blur (3x3 averaging kernel) and sharpening (kernel: [[0,-1,0],[-1,5,-1],[0,-1,0]]), (3) Implement edge detection using both Sobel (X and Y directions, then combined magnitude) and Laplacian operators, (4) Display all intermediate and final results (original, grayscale, blurred, sharpened, Sobel-X, Sobel-Y, combined Sobel, and Laplacian) in a comparative grid using matplotlib.pyplot.subplots(), and (5) Include a brief analysis comparing edge detection performance between Sobel and Laplacian methods. Provide complete, executable Python code with: proper kernel definitions as NumPy arrays, normalization of output images, clear comments explaining each operation, and labeled subplots with titles. Use cv2 for image operations, numpy for matrix computations, and matplotlib for visualization. Ensure the code handles common edge cases like image loading errors and includes parameter explanations for key functions like cv2.filter2D() and cv2.Sobel()."
```

📎 Usa buenas prácticas de prompts según la [guía de IA actualizada](./guia_prompts_inteligencias_artificiales_actualizada.md)

---

## 💬 Reflexión Final

Responde en 2-3 párrafos:

- Creo que entiendo un poco más los filtros y su uso; siempre pensé que no servían, pero ahora me doy cuenta de lo equivocado que estaba.

---

