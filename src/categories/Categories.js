import { useState } from 'react';
import './Categories.css';

const lists = [
    {
      num: 1,
      categories: [
        "A Boy's Name",
        "US Cities",
        "Things That Are Cold",
        "School Supplies",
        "Pro Sports Teams",
        "Insects",
        "Breakfast Foods",
        "Furniture",
        "TV Shows",
        "Things Found In The Ocean",
        "Presidents",
        "Product Names"
      ]
    },
    {
      num: 2,
      categories: [
        "Famous Females",
        "Medicine/Drugs",
        "Things Made Of Metal",
        "Hobbies",
        "People In Uniform",
        "Things You Plug In",
        "Animals",
        "Languages",
        "Names Used In The Bible",
        "Junk Food",
        "Things That Grow",
        "Companies"
      ]
    },
    {
      num: 3,
      categories: [
        "Articles Of Clothing",
        "Desserts",
        "Car Parts",
        "Things Found On A Map",
        "Athletes",
        "4-Letter Words",
        "Items In A Refrigerator",
        "Farm Animals",
        "Street Names",
        "Things At The Beach",
        "Colors",
        "Tools"
      ]
    },
    {
      num: 4,
      categories: [
        "Heros",
        "Gifts/Presents",
        "Terms Of Endearment",
        "Kinds Of Dances",
        "Things That Are Black",
        "Vehicles",
        "Tropical Locations",
        "College Majors",
        "Dairy Products",
        "Things In A Souvenir Shop",
        "Items In Your Purse/Wallet",
        "World Records"
      ]
    }
  ];

// Destructure props added in App.js inside Categories component [{hide, setHide}]:
const Categories = ({ hide, setHide }) => {
    // To set state for which list index item using 
    const [list, setList] = useState(0);

    // Setting function to move to nextList upon click of "NEXT LIST" item, adding +1 to list upon each click. However, will get an error at the end of the last list. Set up 'if' statement to reset to 0 when reach last lists item of the array.
    const nextList = () => {
      // Checking to see if last list item in "lists" array is being displayed :
        // If list is less than lists.length - 1 (length of lists is 4, [index 0, 1, 2, 3] so length - 1 = 3. 3 is final index item in 'lists' array), update 'setList' state to add +1 to 'list' state. Else (list is not less than lists.length - 1), update 'setList' state to 0. 
        if(list < lists.length - 1) {
            setList(list + 1);
        } 
        else {
        // Else statement used to setList back to 0, which when lists[list] is called, the item at index of 0 will be displayed.
            setList(0);
        }
        // Hides text for the Categories, after a new list is displayed:
        // to hide 'nextList' (all other lists EXCEPT the one the timer was started on) while timer is running. Without this outside the if statment, when timer is running, all lists are visible. Changing the value outside of the if statement to setHide(true) will hide all lists that the timer wasn't started on. 
        setHide(true);
    }

    return(
        <div className="Categories">
            <div className="Categories-Main">
                <div className="Categories-Main-Top">
                    <h1>CATEGORIES</h1>
                    {/* To get list number - {'lists' array of objects[index item in array: 'list' state variable].num prop in object in lists array} */}
                        {/* {lists[list]} will return number value of 'list' state as it corresponds to index within 'lists' array.  */}
                        {/* .num will give the 'num' property of that item at that index within the 'lists' array */}
                    <h1>List {lists[list].num}</h1>
                </div>
                <ol className="Categories-Main-Display">
                  {/* Using the map() method to create new array of list items using the categories for the current list. The current list is determined by the current value for the 'list' state value */}
                    {/*  map() method: will run a function for every item in array  */}
                    {/* Will take each item in categories array and will add it to a new array - creating a new <li> item - that is array we will use to create list items */}
                    {/* Since "RETURNING" something from MAP method in anony arrow function, will need to use (PARENTHESES) instead of {CURLY} brackets. */}
                    {lists[list].categories.map(item => (
                        // added className of "hide" with ternary: className={is 'hide' state true ? if so, then "hide" class, else if : 'hide' state is false, then do nothing}
                        // Using the value for hide state/props to determine whether ".hide" class will be applied to the list
                        <li className={hide ? "hide" : null}>{item}</li>
                    ))}
                </ol>
            </div>
            <div onClick={nextList} className="Categories-Secondary">
                <h1 className="Categories-Secondary-H1">NEXT LIST</h1>
            </div>
        </div>
    );
}

export default Categories;