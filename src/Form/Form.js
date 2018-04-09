import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 320,
    },
    button: {
        marginTop: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        width: 50
    },
});

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };
    }

    search(event) {
        const { userName } = this.state;
        if (userName == null || userName == undefined) {
            this.props.changeUsers([]);
            return;
        }
        fetch("https://api.github.com/search/users?q=" + userName)
            .then(res => res.json())
            .then((response) => {
                this.props.changeUsers(response.items);
            },
            (error) => {
                console.log(error);
            });
    }

    render() {
        const { classes } = this.props;
        return (
            <div >
                <div>
                    <TextField
                        className={classes.textField}
                        value={this.state.userName}
                        onChange={(event) => this.setState({ userName: event.target.value })}
                        label="Search"
                        type="search"
                        margin="normal"
                    />
                </div>
                <div>
                    <Button className={classes.button} onClick={this.search.bind(this)} className="Btn-Search" variant="raised" color="primary">Search</Button>
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);