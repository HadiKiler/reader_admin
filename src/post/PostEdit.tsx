import { ImageField,Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required, BooleanInput, ImageInput, ReferenceArrayInput, ReferenceInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="user" reference='user' />
            <ReferenceInput source="category" reference='category' />
            <TextInput source="title" validate={[required()]}  />
            <RichTextInput source='content' />
            <ReferenceArrayInput source="tags" reference="tag" />
            <BooleanInput source="published" />
        </SimpleForm>
    </Edit>
);
