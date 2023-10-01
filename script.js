document.getElementById('formRegistro').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const formDataJson = {};
  
    formData.forEach((value, key) => {
      formDataJson[key] = value;
    });
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataJson)
    };
  
    fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Información enviada exitosamente.');
      })
      .catch(error => console.error('Error al enviar la información:', error));
  });
  