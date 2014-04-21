/**
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2014 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */
'use strict';

angular.module('ds.shared')
    .controller('MainCtrl', ['$scope',
        function ($scope) {


            $scope.$on('cart.toggle', function(event, data) {

                $scope.showCart = data;
            });

            $scope.$on('offcanvas.active', function(event, data) {

                $scope.offCanvasActive = data;
            });

        }]);