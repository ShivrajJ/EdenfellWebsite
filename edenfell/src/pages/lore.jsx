import React from 'react';
import { motion } from 'framer-motion';
import {ReactComponent as Img1} from '../images/placeholder.svg';

export default function Lore() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="content-div">
                <Img1 className="content-img1"/>
                <motion.div>
                    <motion.h2>History</motion.h2>
                    <motion.p>A new world usually rises when the old one falls. It is not often that the old world eats the new world to birth the monstrous amalgamation of both. Edenfell used to be very different; a world in which magic was ordinary, a multitude of races coexisted in negotiated peace and harmony, battle was a distant memory and youthful death was an elusive concept, the extraordinary was both gentle and magnificent, nature cared for the Anthros and in return, the Anthros cared for nature.</motion.p>
                    <motion.p>This paradise which seems like a tall tale was lost when a party of kings and mages alike stepped into the unknown on a mission to investigate a world beyond a rift that had opened between this realm and another; Limbo. The ancient Limbo, a realm far older than Edenfell, in which the spiteful deity Nimiane had been confined, imprisoned by the Old Gods, her siblings, was a caustic place hungry for life and for mana, the fuel of magic. Ultimately unsuccessful in their quest to banish Nimiane and close the rift between the two worlds, Limbo quickly consumed these storied explorers and in time, it consumed Edenfell too, spilling out its toxicity in waxing tides that soon engulfed everything as far as the eye can see, forever changing the world as we all know it. This is what we have come to call the Cataclysm.</motion.p>
                    <motion.p>Now, Edenfell is a land of scarce magic, perilous forests, vengeful beasts, floating islands, and the harsh reality of man’s failure. Conflict is common, betrayal is the currency of the living, and death is as certain as the sunrise.</motion.p>
                    <motion.p>The burning question I ask you is this: what will you make of this new world? What will you do? Do not just survive, Edener…live!</motion.p>
                </motion.div>
            </motion.div>

            <motion.div className="content-div">
                <motion.div>
                    <motion.h2>Lore</motion.h2>
                    <motion.p>When the Cataclysm ended, Fëanor alone emerged as the sole survivor among those who had gone to take on Nimiane. He stepped foot on Ground Zero, welcomed by a world that he no longer recognized and could not save—a world enveloped by the same malevolent force of hunger and destruction that pervaded Limbo and overrun by monsters the new world would christen Voidbringers.</motion.p>
                    <motion.p>Nimiane did not enter Edenfell herself, but it was no man’s doing because none could have stopped her. Her rancorous spirit, however, fed on the land and the soil and the crops and the air and the water, and soon, it was a world reshaped in Limbo’s image. Edenfell’s glorious civilizations fell; Summerwind, Alfenheim, Vanaheim, Ironhold, and Viridi, the 5 Old Nations of myth crumbled in the wake of the Voidbringers; and the Anthros themselves were forever changed; lifespans were drastically reduced, magic was almost entirely stolen from man, and entire races were wiped off the face of Edenfell for good.</motion.p>
                    <motion.p>It has been two hundred years since the Cataclysm now and the Anthros are struggling to rebuild. Most plants, like the beasts, turned noxious and posed a threat to the people so that only a few could be depended on for food in a world where the soil could no longer yield new life. The Anthros returned to their hunter-gatherer roots, surviving as foragers and livestock herders, and building settlements where the climate was just conducive enough to ensure that they could somewhat thrive. Soon cities began to spring up where subsistent wildlife was most bountiful (and Voidbringers were not) and the modern world as we know it took shape:</motion.p>
                    <motion.p>Obscuron was left desolate, the desecrated and ravenous location of Ground Zero. </motion.p>
                </motion.div>
                <Img1 className="content-img2"/>
            </motion.div>
            <motion.div className="content-div">
                <Img1 className="content-img1"/>
                <motion.div>
                    <motion.p>Durlan in the south became Fëanor’s foothold, kept functional by the plethora of taxed villages and settlements around it. It is a stronghold where he intends to build an army of mages (the Higher Sentient) charged with growing their numbers (forcefully), erecting the most magnificent edifice of the new world—a city that is a worthy ode to the Old Nations—and reclaiming Edenfell for man, magic, and the Old Gods.</motion.p>
                    <motion.p>Caliburn, Vatha, and Edom formed the Trident cities in the north that shelter the world’s diverse population from the prowling Voidbringers and form the most formidable resistance to the Higher Sentient’s Marauders, The United Army (UnA or colloquially the Yuna). The Trident is a place most survivors dream of reaching but the distance between the north and the south is vast and filled with dangers that do not just make it a near-miraculous journey and a place almost like a legend to wistful settlers around the continent but also keeps it outside of the reach of Durlan’s long and authoritative (though well-intentioned) shadow. But the Trident is not perfect, and as it grows it becomes rife with political intrigue, racial tensions, disgruntled commoners and perhaps soon, there may be a few uprisings in the plot.</motion.p>
                    <motion.p>They say there are two sides to every story, but in Edenfell there is no shortage of sides to choose from. Align yourself with a cause and fight its battle to completion or choose your own cause, play one side, both sides, or none. Always remember, you make your own way, and whatever that is, I am certain your legend will shape this new world.</motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}