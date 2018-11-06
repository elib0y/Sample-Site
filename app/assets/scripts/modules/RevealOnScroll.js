import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
<<<<<<< HEAD
	constructor(els, offset) {  
		this.itemsToReveal = els;
		this.offsetPercentage = offset;  
		this.offsetPercentage = offset; 
		this.hideInitially();
		this.createWaypoints();
	} 
=======
	constructor(els, offset) {
		this.itemsToReveal = els; 
		this.offsetPercentage = offset;  
		this.hideInitially(); 
		this.createWaypoints(); 
	}
>>>>>>> sticky-header
    hideInitially(){
	   this.itemsToReveal.addClass("reveal-item");
    }
	 
    createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function(){
					$ (currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetPercentage
			});
		});
	}	
}

export default RevealOnScroll;  