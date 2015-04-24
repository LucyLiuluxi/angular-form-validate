angular.module('angular-validator-demo', ['angularValidator']);


angular.module('angular-validator-demo').controller('DemoCtrl', ['$scope','$http',function($scope,$http) {

	$scope.submitMyForm = function() {
		alert("Form submitted");
	};


	$scope.phoneNumberValidator = function(phoneNumber) {
		if(!phoneNumber) return;
        else if(!phoneNumber.match(/^0?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)) {
            return "请输入正确11位手机号码";
        }
        //如果需要与远程交互
        /*else {
            $http.get({
                url: url,
                data: data
            })
        }*/
        return true;
	};


	$scope.anotherCustomValidator = function(text) {
		if (text === "rainbow") {
			return true;
		} else return "type in 'rainbow'";
	};


	$scope.passwordValidator = function(password) {

		if (!password) {
			return;
		}
		else if (!password.match(/^[a-zA-Z]\w{5,17}$/)) {
			return "密码以字母开头，长度在6~18之间，只能包含字符、数字和下划线";
		}

		return true;
	};
}]);