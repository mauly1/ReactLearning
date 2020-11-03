import React, {useState} from "react";
import Dropdown from "./DropDown";
import "../CSS/Accordion.css"
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    }, {
        label: 'Arabic',
        value: 'ar'
    }, {
        label: 'Hindi',
        value: 'hi'
    }, {
        label: 'Dutch',
        value: 'nl'
    }, {
        label: 'German',
        value: 'de'
    },{
        label: 'French',
        value: 'fr'
    },{
        label: 'Italian',
        value: 'it'
    },{
        label: 'Japanese',
        value: 'ja'
    }

];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className=" accordion-space-width accordion-space ui form">
                <div className="field">
                    <label>Please Enter Text:</label>
                    <input value={text} onChange={(event) => {
                        setText(event.target.value)
                    }}/>
                </div>
            </div>

            <Dropdown
                label='Select a Language'
                options={options}
                selected={language}
                onSelectedChange={setLanguage}/>
            <hr className="accordion-space-width accordion-space"/>
            <div className="accordion-space-width accordion-space "> <h3 > OUTPUT:</h3></div>
            <Convert text={text} language={language}/>
        </div>
    );
};
export default Translate;


