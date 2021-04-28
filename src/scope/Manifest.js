//------------------------------------------------------------------------------
// Namespace
//------------------------------------------------------------------------------

/**
 * The application namespace.
 * 
 * @namespace joller
 */
var joller = function() {

    //--------------------------------------------------------------------------
    // Public static scope
    //--------------------------------------------------------------------------
    
    /**
     * Public scope.
     *
     * @type {Object}
     * @private
     */
    var m_this = {};

    //--------------------------------------------------------------------------
    // Package structure
    //--------------------------------------------------------------------------
    
    /**
     * ...
     *
     * @namespace data
     * @memberof joller
     * @since 1.0
     */
    m_this.data = {};

    /**
     * ...
     *
     * @namespace system
     * @memberof joller
     * @since 1.0
     */
     m_this.entity = {};

    /**
     * ...
     *
     * @namespace scene
     * @memberof joller
     * @since 1.0
     */
    m_this.scene = {};

    /**
     * ...
     *
     * @namespace system
     * @memberof joller
     * @since 1.0
     */
    m_this.system = {};

    /**
     * ...
     *
     * @namespace system
     * @memberof joller
     * @since 1.0
     */
     m_this.ui = {};

    //--------------------------------------------------------------------------
    // Return public scope object
    //--------------------------------------------------------------------------

    /**
     * Public scope.
     */
    return m_this;

}();