# Precio Negativo en la Sección de Tarifas

:::danger[Descripción del Error]
En la sección de tarifas de la aplicación, actualmente se permite ingresar un precio negativo. Esto no es deseable ya que no tiene sentido tener precios negativos en este contexto.
:::

:::tip[Posible Solución]
Se recomienda modificar la lógica de entrada de datos en la sección de tarifas para permitir únicamente números positivos. Esto garantizará la coherencia y la precisión en los cálculos relacionados con tarifas y pagos.
:::

:::warning[Por qué ocurre]
La presencia de precios negativos puede causar confusiones y errores en los cálculos de tarifas y pagos dentro de la aplicación. Además, puede llevar a resultados inesperados y no representativos de la realidad.
:::

# Imagen de la Página Actual del Error:
![imagen](./img/d4.png)

