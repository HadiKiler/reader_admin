// in src/posts.js
import * as React from 'react';
import { ImageField,Create, SimpleForm,BooleanInput, ImageInput, TextInput, DateInput, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="username" validate={[required()]} />
            <TextInput source="password" validate={[required()]}  />
            <TextInput source="email" validate={[required()]} />
            <TextInput source="bio" fullWidth />
            <ImageInput source="image" accept="image/*" validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
            <BooleanInput source="is_staff" />
        </SimpleForm>
    </Create>
);
