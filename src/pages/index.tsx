import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview/intro"
          >
            5 minute intro ⏱️
          </Link>
          <Link
            className="button button--lg"
            to="https://npmjs.org/package/react-nuclear"
          >
            View package
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Create type-safe, composable, and performant input states"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
