// serve para marcar na navbar o link que está ativo durante a navegação 

var pagina = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('nav ul a').forEach(function(link){
    if (link.getAttribute('href') == pagina){
        link.classList.add('ativa');
    }
});
