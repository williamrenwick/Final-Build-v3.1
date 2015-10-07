var React = require('react');

var Youtube = require('react-youtube');
var classNames = require('classnames');
var mixin = require('baobab-react/mixins').branch;


var SectionThreeVideo = React.createClass({
	mixins: [mixin],
	cursors: {
		windowWidth: ['resize', 'currentWidth']
	},
	getInitialState: function() {
		return {
			isPlaying: false
		}
	},
	handleClick: function() {
		if (!this.state.isPlaying) {
			this.setState({
				isPlaying: true
			})
		} else if (this.state.isPlaying) {
			this.setState({
				isPlaying: false
			})
		}
	},
	determineHeight: function() {
		var heightAspect = 0.7,
			wrapWidth;

		if (this.state.windowWidth > 420) {
			wrapWidth = this.state.windowWidth * 0.8;
		} else if (this.state.windowWidth <= 420) {
			wrapWidth = this.state.windowWidth * 0.7;
		}

		var height = String(wrapWidth * heightAspect);

		return height 
	},
	containerStyle: function() {
		return {
			height: this.determineHeight(),
			width: '100%'
		}
	},
	render: function() {
		var activeProject = this.props.activeProject;
		var YoutubeOpts = {
			playerVars: {
				color: 'white',
				controls: 0,
				rel: 0,
				showinfo: 0,
			}
		};

		return (
			<div ref='videocontainer' id="s3-video" style={{height: this.determineHeight()}}>
				<Youtube 
					className={'projectvideo'}
					url={activeProject.video.section3}
					opts={YoutubeOpts}
				/>
			</div>
		)

	}
});

module.exports = SectionThreeVideo;