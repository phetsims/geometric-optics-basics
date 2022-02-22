// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import Tandem from '../../../tandem/js/Tandem.js';
import GeometricOpticsBasicsColors from '../common/GeometricOpticsBasicsColors.js';
import geometricOpticsBasics from '../geometricOpticsBasics.js';
import GeometricOpticsBasicsModel from './model/GeometricOpticsBasicsModel.js';
import GeometricOpticsBasicsScreenView from './view/GeometricOpticsBasicsScreenView.js';
import { PhetioObjectOptions } from '../../../tandem/js/PhetioObject.js';

type GeometricOpticsBasicsScreenSelfOptions = Required<Pick<PhetioObjectOptions, 'tandem'>>;
type GeometricOpticsBasicsScreenOptions = GeometricOpticsBasicsScreenSelfOptions & ScreenOptions;

class GeometricOpticsBasicsScreen extends Screen<GeometricOpticsBasicsModel, GeometricOpticsBasicsScreenView> {

  constructor( providedOptions: GeometricOpticsBasicsScreenOptions ) {

    const options = optionize<GeometricOpticsBasicsScreenOptions, GeometricOpticsBasicsScreenSelfOptions, ScreenOptions, 'tandem'>( {

      //TODO if you include homeScreenIcon or navigationBarIcon, use JOIST/ScreenIcon
      backgroundColorProperty: GeometricOpticsBasicsColors.screenBackgroundColorProperty,

      // phet-io options
      tandem: Tandem.REQUIRED
    }, providedOptions );

    super(
      () => new GeometricOpticsBasicsModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new GeometricOpticsBasicsScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

geometricOpticsBasics.register( 'GeometricOpticsBasicsScreen', GeometricOpticsBasicsScreen );
export default GeometricOpticsBasicsScreen;