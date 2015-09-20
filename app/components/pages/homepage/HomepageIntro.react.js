var React = require('react');
var PureMixin = require('react-pure-render/mixin');
var mixin = require('baobab-react/mixins').branch;

var introText = "WIRE Design is a studio founded and run by William Renwick. I offer bespoke and personal designs tailored to meet each clients needs, with several years experience working for clients ranging from start-ups to many Fortune 500 companies - there's no project too big or small. I specialise in producing high quality digital solutions with a heavy focus on usability and integration of modern web practises in both design and development.";

var HomepageIntro = React.createClass({
    mixins: [mixin, PureMixin],
    cursors: {
        insideWorkPosts: ['homepage', 'insideWorkPosts'],
        windowHeight: ['resize', 'currentHeight'],
        isMobile: ['resize', 'isMobile'],
        isTablet: ['resize', 'isTablet'],
        isDesktop: ['resize', 'isDesktop'],
        scrollPos: ['scrolling', 'scrollPosition'],
    },
    introTextStyle: function() {
        var styles = {
            opacity: null
        }

        if (this.state.scrollPos == 0) {
            styles.opacity = 1;
        } else if (this.state.scrollPos > 0 && this.state.scrollPos < (this.state.windowHeight/2)) {
            var percentageScrolled = this.state.scrollPos / (this.state.windowHeight/2);
            var opacity = 1 - percentageScrolled;

            styles.opacity = opacity;
        } else {
            styles.opacity = 0;
        }

        return styles
    },
    indicatorStyle: function() {
        var styles = {
            opacity: null
        }

        if (this.state.insideWorkPosts) {
            styles.opacity = 0;
        } else if (!this.state.insideWorkPosts) {
            styles.opacity = 1;
        }
        return styles
    },
    render: function() {

    	return (
    	    <section id="intro">
                <div id="intro-text" style={this.introTextStyle()}>
                    <h1>{introText}</h1>
                </div>
                <div id="projects-indicator" style={this.indicatorStyle()}>Projects</div>
                <div id="intro-arrow" className="down-arrow" style={this.indicatorStyle()}></div>
            </section>
        );
    }
});

module.exports = HomepageIntro