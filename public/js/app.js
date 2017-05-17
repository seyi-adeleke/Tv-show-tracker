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

        vm.search=function(){
            if(!vm.show){
                vm.hideResult=true;
                vm.error=false;
            }
            else if(vm.show){
                $http.get("http://api.tvmaze.com/search/shows?q="+vm.show)
                    .then(function(response){
                        if(response.data.length == 0){
                            vm.hideResult=true;
                            vm.error=false;
                        }
                        else{
                            vm.error=true;
                            vm.hideResult=false;
                            vm.mydata = response.data[0];
                        }
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
    }]);
