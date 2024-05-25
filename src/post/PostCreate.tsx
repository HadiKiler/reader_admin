// in src/posts.js
import { RichTextInput } from 'ra-input-rich-text';
import { ReferenceInput,Create, SimpleForm,BooleanInput, ImageInput, TextInput, DateInput, required } from 'react-admin';
import { ReferenceArrayInput } from 'react-admin';
export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="user" reference='user'/>
            <ReferenceInput source="category" reference='category' />
            <TextInput source="title" validate={[required()]}  />
            <RichTextInput source='content' />
            <ReferenceArrayInput source="tags" reference="tag" />
            <BooleanInput source="published" />
        </SimpleForm>
    </Create>
);
