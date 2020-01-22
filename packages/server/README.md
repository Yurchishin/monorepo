# `@monorepo/server`

> TODO: description

## Usage

```
const server = require('@monorepo/server');

// TODO: DEMONSTRATE API
```
rxjs-add
rxjs-ban-observables
rxjs-ban-operators`
rxjs-deep-operators
rxjs-finnish
rxjs-just
rxjs-no-add
rxjs-no-async-subscribe
rxjs-no-compat
rxjs-no-connectable
rxjs-no-create
rxjs-no-deep-operators
rxjs-no-do
rxjs-no-explicit-generics
rxjs-no-exposed-subjects
rxjs-no-finnish
rxjs-no-ignored-error` | Disallows the calling of `subscribe` without specifying an error handler. | None |
rxjs-no-ignored-notifier` | Disallows observables not composed from the `repeatWhen` or `retryWhen` notifier. | None |
rxjs-no-ignored-observable | Disallows the ignoring of observables returned by functions. | None. |
rxjs-no-ignored-replay-buffer` | Disallows using `ReplaySubject`, `publishReplay` or `shareReplay` without specifying the buffer size. | None |
rxjs-no-ignored-subscribe` | Disallows the calling of subscribe without specifying arguments. | None |
rxjs-no-ignored-subscription` | Disallows ignoring the subscription returned by subscribe. | None |
rxjs-no-index` | Disallows importation from `rxjs/index`, etc. - for the reason, see [this issue](https://github.com/ReactiveX/rxjs/issues/4230). | None |
rxjs-no-internal` | Disallows importation from `rxjs/internal`. | None |
rxjs-no-nested-subscribe` | Disallows the calling of `subscribe` within a `subscribe` callback. | None |
rxjs-no-operator` | Disallows importation from `rxjs/operator`. Useful if you prefer ['pipeable' operators](https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md) - which are located in the `operators` directory. | None |
rxjs-no-patched` | Disallows the calling of patched methods. Methods must be imported and called explicitly - not via `Observable` or `Observable.prototype`. | [See below](#rxjs-no-add) |
rxjs-no-redundant-notify` | Disallows redundant notifications from completed or errored observables. | None |
rxjs-no-sharereplay` | Disallows using the `shareReplay` operator. Prior to version 6.4.0, that operator had [some surprising behaviour](https://github.com/ReactiveX/rxjs/pull/4059). | [See below](#rxjs-no-sharereplay) |
rxjs-no-subclass` | Disallows subclassing RxJS classes. | None |
rxjs-no-subject-unsubscribe` | Disallows calling the `unsubscribe` method of a `Subject` instance. For an explanation of why this can be a problem, see [this](https://stackoverflow.com/a/45112125/6680611) Stack Overflow answer. | None |
rxjs-no-subject-value` | Disallows accessing the `value` property of a `BehaviorSubject` instance. | None |
rxjs-no-tap` | An alias for `rxjs-no-do`. | None |
rxjs-no-unbound-methods` | Disallows the passing of [unbound methods](https://ncjamieson.com/avoiding-switchmap-related-bugs/) as callbacks. | None |
rxjs-no-unsafe-catch` | Disallows unsafe `catch` and `catchError` usage in [NgRx](https://github.com/ngrx/platform) effects and [`redux-observable`](https://github.com/redux-observable/redux-observable) epics. | [See below](#rxjs-no-unsafe-catch) |
rxjs-no-unsafe-first` | Disallows unsafe `first` and `take` usage in [NgRx](https://github.com/ngrx/platform) effects and [`redux-observable`](https://github.com/redux-observable/redux-observable) epics. | None |
rxjs-no-unsafe-scope` | Disallows the use of variables/properties from unsafe/outer scopes in operator callbacks. | [See below](#rxjs-no-unsafe-scope) |
rxjs-no-unsafe-switchmap` | Disallows unsafe `switchMap` usage in [NgRx](https://github.com/ngrx/platform) effects and [`redux-observable`](https://github.com/redux-observable/redux-observable) epics. | [See below](#rxjs-no-unsafe-switchmap) |
rxjs-no-unsafe-takeuntil` | Disallows the application of operators after `takeUntil`. Operators placed after `takeUntil` can effect [subscription leaks](https://ncjamieson.com/avoiding-takeuntil-leaks/). | [See below](#rxjs-no-unsafe-takeuntil) |
rxjs-no-unused-add` | Disallows the importation of patched observables or operators that are not used in the module. | None |
rxjs-no-wholesale` | Disallows the wholesale importation of `rxjs` or `rxjs/Rx`. | None |
rxjs-prefer-angular-async-pipe` | Disallows the calling of `subscribe` within an Angular component. | None |
rxjs-prefer-angular-composition` | Enforces the composition of subscriptions within an Angular component. The rule ensures that subscriptions are composed into a class-property `Subscription` and that the `Subscription` is unsubscribed in `ngOnDestroy`. (For an example, see [the tests](https://github.com/cartant/rxjs-tslint-rules/blob/0f53f9258bfe573c9e8948b1381bd446664cf5f9/test/v6/fixtures/prefer-angular-composition/default/fixture.ts.lint#L4-L17).) | None |
rxjs-prefer-angular-takeuntil` | Enforces the application of the `takeUntil` operator when calling `subscribe` within an Angular component. The rule ensures that `takeUntil` is passed a class-property `Subject` and that the `Subject` is notified in `ngOnDestroy`. (For an example, see [the tests](https://github.com/cartant/rxjs-tslint-rules/blob/0f53f9258bfe573c9e8948b1381bd446664cf5f9/test/v6/fixtures/prefer-angular-takeuntil/default/fixture.ts.lint#L10-L25).) | None |
rxjs-prefer-observer` | Enforces the passing of observers to `subscribe` and `tap`. See [this RxJS issue](https://github.com/ReactiveX/rxjs/issues/4159). | [See below](#rxjs-prefer-observer) |
rxjs-suffix-subjects` | Disalllows subjects that don't end with the specified `suffix` option. | [See below](#rxjs-suffix-subjects) |
rxjs-throw-error` | Enforces the passing of `Error` values to `error` notifications. | None |
