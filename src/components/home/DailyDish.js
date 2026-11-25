import Image from "next/image";
import styles from "./DailyDish.module.css";

export default function DailyDish({ post }) {
  if (!post) return null;

  const formattedDate = post.timestamp
    ? new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "long",
      }).format(new Date(post.timestamp))
    : null;

  return (
    <section id="plat-du-jour" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>CÉLESTE — LA TABLE</span>
          <span className={styles.headerNote}>LE RENDEZ-VOUS GOURMAND</span>
        </header>

        <div className={styles.intro}>
          <span className={styles.kicker}>AU FIL DES SAISONS</span>

          <h2 className={styles.title}>
            Le plat
            <span>du jour.</span>
          </h2>

          <p className={styles.description}>
            Chaque jour, une nouvelle invitation à découvrir notre cuisine.
          </p>
        </div>

        <article className={styles.dish}>
          <div className={styles.imageWrapper}>
            {post.imageUrl && (
              <Image
                src={post.imageUrl}
                alt="Notre plat du jour"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 60vw"
                className={styles.image}
              />
            )}

            <span className={styles.imageLabel}>LA CRÉATION DU MOMENT</span>
          </div>

          <div className={styles.details}>
            <div className={styles.detailsTop}>
              <span className={styles.kicker}>À DÉCOUVRIR</span>

              {formattedDate && (
                <time className={styles.date}>{formattedDate}</time>
              )}
            </div>

            <p className={styles.caption}>{post.caption}</p>

            {post.permalink && (
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <span>Voir la publication</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </article>

        <footer className={styles.footer}>
          <span>UNE CUISINE VIVANTE, AU QUOTIDIEN.</span>
          <span>CÉLESTE ©</span>
        </footer>
      </div>
    </section>
  );
}
