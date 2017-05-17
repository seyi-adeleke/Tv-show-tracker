var currentUser = (document.getElementById("user").innerHTML);

angular.module('App',['ngSanitize'])

    .controller('mainController', ['$http', function ($http) {
        var vm =this;
        vm.hide=true;
        vm.error=true;
        vm.search=function(){
            if(vm.show){
                vm.hide=false;
                vm.error=true;
                $http.get("http://api.tvmaze.com/search/shows?q="+vm.show)
                    .then(function(response){
                        if(response.data.length == 0){
                            vm.hide=true;
                            console.log(response.data);
                            vm.error=false;
                        }else{


                            vm.mydata = response.data[0];
                            console.log(vm.mydata.score)
                        }
                    })
            }
            else{
                vm.hide=true;
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
