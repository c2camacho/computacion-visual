# 🧪 De Pixels a Coordenadas: Explorando la Imagen como Matriz

## 📅 Fecha
`2025-05-05` – Fecha de entrega 

---

## 🎯 Objetivo del Taller

Comprender cómo se representa una imagen digital como una matriz numérica y manipular sus componentes a nivel de píxel. Se abordará cómo trabajar con los valores de color y brillo directamente, accediendo a regiones específicas de la imagen para su análisis o modificación.

---

## 🧠 Conceptos Aprendidos

Lista los principales conceptos aplicados:

- [ ] Carga y Representación de Imágenes a Color
- [ ] Espacios de Color y Conversión
- [ ] Manipulación de Regiones de Interés
- [ ] Análisis de la Distribución de Intensidades con Histogramas
- [ ] Ajustes de Brillo y Contraste

---

## 🔧 Herramientas y Entornos

Especifica los entornos usados:

- Python (`opencv-python`, `torch`, `mediapipe`, `diffusers`, etc.)
- Jupyter / Google Colab

📌 Usa las herramientas según la [guía de instalación oficial](./guia_instalacion_entornos_visual.md)

---

## 📁 Estructura del Proyecto

```
2025-05-05_taller_imagen_matriz_pixeles/
├── python/               
├── README.md
```

📎 Sigue la estructura de entregas descrita en la [guía GitLab](./guia_gitlab_computacion_visual.md)

---

## 🧪 Implementación

Explica el proceso:

### 🔹 Etapas realizadas
1. Preparación del Entorno y Carga de la Imagen.
2. Cargar la Imagen a Color.
3. Separar Canales RGB.
4. Guardado de resultados.

### 🔹 Código relevante

Incluye un fragmento que resuma el corazón del taller:

```python
rojo = imagen_color_rgb[:, :, 0]
verde = imagen_color_rgb[:, :, 1]
azul = imagen_color_rgb[:, :, 2]

# Mostrar los canales individuales en escala de grises
plt.figure(figsize=(12, 4))

plt.subplot(1, 3, 1)
plt.imshow(rojo, cmap='gray')
plt.title('Canal Rojo')
plt.axis('off')

plt.subplot(1, 3, 2)
plt.imshow(verde, cmap='gray')
plt.title('Canal Verde')
plt.axis('off')

plt.subplot(1, 3, 3)
plt.imshow(azul, cmap='gray')
plt.title('Canal Azul')
plt.axis('off')

plt.tight_layout()
plt.show()
```

---

## 📊 Resultados Visuales

### 📌 Este taller **requiere explícitamente un GIF animado**:

> ✅ Si tu taller lo indica, debes incluir **al menos un GIF** mostrando la ejecución o interacción.

![Explorando la Imagen como Matriz](python/Taller5Py.gif)

> ❌ No se aceptará la entrega si falta el GIF en talleres que lo requieren.

---

## 🧩 Prompts Usados

Enumera los prompts utilizados:

```text
"Write Python code using OpenCV, NumPy, and Matplotlib to: load a color image, display its individual RGB and HSV channels, modify a rectangular region by changing its color, replace another region with a different part of the image, calculate and show the color histograms, and finally, adjust the brightness and contrast of the image."
```

📎 Usa buenas prácticas de prompts según la [guía de IA actualizada](./guia_prompts_inteligencias_artificiales_actualizada.md)

---

## 💬 Reflexión Final

Responde en 2-3 párrafos:

- Siempre había escuchado lo de las imágenes separadas por R, G, B, pero ver eso en acción por primera vez es genial, la verdad.

---
