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

// If enable2F query parameter was not in the URL, change the default.
// This must be done in geometric-optics-basics-main.ts so that it only affects that sim.
if ( !QueryStringMachine.containsKey( 'enable2F' ) ) {
  GOQueryParameters.enable2F = true;
}

simLauncher.launch( () => {

  // ?focalLengthControl is ignored, and the 'direct' focal-length model is used.
  // This must be done inside the callback to simLauncher.launch.
  GOGlobalOptions.focalLengthControlTypeProperty.value = 'direct';

  const sim = new GOSim( geometricOpticsBasicsStrings[ 'geometric-optics-basics' ].title, {
    isBasicsVersion: true
  } );
  sim.start();
} );