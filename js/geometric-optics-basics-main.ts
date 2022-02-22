// Copyright 2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GOConstants from '../../geometric-optics/js/common/GOConstants.js';
import GOGlobalOptions from '../../geometric-optics/js/common/GOGlobalOptions.js';
import GOQueryParameters from '../../geometric-optics/js/common/GOQueryParameters.js';
import LensScreen from '../../geometric-optics/js/lens/LensScreen.js';
import MirrorScreen from '../../geometric-optics/js/mirror/MirrorScreen.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import geometricOpticsBasicsStrings from './geometricOpticsBasicsStrings.js';

// If enable2F query parameter was not in the URL, change the default.
if ( !QueryStringMachine.containsKey( 'enable2F' ) ) {
  GOQueryParameters.enable2F = true;
}

const simOptions = {

  credits: GOConstants.CREDITS,

  // pdom options
  hasKeyboardHelpContent: true
};

simLauncher.launch( () => {

  // ?focalLengthControl is ignored, and the 'direct' focal-length model is used.
  // This must be done inside the callback to simLauncher.launch.
  GOGlobalOptions.focalLengthControlTypeProperty.value = 'direct';

  const sim = new Sim( geometricOpticsBasicsStrings[ 'geometric-optics-basics' ].title, [
    new LensScreen( {
      isBasicsVersion: true,
      tandem: Tandem.ROOT.createTandem( 'lensScreen' )
    } ),
    new MirrorScreen( {
      isBasicsVersion: true,
      tandem: Tandem.ROOT.createTandem( 'mirrorScreen' )
    } )
  ], simOptions );
  sim.start();
} );