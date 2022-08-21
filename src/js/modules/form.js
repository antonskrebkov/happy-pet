document.addEventListener('DOMContentLoaded', function () { // проверка на то, загружен ли контент


  const form = document.querySelector('.form-questions');

  if (form) {

    form.addEventListener('submit', formSend);


    let validationPopup = document.querySelector('.validation-popup');
    let validationPopupBody = document.querySelector('.validation-popup__body');
    let validationPopupClose = document.querySelector('.validation-popup__btn');

    validationPopupClose.addEventListener('click', function () {
      validationPopup.classList.remove('active');
      document.documentElement.classList.remove('lock');
      setTimeout(() => {
        validationPopupBody.innerHTML = '';
      }, 300);
    });

    validationPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.validation-popup__wrapper')) {
        validationPopup.classList.remove('active');
        document.documentElement.classList.remove('lock');
        setTimeout(() => {
          validationPopupBody.innerHTML = '';
        }, 300);
      }
    });

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);

      if (error === 0) {
        let loader = document.querySelector('.loader')

        document.documentElement.classList.add('lock');
        loader.classList.add('sending');
        setTimeout(() => {
          document.documentElement.classList.remove('lock');
          loader.classList.remove('sending');
          form.reset()
        }, 3000);
        // let response = await fetch('sendmail.php', {
        //   method: 'POST',
        //   body: formData
        // });
        // if (response.ok) {
        //   let result = await response.json();
        //   alert(result.message);
        //   form.reset()
        //   document.documentElement.classList.remove('lock');
        //   loader.classList.remove('sending');
        // } else {
        //   alert("Ошибка!");
        //   document.documentElement.classList.remove('lock');
        //   loader.classList.remove('sending');
        // }

      } else {
        validationPopup.classList.add('active');
        document.documentElement.classList.add('lock');
      }
    }

    function formValidate(form) {
      let error = 0;
      let formRequired = document.querySelectorAll('.required');

      for (let index = 0; index < formRequired.length; index++) {
        const input = formRequired[index];

        input.addEventListener('change', function (e) {
          e.target.parentElement.classList.remove('error');
          e.target.classList.remove('error');
        })

        formRemoveError(input);

        if (input.classList.contains('email')) {
          if (emailTest(input)) {
            formAddError(input);
            validationPopupBody.insertAdjacentHTML(
              "beforeend",
              `<p>Проверьте правильность написания E-mail</p>`
            );
            error++;
          }
        } else if (input.classList.contains('phone')) {
          if (phoneTest(input)) {
            formAddError(input);
            validationPopupBody.insertAdjacentHTML(
              "beforeend",
              `<p>Неверный формат номера телефона</p>`
            );
            error++;
          }
        } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
          formAddError(input);
          let paragraphs = validationPopupBody.querySelectorAll('p.checkbox');
          if (paragraphs.length == 0) {
            validationPopupBody.insertAdjacentHTML(
              "beforeend",
              `<p class="checkbox">Необходимо принять все условия</p>`
            );
          }
          error++;
        } else {
          if (input.value.trim() === '') {
            formAddError(input);
            validationPopupBody.insertAdjacentHTML(
              "beforeend",
              `<p>Поля со * являются обязательными к заполнению</p>`
            );
            error++;
          }
        }

      }
      return error;
    }

    function formAddError(input) {
      input.parentElement.classList.add('error');
      input.classList.add('error');
    }
    function formRemoveError(input) {
      input.parentElement.classList.remove('error');
      input.classList.remove('error');
    }
    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value.trim());
    }
    function phoneTest(input) {
      return !/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(input.value.trim());
    }
  }
})