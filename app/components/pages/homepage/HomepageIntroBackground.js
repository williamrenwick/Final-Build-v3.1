var React = require('react');
var classNames = require('classnames');
var PureMixin = require('react-pure-render/mixin');
var mixin = require('baobab-react/mixins').branch;

var IntroBackground = React.createClass({
    mixins: [mixin, PureMixin],
    cursors: {
        isPreloaded: ['general', 'isPreloaded'],
        insideWorkPosts: ['homepage', 'insideWorkPosts'],
        windowHeight: ['resize', 'currentHeight'],
        isMobile: ['resize', 'isMobile'],
        isTablet: ['resize', 'isTablet'],
        isDesktop: ['resize', 'isDesktop'],
        scrollPos: ['scrolling', 'scrollPosition'],
        isPreloaded: ['general', 'isPreloaded']
    },
    getTransformStyle: function(translateFactor, rotateAmount) {
        var styles = {
            WebkitTransform: 'translateY(' + (this.state.scrollPos * translateFactor) + 'px) rotate(' + rotateAmount + 'deg)',
            MozTransform: 'translateY(' + (this.state.scrollPos * translateFactor) + 'px) rotate(' + rotateAmount + 'deg)',
            OTransform: 'translateY(' + (this.state.scrollPos * translateFactor) + 'px) rotate(' + rotateAmount + 'deg)',
            msTransform: 'translateY(' + (this.state.scrollPos * translateFactor) + 'px) rotate(' + rotateAmount + 'deg)',
            transform: 'translateY(' + (this.state.scrollPos * translateFactor) + 'px) rotate(' + rotateAmount + 'deg)'
        }   

        return styles
    },
    render: function() {
    	return (
    	    <section id="intro-background" className={classNames({notLoaded: !this.state.isPreloaded})}>
                <div id='wiggle-blue' className={classNames({wiggle: true, notLoaded: !this.state.isPreloaded})} style={this.getTransformStyle(0.1, -40)}>
                    <div className='content'></div>
                </div>
                <div id='wiggle-green' className={classNames({wiggle: true, notLoaded: !this.state.isPreloaded})} style={this.getTransformStyle(0.05, 30)}>
                    <div className='content'></div>
                </div>
                <div id='line-orange' className={classNames({line: true, notLoaded: !this.state.isPreloaded})} style={this.getTransformStyle(0.3, -117)}>
                    <div className='content'></div>
                </div>
                <div id='line-blue' className={classNames({line: true, notLoaded: !this.state.isPreloaded})} style={this.getTransformStyle(0.02, -60)}>
                    <div className='content'></div>
                </div>       
                 <div id='dot-blue' className={classNames({dot: true, notLoaded: !this.state.isPreloaded})} style={this.getTransformStyle(0.2, 0)}>
                    <div className='content'></div>
                </div> 
                <div id='dot-yellow' className={classNames({dot: true, notLoaded: !this.state.isPreloaded})} style={this.getTransformStyle(0.2, 0)}>
                    <div className='content'></div>
                </div> 
                <div id='dot-black' className={classNames({dot: true, notLoaded: !this.state.isPreloaded})} style={this.getTransformStyle(0.07, 0)}>
                    <div className='content'></div>
                </div>    
                <div id='dot-black-2' className={classNames({dot: true, notLoaded: !this.state.isPreloaded})} style={this.getTransformStyle(0.3, 0)}>
                    <div className='content'></div>
                </div>                      
            </section>
        );
    }
});

module.exports = IntroBackground