// Copyright 2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GOGlobalOptions from '../../geometric-optics/js/common/GOGlobalOptions.js';
import GOSim from '../../geometric-optics/js/GOSim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import geometricOpticsBasicsStrings from './geometricOpticsBasicsStrings.js';

simLauncher.launch( () => {

  // In Geometric Optics: Basis, we want to ignore the focalLengthControl query parameter, and use the 'direct' method
  // of setting focal length.
  GOGlobalOptions.focalLengthModelTypeProperty.value = 'direct';

  // In Geometric Optics: Basics, we want to respect the twoFPointsEnabled query parameter.
  // But if that query parameter is not provided, then we enable this feature.
  if ( !QueryStringMachine.containsKey( 'twoFPointsEnabled' ) ) {
    GOGlobalOptions.twoFPointsEnabledProperty.value = true;
  }

  const sim = new GOSim( geometricOpticsBasicsStrings[ 'geometric-optics-basics' ].title, {
    isBasicsVersion: true
  } );
  sim.start();
} );