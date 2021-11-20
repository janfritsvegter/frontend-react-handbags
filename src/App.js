import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Pruduct";
import Product2 from "./components/Product2";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';
import Tile from "./components/Tile";

/*
// STAPPENPLAN OPDRACHT 1
// 1. nav-element maken
// 2. Wikkel de titel en nav in een fragment!
// 3. Schrijf één button element:
  // [ ] Tekst
  // [ ] Type (button)
  // [ ] Hoe krijgen we een event-listener op een react button? Om daarna console.log() iets in de console
  // [ ] Hoe krijgen we een button disabled?
// Stappenplan opdracht 2
// Volg de aanpak uit het demo project (in de README.md)

# Aanpak componenten maken
1. `components`-map maken
2. Bestandje maken met de naam van jouw component (`Testimonial.js`)
3. Functie schrijven (met hoofdletter) die een HTML-element returned
4. Exporteer de functie (component) uit het bestand
5. Importeer de functie (component) in App.js en gebruik hem als: `<Component />`
6. Plak je de orignele HTML in jouw custom component. Welke data heeft jouw component nodig?
7. Bedenk property-namen en geef informatie door aan het component vanaf `App.js`
8. Ontvang het props-object als parameter
9. Vervang de statische tekst door dynamische waardes uit het props object

<button disabled={true} >
 */
function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button title="to the collection" disabled={false} clickBehaviour="one"/>
                <Button title="shop all bags" disabled={false} clickBehaviour="two"/>
                <Button title="pre-orders" disabled={true} clickBehaviour="three"/>
            </nav>
            <main>
                <Product label="Best seller" image={bag1} alt="bag 1" name="The handy bag" price="400"/>
                <Product label="Best seller" image={bag2} alt="bag 2" name="The stylisch bag" price="250"/>
                <Product label="New Collection" image={bag3} alt="bag 3" name="The simple bag" price="300"/>
                <Product label="New Collection" image={bag4} alt="bag 4" name="The trendy bag" price="150"/>

            </main>
            <main>
                <Product2 label="Best seller" imageFile="bag_1.png" alt="bag 1" name="The handy bag" price="400"/>
                <Product2 label="Best seller" imageFile="bag_2.png" alt="bag 2" name="The stylisch bag" price="250"/>
                <Product2 label="New Collection" imageFile="bag_3.png" alt="bag 3" name="The simple bag" price="300"/>
                <Product2 label="New Collection" imageFile="bag_4.png" alt="bag 4" name="The trendy bag" price="150"/>
            </main>
            <footer>
                <Tile title="The Brand">
                    <p>
                        cLorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A ea est facere fuga, obcaecati perspiciatis quam. At itaque modi tempore.
                    </p>
                    <p>
                        cLorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A ea est facere fuga, obcaecati perspiciatis quam. At itaque modi tempore.
                    </p>
                    <p>
                        cLorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A ea est facere fuga, obcaecati perspiciatis quam. At itaque modi tempore.
                    </p>
                </Tile>
                <Tile image={brand} alt="brand" />
                <Tile image={ourStory} alt="our story" />
                <Tile title="Our Story">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores doloribus eligendi error est eum illo
                        ipsam, sapiente tempora voluptas voluptates! Alias
                        consectetur id quas. Ab accusamus accusantium adipisci
                        commodi consectetur doloribus eligendi esse et ex,
                        excepturi illum iste molestiae nobis odit pariatur
                        praesentium quas quidem quisquam, recusandae repellendus
                        reprehenderit sed soluta velit veritatis vitae
                        voluptate voluptatem. Doloremque enim odio quibusdam.
                    </p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



