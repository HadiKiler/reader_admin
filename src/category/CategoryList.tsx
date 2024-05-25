// in src/posts.jsx
import { ImageField, List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const CategoryList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <ImageField source="image" />
        </Datagrid>
    </List>
);
