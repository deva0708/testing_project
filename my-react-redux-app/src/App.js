// import React from 'react';
// import { Provider } from 'react-redux';
// import BookContainer from './Redux/BookContainer';
// import store from './Redux/BookStore';
 
// function App() {
//   return (
//     <div className="App">
//       <Provider store={store}>
//         <BookContainer />
//       </Provider>
//     </div>
//   );
// }
 
// export default App;

import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux/store';
import Main from './Redux/main';
import Header from './Redux/header'
import Footer from './Redux/footer';
// import FormComponent from './Form/FormComponent';
// import FormExample from './Form/FromExample';
 
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <BookContainer /> */}
        {/* <TodoInput />
        <TodoList /> */}
        <Header />
        <Main />
        <Footer /> 
      </Provider>
      {/* <FormComponent /> */}
      {/* <FormExample /> */}
    </div>
  );
}