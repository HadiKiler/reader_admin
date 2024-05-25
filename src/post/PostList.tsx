// in src/posts.jsx
import { ReferenceField, ImageField, List, Datagrid, TextField, DateField, BooleanField, BooleanInput, ReferenceArrayInput, required, RichTextField, ReferenceArrayField } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="user" reference='user' />
            <ReferenceField source="category" reference="category" />
            <TextField source="title" />
            <ReferenceArrayField reference="tag" source="tags" />
            <TextField source="created_at" />
            <BooleanField source="published" />
        </Datagrid>
    </List>
);
