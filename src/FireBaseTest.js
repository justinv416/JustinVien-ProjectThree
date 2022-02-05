import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database'
import firebase from './Firebase'

const FireBaseTest = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        //create a variable that holds our database details
        const database = getDatabase(firebase);

        //We then create a variable that makes reference to our database
        const dbRef = ref(database);

        //add an event listener to that variable that will fire from the databse and call that data 'response'.
        onValue(dbRef, (response) => {
            console.log(items);
            //creating a variable to store the new state we want to introduce to out app
            const newState = [];

            //store the response from our query to firebase inside of a variable called data.
            // .val() is a firebase method that gets us the information we want
            const data = response.val();
            // data is an object, so a for in loop to access each item name

            for (let key in data) {
                newState.push(data[key])
            }

            setItems(newState);
        })
    }, []);

    return (
        <div>
            <ul>
                {items.map((item) => {
                    return (
                        <li>
                            <p>{item}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FireBaseTest;