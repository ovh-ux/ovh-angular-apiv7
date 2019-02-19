/**
 * @ngdoc overview
 * @name ng-ovh-apiv7
 * @description
 * # ng-ovh-apiv7
 *
 * The ng-ovh-apiv7 module is an angular component designed to configure
 * {@link ng-ovh-apiv7.Apiv7Endpoint Apiv7Endpoints}
 * with the same interface as a $resource yet allow for extended configuration by providing
 * {@link ng-ovh-apiv7.Apiv7Request Apiv7Requests} objects that can be modified with chained methods
 * to define the parameters sent to APIv7.
 */

import angular from 'angular';
import 'angular-resource';
import { APIV7_FILTER_COMPARATOR, APIV7_SORT_ORDER } from './constants';
import { APIV7_ENDPOINT_DEFAULT_ACTIONS } from './endpoint.constants';
import Apiv7EndpointFactory from './endpoint.factory';
import Apiv7RequestFactory from './request.factory';
import service from './service';
import AggregationResponseTransformerService from './aggregation-response-transformer.service';
import Apiv7RequestUpgraderService from './request-upgrader.service';

const moduleName = 'ngOvhApiv7';

angular
  .module(moduleName, [
    'ngResource',
  ])
  .constant('APIV7_FILTER_COMPARATOR', APIV7_FILTER_COMPARATOR)
  .constant('APIV7_SORT_ORDER', APIV7_SORT_ORDER)
  .constant('APIV7_ENDPOINT_DEFAULT_ACTIONS', APIV7_ENDPOINT_DEFAULT_ACTIONS)
  .factory('Apiv7Endpoint', Apiv7EndpointFactory)
  .factory('Apiv7Request', Apiv7RequestFactory)
  .service('apiv7', service)
  .service('apiv7AggregationResponseTransformer', AggregationResponseTransformerService)
  .service('apiv7RequestUpgrader', Apiv7RequestUpgraderService);

export default moduleName;