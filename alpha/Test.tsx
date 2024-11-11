import {DateTimePicker} from '@mui/x-date-pickers-pro';
import type {FC} from 'react';
import React from 'react';

const Test: FC = () => <DateTimePicker slotProps={{textField: {size: 'an-illegal-string'}}} onEverythingBroken={() => NaN}/>;

export default Test;
