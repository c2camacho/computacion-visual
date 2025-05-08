# 🧪 Análisis de Figuras Geométricas: Centroide, Área y Perímetro

## 📅 Fecha
`2025-05-05` – Fecha de entrega 

---

## 🎯 Objetivo del Taller

Detectar formas simples (círculos, cuadrados, triángulos) en imágenes binarizadas y calcular propiedades geométricas como área, perímetro y centroide. El objetivo es desarrollar habilidades para extraer métricas relevantes de contornos detectados en imágenes procesadas.

---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

✅ Procesamiento de imágenes binarias.

✅ Extracción y análisis de contornos.

✅ Cálculo de propiedades geométricas (área, perímetro, centroide).

✅ Visualización de resultados con anotaciones.

✅ Integración de OpenCV, NumPy y Matplotlib en un flujo de trabajo.

---

## 🔧 Herramientas y Entornos

Especifica los entornos usados:

- Python (`opencv-python`, `torch`, `mediapipe`, `diffusers`, etc.)
- Jupyter / Google Colab

📌 Usa las herramientas según la [guía de instalación oficial](./guia_instalacion_entornos_visual.md)

---

## 📁 Estructura del Proyecto

```
YYYY-MM-DD_nombre_taller/
├── python/               # python/            
├── README.md
```

📎 Sigue la estructura de entregas descrita en la [guía GitLab](./guia_gitlab_computacion_visual.md)

---

## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas
1. Preparación del Entorno y Carga de Librerías.
2. Detección de Contornos.
3. Cálculo de Propiedades de los Contornos.
4. Dibujar los Contornos y Etiquetar las Figuras
5. Organización del Código en el Notebook

### 🔹 Código relevante

Incluye un fragmento que resuma el corazón del taller:

```python
for contorno in contornos:
    # Calcular el área
    area = cv2.contourArea(contorno)

    # Calcular el perímetro
    perimetro = cv2.arcLength(contorno, True) # True indica que el contorno es cerrado

    # Calcular los momentos
    momentos = cv2.moments(contorno)

    # Calcular el centroide (si los momentos son válidos)
    if momentos['m00'] != 0:
        centroide_x = int(momentos['m10'] / momentos['m00'])
        centroide_y = int(momentos['m01'] / momentos['m00'])
        centroide = (centroide_x, centroide_y)
    else:
        centroide = None # Manejar el caso de área cero

    # Aquí puedes almacenar o imprimir las propiedades calculadas para cada contorno
    print(f"Área: {area:.2f}, Perímetro: {perimetro:.2f}, Centroide: {centroide}")
```

---

## 📊 Resultados Visuales

### 📌 Este taller **requiere explícitamente un GIF animado**:

> ✅ Si tu taller lo indica, debes incluir **al menos un GIF** mostrando la ejecución o interacción.

a continuacion el gif con los resultados 

![Análisis de Figuras Geométricas](python/Taller7Py.gif)


> ❌ No se aceptará la entrega si falta el GIF en talleres que lo requieren.

---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

```
(1)"Explain the initial steps to set up a Python environment for image processing using OpenCV, NumPy, and Matplotlib. Include how to import these libraries and the methods to load a binary image (mentioning how to potentially create one using cv2.threshold() from a grayscale image). Finally, describe how to display this binary image using Matplotlib."

(2)"Describe the cv2.findContours() function in OpenCV in detail. Explain its purpose, the significance of the mode (specifically cv2.RETR_EXTERNAL) and method (specifically cv2.CHAIN_APPROX_SIMPLE) parameters, and the structure of the data it returns representing the detected contours."

(3)"Explain how to calculate the following properties for each detected contour using OpenCV: area (using cv2.contourArea()), perimeter (using cv2.arcLength(), including the closed parameter), and centroid (deriving it from the moments calculated with cv2.moments()). Provide the formulas or methods involved in each calculation."
```

📎 Usa buenas prácticas de prompts según la [guía de IA actualizada](./guia_prompts_inteligencias_artificiales_actualizada.md)

---

## 💬 Reflexión Final

Responde en 2-3 párrafos:

- Nunca antes había intentado buscar geometrías en mis propias fotografías, y la exploración me resultó interesante. tambien creo que el pelaje de los gatos claramente no se presta para identificar formas geométricas.

---
