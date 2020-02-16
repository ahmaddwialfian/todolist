import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Paper, ListItemSecondaryAction, IconButton, Tooltip, Divider } from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    divider: {
        height: 28,
        margin: 4,
    },
}));

const BodyList = ({ value, handlingDelete, handlingEdit }) => {
    const classes = useStyles();

    return (
        <List>
            {value.map((data, key) =>
                < Paper style={{ marginBottom: '5px' }}>
                    <ListItem>
                        <ListItemText
                            primary={data.value}
                        />
                        <Divider className={classes.divider} />
                        <ListItemSecondaryAction>
                            <Tooltip title="Ubah" placement="top" aria-label="ubah">
                                <IconButton edge="end" onClick={() => handlingEdit(data)}>
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Hapus" placement="top" aria-label="hapus">
                                <IconButton edge="end" onClick={() => handlingDelete(data.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </ListItemSecondaryAction>
                    </ListItem >
                </Paper>
            )}

        </List >
    )
}

export default BodyList;