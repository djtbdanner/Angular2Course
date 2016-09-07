
alert("taoat");

function Calculator(){}

Calculator.annotations = [
     new angular.Component({
         selector: "calculator",
    }),
    new angular.View({
         templateUrl: 'template/calculator.template.html'
    })
    
];


document.addEventListener('DOMContentLoaded', function() {
    angular.bootstrap(Calculator);
});
