function notification(msg, type) {
    var n = noty({layout: 'center',
        type: type,
        text: msg, // can be html or string
        timeout: 2000,
    });
}
var errorCallback = function(data) {
    notification(data['msg'], 'error');
};
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
function randNumber() {
    var text = "";
    var possible = "0123456789";
    for (var i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
function stringTodate(dateString) {
    var d = new Date(dateString);
    return d;
}
function dateToformat(dateString) {

    var d = new Date(dateString);

    var mm = (d.getMonth() + 1).toString();
    var dd = d.getDate().toString();
    var min = d.getMinutes().toString();
    var mmChars = mm.split('');
    var ddChars = dd.split('');
    var minChar = min.split('');

    var hour = '';
    if (d.getHours() > 12) {
        hour = d.getHours() - 12;
        return (mmChars[1] ? mm : "0" + mmChars[0]) + '/' + (ddChars[1] ? dd : "0" + ddChars[0]) + '/' + d.getFullYear() + ' ' + hour + ':' + (minChar[1] ? min : "0" + minChar[0]) + ' PM';
    } else {
        return (mmChars[1] ? mm : "0" + mmChars[0]) + '/' + (ddChars[1] ? dd : "0" + ddChars[0]) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + (minChar[1] ? min : "0" + minChar[0]) + ' AM';
    }

//    return  d.SubtractMonth(1);
}
function dateOnresize(dateString, delta) {
    var diff = delta._data;
    var dif_hour = diff.hours;
    var dif_min = diff.minutes;
    var dif_day = diff.days;
    var d = new Date(dateString);
    var mm = (d.getMonth() + 1).toString();
    var dd = (d.getDate() + dif_day).toString();
    var min = (d.getMinutes() + dif_min).toString();
    var mmChars = mm.split('');
    var ddChars = dd.split('');
    var minChar = min.split('');
    var new_date = '';
    var hour = d.getHours() + dif_hour;
    if (hour > 12) {
        var new_hour = hour - 12;
        new_date = (mmChars[1] ? mm : "0" + mmChars[0]) + '/' + (ddChars[1] ? dd : "0" + ddChars[0]) + '/' + d.getFullYear() + ' ' + new_hour + ':' + (minChar[1] ? min : "0" + minChar[0]) + ' PM';
    } else {
        new_date = (mmChars[1] ? mm : "0" + mmChars[0]) + '/' + (ddChars[1] ? dd : "0" + ddChars[0]) + '/' + d.getFullYear() + ' ' + hour + ':' + (minChar[1] ? min : "0" + minChar[0]) + ' AM';
    }
    return dateTostring(new_date);
}
function dateTostring(date) {
    var data = date.split(" ");
    var st_date = data[0].split('/');
    var time = data[1].split(':');
    var hour = '';
    if (data[2] == 'AM') {
        hour = time[0];
    } else {
        hour = 12 + parseInt(time[0]);
    }
    var return_date = new Date(st_date[2], st_date[0] - 1, st_date[1], hour, time[1]);

    return  return_date;
}
function stringTommddyy(dateString) {
    var today = new Date(dateString)
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    return today = yyyy + '-' + mm + '-' + dd;
}
function getDayname(d) {
    var new_date = new Date(d);

    var weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";
    return n = weekday[new_date.getDay()];
}
function displayRendom(date, cell, data) {
    var curr = stringTodate(data.data[0].wh_type_value);
    var selector_date = stringTommddyy(date);
    var display_data = JSON.parse(data.data[0].wh_data);
    if (data.data[0].for_type == 1) {
        var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
        var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
        var first_date = stringTommddyy(firstday);
        var last_date = stringTommddyy(lastday);
        if (selector_date >= first_date && selector_date <= last_date) {
            $.each(display_data, function(i, val) {
                if (val.value == 1 && i == getDayname(date)) {
                    $(cell).removeClass('ui-widget-content');
                    $(cell).addClass('holiday');
                }
            });
        }
    } else if (data.data[0].for_type == 2) {
        var firstDay = new Date(curr.getFullYear(), curr.getMonth(), 1);
        var lastDay = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);
        var first_date = stringTommddyy(firstDay);
        var last_date = stringTommddyy(lastDay);
        if (selector_date >= first_date && selector_date <= last_date) {
            $.each(display_data, function(i, val) {
                if (val.value == 1 && i == getDayname(date)) {
                    $(cell).removeClass('ui-widget-content');
                    $(cell).addClass('holiday');
                }
            });
        }
    } else {
        var firstDay = new Date(curr.getFullYear(), 1, 1);
        var lastDay = new Date(curr.getFullYear() + 1, 0, 0);
        var first_date = stringTommddyy(firstDay);
        var last_date = stringTommddyy(lastDay);
        if (selector_date >= first_date && selector_date <= last_date) {
            $.each(display_data, function(i, val) {
                if (val.value == 1 && i == getDayname(date)) {
                    $(cell).removeClass('ui-widget-content');
                    $(cell).addClass('holiday');
                }
            });
        }
    }
}
app.controller('loginController', function($scope, rest, $window, $location) {
    $scope.alerts = [];

    /*-------Check for login--------*/
    if ($window.sessionStorage.session_iUserId != undefined)
    {
        $location.path('/dashboard');
    }
    /*-------Check for login--------*/
    $scope.login = function(user, formId) {
        if ($("#" + formId).valid()) {
            rest.path = 'authenticate';
            rest.post(user).success(function(data) {
                $window.sessionStorage.setItem("session_iUserId", data.session_data.iUserId);
                $window.sessionStorage.setItem("session_eUserStatus", data.session_data.eUserStatus);
                $window.sessionStorage.setItem("session_vEmailAddress", data.session_data.vEmailAddress);
                $window.sessionStorage.setItem("session_vUserName", data.session_data.vUserName);
                $window.sessionStorage.setItem("session_iFkUserTypeId", data.session_data.iFkUserTypeId);
                $window.sessionStorage.setItem("session_vUserFullName", data.session_data.vFirstName + " " + data.session_data.vLastName);
                $window.sessionStorage.setItem("session_vProfilePic", data.session_data.vProfilePic);
                $location.path('/dashboard');
            }).error(errorCallback);
        }
    };
    $scope.resetPass = function(reset, formId) {
        if ($("#" + formId).valid()) {
            rest.path = 'resetpassword';
            rest.post(reset).success(function(data) {
                $location.path('/');
            }).error(errorCallback);
        }
    };

})
        .controller('dashboardController', function($scope, $window, $location, rest) {

            /*-------Check for login--------*/
            if ($window.sessionStorage.session_iUserId == undefined) {
                $window.sessionStorage.clear();
                $location.path('/');
            }
            /*-------Check for login--------*/



        })
        .controller('usertypeController', function($scope, $location, $route, rest) {

            rest.path = 'usertype';
            rest.get().success(function(data) {
                $scope.usertype = data;
            }).error(errorCallback);

            $scope.saveType = function(formId) {
                if ($("#" + formId).valid()) {
                    rest.path = 'saveusertype';
                    rest.post($scope.type).success(function(data) {
                        $route.reload();
                    }).error(errorCallback);
                }
                ;
            }
            $scope.updateType = function(formId, id) {
                if ($("#" + formId).valid()) {
                    rest.path = 'updateusertype/' + id;
                    rest.post($scope.type).success(function(data) {
                        $route.reload();
                    }).error(errorCallback);
                }
                ;
            }
            $scope.getType = function(id) {
                rest.path = 'usertype/' + id;
                rest.get().success(function(data) {
                    $scope.type = data;
                }).error(errorCallback);
            }
            $scope.deleteType = function(id) {
                bootbox.confirm("Are you sure you want to delete?", function(result) {
                    if (result == true) {
                        rest.path = 'deleteType/' + id;
                        rest.delete().success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                });
            };
        })
        .controller('userController', function($scope, $location, $route, rest, $window, $rootScope) {

            rest.path = 'users';
            rest.get().success(function(data) {
                $scope.userlist = data.data;
            }).error(errorCallback);
            $window.localStorage.iUserId = "";
            $window.localStorage.userType = 1;
            $rootScope.uType = 1;
            $scope.deleteUser = function(id) {
                bootbox.confirm("Are you sure you want to delete this user?<br/><strong>Please note that ALL Info. under this User will also be deleted</strong>", function(result) {
                    if (result == true) {
                        rest.path = 'deleteUser/' + id;
                        rest.delete().success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                });
            };

        })
        .controller('communicationController', function($scope, $location, $route, fileReader, rest, $window, $routeParams) {
            $scope.uType = $window.localStorage.userType;
            $scope.checkusername = function() {
                rest.path = 'checkusername';
                rest.post($scope.userprofiledata.vUserName).success(function(data) {
                }).error(errorCallback);

            };
            $scope.checkemailaddress = function() {
                rest.path = 'checkemailaddress';
                rest.post($scope.userprofiledata.vEmailAddress).success(function(data) {
                }).error(errorCallback);
            };
            $scope.userTypes = true;
            $scope.sourceType = function(type, element) {
                rest.path = 'typebyresource/' + type;
                rest.get().success(function(data) {
                    $scope.userTypes = false;
                    var userType = [];
                    $.each(data, function(i, val) {
                        userType.push({id: val.iTypeId, text: val.vType});
                    });
                    $('#' + element).select2({
                        allowClear: true,
                        data: userType
                    });
                }).error(errorCallback);
            };
            $scope.setUsername = function(value) {

                if ($scope.userprofiledata.vLastName) {
                    if (value != undefined) {
                        $scope.userprofiledata.vUserName = value + ' ' + $scope.userprofiledata.vLastName;
                    } else {
                        $scope.userprofiledata.vUserName = $scope.userprofiledata.vLastName;
                    }
                } else {
                    $scope.userprofiledata.vUserName = value;
                }

            };
            $scope.setUsername2 = function(value) {

                if ($scope.userprofiledata.vFirstName) {
                    if (value != undefined) {
                        $scope.userprofiledata.vUserName = $scope.userprofiledata.vFirstName + ' ' + value;
                    } else {
                        $scope.userprofiledata.vUserName = $scope.userprofiledata.vFirstName;
                    }
                } else {
                    $scope.userprofiledata.vUserName = value;
                }
            };
            rest.path = 'usertype';
            rest.get().success(function(data) {
                $scope.userTypes = data;
            }).error(errorCallback);
            if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
                $routeParams.id = $window.localStorage.iUserId;
            }
            if ($routeParams.id != '' && $routeParams.id != undefined) {
                rest.path = 'getProfile';
                rest.model().success(function(data) {
                    $window.localStorage.iUserId = data.iUserId;
                    $scope.imgshow = true;
                    var dob = data.dtBirthDate.split("-");
                    $scope.userprofiledata = data;
                    debugger;
                    $scope.userprofiledata.dtBirthDate = dob[1] + '/' + dob[2] + '/' + dob[0];

                    $.each(JSON.parse(data.address1Detail), function(i, val) {
                        $('#' + val.id).val(val.value);
                    });
                    $.each(JSON.parse(data.address2Detail), function(i, val) {
                        $('#' + val.id).val(val.value);
                    });

                    rest.path = 'getProfile/' + data.created_by;
                    rest.get().success(function(result) {
                        $scope.CreatedBy = result.vFirstName + ' ' + result.vLastName;
                    }).error(errorCallback);

                }).error(errorCallback);
            } else {
                $scope.userprofiledata = {};
                $scope.userprofiledata.iResourceNumber = randNumber();
                $scope.userprofiledata.vPassword = makeid();
                var currentdate = new Date();
                $scope.userprofiledata.dtCreationDate = currentdate.getDate() + "/"
                        + (currentdate.getMonth() + 1) + "/"
                        + currentdate.getFullYear() + " "
                        + currentdate.getHours() + ":"
                        + currentdate.getMinutes() + ":"
                        + currentdate.getSeconds();
            }

            //----------------save image section ------------------//

            $scope.getFile = function() {
                fileReader.readAsDataUrl($scope.file, $scope)
                        .then(function(result) {
                            $scope.imgshow = false;
                            $scope.imageSrc = result;

                        });
            };

            $scope.saveUserProfile = function(formId) {
                if ($("#" + formId).valid()) {
                    if ($scope.userprofiledata.iUserId) {
                        //--------address only -----------------//
                        var address1 = [];
                        var address2 = [];
                        $("[id^=address1_]").each(function(i, val) {
                            address1.push({id: val.id, value: val.value});
                        });
                        $("[id^=address2_]").each(function(i, val) {
                            address2.push({id: val.id, value: val.value});
                        });
                        $scope.userprofiledata.address1Detail = JSON.stringify(address1);
                        $scope.userprofiledata.address2Detail = JSON.stringify(address2);
                        //---------address over -----------------//
                        $scope.userprofiledata.image = $scope.imageSrc;
                        rest.path = 'saveuserprofile';
                        rest.put($scope.userprofiledata).success(function(data) {
                            setTimeout(function() {
                                $route.reload();
                            }, 2000);

                        }).error(errorCallback);
                    } else {
                        //--------address only -----------------//
                        var address1 = [];
                        var address2 = [];
                        $("[id^=address1_]").each(function(i, val) {
                            address1.push({id: val.id, value: val.value});
                        });
                        $("[id^=address2_]").each(function(i, val) {
                            address2.push({id: val.id, value: val.value});
                        });
                        $scope.userprofiledata.address1Detail = JSON.stringify(address1);
                        $scope.userprofiledata.address2Detail = JSON.stringify(address2);
                        //---------address over -----------------//
                        $scope.userprofiledata.image = $scope.imageSrc;
                        $scope.userprofiledata.created_by = $window.sessionStorage.session_iUserId;
                        rest.path = 'saveuserprofile';
                        rest.post($scope.userprofiledata).success(function(data) {
                            $window.localStorage.iUserId = data.iUserId;
                            $route.reload();


                        }).error(errorCallback);
                    }
                }
            };


        })
        .controller('propController', function($scope, $location, $route, fileReader, rest, $window, $routeParams) {
            $scope.uType = $window.localStorage.userType;
            if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
                $routeParams.id = $window.localStorage.iUserId;
            }
            $scope.loadValue = function(id, element) {
                $scope.propertyData.value_id = '';
                $scope.show_value = true;
                rest.path = 'searchByCreteria/' + id + '/' + $routeParams.id + '/' + $window.localStorage.userType;
                rest.get().success(function(data) {
                    var valueData = [];
                    $.each(data, function(key, value) {
                        var obj = {'id': value.value_id, 'text': value.value_name};
                        valueData.push(obj);
                    });
                    $('#' + element).select2({
                        allowClear: true,
                        data: valueData,
                        multiple: true

                    });


                }).error(function(data, error, status) {
                });

            };

            if ($routeParams.id != '' && $routeParams.id != undefined) {
                rest.path = 'getUserProperty/' + $routeParams.id + '/' + $window.localStorage.userType;
                rest.get().success(function(data) {
                    $scope.propList = data;
                }).error(errorCallback);
            }

            $scope.getProperty = function(id, element) {

                $scope.show_value = true;
                rest.path = 'getUserProperty/' + id;
                rest.get().success(function(data) {
                    var data2 = $.extend({}, data);
                    $('#property-index').select2('val', data2[0].property_id);
                    $scope.propertyData = data2[0];

                    rest.path = 'propertyvalues/' + data2[0].property_id;
                    rest.get().success(function(data) {
                        var valueData = [];
                        var arrId = [];
                        $.each(data, function(key, value) {
                            var obj = {'id': value.value_id, 'text': value.value_name};
                            arrId.push(value.value_id);
                            valueData.push(obj);
                        });
                        $('#' + element).select2({
                            allowClear: true,
                            data: valueData,
                            multiple: true,
                        });
                    }).error(errorCallback);

                }).error(errorCallback);

            };

            $scope.deleteProperty = function(id) {
                bootbox.confirm("Are you sure you want to delete?", function(result) {
                    if (result == true) {
                        rest.path = 'deleteUserProperty/' + id;
                        rest.delete().success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                });
            };
            $scope.saveProperty = function(formId) {

                if ($("#" + formId).valid()) {
                    if ($scope.propertyData.id) {
                        $routeParams.id = $scope.propertyData.id;
                        rest.path = 'userProperty';
                        rest.put($scope.propertyData).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    } else {
                        if ($routeParams.id) {
                            $scope.propertyData.user_id = $routeParams.id;
                            $scope.propertyData.type = $window.localStorage.userType;
                            rest.path = 'userProperty';
                            rest.post($scope.propertyData).success(function(data) {
                                $route.reload();
                            }).error(errorCallback);
                        } else {
                            notification('Please create User', 'warning');
                            $route.reload();
                        }
                    }
                }
            };
        })
        .controller('paymentController', function($scope, $location, $route, fileReader, rest, $window, $routeParams) {
            $scope.uType = $window.localStorage.userType;
            if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
                $routeParams.id = $window.localStorage.iUserId;
            }

            if ($routeParams.id != '' && $routeParams.id != undefined) {
                rest.path = 'getuserpayment/' + $routeParams.id + '/' + $window.localStorage.userType;
                rest.get().success(function(data) {
                    if (data == null) {
                        $scope.paymentData = {};
                    } else {
                        $scope.paymentData = data;
                    }
                    if (data != null) {
                        $scope.payment = JSON.parse(data.vPaymentInfo);
                        $scope.bank = JSON.parse(data.vBankInfo);
                    }
                }).error(errorCallback);
            } else {
                $scope.paymentData = {};
            }

            $scope.savePayment = function(formId) {
                if ($("#" + formId).valid()) {
                    if ($scope.paymentData.iPaymentId != '' && $scope.paymentData.iPaymentId != undefined) {
                        $scope.payament_data = {};
                        $scope.payament_data.vPaymentInfo = JSON.stringify($scope.payment);
                        $scope.payament_data.vBankInfo = JSON.stringify($scope.bank);

                        rest.path = 'paymentsave/' + $routeParams.id + '/' + $window.localStorage.userType;
                        rest.post($scope.payament_data).success(function(data) {
                            notification('saved successfully', 'success');
                            setTimeout(function() {
                                $route.reload();
                            }, 200);

                        }).error(errorCallback);
                    } else {
                        if ($routeParams.id != '' && $routeParams.id != undefined) {
                            $scope.payament_data = {};
                            $scope.payament_data.iUserId = $window.localStorage.iUserId;
                            $scope.payament_data.iType = $window.localStorage.userType;
                            $scope.payament_data.vPaymentInfo = JSON.stringify($scope.payment);
                            $scope.payament_data.vBankInfo = JSON.stringify($scope.bank);

                            rest.path = 'paymentsave';
                            rest.post($scope.payament_data).success(function(data) {
                                $route.reload();
                            }).error(errorCallback);
                        } else {
                            notification('Please create User', 'warning');
                            $route.reload();
                        }
                    }

                }
            };

        })
        .controller('usertaskController', function($scope, $location, $route, fileReader, rest, $window, $routeParams) {
            $scope.uType = $window.localStorage.userType;
            if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
                $routeParams.id = $window.localStorage.iUserId;
            }
            if ($routeParams.id != undefined && $routeParams.id != "") {
                rest.path = 'usertask/' + $routeParams.id + '/' + $window.localStorage.userType;
                rest.get().success(function(data) {
                    $scope.tasklist = data.data;
                }).error(errorCallback);
            }
            $scope.getTaskbyId = function(id) {
                rest.path = 'getTask/' + id;
                rest.get().success(function(data) {
                    $('#vTaskType').select2('val', data.vTaskType);
                    $('#iContact').select2('val', data.iContact);
                    $('#iPersonResponsible').select2('val', data.iPersonResponsible);
                    $scope.task = data;

                }).error(errorCallback);
            };
            $scope.saveTask = function(formId) {
                if ($("#" + formId).valid()) {
                    if ($scope.task.iTaskId) {
                        $scope.task.vDue = $('#due_date').val();
                        rest.path = 'tasksave/' + $scope.task.iTaskId;
                        rest.post($scope.task).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);

                    } else {
                        if ($routeParams.id) {
                            $scope.task.vDue = $('#due_date').val();
                            $scope.task.iType = $window.localStorage.userType;
                            $scope.task.iUserId = $routeParams.id;
                            rest.path = 'tasksave';
                            rest.post($scope.task).success(function(data) {
                                $route.reload();
                            }).error(errorCallback);
                        } else {
                            notification('Please create User', 'warning');
                            $route.reload();
                        }

                    }
                }

                $scope.deleteTask = function(id) {
                    bootbox.confirm("Are you sure you want to delete?", function(result) {
                        if (result == true) {
                            rest.path = 'deleteTask/' + id;
                            rest.delete().success(function(data) {
                                $route.reload();
                            }).error(errorCallback);
                        }
                    });
                };
            };
        })
        .controller('basicinfoController', function($scope, $location, $route, rest, $window, fileReader, $routeParams) {
            $scope.uType = $window.localStorage.userType;
            $scope.clientStatus = [
                {name: 'Active', value: 'active'},
                {name: 'Inactive', value: 'inactive'},
                {name: 'Blacklisted', value: 'blacklisted'},
                {name: 'New', value: 'new'},
                {name: 'Prospect', value: 'prospect'},
                {name: 'Contacted', value: 'contacted'},
                {name: 'Client', value: 'client'},
            ];
            $scope.customerType = [
                {name: 'Direct Customer', value: 'Direct Customer'},
                {name: 'Direct/Indirect Customer', value: 'Direct/Indirect Customer'},
                {name: 'indirect customer', value: 'indirect customer'}
            ];
            $scope.getFile = function() {
                fileReader.readAsDataUrl($scope.file, $scope)
                        .then(function(result) {
                            $scope.imgshow = false;
                            $scope.imageSrc = result;

                        });
            };
            $scope.copytoship = function() {
                if ($scope.address1 != undefined && $scope.address1 != '') {
                    $scope.address2 = $scope.address1;
                    $scope.info.vAddress2 = $scope.info.vAddress1;
                    $.each($scope.address1, function(i, val) {
                        $('#address2_' + val.id).val(val.value);
                    });
                }
            };
            $scope.checkemailaddress = function(data) {
                rest.path = 'checkclient';
                rest.post(data).success(function(data) {
                }).error(errorCallback);
            };
            if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
                $routeParams.id = $window.localStorage.iUserId;
            }
            if ($routeParams.id != '' && $routeParams.id != undefined) {
                $window.localStorage.iUserId = $routeParams.id;
                rest.path = 'client';
                rest.model().success(function(data) {
                    $scope.imgshow = true;
                    $scope.info = data;
                    $.each(JSON.parse(data.address1Detail), function(i, val) {
                        $('#' + val.id).val(val.value);
                    });
                    $.each(JSON.parse(data.address2Detail), function(i, val) {
                        $('#' + val.id).val(val.value);
                    });
                    $scope.address1 = JSON.parse(data.address1Detail);
                    $scope.address2 = JSON.parse(data.address2Detail);
                }).error(errorCallback);
            } else {
                $scope.info = {};
                var currentdate = new Date();
                $scope.info.vClientNumber = randNumber();
                $scope.info.dtCreationDate = currentdate.getDate() + "/"
                        + (currentdate.getMonth() + 1) + "/"
                        + currentdate.getFullYear() + " "
                        + currentdate.getHours() + ":"
                        + currentdate.getMinutes() + ":"
                        + currentdate.getSeconds();
            }


            $scope.saveClientProfile = function(formId) {
                if ($("#" + formId).valid()) {
                    if ($scope.info.iClientId) {
                        $scope.info.image = $scope.imageSrc;
                        //--------address only -----------------//
                        var address1 = [];
                        var address2 = [];
                        $("[id^=address1_]").each(function(i, val) {
                            address1.push({id: val.id, value: val.value});
                        });
                        $("[id^=address2_]").each(function(i, val) {
                            address2.push({id: val.id, value: val.value});
                        });
                        $scope.info.address1Detail = JSON.stringify(address1);
                        $scope.info.address2Detail = JSON.stringify(address2);
                        //---------address over -----------------//
                        rest.path = 'clientsave';
                        rest.put($scope.info).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    } else {
                        if ($scope.imageSrc) {
                            $scope.info.image = $scope.imageSrc;
                        }
                        //--------address only -----------------//
                        var address1 = [];
                        var address2 = [];
                        $("[id^=address1_]").each(function(i, val) {
                            address1.push({id: val.id, value: val.value});
                        });
                        $("[id^=address2_]").each(function(i, val) {
                            address2.push({id: val.id, value: val.value});
                        });
                        $scope.info.address1Detail = JSON.stringify(address1);
                        $scope.info.address2Detail = JSON.stringify(address2);
                        //---------address over -----------------//
                        rest.path = 'clientsave';
                        rest.post($scope.info).success(function(data) {
                            $window.localStorage.iUserId = data.iClientId;
                            $route.reload();
                        }).error(errorCallback);
                    }
                }
            };
        })
        .controller('contactController', function($scope, $location, $route, rest, $window, $routeParams) {
            $scope.uType = $window.localStorage.userType;
            if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
                $routeParams.id = $window.localStorage.iUserId;
            }
            if ($routeParams.id) {
                rest.path = 'contact';
                rest.model().success(function(data) {
                    $scope.contactlist = data.data;
                }).error(errorCallback);
            }
            $scope.editContact = function(id) {
                rest.path = 'editcontact/' + id;
                rest.get().success(function(data) {
                    $scope.contact = data;
                }).error(errorCallback);
            };
            $scope.saveContact = function(formId) {
                if ($("#" + formId).valid()) {
                    if ($scope.contact.iContactId) {
                        rest.path = 'contactsave/' + $scope.contact.iContactId;
                        rest.post($scope.contact).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    } else {
                        if ($routeParams.id) {
                            $scope.contact.iClientId = $routeParams.id;
                            rest.path = 'contactsave';
                            rest.post($scope.contact).success(function(data) {
                                $route.reload();
                            }).error(errorCallback);
                        } else {
                            notification('Please create User', 'warning');
                            $route.reload();
                        }
                    }

                }
            };

            $scope.deleteContact = function(id) {
                bootbox.confirm("Are you sure you want to delete?", function(result) {
                    if (result == true) {
                        rest.path = 'contactdelete/' + id;
                        rest.delete().success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                });
            };

        })
        .controller('clientController', function($scope, $location, $route, rest, $window, $rootScope) {
            $window.localStorage.iUserId = "";
            $window.localStorage.userType = 2;
            $rootScope.uType = 2;
            rest.path = 'clients';
            rest.get().success(function(data) {
                $scope.clientlist = data.data;
            }).error(errorCallback);
            $scope.deleteClient = function(id) {
                bootbox.confirm("Are you sure you want to delete this user?<br/><strong>Please note that ALL Info. under this User will also be deleted</strong>", function(result) {
                    if (result == true) {
                        rest.path = 'deleteClient/' + id;
                        rest.delete().success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                });
            };

        })
        .controller('tasktypeController', function($scope, $location, $route, rest, $routeParams, $window) {
            $scope.uType = $window.localStorage.userType;

            rest.path = 'tasktype';
            rest.get().success(function(data) {
                $scope.tasktype = data;
            }).error(errorCallback);

            $scope.getType = function(id) {
                $routeParams.id = id;
                rest.path = 'tasktype';
                rest.model().success(function(data) {
                    debugger;
                    $scope.task = data;
                }).error(errorCallback);
            }
            $scope.save = function(formId) {
                if ($("#" + formId).valid()) {
                    if ($scope.task.task_id) {
                        $routeParams.id = $scope.task.task_id;
                        rest.path = 'tasktype';
                        rest.put($scope.task).success(function() {
                            $route.reload();
                        }).error(errorCallback);
                    } else {
                        rest.path = 'tasktype';
                        rest.post($scope.task).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                }
            };
            $scope.deleteModel = function(id) {
                bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                    if (result == true) {
                        rest.path = 'tasktype/' + id;
                        rest.delete().success(function() {
                            $route.reload();
                        }).error(errorCallback);
                    }
                });
            };
        })
        .controller('userstatusController', function($scope, $location, $route, rest, $routeParams) {
            rest.path = 'userstatus';
            rest.get().success(function(data) {
                $scope.userStatus = data;
            }).error(errorCallback);

            $scope.getType = function(id) {
                $routeParams.id = id;
                rest.path = 'userstatus';
                rest.model().success(function(data) {
                    $scope.status = data;
                }).error(errorCallback);
            }
            $scope.save = function(formId) {
                if ($("#" + formId).valid()) {
                    if ($scope.status.status_id) {
                        $routeParams.id = $scope.status.status_id;
                        rest.path = 'userstatus';
                        rest.put($scope.status).success(function() {
                            $route.reload();
                        }).error(errorCallback);
                    } else {
                        rest.path = 'userstatus';
                        rest.post($scope.status).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                }
            };
            $scope.deleteModel = function(id) {
                bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                    if (result == true) {
                        rest.path = 'userstatus/' + id;
                        rest.delete().success(function() {
                            $route.reload();
                        }).error(errorCallback);
                    }
                });
            };
        })
        .controller('currencyController', function($scope, $location, $route, rest, $routeParams) {
            rest.path = 'currency';
            rest.get().success(function(data) {
                $scope.currencyData = data;
            }).error(errorCallback);

            $scope.getType = function(id) {
                $routeParams.id = id;
                rest.path = 'currency';
                rest.model().success(function(data) {
                    $scope.currency = data;
                }).error(errorCallback);
            }
            $scope.save = function(formId) {
                if ($("#" + formId).valid()) {
                    if ($scope.currency.currency_id) {
                        $routeParams.id = $scope.currency.currency_id;
                        rest.path = 'currency';
                        rest.put($scope.currency).success(function() {
                            $route.reload();
                        }).error(errorCallback);
                    } else {
                        rest.path = 'currency';
                        rest.post($scope.currency).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                }
            };
            $scope.deleteModel = function(id) {
                bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                    if (result == true) {
                        rest.path = 'currency/' + id;
                        rest.delete().success(function() {
                            $route.reload();
                        }).error(errorCallback);
                    }
                });
            };
        })
        .controller('PropertyController', function($scope, $location, $route, rest, $routeParams) {
            $scope.value_form = false;
            $scope.edit_value = false;
            $scope.value_name = [];
            $scope.description = [];
            $scope.value_id = [];
            $scope.new_value = [];
            $scope.new_description = [];
            rest.path = 'property';
            rest.get().success(function(data) {
                $scope.propertiesList = data;
            }).error(errorCallback);

            $scope.getType = function(id) {
                $routeParams.id = id;
                rest.path = 'property';
                rest.model().success(function(data) {
                    $scope.propertyData = data;
                    $scope.edit_value = true;
                    rest.path = 'propertyvalues';
                    rest.model().success(function(data) {
                        $scope.values = data;
                    }).error(errorCallback);

                }).error(errorCallback);
            }
            $scope.save = function(formId) {
                if ($("#" + formId).valid()) {
                    if ($scope.propertyData.property_id) {

                        $routeParams.id = $scope.propertyData.property_id;
                        rest.path = 'property';
                        rest.put($scope.propertyData).success(function() {
                            $route.reload();
                        }).error(errorCallback);
                    } else {
                        rest.path = 'property';
                        rest.post($scope.propertyData).success(function(data) {
                            $scope.pro_id = data.id;
                            $scope.value_form = true;
                        }).error(errorCallback);
                    }
                }
            };
            $scope.saveValue = function(formId) {
                if ($("#" + formId).valid()) {
                    for (var i = 0; i < $scope.value_name.length; i++) {
                        $scope.valueData = {};
                        $scope.valueData = {value_name: $scope.value_name[i], description: $scope.description[i], property_id: $scope.pro_id};
                        rest.path = 'values';
                        rest.post($scope.valueData).success(function(data) {
                        }).error(errorCallback);
                    }
                    $route.reload();
                }
            };
            $scope.UpdateValue = function() {
                for (var i = 0; i < $scope.value_name.length; i++) {
                    $scope.valueData = {};
                    $scope.valueData = {value_name: $scope.value_name[i], description: $scope.description[i]};
                    $routeParams.id = $scope.value_id[i];
                    rest.path = 'values';
                    rest.put($scope.valueData).success(function(data) {
                    }).error(errorCallback);
                }
                for (var i = 0; i < $scope.new_value.length; i++) {
                    $scope.newValues = {};
                    $scope.newValues = {value_name: $scope.new_value[i], description: $scope.new_description[i], property_id: $scope.propertyData.property_id};
                    $routeParams.id = $scope.value_id[i];
                    rest.path = 'values';
                    rest.post($scope.newValues).success(function(data) {
                    }).error(errorCallback);
                }
                $route.reload();
            }
            $scope.rowDelete = function(idx, id) {
                bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                    if (result == true) {
                        jQuery('#' + idx).remove();
//                            $scope.value_name.splice(idx, 1);
//                            $scope.description.splice(idx, 1);
                        rest.path = 'values/' + id;
                        rest.delete().success(function(data) {
                        }).error(errorCallback);
                    }
                });
            };
            $scope.deleteValue = function(idx) {
                bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                    if (result == true) {
                        jQuery('#item_' + idx).remove();
                        $scope.value_name.splice(idx, 1);
                        $scope.description.splice(idx, 1);

                    }
                });
            };
            $scope.deleteValue2 = function(idx, id) {
                bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                    if (result == true) {
                        jQuery('#' + id).remove();
                        $scope.new_value.splice(idx, 1);
                        $scope.new_description.splice(idx, 1);

                    }
                });
            };
            $scope.deleteModel = function(id) {
                bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                    if (result == true) {
                        rest.path = 'property/' + id;
                        rest.delete().success(function() {
                            $route.reload();
                        }).error(errorCallback);
                    }
                });
            };
        })
        .controller('headerController', function($scope, $window, $location, $route) {

            if ($window.sessionStorage.session_iUserId != undefined) {
                $scope.session_iUserId = $window.sessionStorage.session_iUserId;
                $scope.session_eUserStatus = $window.sessionStorage.session_eUserStatus;
                $scope.session_vEmailAddress = $window.sessionStorage.session_vEmailAddress;
                $scope.session_vUserName = $window.sessionStorage.session_vUserName;
                $scope.session_vUserFullName = $window.sessionStorage.session_vUserFullName;
                $scope.session_vProfilePic = $window.sessionStorage.session_vProfilePic;
                $scope.logout = function() {
                    $window.sessionStorage.clear();
                    $window.localStorage.clear();
                    $location.path('/');
                }
            } else {
                $window.sessionStorage.clear();
                $window.localStorage.clear();
                $location.path('/');
            }

        })
        .controller('footerController', function($scope, $location, $route, rest) {
        })
        .controller('CalendarCtrl', function($scope, $window, $compile, $timeout, uiCalendarConfig, $uibModal, $log, rest, $route, $rootScope, $routeParams) {
            $scope.uType = $window.localStorage.userType;
            $scope.animationsEnabled = true;
            $scope.toggleAnimation = function() {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };
            $scope.init = function() {
                if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
                    rest.path = 'workinghour/' + $window.localStorage.iUserId;
                    rest.get().success(function(data) {
                        $scope.data = data;
                        
                    }).error(errorCallback);
                }

            }
            $scope.init();
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            /* event source that calls a function on every view switch */
            $scope.eventsF = function(start, end, timezone, callback) {
                callback($scope.eventsList);
            };
            /* alert on eventClick */
            $scope.alertOnEventClick = function(date, jsEvent, view, size) {

                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'html/addEvent.html',
                    controller: 'addEventController',
                    size: size,
                    resolve: {
                        items: function() {
                            return date;
                        }
                    }
                });

                modalInstance.result.then(function(selectedItem) {
                    $route.reload();
                });

            };
            /* alert on Drop */
            $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
                var start_date = dateOnresize(event.start._i, delta);
                var end_date = dateOnresize(event.end._i, delta);
                $scope.eventData = {start: start_date, end: end_date, title: event.title, user_id: event.user_id, updated_by: $window.sessionStorage.session_iUserId};
                $routeParams.id = event.event_id;
                rest.path = 'events';
                rest.put($scope.eventData).success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            };
            /* alert on Resize */
            $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {

                var sr = dateToformat(event.start._i);
                var start_date = dateTostring(sr);
                var end_date = dateOnresize(event.end._i, delta);
                $scope.eventData = {start: start_date, end: end_date, title: event.title, user_id: event.user_id, updated_by: $window.sessionStorage.session_iUserId};
                $routeParams.id = event.event_id;
                rest.path = 'events';
                rest.put($scope.eventData).success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            };
            /* add and removes an event source of choice */
            $scope.addRemoveEventSource = function(sources, source) {
                var canAdd = 0;
                angular.forEach(sources, function(value, key) {
                    if (sources[key] === source) {
                        sources.splice(key, 1);
                        canAdd = 1;
                    }
                });
                if (canAdd === 0) {
                    sources.push(source);
                }
            };

            /* remove event */
            $scope.remove = function(index) {
                $scope.events.splice(index, 1);
            };
            /* Change View */
            $scope.changeView = function(view, calendar) {
                uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
            };
            /* Change View */
            $scope.renderCalender = function(calendar) {
                $timeout(function() {
                    if (uiCalendarConfig.calendars[calendar]) {
                        uiCalendarConfig.calendars[calendar].fullCalendar('render');
                        uiCalendarConfig.calendars[calendar].fullCalendar('rerenderEvents');
                    }
                });
            };
            /* Render Tooltip */
            $scope.eventRender = function(event, element, view) {
                element.attr({'tooltip': event.title});
                $compile(element)($scope);
            };
            /* day click */
            $scope.dayClick = function(event, element, view) {
                if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'html/addEvent.html',
                        controller: 'addEventController',
                        size: '',
                        resolve: {
                            items: function() {
                                return event;
                            }
                        }
                    });

                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                        $route.reload();
                    });
                } else {
                    notification('Please Create User', 'warning');
                }
            };
            /* add working hour */
            $scope.workingHour = function() {
                if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'html/addWorkinghour.html',
                        controller: 'workingHourController',
                        size: '',
//                        resolve: {
//                            items: function() {
//                                return event;
//                            }
//                        }
                    });

                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                        $route.reload();
                    });
                } else {
                    notification('Please Create User', 'warning');
                }
            };

            $scope.cellColor = function(date, cell) {
                if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
                    rest.path = 'workinghour/' + $window.localStorage.iUserId;
                    rest.get().success(function(data) {

                        if (data != '') {
                            displayRendom(date, cell, data);
                        }


                    }).error(errorCallback);
                }
            };
            /* config object */
            $scope.uiConfig = {
                calendar: {
                    height: 450,
                    editable: true,
                    header: {
                        left: '',
                        center: 'prev title next',
                        right: 'today month,agendaWeek,agendaDay'
                    },
                    buttonIcons: {
                        prev: 'left-single-arrow',
                        next: 'right-single-arrow'
                    },
//                    header: {
//                        left: 'title',
//                        center: '',
//                        right: 'today prev,next'
//                    },
                    eventClick: $scope.alertOnEventClick,
                    eventDrop: $scope.alertOnDrop,
                    eventResize: $scope.alertOnResize,
                    dayClick: $scope.dayClick,
                    dayRender: $scope.cellColor
//                    eventRender: $scope.eventRender
                }
            };
            $scope.calEventsExt = [];
            $scope.eventsList = [];
            if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
                $routeParams.id = $window.localStorage.iUserId;
                rest.path = 'userevents';
                rest.model().success(function(data) {
                    $.each(data, function(i, val) {
                        $scope.eventsList.push({event_id: val.event_id, title: val.title, start: stringTodate(val.start), end: stringTodate(val.end)});
                    });
                }).error(errorCallback);
            }
            /* event sources array*/
            $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
            $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.eventsList];

        })
        .controller('pricelistController', function($scope, $location, $route, rest, $routeParams, $window) {
            $scope.uType = $window.localStorage.userType;

        })
        .controller('addEventController', function($scope, $uibModalInstance, items, rest, $routeParams, $window) {
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
            if (items) {
                if (items.event_id) {
                    $scope.start = dateToformat(items.start);
                    $scope.end = dateToformat(items.end);
                    $scope.event = items;
                } else {
                    $scope.start = dateToformat(items);

                }
            }
            $scope.ok = function(formId) {
                if ($('#' + formId).valid()) {
                    if ($scope.event.event_id) {
                        var end = $('#end_date').val();
                        var start = $('#start_date').val();
                        $scope.eventData = {start: dateTostring(start), end: dateTostring(end), title: $scope.event.title, user_id: $scope.event.user_id, updated_by: $window.sessionStorage.session_iUserId};
                        $routeParams.id = $scope.event.event_id;
                        rest.path = 'events';
                        rest.put($scope.eventData).success(function(data) {
                            $scope.eventList = data;
                            $uibModalInstance.close(data);
                        }).error(errorCallback);
                    } else {
                        var end = $('#end_date').val();
                        var start = $('#start_date').val();
                        $scope.event.start = dateTostring(start);
                        $scope.event.end = dateTostring(end);
                        $scope.event.user_id = $window.localStorage.iUserId;
                        $scope.event.created_by = $window.sessionStorage.session_iUserId;
                        rest.path = 'events';
                        rest.post($scope.event).success(function(data) {
                            $scope.eventList = data;
                            $uibModalInstance.close(data);
                        }).error(errorCallback);
                    }
                }
            };

            $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        })
        .controller('workingHourController', function($scope, $uibModalInstance, rest, $routeParams, $window) {
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
            $scope.ok = function(formId) {
                if ($('#' + formId).valid()) {
                    $scope.wh_data = {monday: $scope.monday, tuesday: $scope.tuesday, wednesday: $scope.wednesday, thursday: $scope.thursday, friday: $scope.friday, saturday: $scope.saturday, sunday: $scope.sunday};
                    $scope.formData = {
                        wh_data: JSON.stringify($scope.wh_data),
                        for_type: $scope.for_type,
                        user_id: $window.localStorage.iUserId,
                        wh_type_value: new Date()

                    };
                    rest.path = 'workinghour';
                    rest.post($scope.formData).success(function(data) {
                        $scope.eventList = data;
                        $uibModalInstance.close(data);
                    }).error(errorCallback);
//                    console.log($scope.formData);
//                    $uibModalInstance.close(data);
                }
            };

            $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        });


        