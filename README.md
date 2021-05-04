# udemy-tailwindcss

Projects from the course [Tailwind CSS do básico ao avançado](https://www.udemy.com/course/tailwind-css-do-basico-ao-avancado-com-projetos/)


## Initialize a project

```
npm install -g live-server
npm init -y
npm install tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init
```

## Build styles.css

Create a file named styles.css in the root folder and put this in the content:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then create the directory src/css and run:

```
npx tailwindcss build styles.css -o src/css/styles.css
```

## Start local server

```
live-server src
```

### Tips

Add the following scripts to package.json:

```json
"scripts": {
  "tw:build": "npx tailwindcss build styles.css -o src/css/styles.css",
  "start": "live-server src"
}
```
