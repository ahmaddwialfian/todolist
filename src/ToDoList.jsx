import React, { useState } from 'react';
import TambahList from './component/TambahList';
import { makeStyles } from '@material-ui/core/styles';
import BodyList from './component/BodyList';
import UbahList from './component/UbahList';


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 1000,
        },
    },
}));


let countId = 0;

const ToDoList = () => {
    // list
    const [list, setList] = useState([]);

    // edit
    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, value: '' }
    const [currentList, setCurrentList] = useState(initialFormState)

    // handling add
    const addList = newValue => {
        let newCount = countId + 1;
        countId = newCount;
        setList([...list, { id: newCount, value: newValue }]);
    }

    // handling edit
    const editRow = list => {
        setEditing(true)

        setCurrentList({ id: list.id, value: list.value })
    }

    // handling save edit
    const saveEdit = (id, data) => {
        setEditing(false)

        setList(list.map(list => (list.id === id ? data : list)));
        setCurrentList(initialFormState);
    }

    // handling cancel edit
    const cancelEdit = list => {
        setEditing(false)
        setCurrentList(initialFormState);
    }

    // handling delete
    const deleteList = id => {
        setList(list.filter(data => data.id !== id))
    }

    // load style
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>To Do List App</h1>
            {
                !editing ?
                    <TambahList handling={addList}></TambahList>
                    :
                    <UbahList currentList={currentList} handlingCancel={cancelEdit} handlingSave={saveEdit} ></UbahList>

            }
            <BodyList value={list} handlingDelete={deleteList} handlingEdit={editRow} />
        </div >
    )
}

export default ToDoList;