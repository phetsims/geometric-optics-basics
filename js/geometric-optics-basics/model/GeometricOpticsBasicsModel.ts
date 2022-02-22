// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import geometricOpticsBasics from '../../geometricOpticsBasics.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';

type GeometricOpticsBasicsModelOptions = Required<Pick<PhetioObjectOptions, 'tandem'>>;

class GeometricOpticsBasicsModel {

  constructor( providedOptions: GeometricOpticsBasicsModelOptions ) {
    //TODO
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

geometricOpticsBasics.register( 'GeometricOpticsBasicsModel', GeometricOpticsBasicsModel );
export default GeometricOpticsBasicsModel;