import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Paper, InputBase, IconButton, Tooltip } from '@material-ui/core';
import { Save as SaveIcon, Cancel as CancelIcon } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 600,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const UbahList = ({ currentList, handlingCancel, handlingSave }) => {
    const classes = useStyles();
    const [temp, setTemp] = useState(currentList);

    const handleInputChange = event => {
        setTemp({
            ...temp, value:
                event.target.value
        })
    }

    const saveEdit = () => {
        if (!temp) return
        handlingSave(temp.id, temp);
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                saveEdit()
            }}
        >
            <FormControl fullWidth >
                <Paper className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Form edit"
                        inputProps={{ 'aria-label': 'edit list' }}
                        value={temp.value}
                        onChange={handleInputChange}
                        autoFocus={true}
                    />
                    <Tooltip title="Simpan" placement="top" aria-label="simpan">
                        <IconButton className={classes.iconButton} aria-label="search" onClick={() => saveEdit()}>
                            <SaveIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Batal" placement="top" aria-label="batal">
                        <IconButton className={classes.iconButton} aria-label="search" onClick={() => handlingCancel()}>
                            <CancelIcon />
                        </IconButton>
                    </Tooltip>
                </Paper>
            </FormControl>
        </form>
    );
}
export default UbahList;