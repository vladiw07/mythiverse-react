import React from 'react'
import TextSectionTemplate from '../TextSectionTemplate'
import ImagePlusTextComponent from '../ImagePlusTextComponent'

import prometheus1 from '../prometheusImages/prometheus1.avif'
import prometheus2 from '../prometheusImages/prometheus2.webp'
import ContentComponent from '../../../ContentComponent'

function PrometheusTemplate() {
  return (
      <div className='wrapper'>
        <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Epithets' }, 
      { title: 'Other Names' }, 
      { title: 'Attributes' }, 
      { title: 'Family' }, 
    
     
      ]} />
          <div className='godTemplate'>
            <h2>Greek Titan</h2>
            <h1>Prometheus</h1>
            <ImagePlusTextComponent image={prometheus2} />
            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Prometheus, son of Iapetus, was a crafty Titan who acted as a benefactor of the first humans, giving them fire in defiance of the mighty Zeus. For this crime, he was fastened to a rock, where an eagle ate his liver every day for all eternity. Prometheus was also the father of the mortal Deucalion, a hero who helped to repopulate the world after a great flood nearly destroyed mankind.</p> <p>For the Greeks and many who followed, Prometheus was revered as a champion of humanity, as well as a fount of wisdom, reason, and knowledge. In Athens, the center of his ritual observance, he was credited as the bringer of not only fire but also metallurgy as well. Alongside Athena and Hephaestus, Prometheus was celebrated by the city in connection with technology, craft, and the civilized arts.</p></>} />
            <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The name “Prometheus” (Προμηθεύς, translit. Promētheús) stemmed from the Greek prefix προ- (pro-), meaning “before,” and the verbal root μηθ-/μαθ- (mēth-/math-), meaning “to think” (itself derived from the Indo-Germanic root *mendh-/*men-, also meaning “to think”).[1] Prometheus is thus often translated as “forethinking”—one who knows or thinks about something before others. This name could be indicative of Prometheus’ role in bringing fire and metallurgy to humanity. It also distinguishes Prometheus from his brother Epimetheus, whose name is conversely translated as “afterthinking.”</p> <p>Another possible etymology, derived from Indo-European linguistics, argues that the name actually originated from the Sanskrit root math-, meaning “to steal.”[2] In this case, “Prometheus” thus refers to his theft of fire rather than to his intellectual capacities.</p></>} />
            <TextSectionTemplate header={<h3 id='content_2'>Epithets</h3>} text={<><p>Prometheus was given a handful of epithets in Greek literature, including πυρφόρος (pyrphóros, “fire-bearer”) and αἰπυμήτης (aipymḗtēs, “lofty-minded”).</p></>} />
            <TextSectionTemplate header={<h3 id='content_3'>Other Names</h3>} text={<><p>According to Hesychius of Alexandria, a scholar of the fifth or sixth century CE, Prometheus was also called Ithas or Ithax (though in some traditions Ithas/Ithax was a distinct figure).</p></>} />
            <TextSectionTemplate header={<h3 id='content_4'>Attributes</h3>} text={<><p>Prometheus was known above all for his shrewd intelligence and cunning. During the Titanomachy, which pitted the Titans against the Olympian deities, Prometheus betrayed his brethren and sided with Zeus. However, this prudent choice of allegiance did not mean that Prometheus’ actions were always well advised. According to Hesiod, Prometheus was guilty of hybris (“insolence” or “hubris”) in trying to outwit Zeus.</p> <p>This ended poorly for the Titan, who is most commonly remembered for his gruesome punishment: Prometheus was chained to a cliff and had his liver torn out each day by an eagle. Because Prometheus was immortal, his liver would grow back, only to be torn out anew the next day.</p></>} />
            <ImagePlusTextComponent image={prometheus1} text='Prometheus Bound by Peter Paul Rubens (1618). Philadelphia Museum of Art.' />
            <TextSectionTemplate text={<><p>In ancient art, Prometheus was often depicted chained to his rock or being released from the rock by Heracles. Scenes showing him stealing fire or creating human beings are less common and only began to appear in later historical periods.[4]</p></>} />
            <TextSectionTemplate header={<h3 id='content_5'>Family</h3>} text={<><p>In the best-known traditions, Prometheus was the son of the Titan Iapetus and the Oceanid Clymene.[5] There were, however, other versions in which Prometheus’ mother was Asia (also an Oceanid)[6] or Themis.[7] His brothers included Epimetheus, Monoetius, and Atlas, but also, according to some traditions, Anchiale,[8] Buphagus,[9] and Dryas.</p> </>} />
            

          </div>
      </div>
  )
}

export default PrometheusTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p></>} /> */