import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader{
	constructor() {
		this.siteHeader = $(".site-header");
		this.TriggerElement = $(".large-hero__title");
		this.createHeaderWaypoints();
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
	}
	createHeaderWaypoints() {
		var that = this;
		new Waypoint({
		    element: this.TriggerElement[0], 	
		    handler: function(direction){
				if(direction == "down"){
					that.siteHeader.addClass("site-header--dark");
				}else {
					that.siteHeader.removeClass("site-header--dark");
				}
			} 
		});
	}
	createPageSectionWaypoints() {
        var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if(direction == "down"){
						var macthingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(macthingHeaderLink).addClass("is-current-link");
					}                 
				},
				offset: "18%"
			});
			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if(direction == "up"){
						var macthingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(macthingHeaderLink).addClass("is-current-link");
					}                 
				},
				offset: "-40%"
			});
		});
	}
}  



export default StickyHeader;