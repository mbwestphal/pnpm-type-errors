import {DateTimePicker} from '@mui/x-date-pickers-pro';
import type {FC} from 'react';
import React from 'react';

type TestProps = {
	size?: 'an-illegal-string';
};

const Test: FC<TestProps> = (props) => <DateTimePicker slotProps={{textField: {size: props.size}}} />;

export default Test;
