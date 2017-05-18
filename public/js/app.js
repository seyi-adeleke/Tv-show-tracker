window.onload = function() {
    $(function() {
        if (window.location.protocol === "https:")
            window.location.protocol = "http";
    });
};
var currentUser = (document.getElementById("user").innerHTML);

angular.module('App',['ngSanitize'])
    .controller('mainController', ['$http', function ($http) {
        var vm =this;
        vm.load = true;
        vm.hideResult=true;
        vm.error=true;
        vm.errorfromServer=true;
        vm.search=function(){
            vm.errorfromServer=true;
            vm.load = false;
            if(!vm.show){
                vm.load = true;
                vm.hideResult=true;
                vm.error=false;

            }
            else if(vm.show){
                $http.get("http://api.tvmaze.com/search/shows?q="+vm.show)
                    .then(function(response){
                        if(response.data.length == 0){
                            vm.load = true;
                            vm.hideResult=true;
                            vm.error=false;
                        }
                        else{
                            vm.load = true;
                            vm.error=true;
                            vm.hideResult=false;
                            vm.mydata = response.data[0];
                            vm.errorfromServer=true;

                        }
                    },function(errorMessage){
                        vm.errorfromServer=false;
                        vm.load = true;
                        vm.hideResult=true;


                    })
            }
            else{
                vm.hideResult=true;
                vm.error=false;
            }

        };
        vm.saveFav=function(){

            var data = ({
                user:currentUser,
                name:vm.name,
                premierDate:vm.premierDate,
                status:vm.status
            });
            console.log(data);
            $http.post('/', data)
                .error(function(){
                    console.log("error ya bish")
                })
                .success(function(){
                    console.log("no error");
                })


        }
    }])
    .controller('showController',['$http',function($http){
        var vm = this;
        vm.hide = true;
        vm.search=function(param){
            $http.get("http://api.tvmaze.com/search/shows?q="+param)
            .then(function(response){
                vm.mydata = response.data[0];
            },function(response){
                alert("error " + response);
            })

        }
    }]);
