import Header from "../components/Header";

import styles from "./EN.module.css";

export default function EN() {
  return (
    <div className={styles.en}>
      <div className={styles.header_bar}>
        <Header />
      </div>

      <main className={styles.content_bar}>
        <Hero />
        <Spacer />
        <div className={styles.section_first_container}>
          <Section_About />
          <Section_Info />
        </div>
        <Spacer />
        <Section_Interests />
        <Spacer />
        <Section_Skills />
        <Spacer />
        <Section_Projects />
        <Spacer />
        {/* <Section_Edu />
        <Spacer /> */}
      </main>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Sections

function Hero(params) {
  return (
    <div className={styles.hero_container}>
      <h1 className={styles.hero_heading}>Mohammad Javad Abolhassani Far</h1>
      <span className={styles.hero_title}>A Web Developer</span>
    </div>
  );
}

function Section_About() {
  return (
    <div id="about" className={styles.section_about_container}>
      <Section title="about me">
        <p className={styles.section_about_p}>
          Proficient in front-end web development and also interested in
          back-end development and making coffee based drinks.
        </p>
      </Section>
    </div>
  );
}

function Section_Info() {
  return (
    <div className={styles.section_info_container}>
      <Section title="Personal Information">
        <table>
          <tbody>
            <tr>
              <th className={styles.section_info_th}>Name:</th>
              <td className={styles.section_info_td}>
                Mohammad Javad Abolhassani Far
              </td>
            </tr>
            <hr className={styles.section_info_dvider} />
            <tr>
              <th className={styles.section_info_th}>Age:</th>
              <td className={styles.section_info_td}>29</td>
            </tr>
            <hr className={styles.section_info_dvider} />
            <tr>
              <th className={styles.section_info_th}>Email:</th>
              <td className={styles.section_info_td}>
                <a href="mailto:com.javadabl@gmail.com">
                  com.javadabl@gmail.com
                </a>
              </td>
            </tr>
            <hr className={styles.section_info_dvider} />
            <tr>
              <th className={styles.section_info_th}>PHONE NUMBER:</th>
              <td className={styles.section_info_td}>
                <a href="tel:+989128394413">+989128394413</a>
              </td>
            </tr>
            <hr className={styles.section_info_dvider} />
            <tr>
              <th className={styles.section_info_th}>github:</th>
              <td className={styles.section_info_td}>
                <a href="https://github.com/JavadAbl">
                  https://github.com/JavadAbl
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
    </div>
  );
}

function Section_Interests(params) {
  return (
    <Section id="interests" title="Interests">
      <div className={styles.section_interests_flex}>
        <CardView
          title="Front-end Development"
          icon="\front-end.webp"
          des="My first interest is front-end web development. I am very interested in SPA  in React, as much as playing with html & css."
        ></CardView>
        <CardView
          title="Back-end Development"
          icon="\back-end.webp"
          des="My second interest is back-end web development. I love web apis in any framework, but the way node.js works amazes me. I also interact with the sql family."
        ></CardView>
        <CardView
          title="Barista Profession"
          icon="\barista2.webp"
          des="Coffee is good. But Making coffee is better than coffee itself. Just a double shot of dark roast 80-20 Robusta, does it all."
        ></CardView>
      </div>
    </Section>
  );
}

function Section_Skills() {
  return (
    <Section id="skills" title="skills">
      <div className={styles.section_skills_container}>
        <ProgressBar
          title={"HTML CSS JS"}
          progress={90}
          color="#e0335b"
          textColor="#000000"
        />
        <ProgressBar
          title={"React.js"}
          progress={90}
          color="#45abff"
          textColor="black"
        />
        <ProgressBar
          title={"C#"}
          progress={80}
          color="#ffa41b"
          textColor="black"
        />
        <ProgressBar
          title={".Net Core WebApi"}
          progress={75}
          color="#b44dff"
          textColor="black"
        />
        <ProgressBar
          title={"MS SQL"}
          progress={75}
          color="#dc1947"
          textColor="black"
        />
        <ProgressBar
          title={"SEO"}
          progress={50}
          color="#ecee81"
          textColor="black"
        />
        <ProgressBar
          title={"Node.js"}
          progress={45}
          color="#58ffcf"
          textColor="black"
        />
        <ProgressBar
          title={"Barista Profession"}
          progress={85}
          color="#84693d"
          textColor="black"
        />
      </div>
    </Section>
  );
}

function Section_Projects(params) {
  return (
    <Section id="projects" title="Projects & Works">
      <div className={styles.section_projects_container}>
        <div className={`${styles.section_projects_col}`}>
          <DetailView
            title="CoffeeCollege Site"
            link="https://www.coffeecollege.ir"
            des="A blog about everything of coffee.            "
          />
        </div>
        <div className={`${styles.section_projects_col}`}>
          <DetailView
            title="React-WeatherApp"
            link="https://react-weather.javadabl.vercel.app/"
            des="A web app for weather forecast.            "
          />
        </div>
        <div className={`${styles.section_projects_col}`}>
          <DetailView
            title="DarkGallery Android Application"
            link="https://github.com/JavadAbl/dark-gallery"
            des="A stylish android gallery.            "
          />
        </div>
      </div>
    </Section>
  );
}

function Section_Edu() {
  return (
    <Section id="edu" title="Educations">
      <div className={styles.section_edu_container}>
        <div className={styles.section_edu_col}>
          <DetailView title="کارشناسی ارشد مهندسی کامپیوت" date="" />
        </div>
        <div className={styles.section_edu_col}>
          <DetailView title="dsa" date="" />
        </div>
      </div>
    </Section>
  );
}

///Components
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function Section({ title, id, children }) {
  return (
    <section id={id}>
      <div className={styles.heading_container}>
        <div className={styles.heading_line} />
        <h2 className={styles.heading_title}>{title}</h2>
        <div className={styles.heading_line} />
      </div>
      <div className={styles.section_content}>{children}</div>
    </section>
  );
}

function ProgressBar({ title, progress, color, textColor }) {
  if (progress > 100 || progress < 1) return;

  let n50 = 0,
    n10 = 0,
    n1 = 0;

  if (progress / 50 >= 1) {
    n50 = Math.floor(progress / 50);
    if (progress % 50 >= 10) n10 = Math.floor((progress % 50) / 10);
    if ((progress % 50) % 10 >= 1) n1 = (progress % 50) % 10;
  } else {
    if (progress / 10 >= 1) n10 = Math.floor(progress / 10);
    if (progress % 10 >= 1) n1 = progress % 10;
  }

  const n50Div = (k) => (
    <div
      key={k}
      style={{ backgroundColor: color, flexBasis: "50%" }}
      className={styles.progress_nx}
    ></div>
  );
  const n10Div = (k) => (
    <div
      key={k}
      style={{ backgroundColor: color, flexBasis: "10%" }}
      className={styles.progress_nx}
    ></div>
  );
  const n1Div = (k) => (
    <div
      key={k}
      style={{ backgroundColor: color, flexBasis: "1%" }}
      className={styles.progress_nx}
    ></div>
  );

  return (
    <div
      className={styles.progress_container}
      style={{
        color: textColor,
        height: "1.5rem",
      }}
    >
      {Array.from(Array(n50), (_, k) => n50Div(`n50${k}x${title}`))}
      {Array.from(Array(n10), (_, k) => n10Div(`n10${k}x${title}`))}
      {Array.from(Array(n1), (_, k) => n1Div(`n1${k}x${title}`))}
      <span className={styles.progress_title}>{title}</span>
      <span className={styles.progress_percent}>{progress}</span>
    </div>
  );
}

function CardView({ title, icon, des }) {
  return (
    <div className={styles.card_container}>
      <img className={styles.card_icon} src={icon} alt={title} />
      <h3 className={styles.card_title}>{title}</h3>
      <p className={styles.card_des}>{des}</p>
    </div>
  );
}

function DetailView({ title, link, des, date }) {
  return (
    <div className={styles.detail_container}>
      <h3 className={styles.detail_title}>{title}</h3>

      <p>{des}</p>
      <p className={styles.detail_date}>{date}</p>
      <a href={link}>{link}</a>
    </div>
  );
}

function Spacer() {
  return <div className={styles.spacer}></div>;
}
