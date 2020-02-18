import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Paper, InputBase, IconButton, Tooltip } from '@material-ui/core';
import { Save as SaveIcon } from '@material-ui/icons';

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

const TambahList = ({ handling }) => {
    const initialFormState = '';

    const classes = useStyles();
    const [temp, setTemp] = useState(initialFormState);

    const handleInputChange = event => {
        setTemp(event.target.value)
    }

    const addToList = () => {
        if (!temp) return
        handling(temp);
        setTemp(initialFormState)
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                addToList()
            }}
        >
            <FormControl fullWidth >
                <Paper className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Tambah List"
                        inputProps={{ 'aria-label': 'tambah list' }}
                        value={temp}
                        onChange={handleInputChange}
                        autoFocus={true}
                    />
                    <Tooltip title="Simpan" placement="top" aria-label="simpan">
                        <IconButton className={classes.iconButton} aria-label="search" onClick={() => addToList()}>
                            <SaveIcon />
                        </IconButton>
                    </Tooltip>
                </Paper>
            </FormControl>
        </form>
    );
}
export default TambahList;