// in src/posts.js
import { RichTextInput } from 'ra-input-rich-text';
import { ReferenceInput,Create, SimpleForm,BooleanInput, ImageInput, TextInput, DateInput, required, EmailField, TextField } from 'react-admin';
import { ReferenceArrayInput } from 'react-admin';

export const CommentCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="parent" reference='comment'/>
            <ReferenceInput source="post" reference='post'/>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="email" />
            <RichTextInput source='content' />
        </SimpleForm>
    </Create>
);
