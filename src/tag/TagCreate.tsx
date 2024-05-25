// in src/posts.js
import * as React from 'react';
import { ImageField,Create, SimpleForm,BooleanInput, ImageInput, TextInput, DateInput, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const TagCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
        </SimpleForm>
    </Create>
);
