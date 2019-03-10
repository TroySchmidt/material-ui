# Roadmap

<p class="description">The roadmap is a living document, and it is likely that priorities will change, but the list below should give some indication of our plans for the next major release, and for the future.</p>

<<<<<<< HEAD
:warning: New features based on `v0.18.x` have low priority and will most likely not be reviewed nor merged. We want to focus on bug fixes.
||||||| merged common ancestors
### 0.15.0
=======
Our priorities:
1. **Material Design**. The Google Design team has recently released a new iteration on the Material Design specification which is focused on *themability*. This is great news! We will do our best to keep up to date. It also validates that heavily investing in customizability for v1 was a good call. We will continue our efforts in this area.
1. **More utils**. We want to work on new utility components: Spacing, Display, Color, etc.
1. **Performance**. We can’t optimize something we can’t measure, and we don’t currently have a CI performance benchmark, so we will need to build one and start investigating bottlenecks.
1. **Learning materials**. The quality of the documentation is equally as important as the quality of the implementation, and while the reference documentation is comprehensive, we could author a learning tutorial like Next.js has done, or an egghead.io course.
1. **Themes**. We want to provide common layouts example to make getting started even easier. We also plan on adding more premium themes.
1. **Documentation**. We want to translate the documentation into Chinese and other languages. Any help is welcomed!
1. **Bundle size**. The library needs to be as small as possible, so we need to work on solutions to further reduce the bundle size, for example, supporting Preact or Nerv can help.
1. **Type checking**. We will continue to improve the TypeScript and possibly the Flow coverage of the library.
>>>>>>> 0586264fbf30ad2aec78e5915b687a56b3c7d014

<<<<<<< HEAD
## Version 1 (published on NPM under the next tag)

