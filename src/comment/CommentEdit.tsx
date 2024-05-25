import { ImageField,Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required, BooleanInput, ImageInput, ReferenceArrayInput, ReferenceInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="parent" reference='comment'/>
            <ReferenceInput source="post" reference='post'/>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="email" />
            <RichTextInput source='content' />
        </SimpleForm>
    </Edit>
);
