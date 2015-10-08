var React = require('react');
var IntroBackground = require('./HomepageIntroBackground.js');

var classNames = require('classnames');
var PureMixin = require('react-pure-render/mixin');
var mixin = require('baobab-react/mixins').branch;

var moreText = "WIRE Design is a studio founded and run by William Renwick. We offer bespoke and personal designs tailored to meet each client's needs, with several years experience working for clients ranging from start-ups to many Fortune 500 companies - there's no project too big or small. WIRE Design specialises in producing high quality digital solutions with a heavy focus on usability and integration of modern web practises in both design and development.";

var HomepageIntro = React.createClass({
    mixins: [mixin, PureMixin],
    cursors: {
        isPreloaded: ['general', 'isPreloaded'],
        insideWorkPosts: ['homepage', 'insideWorkPosts'],
        windowHeight: ['resize', 'currentHeight'],
        isMobile: ['resize', 'isMobile'],
        isTablet: ['resize', 'isTablet'],
        isDesktop: ['resize', 'isDesktop'],
        scrollPos: ['scrolling', 'scrollPosition'],
    },
    getInitialState: function() {
        return {
            viewingMore: false,
            introText: 'design',
            spanIsActive: true
        }
    },
    componentDidMount: function() {
        if (this.state.isPreloaded) {
            this.changeText()
        } else {
            setTimeout(this.changeText, 6000);
        }
    },
    handleMoreClick: function() {
        if (!this.state.viewingMore) {
            this.setState({viewingMore: true})
        }
    },
    handleCloseClick: function() {
        if (this.state.viewingMore) {
            this.setState({viewingMore: false})
        }
    },
    calcTranslate: function() {
        var translateAmount = -( this.state.scrollPos / 10 );

        ScrollActions.textTranslateAmount(translateAmount);
    },
    changeText: function() {
        var self = this;
        var textArray = ['design', 'code', 'brand', 'build'];
        var i = 0;

        function myLoop () {           
            setTimeout(function () {    
                var text = textArray[i]; 

                animationTimeline(text);

                i++;  

                if (i < textArray.length) { 
                    myLoop();                       
                } else if (i == textArray.length) {
                    i = 0
                    myLoop(); 
                }            
            }, 3000)
        }
        function animationTimeline(text) {
            self.setState({spanIsActive: true});

            self.setState({introText: text});

            setTimeout(function() {
                self.setState({spanIsActive: false})
            }, 2600)
        }   

        myLoop();
    },
    moreTextStyle: function() {
        if (!this.state.viewingMore) {
            return {
                opacity: 0
            }
        }
    },
    mainTextStyle: function() {
        if (this.state.viewingMore) {
            return {
                opacity: 0.2
            }
        }      
    },
    moreButtonStyle: function() {
        var opacity;

        this.state.viewingMore ? opacity=0 : opacity=1
        return {
            opacity: opacity
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
                <IntroBackground/>
                <div id="main-intro-text" className={classNames({inactive: this.state.viewingMore})} style={this.mainTextStyle()}>
                    <div id="logotype-wrap"><div id="intro-logotype"></div></div>
                    <div id="service-text"><span id="service-text-span" className={classNames({active: this.state.spanIsActive})}>{this.state.introText}</span></div>
                    <div id="find-out-more" style={this.moreButtonStyle()} onClick={this.handleMoreClick}>Find Out More</div>
                </div>
                <div id="more-text" className={classNames({active: this.state.viewingMore})} style={this.moreTextStyle()}>
                    <h3 id="more-text-close" onClick={this.handleCloseClick}>Close</h3>
                    <h2>{moreText}</h2>
                </div>
                <div id="projects-indicator" style={this.indicatorStyle()}>Projects</div>
                <div id="intro-arrow" className="down-arrow" style={this.indicatorStyle()}></div>
            </section>
        );
    }
});

module.exports = HomepageIntro