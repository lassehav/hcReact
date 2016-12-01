import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
    .add('Basic Button', () => (
        <Button onClick={action('naps')}>Testi</Button>
    ))
    .add('Block Button', () => (
        <Button block onClick={action('bloksuti')}>Testi</Button>
    ));