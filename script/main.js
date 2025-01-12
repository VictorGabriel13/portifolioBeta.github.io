function shareButton() {
    const shareButton = document.getElementById('shareButton');

    shareButton.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Confira meu GitHub!',
            text: 'Dá uma olhada nos meus projetos no GitHub!',
            url: 'https://github.com/VictorGabriel13',
          });
          console.log('Conteúdo compartilhado com sucesso!');
        } catch (err) {
          console.error('Erro ao compartilhar:', err);
        }
      } else {
        alert('Recurso de compartilhamento não suportado neste navegador.');
      }
    });
  }

  // Chama a função para ativar o evento de clique
  shareButton();