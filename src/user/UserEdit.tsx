import { ImageField,Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required, BooleanInput, ImageInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const UserEdit = () => (
    <Edit>
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
    </Edit>
);
