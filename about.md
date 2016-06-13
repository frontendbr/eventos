# About 'Eventos' project

This projects uses Jade, Stylus, Gulp and Browsersync.

Maybe you want to read about them:
- [GulpJS](http://gulpjs.com/)
- [EJS](http://www.embeddedjs.com/)
- [Stylus](http://learnboost.github.io/stylus/)
- [Browsersync](https://www.browsersync.io/)

For grid system uses [Lost](https://github.com/peterramsing/lost) with some help from [Rucksack](http://simplaio.github.io/rucksack/) for animations, reset and a lot of great mixins, [Rupture](https://github.com/jenius/rupture) for responsive utilities. And [Font Magician](https://github.com/jonathantneal/postcss-font-magician/) to get the webfonts.

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

> You won't need to install GulpJS globally, unless you were use `gulp commands` directly.


```sh
# Clone this repository
$ git clone git@github.com:frontendbr/eventos.git
$ cd eventos

# install dependencies
$ npm install

# install gulp globally
$ npm install -g gulp-cli
```

With the commands above, you have everything to start.

### Folders and Files

```console
├── README.md
├── build
│   ├── css
│   │   └── main.css
│   ├── img
│   │   └── eventos.jpg
│   ├── index.html
│   └── js
│       └── main.js
├── gulpfile.babel.js
├── package.json
└── src
    ├── img
    │   └── eventos.jpg
    ├── js
    │   ├── main.js
    ├── styl
    │   ├── _core/*.styl
    │   ├── atoms/*.styl
    │   ├── molecules/*.styl
    │   ├── organisms/*.styl
    │   ├── pages/*.styl
    │   └── main.styl
    └── templates
        └── index.jade
```

Those folders and file will change during the project.

### Code Standarts

This project uses [Standard](https://github.com/feross/standard) and the [.editorconfig](https://github.com/frontendbr/eventos/blob/skeleton/.editorconfig) is defined to have indent_size of **2 spaces** for JS files and **4 spaces** to another files.

This project also uses [Husky](https://github.com/typicode/husky) to prevent commit and push messy and wrong code. Please, don't be stupid, fix all errors before commit and push =D

### Tasks

- `npm start`: The same as `gulp`
- `npm run start:dev`: Starts server to edit JS with Hot Reloading (localhost:8080)
- `npm run build`: The same as `gulp build`
- `npm run deploy`: The same as `gulp deploy`

- `gulp`: run all tasks and initialize watch for changes and a server
- `gulp js`: execute js files
- `gulp jade`: compile jade files
- `gulp css`: compile stylus files
- `gulp images`: compress image files
- `gulp icons`: generate sprite of icons
- `gulp browser-sync`: inicialize a server
- `gulp watch`: call for watch files
- `gulp pages`: deploy files to gh-pages
- `gulp build`: run all tasks
- `gulp deploy`: run all tasks and deploy files to gh-pages

### Event model

Add event on `src/data/events.json`, in date order (**don't change innerLink**):

```json
{
  "title": "Event title",
  "date": {
    "day": 10,
    "month": "Maio",
    "year": 2016
  },
  "innerLink": "inner.html",
  "link": "http://linkofyourevent.com",
  "price": "R$ 10,00",
  "location": {
    "city": "São Paulo",
    "state": "SP",
    "address": "Rua lalal, 10",
    "locationUrl": "http://googlemapsurl.com"
  },
  "image": "http://someimage.png",
  "shortDescription": "Crazy event"
}
```
