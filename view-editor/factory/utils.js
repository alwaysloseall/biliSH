;(function(window, angular, undefined) { 'use strict';

angular.module('biliSH')
//---文字
.factory('Wevent', function () {
    return {
        _click: function (ele) {
            console.log('add Wevent click');
            ele.on('click', function () {
                
            });
        },
        _mousedown: function (ele) {
            console.log('add Wevent mousedown');
            var self = this;
            ele.on('mousedown', function () {
                self._mousemove(ele);
            });
        },
        _mouseup: function (ele) {
            ele.on('mouseup', function () {
                $('#editor-main').off('mousemove');         
            })
        },
        _mousemove: function (ele) {
            $('#editor-main').on('mousemove', function (e) {
                if (e.offsetY > 0 && e.offsetX > 0) {
                    ele.css('top', e.offsetY + 'px');
                    ele.css('left', e.offsetX + 'px');
                }
            })
        },
        initEvent: function (ele) {
            this._click(ele);
            // this._mousedown(ele);
            // this._mouseup(ele);
        }
    }
});
})(window, angular);