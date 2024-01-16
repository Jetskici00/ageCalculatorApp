// Получаем ссылки на элементы DOM
const userInput = document.getElementById("date");
const result = document.getElementById("result");

// Функция для вычисления возраста
function calculateAge() {
  // Получаем дату рождения из введенных пользователем данных
  const birthDate = new Date(userInput.value);
  // Получаем текущую дату
  const today = new Date();

  // Вычисляем разницу во времени между текущей датой и днем рождения в различных единицах измерения
  const ageInMilliseconds = today - birthDate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;

  // Рассчитываем количество лет, месяцев и дней
  const years = Math.floor(ageInDays / 365);
  const months = Math.floor((ageInDays % 365) / 30);
  const days = Math.floor(ageInDays % 30);

  // Обновляем содержимое элемента результата
  result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days old`;
}

// Устанавливаем максимальное значение для ввода (текущая дата)
userInput.max = new Date().toISOString().split("T")[0];

// Добавляем обработчик события input для элемента ввода
userInput.addEventListener("input", calculateAge);

// Функция для получения количества дней в месяце
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
