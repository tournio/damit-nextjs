import styles from './dallas.module.scss';

const Dallas = ({ full }) => {
  // full determines whether we show a summary or the whole shebang
  // ... the whole shebang is intended to be on its own page, while
  // the summary is intended for the Dallas section of the main page

  return (
    <section className={styles.Dallas} id={'dallas'}>
      <h3 className={`section-heading`}>
        Dallas, Texas
      </h3>
      <p>
        Porchetta ground round sirloin chuck, buffalo short ribs chicken beef ribs turkey tail. Bresaola doner venison shoulder strip steak tail pork belly. Corned beef rump andouille, chicken kielbasa spare ribs jowl sirloin flank salami leberkas ribeye. Pancetta salami cupim tenderloin.
      </p>
      {!full && (
        <p>
          <a href={'/dallas'}
             class={`btn btn-primary icon-link`}
             role={`button`}>
            More
            <i className={'bi-arrow-right'} aria-hidden={true}/>
          </a>
        </p>
      )}
      {full && (
        <>
          <p>
            Chicken chislic beef, tenderloin beef ribs fatback shank meatloaf leberkas andouille hamburger. Sirloin short loin andouille, kielbasa ball tip capicola buffalo jerky landjaeger tri-tip biltong.
          </p>
          <p>
            Flank ball tip shoulder kielbasa hamburger, chislic prosciutto tenderloin shankle capicola pancetta. Kielbasa drumstick jowl t-bone, meatball burgdoggen turducken fatback pork belly.
          </p>
          <p>
            Ball tip boudin ribeye porchetta, pork belly sausage strip steak fatback cow beef ribs rump pork chop ground round. Pork boudin chuck ham doner. Sausage ribeye tail flank doner leberkas strip steak buffalo.
          </p>
        </>
      )}
    </section>
  )
}

export default Dallas;