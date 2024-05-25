// in src/posts.jsx
import { ReferenceField, ImageField, List, Datagrid, TextField, DateField, BooleanField, BooleanInput, ReferenceArrayInput, required, RichTextField, ReferenceArrayField, EmailField } from 'react-admin';

export const CommentList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source='id'/>
            <ReferenceField source="parent" reference='comment'/>
            <ReferenceField source="post" reference='post'/>
            <TextField source='name'/>
            <EmailField source="email" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
);
