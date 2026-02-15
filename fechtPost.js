async function searchPost(id) {
  try {
    // 1. Construir la URL con Template Literals
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    // 2. Hacer la petición al servidor
    const response = await fetch(url);

    // 3. Lógica de validación: 
    // Si el post no existe (error 404), lanzamos un error manualmente 
    // para que el código salte al bloque 'catch'.
    if (!response.ok) {
      throw new Error("ID no encontrado");
    }

    // 4. Convertir la respuesta a formato JSON (objeto de JS)
    const post = await response.json();

    // 5. Imprimir el título en MAYÚSCULAS como pide el ejercicio
    console.log(post.title.toUpperCase());

  } catch (error) {
    // 6. Si algo falló arriba, mostramos el mensaje solicitado
    console.log("El post no pudo ser hallado");
  }
}

// Ejemplo de uso:
searchPost(1);  // Imprimirá el título en mayúsculas
searchPost(999); // Probablemente imprima "El post no pudo ser hallado"