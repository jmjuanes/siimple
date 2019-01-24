## v3.3.0 (January 24, 2019)

### New features

- Added `siimple-table--fixed` modifier to table component to automatically divide equally the width of the columns across the table.
- Added table column modifier to display a sorting indicator in the table header.
- Added big button modifier.
- Added `siimple-btn-group` class to wrap a collection of buttons.
- Added `siimple-paragraph--lead` modifier to highlight a paragraph.
- Added miscellanea helpers.

### Changes and improvements

- Changed default `font-family` to Roboto.
- Changed default `font-size` to `16px`.
- Changed default `line-height` to `24px`.
- Changed default background color of the input, select and textarea form elements.

### Bug fixes

- Fixed bug on switch element: only changes to checked/unchecked state if user clicks on the circle button, not in the background of the switch.
- Fixed bug in grid row: removed extra `10px` padding added at the left side and the right side of the grid.


## v3.2.1 (January 9, 2019)

### Improvements

- Added `!important` flag to all colors and spacing helpers.
- Changed `siimple-navbar-item` padding attribute to `10px` instead of `15px`.

### Bug fixes

- Fixed missing `px` in `padding-left` attribute of `siimple-navbar-item` (thanks to @VictorVSa in #53). 


## v3.2.0 (December 15, 2018)

### New features

- Added new experimental components: `modal`, `steps` and `progress`.
- Added spacing helpers.
- Added `siimple-alert-close` class-name to display a close icon in the alert component.
- Added new footer elements (`siimple-footer-title`, `siimple-footer-subtitle`, `siimple-footer-link`, `siimple-footer-group` and `siimple-footer-rule`).
- Added table sizes (thanks to @yoshikawaa in #51).
- Added checkbox, switch and radio color modifier (thanks to @0x92 in #36).
- Added small button modifier (thanks to @HDVinnie in #41).

### Changes and improvements

- Redesigned table component.
- Updated some navbar styles.
- Disabled textarea horizontal resize.
- Deprecate `siimple-close` element.

### Bug fixes

- Fixed some typos in README and documentation.


## v3.1.1 (August 4, 2018)

### Improvements

- Import **semi-bold** style of [Montserrat font](https://fonts.google.com/specimen/Montserrat).
- Changed **headings**  `font-weight` to **semi-bold**.
- Changed **success** base color.
- Changed **blockquote** `padding-top` and `padding-bottom` values.
- Now we are using our custom [Jekyll theme](https://github.com/siimple/theme) for the documentation.

### Bug fixes

- Fixed bug when **list-item** is a link.
- Fixed **input** size too wide when the `siimple-input--fluid` modifier is used (thanks to @andreashouben in #45).
- Fixed typo in **README** (thanks to @jdriviere in #46).


## v3.1.0 (June 24, 2018)

### New features

- Added `card` and `list` components.
- Added `rule` element (thanks to @BerkhanBerkdemir on #33 )
- Added color, display, float, sizing and text helpers.
- Introduced a new and simplified colors API. Moved old colors to legacy colors.
- Added the `extra-small` size to the layout size modifiers and to the grid responsive breakpoints. 
- Added modifier to hide a grid column at specific breakpoint.
- Added fluid button style.
- Added rounded tag style.
- Added radio button for forms.
- Added navbar subtitle style.
- Added alert title style.
- Added menu selected item style.

### Changes

- Renamed `siimple-form-field` class to `siimple-field`.
- Changed the size values of the layout size modifiers.
- Changed the grid responsive breakpoints values.
- Renamed `siimple-tabs-tab` class to `siimple-tabs-item`.
- Renamed `siimple-breadcrumb-crumb` class to `siimple-breadcrumb-item`.
- Renamed `siimple-navbar-link` class to `siimple-navbar-item`.

### Internal changes

- Added a new group called `components`. Moved `alert`, `breadcrumb`, `menu`, `table` and `tabs` to the new group.

### Bug fixes

- Fixed bug with the grid breakpoints format.
- Fixed bug with the switch element in some browsers (thanks to @alextjd and @chaitanyanettem on #23 ).

