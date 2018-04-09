function Tab(){
	return{
		scope: { label: '@'},
		require: '^tabs',
		transclude: true,
		template: [
			'<div class="tabs_content" ng-if=tab.selected>',
				'<div ng-transclude></div>',
			'</div>'
		].join(''),
		link: function(scope, element, attr, ctrl){
			scope.tab = {
				label: scope.label,
				selected: false
			};

			ctrl.addTab(scope.tab)
		}

	}
};

angular
	.module('app')
	.directive('tab',Tab)