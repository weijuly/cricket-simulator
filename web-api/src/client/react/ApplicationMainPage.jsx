import React from 'react';
import {connect} from 'react-redux';
import Server from '../utils/server';
import Actions from '../redux/actions';

class ApplicationMainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getInfo();
    }

    async getInfo() {
        try {
            const info = await Server.getInfo();
            this.props.dispatch(Actions.updatePage(info));
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <h2>Server: {this.props.host}, Time: {this.props.date}</h2>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(ApplicationMainPage);