import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Search({expanded, setExpanded, content}) {
    let navigate = useNavigate();
    function loadSearchResults(searchPages) {
        navigate('/searchResults', {state:{search:searchPages}});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let searchTerm = event.target[0].value;
        let foundPages = [];
        content.filter((page) => {
            let paragraph;
            let found = page.content.find((div) => {
                let foundDiv = div.paragraphs.find((para) => {
                    if(!para.type) {
                        if(para.includes(searchTerm)) {
                            paragraph = para;
                            return true;
                        }
                    } else{
                        if(para.text.includes(searchTerm)) {
                            paragraph = para;
                            return true
                        }
                    }
                    return false;
                });
                return foundDiv;
            })
            if(found) {
                foundPages.push({page:page.page, divID:found.divID, query:searchTerm, url:page.url, para:paragraph});
            }
        });
        setExpanded(false);
        loadSearchResults(foundPages);
    }
    return(
        (expanded &&
        <motion.form onSubmit={handleSubmit}>
            <motion.input type="text" placeholder="Search" autoComplete="off" name="searchfield" className='search-input'/>
        </motion.form>)
    );
}