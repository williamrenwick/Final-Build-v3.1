var React = require('react');
var classNames = require('classnames');
var PureMixin = require('react-pure-render/mixin');
var mixin = require('baobab-react/mixins').branch;

var moreText = "WIRE Design is a studio founded and run by William Renwick. I offer bespoke and personal designs tailored to meet each clients needs, with several years experience working for clients ranging from start-ups to many Fortune 500 companies - there's no project too big or small. I specialise in producing high quality digital solutions with a heavy focus on usability and integration of modern web practises in both design and development.";

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
    getInitialState: function() {
        return {
            viewingMore: true,
            introText: 'websites',
            spanIsActive: true
        }
    },
    componentDidMount: function() {
        this.changeText()
    },
    scrollFade: function() {
        var styles = {
            opacity: null
        }

        if (this.state.scrollPos <= 0) {
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
    changeText: function() {
        var self = this;
        var textArray = ['websites', 'design', 'concepts', 'coding', 'user experience'];
        var whileAmount = 1;
        var i = 1;

        function myLoop () {           
            setTimeout(function () {    
                var text = textArray[i]; 

                self.setState({introText: text});

                i++;  

                if (i < textArray.length) {          
                    myLoop();           
                }                        
            }, 5000)
        }

        myLoop();
    },
    introTextStyle: function() {
        if (!this.state.viewingMore) {
            return {
                opacity: 0
            }
        } else {
            var opacity = this.scrollFade();
            return opacity
        }
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
                <div id="more-text" style={this.introTextStyle()}>
                    <h2>{moreText}</h2>
                </div>
                <div id="projects-indicator" style={this.indicatorStyle()}>Projects</div>
                <div id="intro-arrow" className="down-arrow" style={this.indicatorStyle()}></div>
            </section>
        );
    }
});

/*<div id="main-intro-text">
                    <h1>Wi-Re Design <br/>does<span className={classNames({active: this.state.spanIsActive})}>{' '+this.state.introText}</span></h1>
                </div>*/

module.exports = HomepageIntro