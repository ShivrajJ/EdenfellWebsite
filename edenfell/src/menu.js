import {AnimatePresence, motion} from 'framer-motion';

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
        url:"/location",
      },
      {
        title:"Organizations",
        url:"/organization",
      },
      {
        title:"Nations",
        url:"/nation",
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
    <AnimatePresence mode='sync'>
      <motion.div layout key={expanded} className="menu" initial={{opacity: 0, width:'0vw'}} animate={{opacity: expanded?1:0, width:'84vw'}} exit={{opacity: 0, width:'0vw'}}>
        <motion.div layout className="search-bar">
          
        </motion.div>
        <motion.div className="menu-items">
          {menuItems.map((item, index) => {
            return(expanded &&
              <div className={item.title + "-items"}>
                <ul>
                  {item.submenu.map((subitem, subindex) => {
                    return(
                      <li key={index*10+subindex}><a href={subitem.url}>{subitem.title}</a></li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}