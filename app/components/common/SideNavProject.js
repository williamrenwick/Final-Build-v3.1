var React = require('react');
var Router = require('react-router')
var ViewBtn = require('./SideNavViewBtn.js');
var PureMixin = require('react-pure-render/mixin');
var mixin = require('baobab-react/mixins').branch;
var menuActions = require('../../actions/actions.js');
var classNames = require('classnames');
var ProjectActions = require('../../actions/projectActions.js');
var Link = Router.Link;


var SideNavProject = React.createClass({
    mixins: [mixin, PureMixin],
    cursors: {
        windowHeight: ['resize', 'currentHeight'],
        projSideOpen: ['menu', 'projSideOpen'],
        menuActive: ['menu', 'isOpen']
    },
    handleClick: function() {
        var workPostH = this.state.windowHeight,
            postIndex = this.props.project.index,
            postPosition = workPostH * postIndex;

        menuActions.notClicked();
        $(window).scrollTop(postPosition);
    },
    calculateHeight: function(numLis) {
        var optimalHeight = 170;
        var totalLiHeight = numLis * optimalHeight;

        return totalLiHeight < this.state.windowHeight ?
            newHeight :
            optimalHeight;
    },
    getStyles: function() {
        return {
            backgroundImage: 'url(' + this.props.project.images.header + ')',
            height: this.calculateHeight(this.props.totalAmount)
        };
    },
    render: function() {
        return (
            <Link to={this.props.project.link} >
                <li
                    className={classNames({
                        projLink: true,
                        projLi: !this.state.projSideOpen
                    })}
                    style={this.getStyles()}
                    onClick={this.handleClick}
                >
                    <h1>
                        <span className="strikethrough">
                            {this.props.project.text.title}
                        </span>
                    </h1>
                    <ViewBtn />
                </li>
            </Link>
        )
    }
});

module.exports = SideNavProject;