## Code-Help

A web app for users to submit technical or coding questions and for others to jump in with answers.

#### By _**Mick Sexton**_

### Description

Users can submit questions through Code-Help and also answer other users' questions. All questions can be found on the home page. Simply click on the question to learn more or view other people's answers to that question.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd code-help`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


## Code Specs

|Behavior - Plain English|Input|Output|
|---|---|---|
|User sees homepage with a list of question preview tiles.|User clicks on one of the tiles.|User is directed to a details page with more information about that questions, as well as any answers that others have posted.|
|User is on the question details page.|User chooses to submit an answer comment, by clicking on 'submit answer' below the question and notes.|User sees a form pop up with fields for the answer including author and answer's content.|
|User is on the answer form.|User fills out author and answer fields and clicks submit answer.|User is then directed back to the home page.|
|User is on home page again.|User clicks submit a new questions.|User is directed to a form where they can fill out specifics.|
|User sees question form.|User fills out fields for author, question title, and additional notes, and clicks submit.|User is directed back to index page.|

## Known Bugs

_None known at this time._

## Support and contact details

_Please contact Mick Sexton at lacrookedbeat@hotmail.com for any questions, feedback, or concerns._

## Technologies Used

_Technologies used include NPM, Ember, Firebase, Bower, Node.js, Javascript, JQuery, Bootstrap, SCSS, SASS, HTML, and Git_

### License

*This software operates under the MIT license.*

Copyright (c) 2017 **_Mick Sexton_**
