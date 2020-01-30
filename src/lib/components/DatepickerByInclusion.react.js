import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { parseISO, format } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DatepickerByInclusion extends Component {
    constructor(props){
      super(props)
      this.state = {date: parseISO(this.props.date)};
    };

    handleChange = date => {
        const {setProps} = this.props

        this.setState({
            date: date
        });
        setProps({ date: format(date, 'yyyy-MM-dd')})
    };

    render() {
        const {id, setProps} = this.props;
        const datesIncluded = this.props.datesIncluded.map(parseISO);

        return (
            <div id={id}>
                <DatePicker
                    selected={this.state.date}
                    onChange={this.handleChange}
                    includeDates={datesIncluded}
                />
            </div>
        );
    }
}

DatepickerByInclusion.defaultProps = {};

DatepickerByInclusion.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    date: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    datesIncluded: PropTypes.array,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
