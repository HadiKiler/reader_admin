import {BooleanField, ImageField,Show, SimpleShowLayout, TextField, DateField, RichTextField, ReferenceField } from 'react-admin';

export const CategoryShow = () => (
    <Show>
        <SimpleShowLayout>
        <ReferenceField source="parent" reference='category'/>
        <TextField source="name" />
        <ImageField source="image" />
        </SimpleShowLayout>
    </Show>
);