app.directive('login', ['$http', function($http) {

        return {
            transclude: true,
            link: function(scope, element, attrs) {

                scope.isGuest = window.sessionStorage._auth == undefined;
            },
            template: '<a href="" ng-if="!isGuest" ng-click="logout()">LogOut({{user}})</a>'
        }
    }]);
//------------------file upload --------------------//
app.directive("ngFileSelect", function() {
    return {
        link: function($scope, el) {
            el.bind("change", function(e) {
                $scope.file = (e.srcElement || e.target).files[0];
                $scope.getFile();
            })
        }
    }
});
//------------------ datepicker ------------------------//
app.directive("ngDatepicker", function() {
    return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
            ngModel: '='
        },
        link: function(scope, element, attrs, ngModelCtrl) {

            element.datepicker({
                changeMonth: true,
                changeYear: true,
                yearRange: "-100:+0",
                maxDate: "+0D",
                autoclose: true,
                todayHighlight: true,
                format: 'mm/dd/yyyy'
            });
        }
    };
});
//------------------ datetimepicker ------------------------//
app.directive("ngDatetimepicker", function() {

    return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
            ngModel: '='
        },
        link: function($scope, element) {
            element.datetimepicker();
        }
    };
});
app.directive("ngEventFirst", function() {
    return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
            ngModel: '='
        },
        link: function(scope, element, ngModelCtrl) {

            element.datetimepicker().on("dp.change", function(e) {
                $('#end_date').data("DateTimePicker").minDate(e.date);
            });

        }
    };
});
app.directive("ngEventLast", function() {
    return {
        link: function(scope, element, ngModelCtrl) {

            element.datetimepicker({
                useCurrent: false //Important! See issue #1075
            }).on("dp.change", function(e) {
                $('#start_date').data("DateTimePicker").maxDate(e.date);
            });

        }
    };
});
app.directive("ngFromTime", function() {
    return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
            ngModel: '='
        },
        link: function(scope, element, attrs, ngModelCtrl) {

            element.datetimepicker({
                format: 'LT'
            }).on("dp.change", function(e) {
                element.parent('div').find('.to-time').data('DateTimePicker').minDate(e.date);
                changeDate();
            });
            scope.$watch('ngModel', function() {
                element.val(ngModelCtrl.$viewValue);
            });
            function changeDate() {
                ngModelCtrl.$setViewValue(element.val());

            }
            changeDate();
        }
    };
});
app.directive("ngToTime", function() {
    return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
            ngModel: '='
        },
        link: function(scope, element, attrs, ngModelCtrl) {

            element.datetimepicker({
                format: 'LT',
//                useCurrent: false
            }).on("dp.change", function(e) {
                element.parent('div').find('.from-time').data('DateTimePicker').maxDate(e.date);
                changeDate();
            });
            scope.$watch('ngModel', function() {
                element.val(ngModelCtrl.$viewValue);
            });
            function changeDate() {
                ngModelCtrl.$setViewValue(element.val());

            }
            changeDate();
        }
    };
});
//--------------select2-------------------------//
app.directive('select2User', function($http, rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            rest.path = 'users';
            rest.get().success(function(data) {

                var users = [];
                $.each(data.data, function(key, value) {
                    var obj = {'id': value.iUserId, 'text': value.vFirstName + ' ' + value.vLastName};
                    users.push(obj);
                });
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: users
                    });
                }, 500);

            }).error(function(data, error, status) {
            });
        }
    }
});
app.directive('select2Manager', function($http, rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            rest.path = 'user/2';
            rest.get().success(function(data) {

                var users = [];
                $.each(data.data, function(key, value) {
                    var obj = {'id': value.iUserId, 'text': value.vFirstName + ' ' + value.vLastName};
                    users.push(obj);
                });
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: users

                    });
                }, 200);

            }).error(function(data, error, status) {
            });
        }
    }
});
app.directive('select2Coordinator', function($http, rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            rest.path = 'user/1';
            rest.get().success(function(data) {

                var users = [];
                $.each(data.data, function(key, value) {
                    var obj = {'id': value.iUserId, 'text': value.vFirstName + ' ' + value.vLastName};
                    users.push(obj);
                });
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: users

                    });
                }, 200);

            }).error(function(data, error, status) {
            });
        }
    }
});
app.directive('select2Qa', function($http, rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            rest.path = 'user/3';
            rest.get().success(function(data) {
                var users = [];
                $.each(data.data, function(key, value) {
                    var obj = {'id': value.iUserId, 'text': value.vFirstName + ' ' + value.vLastName};
                    users.push(obj);
                });
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: users

                    });
                }, 200);

            }).error(function(data, error, status) {
            });
        }
    }
});
//--------------select2-------------------------//
app.directive('select2Property', function($http, rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            rest.path = 'propertyactive';
            rest.get().success(function(data) {
                var property = [];
                $.each(data, function(key, value) {
                    var obj = {'id': value.property_id, 'text': value.property_name};
                    property.push(obj);
                });
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: property

                    });
                }, 200);

            }).error(function(data, error, status) {
            });
        }
    }
});
app.directive('select2Gender', function($http, rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element, ngModel) {
            $http({dataType: "dataType", url: "gender.json", async: false}).success(function(data) {
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: data

                    });
                }, 500);

            });
        }
    }
});
//--------------select2 sectionn-------------------------//
app.directive('select2Client', function($http, rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            rest.path = 'clients';
            rest.get().success(function(data) {

                var users = [];
                $.each(data.data, function(key, value) {
                    var obj = {'id': value.iClientId, 'text': value.vClientName};
                    users.push(obj);
                });
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: users
                    });
                }, 200);
            }).error(function(data, error, status) {
            });
        }
    }
});
//---------  select2 currency---------------------//
app.directive('select2Currency', function($http, rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element) {
            rest.path = 'currencyactive';
            rest.get().success(function(data) {
                var currency = [];
                $.each(data, function(key, value) {
                    var obj = {id: value.currency_id, text: value.currency_code};
                    currency.push(obj);
                });
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: currency
                    });
                }, 200);

            }).error(function(data, error, status) {
            });
        }
    }
});
app.directive('select2Userstatus', function($http, rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element) {
            rest.path = 'userstatusactive';
            rest.get().success(function(data) {
                var status = [];
                $.each(data, function(key, value) {
                    var obj = {id: value.status_id, text: value.status_name};
                    status.push(obj);
                });
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: status

                    });
                }, 500);

            }).error(function(data, error, status) {
            });
        }
    }
});
app.directive('select2Tasktype', function($http, rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element) {
            rest.path = 'tasktypeactive';
            rest.get().success(function(data) {
                var type = [];
                $.each(data, function(key, value) {
                    var obj = {id: value.task_id, text: value.task_type};
                    type.push(obj);
                });
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: type
                    });
                }, 200);

            }).error(function(data, error, status) {
            });
        }
    }
});
app.directive('select2Sourcetype', function($http, rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element, ngModel) {
            $http({dataType: "dataType", url: "resource.json", async: false}).success(function(data) {
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: data
                    });
                }, 200)

            }).error(function(data) {

            });
        }
    }
});
//--------- user type select2---------------------//
app.directive('ngSelect2Usertype', function(rest, $timeout) {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            rest.path = 'defaultUser';
            rest.get().success(function(data) {

                var type = [];
                $.each(data, function(key, value) {
                    var obj = {'id': value.iTypeId, 'text': value.vType};
                    type.push(obj);
                });
                $timeout(function() {
                    element.select2({
                        allowClear: true,
                        data: type

                    });
                }, 500);

            }).error(function(data, error, status) {
            });
        }
    }

});
//-------------- autocomplete location ---------------------------//
app.directive('googleplace', function() {
    return {
        require: 'ngModel',
        scope: {
            ngModel: '=',
            details: '=?'
        },
        link: function(scope, element, attrs, model) {
            var options = {
                types: ['geocode'],
                componentRestrictions: {}
            };
            var addr_json = [];
            var componentForm = {
                street_number: 'short_name',
//                route: 'long_name',
                locality: 'long_name',
                administrative_area_level_1: 'short_name',
                country: 'long_name',
                postal_code: 'short_name'
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                var geoComponents = scope.gPlace.getPlace();
                var latitude = geoComponents.geometry.location.lat();
                var longitude = geoComponents.geometry.location.lng();
                var addressComponents = geoComponents.address_components;
                addressComponents = addressComponents.filter(function(component) {
                    switch (component.types[0]) {
                        case "administrative_area_level_1":
                            return true;
                        case "locality":
                            return true;
                        case "route":
                            return true;
                        case "country":
                            return true;
                        case "postal_code":
                            return true;
                        default:
                            return false;
                    }
                }).map(function(obj) {
                    return obj.long_name;
                });
                addressComponents.push(latitude, longitude);
                fillInAddress();
                function fillInAddress() {

                    var addr = element.attr('id');
                    for (var component in componentForm) {

                        document.getElementById(addr + '_' + component).value = '';
                        document.getElementById(addr + '_' + component).disabled = false;
                    }
                    for (var i = 0; i < geoComponents.address_components.length; i++) {
                        var addressType = geoComponents.address_components[i].types[0];
                        if (componentForm[addressType]) {

                            var val = geoComponents.address_components[i][componentForm[addressType]];
                            var addr = element.attr('id');
                            document.getElementById(addr + '_' + addressType).value = val;
                            addr_json.push({id: addressType, value: val});
                        }
                    }
                }

                scope.$apply(function() {
                    scope.details = addr_json;
                    model.$setViewValue(element.val());
                });
            });
        }
    };
});
app.directive('ngRow', ['$compile', function($compile) { // inject $compile service as dependency
        return {
            restrict: 'EA',
            link: function(scope, element, attrs) {
                scope.counter = 1;
                element.bind('click', function() {

                    var input = angular.element('<tr class="put_row" id="item_' + scope.counter + '">' +
                            '<td><input ng-model="value_name[' + scope.counter + ']" type="text" class="form-control" name="value_name[]" placeholder="Value name"/> </td>' +
                            '<td><input ng-model="description[' + scope.counter + ']" type="text" class="form-control name="description[]" placeholder="Description" /></td>' +
                            '<td><a href="javascript:void(0)" ng-click="deleteValue(' + scope.counter + ')" title="delete"><i class="fa fa-trash"></i></a></td>' +
                            '</tr>');
                    var compile = $compile(input)(scope);
                    var len = $('.put_row').length;
                    var totalClone = len - 1;
                    if (len > 1) {

                        $('#item_' + totalClone).after(input);
                    } else {

                        $('#item_0').after(input);
                    }
                    scope.counter++;
                });
            }
        }
    }]);
