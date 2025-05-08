# 🧪 Filtro Visual: Convoluciones Personalizadas

## 📅 Fecha
`2025-05-05` – Fecha de entrega 

---

## 🎯 Objetivo del Taller

Diseñar e implementar filtros personalizados en imágenes para modificar bordes, difuminar o realzar detalles. Este taller busca profundizar en el concepto de convolución y su impacto visual en el procesamiento de imágenes.

---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [ ] Manipulación básica de imágenes
- [ ] Convolución 2D y kernels
- [ ] Efectos de kernels comunes
- [ ] Validación y comparación
- [ ] Entender el impacto visual de kernels personalizados.


---

## 🔧 Herramientas y Entornos

Especifica los entornos usados:

- Python (`opencv-python`, `torch`, `mediapipe`, `diffusers`, etc.)
- Jupyter / Google Colab

📌 Usa las herramientas según la [guía de instalación oficial](./guia_instalacion_entornos_visual.md)

---

## 📁 Estructura del Proyecto

```
2025-05-05_taller_convoluciones_personalizadas/
├── python/               
├── README.md
```

📎 Sigue la estructura de entregas descrita en la [guía GitLab](./guia_gitlab_computacion_visual.md)

---

## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas
1. Familiarización y Carga de Modelos (Getting Started with 3D Models)
2. Inspección de Propiedades Básicas (Basic Property Inspection)
3. Visualización de Modelos (Model Visualization)
4. Conversión de Formatos (Format Conversion)

### 🔹 Código relevante

Incluye un fragmento que resuma el corazón del taller:

```python
# Definición de kernels
kernels = {
    # Sharpening (Enfocado)
    'sharpening': np.array([
        [0, -1, 0],
        [-1, 5, -1],
        [0, -1, 0]
    ]),

    # Blur (Suavizado)
    'blur': (1/9) * np.array([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]),

    # Detección de bordes (Sobel en X)
    'edge_detection': np.array([
        [-1, 0, 1],
        [-2, 0, 2],
        [-1, 0, 1]
    ])
```

---

## 📊 Resultados Visuales

### 📌 Este taller **requiere explícitamente un GIF animado**:

![Convoluciones Personalizadas](python/Taller10Py.gif)

> ✅ Si tu taller lo indica, debes incluir **al menos un GIF** mostrando la ejecución o interacción.



> ❌ No se aceptará la entrega si falta el GIF en talleres que lo requieren.

---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

```text
Write Python code in a Colab or Jupyter Notebook to load .OBJ, .STL, and .GLTF 3D models using trimesh and open3d. For each model, calculate and print the vertex and face counts, and whether normals are present. Using trimesh, also report any duplicate vertices and degenerate faces. Visualize each model using both libraries' display functions. Then, using trimesh.exchange, convert one model to a different format and load/inspect its properties. Finally, create a script that takes a list of model file paths, loads each with trimesh, prints its properties, and displays it with the filename as the title.
```

📎 Usa buenas prácticas de prompts según la [guía de IA actualizada](./guia_prompts_inteligencias_artificiales_actualizada.md)

---

## 💬 Reflexión Final

Responde en 2-3 párrafos:

- no esperaba que las matrices se pudieran usar de este modo con la imagenes eso me deja pensando como funcionan estas

---