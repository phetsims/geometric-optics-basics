// Copyright 2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GOConstants from '../../geometric-optics/js/common/GOConstants.js';
import GOGlobalOptions from '../../geometric-optics/js/common/GOGlobalOptions.js';
import LensScreen from '../../geometric-optics/js/lens/LensScreen.js';
import MirrorScreen from '../../geometric-optics/js/mirror/MirrorScreen.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import geometricOpticsBasicsStrings from './geometricOpticsBasicsStrings.js';

// ?focalLengthControl is ignored, and the 'direct' focal-length model is used.
GOGlobalOptions.focalLengthControlTypeProperty.value = 'direct';

const simOptions = {

  credits: GOConstants.CREDITS,

  // pdom options
  hasKeyboardHelpContent: true
};

simLauncher.launch( () => {
  const sim = new Sim( geometricOpticsBasicsStrings[ 'geometric-optics-basics' ].title, [
    new LensScreen( { tandem: Tandem.ROOT.createTandem( 'lensScreen' ) } ),
    new MirrorScreen( { tandem: Tandem.ROOT.createTandem( 'mirrorScreen' ) } )
  ], simOptions );
  sim.start();
} );
