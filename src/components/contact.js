import styles from './contact.module.scss';

const Contact = ({ id }) => {

  return (
    <section className={styles.Contact} id={'contact'}>
      <h3 className={`section-heading`}>
        Contacts
      </h3>
      <div className={`row justify-content-center`}>
        <div className={`col-6 col-md-4 col-lg-3`}>
          <div className={`card ${styles.Card}`}>
            <div className={`card-body ${styles.Face}`}>
              <i className={`bi-person-workspace ${styles.Placeholder}`}/>
            </div>
            <div className={`card-footer`}>
              <p className={`${styles.Name}`}>
                Steven Hull
              </p>
              <p className={styles.Role}>
                Director
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-md-4 col-lg-3`}>
          <div className={`card ${styles.Card}`}>
            <div className={`card-body ${styles.Face}`}>
              <i className={`bi-person-workspace ${styles.Placeholder}`}/>
            </div>
            <div className={`card-footer`}>
              <p className={`${styles.Name}`}>
                Scott Stebleton
              </p>
              <p className={styles.Role}>
                Technologist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
