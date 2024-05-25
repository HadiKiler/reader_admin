import { ImageField,Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required, BooleanInput, ImageInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const TagEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
        </SimpleForm>
    </Edit>
);
