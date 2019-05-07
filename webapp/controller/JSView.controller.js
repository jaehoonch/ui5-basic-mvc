sap.ui.define([
	"basicmvc/controller/BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("basicmvc.controller.JSView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf basicmvc.view.JSView
		 */
 			onJoker: function(){
				//step 1: access somehow the object of the input field
				var oCore = sap.ui.getCore();
				var oInp = oCore.byId("idAnubhav");
				//step 2: find a method of input object so that we can access the value
				var myVal = oInp.getValue();
				//step 3: display this value inside a popup
				alert(myVal);
			},
			givePower: function(){
				//get the first button object on which we want to attach event handler
				var oBtn = sap.ui.getCore().byId("idBtn");
				//we want to dyanmically attach event handler Joker to it
				//for that we know for every event we have attachEvent 
				//event name is press so we have attachPress method
				oBtn.attachPress(this.onJoker);
			},
			onInit: function() {
				console.log("onInit() of JSView Controller called");
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf basicmvc.view.JSView
		 */
		onBeforeRendering: function() {
			console.log("onBeforeRendering() of JSView Controller called");
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf basicmvc.view.JSView
		 */
		onAfterRendering: function() {
			console.log("onAfterRendering() of JSView Controller called");
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf basicmvc.view.JSView
		 */
		onExit: function() {
			console.log("onExit() of JSView Controller called");
		}

	});

});