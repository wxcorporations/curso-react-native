import React from 'react';
import ComponentFlex from './components/ComponentFlex/ComponentFlex';
import ComponentClass from './components/ComponentClass/ComponentClass';

const App = () => {
    return ( 
        <>
            <ComponentFlex titulo="Nubank"></ComponentFlex>
            <ComponentClass nome='Fernando' idade='30' ></ComponentClass>
        </>
    );
};

export default App;