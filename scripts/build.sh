#преобразование js
babel --presets react,es2015 js\sourse -d js\build
# создание пакета css
browserify js/build/app.js -o bundle.js
#создание пакета css
cat css/*/* css/* | sed 's/..\/..\/images/images/g'
>bundle.css
#готово
date; echo;