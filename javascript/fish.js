var _0xdb0f = ['fishFinImageH', 'fishFinImageW', 'fishFinData', 'fishFin', 'fishFinLeftAnimate', 'fishFinRightAnimate', 'scaleX', 'Shape', 'graphics', 'beginFill', 'red', 'drawRect', 'fishImageH', 'addChild', 'resizeCanvas', 'scaleY', 'scalePercent', 'resizeHolder', 'getElementById', 'createFish', 'updateFishes', 'colour', 'clone', 'scaleNum', 'floor', 'scale', 'scaleRange', 'type', 'swimspeed', 'random', 'swimTimer', 'getNumFrames', 'gotoAndPlay', 'length', 'rotation', 'mouseover', 'setFishRotate', 'target', 'moveFish', 'finLeft', 'finRight', 'updateCache', 'currentFrame', 'sin', 'cos', 'turn', 'downspeed', 'pow', 'turning', 'turnhard', 'turnmedium', 'turnsoft', 'uncache', 'replace', 'match', 'filters', 'ColorFilter', 'cache', 'number', 'splice', 'update', 'autoClear', 'indexOf', 'removeEventListener', 'XuSiYin', 'images/fish1.png', '#FF0000', 'data', 'plugin_', 'commandFishAnimation', 'each', 'destroy', 'extend', 'push', 'detectBrowser', 'createElement', 'canvas', 'getContext', 'browserSupport', 'isLoaded', 'initPreload', 'stageW', 'canvasW', 'attr', 'width', 'stageH', 'canvasH', 'height', 'manifest', 'fishArray', 'fishImage', 'fish', 'IMAGE', 'LoadQueue', 'loader', 'complete', 'handleLoaderComplete', 'progress', 'handleLoaderProgress', 'loadManifest', 'initFishCanvas', 'buildFishCanvas', 'createFishes', 'Stage', 'interact', 'Touch', 'enable', 'stage', 'enableMouseOver', 'Ticker', 'setFPS', 'addEventListener', 'tick', 'itemCanvasContainer', 'fishImageRegX', 'fishImageRegY', 'fishImageW', 'spritesheetSpeed', 'static', 'SpriteSheet', 'getResult', 'src', 'fishAnimate', 'Sprite', 'fishData', 'framerate', 'fishFinImageRegX', 'fishFinImageRegY'];
$(function(){$('#fish').XuSiYin(); $( window ).resize(function(){resizeFunc();})});
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}
function loaded() {
    setInterval(loop, 400);
}
var x = 0;
var titleText = ['G', 'Go', 'Gol', 'Gold', 'Gold F', 'Gold Fi', 'Gold Fis', 'Gold Fish ', 'Gold Fish<', 'Gold Fish<金', 'Gold Fish<金鱼', 'Gold Fish<金鱼>'];
function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}

