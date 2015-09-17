var React = require('react')
var mixin = require('baobab-react/mixins').branch;


var introText = "WIRE Design is a studio founded and run by William Renwick. I offer bespoke and personal designs tailored to meet each clients needs, with several years experience working for clients ranging from start-ups to many Fortune 500 companies - there's no project too big or small. I specialise in producing high quality digital solutions with a heavy focus on usability and integration of modern web practises in both design and development.";

var HomepageNav = React.createClass({
    mixins: [mixin],
    cursors: {
        windowHeight: ['resize', 'currentHeight'],
        insideWorkPosts: ['homepage', 'insideWorkPosts'],
        isMobile: ['resize', 'isMobile'],
        isTablet: ['resize', 'isTablet'],
        isDesktop: ['resize', 'isDesktop'],
        scrollPos: ['scrolling', 'scrollPosition'],
    },
    navWrapStyle: function() {
        var styles = {
            position: null,
            top: null,
            opacity: null,
            backgroundColor: null
        }

        var triggerAmount = 150;

        if (this.state.insideWorkPosts) {
            styles.position = 'fixed';
            styles.top = '8%';
            styles.backgroundColor = 'transparent';
        } else if (!this.state.insideWorkPosts) {
            styles.position = 'relative';
            styles.top = 'auto';
            styles.backgroundColor = '#F0F0F0';
        }
        return styles
    },
    internalsStyle: function() {
        var styles = {
            position: null,
            top: null,
            opacity: null
        }

        var triggerAmount = 150;

        if (this.state.insideWorkPosts) {
            styles.opacity = 1;
        } else if (!this.state.insideWorkPosts) {
            styles.opacity = 0;
        }
        return styles
    },
    render: function() {
	   return (
	       <div id="hp-projects-nav" style={ this.navWrapStyle() }>
                <div id="projects-nav-title" style={ this.internalsStyle() }>Projects</div>
                <div id="next-prev" style={ this.internalsStyle() }>
                    <div id="next"></div>
                    <div id="prev"></div>
                </div>
           </div>
        )
    }
});

module.exports = HomepageNav