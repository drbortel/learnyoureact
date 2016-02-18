import React from 'react';

export default class TodoBox extends React.Component {
 // Omitted
}

class TodoList extends React.Component {
   render() {
       return (
           <div className="todoList">
               <table style={{border: "2px solid black"}}>
                   <tbody>
                   <Todo title="Shopping">Milk</Todo>
                   <Todo title="Hair cut">13:00</Todo>
                   </tbody>
               </table>
           </div>
       );
   }
}

    class TodoList extends React.Component {
        render() {
            return (
              <div class="todoList">
                <table style="border:2px solid black;">
                  <tbody>
                    <tr>
                      <td style="border:1px solid black;">Shopping</td>
                      <td style="border:1px solid black;">Milk</td>
                    </tr>
                    <tr>
                      <td style="border:1px solid black;">Hair cut</td>
                      <td style="border:1px solid black;">13:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
        }
    }


    class TodoForm extends React.Component {
        render() {
            return <div className="todoForm">
                I am a TodoForm.
            </div>;
        }
}
