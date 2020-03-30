# @siimple/neutrine changelog

## v0.1.5 (2020-03-30)

#### :rocket: New features

- Added `apperance` property to `GroupIcon` component for displaying the icon inside a square or a circle.

#### :bug: Bug fixes

- Fixed bug displaying icons in group element.


## v0.1.4 (2020-03-08)

#### :rocket: New features
- Added `PlaceholderGroup` component.


## v0.1.3 (2020-03-06)

#### :bug: Bug fixes
- Fixed bug displaying icons in toolbar component.
- Fixed bug displaying icon in item component.


## v0.1.2 (2020-03-05)

#### :boom: Breaking changes
- Switched to new sass modules system using the `@use` rule (https://sass-lang.com/blog/the-module-system-is-launched).
- Removed `FooterParagraph`, `SideHeader`, `SideBody` and `Panel` components.

#### :rocket: New features
- Added `Placeholder` component for displaying.


## v0.1.1 (2020-01-11)

#### :rocket: New features
- Added `Loading` widget to display a loading bar. Added `createLoader` alias to automatically mount a `Loading` component.
- Added `Centered` component to certically and horizontally center content.
- Added `Item` component to render repeatable blocks.


## v0.1.0 (2020-01-10)

#### :boom: Breaking changes
- Redesigned `Toolbar` and `Appbar` components.
- Redesigned `Card` core component

#### :rocket: New features
- Added `Confirm` widget to display a confirmation prompt. Added `createConfirmer` to mount a `Confirm` component that can be used outside the application.


## v0.0.6 (2019-11-27)

#### :rocket: New features
- Added vertical stepper components: `Stepper` and `StepperItem`.

#### :bug: Bug fixes
- Fixed missing `padding-left` and `padding-right` attributes in `Appbar` component.


## v0.0.5 (2019-11-01)

#### :bug: Bug fixes

- Fixed minor typo in `Side` component.
- Fixed `classNames` helper.


## v0.0.4 (2019-10-03)

#### :rocket: New features
- Added `createToaster` method to create a new toaster component.
- Introduced `Toast.show` method that replaces the deprecated `Toast.display` methods.

#### :bug: Bug fixes
- Fixed bug displaying item text in `ToolbarItem` component.

#### :warning: Deprecations
- Removed `Spinner` size prop.
- Deprecated `Toast.display`, `Toast.displayError`, `Toast.displayWarning` and `Toast.displaySuccess` methods on `Toast` component.


## v0.0.3 (2019-09-18)

#### :hammer: Improvements
- Renamed `AppToolbar` component as `Toolbar`.
- Renamed `AppBar` component as `AppBar`.
- Merge `AppLogo` component in `Toolbar` and `Appbar`.

#### :warning: Deprecations
- Deprecated app components: `AppMain`, `AppToolbar`, `AppBar` and `AppLogo`.


## v0.0.2 (2019-09-18)

#### :rocket: New features
- Added app components: `AppMain`, `AppToolbar`, `AppBar` and `AppLogo`.

#### :hammer: Improvements
- Allow multiple selectable columns in `DataTable` component.
- Moved selection API in `DataTable` component to columns.
- Allow top and bottom positions in `Side` component.

#### :bug: Bug fixes 
- Fixed bug in `DataTableRender` component.

#### :warning: Deprecations
- Removed `Dashboard` components.


## v0.0.1 (2019-09-07)

- First release :tada:

