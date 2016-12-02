import React from 'react';
import styles from './CheckBox.pcss';
import uuid from 'node-uuid';

const CheckBox = props => {

    const { isActive } = props;

    const randomId = uuid.v4();
    return (
        <div>
            <input type="checkbox" id={randomId} className={styles.cssCheckbox} /><label htmlFor={randomId} className={styles.cssLabel}></label>
        </div>
    );

};

export default CheckBox;