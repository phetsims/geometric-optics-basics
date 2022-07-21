// Copyright 2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GOOptions from '../../geometric-optics/js/common/GOOptions.js';
import GOSim from '../../geometric-optics/js/GOSim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import geometricOpticsBasicsStrings from './geometricOpticsBasicsStrings.js';

simLauncher.launch( () => {

  // In Geometric Optics: Basics, we want to respect the focalLengthControl query parameter.
  // But if that query parameter is not provided, then set the associated Property to 'direct'.
  if ( !QueryStringMachine.containsKey( 'focalLengthControl' ) ) {
    GOOptions.focalLengthModelTypeProperty.value = 'direct';
  }

  // In Geometric Optics: Basics, we want to respect the add2FPointsCheckbox query parameter.
  // But if that query parameter is not provided, then set the associated Property to true.
  if ( !QueryStringMachine.containsKey( 'add2FPointsCheckbox' ) ) {
    GOOptions.add2FPointsCheckboxProperty.value = true;
  }

  const sim = new GOSim( geometricOpticsBasicsStrings[ 'geometric-optics-basics' ].title, {
    isBasicsVersion: true,
    phetioDesigned: true
  } );
  sim.start();
} );