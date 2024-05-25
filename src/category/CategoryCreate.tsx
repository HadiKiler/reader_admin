// in src/posts.js
import * as React from 'react';
import { ImageField,Create, SimpleForm,BooleanInput, ImageInput, TextInput, DateInput, required, ReferenceInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="parent" reference='category'/>
            <TextInput source="name" validate={[required()]} />
            <ImageInput source="image" accept="image/*" validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);
