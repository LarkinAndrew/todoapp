import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AddTaskWindow } from '../AddTaskWindow/'

import KeyboardEventHandler from 'react-keyboard-event-handler';

export class Header extends React.Component {
    state = {
        modalWindowVisibility: false
    }

    onAddButton = () => {
        this.setState({modalWindowVisibility: true})
    }

    updateVisibility = visible => {
        this.setState({modalWindowVisibility: visible})
        this.props.updateComponent()
    }

    render() {
        return (
            <React.Fragment>
                <div className="app-header" onKeyDown={this.handleKeyPress}>
                    <div className="logo">
                        <div>
                            <div className="app-header__header">ToDoList</div>
                            <div className="app-header__note">Press "a" to add a new task</div>
                        </div>
                    </div>
                    <div className="add-new-task" onClick={this.onAddButton}>
                        <FontAwesomeIcon icon="plus"/>
                    </div>
                </div>

                <AddTaskWindow
                    updateVisibility={this.updateVisibility}
                    visible={this.state.modalWindowVisibility}
                />

                <KeyboardEventHandler handleKeys={['a']} onKeyEvent={this.onAddButton}/>
            </React.Fragment>
        )
    }
}
