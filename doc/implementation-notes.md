_Geometric Optics: Basics_ is a simplified version of the _Geometric Optics_ simulation, and shares the same implementation.  Please see [geometric-optics/doc/implementation-notes.md](https://github.com/phetsims/geometric-optics/blob/master/doc/implementation-notes.md) for implementation details.

To identify modifications that are specific to _Geometric Optics: Basics_:

* Inspect [geometric-optics-basics-main.ts](https://github.com/phetsims/geometric-optics-basics/blob/master/js/geometric-optics-basics-main.ts).
* Search for occurrences of the `isBasicsVersion` flag in geometric-optics code.

From https://github.com/phetsims/geometric-optics-basics/issues/2, here's a summary of how _Geometric Optics: Basics_ differs from _Geometric Optics_. Unless specifically noted, these differences can be "undone" via PhET-iO.

_Lens_ screen:
* Convex lens only. It is possible to select concave lens via PhET-iO, or via the UI if radio buttons are made visible via PhET-iO.
* Radio buttons to select the optic shape are hidden. It is possible to make them visible via PhET-iO.
* "Second Point" checkbox in the control panel is hidden.  It is possible to make it visible via PhET-iO.
* Label 'Object' and 'Image' (not 'Object 1' and 'Image 1') unless a second point or second object is visible.

_Mirror_ screen:
* Flat mirror only. It is NOT possible to add concave and convex mirror via PhET-iO.
* Since there is only one mirror shape, hide the radio button. It is possible to make it visible via PhET-iO.
* Change screen icon to a flat mirror.
* Since we have only a flat mirror, move the mirror to the same screen coordinates as the lens.
* "Second Point" checkbox in the control panel is hidden.  It is possible to make it visible via PhET-iO. 
* Label 'Object' and 'Image' (not 'Object 1' and 'Image 1') unless a second point or second object is visible.
* Remove checkboxes for “Focal Points” and "2F Points". It is NOT possible to add them via PhET-iO.

Global:
* Default `focalLengthControlTypeProperty` to 'direct', and hide "Focal Length control" in the Options dialog. It is possible to make the control visible via PhET-iO. 
* Default `add2FPointsCheckboxProperty` to `true`, so that "2F Points" checkbox is visible on _Lens_ screen.
