I used the Polymer starter kit to start the project off.

These are the files I worked on:

* backend/generate-data,js - a nodejs back end that generates a bunch of races with random names, start times etc
* my-app.html - The 'page' component. This component create three different race lists (Horses, Harnesses and
Greyhounds) and feeds each a filtered array. Each array is based on the data returned from the back end
* race-list-data.html - Encapulates the ajax call. When loaded the component will fire off an ajax call straight away.
Whenever an ajax call completes the component creates a two minute delay before reloading the list. The my-app
component binds to race-list-data's data property to whenever that property is updated with new data from the server,
my-app automatically filters the data into groups.
* race-list.html - Component that further filters the race list to remove any races that have already started/closed.
Every second race-list will update the 'currentDate' properties which in turn updates the filtered list, which in turn
removes any race that has already closed.
* race-card.html - Displays the race information along with the count down timer. The timer updates whenever
'currentDate' is updated by race-list.

The whole idea is to use data binding so that when data is updated, the UI takes action and changes itself to match the
new data.


### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli

##### Initialize project from template

    mkdir my-app
    cd my-app
    polymer init starter-kit

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open

### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    polymer build

### Preview the build

This command serves the minified version of the app at `http://localhost:8080`
in an unbundled state, as it would be served by a push-compatible server:

    polymer serve build/unbundled

This command serves the minified version of the app at `http://localhost:8080`
generated using fragment bundling:

    polymer serve build/bundled

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    polymer test

### Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections of the
application. Each new demand-loaded fragment should be added to the list of
`fragments` in the included `polymer.json` file. This will ensure those
components and their dependencies are added to the list of pre-cached components
and will be included in the `bundled` build.
