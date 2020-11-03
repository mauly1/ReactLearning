import React, {useState} from "react";
import "../CSS/Accordion.css"

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClicked = (index) => {
        console.log('Title Clicked of index ', index);
        setActiveIndex(index);
    }

    const renderItems = items.map((item, index) => {
const active =index ===activeIndex?'active':''
        return (
            <React.Fragment key={item.key}>
                <div
                    className={`title ${active}`}
                    onClick={() => {
                        onTitleClicked(index)
                    }}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content  ${active}`}>
                    <p className="accordion-space">{item.content}</p>
                </div>
            </React.Fragment>
        );

    });
    return (
        <div className="ui styled accordion accordion-space">
         {renderItems}
        </div>
    );
}
export default Accordion;
