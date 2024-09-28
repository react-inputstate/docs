import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Type-safe",
    icon: "🔍",
    description: (
      <>
        React Nuclear was designed from the ground up to be fully type-safe,
        making it easy to make changes to complex inputs.
      </>
    ),
  },
  {
    title: "Composable",
    icon: "🧱",
    description: (
      <>
        It's never been easier to created nested inputs, change the level of
        nesting, or reuse inputs in different nesting contexts.
      </>
    ),
  },
  {
    title: "Performant",
    icon: "🐆",
    description: (
      <>
        Minimize expensive re-renders in complex forms. Changes to parts of your
        input state will not affect unrelated parts.
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <span style={{ fontSize: 60, height: 60 }}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
