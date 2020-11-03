import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/DropDown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


const items = [
    {
        title: 'java',
        content: 'you will get java content here...'
    }, {
        title: 'react',
        content: 'you will get react content here...'
    }, {
        title: 'nodejs',
        content: 'you will get nodejs content here...'
    }
]
const options = [
    {
        label: 'The Color Red..',
        value: 'red'
    }, {
        label: 'The Color Green..',
        value: 'green'
    }, {
        label: 'The Color Blue..',
        value: 'blue'
    }
];

/*export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropDown, setShowDropDown] = useState(true);
    return (
        <div>
            {/!*   <Accordion items={items}/>*!/}
            {/!*   <Search/>*!/}
            <button onClick={() => setShowDropDown(!showDropDown)}>Show Drop Down</button>
            {showDropDown ?
                <Dropdown
                  label='Select a color'
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                /> : null}
        </div>
    );
}*/
/*const showDropDown =()=>{
    const [selected, setSelected] = useState(options[0]);
    const [showDropDown, setShowDropDown] = useState(true);
    if(window.location.pathname==='/dropdown'){
        return  <Dropdown
            label='Select a color'
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
        />
    }
}*/

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div className="accordion-space-width accordion-space ui form">
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label='Select a color'
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>


        </div>
    );
};
