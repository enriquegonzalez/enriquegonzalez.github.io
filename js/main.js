requirejs.config({
  paths: {
    "jquery": 'bower_components/jquery/dist/jquery.min',
    "jquery.cookie": 'bower_components/jquery.cookie/jquery.cookie',
    "foundation": 'bower_components/foundation/js/foundation',
    "foundation.abide": 'bower_components/foundation/js/foundation/foundation.abide',
    "foundation.accordion": 'bower_components/foundation/js/foundation/foundation.accordion',
    "foundation.alert": 'bower_components/foundation/js/foundation/foundation.alert',
    "foundation.clearing": 'bower_components/foundation/js/foundation/foundation.clearing',
    "foundation.dropdown": 'bower_components/foundation/js/foundation/foundation.dropdown',
    "foundation.equalizer": 'bower_components/foundation/js/foundation/foundation.equalizer',
    "foundation.interchange": 'bower_components/foundation/js/foundation/foundation.interchange',
    "foundation.joyride": 'bower_components/foundation/js/foundation/foundation.joyride',
    "foundation.magellan": 'bower_components/foundation/js/foundation/foundation.magellan',
    "foundation.offcanvas": 'bower_components/foundation/js/foundation/foundation.offcanvas',
    "foundation.orbit": 'bower_components/foundation/js/foundation/foundation.orbit',
    "foundation.reveal": 'bower_components/foundation/js/foundation/foundation.reveal',
    "foundation.slider": 'bower_components/foundation/js/foundation/foundation.slider',
    "foundation.tab": 'bower_components/foundation/js/foundation/foundation.tab',
    "foundation.toolbar": 'bower_components/foundation/js/foundation/foundation.toolbar',
    "foundation.topbar": 'bower_components/foundation/js/foundation/foundation.topbar',
    "angular": 'bower_components/angular/angular',
    "angular-animate": 'bower_components/angular-animate/angular-animate'
  },
  shim: {
    "jquery.cookie": ['jquery'],
    "foundation": ['jquery'],
    "foundation.abide": ['foundation'],
    "foundation.accordion": ['foundation'],
    "foundation.alert": ['foundation'],
    "foundation.clearing": ['foundation'],
    "foundation.dropdown": ['foundation'],
    "foundation.equalizer": ['foundation'],
    "foundation.interchange": ['foundation'],
    "foundation.joyride": ['foundation', 'jquery.cookie'],
    "foundation.magellan": ['foundation'],
    "foundation.offcanvas": ['foundation'],
    "foundation.orbit": ['foundation'],
    "foundation.reveal": ['foundation'],
    "foundation.slider": ['foundation'],
    "foundation.tab": ['foundation'],
    "foundation.toolbar": ['foundation'],
    "foundation.topbar": ['foundation'],
    'angular': {
            exports: 'angular'
        }
  }
});

require(['jquery', 'foundation', 'angular', 'angular-animate'], function($) {
    $(document).foundation();
});
