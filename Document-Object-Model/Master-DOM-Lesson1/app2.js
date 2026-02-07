// 1 what is dom


        // is an application programming inerface for manipulating html documents
        // the dom is nag poprovie ng mga functions like add remove and modify  parts of the document effectively
        // the DOM is represent as a tree of the nodes



//2  what is nodes and type of nodes

    // 1 Document type node
    // 2 Element type node
    // 3 Text node



// 3 selecting Element using DOM

        // 1 getElementById() method = method returns an element object that reprsents an HTML element
                // <h1 id="Main-heading"> Favorite Movie Franchise
                // </h1>
        
        //  getElementsByname() Metod - input value name

        // 2 getElementsByTagname() Method = accepts a tag name and returns a live HTML Collection of elements
                //     <ul>
                //         /*li ung tagname na kukunin natin or ung         ung li Collection */
                //         <li>The Matrix</li>
                //         <li>The Matrix</li>
                //         <li>The Matrix</li>
                //         <li>The Matrix</li>
                //         <li>The Matrix</li>
                //   </ul>

        // 3 getelementsbyclassname() method 
            //      <li class="classitems">The Matrix</li>
            //      <li class="classitems">Star Wars</li>
            //      <li class="classitems">Harry Potter</li>
            //      <li class="classitems">Lord of the rings</li>
            //      <li class="classitems">Marvel</li>

              //     <li class="classitems">The Matrix</li>

             //      <div id ="main-id">

            //      <li class="classitems">Star Wars</li>
            //      <li class="classitems">Harry Potter</li>
            //      <li class="classitems">Lord of the rings</li>
            //      <li class="classitems">Marvel</li>
            //    </div>

                       let cont = document.getElementById('main-id');
                      let message = cont.getElementsByClassName('classitems');
                       // output neto ay collection ng li collection sa node ng div na may tag na main id
            //4  querySelector() and querySelectorAll()

                // for firstelement
            let message1 = document.querySelector('.message');

            // for all element
            let message2 = document.querySelectorAll('.message');

            // pede rin by Id
            let cont2 = document.getElementById('message');
            let message3 = cont.getElementsByClassName('class-message')
              let message4 = cont.getElementsByClassName('div h1')
              let message5 = cont.getElementsByClassName('div, h1')



// 4 Traversing element
// Parang paglalakad ka sa tree (DOM tree) — may mga parent, children, at siblings ang bawat element. Traversing means paglipat-lipat ka sa mga ito para makuha o ma-access yung mga related elements.

// get parent Element
        let TraversingNode = document.querySelector('.message');
        console.log(TraversingNode.parentNode);

// get child element
    let parentELement = document.querySelector('.div');
    console.log(parentELement.firstChild);
    console.log(parentELement.firstElementChild);
    console.log(parentELement.lastElementChild);
    console.log(parentELement.childNodes);

//select next previous of an element
    console.log(parentELement.previousElementSibling);
    console.log(parentELement.nextElementSibling);



// 5 Manipulating HTML elements

    // A. createElement() method = acceot an html tag and return a new node with the element type
        // example
        let div = document.createElement('div');
        div.innerHTML = "<p> Welcome to the World</p>";
        console.log(div);
    
        // innerText id for visible context only and TextContent isd for all tect visible or not
        //
        //  aftermethod() = to insert one or more nodes after the Element
        menu.after();
        // append method = we can add multiple Element
        parentNode.append(newNode);
        // preprend() method = it will add in the first
        parentNode.prepend(newNode); 
        // insertAdjacentHTML() method = is parnag nag add ka lang ulit pero muchbetter nmn to kesa sa append
        Element.insertAdjacentHTML(positionName, Text); 
        // replaceChild() method = to replace a node of a new child
        parentNode.replaceChild("newchild","oldchild");
        // cloneNodeMethod() method = is to clone an element
        let newnode = container.cloneNode(true); 
        // removeChild() method = to remove a child of a node
        parentNode.removeChild(childNodes);
        // insertbeforemethod() = to insert a new node before an existing node  a child of parent node
        parentNode.replaceChild("newNode","existingNode.firstChildelement");
        // attribute method 
        console.log(input.attributes);
        // getAttribute method = is to get the attribute
        console.log(input.getAttributes);
        // setAttribute method
        input.setAttribute("name","vaue");
        //has attribute method is iidentify nya sa html attribute mo kung meron o wala ; true or false
        input.hasAttribute("name"); 
        //remove attribute = to remove the attribute ung nilagay mo an attribute sa html mo kunware ung class or ung id
        input.removeAttribute("placeholder");

// 6 manipulating element style

        // style prperty 
        // to get the value of the style or the css in your element
        const input = document.getElementById("main-id");
        console.log(input.style.backgroundColor); 
        // if you want to add a style 
        input.style.padding = "10px";
        console.log(input.style.padding); 
        // we can also use a cssText syntax pero inooverride nya ung nasa inline text
        input.style.cssText = "width:10px";
        //pero kung gusto mo nmn na hindi mababgo o maoveride ung isa or maconcat pede mo syang lagyan ng += na syntax
        input.style.cssText += "width:10px";
        // css text also add more css properties at the same time
        input.style.cssText += "width:10px; height:100px";
        // to get the computed style 
        window.getComputedStyle(input)
        




//   7 javascript events

        
        // event handler is a piece of code when the events is ocuur 
        
        // 3 ways to assign event handler
                 // a. HTML event handler attributes
                 
                //  for CLick event  = onclick event handler 
                //     <button type="button" onclick="console.log('click button!')">Click here</button>
                         
                        // mousemoveevent = event fires repeatedly when you move the mouse cursor around the element
                        // mousedownevent = when you press the mouse in the Element  this event will fire
                        // mouseupevent = when you release the mouse button in the Element then this event wil fire       
                        // mouseoverevent = when the cursor move from the outside to inside the boundaries of the element 
                        // mouseoutevent = when the cursor is over an Element and then moves to another Element
                        // key down event = event fires when you press a key on the keyboard & fires repeatedly while youre holding down the key
                        // key up event = when you release a key on the keyboard.
                        // keypress = when you press a character on a keyborad like a b c ...it fires repeatdly while you hold down the key on the keyboard
                        // scroll event = when you scroll a document or an elemnet, the scroll events fire
           
                        // b. adding event handler name in javascript

                // c third way to add event handler in javascript  
                        // in js we have two methods addmethodListner and removeMethodListener
                        // addEventlistener will register the event handler
                                // accept three arguments first one is the event, then function and the third one is optional because in default the third argument is false
                                // addEventListener(Event, function, useCapture) = 3 args the last one is depende
                                // addEventListener(Event, function)

                                        // syntax internal function
                                        let buttoneventhandler = document.getElementById('button');
                                        buttoneventhandler.addEventListener('click', function(){
                                        console.log('heloo world')
                                        })

                                        // syntax external function
                                         function displaymsg() {
                                          console.log('hahahh');
                                        }
                                        let btn = document.getElementById('button');
                                        btn.addEventListener('click', displaymsg);
                                        // if gusto mo isang click lang
                                        btn.addEventListener('click', displaymsg, { once: true });


                        // removeEventListener will remove the event handler
                                         function displaymsg() {
                                        console.log('hahahh');
                                        }
                                        let btn1 = document.getElementById('button');
                                        btn.addEventListener('click', displaymsg);
                                        btn.removeEventListener('click', displaymsg)



















