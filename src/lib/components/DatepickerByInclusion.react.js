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
                ExampleComponent: &nbsp;
                <DatePicker
                    selected={this.state.date}
                    onChange={
                        /*
                         * Send the new value to the parent component.
                         * setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will update the component's
                         * props and send the data back to the Python Dash
                         * app server if a callback uses the modified prop as
                         * Input or State.
                         */
                        /*e => setProps({ date: e.target.date })*/
                        this.handleChange
                    }
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
