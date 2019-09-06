import React from 'react'
import './Task.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Task extends React.Component {
    state = {
        id: null,
        title: null,
        text: null,
        completed: false
    }

    constructor(props) {
        super(props)
        this.state.id = props.data.id
        this.state.title = props.data.title
        this.state.text = props.data.text
        this.state.completed = props.data.completed
    }

    componentDidUpdate() {
        const { id } = this.state
        localStorage.setItem(id, JSON.stringify(this.state))
    }

    saveTask = key => {
        this.props.setEditTask(null)
    }

    editTask = key => {
        this.props.setEditTask(key)
    }

    removeTask = key => {
        localStorage.removeItem(key)
        this.props.updateComponent()
    }

    changeField = e => {
        const { id, value } = e.currentTarget
        this.setState({[id]: value})
    }

    completeTask = key => {
        this.setState({completed: !this.state.completed})
    }

    renderView() {
        const { id, title, text, completed } = this.state

        return (
            <div className={completed ? 'task completed' : 'task'}>
                <div className="task__title">{title}</div>
                <div className="task__text">{text}</div>

                <div className="task__bar">
                    <div className="btn btn-edit" onClick={() => this.editTask(id)}>
                        <FontAwesomeIcon icon="edit"/>
                    </div>
                    <div className="btn btn-remove" onClick={() => this.removeTask(id)}>
                        <FontAwesomeIcon icon="minus-circle"/>
                    </div>
                </div>
                <div className="task__complete-bar">
                    <div className="btn btn-complete" onClick={() => this.completeTask(id)}>
                        <FontAwesomeIcon icon="check"/>
                    </div>
                </div>
            </div>
        )
    }

    renderEdit() {
        const { id, title, text } = this.state

        return (
            <div className="task">
                <input type="text" className="task__title" id="title" onChange={this.changeField} value={title}/>
                <input type="area" className="task__text" id="text" onChange={this.changeField} value={text}/>

                <div className="task__bar">
                    <div className="btn btn-save" onClick={() => this.saveTask(id)}>
                        <FontAwesomeIcon icon="save"/>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { editTaskId } = this.props
        const { id, title, text } = this.props.data

        if (editTaskId == id) {
            return this.renderEdit()
        } else {
            return this.renderView()
        }
    }
}
