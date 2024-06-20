document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var form = event.target;
  var data = new FormData(form);
  var params = new URLSearchParams(data);

  var loadingElement = form.querySelector('.loading');
  var sentMessageElement = form.querySelector('.sent-message');
  var errorMessageElement = form.querySelector('.error-message');

  loadingElement.classList.add('d-block');
  errorMessageElement.classList.remove('d-block');
  sentMessageElement.classList.remove('d-block');

  fetch('https://script.google.com/macros/s/AKfycbySQ4LMK5At4IyN348hDGT1dzYLBq6yEZyxUkjzZnNSn9y61gpUWEshUsrA5uXTVqio/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params.toString()
  })
    .then(response => {
      loadingElement.classList.remove('d-block');
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Gagal mengirim email.');
      }
    })
    .then(responseText => {
      sentMessageElement.innerHTML = responseText;
      sentMessageElement.classList.add('d-block');
      errorMessageElement.classList.remove('d-block');

    })
    .catch(error => {
      errorMessageElement.innerHTML = error.message;
      errorMessageElement.classList.add('d-block');
      sentMessageElement.classList.remove('d-block');
    });
});