const form = document.getElementById('contact-form');
const submitButton = document.getElementById('submit');
const notification = document.getElementById('notification');
const notificationError = document.getElementById('notification-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Проверка ввода данных
if (!name || !email || !message) {
    notificationError.classList.remove('hidden');
    setTimeout(() => {
      notificationError.classList.add('hidden');
    }, 3000);
    return;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    notificationError.classList.remove('hidden');
    setTimeout(() => {
      notificationError.classList.add('hidden');
    }, 3000);
    return;
  }

  // Отправка сообщения на email
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://example.com/send-email', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(`name=${name}&email=${email}&message=${message}`);

  // Показываем оповещение
  notification.classList.remove('hidden');
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000);
form.reset(); // This will clear the form fields
});
 // Очистка формы после успешной отправки





 window.onload = () => {
  form.reset(); // This will clear the form fields when the page is reloaded

  // Ensure the page scrolls to the top (use setTimeout to delay for a moment)
  setTimeout(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, 0);
};

// Скрытие оповещения при нажатии на background
document.addEventListener('click', (event) => {
  if (event.target !== notification && event.target !== submitButton) {
    notification.classList.add('hidden');
    notificationError.classList.add('hidden');
  }
});
