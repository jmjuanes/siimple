
## v0.1.0 (2020-01-11)

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

### New features
- Added vertical stepper components: `Stepper` and `StepperItem`.

### Bug fixes
- Fixed missing `padding-left` and `padding-right` attributes in `Appbar` component.


## v0.0.5 (2019-11-01)

### Bug fixes

- Fixed minor typo in `Side` component.
- Fixed `classNames` helper.


## v0.0.4 (2019-10-03)

### New features
- Added `createToaster` method to create a new toaster component.
- Introduced `Toast.show` method that replaces the deprecated `Toast.display` methods.

### Bug fixes
- Fixed bug displaying item text in `ToolbarItem` component.

### Deprecations
- Removed `Spinner` size prop.
- Deprecated `Toast.display`, `Toast.displayError`, `Toast.displayWarning` and `Toast.displaySuccess` methods on `Toast` component.


## v0.0.3 (2019-09-18)

### Improvements
- Renamed `AppToolbar` component as `Toolbar`.
- Renamed `AppBar` component as `AppBar`.
- Merge `AppLogo` component in `Toolbar` and `Appbar`.

### Deprecations
- Deprecated app components: `AppMain`, `AppToolbar`, `AppBar` and `AppLogo`.


## v0.0.2 (2019-09-18)

### New features
- Added app components: `AppMain`, `AppToolbar`, `AppBar` and `AppLogo`.

### Improvements
- Allow multiple selectable columns in `DataTable` component.
- Moved selection API in `DataTable` component to columns.
- Allow top and bottom positions in `Side` component.

### Bug fixes 
- Fixed bug in `DataTableRender` component.

### Deprecations
- Removed `Dashboard` components.


## v0.0.1 (2019-09-07)

- First release.

