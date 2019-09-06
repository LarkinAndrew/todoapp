import React from 'react'
import './AddTaskWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class AddTaskWindow extends React.Component {
    state = {
        title: null,
        text: null
    }

    onCloseBtn = e => {
        e.preventDefault()
        this.props.updateVisibility(false)
    }

    addNewTask = e => {
        let id = localStorage.length
        localStorage.setItem(++id, JSON.stringify(this.state))
        this.props.updateVisibility(false)
    }

    onFormChange = e => {
        const { id, value } = e.currentTarget
        this.setState({[id]: value})
    }

    renderModalWindow() {
        return (
            <div className="modal">
                <div className="modal-window">
                    <a title="Close" className="modal-window__close" onClick={this.onCloseBtn}><FontAwesomeIcon icon="times"/></a>
                    <div className="modal-window__header">Add new task</div>
                    <div className="new-task-form">
                        <input className="new-task-form-title" id="title" type="text" placeholder="Title" onChange={this.onFormChange}/>
                        <textarea className="new-task-form-text" id="text" placeholder="I want to do a ..." onChange={this.onFormChange}/>
                        <button className="btn add-btn new-task-form-btn" onClick={this.addNewTask}>Add</button>
                    </div>
                </div>
            </div>
        )
    }

    renderNothing() {
        return null
    }

    render() {
        if (this.props.visible) {
            return this.renderModalWindow()
        } else {
            return this.renderNothing()
        }
    }
}
