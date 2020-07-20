import CustomizerRefreshComponent from './customizer-refresh-component.js';

export const customizerRefreshControl = wp.customize.astraControl.extend( {
	renderContent: function renderContent() {
		let control = this;
	ReactDOM.render( <CustomizerRefreshComponent control={ control } />, control.container[0] );
	}
} );