requirejs.config({
    'baseUrl': window.base_url + '/js',
    'urlArgs': "bust=" + (new Date()).getTime(),
    'paths': {
        'jquery':           'vendor/jquery-1.8.3',
        'jqueryPlugins':    'vendor/jqueryPlugins/',
        'bootstrap':        'vendor/bootstrap/bootstrap.min',
        'history':          'vendor/history',
        'logging':          'icinga/util/logging',
        'URIjs':            'vendor/uri',
        'datetimepicker':   'vendor/bootstrap/datetimepicker.min'
    },
    'shim': {
        'datetimepicker': {
            'exports': 'datetimepicker'
        },
        'jquery' : {
            exports: 'jquery'
        }
    }
});

define(['jquery', 'history'], function ($) {

    requirejs(['bootstrap', 'jqueryPlugins/wookmark'], function() {
        requirejs(['datetimepicker']);
    });

    requirejs(['icinga/icinga'], function (Icinga) {
        window.$ = $;
        window.jQuery = $;
        window.Icinga = Icinga;
    });

});