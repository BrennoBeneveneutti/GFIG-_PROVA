 const logoCard = document.getElementById('logoCard');
  const img = logoCard.querySelector('img');

  logoCard.addEventListener('mousemove', (e) => {
      const rect = logoCard.getBoundingClientRect();

      // Calcula a posição do mouse em relação ao centro da imagem
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      // AJUSTADO:
      // Inverti o sinal do rotateY (de -x para x) para mudar a direção lateral
      const rotateX = y / 2;
      const rotateY = x / 2; // Agora gira para o lado oposto

      // Aplica a rotação 3D e um leve zoom
      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  });

  // Reseta a posição original da imagem quando o mouse sai de cima
  logoCard.addEventListener('mouseleave', () => {
      img.style.transform = 'rotateX(1deg) rotateY(0deg) scale(1)';
  });