// import simpleRestProvider from "ra-data-simple-rest";

// export const dataProvider = simpleRestProvider(
//   import.meta.env.VITE_SIMPLE_REST_URL
// );
import simpleRestDataProvider from "ra-data-simple-rest";
import {
  CreateParams,
  UpdateParams,
  DataProvider,
  fetchUtils,
} from "react-admin";



let id = ""
let password = ""
  try{
    id = JSON.parse(localStorage.getItem('auth')).id
    password = JSON.parse(localStorage.getItem('auth')).password
  }catch{
    id=""
  }


const httpClient = (url: string, options: fetchUtils.Options = {}) => {
  const customHeaders = (options.headers ||
      new Headers({
          Accept: 'application/json',
      })) as Headers;    
  // add your own headers here    
  customHeaders.set('id', id);
  customHeaders.set('password', password);
  options.headers = customHeaders;
  return fetchUtils.fetchJson(url, options);
}  



const endpoint = import.meta.env.VITE_SIMPLE_REST_URL
const baseDataProvider = simpleRestDataProvider(endpoint, httpClient);

type UserParams = {
  id: string;
  username: string;
  password: string;
  email: string;
  bio: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
  is_staff: string;
};

type CategoryParams = {
  id: string;
  parent : string;
  name: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};



const createUserFormData = (
  params: CreateParams<UserParams> | UpdateParams<UserParams>
) => {
  const formData = new FormData();
  params.data.username && formData.append("username", params.data.username);
  params.data.password && formData.append("password", params.data.password);
  params.data.email && formData.append("email", params.data.email);
  params.data.bio && formData.append("bio", params.data.bio);
  params.data.image?.rawFile && formData.append("image", params.data.image.rawFile);
  params.data.is_staff && formData.append("is_staff", params.data.is_staff);

  return formData;
};



const createCategoryFormData = (
  params: CreateParams<CategoryParams> | UpdateParams<CategoryParams>
) => {
  const formData = new FormData();
  params.data.parent && formData.append("parent", params.data.parent);
  params.data.name && formData.append("name", params.data.name);
  params.data.image?.rawFile && formData.append("image", params.data.image.rawFile);
  
  return formData;
};



export const dataProvider: DataProvider = {
  ...baseDataProvider,
  create: (resource, params) => {
    if (resource === "user") {
      const formData = createUserFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
          headers: new Headers({'ID': id,"PASSWORD": password})
        })
        .then(({ json }) => ({ data: json }));
    }
    else if (resource === "category") {
      const formData = createCategoryFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
          headers: new Headers({'ID': id,"PASSWORD": password})
        })
        .then(({ json }) => ({ data: json }));
    }

    return baseDataProvider.create(resource, params);
  },
  update: (resource, params) => {
    if (resource === "user") {
      const formData = createUserFormData(params);
      formData.append("id", params.id);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
          headers: new Headers({'ID': id,"PASSWORD": password})
        })
        .then(({ json }) => ({ data: json }));
    }
    else if (resource === "category") {
      const formData = createCategoryFormData(params);
      formData.append("id", params.id);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
          headers: new Headers({'ID': id,"PASSWORD": password})
        })
        .then(({ json }) => ({ data: json }));
    }

    return baseDataProvider.update(resource, params);
  },
};

