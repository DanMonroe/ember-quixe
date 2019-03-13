(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['quixe'],
      __esModule: true,
    };
  }

  define('quixe', [], vendorModule);
})();
