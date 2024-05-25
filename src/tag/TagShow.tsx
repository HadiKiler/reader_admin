import {BooleanField, ImageField,Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';

export const TagShow = () => (
    <Show>
        <SimpleShowLayout>
        <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);