Version 1 release is going to be huge :sparkles:.
We host a temporary [documentation](https://material-ui-1dab0.firebaseapp.com) for the pre-releases.

Material-UI was started [3 years ago](https://github.com/callemall/material-ui/commit/28b768913b75752ecf9b6bb32766e27c241dbc46).
The ecosystem has evolved a lot since then, we have also learned a lot.
[@nathanmarks](https://github.com/nathanmarks/) started an ambitious task, rebuilding Material-UI from the **ground-up**
taking advantage of this knowledge to address long-standing issues.
Expect various **breaking changes**.

The core team is now helping him in the [v1-beta](https://github.com/callemall/material-ui/tree/v1-beta) branch.
If you are interested in following our progress or if you want to help us reach that goal faster, you can have a look at the following milestones:
- ~~[v1.0.0-beta](https://github.com/callemall/material-ui/milestone/22)~~ - complete!
- [v1.0.0-prerelease](https://github.com/callemall/material-ui/milestone/14)

## Q&A with the v1-beta branch

The `v1-beta` branch has become more mature.
We think that it's a good time to communicate more on this effort.
We have a lot of people opening PRs and getting them closed, this is not a good thing.
This Q&A tries to answer some of your questions.

### Summarizing, what are our main problems with CSS?

The CSS (cascading style sheets) specification emerged in 1994.
At that time, a bunch of others specifications were competing.
It was the cascading concept that made CSS succeed over its competitors, by allowing users to provide their own style-sheet, that will be later combined with browsers and authors style-sheets.
That feature was removed 2 years ago from the most popular browser.
My point is, our needs have evolved quite a bit since then.

Back in the beginning of Material-UI, we had many issues with the first **LESS approach**.
Aside from [the problem with CSS at scale](https://speakerdeck.com/vjeux/react-css-in-js) raised by @vjeux, we had the following ones:
- We had a **dependency** on the LESS build chain with no way to abstract it away.
Users needed to change their theme variables. @gpbl was maintaining a [SASS version]( https://github.com/gpbl/material-ui-sass). (Today, we could be using *[cssnext](http://cssnext.io/)*).
- The theme was computed at **build time** but a Material component must be able to render quite differently depending on his context that can only be known at runtime.
(Tomorrow, CSS variables will help a lot)
- We were shipping a **big monolithic** CSS file.
That's not great for performance (for example it goes against the [PRPL pattern](https://www.polymer-project.org/1.0/toolbox/server) suggested by the Polymer team).
That was also an issue for users wanting to use a single component without paying for all the CSS upfront.
- We used multi-level selectors, making the **override** of styles challenging.

We later came up with an **inline-style approach** solving the majority of our issues.
But:
- We had lost around 25% of the performance :turtle:.
Computing the inline-style at each render with no caching isn't really efficient.
- Some more advanced CSS feature wasn't available, e.g. keyframes, pseudo-elements, pseudo-classes :nail_care:.
- Media queries aren't available on the server. At least [not yet](http://caniuse.com/#feat=client-hints-dpr-width-viewport).
- The debugging was really challenging. Browser dev tools aren't tuned for inline-styles.
- React v15 has changed the method of injecting styles into the DOM meaning, for example, that prefixing all browsers for `display:flex` is no longer possible :boom:.

### Does JSS solve them?

Yes, it does. You can have a look at [this presentation](https://github.com/oliviertassinari/a-journey-toward-better-style) for more details.

## What does it mean to migrate a component? Should we discuss each one of them first?

Migrating a component to the `v1-beta` branch isn't just a style migration.
We think that it's our best opportunity to clear the API and improve the implementation of the components.
@nathanmarks ended up fixing a lot of long standing issues in the process.

Yes, it would much better to discuss an action plan for each of them.
That would save us quite some time following a wrong path.
We should answer the following questions:
- What will the API look like?
- What tradeoffs are we going to make?
- What features will be implemented?

That conversation could start on one of the following [issues](https://github.com/callemall/material-ui/issues?q=is%3Aissue+is%3Aopen+label%3ARefactoring+label%3Anext).

### How do I know if a component still needs to be migrated `v1-beta`?

We have [Github project](https://github.com/callemall/material-ui/projects/1) to **coordinate** the work toward the `v1-beta` release.
You can check the *Component to migrate* column to know the ones needing to be migrated to `v1-beta`.

### How do I start migrating components to the `v1-beta` branch?

Once we agree on the migration plan you're gonna have to get your hands dirty.
That's really up to you. At least, you gonna have to
- clone the `v1-beta` branch
- install the npm dependencies
- play with the documentation site
- write some documentation
- write some tests (unit, integration, visual)

### When do we intend to release `v1-beta`?

We don't have an ETA for the release of the `v1-beta` branch,
however, we are going to try to follow this plan:

1. We completely address the styling issue before moving from *alpha* to [*beta*](https://github.com/callemall/material-ui/milestone/22).
2. We publish our first beta releases.
3. We fix the last API inconsistencies (as we can make breaking changes without having to worry much).
4. We merge the beta branch into master
5. We publish our first pre-releases, if all goes well, we move to the next step.
6. We publish v1 :tada:

At that point, some features and components from the v0.x will be missing in the v1.
So, what about them?
- First, both versions can be used at the same time, people can progressively migrate, one component at the time.
- Then, **with the help of the community** and over time, we will support more and more components.
- We would rather **support few use-cases very well and allow people to build on top of it** than many poorly.

### Have we ever considered using the best libraries for each piece of functionality and provide only a wrapper for the UI?

We have, it really depends on the problem we are trying to solve.
For UI related things, providing a wrapper for the functionality is often the wrong approach.
We think that it should be done the other way around, i.e. providing a low-level API that can be combined with third-party libraries, e.g.:
 - [react-virtualized](https://github.com/bvaughn/react-virtualized)
 - [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views)
 - [react-dnd](https://github.com/gaearon/react-dnd)

On the other hand, using a smart date library for the DatePicker / TimePicker would probably be much better as date management is tricky and not a core business.

## Future

- [[#2863](https://github.com/callemall/material-ui/issues/2863)] Add missing components, and missing features from current ones.
- [[#593](https://github.com/callemall/material-ui/issues/593)] Full support for react-native.
- Add example on how to use [react-virtualized](https://github.com/bvaughn/react-virtualized) / [react-list](https://github.com/orgsync/react-list) for lists, menu items and table.
- [[#2493](https://github.com/callemall/material-ui/pull/2493)] Use higher order components across the library to abstract themes passed down from context.
- [[#2784](https://github.com/callemall/material-ui/issues/2784)] Stateless components.
- [[#1673](https://github.com/callemall/material-ui/issues/1673)] I18n for the doc-site.
||||||| merged common ancestors
#### Breaking Changes

- Remove deprecated usage of JSON to generate children across the components.
- [[#3108](https://github.com/callemall/material-ui/pull/3108)] Remove deprecated components, methods & props.
- [[#2957](https://github.com/callemall/material-ui/issues/2957)] Standardize callback signatures.
- [[#2980](https://github.com/callemall/material-ui/issues/2980)] [[#1839](https://github.com/callemall/material-ui/issues/1839)] Standardise Datepicker for ISO 8601.

#### Deprecations

- [[#2880](https://github.com/callemall/material-ui/issues/2880)] Deprecate valueLink.
- [[#1793](https://github.com/callemall/material-ui/issues/1793)][[#2679](https://github.com/callemall/material-ui/issues/2679)] PascalCase component names and reorganise directory structure. Deprecate old names.
- [[#2697](https://github.com/callemall/material-ui/issues/2697)] Rename LeftNav and deprecate old name.

#### Core

- [[#2903](https://github.com/callemall/material-ui/issues/2903)] Enforce eslint rules.
- [[#2493](https://github.com/callemall/material-ui/pull/2493)] Use higher order components across the library to abstract themes passed down from context.
- [[#2627](https://github.com/callemall/material-ui/issues/2627)] Improve overall theme handling.
- [[#2573](https://github.com/callemall/material-ui/issues/2573)] Remove the usage of isMounted().
- [[#2437](https://github.com/callemall/material-ui/issues/2437)] Remove mixins.

#### Major features

- [[#1321](https://github.com/callemall/material-ui/pull/1321#issuecomment-174108805)] Composable AppBar component.
- [[#3132](https://github.com/callemall/material-ui/pull/3132)] New Stepper component.
- [[#2861](https://github.com/callemall/material-ui/pull/2861)] Scrollable Tabs.
- [[#2979](https://github.com/callemall/material-ui/pull/2979)] New Subheader component.

#### Documentation

- [[#1986](https://github.com/callemall/material-ui/issues/1986)]Documentation versioning.
- Add example on how to use [react-list](https://github.com/orgsync/react-list) for lists, menu items and table.
- [[#2635](https://github.com/callemall/material-ui/pull/2635)] Document the new theme calculation, and it's usage.
- [[#3191](https://github.com/callemall/material-ui/issues/3191)] Improve component property documentation.

### Future

#### Deprecations

- Deprecate & eventually remove all imperative methods.

#### Core

- Make extensive use of `popover` and `render-to-layer`.
- [[#458](https://github.com/callemall/material-ui/issues/458)] Migrate components to [ES6 Classes](https://github.com/callemall/material-ui/tree/es6-classes).
- [[#2784](https://github.com/callemall/material-ui/issues/2784)] Stateless components.
- Improve performance with `shouldComponentUpdate` and removed inefficient computations.
- Standardize API naming and available `prop` convention across the library.
- Better accessibility support.
- Better keyboard navigation support.

#### Features

- [[#2416](https://github.com/callemall/material-ui/issues/2416)] TextField as a composable component for various field types.
- Responsive components to better support MD spec for mobile component sizes, and in preparation for react-native support.
- [[#2863](https://github.com/callemall/material-ui/issues/2863)] Add missing components, and missing features from current ones.
- [[#2251](https://github.com/callemall/material-ui/issues/2251)] Full featured Table.
- Full Featured Tabs (close, [disable](https://github.com/callemall/material-ui/issues/1613), move, sizing, [scrolling](https://github.com/callemall/material-ui/pull/2861)).
- Full support for react-native
- [[#1673](https://github.com/callemall/material-ui/issues/1673)] I18n for the doc-site.
=======
You can follow [our milestones](https://github.com/mui-org/material-ui/milestones) for a more detailed overview.
>>>>>>> 0586264fbf30ad2aec78e5915b687a56b3c7d014
