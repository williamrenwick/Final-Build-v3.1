var React = require('react');
var Router = require('react-router')
var ViewBtn = require('./SideNavViewBtn.js');
var mixin = require('baobab-react/mixins').branch;
var menuActions = require('../../actions/actions.js');
var classNames = require('classnames');
var ProjectActions = require('../../actions/projectActions.js');
var Link = Router.Link;


var SideNavProject = React.createClass({
	mixins: [mixin],
    cursors: {
        projSideOpen: ['menu', 'projSideOpen'],
        menuActive: ['menu', 'isOpen']
    },
    handleClick: function() {
        var $window = $(window),
            workPostH = $window.height(),
            postIndex = this.props.project.index,
            postPosition = workPostH * postIndex;

        menuActions.notClicked();
        $window.scrollTop(postPosition);
        console.log('list item props', this.props.project)
    },
    getStyles: function() {
    	var styleObj = {
    		backgroundImage: 'url(' + this.props.project.images.header + ')',
    		height: heightCalc(this.props.totalAmount)
    	}

        function heightCalc(totalLiAmount) {
            var originalHeight = 170;
            var totalLiHeight = totalLiAmount * originalHeight;

            if (totalLiHeight < window.innerHeight) {
                var newHeight = window.innerHeight / totalLiAmount

                return newHeight

            } else if (totalLiHeight > window.innerHeight) {
                return originalHeight
            }
        }

    	return styleObj
    },
    myData: function() {
        var myProps = this.props.project;

        return myProps
    },
	render: function() {
		return (
            <Link to={this.props.project.link} >
    			<li className={classNames({projLink: true, projLi: !this.state.projSideOpen })} style={ this.getStyles() } onClick={ this.handleClick }>
    				<h1><span className="strikethrough">{this.props.project.text.title}</span></h1>
                    <ViewBtn />
    			</li>
            </Link>
		)
	}
});

module.exports = SideNavProject;