//index.js
``` Javascript
import { createBrowserROuter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Vista/>,
        errorElement: <h1> Error</h1>,
        childen: [
            {
                path: 'contacts/:contactID',
                elements: <h2>ruta dinamica hija de la home</h2>
            }
        ]
    },
    {
        path: '/',
        element: <Vista/>
    },
    {
        path: '/',
        element: <Vista/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
```

// Archivo vista/navbar
``` Javascript
import {Link} from "react-router-dom";


export default function Menu(){
    return(
        <nav>
            <ul>
                <li>
                <Link to={"/"}>Home</Link>
                </li>
                <li>
                <Link to={"/otra vista"}>vista</Link>
                </li>
            </ul>
        </nav>
    );
}
``` 

// Archivo home
``` Javascript
import {Outlet} from "react-router-dom";


export default function Home(){
    return(
        <>
            <Menu/>
            <h1>Home</h1>

            <div>
                <div>
                    {items.map(item => {
                        <div>
                            <Link to={`/contacts/${item.id}`}>{item.name}</Link >
                        </div>
                    })}
                </div>
                <Outlet /> // Esta linea nos muesta la ruta hija
            </div>
        </>
    );
}
``` 

// Contact.jsx
```Javascript
import {useMemo} from 'react'
import {useParams} from 'react-router-dom'

export default function Contact() {
      const params = useParams();
       

    const contact = useMemo(()=>getContact(params.contactid), [params.contactid])

    return (
        <>
        <h1>{params.contactid} : {contact.name}</h1>
        </>
    )
}
```