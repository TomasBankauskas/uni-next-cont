# Universal Next.js Contentful Theme

This is a Stackbit Universal theme built with [Next.js](https://nextjs.org/), [Contentful](https://www.contentful.com/).

The starter can be used to generate a static website using [Next.js Static Site Generation Support](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support). The contents of the website are managed by [Contentful](https://www.contentful.com/), a Headless CMS. When the website is generated, [Sourcebit](https://github.com/stackbithq/sourcebit) is used to fetch the site's contents from Contentful and provides it to Next.js as React props. Once Next.js finishes generating the static website, a serverless deployment platform such as [Netlify](https://www.netlify.com) can deploy the static files to its CDN.


## Quick Start 🏎

**Prerequisites**: You'll need to have a GitHub and a Contentful accounts and connect them with Stackbit.

Stackbit will run the following steps for you

- Create a new GitHub repository with the contents of this repository.
- Create a new [Contentful](https://www.contentful.com) project and provision it with the initial contents stored in [export.json](contentful-export/export.json) file.
- Create a new [Netlify](https://www.netlify.com) site connected to the GitHub repo
- Deploy the Netlify site.
- Create a Stackbit project that will allow you edit your website via on-page visual editing experience.

Additionally, Stackbit will connect all three services together:

- Create a "commit" webhook in GitHub repository that will trigger Netlify deployment as soon as new commit is pushed to GitHub.
- Create a "publish" webhook in Contentful that will trigger Netlify deployment as soon as content is published in Contentful.


## Editing Content 📝

Once Stackbit creates a site, you can start editing the content using the free
on-page editing experience provided by the [Stackbit Studio](https://stackbit.com?utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes).

[![](https://i3.ytimg.com/vi/zd9lGRLVDm4/hqdefault.jpg)](https://stackbit.link/project-readme-lead-video)

Here's a few resources to get you started:

- 📺 &nbsp; [Editing Content](https://stackbit.link/project-readme-editing-video)
- 📺 &nbsp; [Adding, Reordering and Deleting Items](https://stackbit.link/project-readme-adding-video)
- 📺 &nbsp; [Collaboration](https://stackbit.link/project-readme-collaboration-video)
- 📺 &nbsp; [Publishing](https://stackbit.link/project-readme-publishing-video)
- 📚 &nbsp; [Stackbit Documentation](https://stackbit.link/project-readme-documentation)

If you need a hand, make sure to check the [Stackbit support page](https://stackbit.link/project-readme-support).


## Develop Locally 🛠

1. Follow the steps in the [Quick Start](#quick-start-) to create a new site.

1. Once the new site is created, you will be redirected to Stackbit Studio where you will be able to edit the content using the free on-page editing experience, and publish new versions of your site.

1. To develop your site locally, clone the new repository created for you by Stackbit. You can get the link to your repository from the settings panel in Stackbit.

1. Install npm dependencies:

    ```shell
    npm install
    ```

1. Set the following environment variables locally.

    - `CONTENTFUL_SPACE_ID` - Contentful Space ID. You can acquire the space ID from Contentful's app URL: https://app.contentful.com/spaces/<SPACE_ID>. You can get the link to your Contentful space from the settings panel in Stackbit.
    - `CONTENTFUL_PREVIEW_TOKEN` - Content Preview API - access token. You can acquire this token from Contentful's app in API Key's section - "Settings" => "API Keys" => "Content delivery / preview tokens" => "Add API Key" or pick one Stackbit generated for you.

    ```shell
    export CONTENTFUL_SPACE_ID=ABC
    export CONTENTFUL_PREVIEW_TOKEN=XYZ
    ```

   When running Next.js in dev mode with the "Preview" token, [Sourcebit](https://github.com/stackbit/sourcebit) will fetch unpublished changes from Contentful, therefore you don't need to pusblish every change you do.

1. Start the Next.js local development server by running:

    ```shell
    npm run dev
    ```

1. Open [http://localhost:3000/](http://localhost:3000/) in the browser to see your site. You can now edit the site's code or the content in Contentful, and the browser will auto-update your changes. 🎉


## Building for production 🏗

To build a static site for production follow these steps:

1. Set the following environment variables:

   - `CONTENTFUL_SPACE_ID` - Contentful Space ID. You can acquire the space ID from Contentful's app URL: https://app.contentful.com/spaces/<SPACE_ID>. You can get the link to your Contentful space from the settings panel in Stackbit.
   - `CONTENTFUL_DELIEVERY_TOKEN` - Content Delivery API - access token. You can acquire this token from Contentful's app in API Key's section - "Settings" => "API Keys" => "Content delivery / preview tokens" => "Add API Key" or pick one Stackbit generated for you.

    ```shell
    export CONTENTFUL_SPACE_ID=ABC
    export CONTENTFUL_DELIEVERY_TOKEN=XYZ
    ```

   Note: when building for production, you should use the **Content Delivery** key to fetch the published content, not the **Content Preview** key.

1. Run the following command to build your site

   ```shell
   npm run build
   ```

1. The exported site will be written to the `out` folder. The contents of this folder can be deployed by serverless deployment platform such as [Netlify](https://www.netlify.com).


## Contributing 🙏

To contribute to this theme please follow the following steps:

1. Clone this repository locally

1. Login into Contentful and create a new empty Space

1. Create new Contentful Personal Access Tokens [here](https://app.contentful.com/account/profile/cma_tokens/)

1. Install dependencies

    ```shell
    npm install
    ```

1. Import Contentful data stored in `contentful-export/export.json` to the new space by running the following command. Replace the `<management_token>` placeholder with your Personal Access Token and the `<space_id>` placeholder with the new space ID.

   ```shell
   ./contentful-export/import.js <management_token> <space_id>
   ```

1. Create "Content Preview API - Access Token" via Contentful app "Settings" => "API Keys" => "Content delivery / preview tokens" => "Add API Key".

1. Define following environment variables to allow Sourcebit to fetch the content
   from Contentful when developing or building the site. Replace {SPACE_ID} with your Space ID and {CPA} with the mew Content Preview API - access token.

   ```shell
   export CONTENTFUL_SPACE_ID={SPACE_ID}
   export CONTENTFUL_PREVIEW_TOKEN={CPA}
   ```

1. Lastly, run the development server (from project folder):

   ```shell
   npm run dev
   ```

   Navigate to [http://localhost:3000](http://localhost:3000) to see the site.
   You can work on the site's code, edit content and define new or update existing content-types in Contentful.

1. Once you finish updating the code and content, export the Contentful data back to the `contentful-export/export.json` file by running the following command. Replace the `<management_token>` placeholder with your Personal Access Token and the `<space_id>` placeholder with the new space ID.

   ```shell
   ./contentful-export/export.js <management_token> <space_id>
   ```

1. Commit, push and submit a pull-request 🎉


## Learn More 📚

To learn more about Stackbit, take a look at the following resources:

- [Stackbit Documentation](https://www.stackbit.com/docs/)
- Configure your site using [stackbit.yaml](https://www.stackbit.com/docs/stackbit-yaml/)

To learn more about Sourcebit, take a look at the following resources:

- [Sourcebit](https://github.com/stackbit/sourcebit) - learn how to use Sourcebit with different Headless-CMS and Static Site Generators.
- [sourcebit-source-contentful](https://github.com/stackbit/sourcebit-source-contentful) - learn more about Sourcebit Contentful Plugin.
- [sourcebit-target-next](https://github.com/stackbit/sourcebit-target-next) - learn more about Sourcebit Next.js Plugin.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Contentful, take a look at the following resources:

- [Contentful Docs](https://www.contentful.com/developers/docs/)
- [Importing and exporting content with the Contentful CLI](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/)

To learn more about Netlify, take a look at the following resources:

- [Netlify Docs](https://docs.netlify.com/)
