import {BooleanField, ImageField,Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="username"  />
            <TextField source="password"  />
            <TextField source="email" />
            <ImageField source="image" />
            <TextField source="bio" />
            <BooleanField source="is_staff" />
        </SimpleShowLayout>
    </Show>
);