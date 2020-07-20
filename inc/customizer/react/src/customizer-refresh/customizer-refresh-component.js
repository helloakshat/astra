import PropTypes from 'prop-types';
import { Component } from '@wordpress/element';

class CustomizerRefreshComponent extends Component {

	render() {
		
		const {
			label,
		} = this.props.control.params

		return (
			<a className={ `button ${ this.props.control.params.class }` } onClick={ () => { wp.customize.previewer.refresh() } } href="#">{ label }</a>
		);
	}
}

CustomizerRefreshComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default CustomizerRefreshComponent;
