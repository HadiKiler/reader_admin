import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserCreate } from "./user/UserCreate";
import { UserList } from "./user/UserList";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { CategoryCreate } from "./category/CategoryCreate";
import { TagList } from "./tag/TagList";
import { TagEdit } from "./tag/TagEdit";
import { TagShow } from "./tag/TagShow";
import { TagCreate } from "./tag/TagCreate";
import { PostCreate } from "./post/PostCreate";
import { PostList } from "./post/PostList";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import authProvider from "./authProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="user"
      list={UserList}
      edit={UserEdit}
      show={UserShow}
      create={UserCreate}
    />
    <Resource
      name="category"
      list={CategoryList}
      edit={CategoryEdit}
      show={CategoryShow}
      create={CategoryCreate}
    />
    <Resource
      name="tag"
      list={TagList}
      edit={TagEdit}
      show={TagShow}
      create={TagCreate}
    />
    <Resource
      name="post"
      list={PostList}
      edit={PostEdit}
      show={PostShow}
      create={PostCreate}
    />
    <Resource
      name="comment"
      list={CommentList}
      edit={CommentEdit}
      show={ShowGuesser}
      create={CommentCreate}
    />
    <Resource
      name="like"
      list={ListGuesser}
    />
  </Admin>
);
