import React from 'react';
import Person from './Person';
import styles from './App.pcss';
import PersonList from './PersonList';
import AddPersonForm from './AddPersonForm';
import Loading from './Loading';
import { List } from 'immutable';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
       const { getPersons } = this.props; // getPersons ends up to props from AppContainer       
       getPersons();
    }
    
    render() {
        const { children, loading } = this.props;        
    

        return (
            <div className={styles.root}>                
                <h1>Helous world</h1>
                {loading ? <Loading /> : false}
                {children}
            </div>
        );
    }  
};

export default App;
