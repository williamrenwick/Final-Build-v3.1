var React = require('react');
var Router = require('react-router');
var mixin = require('baobab-react/mixins').branch;
var menuActions = require('../../actions/actions.js');
var classNames = require('classnames');
var Link = Router.Link;

var MainSide = React.createClass({
    mixins: [mixin],
    cursors: {
        projSideOpen: ['menu', 'projSideOpen']
    },
    homeClick: function() {
        var homeTop = 0;

        menuActions.notClicked();

        $(window).scrollTop(homeTop);
    },
    projectsClick: function() {
        if (!this.state.projSideOpen) {

            menuActions.projSideOpen();
        } else if (this.state.projSideOpen) {
            menuActions.projSideClose();
            menuActions.notClicked();
        }  
    },
    contactClick: function() {
        var contactTop = $(document).height() - $(window).height();

        menuActions.notClicked();
        $(window).scrollTop(contactTop);
    },
	render: function() {
		return (
            <div id="main-side" >
    			<ul>
                    <li id="homeLi" onClick={this.homeClick} >
                        <span className="number-wrap">
                            <span className="page-number">1</span>/<span className="total-number">3</span>
                        </span>
                        <span className="page-title">About</span>
                    </li>
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