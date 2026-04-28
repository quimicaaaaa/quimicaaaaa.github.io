onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  // Envelope
  const wrapper = document.getElementById('envelope-wrapper');
  const envelope = document.getElementById('envelope');

  wrapper.addEventListener('click', () => {
    envelope.classList.toggle('open');
    wrapper.classList.toggle('opened');
    const hint = document.getElementById('click-hint');
    if (envelope.classList.contains('open')) {
      hint.textContent = 'clique para fechar 💜';
      hint.style.display = 'block';
    } else {
      hint.textContent = 'clique para abrir 💌';
    }
  });