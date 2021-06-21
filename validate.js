


  let forms = document.querySelectorAll('.needs-validation');
  let check = document.querySelector('.js-check');


  function submitClick(){

    let error =  Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('click', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated');
        if(form.checkValidity()){
          window.location.href='./checkout02.html';
        }
      }, false);
    })
  }

  check.addEventListener('click', submitClick);



