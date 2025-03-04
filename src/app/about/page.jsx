import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h1>A propos de Hook&apos;CŒUR </h1>
      <p>
        Bienvenue sur Hook&apos;CŒUR, le blog d&apos;une débutante en crochet
        qui a décidé de se lancer sans savoir vraiment où elle va (mais avec
        enthousiasme).Tu veux crocheter des créations sympas sans te prendre la
        tête ? Alors tu es exactement là où il faut être ! 😊
      </p>
      <h2>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"
            fill="#ff0045"
          />
        </svg>
        Je me présente, je m&apos;appelle Fanny
      </h2>
      <p>
        {" "}
        J'ai commencé le crochet il y a quelques mois comme un moyen de me
        détendre et d'éviter d'avoir les nerfs en pelotes (vous avez la blague
        ?)
      </p>
      <h2>
        {" "}
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"
            fill="#ff0045"
          />
        </svg>
        L&apos;histoire du projet
      </h2>
      <p>
        Hook&apos;CŒUR est un projet fictif que j&apos;ai créé pour tester mes
        compétences en développement web. Pour le moment, le site se concentre
        sur le crochet, mais l&apos;idée est de l&apos;élargir un jour à toutes
        les activités créatives. Que ce soit la couture, la peinture, ou toute
        autre forme de création, Hook&apos;CŒUR pourrait bien devenir le
        carrefour virtuel de toutes mes inspirations. Alors, que vous soyez ici
        pour découvrir des créations crochet ou pour suivre mon parcours,
        bienvenue dans l&apos;univers de Hook&apos;CŒUR !
      </p>
      <h2>
        {" "}
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"
            fill="#ff0045"
          />
        </svg>
        Les objectifs du projet
      </h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.399 12.149c-.129-.246-.397-.756-.397-1.631 0-2.009 1.629-3.479 3.242-3.518h13.513c1.803.091 3.243 1.646 3.243 3.519 0 .592-.145 1.148-.4 1.636 1.389.448 2.4 1.794 2.4 3.364 0 .962-.383 1.831-1 2.46v6.021h-22v-6.022c-.429-.438-1-1.37-1-2.46 0-1.655 1.107-2.944 2.399-3.369zm18.601 6.824l-.405.025c-.775 0-1.541-.27-2.154-.79-.576.488-1.333.789-2.155.789-.812 0-1.566-.295-2.142-.779-.581.487-1.341.78-2.136.78-.807 0-1.575-.292-2.149-.78-.586.491-1.346.78-2.137.78-.775 0-1.526-.26-2.16-.79-.561.479-1.328.79-2.154.79l-.408-.025v3.027h18v-3.027zm-17.708-4.973c-.627.049-1.243.635-1.288 1.421-.051.887.632 1.585 1.454 1.576 1.176-.014 1.915-.86 2.117-1.997.217.88.986 1.975 2.145 1.996 1.156.021 1.99-.959 2.161-1.958l.008-.038c.199 1.04.99 1.996 2.109 1.996 1.155 0 1.917-.872 2.172-1.996.248 1.138 1.035 1.994 2.117 1.997 1.108.003 1.955-.928 2.203-1.997.188.828.804 1.985 2.051 1.998.759.008 1.46-.65 1.46-1.483 0-.837-.649-1.481-1.318-1.517l-17.391.002zm10.953-2c1.108-.009 1.997-.931 2.245-2 .188.828.804 1.985 2.051 1.998.759.008 1.46-.65 1.46-1.483 0-.837-.649-1.481-1.318-1.517l-13.391.002c-.627.049-1.243.635-1.288 1.421-.051.887.632 1.585 1.454 1.576 1.176-.014 1.915-.86 2.117-1.997.217.88 1.002 1.991 2.161 2h.023c1.199-.008 2.191-1.326 2.241-2 .052.659.983 1.992 2.219 2h.026zm-2.245-9.146c-.454-1.947-2.479-.955-1.531.577.765 1.237 1.095 1.951 1.126 3.103-1.378-1.716-3.597-2.838-3.595-4.519.002-1.287.941-2.014 2-2.014.705 0 1.522.256 2 .882.485-.6 1.329-.887 2-.882 1.06.008 1.998.669 2 2.014.002 1.681-2.146 2.784-3.595 4.519.031-1.152.361-1.866 1.126-3.103.948-1.532-1.089-2.508-1.531-.577z"
              fill="#ff0045"
            />
          </svg>
          <h3>Partage de passion et d&apos; inspiration</h3>
          <p>
            L&apos; objectif principal de Hook&apos;CŒUR est de partager ma
            passion pour le crochet et de vous inspirer à créer des pièces
            uniques.
          </p>
        </li>
        <li className={styles.item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8.975 7.617l-2.607 1.485c-.697-1.53-1.928-2.762-3.455-3.462l1.484-2.608c1.988.979 3.601 2.595 4.578 4.585zm-8.975 9.383c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm-4.397-13.968l1.485 2.608c-1.527.701-2.757 1.933-3.455 3.463l-2.608-1.486c.976-1.99 2.59-3.606 4.578-4.585zm-4.578 13.351l2.608-1.485c.697 1.53 1.927 2.762 3.455 3.462l-1.485 2.608c-1.988-.979-3.602-2.595-4.578-4.585zm13.371 4.585l-1.484-2.608c1.527-.701 2.758-1.933 3.455-3.462l2.607 1.485c-.976 1.99-2.589 3.606-4.578 4.585z"
              fill="#ff0045"
            />
          </svg>
          <h3>Affiner mes compétences en développement</h3>
          <p>
            Hook&apos;CŒUR est aussi un projet d’expérimentation pour tester mes
            compétences en développement web. Chaque fonctionnalité, chaque
            design est une opportunité d&apos;apprendre et de progresser dans le
            monde du développement. Vous pouvez donc suivre l’évolution du site
            tout en explorant des projets créatifs !
          </p>
        </li>
        <li className={styles.item}>
          <svg
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M1.981 8.444h20.038c.398 0 .747.264.856.648l1.105 3.904.02.139c0 .209-.127.402-.33.48l-.001.001c-.24.092-.511-.005-.635-.231l-1.144-2.071-.328 7.967c-.017.403-.347.719-.749.719h-.001c-.393 0-.716-.306-.746-.698-.068-.865-.249-2.933-.304-3.752-.022-.34-.271-.54-.541-.54-.242 0-.514.2-.537.54-.055.819-.236 2.887-.304 3.752-.03.392-.352.698-.746.698h-.001c-.402 0-.732-.316-.749-.719-.086-2.08-.435-8.736-.435-8.736h-1.669s-.349 6.656-.435 8.736c-.017.402-.347.719-.749.719h-.001c-.394 0-.716-.306-.746-.698-.068-.865-.249-2.933-.304-3.752-.023-.34-.295-.54-.537-.54h-.004c-.242 0-.515.2-.537.54-.055.819-.236 2.887-.304 3.752-.03.392-.353.698-.746.698h-.001c-.402 0-.732-.316-.749-.719-.086-2.08-.435-8.736-.435-8.736h-1.681s-.349 6.656-.435 8.736c-.017.403-.347.719-.749.719h-.001c-.394 0-.716-.306-.746-.698-.068-.865-.249-2.933-.304-3.752-.023-.34-.295-.54-.537-.54-.27 0-.519.2-.541.54-.055.819-.236 2.887-.304 3.752-.03.392-.353.698-.746.698h-.001c-.402 0-.732-.316-.749-.719l-.328-7.967-1.144 2.071c-.124.226-.395.323-.635.231l-.001-.001c-.203-.078-.33-.271-.33-.48l.02-.139 1.105-3.904c.109-.384.458-.648.856-.648zm3.019-4.444c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm14 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-6.994 0c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"
              fill="#ff0045"
            />
          </svg>
          <h3>Créer une communauté autour de la créativité</h3>
          <p>
            À terme, je souhaite que Hook&apos;CŒUR devienne un lieu d’échange
            où d’autres créateurs peuvent partager leurs projets et astuces. Le
            crochet est seulement un point de départ, mais mon ambition est de
            bâtir une véritable communauté autour de toutes les formes
            d’activités créatives, pour que l’on puisse s’entraider, échanger et
            s’amuser ensemble.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default About;
