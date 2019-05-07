sap.ui.jsview("basicmvc.view.JSView", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf basicmvc.view.JSView
	 */
	getControllerName: function() {
		console.log("getControllerName called");
		return "basicmvc.controller.JSView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf basicmvc.view.JSView
	 */
	createContent: function(oController) {
		console.log("createContent called");

		
		var oBtn1 = new sap.m.Button("idB2",{
			text: "Give some power",
			press: [oController.givePower, oController]
		});
		
		var oBtn2 = new sap.m.Button("idBtn",{
			icon: "sap-icon://accept",
			text: "Popup Button",	
			//I want to dynamically attach joker function
			press: oController.onJoker
		});
		
		var oInput = new sap.m.Input("idAnubhav",{
			width: "200px"
		});
		
		return [oInput, oBtn1, oBtn2];
	}

});