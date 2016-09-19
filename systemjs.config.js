/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  System.config({
    // map tells the System loader where to look for things
    map: {
      'app'                              : 'build/app', // 'dist',      
      // angular bundles
      '@angular/core'                    : 'node_modules/@angular/core/bundles/core.umd.js',
      '@angular/common'                  : 'node_modules/@angular/common/bundles/common.umd.js',
      '@angular/compiler'                : 'node_modules/@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser'        : 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http'                    : 'node_modules/@angular/http/bundles/http.umd.js',
      '@angular/router'                  : 'node_modules/@angular/router/bundles/router.umd.js',
      '@angular/forms'                   : 'node_modules/@angular/forms/bundles/forms.umd.js',
      // others
      'angular2-in-memory-web-api'       : 'node_modules/angular2-in-memory-web-api',
      'rxjs'                             : 'node_modules/rxjs',
    },
    packages: {
      'app':                        { main: 'main.js',  defaultExtension: 'js' },
      'rxjs':                       { defaultExtension: 'js' },
      'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    }
  });
})(this);
