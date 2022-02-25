// Copyright 2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GOGlobalOptions from '../../geometric-optics/js/common/GOGlobalOptions.js';
import GOQueryParameters from '../../geometric-optics/js/common/GOQueryParameters.js';
import GOSim from '../../geometric-optics/js/GOSim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import geometricOpticsBasicsStrings from './geometricOpticsBasicsStrings.js';

// In Geometric Optics: Basics, we want the '2F Points' checkbox to be included in the control panel, and this is
// controlled by the enable2F query parameter. If the enable2F query parameter was not in the URL, set it to true.
// This must be done in geometric-optics-basics-main.ts so that it only affects this sim.
if ( !QueryStringMachine.containsKey( 'enable2F' ) ) {
  GOQueryParameters.enable2F = true;
}

simLauncher.launch( () => {

  // In Geometric Optics: Basis, we want to use the 'direct' method of setting focal length. This puts a Focal Length
  // control in the control panel, instead of Radius of Curvature and Index of Refraction controls. While the full
  // version of the sim includes controls to change the model in the Options dialog, those controls will be omitted
  // in this sim. So we ignore the focalLengthControl query parameter, and set this Property directly. Note that
  // changing this Property must be done inside the callback to simLauncher.launch, after PhET-iO has been initialized.
  GOGlobalOptions.focalLengthControlTypeProperty.value = 'direct';

  const sim = new GOSim( geometricOpticsBasicsStrings[ 'geometric-optics-basics' ].title, {
    isBasicsVersion: true
  } );
  sim.start();
} );