function setMood(mood) {
  const body = document.body;
  const message = document.getElementById('message');

  body.className = ''; // Reset classes
  body.classList.add(mood);

  switch (mood) {
    case 'happy':
      message.textContent = "¡Qué alegría! ¡Comparte tu felicidad!";
      break;
    case 'sad':
      message.textContent = "Está bien sentirse triste. Respira y sigue adelante 💙";
      break;
    case 'calm':
      message.textContent = "Paz interior... disfruta el momento ✨";
      break;
    case 'angry':
      message.textContent = "Respira profundo. Tu calma es más poderosa que tu enojo 💢";
      break;
  }
}