(function(_0x4fd98d, _0x4b042f) {
    var _0x5761db = function(_0x397ae1) {
        while (--_0x397ae1) {
            _0x4fd98d['push'](_0x4fd98d['shift']());
        }
    };
    _0x5761db(++_0x4b042f);
}(_0xdb0f, 0xc0));
var _0xfdb0 = function(_0x5e5124, _0x1e8af7) {
    _0x5e5124 = _0x5e5124 - 0x0;
    var _0x4f8be0 = _0xdb0f[_0x5e5124];
    return _0x4f8be0;
};
(function(_0x475d15) {
    var _0xd274b7 = _0xfdb0('0x0'),
        _0x241ab9 = [],
        _0x1c8c2e = ![],
        _0x51109d = {
            'fishImage': 'images/fish2.png',
            'fishFinImage': _0xfdb0('0x1'),
            'spritesheetSpeed': 0x1,
            'colour': _0xfdb0('0x2'),
            'number': 0x3,
            'swimspeed': 1.5,
            'downspeed': 0.98,
            'rounder': 0xa,
            'turning': 0x3,
            'scaleRange': 0x2,
            'swimTimer': 0x32,
            'canvasW': 0x0,
            'canvasH': 0x0,
            'scalePercent': 0x1,
            'manifest': [],
            'fishArray': [],
            'isLoaded': ![],
            'browserSupport': ![],
            'fishImageW': 0x2e,
            'fishImageH': 0x66,
            'fishImageRegX': 0x7,
            'fishImageRegY': 0x14,
            'fishFinImageW': 0xc,
            'fishFinImageH': 0xe,
            'fishFinImageRegX': 0x10,
            'fishFinImageRegY': 0xc,
            'interact': !![]
        };
    _0x475d15['fn'][_0xd274b7] = function(_0x5d6947, _0xfe94ad, _0x141b1d) {
        if (typeof _0x5d6947 == 'string') {
            var _0x287ab0 = _0x475d15(this);
            var _0x449e96 = _0x287ab0[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            if (_0x449e96 != undefined) _0x475d15['fn'][_0xd274b7][_0xfdb0('0x5')](this, _0x5d6947, _0xfe94ad, _0x141b1d);
        } else {
            return this[_0xfdb0('0x6')](function() {
                var _0x1ac8e3 = _0x475d15(this);
                var _0xcd2935 = _0x1ac8e3[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
                _0x475d15['fn'][_0xd274b7][_0xfdb0('0x7')](_0x1ac8e3);
                var _0xcd2935 = _0x475d15[_0xfdb0('0x8')]({}, _0x51109d, _0x5d6947);
                _0x1ac8e3[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7, _0xcd2935);
                _0x241ab9[_0xfdb0('0x9')](_0x1ac8e3);
                _0x475d15['fn'][_0xd274b7]['detectBrowser'](_0x1ac8e3);
            });
        }
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0xa')] = function(_0x3957ee) {
        return _0x3957ee[_0xfdb0('0x6')](function() {
            var _0x139200 = _0x475d15(this);
            var _0x38729c = _0x139200[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            var _0x3008bd = document[_0xfdb0('0xb')](_0xfdb0('0xc'));
            if (_0x3008bd[_0xfdb0('0xd')]) {
                _0x38729c[_0xfdb0('0xe')] = !![];
            }
            if (_0x38729c['browserSupport']) {
                if (!_0x38729c[_0xfdb0('0xf')]) {
                    _0x38729c[_0xfdb0('0xf')] = !![];
                    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x10')](_0x139200);
                }
            }
        });
    };
    _0x475d15['fn'][_0xd274b7]['initPreload'] = function(_0x58c577) {
        return _0x58c577[_0xfdb0('0x6')](function() {
            var _0x4fd1bf = _0x475d15(this);
            var _0x4d565b = _0x4fd1bf['data'](_0xfdb0('0x4') + _0xd274b7);
            _0x4d565b[_0xfdb0('0x11')] = _0x4d565b[_0xfdb0('0x12')] = _0x4fd1bf[_0xfdb0('0x13')](_0xfdb0('0x14'));
            _0x4d565b[_0xfdb0('0x15')] = _0x4d565b[_0xfdb0('0x16')] = _0x4fd1bf['attr'](_0xfdb0('0x17'));
            _0x4d565b[_0xfdb0('0x18')] = [];
            _0x4d565b[_0xfdb0('0x19')] = [];
            _0x4d565b[_0xfdb0('0x18')][_0xfdb0('0x9')]({
                'src': _0x4d565b[_0xfdb0('0x1a')],
                'id': _0xfdb0('0x1b'),
                'type': createjs['LoadQueue'][_0xfdb0('0x1c')]
            });
            _0x4d565b['manifest'][_0xfdb0('0x9')]({
                'src': _0x4d565b['fishFinImage'],
                'id': 'fishFin',
                'type': createjs[_0xfdb0('0x1d')][_0xfdb0('0x1c')]
            });
            _0x4d565b[_0xfdb0('0x1e')] = new createjs[_0xfdb0('0x1d')](![]);
            _0x4d565b[_0xfdb0('0x1e')]['on'](_0xfdb0('0x1f'), function() {
                _0x475d15['fn'][_0xd274b7][_0xfdb0('0x20')](_0x4fd1bf);
            });
            _0x4d565b[_0xfdb0('0x1e')]['on'](_0xfdb0('0x21'), function() {
                _0x475d15['fn'][_0xd274b7][_0xfdb0('0x22')](_0x4fd1bf);
            });
            _0x4d565b[_0xfdb0('0x1e')][_0xfdb0('0x23')](_0x4d565b['manifest']);
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x20')] = function(_0x27e69c) {
        return _0x27e69c['each'](function() {
            var _0x2bb302 = _0x475d15(this);
            var _0x45737e = _0x2bb302[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            _0x475d15['fn'][_0xd274b7][_0xfdb0('0x24')](_0x2bb302);
            _0x475d15['fn'][_0xd274b7][_0xfdb0('0x25')](_0x2bb302);
            _0x475d15['fn'][_0xd274b7][_0xfdb0('0x26')](_0x2bb302);
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x22')] = function(_0x393497) {
        return _0x393497[_0xfdb0('0x6')](function() {
            var _0x3de9ad = _0x475d15(this);
            var _0x53944c = _0x3de9ad[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x24')] = function(_0x57af1f) {
        return _0x57af1f[_0xfdb0('0x6')](function() {
            var _0x931ad3 = _0x475d15(this);
            var _0xea341c = _0x931ad3[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            _0xea341c['stage'] = new createjs[_0xfdb0('0x27')](_0x931ad3[_0xfdb0('0x13')]('id'));
            if (_0xea341c[_0xfdb0('0x28')]) {
                createjs[_0xfdb0('0x29')][_0xfdb0('0x2a')](_0xea341c[_0xfdb0('0x2b')]);
                _0xea341c[_0xfdb0('0x2b')][_0xfdb0('0x2c')](0x14);
                _0xea341c[_0xfdb0('0x2b')]['mouseMoveOutside'] = !![];
            }
            if (!_0x1c8c2e) {
                _0x1c8c2e = !![];
                createjs[_0xfdb0('0x2d')][_0xfdb0('0x2e')](0x3c);
                createjs[_0xfdb0('0x2d')][_0xfdb0('0x2f')](_0xfdb0('0x30'), _0x475d15['fn'][_0xd274b7][_0xfdb0('0x30')]);
            }
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x25')] = function(_0x221872) {
        return _0x221872[_0xfdb0('0x6')](function() {
            var _0x60a25c = _0x475d15(this);
            var _0x3cb226 = _0x60a25c[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            _0x3cb226[_0xfdb0('0x31')] = new createjs['Container']();
            var _0xd366d5 = {
                'regX': _0x3cb226[_0xfdb0('0x32')],
                'regY': _0x3cb226[_0xfdb0('0x33')],
                'height': _0x3cb226['fishImageH'],
                'count': 0x5b,
                'width': _0x3cb226[_0xfdb0('0x34')]
            };
            var _0x4c858b = {
                'static': {
                    'frames': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x20],
                    'speed': _0x3cb226[_0xfdb0('0x35')],
                    'next': _0xfdb0('0x36')
                },
                'turnsoft': {
                    'frames': [0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32],
                    'speed': _0x3cb226[_0xfdb0('0x35')],
                    'next': _0xfdb0('0x36')
                },
                'turnmedium': {
                    'frames': [0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44],
                    'speed': _0x3cb226[_0xfdb0('0x35')],
                    'next': 'static'
                },
                'turnhard': {
                    'frames': [0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a],
                    'speed': _0x3cb226[_0xfdb0('0x35')],
                    'next': _0xfdb0('0x36')
                }
            };
            _0x3cb226['fishData'] = new createjs[_0xfdb0('0x37')]({
                'images': [_0x3cb226['loader'][_0xfdb0('0x38')]('fish')[_0xfdb0('0x39')]],
                'frames': _0xd366d5,
                'animations': _0x4c858b
            });
            _0x3cb226[_0xfdb0('0x3a')] = new createjs[_0xfdb0('0x3b')](_0x3cb226[_0xfdb0('0x3c')], _0xfdb0('0x36'));
            _0x3cb226['fishAnimate'][_0xfdb0('0x3d')] = 0x14;
            var _0xd366d5 = {
                'regX': _0x3cb226[_0xfdb0('0x3e')],
                'regY': _0x3cb226[_0xfdb0('0x3f')],
                'height': _0x3cb226[_0xfdb0('0x40')],
                'count': 0x17,
                'width': _0x3cb226[_0xfdb0('0x41')]
            };
            var _0x4c858b = {
                'static': {
                    'frames': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16],
                    'speed': _0x3cb226[_0xfdb0('0x35')],
                    'next': 'static'
                }
            };
            _0x3cb226[_0xfdb0('0x42')] = new createjs[_0xfdb0('0x37')]({
                'images': [_0x3cb226[_0xfdb0('0x1e')]['getResult'](_0xfdb0('0x43'))[_0xfdb0('0x39')]],
                'frames': _0xd366d5,
                'animations': _0x4c858b
            });
            _0x3cb226[_0xfdb0('0x44')] = new createjs[_0xfdb0('0x3b')](_0x3cb226[_0xfdb0('0x42')], _0xfdb0('0x36'));
            _0x3cb226[_0xfdb0('0x44')][_0xfdb0('0x3d')] = 0x14;
            _0x3cb226['fishFinRightAnimate'] = new createjs[_0xfdb0('0x3b')](_0x3cb226[_0xfdb0('0x42')], _0xfdb0('0x36'));
            _0x3cb226[_0xfdb0('0x45')]['framerate'] = 0x14;
            _0x3cb226[_0xfdb0('0x45')][_0xfdb0('0x46')] = -0x1;
            _0x3cb226[_0xfdb0('0x3a')]['x'] -= 0xc8;
            _0x3cb226[_0xfdb0('0x44')]['x'] -= 0xc8;
            _0x3cb226[_0xfdb0('0x45')]['x'] -= 0xc8;
            var _0x6b2f1 = new createjs[_0xfdb0('0x47')]();
            _0x6b2f1[_0xfdb0('0x48')][_0xfdb0('0x49')](_0xfdb0('0x4a'))[_0xfdb0('0x4b')](0x0, 0x0, _0x3cb226['fishImageW'], _0x3cb226[_0xfdb0('0x4c')]);
            _0x3cb226[_0xfdb0('0x31')][_0xfdb0('0x4d')](_0x3cb226[_0xfdb0('0x3a')], _0x3cb226[_0xfdb0('0x44')], _0x3cb226[_0xfdb0('0x45')]);
            _0x3cb226[_0xfdb0('0x2b')][_0xfdb0('0x4d')](_0x3cb226[_0xfdb0('0x31')]);
            _0x475d15['fn'][_0xd274b7]['resizeCanvas'](_0x60a25c);
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x4e')] = function(_0x17b984) {
        return _0x17b984[_0xfdb0('0x6')](function() {
            var _0x548116 = _0x475d15(this);
            var _0x6be3a = _0x548116[_0xfdb0('0x3')]('plugin_' + _0xd274b7);
            if (_0x6be3a[_0xfdb0('0x31')] != undefined) {
                _0x6be3a[_0xfdb0('0x31')][_0xfdb0('0x46')] = _0x6be3a['itemCanvasContainer'][_0xfdb0('0x4f')] = _0x6be3a[_0xfdb0('0x50')];
            }
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x51')] = function(_0x5d5670, _0x19444d, _0x43e705) {
        return _0x5d5670[_0xfdb0('0x6')](function() {
            var _0x779735 = _0x475d15(this);
            var _0x2e5ed3 = _0x779735[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            _0x2e5ed3[_0xfdb0('0x50')] = _0x19444d / stageW;
            if (_0x2e5ed3[_0xfdb0('0x15')] * _0x2e5ed3[_0xfdb0('0x50')] > _0x19444d) {
                _0x2e5ed3[_0xfdb0('0x50')] = _0x43e705 / _0x2e5ed3[_0xfdb0('0x15')];
            }
            var _0x23fa81 = document[_0xfdb0('0x52')](_0x779735['attr']('id'));
            _0x23fa81[_0xfdb0('0x14')] = _0x2e5ed3['stageW'] * _0x2e5ed3[_0xfdb0('0x50')];
            _0x23fa81['height'] = _0x2e5ed3[_0xfdb0('0x15')] * _0x2e5ed3[_0xfdb0('0x50')];
            _0x475d15['fn'][_0xd274b7][_0xfdb0('0x4e')](_0x779735);
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x26')] = function(_0x2eaecb) {
        return _0x2eaecb[_0xfdb0('0x6')](function() {
            var _0x9d6cd9 = _0x475d15(this);
            var _0x5dd3fe = _0x9d6cd9[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            for (f = 0x0; f < _0x5dd3fe['number']; f++) {
                _0x475d15['fn'][_0xd274b7][_0xfdb0('0x53')](_0x9d6cd9);
            }
            _0x475d15['fn'][_0xd274b7][_0xfdb0('0x54')](_0x9d6cd9, _0xfdb0('0x55'));
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x53')] = function(_0x533067) {
        return _0x533067['each'](function() {
            var _0x20eb29 = _0x475d15(this);
            var _0x5de7fd = _0x20eb29[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            var _0x524dc3 = _0x5de7fd[_0xfdb0('0x3a')][_0xfdb0('0x56')]();
            var _0x50f3f7 = _0x5de7fd[_0xfdb0('0x44')][_0xfdb0('0x56')]();
            var _0x20dc8a = _0x5de7fd[_0xfdb0('0x45')][_0xfdb0('0x56')]();
            _0x524dc3[_0xfdb0('0x57')] = Math[_0xfdb0('0x58')](Math['random']() * 0x5) * 0.1;
            _0x524dc3[_0xfdb0('0x59')] = _0x524dc3[_0xfdb0('0x57')] * _0x5de7fd[_0xfdb0('0x5a')];
            _0x524dc3[_0xfdb0('0x5b')] = 0x1;
            _0x524dc3['swimspeed'] = _0x5de7fd[_0xfdb0('0x5c')];
            _0x524dc3['turn'] = Math[_0xfdb0('0x5d')]() * 0xb4;
            _0x524dc3['swimTimer'] = _0x5de7fd[_0xfdb0('0x5e')] + Math['random']() * (_0x5de7fd[_0xfdb0('0x5e')] / 0x2);
            var _0x5f0353 = Math[_0xfdb0('0x58')](Math[_0xfdb0('0x5d')]() * _0x5de7fd[_0xfdb0('0x42')][_0xfdb0('0x5f')]() - 0x1);
            _0x50f3f7['gotoAndPlay'](Math[_0xfdb0('0x58')](Math[_0xfdb0('0x5d')]() * _0x5f0353));
            _0x20dc8a[_0xfdb0('0x60')](Math[_0xfdb0('0x58')](Math[_0xfdb0('0x5d')]() * _0x5f0353));
            _0x524dc3['scaleX'] = _0x524dc3[_0xfdb0('0x4f')] = _0x524dc3[_0xfdb0('0x59')];
            _0x50f3f7['scaleX'] = _0x50f3f7['scaleY'] = _0x524dc3[_0xfdb0('0x59')];
            _0x20dc8a['scaleY'] = _0x524dc3[_0xfdb0('0x59')];
            _0x20dc8a['scaleX'] = -_0x524dc3['scale'];
            _0x524dc3['id'] = _0x5de7fd[_0xfdb0('0x19')][_0xfdb0('0x61')] - 0x1;
            _0x5de7fd[_0xfdb0('0x19')][_0xfdb0('0x9')]({
                'fish': _0x524dc3,
                'finLeft': _0x50f3f7,
                'finRight': _0x20dc8a
            });
            var _0x2e93dd = _0x5de7fd[_0xfdb0('0x19')]['length'] - 0x1;
            _0x524dc3['x'] = Math[_0xfdb0('0x5d')]() * (_0x5de7fd[_0xfdb0('0x12')] / 0x64 * 0x3c) + _0x5de7fd[_0xfdb0('0x12')] / 0x64 * 0x14;
            _0x524dc3['y'] = Math[_0xfdb0('0x5d')]() * (_0x5de7fd[_0xfdb0('0x16')] / 0x64 * 0x3c) + _0x5de7fd[_0xfdb0('0x16')] / 0x64 * 0x14;
            _0x524dc3[_0xfdb0('0x62')] = Math[_0xfdb0('0x58')](Math[_0xfdb0('0x5d')]() * 0x168 - 0xb4);
            _0x5de7fd[_0xfdb0('0x31')][_0xfdb0('0x4d')](_0x524dc3, _0x50f3f7, _0x20dc8a);
            if (_0x5de7fd[_0xfdb0('0x28')]) {
                _0x524dc3['addEventListener'](_0xfdb0('0x63'), function(_0x886a5f) {
                    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x64')](_0x20eb29, _0x886a5f[_0xfdb0('0x65')]['id']);
                    _0x886a5f['target'][_0xfdb0('0x5c')] = _0x5de7fd[_0xfdb0('0x5c')] * 0x4;
                });
            }
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x66')] = function(_0x14a266, _0xd4c2a3) {
        return _0x14a266[_0xfdb0('0x6')](function() {
            var _0x191b64 = _0x475d15(this);
            var _0x112fe8 = _0x191b64[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            var _0x33d5d4 = _0x112fe8[_0xfdb0('0x19')][_0xd4c2a3][_0xfdb0('0x1b')];
            var _0xff4c4 = _0x112fe8['fishArray'][_0xd4c2a3][_0xfdb0('0x67')];
            var _0xc86f58 = _0x112fe8[_0xfdb0('0x19')][_0xd4c2a3][_0xfdb0('0x68')];
            _0x33d5d4[_0xfdb0('0x69')]();
            _0xff4c4['updateCache']();
            _0xc86f58[_0xfdb0('0x69')]();
            if (_0x33d5d4['swimTimer'] <= 0x0) {
                _0x33d5d4[_0xfdb0('0x5e')] = _0x112fe8['swimTimer'] + Math[_0xfdb0('0x5d')]() * (_0x112fe8[_0xfdb0('0x5e')] / 0x3);
                _0x475d15['fn'][_0xd274b7]['setFishRotate'](_0x191b64, _0xd4c2a3);
            } else {
                _0x33d5d4[_0xfdb0('0x5e')]--;
            } if (_0x33d5d4[_0xfdb0('0x6a')] < 0x20) {
                _0x33d5d4[_0xfdb0('0x5b')] = 0x1;
            }
            _0x33d5d4['x'] += _0x33d5d4[_0xfdb0('0x5c')] * Math[_0xfdb0('0x6b')](_0x33d5d4[_0xfdb0('0x62')] * Math['PI'] / 0xb4);
            _0x33d5d4['y'] -= _0x33d5d4[_0xfdb0('0x5c')] * Math[_0xfdb0('0x6c')](_0x33d5d4[_0xfdb0('0x62')] * Math['PI'] / 0xb4);
            _0x33d5d4[_0xfdb0('0x62')] += (_0x33d5d4[_0xfdb0('0x6d')] - _0x33d5d4[_0xfdb0('0x62')]) / _0x112fe8['rounder'];
            _0x33d5d4[_0xfdb0('0x5c')] *= _0x112fe8[_0xfdb0('0x6e')];
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x64')] = function(_0x2ae074, _0x45c2bb) {
        return _0x2ae074[_0xfdb0('0x6')](function() {
            var _0x192056 = _0x475d15(this);
            var _0x4d610a = _0x192056[_0xfdb0('0x3')]('plugin_' + _0xd274b7);
            var _0x21b74d = _0x4d610a[_0xfdb0('0x19')][_0x45c2bb][_0xfdb0('0x1b')];
            _0x21b74d['swimspeed'] = _0x4d610a[_0xfdb0('0x5c')];
            var _0x4c7df6 = _0x4d610a['canvasH'] / 0x64 * 0x14;
            var _0x3cf501 = _0x4d610a[_0xfdb0('0x16')] / 0x64 * 0x50;
            var _0x4cd16a = _0x4d610a[_0xfdb0('0x12')] / 0x64 * 0x50;
            var _0xebebb1 = _0x4d610a[_0xfdb0('0x12')] / 0x64 * 0x14;
            if (_0x21b74d['y'] < _0x4c7df6) {
                if (_0x21b74d[_0xfdb0('0x62')] < 0x0) {
                    _0x21b74d[_0xfdb0('0x6d')] = -_0x27c848(0x78);
                    if (_0x21b74d['x'] < _0xebebb1) {
                        _0x21b74d[_0xfdb0('0x6d')] = -_0x27c848(0x96);
                    }
                } else {
                    _0x21b74d[_0xfdb0('0x6d')] = _0x27c848(0x78);
                    if (_0x21b74d['x'] > _0x4cd16a) {
                        _0x21b74d['turn'] = _0x27c848(0x96);
                    }
                }
            } else if (_0x21b74d['y'] > _0x3cf501) {
                if (_0x21b74d[_0xfdb0('0x62')] < 0x0) {
                    _0x21b74d['turn'] = -_0x27c848(0x3c);
                    if (_0x21b74d['x'] > _0xebebb1) {
                        _0x21b74d[_0xfdb0('0x6d')] = -_0x27c848(0x1e);
                    }
                } else {
                    _0x21b74d[_0xfdb0('0x6d')] = _0x27c848(0x3c);
                    if (_0x21b74d['x'] < _0x4cd16a) {
                        _0x21b74d['turn'] = _0x27c848(0x1e);
                    }
                }
            } else if (_0x21b74d['x'] > _0x4cd16a) {
                if (_0x21b74d[_0xfdb0('0x62')] < 0x5a) {
                    _0x21b74d[_0xfdb0('0x6d')] = -_0x27c848(0x1e);
                    if (_0x21b74d['y'] < _0x4c7df6) {
                        _0x21b74d['turn'] = -_0x27c848(0x3c);
                    }
                } else {
                    _0x21b74d[_0xfdb0('0x6d')] = -_0x27c848(0x96);
                    if (_0x21b74d['y'] < _0x3cf501) {
                        _0x21b74d[_0xfdb0('0x6d')] = -_0x27c848(0x78);
                    }
                }
            } else if (_0x21b74d['x'] < _0xebebb1) {
                if (_0x21b74d[_0xfdb0('0x62')] > -0x5a) {
                    _0x21b74d[_0xfdb0('0x6d')] = _0x27c848(0x1e);
                    if (_0x21b74d['y'] < _0x4c7df6) {
                        _0x21b74d['turn'] = _0x27c848(0x3c);
                    }
                } else {
                    _0x21b74d[_0xfdb0('0x6d')] = _0x27c848(0x96);
                    if (_0x21b74d['y'] > _0x3cf501) {
                        _0x21b74d[_0xfdb0('0x6d')] = _0x27c848(0x78);
                    }
                }
            }
            _0x21b74d['turn'] += Math[_0xfdb0('0x58')](Math[_0xfdb0('0x6f')](Math[_0xfdb0('0x5d')]() * _0x4d610a[_0xfdb0('0x70')] - _0x4d610a['turning'] / 0x2, 0x3));
            if (_0x21b74d[_0xfdb0('0x5b')] == 0x1) {
                if (0x5a < _0x21b74d[_0xfdb0('0x6d')] - _0x21b74d[_0xfdb0('0x62')]) {
                    _0x21b74d[_0xfdb0('0x5b')] = 0x2;
                    _0x21b74d[_0xfdb0('0x46')] = _0x21b74d[_0xfdb0('0x59')];
                    _0x21b74d[_0xfdb0('0x60')](_0xfdb0('0x71'));
                } else if (-0x5a > _0x21b74d[_0xfdb0('0x6d')] - _0x21b74d[_0xfdb0('0x62')]) {
                    _0x21b74d[_0xfdb0('0x5b')] = 0x3;
                    _0x21b74d['scaleX'] = -_0x21b74d[_0xfdb0('0x59')];
                    _0x21b74d[_0xfdb0('0x60')](_0xfdb0('0x71'));
                } else if (0x3c < _0x21b74d[_0xfdb0('0x6d')] - _0x21b74d[_0xfdb0('0x62')]) {
                    _0x21b74d[_0xfdb0('0x5b')] = 0x4;
                    _0x21b74d[_0xfdb0('0x46')] = _0x21b74d[_0xfdb0('0x59')];
                    _0x21b74d[_0xfdb0('0x60')](_0xfdb0('0x72'));
                } else if (-0x3c > _0x21b74d[_0xfdb0('0x6d')] - _0x21b74d[_0xfdb0('0x62')]) {
                    _0x21b74d[_0xfdb0('0x5b')] = 0x5;
                    _0x21b74d[_0xfdb0('0x46')] = -_0x21b74d[_0xfdb0('0x59')];
                    _0x21b74d['gotoAndPlay']('turnmedium');
                } else if (0x1e < _0x21b74d[_0xfdb0('0x6d')] - _0x21b74d['rotation']) {
                    _0x21b74d[_0xfdb0('0x5b')] = 0x6;
                    _0x21b74d[_0xfdb0('0x46')] = _0x21b74d[_0xfdb0('0x59')];
                    _0x21b74d['gotoAndPlay'](_0xfdb0('0x73'));
                } else if (-0x1e > _0x21b74d[_0xfdb0('0x6d')] - _0x21b74d[_0xfdb0('0x62')]) {
                    _0x21b74d[_0xfdb0('0x5b')] = 0x7;
                    _0x21b74d[_0xfdb0('0x46')] = -_0x21b74d[_0xfdb0('0x59')];
                    _0x21b74d['gotoAndPlay'](_0xfdb0('0x73'));
                }
            }
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x54')] = function(_0x433572, _0x532dd4) {
        return _0x433572[_0xfdb0('0x6')](function() {
            var _0x87b204 = _0x475d15(this);
            var _0x6d444d = _0x87b204[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            if (_0x532dd4 == _0xfdb0('0x55')) {
                for (t = 0x0; t < _0x6d444d[_0xfdb0('0x19')][_0xfdb0('0x61')]; t++) {
                    var _0x1307f1 = _0x6d444d[_0xfdb0('0x19')][t]['fish'];
                    var _0x3da2c5 = _0x6d444d[_0xfdb0('0x19')][t][_0xfdb0('0x67')];
                    var _0xc28042 = _0x6d444d[_0xfdb0('0x19')][t][_0xfdb0('0x68')];
                    _0x1307f1[_0xfdb0('0x74')]();
                    _0x3da2c5[_0xfdb0('0x74')]();
                    _0xc28042[_0xfdb0('0x74')]();
                    var _0x2524a9 = _0x6d444d[_0xfdb0('0x55')][_0xfdb0('0x75')]('#', '');
                    var _0x462e2d = _0x2524a9['length'] === 0x3 ? _0x2524a9[0x0] + _0x2524a9[0x0] + _0x2524a9[0x1] + _0x2524a9[0x1] + _0x2524a9[0x2] + _0x2524a9[0x2] : _0x2524a9;
                    var _0x9eda5f = _0x462e2d[_0xfdb0('0x76')](/.{2}/g);
                    var _0x1ac420 = parseInt(_0x9eda5f[0x0], 0x10);
                    var _0x7cdf = parseInt(_0x9eda5f[0x1], 0x10);
                    var _0x4303db = parseInt(_0x9eda5f[0x2], 0x10);
                    _0x1307f1[_0xfdb0('0x77')] = _0x3da2c5[_0xfdb0('0x77')] = _0xc28042[_0xfdb0('0x77')] = [new createjs[_0xfdb0('0x78')](0x0, 0x0, 0x0, 0x1, _0x1ac420, _0x7cdf, _0x4303db, 0x0)];
                    _0x1307f1[_0xfdb0('0x79')](-_0x6d444d[_0xfdb0('0x32')], -_0x6d444d[_0xfdb0('0x33')], _0x6d444d[_0xfdb0('0x34')], _0x6d444d['fishImageH']);
                    _0x3da2c5[_0xfdb0('0x79')](-_0x6d444d[_0xfdb0('0x3e')], -_0x6d444d[_0xfdb0('0x3f')], _0x6d444d[_0xfdb0('0x41')], _0x6d444d[_0xfdb0('0x40')]);
                    _0xc28042[_0xfdb0('0x79')](-_0x6d444d[_0xfdb0('0x3e')], -_0x6d444d[_0xfdb0('0x3f')], _0x6d444d['fishFinImageW'], _0x6d444d['fishFinImageH']);
                }
            } else if (_0x532dd4 == _0xfdb0('0x5a')) {
                for (t = 0x0; t < _0x6d444d['fishArray']['length']; t++) {
                    var _0x1307f1 = _0x6d444d[_0xfdb0('0x19')][t][_0xfdb0('0x1b')];
                    var _0x3da2c5 = _0x6d444d[_0xfdb0('0x19')][t][_0xfdb0('0x67')];
                    var _0xc28042 = _0x6d444d['fishArray'][t][_0xfdb0('0x68')];
                    _0x1307f1['scale'] = _0x1307f1['scaleNum'] * _0x6d444d[_0xfdb0('0x5a')];
                    _0x1307f1[_0xfdb0('0x46')] = _0x1307f1['scaleY'] = _0x1307f1[_0xfdb0('0x59')];
                    _0x3da2c5[_0xfdb0('0x46')] = _0x3da2c5[_0xfdb0('0x4f')] = _0x1307f1[_0xfdb0('0x59')];
                    _0xc28042[_0xfdb0('0x4f')] = _0x1307f1[_0xfdb0('0x59')];
                    _0xc28042['scaleX'] = -_0x1307f1[_0xfdb0('0x59')];
                }
            } else if (_0x532dd4 == _0xfdb0('0x7a')) {
                if (_0x6d444d['number'] > _0x6d444d['fishArray'][_0xfdb0('0x61')]) {
                    for (t = _0x6d444d[_0xfdb0('0x19')][_0xfdb0('0x61')]; t < _0x6d444d[_0xfdb0('0x7a')]; t++) {
                        _0x475d15['fn'][_0xd274b7][_0xfdb0('0x53')](_0x87b204);
                    }
                    _0x475d15['fn'][_0xd274b7]['updateFishes'](_0x87b204, 'colour');
                } else {
                    for (t = _0x6d444d[_0xfdb0('0x7a')]; t < _0x6d444d[_0xfdb0('0x19')][_0xfdb0('0x61')]; t++) {
                        var _0x1307f1 = _0x6d444d['fishArray'][t][_0xfdb0('0x1b')];
                        var _0x3da2c5 = _0x6d444d['fishArray'][t][_0xfdb0('0x67')];
                        var _0xc28042 = _0x6d444d[_0xfdb0('0x19')][t]['finRight'];
                        _0x6d444d['itemCanvasContainer']['removeChild'](_0x1307f1, _0x3da2c5, _0xc28042);
                        _0x6d444d[_0xfdb0('0x19')][_0xfdb0('0x7b')](t, 0x1);
                    }
                }
            }
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x30')] = function() {
        for (n = 0x0; n < _0x241ab9['length']; n++) {
            var _0xf52794 = _0x241ab9[n];
            var _0x1ffc8f = _0xf52794[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            if (_0x1ffc8f[_0xfdb0('0x19')]['length'] > 0x0) {
                for (f = 0x0; f < _0x1ffc8f[_0xfdb0('0x19')][_0xfdb0('0x61')]; f++) {
                    _0x1ffc8f['fishArray'][f][_0xfdb0('0x67')]['x'] = _0x1ffc8f[_0xfdb0('0x19')][f]['finRight']['x'] = _0x1ffc8f[_0xfdb0('0x19')][f][_0xfdb0('0x1b')]['x'];
                    _0x1ffc8f[_0xfdb0('0x19')][f]['finLeft']['y'] = _0x1ffc8f[_0xfdb0('0x19')][f][_0xfdb0('0x68')]['y'] = _0x1ffc8f['fishArray'][f][_0xfdb0('0x1b')]['y'];
                    _0x1ffc8f[_0xfdb0('0x19')][f][_0xfdb0('0x67')][_0xfdb0('0x62')] = _0x1ffc8f[_0xfdb0('0x19')][f][_0xfdb0('0x68')]['rotation'] = _0x1ffc8f['fishArray'][f][_0xfdb0('0x1b')][_0xfdb0('0x62')];
                    _0x475d15['fn'][_0xd274b7]['moveFish'](_0xf52794, f);
                }
                _0x1ffc8f['stage'][_0xfdb0('0x7c')]();
            }
        }
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x5')] = function(_0x5cffd9, _0x2a015f, _0x3e4328, _0xfda6fc) {
        return _0x5cffd9['each'](function() {
            var _0x22eac7 = _0x475d15(this);
            var _0x46a7d8 = _0x22eac7[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            switch (_0x2a015f) {
                case _0xfdb0('0x7'):
                    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x7')](_0x22eac7);
                    break;
                default:
                    if (_0x46a7d8[_0x3e4328] != undefined) {
                        _0x46a7d8[_0x3e4328] = _0xfda6fc;
                        if (_0x3e4328 == _0xfdb0('0x7a')) {
                            _0x475d15['fn'][_0xd274b7][_0xfdb0('0x54')](_0x22eac7, _0xfdb0('0x7a'));
                        } else if (_0x3e4328 == _0xfdb0('0x5a')) {
                            _0x475d15['fn'][_0xd274b7][_0xfdb0('0x54')](_0x22eac7, _0xfdb0('0x5a'));
                        } else if (_0x3e4328 == 'colour') {
                            _0x475d15['fn'][_0xd274b7][_0xfdb0('0x54')](_0x22eac7, _0xfdb0('0x55'));
                        }
                    }
            }
        });
    };
    _0x475d15['fn'][_0xd274b7][_0xfdb0('0x7')] = function(_0x3f7917) {
        return _0x3f7917[_0xfdb0('0x6')](function() {
            var _0x5a0436 = _0x475d15(this);
            var _0x3ec65c = _0x5a0436[_0xfdb0('0x3')](_0xfdb0('0x4') + _0xd274b7);
            if (_0x3ec65c != undefined) {
                if (_0x3ec65c[_0xfdb0('0xf')]) {
                    _0x3ec65c[_0xfdb0('0xf')] = ![];
                    _0x3ec65c[_0xfdb0('0x1e')] = null;
                    _0x3ec65c[_0xfdb0('0x2b')][_0xfdb0('0x7d')] = !![];
                    _0x3ec65c[_0xfdb0('0x2b')]['removeAllChildren']();
                    _0x3ec65c[_0xfdb0('0x2b')]['update']();
                    var _0x47f152 = _0x241ab9[_0xfdb0('0x7e')](_0x5a0436);
                    _0x241ab9[_0xfdb0('0x7b')](_0x47f152, 0x1);
                    createjs[_0xfdb0('0x2d')][_0xfdb0('0x7f')](_0xfdb0('0x30'), _0x3ec65c['stage']);
                    if (_0x241ab9['length'] == 0x0) {
                        _0x1c8c2e = ![];
                        createjs[_0xfdb0('0x2d')]['removeEventListener'](_0xfdb0('0x30'), _0x475d15['fn'][_0xd274b7][_0xfdb0('0x30')]);
                    }
                }
            }
        });
    };

    function _0x27c848(_0x2a7a49) {
        return _0x2a7a49 + Math['floor'](Math[_0xfdb0('0x5d')]() * (_0x2a7a49 / 0x3));
    }
}(jQuery));