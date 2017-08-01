require("./random-sample-component.scss");

ko.components.register('random-sample-component', {
	docs: {
		description: "This is a sample component to show the usage of <knockout-component-preview> - you can test one of each editor.",
		tags: ["demo", "example", "tag", "test"],
		pages: ["/page1.html", "/page2.html", "/page3.html", "/page4.html", "/page5.html"],
		required: {},
		optional: {
			title: {
				description: "The title of the component",
				defaultValue: "Default title",
				type: [ko.types.string, ko.types.json, ko.types.boolean],
				possibleValues: ["Default title", "First title option", "Another option!", "YEAH"]
			},
			description: {
				description: "A description under the title",
				defaultValue: "default description",
				type: ko.types.string
			},
			icon: {
				description: "The icon to show below the title",
				defaultValue: "glyphicon-user",
				type: ko.types.string,
				possibleValues: ["glyphicon-user", "glyphicon-heart", "glyphicon-cog", "glyphicon-print", "glyphicon-bookmark"]
			},
			uselessParam: {
				description: "Doesn't do anything...",
				defaultValue: true,
				type: ko.types.boolean
			},
			borderWidth: {
				description: "The border size in pixels of the border",
				defaultValue: 1,
				type: ko.types.number
			},
			jsonParam: {
				description: "JSON editor",
				defaultValue: JSON.stringify({ ttest: 'json value', test_2: 123 }),
				type: ko.types.json
			},
			koObservableArray: {
				description: "knockout observableArray",
				defaultValue: "something",
				type: ko.types.ko.observableArray
			},
			jsArray: {
				description: "js array",
				defaultValue: "something",
				type: ko.types.array
			}
		}
	},
	viewModel: function(params) {
		var vm = this;
		
		vm.title = params.title || "Default Title";
		vm.description = params.description || "default description";
		vm.icon = params.icon || "glyphicon-refresh";
		vm.showBorder = params.showBorder;
		vm.borderWidth = params.borderWidth;
		
		return vm;
	},
	template: require("./random-sample-component.html")
});