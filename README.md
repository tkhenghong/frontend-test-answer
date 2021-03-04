# FrontendTestAnswer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Note: Only one translation is available when the local development server is running.
`ng serve --configuration=my` or `ng serve --configuration=cn`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

##  Generate Translations
`ng extract-i18n` Angular will find the whole project and build i18n translation itself.

You can specify the some commands when building translation such as output directory, format and file name. For example below:

`ng extract-i18n --output-path=src/locale --format=xlf --outFile=messages.cn.xlf`

This will extract an i18n file in xlf called messages.cn.xlf in src/locale/ directory.

WARNING: Be careful to check if there's an existing file in the mentioned directory. If there's a same file in the same directory, it will overwrite that file which make you lose all progress in that file.

Strategy: 
Just `ng extract-i18n', a file with name 'messages.xlf' will come out, rename that file to your name with locale and move that file to the directory.
Find the translations that you need to replace and give the translations. That's it.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

`ng build --prod --localize` to build the project with seperate localization folders (such as en-US, cn, my and others) when building production files.

Also, during `ng build`, you may specify multiple configurations. For example, you may specify to point your app to production and in language of Chinese.
`ng build --configuration=production,cn`

`ng build --prod --configuration=production,cn` <-- This one with production mode.

The output of the files in /dist folder will be your project folder with only Chinese folder 'cn' in it.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Screenshots

![alt text](https://github.com/tkhenghong/frontend-test-answer/blob/master/screenshots/main_post_page.png)

![alt text](https://github.com/tkhenghong/frontend-test-answer/blob/master/screenshots/post_info_page.png)

![alt text](https://github.com/tkhenghong/frontend-test-answer/blob/master/screenshots/search_post_and_comment_page.png)


