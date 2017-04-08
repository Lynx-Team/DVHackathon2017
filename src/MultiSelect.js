import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class MultiSelect extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

  menuItems(values) {
    return this.props.items.map((item) => (
      <MenuItem
        key={item}
        insetChildren={true}
        checked={values && values.includes(item)}
        value={item}
        primaryText={item}
      />
    ));
  }

  render() {
    const {values} = this.state;
    return (
      <SelectField
        multiple={true}
        hintText={this.props.hintText}
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}

export default MultiSelect;
