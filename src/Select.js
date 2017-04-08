import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Select extends Component {
    state = {
        value: this.props.items[0],
    };

    handleChange = (event, index, value) => this.setState({value});

    menuItems(values) {
        return this.props.items.map((item) => (
            <MenuItem
                key={item}
                value={item}
                primaryText={item}
            />
        ));
    }

    render() {
        const {values} = this.state;
        return (
            <SelectField
                hintText={this.props.hintText}
                value={this.state.value}
                onChange={this.handleChange}
            >
                {this.menuItems(values)}
            </SelectField>
        );
    }
}

export default Select;
