/* eslint-env node */
'use strict';

let Funnel = require('broccoli-funnel');
let mergeTrees = require('broccoli-merge-trees');
let path = require('path');

module.exports = {
  name: 'ember-quixe',

  isDevelopingAddon: function () {
    return true;
  },


  included() {
    this._super(...arguments);

    this.import({
      development: 'vendor/quixe/src/quixe/quixe.js',
      production: 'vendor/quixe/lib/quixe.min.js'
    });

    this.import({
      development: 'vendor/quixe/src/glkote/glkote.js',
      production: 'vendor/quixe/lib/glkote.min.js'
    });

    this.import('vendor/shims/quixe.js');
    this.import('vendor/shims/glkote.js');
  },

  treeForQUIXE() {
    return new Funnel(path.dirname(require.resolve('quixe')), {
      srcDir: '/src/quixe/',
      destDir: '/quixe'
    });
  },

  // treeForGLKOTE() {
  //   return new Funnel(path.dirname(require.resolve('quixe')), {
  //     srcDir: '/src/quixe/',
  //     destDir: '/quixe'
  //   });
  // },

  treeForVendor() {
    return mergeTrees([
      this._super(...arguments),

      this.treeForQUIXE()
    ]);
  }
};
