---
applyTo:
  - "**/*.ts"
---

# Team Coding Standards for PR Review

## Angular Review Rules (PR Review)

| Rule  | Severity | Violation |
|-------|----------|-----------|
| NG-01 | Major | `tap()` used for transformation/logic - use `map()` instead, `tap()` is for side-effects only |
| NG-02 | Major | Direct access to `window`, `document`, `localStorage` without wrapper service |
| NG-03 | Major | Child/presentational components must use `ChangeDetectionStrategy.OnPush` - top-level/container components should use default (requires manual review) |
| NG-04 | Major | Direct `form.controls.x.value` without `get()` + null guards |
| NG-05 | Major | Exposing raw error objects to UI/template |
| NG-06 | Major | `ngOnInit` contains inline logic (assignments, conditionals, subscriptions) - should only call private methods |

---
## Angular Specs (Jest + Spectator) Review Rules (PR Review)

| Rule    | Severity | Violation |
|---------|----------|-----------|
| SPEC-01 | Major | Using `TestBed.configureTestingModule()` when Spectator would suffice |
| SPEC-02 | Major | Mixing Spectator and TestBed in same spec file |
| SPEC-03 | Major | Manual `ngOnInit()` call - Spectator runs it automatically with `detectChanges: true` |
| SPEC-04 | Major | Mock setup after `createComponent()` without `detectChanges: false` - mocks must be configured before first init |
| SPEC-05 | Major | Real service imported alongside its mock in same spec file |
| SPEC-06 | Major | Full UI module imported when mocking individual components would suffice |
| SPEC-07 | Blocker | Using `setTimeout()`, `setInterval()`, `Math.random()` without mocking - use `fakeAsync`/`tick` (note: `jest.useFakeTimers()` will be available with Angular 21/CFW v5) |
| SPEC-08 | Major | Test name doesn't match what assertions actually verify |
| SPEC-09 | Major | Multiple unrelated behaviors asserted in single test - split into separate tests |
| SPEC-10 | Major | Missing test for partial/null data scenarios |
| SPEC-11 | Major | Missing form validation state tests (valid, invalid, pristine, dirty) |
| SPEC-12 | Major | Missing test for `EMPTY`/completion case when using `catchError(() => EMPTY)` |
| SPEC-13 | Major | Logic mixed across AAA phases - assertions in Arrange, actions in Assert, etc. |

---