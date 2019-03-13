(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['glkote'],
      __esModule: true,
    };
  }

  define('glkote', [], vendorModule);
})();
