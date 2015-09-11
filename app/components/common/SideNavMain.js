var React = require('react');
var Router = require('react-router');
var mixin = require('baobab-react/mixins').branch;
var menuActions = require('../../actions/actions.js');
var classNames = require('classnames');
var Link = Router.Link;

var MainSide = React.createClass({
    mixins: [mixin],
    cursors: {
        isInHomepage: ['homepage', 'isInHomepage'],
        projSideOpen: ['menu', 'projSideOpen'],
        isMobile: ['resize', 'isMobile'],
        isTablet: ['resize', 'isTablet'],
        isDesktop: ['resize', 'isDesktop']
    },
    homeClick: function() {
        menuActions.notClicked();

        if (this.state.isInHomepage) {
            $(window).scrollTop(0);
        }
    },
    mobileEvents: function() {
        if (!this.state.projSideOpen) {
            menuActions.projSideOpen();
        } else if (this.state.projSideOpen) {
            menuActions.projSideClose();
        }  
    },
    desktopEvents: function() {
        if (!this.state.projSideOpen) {
            menuActions.projSideOpen();
        } else if (this.state.projSideOpen) {
            menuActions.projSideClose();
            menuActions.notClicked();
        }  
    },
    projectsClick: function() {
        if (this.state.isMobile) {
            this.mobileEvents();
        } else {
            this.desktopEvents();
        }
    },
    contactClick: function() {
        var contactTop = $(document).height() - $(window).height();

        menuActions.notClicked();
        $(window).scrollTop(contactTop);
    },
    mobileUlStyles: function() {
        var styleObj = {
            paddingRight: '2%'
        }

        return styleObj
    },
    getUlStyles: function() {
        if (this.state.isMobile && this.state.projSideOpen) {
            return this.mobileUlStyles()
        }
    },
	render: function() {
		return (
            <div id="main-side" >
    			<ul style={ this.getUlStyles() }>
                    <Link to='home'>
                        <li id="homeLi" onClick={this.homeClick} >
                            <span className="number-wrap">
                                <span className="page-number">1</span>/<span className="total-number">3</span>
                            </span>
                            <span className="page-title">About</span>
                        </li>
                    </Link>
                    <li id="projLi" onClick={this.projectsClick}>
                        <span className="number-wrap">
                            <span className="page-number">2</span>/<span className="total-number">3</span>
                        </span>
                        <span className="page-title">Projects</span>
                        <div id="view-all-btn" className={ classNames({close: this.state.projSideOpen}) }></div>
                    </li>
                    <li id="contactLi" onClick={this.contactClick}>
                        <span className="number-wrap">
                            <span className="page-number">3</span>/<span className="total-number">3</span>
                        </span>
                        <span className="page-title">Contact</span>
                    </li>
                </ul>
            </div>
		)
	}
});

module.exports = MainSide;