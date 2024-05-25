// in src/posts.jsx
import { ImageField, List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const TagList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
        </Datagrid>
    </List>
);
