# js-mediator-test

## Install

`npm i`

## Start

`npm start`

Should print a log of actions without errors.

## TODO
- introduce mediator's factory DONE
- extract fakes: customers, payments, stats DONE
- add tests
- check events without subscribers, log warn
- all 'inits' should be run before first 'run'
- use '.lib/*' path DONE
- subscribe to global 'error' event
- add module loading logging DONE
- convert explicit events to function calls?

## Info

- debugging events: console.log(mediator) will show events and options
- navigate through events with global text search
- possible bugs:
    - forgot to bootstrap
    - forgot to subscribe
    - forgot to run
    - module string names FIXED
    - events' names mismatch
