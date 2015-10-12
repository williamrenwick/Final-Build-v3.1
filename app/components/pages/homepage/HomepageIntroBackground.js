var React = require('react');

var classNames = require('classnames');
var ScrollActions = require('../../../actions/scrollActions.js');
var PureMixin = require('react-pure-render/mixin');
var mixin = require('baobab-react/mixins').branch;

var IntroBackground = React.createClass({
    mixins: [mixin, PureMixin],
    cursors: {
        isLoaded: ['general', 'isNowLoaded'],
        insideWorkPosts: ['homepage', 'insideWorkPosts'],
        windowHeight: ['resize', 'currentHeight'],
        isMobile: ['resize', 'isMobile'],
        isTablet: ['resize', 'isTablet'],
        isDesktop: ['resize', 'isDesktop'],
        scrollPos: ['scrolling', 'scrollPosition'],
        imgTranslate: ['scrolling', 'imgTranslateAmount']
    },
    componentWillMount: function() {
        $(window).on('scroll', this.handleScroll)
    },
    componentWillUnmount: function() {
        $(window).off('scroll', this.handleScroll)
    },
    componentDidMount: function() {
        var self = this;

        setTimeout(function() {
            self.calcTranslate();
        }, 30)
    },
    calcTranslate: function() {
        var translateAmount = -( this.state.scrollPos * 0.15 );

        console.log(this.state.scrollPos);

        ScrollActions.imgTranslateAmount(translateAmount);
    },
    handleScroll: function() {
        this.calcTranslate();
    },
    getTransformStyle: function(rotateAmount) {
        var styles = {
                WebkitTransform: 'translateY(' + this.state.imgTranslate + 'px) rotate(' + rotateAmount + 'deg)',
                MozTransform: 'translateY(' + this.state.imgTranslate + 'px) rotate(' + rotateAmount + 'deg)',
                OTransform: 'translateY(' + this.state.imgTranslate + 'px) rotate(' + rotateAmount + 'deg)',
                msTransform: 'translateY(' + this.state.imgTranslate + 'px) rotate(' + rotateAmount + 'deg)',
                transform: 'translateY(' + this.state.imgTranslate + 'px) rotate(' + rotateAmount + 'deg)'
            }

        return styles
    },
    render: function() {
        var loaded = this.state.isLoaded;

    	return (
    	    <section id="intro-background" className={classNames({notLoaded: !loaded})}>
                <div id='wiggle-blue' className={classNames({wiggle: true, notLoaded: !loaded})} style={this.getTransformStyle(-40)}>
                    <div className='content'></div>
                </div>
                <div id='wiggle-green' className={classNames({wiggle: true, notLoaded: !loaded})} style={this.getTransformStyle(30)}>
                    <div className='content'></div>
                </div>
                <div id='line-orange' className={classNames({line: true, notLoaded: !loaded})} style={this.getTransformStyle(-117)}>
                    <div className='content'></div>
                </div>
                <div id='line-blue' className={classNames({line: true, notLoaded: !loaded})} style={this.getTransformStyle(-60)}>
                    <div className='content'></div>
                </div>       
                 <div id='dot-blue' className={classNames({dot: true, notLoaded: !loaded})} style={this.getTransformStyle(0)}>
                    <div className='content'></div>
                </div> 
                <div id='dot-yellow' className={classNames({dot: true, notLoaded: !loaded})} style={this.getTransformStyle(0)}>
                    <div className='content'></div>
                </div> 
                <div id='dot-black' className={classNames({dot: true, notLoaded: !loaded})} style={this.getTransformStyle(0)}>
                    <div className='content'></div>
                </div>    
                <div id='dot-black-2' className={classNames({dot: true, notLoaded: !loaded})} style={this.getTransformStyle(0)}>
                    <div className='content'></div>
                </div>                      
            </section>
        );
    }
});

module.exports = IntroBackground