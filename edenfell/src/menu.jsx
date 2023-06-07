import {AnimatePresence, motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import Search from './search';

const menuItems = [
  {
    title:'World',
    url:'/world',
    submenu: [
      {
        title:"Lore",
        url:"/lore",
      },
      {
        title:"Locations",
        url:"/locations",
      },
      {
        title:"Organizations",
        url:"/organizations",
      },
      {
        title:"Nations",
        url:"/nations",
      },
    ],
  },
  {
    title:'Characters',
    url:'/characters',
    submenu:[
      {
        title:"OCs",
        url:"/oc",
      },
      {
        title:"NPCs",
        url:"/npc",
      }
    ],
  },
  {
    title:'Server',
    url:'/server',
    submenu:[
      {
        title:"Discord",
        url: "#"
      },
    ]
  }
]

export default function Menu({expanded}) {
  return(
    <AnimatePresence mode='wait'>
      {expanded && <motion.div layout key={expanded} className="menu" initial={{opacity: 0, width:'0%'}} animate={{opacity: expanded?0.8:0, width:'100%'}} exit={{opacity: 0, width:'0%'}}>
        <motion.div key={"search-bar"} layout className="search-bar">
          <Search expanded={expanded}/>
        </motion.div>
        <motion.div key={"menu-items"} className="menu-items">
          {menuItems.map((item, index) => {
            return(expanded &&
              <div key={index+"-menu-items-list"} className={"menu-items-list"}>
                <h2 key={index+"-title"}>{item.title}</h2>
                <ul key={index+"-ul"}>
                  {item.submenu.map((subitem, subindex) => {
                    return(
                      <li key={index*10+subindex}><Link key={subitem.title} to={item.url+subitem.url}>{subitem.title}</Link></li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  );
}