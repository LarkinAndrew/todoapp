import React from 'react'
import { Task } from '../Task/'
import './Workplace.css'

export class Workplace extends React.Component {
    state = {
        editTaskId: null
    }

    setEditTask = id => {
        this.setState({editTaskId: id})
    }

    renderList() {
        let list = []

        if (localStorage.length) {
            const keys = Object.keys(localStorage)
            for (let key of keys) {
                let item = JSON.parse(localStorage.getItem(key))
                item.id = key
                list.push(item)
            }
            list.sort((a, b) => {
                return (a.title > b.title) ? -1 : ((a.title < b.title) ? 1 : 0)
            })
            list = list.map(item => {
                return <Task
                    key={item.id}
                    data={item}
                    updateComponent={this.props.updateComponent}
                    editTaskId={this.state.editTaskId}
                    setEditTask={this.setEditTask}
                />
            })
        } else {
            list = <div className="empty-list"><div>You have not tasks yet</div></div>
        }

        return list
    }

    render() {
        return (
            <div className="app-workplace">
                {this.renderList()}
            </div>
        )
    }
}
