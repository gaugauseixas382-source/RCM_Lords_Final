
document.addEventListener('DOMContentLoaded', function () {
  // Form validation and success alert
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // simple validation
      const required = ['nome','apelido','data_nasc','email','telefone','mensagem'];
      let ok = true;
      required.forEach(function(id){
        const el = document.getElementById(id);
        if(!el || !el.value.trim()){
          ok = false;
          el && el.classList.add('is-invalid');
        } else {
          el && el.classList.remove('is-invalid');
        }
      });
      if(!ok){
        // show small shake
        form.classList.add('shake');
        setTimeout(()=>form.classList.remove('shake'),300);
        return;
      }
      // show bootstrap alert success
      const alertHtml = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
                        '<strong>Obrigado!</strong> A tua mensagem foi enviada com sucesso.' +
                        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                        '</div>';
      const container = document.getElementById('alertContainer');
      if(container) container.innerHTML = alertHtml;
      form.reset();
    });
  }
});
