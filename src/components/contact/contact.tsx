/* 
        CONTACT MAIN
*/
///<reference  path="../../../src/typings/main.d.ts"/>
import React from "react";
import ReactDOM from "react-dom";
import { Contact_mainBox } from "./x contact.box";
import { Contacts } from "./contacts";

let contactObjects = <div>
    <Contact_mainBox>
        Here is a text string!
    </Contact_mainBox>
    <Contacts value="3" name="contact"/>
</div>;

ReactDOM.render(contactObjects, document.getElementById('root'));