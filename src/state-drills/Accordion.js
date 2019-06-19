import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };
    
    state = {
        activeSectionIndex: null
    }

    handleActiveSection(index) {
        this.setState({ activeSectionIndex: index })
    }

    renderItem(section, id, activeSectionIndex) {
        return (
            <li className='Accordion_item' key={id}>
                <button
                    type='button'
                    onClick={() => this.handleActiveSection(id)}
                >
                    {section.title}
                </button>
                {(activeSectionIndex === id) && <p>{section.content}</p>}
            </li>
        );
    }
    
    render() {
        const { activeSectionIndex } = this.state;
        const { sections } = this.props;
        return (
            <ul className='Accordion'>
                {sections.map((section, id) => 
                    this.renderItem(section, id, activeSectionIndex)    
                )}
            </ul>
        );
    }
}

export default Accordion;