// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import GeometricOpticsBasicsConstants from '../../common/GeometricOpticsBasicsConstants.js';
import geometricOpticsBasics from '../../geometricOpticsBasics.js';
import GeometricOpticsBasicsModel from '../model/GeometricOpticsBasicsModel.js';
import optionize from '../../../../phet-core/js/optionize.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import { ScreenOptions } from '../../../../joist/js/Screen.js';

type GeometricOpticsBasicsScreenViewSelfOptions = Required<Pick<PhetioObjectOptions, 'tandem'>>;
type GeometricOpticsBasicsScreenViewOptions = GeometricOpticsBasicsScreenViewSelfOptions & ScreenOptions;

class GeometricOpticsBasicsScreenView extends ScreenView {

  constructor( model: GeometricOpticsBasicsModel, providedOptions: GeometricOpticsBasicsScreenViewOptions ) {

    const options = optionize<GeometricOpticsBasicsScreenViewOptions, GeometricOpticsBasicsScreenViewSelfOptions, ScreenViewOptions, 'tandem'>( {

      // phet-io options
      tandem: Tandem.REQUIRED
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - GeometricOpticsBasicsConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - GeometricOpticsBasicsConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

geometricOpticsBasics.register( 'GeometricOpticsBasicsScreenView', GeometricOpticsBasicsScreenView );
export default GeometricOpticsBasicsScreenView;