app.directive('ngRow2', ['$compile', function($compile) { // inject $compile service as dependency
        return {
            restrict: 'EA',
            link: function(scope, element, attrs) {
                scope.counterr = 0;
                element.bind('click', function() {
                    debugger;
                    var totalClone = 0;
                    var len = $('.put_row2').length;
                    var input = angular.element('<tr class="put_row2" id="' + len + '">' +
                            '<td><input ng-model="new_value[' + scope.counterr + ']" type="text" class="form-control" name="new_value[]" placeholder="Value name"/> </td>' +
                            '<td><input ng-model="new_description[' + scope.counterr + ']" type="text" class="form-control name="new_description[]" placeholder="Description" /></td>' +
                            '<td><a href="javascript:void(0)" ng-click="deleteValue2(' + scope.counterr + ', ' + len + ')" title="delete"><i class="fa fa-trash"></i></a></td>' +
                            '</tr>');
                    var compile = $compile(input)(scope);
                    if (len > 0) {
                        totalClone = len - 1;
                        $('#' + totalClone).after(input);
                    } else {
                        totalClone = len;
                        $('#additional_row').html(input);
                    }

                    scope.counterr++;
                });
            }
        }
    }]);
app.directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            elm.bind('blur', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(elm.html());
                });
            });
            // model -> view
            ctrl.render = function(value) {

                elm.html(value);
            };
        }
    };
});
//-------------------- form for stepswizard -----------------------------------//
app.directive('ngStepform', createDirective('ngStepform'));
function createDirective(name) {
    return function() {
        return {
            restrict: 'EA',
            compile: function(element, attr) {

                //-----------form wizards -------------------//
                $w4validator = element.find("form");
                $w4validator.validate({
                    highlight: function(element) {
                        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
                    },
                    success: function(element) {
                        $(element).closest('.form-group').removeClass('has-error');
                        $(element).remove();
                    },
                    errorPlacement: function(error, element) {
                        element.parent().append(error);
                    }
                });
                element.bootstrapWizard({
                    tabClass: 'wizard-steps',
                    firstSelector: null,
                    lastSelector: null,
                    onNext: function(tab, navigation, index, newindex) {
//                        if ($w4validator.valid()) {
//                            return true;
//                        } else {
//                            return false;
//                        }
                        return true;
                    }
                });
            }
        }
    }
}
//---------------only number input ---------------------//
app.directive('ngCapitalize', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl) {

            function fromUser(text) {

                var transformedInput = text.substring(0, 1).toUpperCase() + text.substring(1);
                ngModelCtrl.$setViewValue(transformedInput);
                ngModelCtrl.$render();
                element.html(transformedInput);
                return transformedInput;

            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});
app.directive('capitalizeFirst', function() {
    return {
        require: 'ngModel',
        scope: {
            ngModel: "="
        },
        link: function(scope, element, attrs, modelCtrl) {

            scope.$watch("ngModel", function() {
                if (scope.ngModel) {
                    scope.ngModel = scope.ngModel.replace(/^(.)|\s(.)/g, function(v) {
                        return v.toUpperCase( );
                    });
                }
            });
        }
    };
});
