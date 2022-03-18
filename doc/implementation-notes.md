_Geometric Optics: Basics_ is a simplified version of the _Geometric Optics_ simulation, and shares the same implementation.  Please see [geometric-optics/doc/implementation-notes.md](https://github.com/phetsims/geometric-optics/blob/master/doc/implementation-notes.md) for implementation details.

To identify modifications that are specific to _Geometric Optics: Basics_:

* Inspect [geometric-optics-basics-main.ts](https://github.com/phetsims/geometric-optics-basics/blob/master/js/geometric-optics-basics-main.ts).
* Search for occurrences of the `isBasicsVersion` flag in geometric-optics code.

From https://github.com/phetsims/geometric-optics-basics/issues/2, here's a summary of how _Geometric Optics: Basics_ differs from _Geometric Optics_. Unless specifically noted, these differences can be "undone" via PhET-iO.

_Lens_ screen:
* Convex lens only. Possible to add concave lens via PhET-iO.
* No radio buttons to select the optic shape.
* No second optical object.  Hide the "Second Point" checkbox.
* Label 'Object' and 'Image', not 'Object 1' and 'Image 1', unless a second object is added via PhET-iO.

_Mirror_ screen:
* Flat mirror only. NOT possible to add concave and convex mirror via PhET-iO.
* No radio buttons to select the optic shape.
* Change screen icon to a flat mirror
* Since we have only a flat mirror, move origin to the same screen coordinates as the _Lens_ screen.
* No second optical object.  Hide the "Second Point" checkbox.
* Label 'Object' and 'Image', not 'Object 1' and 'Image 1', unless a second object is added via PhET-iO.
* Remove checkboxes for “Focal Points”, "2F Points" on Mirror screen. Not possible to add them.

Global:
* Default `focalLengthControlTypeProperty` to 'direct', and remove "Focal Length control" from the Options dialog.
* Default `add2FPointsCheckboxProperty` to `true`, so that "2F Points" checkbox is visible on _Lens_ screen.
