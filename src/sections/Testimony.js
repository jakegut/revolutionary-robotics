import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class Testimony extends Component{
    render(){
        return(
            <ScrollableAnchor id={'link-testimony'}>
            <div id="testimony">
        		<div className="container">
        			<div className="row">
        				<div className="col-lg-4 col-sm-6 col-xs-12" id="quote">
        				<blockquote>
        				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in elit purus. Maecenas ex tortor, hendrerit et pulvinar vel, tempor rutrum nisl. Fusce varius placerat ultrices. Sed sit amet erat dapibus, condimentum urna a, ullamcorper risus. Maecenas consequat tincidunt consectetur. Aliquam pulvinar purus non odio consequat, ultrices vulputate leo scelerisque. Vivamus porta sit amet diam eget mattis. Donec tincidunt at quam et pellentesque
        				</blockquote>
        				</div>
        			</div>
        		</div>
        	</div>
        	</ScrollableAnchor>
            )
    }
}

export default Testimony;