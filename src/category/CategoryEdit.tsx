import { ImageField,Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required, BooleanInput, ImageInput, ReferenceInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="parent" reference='category'/>
            <TextInput source="name" validate={[required()]} />
            <ImageInput source="image" accept="image/*" validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);
