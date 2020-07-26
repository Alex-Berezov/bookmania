import React from "react";
import classes from './App.module.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import BooksContainer from "./components/Books/BooksContainer";
import FiltersContainer from "./components/Filters/FiltersContainers";

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Header/>
                </header>
                <main>
                    <article>
                        <div className={classes.wrapper}>
                            <aside className={classes.left_sidebar}>
                                <Navbar />
                            </aside>
                            <div className={classes.content_part}>
                                <FiltersContainer />
                                <BooksContainer />
                            </div>
                        </div>
                    </article>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default App;