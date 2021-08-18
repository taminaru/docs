import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: "Easy to Use",
		Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<>
				Taminaru was designed from the ground up to be easily configurable and
				no latency commands.
			</>
		),
	},
	{
		title: "Focus on What Matters",
		Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<>
				Taminaru lets you focus on <code>engaging</code> with your discord
				server while we handel the grunt work.
			</>
		),
	},
	{
		title: "Powered by TypeScript",
		Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				While Taminaru is not open source, it is build on the{" "}
				<a target="_blank" href="https://discord.js.org/#/">Discord.js</a> framework.
			</>
		),
	},
]

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
