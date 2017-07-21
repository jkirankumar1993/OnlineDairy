'use strict';

/**
 * @ngdoc overview
 * @name apiService
 * @description
 * # API Service Factory for Admin
 *
 * Defines a factory used for holding all restful services
 */

var apiService = angular.module('apiService', [])
.constant('baseUrl', '')
.constant('authUrl', '')
.constant('clientId', '')
.constant('clientSecret', '')
;
