app.filter('typeFilter', [function() {
        return function(investments, filtered) {

            if (!angular.isUndefined(investments) && !angular.isUndefined(filtered) && filtered.length > 0) {
                var tempClients = [];
                angular.forEach(filtered, function(filter) {
                    angular.forEach(investments, function(invest) {
                        if (angular.equals(invest.type, filter.type)) {
                            tempClients.push(invest);
                        }
                    });
                });
                return tempClients;
            } else {
                return investments;
            }
        };
    }]);
app.filter('toNumber', function() {

    return function(input) {
        if (input == undefined || input == 0 || input == '') {
            return 'No minimum(without restriction)';
        } else {
            return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }



    }
});
app.filter('dateFormat', function() {

    return function(input) {   
        var d = new Date(input);
        return d.getDate() + "/"
                    + (d.getMonth()+1)  + "/" 
                    + d.getFullYear() + " ";
                    // + d.getHours() + ":"  
                    // + d.getMinutes() + ":" 
                    // + d.getSeconds();
    }
});
app.filter('commaseperator', function() {

    return function(input) {
        if (input == undefined || input == 0 || input == '') {
            return 'NA';
        } else {
            return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
});
//------------ append year after input----------------//
app.filter('year', function($filter) {

    return function(input) {
        if (input == undefined || input == 0 || input == '') {
            return 'No minimum(without restriction)';
        } else {
            return input + ' year';
        }
    }
});
//------------ append per year after input----------------//
app.filter('perYear', function($filter) {

    return function(input) {
        return input + ' per year';
    }
});

//------------ append $(input)M for input----------------//
app.filter('appendCurrency', function($filter) {

    return function(input) {
        if (input == undefined || input == 0 || input == '') {
            return '$ None';
        } else {
            return '$ ' + input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
});

//------------ append $(input) for input----------------//
app.filter('appendPercent', function($filter) {

    return function(input) {

        if (input == undefined || input == '') {
            return '$ None';
        } else {
            return '$ ' + input;
        }
    }
});

//------------ append $(input) for input----------------//
app.filter('appendPercentage', function($filter) {

    return function(input) {

        if (input == undefined || input == '') {
            return 'None';
        } else {
            return input + ' %';
        }
    }
});
//------------ append risk value----------------//
app.filter('appendRisk', function($filter) {

    return function(input) {

        if (input == 1) {
            return 'Very Low';
        } else if (input == 2) {
            return 'Low';
        } else if (input == 3) {
            return 'Medium';
        } else if (input == 4) {
            return 'High';
        }
    }
});
//------------ country code to country name ----------------//
app.filter('codetoCountry', function() {

    return function(input, countries) {
        if (!angular.isUndefined(countries) && !angular.isUndefined(input)) {
            var tempContry = '';
            angular.forEach(countries, function(country) {
                if (angular.equals(country.code, input)) {
                    tempContry = country.name;
                }
            });
            return tempContry;
        } else {
            return input;
        }

    }
});
//------------horizon year filter -----------------------//
app.filter('yearfilter', function($window) {
    return function(items, types) {
        var filtered = [];
        angular.forEach(items, function(item) {
            if (types.year3 == true) {
                if (item.horizon_year < 3)
                    filtered.push(item);
            }
            if (types.year5 == true) {
                if ((item.horizon_year >= 3) && (item.horizon_year <= 5))
                    filtered.push(item);
            }
            if (types.year10 == true) {
                if (item.horizon_year >= 5 && item.horizon_year <= 10)
                    filtered.push(item);
            }
            if (types.year11 == true) {
                if (item.horizon_year > 10)
                    filtered.push(item);
            }
            if (types.year3 == false && types.year5 == false && types.year10 == false && types.year11 == false) {
                filtered.push(item);
            }
        });
        return filtered;
    };
});

//------------horizon year filter -----------------------//
app.filter('riskfilter', function() {
    return function(data, risktypes) {
        var filtered = [];
        angular.forEach(data, function(item) {
            if (risktypes.verylow == true) {
                if (item.risk == 1)
                    filtered.push(item);
            }
            if (risktypes.low == true) {
                if (item.risk == 2)
                    filtered.push(item);
            }
            if (risktypes.medium == true) {
                if (item.risk == 3)
                    filtered.push(item);
            }
            if (risktypes.high == true) {
                if (item.risk == 4)
                    filtered.push(item);
            }

            if (risktypes.verylow == false && risktypes.low == false && risktypes.medium == false && risktypes.high == false) {
                filtered.push(item);
            }

        });
        return filtered;
    };
});
