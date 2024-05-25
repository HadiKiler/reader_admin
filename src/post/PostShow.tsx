import {BooleanField, ImageField,Show, SimpleShowLayout, TextField, DateField, RichTextField, ReferenceArrayField, ReferenceField } from 'react-admin';

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="user" reference='user' />
            <ReferenceField source="category" reference='category' />
            <TextField source="title" />
            <RichTextField source='content' />
            <ReferenceArrayField source="tags" reference="tag" />
            <BooleanField source="published" />
        </SimpleShowLayout>
    </Show>
);