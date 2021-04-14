
  function error(){
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
      });
  } 

  function mensaje(texto){
    Swal.fire(texto);
  }
