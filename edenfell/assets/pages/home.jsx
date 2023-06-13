import {React, useState} from 'react';
import {motion} from 'framer-motion';
import Server from './server';
import World from './world';
import Lore from './lore';
import Locations from './locations';
import Organizations from './organizations';
import Nations from './nations';
import Characters from './characters';
import OCs from './ocs';
import NPCs from './npcs';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home({className, content}) {
    let pagesArray = [World, Lore, Locations, Organizations, Nations, Characters, OCs, NPCs, Server];
    const[loadedPages, setLoadedPages] = useState(pagesArray.slice(0,2));

    function loadNextPage() {
        setLoadedPages(loadedPages.concat(pagesArray[loadedPages.length]));
    }
    

    return (
        <InfiniteScroll
          dataLength={loadedPages.length}
          next={loadNextPage}
          hasMore={loadedPages.length < pagesArray.length} // Replace with a condition based on your data source
        >
          
          <motion.div  className={className || "first-content"}>
            <motion.div key="welcomeToEdenfell" className={'content'} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} id="home">
                <motion.h1>WELCOME TO EDENFELL</motion.h1>
                {loadedPages.map((Page) => {
                    return(
                        <Page key={Page.name} className={"content"} content={content}/>
                        )
                    }
                    )
                }
            </motion.div>
          </motion.div>
        </InfiniteScroll>
    );
};