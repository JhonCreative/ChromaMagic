function changeColor() {
   const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a8d1'];
   const randomColor = colors[Math.floor(Math.random() * colors.length)];
   document.body.style.backgroundColor = randomColor;
   adjustTextColor(randomColor);
}

function applyHexColor() {
   const hexColor = document.getElementById('colorInput').value;
   if (/^#[0-9A-F]{6}$/i.test(hexColor)) {
       document.body.style.backgroundColor = hexColor;
       adjustTextColor(hexColor);
   } else {
       alert('Por favor, introduce un código hexadecimal válido.');
   }
}

function adjustTextColor(backgroundColor) {
   // Convert hex to RGB
   const r = parseInt(backgroundColor.slice(1, 3), 16);
   const g = parseInt(backgroundColor.slice(3, 5), 16);
   const b = parseInt(backgroundColor.slice(5, 7), 16);

   // Calculate luminance
   const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

   // Set text color based on luminance
   const textColor = luminance < 128 ? '#ffffff' : '#000000';
   document.getElementById('welcomeMessage').style.color = textColor;
}

// Ocultar la pantalla de bienvenida después de 5 segundos
setTimeout(() => {
   document.getElementById('welcomeScreen').style.display = 'none';
   document.getElementById('mainContent').classList.remove('hidden');
}, 5000);
