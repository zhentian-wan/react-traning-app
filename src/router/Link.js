
import React, {Component} from 'react';

const styles = {
    padding: '8px'
};

export class Link extends Component {

    static contextTypes = {
        route: React.PropTypes.string,
        linkHandler: React.PropTypes.func
    };

    render() {
        const activeClass = this.context.route === this.props.to ? 'active': '';
        const handleClick = (ev) => {
            ev.preventDefault();
            this.context.linkHandler(this.props.to);
        };

        return (
            <a href="#" style={styles} className={activeClass} onClick={handleClick}>{this.props.children}</a>
        );
    }
}


Link.PropTypes = {
    to: React.PropTypes.string.isRequired
};