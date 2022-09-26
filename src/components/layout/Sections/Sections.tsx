// React
import React from 'react'
// Style
import './Sections.scss'
// Components
import AddTaskButton2 from 'components/button/AddTaskButton2'

const Sections = () => {

    return (
        <div className='sectionsDiv' >
            <div className="sectionDiv">
                <AddTaskButton2 />
            </div>
        </div>
    )
}

export default Sections