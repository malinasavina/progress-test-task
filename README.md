# Progress Test Task

## Описание

**Progress Test Task** — это небольшое веб-приложение, реализующее круговой
прогресс-бар с элементами управления. Проект написан на **HTML, SCSS и
JavaScript**, сборка осуществляется с помощью **Webpack** с использованием
**Babel** и **ESLint**.

## Функциональность

- **Value** – текстовый ввод числа от 0 до 100, который изменяет процент
  прогресса.
- **Animate** – логический переключатель, включающий бесконечную анимацию
  прогресса.
- **Hide** – скрывает прогресс-бар со страницы.

## Демо

🔗 [Онлайн-версия](https://malinasavina.github.io/progress-test-task/)

## Структура проекта

```
Корневая папка/
│── src/              # Исходные файлы
│   ├── assets/       # Статические ресурсы
│   │   ├── fonts/
│   ├── scripts/      # JavaScript-код
│   │   ├── components/
│   │   │   ├── Progress.js  # Логика прогресс-бара
│   │   ├── main.js   # Точка входа
│   ├── styles/       # SCSS-стили
│   │   ├── base/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── main.scss # Основной файл стилей
│   ├── favicon.ico   # Фавиконка
│   ├── index.html    # Главный HTML-файл
│── .editorconfig     # Конфигурация редактора
│── .gitignore        # Файлы, игнорируемые Git
│── .nvmrc            # Версия Node.js
│── babel.config.json # Конфигурация Babel
│── eslint.config.json # Конфигурация ESLint
│── package.json      # Зависимости проекта
│── package-lock.json # Фиксация версий зависимостей
│── postcss.config.json # Конфигурация PostCSS
│── webpack.config.js # Конфигурация Webpack
│── README.md         # Документация проекта
```

## Установка и запуск

1. **Установка зависимостей**
   ```sh
   npm install
   ```

2. **Запуск в режиме разработки**
   ```sh
   npm run start
   ```

3. **Сборка проекта**
   ```sh
   npm run build
   ```

## Использование класса Progress

Для создания прогресс-бара необходимо создать объект класса `Progress`, передав в него HTML-элемент в качестве
контейнера:

```js
const progressContainer = document.querySelector('.js-progress-bar');
const progress = new Progress(progressContainer);
```

### Методы класса Progress

- **`setProgressState(state)`** – устанавливает состояние прогресс-бара. Доступные состояния:
  - `'normal'` – обычное отображение
  - `'animated'` – анимация бесконечного прогресса
  - `'hidden'` – скрытие прогресс-бара

  ```js
  progress.setProgressState('animated');
  ```

- **`setProgressValue(value)`** – устанавливает степень прогресса. Принимает значения от `0` до `100`:

  ```js
  progress.setProgressValue(50);
  ```

- **`getProgressValue()`** – возвращает текущее значение прогресса от `0` до `100`:

  ```js
  console.log(progress.getProgressValue()); // 50
  ```

## Технологии

- HTML,
- SCSS,
- JavaScript
- Webpack, Babel, ESLint

## Автор

👩‍💻 **Алина Савина**
🔗 [GitHub](https://github.com/malinasavina)
