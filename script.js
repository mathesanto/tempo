const sonsAtivos = {};

function tocarSom(nomeSom) {
  if (sonsAtivos[nomeSom]) {
    sonsAtivos[nomeSom].pause();
    sonsAtivos[nomeSom].currentTime = 0;
    delete sonsAtivos[nomeSom];
    atualizarBotao(nomeSom, false);
  } else {
    const audio = new Audio(`sons/${nomeSom}.mp3`);
    audio.loop = true;
    audio.play();
    sonsAtivos[nomeSom] = audio;
    atualizarBotao(nomeSom, true);
  }
}

function atualizarBotao(nomeSom, ativo) {
  const botoes = document.querySelectorAll('button');
  botoes.forEach(btn => {
    if (btn.getAttribute('onclick')?.includes(nomeSom)) {
      if (ativo) btn.classList.add('ativo');
      else btn.classList.remove('ativo');
    }
  });
}
