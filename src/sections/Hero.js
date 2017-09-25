import React, { Component } from 'react';
//import $ from 'jquery'

class Hero extends Component {
  componentDidMount(){
    var $cog = $('#cog2'),
      $bigCog = $('#cog'),
      $body = $(document.body),
      bodyHeight = $body.height(),
      $cog2 = $('#cog3, #cog4');
      
      //console.log($body.scrollTop());
      
      $(window).on("scroll", function () {
          $bigCog.attr('transform', 'rotate(' + ($(window).scrollTop() / bodyHeight * 240) + ')');
          $cog.css({
              'transform': 'rotate(' + ($(window).scrollTop() / bodyHeight * 360) + 'deg)'
          });
          $cog2.css({
              'transform': 'rotate(-' + ($(window).scrollTop() / bodyHeight * 360) + 'deg)'
          });
      });
  }
    render(){
        return(
            <header className="masthead">
      	<div className="header-content">
      		<div className="header-content-inner">
			      <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 1891.08 944.601" enable-background="new 0 0 1891.08 944.601"
				 xmlSpace="preserve">
			<g>
				<path fill="#5B151D" id="cog" d="M681.881,593.891l83.149-30.3c-0.13-24.62-2.59-48.7-7.16-72.021l-86.38-9.33
					c-3.229-11.25-7.109-22.229-11.59-32.899l59.4-65.29c-11.271-20.851-24.42-40.53-39.221-58.82l-80.88,31.9
					c-8.76-9.091-18.09-17.641-27.92-25.58l22.16-85.101c-19.24-12.74-39.69-23.8-61.16-32.95l-56.96,66.03
					c-12.49-4.05-25.32-7.32-38.46-9.71l-19.81-85.189c-11.38-1.021-22.891-1.57-34.54-1.57c-11.641,0-23.15,0.55-34.53,1.57
					l-19.81,85.189c-13.141,2.39-25.98,5.66-38.46,9.71L232.75,213.5c-21.47,9.15-41.92,20.21-61.17,32.95l22.17,85.101
					c-9.829,7.939-19.159,16.489-27.92,25.58l-80.89-31.9c-14.79,18.29-27.94,37.97-39.21,58.82l59.4,65.29
					c-4.48,10.67-8.36,21.649-11.591,32.899l-86.38,9.33c-4.58,23.32-7.029,47.4-7.16,72.021l83.15,30.3
					c0.97,10.43,2.48,20.72,4.49,30.819l-72.3,48.511C22.36,697.2,31.66,720.2,43,741.98l87.811-11.84
					c5.07,7.74,10.479,15.229,16.22,22.45l-41.59,76.77c17.39,18.26,36.58,34.79,57.25,49.34l72.07-51.16
					c7.34,4.141,14.85,7.99,22.55,11.521l-1.16,87.689c23.771,8.32,48.61,14.351,74.25,17.851l39.93-78.561
					c4.04,0.16,8.101,0.261,12.181,0.261c4.09,0,8.149-0.101,12.2-0.261l39.92,78.561c25.64-3.5,50.479-9.53,74.25-17.851l-1.16-87.689
					c7.689-3.53,15.21-7.38,22.55-11.521l72.06,51.16c20.69-14.55,39.87-31.08,57.261-49.34L618,752.591
					c5.74-7.221,11.15-14.71,16.221-22.45l87.81,11.84c11.34-21.78,20.63-44.78,27.65-68.76l-72.29-48.511
					C679.4,614.61,680.9,604.32,681.881,593.891z M556.19,753.11c-23.38,21.47-50.75,38.66-80.87,50.33
					c-28.79,11.16-60.08,17.28-92.81,17.28c-28.931,0-56.74-4.78-82.69-13.601c-35.26-11.979-67.08-31.41-93.57-56.42
					c-49.64-46.83-80.619-113.229-80.619-186.859c0-73.631,30.979-140.03,80.619-186.86c45.99-43.41,108.021-70.021,176.261-70.021
					c70.54,0,134.439,28.431,180.859,74.45c46.95,46.55,76.03,111.101,76.03,182.431C639.4,638.74,607.341,706.16,556.19,753.11z"/>
				<g>
					<path fill="#5B151D" d="M589.793,461.67c0-30.48-8.696-58.918-23.754-83.069c-47.162-46.755-112.084-75.641-183.752-75.641
						c-69.332,0-132.354,27.036-179.08,71.141v379.697c26.914,25.41,59.243,45.151,95.066,57.322c0.651-1.574,1.017-3.262,1.017-4.998
						V617.635h82.052l95.239,189.747c30.603-11.856,58.409-29.322,82.163-51.135L480.391,610.99
						C544.703,585.113,589.793,529.67,589.793,461.67z M420.519,538.55H300.032V391.454h120.486c39.177,0,73.183,32.521,73.183,71.699
						C493.701,504.544,459.695,538.55,420.519,538.55z"/>
				</g>
			</g>
			<path fill="#5B151D"  id="cog4" d="M1492.393,299.808c-3.132,12.655-4.788,25.643-4.957,38.678l-65.089,41.986
				c2.534,14.941,6.507,29.734,11.959,44.149l77.399,3.314c3.457,5.72,7.281,11.303,11.489,16.705
				c3.901,5.002,8.026,9.713,12.353,14.154l-16.334,75.715c12.571,8.923,25.875,16.511,39.7,22.731l57.046-52.359
				c12.658,3.13,25.639,4.783,38.672,4.95l41.99,65.095c14.945-2.531,29.73-6.503,44.148-11.961l3.316-77.396
				c5.721-3.455,11.305-7.278,16.7-11.49c5.007-3.899,9.724-8.029,14.161-12.352l75.715,16.339
				c8.922-12.576,16.512-25.881,22.734-39.699l-52.364-57.051c3.13-12.654,4.787-25.64,4.956-38.679l65.092-41.985
				c-2.527-14.941-6.506-29.737-11.961-44.148l-77.398-3.318c-3.459-5.722-7.279-11.3-11.484-16.7
				c-3.902-5.002-8.038-9.718-12.358-14.157l16.336-75.713c-12.575-8.926-25.877-16.511-39.698-22.733l-57.047,52.361
				c-12.658-3.129-25.645-4.788-38.678-4.953l-41.986-65.094c-14.951,2.53-29.736,6.506-44.151,11.961l-3.315,77.399
				c-5.718,3.454-11.299,7.275-16.703,11.482c-5.004,3.9-9.713,8.033-14.157,12.357l-75.716-16.339
				c-8.922,12.575-16.509,25.882-22.732,39.701L1492.393,299.808z M1540.701,274.007c36.762-64.071,118.508-86.203,182.568-49.445
				c64.072,36.766,86.209,118.506,49.443,182.578c-36.76,64.07-118.504,86.208-182.571,49.441
				C1526.068,419.817,1503.934,338.076,1540.701,274.007z"/>
			<g>
				<path fill="#5B151D" id="cog3" d="M1102.131,204.494c-1.978-15.026-5.406-29.958-10.327-44.569l-77.21-6.184
					c-3.009-5.423-6.326-10.734-9.996-15.913c-3.958-5.587-8.199-10.854-12.682-15.812l19.141-75.069
					c-12.232-9.378-25.248-17.448-38.826-24.18l-58.973,50.226c-12.527-3.599-25.439-5.756-38.463-6.409L835.264,0
					c-15.027,1.974-29.953,5.401-44.568,10.323l-6.183,77.208c-5.419,3.006-10.737,6.329-15.915,9.995
					c-5.584,3.957-10.852,8.198-15.81,12.681l-75.072-19.14c-9.375,12.23-17.448,25.248-24.181,38.828l50.225,58.968
					c-3.598,12.534-5.75,25.445-6.404,38.466l-66.586,39.532c1.975,15.027,5.406,29.952,10.32,44.568l77.214,6.183
					c3.003,5.42,6.327,10.732,9.997,15.909c3.955,5.592,8.198,10.858,12.682,15.816l-19.137,75.068
					c12.229,9.381,25.242,17.448,38.823,24.179l58.971-50.225c12.528,3.599,25.438,5.758,38.458,6.409l39.534,66.582
					c15.029-1.97,29.956-5.401,44.564-10.321l6.188-77.209c5.421-3.005,10.73-6.327,15.906-9.993
					c5.589-3.959,10.86-8.202,15.818-12.684l75.07,19.14c9.377-12.231,17.445-25.248,24.176-38.826l-50.221-58.97
					c3.597-12.53,5.756-25.442,6.405-38.465L1102.131,204.494z M896.746,365.962c-71.946,16.735-143.836-28.029-160.568-99.977
					c-16.732-71.949,28.031-143.838,99.979-160.572c71.941-16.729,143.834,28.029,160.563,99.979
					C1013.458,277.341,968.698,349.229,896.746,365.962z"/>
				<path fill-rule="evenodd" clip-rule="evenodd" fill="#5B151D" d="M726.201,238.896c2.959,0.495,7.432,1.245,13.794,1.245
					c3.224,0,6.616-0.202,10.086-0.582c21.911-2.435,36.499-3.518,47.298-3.518c31.783,0,36.951,9.745,48.273,31.096
					c1.993,3.756,4.143,7.799,6.645,12.221c-18.916-85.133,30.991-103.813,79.313-121.895c18.869-7.058,36.688-13.726,50.152-24.218
					c1.656-1.295,2.885-2.428,3.807-3.28c1.5-1.376,2.338-2.147,3.483-2.147c2.243,0,2.506,2.075,3.06,6.612l0.179,1.403
					c7.526,59.668-1.214,104.24-25.986,132.47c-20.651,23.538-52.46,35.579-94.54,35.787c-0.389,0.15-0.912-0.178-1.242-0.508
					c-0.334-0.332-0.521-0.78-0.521-1.247c-0.136-55.375,25.3-73.354,52.229-92.392c16.488-11.652,33.457-23.649,45.092-45.15
					c-15.147,16.444-32.245,28.104-47.619,38.591c-34.846,23.778-62.37,42.562-54.873,100.291c4.65,17.781,2,39.866-2.708,53.777
					c-5.319,15.702-14.33,22.86-20.449,22.86c-2.509,0-4.51-1.191-5.487-3.251c-1.77-3.748,0.143-9.475,5.258-15.712
					c15.755-19.235,16.384-45.373,13.76-53.174c-16.908,7.808-32.936,11.77-47.656,11.77c-36.33,0-64.704-23.327-84.347-69.333
					c-0.419-0.978-0.777-1.815-1.068-2.478c-2.331-5.182-3.112-6.938-2.108-8.483C720.908,238.291,722.505,238.291,726.201,238.896z"/>
			</g>
			<path id="cog2" fill="#5B151D" d="M1479.313,511.497c3.547-15.553,5.631-31.541,6.123-47.763l-73.936-34.359
				c-0.985-6.452-2.313-12.91-4.035-19.361c-1.865-6.963-4.125-13.714-6.731-20.247l46.36-67.077
				c-8.638-13.729-18.53-26.459-29.467-38.071l-76.575,27.981c-11.049-8.136-23.003-14.989-35.615-20.399l-14.645-80.178
				c-15.552-3.551-31.534-5.629-47.757-6.121l-34.359,73.93c-6.449,0.983-12.914,2.316-19.361,4.04
				c-6.965,1.861-13.713,4.119-20.244,6.729l-67.084-46.364c-13.728,8.64-26.461,18.531-38.068,29.472l27.982,76.571
				c-8.141,11.051-14.992,23.004-20.398,35.617l-80.178,14.643c-3.556,15.551-5.629,31.538-6.129,47.761l73.938,34.359
				c0.984,6.447,2.318,12.907,4.041,19.358c1.857,6.963,4.118,13.716,6.729,20.248l-46.359,67.079
				c8.633,13.732,18.525,26.459,29.465,38.07l76.576-27.984c11.048,8.138,23,14.992,35.609,20.4l14.647,80.177
				c15.554,3.558,31.54,5.633,47.757,6.126l34.363-73.934c6.447-0.98,12.906-2.315,19.354-4.039c6.965-1.862,13.719-4.121,20.253-6.728
				l67.079,46.36c13.728-8.64,26.457-18.53,38.068-29.469l-27.979-76.573c8.134-11.05,14.986-23.003,20.396-35.613L1479.313,511.497z
				 M1217.541,595.668c-77.129-9.817-131.69-80.302-121.871-157.427c9.818-77.13,80.303-131.692,157.43-121.873
				c77.118,9.819,131.684,80.3,121.862,157.426C1365.148,550.923,1294.668,605.484,1217.541,595.668z"/>
			<path fill-rule="evenodd" clip-rule="evenodd" fill="#5B151D" d="M1588.771,243.696c1.703-1.848,4.087-2.861,6.699-2.861
				c4.102,0,9.08,2.733,10.322,8.74c1.852,8.979,6.6,42.411,7.892,51.578l4.907-2.506c-0.58-8.429-4.383-63.695-5.357-77.109
				c-0.366-4.839,1.311-7.737,2.783-9.32c1.92-2.071,4.649-3.202,7.693-3.202c5.07,0,10.572,3.398,10.783,9.704
				c0.318,9.59,5.725,65.146,6.672,74.83l5.682,0.175c-0.192-11.328-1.232-75.029-0.916-88.204c0.21-8.459,5.639-12.313,10.59-12.313
				c5.219,0,10.498,4.179,10.498,12.181c0,12.583,0.664,77.202,0.773,87.825l5.154,0.5c1.005-9.575,6.174-58.724,7.443-69.836
				c0.777-6.833,6.076-10.406,10.912-10.406c2.854,0,5.473,1.164,7.367,3.271c1.734,1.914,3.649,5.506,3,11.76
				c-0.752,7.253-2.088,23.97-3.494,41.67c-1.885,23.685-4.019,50.522-5.246,60.5c-0.835,6.846,0.549,10.04,1.855,11.508
				c2.27,2.567,6.945,1.983,10.23-0.855c11.602-10.051,26.201-23.798,27.535-25.465c3.162-3.569,6.465-4.314,8.686-4.314
				c3.632,0,7.26,2.003,9.459,5.225c2.04,2.998,2.522,6.491,1.314,9.574c-3.288,8.413-36.095,50.466-40.996,54.985
				c-3.962,2.983-8.807,5.828-13.485,8.592c-8.386,4.932-17.884,10.528-18.284,14.898c-0.688,7.598,2.88,75.984,2.919,76.678
				c0.04,0.778-0.48,1.484-1.242,1.673c-12.592,3.149-24.86,4.746-36.456,4.746c-23.994,0-36.924-6.729-37.467-7.014
				c-0.557-0.303-0.889-0.898-0.86-1.528c0.036-0.721,3.63-70.736,3.694-81.818c-0.186-0.409-0.746-1.536-1.343-2.721
				c-3.211-6.404-9.902-19.752-11.921-30.753c-2.254-12.23-2.217-45.054-2.213-46.448c-0.055-0.313-6.431-51.822-8.188-64.776
				C1585.779,248.021,1587.373,245.209,1588.771,243.696z"/>
			<g>
				<g>
					<path fill-rule="evenodd" clip-rule="evenodd" fill="#5B151D" d="M1233.216,487.241c-0.072,30.548-0.152,61.094-0.152,92.104
						c0,0.756-0.428,1.445-1.111,1.778c-0.27,0.128-0.563,0.198-0.855,0.198c-0.435,0-0.868-0.143-1.225-0.425
						c-25.283-19.938-58.148-28.674-103.921-27.692c-1.214-0.051-1.935-0.773-2.011-1.818c-3.229-41.729-6.27-84.072-9.219-125.031
						c-1.459-20.292-2.863-39.832-4.199-58.063c-0.045-0.544,0.143-1.082,0.512-1.483c0.372-0.402,0.889-0.629,1.436-0.629l2.017-0.014
						c49.288,0,87.151,13.726,117.701,27.157c0.718,0.316,1.178,1.023,1.178,1.802C1233.365,426.141,1233.288,456.691,1233.216,487.241
						z"/>
					<path fill-rule="evenodd" clip-rule="evenodd" fill="#5B151D" d="M1352.019,551.312c0,1.077-0.862,1.942-1.93,1.967
						c-39.465,0.646-83.215,3.351-102.965,27.323c-0.379,0.466-0.944,0.721-1.52,0.721c-0.225,0-0.449-0.042-0.666-0.12
						c-0.783-0.276-1.305-1.024-1.305-1.856c0-18.13,0.133-39.209,0.27-61.602c0.238-39.777,0.511-84.853,0.11-124.312
						c-0.011-0.752,0.425-1.451,1.1-1.784c35.146-17.169,67.302-21.748,121.11-28.357c0.623-0.086,1.241,0.147,1.666,0.597
						c0.43,0.456,0.622,1.079,0.514,1.689C1361.163,407.589,1352.441,473.909,1352.019,551.312z"/>
				</g>
			</g>
			</svg>
			<h1 id="header-h1">Revolutionary Robotics</h1>
			<h2 id="header-h1"><i>Innovating bit by bit.</i></h2>
			<a href="#link-testimony" className="btn btn-primary btn-xl">Learn More</a>
			
			</div>
		</div>
	</header>
            )
    }
}

export default Hero;