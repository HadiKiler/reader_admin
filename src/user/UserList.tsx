// in src/posts.jsx
import { ImageField, List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="username"  />
            <TextField source="email"  />
            <ImageField source="image" />
            <BooleanField source="is_superuser" />
        </Datagrid>
    </List>
);
