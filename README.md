# js-mediator-test

## Install

`npm i`

## Start

`npm start`

Should print a log of actions without errors.

## TODO
- introduce mediator's factory DONE
- extract fakes: customers, payments, stats DONE
- all 'inits' should be run before first 'run'
- use '.lib/*' path
- subscribe to global 'error' event

## Info

- debugging events: console.log(mediator) will show events and options
- navigate through events with global text search
- possible bugs:
    - forgot to bootstrap
    - forgot to subscribe
    - module string names
    - events' names mismatch