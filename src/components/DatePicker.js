import React from 'react';
import { DatePicker, datePickerInput} from 'react-datepicker'

const props = {
	datePicker: () => ({
		id: 'date-picker',
		light: false,
		onChange: console.log('onPickerChange'),
		onClose: console.log('onClose'),
	}),
	datePickerInput: () => ({
		id: 'date-picker-input-id',
		className: 'some-class',
		labelText: 'Date Picker label',
		placeholder: 'mm/dd/yyyy',
		disabled: false,
		invalid: false,
		invalidText: 'A valid value is required',
		iconDescription: 'Icon description',
		onClick: console.log('onClick'),
		onChange: console.log('onInputChange'),
	}),
};
   
export default (
	<div>
		<link rel="stylesheet" type="text/css" href="https://unpkg.com/carbon-components@10.6.1/css/carbon-components.css" />
		<DatePicker
			{...props.datePicker()}
			datePickerType="single"
			dateFormat="m/d/Y"
		>
			<datePickerInput {...props.datePickerInput()} />
		</DatePicker>
	</div>
)