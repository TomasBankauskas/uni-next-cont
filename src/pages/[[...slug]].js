import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import Layout from '../components/layout';
import { Sections } from '../components/sections';

function Page(props) {
  return (
    <Layout {...props}>
      {(props.page.sections || []).map((section, idx) => {
        const modelName = section?.__metadata?.modelName;
        if (!modelName || !(modelName in Sections)) {
          console.error(`invalid section type: '${modelName}'`);
          return null;
        }
        const Component = Sections[modelName];
        return <Component key={idx} {...section} />;
      })}
    </Layout>
  );
}

export default withRemoteDataUpdates(Page);

export async function getStaticPaths() {
  const paths = await sourcebitDataClient.getStaticPaths();
  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const pagePath = '/' + (params.slug ? params.slug.join('/') : '');
  const props = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
  return { props };
}
