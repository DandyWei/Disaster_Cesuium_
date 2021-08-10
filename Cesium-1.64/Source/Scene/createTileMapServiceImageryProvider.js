import deprecationWarning from '../Core/deprecationWarning.js';
import TileMapServiceImageryProvider from './TileMapServiceImageryProvider.js';

    /**
     * Creates a {@link UrlTemplateImageryProvider} instance that provides tiled imagery as generated by
     * {@link http://www.maptiler.org/'>MapTiler</a> / <a href='http://www.klokan.cz/projects/gdal2tiles/|GDDAL2Tiles} etc.
     *
     * @exports createTileMapServiceImageryProvider
     *
     * @param {Object} [options] Object with the following properties:
     * @param {Resource|String} [options.url='.'] Path to image tiles on server.
     * @param {String} [options.fileExtension='png'] The file extension for images on the server.
     * @param {Credit|String} [options.credit=''] A credit for the data source, which is displayed on the canvas.
     * @param {Number} [options.minimumLevel=0] The minimum level-of-detail supported by the imagery provider.  Take care when specifying
     *                 this that the number of tiles at the minimum level is small, such as four or less.  A larger number is likely
     *                 to result in rendering problems.
     * @param {Number} [options.maximumLevel] The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.
     * @param {Rectangle} [options.rectangle=Rectangle.MAX_VALUE] The rectangle, in radians, covered by the image.
     * @param {TilingScheme} [options.tilingScheme] The tiling scheme specifying how the ellipsoidal
     * surface is broken into tiles.  If this parameter is not provided, a {@link WebMercatorTilingScheme}
     * is used.
     * @param {Ellipsoid} [options.ellipsoid] The ellipsoid.  If the tilingScheme is specified,
     *                    this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither
     *                    parameter is specified, the WGS84 ellipsoid is used.
     * @param {Number} [options.tileWidth=256] Pixel width of image tiles.
     * @param {Number} [options.tileHeight=256] Pixel height of image tiles.
     * @param {Boolean} [options.flipXY] Older versions of gdal2tiles.py flipped X and Y values in tilemapresource.xml.
     * Specifying this option will do the same, allowing for loading of these incorrect tilesets.
     * @returns {UrlTemplateImageryProvider} The imagery provider.
     *
     * @deprecated
     *
     * @see ArcGisMapServerImageryProvider
     * @see BingMapsImageryProvider
     * @see GoogleEarthEnterpriseMapsProvider
     * @see OpenStreetMapImageryProvider
     * @see SingleTileImageryProvider
     * @see WebMapServiceImageryProvider
     * @see WebMapTileServiceImageryProvider
     * @see UrlTemplateImageryProvider
     *
     * @example
     * var tms = new Cesium.TileMapServiceImageryProvider({
     *    url : '../images/cesium_maptiler/Cesium_Logo_Color',
     *    fileExtension: 'png',
     *    maximumLevel: 4,
     *    rectangle: new Cesium.Rectangle(
     *        Cesium.Math.toRadians(-120.0),
     *        Cesium.Math.toRadians(20.0),
     *        Cesium.Math.toRadians(-60.0),
     *        Cesium.Math.toRadians(40.0))
     * });
     */
    function createTileMapServiceImageryProvider(options) {
        deprecationWarning('createTileMapServiceImageryProvider', 'createTileMapServiceImageryProvider is deprecated and will be removed in Cesium 1.65. Please use TileMapServiceImageryProvider instead.');

        return new TileMapServiceImageryProvider(options);
    }
export default createTileMapServiceImageryProvider;