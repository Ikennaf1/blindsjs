import Topic from '../../Topic';
import CodeEmbed from '../../CodeEmbed';

const CustomStyling = () => {
    return (
        <Topic title="Adding custom styling" description="Adding custom styling to your dark mode." prev="/docs/v0/quick-start" next="/docs/v0/custom-icons">
            <p>
                Blinds ship with a custom dark mode style. But most times, that will not be what you want.<br />
                You may want a style that conforms with your existing UI/UX. This is the reason why there is the ability to provide custom styling to your dark mode.
            </p><br />

            <p>
                To add custom styling to your dark mode, follow the instructions below.
            </p><br />

            <p>
                First you have to import the <em>setBlindsStyles</em> function. If you're using blinds as a script from CDN, you should skip this step.
            </p><br />
            <CodeEmbed title="setBlindsStyles0" width="100%" max-height="350" script="https://gist.github.com/Ikennaf1/afcdacea739e5513a2e415e738c9191d.js" />            

            <p>
                Use the <em>setBlindsStyles</em> function to set your styles:
            </p><br />
            <CodeEmbed title="setBlindsStyles1" width="100%" max-height="350" script="https://gist.github.com/Ikennaf1/29bb726c5245028592709233a67eeb5b.js" />            

            <p className="mt-6">
                As you can see, there is little difference between normal CSS and the code above. The only difference is that you have to write your styles in JSON format.<br />
                Everything else remains the same, including the CSS selectors, the properties, and their corresponding values.
            </p>
        </Topic>
    );
}

export default CustomStyling;
