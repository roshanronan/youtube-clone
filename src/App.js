
import Head from "./components/Head";
import Body from './components/Body';
import { Provider } from "react-redux";
import './App.css';
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { Children } from "react";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'watch',
        element:<WatchPage/>
      }

    ]
  }

])

function App() {
  return (
    <Provider store={store}>
    <div>
   <Head/>
   <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
